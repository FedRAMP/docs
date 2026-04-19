# Authorization Data Sharing

!!! info "Effective Date(s) & Overall Applicability for 20x"
      - **Required** (Phase 2 Pilot)
      - Phase 1 pilot authorizations have one year from authorization to fully address this process but must demonstrate continuous quarterly progress.
      - Phase 2 Pilot participants must demonstrate significant progress towards addressing this process prior to submission for authorization review.


??? abstract "Background & Authority"
    - [44 USC § 3609 (a)(8)](https://fedramp.gov/docs/authority/law/#a-roles-and-responsibilities) The FedRAMP Authorization Act directs the Administrator of the General Services Administration to &quot;provide a secure mechanism for storing and sharing necessary data, including FedRAMP authorization packages, to enable better reuse of such packages across agencies, including making available any information and data necessary for agencies...&quot;
    - [OMB Memorandum M-24-15 on Modernizing FedRAMP](https://www.fedramp.gov/docs/authority/m-24-15) Section 6 states that &quot;In general, to encourage both security and agility, Federal agencies should use the same infrastructure relied on by the rest of CSPs&#x27; commercial customer base.&quot;

Modern cloud services store and share security and compliance information in convenient repositories that allow customers to rapidly review security information and gain access to additional information as needed. These services often include automated integration with cloud service infrastructure to remove manual burden and ensure information is accurate and up to date.

This security and compliance information (including FedRAMP authorization data) is the intellectual property of the cloud service provider and is not federal customer data in most cases.* The federal government benefits when the same security information is shared among all customers and even the public to ensure maximum transparency and accountability of cloud service providers.

FedRAMP&#x27;s Authorization Data Sharing process provides a process or mechanism for cloud service providers to store and share authorization data on their preferred platform of choice if it meets certain FedRAMP requirements.

_* Providers with questions about this should consult with a lawyer who specializes in procurement law. Typically a contract with the government granting ownership of information is required to transfer ownership to the government._

---


## 20x-Specific Provider Responsibilities

These requirements and recommendations apply to ALL cloud service offerings following the FedRAMP 20x path. 

### Use Trust Centers

??? abstract "ADS-CSX-UTC"

    **Former ID:** FRR-ADS-07

    **Changelog:**

    - **2026-02-04:** Modified to must for 20x, clarified wider application; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST use a FedRAMP-compatible trust center to store and share authorization data with all necessary parties.

    ---

    _**Notes:**_

    - _Requirements and recommendations for FedRAMP-compatible trust centers are explained in ADS-TRC._
    - _This requirement only applies to FedRAMP 20x._


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  

---  


## General Provider Responsibilities

These requirements and recommendations apply to ALL cloud service offerings for FedRAMP Certification or Validation.

### Public Information

??? abstract "ADS-CSO-PUB"

    **Former ID:** FRR-ADS-01

    **Changelog:**

    - **2026-02-04:** Added requirements from other processes; removed italics and changed the ID as part of new standardization in v0.9.0-beta.



!!! quote ""

    Providers MUST publicly share up-to-date information about the cloud service offering in both human-readable and machine-readable formats, including at least:

    1. Direct link to the FedRAMP Marketplace for the offering

    1. Service Model

    1. Deployment Model

    1. Business Category

    1. UEI Number

    1. Contact Information

    1. Overall Service Description

    1. Detailed list of specific services and their security objectives (see ADS-CSO-SVC)

    1. Summary of customer responsibilities and secure configuration guidance (if applicable, see the FedRAMP Secure Configuration Guide process)

    1. Process for accessing information in the trust center (if applicable)

    1. Availability status and recent disruptions for the trust center (if applicable)

    1. Customer support information for the trust center (if applicable)

    1. Next Ongoing Authorization Report date (see CCM-OAR-NRD)

    ---

    _**Note:** Generally, this information should be available on a public webpage._


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Machine-Readable](fedramp-definitions/#machine-readable){ data-preview }, [Ongoing Authorization Report (OAR)](fedramp-definitions/#ongoing-authorization-report-oar){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Service List

??? abstract "ADS-CSO-SVC"

    **Former ID:** FRR-ADS-03

    **Changelog:**

    - **2026-02-04:** Changed impact levels to security objectives; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST publicly share a detailed list of specific services and their security objectives that are included in the cloud service offering using clear feature or service names that align with standard public marketing materials; this list MUST be complete enough for a potential customer to determine which services are and are not included in the FedRAMP Minimum Assessment Scope without requesting access to underlying authorization data.


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }
  
### Consistency Between Formats

??? abstract "ADS-CSO-CBF"

    **Former ID:** FRR-ADS-02

    **Changelog:**

    - **2026-02-04:** Simplified statement; removed italics and changed the ID as part of new standardization in v0.9.0-beta.



!!! quote ""

    Providers MUST use automation to ensure information remains consistent between human-readable and machine-readable formats when authorization data is provided in both formats.


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Machine-Readable](fedramp-definitions/#machine-readable){ data-preview }
  
### Responsible Information Sharing

??? abstract "ADS-CSO-RIS"

    **Former ID:** FRR-ADS-05

    **Changelog:**

    - **2026-02-04:** Added technical assistance; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST provide sufficient information in authorization data to support authorization decisions but SHOULD NOT include sensitive information that would likely enable a threat actor to gain unauthorized access, cause harm, disrupt operations, or otherwise have a negative adverse impact on the cloud service offering.

    ---

    _**Note:** This is not a license to exclude accurate risk information, but specifics that would likely lead to compromise should be abstracted. A breach of confidentiality with authorization data should be anticipated by a secure cloud service provider._

    ??? tip "Tips on sensitive information in authorization data"

        **Key Tests:**

        - Passwords, API keys, access credentials, etc.
        - Excessive detail about methodology that exposes weaknesses
        - Personally identifiable information about employees

        **Examples:**

        - DON&#x27;T: &quot;In an emergency, an administrator with physical access to a system can log in using &quot;secretadmin&quot; with the password &quot;pleasewutno&quot;&quot;
        - DO: &quot;In an emergency, administrators with physical access can log in directly.&quot;
        - DON&#x27;T: &quot;All backup MFA credentials are stored in a SuperSafe Series 9000 safe in the CEOs office.&quot;
        - DO: &quot;All backup MFA credentials are stored in a UL Class 350 safe in a secure location with limited access.&quot;
        - DON&#x27;T: &quot;During an incident, the incident response team lead by Jim Smith (555-0505) will open a channel at the conference line (555-0101 #97808 passcode 99731)...&quot;
        - DO: &quot;During an incident, the incident response team will coordinate over secure channels.&quot;


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }
  
