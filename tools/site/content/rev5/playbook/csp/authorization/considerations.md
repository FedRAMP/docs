# Important Considerations

While we are currently piloting an approach to authorization that does not
require agency sponsorship (see [20x Pilot](https://www.fedramp.gov/20x/goals/)
for more information), there is currently one approach to obtaining a FedRAMP
authorization: an authorization through a federal agency. No matter where a CSP
is in their journey to FedRAMP authorization, each CSP should fill out the
[CSP Information Form](https://docs.google.com/forms/d/e/1FAIpQLScU4_x5UK53d0PUUDsOdqWyzUvAN1-yFJ1NxffT7PkGkCiuPg/viewform).

Completing the form will generate a unique FedRAMP ID for the cloud service
offering and provide valuable resources in an automated follow-up email. This
FedRAMP ID will remain the ID associated with your offering through the
lifecycle of your FedRAMP journey even if your company name or product name
changes.

Below are additional things to consider while formulating your FedRAMP strategy.

## Existing or Potential Agency Partners

The first step in achieving a FedRAMP authorization is for a CSP to establish a
partnership with a federal agency. Some CSPs may already have a federal agency
that is interested in authorizing their CSO because they are either already
using the system, in the process of procuring the system, or are using an
on-premise version and wish to transition to a cloud version. Other CSPs may
have potential customers who are interested in their service or may be
responding to requests for proposals (RFPs) that include FedRAMP requirements.
It is critical to discuss FedRAMP early in the process. FedRAMP can partner with
CSPs in discussions with agencies to address questions or concerns about the
authorization process.

## Impact Categorization

[Federal Information Processing Standard (FIPS) 199](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf)
provides the standards for categorizing information and information systems,
which is the process CSPs use to ensure their services meet the minimum security
requirements for processing, storing, and transmitting federal data. The
security categories are based on the potential impact that certain events would
have on an organization’s ability to accomplish its assigned mission, protect
its assets, fulfill its legal responsibilities, maintain its day-to-day
functions, and protect individuals.

It is important that CSPs understand the impact level of their service
offering(s) and corresponding security categorization when developing an
authorization strategy. CSOs are categorized into one of three impact levels
(Low, Moderate, and High) and across three security objectives (confidentiality,
integrity and availability).

### Impact Levels

|                            | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Low Impact Levels**      | The Low-impact level is most appropriate for CSOs for which the loss of confidentiality, integrity, and availability would result in limited adverse effects on a federal agency’s operations, assets, or individuals. FedRAMP currently has two baselines for systems with Low-impact data: LI-SaaS baseline and Low baseline. The LI-SaaS baseline accounts for low-impact SaaS applications that do not store personal identifiable information (PII) beyond what is generally required for login capability (i.e., username, password, and email address). Required security documentation is consolidated, and the requisite number of security controls needing testing and verification are lowered relative to a standard Low baseline authorization. |
| **Moderate Impact Levels** | Moderate-impact level systems account for nearly 80% of CSP services that receive FedRAMP authorization. It is most appropriate for CSOs for which the loss of confidentiality, integrity, and availability would result in serious adverse effects on a federal agency’s operations, assets, or individuals. Serious adverse effects could include significant operational damage to federal agency assets, financial loss, or individual harm that is not loss of life or physical.                                                                                                                                                                                                                                                                         |
| **High Impact Levels**     | High-impact data is usually in law enforcement and emergency services systems, financial systems, health systems, and any other system for which loss of confidentiality, integrity, or availability could be expected to have a severe or catastrophic adverse effect on organizational operations, organizational assets, or individuals. FedRAMP introduced the High baseline to account for the federal government’s most sensitive, unclassified data in cloud computing environments, including data that involves the protection of life and against financial ruin.                                                                                                                                                                                   |

**Security controls included in the High, Moderate, Low, and LI-SaaS baselines
can be found within the
[FedRAMP Security Controls Baseline](https://www.fedramp.gov/resources/documents/FedRAMP_Security_Controls_Baseline.xlsx)**.

!!! info "Categorization Template"

    CSPs use the _Federal Information Process Standard (FIPS) 199 Categorization Template_ (embedded as Appendix K in the [system security plan (SSP) template](<https://www.fedramp.gov/resources/templates/FedRAMP-High-Moderate-Low-LI-SaaS-Baseline-System-Security-Plan-(SSP).docx>)), along with the guidance of [_NIST Special Publication 800-60 volume 2, revision 1_](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-60v2r1.pdf), to correctly categorize their system based on the types of information processed, stored, and transmitted. Ultimately, the security impact level of a system is determined by the federal agency customer, as each AO will have different risk tolerance levels, and each federal agency’s mission is different, which may impact how they classify their data. For this reason, it is important for CSPs to coordinate with their federal agency customers to ensure agreement with their impact level classification. |

### Security Objectives

|                     | Definition                                                                                                    | Example                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Confidentiality** | Information access and disclosure includes means for protecting personal privacy and proprietary information. | Access to John Doe’s personal information is sufficiently restricted for the purpose of privacy. |
| **Integrity**       | Stored information is sufficiently guarded against modification.                                              | Susan Smith lacks the appropriate access and cannot modify John Doe’s security information.      |
| **Availability**    | Timely and reliable access to information is ensured.                                                         | John Doe can reliably access secure work data.                                                   |

_Source:
[FIPS PUB 199](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf)_

## **Deployment Model**

CSPs should qualify whether their CSO is government-only community, public, or
private, or exists as a hybrid cloud. FedRAMP adheres to
[_NIST SP 800-145_](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf)
definitions when defining cloud deployment models.

|                                | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Government- Only Community** | The cloud holds only government data. Customers can be federal, state, local, tribal, territorial, federally funded research centers (FFRDCs), contractors working on behalf of the government, or lab entities.                                                                                                                                                                                                                                                                                                                                                                              |
| **Public**                     | Public cloud deployments support both government and non-government customers. This aligns with the traditional model of cloud computing services.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Private**                    | Private cloud deployments intended for single organizations and implemented fully within federal facilities are not subject to the FedRAMP mandate and are the only exception to FedRAMP being mandatory for all federal agencies. For private clouds deployed in an IaaS/PaaS versus within a federal facility, the agency should use the FedRAMP process and baselines to authorize the cloud service; however, FedRAMP does not review packages for private clouds, grant a FedRAMP Authorized designation, or list them on the Marketplace because the concept of “reuse” does not apply. |
| **Hybrid**                     | Combination of cloud infrastructures (private, community, or public). Each cloud is a unique entity but is bound to other clouds to provide services to an organization (e.g., cloud bursting for load balancing between clouds).                                                                                                                                                                                                                                                                                                                                                             |

## **IaaS vs. PaaS vs. SaaS**

[NIST SP 800-145](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf)
establishes FedRAMP’s definitions for cloud services that are IaaS, PaaS, or
SaaS. CSPs needing to define their offerings as one or multiple of the service
models should refer to the following guidelines:

|                                        | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Software-as-a-Service (SaaS)**       | The capability provided to the consumer is to use the provider’s applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (e.g., web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings. |
| **Platform-as-a-Service (PaaS)**       | The capability provided to the consumer is to deploy consumer-created or acquired applications created using programming languages, libraries, services, and tools supported by the provider onto the cloud infrastructure. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.                                                                        |
| **Infrastructure-as-a-Service (IaaS)** | The capability provided to the consumer is to provide processing, storage, networks, and other fundamental computing resources where the consumer is able to deploy and run arbitrary software, which can include operating systems and applications. The consumer does not manage or control the underlying cloud infrastructure but has control over operating systems, storage, and deployed applications, and possibly limited control of select networking components (e.g., host firewalls).                                                                     |

## **System Stack**

The “system stack” generally refers to the layers of services in the data center
that are included in the CSO. The CSO must be authorized according to the
appropriate FedRAMP baseline, meaning each component (IaaS, PaaS, and SaaS) must
be authorized through either an inheritance model (a SaaS vendor leveraging a
FedRAMP authorized PaaS) or a traditional authorization (Infrastructure,
Platform, and Services are authorized as one).

In a traditional authorization, a CSP has its system hosted in a non-FedRAMP­
Authorized cloud service; therefore “inheritance/leveraging” relationship does
not exist. In this situation, a SaaS provider would need to include the
infrastructure and platform within its authorization boundary, in addition to
its own software application, to authorize the entire stack. The CSP is
responsible for the entire stack in this situation and details the underlying
infrastructure and platform within its SSP. The authorization in this case would
be for the SaaS with its own infrastructure, but the infrastructure itself would
not constitute an IaaS.

FedRAMP highly recommends CSPs understand a CSO’s stack and illustrate how IaaS,
PaaS, and SaaS may be layered. Additionally, FedRAMP can inform CSPs on how
existing ATOs can be leveraged depending on the system architecture.

!!! warning "Warning"

    To achieve a FedRAMP authorization, a CSP’s service must reside on a FedRAMP Authorized infrastructure or stand up their own infrastructure.

## **Level of Effort**

The level of effort (LOE) and cost associated with authorizing a CSO will vary
depending on the complexity of the system, implementation of secure
architectural principals, current security posture, and overall commitment and
expertise of the team.  
LOE can be broken down into the following categories:

|                        | Definition                                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Project Management** | Managing the FedRAMP authorization process and coordinating activities.                                                                                                              |
| **Engineering**        | Making changes to the system in compliance with federal agency and FedRAMP controls.                                                                                                 |
| **Documentation**      | Completion of all required documentation, including technical writing, review, and quality assurance of documentation submitted to FedRAMP and agencies.                             |
| **Support**            | Costs associated with consultants and advisory services acquired to support the authorization, including appropriate technical expertise and assessment services provided by a 3PAO. |

Typical barriers for CSPs completing the authorization process that will impact
overall LOE include:

- Not accurately defining the authorization boundary or depicting data flow
  diagram(s) and supporting inventory.
- Gaps in vulnerability scanning.
- End of life software.
- Not having FIPS 140 validated encryption modules.
- Using external services where federal data is stored or in-transit that are
  not FedRAMP Authorized or are authorized at a system impact level lower than
  the CSO going through the authorization process.
- Not implementing multi-factor authentication appropriately.
- Poor documentation lacking technical detail and immature management processes.
- Immature security practices and failure to apply appropriate resources up
  front (e.g., failing to bake security and resources in early).

### CSP Authorization Team

Staffing an authorization effort should be a key consideration for any CSP.
While FedRAMP does not recommend any specific resource leveling, it has
witnessed successful authorization efforts when the following competencies are
included on a CSP authorization team, either in an in-house or consulting
capacity:

|                                         | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project Management**                  | Experience with team and task management as part of information technology (IT) system implementation with federal or large-scale private organizations, including prior FedRAMP or FISMA authorization experience. Successful project managers typically have a working knowledge of agile, DevOps, or lean management approaches. Additionally, they are comfortable in the coordination of project stakeholders and have end-to-end visibility of the implementation of an IT system. |
| **Customer Relationship Management**    | Typically, a sales or business development associate familiar with or responsible for the business relationship leading to the federal procurement of a system. Successful customer relationship managers facilitate communications among stakeholders throughout the implementation effort, especially during the initial partnership of CSP and federal agency resources at the beginning of an authorization effort.                                                                  |
| **System Architecture and Engineering** | Informed expertise regarding a service offering’s system architecture and design, including visibility to the adaptation of applicable security controls to the system. Effective technical personnel in an authorization effort often demonstrate competency with federal IT systems and a thorough understanding of federal security requirements as defined by FISMA and FedRAMP.                                                                                                     |
| **Technical Writing**                   | Effective writing capability that is informed by a thorough understanding of a system’s architecture and design and how applicable security controls affect and interact with the system. Additionally, effective technical writers demonstrate a working knowledge of how controls relate to their technical implementation within the service offering, the FedRAMP guidelines and requirements, and any underlying systems within the system stack (e.g., IaaS inheritance).          |
| **Communications**                      | FedRAMP considers communications to be a core competency of any project team and can be reflected in a dedicated full-time equivalent (FTE) or represented in the aggregate skill sets of the CSP team. Communications are integral to the ongoing coordination of CSP, federal agency, 3PAO, and FedRAMP resources throughout the lifecycle of a system in a federal environment.                                                                                                       |
