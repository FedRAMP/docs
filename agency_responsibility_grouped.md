# Agency Responsibility Grouped

## Access Management Process

### KSI-IAM-AAM

- **Statement:** Securely manage the lifecycle and privileges of all accounts, roles, and groups, using automation.
- **Controls:** ac-2.2, ac-2.3, ac-2.13, ac-6.7, ia-4.4, ia-12, ia-12.2, ia-12.3, ia-12.5
- **Agency Responsibility:**
  - Designate an Access Control Manager (ACM) to manage the lifecycle and privileges of all accounts, roles, and groups.
  - Document requirements for role assignment, review, and revocation

### KSI-IAM-ELP

- **Statement:** Persistently ensure that identity and access management employs measures to ensure each user or device can only access the resources they need.
- **Controls:** ac-2.5, ac-2.6, ac-3, ac-4, ac-6, ac-12, ac-14, ac-17, ac-17.1, ac-17.2, ac-17.3, ac-20, ac-20.1, cm-2.7, cm-9, ia-2, ia-3, ia-4, ia-4.4, ia-5.2, ia-5.6, ia-11, ps-2, ps-3, ps-4, ps-5, ps-6, sc-4, sc-20, sc-21, sc-22, sc-23, sc-39, si-3
- **Agency Responsibility:**
  - Persistently review accounts and roles to ensure they are properly assigned.

### KSI-IAM-SUS

- **Statement:** Automatically disable or otherwise secure accounts with privileged access in response to suspicious activity.
- **Controls:** ac-2, ac-2.1, ac-2.3, ac-2.13, ac-7, ps-4, ps-8
- **Agency Responsibility:**
  - Continuously monitor and review privileged accounts for suspicious activity.

## Audit and Monitoring Process

### KSI-AFR-VDR

- **Statement:** Document the vulnerability detection and vulnerability response methodology used within the cloud service offering in alignment with the FedRAMP Vulnerability Detection and Response (VDR) process and persistently address all related requirements and recommendations.
- **Controls:** ca-2, ca-7, ca-7.6, ir-1, ir-4, ir-4.1, ir-5, ir-5.1, ir-6, ir-6.1, ir-6.2, pm-3, pm-5, pm-31, ra-2, ra-2.1, ra-3, ra-3.3, ra-5, ra-5.2, ra-5.3, ra-5.4, ra-5.5, ra-5.6, ra-5.7, ra-5.11, ra-9, ra-10, si-2, si-2.1, si-2.2, si-2.4, si-2.5, si-3, si-3.1, si-3.2, si-4, si-4.2, si-4.3, si-4.7, ca-7.4, ra-7
- **Agency Responsibility:**
  - Integrate vulnerability data provided by the Cloud Service Provider into Agency vulnerability management solutions.

### KSI-MLA-LET

- **Statement:** Maintain a list of information resources and event types that will be logged, monitored, and audited, then do so.
- **Controls:** ac-2.4, ac-6.9, ac-17.1, ac-20.1, au-2, au-7.1, au-12, si-4.4, si-4.5, si-7.7
- **Agency Responsibility:**
  - Identify and document the types of events recieved from the Cloud Service Provider that will be logged, monitored, and audited.

### KSI-MLA-RVL

- **Statement:** Persistently review and audit logs.
- **Controls:** ac-2.4, ac-6.9, au-2, au-6, au-6.1, si-4, si-4.4
- **Agency Responsibility:**
  - Determine how often logs will be reviewed and audited

## Change Management Process

### KSI-AFR-SCN

- **Statement:** Determine how significant changes will be tracked and how all necessary parties will be notified in alignment with the FedRAMP Significant Change Notifications (SCN) process and persistently address all related requirements and recommendations.
- **Controls:** ca-7.4, cm-3.4, cm-4, cm-7.1, au-5, ca-5, ca-7, ra-5, ra-5.2, sa-22, si-2, si-2.2, si-3, si-5, si-7.7, si-10, si-11
- **Agency Responsibility:**
  - Incorporate change notifications provided by the Cloud Service Provider into Agency change management solutions.

### KSI-CMT-LMC

- **Statement:** Log and monitor modifications to the cloud service offering.
- **Controls:** au-2, cm-3, cm-3.2, cm-4.2, cm-6, cm-8.3, ma-2
- **Agency Responsibility:**
  - Integrate change logs from the Cloud Service Provider into Agency change management solutions.

## Incident Response Process

### KSI-INR-AAR

- **Statement:** Generate incident after action reports and persistently incorporate lessons learned.
- **Controls:** ir-3, ir-4, ir-4.1, ir-8
- **Agency Responsibility:**
  - Determine when and how to conduct after action analysys for Cloud Service incidents.

### KSI-INR-RIR

