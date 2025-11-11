import * as fs from 'fs-extra';
import * as path from 'path';
import { glob } from 'glob';

interface Definition {
  id: string;
  term: string;
  definition: string;
}

interface DefinitionMap {
  [term: string]: string; // term -> id mapping
}

interface ProposedChange {
  file: string;
  original: string;
  modified: string;
}

async function buildDefinitionMap(): Promise<DefinitionMap> {
  const definitionMap: DefinitionMap = {};
  
  try {
    const files = await glob('../FRMR*.json');
    
    for (const file of files) {
      const jsonContent = await fs.readJSON(file);
      
      if (jsonContent.FRD) {
        Object.keys(jsonContent.FRD).forEach(arrayName => {
          const definitions = jsonContent.FRD[arrayName];
          definitions.forEach((def: Definition) => {
            if (def.term && def.id) {
              definitionMap[def.term.toLowerCase()] = def.id;
            }
          });
        });
      }
    }
    
    return definitionMap;
    
  } catch (error) {
    console.error('Error processing files:', error);
    throw error;
  }
}

async function main() {
  try {
    // Check for --dryrun flag
    const isDryRun = process.argv.includes("--dryrun");

    //console.log('Building definition map...');
    const definitionMap = await buildDefinitionMap();

    //console.log('Definition Map:');
    //console.log('---------------');
    Object.entries(definitionMap)
      .sort(([, a], [, b]) => a.localeCompare(b))
      .forEach(([term, id]) => {
        console.log(`\"${term}\",\"${id}\",`);
      });

    //console.log("Processing complete!");
  } catch (error) {
    console.error('Failed to process definitions:', error);
  }
}

main();