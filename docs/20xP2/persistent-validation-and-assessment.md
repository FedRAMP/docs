# Persistent Validation and Assessment

FedRAMP 20x is built around the core concept that secure cloud service providers will persistently and automatically validate that their security decisions and policies are being implemented as expected within their cloud service offering. The activities of a secure service should be intentional, documented, and in a state that is always known and understood by the provider.

Secure providers will design their business processes and technical procedures to maximize the use of automation, persistent validation, and reporting across the entirety of their cloud service offering. This reduces cost by increasing efficiency, enables fast agile delivery of new capabilities and prevents unintended drift between the deployed cloud service offering and the business goals for the offering. Secure providers leverage automated and independent audits to evaluate the validity and effectiveness of their secure practices.

All FedRAMP 20x Authorized providers are expected to implement persistent validation programs as part of their core engineering workflow. These programs should be optimized to deliver value to the provider and their engineering teams first and foremost, though agencies and other customers will benefit from the improved security and insight resulting from high quality persistent validation programs.

To obtain and maintain a FedRAMP 20x authorization, providers will be required to have their persistent validation programs assessed regularly for effectiveness and completeness.

??? success "Effective Date(s) & Overall Applicability"
    - **Release:** 25.11A DRAFT
    - **Published:** 2025-11-17
    - **Designator:** PVA
    - **Description:** THIS IS A DRAFT AND IS NOT FINALIZED, USE AT YOUR OWN RISK. Initial DRAFT release.
    ---
    - **FedRAMP 20x**:
        - This release is effective **2025-11-17** for **20x**.
        - This policy applies to all FedRAMP 20x authorizations.
        - Phase One Pilot participants have one year from authorization to fully implement this standard but must demonstrate continuous quarterly progress.
        - Phase Two Pilot participants must demonstrate significant progress towards implementing this standard prior to submission for authorization review.
    - **FedRAMP Rev5**:
        - This standard DOES NOT apply to FedRAMP Rev5 authorizations.

