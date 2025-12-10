# ConMon Performance Management

This section describes escalation triggers and actions when a CSP is not meeting ConMon requirements for its FedRAMP authorized CSO. It also includes recommended actions to take when a CSP fails to maintain an adequate ConMon capability for an authorized CSO.

In addition to meeting FedRAMP ConMon requirements, CSPs are required to address additional conditions specified in the Agency ATO letter.[^1]

Failure to adhere to FedRAMP ConMon requirements and conditions in the ATO letter may result in escalation actions by either your federal agency customer or FedRAMP or both.

!!! tip "Agency AO"

    The term “Agency AO” is used throughout this section; however, specific actions may be taken by the Agency AO, the AO’s representative, or collaborative ConMon group.

## **Performance Management for Ongoing Authorization**

This section provides a recommended process to help agencies perform oversight of CSOs authorized via the FedRAMP agency authorization path.

The initial authorizing agency (aka “partner” or “sponsor”) is not responsible for performing ConMon oversight on behalf of subsequent authorizing agencies. Each agency that issues an ATO, or authority to use (ATU), for a cloud offering must review the CSP’s ConMon activities to ensure the security posture remains sufficient for its own use and supports an ongoing authorization. This includes:

- Reviewing the monthly POA&Ms

- Approving deviation requests

- Approving significant change requests; and

- Reviewing the results of the annual assessment.

