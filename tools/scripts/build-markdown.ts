import * as fs from "fs-extra";
import * as path from "path";
import Handlebars from "handlebars";
import { glob } from "glob";

const ROOT_DIR = process.cwd();
const JSON_FILE = path.join(ROOT_DIR, "../FRMR.documentation.json");
const TEMPLATE_FILE = path.join(ROOT_DIR, "templates/zensical-template.hbs");
const OUTPUT_DIR = path.join(ROOT_DIR, "site/static/markdown");

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

Handlebars.registerHelper("termlink", (s) => {
  if (typeof s !== "string") return s;
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z-]/g, "");
});

Handlebars.registerHelper("controlfreak", (controlId) => {
  if (typeof controlId !== "string") return controlId;

  const baseUrl = "https://controlfreak.risk-redux.io/controls/";

  if (controlId.includes(".")) {
    const [main = "", sub = ""] = controlId.split(".");
    const [prefix = "", num = ""] = main.split("-");

    const paddedMain = num.padStart(2, "0");
    const paddedSub = sub.padStart(2, "0");

    const formatted = `${prefix.toUpperCase()}-${paddedMain}(${paddedSub})`;
    return new Handlebars.SafeString(baseUrl + formatted);
  } else {
    const [prefix = "", num = ""] = controlId.split("-");

    const paddedNum = num.padStart(2, "0");

    const formatted = `${prefix.toUpperCase()}-${paddedNum}`;
    return new Handlebars.SafeString(baseUrl + formatted);
  }
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

  if (!fs.existsSync(path.join(OUTPUT_DIR, "20x"))) {
    fs.mkdirSync(path.join(OUTPUT_DIR, "20x", "key-security-indicators"), {
      recursive: true,
    });
  }
  if (!fs.existsSync(path.join(OUTPUT_DIR, "rev5", "balance"))) {
    fs.mkdirSync(path.join(OUTPUT_DIR, "rev5", "balance"), { recursive: true });
  }

  // process KSI stuff
  const ksiInfo: Record<string, any> = {};
  for (const theme in jsonContent.KSI) {
    const themeData = jsonContent.KSI[theme];
    console.log(`Processing KSI theme: ${theme}`);

    const markdown = template({ ...themeData, version: "20x", type: "KSI" });
    const filename = `${themeData.web_name}.md`;
    const outputPath = path.join(
      OUTPUT_DIR,
      "20x",
      "key-security-indicators",
      filename,
    );

    fs.writeFileSync(outputPath, markdown);

    ksiInfo[theme] = {
      id: themeData.id,
      web_name: themeData.web_name,
      name: themeData.name,
      description: themeData.theme,
    };
    console.log(`  [20x] - Generated: ${outputPath}`);
  }

  // process FRR stuffs
  for (const sectionKey in jsonContent.FRR) {
    const section = jsonContent.FRR[sectionKey];
    console.log(`Processing section: ${sectionKey}`);

    if (section.info.effective["20x"].is) {
      const markdown = template({
        ...section,
        version: "20x",
        type: "FRR",
        ksiInfo: ksiInfo,
      });
      if (section.info.short_name === "KSI") {
        const filename = "index.md";
        const outputPath = path.join(
          OUTPUT_DIR,
          "20x",
          "key-security-indicators",
          filename,
        );
        fs.writeFileSync(outputPath, markdown);
        console.log(`  [20x] - Generated: ${outputPath}`);
      } else {
        const filename = `${section.info.web_name}.md`;
        const outputPath = path.join(OUTPUT_DIR, "20x", filename);
        fs.writeFileSync(outputPath, markdown);
        console.log(`  [20x] - Generated: ${outputPath}`);
      }
    }

    if (section.info.effective.rev5.is != "no") {
      const markdown = template({ ...section, version: "rev5", type: "FRR" });
      const filename = `${section.info.web_name}.md`;
      const outputPath = path.join(OUTPUT_DIR, "rev5", "balance", filename);

      fs.writeFileSync(outputPath, markdown);
      console.log(`  [rev5] Generated: ${outputPath}`);
    }
  }

  // Render Definitions
  console.log(`Processing definitions...`);
  const markdown = template({
    ...jsonContent.FRD,
    version: "20x",
    type: "FRD",
  });
  const filename = `${jsonContent.FRD.info.web_name}.md`;
  let outputPath = path.join(OUTPUT_DIR, "20x", filename);

  fs.writeFileSync(outputPath, markdown);
  console.log(`  [20x] - Generated: ${outputPath}`);
  
    const markdown5 = template({
      ...jsonContent.FRD,
      version: "rev5",
      type: "FRD",
    });
  outputPath = path.join(OUTPUT_DIR, "rev5", "balance", filename);
  fs.writeFileSync(outputPath, markdown5);
  console.log(`  [rev5] - Generated: ${outputPath}`);


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