??? abstract "Background & Authority"
    - [OMB Circular A-130: Managing Information as a Strategic Resource](https://whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) defines continuous monitoring as &quot;maintaining ongoing awareness of information security, vulnerabilities, threats, and incidents to support agency risk management decisions.&quot;
    - [The FedRAMP Authorization Act (44 USC § 3609 (a) (7))](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) directs the Administrator of the General Services Administration to &quot;coordinate with the FedRAMP Board, the Director of the Cybersecurity and Infrastructure Security Agency, and other entities identified by the Administrator, with the concurrence of the Director and the Secretary, to establish and regularly update a framework for continuous monitoring...&quot;

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements and recommendations apply ALWAYS to ALL FedRAMP Authorized cloud services and those seeking authorization based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-PVA-01

!!! quote ""
    Providers MUST _persistently_ perform validation of their Key Security Indicators following the processes and cycles documented for their _cloud service offering_ per FRR-KSI-02; this process is called _persistent validation_ and is part of _vulnerability detection_.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-02

!!! quote ""
    Providers MUST treat failures detected during _persistent validation_ and failures of the _persistent validation_ process as _vulnerabilities_, then follow the requirements and recommendations in the FedRAMP Vulnerability Detection and Response Standard for such findings.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-03

!!! quote ""
    Providers MUST include _persistent validation_ activity in the reports on _vulnerability detection_ and _response_ activity required by the FedRAMP Vulnerability Detection and Response Standard.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-04

!!! quote ""
    Providers MUST track _significant changes_ that impact their Key Security Indicator goals and _validation_ processes while following the requirements and recommendations in the FedRAMP Significant Change Notification Standard; if such _significant changes_ are not properly tracked and supplied to _all necessary assessors_ then a full _Initial FedRAMP Assessment_ may be required in place of the expected _Persistent FedRAMP Assessment_.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-05

!!! quote ""
    Providers MUST have the implementation of their goals and validation processes assessed by a FedRAMP-recognized independent assessor OR by FedRAMP directly AND MUST include the results of this assessment in their _authorization data_ without modification.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-06

!!! quote ""
    Providers MUST ensure a complete assessment of _validation_ procedures (including underlying code, pipelines, configurations, automation tools, etc.) for the _cloud service offering_ by _all necessary assessors_.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-07

!!! quote ""
    Providers SHOULD provide technical explanations, demonstrations, and other relevant supporting information to _all necessary assessors_ for the technical capabilities they employ to meet Key Security Indicators and to provide _validation_.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-08

!!! quote ""
    Providers MAY ask for and accept advice from their assessor during assessment regarding techniques and procedures that will improve their security posture or the effectiveness, clarity, and accuracy of their _validation_ and reporting procedures for Key Security Indicators, UNLESS doing so might compromise the objectivity and integrity of the assessment (see also FRR-PVA-09).

    **Note:** The related A2LA requirements are waived for FedRAMP 20x Phase Two assessments.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-09

!!! quote ""
    Assessors MAY share advice with providers they are assessing about techniques and procedures that will improve their security posture or the effectiveness, clarity, and accuracy of their _validation_ and reporting procedures for Key Security Indicators, UNLESS doing so might compromise the objectivity and integrity of the assessment (see also FRR-PVA-08).


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-10

!!! quote ""
    Assessors MUST evaluate the underlying processes (both _machine-based_ and non-_machine-based_) that providers use to _validate_ Key Security Indicators; this evaluation should include at least:

    1. The effectiveness, completeness, and integrity of the automated processes that perform validation of the _cloud service offering&#x27;s_ security posture.

    1. The effectiveness, completeness, and integrity of the human processes that perform _validation_ of the _cloud service offering&#x27;s_ security posture

    1. The coverage of these processes within the _cloud service offering_, including if all of the consolidated _information resources_ listed are being _validated_.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-11

!!! quote ""
    Assessors MUST evaluate the implementation of processes derived from Key Security Indicators to determine whether or not the provider has accurately documented their process and goals.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-12

!!! quote ""
    Assessors MUST evaluate whether or not the underlying processes are consistently creating the desired security outcome documented by the provider.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-13

!!! quote ""
    Assessors MUST perform evaluation using a combination of quantitative and expert qualitative assessment as appropriate AND document which is applied to which aspect of the assessment.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-14

!!! quote ""
    Assessors SHOULD engage provider experts in discussion to understand the decisions made by the provider and inform expert qualitative assessment, and SHOULD perform independent research to test such information as part of the expert qualitative assessment process.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-15

!!! quote ""
    Assessors MUST NOT rely on screenshots, configuration dumps, or other static output as evidence EXCEPT when evaluating the accuracy and reliability of a process that generates such artifacts.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-16

!!! quote ""
    Assessors MUST assess whether or not procedures are consistently followed, including the processes in place to ensure this occurs, without relying solely on the existence of a procedure document for assessing if appropriate processes and procedures are in place.

    **Note:** Note: This includes evaluating tests or plans for activities that may occur in the future but have not yet occurred.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-17

!!! quote ""
    Assessors MUST deliver a high-level summary of their assessment process and findings for each Key Security Indicator; this summary will be included in the _authorization data_ for the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-PVA-18

!!! quote ""
    Assessors MUST NOT deliver an overall recommendation on whether or not the _cloud service offering_ meets the requirements for FedRAMP authorization.

    **Note:** FedRAMP will make the final authorization decision based on the assessor&#x27;s findings and other relevant information.


    **Applies to:** Low, Moderate, High
    

---   

        
## Timeframes - Low

!!! info ""
    This section provides guidance on timeframes that apply specifically to FedRAMP Low authorizations for activities required or recommended in this standard; these timeframes are thresholds that secure providers should consistently strive to exceed by significant margins.

### FRR-PVA-TF-LO-01

!!! quote ""
    Providers MUST complete the _validation_ processes for Key Security Indicators of non-_machine-based_ _information resources_ at least once every 3 months.


    **Applies to:** Low
    

### FRR-PVA-TF-LO-02

!!! quote ""
    Providers MUST complete the _validation_ processes for Key Security Indicators of _machine-based_ _information resources_ at least once every 7 days.


    **Applies to:** Low
    

---   

        
## Timeframes - Moderate

!!! info ""
    This section provides guidance on timeframes that apply specifically to FedRAMP Moderate authorizations for activities required or recommended in this standard; these timeframes are thresholds that secure providers should consistently strive to exceed by significant margins.

### FRR-PVA-TF-MO-01

!!! quote ""
    Providers MUST complete the _validation_ processes for Key Security Indicators of non-_machine-based_ _information resources_ at least once every 3 months.


    **Applies to:** Moderate
    

### FRR-PVA-TF-LM-02

!!! quote ""
    Providers MUST complete the _validation_ processes for Key Security Indicators of _machine-based_ _information resources_ at least once every 3 days.


    **Applies to:** Moderate
    

---   








