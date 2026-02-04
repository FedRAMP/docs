import * as fs from "fs";
import * as path from "path";

/**
 * Keywords to look for in the requirement statements.
 * Ordered to ensure "MUST NOT" is matched before "MUST".
 */
const KEYWORDS = ["MUST NOT", "SHOULD NOT", "MUST", "SHOULD", "MAY"];
const KEYWORD_REGEX = new RegExp(`\\b(${KEYWORDS.join("|")})\\b`);

/**
 * Validates a single requirement object (or sub-object like a level variant).
 */
function validateRequirementObject(
  obj: any,
  id: string,
  context: string,
): boolean {
  if (!obj || typeof obj !== "object") return false;

  if (
    typeof obj.statement === "string" &&
    typeof obj.primary_key_word === "string"
  ) {
    // Find the first occurrence of a keyword in the statement
    const match = obj.statement.match(KEYWORD_REGEX);
    const extractedKeyword = match ? match[0] : null;

    if (extractedKeyword !== obj.primary_key_word) {
      console.warn(`[WARNING] Keyword Mismatch found in ${context}`);
      console.warn(`  ID:               ${id}`);
      console.warn(
        `  Statement says:   "${extractedKeyword || "NO KEYWORD FOUND"}"`,
      );
      console.warn(`  Primary Key Word: "${obj.primary_key_word}"`);
      console.warn(`  Full Statement:   "${obj.statement}"`);
      console.warn("-".repeat(50));
      return true;
    }
  }
  return false;
}

/**
 * Main function to scan the file and validate JSON content.
 */
function validateFRMRFile() {
  const rootDir = path.join(process.cwd(), "..");
  const fileName = "FRMR.documentation.json";
  const filePath = path.join(rootDir, fileName);

  console.log(`Scanning ${fileName}...\n`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  let content;
  try {
    content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
    console.error(`Error parsing ${fileName}:`, err);
    return;
  }

  let errorsFound = false;

  // Iterate through top-level sections (e.g., "ADS", "CCM")
  for (const sectionKey in content) {
    if (Object.prototype.hasOwnProperty.call(content, sectionKey)) {
      const section = content[sectionKey];

      // Check if section has 'data' property
      if (section && section.data && typeof section.data === "object") {
        // Iterate through data contexts (e.g., "both", "20x")
        for (const contextKey in section.data) {
          if (Object.prototype.hasOwnProperty.call(section.data, contextKey)) {
            const requirements = section.data[contextKey];

            // Iterate through individual requirements (e.g., "ADS-CSO-PUB")
            for (const reqId in requirements) {
              if (Object.prototype.hasOwnProperty.call(requirements, reqId)) {
                const req = requirements[reqId];

                // Validate the main requirement
                if (
                  validateRequirementObject(
                    req,
                    reqId,
                    `${fileName} -> ${sectionKey} -> ${contextKey}`,
                  )
                ) {
                  errorsFound = true;
                }

                // Check for varies_by_level
                if (
                  req.varies_by_level &&
                  typeof req.varies_by_level === "object"
                ) {
                  for (const level in req.varies_by_level) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        req.varies_by_level,
                        level,
                      )
                    ) {
                      if (
                        validateRequirementObject(
                          req.varies_by_level[level],
                          reqId,
                          `${fileName} -> ${sectionKey} -> ${contextKey} -> ${level}`,
                        )
                      ) {
                        errorsFound = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (!errorsFound) {
    console.log("No mismatches found - good job. :)");
  }
  console.log("Validation complete.");
}

validateFRMRFile();
