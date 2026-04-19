# Using Cryptographic Modules

!!! info "Effective Date(s) & Overall Applicability for 20x"
      - **Required** (Phase 2 Pilot)
      - Phase 1 pilot authorizations have one year from authorization to fully address this process but must demonstrate continuous quarterly progress.
      - Phase 2 Pilot participants must demonstrate significant progress towards addressing this process prior to submission for authorization review.


??? abstract "Background & Authority"

This set of requirements and recommendations converts the existing FedRAMP Policy for Cryptographic Module Selection and Use (https://www.fedramp.gov/resources/documents/FedRAMP_Policy_for_Cryptographic_Module_Selection_v1.1.0.pdf) to the simpler FedRAMP 20x style and clarifies the implementation expectations for FedRAMP 20x.

The notable change from the default Rev5 Policy for Cryptographic Module Selection and Use is that the use of cryptographic modules (or update streams) validated under the NIST Cryptographic Module Validation Program are not explicitly required when cryptographic modules are used to protect federal customer data in cloud service offerings seeking FedRAMP authorization at the Moderate impact level. This acknowledges that not all Moderate impact federal customer data is considered “sensitive” and allows both cloud service providers and agency customers to make risk-based decisions about their use of Moderate impact services for agency use cases that do not include sensitive data.

FedRAMP recommends that cloud service providers seeking FedRAMP authorization at the Moderate impact level use such cryptographic modules whenever technically feasible and reasonable but acknowledges there may be sound reasons not to do so across the board at the Moderate impact level. As always, the reasoning and justification for such decisions must be documented by the cloud service provider.

---


## 20x-Specific Provider Responsibilities

These requirements and recommendations apply to all cloud service offerings following the 20x path. 

### Cryptographic Module Documentation

??? abstract "UCM-CSX-CMD"

    **Former ID:** FRR-UCM-01

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST document the cryptographic modules used in each service (or groups of services that use the same modules) where cryptographic services are used to protect federal customer data, including whether these modules are validated under the NIST Cryptographic Module Validation Program or are update streams of such modules.


    ---
    **Terms:** [Federal Customer Data](fedramp-definitions/#federal-customer-data){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Using Validated Cryptographic Modules

!!! abstract "UCM-CSX-UVM"



!!! quote ""

    === "Low"
        Providers MAY use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect federal customer data.


    === "Moderate"
        Providers SHOULD use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect federal customer data.


    === "High"
        Providers MUST use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect federal customer data.




    ---
    **Terms:** [Federal Customer Data](fedramp-definitions/#federal-customer-data){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Configuration of Agency Tenants

??? abstract "UCM-CSX-CAT"

    **Former ID:** FRR-UCM-02

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD configure agency tenants by default to use cryptographic services that use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when such modules are available.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  

---  




