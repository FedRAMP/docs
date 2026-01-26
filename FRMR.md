# FRMR Documentation JSON Information

This document provides a guide to the structure and data types found in `FRMR.documentation.json`. 

## High-Level Structure

The JSON root object is divided into three primary sections, plus metadata:

1.  **`info`**: File-level metadata (version, last updated).
2.  **`FRD` (FedRAMP Definitions)**: The glossary of terms.
3.  **`FRR` (FedRAMP Requirements and Recommendations)**: The collection of policy processes and their specific requirements.
4.  **`KSI` (Key Security Indicators)**: The security capabilities and validation criteria.

Integrators should treat this file as a relational database dump where `FRD` provides the vocabulary referenced by keys in `FRR` and `KSI`.

## 1. FedRAMP Definitions (`FRD`)

The `FRD` section is a dictionary of terms used throughout the documentation.

### Data Layout
*   **`FRD.data.both`**: Currently, all definitions are grouped under the `both` key, implying applicability to both 20x and Rev5 frameworks.
*   **Keys**: The keys (e.g., `FRD-ACV`) are stable identifiers.
*   **Fields**:
    *   `term`: The human-readable term.
    *   `definition`: The normative definition.
    *   `alts`: A list of synonyms or alternative capitalizations. Useful for search indexing.
    *   `fka`: "Formerly Known As" ID, tracking lineage.
    *   `updated`: An array of change log entries.

**Integration Tip**: When rendering requirements from FRR, scan the text for words matching `term` or `alts` in FRD to provide tooltips or hyperlinks.

## 2. FedRAMP Requirements and Recommendations (`FRR`)

This section represents hierarchical policy documents.

### Data Layout
The `FRR` object is keyed by **Process ID** (e.g., `ADS`, `VDR`). Each process represents a specific policy document.

#### Process Structure
*   `info`: Metadata including `effective` dates for `rev5` and `20x`.
*   `front_matter`: Narrative content like `authority`, `purpose`, and `expected_outcomes`.
*   `labels`: A lookup table defining the actors/scopes (e.g., `CSO` = "General Provider Responsibilities").
*   `data`: The core requirements tree.

#### The Requirements Tree (`FRR.<Process>.data`)
The data is nested to allow for context-specific rendering:
1.  **Applicability Layer** (`both`, `20x`, `rev5`): Determines which framework the requirements apply to.
2.  **Label Layer** (`CSO`, `TRC`, etc.): Groups requirements by the actor defined in `labels`.
3.  **Requirement Object** (Keyed by ID, e.g., `ADS-CSO-PUB`):
    *   `statement`: The normative text.
    *   `primary_key_word`: The RFC 2119 keyword (MUST, SHOULD, MAY).
    *   `terms`: A list of FRD terms used in this statement.
    *   `affects`: The specific actor the requirement applies to.
    *   `following_information`: An ordered list of sub-points or checklist items.
    *   `examples`: Structured examples (often with "Do" and "Don't" scenarios).

**Integration Tip**: To generate a complete checklist for a provider, iterate through `data.both` and `data.20x` (if targeting 20x), then flatten the requirements found under the `CSO` label.

## 3. Key Security Indicators (`KSI`)

The `KSI` section defines security outcomes mapped to NIST controls.

### Data Layout
The `KSI` object is keyed by **Domain ID** (e.g., `IAM`, `VDR`).

#### Domain Structure
*   `theme`: A high-level summary of the security goal.
*   `indicators`: A dictionary of specific indicators.

#### Indicator Object
*   `statement`: The validation criteria.
*   `controls`: An array of NIST SP 800-53 control identifiers (e.g., `ac-2`, `ia-5`).
*   `reference`: Links to external or internal documentation.

**Integration Tip**: Use the `controls` array to map FedRAMP 20x capabilities back to legacy NIST-based GRC tools.

## 4. Timeframe Attributes in Requirements

Some requirements within the `FRR` section, particularly those that vary by impact level (`varies_by_level`), may include structured timeframe data to facilitate automated validation or reporting.

### Data Layout
When a requirement object (or a level-specific object within `varies_by_level`) includes timeframe constraints, it will have the following fields:

*   `timeframe_type`: The unit of time (e.g., `days`, `month`).
*   `timeframe_num`: The numeric value associated with the unit (e.g., `7`, `1`).

**Integration Tip**: These fields allow programmatic extraction of deadlines or frequencies without parsing the natural language `statement`. For example, a requirement with `timeframe_type: "days"` and `timeframe_num: 7` implies a weekly cadence.
