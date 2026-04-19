# Significant Change Notifications


!!! info "Effective Date(s) & Overall Applicability for Rev5"
      - **Optional** (Wide Release) beginning 2026-02-27.
      - Rev5 Authorized providers or those seeking FedRAMP authorization MAY adopt this process in place of the traditional FedRAMP Significant Change Request process after February 27, 2026.
      - Rev5 Authorized Providers who switch to the Significant Change Notification process MUST notify FedRAMP via the Sign-up Form.
      - Providers MUST address all requirements and recommendations in their authorization data - either in their System Security Plan with the appropriate controls or via an addendum.
      - It is up to providers to coordinate with their active agency customers to ensure agency customers will not be negatively impacted by the provider&#x27;s adoption of this process, while considering the benefits to their entire customer base.
      - Providers seeking FedRAMP authorization who plan to follow the Significant Change Notification process must clearly note this in their authorization package.
      - The FedRAMP Marketplace will eventually include a section that indicates if a cloud service offering is following this process.
      
      - **Sign-up Form:** [https://forms.gle/FRha8pVez6Ynngqq5](https://forms.gle/FRha8pVez6Ynngqq5)


??? abstract "Background & Authority"
    - [FedRAMP Authorization Act (44 USC § 3609 (a) (7))](https://fedramp.gov/docs/authority/law/#a-roles-and-responsibilities) directs the Administrator of the General Services Administration to &quot;coordinate with the FedRAMP Board, the Director of the Cybersecurity and Infrastructure Security Agency, and other entities identified by the Administrator, with the concurrence of the [OMB] Director and the [DHS] Secretary, to establish and regularly update a framework for continuous monitoring...&quot;
    - [OMB Memorandum M-24-15 on Modernizing FedRAMP](https://www.fedramp.gov/docs/authority/m-24-15) section VI states &quot;FedRAMP should seek input from CSPs and develop processes that enable CSPs to maintain an agile deployment lifecycle that does not require advance Government approval, while giving the Government the visibility and information it needs to maintain ongoing confidence in the FedRAMP-authorized system and to respond timely and appropriately to incidents.&quot;

The Significant Change Notification (SCN) process establishes conditions for FedRAMP authorized cloud service providers to make most significant changes without requiring advance government approval. Agency authorizing officials who authorize the use of FedRAMP authorized cloud services are expected to account for the risk of cloud service providers making changes to improve the service.

This process broadly identifies four types of significant changes, from least impactful to most impactful:
1. Routine Recurring
2. Adaptive
3. Transformative
4. Impact Categorization

These categories, and the resulting requirements, apply only to significant changes.

---



## FedRAMP&#x27;s Responsibilities

These requirements and recommendations apply to FedRAMP and may result in indirect application to cloud service providers.

### Corrective Action Plan Conditions

??? abstract "SCN-FRP-CAP"

    **Former ID:** FRR-SCN-EX-01

    **Changelog:**

    - **2026-02-04:** Moved to FRP; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    FedRAMP MAY require providers to delay significant changes beyond the standard Significant Change Notification period and/or submit significant changes for approval in advance as a condition of a formal FedRAMP Corrective Action Plan or other agreement.

    ---

    _**Note:** The circumstances and conditions of such a Corrective Action Plan will vary and be documented in the Correcive Action Plan._


    ---
    **Terms:** [Significant change](fedramp-definitions/#significant-change){ data-preview }
  
## General Provider Responsibilities

These requirements and recommendations apply to all cloud service offerings following the Significant Change Notification process.

### Evaluate Changes

??? abstract "SCN-CSO-EVA"

    

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST evaluate all potential significant changes to determine the type of significant change and apply the appropriate Significant Change Notification requirements and recommendations.

    1. Is it a significant change? --&gt; Continue evaluation and follow the Significant Change Notification process.

    1. If it is, is it an impact categorization change?  --&gt; This requires a new assessment and cannot be done under the Significant Change Notification process.

    1. If it is not, is it a routine recurring change? --&gt; Follow the Routine Recurring Change process (SCN-CSO-RTR).

    1. If it is not, is it a transformative change? --&gt; Follow the Transformative Change process (SCN-CSO-TRF).

    1. If it is not, then it is an adaptive change --&gt; Follow the Adaptive Change process (SCN-CSO-ADP).


    ---
    **Terms:** [Adaptive](fedramp-definitions/#adaptive){ data-preview }, [Impact Categorization](fedramp-definitions/#impact-categorization){ data-preview }, [Routine Recurring](fedramp-definitions/#routine-recurring){ data-preview }, [Significant change](fedramp-definitions/#significant-change){ data-preview }, [Transformative](fedramp-definitions/#transformative){ data-preview }
  
### Maintain Audit Records

??? abstract "SCN-CSO-MAR"

    **Former ID:** FRR-SCN-04

    **Changelog:**

    - **2026-02-20:** Clarified that this applies to SCN-CSO-EVA evaluation activities.
    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST maintain auditable records of the significant change evaluation activities required by SCN-CSO-EVA (Evaluate Changes) and make them available to FedRAMP.

    ---

    _**Note:** These audit records must be available to FedRAMP on request; these records do not need to be included in the authorization package by default._


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Significant change](fedramp-definitions/#significant-change){ data-preview }
  
### Required Information

??? abstract "SCN-CSO-INF"

    **Former ID:** FRR-SCN-09

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST include at least the following information in Significant Change Notifications:

    1. Service Offering FedRAMP ID

    1. Assessor Name (if applicable)

    1. Related POA&amp;M (if applicable)

    1. Significant Change type and explanation of categorization

    1. Short description of change

    1. Reason for change

    1. Summary of customer impact, including changes to services and customer configuration responsibilities

    1. Plan and timeline for the change, including for the verification, assessment, and/or validation of impacted Key Security Indicators or controls

    1. Copy of the business or security impact analysis

    1. Name and title of approver

    ---

    _**Note:** Structure of the information may vary depending on how the provider tracks this internally._


    ---
    **Terms:** [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }, [Significant change](fedramp-definitions/#significant-change){ data-preview }
  
### Historical Notifications

??? abstract "SCN-CSO-HIS"

    **Former ID:** FRR-SCN-05

    **Changelog:**

    - **2026-02-20:** Updated requirement to specify 12 months of retention to showcase historical performance.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST keep 12 months of historical Significant Change Notifications available with their authorization data.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Significant change](fedramp-definitions/#significant-change){ data-preview }
  
### Human and Machine-Readable

??? abstract "SCN-CSO-HRM"

    **Former ID:** FRR-SCN-08

    **Changelog:**

    - **2026-02-20:** Clarified wording and added note.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST make ALL Significant Change Notifications and related audit records available in human-readable and machine-readable formats.

    ---

    _**Note:** During the SCN beta, many cloud service providers met this requirement by using carefully structured and organized csv files to meet human-readable and machine-readable requirements simultaneously._


    ---
    **Terms:** [Machine-Readable](fedramp-definitions/#machine-readable){ data-preview }, [Significant change](fedramp-definitions/#significant-change){ data-preview }
  
### Additional Relevant Information

??? abstract "SCN-CSO-ARI"

    **Former ID:** FRR-SCN-10

    **Changelog:**

    - **2026-02-20:** Added note.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MAY include additional relevant information in Significant Change Notifications.

    ---

    _**Note:** This allows providers to convey whatever additional information they think is relevant without worrying about negative consequences from not following an exact template._


    ---
    **Terms:** [Significant change](fedramp-definitions/#significant-change){ data-preview }
  
### Notification Mechanisms

??? abstract "SCN-CSO-NOM"

    **Former ID:** FRR-SCN-07

    **Changelog:**

    - **2026-02-20:** Clarified wording and added notes.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MAY notify necessary parties in a variety of ways as long as the mechanism for notification is clearly documented in the authorization package and easily accessible.

    ---

    _**Notes:**_

    - _The sharing mechanism should be designed based on the needs of the provider and their customers and may vary between providers._
    - _The default sharing mechanism for most providers during the SCN beta was to send an email to agency customers and upload a copy of the notification to the provider&#x27;s secure sharing location._


### Emergency Changes

??? abstract "SCN-CSO-EMG"

    **Former ID:** FRR-SCN-EX-02

    **Changelog:**

    - **2026-02-20:** Clarified wording and added note.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MAY execute significant changes (including transformative changes) during an emergency or incident without meeting Significant Change Notification requirements in advance. In such emergencies, providers MUST follow all relevant procedures, notify all necessary parties, retroactively provide all Significant Change Notification materials, and complete appropriate assessment after the incident.

    ---

    _**Note:** Procedures for emergency changes should be documented in the authorization package._


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Incident](fedramp-definitions/#incident){ data-preview }, [Significant change](fedramp-definitions/#significant-change){ data-preview }, [Transformative](fedramp-definitions/#transformative){ data-preview }
  
## Routine Recurring Changes

These requirements and recommends apply to all routine recurring significant changes.

### No Notification Requirements

??? abstract "SCN-RTR-NNR"

    **Former ID:** FRR-SCN-RR-01

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD NOT make formal Significant Change Notifications for routine recurring changes; this type of change is exempted from the notification requirements of this process.

    ---

    _**Notes:**_

    - _Activities that match the routine recurring significant change type are performed regularly and routinely by cloud service providers to address flaws or vulnerabilities, address incidents, and generally perform the typical maintenance and service delivery changes expected during day-to-day operations._
    - _These changes leverage mature processes and capabilities to identify, mitigate, and remediate risks as part of the change. They are often entirely automated and may occur without human intervention, even though they have an impact on security of the service._
    - _If the activity does not occur regularly and routinely then it cannot be a significant change of this type (e.g., replacing all physical firewalls to remediate a vulnerability is obviously not regular or routine)._

    ??? tip "Tips on ongoing operations"

        **Key Tests:**

        - Routine care and feeding by staff during normal duties
        - No major impact to service availability
        - Does not require executive approval

        **Examples:**

        - Provisioning or deprovisioning capacity to support service elasticity
        - Changing or tuning performance configurations for instances or services
        - Updating and maintaining operational handling of information flows and protection across physical and logical networks (e.g., updating firewall rules)
        - Generating or refreshing API or access tokens

    ??? tip "Tips on vulnerability management"

        **Key Tests:**

        - Minor, incremental patching or updates
        - Significant refactoring or migration process NOT required
        - No breaking changes

        **Examples:**

        - Updating security service or endpoint signatures
        - Routine patching of devices, operating systems, software or libraries
        - Updating and deploying code that applies normal fixes and improvements as part of a regular development cycle
        - Vulnerability remediation activity that simply replaces a known-bad component(s) with a better version of the exact same thing, running in the exact same way with no changes to processes


    ---
    **Terms:** [Routine Recurring](fedramp-definitions/#routine-recurring){ data-preview }, [Significant change](fedramp-definitions/#significant-change){ data-preview }
  
## Adaptive Changes

These requirements and recommends apply to all adaptive significant changes.

### Notification Requirements

??? abstract "SCN-ADP-NTF"

    **Former ID:** FRR-SCN-AD-01

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST notify all necessary parties within 10 business days after finishing adaptive changes, also including the following information:

    1. Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)

    ---

    _**Notes:**_

    - _Activities that match the adaptive significant change type are a frequent and normal part of iteratively improving a service by deploying new functionality or modifying existing functionality in a way that is typically transparent to customers and does not introduce significant new security risks._
    - _In general, most changes that do not happen regularly will be adaptive changes. This change type deliberately covers a wide range of activities in a way that requires assessment and consideration._

    ??? tip "Tips on adaptive changes"

        **Key Tests:**

        - Requires minimal changes to security plans or procedures
        - Requires some careful planning and project management to implement, but does not rise to the level of planning required for transformative changes
        - Requires verification of existing functionality and secure configuration after implementation

        **Examples:**

        - Updates to operating systems, containers, virtual machines, software or libraries with known breaking changes, complex steps, or service disruption
        - Deploying larger than normal incremental feature improvements in code or libraries that are the work of multiple weeks of development efforts but are not considered a major new service
        - Changing cryptographic modules where the new module meets the same standards and characteristics of the former
        - Replacing a like-for-like component where some security plan or procedure adjustments are required (e.g., scanning tool or managed database swap)
        - Adding models to existing approved AI services without exposing federal customer data to new services


    ---
    **Terms:** [Adaptive](fedramp-definitions/#adaptive){ data-preview }, [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }
  
## Transformative Changes

These requirements and recommends apply to all transformative significant changes.

### Notification of Initial Plans

??? abstract "SCN-TRF-NIP"

    **Former ID:** FRR-SCN-TR-02

    **Changelog:**

    - **2026-02-26:** Add an explicit requirement to include a summary of any likely changes to risks that will result from the change.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST notify all necessary parties of initial plans for transformative changes at least 30 business days before starting transformative changes, including a summary of any likely security impacts or changes in risk.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Transformative](fedramp-definitions/#transformative){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }
  
### Notification of Final Plans

??? abstract "SCN-TRF-NFP"

    **Former ID:** FRR-SCN-TR-03

    **Changelog:**

    - **2026-02-26:** Clarified that any updates should be included in each new notification.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST notify all necessary parties of final plans for transformative changes at least 10 business days before starting transformative changes, including updates to all previously sent information.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Transformative](fedramp-definitions/#transformative){ data-preview }
  
### Notification After Finishing

??? abstract "SCN-TRF-NAF"

    **Former ID:** FRR-SCN-TR-04

    **Changelog:**

    - **2026-02-26:** Moved update from following information to direct statement.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST notify all necessary parties within 5 business days after finishing transformative changes, including updates to all previously sent information.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Transformative](fedramp-definitions/#transformative){ data-preview }
  
### Notification After Verification

??? abstract "SCN-TRF-NAV"

    **Former ID:** FRR-SCN-TR-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST notify all necessary parties within 5 business days after completing the verification, assessment, and/or validation of transformative changes, also including the following information:

    1. Updates to all previously sent information

    1. Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)

    1. Copy of the security assessment report (if applicable)


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }, [Transformative](fedramp-definitions/#transformative){ data-preview }
  
### Update Documentation

??? abstract "SCN-TRF-UPD"

    **Former ID:** FRR-SCN-TR-06

    **Changelog:**

    - **2026-02-20:** Added note.
    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST publish updated service documentation and other materials to reflect transformative changes within 30 business days after finishing transformative changes.

    ---

    _**Note:** This requirement is focused on service documentation like user guides, information listed in the marketplace, and other such materials; it does not require updating the system security plan or authorization package._


    ---
    **Terms:** [Transformative](fedramp-definitions/#transformative){ data-preview }
  
### Third-Party Review

??? abstract "SCN-TRF-TPR"

    **Former ID:** FRR-SCN-TR-01

    **Changelog:**

    - **2026-02-04:** Clarified wording; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD engage a third-party assessor to review the scope and impact of the planned change before starting transformative changes if human validation is necessary; such reviews SHOULD be limited to security decisions that require human validation.

    ---

    _**Note:** Activities that match the transformative significant change type are rare for a cloud service offering, adjusted for the size, scale, and complexity of the service. Small cloud service offerings may go years without transformative changes, while hyperscale providers may release multiple transformative changes per year._

    ??? tip "Tips on transformative changes"

        **Key Tests:**

        - Alters the service risk profile or require new or significantly different actions to address customer responsibilities
        - Requires significant new design, development and testing with discrete associated project planning, budget, marketing, etc.
        - Requires extensive updates to security assessments, documentation, and how a large number of security requirements are met and validated

        **Examples:**

        - The addition, removal, or replacement of a critical third party service that handles a significant portion of information (e.g., IaaS change)
        - Increasing the security categorization of a service within the offering that actively handles federal customer data (does NOT include impact change of entire offering - see impact categorization change)
        - Replacement of underlying management planes or paradigm shift in workload orchestration (e.g., bare-metal servers or virtual machines to containers, migration to kubernetes)
        - Datacenter migration where large amounts of federal customer data is moved across boundaries different from normal day-to-day operations
        - Adding a new AI-based capability that impacts federal customer data in a different way than existing services or capabilities (such as integrating a new third-party service or training on federal customer data)


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [Persistent Validation](fedramp-definitions/#persistent-validation){ data-preview }, [Significant change](fedramp-definitions/#significant-change){ data-preview }, [Transformative](fedramp-definitions/#transformative){ data-preview }
  


