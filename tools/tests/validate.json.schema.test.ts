import { test, expect } from "bun:test";
import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";
import { glob } from "glob";
import { readFileSync } from "fs";
import {join} from "path";

// Create AJV instance with 2020 schema support
const ajv = new Ajv2020({
  strict: true,
  allErrors: true
});
// Add format validators
addFormats(ajv);

test("All requirement files must validate against the FedRAMP JSON schema", async () => {
  // Load the schema

    const schemaContent = readFileSync(join(import.meta.dir, "../templates/FedRAMP.schema.json"), "utf-8");
    const schema = JSON.parse(schemaContent);
  
  // Compile the schema
  const validate = ajv.compile(schema);

  // Find all JSON files in src-requirements
    const files = await glob(join(import.meta.dir, "../../FRMR*.json"));
    expect(files.length > 0).toBeTruthy();
  
  // Test each file
  files.forEach(file => {
    const content = readFileSync(file, "utf-8");
    const json = JSON.parse(content);
    
    const valid = validate(json);
    
    if (!valid) {
      console.log(`\nValidation errors in ${file}:`);
      console.log(JSON.stringify(validate.errors, null, 2));
    }
    
    expect(valid, `${file} should match schema`).toBe(true);
  });
});