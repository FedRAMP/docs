# FedRAMP Definitions


!!! info "Effective Date(s) & Overall Applicability for Rev5"
      - **Optional** (Wide Release) beginning 2025-09-01.
      - Rev5 Authorized providers MUST apply these definitions for Rev5 Balance Improvement Release materials; these definitions do not always apply in legacy Rev5 materials.
      


??? abstract "Background & Authority"
    - [FedRAMP Authorization Act (44 USC § 3608)](http://fedramp.gov/docs/authority/law/#sec-3608-federal-risk-and-authorization-management-program) requires that the Administrator of the General Services Administration shall &quot;establish a Government- wide program that provides a standardized, reusable approach to security assessment and authorization for cloud computing products and services that process unclassified information used by agencies&quot;

This document consolidates formal FedRAMP definitions for terms used in FedRAMP 20x processes and documentation.

---



### Accepted Vulnerability

??? abstract "**ID:** FRD-ACV"

    **Former ID:** FRD-ALL-31
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A vulnerability that the provider does not intend to fully mitigate or remediate, OR that has not or will not be fully mitigated or remediated within the maximum overdue period recommended or required by FedRAMP.

    ---


    **Also:** accepted vulnerability, accepted vulnerabilities
### Adaptive

??? abstract "**ID:** FRD-ADP"

    **Former ID:** FRD-ALL-10
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The type of significant change that does not routinely recur but does not introduce substantive potential security risks that need to be assessed in depth.

    ---


    _**Note:** Adaptive changes typically require careful planning that focuses on engineering execution instead of customer adoption, can be verified with minor changes to existing automated validation procedures, and do not require large changes to operational procedures, deployment plans, or documentation._

    **Also:** adaptive
### Agency

??? abstract "**ID:** FRD-AGY"

    **Former ID:** FRD-ALL-19
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has the meaning given in 44 U.S. Code § 3502 (1), which is &quot;any executive department, military department, Government corporation, Government controlled corporation, or other establishment in the executive branch of the Government (including the Executive Office of the President), or any independent regulatory agency, but does not include—(A) the Government Accountability Office; (B) Federal Election Commission; (C) the governments of the District of Columbia and of the territories and possessions of the United States, and their various subdivisions; or (D) Government-owned contractor-operated facilities, including laboratories engaged in national defense research and production activities.&quot;

    ---

    **Reference:** [44 U.S. Code § 3502 (1)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **Also:** agency, agencies
### All Necessary Assessors

??? abstract "**ID:** FRD-ANA"

    **Former ID:** FRD-ALL-46
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    All entities who participate in the FedRAMP assessment of a cloud service offering in the context of a FedRAMP program authorization. This always includes FedRAMP and any FedRAMP recognized independent assessor contracted by the provider to perform a FedRAMP assessment.

    ---


    _**Note:** This process identifies the requirements for an assessment and authorization performed by FedRAMP prior to any agency use of the cloud service offering, therefore agency assessment teams are not included in the FedRAMP assessment and authorization. The resulting FedRAMP authorization package will include all the materials agency authorization teams need to assess the cloud service offering for agency use, including evidence. Program authorization is an authorization path defined in Section IV (c) of OMB Memorandum M-24-15._

    **Also:** all necessary assessors
### All Necessary Parties

??? abstract "**ID:** FRD-ANP"

    **Former ID:** FRD-ALL-18
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    All entities whose interests are affected directly by activity related to a specific cloud service offering in the context of a FedRAMP authorization. This always includes FedRAMP and any agency customer who is operating the cloud service offering, but may include additional parties depending on agreements made by the cloud service provider (such as consultants or third-party assessors). Potential agency customers or third-party cloud service providers should also be included in most cases but this is not a mandatory requirement under FedRAMP as ultimately the cloud service provider may choose who they wish to do business with.

    ---


    **Also:** all necessary parties
### Authorization Package

??? abstract "**ID:** FRD-AUP"

    **Former ID:** FRD-ALL-14
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has meaning from 44 USC § 3607 (b)(8) which is &quot;the essential information that can be used by an agency to determine whether to authorize the operation of an information system or the use of a designated set of common controls for all cloud computing products and services authorized by FedRAMP.&quot;

    ---


    _**Note:** In FedRAMP documentation, authorization package always refers to a FedRAMP authorization package unless otherwise specified._
    **Reference:** [44 USC § 3607 (b)(8)](https://fedramp.gov/docs/authority/law/#b-additional-definitions)

    **Also:** authorization package, authorization packages
### Authorization data

??? abstract "**ID:** FRD-AUD"

    **Former ID:** FRD-ALL-15
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The collective information required by FedRAMP for initial and ongoing assessment and authorization of a cloud service offering, including the authorization package. 

    ---


    _**Note:** In FedRAMP documentation, authorization data always refers to FedRAMP authorization data unless otherwise specified._

    **Also:** authorization data
### Catastrophic Adverse Effect

??? abstract "**ID:** FRD-CAE"

    **Former ID:** FRD-ALL-32
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A severe negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in a severe degradation in the availability or performance of services within the cloud service offering for 24+ hours; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a majority of the federal customer data stored within the cloud service offering.

    ---


    **Also:** catastrophic adverse effect, catastrophic adverse effects
### Cloud Service Offering

??? abstract "**ID:** FRD-CSO"

    **Former ID:** FRD-ALL-06
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A specific, packaged cloud computing product or service provided by a cloud service provider that can be used by a customer. FedRAMP assessment and authorization of the cloud computing product or service is based on the Minimum Assessment Scope.

    ---


    **Also:** cloud service offering, cloud service offerings
### Drift

??? abstract "**ID:** FRD-DFT"

    **Former ID:** FRD-ALL-39
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Changes to information resources that cause deviations from the intended and assessed state; common forms of drift include changes to configurations, deployed software, privileges, running processes, and availability.

    ---


    **Also:** drift, drifts, drifting
### False Positive Vulnerability

??? abstract "**ID:** FRD-FPV"

    **Former ID:** FRD-ALL-29
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A detected vulnerability that is not actually present in an exploitable state in the information resource; this includes situations where vulnerable software or code exist on an machine-based information resource but are not loaded, running, or otherwise in an operating state required for exploitation.

    ---


    _**Note:** This only applies if the vulnerability is not and was not present; a remediated vulnerability or a fully mitigated vulnerability cannot also be a false positive vulnerability._

    **Also:** false positive vulnerability, false positive vulnerabilities
### FedRAMP Security Inbox

??? abstract "**ID:** FRD-FSI"

    **Former ID:** FRD-ALL-45
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    An email address that meets the requirements outlined in the FedRAMP Security Inbox requirements.

    ---


    **Also:** security inbox, security inboxes, FSI
### Federal Customer Data

??? abstract "**ID:** FRD-FCD"

    **Former ID:** FRD-ALL-01
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    All electronic information, content, and materials that an agency or its authorized users upload, store, or otherwise provide to a cloud service for processing or storage. This does NOT include account information, service metadata, analytics, telemetry, or other similar metadata generated by the cloud service provider.

    ---


    _**Note:** In the context of FedRAMP authorization, &quot;federal customer data&quot; ONLY ever refers to data owned by federal agency customers. Agreements and contracts with specific agencies may require providers to protect additional data or even transfer ownshership of telemetry or usage data to the agency; always consult a lawyer that is familiar with company agreements and contracts when determining the scope of federal customer data._

    **Also:** federal customer data
### Fully Mitigated Vulnerability

??? abstract "**ID:** FRD-FMV"

    **Former ID:** FRD-ALL-28
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A vulnerability where the likelihood of exploitation or potential adverse impact of exploitation has been reduced from the original evaluation until either are negligible, but the vulnerability is still detected.

    ---


    **Also:** fully mitigated vulnerability, fully mitigated vulnerabilities
### Handle

??? abstract "**ID:** FRD-HAN"

    **Former ID:** FRD-ALL-03
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has the plain language meaning inclusive of any possible action taken with information, such as access, collect, control, create, display, disclose, disseminate, dispose, maintain, manipulate, process, receive, review, store, transmit, use... etc.

    ---


    **Also:** handle, handles, handled, handling
### Impact Categorization

??? abstract "**ID:** FRD-IPC"

    **Former ID:** FRD-ALL-12
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The type of significant change that is likely to increase or decrease the impact level categorization for the entire cloud service offering (e.g. from low to moderate or from high to moderate).

    ---


    **Also:** impact categorization
### Incident

??? abstract "**ID:** FRD-INT"

    **Former ID:** FRD-ALL-40
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has the meaning given in 44 USC § 3552 (b)(2) applied to federal customer data, which is &quot;an occurrence that (A) actually or imminently jeopardizes, without lawful authority, the integrity, confidentiality, or availability of [federal customer data]; or (B) constitutes a violation or imminent threat of violation of law, security policies, security procedures, or acceptable use policies [related to federal customer data].&quot;

    ---

    **Reference:** [44 USC § 3552 (b)(2)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapII-sec3552)

    **Also:** incident, incidents
### Information Resource

??? abstract "**ID:** FRD-IRS"

    **Former ID:** FRD-ALL-02
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has the meaning from 44 USC § 3502 (6): &quot;information and related resources, such as personnel, equipment, funds, and information technology.&quot; This includes any aspect of the cloud service offering, both technical and managerial, including everything that makes up the business of the offering from non-machine-based information resources like organizational policies, procedures, employees, etc. to machine-based information resources like hardware, software, cloud services, code, etc.

    ---


    _**Note:** Information resources are either machine-based or non-machine-based; any requirement or recommendation that references information resources without specifying a type is inclusive of all information resources._
    **Reference:** [44 USC § 3502 (6)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **Also:** information resource, information resources
### Initial FedRAMP Assessment

??? abstract "**ID:** FRD-IFA"

    **Former ID:** FRD-ALL-48
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The first full assessment of a cloud service offering seeking FedRAMP authorization, coordinated by the provider with all necessary assessors, that results in a FedRAMP authorization.

    ---


    **Also:** initial FedRAMP assessment, IFRA
### Internet-Reachable Vulnerability (IRV)

??? abstract "**ID:** FRD-IRV"

    **Former ID:** FRD-ALL-24
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A vulnerability in a machine-based information resource that might be exploited or otherwise triggered by a payload originating from a source on the public internet; this includes machine-based information resources that have no direct route to/from the internet but receive payloads or otherwise take action triggered by internet activity.

    ---


    _**Notes:**_

    - _The opposite of this is a &quot;Not Internet-reachable Vulnerability&quot; (NIRV)._

    - _Internet-reachability applies only to the specific vulnerable machine-based information resources processing the payload; please review the relevant FedRAMP technical assistance on internet-reachable vulnerabilities for examples._

    **Also:** internet-reachable vulnerability, internet-reachable vulnerabilities, IRV, IRVs, NIRV, NIRVs
### Known Exploited Vulnerability (KEV)

??? abstract "**ID:** FRD-KEV"

    **Former ID:** FRD-ALL-25
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has the meaning given in CISA Binding Operational Directive 22-01, which is any vulnerability identified in CISA&#x27;s Known Exploited Vulnerabilities catalog.

    ---

    **Reference:** [CISA BOD 22-01]()

    **Also:** known exploited vulnerability, known exploited vulnerabilities, KEV, KEVs
### Likely

??? abstract "**ID:** FRD-LKY"

    **Former ID:** FRD-ALL-04
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A reasonable degree of probability based on context.

    ---


    **Also:** likely, likelihood
### Likely Exploitable Vulnerability (LEV)

??? abstract "**ID:** FRD-LEV"

    **Former ID:** FRD-ALL-23
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A vulnerability that is not fully mitigated, AND is reachable by a likely threat actor, AND a likely threat actor with knowledge of the vulnerability would likely be able to gain unauthorized access, cause harm, disrupt operations, or otherwise have an undesired adverse impact within the cloud service offering by exploiting the vulnerability.

    ---


    _**Notes:**_

    - _The opposite of this is a &quot;Not Likely Exploitable Vulnerability&quot; (NLEV)._

    - _At the absolute minimum, any vulnerability that an automated unauthenticated system can exploit over the internet is a likely exploitable vulnerability._

    **Also:** likely exploitable vulnerability, likely exploitable vulnerabilities, LEV, LEVs, NLEV, NLEVs
### Limited Adverse Effect

??? abstract "**ID:** FRD-LAE"

    **Former ID:** FRD-ALL-34
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A minor negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in degradation of the availability or performance of services within the cloud service offering for a minority of relevant users; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a small amount of the federal customer data stored within the cloud service offering by only a few relevant users.

    ---


    **Also:** limited adverse effect, limited adverse effects
### Machine-Based (information resources)

??? abstract "**ID:** FRD-MBI"

    **Former ID:** FRD-ALL-50
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Any information technology information resource—including systems, processes, software, hardware, services, cloud-native capabilities, and any other such capability, component, or resource—that relies primarily on mechanical or electronic devices (i.e. computers) for operation.

    ---


    _**Note:** All other information resources that do not rely on computers are non-machine-based information resources._

    **Also:** machine-based, machine based
### Machine-Readable

??? abstract "**ID:** FRD-MRD"

    **Former ID:** FRD-ALL-17
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has the meaning from 44 U.S. Code § 3502 (18) which is &quot;the term &quot;machine-readable&quot;, when used with respect to data, means data in a format that can be easily processed by a computer without human intervention while ensuring no semantic meaning is lost&quot;

    ---

    **Reference:** [44 U.S. Code § 3502 (18)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)

    **Also:** machine-readable
### Negligible Adverse Effect

??? abstract "**ID:** FRD-NAE"

    **Former ID:** FRD-ALL-35
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A small negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in minor inconvenience when accessing or using services within the cloud service offering; OR (ii) result in degradation of the availability or performance of services within the cloud service offering for only a few relevant users.

    ---


    **Also:** negligible adverse effect, negligible adverse effects
### Ongoing Authorization Report (OAR)

??? abstract "**ID:** FRD-OAR"

    **Former ID:** FRD-ALL-43
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A regular report that is supplied by FedRAMP Authorized cloud service providers to agency customers, aligned to the requirements and recommendations in the FedRAMP Collaborative Continuous Monitoring process.

    ---


    **Also:** ongoing authorization report, OAR, OARs
### Overdue Vulnerability

??? abstract "**ID:** FRD-ODV"

    **Former ID:** FRD-ALL-30
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A vulnerability that the provider intends to fully mitigate or remediate but has not or will not do so within the time frames recommended or required by FedRAMP.

    ---


    **Also:** overdue vulnerability, overdue vulnerabilities
### Partially Mitigated Vulnerability

??? abstract "**ID:** FRD-PMV"

    **Former ID:** FRD-ALL-27
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A vulnerability where the likelihood or potential adverse impact of exploitation has been reduced from the original evaluation but the risk of exploitation still exists and the vulnerability is still detected.

    ---


    **Also:** partially mitigated vulnerability, partially mitigated vulnerabilities
### Persistent FedRAMP Assessment

??? abstract "**ID:** FRD-PFA"

    **Former ID:** FRD-ALL-49
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Follow-on assessments of a cloud service offering focused on Key Security Indicators, coordinated by the provider with all necessary assessors, to maintain a FedRAMP authorization or change its impact categorization.

    ---


    **Also:** persistent FedRAMP assessment, PFRA
### Persistent Validation

??? abstract "**ID:** FRD-PVL"

    **Former ID:** FRD-ALL-47
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The systematic and persistent process of validating that information resources within a cloud service offering are operating in a secure manner as expected by the goals and objectives outlined by the provider against FedRAMP Key Security Indicators.

    ---


    **Also:** persistent validation, persistently validate, persistently validated, validate, validated, validation
### Persistently

??? abstract "**ID:** FRD-PER"

    **Former ID:** FRD-ALL-38
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Occurring in a firm, steady way that is repeated over a long period of time in spite of obstacles or difficulties. Persistent activities may vary between actors, may occur irregularly, and may include interruptions or waiting periods between cycles. These attributes of persistent activities should be intentional, understood, and documented; the status of persistent activities will always be known. 

    ---


    _**Note:** The use of persistently indicates a process that may not always occur continuously (without interruption or gaps) or regularly (on a consistent, predictable basis) but will repeat frequently in cycles. It aligns generally with historical misuse of &quot;continuous&quot; in federal information security policies._

    **Also:** persistently, persistent
### Potential Adverse Impact (of vulnerability exploitation)

??? abstract "**ID:** FRD-PAI"

    **Former ID:** FRD-ALL-36
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The estimated cumulative effect of unauthorized access, disruption, harm, or other adverse impact to agencies that _likely_ could result if a threat actor exploits a _vulnerability_ in the _cloud service offering_; as estimated following FedRAMP recommendations and requirements.

    ---


    **Also:** potential adverse impact, potential adverse impacts
### Privileged account

??? abstract "**ID:** FRD-PAC"

    **Former ID:** FRD-ALL-42
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    An account with elevated privileges that enables administrative functions over some aspect of the cloud service offering that may affect the confidentiality, integrity, or availability of information beyond those given to normal users; levels of privilege may vary wildly.

    ---


    _**Note:** Any references to privileged accounts in FedRAMP materials should be presumed to apply to privileged roles or other similar capabilities that are used to assign privileges to privileged accounts._

    **Also:** privileged account, privileged accounts
### Promptly

??? abstract "**ID:** FRD-PRO"

    **Former ID:** FRD-ALL-37
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Without unnecessary delay.

    ---


    _**Note:** The use of promptly in FedRAMP materials frames conveys a need for urgent action where the expected time frame will vary by circumstance but earlier action is more likely to improve security outcomes and increase the security posture of a cloud service offering._

    **Also:** promptly, prompt
### Quarterly Review

??? abstract "**ID:** FRD-QTR"

    **Former ID:** FRD-ALL-44
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A regular synchronous meeting hosted by a FedRAMP Authorized cloud service provider for agency customers, aligned to the requirements and recommendations in the FedRAMP Collaborative Continuous Monitoring process.

    ---


    **Also:** quarterly review, quarterly reviews
### Regularly

??? abstract "**ID:** FRD-RGL"

    **Former ID:** FRD-ALL-07
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Performing the activity on a consistent, predictable, and repeated basis, at set intervals, automatically if possible, following a documented plan. These intervals may vary as appropriate between different requirements.

    ---


    **Also:** regularly, regular
### Remediated Vulnerability

??? abstract "**ID:** FRD-RMV"

    **Former ID:** FRD-ALL-26
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A vulnerability that has been neutralized or eliminated and is no longer detected.

    ---


    **Also:** remediated vulnerability, remediated vulnerabilities
### Routine Recurring

??? abstract "**ID:** FRD-RTR"

    **Former ID:** FRD-ALL-09
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The type of significant change that regularly and routinely recurs as part of ongoing operations, vulnerability mitigation, or vulnerability remediation.

    ---


    **Also:** routine recurring
### Serious Adverse Effect

??? abstract "**ID:** FRD-SAE"

    **Former ID:** FRD-ALL-33
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A significant negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in intermittent or ongoing degradation in the availability or performance of services within the cloud service offering, causing unpredictable interruptions to operations for 12+ hours; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a minority of the federal customer data stored within the cloud service offering.

    ---


    **Also:** serious adverse effect, serious adverse effects
### Significant change

??? abstract "**ID:** FRD-SGC"

    **Former ID:** FRD-ALL-08
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has the meaning given in NIST SP 800-37 Rev. 2 which is &quot;a change that is likely to substantively affect the security or privacy posture of a system.&quot;

    ---

    **Reference:** [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final)

    **Also:** significant change, significant changes
### Third-party Information Resource

??? abstract "**ID:** FRD-TPR"

    **Former ID:** FRD-ALL-05
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Any information resource that is not entirely included in the assessment for the cloud service offering seeking authorization.

    ---


    **Also:** third-party information resource, third-party information resources
### Top-level administrative account

??? abstract "**ID:** FRD-TLA"

    **Former ID:** FRD-ALL-41
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The most privileged account with the highest level of access within a cloud service offering for a customer organization, typically with complete control over all aspects of the cloud service offering, including managing resources, users, access, privileges, and the account itself.

    ---


    _**Note:** Any references to top-level administrative accounts in FedRAMP materials should be presumed to apply to top-level administrative roles or other similar capabilities that are used to assign top-level administrative account privileges._

    **Also:** top-level administrative account, top-level administrative accounts
### Transformative

??? abstract "**ID:** FRD-TRF"

    **Former ID:** FRD-ALL-11
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The type of significant change that introduces substantive potential security risks that are likely to affect existing risk determinations and must be assessed in depth.

    ---


    _**Note:** Transformative changes typically introduce major features or capabilities that may change how a customer uses the service (in whole or in part) and require extensive updates to security assessments, operational procedures, deployment plans, and documentation._

    **Also:** transformative
### Trust Center

??? abstract "**ID:** FRD-TRC"

    **Former ID:** FRD-ALL-16
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    A secure repository or service used by cloud service providers to store and share authorization data. Trust centers are the complete and definitive source for authorization data and must meet the requirements outlined in the FedRAMP Authorization Data Sharing process to be FedRAMP-compatible.

    ---


    _**Note:** In FedRAMP documentation, all references to trust centers indicate FedRAMP-compatible trust centers unless otherwise specified._

    **Also:** trust center, trust centers
### Vulnerability

??? abstract "**ID:** FRD-VUL"

    **Former ID:** FRD-ALL-20
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    Has the meaning given to &quot;security vulnerability&quot; in 6 USC § 650 (25), which is &quot;any attribute of hardware, software, process, or procedure that could enable or facilitate the defeat of [...] management, operational, and technical controls used to protect against an unauthorized effort to adversely affect the confidentiality, integrity, and availability of an information system or its information.&quot; This includes gaps in Rev5 controls and 20x Key Security Indicators, software vulnerabilities, misconfigurations, exposures, weak credentials, insecure services, and all other such potential weaknesses in protection (intentional or unintentional).

    ---

    **Reference:** [6 USC § 650 (25)](https://www.govinfo.gov/app/details/USCODE-2024-title6/USCODE-2024-title6-chap1-subchapXVIII-sec650)

    **Also:** vulnerability, vulnerabilities
### Vulnerability Detection

??? abstract "**ID:** FRD-VLD"

    **Former ID:** FRD-ALL-21
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The systematic process of discovering and identifying security vulnerabilities in information resources through assessment, scanning, threat intelligence, vulnerability disclosure mechanisms, bug bounties, supply chain monitoring, and other capabilities. This process includes the initial discovery of a vulnerability&#x27;s existence and the determination of affected information resources within a cloud service offering.

    ---


    _**Note:** This definition applies to other forms such as &quot;detect vulnerabilities&quot; or simply &quot;detection&quot; / &quot;detected&quot; used in FedRAMP materials._

    **Also:** vulnerability detection, detect vulnerabilities, detect, detection, detected
### Vulnerability Response

??? abstract "**ID:** FRD-VLR"

    **Former ID:** FRD-ALL-22
      
    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""
    The systematic process of tracking, evaluating, mitigating, monitoring, remediating, assessing exploitation, reporting, and otherwise managing detected vulnerabilities.

    ---


    _**Note:** This definition applies to other forms such as &quot;respond to vulnerabilities&quot; or simply &quot;response&quot; / &quot;responded&quot; used in FedRAMP materials._

    **Also:** vulnerability response, respond to vulnerabilities, respond, response, responded