- **Statement:** Persistently review the effectiveness of documented incident response procedures.
- **Controls:** ir-4, ir-4.1, ir-6, ir-6.1, ir-6.3, ir-7, ir-7.1, ir-8, ir-8.1, si-4.5
- **Agency Responsibility:**
  - Include CLoud service incident response procedures in reviews of agency incident response plans.

### KSI-INR-RPI

- **Statement:** Persistently review past incidents for patterns or vulnerabilities.
- **Controls:** ir-3, ir-4, ir-4.1, ir-5, ir-8
- **Agency Responsibility:**
  - Determine when and how to conduct after action analysys for Cloud Service incidents.

### KSI-RPL-TRC

- **Statement:** Persistently test the capability to recover from incidents and contingencies, including alignment with defined recovery objectives.
- **Controls:** cp-2.1, cp-2.3, cp-4, cp-4.1, cp-6, cp-6.1, cp-9.1, cp-10, ir-3, ir-3.2
- **Agency Responsibility:**
  - Include cloud service failures in incident table top and other incident tests.

## None

### KSI-AFR-ADS

- **Statement:** Determine how authorization data will be shared with all necessary parties in alignment with the FedRAMP Authorization Data Sharing (ADS) process and persistently address all related requirements and recommendations.
- **Controls:** ac-3, ac-4, au-2, au-3, au-6, ca-2, ir-4, ra-5, sc-8
- **Agency Responsibility:**

### KSI-AFR-MAS

- **Statement:** Apply the FedRAMP Minimum Assessment Scope (MAS) to identify and document the scope of the cloud service offering to be assessed for FedRAMP authorization and persistently address all related requirements and recommendations.
- **Controls:** ac-1, ac-21, at-1, au-1, ca-1, cm-1, cp-1, cp-2.1, cp-2.8, cp-4.1, ia-1, ir-1, ma-1, mp-1, pe-1, pl-1, pl-2, pl-4, pl-4.1, ps-1, ra-1, ra-9, sa-1, sc-1, si-1, sr-1, sr-2, sr-3, sr-11
- **Agency Responsibility:**

### KSI-CED-DET

- **Statement:** Persistently review the effectiveness of role-specific training given to development and engineering staff that covers best practices for delivering secure software.
- **Controls:** cp-3, ir-2, ps-6
- **Agency Responsibility:**
  - None

### KSI-CED-RGT

- **Statement:** Persistently review the effectiveness of training given to all employees on policies, procedures, and security-related topics.
- **Controls:** at-2, at-2.2, at-2.3, at-3.5, at-4, ir-2.3
- **Agency Responsibility:**
  - None

### KSI-CED-RRT

- **Statement:** Persistently review the effectiveness of role-specific training given to staff involved with incident response or disaster recovery.
- **Controls:** None
- **Agency Responsibility:**
  - None

### KSI-CED-RST

- **Statement:** Persistently review the effectiveness of role-specific training given to employees in high risk roles, including at least roles with privileged access.
- **Controls:** at-2, at-2.3, at-3, sr-11.1
- **Agency Responsibility:**
  - None

### KSI-CMT-RMV

- **Statement:** Execute changes to machine-based information resources through redeployment of version controlled immutable resources rather than direct modification wherever reasonable.
- **Controls:** cm-2, cm-3, cm-5, cm-6, cm-7, cm-8.1, si-3
- **Agency Responsibility:**

### KSI-CMT-RVP

- **Statement:** Persistently review the effectiveness of documented change management procedures.
- **Controls:** cm-3, cm-3.2, cm-3.4, cm-5, cm-7.1, cm-9
- **Agency Responsibility:**

### KSI-CMT-VTD

- **Statement:** Automate persistent testing and validation of changes throughout deployment.
- **Controls:** cm-3, cm-3.2, cm-4.2, si-2
- **Agency Responsibility:**

### KSI-CNA-DFP

- **Statement:** Strictly define the functionality and privileges for infrastructure and services.
- **Controls:** cm-2, si-3
- **Agency Responsibility:**

### KSI-CNA-EIS

- **Statement:** Use automated services to persistently assess the security posture of all machine-based information resources and automatically enforce their intended operational state.
- **Controls:** ca-2.1, ca-7.1
- **Agency Responsibility:**

### KSI-CNA-IBP

- **Statement:** Persistently ensure cloud-native machine-based information resources are implemented based on the host provider's best practices and documented guidance.
- **Controls:** ac-17.3, cm-2, pl-10
- **Agency Responsibility:**
  - None

### KSI-CNA-MAT

