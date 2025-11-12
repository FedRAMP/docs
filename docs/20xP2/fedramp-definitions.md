# FedRAMP Definitions

This document consolidates formal FedRAMP definitions for terms used in FedRAMP standards.

??? success "Effective Date(s) & Overall Applicability"
    - **Release:** 25.11A DRAFT
    - **Published:** 1900-01-01
    - **Designator:** FRD
    - **Description:** THIS IS A DRAFT AND IS NOT FINALIZED, USE AT YOUR OWN RISK.
    ---
    - **FedRAMP 20x**:
        - This release is effective **2025-06-01** for **20x Phase One Pilot**.
        - These definitions apply to all FedRAMP 20x documents, standards, requirements, and other materials.
    - **FedRAMP Rev5**:
        - This release is effective **2025-06-01** for **Rev5 Balance Improvement Releases**.
        - These definitions apply to all FedRAMP Rev5 documents, standard, requirements, and other materials that have been included in updates to Rev5 in a Balance Improvement Release.

??? abstract "Background & Authority"
    - [FedRAMP Authorization Act (44 USC § 3608)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) requires that the Administrator of the General Services Administration shall &quot;establish a Government- wide program that provides a standardized, reusable approach to security assessment and authorization for cloud computing products and services that process unclassified information used by agencies&quot;

---


### Accepted Vulnerability

!!! quote ""
    A _vulnerability_ that the provider does not intend to _fully mitigate_ or _remediate_, OR that has not or will not be _fully mitigated_ or _remediated_ within the maximum overdue period recommended or required by FedRAMP.

    **Also:** accepted vulnerability, accepted vulnerabilities

    **ID:** FRD-ALL-31
### Adaptive

!!! quote ""
    The type of _significant change_ that does not routinely recur but does not introduce substantive potential security risks that need to be assessed in depth.

    **Note:** Adaptive changes typically require careful planning that focuses on engineering execution instead of customer adoption, can be verified with minor changes to existing automated validation procedures, and do not require large changes to operational procedures, deployment plans, or documentation.

    **Also:** adaptive

    **ID:** FRD-ALL-10
### Agency

