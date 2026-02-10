/**
 * Build OSCAL documents from the FRMR data source.
 *
 * Produces:
 *   - tools/output/oscal/fedramp-frmr-catalog.json   (OSCAL Catalog)
 *   - tools/output/oscal/fedramp-ksi-nist-mapping.json (OSCAL Mapping Collection)
 *
 * Usage: bun run scripts/build-oscal.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { buildCatalog } from "./oscal/catalog-builder";
import { buildMappingCollection } from "./oscal/mapping-builder";
import type { FRMRData } from "./oscal/types";

const ROOT_DIR = process.cwd();
const JSON_FILE = path.join(ROOT_DIR, "../FRMR.documentation.json");
const OUTPUT_DIR = path.join(ROOT_DIR, "output/oscal");

function validateSource(data: FRMRData): void {
  const errors: string[] = [];

  if (!data.info?.version) {
    errors.push("Missing info.version");
  }
  if (!data.FRD?.data) {
    errors.push("Missing FRD.data section");
  }
  if (!data.FRR || Object.keys(data.FRR).length === 0) {
    errors.push("Missing or empty FRR section");
  }
  if (!data.KSI || Object.keys(data.KSI).length === 0) {
    errors.push("Missing or empty KSI section");
  }

  // Verify all requirements have statements (or varies_by_level)
  let reqCount = 0;
  for (const proc of Object.values(data.FRR)) {
    for (const labelMap of Object.values(proc.data)) {
      for (const requirements of Object.values(
        labelMap as Record<string, Record<string, any>>,
      )) {
        for (const [reqId, req] of Object.entries(requirements as Record<string, any>)) {
          reqCount++;
          if (!req.statement && !req.varies_by_level) {
            errors.push(`Requirement ${reqId} has no statement or varies_by_level`);
          }
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error("Source validation failed:");
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log(`  Source validated: ${reqCount} requirements, ${Object.keys(data.KSI).length} KSI domains`);
}

async function main() {
  console.log("Building OSCAL documents from FRMR data...\n");

  // 1. Read source data
  if (!fs.existsSync(JSON_FILE)) {
    console.error(`FRMR data file not found: ${JSON_FILE}`);
    process.exit(1);
  }

  let frmr: FRMRData;
  try {
    frmr = JSON.parse(fs.readFileSync(JSON_FILE, "utf-8"));
  } catch (e) {
    console.error("Failed to parse FRMR JSON:", e);
    process.exit(1);
  }

  // 2. Validate
  console.log("[1/4] Validating source data...");
  validateSource(frmr);

  // 3. Build catalog
  console.log("[2/4] Building OSCAL Catalog...");
  const catalog = buildCatalog(frmr);
  const catalogControlCount =
    (catalog.catalog.groups || []).reduce((sum, g) => {
      const directControls = g.controls?.length ?? 0;
      const subGroupControls = (g.groups || []).reduce(
        (s, sg) => s + (sg.controls?.length ?? 0),
        0,
      );
      return sum + directControls + subGroupControls;
    }, 0);
  console.log(`  Catalog built: ${catalogControlCount} controls, ${catalog.catalog["back-matter"]?.resources.length ?? 0} back-matter resources`);

  // 4. Build mapping
  console.log("[3/4] Building OSCAL Mapping Collection...");
  const mapping = buildMappingCollection(frmr);
  const mapCount = mapping["mapping-collection"].mappings[0]?.maps.length ?? 0;
  console.log(`  Mapping built: ${mapCount} KSI→NIST map entries`);

  // 5. Write output
  console.log("[4/4] Writing output files...");
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const catalogPath = path.join(OUTPUT_DIR, "fedramp-frmr-catalog.json");
  fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
  console.log(`  Wrote: ${catalogPath}`);

  const mappingPath = path.join(OUTPUT_DIR, "fedramp-ksi-nist-mapping.json");
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`  Wrote: ${mappingPath}`);

  console.log("\nOSCAL build complete.");

  // 6. Optional: oscal-cli validation
  const oscalCliPath = path.join(ROOT_DIR, "oscal-cli/bin/oscal-cli");
  if (fs.existsSync(oscalCliPath)) {
    console.log("\nRunning oscal-cli validation...");
    const { execSync } = await import("child_process");

    // oscal-cli requires Java — detect JAVA_HOME from common brew paths
    const env = { ...process.env };
    if (!env.JAVA_HOME) {
      const brewJavaPaths = [
        "/opt/homebrew/Cellar/openjdk@17",
        "/usr/local/Cellar/openjdk@17",
      ];
      for (const base of brewJavaPaths) {
        if (fs.existsSync(base)) {
          const versions = fs.readdirSync(base);
          if (versions.length > 0) {
            env.JAVA_HOME = path.join(base, versions[0]!);
            break;
          }
        }
      }
    }

    try {
      execSync(`${oscalCliPath} validate ${catalogPath}`, { stdio: "inherit", env });
      console.log("  Catalog validation: PASSED");
    } catch {
      console.warn("  Catalog validation: FAILED (see output above)");
    }
    try {
      // Note: oscal-cli 3.0.0 has a known bug with mapping-collection relationship validation
      execSync(`${oscalCliPath} validate ${mappingPath}`, { stdio: "inherit", env });
      console.log("  Mapping validation: PASSED");
    } catch {
      console.warn("  Mapping validation: FAILED (may be oscal-cli known bug for mapping-collection)");
    }
  } else {
    console.log("\nNote: oscal-cli not found at tools/oscal-cli/bin/oscal-cli — skipping schema validation.");
    console.log("Install with: curl -L -o /tmp/oscal-cli.zip https://repo1.maven.org/maven2/dev/metaschema/oscal/oscal-cli-enhanced/3.0.0/oscal-cli-enhanced-3.0.0-oscal-cli.zip && unzip /tmp/oscal-cli.zip -d tools/oscal-cli");
  }
}

main();
