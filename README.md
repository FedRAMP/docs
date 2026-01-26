# FedRAMP Machine Readable (FRMR) Documentation

## Human-readable versions of this documentation are now hosted at https://fedramp.gov/docs!


This repository contains:

1. Machine-readable FedRAMP documentation for 20x
2. Tools and templates to convert FRMR JSON into enriched markdown
3. A [Zensical](https://zensical.org/about)-based static site renderer for viewing 

## Using the JSON Data

The public is strongly encouraged to develop supporting systems that read FRMR docs directly, especially for integration in tools. Nothing beyond the JSON files in the root directory are necessary to begin leveraging these files.

FedRAMP is actively and aggressively developing and improving the JSON structure and associated metadata to improve the value of FRMR docs and may occasionally make breaking changes during the 20x pilots. FedRAMP will be seeking feedback during Phase Two and Phase Three for opportunities to improve and may open this repository up to public contribution.

#### Generate documentation for the JSON Schema
If you are trying to understand the FRMR JSON Schema it might be helpfull to review the documentation generated using [json-schema-for-humans](https://github.com/coveooss/json-schema-for-humans). To generate documentation for the FRMR JSON schema.

    pip install json-schema-for-humans 
    generate-schema-doc --config-file tools/templates/jsfh-config.yaml tools/templates/FedRAMP.schema.json FedRAMP.schema.html

Then open the `FedRAMP.schema.html` file in your browser.