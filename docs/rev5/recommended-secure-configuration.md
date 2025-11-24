# Recommended Secure Configuration Standard


!!! success "Effective Date(s) & Overall Applicability for Rev5: Required"
      - **Required (Wide Release) beginning 2026-03-01.**
      - These requirements apply after March 1, 2026, to all FedRAMP Rev5 cloud services that are listed in the FedRAMP Marketplace.
      - This standard supplements the Customer Responsibilities Matrix and other existing materials - all existing Rev5 materials are still required to be maintained.
      - FedRAMP does not provide a specific template for the information required in this guidance to enable cloud service providers to share innovative solutions. As long as all requirements and recommendations in this standard are addressed, providers are encouraged to share their Recommended Secure Configuration information in a way that makes the most sense for them and their customers.
      

!!! failure "Mandatory Adoption for Rev5"
    - **FedRAMP will begin enforcement of this policy after March 1, 2026. Providers who do not have Recommended Secure Configuration guidance that meets the requirements and recommendations in this standard will receive corrective action.**
    - Beginning 2026-03-01, corrective action will include public notification that the provider does not meet this requirement.
    - Beginning 2026-05-01, corrective action will include revocation of FedRAMP authorization and downgrade to FedRAMP Ready.
    - Beginning 2026-07-01, corrective action will include complete removal from the FedRAMP Marketplace and a ban on FedRAMP authorization for three months.

All customers benefit from simple, easy to follow, easy to understand instructions for securely configuring a cloud service offering. Cloud service providers often provide a wide range of configuration options to allow individual customers to pick and choose their security posture based on their individual customer needs and are best positioned to provide instructions about the overall security impacts of many of these choices.

This standard outlines simple requirements for FedRAMP authorized cloud service providers to effectively communicate the security impact of common settings to new and current agency customers.

??? info "Version 25.11B published on 2025-11-24 " 
    **History:**

    - **25.11B (2025-11-24):** No material changes to content; updated JSON structure with additional information about Rev5 application added.
    - **25.11A (2025-11-18):** Initial release of the Recommended Secure Configuration Standard (RSC) for the FedRAMP 20x Phase Two pilot.


??? abstract "Background & Authority"
    - [Executive Order 14144 Strengthening and Promoting Innovation in the Nation’s Cybersecurity Section 3 (d), as amended by Executive Order 14306 Sustaining Select Efforts to Strengthen the Nation’s Cybersecurity and Amending Executive Order 13694 and Executive Order 14144](https://www.federalregister.gov/documents/2025/06/11/2025-10804/sustaining-select-efforts-to-strengthen-the-nations-cybersecurity-and-amending-executive-order-13694)  to Section 3 (b), states &quot;the Administrator of General Services, acting through the Director of the Federal Risk and Authorization Management Program (FedRAMP), in coordination with the Secretary of Commerce, acting through the Director of NIST, and the Secretary of Homeland Security, acting through the Director of CISA, shall develop FedRAMP policies and practices to incentivize or require cloud service providers in the FedRAMP Marketplace to produce baselines with specifications and recommendations for agency configuration of agency cloud-based systems in order to secure Federal data based on agency requirements.&quot;

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements and recommendations apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-RSC-01 Top-Level Administrative Accounts Guidance

!!! quote ""
    Providers MUST create and maintain guidance that includes instructions on how to securely access, configure, operate, and decommission _top-level administrative accounts_ that control enterprise access to the entire _cloud service offering_.

    **Note:** This guidance should explain how _top-level administrative accounts_ are named and referred to in the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-02 Top-Level Administrative Accounts Security Settings Guidance

!!! quote ""
    Providers MUST create and maintain guidance that explains security-related settings that can be operated only by _top-level administrative accounts_ and their security implications.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-03 Privileged Accounts Security Settings Guidance

!!! quote ""
    Providers SHOULD create and maintain guidance that explains security-related settings that can be operated only by _privileged accounts_ and their security implications.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-04 Secure Defaults on Provisioning

!!! quote ""
    Providers SHOULD set all settings to their recommended secure defaults for _top-level administrative accounts_ and _privileged accounts_ when initially provisioned.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-05 Comparison Capability

!!! quote ""
    Providers SHOULD offer the capability to compare all current settings for _top-level administrative accounts_ and _privileged accounts_ to the recommended secure defaults.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-06 Export Capability

!!! quote ""
    Providers SHOULD offer the capability to export all security settings in a _machine-readable_ format.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-07 API Capability

!!! quote ""
    Providers SHOULD offer the capability to view and adjust security settings via an API or similar capability.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-08 Machine-Readable Guidance

!!! quote ""
    Providers SHOULD provide recommended secure configuration guidance in a _machine-readable_ format that can be used by customers or third-party tools to compare against current settings.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-09 Publish Guidance

!!! quote ""
    Providers SHOULD make recommended secure configuration guidance available publicly.


    **Applies to:** Low, Moderate, High
    

### FRR-RSC-10 Versioning and Release History

!!! quote ""
    Providers SHOULD provide versioning and a release history for recommended secure default settings for _top-level administrative accounts_ and _privileged accounts_ as they are adjusted over time.


    **Applies to:** Low, Moderate, High
    

---   








