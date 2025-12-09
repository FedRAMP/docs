# FedRAMP Machine Readable (FRMR) Documentation

## Human-readable versions of this documentation are now hosted at https://fedramp.gov/docs!


This repository contains:

1. Machine-readable FedRAMP documentation for 20x
2. Tools and templates to convert FRMR JSON into enriched markdown
3. A [Zensical](https://zensical.org/about)-based static site renderer for viewing 

> **Please Note:** This repository previously contained basic markdown for direct viewing but moving forward FedRAMP will focus on enriched markdown for increased viewability.

## Using the JSON Data

The public is strongly encouraged to develop supporting systems that read FRMR docs directly, especially for integration in tools. Nothing beyond the JSON files in the root directory are necessary to begin leveraging these files.

FedRAMP is actively and aggressively developing and improving the JSON structure and associated metadata to improve the value of FRMR docs and may occasionally make breaking changes during the 20x pilots. FedRAMP will be seeking feedback during Phase Two and Phase Three for opportunities to improve and may open this repository up to public contribution.

## Building the Static Site

This is very much a work in progress.

### Installing dependencies
We use several tools to support the development and build process.  At a minimum you will need to install [bun](https://bun.com/docs/installation) and the [zensical](https://zensical.org/docs/get-started/) python library. **Zensical requires a python version >= 3.10.**

    python3 -m venv .venv
    source .venv/bin/activate
    pip install zensical

    curl -fsSL https://bun.com/install | bash

### Testing

There is a simple test suite that can be run with `bun test` once bun is installed. This test suite will validate the FRMR JSON files in the root folder against the schema in `tools/templates/FedRAMP.schema.json`.

    cd tools
    bun test

### Building

There are separate 20x and Rev5 sites that can be previewed or built with zensical. 

The build process requires generating new Markdown files from the FRMR JSON. This is done with the `build` command in `tools/bunfile.toml`. The output of this command is placed in the `tools/site/static/markdown` directory. zensical will use these files to generate the static site.

You can use the `build.sh` script to execute the tests and run the complete build process. 

#### Preview for Rev5

```
cd tools/site
zensical serve
zensical serve --config-file zensical-rev5.toml
```
https://localhost:8001/docs/rev5

#### Preview for 20x

```
cd tools/site
zensical serve
zensical serve --config-file zensical-20x.toml
```
https://localhost:8000/docs/20x


#### Generate documentation for the JSON Schema
If you are trying to understand the FRMR JSON Schema it might be helpfull to review the documentation generated using [json-schema-for-humans](https://github.com/coveooss/json-schema-for-humans). To generate documentation for the FRMR JSON schema.

    pip install json-schema-for-humans 
    generate-schema-doc --config-file tools/templates/jsfh-config.yaml tools/templates/FedRAMP.schema.json FedRAMP.schema.html

Then open the `FedRAMP.schema.html` file in your browser.