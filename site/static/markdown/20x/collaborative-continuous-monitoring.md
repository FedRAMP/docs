# Collaborative Continuous Monitoring

!!! info "Effective Date(s) & Overall Applicability for 20x"
      - **Required** (Phase 2 Pilot)
      - Phase 1 pilot authorizations have one year from authorization to fully address this process but must demonstrate continuous quarterly progress.
      - Phase 2 Pilot participants must demonstrate significant progress towards addressing this process prior to submission for authorization review.


??? abstract "Background & Authority"
    - [OMB Circular A-130: Managing Information as a Strategic Resource](https://whitehouse.gov/wp-content/uploads/legacydrupalfiles/omb/circulars/A130/a130revised.pdf) section 4 (c) states that agencies SHALL &quot;conduct and document security and privacy control assessments prior to the operation of an information system, and periodically thereafter, consistent with the frequency defined in the agency information security continuous monitoring (ISCM) and privacy continuous monitoring (PCM) strategies and the agency risk tolerance&quot;
    - [The FedRAMP Authorization Act (44 USC § 3609 (a)(1))](https://fedramp.gov/docs/authority/law/#a-roles-and-responsibilities) directs the Administrator of the General Services Administration to &quot;develop, coordinate, and implement a process … including, as appropriate, oversight of continuous monitoring of cloud computing products and services&quot;

Agencies are required to continuously monitor all of their information systems following a documented process integrated into their Information Security Continuous Monitoring (ISCM) strategy. These strategies are specific to each agency and may even vary at the bureau, component, or information system levels.

The concept behind collaborative continuous monitoring is unique to government customers and creates a burden for commercial cloud service providers. This process attempts to minimize this burden by encouraging the use of automated monitoring and review of authorization data required by other FedRAMP standards and limiting the expected human interaction costs for cloud service providers and agencies. Agencies are expected to use information from the cloud service provider collaboratively in accordance with their agency ISCM strategy without blocking other agencies from making their own risk-based decisions about ongoing authorization.

---



## Ongoing Authorization Reports

These requirements and recommendations for Ongoing Authorization Reports apply to all cloud service offerings following the CCM process.

### Report Availability

??? abstract "CCM-OAR-AVL"

    **Former ID:** FRR-CCM-01

    **Changelog:**

    - **2026-02-04:** Re-ordered phrasing; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST make an Ongoing Authorization Report available to all necessary parties every 3 months, covering the entire period since the previous summary, in a consistent format that is human readable; this report MUST include high-level summaries of at least the following information:

    1. Changes to authorization data

    1. Planned changes to authorization data during at least the next 3 months

    1. Accepted vulnerabilities

    1. Transformative changes

    1. Updated recommendations or best practices for security, configuration, usage, or similar aspects of the cloud service offering


    ---
    **Terms:** [Accepted Vulnerability](fedramp-definitions/#accepted-vulnerability){ data-preview }, [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }, [Transformative](fedramp-definitions/#transformative){ data-preview }, [Vulnerability](fedramp-definitions/#vulnerability){ data-preview }
  
### Next Report Date

??? abstract "CCM-OAR-NRD"

    **Former ID:** FRR-CCM-03

    **Changelog:**

    - **2026-02-04:** Clarified; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST publicly include the target date for their next Ongoing Authorization Report with other public authorization data.


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }
  
### Feedback Mechanism

??? abstract "CCM-OAR-FBM"

    **Former ID:** FRR-CCM-04

    **Changelog:**

    - **2026-02-04:** Added note; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST establish and share an asynchronous mechanism for all necessary parties to provide feedback or ask questions about each Ongoing Authorization Report.

    ---

    _**Note:** This could be email by default but providers are encouraged to consider something more interactive as appropriate._


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }
  
### Anonymized Feedback Summary

??? abstract "CCM-OAR-AFS"

    **Former ID:** FRR-CCM-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST maintain an anonymized and desensitized summary of the feedback, questions, and answers about each Ongoing Authorization Report as an addendum to the Ongoing Authorization Report.

    ---

    _**Note:** This is intended to encourage sharing of information and decrease the burden on the cloud service provider - providing this summary will reduce duplicate questions from agencies and ensure FedRAMP has access to this information. It is generally in the provider’s interest to update this addendum frequently throughout the quarter._


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }
  
### Limit Sensitive Information

