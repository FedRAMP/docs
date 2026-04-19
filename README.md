# Documentation Tools

This directory contains the scripts and configuration used to generate the human-readable documentation site from the machine-readable FRMR JSON source files.

> This content is only relevant to the FedRAMP team.

## Prerequisites

- [Bun](https://bun.sh/)
- Python 3
- [Zensical](https://zensical.org/) (installed globally or available in path)

## Installation

Install dependencies using Bun:

```bash
bun install
```
Install zensical using pip:

```bash
pip install zensical
```

## Scripts

The `package.json` includes several scripts to assist with development and building the site:

### `bun run watch`
Starts a development watcher using `nodemon`. It watches for changes in:
- `../FRMR*.json` (The source data)
- `templates/zensical-template.hbs` (The markdown template)
- `site/content/**/*` (Manual content)

When a change is detected, it automatically re-runs the markdown generation script (`scripts/build-markdown.ts`).

### `bun run build`
Performs a full production build of the documentation site. The steps include:
1. **Clean**: Removes previously generated markdown files.
2. **Generate**: Runs `scripts/build-markdown.ts` to create markdown from JSON.
3. **Build Site**: Runs `zensical build --clean` inside the `site` directory.
4. **Post-process**: Runs `python postprocess.py` for any final adjustments.

### `bun run clean`
Removes all generated markdown files located in `site/static/markdown/`.

## Site Structure

The documentation site is structured to separate manual content from generated content:

- **`site/content`**: This directory contains permanent, manually written content. These files are maintained directly by contributors.
- **`site/static`**: This directory contains static assets. During the build process, generated markdown files are placed into `site/static/markdown`.

## Markdown Generation

The core of the documentation generation lies in the transformation of the FRMR JSON data into readable Markdown files.

### `scripts/build-markdown.ts`
This TypeScript script is responsible for reading the `FRMR.documentation.json` (and other matching JSON files) from the project root. It parses the JSON structure and maps the data to the Handlebars template.

### `templates/zensical-template.hbs`
This is the Handlebars template used by the build script. It defines the layout and formatting of the generated Markdown files. The script iterates through the JSON data, applying this template to create consistent, formatted documentation pages for the static site generator.

## Doing Basic Development Stuff

To do basic development stuff, such as make changes to the prepared content or mess with the main JSON,
markdown formatting, etc., you'll basically want to have the following active.

**Terminal 1:**

Open a shell session in `docs/tools` and:

```
bun run watch
```

**Terminal 2:**

Open a shell session in `docs/tools/site` and:

```
zensical serve
```

**Browser 1:**

Go to https://localhost:8000 and watch the magic happen as you make changes.

## Building and Integrating with fedramp.gov

To integrate with the fedramp.gov site you will need to build the latest and copy it over to that repo for now. Build steps include:

```
cd tools
bun run build

# check out the fedramp.gov repo, sync develop, create new branch

cd static/docs
/bin/rm -rf *
cp -pr ~/github/docs/tools/site/static/html/* ./

# commit, push, PR into develop, wait for develop to be deployed
```

Then copy everything from `docs/tools/static/html/` to `fedramp.gov/static/docs/` in the fedramp.gov repo and PR as normal.