- **Statement:** Persistently ensure machine-based information resources have a minimal attack surface and that lateral movement is minimized if compromised.
- **Controls:** ac-17.3, ac-18.1, ac-18.3, ac-20.1, ca-9, sc-7.3, sc-7.4, sc-7.5, sc-7.8, sc-8, sc-10, si-10, si-11, si-16
- **Agency Responsibility:**
  - None

### KSI-CNA-OFA

- **Statement:** Appropriately optimize machine-based information resources for high availability and rapid recovery.
- **Controls:** None
- **Agency Responsibility:**
  - None

### KSI-CNA-RNT

- **Statement:** Persistently ensure all machine-based information resources are configured to limit inbound and outbound network traffic.
- **Controls:** ac-17.3, ca-9, cm-7.1, sc-7.5, si-8
- **Agency Responsibility:**
  - None

### KSI-CNA-RVP

- **Statement:** Persistently review the effectiveness of protection against denial of service attacks and other unwanted activity.
- **Controls:** sc-5, si-8, si-8.2
- **Agency Responsibility:**
  - None

### KSI-CNA-ULN

- **Statement:** Use logical networking and related capabilities to enforce traffic flow controls.
- **Controls:** ac-12, ac-17.3, ca-9, sc-4, sc-7, sc-7.7, sc-8, sc-10
- **Agency Responsibility:**
  - None

### KSI-IAM-JIT

- **Statement:** Use a least-privileged, role and attribute-based, and just-in-time security authorization model for all user and non-user accounts and services.
- **Controls:** ac-2, ac-2.1, ac-2.2, ac-2.3, ac-2.4, ac-2.6, ac-3, ac-4, ac-5, ac-6, ac-6.1, ac-6.2, ac-6.5, ac-6.7, ac-6.9, ac-6.10, ac-7, ac-20.1, ac-17, au-9.4, cm-5, cm-7, cm-7.2, cm-7.5, cm-9, ia-4, ia-4.4, ia-7, ps-2, ps-3, ps-4, ps-5, ps-6, ps-9, ra-5.5, sc-2, sc-23, sc-39
- **Agency Responsibility:**
  - None

### KSI-MLA-ALA

- **Statement:** Use a least-privileged, role and attribute-based, and just-in-time access authorization model for access to log data based on organizationally defined data sensitivity.
- **Controls:** si-11
- **Agency Responsibility:**
  - None

### KSI-MLA-EVC

- **Statement:** Persistently evaluate and test the configuration of machine-based information resources, especially infrastructure as code.
- **Controls:** ca-7, cm-2, cm-6, si-7.7
- **Agency Responsibility:**
  - None

### KSI-MLA-OSM

- **Statement:** Operate a Security Information and Event Management (SIEM) or similar system(s) for centralized, tamper-resistent logging of events, activities, and changes.
- **Controls:** ac-17.1, ac-20.1, au-2, au-3, au-3.1, au-4, au-5, au-6.1, au-6.3, au-7, au-7.1, au-8, au-9, au-11, ir-4.1, si-4.2, si-4.4, si-7.7
- **Agency Responsibility:**
  - None

### KSI-PIY-GIV

- **Statement:** Use authoritative sources to automatically generate real-time inventories of all information resources when needed.
- **Controls:** cm-2.2, cm-7.5, cm-8, cm-8.1, cm-12, cm-12.1, cp-2.8
- **Agency Responsibility:**
  - None

### KSI-PIY-RES

- **Statement:** Persistently review executive support for achieving the organization's security objectives.
- **Controls:** None
- **Agency Responsibility:**
  - None

### KSI-PIY-RIS

- **Statement:** Persistently review the effectiveness of the organization's investments in achieving security objectives.
- **Controls:** ac-5, ca-2, cp-2.1, cp-4.1, ir-3.2, pm-3, sa-2, sa-3, sr-2.1
- **Agency Responsibility:**
  - None

### KSI-PIY-RSD

- **Statement:** Persistently review the effectiveness of building security and privacy considerations into the Software Development Lifecycle and aligning with CISA Secure By Design principles.
- **Controls:** ac-5, au-3.3, cm-3.4, pl-8, pm-7, sa-3, sa-8, sc-4, sc-18, si-10, si-11, si-16
- **Agency Responsibility:**
  - None

### KSI-PIY-RVD

- **Statement:** Persistently review the effectiveness of the provider's vulnerability disclosure program.
- **Controls:** ra-5.11
- **Agency Responsibility:**
  - None

### KSI-RPL-ABO

- **Statement:** Persistently review the alignment of machine-based information resource backups with defined recovery objectives.
- **Controls:** cm-2.3, cp-6, cp-9, cp-10, cp-10.2, si-12
- **Agency Responsibility:**
  - None

### KSI-RPL-ARP

