import * as fs from "fs-extra";
import * as path from "path";

// Define the path to the JSON file relative to the script's execution context.
// Assuming this script is placed in 'docs/tools/scripts/' and the JSON is in 'docs/'.
const JSON_FILE = path.join(__dirname, "../../FRMR.documentation.json");

// --- Interface Definitions (for better type safety and clarity) ---

interface FRDTerm {
  fka: string;
  term: string;
  alts: string[];
  definition: string;
  note?: string;
  updated: any[];
  reference?: string;
  reference_url?: string;
}

interface FRDSection {
  info: any;
  data: {
    both: Record<string, FRDTerm>;
  };
}

interface FRRRuleLevelVariant {
  statement: string;
  primary_key_word: string;
  timeframe_type?: string;
  timeframe_num?: number;
  pain_timeframes?: any[]; // Array of objects, specific structure not needed for this task
}

interface FRRRule {
  fka?: string;
  fkas?: string[];
  statement: string;
  terms?: string[]; // This is the array we will populate with FRD_IDs
  affects: string[];
  name: string;
  primary_key_word: string;
  note?: string;
  examples?: any[];
  following_information?: string[];
  following_information_bullets?: string[];
  updated?: any[];
  varies_by_level?: {
    low?: FRRRuleLevelVariant;
    moderate?: FRRRuleLevelVariant;
    high?: FRRRuleLevelVariant;
  };
}

interface FRRSection {
  info: any;
  data: Record<string, Record<string, FRRRule>>;
}

interface DocumentationJson {
  info: any;
  FRD: FRDSection;
  FRR: Record<string, FRRSection>; // FRR is a record of sections, each containing data
  KSI: Record<
    string,
    {
      // KSI is a record of themes
      id: string;
      web_name: string;
      name: string;
      theme: string;
      indicators: FRRRule[] | Record<string, FRRRule>; // Each indicator within a KSI theme is an FRRRule
    }
  >;
}

/**
 * Escapes special characters in a string to be safely used in a RegExp constructor.
 * This is crucial for terms that might contain characters like '(', ')', '.', etc.
 * @param text The string to escape.
 * @returns The escaped string.
 */
function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Compares two string arrays for equality (order-sensitive).
 * Used to check if the 'terms' array has actually changed before writing.
 * @param a The first array.
 * @param b The second array.
 * @returns True if the arrays are equal, false otherwise.
 */
function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * Main function to process the FRMR.documentation.json file.
 * It builds a lookup for FRD terms and then populates the 'terms' array
 * for each rule in the FRR section with the IDs of referenced FRD terms.
 */
