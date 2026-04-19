# FedRAMP Security Inbox

!!! info "Effective Date(s) & Overall Applicability for 20x"
      - **Required** (Phase 2 Pilot)
      - Phase 1 pilot authorizations have one year from authorization to fully address this process but must demonstrate continuous quarterly progress.
      - Phase 2 Pilot participants must demonstrate significant progress towards addressing this process prior to submission for authorization review.


??? abstract "Background & Authority"
    - [OMB Memorandum M-24-15 on Modernizing FedRAMP](https://www.fedramp.gov/docs/authority/m-24-15) section VII (a) (17) states that GSA must &quot;position FedRAMP as a central point of contact to the commercial cloud sector for Government-wide communications or requests for risk management information concerning commercial cloud providers used by Federal agencies.&quot;

FedRAMP must have a reliable way to directly contact security and compliance staff operating all FedRAMP Authorized cloud service offerings without tracking individual contacts or maintaining provider-specific logins to customer support portals. These requirements for a FedRAMP Security Inbox apply to all cloud service providers to ensure this direct reliable path remains open, especially in the event of critical security issues.

All Emergency and Important messages sent by FedRAMP will include specific actions, timeframes expected for action, and an explanation of the corrective actions that FedRAMP will take if the timeframes are not met. Failure to take timely action as required by Emergency communications will result in corrective action from FedRAMP.

FedRAMP will conduct strictly controlled tests of reactions to emergency communications regularly and provide public notice of these tests in advance. The reaction times for these tests will be tracked by FedRAMP and made publicly available.

This set of requirements and recommendations include explicit requirements that FedRAMP will follow to ensure important communications or those sent during emergencies can be routed by cloud service providers separately from general communications.

---



## FedRAMP&#x27;s Responsibilities

These requirements and recommendations apply to FedRAMP when communicating with cloud service providers.

### Verified Emails

??? abstract "FSI-FRP-VRE"

    **Former ID:** FRR-FSI-01

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    FedRAMP MUST send messages to cloud service providers using an official @fedramp.gov or @gsa.gov email address with properly configured Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication Reporting and Conformance (DMARC) email authentication.

    ---

    _**Note:** Anyone at GSA can send email from @fedramp.gov or @gsa.gov - FedRAMP team members will typically have &quot;FedRAMP&quot; or &quot;Q20B&quot; in their name but this is not universal or enforceable. The nature of government enterprise IT services makes it difficult for FedRAMP to isolate FedRAMP-specific team members with enforceable identifiers._


### Criticality Designators

??? abstract "FSI-FRP-CDS"

    **Former ID:** FRR-FSI-02

    **Changelog:**

    - **2026-02-04:** Reframed for clarity; changed response to reaction for clarity; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    FedRAMP MUST convey the criticality of the message in the subject line, IF the message requires an elevated reaction, using one of the following designators:

    1. **Emergency:** There is a potential incident or crisis such that FedRAMP requires an extremely urgent reaction; emergency messages will contain aggressive timeframes for reaction and failure to meet these timeframes will result in corrective action.

    1. **Emergency Test:** FedRAMP requires an extremely urgent reaction to confirm the functionality and effectiveness of the FedRAMP Security Inbox; emergency test messages will contain aggressive timeframes for reaction and failure to meet these timeframes will result in corrective action.

    1. **Important:** There is an important issue that FedRAMP requires the cloud service provider to address; important messages will contain reasonable timeframes for reaction and failure to meet these timeframes may result in corrective action.

    ---

    _**Note:** Messages sent by FedRAMP without one of these designators are considered general communications and do not require an elevated reaction; these may be resolved in the normal course of business by the cloud service provider._


    ---
    **Terms:** [FedRAMP Security Inbox](fedramp-definitions/#fedramp-security-inbox){ data-preview }, [Incident](fedramp-definitions/#incident){ data-preview }
  
### Use FedRAMP_Security Email in Emergencies

??? abstract "FSI-FRP-UFS"

    **Former ID:** FRR-FSI-03

    **Changelog:**

    - **2026-02-04:** Changed response to reaction for clarity; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    FedRAMP MUST send Emergency and Emergency Test designated messages from fedramp_security@gsa.gov OR fedramp_security@fedramp.gov.


### Public Notice of Emergency Tests

??? abstract "FSI-FRP-PNT"

    **Former ID:** FRR-FSI-04

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    FedRAMP MUST post a public notice at least 10 business days in advance of sending an Emergency Test message; such notices MUST include explanation of the likely expected actions and timeframes for the Emergency Test message.

    ---

    _**Notes:**_

    - _Public notice may include blog posts, social media posts, announcements during Community Updates, or e-blasts._
    - _As this process matures, additional confirmed options may become available._


    ---
    **Terms:** [Likely](fedramp-definitions/#likely){ data-preview }
  
### Required Actions

??? abstract "FSI-FRP-RQA"

    **Former ID:** FRR-FSI-05

    **Changelog:**

    - **2026-02-04:** Changed response to reaction for clarity; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    FedRAMP MUST clearly specify the required actions in the body of messages that require an elevated reaction.


### Elevated Reaction Timeframes

??? abstract "FSI-FRP-ERT"

    **Former ID:** FRR-FSI-06

    **Changelog:**

    - **2026-02-04:** Changed response to reaction for clarity; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    FedRAMP MUST clearly specify the expected timeframe for completing required actions in the body of messages that require an elevated reaction; timeframes for actions will vary depending on the situation but the default timeframes to provide an estimated resolution time for Emergency and Emergency Test designated messages will be as follows:

    1. **High Impact:** within 12 hours

    1. **Moderate Impact:** by 3:00 p.m. Eastern Time on the 2nd business day

    1. **Low Impact:** by 3:00 p.m. Eastern Time on the 3rd business day

    ---

    _**Note:** High impact cloud service providers are expected to address Emergency messages (including tests) from FedRAMP with a reaction time appropriate to operating a service where failure to react rapidly might have a severe or catastrophic adverse effect on the U.S. Government; some Emergency messages may require faster reaction and all such messages should be addressed as quickly as possible._


    ---
    **Terms:** [Catastrophic Adverse Effect](fedramp-definitions/#catastrophic-adverse-effect){ data-preview }
  
### Explain Corrective Actions

??? abstract "FSI-FRP-COR"

    **Former ID:** FRR-FSI-07

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    FedRAMP MUST clearly specify the corrective actions that will result from failure to complete the required actions in the body of messages that require an elevated reaction; such actions may vary from negative ratings in the FedRAMP Marketplace to suspension of FedRAMP authorization depending on the severity of the event.


### Reaction Metrics

??? abstract "FSI-FRP-RPM"

    **Former ID:** FRR-FSI-08

    **Changelog:**

    - **2026-02-04:** Changed response to reaction for clarity; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    FedRAMP MAY track and publicly share the time required by cloud service providers to take the actions specified in messages that require an elevated reaction.


## General Provider Responsibilities

These requirements and recommendations apply to all cloud service offerings in the FedRAMP Marketplace.

### Maintain a FedRAMP Security Inbox

??? abstract "FSI-CSO-INB"

    **Former ID:** FRR-FSI-09

    **Changelog:**

    - **2026-02-04:** Changed response to reaction for clarity; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST establish and maintain an email address to receive messages from FedRAMP; this inbox is a FedRAMP Security Inbox (FSI).

    ---

    !!! danger "Be careful using a personal email tied to an individual for this inbox due to the significant risk to future communications after a change in personnel!"


    ---

    _**Notes:**_

    - _Unless otherwise notified, FedRAMP will use the listed Security Email on the Marketplace for these notifications._
    - _If a provider establishes a new inbox in reaction to this guidance that is different from the Security EMail then they must follow the requirements in FSI-CSO-NOC to notify FedRAMP._


    ---
    **Terms:** [FedRAMP Security Inbox](fedramp-definitions/#fedramp-security-inbox){ data-preview }
  
### Notification of Changes

??? abstract "FSI-CSO-NOC"

    **Former ID:** FRR-FSI-12

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST immediately notify FedRAMP of any changes in addressing for their FedRAMP Security Inbox by emailing info@fedramp.gov with the name and FedRAMP ID of the cloud service offering and the updated email address.


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }, [FedRAMP Security Inbox](fedramp-definitions/#fedramp-security-inbox){ data-preview }
  
### Trust @fedramp.gov and @gsa.gov

??? abstract "FSI-CSO-TFG"

    **Former ID:** FRR-FSI-10

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST treat any email originating from an @fedramp.gov or @gsa.gov email address as if it was sent from FedRAMP by default; if such a message is confirmed to originate from someone other than FedRAMP then FedRAMP Security Inbox requirements no longer apply.


    ---
    **Terms:** [FedRAMP Security Inbox](fedramp-definitions/#fedramp-security-inbox){ data-preview }
  
### Receive Email Without Disruption

??? abstract "FSI-CSO-RCV"

    **Former ID:** FRR-FSI-11

    **Changelog:**

    - **2026-02-04:** Changed response to reaction for clarity; removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST receive and react to email messages from FedRAMP without disruption and without requiring additional actions from FedRAMP.

    ---

    _**Note:** This requirement is intended to prevent cloud service providers from requiring FedRAMP to complete a CAPTCHA, log into a customer portal, or otherwise take service-specific actions that might prevent the security team from receiving the message._


### Complete Required Actions

??? abstract "FSI-CSO-CRA"

    **Former ID:** FRR-FSI-14

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST complete the required actions in Emergency or Emergency Test designated messages sent by FedRAMP within the timeframe included in the message.

    ---

    _**Note:** Timeframes may vary by impact level of the cloud service offering._


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }
  
### Emergency Message Routing

??? abstract "FSI-CSO-EMR"

    **Former ID:** FRR-FSI-15

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST route Emergency designated messages sent by FedRAMP to a senior security official for their awareness.

    ---

    _**Note:** Senior security officials are determined by the provider._


### Important Message Actions

??? abstract "FSI-CSO-IMA"

    **Former ID:** FRR-FSI-16

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD complete the required actions in Important designated messages sent by FedRAMP within the timeframe specified in the message.

    ---

    _**Note:** Timeframes may vary by impact level of the cloud service offering._


    ---
    **Terms:** [Cloud Service Offering](fedramp-definitions/#cloud-service-offering){ data-preview }
  
### Acknowledge Receipt

??? abstract "FSI-CSO-ACK"

    **Former ID:** FRR-FSI-13

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD promptly and automatically acknowledge the receipt of messages received from FedRAMP in their FedRAMP Security Inbox.


    ---
    **Terms:** [FedRAMP Security Inbox](fedramp-definitions/#fedramp-security-inbox){ data-preview }, [Promptly](fedramp-definitions/#promptly){ data-preview }
  


