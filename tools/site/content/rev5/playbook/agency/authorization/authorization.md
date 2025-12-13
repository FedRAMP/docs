# Authorization

## Full Security Assessment

During the Full Security Assessment phase, the 3PAO performs an independent security assessment of the system. Depending on the federal agency's review approach determined in the [Authorization Planning](preparation.md#authorization-planning) phase, the federal agency may review and approve the SSP and SAP prior to the start of the 3PAO assessment.

During this step, the 3PAO tests and validates the CSP's implementation of security controls, validates vulnerability scans, and performs penetration testing. At the conclusion of the assessment, the 3PAO develops a SAR, which documents the results of the security assessment and includes a recommendation for FedRAMP authorization.

The CSP will then develop a POA&M based on the SAR findings. The POA&M documents the CSP's plan and timeline for remediating residual risk that remained at the conclusion of the security assessment.

## Agency Authorization Process

### (1) Agency Review of Security Authorization Package

During this phase, the federal agency team conducts a review of the CSO authorization package that includes: the SSP and appendices, SAP, SAR, and POA&M. The purpose of the review is to ensure that the authorization package clearly and accurately reflects the security posture of the CSO in order for the federal agency authorizing official (AO) to make an informed risk-based authorization decision.  
FedRAMP recommends establishing a regular cadence of meetings that include the federal agency, CSP, and 3PAO throughout the quality and risk review in order to address federal agency questions and concerns in real time. This might include longer in-person working sessions to address specific areas of the CSO.

### (2) SAR Debrief