async function processDocumentationJson(): Promise<void> {
  const args = process.argv.slice(2);
  const updateMode = args.includes("--update");

  console.log(`Starting to process FRMR.documentation.json at: ${JSON_FILE}`);
  if (updateMode) {
    console.log("Mode: UPDATE (Changes will be saved to disk)");
  } else {
    console.log("Mode: DRY RUN (No changes will be saved)");
  }

  // 1. Check if the JSON file exists
  if (!fs.existsSync(JSON_FILE)) {
    console.error(`Error: JSON file not found at ${JSON_FILE}`);
    process.exit(1);
  }

  let jsonContent: DocumentationJson;
  try {
    // 2. Read and parse the JSON file
    jsonContent = JSON.parse(fs.readFileSync(JSON_FILE, "utf-8"));
  } catch (e) {
    console.error("Error: Failed to parse JSON file:", e);
    process.exit(1);
  }

  // 3. Build a comprehensive lookup map for FRD terms and their alternatives.
  //    This map stores lowercase term/alt strings as keys and their corresponding FRD_ID as values.
  const frdTermToIdMap = new Map<string, string>(); // Maps lowercase term/alt to the actual primary term string

  for (const frdId in jsonContent.FRD.data.both) {
    const frdEntry = jsonContent.FRD.data.both[frdId];
    if (!frdEntry) continue;
    const primaryTerm = frdEntry.term;
    // Add the primary term to the map
    frdTermToIdMap.set(primaryTerm.toLowerCase(), primaryTerm);
    // Add all alternative terms to the map
    if (frdEntry.alts) {
      for (const alt of frdEntry.alts) {
        frdTermToIdMap.set(alt.toLowerCase(), primaryTerm);
      }
    }
  }

  // 4. Iterate through each rule in the FRR section and identify referenced FRD terms.
  let rulesProcessed = 0;
  let rulesUpdated = 0;

  for (const sectionKey in jsonContent.FRR) {
    const frrSection = jsonContent.FRR[sectionKey];
    if (frrSection && frrSection.data) {
      for (const dataKey in frrSection.data) {
        // e.g., "both", "20x"
        const subSections = frrSection.data[dataKey];
        if (!subSections) continue; // Safety check for sub-sections object
        for (const subSectionKey in subSections) {
          // e.g., "CSO", "OAR"
          const rulesCollection = subSections[subSectionKey];
          if (!rulesCollection) continue; // Safety check for rules collection
          for (const ruleId in rulesCollection) {
            // This is the actual rule ID, e.g., "ADS-CSO-PUB"
            const rule = rulesCollection[ruleId];
            if (!rule) continue; // Safety check for individual rule object
            rulesProcessed++;
            const ruleTextParts: string[] = [];

            // Collect all relevant text fields from the current rule
            if (rule.statement) ruleTextParts.push(rule.statement);
            if (rule.note) ruleTextParts.push(rule.note);
            // Join array elements into a single string for searching
            if (rule.following_information)
              ruleTextParts.push(rule.following_information.join(" "));
            if (rule.following_information_bullets)
              ruleTextParts.push(rule.following_information_bullets.join(" "));

            // Handle statements within 'varies_by_level' for different impact levels
            if (rule.varies_by_level) {
              if (rule.varies_by_level.low?.statement)
                ruleTextParts.push(rule.varies_by_level.low.statement);
              if (rule.varies_by_level.moderate?.statement)
                ruleTextParts.push(rule.varies_by_level.moderate.statement);
              if (rule.varies_by_level.high?.statement)
                ruleTextParts.push(rule.varies_by_level.high.statement);
            }

            // Combine all text parts into a single lowercase string for case-insensitive searching
            const combinedRuleText = ruleTextParts.join(" ").toLowerCase();
            const foundFrdIds = new Set<string>();

            // Iterate through all FRD terms and their alternatives to find matches in the rule's text
            for (const [
              termOrAlt,
              primaryTermString,
            ] of frdTermToIdMap.entries()) {
              const regex = new RegExp(`\\b${escapeRegExp(termOrAlt)}\\b`, "g");
              if (regex.test(combinedRuleText)) {
                foundFrdIds.add(primaryTermString);
              }
            }

            // Convert the set of unique FRD_IDs to a sorted array
            const newTermsArray = Array.from(foundFrdIds).sort();
            const hasChanged = !arraysEqual(rule.terms || [], newTermsArray);

            if (!updateMode) {
              if (hasChanged) {
                console.log(`[WILL UPDATE] FRR ID: ${ruleId}`);
                console.log(`  Current: ${JSON.stringify(rule.terms || [])}`);
                console.log(`  New:     ${JSON.stringify(newTermsArray)}`);
              } else {
                console.log(`[NO CHANGE]   FRR ID: ${ruleId}`);
              }
            } else {
              // Only update the rule if the 'terms' array has changed to avoid unnecessary modifications
              if (hasChanged) {
                rule.terms = newTermsArray;
                rulesUpdated++;
              }
            }
          }
        }
      }
    }
  }

  // 5. Iterate through each indicator in the KSI section and identify referenced FRD terms.
  console.log("\nProcessing KSI indicators...");
  for (const themeKey in jsonContent.KSI) {
    const ksiTheme = jsonContent.KSI[themeKey];
    if (ksiTheme && ksiTheme.indicators) {
      const indicatorsToProcess = Array.isArray(ksiTheme.indicators)
        ? ksiTheme.indicators
        : Object.values(ksiTheme.indicators);

      for (const indicator of indicatorsToProcess) {
        if (!indicator) continue;
        rulesProcessed++; // Count KSI indicators as rules processed
        // Use the indicator's name if available, otherwise a generic ID
        const indicatorId =
          indicator.name || `KSI Indicator (Theme: ${themeKey})`;

        const indicatorTextParts: string[] = [];

        // Collect all relevant text fields from the current indicator
        if (indicator.statement) indicatorTextParts.push(indicator.statement);
        if (indicator.note) indicatorTextParts.push(indicator.note);
        // Join array elements into a single string for searching
        if (indicator.following_information)
          indicatorTextParts.push(indicator.following_information.join(" "));
        if (indicator.following_information_bullets)
          indicatorTextParts.push(
            indicator.following_information_bullets.join(" "),
          );

        // Handle statements within 'varies_by_level' for different impact levels
        if (indicator.varies_by_level) {
          if (indicator.varies_by_level.low?.statement)
            indicatorTextParts.push(indicator.varies_by_level.low.statement);
          if (indicator.varies_by_level.moderate?.statement)
            indicatorTextParts.push(
              indicator.varies_by_level.moderate.statement,
            );
          if (indicator.varies_by_level.high?.statement)
            indicatorTextParts.push(indicator.varies_by_level.high.statement);
        }

        // Combine all text parts into a single lowercase string for case-insensitive searching
        const combinedIndicatorText = indicatorTextParts
          .join(" ")
          .toLowerCase();
        const foundFrdIds = new Set<string>();

        // Iterate through all FRD terms and their alternatives to find matches in the indicator's text
        for (const [termOrAlt, primaryTermString] of frdTermToIdMap.entries()) {
          const regex = new RegExp(`\\b${escapeRegExp(termOrAlt)}\\b`, "g");
          if (regex.test(combinedIndicatorText)) {
            foundFrdIds.add(primaryTermString);
          }
        }

        // Convert the set of unique FRD_IDs to a sorted array
        const newTermsArray = Array.from(foundFrdIds).sort();
        const hasChanged = !arraysEqual(indicator.terms || [], newTermsArray);

        if (!updateMode) {
          if (hasChanged) {
            console.log(`[WILL UPDATE] KSI Indicator: ${indicatorId}`);
            console.log(`  Current: ${JSON.stringify(indicator.terms || [])}`);
            console.log(`  New:     ${JSON.stringify(newTermsArray)}`);
          } else {
            console.log(`[NO CHANGE]   KSI Indicator: ${indicatorId}`);
          }
        } else {
          // Only update the indicator if the 'terms' array has changed to avoid unnecessary modifications
          if (hasChanged) {
            indicator.terms = newTermsArray;
            rulesUpdated++;
          }
        }
      }
    }
  }

  // 5. Save the modified JSON back to the file
  if (updateMode) {
    try {
      await fs.writeFile(
        JSON_FILE,
        JSON.stringify(jsonContent, null, 2),
        "utf-8",
      );
      console.log(`Successfully processed ${rulesProcessed} FRR rules.`);
      console.log(
        `Updated 'terms' array for ${rulesUpdated} rules in ${JSON_FILE}`,
      );
    } catch (e) {
      console.error("Error: Failed to write updated JSON file:", e);
      process.exit(1);
    }
  } else {
    console.log(`Dry run complete. Processed ${rulesProcessed} rules.`);
    console.log("To apply changes, run with --update");
  }
}

// Execute the main function
processDocumentationJson().catch((err) => {
  console.error("An unexpected error occurred:", err);
  process.exit(1);
});
