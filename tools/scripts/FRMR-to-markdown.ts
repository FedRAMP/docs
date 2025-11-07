import * as fs from "fs-extra";
import * as path from "path";
import * as Handlebars from "handlebars";
import { glob } from "glob";

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
    const markdown = compiledTemplate({ ...jsonData, showControls: false });

    // Write the markdown to the output file
    await fs.writeFile(outputFilePath, markdown);

    console.log(`Successfully converted ${jsonFilePath} to ${outputFilePath}`);
    // This is sloppy but can polish this up another time, renders a separate
    // version of the KSI markdown with controls shown
    if (baseName.startsWith("FRMR.KSI.")) {
      outputFilePath = outputFilePath.replace(/\.md$/, "-with-controls.md");

      // Render the template with the JSON data
      const markdown = compiledTemplate({ ...jsonData, showControls: true });

      // Write the markdown to the output file
      await fs.writeFile(outputFilePath, markdown);

      console.log(
        `Successfully converted ${jsonFilePath} to ${outputFilePath}`
      );
    }
  } catch (error) {
    console.error("Error converting FRMR to Markdown:", error);
  }
}

(async () => {
  try {
    const pattern1 = path.join(__dirname, "../../", "FRMR*.json");
    const pattern2 = path.join(__dirname, "../../combined/", "FRMR*.json");
    const pattern = [pattern1, pattern2];
    const files = await glob(pattern);

    if (files.length === 0) {
      console.error("No FRMR JSON files found.");
      return;
    }

    const templateFilePath = path.join(
      __dirname,
      "../../templates",
      "FRMR.markdown.template.hbs"
    );

    for (const jsonFilePath of files) {
      const baseName = path.basename(jsonFilePath, ".json");
      const outputFileName = baseName.startsWith("FRMR-")
        ? baseName.substring(5) + ".md"
        : baseName + ".md";
      const outputFilePath = path.join(
        __dirname,
        "../../markdown",
        outputFileName
      );

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
