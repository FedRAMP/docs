# Understanding FedRAMP 20x Identifier Designators

This document describes the identifier (designator) conventions used across the
machine-readable JSON files in `data/`. The designators are used consistently
in the FedRAMP 20x standards and guidance files to make references easy to
parse and automate.

## Structure

Designators are structured as: `PREFIX-LABEL[-SUFFIX]-NNN` where:

- `PREFIX`: broad category (definitions, requirements, technical assistance)
- `LABEL`: short standard or sub-area code (ADS, VDR, KSI, etc.)
- `SUFFIX` (optional): sectional qualifier (timeframe, agency guidance, apply, exceptions, etc.)
- `NNN`: numeric identifier (usually two or more digits)

**Examples:** `FRR-ADS-01`, `FRR-VDR-TF-MO-02`, `KSI-AFR-01`, `FRA-VDR-01`

## Common Prefixes

- `FRD-`: FedRAMP Definitions (definition records, often grouped under `FRD-ALL`)
- `FRR-`: FedRAMP Requirements and Recommendations (most rules and recommendations)
- `FRA-`: FedRAMP Technical Assistance / Informational Guidance
- `KSI-`: Key Security Indicator themes and indicators

## Common Labels (standards / documents)

- `ADS`: Authorization Data Sharing Standard
- `CCM`: Collaborative Continuous Monitoring Standard
- `KSI`: Key Security Indicators
- `PVA`: Persistent Validation and Assessment
- `VDR`: Vulnerability Detection and Response
- `MAS`: Minimum Assessment Scope
- `RSC`: Recommended Secure Configuration
- `FSI`: FedRAMP Security Inbox
- `ICP`: Incident Communications Procedures
- `SCN`: Significant Change Notifications
- `FRD`: FedRAMP Definitions (used with `FRD-ALL` for global definitions)

These labels correspond to the `short_name` values found in the JSON files
under `data/` and are used as the second segment of requirement identifiers.

## KSI Themes (common KSI labels)

Key Security Indicators use three-letter theme codes. Examples found in
`FRMR.KSI.key-security-indicators.json` include:

- `AFR` — Authorization by FedRAMP
- `CED` — Cybersecurity Education
- `CMT` — Change Management
- `CNA` — Cloud Native Architecture
- `IAM` — Identity and Access Management
- `INR` — Incident Reporting
- `MLA` — Monitoring, Logging, and Auditing
- `PIY` — Policy and Inventory
- `RPL` — Recovery Planning
- `SVC` — Service Configuration
- `TPR` — Third-Party Information Resources

KSI indicators then appear as `KSI-<THEME>-<NN>` (for example `KSI-AFR-01`).

## Common Suffixes and Section Qualifiers

FedRAMP uses short suffixes to split sections within a standard. Common
examples include:

- `-AY` : Apply / Application guidance (e.g. `FRR-<LABEL>-AY-01`)
- `-EX` : Exceptions (e.g. `FRR-<LABEL>-EX-01`)
- `-TF` : Timeframes (often further qualified by impact level, e.g. `-TF-LO`, `-TF-MO`, `-TF-HI`)
- `-AC` : Access Control section (e.g. `FRR-ADS-AC-01`)
- `-TC` : Trust Center section (e.g. `FRR-ADS-TC-01`)
- `-RP` : Reporting section (e.g. `FRR-VDR-RP-01`)
- `-QR` : Quarterly Reviews section (e.g. `FRR-CCM-QR-01`)
- `-AG` : Agency Guidance section (e.g. `FRR-CCM-AG-01`)

These qualifiers appear in the middle of identifiers to indicate the section
context (for example `FRR-ADS-TC-03` is a requirement in the ADS Trust Center
section).

## How to read an identifier (examples)

- `FRR-ADS-06` — A requirement (`FRR`) in the Authorization Data Sharing
  Standard (`ADS`) with number `06`.
- `FRR-VDR-TF-MO-02` — A requirement (`FRR`) in the Vulnerability Detection
  and Response Standard (`VDR`) within the Timeframes section for Moderate
  impact (`TF-MO`), item `02`.
- `KSI-AFR-01` — A Key Security Indicator (`KSI`) in the Authorization by
  FedRAMP theme (`AFR`), indicator `01`.
- `FRA-VDR-01` — Technical assistance (`FRA`) for the VDR standard, item `01`.

## Notes and usage

- Filenames in `data/` are prefixed with `FRMR.` (e.g. `FRMR.VDR....json`) to
  indicate the FedRAMP machine-readable release file, but the internal
  identifiers use the `FRR-`, `FRD-`, `KSI-`, and `FRA-` prefixes.
- Section qualifiers can be nested (for example `-TF-LO` for timeframes low).
- When automating, treat identifiers as opaque strings but parse by the
  hyphen-separated segments to extract prefix, label, qualifiers, and number.



