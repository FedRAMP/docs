# FedRAMP 20x Machine Readable (FRMR) Docs

This repository contains FedRAMP 20x standards, technical assistance, and other materials in both machine-readable and human-readable formats.

## FRMR Identifiers

See [IDENTIFIERS.md](./IDENTIFIERS.md) for explanations about the naming and structure of these materials.

## FRMR Materials

| Materials                                                                                              | Description                                                                                                                                           | Version | Effective Date(s)                                            | Human Readable Versions                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Key Security Indicators (KSI)](./FRMR.KSI.key-security-indicators.json)                               | Key Security Indicators in this release are unchanged from previously releases. 25.05C adds references for each KSI to underlying SP 800-53 controls. | 25.05C  | 2025-06-28 (20xP1)                                           | Basic:<br><br><ul><li>[Markdown](./markdown/FRMR.KSI.key-security-indicators.md)</li><li>[PDF](./pdf/FRMR.KSI.key-security-indicators.pdf)</li></ul>With Control References:<br><br><ul><li>[Markdown](./markdown/FRMR.KSI.key-security-indicators-with-controls.md)</li><li>[PDF](./pdf/FRMR.KSI.key-security-indicators.pdf)</li></ul> |
| [Minimum Assessment Standard (MAS)](./FRMR.MAS.minimum-assessment-standard.json)                       | Minor non-breaking updates for clarity and formatting; renamed to Minimum Assessment Standard; reframed FRR-MAS-01; added FRD-MAS-06.                 | 25.06A  | 2025-06-17 (20xP1)<br><br> 2025-07-30 (R5.MAS.B1, tentative) | <ul><li>[Markdown](./markdown/FRMR.MAS.minimum-assessment-standard.md)</li><li>[PDF](./pdf/FRMR.MAS.minimum-assessment-standard.pdf)</li></ul>                                                                                                                                                                                               |
| [Significant Change Notification Requirements (SCN)](./FRMR.SCN.significant-change-notifications.json) | Initial release of Significant Change Notification Requirements (includes Technical Assistance)                                                       | 25.06A  | 2025-06-17 (20xP1)<br><br> 2025-07-07 (R5.SCN.B1, tentative) | <ul><li>[Markdown](./markdown/FRMR.SCN.significant-change-notifications.md)</li><li>[PDF](./pdf/FRMR.SCN.significant-change-notifications.pdf)</li></ul>                                                                                                                                                                                     |
| [Combined 20x Low Pilot Requirements](./combined/FRMR.LOW.20x-low-pilot.json)                          | Combined FedRAMP 20x Low Requirements (including KSI hotfix to original 25.05 release)                                                                | 25.06B  | 2025-06-18 (20xP1)                                           | <ul><li>[Markdown](./markdown/FRMR.LOW.20x-low-pilot.md)</li><li>[PDF](./pdf/FRMR.LOW.20x-low-pilot.pdf)</li> </ul>                                                                                                                                                                                                                          |

---

## Next Steps

- Auto-generate indexes and combined docs
- Make JSON the source of truth for all releases
- Add GitHub actions for automation

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

3. **Validate JSON:**

   ```sh
   bun test
   ```

4. **Generate Markdown:**
   ```sh
   bun run watch
   ```
   (watches for changes and regenerates markdown)

## Conversion to PDF

Manually using md-to-pdf for now.