- **Statement:** Persistently review the alignment of recovery plans with defined recovery objectives.
- **Controls:** cp-2, cp-2.1, cp-2.3, cp-4.1, cp-6, cp-6.1, cp-6.3, cp-7, cp-7.1, cp-7.2, cp-7.3, cp-8, cp-8.1, cp-8.2, cp-10, cp-10.2
- **Agency Responsibility:**
  - None

### KSI-RPL-RRO

- **Statement:** Persistently review desired Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).
- **Controls:** cp-2.3, cp-10
- **Agency Responsibility:**
  - None

### KSI-SCR-MIT

- **Statement:** Persistently identify, review, and mitigate potential supply chain risks.
- **Controls:** ac-20, ra-3.1, sa-9, sa-10, sa-11, sa-15.3, sa-22, si-7.1, sr-5, sr-6, ca-7.4, sc-18
- **Agency Responsibility:**
  - None

### KSI-SCR-MON

- **Statement:** Automatically monitor third party software information resources for upstream vulnerabilities using mechanisms that may include contractual notification requirements or active monitoring services.
- **Controls:** ac-20, ca-3, ir-6.3, ps-7, ra-5, sa-9, si-5, sr-5, sr-6, sr-8
- **Agency Responsibility:**
  - None

### KSI-SVC-ACM

- **Statement:** Manage configuration of machine-based information resources using automation.
- **Controls:** ac-2.4, cm-2, cm-2.2, cm-2.3, cm-6, cm-7.1, pl-9, pl-10, sa-5, si-5, sr-10
- **Agency Responsibility:**
  - None

### KSI-SVC-EIS

- **Statement:** Implement improvements based on persistent evaluation of information resources for opportunities to improve security.
- **Controls:** cm-7.1, cm-12.1, ma-2, pl-8, sc-7, sc-39, si-2.2, si-4, sr-10
- **Agency Responsibility:**
  - None

### KSI-SVC-PRR

- **Statement:** Persistently review plans, procedures, and the state of information resources after making changes to limit and remove unwanted residual elements that would likely negatively affect the confidentiality, integrity, or availability of federal customer data.
- **Controls:** sc-4
- **Agency Responsibility:**
  - None

### KSI-SVC-RUD

- **Statement:** Remove unwanted federal customer data promptly when requested by an agency in alignment with customer agreements, including from backups if appropriate; this typically applies when a customer spills information or when a customer seeks to remove information from a service due to a change in usage.
- **Controls:** si-12.3, si-18.4
- **Agency Responsibility:**
  - None

### KSI-SVC-SNT

- **Statement:** Encrypt or otherwise secure network traffic.
- **Controls:** ac-1, ac-17.2, cp-9.8, sc-8, sc-8.1, sc-13, sc-20, sc-21, sc-22, sc-23
- **Agency Responsibility:**
  - None

### KSI-SVC-VCM

- **Statement:** Persistently validate the authenticity and integrity of communications between machine-based information resources using automation.
- **Controls:** sc-23, si-7.1
- **Agency Responsibility:**
  - None

### KSI-SVC-VRI

- **Statement:** Use cryptographic methods to validate the integrity of machine-based information resources.
- **Controls:** cm-2.2, cm-8.3, sc-13, sc-23, si-7, si-7.1, sr-10
- **Agency Responsibility:**
  - None

## Secret Management Process

### KSI-IAM-SNU

- **Statement:** Enforce appropriately secure authentication methods for non-user accounts and services.
- **Controls:** ac-2, ac-2.2, ac-4, ac-6.5, ia-3, ia-5.2, ra-5.5
- **Agency Responsibility:**
  - Ensure that secrets such as API keys or digital certificates are stored securely and are not accessible to anyone other than the intended recipient. .

### KSI-SVC-ASM

- **Statement:** Automate management, protection, and regular rotation of digital keys, certificates, and other secrets.
- **Controls:** ac-17.2, ia-5.2, ia-5.6, sc-12, sc-17
- **Agency Responsibility:**
  - Ensure that secrets such as API keys or digital certificates are rotated regularly.

## Single Sign-On Process

### KSI-IAM-APM

- **Statement:** Use secure passwordless methods for user authentication and authorization when feasible, otherwise enforce strong passwords with MFA for authentication.
- **Controls:** ac-2, ac-3, ia-2.1, ia-2.2, ia-2.8, ia-5.1, ia-5.2, ia-5.6, ia-6
- **Agency Responsibility:**
  - None

### KSI-IAM-MFA

- **Statement:** Enforce multi-factor authentication (MFA) using methods that are difficult to intercept or impersonate (phishing-resistant MFA) for all user authentication.
- **Controls:** ac-2, ia-2, ia-2.1, ia-2.2, ia-2.8, ia-5, ia-8, sc-23
- **Agency Responsibility:**
  - None
