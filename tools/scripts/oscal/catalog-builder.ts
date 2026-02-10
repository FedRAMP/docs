/**
 * Catalog Builder — converts FRMR data into an OSCAL 1.2.0 Catalog.
 *
 * Structure:
 *   catalog
 *   ├── metadata
 *   ├── groups (one per FRR process)
 *   │   └── controls (one per requirement)
 *   ├── group "key-security-indicators"
 *   │   └── groups (one per KSI domain)
 *   │       └── controls (one per indicator)
 *   └── back-matter (one resource per FRD term)
 */

import type {
  BackMatter,
  BackMatterResource,
  Catalog,
  Control,
  FRDTermEntry,
  FRMRData,
  FRRProcess,
  FRRRequirement,
  Group,
  KSIDomain,
  Link,
  Metadata,
  OSCALCatalog,
  Part,
  Property,
} from "./types";
import { generateUUID } from "./uuid-generator";

/** FedRAMP namespace for custom properties and parts */
const FEDRAMP_NS = "https://fedramp.gov/ns/oscal";

const NIST_CATALOG_HREF =
  "https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json";

/** Create a FedRAMP-namespaced property */
function fProp(name: string, value: string): Property {
  return { name, value, ns: FEDRAMP_NS };
}

// ── FRD term → resource UUID lookup ──────────────────────────────────

/** Build a map from term name (lowercase) → resource UUID for linking */
function buildTermUUIDMap(
  frdData: Record<string, Record<string, FRDTermEntry>>,
): Map<string, string> {
  const map = new Map<string, string>();
  for (const applicability of Object.keys(frdData)) {
    for (const [termId, entry] of Object.entries(frdData[applicability]!)) {
      const uuid = generateUUID("frd-term", termId);
      map.set(entry.term.toLowerCase(), uuid);
      if (entry.alts) {
        for (const alt of entry.alts) {
          map.set(alt.toLowerCase(), uuid);
        }
      }
    }
  }
  return map;
}

