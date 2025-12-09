# Minimum Assessment Scope


!!! info "Effective Date(s) & Overall Applicability for Rev5"
      - **Optional** (Wide Release) beginning 2026-01-12.
      - Rev5 Authorized providers or those seeking FedRAMP authorization MAY adopt this process in place of the traditional FedRAMP boundary after January 12, 2026.
      - Providers MUST follow the Significant Change Request process (or Significant Change Notification if applicable) to transition from the traditional boundary to the MAS, and this change must be assessed by a FedRAMP recognized assessor.
      - Providers adopting this process MUST comply with ALL requirements and recommendations, including documentation. Templates are not provided for Rev5 MAS adoption so it is up to the provider to minimize confusion.
      - Rev5 Authorized providers who switch from a traditional FedRAMP boundary to the MAS MUST notify FedRAMP by sending an email to info@fedramp.gov.
      - All new Rev5 authorizations in progress that use the MAS must clearly mark all authorization data to indicate adoption of the MAS.
      - The FedRAMP Marketplace will include a section that indicates if a cloud service offering is following this process.
      


Application boundaries that are defined too broadly complicate the assessment process by introducing components that are unlikely to have an impact on the confidentiality, integrity or accessibility of the offering. The Minimum Assessment Scope provides guidance for cloud service providers to narrowly define information resource boundaries while still including all necessary components.

??? tip "Version 25.11C published on 2025-12-01 " 
    **History:**

    - **25.11C (2025-12-01):** No material changes to content; replaced references to &quot;standard&quot; with &quot;process&quot; or &quot;documentation&quot; as appropriate.
    - **25.11C (2025-11-26):** No material changes to content; underlying JSON replaced the &quot;All&quot; option for &quot;affects&quot; with a breakout of all affected entities.
    - **25.11B (2025-11-24):** No material changes to content; updated JSON structure with additional information about Rev5 application added.
    - **25.11A (2025-11-18):** Minor updates for the FedRAMP 20x Phase Two pilot and Rev5 Open Beta.
    - **25.10A (2025-10-17):** minor updates to improve clarity; switch from federal information to federal customer data; add impact level metadata; no substantive changes.
    - **25.06B (2025-08-24):** Minor non-breaking updates to align term definitions and highlighted terms across updated materials (definitions are now in FRD-ALL).
    - **25.06A (2025-06-17):** Minor non-breaking updates for clarity and formatting; renamed to Minimum Assessment Scope to avoid confusion with the Scope of FedRAMP as defined by M-24-15;reframed FRR-MAS-01 to explicitly note that this identifies the cloud service offering
    - **25.05A (2025-05-30):** Initial release of the Minimum Assessment Scope Standard.


??? abstract "Background & Authority"
    - [OMB Circular A-130: Managing Information as a Strategic Resource](https://whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) Section 10 states that an &quot;Authorization boundary&quot; includes &quot;all components of an information system to be authorized for operation by an authorizing official. This excludes separately authorized systems to which the information system is connected.&quot; and further adds in footnote 64 that &quot;Agencies have significant flexibility in determining what constitutes an information system and its associated boundary.&quot;
    - [NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final) Chapter 2.4 footnote 36 similarly states that &quot;the term authorization boundary is now used exclusively to refer to the set of system elements comprising the system to be authorized for operation or authorized for use by an authorizing official (i.e., the scope of the authorization).&quot;
    - [FedRAMP Authorization Act (44 USC § 3609 (a) (4))](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3607) Requires the General Services Administration to &quot;establish and update guidance on the boundaries of FedRAMP authorization packages to enhance the security and protection of Federal information and promote transparency for agencies and users as to which services are included in the scope of a FedRAMP authorization.&quot;

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements apply ALWAYS to ALL FedRAMP authorizations based on the Effective Date(s) and Overall Applicability.

### FRR-MAS-01 Cloud Service Offering Identification

!!! quote ""
    Providers MUST identify a set of _information resources_ to assess for FedRAMP authorization that includes all _information resources_ that are _likely_ to _handle_ _federal customer data_ or _likely_ to impact the confidentiality, integrity, or availability of _federal customer data_ _handled_ by the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-02 Third-Party Information Resources

!!! quote ""
    Providers MUST include the configuration and usage of _third-party information resources_, ONLY IF _FRR-MAS-01_ APPLIES.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-03 Non-FedRAMP Authorized Third-Party Information Resources

!!! quote ""
    Providers MUST clearly identify and document the justification, mitigation measures, compensating controls, and potential impact to _federal customer data_ from the configuration and usage of non-FedRAMP authorized _third-party information resources_, ONLY IF _FRR-MAS-01_ APPLIES.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-04 Metadata Inclusion

!!! quote ""
    Providers MUST include metadata (including metadata about _federal customer data_), ONLY IF _FRR-MAS-01_ APPLIES.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-05 Information Flows and Impact Levels

!!! quote ""
    Providers MUST clearly identify, document, and explain information flows and impact levels for ALL _information resources_, ONLY IF _FRR-MAS-01_ APPLIES.


    **Applies to:** Low, Moderate, High
    

---   

        
## Application

!!! info ""
    This section provides general guidance on the application of this process.

### FRR-MAS-AY-01 Scope of FedRAMP

!!! quote ""
    Certain categories of cloud computing products and services are specified as entirely outside the scope of FedRAMP by the Director of the Office of Management and Budget. All such products and services are therefore not included in the _cloud service offering_ for FedRAMP. For more, see https://fedramp.gov/scope.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-02 Non-Cloud-Based Software

!!! quote ""
    Software produced by cloud service providers that is delivered separately for installation on agency systems and not operated in a shared responsibility model (typically including agents, application clients, mobile applications, etc. that are not fully managed by the cloud service provider) is not a cloud computing product or service and is entirely outside the scope of FedRAMP under the FedRAMP Authorization Act. All such software is therefore not included in the _cloud service offering_ for FedRAMP. For more, see fedramp.gov/scope.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-03 Exclusion of Non-Impacting Information Resources

!!! quote ""
    _Information resources_ (including _third-party information resources_) that do not meet the conditions in FRR-MAS-01 are not included in the _cloud service offering_ for FedRAMP (_FRR-MAS-02_).


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-04 Impact Level Variations

!!! quote ""
    _Information resources_ (including _third-party information resources_) MAY vary by impact level as appropriate to the level of information _handled_ or impacted by the information resource (_FRR-MAS-05_).


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-05 Review of Best Practices

!!! quote ""
    All parties SHOULD review best practices and technical assistance provided separately by FedRAMP for help with applying the Minimum Assessment Scope as needed.


    **Applies to:** Low, Moderate, High
    

### FRR-MAS-AY-06 Cloud Service Offering Determination

!!! quote ""
    All aspects of the _cloud service offering_ are determined and maintained by the cloud service provider in accordance with related FedRAMP authorization requirements and documented by the cloud service provider in their assessment and authorization materials.


    **Applies to:** Low, Moderate, High
    

---   

        
## Exceptions

!!! info ""
    These exceptions MAY override some or all of the FedRAMP requirements for this process.

### FRR-MAS-EX-01 Supplemental Information

!!! quote ""
    Providers MAY include documentation of _information resources_ beyond the _cloud service offering_, or even entirely outside the scope of FedRAMP, in a FedRAMP assessment and _authorization package_ supplement; these resources will not be FedRAMP authorized and MUST be clearly marked and separated from the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

---   








