import * as fs from "fs-extra";
import * as path from "path";

interface FRDItem {
  id: string;
  term: string;
  definition: string;
  alts?: string[];
}

interface FRDData {
  FRD: {
    ALL: FRDItem[];
  };
}

async function generateTooltipDefinitions() {
  try {
    const filePath = path.join(
      __dirname,
      "../../data/FRMR.FRD.fedramp-definitions.json"
    );

    // Read the JSON file
    const data: FRDData = await fs.readJSON(filePath);

    // Process each term in the FRD.ALL array
    data.FRD.ALL.forEach((item) => {
      // Output the main term
      console.log(`*[${item.term}]: ${item.definition}`);

      // Output each alternative term
      if (item.alts && Array.isArray(item.alts)) {
        item.alts.forEach((alt) => {
          console.log(`*[${alt}]: ${item.definition}`);
        });
      }
    });
  } catch (error) {
    console.error("Error generating tooltip definitions:", error);
  }
}

// Run the function
generateTooltipDefinitions();