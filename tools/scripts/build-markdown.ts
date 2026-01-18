import * as fs from "fs-extra";
import * as path from "path";
import Handlebars from "handlebars";
import { glob } from "glob";

const ROOT_DIR = process.cwd();
const JSON_FILE = path.join(
  ROOT_DIR,
  "../FRMR.requirements-and-recommendations.json",
);
const TEMPLATE_FILE = path.join(ROOT_DIR, "templates/zensical-template.hbs");
const OUTPUT_DIR = path.join(ROOT_DIR, "site/static/markdown/20x");

// Register Helpers
Handlebars.registerHelper("stringEquals", (a, b) => a === b);

Handlebars.registerHelper("ucfirst", (s) => {
  if (typeof s !== "string") return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
});

Handlebars.registerHelper("uppercase", (s) => {
  if (typeof s !== "string") return s;
  return s.toUpperCase();
});

function buildMarkdown() {
  console.log("Building markdown files...");

  if (!fs.existsSync(JSON_FILE)) {
    console.error(`JSON file not found: ${JSON_FILE}`);
    process.exit(1);
  }
  if (!fs.existsSync(TEMPLATE_FILE)) {
    console.error(`Template file not found: ${TEMPLATE_FILE}`);
    process.exit(1);
  }

  let jsonContent;
  try {
    jsonContent = JSON.parse(fs.readFileSync(JSON_FILE, "utf-8"));
  } catch (e) {
    console.error("Failed to parse JSON file:", e);
    process.exit(1);
  }

  const templateSource = fs.readFileSync(TEMPLATE_FILE, "utf-8");
  const template = Handlebars.compile(templateSource);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const sectionKey in jsonContent) {
    const section = jsonContent[sectionKey];
    console.log(`Processing section: ${sectionKey}`);

    try {
      const markdown = template({ ...section, version: "20x" });
      const filename = `${section.info.web_name}.md`;
      const outputPath = path.join(OUTPUT_DIR, filename);

      fs.writeFileSync(outputPath, markdown);
      console.log(`  Generated: ${outputPath}`);
    } catch (e) {
      console.error(`  Error generating markdown for ${sectionKey}:`, e);
    }
  }

  console.log("Markdown build complete.");
}

buildMarkdown();

(async () => {
  try {
    const overrideSrcDir = path.join(__dirname, "../site/content/");
    const overrideDestDir = path.join(__dirname, "../site/static/markdown/");

    // Check if the source directory exists before attempting to copy
    if (await fs.pathExists(overrideSrcDir)) {
      await fs.copy(overrideSrcDir, overrideDestDir, { overwrite: true });
      console.log(`Successfully copied override files to ${overrideDestDir}`);
    } else {
      console.log("No override directory found, skipping copy.");
    }
  } catch (err) {
    console.error("Error copying override files:", err);
  }
})();
