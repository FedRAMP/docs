# The FedRAMP Rev5 Agency Authorization Path

The section below provides an overview of the FedRAMP agency authorization path.
This is the same as the process displayed in the
[FedRAMP Agency Authorization Playbook](../../agency/authorization/intro/),
but it is from the CSP’s perspective. It includes additional steps that both the
CSP and agency would complete.

## Phase 1: Preparation

### FedRAMP Ready

A FedRAMP Ready designation is optional for the FedRAMP agency authorization
process, but highly recommended. To achieve the FedRAMP Ready designation, a CSP
must work with a FedRAMP recognized 3PAO to complete a Readiness Assessment of
its service offering. The Readiness Assessment Report (RAR) documents the CSP's
capability to meet federal security requirements.  

CSPs that achieve the FedRAMP Ready designation are listed on
[FedRAMP’s Marketplace](https://marketplace.fedramp.gov/products). Agencies use
the FedRAMP Marketplace to research cloud services that meet their
organizational requirements. FedRAMP Ready makes valuable information about the
service offering’s security available for potential federal agency customers via the
FedRAMP Marketplace.  

Additionally, for CSPs who are considering whether or not to become FedRAMP
Authorized, the RAR can serve as a self assessment to determine what gaps in
their service offering’s security exist and where those gaps might be. Such
information can help CSPs understand the level of effort necessary to secure
their system(s) according to FedRAMP requirements prior to pursuing a FedRAMP
authorization with a federal agency.

### Pre-Authorization

#### Partnership Establishment

In the pre-authorization phase, a CSP formalizes their partnership with a
federal agency. In some cases, a vendor may be under contract with a federal
agency already, or a federal agency may be working through the acquisition
process. At this stage, a CSP should have a fully operational system and an
executive team that is committed to the FedRAMP process. CSPs should begin
engagement with FedRAMP by filling out a
[CSP Information Form](https://docs.google.com/forms/d/e/1FAIpQLScU4_x5UK53d0PUUDsOdqWyzUvAN1-yFJ1NxffT7PkGkCiuPg/viewform?c=0&w=1).

By completing this form, FedRAMP will generate a FedRAMP ID for the CSO and
provide valuable resources in an automated follow-up email.  

##### Common Agency Questions About Partnership

Answers to the frequently asked questions below can be found under the
“[Federal Agencies](https://help.fedramp.gov/hc/en-us/sections/27700650101403-Federal-Agencies)”
section on the
[FAQs](https://help.fedramp.gov/hc/en-us/categories/27695387528859-Frequently-Asked-Questions-FAQs)
page of [FedRAMP’s Help Center](https://help.fedramp.gov/hc/en-us). As a CSP, it
is beneficial to review these and other
[FAQs](https://help.fedramp.gov/hc/en-us/categories/27695387528859-Frequently-Asked-Questions-FAQs)
on our Help Center to help in your preparedness when these topics arise with
federal agency customers.

| [What does it mean to be an initial agency partner?](https://help.fedramp.gov/hc/en-us/articles/27703197616027-What-does-it-mean-to-be-an-initial-agency-partner)                                                                                                                                                                                |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Is there an additional level of effort associated with being the initial authorizing agency?](https://help.fedramp.gov/hc/en-us/articles/27703206782619-Is-there-an-additional-level-of-effort-associated-with-being-the-initial-authorizing-agency)**                                                                                        |
| **[As the initial authorizing agency, are we responsible for performing ConMon oversight on behalf of other leveraging agencies?](https://help.fedramp.gov/hc/en-us/articles/27703347140763-As-the-initial-authorizing-agency-are-we-responsible-for-performing-continuous-monitoring-ConMon-oversight-on-behalf-of-other-leveraging-agencies)** |
| **[What happens if my agency decides to stop using the CSO?](https://help.fedramp.gov/hc/en-us/articles/27703498077979-What-happens-if-my-agency-decides-to-stop-using-the-cloud-service-offering-CSO)**                                                                                                                                         |
| **[What happens if a CSO loses its agency customers?](https://help.fedramp.gov/hc/en-us/articles/27703601485083-What-happens-if-a-cloud-service-offering-CSO-loses-its-agency-customers)**                                                                                                                                                       |
| **[Should my agency use FedRAMP to authorize a private cloud deployment?](https://help.fedramp.gov/hc/en-us/articles/27703635042459-Should-my-agency-use-FedRAMP-to-authorize-private-cloud-deployment)**                                                                                                                                        |


#### Authorization Planning

Once the partnership is established, a CSP should:

- Confirm resources dedicated to the authorization process, which should include
  one technical writer, one technical SME, and one project manager, at a
  minimum.

- Select a 3PAO for the assessment.

- Determine the federal agency’s approach for reviewing the authorization
  package as described below:

    1. **Just-In-Time Linear Approach:** Each FedRAMP deliverable builds upon another, starting with the SSP. The SSP and appendices, Security Assessment Plan (SAP), and Security Assessment Report (SAR) are completed in a linear fashion, obtaining feedback from the federal agency once each deliverable is produced. In turn, modifications are made to each deliverable based on the agency’s review. Once the deliverable is finalized and accepted by the agency, work begins on the next deliverable.

    2. **All Deliverables Provided Simultaneously:** All FedRAMP deliverables (i.e., the SSP and appendices, SAP, SAR, Plan of Action and Milestones (POA&M) are completed and submitted to the agency at once. The agency reviews all deliverables together and works collaboratively with the CSP and 3PAO.

    !!! tip "Recommended Approach"
    
        FedRAMP recommends the “Just-In-Time” approach, as it is a more iterative and agile approach that may prevent rework after 3PAO testing has occurred.

- Work with your federal agency partner to complete an
  [in-process request (IPR)](https://fedramp.gov/resources/templates/FedRAMP-Agency-Authorization-In-Process-Request-Template.docx)
  and a
  [work breakdown structure (WBS](https://www.fedramp.gov/resources/templates/FedRAMP-Agency-Authorization-WBS-Template.xlsx)[)](https://www.fedramp.gov/resources/templates/FedRAMP-Agency-Authorization-WBS-Template.xlsx).
  After the completion of the IPR and WBS, please send these documents to
  FedRAMP for review via [intake@fedramp.gov](mailto:intake@fedramp.gov). At
  this point, the CSO is eligible to be listed as In Process on the FedRAMP
  Marketplace with agency approval.

  - If you are working with a DoD agency toward FedRAMP authorization at the IL4
    or IL5 level, please reach out to FedRAMP for an IPR specific to DISA.

- After submitting the WBS and the IPR, FedRAMP will provision access to
  FedRAMP’s secure repository for Low and Moderate impact offerings (High impact
  offerings must use their own organization’s secure repository).

- Upload a copy of the CSP’s completed
  [Kickoff meeting deck](https://www.fedramp.gov/resources/templates/FedRAMP-Agency-Authorization-Kickoff-Architecture-Briefing-Guidance.pdf)
  to the secure repository.

#### Kickoff Meeting

The final step in this phase is to prepare for and conduct a kickoff meeting.
The purpose of the kickoff meeting is to formally begin the FedRAMP agency
authorization process by introducing key team members, reviewing the CSO, and
making sure everyone is aligned on the overall process and milestone timelines.

At the conclusion of the kickoff meeting, all stakeholders will have a shared
understanding of:

- The overall authorization process, milestones, deliverables, roles and
  responsibilities, and schedule;

- The CSO’s purpose and function, authorization boundary, data flows, known
  security gaps and plans for remediation, federal agency-specific requirements,
  customer responsible controls, and areas that may require federal agency risk
  acceptance;

- The federal agency’s process for reviewing the authorization package and
  reaching a risk-based authorization decision; and

- Best practices and tips for success.

Additionally, CSPs that are not already listed as In Process on the FedRAMP
Marketplace are eligible to be listed if the federal agency is comfortable with
the briefing and timelines. Please note that not all systems will be eligible to
be listed based on the kickoff meeting outcome, so be sure to have your initial
agency partner engage with FedRAMP on your In Process status after this step.

!!! warning "Agency Information Security" 

    While your federal agency point of contact (POC) may be someone on the program side, it is critical to connect with the security side of the agency and, ultimately, the federal agency AO, who is required to send an In Process request to FedRAMP prior to a CSP achieving an In Process designation. If your program owner does not know who to go to in their agency for this, FedRAMP can assist. 

## Phase 2: Authorization

### Full Security Assessment

During this phase, the 3PAO develops a SAP and tests the CSP’s system according
to the FedRAMP guidelines and requirements. If the CSP has partnered with a
federal agency, and is using the “Just-In-Time” linear approach described in the
table above, it is recommended that the agency approve the SAP before the 3PAO
initiates testing. During testing, it is critical that no changes are made to
the CSO, and that it is frozen from a development perspective. Once the testing
is complete, the 3PAO will develop a SAR, which details their findings and
includes a recommendation for FedRAMP authorization. The CSP will then develop a
POA&M, based on the SAR findings, which outlines a plan for addressing the
findings from testing. The SAR should clearly enumerate all risks identified
during the security assessment.  

Once this has been completed, the CSP and 3PAO complete a SAR debrief
presentation. The presentation is uploaded to the CSP’s secure repository for
review prior to scheduling the SAR debrief meeting. FedRAMP provides guidance
for developing SAR debrief presentation materials. Please reach out to
[intake@fedramp.gov](mailto:intake@fedramp.gov) for a copy of the guidance.  

The purpose of the SAR debrief is to help inform the federal agency’s risk
review of the CSO. During the SAR debrief, the 3PAO presents the results of the
security assessment, and the CSP presents the plan and timeline for remediating
residual risk.  

At the conclusion of the SAR debrief, all stakeholders will have a shared
understanding of:

- The 3PAO’s assessment approach, methodology, and schedule;

- The scope of testing, which includes validation of the authorization boundary
  and data flows;

- The assessment results and residual risk;

- The CSP’s plan and timeline for remediating residual risk;

- Deviation requests that require federal agency approval (risk adjustments and
  false positives);

- Operationally required risks that require federal agency risk acceptance
  (e.g., services or components essential to the operation of the CSO but
  excluded from the tested boundary);

- The federal agency’s process for reviewing the authorization package and
  reaching a risk-based authorization decision; and

- Best practices and tips for success.

### Agency Authorization Process

Once the assessment and associated deliverables are complete, the federal agency
reviews them and either approves them or requests that additional testing take
place. A final review is then conducted, and if the federal agency accepts the
risk associated with the use of the system, they provide an [ATO letter signed by
the federal agency AO](https://www.fedramp.gov/resources/templates/FedRAMP-ATO-Letter-Template.docx).

After the agency AO issues the ATO letter, FedRAMP performs a cursory review of the authorization package to determine suitability for government-wide reuse and makes a FedRAMP authorization decision. The scope of FedRAMP’s review includes:

- A quality review to ensure the authorization package is complete and required deliverables were developed in accordance with FedRAMP guidance.  
- A risk review to ensure that all security deficiencies and weaknesses are correctly enumerated across package deliverables. 

Once the Agency ATO letter is received by FedRAMP, the following steps are performed to get to a FedRAMP Authorized designation: 

1. CSP and 3PAO upload current versions of package deliverables, including all assessment artifacts to a secure repository: FedRAMP’s secure repository for Low and Moderate baseline packages. CSP’s repository for High baseline packages.

2. CSP completes and submits [FedRAMP Initial Authorization Package Checklist](https://www.fedramp.gov/resources/templates/FedRAMP-Initial-Authorization-Package-Checklist.xlsx) to [intake@fedramp.gov](mailto:info@fedramp.gov).                                                                                                                                                                                                                                                                 

3. FedRAMP verifies that all package deliverables are uploaded. 

4. The package is placed in the FedRAMP review team’s queue. Packages are reviewed in the order they are received.

5. The FedRAMP review team performs a cursory review of the package. The review team reaches out to stakeholders with areas that require clarification or technical security gaps that may require remediation prior to authorization. This is typically done via email, but may require a meeting. Once requests for clarification and/or gaps have been addressed, the review team submits a final review report and authorization recommendation to FedRAMP leadership for approval. Once approved, the FedRAMP Marketplace designation is changed to “FedRAMP Authorized.” A copy of the final review report is provided to all stakeholders and typically includes post-authorization actions that must be addressed by the CSP and/or 3PAO, and then reviewed by the partner agency.

Once a CSO receives a FedRAMP Authorized designation, the FedRAMP Marketplace
will be updated to reflect the designation. FedRAMP will make the CSO security
package available, upon request and validation of the requestor, to the entire
federal government for the purpose of issuing subsequent ATOs for the use of the
service based on their own reviews of the CSO’s security documentation. Due to
the sensitivity of the materials, this information is highly controlled through
the use of the
[FedRAMP Package Access Request Form](https://www.fedramp.gov/resources/documents/Agency_Package_Request_Form.pdf)
that must be routed through appropriate signatures within the federal
government. Each form requires FedRAMP’s approval to review the documents.

!!! info "Agency Authorization to Operate"
    Once a cloud service has achieved a FedRAMP Authorized designation, each subsequent federal agency customer must still provide their own ATO for the use of the service. Federal agencies have an easy path to this view of FedRAMP’s reuse model; once the authorization is complete, any federal agency may review the security package, determine acceptability of risks associated with using the service, and issue their own ATO. If any federal agency customers are confused about this process, FedRAMP can support calls to discuss it. All signed agency ATO letters must be sent to FedRAMP. FedRAMP’s [Quick Guide for Reusing Authorizations for Cloud Products](https://www.fedramp.gov/resources/documents/Reusing_Authorizations_for_Cloud_Products_Quick_Guide.pdf) outlines the step-by-step process for agencies to issue their own ATOs for FedRAMP Authorized CSOs. 

## Phase 3: Continuous Monitoring

Throughout the authorization phase, CSPs are required to maintain the CSO, which
includes performing ConMon activities. The CSP’s ability to demonstrate a mature
ConMon process is one of the areas evaluated during the 3PAO’s assessment and
during the federal agency and FedRAMP’s review of an authorization package.
Failure to demonstrate a mature ConMon process will prevent or delay a FedRAMP
Authorized designation.  

Once the authorization phase is complete, a CSP continues to provide monthly
ConMon deliverables via the secure repository to the agencies that are using
their service. These deliverables include an updated POA&M, raw vulnerability
scan files and reports, deviation requests, significant change requests,
incident reporting, and the annual assessment package. Each federal agency using
the service reviews the monthly ConMon deliverables. CSPs with cloud offerings
categorized at LI-SaaS, Low, or Moderate use the FedRAMP secure repository for
posting monthly ConMon materials. CSPs with cloud offerings categorized at High
use their own secure repository.  

CSPs with more than one federal agency customer are required to implement a
collaborative ConMon approach, intended to streamline the ConMon process and
potentially minimize duplicative efforts in a way that helps each federal agency
still perform their due diligence related to ConMon. This approach is described
in the
[FedRAMP Continuous Monitoring Playbook](../continuous-monitoring/intro.md).
Collaborative ConMon benefits agencies by allowing them to share responsibility
for ConMon oversight, and it benefits the CSP by creating a central forum for
addressing questions and achieving consensus related to deviation requests,
significant change requests, and the annual assessment, versus having to
coordinate with each federal agency separately.  

Additionally, CSPs must employ an independent assessment organization or 3PAO to
complete an annual security assessment to ensure that the risk posture of the
system is maintained at an acceptable level throughout the lifecycle of the
system. The annual assessment, along with updated security authorization package
documentation, must be uploaded to the FedRAMP secure repository. FedRAMP should
be notified via [info@fedramp.gov](mailto:info@fedramp.gov) when this is
complete.
