import * as fs from "fs-extra";
import * as path from "path";
import Handlebars from "handlebars";
import { glob } from "glob";

Handlebars.registerHelper('FRDSorted', function(array, options) {
  const sortedArray = [...array].sort((a, b) => {
    const termA = a.term || '';
    const termB = b.term || '';
    if (termA < termB) return -1;
    if (termA > termB) return 1;
    return 0;
  });

  let result = '';
  for (let i = 0; i < sortedArray.length; i++) {
    result += options.fn(sortedArray[i]);
  }
  return result;
});

Handlebars.registerHelper("uppercase", function (str) {
  return str ? str.toUpperCase() : "";
});

async function convertFRMRToMarkdown(
  jsonFilePath: string,
  templateFilePath: string,
  outputFilePath: string,
  baseName: string
) {
  try {
    // Read the JSON data
    const jsonData = await fs.readJSON(jsonFilePath);

    // Read the Handlebars template
    const templateContent = await fs.readFile(templateFilePath, "utf-8");

    // Compile the Handlebars template
    const compiledTemplate = Handlebars.compile(templateContent);

    // Render the template with the JSON data
    const markdown = compiledTemplate({ ...jsonData });

    // Write the markdown to the output file
    await fs.writeFile(outputFilePath, markdown);

    console.log(`Successfully converted ${jsonFilePath} to ${outputFilePath}`);
  } catch (error) {
    console.error("Error converting FRMR to Markdown:", error);
  }
}

(async () => {
  try {
    const pattern = path.join(__dirname, "../../data", "FRMR*.json");
    const files = await glob(pattern);

    if (files.length === 0) {
      console.error("No FRMR JSON files found.");
      return;
    }

    const templateFilePath = path.join(
      __dirname,
      "../templates",
      "zensical-template.hbs"
    );

    for (const jsonFilePath of files) {
      const baseName = path.basename(jsonFilePath, ".json");
      let outputFileName = baseName.startsWith("FRMR-")
        ? baseName.substring(5) + ".md"
        : baseName + ".md";
      
      // Remove "FRMR.TLA." prefix from filenames
      if (outputFileName.startsWith("FRMR.")) {
        const parts = outputFileName.split(".");
        if (parts.length > 2) {
          outputFileName = parts.slice(2).join(".");
        }
      }

      // Determine if the file is from the combined directory
      const isFromCombined = jsonFilePath.includes("/combined/");
      const outputDir = isFromCombined
        ? path.join(__dirname, "../../markdown/combined")
        : // : path.join(__dirname, "../../markdown");
          path.join(__dirname, "../../docs/");

      // Create the combined directory if it doesn't exist
      if (isFromCombined) {
        await fs.ensureDir(outputDir);
      }

      const outputFilePath = path.join(outputDir, outputFileName);

      await convertFRMRToMarkdown(
        jsonFilePath,
        templateFilePath,
        outputFilePath,
        baseName
      );
    }
  } catch (error) {
    console.error("Error processing files:", error);
  }
})();
