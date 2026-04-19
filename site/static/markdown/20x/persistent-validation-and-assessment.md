# Persistent Validation and Assessment

!!! info "Effective Date(s) & Overall Applicability for 20x"
      - **Required** (Phase 2 Pilot)
      - Phase 1 pilot authorizations have one year from authorization to fully address this process but must demonstrate continuous quarterly progress.
      - Phase 2 Pilot participants must demonstrate significant progress towards addressing this process prior to submission for authorization review.


??? abstract "Background & Authority"
    - [OMB Circular A-130: Managing Information as a Strategic Resource](https://whitehouse.gov/wp-content/uploads/legacydrupalfiles/omb/circulars/A130/a130revised.pdf) defines continuous monitoring as &quot;maintaining ongoing awareness of information security, vulnerabilities, threats, and incidents to support agency risk management decisions.&quot;
    - [The FedRAMP Authorization Act (44 USC § 3609 (a) (7))](https://fedramp.gov/docs/authority/law/#a-roles-and-responsibilities) directs the Administrator of the General Services Administration to &quot;coordinate with the FedRAMP Board, the Director of the Cybersecurity and Infrastructure Security Agency, and other entities identified by the Administrator, with the concurrence of the Director and the Secretary, to establish and regularly update a framework for continuous monitoring...&quot;

FedRAMP 20x is built around the core concept that secure cloud service providers will persistently and automatically validate that their security decisions and policies are being implemented as expected within their cloud service offering. The activities of a secure service should be intentional, documented, and in a state that is always known and understood by the provider.

Secure providers will design their business processes and technical procedures to maximize the use of automation, persistent validation, and reporting across the entirety of their cloud service offering. This reduces cost by increasing efficiency, enables fast agile delivery of new capabilities and prevents unintended drift between the deployed cloud service offering and the business goals for the offering. Secure providers leverage automated and independent audits to evaluate the validity and effectiveness of their secure practices.

All FedRAMP 20x Authorized providers are expected to implement persistent validation programs as part of their core engineering workflow. These programs should be optimized to deliver value to the provider and their engineering teams first and foremost, though agencies and other customers will benefit from the improved security and insight resulting from high quality persistent validation programs.

To obtain and maintain a FedRAMP 20x authorization, providers will be required to have their persistent validation programs assessed regularly for effectiveness and completeness.

---


## 20x-Specific Provider Responsibilities

These requirements and recommendations apply to all cloud service offerings following the 20x path. 

### Persistent Validation

??? abstract "PVA-CSX-VAL"

    **Former ID:** FRR-PVA-01

    **Changelog:**

    - **2026-02-04:** Clarified; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST persistently perform validation of their Key Security Indicators; this process is called persistent validation and is part of vulnerability detection.


    ---
    **Terms:** [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }, [Persistently](fedramp-definitions/#persistently){ data-preview }, [Vulnerability](fedramp-definitions/#vulnerability){ data-preview }, [Vulnerability Detection](fedramp-definitions/#vulnerability-detection){ data-preview }
  
### Issues As Vulnerabilities

??? abstract "PVA-CSX-FAV"

    **Former ID:** FRR-PVA-02

    **Changelog:**

    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST treat issues detected during persistent validation and failures of the persistent validation process as vulnerabilities, then follow the requirements and recommendations in the FedRAMP Vulnerability Detection and Response process for such findings.


    ---
    **Terms:** [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }, [Persistently](fedramp-definitions/#persistently){ data-preview }, [Vulnerability](fedramp-definitions/#vulnerability){ data-preview }, [Vulnerability Detection](fedramp-definitions/#vulnerability-detection){ data-preview }, [Vulnerability Response](fedramp-definitions/#vulnerability-response){ data-preview }
  
### Report Persistent Validation

??? abstract "PVA-CSX-RPV"

    **Former ID:** FRR-PVA-03

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST include persistent validation activity in the reports on vulnerability detection and response activity required by the FedRAMP Vulnerability Detection and Response process.


    ---
    **Terms:** [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }, [Persistently](fedramp-definitions/#persistently){ data-preview }, [Vulnerability](fedramp-definitions/#vulnerability){ data-preview }, [Vulnerability Detection](fedramp-definitions/#vulnerability-detection){ data-preview }, [Vulnerability Response](fedramp-definitions/#vulnerability-response){ data-preview }
  
### Independent Verification and Validation

??? abstract "PVA-CSX-IVV"

    **Former ID:** FRR-PVA-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST have the implementation of their goals and validation processes assessed by a FedRAMP-recognized independent assessor OR by FedRAMP directly AND MUST include the results of this assessment in their authorization data without modification.

    ---

    _**Notes:**_

    - _The option for assessment by FedRAMP directly is limited to cloud services that are explicitly prioritized by FedRAMP, in consultation with the FedRAMP Board and the federal Chief Information Officers Council. During 20x Phase Two this includes AI services that meet certain criteria as shown at https://fedramp.gov/ai._
    - _FedRAMP recognized assessors are listed on the FedRAMP Marketplace._


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Non-Machine Validation

!!! abstract "PVA-CSX-NMV"



!!! quote ""

    Providers MUST complete the validation processes for Key Security Indicators of non-machine-based information resources at least once every 3 months.


    ---
    **Terms:** [Information Resource](fedramp-definitions/#information-resource){ data-preview }, [Machine-Based (information resources)](fedramp-definitions/#machine-based-information-resources){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Persistent Machine Validation

!!! abstract "PVA-CSX-PMV"



!!! quote ""

    === "Low"
        Providers MUST complete the validation processes for Key Security Indicators of machine-based information resources at least once every 7 days.


    === "Moderate"
        Providers MUST complete the validation processes for Key Security Indicators of machine-based information resources at least once every 3 days.


    === "High"
        Providers SHOULD plan for this requirement to be more frequent at 20x High but the anticipated requirements for this FRR have not yet been established for 20x High.




    ---
    **Terms:** [Information Resource](fedramp-definitions/#information-resource){ data-preview }, [Machine-Based (information resources)](fedramp-definitions/#machine-based-information-resources){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Provide Technical Evidence

??? abstract "PVA-CSX-PTE"

    **Former ID:** FRR-PVA-07

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD provide technical explanations, demonstrations, and other relevant supporting information to all necessary assessors for the technical capabilities they employ to meet Key Security Indicators and to provide validation.


    ---
    **Terms:** [All Necessary Assessors](fedramp-definitions/#all-necessary-assessors){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Receiving Advice

??? abstract "PVA-CSX-RAD"

    **Former ID:** FRR-PVA-08

    **Changelog:**

    - **2026-02-09:** Fixed incorrect reference to old FRR by changing PVA-TPX-AMA to PVA-TPX-SHA; no material changes.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MAY ask for and accept advice from their assessor during assessment regarding techniques and procedures that will improve their security posture or the effectiveness, clarity, and accuracy of their validation and reporting procedures for Key Security Indicators, UNLESS doing so might compromise the objectivity and integrity of the assessment (see also PVA-TPX-SHA).

    ---

    _**Note:** The related A2LA requirements are waived for FedRAMP 20x Phase Two assessments._


    ---
    **Terms:** [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
## 20x-Specific Assessor Responsibilities

These requirements and recommendations apply to all assessors performing verification and validation for the 20x path. 

### Underlying Processes

??? abstract "PVA-TPX-UNP"

    **Former ID:** FRR-PVA-10

    **Changelog:**

    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MUST verify and validate the underlying processes (both machine-based and non-machine-based) that providers use to validate Key Security Indicators; this should include at least:

    1. The effectiveness, completeness, and integrity of the automated processes that perform validation of the cloud service offering&#x27;s security posture.

    1. The effectiveness, completeness, and integrity of the human processes that perform validation of the cloud service offering&#x27;s security posture

    1. The coverage of these processes within the cloud service offering, including if all of the consolidated information resources listed are being validated.


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Information Resource](fedramp-definitions/#information-resource){ data-preview }, [Machine-Based (information resources)](fedramp-definitions/#machine-based-information-resources){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Processes Derived from Key Security Indicators

??? abstract "PVA-TPX-PDK"

    **Former ID:** FRR-PVA-11

    **Changelog:**

    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MUST verify and validate the implementation of processes derived from Key Security Indicators to determine whether or not the provider has accurately documented their process and goals.


    ---
    **Terms:** [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Outcome Consistency

??? abstract "PVA-TPX-OUC"

    **Former ID:** FRR-PVA-12

    **Changelog:**

    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MUST verify and validate whether or not the underlying processes are consistently creating the desired security outcome documented by the provider.


    ---
    **Terms:** [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  
### Mixed Methods Evaluation

??? abstract "PVA-TPX-MME"

    **Former ID:** FRR-PVA-13

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MUST perform evaluation using a combination of quantitative and expert qualitative assessment as appropriate AND document which is applied to which aspect of the assessment.


### Procedure Adherence

??? abstract "PVA-TPX-PAD"

    **Former ID:** FRR-PVA-16

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MUST assess whether or not procedures are consistently followed, including the processes in place to ensure this occurs, without relying solely on the existence of a procedure document for assessing if appropriate processes and procedures are in place.

    ---

    _**Note:** This includes evaluating tests or plans for activities that may occur in the future but have not yet occurred._


### Assessment Summary

??? abstract "PVA-TPX-SUM"

    **Former ID:** FRR-PVA-17

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MUST deliver a high-level summary of their assessment process and findings for each Key Security Indicator; this summary will be included in the authorization data for the cloud service offering.


    ---
    **Terms:** [Authorization data](fedramp-definitions/#authorization-data){ data-preview }, [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }
  
### Static Evidence

??? abstract "PVA-TPX-STE"

    **Former ID:** FRR-PVA-15

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MUST NOT rely on screenshots, configuration dumps, or other static output as evidence EXCEPT when evaluating the accuracy and reliability of a process that generates such artifacts.


### No Overall Recommendation

??? abstract "PVA-TPX-NOR"

    **Former ID:** FRR-PVA-18

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MUST NOT deliver an overall recommendation on whether or not the cloud service offering meets the requirements for FedRAMP authorization.

    ---

    _**Note:** FedRAMP will make the final authorization decision based on the assessor&#x27;s findings and other relevant information._


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }
  
### Provider Experts

??? abstract "PVA-TPX-PEX"

    **Former ID:** FRR-PVA-14

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors SHOULD engage provider experts in discussion to understand the decisions made by the provider and inform expert qualitative assessment, and SHOULD perform independent research to test such information as part of the expert qualitative assessment process.


### Sharing Advice

??? abstract "PVA-TPX-SHA"

    **Former ID:** FRR-PVA-09

    **Changelog:**

    - **2026-02-09:** Fixed incorrect reference to old FRR by changing PVA-CSX-RIA to PVA-CSX-RAD; no material changes.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Assessors MAY share advice with providers they are assessing about techniques and procedures that will improve their security posture or the effectiveness, clarity, and accuracy of their validation and reporting procedures for Key Security Indicators, UNLESS doing so might compromise the objectivity and integrity of the assessment (see also PVA-CSX-RAD).


    ---
    **Terms:** [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }
  

---  




