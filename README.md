# FedRAMP 20x Machine Readable (FRMR) Docs

This repository contains FedRAMP 20x standards, technical assistance, and other materials in both machine-readable and human-readable formats.

## FRMR Identifiers

See [IDENTIFIERS.md](./IDENTIFIERS.md) for explanations about the naming and structure of these materials.

## FRMR Materials

| Markdown | PDF | Description | Version | Published Date |
|-----------|---|-------------|---------|----------------|
| [Authorization Data Sharing Standard (ADS)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.ADS.authorization-data-sharing.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.ADS.authorization-data-sharing.pdf) | Minor updates to improve clarity; switch from federal information to federal customer data; add impact level metadata; no substantive changes. | 25.10A | 2025-10-17 |
| [Significant Change Notification Requirements (SCN)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.SCN.significant-change-notifications.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.SCN.significant-change-notifications.pdf) | minor updates to improve clarity; switch from federal information to federal customer data; add impact level metadata; no substantive changes. | 25.10A | 2025-10-17 |
| [FedRAMP Definitions (FRD)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.FRD.fedramp-definitions.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.FRD.fedramp-definitions.pdf) | Minor updates to improve clarity; switch from federal information to federal customer data; no substantive changes. | 25.10A | 2025-10-17 |
| [Minimum Assessment Standard (MAS)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.MAS.minimum-assessment-standard.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.MAS.minimum-assessment-standard.pdf) | minor updates to improve clarity; switch from federal information to federal customer data; add impact level metadata; no substantive changes. | 25.10A | 2025-10-17 |
| [Vulnerability Detection and Response Standard (VDR)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.VDR.vulnerability-detection-and-response.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.VDR.vulnerability-detection-and-response.pdf) | Minor updates to improve clarity; switch from federal information to federal customer data; add impact level metadata; no substantive changes. | 25.10A | 2025-10-17 |
| [Key Security Indicators (KSI)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.KSI.key-security-indicators.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.KSI.key-security-indicators.pdf) | Minor updates to improve clarity; switch from federal information to federal customer data; add impact level metadata; no substantive changes. | 25.10A | 2025-10-17 |

In addition, simplified combined documents for each impact level are available as follows:

| Markdown | PDF | Impact Level |
| -- | -- | -- |
| [All Combined](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.ALL.combined.md) | [[PDF]](https://github.com/FedRAMP/docs/tree/main/pdf/FRMR.ALL.combined.pdf) | All |
| [Low Combined](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.LOW.combined.md) | [[PDF]](https://github.com/FedRAMP/docs/tree/main/pdf/FRMR.LOW.combined.pdf) | Low |
| [Moderate Combined](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.MOD.combined.md) | [[PDF]](https://github.com/FedRAMP/docs/tree/main/pdf/FRMR.MOD.combined.pdf) | Moderate |
| [High Combined](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.HIGH.combined.md) | [[PDF]](https://github.com/FedRAMP/docs/tree/main/pdf/FRMR.HIGH.combined.pdf) | High |


---

## Folders

- `FRMR.*.json` — Requirement files
- `templates/` — Handlebars templates
- `markdown/` — Generated docs in markdown format
- `tools/` — Scripts and tests (bun / node)

## Testing

1. **Install Bun:** [https://bun.sh](https://bun.sh)

2. **Install dependencies:**

   ```sh
   cd tools
   bun install
   ```

### Things you can do include:

> If changes are made, all of these things need to be run manually at the moment, in the following order:

**Validate JSON:**

```sh
bun test
```

**Create Combined JSON files**

```sh
bun run scripts/combine-frmr-json.ts
```

 **Generate Markdown:**

```sh
bun run watch
```
(watches for changes and regenerates markdown)

**Generate Updated TOC:**

```sh
bun run scripts/generate-table-of-docs.ts
```
(copy/paste to README.md)

**Conversion to PDF:**

```sh
cd markdown
../tools/scripts/update-pdfs.sh
```

# Broader Changes / Notes

- **October**
  - Removed `specific_release` from JSON files (this was not really used)
  - Removed `is_optional` from JSON files to avoid confusion
  - Removed `is_tentantive` from JSON files to avoid confusion
  - Removed `is_interim` from JSON files to avoid confusion
  - Removed `comment` field from releases and replaced with `comments` array in JSON files
  