??? abstract "CCM-OAR-LSI"

    **Former ID:** FRR-CCM-06

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST NOT irresponsibly disclose sensitive information in an Ongoing Authorization Report that would likely have an adverse effect on the cloud service offering.


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }
  
### Spread Out Reports

??? abstract "CCM-OAR-SOR"

    **Former ID:** FRR-CCM-02

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD establish a regular 3 month cycle for Ongoing Authorization Reports that is spread out from the beginning, middle, or end of each quarter.

    ---

    _**Note:** This recommendation is intended to discourage hundreds of cloud service providers from releasing their Ongoing Authorization Reports during the first or last week of each quarter because that is the easiest way for a single provider to track this deliverable; the result would overwhelm agencies with many cloud services. Widely used cloud service providers are encouraged to work with their customers to identify ideal timeframes for this cycle._


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Regularly](fedramp-definitions/#regularly){ data-preview }
  
### Responsible Public Sharing

??? abstract "CCM-OAR-RPS"

    **Former ID:** FRR-CCM-07

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MAY responsibly share some or all of the information an Ongoing Authorization Report publicly or with other parties if the provider determines doing so will NOT likely have an adverse effect on the cloud service offering.


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }
  
## Quarterly Reviews

These requirements and recommendations for Quarterly Reviews apply to all cloud service offerings following the CCM process.

### Quarterly Review Meeting

??? abstract "CCM-QTR-MTG"

    

    **Changelog:**

    - **2026-02-04:** Combined requirements and recommendations that varied by impact level into a single set with minor wording modification as appropriate.



!!! quote ""

    === "Low"
        Providers SHOULD host a synchronous Quarterly Review every 3 months, open to all necessary parties, to review aspects of the most recent Ongoing Authorization Reports that the provider determines are of the most relevance to agencies.


    === "Moderate"
        Providers MUST host a synchronous Quarterly Review every 3 months, open to all necessary parties, to review aspects of the most recent Ongoing Authorization Reports that the provider determines are of the most relevance to agencies.


    === "High"
        Providers MUST host a synchronous Quarterly Review every 3 months, open to all necessary parties, to review aspects of the most recent Ongoing Authorization Reports that the provider determines are of the most relevance to agencies.




    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Meeting Registration Info

??? abstract "CCM-QTR-REG"

    **Former ID:** FRR-CCM-QR-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST include either a registration link or a downloadable calendar file with meeting information for Quarterly Reviews in the authorization data available to all necessary parties required by ADS-CSL-UCP and ADS-CSO-FCT.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Next Review Date

??? abstract "CCM-QTR-NRD"

    **Former ID:** FRR-CCM-QR-06

    **Changelog:**

    - **2026-02-04:** Clarified; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST publicly include the target date for their next Quarterly Review with other public authorization data.


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### No Irresponsible Disclosure

??? abstract "CCM-QTR-NID"

    **Former ID:** FRR-CCM-QR-04

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST NOT irresponsibly disclose sensitive information in a Quarterly Review that would likely have an adverse effect on the cloud service offering.


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Schedule Around Reports

??? abstract "CCM-QTR-SAR"

    **Former ID:** FRR-CCM-QR-03

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD regularly schedule Quarterly Reviews to occur at least 3 business days after releasing an Ongoing Authorization Report AND within 10 business days of such release.


    ---
    **Terms:** [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }, [Regularly](fedramp-definitions/#regularly){ data-preview }
  
### Additional Content

??? abstract "CCM-QTR-ACT"

    **Former ID:** FRR-CCM-QR-07

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD include additional information in Quarterly Reviews that the provider determines is of interest, use, or otherwise relevant to agencies.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Record/Transcribe Reviews

??? abstract "CCM-QTR-RTR"

    **Former ID:** FRR-CCM-QR-09

    **Changelog:**

    - **2026-02-04:** Simplified; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD record or transcribe Quarterly Reviews and make such available to all necessary parties with other authorization data.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Restrict Third Parties

??? abstract "CCM-QTR-RTP"

    **Former ID:** FRR-CCM-QR-08

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD NOT invite third parties to attend Quarterly Reviews intended for agencies unless they have specific relevance.

    ---

    _**Note:** This is because agencies are less likely to actively participate in meetings with third parties; the cloud service provider&#x27;s independent assessor should be considered relevant by default._


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Share Recordings Responsibly

??? abstract "CCM-QTR-SRR"

    **Former ID:** FRR-CCM-QR-10

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MAY responsibly share recordings or transcriptions of Quarterly Reviews with the public or other parties ONLY if the provider removes all agency information (comments, questions, names, etc.) AND determines sharing will NOT likely have an adverse effect on the cloud service offering.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Share Content Responsibly

??? abstract "CCM-QTR-SCR"

    **Former ID:** FRR-CCM-QR-11

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MAY responsibly share content prepared for a Quarterly Review with the public or other parties if the provider determines doing so will NOT likely have an adverse effect on the cloud service offering.


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
## Agency Guidance

These requirements and recommends for agencies apply to all agencies reusing a FedRAMP Certification or Validation for a cloud service offering following the CCM process.

### Review Ongoing Reports

??? abstract "CCM-AGM-ROR"

    **Former ID:** FRR-CCM-AG-01

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Agencies MUST review each Ongoing Authorization Report to understand how changes to the cloud service offering may impact the previously agreed-upon risk tolerance documented in the agency&#x27;s Authorization to Operate of a federal information system that includes the cloud service offering in its boundary.

    ---

    _**Note:** This is required by 44 USC § 35, OMB A-130, FIPS-200, and M-24-15._


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }
  
