# FedRAMP Machine Readable (FRMR) Documentation

## Human-readable versions of this documentation are now hosted at https://fedramp.gov/docs!


This repository contains:

1. Machine-readable FedRAMP documentation for 20x in the `data` subdirectory
2. Tools and templates to convert FRMR JSON into enriched markdown
3. A [Zensical](https://zensical.org/about)-based static site renderer for viewing 

> **Please Note:** This repository previously contained basic markdown for direct viewing but moving forward FedRAMP will focus on enriched markdown for increased viewability.




## Using the JSON Data

The public is strongly encouraged to develop supporting systems that read FRMR docs directly, especially for integration in tools. Nothing beyond the JSON files in the `data` directory are necessary to begin leveraging these files.

FedRAMP is actively and aggressively developing and improving the JSON structure and associated metadata to improve the value of FRMR docs and may occasionally make breaking changes during the 20x pilots. FedRAMP will be seeking feedback during Phase Two and Phase Three for opportunities to improve and may open this repository up to public contribution.

## Building the Static Site

This is very much a work in progress.

### Installing dependencies
We use several tools to support the development and build process.  At a minimum you will need to install [bun](https://bun.com/docs/installation) and the [zensical](https://zensical.org/docs/get-started/) python library.

    python3 -m venv .venv
    source .venv/bin/activate
    pip install zensical

    curl -fsSL https://bun.com/install | bash

### Testing

There is a simple test suite that can be run with `bun test` once bun is installed.  This test suite will validate the FRMR JSON files in the `data` folder against the schema in `tools/templates/FedRAMP.schema.json`.

### Building

Building the site has two main steps:

1. Generate the enriched Markdown files from the FRMR JSON files.
2. Build the static site using the enriched Markdown files.

#### Generating the enriched markdown files
1. First we generate the Markdown files from the FRMR JSON files using the `tools/scripts/FRMR-to-markdown.ts` script or via `bun run site`.  This script will read the FRMR JSON files in the `data` directory and generate markdown files in the `docs` directory. If you are editing various things, you can also run `bun run watch` to build the Markdown after every change to JSON or the template.

2. Next we can preview the static site by running `zensical serve`. This will build the site and start a local web server.
3. Once you have confirmed the site looks correct, you can copy the `site` directory to the fedramp.gov repo. Contact the dev team for assistance with this step`

#### Generate documentation for the JSON Schema
We are using [json-schema-for-humans](https://github.com/coveooss/json-schema-for-humans) to generate documentation for the FRMR JSON schema.

    pip install json-schema-for-humans 
    generate-schema-doc --config-file tools/templates/jsfh-config.yaml tools/templates/FedRAMP.schema.json docs/schema/FedRAMP.schema.md

## Editing or creating FRMR JSON files
The FRMR JSON files are located in the `data` directory.  The FRMR JSON files are structured according to the [FedRAMP Machine Readable Requirements (FRMR) JSON Schema](https://github.com/FedRAMP/docs/blob/main/tools/templates/FedRAMP.schema.json). The json-editor.html page in the tools directory can be used to edit the FRMR JSON files.

1. Open the json-editor.html page in a browser.
2. Use the `schema` parameter to specify the schema to use.  The default schema is the FedRAMP schema.
3. Use the `data` parameter to specify the FRMR JSON file to edit.  The default file is FRMR-0000.json.
4. Click the `Save Result As File` button to save the edited FRMR JSON file.
5. Click the `Restore to Default` button to restore the default FRMR JSON file.
6. You can then replace the JSON file in the `data` directory with the edited file and commit the changes.
7. You can also use the json-editor.html page to create new FRMR JSON files. Just omit the `data` parameter.