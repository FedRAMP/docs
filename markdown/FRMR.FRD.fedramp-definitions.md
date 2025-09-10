# FedRAMP FedRAMP Definitions

- **Release:** 25.09A
- **Published:** 2025-09-10  
- **Designator:** FRD
- **Description:** Added FRD-ALL-18 through FRD-ALL-39 aligned with the Vulnerability Detection and Response standard.

## Front Matter

### Effective Date(s) & Overall Applicability

- **FedRAMP 20x**:
  - This release is effective **2025-06-01** for **20x**. 
  - These definitions apply to all FedRAMP 20x documents, standards, requirements, and other materials.

- **FedRAMP Rev5**:
  - This release is effective **2025-06-01** for **R5.FRD.WR**. 
  - These definitions apply to all FedRAMP Rev5 documents, standard, requirements, and other materials that have been included in updates to Rev5 under Balance Improvement Releases.


### Documentation Guidelines

The following FedRAMP documentation guidelines apply to this document:

- The capitalized key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [IETF RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).
- FedRAMP-specific terms defined in [FRD-ALL (FedRAMP Definitions)](https://github.com/FedRAMP/docs/blob/main/markdown/FRMR.FRD.fedramp-definitions.md) are italicized throughout this document for reference.


## Background & Authority
- [FedRAMP Authorization Act (44 USC § 3608)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) requires that the Administrator of the General Services Administration shall &quot;establish a Government- wide program that provides a standardized, reusable approach to security assessment and authorization for cloud computing products and services that process unclassified information used by agencies&quot;

### Purpose

This document consolidates formal FedRAMP definitions for terms used in FedRAMP standards.

### Expected Outcomes

- All stakeholders will have a common understanding of key terms used in FedRAMP standards.

---

## Definitions

#### FRD-ALL-01

> **Federal Information**: Has the meaning from OMB Circular A-130 and any successor documents. As of Apr 2025, this means &quot;information created, collected, processed, maintained, disseminated, disclosed, or disposed of by or for the federal government, in any medium or form.&quot;
>
>  _Note: This typically does not include information that a cloud service provider produces outside of a government contract or agreement. Review FedRAMP&#x27;s Technical Assistance and consult qualified legal experts for additional assistance identifying federal information._
>
>  _[Reference: OMB Circular A-130](https://whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf)_

#### FRD-ALL-02

> **Information Resource**: Has the meaning from 44 USC § 3502 (6): &quot;information and related resources, such as personnel, equipment, funds, and information technology.&quot;
>
>  _Note: This applies to any aspect of the _cloud service offering_, both technical and managerial, including everything that makes up the business of the offering from organizational policies and procedures to hardware, software, and code._
>
>  _[Reference: 44 USC § 3502 (6)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)_

#### FRD-ALL-03

> **Handle**: Has the plain language meaning inclusive of any possible action taken with information, such as access, collect, control, create, display, disclose, disseminate, dispose, maintain, manipulate, process, receive, review, store, transmit, use... etc.

#### FRD-ALL-04

> **Likely**: A reasonable degree of probability based on context.

#### FRD-ALL-05

> **Third-party Information Resource**: Any _information resource_ that is not entirely included in the assessment for the _cloud service offering_ seeking authorization.

#### FRD-ALL-06

> **Cloud Service Offering**: A specific, packaged cloud computing product or service provided by a cloud service provider that can be used by a customer. FedRAMP assessment and authorization of the cloud computing product or service is based on the Minimum Assessment Standard.

#### FRD-ALL-07

> **Regularly**: Performing the activity on a consistent, predictable, and repeated basis, at set intervals, automatically if possible, following a documented plan. These intervals may vary as appropriate between different requirements.

#### FRD-ALL-08

> **Significant change**: Has the meaning given in NIST SP 800-37 Rev. 2 which is &quot;a change that is _likely_ to substantively affect the security or privacy posture of a system.&quot;
>
>  _[Reference: NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final)_

#### FRD-ALL-09

> **Routine Recurring**: The type of _significant change_ that _regularly_ and routinely recurs as part of ongoing operations, vulnerability mitigation, or vulnerability remediation.

#### FRD-ALL-10

> **Adaptive**: The type of _significant change_ that does not routinely recur but does not introduce substantive potential security risks that need to be assessed in depth.
>
>  _Note: Adaptive changes typically require careful planning that focuses on engineering execution instead of customer adoption, can be verified with minor changes to existing automated validation procedures, and do not require large changes to operational procedures, deployment plans, or documentation._

#### FRD-ALL-11

> **Transformative**: The type of _significant change_ that introduces substantive potential security risks that are _likely_ to affect existing risk determinations and must be assessed in depth.
>
>  _Note: Transformative changes typically introduce major features or capabilities that may change how a customer uses the service (in whole or in part) and require extensive updates to security assessments, operational procedures, deployment plans, and documentation._

#### FRD-ALL-12

> **Impact Categorization**: The type of _significant change_ that is _likely_ to increase or decrease the impact level categorization for the entire cloud service offering (e.g. from low to moderate or from high to moderate).

#### FRD-ALL-13

> **Interim Requirement**: A temporary requirement included as part of a FedRAMP Pilot or Beta Test that will _likely_ be replaced, updated, or removed prior to the formal wide release of the requirement.

#### FRD-ALL-14

> **Authorization Package**: Has meaning from 44 USC § 3607 (b)(8) which is &quot;the essential information that can be used by an agency to determine whether to authorize the operation of an information system or the use of a designated set of common controls for all cloud computing products and services authorized by FedRAMP.&quot;
>
>  _Note: In FedRAMP documentation, _authorization package_ always refers to a FedRAMP _authorization package_ unless otherwise specified._
>
>  _[Reference: 44 USC § 3607 (b)(8)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3607)_

#### FRD-ALL-15

> **Authorization data**: The collective information required by FedRAMP for initial and ongoing assessment and authorization of a _cloud service offering_, including the _authorization package_. 
>
>  _Note: In FedRAMP documentation, _authorization data_ always refers to FedRAMP _authorization data_ unless otherwise specified._

#### FRD-ALL-16

> **Trust Center**: A secure repository or service used by cloud service providers to store and share _authorization data_. _Trust centers_ are the complete and definitive source for _authorization data_ and must meet the requirements outlined in the FedRAMP _authorization data_ Sharing Standard to be FedRAMP-compatible.
>
>  _Note: In FedRAMP documentation, all references to _trust centers_ indicate FedRAMP-compatible _trust centers_ unless otherwise specified._

#### FRD-ALL-17

> **Machine-readable**: Has the meaning from 44 U.S. Code § 3502 (18) which is &quot;the term &quot;_machine-readable_&quot;, when used with respect to data, means data in a format that can be easily processed by a computer without human intervention while ensuring no semantic meaning is lost&quot;
>
>  _[Reference: 44 U.S. Code § 3502 (18)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)_

#### FRD-ALL-18

> **All Necessary Parties**: All entities whose interests are affected directly by activity related to a specific _cloud service offering_ in the context of a FedRAMP authorization. This always includes FedRAMP and any _agency_ customer who is operating the _cloud service offering_, but may include additional parties depending on agreements made by the cloud service provider (such as consultants or third-party assessors). Potential _agency_ customers or third-party cloud service providers should also be included in most cases but this is not a mandatory requirement under FedRAMP as ultimately the cloud service provider may choose who they wish to do business with.

#### FRD-ALL-19

> **Agency**: Has the meaning given in 44 U.S. Code § 3502 (1), which is &quot;any executive department, military department, Government corporation, Government controlled corporation, or other establishment in the executive branch of the Government (including the Executive Office of the President), or any independent regulatory agency, but does not include—(A) the Government Accountability Office; (B) Federal Election Commission; (C) the governments of the District of Columbia and of the territories and possessions of the United States, and their various subdivisions; or (D) Government-owned contractor-operated facilities, including laboratories engaged in national defense research and production activities.&quot;
>
>  _[Reference: 44 U.S. Code § 3502 (1)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)_

#### FRD-ALL-20

> **Vulnerability**: Has the meaning given to &quot;security vulnerability&quot; in 6 USC § 650 (25), which is &quot;any attribute of hardware, software, process, or procedure that could enable or facilitate the defeat of [...] management, operational, and technical controls used to protect against an unauthorized effort to adversely affect the confidentiality, integrity, and availability of an information system or its information.&quot; This includes gaps in Rev5 controls and 20x Key Security Indicators, software vulnerabilities, misconfigurations, exposures, weak credentials, insecure services, and all other such potential weaknesses in protection (intentional or unintentional).
>
>  _[Reference: 6 USC § 650 (25)](https://www.govinfo.gov/app/details/USCODE-2024-title6/USCODE-2024-title6-chap1-subchapXVIII-sec650)_

#### FRD-ALL-21

> **Vulnerability Detection**: The systematic process of discovering and identifying security vulnerabilities in _information resources_ through assessment, scanning, threat intelligence, vulnerability disclosure mechanisms, bug bounties, supply chain monitoring, and other capabilities. This process includes the initial discovery of a _vulnerability&#x27;s_ existence and the determination of affected _information resources_ within a _cloud service offering._
>
>  _Note: This definition applies to other forms such as &quot;detect vulnerabilities&quot; or simply &quot;detection&quot; / &quot;detected&quot; used in FedRAMP materials._

#### FRD-ALL-22

> **Vulnerability Response**: The systematic process of tracking, evaluating, mitigating, monitoring, remediating, assessing exploitation, reporting, and otherwise managing _detected vulnerabilities_.
>
>  _Note: This definition applies to other forms such as &quot;respond to vulnerabilities&quot; or simply &quot;response&quot; / &quot;responded&quot; used in FedRAMP materials._

#### FRD-ALL-23

> **Likely Exploitable Vulnerability (LEV)**: A vulnerability that is not _fully mitigated_, AND is reachable by a _likely_ threat actor, AND a _likely_ threat actor with knowledge of the _vulnerability_ would likely be able to gain unauthorized access, cause harm, disrupt operations, or otherwise have an undesired adverse impact within the _cloud service offering_ by exploiting the _vulnerability_.
>
>  _Notes:_
>  - _The opposite of this is a &quot;Not Likely Exploitable Vulnerability&quot; (NLEV)._
>  - _At the absolute minimum, any _vulnerability_ that an automated unauthenticated system can exploit over the internet is a _likely exploitable vulnerability_._

#### FRD-ALL-24

> **Internet-reachable Vulnerability (IRV)**: A _vulnerability_ in a machine-based _information resource_ that might be exploited or otherwise triggered by a payload originating from a source on the public internet; this includes machine-based _information resources_ that have no direct route to/from the internet but receive payloads or otherwise take action triggered by internet activity.
>
>  _Notes:_
>  - _The opposite of this is a &quot;Not Internet-reachable Vulnerability&quot; (NIRV)._
>  - _Internet-reachability applies only to the specific vulnerable machine-based _information resources_ processing the payload; please review the relevant FedRAMP technical assistance on _internet-reachable vulnerabilities_ for examples._

#### FRD-ALL-25

> **Known Exploited Vulnerability (KEV)**: Has the meaning given in CISA Binding Operational Directive 22-01, which is any _vulnerability_ identified in CISA&#x27;s Known Exploited Vulnerabilities catalog.
>
>  _[Reference: CISA BOD 22-01](https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities)_

#### FRD-ALL-26

> **Remediated Vulnerability**: A _vulnerability_ that has been neutralized or eliminated and is no longer _detected_.

#### FRD-ALL-27

> **Partially Mitigated Vulnerability**: A _vulnerability_ where the likelihood or _potential adverse impact_ of exploitation has been reduced from the original evaluation but the risk of exploitation still exists and the _vulnerability_ is still _detected_.

#### FRD-ALL-28

> **Fully Mitigated Vulnerability**: A _vulnerability_ where the likelihood of exploitation or _potential adverse impact_ of exploitation has been reduced from the original evaluation until either are negligible, but the _vulnerability_ is still _detected_.

#### FRD-ALL-29

> **False Positive Vulnerability**: A _detected vulnerability_ that is not actually present in an exploitable state in the _information resource_; this includes situations where vulnerable software or code exist on an machine-based _information resource_ but are not loaded, running, or otherwise in an operating state required for exploitation.
>
>  _Note: This only applies if the _vulnerability_ is not and was not present; a _remediated vulnerability_ or a _fully mitigated vulnerability_ cannot also be a _false positive vulnerability_._

#### FRD-ALL-30

> **Overdue Vulnerability**: A _vulnerability_ that the provider intends to _fully mitigate_ or _remediate_ but has not or will not do so within the time frames recommended or required by FedRAMP.

#### FRD-ALL-31

> **Accepted Vulnerability**: A _vulnerability_ that the provider does not intend to _fully mitigate_ or _remediate_, OR that has not or will not be _fully mitigated_ or _remediated_ within the maximum overdue period recommended or required by FedRAMP.

#### FRD-ALL-32

> **Catastrophic Adverse Effect**: A severe negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would _likely_: (i) result in a severe degradation in the availability or performance of services within the _cloud service offering_ for 24+ hours; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a majority of the _federal information_ stored within the _cloud service offering_.

#### FRD-ALL-33

> **Serious Adverse Effect**: A significant negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in intermittent or ongoing degradation in the availability or performance of services within the _cloud service offering_, causing unpredictable interruptions to operations for 12+ hours; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a minority of the _federal information_ stored within the _cloud service offering_.

#### FRD-ALL-34

> **Limited Adverse Effect**: A minor negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in degradation of the availability or performance of services within the _cloud service offering_ for a minority of relevant users; OR (ii) directly or indirectly result in unauthorized access, disclosure, or modification of a small amount of the _federal information_ stored within the _cloud service offering_ by only a few relevant users.

#### FRD-ALL-35

> **Negligible Adverse Effect**: A small negative impact on an organization caused by the loss of confidentiality, integrity, or availability of its information. At a minimum, this includes effects that would likely: (i) result in minor inconvenience when accessing or using services within the _cloud service offering_; OR (ii) result in degradation of the availability or performance of services within the _cloud service offering_ for only a few relevant users.

#### FRD-ALL-36

> **Potential adverse impact (of vulnerability exploitation)**: The estimated cumulative effect of unauthorized access, disruption, harm, or other adverse impact to agencies that _likely_ could result if a threat actor exploits a _vulnerability_ in the _cloud service offering_; as estimated following FedRAMP recommendations and requirements.

#### FRD-ALL-37

> **Promptly**: Without unnecessary delay.
>
>  _Note: The use of _promptly_ in FedRAMP materials frames conveys a need for urgent action where the expected time frame will vary by circumstance but earlier action is more likely to improve security outcomes and increase the security posture of a _cloud service offering_._

#### FRD-ALL-38

> **Persistently**: Occurring in a firm, steady way that is repeated over a long period of time in spite of obstacles or difficulties. Persistent activities may vary between actors, may occur irregularly, and may include interruptions or waiting periods between cycles. These attributes of persistent activities should be intentional, understood, and documented; the status of persistent activities will always be known. 
>
>  _Note: The use of _persistently_ indicates a process that may not always occur continuously (without interruption or gaps) or regularly (on a consistent, predictable basis) but will repeat frequently in cycles. It aligns generally with historical misuse of &quot;continuous&quot; in federal information security policies._

#### FRD-ALL-39

> **Drift**: Changes to _information resources_ that cause deviations from the intended and assessed state; common forms of drift include changes to configurations, deployed software, privileges, running processes, and availability.








