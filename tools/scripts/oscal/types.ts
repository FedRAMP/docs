/**
 * OSCAL 1.2.0 TypeScript Types
 *
 * Interfaces for Catalog and Mapping Collection models,
 * matching the OSCAL 1.2.0 JSON schema structure.
 */

// ── Shared primitives ────────────────────────────────────────────────

export interface Property {
  name: string;
  value: string;
  ns?: string;
  class?: string;
}

export interface Link {
  href: string;
  rel?: string;
  text?: string;
}

export interface DocumentId {
  scheme: string;
  identifier: string;
}

// ── Metadata ─────────────────────────────────────────────────────────

export interface Party {
  uuid: string;
  type: "organization" | "person";
  name: string;
  "short-name"?: string;
  links?: Link[];
}

export interface Role {
  id: string;
  title: string;
}

export interface ResponsibleParty {
  "role-id": string;
  "party-uuids": string[];
}

export interface Metadata {
  title: string;
  "last-modified": string;
  version: string;
  "oscal-version": string;
  roles?: Role[];
  parties?: Party[];
  "responsible-parties"?: ResponsibleParty[];
  props?: Property[];
  links?: Link[];
}

// ── Parts & Controls (Catalog) ───────────────────────────────────────

export interface Part {
  id?: string;
  name: string;
  ns?: string;
  prose?: string;
  props?: Property[];
  parts?: Part[];
  links?: Link[];
}

export interface Control {
  id: string;
  class?: string;
  title: string;
  props?: Property[];
  links?: Link[];
  parts?: Part[];
  controls?: Control[];
}

export interface Group {
  id?: string;
  class?: string;
  title: string;
  props?: Property[];
  parts?: Part[];
  controls?: Control[];
  groups?: Group[];
}

// ── Back Matter ──────────────────────────────────────────────────────

export interface Citation {
  text: string;
  links?: Link[];
  props?: Property[];
}

export interface BackMatterResource {
  uuid: string;
  title?: string;
  description?: string;
  citation?: Citation;
  props?: Property[];
}

export interface BackMatter {
  resources: BackMatterResource[];
}

// ── Catalog ──────────────────────────────────────────────────────────

export interface Catalog {
  uuid: string;
  metadata: Metadata;
  groups?: Group[];
  controls?: Control[];
  "back-matter"?: BackMatter;
}

export interface OSCALCatalog {
  catalog: Catalog;
}

// ── Mapping Collection (OSCAL 1.2.0) ────────────────────────────────

export interface MappingResourceReference {
  type: string;
  href: string;
}

export interface MapEntry {
  uuid: string;
  relationship: string;
  sources: Array<{ type: string; "id-ref": string }>;
  targets: Array<{ type: string; "id-ref": string }>;
  props?: Property[];
}

export interface Mapping {
  uuid: string;
  "source-resource": MappingResourceReference;
  "target-resource": MappingResourceReference;
  maps: MapEntry[];
}

export interface Provenance {
  method: string;
  "matching-rationale": string;
  status: string;
  "mapping-description": string;
}

export interface MappingCollection {
  uuid: string;
  metadata: Metadata;
  provenance: Provenance;
  mappings: Mapping[];
}

export interface OSCALMappingCollection {
  "mapping-collection": MappingCollection;
}

// ── FRMR source data types ──────────────────────────────────────────

export interface FRMRInfo {
  title: string;
  description: string;
  version: string;
  last_updated: string;
}

export interface FRDTermEntry {
  fka?: string;
  term: string;
  alts?: string[];
  definition: string;
  note?: string;
  reference?: string;
  reference_url?: string;
  updated?: Array<{ date: string; comment: string }>;
}

export interface FRRRequirement {
  fka?: string;
  fkas?: string[];
  name?: string;
  statement?: string;
  primary_key_word?: string;
  terms?: string[];
  affects?: string[];
  notes?: string[];
  note?: string;
  examples?: Array<{
    id: string;
    key_tests?: string[];
    examples?: string[];
  }>;
  following_information?: string[];
  following_information_bullets?: string[];
  notification?: Array<{
    party: string;
    method: string;
    target: string;
  }>;
  timeframe_type?: string;
  timeframe_num?: number;
  varies_by_level?: Record<
    string,
    {
      statement: string;
      primary_key_word: string;
      timeframe_type?: string;
      timeframe_num?: number;
    }
  >;
  reference?: string;
  reference_url?: string;
  impact?: string | Record<string, boolean>;
  danger?: string;
  updated?: Array<{ date: string; comment: string }>;
}

export interface FRRProcessInfo {
  name: string;
  short_name: string;
  web_name: string;
  effective: Record<string, any>;
  front_matter: {
    authority?: Array<{
      reference: string;
      reference_url?: string;
      description: string;
      delegation?: string;
      delegation_url?: string;
    }>;
    purpose?: string;
    expected_outcomes?: string[];
  };
  labels?: Record<
    string,
    {
      description: string;
      name: string;
    }
  >;
}

export interface FRRProcess {
  info: FRRProcessInfo;
  data: Record<string, Record<string, Record<string, FRRRequirement>>>;
}

export interface KSIIndicator {
  fka?: string;
  name: string;
  statement: string;
  reference?: string;
  reference_url?: string;
  controls?: string[];
  terms?: string[];
  updated?: Array<{ date: string; comment: string }>;
}

export interface KSIDomain {
  id: string;
  name: string;
  web_name: string;
  short_name: string;
  theme: string;
  indicators: Record<string, KSIIndicator>;
}

export interface FRMRData {
  info: FRMRInfo;
  FRD: {
    info: FRRProcessInfo;
    data: Record<string, Record<string, FRDTermEntry>>;
  };
  FRR: Record<string, FRRProcess>;
  KSI: Record<string, KSIDomain>;
}
