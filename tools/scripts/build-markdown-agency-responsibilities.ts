import { readFile, writeFile } from "node:fs/promises";

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

type AgencyResponsibilityObject = JsonObject & {
  name?: unknown;
  agency_responsibility?: unknown;
};

function isJsonObject(value: JsonValue): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isAgencyResponsibilityObject(value: JsonValue): value is AgencyResponsibilityObject {
  return isJsonObject(value) && "agency_responsibility" in value;
}

function findAgencyResponsibility(root: JsonValue): Array<[string, AgencyResponsibilityObject]> {
  const results: Array<[string, AgencyResponsibilityObject]> = [];

  function walk(node: JsonValue, parentKey: string | null): void {
    if (Array.isArray(node)) {
      for (const item of node) {
        walk(item, parentKey);
      }
      return;
    }

    if (isJsonObject(node)) {
      if (parentKey !== null && isAgencyResponsibilityObject(node)) {
        results.push([parentKey, node]);
      }

      for (const [key, value] of Object.entries(node)) {
        walk(value, key);
      }
    }
  }

  walk(root, null);
  return results;
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

async function main(): Promise<number> {
  const inputPath = process.argv[2] ?? "../../FRMR.documentation.json";
  const outputPath = process.argv[3] ?? "agency_responsibilities.md";

  const raw = await readFile(inputPath, "utf-8");
  const frmrDocs = JSON.parse(raw) as JsonValue;

  let output = "";

  for (const [objKey, obj] of findAgencyResponsibility(frmrDocs)) {
    const name = typeof obj.name === "string" ? obj.name : "";
    output += `## ${objKey} - ${name}\n\n`;

    for (const item of toStringArray(obj.agency_responsibility)) {
      output += `- ${item}\n`;
    }

    output += "\n";
  }

  await writeFile(outputPath, output, "utf-8");
  console.log(`Wrote ${outputPath}`);
  return 0;
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}