### Historical Authorization Data

??? abstract "ADS-CSO-HAD"

    **Former ID:** FRR-ADS-09

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST make historical versions of authorization data available for three years to all necessary parties UNLESS otherwise specified by applicable FedRAMP requirements; deltas between versions MAY be consolidated quarterly.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }
  
## Using a Trust Center

These requirements and recommendations cloud services that are using a FedRAMP-compatible trust center instead of USDA Connect; they DO NOT apply to cloud services using USDA Connect.

### Public Guidance

??? abstract "ADS-UTC-PGD"

    

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.
    - **2026-02-11:** Auto-fix: key &quot;ADS-CSO-PGD&quot; middle segment did not match parent &quot;UTC&quot;. Renamed to &quot;ADS-UTC-PGD&quot;.



!!! quote ""

    Providers MUST publicly provide plain-language policies and guidance for all necessary parties that explains how they can obtain and manage access to authorization data stored in the trust center.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Agency Access

??? abstract "ADS-UTC-AGA"

    

    **Changelog:**

    - **2026-02-04:** Split into ADS-CSO-AGA and ADS-CSO-AAD; removed italics and changed the ID as part of new standardization in v0.9.0-beta.
    - **2026-02-11:** Auto-fix: key &quot;ADS-CSO-AGA&quot; middle segment did not match parent &quot;UTC&quot;. Renamed to &quot;ADS-UTC-AGA&quot;.



!!! quote ""

    Providers SHOULD share the authorization package with agencies upon request.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Authorization Package](fedramp-definitions/#authorization-package){ data-preview }
  
### Agency Access Denial

??? abstract "ADS-UTC-AAD"

    **Former ID:** ADS-CSO-AAD

    **Changelog:**

    - **2026-02-04:** Split from FRR-ADS-AC-02; removed italics and changed the ID as part of new standardization in v0.9.0-beta.
    - **2026-02-11:** Auto-fix: key &quot;ADS-CSO-AAD&quot; middle segment did not match parent &quot;UTC&quot;. Renamed to &quot;ADS-UTC-AAD&quot;.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST notify FedRAMP by email to info@fedramp.gov within 5 business days of denying an agency access request for authorization data.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }
  
## FedRAMP-Compatible Trust Centers

These requirements and recommendations apply to trust centers that are FedRAMP-compatible.

### Uninterrupted Sharing

??? abstract "ADS-TRC-USH"

    **Former ID:** FRR-ADS-04

    **Changelog:**

    - **2026-02-04:** Removed unnecessary specification of necessary parties; changed from provider to trust center responsibility; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Trust centers MUST share authorization data with all necessary parties without interruption.

    ---

    _**Note:** &quot;Without interruption&quot; means that parties should not have to request manual approval each time they need to access authorization data or go through a complicated process. The preferred way of ensuring access without interruption is to use on-demand just-in-time access provisioning._


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Programmatic Access

??? abstract "ADS-TRC-PAC"

    **Former ID:** FRR-ADS-TC-03

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Trust centers MUST provide documented programmatic access to all authorization data, including programmatic access to human-readable materials.


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Agency Access Inventory

??? abstract "ADS-TRC-AAI"

    **Former ID:** FRR-ADS-TC-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Trust centers MUST maintain an inventory and history of federal agency users or systems with access to authorization data and MUST make this information available to FedRAMP without interruption.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Access Logging

??? abstract "ADS-TRC-ACL"

    **Former ID:** FRR-ADS-TC-06

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Trust centers MUST log access to authorization data and store summaries of access for at least six months; such information, as it pertains to specific parties, SHOULD be made available upon request by those parties.


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Human and Machine-Readable

??? abstract "ADS-TRC-HMR"

    **Former ID:** FRR-ADS-TC-02

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Trust centers SHOULD make authorization data available to view and download in both human-readable and machine-readable formats.


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Machine-Readable](fedramp-definitions/#machine-readable){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Self-Service Access Management

??? abstract "ADS-TRC-SSM"

    **Former ID:** FRR-ADS-TC-04

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Trust centers SHOULD include features that encourage all necessary parties to provision and manage access to authorization data for their users and services directly.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Responsive Performance

??? abstract "ADS-TRC-RSP"

    **Former ID:** FRR-ADS-TC-07

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Trust centers SHOULD deliver responsive performance during normal operating conditions and minimize service disruptions.


    ---
    **Terms:** [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  


