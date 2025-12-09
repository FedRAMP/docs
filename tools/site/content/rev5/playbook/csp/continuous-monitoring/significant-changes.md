# Significant Changes

During continuous monitoring, CSPs may need to make changes to the system. A "significant" change is one that is likely to affect the security state of the system. CSPs document significant changes, conduct a security impact analysis, and \- depending on the type of change \- implement the significant change process steps described in this section.

## Types of Changes

A significant change is defined in [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) as "a change that is likely to substantively affect the security or privacy posture of a system." FedRAMP has defined three types of significant changes: Routine Recurring, Transformative, and Adaptive. Routine Recurring changes do not require review and approval by agency authorizing officials (AOs). Transformative and Adaptive changes require review and approval.

### Routine Recurring Changes

This type of change is performed regularly and routinely by CSPs to address flaws or vulnerabilities, address incidents, and generally perform the typical maintenance and service delivery changes expected during day-to-day operations.

These changes leverage mature processes and capabilities to identify, mitigate, and remediate risks as part of the change. They are often entirely automated and may occur without human intervention, even though they have an impact on security of the service.

If the activity does not occur regularly and routinely then it cannot be a significant change of this type. For example, replacing all physical firewalls to remediate a vulnerability is obviously not regular or routine.

Routine recurring changes generally occur as part of ongoing operations or vulnerability management.

#### Ongoing operations

Key Tests:

- Routine care and feeding by staff during normal duties
- No major impact to service availability
- Does not require executive approval

Examples:

- Provisioning or deprovisioning capacity to support service elasticity
- Changing or tuning performance configurations for instances or services
- Updating and maintaining operational handling of information flows and protection across physical and logical networks (e.g., updating firewall rules)
- Generating or refreshing API or access tokens

#### Vulnerability Management

Key Tests:

- Minor, incremental patching or updates
- Significant refactoring or migration process NOT required
- No breaking changes

Examples:

- Updating security service or endpoint signatures
- Routine patching of devices, operating systems, software or libraries
- Updating and deploying code that applies normal fixes and improvements as part of a regular development cycle
- Vulnerability remediation activity that simply replaces a known-bad component(s) with a better version of the exact same thing, running in the exact same way with no changes to processes

### Transformative Changes

Activities that match the _transformative_ significant change type are rare for a cloud service offering, adjusted for the size, scale, and complexity of the service. Small cloud service offerings may go years without transformative changes, while hyperscale providers may release multiple transformative changes per year.

Key Tests:

- Alters the service risk profile or requires new or significantly different actions to address customer responsibilities
- Requires significant new design, development and testing with discrete associated project planning, budget, marketing, etc.
- Requires extensive updates to security assessments, documentation, and how a large number of security requirements are met and validated

Examples:

- The addition, removal, or replacement of a critical third party service that handles a significant portion of information (e.g., IaaS change)
- Increasing the security categorization of the entire offering or a service within the offering that actively handles federal customer data
- Replacement of underlying management planes or paradigm shift in workload orchestration (e.g., bare-metal servers or virtual machines to containers, migration to kubernetes)
- Datacenter migration where large amounts of federal customer data is moved across boundaries different from normal day-to-day operations
- Adding a new AI-based capability that impacts federal customer data in a different way than existing services or capabilities (e.g., integrating a new third-party service or training on federal customer data)

### Adaptive Changes

Activities that match the _adaptive_ significant change type are a frequent and normal part of iteratively improving a service by deploying new functionality or modifying existing functionality in a way that is typically transparent to customers and does not introduce significant new security risks.

In general, most changes that do not happen regularly will be adaptive changes. This change type deliberately covers a wide range of activities in a way that requires assessment and consideration.

Key Tests:

- Requires minimal changes to security plans or procedures
- Requires some careful planning and project management to implement, but does not rise to the level of planning required for transformative changes
- Requires verification of existing functionality and secure configuration after implementation

