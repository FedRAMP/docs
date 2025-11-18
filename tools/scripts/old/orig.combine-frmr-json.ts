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

async function main() {
  const pattern = path.join(__dirname, "../../", "FRMR.*.json");
  const files = await glob(pattern);
  if (files.length === 0) {
    console.error("No FRMR JSON files found.");
    return;
  }

  const combined: { info: any; FRR: any; FRD: any; FRA: any; KSI: any } = {
    info: {
      name: "FedRAMP 20x Combined Requirements",
      short_name: "FRMR-ALL",
      current_release: "",
      types: [],
      releases: [],
      // front_matter intentionally omitted
    },
    FRR: {},
    FRD: {},
    FRA: {},
    KSI: {},
  };

  for (const file of files) {
    const doc: FRMRDoc = await fs.readJSON(file);
    // Merge FRR
    if (doc.FRR) {
      for (const key of Object.keys(doc.FRR)) {
        if (!combined.FRR[key]) combined.FRR[key] = {};
        Object.assign(combined.FRR[key], doc.FRR[key]);
      }
    }
    // Merge FRD
    if (doc.FRD) {
      for (const key of Object.keys(doc.FRD)) {
        if (!combined.FRD[key]) combined.FRD[key] = [];
        combined.FRD[key] = combined.FRD[key].concat(doc.FRD[key]);
      }
    }
    // Merge FRA
    if (doc.FRA) {
      for (const key of Object.keys(doc.FRA)) {
        if (!combined.FRA[key]) combined.FRA[key] = {};
        Object.assign(combined.FRA[key], doc.FRA[key]);
      }
    }
    // Merge KSI
    if (doc.KSI) {
      for (const key of Object.keys(doc.KSI)) {
        if (!combined.KSI[key]) combined.KSI[key] = {};
        Object.assign(combined.KSI[key], doc.KSI[key]);
      }
    }
    // Info summary (just take the first file's info as a base)
    if (combined.info.current_release === "" && doc.info) {
      combined.info.current_release = doc.info.current_release;
      combined.info.types = doc.info.types;
      combined.info.releases = [
        {
          id: doc.info.current_release,
          published_date: new Date().toISOString().split("T")[0],
          description: "FedRAMP 20x Combined Requirements",
        },
      ];
      combined.info.name = "FedRAMP 20x Combined Requirements";
      combined.info.short_name = "FRMR-ALL";
      // Do not include front_matter
    }
  }

  // Remove effective and related_rfcs from info.releases
  if (combined.info.releases) {
    combined.info.releases = combined.info.releases.map((r: any) => {
      const { effective, related_rfcs, ...rest } = r;
      return rest;
    });
  }

  const outPath = path.join(__dirname, "../../combined/FRMR.ALL.combined.json");
  await fs.ensureDir(path.dirname(outPath));
  await fs.writeJSON(outPath, combined, { spaces: 2 });
  console.log("Combined FRMR JSON written to", outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