The purpose of the [SAR debrief](https://www.fedramp.gov/resources/templates/FedRAMP-Agency-Authorization-Kickoff-SAR-Debrief-Guidance.pdf) is to help inform the federal agency's risk review of the CSO. During the SAR debrief, the 3PAO presents the results of the security assessment, the CSP presents the plan and timeline for remediating residual risk, and the partnering agency describes the remaining milestones and tips for success. At the conclusion of the SAR debrief, all stakeholders will have a shared understanding of:

- The 3PAO's assessment approach, methodology, and schedule.

- The scope of testing, which includes validation of the authorization boundary and data flows.

- The assessment results and residual risk.

- The CSP's plan and timeline for remediating residual risk.

- Deviation requests that require federal agency approval (e.g., risk adjustments and false positives).

- Operationally required risks that require federal agency risk acceptance (e.g., services or components essential to the operation of the CSO, but _excluded_ from the tested boundary).

- The federal agency's process for reviewing the authorization package and reaching a risk-based authorization decision.

- Best practices and tips for success.

#### SAR Debrief: Roles and Responsibilities

##### 3PAO and CSP

- **Prior to the SAR Debrief:** Provide the final SAR and POA&M to the federal agency for review at least two (2) weeks prior to the SAR debrief. Develop the SAR debrief presentation that aligns with the [guidance provided by FedRAMP](https://www.fedramp.gov/resources/templates/FedRAMP-Agency-Authorization-Kickoff-SAR-Debrief-Guidance.pdf). The 3PAO and CSP will be responsible for separate portions of the presentation. Ensure the right 3PAO and CSP team members attend the SAR debrief.

- **During the SAR Debrief:** Deliver the SAR debrief presentation and address the federal agency's questions about the assessment, findings, and plan for remediation.

##### Agency

- **Prior to the SAR Debrief:** Review the final SAR and POA&M prior to the SAR debrief meeting and record any questions for the CSP and 3PAO during the meeting.

- **During the SAR Debrief:** Raise questions if anything is unclear. The federal agency should walk away from the SAR debrief with a clear understanding of the scope of testing, the CSP's plan and timeline for remediating any residual risk, and any areas that will require federal agency risk acceptance. Describe the federal agency's process for completing the quality and risk review of the authorization package and the process for reaching an authorization decision and granting an ATO. 

### (3) Remediation

To ensure the authorization package clearly and accurately reflects the security and risk posture of the CSO, the CSP and 3PAO may be required to address documentation gaps or inconsistencies identified by the federal agency review team.  
Examples include:

- Inconsistencies across SSP control narratives.

- Inconsistencies between the boundary diagram, data flow diagrams, and SSP narrative.

- Inconsistencies between control narratives and what is validated by the 3PAO and described in the SAR

- Inconsistencies between the SAR and POA&M.

In addition, the CSP may be asked to remediate or mitigate open risks in order to achieve an acceptable level of risk for the federal agency AO.

In some cases, the 3PAO may be required to perform delta testing to validate risk remediations or perform additional testing if the federal agency review team identifies gaps in the initial assessment scope, e.g. if the 3PAO failed to validate the encryption status of federal data/metadata at rest and in transit or failed to test a component essential to the operation of the CSO.  

The federal agency's review of remediation work can happen on an iterative, or linear basis, depending on the federal agency's preference. It is important to maintain constant communication between the federal agency and CSP throughout the remediation process to ensure that the gaps and other areas of concern are being addressed to the federal agency's satisfaction.  

At the end of the Remediation phase, the federal agency, CSP, and 3PAO should conduct a formal close-out meeting to review all changes, address questions in real time, and obtain approval to move forward to the final review and ATO phase.

### (4) Agency Final Review and ATO

During this phase, the federal agency review team finalizes its review of the authorization package, and the federal agency AO issues an ATO for the CSO. FedRAMP provides an [_ATO letter template_](https://www.fedramp.gov/resources/templates/FedRAMP-ATO-Letter-Template.docx) that federal agency AOs are encouraged to use. The ATO letter is sent to the CSP and [ato-letter@fedramp.gov](mailto:ato-letter@fedramp.gov).  

The process for closing out the review and issuing an ATO varies from federal agency to agency. The implementation, testing, and documentation of customer controls in the federal agency's GRC tool typically occurs during this phase, but may occur later in the authorization process after the ATO for the CSO is issued. As described in the [Authorization Planning](preparation.md#authorization-planning) section of this playbook, the federal agency's process and timeline for reaching an authorization decision and issuing an ATO should be defined early in the process and communicated to all stakeholders to manage expectations.


### (5) FedRAMP Review

Once the federal agency AO issues the ATO letter, FedRAMP performs a review of the authorization package to determine suitability for government-wide reuse. The scope of FedRAMP's review includes:

- A quality review to ensure the authorization package is complete and required deliverables were developed in accordance with FedRAMP guidance. While the initial authorizing agency conducts a quality review of the authorization package, FedRAMP's review is considered ‘a final set of eyes' to ensure uniformity across all packages listed on the [FedRAMP Marketplace](https://marketplace.fedramp.gov/products).
- A risk review to ensure that all security deficiencies and weaknesses are correctly enumerated across package deliverables..

After the ATO letter is received, the following steps are performed to get to a FedRAMP Authorized designation:

1. CSP and 3PAO upload current versions of package deliverables to the FedRAMP secure repository for Low and Moderate packages, or to the CSP's repository for High packages.

2. CSP completes and submits [_FedRAMP Initial Authorization Package Checklist_](https://www.fedramp.gov/resources/templates/FedRAMP-Initial-Authorization-Package-Checklist.xlsx) to [intake@fedramp.gov](mailto:intake@fedramp.gov).

3. FedRAMP verifies that all package deliverables are uploaded.

4. Package is placed in the FedRAMP review team's queue; packages are reviewed in the order they are received.

5. The FedRAMP review team performs a cursory review of the package.

   - The review team reaches out to stakeholders with areas that require clarification or technical security gaps that may require remediation prior to authorization. This is typically done via email, but may require a meeting.

   - Once requests for clarification and/or gaps have been addressed, the review team submits a final review report and authorization recommendation to FedRAMP leadership for approval.

   - Once approved, the FedRAMP Marketplace designation is changed to "FedRAMP Authorized."

   - A copy of the final review report is provided to all stakeholders and typically includes post-authorization actions that must be addressed by the CSP and/or 3PAO, and then reviewed by the partner agency.
