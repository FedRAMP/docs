import * as fs from 'fs-extra';
import * as path from 'path';
import { glob } from 'glob';

interface DocInfo {
  name: string;
  short_name: string;
  current_release: string;
  types: string[];
  releases: Array<{
    id?: string;
    published_date: string;
    description: string;
  }>;
}

interface JsonContent {
  info: DocInfo;
}

async function generateDocsTable(): Promise<void> {
  try {
    // Find all FRMR*.json files in root directory
    const files = await glob("../FRMR*.json");

    // Collect all rows first
    const rows: Array<{ row: string[]; publishedDate: string }> = [];

    for (const file of files) {
      const jsonContent: JsonContent = await fs.readJSON(file);
      const { info } = jsonContent;

      if (!info || !info.releases || !info.releases[0]) {
        console.warn(`Warning: Missing required info in ${file}`);
        continue;
      }

      const baseName = path.basename(file, ".json");
      const markdownLink = `https://github.com/FedRAMP/docs/tree/main/markdown/${baseName}.md`;
      const pdfLink = `https://github.com/FedRAMP/docs/blob/main/pdf/${baseName}.pdf`;

      // Build table row with linked materials
      const row = [
        `[${info.name} (${info.short_name})](${markdownLink})`,
        `[[PDF]](${pdfLink})`,
        info.releases[0].description || "N/A",
        info.releases[0].id || info.current_release || "N/A",
        info.releases[0].published_date || "N/A",
      ].map((cell) => cell.replace(/\|/g, "\\|")); // Escape any pipe characters

      rows.push({
        row,
        publishedDate: info.releases[0].published_date || "9999-99-99", // Default date for sorting if N/A
      });
    }

    // Sort rows by published date (newest first)
    rows.sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

    // Generate markdown with sorted rows
    let tableMarkdown = `| Markdown | PDF | Description | Version | Published Date |\n`;
    tableMarkdown += `|-----------|---|-------------|---------|----------------|\n`;
    rows.forEach(({ row }) => {
      tableMarkdown += `| ${row.join(" | ")} |\n`;
    });

    // Output to console
    console.log(tableMarkdown);
  } catch (error) {
    console.error('Error generating docs table:', error);
  }
}

// Execute the function
generateDocsTable();