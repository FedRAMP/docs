# Key Security Indicators

!!! info "Effective Date(s) & Overall Applicability for 20x"
      - **Required** (Phase 2 Pilot)
      - Phase 1 pilot authorizations have one year from authorization to fully address this process but must demonstrate continuous quarterly progress.
      - Phase 2 Pilot participants must demonstrate significant progress towards addressing this process prior to submission for authorization review.


??? abstract "Background & Authority"
    - [OMB Circular A-130](https://whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) Appendix I states &quot;Agencies may also develop overlays for specific types of information or communities of interest (e.g., all web-based applications, all health care-related systems) as part of the security control selection process. Overlays provide a specification of security or privacy controls, control enhancements, supplemental guidance, and other supporting information as part of the tailoring process, that is intended to complement (and further refine) security control baselines. The overlay may be more stringent or less stringent than the original security control baseline and can be applied to multiple information systems.&quot;
    - [NIST SP 800-53B](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final) Section 2.5 states &quot;As the number of controls in [SP 800-53] grows in response to an increasingly sophisticated threat space, it is important for organizations to have the ability to describe key capabilities needed to protect organizational missions and business functions, and to subsequently select controls that—if properly designed, developed, and implemented—produce such capabilities. The use of capabilities simplifies how the protection problem is viewed conceptually. Using the construct of a capability provides a method of grouping controls that are employed for a common purpose or to achieve a common objective.&quot; This section later states &quot;Ultimately, authorization decisions (i.e., risk acceptance decisions) are made based on the degree to which the desired capabilities have been effectively achieved.&quot;
    - [NIST SP 800-53A](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) Section 3.5 states &quot;When organizations employ the concept of capabilities, automated and manual assessments account for all security and privacy controls that comprise the security and privacy capabilities. Assessors are aware of how the controls work together to provide such capabilities.&quot;
    - [FedRAMP Authorization Act (44 USC § 3609 (a) (1))](https://fedramp.gov/docs/authority/law/#a-roles-and-responsibilities) requires that the Administrator of the General Services Administration shall &quot;in consultation with the [DHS] Secretary, develop, coordinate, and implement a process to support agency review, reuse, and standardization, where appropriate, of security assessments of cloud computing products and services...&quot; 44 USC § 3609 (c) (2) further states that &quot;the [GSA] Administrator shall establish a means for the automation of security assessments and reviews.&quot;

Modern cloud services use automated or code-driven configuration management and control planes to ensure predictable, repeatable, reliable, and secure outcomes during deployment and operation. The majority of a service security assessment can take place continuously via automated validation for simple cloud-native services if the need for a traditional control-by-control narrative approach is removed.

---


## 20x-Specific Provider Responsibilities

These requirements and recommendations apply to all cloud service offerings following the 20x path. 

### Implementation Summaries

??? abstract "KSI-CSX-SUM"

    **Former ID:** FRR-KSI-02

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST maintain simple high-level summaries of at least the following for each Key Security Indicator:

    1. Goals for how it will be implemented and validated, including clear pass/fail criteria and traceability

    1. The consolidated _information resources_ that will be validated (this should include consolidated summaries such as &quot;all employees with privileged access that are members of the Admin group&quot;)

    1. The machine-based processes for _validation_ and the _persistent_ cycle on which they will be performed (or an explanation of why this doesn&#x27;t apply)

    1. The non-machine-based processes for _validation_ and the _persistent_ cycle on which they will be performed (or an explanation of why this doesn&#x27;t apply)

    1. Current implementation status

    1. Any clarifications or responses to the assessment summary


    ---
    **Terms:** [Machine-Based (information resources)](../fedramp-definitions/#machine-based-information-resources){ data-preview }, [Persistent Validation](../fedramp-definitions/#persistent-validation){ data-preview }

### Application within MAS

??? abstract "KSI-CSX-MAS"

    **Former ID:** FRR-KSI-01

    **Changelog:**

    - **2026-02-04:** Removed unnecessary cloud service at the beginning; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD apply ALL Key Security Indicators to ALL aspects of their cloud service offering that are within the FedRAMP Minimum Assessment Scope.


    ---
    **Terms:** [Cloud Service Offering](../fedramp-definitions/#cloud-service-offering){ data-preview }

### AFR Order of Criticality

??? abstract "KSI-CSX-ORD"

    

    **Changelog:**

    - **2026-02-04:** This recommendation is new in v-0.9.0 to clarify expectations.



!!! quote ""

    Providers MAY use the following order of criticality for approaching Authorization by FedRAMP Key Security Indicators for an initial authorization package:

    1. Minimum Assessment Scope (MAS)

    1. Authorization Data Sharing (ADS)

    1. Using Cryptographic Modules (UCM)

    1. Vulnerability Detection and Response (VDR)

    1. Significant Change Notifications (SCN)

    1. Persistent Validation and Assessment (PVA)

    1. Secure Configuration Guide (RSC)

    1. Collaborative Continuous Monitoring (CCM)

    1. FedRAMP Security Inbox (FSI)

    1. Incident Communications Procedures (ICP)


    ---
    **Terms:** [Authorization Package](../fedramp-definitions/#authorization-package){ data-preview }, [Authorization data](../fedramp-definitions/#authorization-data){ data-preview }, [FedRAMP Security Inbox](../fedramp-definitions/#fedramp-security-inbox){ data-preview }, [Incident](../fedramp-definitions/#incident){ data-preview }, [Persistent Validation](../fedramp-definitions/#persistent-validation){ data-preview }, [Persistently](../fedramp-definitions/#persistently){ data-preview }, [Significant change](../fedramp-definitions/#significant-change){ data-preview }, [Vulnerability](../fedramp-definitions/#vulnerability){ data-preview }, [Vulnerability Detection](../fedramp-definitions/#vulnerability-detection){ data-preview }, [Vulnerability Response](../fedramp-definitions/#vulnerability-response){ data-preview }


---  




## Key Security Indicator Themes

!!! info ""
   
    Key Security Indicators (KSIs) apply to all cloud service offerings following 
    the 20x path; each KSI must be addressed as specified in the KSI
    requirements and recommendations above.

    Key Security Indicators are grouped into themes for ease of review. Each theme
    is displayed on a separate page to simplify transition between themes and
    finding specific KSIs.


### [Authorization by FedRAMP](authorization-by-fedramp/)

!!! quote ""

    A secure cloud service provider seeking FedRAMP authorization will address all FedRAMP 20x requirements and recommendations, including government-specific requirements for maintaining a secure system and reporting on activities to government customers.


### [Change Management](change-management/)

!!! quote ""

    A secure cloud service provider will ensure that all changes are properly documented and configuration baselines are updated accordingly.


### [Cloud Native Architecture](cloud-native-architecture/)

!!! quote ""

    A secure cloud service offering will use cloud native architecture and design principles to enforce and enhance the confidentiality, integrity and availability of the system.


### [Cybersecurity Education](cybersecurity-education/)

!!! quote ""

    A secure cloud service provider will educate their employees on cybersecurity measures, testing them persistently to ensure their knowledge is satisfactory.


### [Identity and Access Management](identity-and-access-management/)

!!! quote ""

    A secure cloud service offering will protect user data, control access, and apply zero trust principles.


### [Incident Response](incident-response/)

!!! quote ""

    A secure cloud service offering will document, report, and analyze security incidents to ensure regulatory compliance and continuous security improvement.


### [Monitoring, Logging, and Auditing](monitoring-logging-and-auditing/)

!!! quote ""

    A secure cloud service offering will monitor, log, and audit all important events, activity, and changes.


### [Policy and Inventory](policy-and-inventory/)

!!! quote ""

    A secure cloud service offering will have intentional, organized, universal guidance for how every information resource, including personnel, is secured.


### [Recovery Planning](recovery-planning/)

!!! quote ""

    A secure cloud service offering will define, maintain, and test incident response plan(s) and recovery capabilities to ensure minimal service disruption and data loss during incidents and contingencies.


### [Service Configuration](service-configuration/)

!!! quote ""

    A secure cloud service offering will follow FedRAMP encryption policies, continuously verify information resource integrity, and restrict access to third-party information resources.


### [Supply Chain Risk](supply-chain-risk/)

!!! quote ""

    A secure cloud service offering will understand, monitor, and manage supply chain risks from third-party information resources.



