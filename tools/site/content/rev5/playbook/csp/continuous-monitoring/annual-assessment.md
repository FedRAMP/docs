# Annual Assessments

Security control CA-2 requires the CSP to undergo an independent assessment of the cloud service offering at least annually. This section describes the FedRAMP Rev 5 annual assessment process and includes guidance for determining the scope and selection of controls to be included in the assessment. This guidance assumes the CSP has already transitioned to, and has undergone an assessment against, the FedRAMP Rev 5 baselines for the cloud offering. CSOs that were last assessed against the FedRAMP Rev 4 baselines must undergo a new full security assessment against the FedRAMP Rev 5 baseline.

## **Annual Assessment Process Steps**

### Develop the Assessment Schedule

Most FedRAMP recognized 3PAOs have developed an assessment schedule template to help facilitate this process. Major milestone activities that are typically included in the schedule are described in the sections that follow. The schedule should include timeframes and resources to support technical and quality assurance reviews of all deliverables.

### Review and Update Documentation

CSPs must review the SSP and appendices, and update (as necessary) at least annually to incorporate system changes and/or changes in processes and procedures.

!!! info "Periodic Updates"

    FedRAMP periodically publishes updates to the SAP, SAR (including SRTM and RET) and POA&M templates, so make sure you are using the most recent template when preparing for the annual assessment.

### Incident Response and Contingency Testing

CSPs are required to test the Incident Response Plan (IRP) and Contingency Plan (CP) at least annually. Failure to perform this testing can delay the assessment, so be sure to build this into your schedule.

### Define the Assessment Scope

The CSP and assessor work together to define the scope of the FedRAMP Rev 5 annual assessment using the [FedRAMP Annual Assessment Control Selection Worksheet](https://www.fedramp.gov/resources/documents/CSP_Annual_Assessment_Controls_Selection_Worksheet.xlsx). Guidance for completing the worksheet is provided in the template. The completed worksheet must be included in the SAP prepared and submitted by the assessor. The scope of a FedRAMP Rev 5 annual assessment includes:

- FedRAMP-selected list of core controls (as defined in the control selection worksheet)
- CSP-selected controls required to address system changes that have been implemented and/or changed by a CSP since their last assessment (this excludes those controls or portions of controls previously assessed under a significant change within the same annual period)
- Validation of POA&Ms closed since the last assessment
- Validation of POA&Ms identified as vendor dependencies (VDs) or deviation requests (DRs)
- Controls identified as “Not Applicable” (N/A) to validate they are, in fact, not applicable
- Controls that have not been assessed, at least once in a three year period, to ensure controls are meeting periodicity requirements

### Develop Security Assessment Plan (SAP)

The assessor prepares and submits the SAP using the [FedRAMP Security Assessment (SAP)](<https://www.fedramp.gov/resources/templates/FedRAMP-Security-Assessment-Plan-(SAP)-Template.docx>) template. The SAP defines the planned process, procedures, and methodologies for testing. The scope of controls to be tested is based on the control selection process defined in the previous section.

### Brief Agency Customers on Assessment Plan

The CSP and assessor brief the agency customers (AOs and/or their representatives) on the assessment plan, scope and schedule. If multiple agencies are leveraging the CSO, schedule the briefing during the monthly collaborative ConMon meeting.

!!! tip "Agency Review"

    Some agencies may want to review the SAP and supporting documentation (e.g., controls section worksheet), so be sure to make these documents available via the secure repository.

### Conduct the Security Assessment and Develop SAR

When developing the assessment schedule, be sure to build in time for developing the draft SAR, CSP remediation activities, assessor remediation testing, and final SAR development.

The assessor prepares and submits the SAR and supporting documents using the following templates:

- [FedRAMP Security Assessment Report (SAR) Template](<https://www.fedramp.gov/resources/templates/FedRAMP-Security-Assessment-Report-(SAR)-Template.docx>)\*
- Depending on the impact categorization:
  - [FedRAMP SAR Appendix B \- Low Security Requirements Traceability Matrix Template](https://www.fedramp.gov/resources/templates/FedRAMP-SAR-Appendix-B-Low-Security-Requirements-Traceability-Matrix-Template.xlsx)
  - [FedRAMP SAR Appendix B \- Moderate Security Requirements Traceability Matrix Template](https://www.fedramp.gov/resources/templates/FedRAMP-SAR-Appendix-B-Moderate-Security-Requirements-Traceability-Matrix-Template.xlsx)
  - [FedRAMP SAR Appendix B \- High Security Requirements Traceability Matrix Template](https://www.fedramp.gov/resources/templates/FedRAMP-SAR-Appendix-B-High-Security-Requirements-Traceability-Matrix-Template.xlsx)
- [SAR Appendix A \- FedRAMP Risk Exposure Table (RET) Template](<https://www.fedramp.gov/resources/templates/SAR-Appendix-A-FedRAMP-Risk-Exposure-Table-(RET)-Template.xlsx>)

In accordance with the SAP, the SAR documents the actual process, procedures, and methodologies followed during the assessment, the assessment results, risks corrected during testing, and risks that remained at the conclusion of the assessment.

\* For LI-SaaS cloud offerings, the control implementations, assessment test procedures, and assessment results are combined into one document using the [SSP Appendix A \- LI-SaaS FedRAMP Security Controls](https://www.fedramp.gov/resources/templates/SSP-Appendix-A-LI-SaaS-FedRAMP-Security-Controls.docx) template. To facilitate agency customer reviews, FedRAMP recommends aggregating the remaining risks using the RET template.

### Complete Plan of Action and Milestones (POA&M)

The CSP prepares and submits the POA&M using the [FedRAMP Plan of Action and Milestone (POA&M) Template](https://www.fedramp.gov/resources/templates/FedRAMP-POAM-Template.xlsx). The CSP documents residual risks identified in the SAR and defines a plan for remediation of those risks in the POA&M.
