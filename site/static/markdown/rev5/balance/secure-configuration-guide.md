# Secure Configuration Guide


!!! info "Effective Date(s) & Overall Applicability for Rev5"
      - **Required** (Wide Release) beginning 2026-03-01.
      - These requirements apply after March 1, 2026 to all FedRAMP Rev5 cloud services, including Authorized, In Process, and FedRAMP Ready.
      - This process supplements the Customer Responsibilities Matrix and other existing materials - all existing Rev5 materials are still required to be maintained.
      - FedRAMP does not provide a specific template for the information required in this guidance to enable cloud service providers to share innovative solutions. As long as all requirements and recommendations in this document are addressed, providers are encouraged to share their Secure Configuration Guide information in a way that makes the most sense for them and their customers.
      

!!! danger "Mandatory Adoption for Rev5"
    - **FedRAMP will begin enforcement of this process after March 1, 2026. Providers who do not have a Secure Configuration Guide that meets the requirements and recommendations in this document will receive corrective action.**
    - Beginning 2026-03-01, corrective action will include public notification that the provider does not meet this requirement.
    - Beginning 2026-05-01, corrective action for Authorized cloud services will include public notification of remediation and a mandatory Corrective Action Plan from the cloud service provider.
    - Beginning 2026-07-01, corrective action for all cloud services will include complete removal from the FedRAMP Marketplace and a ban on relisting for three months.

??? abstract "Background & Authority"
    - [Executive Order 14144 Strengthening and Promoting Innovation in the Nation’s Cybersecurity Section 3 (d), as amended by Executive Order 14306 Sustaining Select Efforts to Strengthen the Nation’s Cybersecurity and Amending Executive Order 13694 and Executive Order 14144](https://www.federalregister.gov/documents/2025/06/11/2025-10804/sustaining-select-efforts-to-strengthen-the-nations-cybersecurity-and-amending-executive-order-13694)  to Section 3 (b), states &quot;the Administrator of General Services, acting through the Director of the Federal Risk and Authorization Management Program (FedRAMP), in coordination with the Secretary of Commerce, acting through the Director of NIST, and the Secretary of Homeland Security, acting through the Director of CISA, shall develop FedRAMP policies and practices to incentivize or require cloud service providers in the FedRAMP Marketplace to produce baselines with specifications and recommendations for agency configuration of agency cloud-based systems in order to secure Federal data based on agency requirements.&quot;

All customers benefit from simple, easy to follow, easy to understand instructions for securely configuring a cloud service offering. Cloud service providers often provide a wide range of configuration options to allow individual customers to pick and choose their security posture based on their individual customer needs and are best positioned to provide instructions about the overall security impacts of many of these choices.

This process outlines simple requirements for FedRAMP authorized cloud service providers to effectively communicate the security impact of common settings to new and current agency customers.

---



## General Provider Responsibilities

These requirements and recommendations apply to all cloud service offerings in the FedRAMP Marketplace.

### Recommended Secure Configuration

??? abstract "SCG-CSO-RSC"

    

    **Changelog:**

    - **2026-02-04:** Combined all required and recommended SCG information; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST create, maintain, and make available recommendations for securely configuring their cloud services (the Secure Configuration Guide) that includes at least the following information:

    1. Required: Instructions on how to securely access, configure, operate, and decommission top-level administrative accounts that control enterprise access to the entire cloud service offering.

    1. Required: Explanations of security-related settings that can be operated only by top-level administrative accounts and their security implications.

    1. Recommended: Explanations of security-related settings that can be operated only by privileged accounts and their security implications.

    ---

    _**Notes:**_

    - _These requirements and recommendations refer to this guidance as a Secure Configuration Guide but cloud service providers may make this guidance available in various appropriate forms that provide the best customer experience._
    - _This guidance should explain how top-level administrative accounts are named and referred to in the cloud service offering._


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Privileged account](fedramp-definitions/#privileged-account){ data-preview }, [Top-level administrative account](fedramp-definitions/#top-level-administrative-account){ data-preview }
  
### Use Instructions

??? abstract "SCG-CSO-AUP"

    

    **Changelog:**

    - **2026-02-04:** This requirement is new in v-0.9.0 to clarify expectations.



!!! quote ""

    Providers MUST include instructions in the FedRAMP authorization package that explain how to obtain and use the Secure Configuration Guide.

    ---

    _**Note:** These instructions may appear in a variety of ways; it is up to the provider to do so in the most appropriate and effective ways for their specific customer needs._


    ---
    **Terms:** [Authorization Package](fedramp-definitions/#authorization-package){ data-preview }
  
### Public Guidance

??? abstract "SCG-CSO-PUB"

    **Former ID:** FRR-RSC-09

    **Changelog:**

    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD make the Secure Configuration Guide available publicly.


### Secure Defaults

??? abstract "SCG-CSO-SDF"

    **Former ID:** FRR-RSC-04

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD set all settings to their recommended secure defaults for top-level administrative accounts and privileged accounts when initially provisioned.


    ---
    **Terms:** [Privileged account](fedramp-definitions/#privileged-account){ data-preview }, [Top-level administrative account](fedramp-definitions/#top-level-administrative-account){ data-preview }
  
## Enhanced Capabilities

These recommendations apply to all cloud service offerings in the FedRAMP Marketplace for enhanced capabilities related to the Secure Configuration Guide.

### Comparison Capability

??? abstract "SCG-ENH-CMP"

    **Former ID:** FRR-RSC-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD offer the capability to compare all current settings for top-level administrative accounts and privileged accounts to the recommended secure defaults.


    ---
    **Terms:** [Privileged account](fedramp-definitions/#privileged-account){ data-preview }, [Top-level administrative account](fedramp-definitions/#top-level-administrative-account){ data-preview }
  
### Export Capability

??? abstract "SCG-ENH-EXP"

    **Former ID:** FRR-RSC-06

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD offer the capability to export all security settings in a machine-readable format.


    ---
    **Terms:** [Machine-Readable](fedramp-definitions/#machine-readable){ data-preview }
  
### API Capability

??? abstract "SCG-ENH-API"

    **Former ID:** FRR-RSC-07

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD offer the capability to view and adjust security settings via an API or similar capability.


### Machine-Readable Guidance

??? abstract "SCG-ENH-MRG"

    **Former ID:** FRR-RSC-08

    **Changelog:**

    - **2026-02-04:** Removed unnecessary recommended; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD also provide the Secure Configuration Guide in a machine-readable format that can be used by customers or third-party tools to compare against current settings.


    ---
    **Terms:** [Machine-Readable](fedramp-definitions/#machine-readable){ data-preview }
  
### Versioning and Release History

??? abstract "SCG-ENH-VRH"

    **Former ID:** FRR-RSC-10

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD provide versioning and a release history for recommended secure default settings for top-level administrative accounts and privileged accounts as they are adjusted over time.


    ---
    **Terms:** [Privileged account](fedramp-definitions/#privileged-account){ data-preview }, [Top-level administrative account](fedramp-definitions/#top-level-administrative-account){ data-preview }
  


