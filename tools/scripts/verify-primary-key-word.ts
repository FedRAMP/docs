import * as fs from "fs";
import * as path from "path";

/**
 * Keywords to look for in the requirement statements.
 * Ordered to ensure "MUST NOT" is matched before "MUST".
 */
const KEYWORDS = ["MUST NOT", "SHOULD NOT", "MUST", "SHOULD", "MAY"];
const KEYWORD_REGEX = new RegExp(`\\b(${KEYWORDS.join("|")})\\b`);

/**
 * Recursively finds all "requirements" arrays within the FRR object structure.
 */
function findRequirements(obj: any): any[] {
  let results: any[] = [];
  if (!obj || typeof obj !== "object") return results;

  if (Array.isArray(obj.requirements)) {
    results.push(...obj.requirements);
  }

  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      key !== "requirements"
    ) {
      results = results.concat(findRequirements(obj[key]));
    }
  }
  return results;
}

/**
 * Main function to scan the directory and validate JSON files.
 */
function validateFrmrFiles() {
const rootDir = path.join(process.cwd(), "..");
  const files = fs
    .readdirSync(rootDir)
    .filter((f) => f.startsWith("FRMR") && f.endsWith(".json"));

  console.log(`Scanning ${files.length} FRMR files...\n`);

  files.forEach((file) => {
    const filePath = path.join(rootDir, file);
    let content;

    try {
      content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } catch (err) {
      console.error(`Error parsing ${file}:`, err);
      return;
    }

    if (!content.FRR) return;

    const requirements = findRequirements(content.FRR);

    requirements.forEach((req) => {
      if (req.statement && req.primary_key_word) {
        // Find the first occurrence of a keyword in the statement
        const match = req.statement.match(KEYWORD_REGEX);
        const extractedKeyword = match ? match[0] : null;

        if (extractedKeyword !== req.primary_key_word) {
          console.warn(`[WARNING] Keyword Mismatch found in ${file}`);
          console.warn(`  ID:               ${req.id}`);
          console.warn(
            `  Statement says:   "${extractedKeyword || "NO KEYWORD FOUND"}"`
          );
          console.warn(`  Primary Key Word: "${req.primary_key_word}"`);
          console.warn(`  Full Statement:   "${req.statement}"`);
          console.warn("-".repeat(50));
        }
      }
    });
  });

  console.log("Validation complete.");
}

validateFrmrFiles();
