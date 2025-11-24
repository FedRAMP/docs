# FedRAMP Security Inbox requirements


!!! success "Effective Date(s) & Overall Applicability for Rev5: Required"
      - **Required (Wide Release) beginning 2026-01-05.**
      - These requirements apply after January 5, 2026, to all FedRAMP Rev5 cloud services that are listed in the FedRAMP Marketplace.
      - **FedRAMP will begin enforcement of this policy after January 5, 2026 with an Emergency Test.**
      - Beginning 2026-03-01, corrective action will include public notification that the provider is not meeting the expectations of this policy.
      - Beginning 2026-05-01, corrective action will include complete removal from the FedRAMP Marketplace.
      - Beginning 2026-07-01, corrective action will include complete removal from the FedRAMP Marketplace and a ban on FedRAMP authorization for three months.
      

FedRAMP must have a reliable way to directly contact security and compliance staff operating all FedRAMP Authorized cloud service offerings without tracking individual contacts or maintaining provider-specific logins to customer support portals. These requirements for a FedRAMP Security Inbox apply to all cloud service providers to ensure this direct reliable path remains open, especially in the event of critical security issues.

This set of requirements focus specifically on communication that comes from FedRAMP and includes three categories of communication:

1. Emergency communications that will only be used during an emergency where response times are critical to protecting the confidentiality, integrity, and availability of federal customer data; this communication path will occasionally be tested by FedRAMP.

2. Important communications that may require an elevated response due to a sensitive or potentially disruptive situation, typically related to ongoing authorization or other concerns.

3. General communications that include all other messages from FedRAMP that may be managed by a cloud service provider following their standard operational process.

All Emergency and Important messages sent by FedRAMP will include specific actions, timeframes expected for action, and an explanation of the corrective actions that FedRAMP will take if the timeframes are not met. Failure to take timely action as required by Emergency communications will result in corrective action from FedRAMP.

FedRAMP will conduct strictly controlled tests of response to emergency communications regularly and provide public notice of these tests in advance. The response times for these tests will be tracked by FedRAMP and made publicly available.

This set of requirements and recommendations include explicit requirements that FedRAMP will follow to ensure important communications or those sent during emergencies can be routed by cloud service providers separately from general communications.

??? info "Version 25.11B published on 2025-12-01 " 
    **History:**

    - **25.11B (2025-12-01):** No material changes to content; updated JSON structure with additional information about Rev5 application added.
    - **25.11A (2025-11-18):** Initial Release of the FedRAMP Security Inbox requirements for both 20x and Rev5.