!!! quote ""
    Has the meaning given in 44 U.S. Code § 3502 (1), which is &quot;any executive department, military department, Government corporation, Government controlled corporation, or other establishment in the executive branch of the Government (including the Executive Office of the President), or any independent regulatory agency, but does not include—(A) the Government Accountability Office; (B) Federal Election Commission; (C) the governments of the District of Columbia and of the territories and possessions of the United States, and their various subdivisions; or (D) Government-owned contractor-operated facilities, including laboratories engaged in national defense research and production activities.&quot;
    [**Reference:** 44 U.S. Code § 3502 (1)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **Also:** agency, agencies

    **ID:** FRD-ALL-19
### All Necessary Assessors

!!! quote ""
    All entities who participate in the FedRAMP assessment of a _cloud service offering_ in the context of a FedRAMP program authorization. This always includes FedRAMP and any FedRAMP recognized independent assessor contracted by the provider to perform a FedRAMP assessment.

    **Note:** This standard identifies the requirements for an assessment and authorization performed by FedRAMP prior to any _agency_ use of the _cloud service offering_, therefore _agency_ assessment teams are not included in the FedRAMP assessment and authorization. The resulting FedRAMP authorization package will include all the materials _agency_ authorization teams need to assess the _cloud service offering_ for _agency_ use, including evidence. Program authorization is an authorization path defined in Section IV (c) of OMB Memorandum M-24-15.

    **Also:** all necessary assessors

    **ID:** FRD-ALL-46
### All Necessary Parties

!!! quote ""
    All entities whose interests are affected directly by activity related to a specific _cloud service offering_ in the context of a FedRAMP authorization. This always includes FedRAMP and any _agency_ customer who is operating the _cloud service offering_, but may include additional parties depending on agreements made by the cloud service provider (such as consultants or third-party assessors). Potential _agency_ customers or third-party cloud service providers should also be included in most cases but this is not a mandatory requirement under FedRAMP as ultimately the cloud service provider may choose who they wish to do business with.

    **Also:** all necessary parties

    **ID:** FRD-ALL-18
### Authorization Package

!!! quote ""
    Has meaning from 44 USC § 3607 (b)(8) which is &quot;the essential information that can be used by an agency to determine whether to authorize the operation of an information system or the use of a designated set of common controls for all cloud computing products and services authorized by FedRAMP.&quot;

    **Note:** In FedRAMP documentation, _authorization package_ always refers to a FedRAMP _authorization package_ unless otherwise specified.
    [**Reference:** 44 USC § 3607 (b)(8)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3607)

    **Also:** authorization package, authorization packages

    **ID:** FRD-ALL-14
### Authorization data

!!! quote ""
    The collective information required by FedRAMP for initial and ongoing assessment and authorization of a _cloud service offering_, including the _authorization package_. 

    **Note:** In FedRAMP documentation, _authorization data_ always refers to FedRAMP _authorization data_ unless otherwise specified.

    **Also:** authorization data

    **ID:** FRD-ALL-15
### Catastrophic Adverse Effect

!!! quote ""
    A severe negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would _likely_: (i) result in a severe degradation in the availability or performance of services within the _cloud service offering_ for 24+ hours; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a majority of the _federal customer data_ stored within the _cloud service offering_.

    **Also:** catastrophic adverse effect, catastrophic adverse effects

    **ID:** FRD-ALL-32
### Cloud Service Offering

!!! quote ""
    A specific, packaged cloud computing product or service provided by a cloud service provider that can be used by a customer. FedRAMP assessment and authorization of the cloud computing product or service is based on the Minimum Assessment Standard.

    **Also:** cloud service offering, cloud service offerings

    **ID:** FRD-ALL-06
### Drift

!!! quote ""
    Changes to _information resources_ that cause deviations from the intended and assessed state; common forms of drift include changes to configurations, deployed software, privileges, running processes, and availability.

    **Also:** drift, drifts, drifting

    **ID:** FRD-ALL-39
### False Positive Vulnerability

!!! quote ""
    A _detected vulnerability_ that is not actually present in an exploitable state in the _information resource_; this includes situations where vulnerable software or code exist on an machine-based _information resource_ but are not loaded, running, or otherwise in an operating state required for exploitation.

    **Note:** This only applies if the _vulnerability_ is not and was not present; a _remediated vulnerability_ or a _fully mitigated vulnerability_ cannot also be a _false positive vulnerability_.

    **Also:** false positive vulnerability, false positive vulnerabilities

    **ID:** FRD-ALL-29
### FedRAMP Security Inbox

!!! quote ""
    An email address that meets the requirements outlined in the FedRAMP Security Inbox requirements.

    **Also:** security inbox, security inboxes, FSI

    **ID:** FRD-ALL-45
### Federal Customer Data

!!! quote ""
    All electronic information, content, and materials that an _agency_ or its authorized users upload, store, or otherwise provide to a cloud service for processing or storage. This does NOT include account information, service metadata, analytics, telemetry, or other similar metadata generated by the cloud service provider.

    **Note:** In the context of FedRAMP authorization, &quot;federal customer data&quot; ONLY ever refers to data owned by federal agency customers. Agreements and contracts with specific _agencies_ may require providers to protect additional data or even transfer ownshership of telemetry or usage data to the _agency_; always consult a lawyer that is familiar with company agreements and contracts when determining the scope of federal customer data.

    **Also:** federal customer data

    **ID:** FRD-ALL-01
### Fully Mitigated Vulnerability

!!! quote ""
    A _vulnerability_ where the likelihood of exploitation or _potential adverse impact_ of exploitation has been reduced from the original evaluation until either are negligible, but the _vulnerability_ is still _detected_.

    **Also:** fully mitigated vulnerability, fully mitigated vulnerabilities

    **ID:** FRD-ALL-28
### Handle

!!! quote ""
    Has the plain language meaning inclusive of any possible action taken with information, such as access, collect, control, create, display, disclose, disseminate, dispose, maintain, manipulate, process, receive, review, store, transmit, use... etc.

    **Also:** handle, handles, handled, handling

    **ID:** FRD-ALL-03
### Impact Categorization

!!! quote ""
    The type of _significant change_ that is _likely_ to increase or decrease the impact level categorization for the entire cloud service offering (e.g. from low to moderate or from high to moderate).

    **Also:** impact categorization

    **ID:** FRD-ALL-12
### Incident

!!! quote ""
    Has the meaning given in 44 USC § 3552 (b)(2) applied to federal customer data, which is &quot;an occurrence that (A) actually or imminently jeopardizes, without lawful authority, the integrity, confidentiality, or availability of [federal customer data]; or (B) constitutes a violation or imminent threat of violation of law, security policies, security procedures, or acceptable use policies [related to federal customer data].&quot;
    [**Reference:** 44 USC § 3552 (b)(2)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapII-sec3552)

    **Also:** incident, incidents

    **ID:** FRD-ALL-40
### Information Resource

!!! quote ""
    Has the meaning from 44 USC § 3502 (6): &quot;information and related resources, such as personnel, equipment, funds, and information technology.&quot; This includes any aspect of the _cloud service offering_, both technical and managerial, including everything that makes up the business of the offering from non-_machine-based_ _information resources_ like organizational policies, procedures, employees, etc. to _machine-based_ _information resources_ like hardware, software, cloud services, code, etc.

    **Note:** _Information resources_ are either _machine-based_ or non-_machine-based_; any requirement or recommendation that references _information resources_ without specifying a type is inclusive of all _information resources_.
    [**Reference:** 44 USC § 3502 (6)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **Also:** information resource, information resources

    **ID:** FRD-ALL-02
### Initial FedRAMP Assessment

!!! quote ""
    The first full assessment of a _cloud service offering_ seeking FedRAMP authorization, coordinated by the provider with _all necessary assessors_, that results in a FedRAMP authorization.

    **Also:** initial FedRAMP assessment, IFRA

    **ID:** FRD-ALL-48
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

    **Also:** internet-reachable vulnerability, internet-reachable vulnerabilities, IRV, IRVs, NIRV, NIRVs

    **ID:** FRD-ALL-24
### Known Exploited Vulnerability (KEV)

!!! quote ""
    Has the meaning given in CISA Binding Operational Directive 22-01, which is any _vulnerability_ identified in CISA&#x27;s Known Exploited Vulnerabilities catalog.
    [**Reference:** CISA BOD 22-01](https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities)

    **Also:** known exploited vulnerability, known exploited vulnerabilities, KEV, KEVs

    **ID:** FRD-ALL-25
### Likely

!!! quote ""
    A reasonable degree of probability based on context.

    **Also:** likely, likelihood

    **ID:** FRD-ALL-04
### Likely Exploitable Vulnerability (LEV)

!!! quote ""
    A vulnerability that is not _fully mitigated_, AND is reachable by a _likely_ threat actor, AND a _likely_ threat actor with knowledge of the _vulnerability_ would likely be able to gain unauthorized access, cause harm, disrupt operations, or otherwise have an undesired adverse impact within the _cloud service offering_ by exploiting the _vulnerability_.

    **Notes:**

    - The opposite of this is a &quot;Not Likely Exploitable Vulnerability&quot; (NLEV).

    - At the absolute minimum, any _vulnerability_ that an automated unauthenticated system can exploit over the internet is a _likely exploitable vulnerability_.

    **Also:** likely exploitable vulnerability, likely exploitable vulnerabilities, LEV, LEVs, NLEV, NLEVs

    **ID:** FRD-ALL-23
### Limited Adverse Effect

!!! quote ""
    A minor negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in degradation of the availability or performance of services within the _cloud service offering_ for a minority of relevant users; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a small amount of the _federal customer data_ stored within the _cloud service offering_ by only a few relevant users.

    **Also:** limited adverse effect, limited adverse effects

    **ID:** FRD-ALL-34
### Machine-Based (information resources)

!!! quote ""
    Any information technology _information resource_—including systems, processes, software, hardware, services, cloud-native capabilities, and any other such capability, component, or resource—that relies primarily on mechanical or electronic devices (i.e. computers) for operation.

    **Note:** All other _information resources_ that do not rely on computers are non-_machine-based_ _information resources_.

    **Also:** machine-based, machine based

    **ID:** FRD-ALL-50
### Machine-Readable

!!! quote ""
    Has the meaning from 44 U.S. Code § 3502 (18) which is &quot;the term &quot;_machine-readable_&quot;, when used with respect to data, means data in a format that can be easily processed by a computer without human intervention while ensuring no semantic meaning is lost&quot;
    [**Reference:** 44 U.S. Code § 3502 (18)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **Also:** machine-readable

    **ID:** FRD-ALL-17
### Negligible Adverse Effect

!!! quote ""
    A small negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in minor inconvenience when accessing or using services within the _cloud service offering_; OR (ii) result in degradation of the availability or performance of services within the _cloud service offering_ for only a few relevant users.

    **Also:** negligible adverse effect, negligible adverse effects

    **ID:** FRD-ALL-35
### Ongoing Authorization Report (OAR)

!!! quote ""
    A _regular_ report that is supplied by FedRAMP Authorized cloud service providers to agency customers, aligned to the requirements and recommendations in the FedRAMP Collaborative Continuous Monitoring Standard.

    **Also:** ongoing authorization report, OAR, OARs

    **ID:** FRD-ALL-43
### Overdue Vulnerability

!!! quote ""
    A _vulnerability_ that the provider intends to _fully mitigate_ or _remediate_ but has not or will not do so within the time frames recommended or required by FedRAMP.

    **Also:** overdue vulnerability, overdue vulnerabilities

    **ID:** FRD-ALL-30
### Partially Mitigated Vulnerability

!!! quote ""
    A _vulnerability_ where the likelihood or _potential adverse impact_ of exploitation has been reduced from the original evaluation but the risk of exploitation still exists and the _vulnerability_ is still _detected_.

    **Also:** partially mitigated vulnerability, partially mitigated vulnerabilities

    **ID:** FRD-ALL-27
### Persistent FedRAMP Assessment

!!! quote ""
    Follow-on assessments of a _cloud service offering_ focused on Key Security Indicators, coordinated by the provider with _all necessary assessors_, to maintain a FedRAMP authorization or change its _impact categorization_.

    **Also:** persistent FedRAMP assessment, PFRA

    **ID:** FRD-ALL-49
### Persistent Validation

!!! quote ""
    The systematic and persistent process of validating that _information resources_ within a _cloud service offering_ are operating in a secure manner as expected by the goals and objectives outlined by the provider against FedRAMP Key Security Indicators.

    **Also:** persistent validation, persistently validate, persistently validated, validate, validated, validation

    **ID:** FRD-ALL-47
### Persistently

!!! quote ""
    Occurring in a firm, steady way that is repeated over a long period of time in spite of obstacles or difficulties. Persistent activities may vary between actors, may occur irregularly, and may include interruptions or waiting periods between cycles. These attributes of persistent activities should be intentional, understood, and documented; the status of persistent activities will always be known. 

    **Note:** The use of _persistently_ indicates a process that may not always occur continuously (without interruption or gaps) or regularly (on a consistent, predictable basis) but will repeat frequently in cycles. It aligns generally with historical misuse of &quot;continuous&quot; in federal information security policies.

    **Also:** persistently, persistent

    **ID:** FRD-ALL-38
### Potential Adverse Impact (of vulnerability exploitation)

!!! quote ""
    The estimated cumulative effect of unauthorized access, disruption, harm, or other adverse impact to agencies that _likely_ could result if a threat actor exploits a _vulnerability_ in the _cloud service offering_; as estimated following FedRAMP recommendations and requirements.

    **Also:** potential adverse impact, potential adverse impacts

    **ID:** FRD-ALL-36
### Privileged account

!!! quote ""
    An account with elevated privileges that enables administrative functions over some aspect of the _cloud service offering_ that may affect the confidentiality, integrity, or availability of information beyond those given to normal users; levels of privilege may vary wildly.

    **Note:** Any references to _privileged accounts_ in FedRAMP materials should be presumed to apply to privileged roles or other similar capabilities that are used to assign privileges to _privileged accounts_.

    **Also:** privileged account, privileged accounts

    **ID:** FRD-ALL-42
### Promptly

!!! quote ""
    Without Unnecessary Delay.

    **Note:** The use of _promptly_ in FedRAMP materials frames conveys a need for urgent action where the expected time frame will vary by circumstance but earlier action is more likely to improve security outcomes and increase the security posture of a _cloud service offering_.

    **Also:** promptly, prompt

    **ID:** FRD-ALL-37
### Quarterly Review

!!! quote ""
    A _regular_ synchronous meeting hosted by a FedRAMP Authorized cloud service provider for agency customers, aligned to the requirements and recommendations in the FedRAMP Collaborative Continuous Monitoring Standard.

    **Also:** quarterly review, quarterly reviews

    **ID:** FRD-ALL-44
### Regularly

!!! quote ""
    Performing the activity on a consistent, predictable, and repeated basis, at set intervals, automatically if possible, following a documented plan. These intervals may vary as appropriate between different requirements.

    **Also:** regularly, regular

    **ID:** FRD-ALL-07
### Remediated Vulnerability

!!! quote ""
    A _vulnerability_ that has been neutralized or eliminated and is no longer _detected_.

    **Also:** remediated vulnerability, remediated vulnerabilities

    **ID:** FRD-ALL-26
### Routine Recurring

!!! quote ""
    The type of _significant change_ that _regularly_ and routinely recurs as part of ongoing operations, vulnerability mitigation, or vulnerability remediation.

    **Also:** routine recurring

    **ID:** FRD-ALL-09
### Serious Adverse Effect

!!! quote ""
    A significant negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in intermittent or ongoing degradation in the availability or performance of services within the _cloud service offering_, causing unpredictable interruptions to operations for 12+ hours; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a minority of the _federal customer data_ stored within the _cloud service offering_.

    **Also:** serious adverse effect, serious adverse effects

    **ID:** FRD-ALL-33
### Significant change

!!! quote ""
    Has the meaning given in NIST SP 800-37 Rev. 2 which is &quot;a change that is _likely_ to substantively affect the security or privacy posture of a system.&quot;
    [**Reference:** NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final)

    **Also:** significant change, significant changes

    **ID:** FRD-ALL-08
### Third-party Information Resource

!!! quote ""
    Any _information resource_ that is not entirely included in the assessment for the _cloud service offering_ seeking authorization.

    **Also:** third-party information resource, third-party information resources

    **ID:** FRD-ALL-05
### Top-level administrative account

!!! quote ""
    The most privileged account with the highest level of access within a _cloud service offering_ for a customer organization, typically with complete control over all aspects of the _cloud service offering_, including managing resources, users, access, privileges, and the account itself.

    **Note:** Any references to _top-level administrative accounts_ in FedRAMP materials should be presumed to apply to top-level administrative roles or other similar capabilities that are used to assign _top-level administrative account_ privileges.

    **Also:** top-level administrative account, top-level administrative accounts

    **ID:** FRD-ALL-41
### Transformative

!!! quote ""
    The type of _significant change_ that introduces substantive potential security risks that are _likely_ to affect existing risk determinations and must be assessed in depth.

    **Note:** Transformative changes typically introduce major features or capabilities that may change how a customer uses the service (in whole or in part) and require extensive updates to security assessments, operational procedures, deployment plans, and documentation.

    **Also:** transformative

    **ID:** FRD-ALL-11
### Trust Center

!!! quote ""
    A secure repository or service used by cloud service providers to store and share _authorization data_. _Trust centers_ are the complete and definitive source for _authorization data_ and must meet the requirements outlined in the FedRAMP _authorization data_ Sharing Standard to be FedRAMP-compatible.

    **Note:** In FedRAMP documentation, all references to _trust centers_ indicate FedRAMP-compatible _trust centers_ unless otherwise specified.

    **Also:** trust center, trust centers

    **ID:** FRD-ALL-16
### Vulnerability

!!! quote ""
    Has the meaning given to &quot;security vulnerability&quot; in 6 USC § 650 (25), which is &quot;any attribute of hardware, software, process, or procedure that could enable or facilitate the defeat of [...] management, operational, and technical controls used to protect against an unauthorized effort to adversely affect the confidentiality, integrity, and availability of an information system or its information.&quot; This includes gaps in Rev5 controls and 20x Key Security Indicators, software vulnerabilities, misconfigurations, exposures, weak credentials, insecure services, and all other such potential weaknesses in protection (intentional or unintentional).
    [**Reference:** 6 USC § 650 (25)](https://www.govinfo.gov/app/details/USCODE-2024-title6/USCODE-2024-title6-chap1-subchapXVIII-sec650)

    **Also:** vulnerability, vulnerabilities

    **ID:** FRD-ALL-20
### Vulnerability Detection

!!! quote ""
    The systematic process of discovering and identifying security vulnerabilities in _information resources_ through assessment, scanning, threat intelligence, vulnerability disclosure mechanisms, bug bounties, supply chain monitoring, and other capabilities. This process includes the initial discovery of a _vulnerability&#x27;s_ existence and the determination of affected _information resources_ within a _cloud service offering._

    **Note:** This definition applies to other forms such as &quot;detect vulnerabilities&quot; or simply &quot;detection&quot; / &quot;detected&quot; used in FedRAMP materials.

    **Also:** vulnerability detection, detect vulnerabilities, detect, detection, detected

    **ID:** FRD-ALL-21
### Vulnerability Response

!!! quote ""
    The systematic process of tracking, evaluating, mitigating, monitoring, remediating, assessing exploitation, reporting, and otherwise managing _detected vulnerabilities_.

    **Note:** This definition applies to other forms such as &quot;respond to vulnerabilities&quot; or simply &quot;response&quot; / &quot;responded&quot; used in FedRAMP materials.

    **Also:** vulnerability response, respond to vulnerabilities, respond, response, responded

    **ID:** FRD-ALL-22
















