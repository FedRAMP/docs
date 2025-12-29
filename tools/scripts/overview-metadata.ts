import * as fs from "fs";
import path from "path";

// thank you gemini for this sweet sauce

/**
 * Type definition for a single rule within the FRR_data object.
 */
interface Rule {
  primary_key_word: string;
  affects: string[];
  impact?: {
    low?: boolean;
    moderate?: boolean;
  };
  // other properties can exist but are not needed for this script
  [key: string]: any;
}

/**
 * Represents a category within the FRR structure (e.g., 'base', 'access_control').
 */
interface FRRCategory {
  requirements?: Rule[];
  [key: string]: any;
}

/**
 * Type definition for the structure of an FRMR JSON file.
 */
interface FRMRFile {
  FRR?: {
    [standard: string]: {
      [category: string]: FRRCategory;
    };
  };
  KSI?: Record<string, KSITheme>;
}

/**
 * Type definitions for the Key Security Indicators (KSI) file structure.
 */
interface KSIIndicator {
  id: string;
  impact: {
    low: boolean;
    moderate: boolean;
  };
  retired?: boolean;
}

interface KSITheme {
  id: string;
  name: string;
  theme: string;
  indicators: KSIIndicator[];
}

/**
 * The data structure to hold the summary of rule counts.
 * Format: { [primary_key_word]: { [affected_entity]: count } }
 */
type Summary = Record<string, Record<string, { low: number; moderate: number }>>;

type KSISummary = Record<string, { low: number; moderate: number }>;

interface FinalOutput {
  fileSummaries?: Record<string, Summary>;
  overallSummary: Summary;
}

interface KSIFinalOutput extends FinalOutput {
  keySecurityIndicatorsSummary?: {
    byTheme: KSISummary;
    overall: { low: number; moderate: number };
  };
}

/**
 * Main function to generate and print the FRMR summary.
 */
async function generateSummary() {
  // Determine output style and verbosity from command-line arguments.
  const args = process.argv.slice(2);
  const outputStyle = args.find(arg => arg === 'json' || arg === 'markdown') || 'json';
  const isSummaryOnly = args.includes('--summary');

  if (!['json', 'markdown'].includes(outputStyle)) {
    console.error(
      `Invalid output style: '${outputStyle}'. Please use 'json' or 'markdown'.`
    );
    return;
  }

  // Correctly locate the 'data' directory from the project root.
  const dataDirPath = path.join(process.cwd(), "..");
  const overallSummary: Summary = {};
  const finalOutput: KSIFinalOutput = {
    overallSummary: {},
  };

  if (!isSummaryOnly) {
    finalOutput.fileSummaries = {};
  }

  try {
    if (!fs.existsSync(dataDirPath)) {
      console.error(`Error: Directory not found at ${dataDirPath}`);
      return;
    }

    const files = await fs.promises.readdir(dataDirPath);
    const jsonFiles = files.filter((file) =>
      file.toLowerCase().endsWith(".json")
    );

    for (const file of jsonFiles) {
      const fileSummary: Summary = {};
      const filePath = path.join(dataDirPath, file);
      const fileContent = await fs.promises.readFile(filePath, "utf-8");
      const jsonData: FRMRFile = JSON.parse(fileContent);

      if (jsonData.FRR) {
        processFRR(jsonData.FRR, fileSummary);
      }

      if (file === "FRMR.KSI.key-security-indicators.json" && jsonData.KSI) {
        finalOutput.keySecurityIndicatorsSummary = processKeySecurityIndicators(jsonData.KSI as Record<string, KSITheme>);
      }

      // Only add the file to the output if it produced a non-empty summary.
      if (Object.keys(fileSummary).length > 0) {
        if (finalOutput.fileSummaries) {
          finalOutput.fileSummaries[file] = fileSummary;
        }
        // Merge the file summary into the overall summary
        mergeSummaries(overallSummary, fileSummary);
      }
    }

    finalOutput.overallSummary = overallSummary;
    if (outputStyle === "json") {
      if (isSummaryOnly) {
        finalOutput.fileSummaries = undefined; // This is safe as we are about to serialize
      }
      console.log(JSON.stringify(finalOutput, null, 2));
    } else {
      printMarkdownOutput(finalOutput, isSummaryOnly);
    }
  } catch (error) {
    console.error("An error occurred while processing files:", error);
  }
}

/**
 * Processes the FRR object from a single file and updates the summary.
 * This function navigates the nested structure to find all 'requirements' arrays.
 * @param frr The FRR object from a JSON file.
 * @param summary The summary object to update.
 */