??? abstract "Background & Authority"
    - [OMB Memorandum M-24-15 on Modernizing FedRAMP](https://www.fedramp.gov/assets/resources/documents/FedRAMP_Policy_Memo.pdf) section VII (a) (17) states that GSA must &quot;position FedRAMP as a central point of contact to the commercial cloud sector for Government-wide communications or requests for risk management information concerning commercial cloud providers used by Federal agencies.&quot;

---











        
## Requirements &amp; Recommendations

!!! info ""
    These requirements apply ALWAYS to FedRAMP and ALL cloud services listed in the FedRAMP Marketplace based on the current Effective Date(s) and Overall Applicability of this standard.

### FRR-FSI-01 Verified Emails

!!! quote ""
    FedRAMP MUST send messages to cloud service providers using an official @fedramp.gov or @gsa.gov email address with properly configured Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication Reporting and Conformance (DMARC) email authentication.

    **Note:** Anyone at GSA can send email from @fedramp.gov or @gsa.gov - FedRAMP team members will typically have &quot;FedRAMP&quot; or &quot;Q20B&quot; in their name but this is not universal or enforceable. The nature of government enterprise IT services makes it difficult for FedRAMP to isolate FedRAMP-specific team members with enforceable identifiers. 


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-02 Criticality Designators

!!! quote ""
    FedRAMP MUST convey the criticality of the message in the subject line using one of the following designators if the message requires an elevated response:

    1. **Emergency:** There is a potential incident or crisis such that FedRAMP requires an extremely urgent response; emergency messages will contain aggressive timeframes for response and failure to meet these timeframes will result in corrective action.

    1. **Emergency Test:** FedRAMP requires an extremely urgent response to confirm the functionality and effectiveness of the FedRAMP Security Inbox; emergency test messages will contain aggressive timeframes for response and failure to meet these timeframes will result in corrective action.

    1. **Important:** There is an important issue that FedRAMP requires the cloud service provider to address; important messages will contain reasonable timeframes for response and failure to meet these timeframes may result in corrective action.

    **Note:** Messages sent by FedRAMP without one of these designators are considered general communications and do not require an elevated response; these may be resolved in the normal course of business by the cloud service provider.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-03 Sender Addresses

!!! quote ""
    FedRAMP MUST send Emergency and Emergency Test designated messages from fedramp_security@gsa.gov OR fedramp_security@fedramp.gov.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-04 Public Notice of Emergency Tests

!!! quote ""
    FedRAMP MUST post a public notice at least 10 business days in advance of sending an Emergency Test message; such notices MUST include explanation of the _likely_ expected actions and timeframes for the Emergency Test message.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-05 Required Actions

!!! quote ""
    FedRAMP MUST clearly specify the required actions in the body of messages that require an elevated response.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-06 Response Timeframes

!!! quote ""
    FedRAMP MUST clearly specify the expected timeframe for completing required actions in the body of messages that require an elevated response; timeframes for actions will vary depending on the situation but the default timeframes to provide an estimated resolution time for Emergency and Emergency Test designated messages will be as follows:

    1. **High Impact:** within 12 hours

    1. **Moderate Impact:** by 3:00 p.m. Eastern Time on the 2nd business day

    1. **Low Impact:** by 3:00 p.m. Eastern Time on the 3rd business day

    **Note:** Note: High impact cloud service providers are expected to address Emergency messages (including tests) from FedRAMP with a response time appropriate to operating a service where failure to respond rapidly might have a severe or catastrophic adverse effect on the U.S. Government; some Emergency messages may require faster responses and all such messages should be addressed as quickly as possible.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-07 Corrective Actions

!!! quote ""
    FedRAMP MUST clearly specify the corrective actions that will result from failure to complete the required actions in the body of messages that require an elevated response; such actions may vary from negative ratings in the FedRAMP Marketplace to suspension of FedRAMP authorization depending on the severity of the event.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-08 Response Metrics

!!! quote ""
    FedRAMP MAY track and publicly share the time required by cloud service providers to take the actions specified in messages that require an elevated response.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-09 FedRAMP Security Inbox

!!! quote ""
    Providers MUST establish and maintain an email address to receive messages from FedRAMP; this inbox is a _FedRAMP Security Inbox_ (FSI).


    **Notes:**

    - Unless otherwise notified, FedRAMP will use the listed Security E-mail on the Marketplace for these notifications.

    - If a provider establishes a new inbox in response to this guidance that is different from the Security E-Mail then they must follow the requirements in FRR-FSI-12 to notify FedRAMP.

    **Applies to:** Low, Moderate, High
    

### FRR-FSI-10 Receiving Messages

!!! quote ""
    Providers MUST treat any email originating from an @fedramp.gov or @gsa.gov email address as if it was sent from FedRAMP by default; if such a message is confirmed to originate from someone other than FedRAMP then _FedRAMP Security Inbox_ requirements no longer apply.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-11 Response

!!! quote ""
    Providers MUST receive and respond to email messages from FedRAMP without disruption and without requiring additional actions from FedRAMP.

    **Note:** Note: This requirement is intended to prevent cloud service providers from requiring FedRAMP to respond to a CAPTCHA, log into a customer portal, or otherwise take service-specific actions that might prevent the security team from receiving the message.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-12 Notification of Changes

!!! quote ""
    Providers MUST immediately notify FedRAMP of any changes in addressing for their _FedRAMP Security Inbox_ by emailing info@fedramp.gov with the name and FedRAMP ID of the cloud service offering and the updated email address.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-13 Acknowedgement of Receipt

!!! quote ""
    Providers SHOULD _promptly_ and automatically acknowledge the receipt of messages received from FedRAMP in their _FedRAMP Security Inbox_.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-14 Required Response for Emergency Messages

!!! quote ""
    Providers MUST complete the required actions in Emergency or Emergency Test designated messages sent by FedRAMP within the timeframe included in the message.

    **Note:** Timeframes may vary by impact level of the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-15 Routing

!!! quote ""
    Providers MUST route Emergency designated messages sent by FedRAMP to a senior security official for their awareness.

    **Note:** Senior security officials are determined by the provider.


    **Applies to:** Low, Moderate, High
    

### FRR-FSI-16 Recommended Response for Important Messages

!!! quote ""
    Providers SHOULD complete the required actions in Important designated messages sent by FedRAMP within the timeframe specified in the message.

    **Note:** Timeframes may vary by impact level of the _cloud service offering_.


    **Applies to:** Low, Moderate, High
    

---   