/** Deduplicate links by href+rel combination */
function deduplicateLinks(links: Link[]): Link[] {
  const seen = new Set<string>();
  return links.filter((link) => {
    const key = `${link.href}|${link.rel || ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ── Collect all requirement IDs to detect duplicates ─────────────────

/** Pre-scan to find requirement IDs that appear under multiple applicability levels */
function findDuplicateReqIds(process: FRRProcess): Set<string> {
  const idToApplicabilities = new Map<string, string[]>();
  for (const [applicability, labelMap] of Object.entries(process.data)) {
    for (const requirements of Object.values(
      labelMap as Record<string, Record<string, FRRRequirement>>,
    )) {
      for (const reqId of Object.keys(requirements)) {
        const existing = idToApplicabilities.get(reqId) || [];
        existing.push(applicability);
        idToApplicabilities.set(reqId, existing);
      }
    }
  }
  const dupes = new Set<string>();
  for (const [id, apps] of idToApplicabilities) {
    if (apps.length > 1) dupes.add(id);
  }
  return dupes;
}

// ── Requirement → Control ────────────────────────────────────────────

function buildRequirementControl(
  reqId: string,
  req: FRRRequirement,
  applicability: string,
  label: string,
  termMap: Map<string, string>,
  needsSuffix: boolean,
): Control {
  // If this ID appears under multiple applicability levels, suffix to ensure uniqueness
  const controlId = needsSuffix
    ? `${reqId.toLowerCase()}_${applicability}`
    : reqId.toLowerCase();

  const props: Property[] = [];
  const links: Link[] = [];
  const parts: Part[] = [];

  // Label prop — "label" is an OSCAL-standard prop name for controls
  props.push({ name: "label", value: label });

  // FedRAMP-specific props (namespaced)
  props.push(fProp("applicability", applicability));

  if (req.fka) {
    props.push(fProp("fka", req.fka));
  }
  if (req.fkas) {
    for (const fka of req.fkas) {
      props.push(fProp("fka", fka));
    }
  }

  if (req.affects) {
    for (const a of req.affects) {
      props.push(fProp("affects", a));
    }
  }

  // Handle varies_by_level vs. flat requirement
  if (req.varies_by_level) {
    const levelParts: Part[] = [];
    for (const [level, levelData] of Object.entries(req.varies_by_level)) {
      const levelProps: Property[] = [
        fProp("level", level),
        fProp("keyword", levelData.primary_key_word),
      ];
      if (levelData.timeframe_type) {
        levelProps.push(fProp("timeframe-type", levelData.timeframe_type));
      }
      if (levelData.timeframe_num !== undefined) {
        levelProps.push(
          fProp("timeframe-num", String(levelData.timeframe_num)),
        );
      }
      levelParts.push({
        id: `${controlId}_stmt_${level}`,
        name: "item",
        prose: levelData.statement,
        props: levelProps,
      });
    }
    parts.push({
      id: `${controlId}_stmt`,
      name: "statement",
      parts: levelParts,
    });
  } else {
    if (req.primary_key_word) {
      props.push(fProp("keyword", req.primary_key_word));
    }

    if (req.timeframe_type) {
      props.push(fProp("timeframe-type", req.timeframe_type));
    }
    if (req.timeframe_num !== undefined) {
      props.push(fProp("timeframe-num", String(req.timeframe_num)));
    }

    if (req.statement) {
      const stmtPart: Part = {
        id: `${controlId}_stmt`,
        name: "statement",
        prose: req.statement,
      };

      const itemParts: Part[] = [];
      if (req.following_information) {
        for (let i = 0; i < req.following_information.length; i++) {
          itemParts.push({
            id: `${controlId}_stmt_item_${i + 1}`,
            name: "item",
            prose: req.following_information[i],
          });
        }
      }
      if (req.following_information_bullets) {
        for (let i = 0; i < req.following_information_bullets.length; i++) {
          itemParts.push({
            id: `${controlId}_stmt_bullet_${i + 1}`,
            name: "item",
            prose: req.following_information_bullets[i],
          });
        }
      }
      if (itemParts.length > 0) {
        stmtPart.parts = itemParts;
      }

      parts.push(stmtPart);
    }
  }

  // Guidance part (examples) — use FedRAMP namespace for custom part names
  if (req.examples && req.examples.length > 0) {
    const guidanceProse: string[] = [];
    for (const ex of req.examples) {
      const lines: string[] = [];
      lines.push(`**${ex.id}**`);
      if (ex.key_tests) {
        lines.push("Key tests:");
        for (const test of ex.key_tests) {
          lines.push(`- ${test}`);
        }
      }
      if (ex.examples) {
        for (const eg of ex.examples) {
          lines.push(`- ${eg}`);
        }
      }
      guidanceProse.push(lines.join("\n"));
    }
    parts.push({
      id: `${controlId}_guidance`,
      name: "guidance",
      ns: FEDRAMP_NS,
      prose: guidanceProse.join("\n\n"),
    });
  }

  // Assessment part (notes)
  const noteTexts: string[] = [];
  if (req.note) noteTexts.push(req.note);
  if (req.notes) noteTexts.push(...req.notes);
  if (noteTexts.length > 0) {
    parts.push({
      id: `${controlId}_assessment`,
      name: "assessment",
      ns: FEDRAMP_NS,
      prose: noteTexts.join("\n\n"),
    });
  }

  // Danger/impact props (namespaced)
  if (req.danger) {
    props.push(fProp("danger", req.danger));
  }
  if (req.impact) {
    const impactValue =
      typeof req.impact === "string"
        ? req.impact
        : Object.keys(req.impact)
            .filter((k) => (req.impact as Record<string, boolean>)[k])
            .join(",");
    props.push(fProp("impact", impactValue));
  }

  // Notification props (namespaced)
  if (req.notification) {
    for (let i = 0; i < req.notification.length; i++) {
      const n = req.notification[i]!;
      props.push(fProp(`notification-${i + 1}-party`, n.party));
      props.push(fProp(`notification-${i + 1}-method`, n.method));
      props.push(fProp(`notification-${i + 1}-target`, n.target));
    }
  }

  // Term links → back-matter resources
  if (req.terms) {
    for (const term of req.terms) {
      const uuid = termMap.get(term.toLowerCase());
      if (uuid) {
        links.push({ href: `#${uuid}`, rel: "term", text: term });
      }
    }
  }

  return {
    id: controlId,
    title: req.name || reqId,
    props: props.length > 0 ? props : undefined,
    links: links.length > 0 ? deduplicateLinks(links) : undefined,
    parts: parts.length > 0 ? parts : undefined,
  };
}

// ── FRR Process → Group ──────────────────────────────────────────────

function buildProcessGroup(
  processKey: string,
  process: FRRProcess,
  termMap: Map<string, string>,
): Group {
  const groupId = processKey.toLowerCase();
  const duplicateIds = findDuplicateReqIds(process);
  const controls: Control[] = [];

  for (const [applicability, labelMap] of Object.entries(process.data)) {
    for (const [label, requirements] of Object.entries(
      labelMap as Record<string, Record<string, FRRRequirement>>,
    )) {
      for (const [reqId, req] of Object.entries(requirements)) {
        controls.push(
          buildRequirementControl(
            reqId,
            req,
            applicability,
            label,
            termMap,
            duplicateIds.has(reqId),
          ),
        );
      }
    }
  }

  const props: Property[] = [fProp("short-name", process.info.short_name)];

  const parts: Part[] = [];

  // Purpose — use FedRAMP namespace for custom part name
  if (process.info.front_matter.purpose) {
    parts.push({
      name: "overview",
      prose: process.info.front_matter.purpose,
    });
  }

  // Authority — use FedRAMP namespace for custom part name
  if (
    process.info.front_matter.authority &&
    process.info.front_matter.authority.length > 0
  ) {
    const authorityProse = process.info.front_matter.authority
      .map((auth) => {
        const lines: string[] = [];
        lines.push(`**${auth.reference}**`);
        lines.push(auth.description);
        if (auth.delegation) {
          lines.push(`_Delegation: ${auth.delegation}_`);
        }
        return lines.join("\n");
      })
      .join("\n\n");

    parts.push({
      name: "instruction",
      prose: authorityProse,
      props: [fProp("type", "authority")],
    });
  }

  return {
    id: groupId,
    title: process.info.name,
    props,
    parts: parts.length > 0 ? parts : undefined,
    controls: controls.length > 0 ? controls : undefined,
  };
}

