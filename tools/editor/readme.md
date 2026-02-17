# FedRAMP Machine Readable Documentation JSON Editor

The `tools/editor` subproject provides a browser-based GUI for editing the `FRMR.documentation.json` file. It uses the [json-editor](https://github.com/json-editor/json-editor) library to generate a form from a JSON Schema, making it easier to maintain and update the machine-readable documentation.

## Overview

The editor is a standalone HTML page (`index.html`) that:
- Loads a JSON Schema to define the form structure and validation rules.
- Loads existing JSON data to populate the form.
- Provides a user-friendly interface for editing complex nested JSON structures.
- Supports downloading the updated JSON file.
- Includes (experimental) support for saving changes directly to a GitHub repository via the GitHub API.

## Technologies Used

- **[JSON Editor](https://github.com/json-editor/json-editor)**: The core library that generates the form from the schema.
- **[bootstrap5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)**: A lightweight CSS framework for styling.
- **[Handlebars.js](https://handlebarsjs.com/)**: Used by JSON Editor for templating.
- **[SimpleMDE](https://simplemde.com/)**: A markdown editor used for long text fields within the JSON.

## Usage

To use the editor, open `index.html` in a web browser. By default, it attempts to load the schema and data from the main FedRAMP `docs` repository on GitHub.

### URL Parameters

You can customize the schema and data sources using URL parameters:

- `schema`: URL to the JSON Schema file (default: `https://raw.githubusercontent.com/FedRAMP/docs/refs/heads/main/tools/templates/FedRAMP.schema.json`)
- `data`: URL to the JSON data file to edit (default: `https://raw.githubusercontent.com/FedRAMP/docs/refs/heads/main/FRMR.documentation.json`)

Example:
`index.html?data=https://path/to/your/data.json&schema=https://path/to/your/schema.json`

## Features

### Editing and Validation
The editor automatically validates the input against the provided JSON Schema. A validation indicator at the bottom of the page (if present) or within the form fields will show if the current data is valid.

### Download
The **Download** button allows you to save the current state of the editor as a JSON file to your local machine.

### Restore to Default
The **Restore to Default** button resets the editor content to the initial data loaded from the `data` URL.

### Save to GitHub (Experimental)
The editor contains logic to push changes directly to a GitHub repository. 
> **Note:** Currently, the `index.html` requires `gh-token`, `gh-owner`, and `gh-repo` input elements to be present for this feature to work via the UI. If they are not visible in the HTML, this feature may require manual injection or further development of the UI components.

## Development

Since this is a client-side application, you can test changes by simply refreshing `index.html` in your browser. If you are making changes to the schema or data files locally, you may need to serve them via a local web server (e.g., `python -m http.server`) and point the editor to the local URLs using the parameters described above.
