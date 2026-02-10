/**
 * Deterministic UUID v5 Generator for OSCAL documents.
 *
 * Uses UUID v5 (SHA-1) so the same FRMR input always produces
 * identical OSCAL UUIDs. Each entity type has its own namespace
 * to avoid collisions across different ID spaces.
 */

import { createHash } from "crypto";

// RFC 4122 UUID v5 namespace (DNS) used as the root
const DNS_NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

/**
 * Generates a UUID v5 from a namespace UUID and a name string.
 * Implements RFC 4122 Section 4.3.
 */
function uuidV5(namespace: string, name: string): string {
  // Parse namespace UUID into bytes
  const nsBytes = Buffer.from(namespace.replace(/-/g, ""), "hex");

  // SHA-1 hash of namespace + name
  const hash = createHash("sha1")
    .update(nsBytes)
    .update(name, "utf8")
    .digest();

  // Set version (5) and variant (RFC 4122)
  hash[6] = (hash[6]! & 0x0f) | 0x50; // version 5
  hash[8] = (hash[8]! & 0x3f) | 0x80; // variant 10xx

  const hex = hash.subarray(0, 16).toString("hex");
  return [
    hex.substring(0, 8),
    hex.substring(8, 12),
    hex.substring(12, 16),
    hex.substring(16, 20),
    hex.substring(20, 32),
  ].join("-");
}

// ── Per-entity namespaces ────────────────────────────────────────────
// Each derived from DNS_NAMESPACE + a fixed label, so they're stable.

const NAMESPACES = {
  catalog: uuidV5(DNS_NAMESPACE, "fedramp-frmr-catalog"),
  "frd-term": uuidV5(DNS_NAMESPACE, "fedramp-frd-term"),
  "frr-control": uuidV5(DNS_NAMESPACE, "fedramp-frr-control"),
  "ksi-control": uuidV5(DNS_NAMESPACE, "fedramp-ksi-control"),
  "mapping-collection": uuidV5(DNS_NAMESPACE, "fedramp-ksi-nist-mapping"),
  "mapping-entry": uuidV5(DNS_NAMESPACE, "fedramp-mapping-entry"),
  party: uuidV5(DNS_NAMESPACE, "fedramp-party"),
  group: uuidV5(DNS_NAMESPACE, "fedramp-group"),
  mapping: uuidV5(DNS_NAMESPACE, "fedramp-mapping"),
} as const;

type Namespace = keyof typeof NAMESPACES;

/**
 * Generate a deterministic UUID for a given entity type and identifier.
 *
 * @param ns - The namespace category (e.g., "catalog", "frd-term")
 * @param id - The unique identifier within that namespace (e.g., "FRD-ACV", "ADS-CSO-PUB")
 * @returns A deterministic UUID v5 string
 */
export function generateUUID(ns: Namespace, id: string): string {
  return uuidV5(NAMESPACES[ns], id);
}