Examples:

- Updates to operating systems, containers, virtual machines, software or libraries with known breaking changes, complex steps, or service disruption
- Deploying larger than normal incremental feature improvements in code or libraries that are the work of multiple weeks of development efforts but are not considered a major new service
- Changing cryptographic modules where the new module meets the same standards and characteristics of the former
- Replacing a like-for-like component where some security plan or procedure adjustments are required (e.g., scanning tool or managed database swap)
- Adding models to existing approved AI services without exposing federal customer data to new services

## **Significant Change Process Steps**

This section describes the steps taken by CSPs, assessors and agency AOs (or their designees) for transformative and adaptive changes. The steps may be altered under certain circumstances. For example, CSPs with multiple agency customers may define a slightly different process in the Collaborative ConMon Charter, whereby the review/approval of SCRs is performed by voting members. In some cases, the AO may be willing to accept an assessor attestation letter in place of the SAP and SAR. These are typically for adaptive significant changes that are small in scope (i.e., impacts a small number of controls). CSPs and assessors must first consult with their AO POCs to confirm that an assessor attestation is appropriate and acceptable for the SCR.

1. CSP and AO meet to discuss the significant change, potential security impacts and any increases in risk posture to the current authorization from the CSP’s perspective. To facilitate the discussion, the CSP provides a Security Impact Analysis which includes an estimate of known and potential security changes, and the security impact associated with these changes (reference CM-4).

2. If the AO and CSP agree that the change is routine recurring in nature, the CSP proceeds with normal monthly ConMon activities. If they determine the change is transformative or adaptive, the CSP documents the Significant Change Request (SCR) and begins the process to engage an assessor. FedRAMP does not provide a SCR template. However, the SCR must include at least the following information:
   1. Service Offering FedRAMP ID

   2. Assessor Name

   3. Related POA\&M (if the change is being implemented to address a known risk)

   4. Significant Change type and explanation of categorization

   5. Short description of change

   6. Reason for change

   7. Summary of customer impact, including changes to services and customer configuration responsibilities

   8. Plan and timeline for the change, including for the verification, assessment, and/or validation of impacted security controls

   9. Copy of the security impact analysis

   10. Name and title of CSP approver (typically the system owner)

3. Assessor begins to assess the impact of the proposed change on system functionality and security by reviewing the SCR and other relevant system security documentation.

4. Assessor develops a Security Assessment Plan (SAP) which documents the scope of the assessment.

5. The SCR and SAP are submitted to the AO for review and approval.

6. Once approved, the CSP implements the change while ensuring minimal security impact to the existing environment.

7. Once implemented, the assessor conducts testing, develops a SAR package, and briefs the CSP and AO on the outcome of the assessment.

8. The AO reviews the SAR package and determines if the change is acceptable (i.e., no impact to the security posture of the system). If not, the CSP would be required to remediate risks or roll back to the previous version. If the change is accepted, then the CSP must update the POA\&M with any conditions. All other documentation must be updated no later than the next Annual Assessment.

9. CSP continues with normal ConMon operations.

## **Scheduling Significant Changes with Annual Assessments**

With buy-in from the AO(s), significant changes may be scheduled with the annual assessment (AA). The process and requirements follow those described above, except that the SAP will include the assessment plan for both the AA and the significant change. Similarly, the AA SAR will incorporate the results of the AA as well as the results for the significant change.

### Assessment Reuse

Under certain conditions, assessment results from an out-of-cycle significant change assessment may be reused for the current annual assessment. The conditions for reuse of assessment results are the following:

- The change occurred between the last and current annual assessments

- The change was approved by the AO

- The assessment results for reuse are only NIST 800-53 controls assessment results (not scans or pen test results etc)

- The change documentation is not an attestation

If assessment results from an approved significant change were reused for the annual assessment, the approved SAR and supporting documentation for that significant change must be included and referenced as artifacts in the annual assessment package.
