# Minimum Assessment Scope


!!! info "Effective Date(s) & Overall Applicability for Rev5"
      - **Optional** (Wide Release) beginning 2026-01-12.
      - Rev5 Authorized providers or those seeking FedRAMP authorization MAY adopt this process in place of the traditional FedRAMP boundary after January 12, 2026.
      - Providers MUST follow the Significant Change Request process (or Significant Change Notification if applicable) to transition from the traditional boundary to the MAS, and this change must be assessed by a FedRAMP recognized assessor.
      - Providers adopting this process MUST comply with ALL requirements and recommendations, including documentation. Templates are not provided for Rev5 MAS adoption so it is up to the provider to minimize confusion.
      - Rev5 Authorized providers who switch from a traditional FedRAMP boundary to the MAS MUST notify FedRAMP by sending an email to info@fedramp.gov.
      - All new Rev5 authorizations in progress that use the MAS must clearly mark all authorization data to indicate adoption of the MAS.
      - The FedRAMP Marketplace will include a section that indicates if a cloud service offering is following this process.
      


??? abstract "Background & Authority"
    - [OMB Circular A-130: Managing Information as a Strategic Resource](https://whitehouse.gov/wp-content/uploads/legacydrupalfiles/omb/circulars/A130/a130revised.pdf) Section 10 states that an &quot;Authorization boundary&quot; includes &quot;all components of an information system to be authorized for operation by an authorizing official. This excludes separately authorized systems to which the information system is connected.&quot; and further adds in footnote 64 that &quot;Agencies have significant flexibility in determining what constitutes an information system and its associated boundary.&quot;
    - [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) Chapter 2.4 footnote 36 similarly states that &quot;the term authorization boundary is now used exclusively to refer to the set of system elements comprising the system to be authorized for operation or authorized for use by an authorizing official (i.e., the scope of the authorization).&quot;
    - [FedRAMP Authorization Act (44 USC § 3609 (a) (4))](https://fedramp.gov/docs/authority/law/#a-roles-and-responsibilities) Requires the General Services Administration to &quot;establish and update guidance on the boundaries of FedRAMP authorization packages to enhance the security and protection of Federal information and promote transparency for agencies and users as to which services are included in the scope of a FedRAMP authorization.&quot;

Application boundaries that are defined too broadly complicate the assessment process by introducing components that are unlikely to have an impact on the confidentiality, integrity or accessibility of the offering. The Minimum Assessment Scope provides guidance for cloud service providers to narrowly define information resource boundaries while still including all necessary components.

---



## General Provider Responsibilities

These requirements and recommendations apply to all cloud service offerings following the Minimum Assessment Scope process.

### Identify Information Resources

??? abstract "MAS-CSO-IIR"

    **Former ID:** FRR-MAS-01

    **Changelog:**

    - **2026-02-04:** Added notes from former AY sections; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST identify a set of information resources to assess for FedRAMP authorization that includes all information resources that are likely to handle federal customer data or likely to impact the confidentiality, integrity, or availability of federal customer data handled by the cloud service offering; this set of information resources is the cloud service offering.

    ---

    _**Notes:**_

    - _Certain categories of cloud computing products and services are specified as entirely outside the scope of FedRAMP by the Director of the Office of Management and Budget. All such products and services are therefore not included in the cloud service offering for FedRAMP. For more, see https://fedramp.gov/scope._
    - _Software produced by cloud service providers that is delivered separately for installation on agency systems and not operated in a shared responsibility model (typically including agents, application clients, mobile applications, etc. that are not fully managed by the cloud service provider) is not a cloud computing product or service and is entirely outside the scope of FedRAMP under the FedRAMP Authorization Act. All such software is therefore not included in the cloud service offering for FedRAMP. For more, see fedramp.gov/scope._
    - _All aspects of the cloud service offering are determined and maintained by the cloud service provider in accordance with related FedRAMP authorization requirements and documented by the cloud service provider in their assessment and authorization materials._


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Federal Customer Data](fedramp-definitions/#federal-customer-data){ data-preview }, [Handle](fedramp-definitions/#handle){ data-preview }, [Information Resource](fedramp-definitions/#information-resource){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }
  
### Information Flows and Security Objectives

??? abstract "MAS-CSO-FLO"

    **Former ID:** FRR-MAS-05

    **Changelog:**

    - **2026-02-04:** Updated wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST clearly identify, document, and explain information flows and security objectives for ALL information resources or sets of information resources in the cloud service offering.

    ---

    _**Note:** Information resources (including third-party information resources) MAY vary by security objectives as appropriate to the level of information handled or impacted by the information resource._


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Handle](fedramp-definitions/#handle){ data-preview }, [Information Resource](fedramp-definitions/#information-resource){ data-preview }, [Third-party Information Resource](fedramp-definitions/#third-party-information-resource){ data-preview }
  
### Third-Party Information Resources

??? abstract "MAS-CSO-TPR"

    

    **Changelog:**

    - **2026-02-04:** Rephrased w/ following information, updated application to all third-party resources and merged with former FRR-MAS-02; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST address the potential impact to federal customer data from third-party information resources used by the cloud service offering, ONLY IF MAS-CSO-IIR APPLIES, by documenting the following information about each applicable third-party information resource:

    1. General usage and configuration

    1. Explanation or justification for use

    1. Mitigation measures in place to reduce the potential impact to federal customer data

    1. Compensating controls in place to reduce the potential impact to federal customer data


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Federal Customer Data](fedramp-definitions/#federal-customer-data){ data-preview }, [Information Resource](fedramp-definitions/#information-resource){ data-preview }, [Third-party Information Resource](fedramp-definitions/#third-party-information-resource){ data-preview }
  
### Metadata Inclusion

??? abstract "MAS-CSO-MDI"

    **Former ID:** FRR-MAS-04

    **Changelog:**

    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST include metadata (including metadata about federal customer data) in the Minimum Assessment Scope ONLY IF MAS-CSO-IIR APPLIES.


    ---
    **Terms:** [Federal Customer Data](fedramp-definitions/#federal-customer-data){ data-preview }
  
### Supplemental Information

??? abstract "MAS-CSO-SUP"

    **Former ID:** FRR-MAS-EX-01

    **Changelog:**

    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MAY include additional materials about other information resources that are not part of the cloud service offering in a FedRAMP assessment and authorization package supplement; these resources will not be FedRAMP authorized and MUST be clearly marked and separated from the cloud service offering.

    ---

    _**Note:** This is intended to allow inclusion of things like security materials for apps, supplemental marketing collateral, and other information that is not part of the cloud service offering but may be useful to agencies._


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Authorization Package](fedramp-definitions/#authorization-package){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Information Resource](fedramp-definitions/#information-resource){ data-preview }
  


