# Key Security Indicators

Modern cloud services use automated or code-driven configuration management and control planes to ensure predictable, repeatable, reliable, and secure outcomes during deployment and operation. The majority of a service security assessment can take place continuously via automated validation for simple cloud-native services if the need for a traditional control-by-control narrative approach is removed.

??? success "Effective Date(s) & Overall Applicability"
    - **Release:** 25.11A
    - **Published:** 2025-11-18
    - **Designator:** KSI
    - **Description:** Updates Key Security Indicators for the FedRAMP 20x Phase Two pilot, including underlying structural changes to machine-readable docs; Renamed KSI &quot;indicator&quot; property to &quot;theme&quot; and KSI &quot;requirements&quot; property to &quot;indicators&quot; to match current naming conventions..
    ---
    - **FedRAMP 20x**:
        - This release is effective **2025-11-18** for **20x**.
        - These Key Security Indicators apply to all FedRAMP 20x authorizations.
        - Phase One Pilot participants have one year from authorization to fully address these Key Security Indicators but must demonstrate continuous quarterly progress.
        - Phase Two Pilot participants must address all of these Key Security Indicators prior to submission for authorization review.

??? abstract "Background & Authority"
    - [OMB Circular A-130](https://whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) Appendix I states &quot;Agencies may also develop overlays for specific types of information or communities of interest (e.g., all web-based applications, all health care-related systems) as part of the security control selection process. Overlays provide a specification of security or privacy controls, control enhancements, supplemental guidance, and other supporting information as part of the tailoring process, that is intended to complement (and further refine) security control baselines. The overlay may be more stringent or less stringent than the original security control baseline and can be applied to multiple information systems.&quot;
    - [NIST SP 800-53B](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final) Section 2.5 states &quot;As the number of controls in [SP 800-53] grows in response to an increasingly sophisticated threat space, it is important for organizations to have the ability to describe key capabilities needed to protect organizational missions and business functions, and to subsequently select controls that—if properly designed, developed, and implemented—produce such capabilities. The use of capabilities simplifies how the protection problem is viewed conceptually. Using the construct of a capability provides a method of grouping controls that are employed for a common purpose or to achieve a common objective.&quot; This section later states &quot;Ultimately, authorization decisions (i.e., risk acceptance decisions) are made based on the degree to which the desired capabilities have been effectively achieved.&quot;
    - [NIST SP 800-53A](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) Section 3.5 states &quot;When organizations employ the concept of capabilities, automated and manual assessments account for all security and privacy controls that comprise the security and privacy capabilities. Assessors are aware of how the controls work together to provide such capabilities.&quot;
    - [FedRAMP Authorization Act (44 USC § 3609 (a) (1))](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) requires that the Administrator of the General Services Administration shall &quot;in consultation with the [DHS] Secretary, develop, coordinate, and implement a process to support agency review, reuse, and standardization, where appropriate, of security assessments of cloud computing products and services...&quot; 44 USC § 3609 (c) (2) further states that &quot;the [GSA] Administrator shall establish a means for the automation of security assessments and reviews.&quot;

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements apply ALWAYS to ALL FedRAMP 20x authorizations based on the Effective Date(s) and Overall Applicability.

### FRR-KSI-01 Application of Key Security Indicators

!!! quote ""
    Cloud service providers SHOULD apply ALL Key Security Indicators to ALL aspects of their _cloud service offering_ that are within the FedRAMP Minimum Assessment Scope.


    **Applies to:** Low, Moderate
    

### FRR-KSI-02 Implementation Summaries

!!! quote ""
    Providers MUST maintain simple high-level summaries of at least the following for each Key Security Indicator:

    1. Goals for how it will be implemented and validated, including clear pass/fail criteria and traceability

    1. The consolidated _information resources_ that will be validated (this should include consolidated summaries such as &quot;all employees with privileged access that are members of the Admin group&quot;)

    1. The machine-based processes for validation and the _persistent_ cycle on which they will be performed (or an explanation of why this doesn&#x27;t apply)

    1. The non-machine-based processes for validation and the _persistent_ cycle on which they will be performed (or an explanation of why this doesn&#x27;t apply)

    1. Current implementation status

    1. Any clarifications or responses to the assessment summary


    **Applies to:** Low, Moderate
    

---   






## Key Security Indicators
### Authorization by FedRAMP

!!! info ""
    A secure cloud service provider seeking FedRAMP authorization will address all FedRAMP 20x requirements and recommendations, including government-specific requirements for maintaining a secure system and reporting on activities to government customers.

#### KSI-AFR-01 Minimum Assessment Scope

!!! quote ""

    Apply the FedRAMP Minimum Assessment Standard (MAS) to identify and document the scope of the cloud service offering to be assessed for FedRAMP authorization and persistently address all related requirements and recommendations.


    **Reference:** [Minimum Assessment Scope](https://fedramp.gov/docs/minimum-assessment-scope)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-02 Key Security Indicators

!!! quote ""

    Set security goals for the cloud service offering based on FedRAMP 20x Phase Two Key Security Indicators (KSIs - you are here), develop automated validation of status and progress to the greatest extent possible, and persistently address all related requirements and recommendations.


    **Reference:** [Key Security Indicators](https://fedramp.gov/docs/key-security-indicators)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-03 Authorization Data Sharing

!!! quote ""

    Determine how authorization data will be shared with all necessary parties in alignment with the FedRAMP Authorization Data Sharing (ADS) standard and persistently address all related requirements and recommendations.


    **Related SP 800-53 Controls:** AC-3, AC-4, AU-2, AU-3, AU-6, CA-2, IR-4, RA-5, SC-8

    **Reference:** [Authorization Data Sharing](https://fedramp.gov/docs/authorization-data-sharing)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-04 Vulnerability Detection and Response

!!! quote ""

    Document the vulnerability detection and vulnerability response methodology used within the cloud service offering in alignment with the FedRAMP Vulnerability Detection and Response (VDR) standard and persistently address all related requirements and recommendations.


    **Related SP 800-53 Controls:** CA-2, CA-7, CA-7.6, IR-1, IR-4, IR-4.1, IR-5, IR-5.1, IR-6, IR-6.1, IR-6.2, PM-3, PM-5, PM-31, RA-2, RA-2.1, RA-3, RA-3.3, RA-5, RA-5.2, RA-5.3, RA-5.4, RA-5.5, RA-5.6, RA-5.7, RA-5.11, RA-9, RA-10, SI-2, SI-2.1, SI-2.2, SI-2.4, SI-2.5, SI-3, SI-3.1, SI-3.2, SI-4, SI-4.2, SI-4.3, SI-4.7

    **Reference:** [Vulnerability Detection and Response](https://fedramp.gov/docs/vulnerability-detection-and-response)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-05 Significant Change Notifications

!!! quote ""

    Determine how significant changes will be tracked and how all necessary parties will be notified in alignment with the FedRAMP Significant Change Notifications (SCN) standard and persistently address all related requirements and recommendations.


    **Related SP 800-53 Controls:** CA-7.4, CM-3.4, CM-4, CM-7.1, AU-5, CA-5, CA-7, RA-5, RA-5.2, SA-22, SI-2, SI-2.2, SI-3, SI-5, SI-7.7, SI-10, SI-11

    **Reference:** [Significant Change Notifications](https://fedramp.gov/docs/significant-change-notifications)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-06 Collaborative Continuous Monitoring

!!! quote ""

    Maintain a plan and process for providing Ongoing Authorization Reports and Quarterly Reviews for all necessary parties in alignment with the FedRAMP Collaborative Continuous Monitoring (CCM) standard and persistently address all related requirements and recommendations.


    **Reference:** [Collaborative Continuous Monitoring](https://fedramp.gov/docs/collaborative-continuous-monitoring)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-07 Recommended Secure Configuration

!!! quote ""

    Develop secure by default configurations and provide guidance for secure configuration of the cloud service offering to customers in alignment with the FedRAMP Recommended Secure Configuration (RSC) guidance standard and persistently address all related requirements and recommendations.


    **Reference:** [Recommended Secure Configuration](https://fedramp.gov/docs/recommended-secure-configuration)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-08 FedRAMP Security Inbox

!!! quote ""

    Operate a secure inbox to receive critical communication from FedRAMP and other government entities in alignment with FedRAMP Security Inbox (FSI) requirements and persistently address all related requirements and recommendations.


    **Reference:** [FedRAMP Security Inbox](https://fedramp.gov/docs/fedramp-security-inbox)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-09 Persistent Validation and Assessment

!!! quote ""

    Persistently validate, assess, and report on the effectiveness and status of security decisions and policies that are implemented within the cloud service offering in alignment with the FedRAMP 20x Persistent Validation and Assessment (PVA) standard, and persistently address all related requirements and recommendations.


    **Reference:** [Persistent Validation and Assessment](https://fedramp.gov/docs/persistent-validation-and-assessment)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-10 Incident Communications Procedures

!!! quote ""

    Integrate FedRAMP&#x27;s Incident Communications Procedures (ICP) into incident response procedures and persistently address all related requirements and recommendations.


    **Reference:** [Incident Communications Procedures](https://fedramp.gov/docs/incident-communications-procedures)

      **Applies to:** Low, Moderate
      

#### KSI-AFR-11 Using Cryptographic Modules

!!! quote ""

    Ensure that cryptographic modules used to protect potentially sensitive federal customer data are selected and used in alignment with the FedRAMP 20x Using Cryptographic Modules (UCM) policy and persistently address all related requirements and recommendations.


    **Reference:** [Using Cryptographic Modules](https://fedramp.gov/docs/using-cryptographic-modules)

      **Applies to:** Low, Moderate
      

---
### Cybersecurity Education

!!! info ""
    A secure cloud service provider will continuously educate their employees on cybersecurity measures, testing them _regularly_ to ensure their knowledge is satisfactory.

#### KSI-CED-01 General Education

!!! quote ""

    Require and monitor the effectiveness of training given to all employees on policies, procedures, and security-related topics.


    **Related SP 800-53 Controls:** AT-2, AT-2.2, AT-2.3, AT-3.5, AT-4, IR-2.3

      **Applies to:** Low, Moderate
      

#### KSI-CED-02 Role-Specific Education

!!! quote ""

    Require and monitor the effectiveness of role-specific training for high risk roles, including at least roles with privileged access.


    **Related SP 800-53 Controls:** AT-2, AT-2.3, AT-3, SR-11.1

      **Applies to:** Low, Moderate
      

#### KSI-CED-03 Development and Engineering Education

!!! quote ""

    Require and monitor the effectiveness of role-specific training provided to development and engineering staff that covers best practices for delivering secure software.


    **Related SP 800-53 Controls:** CP-3, IR-2, PS-6

      **Applies to:** Low, Moderate
      

#### KSI-CED-04 Incident Response and Disaster Recovery Education

!!! quote ""

    Require and monitor the effectiveness of role-specific training to staff involved with incident response or disaster recovery.


      **Applies to:** Low, Moderate
      

---
### Change Management

!!! info ""
    A secure cloud service provider will ensure that all system changes are properly documented and configuration baselines are updated accordingly.

#### KSI-CMT-01 Log and Monitor Changes

!!! quote ""

    Log and monitor modifications to the cloud service offering.


    **Related SP 800-53 Controls:** AU-2, CM-3, CM-3.2, CM-4.2, CM-6, CM-8.3, MA-2

      **Applies to:** Low, Moderate
      

#### KSI-CMT-02 Redeployment

!!! quote ""

    Execute changes though redeployment of version controlled immutable resources rather than direct modification wherever possible


    **Related SP 800-53 Controls:** CM-2, CM-3, CM-5, CM-6, CM-7, CM-8.1, SI-3

      **Applies to:** Low, Moderate
      

#### KSI-CMT-03 Automated Testing and Validation

!!! quote ""

    Automate persistent testing and validation of changes throughout deployment.


    **Related SP 800-53 Controls:** CM-3, CM-3.2, CM-4.2, SI-2

      **Applies to:** Low, Moderate
      

#### KSI-CMT-04 Change Management Procedure

!!! quote ""

    Always follow a documented change management procedure.


    **Related SP 800-53 Controls:** CM-3, CM-3.2, CM-3.4, CM-5, CM-7.1, CM-9

      **Applies to:** Low, Moderate
      

#### KSI-CMT-05

!!! note "This KSI ID was retired in the 20x Phase Two Pilot"


    **Note:** Superseded by KSI-AFR-05 (SCN)

      

---
### Cloud Native Architecture

!!! info ""
    A secure _cloud service offering_ will use cloud native architecture and design principles to enforce and enhance the Confidentiality, Integrity and Availability of the system.

#### KSI-CNA-01 Restrict Network Traffic

!!! quote ""

    Configure all machine-based information resources to limit inbound and outbound network traffic.


    **Related SP 800-53 Controls:** AC-17.3, CA-9, CM-7.1, SC-7.5, SI-8

      **Applies to:** Low, Moderate
      

#### KSI-CNA-02 Minimize the Attack Surface

!!! quote ""

    Design systems to minimize the attack surface and minimize lateral movement if compromised.


    **Related SP 800-53 Controls:** AC-17.3, AC-18.1, AC-18.3, AC-20.1, CA-9, SC-7.3, SC-7.4, SC-7.5, SC-7.8, SC-8, SC-10, SI-10, SI-11, SI-16

      **Applies to:** Low, Moderate
      

#### KSI-CNA-03 Enforce Traffic Flow

!!! quote ""

    Use logical networking and related capabilities to enforce traffic flow controls.


    **Related SP 800-53 Controls:** AC-12, AC-17.3, CA-9, SC-4, SC-7, SC-7.7, SC-8, SC-10

      **Applies to:** Low, Moderate
      

#### KSI-CNA-04 Immutable Infrastructure

!!! quote ""

    Use immutable infrastructure with strictly defined functionality and privileges by default.


    **Related SP 800-53 Controls:** CM-2, SI-3

      **Applies to:** Low, Moderate
      

#### KSI-CNA-05 Unwanted Activity

!!! quote ""

    Protect against denial of service attacks and other unwanted activity.


    **Related SP 800-53 Controls:** SC-5, SI-8, SI-8.2

      **Applies to:** Low, Moderate
      

#### KSI-CNA-06 High Availability

!!! quote ""

    Design systems for high availability and rapid recovery.


      **Applies to:** Low, Moderate
      

#### KSI-CNA-07 Best Practices

!!! quote ""

    Ensure cloud-native _information resources_ are implemented based on host provider&#x27;s best practices and documented guidance.


    **Related SP 800-53 Controls:** AC-17.3, CM-2, PL-10

      **Applies to:** Low, Moderate
      

#### KSI-CNA-08 Persistent Assessment and Automated Enforcement

!!! quote ""

    Use automated services to persistently assess the security posture of all machine-based information resources and automatically enforce their intended operational state.


    **Related SP 800-53 Controls:** CA-2.1, CA-7.1

      **Applies to:** Moderate
      

---
### Identity and Access Management

!!! info ""
    A secure _cloud service offering_ will protect user data, control access, and apply zero trust principles.

#### KSI-IAM-01 Phishing-Resistant MFA

!!! quote ""

    Enforce multi-factor authentication (MFA) using methods that are difficult to intercept or impersonate (phishing-resistant MFA) for all user authentication.


    **Related SP 800-53 Controls:** AC-2, IA-2, IA-2.1, IA-2.2, IA-2.8, IA-5, IA-8, SC-23

      **Applies to:** Low, Moderate
      

#### KSI-IAM-02 Passwordless Authentication

!!! quote ""

    Use secure passwordless methods for user authentication and authorization when feasible, otherwise enforce strong passwords with MFA.


    **Related SP 800-53 Controls:** AC-2, AC-3, IA-2.1, IA-2.2, IA-2.8, IA-5.1, IA-5.2, IA-5.6, IA-6

      **Applies to:** Low, Moderate
      

#### KSI-IAM-03 Non-User Accounts

!!! quote ""

    Enforce appropriately secure authentication methods for non-user accounts and services.


    **Related SP 800-53 Controls:** AC-2, AC-2.2, AC-4, AC-6.5, IA-3, IA-5.2, RA-5.5

      **Applies to:** Low, Moderate
      

#### KSI-IAM-04 Just-in-Time Authorization

!!! quote ""

    Use a least-privileged, role and attribute-based, and just-in-time security authorization model for all user and non-user accounts and services.


    **Related SP 800-53 Controls:** AC-2, AC-2.1, AC-2.2, AC-2.3, AC-2.4, AC-2.6, AC-3, AC-4, AC-5, AC-6, AC-6.1, AC-6.2, AC-6.5, AC-6.7, AC-6.9, AC-6.10, AC-7, AC-20.1, AC-17, AU-9.4, CM-5, CM-7, CM-7.2, CM-7.5, CM-9, IA-4, IA-4.4, IA-7, PS-2, PS-3, PS-4, PS-5, PS-6, PS-9, RA-5.5, SC-2, SC-23, SC-39

      **Applies to:** Low, Moderate
      

#### KSI-IAM-05 Least Privilege

!!! quote ""

    Configure identity and access management with measures that always verify each user or device can only access the resources they need.


    **Related SP 800-53 Controls:** AC-2.5, AC-2.6, AC-3, AC-4, AC-6, AC-12, AC-14, AC-17, AC-17.1, AC-17.2, AC-17.3, AC-20, AC-20.1, CM-2.7, CM-9, IA-2, IA-3, IA-4, IA-4.4, IA-5.2, IA-5.6, IA-11, PS-2, PS-3, PS-4, PS-5, PS-6, SC-4, SC-20, SC-21, SC-22, SC-23, SC-39, SI-3

      **Applies to:** Low, Moderate
      

#### KSI-IAM-06 Suspicious Activity

!!! quote ""

    Automatically disable or otherwise secure accounts with privileged access in response to suspicious activity


    **Related SP 800-53 Controls:** AC-2, AC-2.1, AC-2.3, AC-2.13, AC-7, PS-4, PS-8
      

#### KSI-IAM-07 Automated Account Management

!!! quote ""

    Securely manage the lifecycle and privileges of all accounts, roles, and groups, using automation.


    **Related SP 800-53 Controls:** AC-2.2, AC-2.3, AC-2.13, AC-6.7, IA-4.4, IA-12, IA-12.2, IA-12.3, IA-12.5

      **Applies to:** Low, Moderate
      

---
### Incident Response

!!! info ""
    A secure _cloud service offering_ will document, report, and analyze security incidents to ensure regulatory compliance and continuous security improvement.

#### KSI-INR-01 Incident Response Procedure

!!! quote ""

    Always follow a documented incident response procedure.


    **Related SP 800-53 Controls:** IR-4, IR-4.1, IR-6, IR-6.1, IR-6.3, IR-7, IR-7.1, IR-8, IR-8.1, SI-4.5

      **Applies to:** Low, Moderate
      

#### KSI-INR-02 Incident Logging

!!! quote ""

    Maintain a log of incidents and periodically review past incidents for patterns or vulnerabilities.


    **Related SP 800-53 Controls:** IR-3, IR-4, IR-4.1, IR-5, IR-8

      **Applies to:** Low, Moderate
      

#### KSI-INR-03 Incident After Action Reports

!!! quote ""

    Generate after action reports and _regularly_ incorporate lessons learned into operations.


    **Related SP 800-53 Controls:** IR-3, IR-4, IR-4.1, IR-8

      **Applies to:** Low, Moderate
      

---
### Monitoring, Logging, and Auditing

!!! info ""
    A secure _cloud service offering_ will monitor, log, and audit all important events, activity, and changes.

#### KSI-MLA-01 Security Information and Event Management (SIEM)

!!! quote ""

    Operate a Security Information and Event Management (SIEM) or similar system(s) for centralized, tamper-resistent logging of events, activities, and changes.


    **Related SP 800-53 Controls:** AC-17.1, AC-20.1, AU-2, AU-3, AU-3.1, AU-4, AU-5, AU-6.1, AU-6.3, AU-7, AU-7.1, AU-8, AU-9, AU-11, IR-4.1, SI-4.2, SI-4.4, SI-7.7

      **Applies to:** Low, Moderate
      

#### KSI-MLA-02 Audit Logging

!!! quote ""

    _Regularly_ review and audit logs.


    **Related SP 800-53 Controls:** AC-2.4, AC-6.9, AU-2, AU-6, AU-6.1, SI-4, SI-4.4

      **Applies to:** Low, Moderate
      

#### KSI-MLA-03

!!! note "This KSI ID was retired in the 20x Phase Two Pilot"


    **Note:** Superseded by KSI-AFR-04 (VDR)

      

#### KSI-MLA-04

!!! note "This KSI ID was retired in the 20x Phase Two Pilot"


    **Note:** Superseded by KSI-AFR-04 (VDR)

      

#### KSI-MLA-05 Infrastructure as Code

!!! quote ""

    Perform Infrastructure as Code and configuration evaluation and testing.


    **Related SP 800-53 Controls:** CA-7, CM-2, CM-6, SI-7.7

      **Applies to:** Low, Moderate
      

#### KSI-MLA-06

!!! note "This KSI ID was retired in the 20x Phase Two Pilot"


    **Note:** Superseded by KSI-AFR-04 (VDR)

      

#### KSI-MLA-07 Event Types

!!! quote ""

    Maintain a list of information resources and event types that will be monitored, logged, and audited, then do so.


    **Related SP 800-53 Controls:** AC-2.4, AC-6.9, AC-17.1, AC-20.1, AU-2, AU-7.1, AU-12, SI-4.4, SI-4.5, SI-7.7

      **Applies to:** Low, Moderate
      

#### KSI-MLA-08 Log Data Access

!!! quote ""

    Use a least-privileged, role and attribute-based, and just-in-time access authorization model for access to log data based on organizationally defined data sensitivity.


    **Related SP 800-53 Controls:** SI-11

      **Applies to:** Moderate
      

---
### Policy and Inventory

!!! info ""
    A secure _cloud service offering_ will have intentional, organized, universal guidance for how every _information resource_, including personnel, is secured.

#### KSI-PIY-01 Automated Inventory

!!! quote ""

    Use authoritative sources to automatically maintain real-time inventories of all information resources.


    **Related SP 800-53 Controls:** CM-2.2, CM-7.5, CM-8, CM-8.1, CM-12, CM-12.1, CP-2.8

      **Applies to:** Low, Moderate
      

#### KSI-PIY-02 Security Objectives and Requirements

!!! quote ""

    Document the security objectives and requirements for each information resource or set of information resources.


    **Related SP 800-53 Controls:** AC-1, AC-21, AT-1, AU-1, CA-1, CM-1, CP-1, CP-2.1, CP-2.8, CP-4.1, IA-1, IR-1, MA-1, MP-1, PE-1, PL-1, PL-2, PL-4, PL-4.1, PS-1, RA-1, RA-9, SA-1, SC-1, SI-1, SR-1, SR-2, SR-3, SR-11

      **Applies to:** Low, Moderate
      

#### KSI-PIY-03 Vulnerability Disclosure Program

!!! quote ""

    Maintain a vulnerability disclosure program.


    **Related SP 800-53 Controls:** RA-5.11

      **Applies to:** Low, Moderate
      

#### KSI-PIY-04 CISA Secure By Design

!!! quote ""

    Monitor the effectiveness of building security and privacy considerations into the Software Development Lifecycle and aligning with CISA Secure By Design principles.


    **Related SP 800-53 Controls:** AC-5, AU-3.3, CM-3.4, PL-8, PM-7, SA-3, SA-8, SC-4, SC-18, SI-10, SI-11, SI-16

      **Applies to:** Low, Moderate
      

#### KSI-PIY-05 Evaluate Implementations

!!! quote ""

    Document methods used to evaluate _information resource_ implementations.


      **Applies to:** Low, Moderate
      

#### KSI-PIY-06 Security Investment Effectiveness

!!! quote ""

    Monitor the effectiveness of the organization&#x27;s investments in achieving security objectives.


    **Related SP 800-53 Controls:** AC-5, CA-2, CP-2.1, CP-4.1, IR-3.2, PM-3, SA-2, SA-3, SR-2.1

      **Applies to:** Low, Moderate
      

#### KSI-PIY-07 Supply Chain Risk Management

!!! quote ""

    Document risk management decisions for software supply chain security.


    **Related SP 800-53 Controls:** CA-7.4, SC-18

      **Applies to:** Low, Moderate
      

#### KSI-PIY-08 Executive Support

!!! quote ""

    Regularly measure executive support for achieving the organization’s security objectives.


      **Applies to:** Low, Moderate
      

---
### Recovery Planning

!!! info ""
    A secure _cloud service offering_ will define, maintain, and test incident response plan(s) and recovery capabilities to ensure minimal service disruption and data loss during incidents and contingencies.

#### KSI-RPL-01 Recovery Objectives

!!! quote ""

    Define Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).


    **Related SP 800-53 Controls:** CP-2.3, CP-10

      **Applies to:** Low, Moderate
      

#### KSI-RPL-02 Recovery Plan

!!! quote ""

    Develop and maintain a recovery plan that aligns with the defined recovery objectives.


    **Related SP 800-53 Controls:** CP-2, CP-2.1, CP-2.3, CP-4.1, CP-6, CP-6.1, CP-6.3, CP-7, CP-7.1, CP-7.2, CP-7.3, CP-8, CP-8.1, CP-8.2, CP-10, CP-10.2

      **Applies to:** Low, Moderate
      

#### KSI-RPL-03 System Backups

!!! quote ""

    Perform system backups aligned with recovery objectives.


    **Related SP 800-53 Controls:** CM-2.3, CP-6, CP-9, CP-10, CP-10.2, SI-12

      **Applies to:** Low, Moderate
      

#### KSI-RPL-04 Recovery Testing

!!! quote ""

    _Regularly_ test the capability to recover from incidents and contingencies.


    **Related SP 800-53 Controls:** CP-2.1, CP-2.3, CP-4, CP-4.1, CP-6, CP-6.1, CP-9.1, CP-10, IR-3, IR-3.2

      **Applies to:** Low, Moderate
      

---
### Service Configuration

!!! info ""
    A secure _cloud service offering_ will follow FedRAMP encryption policies, continuously verify _information resource_ integrity, and restrict access to _third-party information resources_.

#### KSI-SVC-01 Continuous Improvement

!!! quote ""

    Implement improvements based on persistent evaluation of information resources for opportunities to improve security.


    **Related SP 800-53 Controls:** CM-7.1, CM-12.1, MA-2, PL-8, SC-7, SC-39, SI-2.2, SI-4, SR-10

      **Applies to:** Low, Moderate
      

#### KSI-SVC-02 Network Encryption

!!! quote ""

    Encrypt or otherwise secure network traffic.


    **Related SP 800-53 Controls:** AC-1, AC-17.2, CP-9.8, SC-8, SC-8.1, SC-13, SC-20, SC-21, SC-22, SC-23

      **Applies to:** Low, Moderate
      

#### KSI-SVC-03

!!! note "This KSI ID was retired in the 20x Phase Two Pilot"


    **Note:** Superseded by KSI-AFR-11 (UCM)

      

#### KSI-SVC-04 Configuration Automation

!!! quote ""

    Manage configuration of machine-based information resources using automation.


    **Related SP 800-53 Controls:** AC-2.4, CM-2, CM-2.2, CM-2.3, CM-6, CM-7.1, PL-9, PL-10, SA-5, SI-5, SR-10

      **Applies to:** Low, Moderate
      

#### KSI-SVC-05 Resource Integrity

!!! quote ""

    Use cryptographic methods to validate the integrity of machine-based information resources.


    **Related SP 800-53 Controls:** CM-2.2, CM-8.3, SC-13, SC-23, SI-7, SI-7.1, SR-10

      **Applies to:** Low, Moderate
      

#### KSI-SVC-06 Secret Management

!!! quote ""

    Automate management, protection, and regular rotation of digital keys, certificates, and other secrets.


    **Related SP 800-53 Controls:** AC-17.2, IA-5.2, IA-5.6, SC-12, SC-17

      **Applies to:** Low, Moderate
      

#### KSI-SVC-07 Patching

!!! quote ""

    Use a consistent, risk-informed approach for applying security patches.


    **Related SP 800-53 Controls:** CA-7.4, RA-5, RA-7

      **Applies to:** Low, Moderate
      

#### KSI-SVC-08 Shared Resources

!!! quote ""

    Do not introduce or leave behind residual elements that could negatively affect confidentiality, integrity, or availability of _federal customer data_ during operations.


    **Related SP 800-53 Controls:** SC-4

      **Applies to:** Moderate
      

#### KSI-SVC-09 Communication Integrity

!!! quote ""

    Persistently validate the authenticity and integrity of communications between _machine-based_ _information resources_ using automation.


    **Related SP 800-53 Controls:** SC-23, SI-7.1

      **Applies to:** Moderate
      

#### KSI-SVC-10 Data Destruction

!!! quote ""

    Remove unwanted federal customer data promptly when requested by an agency in alignment with customer agreements, including from backups if appropriate; this typically applies when a customer spills information or when a customer seeks to remove information from a service due to a change in usage.


    **Related SP 800-53 Controls:** SI-12.3, SI-18.4

      **Applies to:** Moderate
      

---
### Third-Party Information Resources

!!! info ""
    A secure _cloud service offering_ will understand, monitor, and manage supply chain risks from _third-party information resources_.

#### KSI-TPR-01

!!! note "This KSI ID was retired in the 20x Phase Two Pilot"


    **Note:** Superseded by KSI-AFR-01 (MAS)

      

#### KSI-TPR-02

!!! note "This KSI ID was retired in the 20x Phase Two Pilot"


    **Note:** Superseded by KSI-AFR-01 (MAS)

      

#### KSI-TPR-03 Supply Chain Risk Management

!!! quote ""

    Identify and prioritize mitigation of potential supply chain risks.


    **Related SP 800-53 Controls:** AC-20, RA-3.1, SA-9, SA-10, SA-11, SA-15.3, SA-22, SI-7.1, SR-5, SR-6

      **Applies to:** Low, Moderate
      

#### KSI-TPR-04 Supply Chain Risk Monitoring

!!! quote ""

    Automatically monitor third party software _information resources_ for upstream vulnerabilities using mechanisms that may include contractual notification requirements or active monitoring services.


    **Related SP 800-53 Controls:** AC-20, CA-3, IR-6.3, PS-7, RA-5, SA-9, SI-5, SR-5, SR-6, SR-8

      **Applies to:** Low, Moderate
      

---



