# Authorization Data Sharing Standard


!!! success "Effective Date(s) & Overall Applicability for Rev5: Optional"
      - **Optional (Open Beta) beginning 2026-02-02.**
      - **Providers MUST notify FedRAMP of intent to participate in the Authorization Data Sharing Rev5 Open Beta by submitting a sign-up form to FedRAMP.**
      - Rev5 Authorized providers MAY adopt this standard beginning February 2, 2026 if they are also participating in the Significant Change Notification and Vulnerability Detection and Response betas.
      - Providers MUST plan to address all requirements and recommendations in this standard by the end of the Open Beta on May 22, 2026.
      - It is up to providers to coordinate with their active agency customers to ensure agency customers will not be negatively impacted by the provider&#x27;s participation in this beta.
      
      - **Beta Sign-up Form:** [https://docs.google.com/forms/d/e/1FAIpQLSdOH7qeJ9uPlb3zYN35qDPNOm_pXQ8sHanAZIIh5tdgjnubVw/viewform](https://docs.google.com/forms/d/e/1FAIpQLSdOH7qeJ9uPlb3zYN35qDPNOm_pXQ8sHanAZIIh5tdgjnubVw/viewform)

Modern cloud services store and share security and compliance information in convenient repositories that allow customers to rapidly review security information and gain access to additional information as needed. These services often include automated integration with cloud service infrastructure to remove manual burden and ensure information is accurate and up to date.

This security and compliance information (including FedRAMP authorization data) is the intellectual property of the cloud service provider and is not _federal customer data_ in most cases.* The federal government benefits when the same security information is shared among all customers and even the public to ensure maximum transparency and accountability of cloud service providers.

The FedRAMP Authorization Data Sharing Standard provides a process or mechanism for cloud service providers to store and share authorization data on their preferred platform of choice if it meets certain FedRAMP requirements.

At the initial release of this standard there will not be many platforms that directly support the requirements in this standard. FedRAMP anticipates this will change rapidly in response to market demand as platforms work to provide innovative solutions to these requirements.

_* Providers with questions about this should consult with a lawyer who specializes in procurement law. Typically a contract with the government granting ownership of information is required to transfer ownership to the government._

??? info "Version 25.11B published on 2025-11-24 " 
    **History:**

    - **25.11B (2025-11-24):** No material changes to content; updated JSON structure with additional information about Rev5 application added.
    - **25.11A (2025-11-18):** Updates for the FedRAMP 20x Phase Two pilot, including minor clarifications and improvements based on pilot feedback.
    - **25.10A (2025-10-17):** Minor updates to improve clarity; switch from federal information to federal customer data; add impact level metadata; no substantive changes.
    - **25.08A (2025-08-24):** Initial release of the Authorization Data Sharing Standard


??? abstract "Background & Authority"
    - [44 USC § 3609 (a)(8)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) The FedRAMP Authorization Act directs the Administrator of the General Services Administration to &quot;provide a secure mechanism for storing and sharing necessary data, including FedRAMP authorization packages, to enable better reuse of such packages across agencies, including making available any information and data necessary for agencies...&quot;
    - [OMB Memorandum M-24-15 on Modernizing FedRAMP](https://www.fedramp.gov/assets/resources/documents/FedRAMP_Policy_Memo.pdf) Section 6 states that &quot;In general, to encourage both security and agility, Federal agencies should use the same infrastructure relied on by the rest of CSPs&#x27; commercial customer base.&quot;

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-ADS-01 Public Information

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
    

### FRR-ADS-02 Consistency Between Formats

!!! quote ""
    Providers MUST use automation to ensure information remains consistent between human-readable and _machine-readable_ formats when _authorization data_ is provided in both formats; Providers SHOULD generate human-readable and _machine-readable_ data from the same source at the same time OR generate human-readable formats directly from _machine-readable_ data.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-03 Detailed Service List

!!! quote ""
    Providers MUST share a detailed list of specific services and their impact levels that are included in the _cloud service offering_ using clear feature or service names that align with standard public marketing materials; this list MUST be complete enough for a potential customer to determine which services are and are not included in the FedRAMP authorization without requesting access to underlying _authorization data_.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-04 Uninterrupted Sharing

!!! quote ""
    Providers MUST share _authorization data_ with all necessary parties without interruption, including at least FedRAMP, CISA, and agency customers. 


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-05 Responsible Information Sharing

!!! quote ""
    Providers MUST provide sufficient information in _authorization data_ to support authorization decisions but SHOULD NOT include sensitive information that would _likely_ enable a threat actor to gain unauthorized access, cause harm, disrupt operations, or otherwise have a negative adverse impact on the _cloud service offering_. 


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-06 USDA Connect Community Portal

!!! quote ""
    Providers of FedRAMP Rev5 Authorized _cloud service offerings_ MUST share _authorization data_ via the USDA Connect Community Portal UNLESS they use a FedRAMP-compatible _trust center_.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-07 FedRAMP-Compatible Trust Centers

!!! quote ""
    Providers of FedRAMP 20x Authorized _cloud service offerings_ MUST use a FedRAMP-compatible _trust center_ to store and share _authorization data_ with all necessary parties.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-08 Trust Center Migration Notification

!!! quote ""
    Providers MUST notify all necessary parties when migrating to a _trust center_ and MUST provide information in their existing USDA Connect Community Portal secure folders explaining how to use the _trust center_ to obtain _authorization data_.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-09 Historical Authorization Data

!!! quote ""
    Providers MUST make historical versions of _authorization data_ available for three years to all necessary parties UNLESS otherwise specified by applicable FedRAMP requirements; deltas between versions MAY be consolidated quarterly.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-10 Best Practices and Technical Assistance

!!! quote ""
    Providers SHOULD follow FedRAMP’s best practices and technical assistance for sharing _authorization data_ where applicable.


    **Applies to:** Low, Moderate, High
    

---   

        
## Access Control

!!! info ""
    These requirements for managing access apply to cloud service providers who establish FedRAMP-compatible _trust centers_ for storing and sharing _authorization data_.

### FRR-ADS-AC-01 Public Guidance

!!! quote ""
    Providers MUST publicly provide plain-language policies and guidance for all necessary parties that explains how they can obtain and manage access to _authorization data_ stored in the _trust center_.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-AC-02 Prospective Customer Access

!!! quote ""
    Providers SHOULD share at least the _authorization package_ with prospective agency customers upon request and MUST notify FedRAMP within five business days if a prospective agency customer request is denied.  


    **Applies to:** Low, Moderate, High
    

---   

        
## Trust Centers

!!! info ""
    These requirements apply to FedRAMP-compatible _trust centers_ used to store and share _authorization data_.

### FRR-ADS-TC-01 Trust Center Assessment

!!! quote ""
    _Trust centers_ MUST be included as an _information resource_ included in the _cloud service offering_ for assessment if FRR-MAS-01 applies. 


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-02 Human and Machine-Readable

!!! quote ""
    _Trust centers_ SHOULD make _authorization data_ available to view and download in both human-readable and _machine-readable_ formats


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-03 Programmatic Access

!!! quote ""
    _Trust centers_ MUST provide documented programmatic access to all _authorization data_, including programmatic access to human-readable materials.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-04 Self-Service Access Management

!!! quote ""
    _Trust centers_ SHOULD include features that encourage all necessary parties to provision and manage access to _authorization data_ for their users and services directly.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-05 Access Inventory

!!! quote ""
    _Trust centers_ MUST maintain an inventory and history of federal agency users or systems with access to _authorization data_ and MUST make this information available to FedRAMP without interruption. 


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-06 Access Logging

!!! quote ""
    _Trust centers_ MUST log access to _authorization data_ and store summaries of access for at least six months; such information, as it pertains to specific parties, SHOULD be made available upon request by those parties.


    **Applies to:** Low, Moderate, High
    

### FRR-ADS-TC-07 Responsive Performance

!!! quote ""
    _Trust centers_ SHOULD deliver responsive performance during normal operating conditions and minimize service disruptions.


    **Applies to:** Low, Moderate, High
    

---   

        
## Exceptions

!!! info ""
    These exceptions MAY override some or all of the FedRAMP requirements for this standard.

### FRR-ADS-EX-01 Legacy Self-Managed Repository Exception

!!! quote ""
    Providers of FedRAMP Rev5 Authorized _cloud service offerings_ at FedRAMP High using a legacy self-managed repository for _authorization data_ MAY ignore the requirements in this standard until future notice.


    **Applies to:** Low, Moderate, High
    

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
    
  