function processFRR(frr: NonNullable<FRMRFile["FRR"]>, summary: Summary) {
  // e.g., 'ADS', 'VDR'
  for (const standardKey in frr) {
    const standard = frr[standardKey];
    if (standard) {
      for (const categoryKey in standard) {
        const category = standard[categoryKey];
        if (category && Array.isArray(category.requirements)) {
          for (const rule of category.requirements) {
            const { primary_key_word, affects, impact } = rule;

            if (
              primary_key_word &&
              Array.isArray(affects) &&
              affects.length > 0
            ) {
              if (!summary[primary_key_word]) {
                summary[primary_key_word] = {};
              }
              const keywordSummary = summary[primary_key_word];
              if (keywordSummary) {
                for (const entity of affects) {
                  if (!keywordSummary[entity]) {
                    keywordSummary[entity] = { low: 0, moderate: 0 };
                  }
                  const entitySummary = keywordSummary[entity];
                  if (entitySummary) {
                    if (impact?.low) {
                      entitySummary.low++;
                    }
                    if (impact?.moderate) {
                      entitySummary.moderate++;
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

/**
 * Merges a source summary into a target summary.
 * @param target The summary to merge into.
 * @param source The summary to merge from.
 */
function mergeSummaries(target: Summary, source: Summary) {
  for (const keyword in source) {
    if (!target[keyword]) {
      target[keyword] = {};
    }
    const targetKeyword = target[keyword];
    const sourceKeyword = source[keyword];
    if (targetKeyword && sourceKeyword) {
      for (const entity in sourceKeyword) {
        if (!targetKeyword[entity]) {
          targetKeyword[entity] = { low: 0, moderate: 0 };
        }
        const targetEntity = targetKeyword[entity];
        const sourceEntity = sourceKeyword[entity];
        if (targetEntity && sourceEntity) {
          targetEntity.low += sourceEntity.low;
          targetEntity.moderate += sourceEntity.moderate;
        }
      }
    }
  }
}

/**
 * Processes the KSI object from the specific KSI JSON file.
 * @param ksiData The KSI object from the file.
 * @returns A summary of indicators by theme and overall.
 */
function processKeySecurityIndicators(ksiData: Record<string, KSITheme>) {
  const ksiSummary: {
    byTheme: KSISummary;
    overall: { low: number; moderate: number };
  } = {
    byTheme: {},
    overall: { low: 0, moderate: 0 },
  };

  for (const themeKey in ksiData) {
    const theme = ksiData[themeKey];
    if (theme && Array.isArray(theme.indicators)) {
      ksiSummary.byTheme[themeKey] = { low: 0, moderate: 0 };

      const themeSummary = ksiSummary.byTheme[themeKey];
      if (themeSummary) {
        for (const indicator of theme.indicators) {
          if (indicator.retired === true) {
            continue;
          }

          if (indicator.impact?.low === true) {
            themeSummary.low++;
            ksiSummary.overall.low++;
          }
          if (indicator.impact?.moderate === true) {
            themeSummary.moderate++;
            ksiSummary.overall.moderate++;
          }
        }
      }
    }
  }
  return ksiSummary;
}

/**
 * Prints the final summary to the console in Markdown format.
 * @param output The completed summary object.
 */
function printMarkdownOutput(output: KSIFinalOutput, isSummaryOnly: boolean) {
  // --- Key Security Indicators Summary ---
  if (output.keySecurityIndicatorsSummary) {
    console.log("# Key Security Indicators Summary\n");

    // By Theme KSI Table
    console.log("## Key Security Indicator Counts\n");
    console.log("| Theme | Low Impact | Moderate Impact |");
    console.log("|-------|------------|-----------------|");
    for (const theme in output.keySecurityIndicatorsSummary.byTheme) {
      const counts = output.keySecurityIndicatorsSummary.byTheme[theme];
      if (counts) {
        console.log(`| ${theme}   | ${counts.low}          | ${counts.moderate}               |`);
      }
    }
    // Add separator and total row
    console.log("|-------|------------|-----------------|");
    const overall = output.keySecurityIndicatorsSummary.overall;
    console.log(`| **Total** | **${overall.low}**          | **${overall.moderate}**               |`);
    console.log("\n");
  }

  // --- FRMR Rule Summaries ---

  const printFRMRSummaryTable = (summary: Summary) => {
    if (Object.keys(summary).length === 0) {
      console.log("No relevant FRMR data found.\n");
      return;
    }

    // Restructure the data to be entity-first
    const byEntity: Record<string, Record<string, { low: number; moderate: number }>> = {};
    for (const keyword in summary) {
      const keywordSummary = summary[keyword];
      if (keywordSummary) {
        for (const entity in keywordSummary) {
          if (!byEntity[entity]) {
            byEntity[entity] = {};
          }
          const entitySummary = byEntity[entity];
          const keywordValue = keywordSummary[entity];
          if (entitySummary && keywordValue !== undefined) {
            entitySummary[keyword] = keywordValue;
          }
        }
      }
    }

    // Print a table for each entity
    for (const entity in byEntity) {
      console.log(`### Affects: ${entity}\n`);
      console.log("| Keyword      | Low | Moderate |");
      console.log("|--------------|-----|----------|");
      const entityData = byEntity[entity];
      const total = { low: 0, moderate: 0 };
      if (entityData) {
        for (const keyword in entityData) {
          const count = entityData[keyword];
          if (count !== undefined) {
            console.log(`| ${keyword.padEnd(12)} | ${count.low}   | ${count.moderate}      |`);
            total.low += count.low;
            total.moderate += count.moderate;
          }
        }
      }
      console.log("|--------------|-----|----------|");
      console.log(`| **Total**    | **${total.low}**   | **${total.moderate}**      |`);
      console.log("\n");
    }
  };

  // Per-file summaries
  if (!isSummaryOnly && output.fileSummaries) {
    for (const file in output.fileSummaries) {
      const fileSummary = output.fileSummaries[file];
      if (fileSummary) {
        console.log(`## Summary for ${file}\n`);
        printFRMRSummaryTable(fileSummary);
      }
    }
  }

  // Overall summary
  console.log("## Requirement and Recommendation Counts\n");
  printFRMRSummaryTable(output.overallSummary);
}

generateSummary();
