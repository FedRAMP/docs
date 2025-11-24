# Collaborative Continuous Monitoring Standard

!!! success "Effective Date(s) & Overall Applicability for 20x: Required (Phase 2 Pilot)"
      - Phase 1 pilot authorizations have one year from authorization to fully address this policy but must demonstrate continuous quarterly progress.
      - Phase 2 Pilot participants must demonstrate significant progress towards addressing this policy prior to submission for authorization review.


Agencies are required to continuously monitor all of their information systems following a documented process integrated into their Information Security Continuous Monitoring (ISCM) strategy. These strategies are specific to each agency and may even vary at the bureau, component, or information system levels.

The concept behind collaborative continuous monitoring is unique to government customers and creates a burden for commercial cloud service providers. This standard attempts to minimize this burden by encouraging the use of automated monitoring and review of authorization data required by other FedRAMP standards and limiting the expected human interaction costs for cloud service providers and agencies. Agencies are expected to use information from the cloud service provider collaboratively in accordance with their agency ISCM strategy without blocking other agencies from making their own risk-based decisions about ongoing authorization.

??? info "Version 25.11B published on 2025-11-24 " 
    **History:**

    - **25.11B (2025-11-24):** No material changes to content; updated JSON structure with additional information about Rev5 application added.
    - **25.11A (2025-11-18):** Initial release of the Collaborative Continuous Monitoring Standard (CCM) for the FedRAMP 20x Phase Two pilot.


