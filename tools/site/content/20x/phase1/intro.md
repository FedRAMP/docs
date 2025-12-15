# 20x Phase 1 (Archive)

!!! danger "The 20x Phase 1 pilot is over!"

    The 20x Phase 1 pilot ended in September 2026. 
    
    The documentation on this page is outdated and only preserved for reference for participants in the 20x Phase 1 pilot. All 20x Phase 1 pilot participants who receive a pilot FedRAMP authorization have up to 12 months to adopt Phase Two standards.

The 20xP1 pilot is testing a new approach to FedRAMP Low authorization that uses
Key Security Indicators (KSIs) and machine-readable validation to assess and
validate the security capabilities expected of cloud services used by the
federal government.

This pilot is open to the public. Any cloud-native SaaS provider may
participate. No agency sponsor is needed. Qualifying cloud service offerings
that successfully complete Phase 1 will receive a 12 month FedRAMP Low program
authorization and will be prioritized for FedRAMP Moderate program authorization
in Phase Two.

The 20xP1 pilot is iterative, transparent, collaborative, and refreshingly
unstructured to encourage rapid innovation. We will:

&nbsp;&nbsp;&nbsp;&nbsp;**Demonstrate Feasibility:** Prove that Key Security
Indicators and machine-readable validation can effectively assess security.

&nbsp;&nbsp;&nbsp;&nbsp;**Accelerate Authorizations:** Create a faster path to
FedRAMP authorization.

&nbsp;&nbsp;&nbsp;&nbsp;**Drive Innovation:** Encourage innovative security
assessment and validation techniques.

&nbsp;&nbsp;&nbsp;&nbsp;**Improve Transparency:** Increase transparency in the
authorization process.

## Dates and Milestones

| Date       | Milestone                                                                         |
| ---------- | --------------------------------------------------------------------------------- |
| 2025-05-30 | The 20xP1 pilot officially begins and FedRAMP begins accepting pilot submissions. |
| 2025-08-19 | The final day FedRAMP will accept 20xP1 pilot submissions.                        |

Once FedRAMP has completed review of all submissions during the 20xP1 pilot, the
FedRAMP 20x Low authorization requirements will be formalized and this path will
become available for all cloud service providers. Participants who have worked
to create FedRAMP 20x packages during the pilot but were unable to submit on
time will be well positioned to receive a formal FedRAMP 20x authorization.

## Participation

Participation is self-organized and self-directed. Participants should:

- Read this page, as well as more detailed information on the Authorization page
- Review the [Key Security Indicators]({base}/20x/standards/20x-ksi/)
  and [Minimum Assessment Scope]({base}/20x/standards/20x-mas/)
- Consider how well your current security process aligns with the Key Security
  Indicators
