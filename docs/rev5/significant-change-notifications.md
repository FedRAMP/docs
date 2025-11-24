# Significant Change Notification Requirements


!!! success "Effective Date(s) & Overall Applicability for Rev5: Optional"
      - **Optional (Wide Release) beginning 2026-02-27.**
      - Rev5 Authorized providers or those seeking FedRAMP authorization MAY adopt this standard in place of the traditional FedRAMP Significant Change Request process after February 27, 2026.
      - Providers MUST address all requirements and recommendations in this standard prior to full adoption.
      - Rev5 Authorized Providers who switch to the Significant Change Notification process MUST notify FedRAMP by sending an email to info@fedramp.gov.
      - It is up to providers to coordinate with their active agency customers to ensure agency customers will not be negatively impacted by the provider&#x27;s adoption of this policy.
      - Providers seeking FedRAMP authorization who plan to follow the Significant Change Notification policy must clearly note this in their authorization package
      - The FedRAMP Marketplace will include a section that indicates if a cloud service offering is following this policy.
      


The Significant Change Notification (SCN) standard establishes conditions for FedRAMP authorized cloud service providers to make most significant changes without requiring advance government approval. Agency authorizing officials who authorize the use of FedRAMP authorized cloud services are expected to account for the risk of cloud service providers making changes to improve the service.

This standard broadly identifies four types of significant changes, from least impactful to most impactful:
1. Routine Recurring
2. Adaptive
3. Transformative
4. Impact Categorization

These categories, and the resulting requirements, apply only to significant changes.

??? info "Version 25.11B published on 2025-11-24 " 
    **History:**

    - **25.11B (2025-11-24):** No material changes to content; updated JSON structure with additional information about Rev5 application added.
    - **25.11A (2025-11-18):** Updates for the FedRAMP 20x Phase Two pilot; renames FRR-SCN-TF section to FRR-SCN-TR to avoid confusion with &quot;timeframe&quot; rulesets in other FedRAMP standards
    - **25.10A (2025-10-17):** minor updates to improve clarity; switch from federal information to federal customer data; add impact level metadata; no substantive changes.
    - **25.06B (2025-08-24):** Minor non-breaking updates to align term definitions and highlighted terms across updated materials (definitions are now in FRD-ALL).
    - **25.06A (2025-06-17):** Initial release of Significant Change Notification Requirements


??? abstract "Background & Authority"
    - [FedRAMP Authorization Act (44 USC § 3609 (a) (7))](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) directs the Administrator of the General Services Administration to &quot;coordinate with the FedRAMP Board, the Director of the Cybersecurity and Infrastructure Security Agency, and other entities identified by the Administrator, with the concurrence of the [OMB] Director and the [DHS] Secretary, to establish and regularly update a framework for continuous monitoring...&quot;
    - [OMB Memorandum M-24-15 on Modernizing FedRAMP](https://www.fedramp.gov/assets/resources/documents/FedRAMP_Policy_Memo.pdf) section VI states &quot;FedRAMP should seek input from CSPs and develop processes that enable CSPs to maintain an agile deployment lifecycle that does not require advance Government approval, while giving the Government the visibility and information it needs to maintain ongoing confidence in the FedRAMP-authorized system and to respond timely and appropriately to incidents.&quot;

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements apply ALWAYS to ALL _significant changes_ based on current Effective Date(s) and Overall Applicability

### FRR-SCN-01 Notifications

!!! quote ""
    Providers MUST notify all necessary parties when Significant Change Notifications are required, including at least FedRAMP and all agency customers. Providers MAY share Significant Change Notifications publicly or with other parties.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-02 Procedures and Documentation

!!! quote ""
    Providers MUST follow the procedures documented in their security plan to plan, evaluate, test, perform, assess, and document changes.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-03 Evaluate Changes

!!! quote ""
    Providers MUST evaluate and type label all _significant changes_, then follow FedRAMP requirements for the type.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-04

!!! quote ""
    Providers MUST maintain auditable records of these activities and make them available to all necessary parties.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-05

!!! quote ""
    Providers MUST keep historical Significant Change Notifications available to all necessary parties at least until the service completes its next annual assessment.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-06

!!! quote ""
    All parties SHOULD follow FedRAMP&#x27;s best practices and technical assistance on _significant change_ assessment and notification where applicable.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-07

!!! quote ""
    Providers MAY notify necessary parties in a variety of ways as long as the mechanism for notification is clearly documented and easily accessible.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-08

!!! quote ""
    Providers MUST make ALL Significant Change Notifications and related audit records available in similar human-readable and compatible _machine-readable_ formats.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-09

!!! quote ""
    Providers MUST include at least the following information in Significant Change Notifications:

    1. Service Offering FedRAMP ID

    1. Assessor Name (if applicable)

    1. Related POA&amp;M (if applicable)

    1. Significant Change type and explanation of categorization

    1. Short description of change

    1. Reason for change

    1. Summary of customer impact, including changes to services and customer configuration responsibilities

    1. Plan and timeline for the change, including for the verification, assessment, and/or validation of impacted Key Security Indicators or controls

    1. Copy of the business or security impact analysis

    1. Name and title of approver


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-10

!!! quote ""
    Providers MAY include additional relevant information in Significant Change Notifications.


    **Applies to:** Low, Moderate, High
    

---   

        
## Routine Recurring

!!! info ""
    These requirements apply ONLY to _significant changes_ of type _routine recurring_.

### FRR-SCN-RR-01

!!! quote ""
    Providers SHOULD NOT make formal Significant Change Notifications for _routine recurring_ changes; this type of change is exempted from the notification requirements of this standard.


    **Applies to:** Low, Moderate, High
    

---   

        
## Adaptive

!!! info ""
    These requirements apply ONLY to _significant changes_ of type _adaptive_.

### FRR-SCN-AD-01

!!! quote ""
    Providers MUST notify all necessary parties within ten business days after finishing _adaptive_ changes, also including the following information:

    1. Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)


    **Applies to:** Low, Moderate, High
    