??? abstract "Background & Authority"
    - [OMB Circular A-130: Managing Information as a Strategic Resource](https://whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) section 4 (c) states that agencies SHALL &quot;conduct and document security and privacy control assessments prior to the operation of an information system, and periodically thereafter, consistent with the frequency defined in the agency information security continuous monitoring (ISCM) and privacy continuous monitoring (PCM) strategies and the agency risk tolerance&quot;
    - [The FedRAMP Authorization Act (44 USC § 3609 (a)(1))](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) directs the Administrator of the General Services Administration to &quot;develop, coordinate, and implement a process … including, as appropriate, oversight of continuous monitoring of cloud computing products and services&quot;

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements and recommendations apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-CCM-01 Ongoing Authorization Reports

!!! quote ""
    Providers MUST make an _Ongoing Authorization Report_ available to _all necessary parties_ every 3 months, in a consistent format that is human readable, covering the entire period since the previous summary; this report MUST include high-level summaries of at least the following information:

    1. Changes to _authorization data_

    1. Planned changes to _authorization data_ during at least the next 3 months

    1. _Accepted vulnerabilities

    1. _Transformative_ changes

    1. Updated recommendations or best practices for security, configuration, usage, or similar aspects of the _cloud service offering_


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-02 Avoiding Simultaneous Reports

!!! quote ""
    Providers SHOULD establish a regular 3 month cycle for _Ongoing Authorization Reports_ that is spread out from the beginning, middle, or end of each quarter.

    **Note:** This recommendation is intended to discourage hundreds of cloud service providers from releasing their _Ongoing Authorization Reports_ during the first or last week of each quarter because that is the easiest way for a single provider to track this deliverable; the result would overwhelm agencies with many cloud services. Widely used cloud service providers are encouraged to work with their customers to identify ideal timeframes for this cycle.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-03 Public Next Report Date

!!! quote ""
    Providers MUST publicly include the target date for their next _Ongoing Authorization Report_ with the _authorization data_ required by FRR-ADS-01.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-04 Feedback Mechanism

!!! quote ""
    Providers MUST establish and share an asynchronous mechanism for _all necessary parties_ to provide feedback or ask questions about each _Ongoing Authorization Report_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-05 Anonymized Feedback Summary

!!! quote ""
    Providers MUST maintain an anonymized and desensitized summary of the feedback, questions, and answers about each _Ongoing Authorization Report_ as an addendum to the _Ongoing Authorization Report_.

    **Note:** This is intended to encourage sharing of information and decrease the burden on the cloud service provider - providing this summary will reduce duplicate questions from _agencies_ and ensure FedRAMP has access to this information. It is generally in the provider’s interest to update this addendum frequently throughout the quarter.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-06 Protect Sensitive Information

!!! quote ""
    Providers MUST NOT irresponsibly disclose sensitive information in an _Ongoing Authorization Report_ that would _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-07 Responsible Public Sharing

!!! quote ""
    Providers MAY responsibly share some or all of the information an _Ongoing Authorization Report_ publicly or with other parties if the provider determines doing so will NOT _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

---   

        
## Quarterly Reviews

!!! info ""
    These requirements and recommendations apply to providers hosting synchronous _Quarterly Reviews_ with all agencies.

### FRR-CCM-QR-01 Quarterly Review Hosting

!!! quote ""
    Providers SHOULD host a synchronous _Quarterly Review_ every 3 months, open to _all necessary parties_, to review aspects of the most recent _Ongoing Authorization Reports_ that the provider determines are of the most relevance to _agencies_; providers who do not host _Quarterly Reviews_ MUST clearly state this and explain this decision in the _authorization data_ available to all _necessary parties_ required by FRR-ADS-06 and FRR-ADS-07


    **Applies to:** Low
    

### FRR-CCM-QR-02 Quarterly Review

!!! quote ""
    Providers MUST host a synchronous _Quarterly Review_ every 3 months, open to _all necessary parties_, to review aspects of the most recent _Ongoing Authorization Reports_ that the provider determines are of the most relevance to _agencies_.


    **Applies to:** Moderate, High
    

### FRR-CCM-QR-03 Review Scheduling Window

!!! quote ""
    Providers SHOULD regularly schedule _Quarterly Reviews_ to occur at least 3 business days after releasing an _Ongoing Authorization Report_ AND within 10 business days of such release.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-04 No Irresponsible Disclosure

!!! quote ""
    Providers MUST NOT irresponsibly disclose sensitive information in a _Quarterly Review_ that would _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-05 Meeting Registration Info

!!! quote ""
    Providers MUST include either a registration link or a downloadable calendar file with meeting information for _Quarterly Reviews_ in the _authorization data_ available to all _necessary parties_ required by FRR-ADS-06 and FRR-ADS-07.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-06 Next Review Date

!!! quote ""
    Providers MUST publicly include the target date for their next _Quarterly Review_ with the _authorization data_ required by FRR-ADS-01.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-07 Additional Content

!!! quote ""
    Providers SHOULD include additional information in _Quarterly Reviews_ that the provider determines is of interest, use, or otherwise relevant to _agencies_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-08 Restrict Third Parties

!!! quote ""
    Providers SHOULD NOT invite third parties to attend _Quarterly Reviews_ intended for _agencies_ unless they have specific relevance.

    **Note:** This is because _agencies_ are less likely to actively participate in meetings with third parties; the cloud service provider&#x27;s independent assessor should be considered relevant by default.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-09 Record/Transcribe Reviews

!!! quote ""
    Providers SHOULD record or transcribe _Quarterly Reviews_ and make such available to _all necessary parties_ with other _authorization data_ required by FRR-ADS-06 and FRR-ADS07.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-10 Share Recordings Responsibly

!!! quote ""
    Providers MAY responsibly share recordings or transcriptions of _Quarterly Reviews_ with the public or other parties ONLY if the provider removes all _agency_ information (comments, questions, names, etc.) AND determines sharing will NOT _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-11 Share Content Responsibly

!!! quote ""
    Providers MAY responsibly share content prepared for a _Quarterly Review_ with the public or other parties if the provider determines doing so will NOT _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

---   

        
## Agency Guidance

!!! info ""
    This section includes requirements and recommendations for _agencies_ who are using FedRAMP Authorized cloud services based on statute and policy directives from OMB that apply to _agencies_.

### FRR-CCM-AG-01 Review Ongoing Reports

!!! quote ""
    Agencies MUST review each _Ongoing Authorization Report_ to understand how changes to the _cloud service offering_ may impact the previously agreed-upon risk tolerance documented in the _agency&#x27;s_ Authorization to Operate of a federal information system that includes the _cloud service offering_ in its boundary.

    **Note:** This is required by 44 USC § 35, OMB A-130, FIPS-200, and M-24-15.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-02 Consider Security Category

!!! quote ""
    Agencies SHOULD consider the Security Category noted in their Authorization to Operate of the federal information system that includes the _cloud service offering_ in its boundary and assign appropriate information security resources for reviewing _Ongoing Authorization Reports_, attending _Quarterly Reviews_, and other ongoing _authorization data_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-03 Senior Security Reviewer

!!! quote ""
    Agencies SHOULD designate a senior information security official to review _Ongoing Authorization Reports_ and represent the agency at _Quarterly Reviews_ for _cloud service offerings_ included in agency information systems with a Security Category of High.


    **Applies to:** High
    

### FRR-CCM-AG-04 Notify Provider of Concerns

!!! quote ""
    Agencies SHOULD formally notify the provider if the information presented in an _Ongoing Authorization Report_, _Quarterly Review_, or other ongoing _authorization data_ causes significant concerns that may lead the _agency_ to remove the _cloud service offering_ from operation.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-05 Notify FedRAMP of Concerns

!!! quote ""
    Agencies MUST notify FedRAMP by sending a notification to info@fedramp.gov if the information presented in an _Ongoing Authorization Report_, _Quarterly Review_, or other ongoing _authorization data_ causes significant concerns that may lead the _agency_ to stop operation of the _cloud service offering_.

    **Note:** Agencies are required to notify FedRAMP by OMB Memorandum M-24-15 section IV (a).


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-06 No Additional Requirements

!!! quote ""
    Agencies MUST NOT place additional security requirements on cloud service providers beyond those required by FedRAMP UNLESS the head of the agency or an authorized delegate makes a determination that there is a demonstrable need for such; this does not apply to seeking clarification or asking general questions about _authorization data_.

    **Note:** This is a statory requirement in 44 USC § 3613 (e) related to the Presumption of Adequacy for a FedRAMP authorization.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-07 Notify FedRAMP After Requests

!!! quote ""
    Agencies MUST inform FedRAMP after requesting any additional information or materials from a cloud service provider beyond those required in this policy by sending a notification to info@fedramp.gov.

    **Note:** Agencies are required to notify FedRAMP by OMB Memorandum M-24-15 section IV (a).


    **Applies to:** Low, Moderate, High
    

---   