### Notify FedRAMP of Concerns

??? abstract "CCM-AGM-NFR"

    **Former ID:** FRR-CCM-AG-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Agencies MUST notify FedRAMP by sending an email to info@fedramp.gov if the information presented in an Ongoing Authorization Report, Quarterly Review, or other ongoing authorization data causes significant concerns that may lead the agency to stop operation of the cloud service offering.

    ---

    _**Note:** Agencies are required to notify FedRAMP by OMB Memorandum M-24-15 section IV (a)._


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Notify FedRAMP After Requests

??? abstract "CCM-AGM-NFA"

    **Former ID:** FRR-CCM-AG-07

    **Changelog:**

    - **2026-02-04:** Clarified notification requirements; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Agencies MUST notify FedRAMP after requesting any additional information or materials from a cloud service provider beyond those FedRAMP requires by sending an email to info@fedramp.gov.

    ---

    _**Note:** Agencies are required to notify FedRAMP by OMB Memorandum M-24-15 section IV (a)._


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }
  
### No Additional Requirements

??? abstract "CCM-AGM-NAR"

    **Former ID:** FRR-CCM-AG-06

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Agencies MUST NOT place additional security requirements on cloud service providers beyond those required by FedRAMP UNLESS the head of the agency or an authorized delegate makes a determination that there is a demonstrable need for such; this does not apply to seeking clarification or asking general questions about authorization data.

    ---

    _**Note:** This is a statutory requirement in 44 USC § 3613 (e) related to the Presumption of Adequacy for a FedRAMP authorization._


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }
  
### Consider Security Category

??? abstract "CCM-AGM-CSC"

    **Former ID:** FRR-CCM-AG-02

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Agencies SHOULD consider the Security Category noted in their Authorization to Operate of the federal information system that includes the cloud service offering in its boundary and assign appropriate information security resources for reviewing Ongoing Authorization Reports, attending Quarterly Reviews, and other ongoing authorization data.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Senior Security Reviewer

??? abstract "CCM-AGM-SSR"

    **Former ID:** FRR-CCM-AG-03

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    === "Low"
        Agencies MAY designate a senior information security official to review Ongoing Authorization Reports and represent the agency at Quarterly Reviews for cloud service offerings included in agency information systems with a Security Category of High.


    === "Moderate"
        Agencies MAY designate a senior information security official to review Ongoing Authorization Reports and represent the agency at Quarterly Reviews for cloud service offerings included in agency information systems with a Security Category of High.


    === "High"
        Agencies SHOULD designate a senior information security official to review Ongoing Authorization Reports and represent the agency at Quarterly Reviews for cloud service offerings included in agency information systems with a Security Category of High.




    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  
### Notify Provider of Concerns

??? abstract "CCM-AGM-NPC"

    **Former ID:** FRR-CCM-AG-04

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Agencies SHOULD formally notify the provider if the information presented in an Ongoing Authorization Report, Quarterly Review, or other ongoing authorization data causes significant concerns that may lead the agency to remove the cloud service offering from operation.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }, [Quarterly Review](fedramp-definitions/#quarterly-review){ data-preview }
  