---   

        
## Transformative

!!! info ""
    These requirements apply ONLY to _significant changes_ of type _transformative_.

### FRR-SCN-TR-01

!!! quote ""
    Providers SHOULD engage a third-party assessor to review the scope and impact of the planned change before starting _transformative_ changes if human validation is necessary. This review SHOULD be limited to security decisions that require human validation. Providers MUST document this decision and justification.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TR-02

!!! quote ""
    Providers MUST notify all necessary parties of initial plans for _transformative_ changes at least 30 business days before starting _transformative_ changes.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TR-03

!!! quote ""
    Providers MUST notify all necessary parties of final plans for _transformative_ changes at least 10 business days before starting _transformative_ changes.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TR-04

!!! quote ""
    Providers MUST notify all necessary parties within 5 business days after finishing _transformative_ changes, also including the following information:

    1. Updates to all previously sent information


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TR-05

!!! quote ""
    Providers MUST notify all necessary parties within 5 business days after completing the verification, assessment, and/or validation of _transformative_ changes, also including the following information:

    1. Updates to all previously sent information

    1. Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)

    1. Copy of the security assessment report (if applicable)


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TR-06

!!! quote ""
    Providers MUST publish updated service documentation and other materials to reflect _transformative_ changes within 30 business days after finishing _transformative_ changes.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TR-07

!!! quote ""
    Providers MUST allow agency customers to OPT OUT of _transformative_ changes whenever feasible.


    **Applies to:** Low, Moderate, High
    

---   

        
## Impact Categorization

!!! info ""
    These requirements apply ONLY to _significant changes_ of type _impact categorization_.

### FRR-SCN-IM-01

!!! quote ""
    Providers MUST follow the legacy Significant Change Request process or full re-authorization for _impact categorization_ changes, with advance approval from an identified lead agency, until further notice.


    **Applies to:** Low, Moderate, High
    

---   

        
## Exceptions

!!! info ""
    These exceptions MAY override some or all of the FedRAMP requirements for this standard.

### FRR-SCN-EX-01

!!! quote ""
    Providers MAY be required to delay _significant changes_ beyond the standard Significant Change Notification period and/or submit _significant changes_ for approval in advance as a condition of a formal FedRAMP Corrective Action Plan or other agreement.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-EX-02

!!! quote ""
    Providers MAY execute _significant changes_ (including _transformative_ changes) during an emergency or incident without meeting Significant Change Notification requirements in advance ONLY if absolutely necessary. In such emergencies, providers MUST follow all relevant procedures, notify all necessary parties, retroactively provide all Significant Change Notification materials, and complete appropriate assessment after the incident.


    **Applies to:** Low, Moderate, High
    

---   








# Technical assistance

### FRA-SCN

**Purpose:** This Technical Assistance helps stakeholders evaluate and label _significant changes_ by type as required by _FRR-SCN-03_. This assistance is designed for the 20x Phase One Pilot and Rev5 Closed Beta Balance Improvement Test. The Significant Change Notification Requirements will be tested, evaluated, and improved in partnership with stakeholders based on real-world experience.