// ── KSI Domain → Group with Controls ────────────────────────────────

function buildKSIDomainGroup(
  domainKey: string,
  domain: KSIDomain,
  termMap: Map<string, string>,
): Group {
  const groupId = domain.id.toLowerCase();
  const controls: Control[] = [];

  for (const [indicatorId, indicator] of Object.entries(domain.indicators)) {
    const controlId = indicatorId.toLowerCase();
    const props: Property[] = [];
    const links: Link[] = [];
    const parts: Part[] = [];

    if (indicator.fka) {
      props.push(fProp("fka", indicator.fka));
    }

    // Statement
    parts.push({
      id: `${controlId}_stmt`,
      name: "statement",
      prose: indicator.statement,
    });

    // NIST control references
    if (indicator.controls) {
      for (const nistControl of indicator.controls) {
        links.push({
          href: `${NIST_CATALOG_HREF}#${nistControl}`,
          rel: "related",
          text: nistControl.toUpperCase(),
        });
      }
    }

    // Term links
    if (indicator.terms) {
      for (const term of indicator.terms) {
        const uuid = termMap.get(term.toLowerCase());
        if (uuid) {
          links.push({ href: `#${uuid}`, rel: "term", text: term });
        }
      }
    }

    controls.push({
      id: controlId,
      title: indicator.name,
      props: props.length > 0 ? props : undefined,
      links: links.length > 0 ? deduplicateLinks(links) : undefined,
      parts: parts.length > 0 ? parts : undefined,
    });
  }

  return {
    id: groupId,
    title: domain.name,
    props: [fProp("theme", domain.theme)],
    controls: controls.length > 0 ? controls : undefined,
  };
}

// ── Back Matter (FRD Terms) ──────────────────────────────────────────

function buildBackMatter(
  frdData: Record<string, Record<string, FRDTermEntry>>,
): BackMatter {
  const resources: BackMatterResource[] = [];

  for (const applicability of Object.keys(frdData)) {
    for (const [termId, entry] of Object.entries(frdData[applicability]!)) {
      const uuid = generateUUID("frd-term", termId);

      const resource: BackMatterResource = {
        uuid,
        title: entry.term,
        description: entry.definition,
      };

      if (entry.reference) {
        resource.citation = {
          text: entry.reference,
        };
        if (entry.reference_url) {
          resource.citation.links = [{ href: entry.reference_url }];
        }
      }

      const props: Property[] = [fProp("term-id", termId)];
      if (entry.fka) {
        props.push(fProp("fka", entry.fka));
      }
      resource.props = props;

      resources.push(resource);
    }
  }

  return { resources };
}

// ── Metadata ─────────────────────────────────────────────────────────

function buildMetadata(frmr: FRMRData): Metadata {
  const partyUUID = generateUUID("party", "fedramp-pmo");

  return {
    title: "FedRAMP Requirements and Recommendations (FRMR) Catalog",
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
    props: [
      fProp("source-version", frmr.info.version),
      fProp("source-last-updated", frmr.info.last_updated),
    ],
  };
}

// ── Main build function ──────────────────────────────────────────────

export function buildCatalog(frmr: FRMRData): OSCALCatalog {
  const termMap = buildTermUUIDMap(frmr.FRD.data);

  // Build FRR process groups
  const frrGroups: Group[] = [];
  for (const [processKey, process] of Object.entries(frmr.FRR)) {
    frrGroups.push(buildProcessGroup(processKey, process, termMap));
  }

  // Build KSI top-level group with domain sub-groups
  const ksiDomainGroups: Group[] = [];
  for (const [domainKey, domain] of Object.entries(frmr.KSI)) {
    ksiDomainGroups.push(buildKSIDomainGroup(domainKey, domain, termMap));
  }

  const ksiTopGroup: Group = {
    id: "key-security-indicators",
    title: "Key Security Indicators",
    groups: ksiDomainGroups,
  };

  const allGroups = [...frrGroups, ksiTopGroup];
  const backMatter = buildBackMatter(frmr.FRD.data);

  const catalog: Catalog = {
    uuid: generateUUID("catalog", `fedramp-frmr-${frmr.info.version}`),
    metadata: buildMetadata(frmr),
    groups: allGroups,
    "back-matter": backMatter,
  };

  return { catalog };
}