For CSPs with more than one agency ATO/ATU, security control CA-7 | Continuous Monitoring requires the CSP to implement the collaborative ConMon approach described in [Section 7](#heading=h.8x5s79v6vku6) of this playbook.

Agencies should implement an escalation process to monitor their authorized CSOs, which may result in one of the following escalation levels[^2]:

- **Detailed Finding Review (DFR):** A request from an agency AO for a CSP to assess a deficiency and report the cause and remedy. If the CSP does not resolve a DFR within the agreed upon timeframe, the agency AO may escalate to a corrective action plan (CAP).

- **CAP:** A request from an agency AO for a CSP to perform a root-cause analysis and provide a formal plan for remediation. If the CSP does not resolve a CAP within the agreed upon timeframe, the agency AO may suspend or revoke the CSO’s ATO(s).

- **Suspension:** A decision by an agency AO to temporarily suspend a CSO’s ATO(s) until the identified deficiencies are resolved. In this phase, an agency may choose to suspend use of the CSO. If the CSP does not resolve a suspension within the agreed upon timeframe or if the agency AO determines the CSP can no longer meet FedRAMP compliance requirements, the agency AO may revoke the CSO’s ATO(s).

- **Revocation:** A decision by an agency AO to revoke a CSO’s ATO and migrate the data to another CSO.

When an agency AO identifies a deficiency in the CSP’s ConMon capabilities, the following escalation process should be initiated:

1. The agency AO identifies a deficiency with a CSP’s ConMon capability.

2. The Agency AO reviews the deficiency and compares it to the CSP’s past ConMon performance. As a result of the review, the agency AO decides on one of the following actions:
   1. The agency AO may elect to simply monitor the CSP more closely and take no further action. If so, no notice is sent and the process stops here;

   2. The agency AO may increase a CSP’s existing escalation level; for example, a CSP on a CAP may face Suspension; or

   3. The agency AO may determine the deficiency is severe enough to make the escalation effective immediately in which case, steps 3 and 4 are skipped.

3. The agency AO notifies the CSP of the deficiency and the agency AO’s intended escalation.

4. The CSP responds to the notification. The CSP’s response should include any information that may rebut the escalation decision. Depending on the intended escalation level, the CSP’s response must come from:
   1. The CSP’s security POC for a DFR; or

   2. The CSP’s system owner for a CAP, Suspension, or Revocation.

5. The agency AO reviews and adjudicates the CSP’s response, and renders a formal escalation decision.

6. The Agency AO notifies the CSP of its decision. If the agency AO decides to follow through with an escalation, this notice:
   1. Identifies the criteria for returning the CSO to a Satisfactory status. It may also include a deadline by which the CSP must fully satisfy the criteria or face more severe escalation; and

   2. Requires certain actions from the CSP. Typically, an agency AO would require the CSP to perform a root-cause analysis and develop a formal plan for addressing the deficiencies.

7. The CSP responds to the Agency AO notification. This response must include:
   1. The results of the root cause analysis;

   2. The CSP’s plan for fully resolving the issues, with clearly established milestones and dates, including a date of full resolution;

   3. For a CAP or Suspension, the system owner’s signature on the plan and agency AO approval of the plan; and

   4. Any other items as specified by the agency AO in the notification.

8. When a CSP is subject to escalation as described above, the following occurs:
   1. Notification to FedRAMP: Agency AOs must notify FedRAMP at <info@fedramp.gov> if a decision is made to initiate Suspension or Revocation. CAP letters should be uploaded to the FedRAMP secure repository.

9. When the agency AO determines the CSP has fully resolved the cited deficiencies and satisfied the identified criteria communicated in the notification, the agency AO must take the following actions:
   1. Notification to FedRAMP: Agency AOs must notify FedRAMP at <info@fedramp.gov> if an escalation has been resolved. CAP release letters must be posted to the FedRAMP secure repository.

## **Agency Performance Management Deficiency Triggers**

To ensure consistent expectations and enforcement, an agency AO should define performance management deficiency “triggers.” An agency can pick and choose the appropriate triggers. Examples are described in the table below.

Table 1\. Agency Performance Management Deficiency Triggers

| Process Area           | Deficiency Trigger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Minimum Escalation Level |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------: |
| Operational Visibility | **Unique Vulnerability Count Increase** 20% from ATO baseline or 10 unique vulnerabilities, whichever is greater. Note: A request to re-baseline a unique vulnerability count, accompanied with proper justification, can be submitted to the agency, and may be approved on a case-by-case basis.                                                                                                                                                                                                                                                                                |           DFR            |
|                        | **Non-compliance with scanning requirements outlined in FedRAMP Vulnerability Scanning Requirements**. **First incident in the previous six months.** Unauthenticated scan results delivered as part of the initial SAR submission, as part of the annual SAR submission, or as part of the monthly scanning submission, where the unauthenticated scans are 10% or greater of the total scan submission. This applies only to a CSP’s first submission that is non-compliant with authenticated scan requirements.                                                               |           DFR            |
|                        | **Non-compliance with scanning requirements outlined in FedRAMP Vulnerability Scanning Requirements**. **Each subsequent incident beyond the first within the previous six months.** Unauthenticated scan results delivered as part of the initial SAR submission, as part of the annual SAR submission, or as part of the monthly scanning submission, where the unauthenticated scans are 10% or greater of the total scan submission, result in a CSP being placed on a CAP, when a second or subsequent CSP submission is non-compliant with authenticated scan requirements. |           CAP            |
|                        | **Late Remediation High Impact Vulnerabilities** Five or more unique vulnerabilities or POA&M items aged greater than 30 days.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |           DFR            |
|                        | **Late Remediation High Impact Vulnerabilities** Five or more unique vulnerabilities or POA&M items aged greater than 60 days.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |           CAP            |
|                        | **Late Remediation Moderate Impact Vulnerabilities** Ten or more unique vulnerabilities or POA&M items aged greater than 90 days.                                                                                                                                                                                                                                                                                                                                                                                                                                                |           DFR            |
|                        | **Late Remediation Moderate Impact Vulnerabilities** Ten or more unique vulnerabilities or POA&M items aged greater than 120 days.                                                                                                                                                                                                                                                                                                                                                                                                                                               |           CAP            |
|                        | **Late Delivery of Annual Assessment SAP** Delivery of annual assessment SAP less than 60 days before annual ATO anniversary date.                                                                                                                                                                                                                                                                                                                                                                                                                                                |           CAP            |
|                        | **Late Delivery of Annual Assessment Package** Delivery of full annual assessment package after annual ATO anniversary date.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |           CAP            |
|                        | **Poor Quality of Deliverables** Untimely or inaccurate submission of any deliverable, including (but not limited to) monthly ConMon documents, deviation requests, or significant change requests.                                                                                                                                                                                                                                                                                                                                                                               |           DFR            |
|                        | **Lack of Transparency** Failure to report known issues to FedRAMP or purposely manipulating scans to avoid risk management deficiency triggers.                                                                                                                                                                                                                                                                                                                                                                                                                                  |           CAP            |
|                        | **Multiple Recurrences** Any trigger that is realized multiple times within a six-month timeframe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |           CAP            |
|                        | **Insufficient Notice of Planned Change** Notification received less than 30 days before the planned change or insufficient documentation of a security impact analysis.                                                                                                                                                                                                                                                                                                                                                                                                          |           CAP            |
| Change Control         | **Late Notice of Emergency Change** Notification received more than five days after the change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |           CAP            |
|                        | **Undocumented/Unreported Change** No notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |           CAP            |
|                        | **Degradation of the Change Management and Change Control Processes** Insufficient adherence to the provided configuration management plan as determined by FedRAMP.                                                                                                                                                                                                                                                                                                                                                                                                              |           DFR            |
| Incident Response      | **Late Incident Notification** Late notification of incident not in accordance with [Section 6](#heading=h.pvfo5pyug8k9) of this playbook.                                                                                                                                                                                                                                                                                                                                                                                                                                        |           CAP            |
|                        | **Late response to Cybersecurity and Infrastructure Security Agency (CISA) Emergency Directives** Failure to respond to CISA Emergency Directives within prescribed timeframes.                                                                                                                                                                                                                                                                                                                                                                                                   |           CAP            |
|                        | **Incident Frequency of Recurring Type** Any incident with recurring type and/or cause                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |           CAP            |
|                        | **Incident Frequency** Four or more incidents within six months                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |           DFR            |
|                        | **Timely and Ongoing Notification of Zero-day Attack** Failure to provide to FedRAMP daily updated progress in addressing zero-day attacks                                                                                                                                                                                                                                                                                                                                                                                                                                        |           CAP            |

## **FedRAMP Responsibilities for Agency ATOs**

The FedRAMP PMO monitors agency packages to ensure that the service remains in good standing. Specifically, FedRAMP ensures:

- The annual assessment package is uploaded and complete;

- The latest SAR recommends continued authorization; and

- The FedRAMP Marketplace and repository appropriately reflects authorization, suspension, and revocation status.

##

[^1]: Agency AOs are encouraged to use the [FedRAMP ATO Letter Template](https://www.fedramp.gov/resources/templates/FedRAMP-ATO-Letter-Template.docx) which includes these requirements. Additional requirements may be included in an agency ATO letter to address system-specific security concerns identified during an assessment.

[^2]: Agency AOs (or collaborative ConMon groups) should determine which escalation levels are appropriate.