**Disclaimer:** Every cloud service provider is different, every architecture is different, and every environment is different. Best practices and technical assistance MUST NOT be used as a checklist. All examples are for discussion purposes ONLY.

****

#### FRA-SCN-03

Once a change has been identified as a _significant change_ in general, FedRAMP recommends next determining if a change is of the type _routine recurring_. If it is not, work down from the highest impact to lowest to identify the type of change.

1. Is it a _significant change_?
2. If it is, is it a _routine recurring_ change?
3. If it is not, is it an _impact categorization_ change?
4. If it is not, is it a _transformative_ change?
5. If it is not, then it is an _adaptive_ change.


---   
    

#### FRA-SCN-RR

Activities that match the _routine recurring_ _significant change_ type are performed _regularly_ and routinely by cloud service providers to address flaws or vulnerabilities, address incidents, and generally perform the typical maintenance and service delivery changes expected during day-to-day operations.

These changes leverage mature processes and capabilities to identify, mitigate, and remediate risks as part of the change. They are often entirely automated and may occur without human intervention, even though they have an impact on security of the service.

If the activity does not occur _regularly_ and routinely then it cannot be a _significant change_ of this type (e.g., replacing all physical firewalls to remediate a vulnerability is obviously not regular or routine).

##### Ongoing operations

Key Tests:

- Routine care and feeding by staff during normal duties
- No major impact to service availability
- Does not require executive approval

Examples:

- Provisioning or deprovisioning capacity to support service elasticity
- Changing or tuning performance configurations for instances or services
- Updating and maintaining operational handling of information flows and protection across physical and logical networks (e.g., updating firewall rules)
- Generating or refreshing API or access tokens
          
##### Vulnerability Management

Key Tests:

- Minor, incremental patching or updates
- Significant refactoring or migration process NOT required
- No breaking changes

Examples:

- Updating security service or endpoint signatures
- Routine patching of devices, operating systems, software or libraries
- Updating and deploying code that applies normal fixes and improvements as part of a regular development cycle
- Vulnerability remediation activity that simply replaces a known-bad component(s) with a better version of the exact same thing, running in the exact same way with no changes to processes
          

---   
    

#### FRA-SCN-TR

Activities that match the _transformative_ _significant change_ type are rare for a cloud service offering, adjusted for the size, scale, and complexity of the service. Small cloud service offerings may go years without _transformative_ changes, while hyperscale providers may release multiple _transformative_ changes per year.

##### Transformative changes

Key Tests:

- Alters the service risk profile or require new or significantly different actions to address customer responsibilities
- Requires significant new design, development and testing with discrete associated project planning, budget, marketing, etc.
- Requires extensive updates to security assessments, documentation, and how a large number of security requirements are met and validated

Examples:

- The addition, removal, or replacement of a critical third party service that handles a significant portion of information (e.g., IaaS change)
- Increasing the security categorization of a service within the offering that actively handles _federal customer data_ (does NOT include impact change of entire offering - see impact categorization change)
- Replacement of underlying management planes or paradigm shift in workload orchestration (e.g., bare-metal servers or virtual machines to containers, migration to kubernetes)
- Datacenter migration where large amounts of _federal customer data_ is moved across boundaries different from normal day-to-day operations
- Adding a new AI-based capability that impacts _federal customer data_ in a different way than existing services or capabilities (such as integrating a new third-party service or training on _federal customer data_)
          

---   
    

#### FRA-SCN-AD

Activities that match the _adaptive_ _significant change_ type are a frequent and normal part of iteratively improving a service by deploying new functionality or modifying existing functionality in a way that is typically transparent to customers and does not introduce significant new security risks.

In general, most changes that do not happen _regularly_ will be _adaptive_ changes. This change type deliberately covers a wide range of activities in a way that requires assessment and consideration.

##### Service adjustments

Key Tests:

- Requires minimal changes to security plans or procedures
- Requires some careful planning and project management to implement, but does not rise to the level of planning required for transformative changes
- Requires verification of existing functionality and secure configuration after implementation

Examples:

- Updates to operating systems, containers, virtual machines, software or libraries with known breaking changes, complex steps, or service disruption
- Deploying larger than normal incremental feature improvements in code or libraries that are the work of multiple weeks of development efforts but are not considered a major new service
- Changing cryptographic modules where the new module meets the same standards and characteristics of the former
- Replacing a like-for-like component where some security plan or procedure adjustments are required (e.g., scanning tool or managed database swap)
- Adding models to existing approved AI services without exposing _federal customer data_ to new services
          

---   
    
  