- Engage in our [20x community working group]({base}/community/)
- Review the draft submissions posted in the
  [community discussion forum](https://github.com/FedRAMP/community/discussions/categories/20xp1-pilot-drafts),
  as well as FedRAMP's feedback

<ColorfulBlockquote color="#ff98004d" text="Participants have equal access to all information about the pilot by reviewing the additional materials on this site and in the public working groups. It's important that you read this information so you can make the best decisions about how to move forward on your own."/>

## Community Working Groups: The Heart of 20x

To ensure equal and fair access to information, FedRAMP is only providing
support in the public
[FedRAMP 20x Community Working Group]({base}/community/). It serves as
the central hub for collaboration, discussion, and support for the 20xP1 pilot,
where you can ask questions, share insights, and learn from others.

Formal submissions should be made directly to FedRAMP following the process
outlined below, however we encourage sharing of draft submissions publicly in
the
[20x Community Working Group](https://github.com/FedRAMP/community/discussions)
to enable transparency, collaboration, and collective innovation. Sharing your
experiences and insights benefits the entire community.

---

# The 20xP1 Authorization Process

The authorization process begins when a cloud service provider submits an
initial 20x authorization request package to FedRAMP. Participants should expect
a multi-step collaborative process with additional work required to continue
through the process towards final authorization. This process will likely
entail:

1. **Initial Submission:** You submit a comprehensive package that meets the
   submission requirements, including a completed 3PAO assessment.

2. **Initial Review:** FedRAMP reviews your initial submission and reaches out
   with feedback or next steps.

3. **Collaborative Review:** FedRAMP hosts a technical discussion with you and
   your 3PAO to dig into the package in more detail, learn about your approach,
   and get feedback on the process from you and your 3PAO.

4. **Congrats\! FedRAMP In Process:** If your package qualifies, your cloud
   service is listed on the FedRAMP Marketplace as In Process. To move towards
   full authorization, you will need to meet any outstanding requirements
   identified during review.

5. **Final Authorization Submission:** You submit a complete authorization
   package that meets all outstanding requirements for authorization, mapped to
   the latest KSI release versions.

6. **Comprehensive Review & Exercises:** The FedRAMP review team conducts
   further discussions with you and your 3PAO which include tabletop exercises.

7. **Congrats\! FedRAMP Authorized:** If your package qualifies, your cloud
   service is listed on the FedRAMP Marketplace as FedRAMP 20x Low Authorized
   for twelve months.

8. **Ongoing Authorization:** Continuous monitoring, regular reporting, and
   ongoing authorization are required to maintain your 20x Low authorization.
   Your authorization package will need to be updated to final FedRAMP 20x Low
   requirements within twelve months, and your cloud service will be prioritized
   for FedRAMP 20x Phase Two.

## Initial Submission Requirements

!!! danger "The 20x Phase 1 pilot is over!"

    The 20x Phase 1 pilot ended in September 2026. 
    
    The documentation on this page is outdated and only preserved for reference for participants in the 20x Phase One pilot. All 20x Phase One pilot participants who receive a pilot FedRAMP authorization have up to 12 months to adopt Phase Two standards.

Send an email to [20x@fedramp.gov](mailto:20x@fedramp.gov) that includes:

- Summary of the cloud service provider and cloud service offering
- Points of contact for the cloud service provider and 3PAO
- Instructions on how to access the initial submission package

The initial submission itself MUST NOT be sent through email. The initial
submission MUST contain the following:

- Summary of and rationale for the approach used to generate the submission
- Summary from a FedRAMP recognized 3PAO explaining the approach used for
  assessment
- Human-readable and machine-readable assessment
  - Include the status of each KSI Validation (True, False, Partial)
  - Include supporting evidence or links to supporting evidence for each KSI
    Validation
  - Evidence should include underlying information such as policies and
    inventories
  - Include integrated verification by a 3PAO
- Data definition or data schema that explains the machine-readable package
- Proposal or prototype for continuously reporting on a significant percentage
  of KSI Validations

Providers may submit an initial package using draft 25.04 (April release) KSIs from [RFC-0006]({base}/rfcs/0006/) but all participants will be expected to complete the Phase One pilot using the finalized KSIs [in the formal 25.05 (May release) standard]({base}/20x/standards/20x-ksi/).

## Final Authorization Requirements

The initial submission package focuses on demonstrating that a cloud service
offering meets the security capabilities required for FedRAMP \- but FedRAMP
authorization requires a bit more to ensure agencies understand your offering
and how to securely use it\!

In addition to the Key Security Indicator based materials, you will need the
following to move from In Process to a final FedRAMP 20x authorization:

**Trust Repository**

Provide a user-friendly, clearly organized repository that MUST contain:

- Points of Contact for the cloud service provider and 3PAO
- Your authorization package materials
- A means for FedRAMP and agencies to request access to the trust portal
- Services included in the authorization (including any specific license
  requirements)
- Continuous monitoring reporting/documentation and supporting artifacts
- A place for POA&amp;Ms, Significant Change Notifications, and Incident Reports

This repository may include helpful additional items such as:

- Diagrams that help understand the cloud service offering and interpret the
  results of testing

FedRAMP is working to establish formal requirements for trust centers that allow
cloud service providers to make security information available directly to
FedRAMP and other agency customers. A draft standard that includes Trust Center
Requirements has been published for
[public comment under RFC-0011]({base}/rfcs/0011/). This draft is a
good starting point for prioritizing capabilities for your Trust Center.

**Agency Secure Configuration Guidance**

Provide instructions to help agencies securely configure an instance of your
service for federal use. This should include best practices on configuring at
least:

- Federated Identity
- Role/Attribute based access control
- API integration
- Auditing & Logging

**Future Plans**

You will need to address additional requirements for FedRAMP 20x as they are
formalized during the Phase One pilot. Many of these are currently pending as
open RFCs. We strongly recommend including a brief plan for how you will address
at least the following:

- Continuously validating and reporting on the validation status of your
  offering
- Making authorization materials available via API
- Handling Significant Change Notifications
- Hosting Collaborative Continuous Monitoring meetings

**Ongoing Authorization Requirements**

- Provide updated monitoring data during the course of the authorization
- Refine the service and documentation as 20x standards are finalized
- Correct any failing or partial validations during the 1 year initial
  authorization

