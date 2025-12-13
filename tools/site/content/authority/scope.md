# Scope of FedRAMP Guidelines and Examples

This page details the scope of the FedRAMP program based on 
[OMB M-24-15](m-24-15/scope.md){data-preview}.

Agencies **must** obtain and maintain a FedRAMP authorization for cloud services
that are within the scope of FedRAMP; this guidance helps agencies determine if
they must obtain and maintain a FedRAMP authorization for their intended use of
a cloud service.

Agencies with questions about the scope of FedRAMP or other agency
responsibilities related to FedRAMP set by OMB in M-24-15 should direct those to
the OMB Office of the Federal Chief Information Officer via email:
[ofcio@omb.eop.gov](mailto:ofcio@omb.eop.gov).

!!! info "This guidance is intended for agency use."

    Only a federal agency can determine if their use case for a cloud service 
    falls within the scope of FedRAMP. Cloud service providers may reference
    this when considering whether to pursue a FedRAMP authorization but the
    specific agency use case for adoption is what matters, not the service
    itself.

## **Agency Use Case Indicators**

FedRAMP does not apply to every use of an internet-based service by a federal
agency; a single cloud service may even be within or outside the scope of
FedRAMP depending on the use case (FedRAMP does not supply a list of cloud
services that are always outside the scope of FedRAMP for this precise reason).
Agencies are solely responsible for determining if their use of a cloud service
falls within the scope of FedRAMP.

This determination should review at least the following scope indicators:

1. Does the planned use of the cloud service fall within the responsibilities of
   agencies under 44 U.S. Code § 3506? (i.e. is oversight of agency use of the
   cloud service required because it will handle sensitive federal information?)

2. Does agency use of the cloud service require configuration and maintenance of
   an agency specific tenant or other centralized administration on behalf of
   the agency?

3. Will the cloud service be integrated into agency enterprise security services
   like identity and access management, security information and event
   management, single sign-on, secure access service edge, etc.?

4. Is the cloud service available for use by multiple agencies and/or third
   parties, and can other agencies reasonably be expected to use the cloud
   service?

If the answer is affirmative to all of these scope indicators then the system is
within the scope of FedRAMP. If the answer is negative for all of these
questions then the system is outside the scope of FedRAMP. If some are yes, and
some are no, then it's complicated and the guidance below will help.

## **Quick Reference**

