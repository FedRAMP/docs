import * as fs from "fs-extra";
import * as path from "path";
import { glob } from "glob";

interface FRMRDoc {
  info: any;
  FRR?: Record<string, any>;
  FRD?: Record<string, any>;
  FRA?: Record<string, any>;
  KSI?: Record<string, any>;
}

function createBaseDocument(impact: string): any {
  return {
    info: {
      name: `FedRAMP 20x ${impact} Impact Requirements`,
      short_name: `FRMR-${impact.toUpperCase()}`,
      current_release: "",
      types: [],
      releases: [],
    },
    FRR: {},
    FRD: {},
    FRA: {},
    KSI: {},
  };
}

function filterRequirementsByImpact(doc: any, impactLevel: string): any {
  const filtered = JSON.parse(JSON.stringify(doc)); // Deep clone

  // Filter FRR requirements
  if (filtered.FRR) {
    for (const key of Object.keys(filtered.FRR)) {
      for (const section of Object.keys(filtered.FRR[key])) {
        const sectionData = filtered.FRR[key][section];

        // Check if the section itself has an impact level specified
        if (sectionData?.impact && sectionData.impact[impactLevel] === false) {
          // If the section is explicitly marked as not for this impact level, remove it
          delete filtered.FRR[key][section];
          continue;
        }

        // Filter requirements within the section
        if (sectionData?.requirements) {
          // If section has impact=false for this level, filter out all requirements
          if (sectionData?.impact?.[impactLevel] === false) {
            sectionData.requirements = [];
          } else {
            sectionData.requirements = sectionData.requirements.filter(
              (req: any) => req.impact?.[impactLevel] === true
            );
          }
        }
      }
    }
  }

  // Filter KSI requirements
  if (filtered.KSI) {
    for (const key of Object.keys(filtered.KSI)) {
      for (const section of Object.keys(filtered.KSI[key])) {
        const sectionData = filtered.KSI[key][section];

        // Check if the section itself has an impact level specified
        if (sectionData?.impact && sectionData.impact[impactLevel] === false) {
          // If the section is explicitly marked as not for this impact level, remove it
          delete filtered.KSI[key][section];
          continue;
        }

        // Filter requirements within the section
        if (sectionData?.requirements) {
          // If section has impact=false for this level, filter out all requirements
          if (sectionData?.impact?.[impactLevel] === false) {
            sectionData.requirements = [];
          } else {
            sectionData.requirements = sectionData.requirements.filter(
              (req: any) => req.impact?.[impactLevel] === true
            );
          }
        }
      }
    }
  }

  // Clean up empty sections
  for (const docType of ["FRR", "KSI"]) {
    if (filtered[docType]) {
      for (const key of Object.keys(filtered[docType])) {
        // Remove sections that have no requirements
        for (const section of Object.keys(filtered[docType][key])) {
          if (filtered[docType][key][section]?.requirements?.length === 0) {
            delete filtered[docType][key][section];
          }
        }
        // Remove keys that have no sections
        if (Object.keys(filtered[docType][key]).length === 0) {
          delete filtered[docType][key];
        }
      }
    }
  }

  return filtered;
}

async function main() {
  const pattern = path.join(__dirname, "../../", "FRMR.*.json");
  const inputFiles = await glob(pattern);
  if (inputFiles.length === 0) {
    console.error("No FRMR JSON files found.");
    return;
  }

  // Create documents for each impact level and combined
  const combined = createBaseDocument("All");
  const lowImpact = createBaseDocument("Low");
  const moderateImpact = createBaseDocument("Moderate");
  const highImpact = createBaseDocument("High");

  for (const file of inputFiles) {
    const doc: FRMRDoc = await fs.readJSON(file);

    // Process for combined document
    if (doc.FRR) {
      for (const key of Object.keys(doc.FRR)) {
        if (!combined.FRR[key]) combined.FRR[key] = {};
        Object.assign(combined.FRR[key], doc.FRR[key]);
      }
    }
    if (doc.FRD) {
      for (const key of Object.keys(doc.FRD)) {
        if (!combined.FRD[key]) combined.FRD[key] = [];
        combined.FRD[key] = combined.FRD[key].concat(doc.FRD[key]);
      }
    }
    if (doc.FRA) {
      for (const key of Object.keys(doc.FRA)) {
        if (!combined.FRA[key]) combined.FRA[key] = {};
        Object.assign(combined.FRA[key], doc.FRA[key]);
      }
    }
    if (doc.KSI) {
      for (const key of Object.keys(doc.KSI)) {
        if (!combined.KSI[key]) combined.KSI[key] = {};
        Object.assign(combined.KSI[key], doc.KSI[key]);
      }
    }

    // Update info for all documents
    const documents = [combined, lowImpact, moderateImpact, highImpact];
    for (const document of documents) {
      if (doc.info) {
        document.info.current_release = "Untracked";
        document.info.types = doc.info.types;
        document.info.releases = [
          {
            id: "Untracked",
            published_date: new Date().toISOString().split("T")[0],
            description: document.info.name,
          },
        ];
      }
    }
  }

  // Create impact-specific documents
  const lowDoc = filterRequirementsByImpact(combined, "low");
  const moderateDoc = filterRequirementsByImpact(combined, "moderate");
  const highDoc = filterRequirementsByImpact(combined, "high");

  // Remove effective and related_rfcs from info.releases for all documents
  const documents = [combined, lowDoc, moderateDoc, highDoc];
  for (const doc of documents) {
    if (doc.info.releases) {
      doc.info.releases = doc.info.releases.map((r: any) => {
        const { effective, related_rfcs, ...rest } = r;
        return rest;
      });
    }
  }

  // Write all documents
  const baseOutPath = path.join(__dirname, "../../combined");
  await fs.ensureDir(baseOutPath);

  interface OutputFile {
    filename: string;
    doc: any;
  }

  const outputFiles: OutputFile[] = [
    { filename: "FRMR.ALL.combined.json", doc: combined },
    { filename: "FRMR.LOW.combined.json", doc: lowDoc },
    { filename: "FRMR.MOD.combined.json", doc: moderateDoc },
    { filename: "FRMR.HIGH.combined.json", doc: highDoc },
  ];

  for (const file of outputFiles) {
    const outPath = path.join(baseOutPath, file.filename);
    await fs.writeJSON(outPath, file.doc, { spaces: 2 });
    console.log(`${file.doc.info.name} written to`, outPath);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
