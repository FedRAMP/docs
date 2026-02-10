/**
 * Mapping Builder — produces an OSCAL 1.2.0 Mapping Collection
 * mapping KSI indicators to NIST SP 800-53 Rev 5 controls.
 */

import type {
  FRMRData,
  MapEntry,
  Mapping,
  MappingCollection,
  Metadata,
  OSCALMappingCollection,
  Provenance,
} from "./types";
import { generateUUID } from "./uuid-generator";

const NIST_CATALOG_HREF =
  "https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json";
const FEDRAMP_CATALOG_HREF = "./fedramp-frmr-catalog.json";

function buildMetadata(frmr: FRMRData): Metadata {
  const partyUUID = generateUUID("party", "fedramp-pmo");

  return {
    title: "FedRAMP KSI to NIST SP 800-53 Rev 5 Mapping",
    "last-modified": frmr.info.last_updated.includes("T")
      ? frmr.info.last_updated
      : `${frmr.info.last_updated}T00:00:00.000Z`,
    version: frmr.info.version,
    "oscal-version": "1.2.0",
    roles: [{ id: "publisher", title: "Document Publisher" }],
    parties: [
      {
        uuid: partyUUID,
        type: "organization",
        name: "Federal Risk and Authorization Management Program (FedRAMP)",
        "short-name": "FedRAMP",
        links: [{ href: "https://www.fedramp.gov", rel: "homepage" }],
      },
    ],
    "responsible-parties": [
      {
        "role-id": "publisher",
        "party-uuids": [partyUUID],
      },
    ],
  };
}

function buildProvenance(): Provenance {
  return {
    method: "hybrid",
    "matching-rationale": "functional",
    status: "complete",
    "mapping-description":
      "Maps FedRAMP Key Security Indicators to NIST SP 800-53 Rev 5 controls. " +
      "KSI indicators aggregate multiple NIST controls into security outcomes.",
  };
}

export function buildMappingCollection(
  frmr: FRMRData,
): OSCALMappingCollection {
  const maps: MapEntry[] = [];

  // Iterate over all KSI domains and indicators
  for (const [_domainKey, domain] of Object.entries(frmr.KSI)) {
    for (const [indicatorId, indicator] of Object.entries(domain.indicators)) {
      // Skip indicators without NIST control mappings
      if (!indicator.controls || indicator.controls.length === 0) {
        continue;
      }

      const uniqueControls = Array.from(new Set(indicator.controls)).sort();
      const targets = uniqueControls.map((nistControl) => ({
        type: "control",
        "id-ref": nistControl,
      }));

      maps.push({
        uuid: generateUUID("mapping-entry", indicatorId),
        relationship: "superset-of",
        sources: [
          {
            type: "control",
            "id-ref": indicatorId.toLowerCase(),
          },
        ],
        targets,
      });
    }
  }

  const mapping: Mapping = {
    uuid: generateUUID("mapping", "fedramp-ksi-to-nist"),
    "source-resource": {
      type: "catalog",
      href: FEDRAMP_CATALOG_HREF,
    },
    "target-resource": {
      type: "catalog",
      href: NIST_CATALOG_HREF,
    },
    maps,
  };

  const mappingCollection: MappingCollection = {
    uuid: generateUUID(
      "mapping-collection",
      `fedramp-ksi-nist-${frmr.info.version}`,
    ),
    metadata: buildMetadata(frmr),
    provenance: buildProvenance(),
    mappings: [mapping],
  };

  return { "mapping-collection": mappingCollection };
}
