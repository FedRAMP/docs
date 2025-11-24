# Using Cryptographic Modules Policy


!!! success "Effective Date(s) & Overall Applicability for Rev5: No"
      - **No () beginning .**
      


This set of requirements and recommendations converts the existing FedRAMP Policy for Cryptographic Module Selection and Use (https://www.fedramp.gov/resources/documents/FedRAMP_Policy_for_Cryptographic_Module_Selection_v1.1.0.pdf) to the simpler FedRAMP 20x standard style and clarifies the implementation expectations for FedRAMP 20x.

The notable change from the default Rev5 Policy for Cryptographic Module Selection and Use is that the use of cryptographic modules (or update streams) validated under the NIST Cryptographic Module Validation Program are not explicitly required when cryptographic modules are used to protect federal customer data in cloud service offerings seeking FedRAMP authorization at the Moderate impact level. This acknowledges that not all Moderate impact federal customer data is considered “sensitive” and allows both cloud service providers and agency customers to make risk-based decisions about their use of Moderate impact services for agency use cases that do not include sensitive data.

FedRAMP recommends that cloud service providers seeking FedRAMP authorization at the Moderate impact level use such cryptographic modules whenever technically feasible and reasonable but acknowledges there may be sound reasons not to do so across the board at the Moderate impact level. As always, the reasoning and justification for such decisions must be documented by the cloud service provider.

??? info "Version 25.11B published on 2025-11-24 " 
    **History:**

    - **25.11B (2025-11-24):** No material changes to content; updated JSON structure with additional information about Rev5 application added.
    - **25.11A (2025-11-18):** Initial release of simplified 20x version of this existing FedRAMP policy.


??? abstract "Background & Authority"

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements and recommendations apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-UCM-01 Cryptographic Module Documentation

!!! quote ""
    Providers MUST document the cryptographic modules used in each service (or groups of services that use the same modules) where cryptographic services are used to protect _federal customer data_, including whether these modules are validated under the NIST Cryptographic Module Validation Program or are update streams of such modules.


    **Applies to:** Low, Moderate, High
    

### FRR-UCM-02 Use of Validated Cryptographic Modules

!!! quote ""
    Providers SHOULD configure _agency_ tenants by default to use cryptographic services that use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when such modules are available.


    **Applies to:** Low, Moderate, High
    

### FRR-UCM-03 Update Streams (Moderate)

!!! quote ""
    Providers SHOULD use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect _federal customer data_.


    **Applies to:** Moderate
    

### FRR-UCM-04 Update Streams (High)

!!! quote ""
    Providers MUST use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect _federal customer data_.


    **Applies to:** High
    

---   








