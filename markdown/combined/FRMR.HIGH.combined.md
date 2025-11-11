# FedRAMP 20x All Impact Requirements



??? success "Effective Date(s) & Overall Applicability"
    - **Release:** Untracked
    - **Published:** 2025-11-05
    - **Designator:** FRMR-ALL
    - **Description:** FedRAMP 20x All Impact Requirements
    ---

??? abstract "Background & Authority"

---


### Accepted Vulnerability

!!! quote ""
    A _vulnerability_ that the provider does not intend to _fully mitigate_ or _remediate_, OR that has not or will not be _fully mitigated_ or _remediated_ within the maximum overdue period recommended or required by FedRAMP.

    **ID:** FRD-ALL-31
### Adaptive

!!! quote ""
    The type of _significant change_ that does not routinely recur but does not introduce substantive potential security risks that need to be assessed in depth.

    **Note:** Adaptive changes typically require careful planning that focuses on engineering execution instead of customer adoption, can be verified with minor changes to existing automated validation procedures, and do not require large changes to operational procedures, deployment plans, or documentation.

    **ID:** FRD-ALL-10
### Agency

!!! quote ""
    Has the meaning given in 44 U.S. Code § 3502 (1), which is &quot;any executive department, military department, Government corporation, Government controlled corporation, or other establishment in the executive branch of the Government (including the Executive Office of the President), or any independent regulatory agency, but does not include—(A) the Government Accountability Office; (B) Federal Election Commission; (C) the governments of the District of Columbia and of the territories and possessions of the United States, and their various subdivisions; or (D) Government-owned contractor-operated facilities, including laboratories engaged in national defense research and production activities.&quot;
    [**Reference:** 44 U.S. Code § 3502 (1)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **ID:** FRD-ALL-19
### All Necessary Parties

!!! quote ""
    All entities whose interests are affected directly by activity related to a specific _cloud service offering_ in the context of a FedRAMP authorization. This always includes FedRAMP and any _agency_ customer who is operating the _cloud service offering_, but may include additional parties depending on agreements made by the cloud service provider (such as consultants or third-party assessors). Potential _agency_ customers or third-party cloud service providers should also be included in most cases but this is not a mandatory requirement under FedRAMP as ultimately the cloud service provider may choose who they wish to do business with.

    **ID:** FRD-ALL-18
### Authorization Package

!!! quote ""
    Has meaning from 44 USC § 3607 (b)(8) which is &quot;the essential information that can be used by an agency to determine whether to authorize the operation of an information system or the use of a designated set of common controls for all cloud computing products and services authorized by FedRAMP.&quot;

    **Note:** In FedRAMP documentation, _authorization package_ always refers to a FedRAMP _authorization package_ unless otherwise specified.
    [**Reference:** 44 USC § 3607 (b)(8)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3607)

    **ID:** FRD-ALL-14
### Authorization data

!!! quote ""
    The collective information required by FedRAMP for initial and ongoing assessment and authorization of a _cloud service offering_, including the _authorization package_. 

    **Note:** In FedRAMP documentation, _authorization data_ always refers to FedRAMP _authorization data_ unless otherwise specified.

    **ID:** FRD-ALL-15
### Catastrophic Adverse Effect

!!! quote ""
    A severe negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would _likely_: (i) result in a severe degradation in the availability or performance of services within the _cloud service offering_ for 24+ hours; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a majority of the _federal customer data_ stored within the _cloud service offering_.

    **ID:** FRD-ALL-32
### Cloud Service Offering

!!! quote ""
    A specific, packaged cloud computing product or service provided by a cloud service provider that can be used by a customer. FedRAMP assessment and authorization of the cloud computing product or service is based on the Minimum Assessment Standard.

    **ID:** FRD-ALL-06
### Drift

!!! quote ""
    Changes to _information resources_ that cause deviations from the intended and assessed state; common forms of drift include changes to configurations, deployed software, privileges, running processes, and availability.

    **ID:** FRD-ALL-39
### False Positive Vulnerability

!!! quote ""
    A _detected vulnerability_ that is not actually present in an exploitable state in the _information resource_; this includes situations where vulnerable software or code exist on an machine-based _information resource_ but are not loaded, running, or otherwise in an operating state required for exploitation.

    **Note:** This only applies if the _vulnerability_ is not and was not present; a _remediated vulnerability_ or a _fully mitigated vulnerability_ cannot also be a _false positive vulnerability_.

    **ID:** FRD-ALL-29
### Federal Customer Data

!!! quote ""
    All electronic information, content, and materials that an _agency_ or its authorized users upload, store, or otherwise provide to a cloud service for processing or storage. This does NOT include account information, service metadata, analytics, telemetry, or other similar metadata generated by the cloud service provider.

    **Note:** In the context of FedRAMP authorization, &quot;federal customer data&quot; ONLY ever refers to data owned by federal agency customers. Agreements and contracts with specific _agencies_ may require providers to protect additional data or even transfer ownshership of telemetry or usage data to the _agency_; always consult a lawyer that is familiar with company agreements and contracts when determining the scope of federal customer data.

    **ID:** FRD-ALL-01
### Fully Mitigated Vulnerability

!!! quote ""
    A _vulnerability_ where the likelihood of exploitation or _potential adverse impact_ of exploitation has been reduced from the original evaluation until either are negligible, but the _vulnerability_ is still _detected_.

    **ID:** FRD-ALL-28
### Handle

!!! quote ""
    Has the plain language meaning inclusive of any possible action taken with information, such as access, collect, control, create, display, disclose, disseminate, dispose, maintain, manipulate, process, receive, review, store, transmit, use... etc.

    **ID:** FRD-ALL-03
### Impact Categorization

!!! quote ""
    The type of _significant change_ that is _likely_ to increase or decrease the impact level categorization for the entire cloud service offering (e.g. from low to moderate or from high to moderate).

    **ID:** FRD-ALL-12
### Incident

!!! quote ""
    Has the meaning given in 44 USC § 3552 (b)(2) applied to federal customer data, which is &quot;an occurrence that (A) actually or imminently jeopardizes, without lawful authority, the integrity, confidentiality, or availability of [federal customer data]; or (B) constitutes a violation or imminent threat of violation of law, security policies, security procedures, or acceptable use policies [related to federal customer data].&quot;
    [**Reference:** 44 USC § 3552 (b)(2)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapII-sec3552)

    **ID:** FRD-ALL-40
### Information Resource

!!! quote ""
    Has the meaning from 44 USC § 3502 (6): &quot;information and related resources, such as personnel, equipment, funds, and information technology.&quot;

    **Note:** This applies to any aspect of the _cloud service offering_, both technical and managerial, including everything that makes up the business of the offering from organizational policies and procedures to hardware, software, and code.
    [**Reference:** 44 USC § 3502 (6)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **ID:** FRD-ALL-02
### Interim Requirement

!!! quote ""
    A temporary requirement included as part of a FedRAMP Pilot or Beta Test that will _likely_ be replaced, updated, or removed prior to the formal wide release of the requirement.

    **ID:** FRD-ALL-13
### Internet-Reachable Vulnerability (IRV)

!!! quote ""
    A _vulnerability_ in a machine-based _information resource_ that might be exploited or otherwise triggered by a payload originating from a source on the public internet; this includes machine-based _information resources_ that have no direct route to/from the internet but receive payloads or otherwise take action triggered by internet activity.

    **Notes:**

    - The opposite of this is a &quot;Not Internet-reachable Vulnerability&quot; (NIRV).

    - Internet-reachability applies only to the specific vulnerable machine-based _information resources_ processing the payload; please review the relevant FedRAMP technical assistance on _internet-reachable vulnerabilities_ for examples.

    **ID:** FRD-ALL-24
### Known Exploited Vulnerability (KEV)

!!! quote ""
    Has the meaning given in CISA Binding Operational Directive 22-01, which is any _vulnerability_ identified in CISA&#x27;s Known Exploited Vulnerabilities catalog.
    [**Reference:** CISA BOD 22-01](https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities)

    **ID:** FRD-ALL-25
### Likely

!!! quote ""
    A reasonable degree of probability based on context.

    **ID:** FRD-ALL-04
### Likely Exploitable Vulnerability (LEV)

!!! quote ""
    A vulnerability that is not _fully mitigated_, AND is reachable by a _likely_ threat actor, AND a _likely_ threat actor with knowledge of the _vulnerability_ would likely be able to gain unauthorized access, cause harm, disrupt operations, or otherwise have an undesired adverse impact within the _cloud service offering_ by exploiting the _vulnerability_.

    **Notes:**

    - The opposite of this is a &quot;Not Likely Exploitable Vulnerability&quot; (NLEV).

    - At the absolute minimum, any _vulnerability_ that an automated unauthenticated system can exploit over the internet is a _likely exploitable vulnerability_.

    **ID:** FRD-ALL-23
### Limited Adverse Effect

!!! quote ""
    A minor negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in degradation of the availability or performance of services within the _cloud service offering_ for a minority of relevant users; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a small amount of the _federal customer data_ stored within the _cloud service offering_ by only a few relevant users.

    **ID:** FRD-ALL-34
### Machine-Readable

!!! quote ""
    Has the meaning from 44 U.S. Code § 3502 (18) which is &quot;the term &quot;_machine-readable_&quot;, when used with respect to data, means data in a format that can be easily processed by a computer without human intervention while ensuring no semantic meaning is lost&quot;
    [**Reference:** 44 U.S. Code § 3502 (18)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **ID:** FRD-ALL-17
### Negligible Adverse Effect

!!! quote ""
    A small negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in minor inconvenience when accessing or using services within the _cloud service offering_; OR (ii) result in degradation of the availability or performance of services within the _cloud service offering_ for only a few relevant users.

    **ID:** FRD-ALL-35
### Ongoing Authorization Report

!!! quote ""
    A _regular_ report that is supplied by FedRAMP Authorized cloud service providers to agency customers, aligned to the requirements and recommendations in the FedRAMP Collaborative Continuous Monitoring Standard.

    **ID:** FRD-ALL-43
### Overdue Vulnerability

!!! quote ""
    A _vulnerability_ that the provider intends to _fully mitigate_ or _remediate_ but has not or will not do so within the time frames recommended or required by FedRAMP.

    **ID:** FRD-ALL-30
### Partially Mitigated Vulnerability

!!! quote ""
    A _vulnerability_ where the likelihood or _potential adverse impact_ of exploitation has been reduced from the original evaluation but the risk of exploitation still exists and the _vulnerability_ is still _detected_.

    **ID:** FRD-ALL-27
### Persistently

!!! quote ""
    Occurring in a firm, steady way that is repeated over a long period of time in spite of obstacles or difficulties. Persistent activities may vary between actors, may occur irregularly, and may include interruptions or waiting periods between cycles. These attributes of persistent activities should be intentional, understood, and documented; the status of persistent activities will always be known. 

    **Note:** The use of _persistently_ indicates a process that may not always occur continuously (without interruption or gaps) or regularly (on a consistent, predictable basis) but will repeat frequently in cycles. It aligns generally with historical misuse of &quot;continuous&quot; in federal information security policies.

    **ID:** FRD-ALL-38
### Potential Adverse Impact (of vulnerability exploitation)

!!! quote ""
    The estimated cumulative effect of unauthorized access, disruption, harm, or other adverse impact to agencies that _likely_ could result if a threat actor exploits a _vulnerability_ in the _cloud service offering_; as estimated following FedRAMP recommendations and requirements.

    **ID:** FRD-ALL-36
### Privileged account

!!! quote ""
    An account with elevated privileges that enables administrative functions over some aspect of the _cloud service offering_ that may affect the confidentiality, integrity, or availability of information beyond those given to normal users; levels of privilege may vary wildly.

    **Note:** Any references to _privileged accounts_ in FedRAMP materials should be presumed to apply to privileged roles or other similar capabilities that are used to assign privileges to _privileged accounts_.

    **ID:** FRD-ALL-42
### Promptly

!!! quote ""
    Without Unnecessary Delay.

    **Note:** The use of _promptly_ in FedRAMP materials frames conveys a need for urgent action where the expected time frame will vary by circumstance but earlier action is more likely to improve security outcomes and increase the security posture of a _cloud service offering_.

    **ID:** FRD-ALL-37
### Quarterly Review

!!! quote ""
    A _regular_ synchronous meeting hosted by a FedRAMP Authorized cloud service provider for agency customers, aligned to the requirements and recommendations in the FedRAMP Collaborative Continuous Monitoring Standard.

    **ID:** FRD-ALL-44
### Regularly

!!! quote ""
    Performing the activity on a consistent, predictable, and repeated basis, at set intervals, automatically if possible, following a documented plan. These intervals may vary as appropriate between different requirements.

    **ID:** FRD-ALL-07
### Remediated Vulnerability

!!! quote ""
    A _vulnerability_ that has been neutralized or eliminated and is no longer _detected_.

    **ID:** FRD-ALL-26
### Routine Recurring

!!! quote ""
    The type of _significant change_ that _regularly_ and routinely recurs as part of ongoing operations, vulnerability mitigation, or vulnerability remediation.

    **ID:** FRD-ALL-09
### Serious Adverse Effect

!!! quote ""
    A significant negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in intermittent or ongoing degradation in the availability or performance of services within the _cloud service offering_, causing unpredictable interruptions to operations for 12+ hours; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a minority of the _federal customer data_ stored within the _cloud service offering_.

    **ID:** FRD-ALL-33
### Significant change

!!! quote ""
    Has the meaning given in NIST SP 800-37 Rev. 2 which is &quot;a change that is _likely_ to substantively affect the security or privacy posture of a system.&quot;
    [**Reference:** NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final)

    **ID:** FRD-ALL-08
### Third-party Information Resource

!!! quote ""
    Any _information resource_ that is not entirely included in the assessment for the _cloud service offering_ seeking authorization.

    **ID:** FRD-ALL-05
### Top-level administrative account

!!! quote ""
    The most privileged account with the highest level of access within a _cloud service offering_ for a customer organization, typically with complete control over all aspects of the _cloud service offering_, including managing resources, users, access, privileges, and the account itself.

    **Note:** Any references to _top-level administrative accounts_ in FedRAMP materials should be presumed to apply to top-level administrative roles or other similar capabilities that are used to assign _top-level administrative account_ privileges.

    **ID:** FRD-ALL-41
### Transformative

!!! quote ""
    The type of _significant change_ that introduces substantive potential security risks that are _likely_ to affect existing risk determinations and must be assessed in depth.

    **Note:** Transformative changes typically introduce major features or capabilities that may change how a customer uses the service (in whole or in part) and require extensive updates to security assessments, operational procedures, deployment plans, and documentation.

    **ID:** FRD-ALL-11
### Trust Center

!!! quote ""
    A secure repository or service used by cloud service providers to store and share _authorization data_. _Trust centers_ are the complete and definitive source for _authorization data_ and must meet the requirements outlined in the FedRAMP _authorization data_ Sharing Standard to be FedRAMP-compatible.

    **Note:** In FedRAMP documentation, all references to _trust centers_ indicate FedRAMP-compatible _trust centers_ unless otherwise specified.

    **ID:** FRD-ALL-16
### Vulnerability

!!! quote ""
    Has the meaning given to &quot;security vulnerability&quot; in 6 USC § 650 (25), which is &quot;any attribute of hardware, software, process, or procedure that could enable or facilitate the defeat of [...] management, operational, and technical controls used to protect against an unauthorized effort to adversely affect the confidentiality, integrity, and availability of an information system or its information.&quot; This includes gaps in Rev5 controls and 20x Key Security Indicators, software vulnerabilities, misconfigurations, exposures, weak credentials, insecure services, and all other such potential weaknesses in protection (intentional or unintentional).
    [**Reference:** 6 USC § 650 (25)](https://www.govinfo.gov/app/details/USCODE-2024-title6/USCODE-2024-title6-chap1-subchapXVIII-sec650)

    **ID:** FRD-ALL-20
### Vulnerability Detection

!!! quote ""
    The systematic process of discovering and identifying security vulnerabilities in _information resources_ through assessment, scanning, threat intelligence, vulnerability disclosure mechanisms, bug bounties, supply chain monitoring, and other capabilities. This process includes the initial discovery of a _vulnerability&#x27;s_ existence and the determination of affected _information resources_ within a _cloud service offering._

    **Note:** This definition applies to other forms such as &quot;detect vulnerabilities&quot; or simply &quot;detection&quot; / &quot;detected&quot; used in FedRAMP materials.

    **ID:** FRD-ALL-21
### Vulnerability Response

!!! quote ""
    The systematic process of tracking, evaluating, mitigating, monitoring, remediating, assessing exploitation, reporting, and otherwise managing _detected vulnerabilities_.

    **Note:** This definition applies to other forms such as &quot;respond to vulnerabilities&quot; or simply &quot;response&quot; / &quot;responded&quot; used in FedRAMP materials.

    **ID:** FRD-ALL-22




        
## FRR-ADS

!!! info ""
    These requirements apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-ADS-01

!!! quote ""
    Providers MUST publicly share up-to-date information about the _cloud service offering_ in both human-readable and _machine-readable_ formats, including at least:

    1. Direct link to the FedRAMP Marketplace for the offering

    1. Service Model

    1. Deployment Model

    1. Business Category

    1. UEI Number

    1. Contact Information

    1. Overall Service Description

    1. Detailed list of specific services and their impact levels (see FRR-ADS-03)

    1. Summary of customer responsibilities and secure configuration guidance

    1. Process for accessing information in the _trust center_ (if applicable)

    1. Availability status and recent disruptions for the _trust center_ (if applicable)

    1. Customer support information for the _trust center_ (if applicable)


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-02

!!! quote ""
    Providers MUST use automation to ensure information remains consistent between human-readable and _machine-readable_ formats when _authorization data_ is provided in both formats; Providers SHOULD generate human-readable and _machine-readable_ data from the same source at the same time OR generate human-readable formats directly from _machine-readable_ data.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-03

!!! quote ""
    Providers MUST share a detailed list of specific services and their impact levels that are included in the _cloud service offering_ using clear feature or service names that align with standard public marketing materials; this list MUST be complete enough for a potential customer to determine which services are and are not included in the FedRAMP authorization without requesting access to underlying _authorization data_.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-04

!!! quote ""
    Providers MUST share _authorization data_ with all necessary parties without interruption, including at least FedRAMP, CISA, and agency customers. 


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-05

!!! quote ""
    Providers MUST provide sufficient information in _authorization data_ to support authorization decisions but SHOULD NOT include sensitive information that would _likely_ enable a threat actor to gain unauthorized access, cause harm, disrupt operations, or otherwise have a negative adverse impact on the _cloud service offering_. 


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-06

!!! quote ""
    Providers of FedRAMP Rev5 Authorized _cloud service offerings_ MUST share _authorization data_ via the USDA Connect Community Portal UNLESS they use a FedRAMP-compatible _trust center_.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-07

!!! quote ""
    Providers of FedRAMP 20x Authorized _cloud service offerings_ MUST use a FedRAMP-compatible _trust center_ to store and share _authorization data_ with all necessary parties.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-08

!!! quote ""
    Providers MUST notify all necessary parties when migrating to a _trust center_ and MUST provide information in their existing USDA Connect Community Portal secure folders explaining how to use the _trust center_ to obtain _authorization data_.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-09

!!! quote ""
    Providers MUST make historical versions of _authorization data_ available for three years to all necessary parties UNLESS otherwise specified by applicable FedRAMP requirements; deltas between versions MAY be consolidated quarterly.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-10

!!! quote ""
    Providers SHOULD follow FedRAMP’s best practices and technical assistance for sharing _authorization data_ where applicable.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-ADS-AC

!!! info ""
    These requirements for managing access apply to cloud service providers who establish FedRAMP-compatible _trust centers_ for storing and sharing _authorization data_.

### FRR-ADS-AC-01

!!! quote ""
    Providers MUST publicly provide plain-language policies and guidance for all necessary parties that explains how they can obtain and manage access to _authorization data_ stored in the _trust center_.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-AC-02

!!! quote ""
    Providers SHOULD share at least the _authorization package_ with prospective agency customers upon request and MUST notify FedRAMP within five business days if a prospective agency customer request is denied.  


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-ADS-TC

!!! info ""
    These requirements apply to FedRAMP-compatible _trust centers_ used to store and share _authorization data_.

### FRR-ADS-TC-01

!!! quote ""
    _Trust centers_ MUST be included as an _information resource_ included in the _cloud service offering_ for assessment if FRR-MAS-01 applies. 


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-02

!!! quote ""
    _Trust centers_ SHOULD make _authorization data_ available to view and download in both human-readable and _machine-readable_ formats


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-03

!!! quote ""
    _Trust centers_ MUST provide documented programmatic access to all _authorization data_, including programmatic access to human-readable materials.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-04

!!! quote ""
    _Trust centers_ SHOULD include features that encourage all necessary parties to provision and manage access to _authorization data_ for their users and services directly.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-05

!!! quote ""
    _Trust centers_ MUST maintain an inventory and history of federal agency users or systems with access to _authorization data_ and MUST make this information available to FedRAMP without interruption. 


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-06

!!! quote ""
    _Trust centers_ MUST log access to _authorization data_ and store summaries of access for at least six months; such information, as it pertains to specific parties, SHOULD be made available upon request by those parties.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-07

!!! quote ""
    _Trust centers_ SHOULD deliver responsive performance during normal operating conditions and minimize service disruptions.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-ADS-EX

!!! info ""
    These exceptions MAY override some or all of the FedRAMP requirements for this standard.

### FRR-ADS-EX-01

!!! quote ""
    Providers of FedRAMP Rev5 Authorized _cloud service offerings_ at FedRAMP High using a legacy self-managed repository for _authorization data_ MAY ignore the requirements in this standard until future notice.


    **Applies to:** Low, Moderate, High
    

---   


        
## FRR-SCN

!!! info ""
    These requirements apply ALWAYS to ALL _significant changes_ based on current Effective Date(s) and Overall Applicability

### FRR-SCN-01

!!! quote ""
    Providers MUST notify all necessary parties when Significant Change Notifications are required, including at least FedRAMP and all agency customers. Providers MAY share Significant Change Notifications publicly or with other parties.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-02

!!! quote ""
    Providers MUST follow the procedures documented in their security plan to plan, evaluate, test, perform, assess, and document changes.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-03

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

    1. 3PAO Name (if applicable)

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

        
## FRR-SCN-EX

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

        
## FRR-SCN-RR

!!! info ""
    These requirements apply ONLY to _significant changes_ of type _routine recurring_.

### FRR-SCN-RR-01

!!! quote ""
    Providers SHOULD NOT make formal Significant Change Notifications for _routine recurring_ changes; this type of change is exempted from the notification requirements of this standard.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-SCN-AD

!!! info ""
    These requirements apply ONLY to _significant changes_ of type _adaptive_.

### FRR-SCN-AD-01

!!! quote ""
    Providers MUST notify all necessary parties within ten business days after finishing _adaptive_ changes, also including the following information:

    1. Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-SCN-TF

!!! info ""
    These requirements apply ONLY to _significant changes_ of type _transformative_.

### FRR-SCN-TF-01

!!! quote ""
    Providers SHOULD engage a third-party assessor to review the scope and impact of the planned change before starting _transformative_ changes if human validation is necessary. This review SHOULD be limited to security decisions that require human validation. Providers MUST document this decision and justification.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TF-02

!!! quote ""
    Providers MUST notify all necessary parties of initial plans for _transformative_ changes at least 30 business days before starting _transformative_ changes.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TF-03

!!! quote ""
    Providers MUST notify all necessary parties of final plans for _transformative_ changes at least 10 business days before starting _transformative_ changes.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TF-04

!!! quote ""
    Providers MUST notify all necessary parties within 5 business days after finishing _transformative_ changes, also including the following information:

    1. Updates to all previously sent information


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TF-05

!!! quote ""
    Providers MUST notify all necessary parties within 5 business days after completing the verification, assessment, and/or validation of _transformative_ changes, also including the following information:

    1. Updates to all previously sent information

    1. Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)

    1. Copy of the security assessment report (if applicable)


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TF-06

!!! quote ""
    Providers MUST publish updated service documentation and other materials to reflect _transformative_ changes within 30 business days after finishing _transformative_ changes.


    **Applies to:** Low, Moderate, High
    

### FRR-SCN-TF-07

!!! quote ""
    Providers MUST allow agency customers to OPT OUT of _transformative_ changes whenever feasible.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-SCN-IM

!!! info ""
    These requirements apply ONLY to _significant changes_ of type _impact categorization_.

### FRR-SCN-IM-01

!!! quote ""
    Providers MUST follow the legacy Significant Change Request process or full re-authorization for _impact categorization_ changes, with advance approval from an identified lead agency, until further notice.


    **Applies to:** Low, Moderate, High
    

---   


        
## FRR-ICP

!!! info ""
    These requirements and recommendations apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-ICP-01

!!! quote ""
    Providers MUST responsibly report _incidents_ to FedRAMP within 1 hour of identification by sending an email to fedramp_security@fedramp.gov or fedramp_security@gsa.gov.


    **Applies to:** Low, Moderate, High
    

### FRR-ICP-02

!!! quote ""
    Providers MUST responsibly report _incidents_ to all _agency_ customers within 1 hour of identification using the _incident_ communications points of contact provided by each _agency_ customer.


    **Applies to:** Low, Moderate, High
    

### FRR-ICP-03

!!! quote ""
    Providers MUST responsibly report _incidents_ to CISA within 1 hour of identification if the incident is confirmed or suspected to be the result of an attack vector listed at https://www.cisa.gov/federal-incident-notification-guidelines#attack-vectors-taxonomy, following the CISA Federal Incident Notification Guidelines at https://www.cisa.gov/federal-incident-notification-guidelines, by using the CISA Incident Reporting System at https://myservices.cisa.gov/irf. 


    **Applies to:** Low, Moderate, High
    

### FRR-ICP-04

!!! quote ""
    Providers MUST update _all necessary parties_, including at least FedRAMP, CISA (if applicable), and all _agency_ customers, at least once per calendar day until the _incident_ is resolved and recovery is complete.


    **Applies to:** Low, Moderate, High
    

### FRR-ICP-05

!!! quote ""
    Providers MUST make _incident_ report information available in their secure FedRAMP repository (such as USDA Connect) or _trust center_.


    **Applies to:** Low, Moderate, High
    

### FRR-ICP-06

!!! quote ""
    Providers MUST NOT irresponsibly disclose specific sensitive information about _incidents_ that would _likely_ increase the impact of the _incident_, but MUST disclose sufficient information for informed risk-based decision-making to _all necessary parties_.


    **Applies to:** Low, Moderate, High
    

### FRR-ICP-07

!!! quote ""
    Providers MUST provide a final report once the _incident_ is resolved and recovery is complete that describes at least:

    1. What occurred

    1. Root cause

    1. Response

    1. Lessons learned

    1. Changes needed


    **Applies to:** Low, Moderate, High
    

### FRR-ICP-08

!!! quote ""
    Providers SHOULD use automated mechanisms for reporting incidents and providing updates to all necessary parties (including CISA).


    **Applies to:** Low, Moderate, High
    

### FRR-ICP-09

!!! quote ""
    Providers SHOULD make _incident_ report information available in consistent human-readable and _machine-readable_ formats.


    **Applies to:** Low, Moderate, High
    

---   


        
## FRR-MAS

!!! info ""
    These requirements apply ALWAYS to ALL FedRAMP authorizations based on the Effective Date(s) and Overall Applicability.

### FRR-MAS-01

!!! quote ""
    Providers MUST identify a set of _information resources_ to assess for FedRAMP authorization that includes all _information resources_ that are _likely_ to _handle_ _federal customer data_ or _likely_ to impact the confidentiality, integrity, or availability of _federal customer data_ _handled_ by the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-02

!!! quote ""
    Providers MUST include the configuration and usage of _third-party information resources_, ONLY IF _FRR-MAS-01_ APPLIES.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-03

!!! quote ""
    Providers MUST clearly identify and document the justification, mitigation measures, compensating controls, and potential impact to _federal customer data_ from the configuration and usage of non-FedRAMP authorized _third-party information resources_, ONLY IF _FRR-MAS-01_ APPLIES.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-04

!!! quote ""
    Providers MUST include metadata (including metadata about _federal customer data_), ONLY IF _FRR-MAS-01_ APPLIES.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-05

!!! quote ""
    Providers MUST clearly identify, document, and explain information flows and impact levels for ALL _information resources_, ONLY IF _FRR-MAS-01_ APPLIES.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-MAS-EX

!!! info ""
    These exceptions MAY override some or all of the FedRAMP requirements for this standard.

### FRR-MAS-EX-01

!!! quote ""
    Providers MAY include documentation of _information resources_ beyond the _cloud service offering_, or even entirely outside the scope of FedRAMP, in a FedRAMP assessment and _authorization package_ supplement; these resources will not be FedRAMP authorized and MUST be clearly marked and separated from the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-MAS-AY

!!! info ""
    These rules provide general guidance on the application of this standard.

### FRR-MAS-AY-01

!!! quote ""
    Certain categories of cloud computing products and services are specified as entirely outside the scope of FedRAMP by the Director of the Office of Management and Budget. All such products and services are therefore not included in the _cloud service offering_ for FedRAMP. For more, see fedramp.gov/scope.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-02

!!! quote ""
    Software produced by cloud service providers that is delivered separately for installation on agency systems and not operated in a shared responsibility model (typically including agents, application clients, mobile applications, etc. that are not fully managed by the cloud service provider) is not a cloud computing product or service and is entirely outside the scope of FedRAMP under the FedRAMP Authorization Act. All such software is therefore not included in the _cloud service offering_ for FedRAMP. For more, see fedramp.gov/scope.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-03

!!! quote ""
    _Information resources_ (including _third-party information resources_) that do not meet the conditions in FRR-MAS-01 are not included in the _cloud service offering_ for FedRAMP (_FRR-MAS-02_).


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-04

!!! quote ""
    _Information resources_ (including _third-party information resources_) MAY vary by impact level as appropriate to the level of information _handled_ or impacted by the information resource (_FRR-MAS-05_).


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-05

!!! quote ""
    All parties SHOULD review best practices and technical assistance provided separately by FedRAMP for help with applying the Minimum Assessment Standard as needed.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-06

!!! quote ""
    All aspects of the _cloud service offering_ are determined and maintained by the cloud service provider in accordance with related FedRAMP authorization requirements and documented by the cloud service provider in their assessment and authorization materials.


    **Applies to:** Low, Moderate, High
    

---   


        
## FRR-VDR

!!! info ""
    These requirements apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-VDR-01

!!! quote ""
    Providers MUST systematically, _persistently_, and _promptly_ discover and identify _vulnerabilities_ within their _cloud service offering_ using appropriate techniques such as assessment, scanning, threat intelligence, vulnerability disclosure mechanisms, bug bounties, supply chain monitoring, and other relevant capabilities; this process is called _vulnerability detection_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-02

!!! quote ""
    Providers MUST systematically, _persistently_, and _promptly_ track, evaluate, monitor, _mitigate_, _remediate_, assess exploitation of, report, and otherwise manage all detected vulnerabilities within their _cloud service offering_; this process is called _vulnerability response_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-03

!!! quote ""
    Providers MUST follow the requirements and recommendations outlined in FRR-VDR-TF regarding timeframes for _vulnerability detection_ and _response_.

    **Note:** Providers are strongly encouraged to build programs that consistently exceed these thresholds. Performance will be measured by FedRAMP for comparison between providers and scoring within the FedRAMP Marketplace.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-04

!!! quote ""
    Providers MAY sample effectively identical _information resources_, especially machine-based _information resources_, when performing _vulnerability detection_ UNLESS doing so would decrease the efficiency or effectiveness of _vulnerability detection_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-05

!!! quote ""
    Providers SHOULD evaluate _detected vulnerabilities_, considering the context of the _cloud service offering_, to identify logical groupings of affected _information resources_ that may improve the efficiency and effectiveness of _vulnerability response_ by consolidating further activity; requirements and recommendations in this standard are then applied to these consolidated groupings of _vulnerabilities_ instead of each individual detected instance.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-06

!!! quote ""
    Providers SHOULD evaluate _detected vulnerabilities_, considering the context of the _cloud service offering_, to determine if they are _false positive vulnerabilities_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-07

!!! quote ""
    Providers MUST evaluate _detected vulnerabilities_, considering the context of the _cloud service offering_, to determine if they are _likely exploitable vulnerabilities_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-08

!!! quote ""
    Providers MUST evaluate _detected vulnerabilities_, considering the context of the _cloud service offering_, to determine if they are _internet-reachable vulnerabilities_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-09

!!! quote ""
    Providers MUST evaluate _detected vulnerabilities_, considering the context of the _cloud service offering_, to estimate the _potential adverse impact_ of exploitation on government customers AND assign one of the following _potential adverse impact_ ratings:

    - **N1**: Exploitation could be expected to have _negligible adverse effects_ on one or more _agencies_ that use the _cloud service offering_.

    - **N2**: Exploitation could be expected to have _limited adverse effects_ on one or more _agencies_ that use the _cloud service offering_.

    - **N3**: Exploitation could be expected to have a _serious adverse effect_ on one _agency_ that uses the _cloud service offering_.

    - **N4**: Exploitation could be expected to have a _catastrophic adverse effect_ on one _agency_ that uses the _cloud service offering_ OR a _serious adverse effect_ on more than one federal agency that uses the _cloud service offering_.

    - **N5**: Exploitation could be expected to have a _catastrophic adverse effect_ on more than one _agency_ that uses the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-10

!!! quote ""
    Providers SHOULD consider at least the following factors when considering the context of the _cloud service offering_ to evaluate _detected vulnerabilities_:

    1. **Criticality**: How important are the systems or information that might be impacted by the _vulnerability_?

    1. **Reachability**: How might a threat actor reach the _vulnerability_ and how _likely_ is that?

    1. **Exploitability**: How easy is it for a threat actor to exploit the _vulnerability_ and how _likely_ is that?

    1. **Detectability**: How easy is it for a threat actor to become aware of the _vulnerability_ and how _likely_ is that?

    1. **Prevalence**: How much of the _cloud service offering_ is affected by the _vulnerability_?

    1. **Privilege**: How much privileged authority or access is granted or can be gained from exploiting the _vulnerability_?

    1. **Proximate Vulnerabilities**: How does this _vulnerability_ interact with previously _detected vulnerabilities_, especially _partially_ or _fully mitigated vulnerabilities?_

    1. **Known Threats**: How might already known threats leverage the _vulnerability_ and how _likely_ is that?


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-11

!!! quote ""
    Providers MUST document the reason and resulting implications for their customers when choosing not to meet FedRAMP recommendations in this standard; this documentation MUST be included in the _authorization data_ for the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-VDR-AY

!!! info ""
    This section provides guidance on the application of this standard, including recommendations for implementing high quality _vulnerability detection_ and _response_ programs; providers who follow some or all of these will be better positioned to meet future FedRAMP authorization requirements.

### FRR-VDR-AY-01

!!! quote ""
    If it is not possible to _fully mitigate_ or _remediate_ _detected vulnerabilities_, providers SHOULD instead _partially mitigate vulnerabilities_ _promptly_, progressively, and _persistently_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-AY-02

!!! quote ""
    Providers SHOULD make design and architecture decisions for their _cloud service offering_ that mitigate the risk of _vulnerabilities_ by default AND decrease the risk and complexity of _vulnerability_ _detection_ and _response_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-AY-03

!!! quote ""
    Providers SHOULD use automated services to improve and streamline _vulnerability detection_ and _response_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-AY-04

!!! quote ""
    Providers SHOULD automatically perform _vulnerability detection_ on representative samples of new or _significantly_ _changed_ _information resources_.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-AY-05

!!! quote ""
    Providers SHOULD NOT weaken the security of _information resources_ to facilitate vulnerability scanning or assessment activities.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-AY-06

!!! quote ""
    Providers SHOULD NOT deploy or otherwise activate new machine-based _information resources_ with _Known Exploited Vulnerabilities_.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-VDR-RP

!!! info ""
    This section identifies FedRAMP-specific reporting requirements and recommendations for _vulnerabilities_.

### FRR-VDR-RP-01

!!! quote ""
    Providers MUST report _vulnerability detection_ and _response_ activity to all necessary parties _persistently_, summarizing ALL activity since the previous report; these reports are _authorization data_ and are subject to the FedRAMP Authorization Data Sharing (ADS) standard.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-RP-02

!!! quote ""
    Providers SHOULD include high-level overviews of ALL _vulnerability detection_ and _response_ activities conducted during this period for the _cloud service offering;_ this includes vulnerability disclosure programs, bug bounty programs, penetration testing, assessments, etc.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-RP-03

!!! quote ""
    Providers MUST NOT irresponsibly disclose specific sensitive information about _vulnerabilities_ that would _likely_ lead to exploitation, but MUST disclose sufficient information for informed risk-based decision-making to all necessary parties.

    **Note:** See FRR-VDR-EX for exceptions to this requirement.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-RP-04

!!! quote ""
    Providers MAY responsibly disclose _vulnerabilities_ publicly or with other parties if the provider determines doing so will NOT _likely_ lead to exploitation.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-RP-05

!!! quote ""
    Providers MUST include the following information (if applicable) on _detected vulnerabilities_ when reporting on _vulnerability detection_ and _response_ activity, UNLESS it is an _accepted vulnerability_:

    1. Provider&#x27;s internally assigned tracking identifier

    1. Time and source of the detection

    1. Time of completed evaluation

    1. Is it an _internet-reachable vulnerability_ or not?

    1. Is it a _likely exploitable vulnerability_ or not?

    1. Historically and currently estimated _potential adverse impact_ of exploitation

    1. Time and level of each completed and evaluated reduction in _potential adverse impact_

    1. Estimated time and target level of next reduction in _potential adverse impact_

    1. Is it currently or is it likely to become an _overdue vulnerability_ or not? If so, explain.

    1. Any supplementary information the provider responsibly determines will help federal agencies assess or mitigate the risk to their _federal customer data_ within the _cloud service offering_ resulting from the _vulnerability_

    1. Final disposition of the _vulnerability_


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-RP-06

!!! quote ""
    Providers MUST include the following information on _accepted vulnerabilities_ when reporting on _vulnerability detection_ and _response_ activity:

    1. Provider&#x27;s internally assigned tracking identifier

    1. Time and source of the detection

    1. Time of completed evaluation

    1. Is it an _internet-reachable vulnerability_ or not?

    1. Is it a _likely exploitable vulnerability_ or not?

    1. Currently estimated _potential adverse impact_ of exploitation

    1. Explanation of why this is an _accepted vulnerability_

    1. Any supplementary information the provider determines will responsibly help federal agencies assess or mitigate the risk to their _federal customer data_ within the _cloud service offering_ resulting from the _accepted vulnerability_


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-VDR-EX

!!! info ""
    These exceptions MAY override some or all of the FedRAMP requirements and recommendations in this standard.

### FRR-VDR-EX-01

!!! quote ""
    Providers MAY be required to share additional _vulnerability_ information, alternative reports, or to report at an alternative frequency as a condition of a FedRAMP Corrective Action Plan or other agreements with federal agencies.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-EX-02

!!! quote ""
    Providers MAY be required to provide additional information or details about _vulnerabilities_, including sensitive information that would _likely_ lead to exploitation, as part of review, response or investigation by necessary parties.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-EX-03

!!! quote ""
    Providers MUST NOT use this standard to reject requests for additional information from necessary parties which also include law enforcement, Congress, and Inspectors General.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-VDR-TF

!!! info ""
    This section provides guidance on timeframes that apply to all impact levels of FedRAMP authorization for activities required or recommended in this standard; these timeframes are thresholds that secure providers should consistently strive to exceed by significant margins.

### FRR-VDR-TF-01

!!! quote ""
    Providers MUST report _vulnerability detection_ and _response_ activity to all necessary parties in a consistent format that is human readable at least monthly.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-TF-02

!!! quote ""
    Providers SHOULD _remediate Known Exploited Vulnerabilities_ according to the due dates in the CISA Known Exploited Vulnerabilities Catalog (even if the vulnerability has been _fully mitigated_) as required by CISA Binding Operational Directive (BOD) 22-01 or any successor guidance from CISA.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-TF-03

!!! quote ""
    Providers MUST categorize any vulnerability that is not or will not be _fully mitigated_ or _remediated_ within 192 days of evaluation as an _accepted vulnerability_.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-VDR-TF-HI

!!! info ""
    This section provides guidance on timeframes that apply specifically to FedRAMP High authorizations for activities required or recommended in this standard; these timeframes are thresholds that secure providers should consistently strive to exceed by significant margins.

### FRR-VDR-TF-HI-01

!!! quote ""
    Providers SHOULD make all recent historical _vulnerability detection_ and _response_ activity available in a _machine-readable_ format for automated retrieval by all necessary parties (e.g. using an API service or similar); this information SHOULD be updated _persistently_, at least once every 7 days.


    **Applies to:** High
    

### FRR-VDR-TF-HI-02

!!! quote ""
    Providers SHOULD _persistently_ perform _vulnerability detection_ on representative samples of similar machine-based _information resources_, at least once per day.


    **Applies to:** High
    

### FRR-VDR-TF-HI-03

!!! quote ""
    Providers SHOULD _persistently_ perform _vulnerability detection_ on all _information resources_ that are _likely_ to _drift_, at least once every 7 days.


    **Applies to:** High
    

### FRR-VDR-TF-HI-04

!!! quote ""
    Providers SHOULD _persistently_ perform _vulnerability detection_ on all _information resources_ that are NOT _likely_ to _drift_, at least once every month.


    **Applies to:** High
    

### FRR-VDR-TF-HI-05

!!! quote ""
    Providers SHOULD evaluate ALL _vulnerabilities_ as required by FRR-VDR-07, FRR-VDR-08, and FRR-VDR-09 within 2 days of _detection_.


    **Applies to:** High
    

### FRR-VDR-TF-HI-06

!!! quote ""
    Providers SHOULD treat _internet-reachable likely exploitable vulnerabilities_ with a _potential adverse impact_ of N4 or N5 as a security incident until they are _partially mitigated_ to N3 or below.


    **Applies to:** High
    

### FRR-VDR-TF-HI-07

!!! quote ""
    Providers SHOULD treat _likely exploitable vulnerabilities_ that are NOT _internet-reachable_ with a _potential adverse impact_ of N5 as a security incident until they are partially mitigated to N4 or below.


    **Applies to:** High
    

### FRR-VDR-TF-HI-08

!!! quote ""
    Providers SHOULD _partially mitigate_ _vulnerabilities_ to a lower _potential adverse impact_ within the maximum time-frames from evaluation shown below, factoring for the current _potential adverse impact_, _internet reachability,_ and _likely exploitability_:
    | Potential Adverse Impact | LEV + IRV | LEV + NIRV | NLEV |
    |-------------------------|-----------|------------|------|
    | N5 | .5|1 | 8|
    | N4 | 2|8 | 32|
    | N3 | 8|16 | 64|
    | N2 | 24|96 | 192|


    **Applies to:** High
    

### FRR-VDR-TF-HI-09

!!! quote ""
    Providers SHOULD _mitigate_ or _remediate_ remaining _vulnerabilities_ during routine operations as determined necessary by the provider.


    **Applies to:** High
    

---   

        
## FRR-VDR-AG

!!! info ""
    The section provides guidance for agencies that apply under 44 USC § 3613 (e) which states that the assessment and materials within a FedRAMP authorization package “shall be presumed adequate for use in an agency authorization to operate cloud computing products and services.”

### FRR-VDR-AG-01

!!! quote ""
    Agencies SHOULD review the information provided in vulnerability reports at appropriate and reasonable intervals commensurate with the expectations and risk posture indicated by their Authorization to Operate, and SHOULD use automated processing and filtering of machine readable information from cloud service providers.

    **Note:** FedRAMP recommends that agencies only review _overdue_ and _accepted vulnerabilities_ with a _potential adverse impact_ of N3 or higher unless the cloud service provider recommends mitigations or the service is included in a higher risk federal information system. Furthermore, _accepted vulnerabilities_ generally only need to be reviewed when they are added or during an updated risk assessment due to changes in the agency’s use or authorization.


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-AG-02

!!! quote ""
    Agencies SHOULD use _vulnerability_ information reported by the Provider to maintain Plans of Action &amp; Milestones for agency security programs when relevant according to agency security policies (such as if the agency takes action to mitigate the risk of exploitation or authorized the continued use of a cloud service with _accepted vulnerabilities_ that put agency information systems at risk).


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-AG-03

!!! quote ""
    Agencies SHOULD NOT request additional information from cloud service providers that is not required by this FedRAMP standard UNLESS the head of the agency or an authorized delegate makes a determination that there is a demonstrable need for such.

    **Note:** This is related to the Presumption of Adequacy directed by 44 USC § 3613 (e).


    **Applies to:** Low, Moderate, High
    

### FRR-VDR-AG-04

!!! quote ""
    Agencies MUST inform FedRAMP after requesting any additional _vulnerability_ information or materials from a cloud service provider beyond those required by this policy by sending a notification to [info@fedramp.gov](mailto:info@fedramp.gov).

    **Note:** This is an OMB policy; agencies are required to notify FedRAMP in OMB Memorandum M-24-15 section IV (a).


    **Applies to:** Low, Moderate, High
    

---   


        
## FRR-RSC

!!! info ""
    These requirements and recommendations apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-RSC-01

!!! quote ""
    Providers MUST create and maintain guidance that includes instructions on how to securely access, configure, operate, and decommission _top-level administrative accounts_ that control enterprise access to the entire _cloud service offering_.

    **Note:** This guidance should explain how _top-level administrative accounts_ are named and referred to in the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-02

!!! quote ""
    Providers MUST create and maintain guidance that explains security-related settings that can be operated only by _top-level administrative accounts_ and their security implications.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-03

!!! quote ""
    Providers SHOULD create and maintain guidance that explains security-related settings that can be operated only by _privileged accounts_ and their security implications.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-04

!!! quote ""
    Providers SHOULD set all settings to their recommended secure defaults for _top-level administrative accounts_ and _privileged accounts_ when initially provisioned.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-05

!!! quote ""
    Providers SHOULD offer the capability to compare all current settings for _top-level administrative accounts_ and _privileged accounts_ to the recommended secure defaults.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-06

!!! quote ""
    Providers SHOULD offer the capability to export all security settings in a _machine-readable_ format.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-07

!!! quote ""
    Providers SHOULD offer the capability to view and adjust security settings via an API or similar capability.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-08

!!! quote ""
    Providers SHOULD provide recommended secure configuration guidance in a _machine-readable_ format that can be used by customers or third-party tools to compare against current settings.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-09

!!! quote ""
    Providers SHOULD make recommended secure configuration guidance available publicly.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-10

!!! quote ""
    Providers SHOULD provide versioning and a release history for recommended secure default settings for _top-level administrative accounts_ and _privileged accounts_ as they are adjusted over time.


    **Applies to:** Low, Moderate, High
    

---   


        
## FRR-UCM

!!! info ""
    These requirements and recommendations apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-UCM-01

!!! quote ""
    Providers MUST document the cryptographic modules used in each service (or groups of services that use the same modules) where cryptographic services are used to protect _federal customer data_, including whether these modules are validated under the NIST Cryptographic Module Validation Program or are update streams of such modules.


    **Applies to:** Low, Moderate, High
    

### FRR-UCM-02

!!! quote ""
    Providers SHOULD configure _agency_ tenants by default to use cryptographic services that use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when such modules are available.


    **Applies to:** Low, Moderate, High
    

### FRR-UCM-04

!!! quote ""
    Providers MUST use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect _federal customer data_.


    **Applies to:** High
    

---   


        
## FRR-CCM

!!! info ""
    These requirements and recommendations apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-CCM-01

!!! quote ""
    Providers MUST make an _Ongoing Authorization Report_ available to _all necessary parties_ every 3 months, in a consistent format that is human readable, covering the entire period since the previous summary; this report MUST include high-level summaries of at least the following information:

    1. Changes to _authorization data_

    1. Planned changes to _authorization data_ during at least the next 3 months

    1. _Accepted vulnerabilities

    1. _Transformative_ changes

    1. Updated recommendations or best practices for security, configuration, usage, or similar aspects of the _cloud service offering_


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-02

!!! quote ""
    Providers SHOULD establish a regular 3 month cycle for _Ongoing Authorization Reports_ that is spread out from the beginning, middle, or end of each quarter.

    **Note:** This recommendation is intended to discourage hundreds of cloud service providers from releasing their _Ongoing Authorization Reports_ during the first or last week of each quarter because that is the easiest way for a single provider to track this deliverable; the result would overwhelm agencies with many cloud services. Widely used cloud service providers are encouraged to work with their customers to identify ideal timeframes for this cycle.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-03

!!! quote ""
    Providers MUST publicly include the target date for their next _Ongoing Authorization Report_ with the _authorization data_ required by FRR-ADS-01.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-04

!!! quote ""
    Providers MUST establish and share an asynchronous mechanism for _all necessary parties_ to provide feedback or ask questions about each _Ongoing Authorization Report_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-05

!!! quote ""
    Providers MUST maintain an anonymized and desensitized summary of the feedback, questions, and answers about each _Ongoing Authorization Report_ as an addendum to the _Ongoing Authorization Report_.

    **Note:** This is intended to encourage sharing of information and decrease the burden on the cloud service provider - providing this summary will reduce duplicate questions from _agencies_ and ensure FedRAMP has access to this information. It is generally in the provider’s interest to update this addendum frequently throughout the quarter.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-06

!!! quote ""
    Providers MUST NOT irresponsibly disclose sensitive information in an _Ongoing Authorization Report_ that would _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-07

!!! quote ""
    Providers MAY responsibly share some or all of the information an _Ongoing Authorization Report_ publicly or with other parties if the provider determines doing so will NOT _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-CCM-QR

!!! info ""
    These requirements and recommendations apply to providers hosting synchronous _Quarterly Reviews_ with all agencies.

### FRR-CCM-QR-02

!!! quote ""
    Providers MUST host a synchronous _Quarterly Review_ every 3 months, open to _all necessary parties_, to review aspects of the most recent _Ongoing Authorization Reports_ that the provider determines are of the most relevance to _agencies_.


    **Applies to:** Moderate, High
    

### FRR-CCM-QR-03

!!! quote ""
    Providers SHOULD regularly schedule _Quarterly Reviews_ to occur at least 3 business days after releasing an _Ongoing Authorization Report_ AND within 10 business days of such release.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-04

!!! quote ""
    Providers MUST NOT irresponsibly disclose sensitive information in a _Quarterly Review_ that would _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-05

!!! quote ""
    Providers MUST include either a registration link or a downloadable calendar file with meeting information for _Quarterly Reviews_ in the _authorization data_ available to all _necessary parties_ required by FRR-ADS-06 and FRR-ADS-07.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-06

!!! quote ""
    Providers MUST publicly include the target date for their next _Quarterly Review_ with the _authorization data_ required by FRR-ADS-01.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-07

!!! quote ""
    Providers SHOULD include additional information in _Quarterly Reviews_ that the provider determines are of interest, use, or otherwise relevant to _agencies_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-08

!!! quote ""
    Providers MUST NOT invite third parties to attend _Quarterly Reviews_ intended for _agencies_ unless it is of specific relevance.

    **Note:** This is because _agencies_ are less likely to actively participate in meetings with third parties; the cloud service provider&#x27;s independent assessor should be considered relevant by default.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-09

!!! quote ""
    Providers SHOULD record or transcribe _Quarterly Reviews_ and make such available to _all necessary parties_ with other _authorization data_ required by FRR-ADS-06 and FRR-ADS07.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-10

!!! quote ""
    Providers MAY responsibly share recordings or transcriptions of _Quarterly Reviews_ with the public or other parties ONLY if the provider removes all _agency_ information (comments, questions, names, etc.) AND determines sharing will NOT _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-QR-11

!!! quote ""
    Providers MAY responsibly share content prepared for a _Quarterly Review_ with the public or other parties if the provider determines doing so will NOT _likely_ have an adverse effect on the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

---   

        
## FRR-CCM-AG

!!! info ""
    This section includes requirements and recommendations for _agencies_ who are using FedRAMP Authorized cloud services based on statute and policy directives from OMB that apply to _agencies_.

### FRR-CCM-AG-01

!!! quote ""
    Agencies MUST review each _Ongoing Authorization Report_ to understand how changes to the _cloud service offering_ may impact the previously agreed-upon risk tolerance documented in the _agency&#x27;s_ Authorization to Operate of a federal information system that includes the _cloud service offering_ in its boundary.

    **Note:** This is required by 44 USC § 35, OMB A-130, FIPS-200, and M-24-15.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-02

!!! quote ""
    Agencies SHOULD consider the Security Category noted in their Authorization to Operate of the federal information system that includes the _cloud service offering_ in its boundary and assign appropriate information security resources for reviewing _Ongoing Authorization Reports_, attending _Quarterly Reviews_, and other ongoing _authorization data_.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-03

!!! quote ""
    Agencies SHOULD designate a senior information security official to review _Ongoing Authorization Reports_ and represent the agency at _Quarterly Reviews_ for _cloud service offerings_ included in agency information systems with a Security Category of High.


    **Applies to:** High
    

### FRR-CCM-AG-04

!!! quote ""
    Agencies SHOULD formally notify the provider if the information presented in an _Ongoing Authorization Report_, _Quarterly Review_, or other ongoing _authorization data_ causes significant concerns that may lead the _agency_ to remove the _cloud service offering_ from operation.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-05

!!! quote ""
    Agencies MUST notify FedRAMP by sending a notification to info@fedramp.gov if the information presented in an _Ongoing Authorization Report_, _Quarterly Review_, or other ongoing _authorization data_ causes significant concerns that may lead the _agency_ to stop operation of the _cloud service offering_.

    **Note:** Agencies are required to notify FedRAMP by OMB Memorandum M-24-15 section IV (a).


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-06

!!! quote ""
    Agencies MUST NOT place additional security requirements on cloud service providers beyond those required by FedRAMP UNLESS the head of the agency or an authorized delegate makes a determination that there is a demonstrable need for such; this does not apply to seeking clarification or asking general questions about _authorization data_.

    **Note:** This is a statory requirement in 44 USC § 3613 (e) related to the Presumption of Adequacy for a FedRAMP authorization.


    **Applies to:** Low, Moderate, High
    

### FRR-CCM-AG-07

!!! quote ""
    Agencies MUST inform FedRAMP after requesting any additional information or materials from a cloud service provider beyond those required in this policy by sending a notification to info@fedramp.gov.

    **Note:** Agencies are required to notify FedRAMP by OMB Memorandum M-24-15 section IV (a).


    **Applies to:** Low, Moderate, High
    

---   





## Authorization by FedRAMP

!!! info ""
    A secure cloud service provider seeking FedRAMP authorization will address all FedRAMP 20x requirements and recommendations, including government-specific requirements for maintaining a secure system and reporting on activities to government customers.

### KSI-AFR-01

!!! quote ""

    Apply the FedRAMP Minimum Assessment Standard (MAS) to identify and document the scope of the cloud service offering to be assessed for FedRAMP authorization and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-02

!!! quote ""

    Set security goals for the cloud service offering based on FedRAMP 20x Phase Two Key Security Indicators (KSIs - you are here), develop automated validation of status and progress to the greatest extent possible, and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-03

!!! quote ""

    Determine how authorization data will be shared with all necessary parties in alignment with the FedRAMP Authorization Data Sharing (ADS) standard and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-04

!!! quote ""

    Document the vulnerability detection and vulnerability response methodology used within the cloud service offering in alignment with the FedRAMP Vulnerability Detection and Response (VDR) standard and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-05

!!! quote ""

    Determine how significant changes will be tracked and how all necessary parties will be notified in alignment with the FedRAMP Significant Change Notification (SCN) standard and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-06

!!! quote ""

    Maintain a plan and process for providing Ongoing Authorization Reports and Quarterly Reviews for all necessary parties in alignment with the FedRAMP Collaborative Continuous Monitoring (CCM) standard and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-07

!!! quote ""

    Develop secure by default configurations and provide guidance for secure configuration of the cloud service offering to customers in alignment with the FedRAMP Recommended Secure Configuration (RSC) standard and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-08

!!! quote ""

    Operate a secure inbox to receive critical communication from FedRAMP and other government entities in alignment with FedRAMP Security Inbox Requirements (SIR) and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-09

!!! quote ""

    Persistently validate, assess, and report on the effectiveness and status of security decisions and policies that are implemented within the cloud service offering in alignment with the FedRAMP 20x Persistent Validation and Assessment (PVA) standard, and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-10

!!! quote ""

    Integrate FedRAMP’s Incident Communications Procedures (ICP) into incident response procedures and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

### KSI-AFR-11

!!! quote ""

    Ensure that cryptographic modules used to protect potentially sensitive federal customer data are selected and used in alignment with the FedRAMP 20x Use of Cryptographic Modules policy and persistently address all related requirements and recommendations.

      **Applies to:** Low, Moderate
      

---
## Cybersecurity Education

!!! info ""
    A secure cloud service provider will continuously educate their employees on cybersecurity measures, testing them _regularly_ to ensure their knowledge is satisfactory.

### KSI-CED-01

!!! quote ""

    Require and monitor the effectiveness of training given to all employees on policies, procedures, and security-related topics.

      **Applies to:** Low, Moderate
      

### KSI-CED-02

!!! quote ""

    Require and monitor the effectiveness of role-specific training for high risk roles, including at least roles with privileged access.

      **Applies to:** Low, Moderate
      

### KSI-CED-03

!!! quote ""

    Require and monitor the effectiveness of role-specific training provided to development and engineering staff that covers best practices for delivering secure software.

      **Applies to:** Low, Moderate
      

### KSI-CED-04

!!! quote ""

    Require and monitor the effectiveness of role-specific training to staff involved with incident response or disaster recovery.

      **Applies to:** Low, Moderate
      

---
## Change Management

!!! info ""
    A secure cloud service provider will ensure that all system changes are properly documented and configuration baselines are updated accordingly.

### KSI-CMT-01

!!! quote ""

    Log and monitor modifications to the cloud service offering.

      **Applies to:** Low, Moderate
      

### KSI-CMT-02

!!! quote ""

    Execute changes though redeployment of version controlled immutable resources rather than direct modification wherever possible

      **Applies to:** Low, Moderate
      

### KSI-CMT-03

!!! quote ""

    Automate persistent testing and validation of changes throughout deployment.

      **Applies to:** Low, Moderate
      

### KSI-CMT-04

!!! quote ""

    Always follow a documented change management procedure.

      **Applies to:** Low, Moderate
      

### KSI-CMT-05

!!! quote ""

    Superseded by KSI-AFR-05 (SCN)

      **Applies to:** Low, Moderate
      

---
## Cloud Native Architecture

!!! info ""
    A secure _cloud service offering_ will use cloud native architecture and design principles to enforce and enhance the Confidentiality, Integrity and Availability of the system.

### KSI-CNA-01

!!! quote ""

    Configure all machine-based information resources to limit inbound and outbound network traffic.

      **Applies to:** Low, Moderate
      

### KSI-CNA-02

!!! quote ""

    Design systems to minimize the attack surface and minimize lateral movement if compromised

      **Applies to:** Low, Moderate
      

### KSI-CNA-03

!!! quote ""

    Use logical networking and related capabilities to enforce traffic flow controls

      **Applies to:** Low, Moderate
      

### KSI-CNA-04

!!! quote ""

    Use immutable infrastructure with strictly defined functionality and privileges by default

      **Applies to:** Low, Moderate
      

### KSI-CNA-05

!!! quote ""

    Protect against denial of service attacks and other unwanted activity.

      **Applies to:** Low, Moderate
      

### KSI-CNA-06

!!! quote ""

    Design systems for high availability and rapid recovery

      **Applies to:** Low, Moderate
      

### KSI-CNA-07

!!! quote ""

    Ensure cloud-native _information resources_ are implemented based on host provider&#x27;s best practices and documented guidance

      **Applies to:** Low, Moderate
      

### KSI-CNA-08

!!! quote ""

    Use automated services to persistently assess the security posture of all machine-based information resources and automatically enforce their intended operational state.

      **Applies to:** Moderate
      

---
## Identity and Access Management

!!! info ""
    A secure _cloud service offering_ will protect user data, control access, and apply zero trust principles.

### KSI-IAM-01

!!! quote ""

    Enforce multi-factor authentication (MFA) using methods that are difficult to intercept or impersonate (phishing-resistant MFA) for all user authentication

      **Applies to:** Low, Moderate
      

### KSI-IAM-02

!!! quote ""

    Use secure passwordless methods for user authentication and authorization when feasible, otherwise enforce strong passwords with MFA

      **Applies to:** Low, Moderate
      

### KSI-IAM-03

!!! quote ""

    Enforce appropriately secure authentication methods for non-user accounts and services

      **Applies to:** Low, Moderate
      

### KSI-IAM-04

!!! quote ""

    Use a least-privileged, role and attribute-based, and just-in-time security authorization model for all user and non-user accounts and services

      **Applies to:** Low, Moderate
      

### KSI-IAM-05

!!! quote ""

    Configure identity and access management with measures that always verify each user or device can only access the resources they need.

      **Applies to:** Low, Moderate
      

### KSI-IAM-06

!!! quote ""

    Automatically disable or otherwise secure accounts with privileged access in response to suspicious activity

      **Applies to:** Low, Moderate
      

### KSI-IAM-07

!!! quote ""

    Securely manage the lifecycle and privileges of all accounts, roles, and groups, using automation.

      **Applies to:** Low, Moderate
      

---
## Incident Response

!!! info ""
    A secure _cloud service offering_ will document, report, and analyze security incidents to ensure regulatory compliance and continuous security improvement.

### KSI-INR-01

!!! quote ""

    Always follow a documented incident response procedure.

      **Applies to:** Low, Moderate
      

### KSI-INR-02

!!! quote ""

    Maintain a log of incidents and periodically review past incidents for patterns or vulnerabilities

      **Applies to:** Low, Moderate
      

### KSI-INR-03

!!! quote ""

    Generate after action reports and _regularly_ incorporate lessons learned into operations

      **Applies to:** Low, Moderate
      

---
## Monitoring, Logging, and Auditing

!!! info ""
    A secure _cloud service offering_ will monitor, log, and audit all important events, activity, and changes.

### KSI-MLA-01

!!! quote ""

    Operate a Security Information and Event Management (SIEM) or similar system(s) for centralized, tamper-resistent logging of events, activities, and changes

      **Applies to:** Low, Moderate
      

### KSI-MLA-02

!!! quote ""

    _Regularly_ review and audit logs

      **Applies to:** Low, Moderate
      

### KSI-MLA-03

!!! quote ""

    Superseded by KSI-AFR-04 (VDR)

      **Applies to:** Low, Moderate
      

### KSI-MLA-04

!!! quote ""

    Superseded by KSI-AFR-04 (VDR)

      **Applies to:** Low, Moderate
      

### KSI-MLA-05

!!! quote ""

    Perform Infrastructure as Code and configuration evaluation and testing

      **Applies to:** Low, Moderate
      

### KSI-MLA-06

!!! quote ""

    Superseded by KSI-AFR-04 (VDR)

      **Applies to:** Low, Moderate
      

### KSI-MLA-07

!!! quote ""

    Maintain a list of information resources and event types that will be monitored, logged, and audited, then do so.

      **Applies to:** Low, Moderate
      

### KSI-MLA-08

!!! quote ""

    Use a least-privileged, role and attribute-based, and just-in-time access authorization model for access to log data based on organizationally defined data sensitivity.

      **Applies to:** Moderate
      

---
## Policy and Inventory

!!! info ""
    A secure _cloud service offering_ will have intentional, organized, universal guidance for how every _information resource_, including personnel, is secured.

### KSI-PIY-01

!!! quote ""

    Use authoritative sources to automatically maintain real-time inventories of all information resources

      **Applies to:** Low, Moderate
      

### KSI-PIY-02

!!! quote ""

    Document the security objectives and requirements for each information resource or set of information resources.

      **Applies to:** Low, Moderate
      

### KSI-PIY-03

!!! quote ""

    Maintain a vulnerability disclosure program

      **Applies to:** Low, Moderate
      

### KSI-PIY-04

!!! quote ""

    Monitor the effectiveness of building security and privacy considerations into the Software Development Lifecycle and aligning with CISA Secure By Design principles.

      **Applies to:** Low, Moderate
      

### KSI-PIY-05

!!! quote ""

    Document methods used to evaluate _information resource_ implementations

      **Applies to:** Low, Moderate
      

### KSI-PIY-06

!!! quote ""

    Monitor the effectiveness of the organization’s investments in achieving security objectives.

      **Applies to:** Low, Moderate
      

### KSI-PIY-07

!!! quote ""

    Document risk management decisions for software supply chain security

      **Applies to:** Low, Moderate
      

### KSI-PIY-08

!!! quote ""

    Regularly measure executive support for achieving the organization’s security objectives.

      **Applies to:** Low, Moderate
      

---
## Recovery Planning

!!! info ""
    A secure _cloud service offering_ will define, maintain, and test incident response plan(s) and recovery capabilities to ensure minimal service disruption and data loss during incidents and contingencies.

### KSI-RPL-01

!!! quote ""

    Define Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO)

      **Applies to:** Low, Moderate
      

### KSI-RPL-02

!!! quote ""

    Develop and maintain a recovery plan that aligns with the defined recovery objectives

      **Applies to:** Low, Moderate
      

### KSI-RPL-03

!!! quote ""

    Perform system backups aligned with recovery objectives

      **Applies to:** Low, Moderate
      

### KSI-RPL-04

!!! quote ""

    _Regularly_ test the capability to recover from incidents and contingencies

      **Applies to:** Low, Moderate
      

---
## Service Configuration

!!! info ""
    A secure _cloud service offering_ will follow FedRAMP encryption policies, continuously verify _information resource_ integrity, and restrict access to _third-party information resources_.

### KSI-SVC-01

!!! quote ""

    Implement improvements based on persistent evaluation of information resources for opportunities to improve security.

      **Applies to:** Low, Moderate
      

### KSI-SVC-02

!!! quote ""

    Encrypt or otherwise secure network traffic

      **Applies to:** Low, Moderate
      

### KSI-SVC-03

!!! quote ""

    Superseded by KSI-AFR-11 (UCM)

      **Applies to:** Low, Moderate
      

### KSI-SVC-04

!!! quote ""

    Manage configuration of machine-based information resources using automation.

      **Applies to:** Low, Moderate
      

### KSI-SVC-05

!!! quote ""

    Use cryptographic methods to validate the integrity of machine-based information resources.

      **Applies to:** Low, Moderate
      

### KSI-SVC-06

!!! quote ""

    Automate management, protection, and regular rotation of digital keys, certificates, and other secrets.

      **Applies to:** Low, Moderate
      

### KSI-SVC-07

!!! quote ""

    Use a consistent, risk-informed approach for applying security patches

      **Applies to:** Low, Moderate
      

### KSI-SVC-08

!!! quote ""

    Do not introduce or leave behind residual elements that could negatively affect confidentiality, integrity, or availability of federal customer data during operations.

      **Applies to:** Moderate
      

### KSI-SVC-09

!!! quote ""

    Persistently validate the authenticity and integrity of communications between machine-based information resources using automation.

      **Applies to:** Moderate
      

### KSI-SVC-10

!!! quote ""

    Remove unwanted federal customer data promptly when requested by an agency in alignment with customer agreements, including from backups if appropriate; this typically applies when a customer spills information or when a customer seeks to remove information from a service due to a change in usage.

      **Applies to:** Moderate
      

---
## Third-Party Information Resources

!!! info ""
    A secure _cloud service offering_ will understand, monitor, and manage supply chain risks from _third-party information resources_.

### KSI-TPR-01

!!! quote ""

    Superseded by KSI-AFR-01 (MAS)

      **Applies to:** Low, Moderate
      

### KSI-TPR-02

!!! quote ""

    Superseded by KSI-AFR-01 (MAS)

      **Applies to:** Low, Moderate
      

### KSI-TPR-03

!!! quote ""

    Identify and prioritize mitigation of potential supply chain risks

      **Applies to:** Low, Moderate
      

### KSI-TPR-04

!!! quote ""

    Monitor third party software information resources for upstream vulnerabilities, with contractual notification requirements or active monitoring services

      **Applies to:** Low, Moderate
      

---



# Technical assistance

### FRA-ADS

**Purpose:** This Technical Assistance helps stakeholders understand the intent behind the requirements in the FedRAMP _authorization data_ Sharing Standard.

**Disclaimer:** Every cloud service provider is different, every architecture is different, and every environment is different. Best practices and technical assistance MUST NOT be used as a checklist. All examples are for discussion purposes ONLY.

****

#### FRA-ADS-04

&quot;Without interruption&quot; means that parties should not have to request manual approval each time they need to access _authorization data_ or go through a complicated process. The preferred way of ensuring access without interruption is to use on-demand just-in-time access provisioning.


---   
    

#### FRA-ADS-05

This is not a license to exclude accurate risk information, but specifics that would _likely_ lead to compromise should be abstracted. A breach of confidentiality with _authorization data_ should be anticipated by a secure cloud service provider.

##### Examples of unnecessary sensitive information in _authorization data_

Key Tests:

- Passwords, API keys, access credentials, etc.
- Excessive detail about methodology that exposes weaknesses
- Personally identifiable information about employees

Examples:

- DON&#x27;T: &quot;In an emergency, an administrator with physical access to a system can log in using &quot;secretadmin&quot; with the password &quot;pleasewutno&quot;&quot; DO: &quot;In an emergency, administrators with physical access can log in directly.&quot;
- DON&#x27;T: &quot;All backup MFA credentials are stored in a SuperSafe Series 9000 safe in the CEOs office.&quot; DO: &quot;All backup MFA credentials are stored in a UL Class 350 safe in a secure location with limited access.&quot;
- DON&#x27;T: &quot;During an incident, the incident response team lead by Jim Smith (555-0505) will open a channel at the conference line (555-0101 #97808 passcode 99731)...&quot; DO: &quot;During an incident, the incident response team will coordinate over secure channels.&quot;
          

---   
    
  
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
    

#### FRA-SCN-TF

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
    
  
### FRA-VDR

**Purpose:** This Technical Assistance provides additional context behind the intent and goals of certain aspects of this standard that have caused significant confusion or requests for clarification during public comment. This assistance is initially designed for 20x Phase Two/Three and the Rev5 Closed Beta Balance Improvement Test.

**Disclaimer:** Every cloud service provider is different, every architecture is different, and every environment is different. Best practices and technical assistance MUST NOT be used as a checklist. All examples are for discussion purposes ONLY.

****

#### FRA-VDR-01

FedRAMP focuses on internet-reachable (rather than internet-accessible) to ensure that any service that might receive a payload from the internet is prioritized if that service has a vulnerability that can be triggered by processing the data in the payload. The simplest way to prevent exploitation of internet-reachable vulnerabilities is to intercept, inspect, filter, sanitize, reject, or otherwise deflect triggering payloads before they are processed by the vulnerable resource; once this prevention is in place the vulnerability should no longer be considered an internet-reachable vulnerability.

A classic example of an internet-reachable vulnerability on systems that are not typically internet-accessible is SQL injection (https://en.wikipedia.org/wiki/SQL_injection), where an application stack behind a load balancer and firewall with no ability to route traffic to or from the internet can receive a payload indirectly from the internet that triggers the manipulation or compromise of data in a database that can only be accessed by an authorized connection from the application server on a private network.

Another simple example is the infamous Log4Shell (https://en.wikipedia.org/wiki/Log4Shell) vulnerability from 2021, where exploitation was possible via vulnerable internet-reachable resources deep in the application stack that were often not internet-accessible themselves.


---   
    

#### FRA-VDR-02

The simple reality is that most traditional vulnerabilities discovered by scanners or during assessment are not likely to be exploitable; exploitation typically requires an unrealistic set of circumstances that will not occur during normal operation. The likelihood of exploitation will vary depending on so many factors that FedRAMP will not recommend a specific framework for approaching this beyond the recommendations and requirements in this document.

The proof, ultimately, is in the pudding - providers who regularly evaluate vulnerabilities as not likely exploitable without careful consideration are more likely to suffer from an adverse impact where the root cause was an exploited vulnerability that was improperly evaluated. If done recklessly or deliberately, such actions will have a potential adverse impact on a provider&#x27;s FedRAMP authorization.


---   
    
  
