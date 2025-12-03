# System Security Plan (SSP)

The SSP is the “security blueprint” for the CSO. A well-written SSP allows the reviewer to follow between the system’s architecture, data flows, security control implementations, and authorization boundary. After reviewing the SSP, a federal agency AO (or designee) should have a strong understanding of how federal data is transmitted to, from, and within the system; where the data is processed and stored; and how the data is protected from a process and technical perspective.  
FedRAMP provides a [single SSP template](https://www.fedramp.gov/assets/resources/templates/FedRAMP-High-Moderate-Low-LI-SaaS-Baseline-System-Security-Plan-\(SSP\).docx) that must be used for each baseline: [LI-SaaS,](https://www.fedramp.gov/assets/resources/templates/FedRAMP-SSP-Low-Baseline-Template.docx) Low, Moderate, and High. Specific controls are documented in Appendix A for each baseline. 

| When drafting the SSP, keep in mind that it is telling a story about the security of your CSO. If there are gaps in the storyline, you will be required to address the gaps, which can delay the authorization process. |
| :---- |

# **Getting Started: Focus on Quality**

| A high-quality SSP is the key to success. If you do not have a strong technical writer with security experience on your team, hire one\! Though it is not required, CSPs often choose to hire an experienced advisory partner to help develop the SSP. Many of the FedRAMP recognized 3PAOs, listed on the FedRAMP Marketplace, provide advisory services in addition to assessment services. NOTE: If engaging a 3PAO advisor, a different 3PAO must be engaged to perform the independent assessment. |
| :---- |

A common barrier to success is a poorly written, incomplete, inaccurate, and/or inconsistent SSP. FedRAMP has defined general criteria for document acceptance in **Table 3** below. **NOTE**: With the release of [NIST SP 800-53 Revision 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) and [OMB-24-15](https://bidenwhitehouse.archives.gov/omb/management/ofcio/m-24-15-modernizing-the-federal-risk-and-authorization-management-program-fedramp/), FedRAMP made several changes to the FedRAMP templates referenced in this training module; however, the key information and best practices intended to help you put forward a quality package is still relevant. FedRAMP will be updating this module in the future to better align with the updated templates. Further guidance and expectations, associated with effective control writing, is provided later in this section.

***Table 3\. Criteria for Document Acceptance***

| Criteria | Description |
| ----- | ----- |
| **Clarity** | Logical presentation of material Current dates and timely content Non-standard terms, phrases, acronyms, and abbreviations defined No ambiguous statements or content Correct grammar and free from awkward phrases, typographical errors, spelling errors, missing words, or incorrect page and section numbers Readable figure text Sharp and legible figure graphics |
| **Completeness** | Includes accurate, detailed, and informative content that is consistent with FedRAMP requirements Includes all appropriate sections of FedRAMP templates Includes all attachments and appendices Includes tables of contents, list of tables, and list of figures, where applicable Includes figures with required information, correct labels, and keys to color and line formats |
| **Conciseness** | Content and complexity relevant to the audience No superfluous words or phrases |
| **Consistency** | Correct and consistent format Correct and continuous section numbering Terms with the same meaning throughout the document Items that are referred to by the same name or description throughout the document Level of detail and presentation style that are the same throughout the document Material that does not contradict predecessor documents All material in subsequent documents based in the predecessor document Figure content that agrees with text |

# **Moving on: Writing the SSP**

The SSP includes general information about the CSO (e.g., FIPS 199 categorization, service model, deployment model) as well as detailed descriptions of the CSO’s function, system architecture, authorization boundary, data flows, interconnections, leveraged external services, and use of cryptographic modules. Each section includes instructional text describing the level of detail that is required. Failure to follow these instructions will slow down the review and extend the authorization timeline. 

# **Define the Authorization Boundary and Data Flows**

Before implementing and documenting security controls, CSPs must clearly define the authorization boundary for the CSO. The authorization boundary provides the reviewer with a clear understanding of what exactly is being authorized, and is the foundation on which the remainder of a SSP is built. The authorization boundary is validated against the inventory during the 3PAO assessment. 

The authorization boundary diagram (ABD) is a visual representation of the system services, components, and devices that make up the authorization boundary for the CSO. To help federal agency AOs understand areas that may require risk-acceptance, or areas where the federal agency has responsibility (i.e., everything excluded from the authorization boundary), the ABD also depicts all *external* systems or services that provide functionality to the CSO or are used to manage and operate the CSO. This includes underlying authorized IaaS/PaaS offerings, system interconnections, APIs, external cloud services, corporate-shared services, and update services (e.g., malware signatures and OS updates). 

To properly define the authorization boundary, CSPs need to understand how and where federal data and metadata flow through and within the CSO. To that end, CSPs should begin by developing data flow diagrams (DFDs) that depict how federal data and sensitive system data flows internal and external to the CSO.  
To understand how to define the authorization boundary, CSPs must review the [FedRAMP Authorization Boundary Guidance](https://www.fedramp.gov/resources/documents/CSP_A_FedRAMP_Authorization_Boundary_Guidance.pdf). To understand the level of detail that must be provided in the ABD, DFD and network diagram, carefully review the instructional text in section 8 of the SSP, *Illustrated Architecture and Narratives*.

# **SSP Appendices**

**Table 4** summarizes the required appendices for a complete SSP. CSPs should understand the information required to complete each document and, where applicable, align and update existing organizational policy and processes to meet requirements outlined in the SSP appendices (e.g., Appendix I: Incident Response Plan, Appendix H: Configuration Management Plan, etc.). Instructions for each appendix are included within the SSP template; however, detailed guidance on how to properly document security controls is provided in the sections that follow.  
***Table 4\. SSP Appendices***

|  |
| :---- |
| [Appendix A: FedRAMP Security Controls](https://www.fedramp.gov/resources/templates/SSP-Appendix-A-High-FedRAMP-Security-Controls.docx)\* Appendix B: Related Acronyms Appendix C: Security Policies and Procedures Appendix D: User Guide Appendix E: Digital Identity Worksheet [Appendix F: Rules of Behavior\*](https://www.fedramp.gov/resources/templates/SSP-Appendix-F-Rules-of-Behavior-\(RoB\)-Template.docx) [Appendix G: Information System Contingency Plan (ICSP)\*](https://www.fedramp.gov/resources/templates/SSP-Appendix-G-Information-System-Contingency-Plan-\(ISCP\)-Template.docx) Appendix H: Configuration Management Plan (CMP) Appendix I: Incident Response Plan (IRP) [Appendix J: CIS and CRM Workbook\*](https://www.fedramp.gov/resources/templates/SSP-Appendix-J-CSO-CIS-and-CRM-Workbook.xlsx) Appendix K: FIPS 199 Worksheet Appendix L: CSO-Specific Required Laws and Regulations [Appendix M: Integrated Inventory Workbook\*](https://www.fedramp.gov/resources/templates/SSP-Appendix-M-Integrated-Inventory-Workbook-Template.xlsx) Appendix N: Continuous Monitoring Plan [Appendix O: POA\&M\*](https://www.fedramp.gov/resources/templates/FedRAMP-POAM-Template.xlsx) Appendix P: Supply Chain Risk Management Plan (SCRMP) [Appendix Q: Cryptographic Modules Table\*](https://www.fedramp.gov/resources/templates/SSP-Appendix-Q-Cryptographic-Modules-Table.docx)    |

*\*Document must be submitted in FedRAMP-provided template*

## SSP Appendix A: FedRAMP Security Controls 

The FedRAMP-provided SSP appendix A template is used to document the security control implementations for the CSO. A separate appendix A template is provided for each impact level: LI-SaaS, Low, Moderate, High. CSPs must use the template that corresponds to the CSO’s impact level.   
This section provides guidance on how to properly document security controls in appendix A.  
Each and every control contains three sections: Control Requirement(s), Control Summary Information, and Control Implementation Statement. Guidance related to each section is provided below, along with a list of “Dos and Don’ts” to ensure success.

### Control Requirement

FedRAMP’s baselines are based on the National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53 catalog of security and privacy controls for federal information systems. Security controls may include a single requirement or may be broken down into several requirements.  
A requirement that begins with “The information system…” generally refers to a technical capability that must be in place. For example, IA-2(1) requires the information system to *implement multifactor authentication for access to privileged accounts.*  
A requirement that begins with “The organization…” generally refers to a process or procedure that must be in place. For example, IR-5 requires the organization to *track and document incidents*.  
Many control requirements include *parameters* that are defined by the CSP or defined by FedRAMP. Some controls also include additional FedRAMP requirements and/or guidance. Let’s use IR-6 as an example:

| IR-6 INCIDENT REPORTING Require personnel to report suspected incidents to the organizational incident response capability within \[FedRAMP Assignment: US-CERT incident reporting timelines as specified in NIST Special Publication 800-61 (as amended)\]; and *Hint: CSPs cannot define this parameter. FedRAMP requires CSPs to report an incident in accordance with US-CERT timelines.* Report incident information to \[Assignment: organization-defined authorities\]. *Hint: The organization (CSP) defines which authorities receive incident reports, but must also follow the reporting requirements defined in the FedRAMP Incident Communications Procedures.*  IR-6 Additional FedRAMP Requirements and Guidance: Requirement: Reports security incident information according to *FedRAMP Incident Communications Procedures*. |
| :---- |

### Control Summary Information

The FedRAMP SSP Appendix A template includes a control summary information table for each control. This table includes the following fields which must be completed by the CSP. The information in this table must be consistent with the control implementation statement (i.e., the control narrative) and the FedRAMP SSP Appendix J CIS and CRM Workbook.   
**Responsible Role:** The role (e.g., Database Administrator, Account Manager, ISSO) that can best respond to questions about the particular control. It is typically the role responsible for implementing, managing, and monitoring the control. Actual names of individuals should NOT be provided.

* **Parameter(s):** Enter the actual parameter value in the appropriate field. In the IR-6 example above, the Control Summary Information table would include two parameter fields for IR-6(a) and IR-6(b).  
* **Implementation Status:** At least one status must be selected for each control.  
  * For controls with multiple requirements, a CSP may need to select more than one status. For example, AC-8 requires the system to:  
    * (a) display a system use notification message before granting access to the system AND  
    * (b) retain the message on screen until the user acknowledges the usage conditions by taking an explicit action  
  * If the CSP has successfully implemented (a) but is still figuring out a way to implement (b), the CSP would select both “Implemented” and “Planned”.

| If any portion of a control is “Planned” or “Partially Implemented,” the control will be identified as “Other than Satisfied” during the 3PAO security assessment. |
| :---- |

* **Control Origination:** All controls originate from a system or from a business process. It is important to correctly describe the control origination so that it is clear who is responsible for implementing, managing, and monitoring the control. Definitions and examples for each control origination can be found in Table A-1, *Control Origination and Definitions*.  
  * If the system is inheriting a control from a FedRAMP Authorized IaaS/PaaS, select the “inherited” box and provide the name and FedRAMP ID of the underlying IaaS/PaaS along with the date of authorization. Controls can only be inherited from a pre-existing FedRAMP authorization. If the CSO is hosted in an IaaS/PaaS not authorized by FedRAMP, there is no leveraging/inheritance relationship. In this scenario, the CSP is responsible for the entire stack, and the underlying components must be defined as part of the CSO’s authorization boundary as system interconnections and external services.

| Control authors should clearly indicate which portions of the security control are inherited and provide a description of *what* is inherited. Authors do not need to describe *how* the leveraged system implemented the control. That detail is found in the authorization package of the leveraged system from which the control is inherited. Authors should write to their customer responsibilities for all controls that are not fully inherited. |
| :---- |

### Control Implementation Statement: What is the Solution and How is it Implemented?

The control implementation statement is the written narrative that describes what is implemented, how it's implemented, and who's responsible for it. Carefully read the control requirement(s) and ask yourself the following:

* Does the control implementation statement address each and every requirement defined in the control? For multi-part controls, the implementation statement should only address the requirements associated with that part.  
  * Every control part (Part a, Part b, Part c, etc.) should contain a focused discussion on the specific control requirement. Using the previous IR-6 example, the Part b narrative should describe the authorities that receive incident reports and nothing more. Focusing the narrative on the specific requirement(s) will help expedite the review process.  
* Is the implementation statement clear with no room for interpretation or confusion?  
* Does the implementation statement explicitly state whether or not the control requirement is satisfied?  
* Does the implementation statement clearly describe how the control is implemented? 


| NOTE: In some cases, describing the *how* is difficult because the answer may be complex or lengthy. In these cases, it is acceptable to describe the *how* at a high level and then point the reviewer to an external document for more detailed information. Although reviewers will have varying degrees of technical and security expertise, they will not have a deep understanding of your CSO. Therefore, remove all ambiguity and guesswork by explaining all system-specific terms, components, etc.  |
| :---- |

| TIP: Pay attention to the verbs in each of the control requirements. For example, IR-5 requires the CSP to *track* and *document* security incidents. In the control implementation statement for IR-5, CSPs must describe the process/tools employed to *track* incidents, as well as the process/tools employed to *document* incidents. To ensure that all control requirements are implemented and adequately addressed in the implementation statement, CSPs are encouraged to review the assessment objectives defined for each control in the FedRAMP Security Test Case Procedures template (SAP Appendix A). Templates for the LI-SaaS, Low, Moderate, and High baselines are available on the [Document & Templates](https://www.fedramp.gov/rev5/documents-templates/) page of the FedRAMP website. |
| :---- |

| TIP: For customer-provided, customer-configured, or shared controls, create a “Customer Responsibility” heading in the control implementation statement. Clearly describe what the customer is expected to do under this heading. You do not have to describe how the customer implements the requirement. |
| :---- |

Good control responses:

* Are clear and outline who, what, where, when, why and how a control is met with technical detail that reflects the systems current operational state;

* Are clear, concise, consistent throughout the document;

* Are complete, addressing the full requirement for all relevant components, staff, or resources; and 

* Are readable, relevant, and understandable. 

Bad control responses frequently:

* Simply restate the control requirement but fail to address the who, what, where, when, why and how;

* Are inconsistent across controls, such as referring to same components in different ways;

* Are incomplete, and fail to fully address all relevant components, staff, or resources in a response; and

* Include superfluous information and non-relevant information such as marketing language.

**Example:** 

If the control states: “**Ensure tires are safe, regularly inspected, properly maintained, and meet the requirements for your vehicle.”**

**A good response may be:**  
“I visually inspect the tires on my car every time I drive for signs of wear, damage, and proper inflation. I use a NIST-tracable pressure gauge, which I have calibrated yearly to check the tire pressure weekly. I take my car to an authorized mechanic and have the oil changed and the tires inspected and rotated every 5,000 miles. I have the dealer authorized mechanic replace tires that fail inspection, have a tread under 6/32 of an inch, or when they are over 6 years of age with a tire that meets the DOT specifications in the vehicles owner manual on page 45 for a vehicle driven on public roads.”

**A bad response may be:**  
“The tires on my car are best of breed, ultra high performance, and run flat. High performance tires are important because the car is very fast. Some people I know change the oil with 5-W20 high performance oil every 5,000 miles, which ensures that the tires are safe, inspected, and meet the requirements. Bad tires are replaced with other tires that are black and round. Also the car is Red with a black interior, and it has the DVD player accessory.”

###  Controls Do’s and Don'ts

| Do’s | Don'ts |
| ----- | ----- |
| **Do** ensure that all responsible roles are defined in Table 11.1, *Separation of Duties* in the SSP. **Do** complete all fields in the control summary information table and ensure the information is consistent with the control implementation statement. **Do** provide a rationale for “Not Applicable” (N/A) controls. Many CSPs mistakenly identify controls as N/A if the capability is not authorized for use. For example, many CSPs consider AC-2(2) to be N/A because temporary/emergency accounts are not used in the environment. FedRAMP considers this control to be applicable and requires the CSPs to reference the policy that prohibits the creation of temporary/emergency accounts and describe any technical controls in place to prevent the creation of and/or audit unauthorized accounts. **Do** include correct and consistent document titles when referencing other SSP appendices or external documents. If the entire referenced document does not apply, specific section references should be provided so the applicable sections can be located easily. Provide the filenames of all SSP appendices in Table 12.1 of the SSP template, SSP *Required Appendices.* This way, you only have to update the filename in one location. If referencing other external documents, use a standard naming convention, add the document name and filename, to Table 12.1 of the SSP, and upload the documents to the secure repository with the SSP package. NOTE: If an external document contains sensitive system information and cannot be uploaded to the secure repository, include a statement in Table 12.1 to the effect of, “this document contains sensitive system information, but can be provided upon request for audits and assessments.” | **Don’t** modify the control requirement text, including the parameter assignment instructions and additional FedRAMP requirements/guidance. CSP responses must be documented in the “Control Summary Information” and “What is the solution and how is it implemented?” tables. **Don’t** simply repeat or rephrase the control requirement when writing the control implementation statement. **Don’t** reference other controls instead of providing a written control narrative. Referencing related controls for *additional detail* is acceptable, but each control needs to stand on its own with a narrative that adequately addresses the control requirement(s). **Don’t** reference SSP appendices or external documents instead of providing a written control narrative. Referencing SSP appendices or external documents as *examples* or for *additional detail* is acceptable as long as the control narrative adequately addresses the control requirement(s). **Don’t** copy and paste implementation statements from one control to another. The implementation statement should address the specific control requirement(s). It should not contain content that isnot directly relevant to the control requirement.  |

### 