| Exclusion Category                                                      | Overview                                                                                                                                                                                                                       |
| :---------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Single Agency Systems**](#single-agency-systems){data-preview}                | Systems running on cloud infrastructure that are operated by or on behalf of a single agency and no other agency will likely need to authorize the operation or use of the system.                                             |
| [**Social Media & Communications**](#social-media-communications){data-preview} | Services that provide social media and communications capabilities that do not collect federal information that is sensitive in the context of collection.                                                                     |
| [**Search Engines**](#search-engines){data-preview}                              | Services available for government users to find public information where the search context does not include sensitive federal information.                                                                                    |
| [**Information Providers**](#information-providers){data-preview}                | Services that provide government users with information but do not collect federal information or only collect federal information that is not sensitive in the context of collection (such as usernames and email addresses). |
| [**Negligible Risk Services**](#negligible-risk-services){data-preview}          | Services where the potential impact of a security breach could be expected to have a negligible adverse effect on organizational operations, organizational assets, or individuals.                                            |

## **Additional Information by Exclusion Category**

### Single Agency Systems

!!! quote "As defined in M-24-15"

    _"Information systems that are only used for a single agency's
    operations, hosted on cloud infrastructure or platform, and are not offered as a
    shared service or do not operate with a shared responsibility model."_

#### **Key Tests**

- Cloud services built and managed by or on behalf of a single agency

- Running inside a virtual agency datacenter or general support system built on
  cloud infrastructure that isn't shared with other agencies

- Other agencies only access the system as normal internet users and each agency
  does not need to authorize the use of the system

#### **General Examples**

- Virtual "on-prem" solutions that are simply deployed on agency managed cloud
  infrastructure then configured, operated, and supported by the agency.

- Independent Software Vendor (ISV) applications developed and distributed for
  installation within a single tenant of an infrastructure-as-a-service or
  platform-as-a-service offering (the host service itself is within the scope of
  FedRAMP, but independent software is not).

#### **Detailed Examples**

!!! success "In Scope: USDA AgCloud Managed Platform Services (AMPS)"

    AMPS provides a
    standardized, secure cloud platform that allows agencies to quickly deploy
    applications without managing the underlying IT infrastructure. AMPS includes
    security services, patching services, administration services, and inheritable
    Authority to Operate (ATO) security controls for these managed services.

    **Analysis:** AMPS assumes responsibility for the underlying platform while
    customer agencies manage their applications running on the platform. This
    creates a shared responsibility model that requires agencies to authorize the
    operation of this system similar to any commercial shared service, therefore
    it is within the scope of FedRAMP.

!!! warning "Out of Scope: Data.gov"

    GSA operates data.gov, a government-wide cloud
    service that serves as a central clearinghouse for public access to datasets
    from various federal agencies. GSA maintains full responsibility for the
    systems configuration, operations, and authorization to operate.

    **Analysis:** Even though this service is hosted on cloud infrastructure and
    may be used by other government agencies, it does not operate with a shared
    responsibility model and is outside the scope of FedRAMP.

### Social Media & Communications

!!! quote "As defined in M-24-15"

    _"Social media and communications platforms used in accordance with
    agency social media policies."_

#### **Key Tests**

- Used in accordance with agency social media policies or related communications
  policies
- Primary purpose is external communication
- All federal information in the communication platform is intended for public
  use
- Individual accounts are tied to specific users with no centralized
  agency-based administrative control for access

#### **General Examples**

- Social media accounts (e.g., X, Facebook/Meta) including platform AI features
  (like content suggestions, public analytics, and sentiment analysis) that do
  not respond on behalf of the agency
- Scientific collaboration platforms (protocols.io)

#### **Detailed Examples**

!!! success "In Scope: Sensitive Messaging and Communication"

    Agency teams use
    messaging and communication platforms (Slack, Discord, Teams, Signal,
    LinkedIn, Telegram, X, Bluesky, GroupMe, WhatsApp, GitHub, Zoom, Sharepoint,
    Smartsheets, etc.) for internal and cross-agency work, processing and storing
    sensitive federal information where trusted access and centralized control is
    expected.

    **Analysis:** These use cases involve handling of sensitive federal
    information with strict access control where a security breach could be
    expected to have an adverse effect on the agency; these use cases would be
    inside the scope of FedRAMP and require the use of FedRAMP authorized cloud
    services.

!!! warning  "Out of Scope: Non-sensitive Messaging and Communication"

    Agency teams use
    messaging and communication platforms (Slack, Discord, Teams, Signal,
    LinkedIn, Telegram, X, Bluesky, GroupMe, WhatsApp, GitHub, Zoom, Sharepoint,
    Smartsheets, etc.) for public collaboration, communication, or non-sensitive
    messaging and coordination with the public or even with government-only
    collaborators where the collaboration is not sensitive and the use has been
    approved by the agency.

    **Analysis:** These use cases do not involve handling of sensitive federal
    information or strict access control and a breach would not be expected to
    have an adverse effect on the agency due to the public non-sensitive nature of
    these communications; these use cases would be outside the scope of FedRAMP
    and not require the use of FedRAMP authorized cloud services.

!!! warning "Out of Scope: Scientific Collaboration"

    Agency researchers use
    collaborative platforms like protocols.io to communicate with the scientific
    community and share information about how research can be optimally structured
    and shared. The entire purpose is for agency users to participate in public by
    sharing information but this information is for the convenience of the public
    and not a source of truth for agency information.

    **Analysis:** These use cases do not involve handling of sensitive federal
    information or strict access control and a breach would not be expected to
    have an adverse effect on the agency due to the public non-sensitive nature of
    these communications; these use cases would be outside the scope of FedRAMP
    and not require the use of FedRAMP authorized cloud services.

!!! warning "Out of Scope: Social Media Dashboard - Public"

    Agency communication
    teams use services like Hootsuite, Buffer, FeedHive, etc. to consolidate
    social media activities across platforms and schedule non-sensitive public
    communications.

    **Analysis:** These services collect content that is hosted on a
    non-government platform where such information is not sensitive in the context
    of collection. Such use is outside the scope of FedRAMP.

### Search Engines

!!! quote "As defined in M-24-15"

    _"Search engines."_

#### **Key Tests**

- Does not collect or maintain federal information for agencies
- Users are instructed not to input sensitive federal information

#### **General Examples**

- Public web search engines (e.g., Google, Bing, Lycos) using only public or
  non-sensitive federal information
- Public AI Chatbots (e.g., ChatGPT, Claude, Grok) using only public or
  non-sensitive federal information

#### **Detailed Examples**

!!! success "In Scope: AI coding assistant on private code"

    An agency deploys an AI
    coding assistant like GitHub Copilot, Claude Code, ChatGPT, Cursor, Gemini
    Code Assist, etc. for use in a private code repository where access is
    strictly controlled and includes methods or information that must be protected
    from unauthorized access or public release. The use of the coding assistant in
    this case could expose sensitive information that the agency wishes to
    strictly control.

    **Analysis:** The AI assistant accesses strictly controlled information; this
    use case is within the scope of FedRAMP.

!!! success "In Scope: Internal Data Search"

    An agency uses a shared cloud service to
    index and search internal repositories containing non-public federal
    information (e.g., documents, emails, databases). Because the service
    collects, processes, and maintains internal federal information on behalf of
    the agency, FedRAMP authorization is required.

    **Analysis:** Collects, processes, and maintains internal agency data for the
    agency; this use case is within the scope of FedRAMP.

!!! warning "Out of Scope: AI coding assistant on public code"

    An agency allows
    developers working on entirely public code repositories to use an AI coding
    assistant like GitHub Copilot, Claude Code, ChatGPT, Cursor, Gemini Code
    Assist, etc. Any information in the codebase reviewed by the AI assistant is
    already public and queries sent to the cloud service do not expose sensitive
    pre-decisional information. The use of the coding assistant is effectively an
    advanced version of searching the internet for specific questions related to
    the work in progress.

    **Analysis:** The AI assistant accesses public information; this use case is
    outside the scope of FedRAMP.

### Information Providers

!!! quote "As defined in M-24-15"

    _"Widely available services that provide commercially available
    information to agencies, but do not collect Federal information."_

#### **Key Tests**

- Provides commercial services to agencies and the general public
- May temporarily process non-sensitive federal information in context (such as
  an address or name) to provide a response and may maintain records of past
  requests but the agency does not expect the service to retain or provide
  access to this information after the transaction or service delivery is
  complete

#### **General Examples**

- Map services
- Public Certificate Authorities (e.g., Let's Encrypt, DigiCert) and DNS
  Resolvers
- Document and Address verification services
- Non-IT service providers such as airline ticketing or ride sharing systems
- Instances of cloud services that are operated by non-government organizations
  but grant access to government users for their convenience (such as public
  collaboration platforms, research sites, etc.)
- Training and online learning platforms
- AI research assistants
- Supply chain monitoring
- Satellite imagery and analysis
- Business and risk intelligence
- Attack surface management
- Trust centers for commercial services

#### **Detailed Examples**

!!! success "In Scope: Identity Verification Services"

    An agency uses a cloud Identity
    Verification service requiring users to submit PII. The service collects,
    processes, and stores this sensitive federal information (PII) on behalf of
    the agency to perform identity proofing and for later review. Maintaining
    federal PII for an agency function necessitates FedRAMP authorization.

    **Analysis:** Collects and stores sensitive federal PII on behalf of the
    agency; this use case is inside the scope of FedRAMP.

!!! warning "Out of Scope: Partner Operated Collaboration Service"

    A non-government
    entity uses a common collaboration platform (Trello, GitHub, Sharepoint,
    Slack, Google Docs, etc.) and wishes to share this content with government
    agency partners. Government users may be required to create an account to view
    the information but will primarily be accessing the service to view
    information provided by the external entity and will not include any
    authoritative or sensitive government information.

    **Analysis:** These services are not collecting federal information in this
    particular use case and do not require agency oversight or authorization to
    operate, therefore this use case is outside the scope of FedRAMP.

!!! warning "Out of Scope: Online Learning Platforms" 

    An agency allows its users to
    leverage common online learning platforms (Udemy, Coursera, Udacity, Cloud
    Academy, HackerRank, PluralSight, KnowBe4, Skillsoft, Ninjio, etc.) for
    general education and training.

    **Analysis:** These services are not collecting federal information in this
    particular use case and do not require agency oversight or authorization to
    operate, therefore this use case is outside the scope of FedRAMP.

!!! warning "Out of Scope: Janitorial Services Scheduling"

    An agency sends building
    information and access information to a cloud scheduling portal used by their
    janitorial service company. The company uses the information to ensure that
    buildings are serviced and that janitors can access the building.

    **Analysis:** Acquired non-IT service; cloud tool use is incidental; does not
    maintain federal information for the agency. This use case is outside the
    scope of FedRAMP.

!!! warning "Out of Scope: Business Intelligence"

    An agency uses a business
    intelligence service such as WireScreen to evaluate the risk of leveraging
    specific corporate services (including other cloud services), investigate
    grant applicants, or other non-sensitive purposes where searching for business
    intelligence does not expose sensitive government activities.

    **Analysis:** These services are not collecting federal information in this
    particular use case and do not require agency oversight or authorization to
    operate, therefore this use case is outside the scope of FedRAMP.

!!! warning "Out of Scope: Public Attack Surface Management"

    An agency uses attack
    surface management services or threat search services (PANW Cortex Xpanse,
    Shodan, Randori, Censys, Qualys External Attack Surface Management,
    CrowdStrike Falcon EASM, etc.) to review the security of their publicly
    available internet services without using these services as an external
    inventory of sensitive external internet service intelligence.

    **Analysis:** If these services are being used to scan and analyze external
    internet-accessible addresses and services then the information they collect
    during these scans and analysis are effectively public, therefore these
    systems are not storing sensitive federal information. As long as these
    services are used without any privileged or internal access and are not
    supplied with any non-public information about the agency's internet services,
    the use of these services would fall outside the scope of FedRAMP.

!!! warning "Out of Scope: Trust Centers for Commercial Services"

    An agency connects
    to a commercial trust center that provides information about the security and
    risk posture of a cloud service offering, using this trust center to collect
    security information and make assessments about the security of the cloud
    service.

    **Analysis:** These services are not collecting federal information in this
    particular use case and do not require agency oversight or authorization to
    operate, therefore this use case is outside the scope of FedRAMP from an
    agency customer perspective (even though the use of a trust center might be
    included in the FedRAMP Minimum Assessment of that cloud service and require
    FedRAMP authorization as a result, the agency use case would not require
    FedRAMP authorization).

!!! warning "Out of Scope: Verification Services"

    An agency uses an address-validation
    service API which returns a true/false "match" and then discards the data. The
    service doesn't retain the federal information and there is little risk as the
    service is authoritative for the information provided (addresses).

    **Analysis:** Provides commercial data; temporarily processes federal
    information; does not maintain federal information for the agency. This use
    case is outside the scope of FedRAMP.

### Negligible Risk Services

!!! quote "As defined in M-24-15"

    _"Ancillary services whose compromise would pose a negligible risk to
    Federal information or information systems, such as systems that make external
    measurements or only ingest information from other publicly available services"_

#### **Key Tests**

- A security breach of the service would have an insignificant adverse effect on
  organizational operations, organizational assets, or individuals.

#### **General Examples**

- Basic CAPTCHA services on public facing non-sensitive sites and forms
- Public web analytics and uptime monitoring (Pingdom, StatusPage)
- Unauthenticated vulnerability and code scanning tools for public facing
  components or code
- A/B testing and other user testing services for public services
- Font libraries

#### **Detailed Examples1**

!!! success "In Scope: Integrated Monitoring System"
    
    An agency integrates an
    Application Performance Monitoring (APM) service into its internal
    applications. This service collects sensitive federal data like distributed
    traces and detailed logs from internal sources, often via installed agents or
    privileged API access to other internal systems.

    **Analysis:** Handles internal, non-public federal information; possesses
    privileged access to internal systems. This use case is inside the scope of
    FedRAMP.

!!! warning "Out of Scope: Public Monitoring Tool"

    An agency uses an external service
    to monitor its non-critical public website/API availability via pings, logging
    uptime, and sending alerts.

    **Analysis:** Externally measures public endpoints; does not ingest or store
    sensitive federal data. This use case is outside the scope of FedRAMP.
