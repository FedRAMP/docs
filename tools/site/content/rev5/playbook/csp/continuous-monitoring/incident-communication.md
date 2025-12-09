# Incident Communication

This section describes the steps FedRAMP stakeholders must use when reporting information related to security incidents, including responses to published emergency directives. The steps included in this document provide a sequence of required communications that are in place to ensure accurate and timely information is reported to all relevant stakeholders.

Incident communications stakeholders include a variety of teams and individuals with a vested interest in the successful implementation and operations of FedRAMP. They include:

- CSPs

- FedRAMP

- Cybersecurity and Infrastructure Security Agency (CISA)

- CSP customers (including federal and other FedRAMP-Authorized CSPs)

- Interconnected systems

The Federal Information Security Modernization Act of 2014 (FISMA) is the authoritative source for incident definitions. FISMA defines an "incident" as "an occurrence that (A) actually or imminently jeopardizes, without lawful authority, the integrity, confidentiality, or availability of information or an information system; or (B) constitutes a violation or imminent threat of violation of law, security policies, security procedures, or acceptable use policies." The terms “security incident” and “information security incident” are also used interchangeably with “incident” within the body of the law.

Clear and timely incident communication to stakeholders is a key aspect of ConMon to ensure that incident handling is transparent and stakeholders are aware of the current status and remediation efforts.

FedRAMP requires CSPs to report any incident (suspected or confirmed) that results in the actual or potential loss of confidentiality, integrity, or availability of the cloud service, including the impact to federal customer data that it stores, processes, or transmits. Reporting real and suspected incidents allows agencies and other affected customers to take steps to protect important data, to maintain a normal level of efficiency, and to ensure a full resolution is achieved in a timely manner.

Reporting suspected or confirmed incidents, as well as responses to emergency directives to stakeholders, does not result in punitive actions against the CSP; however, failure to report incidents will result in escalation actions as defined in Section X of this playbook. A collaborative approach to reporting incidents between CSPs and other stakeholders allows all parties to be aware of, and successfully manage, the risk associated with an incident and to classify and resolve suspected incidents.

## **Assumptions**

- Key CSP personnel have been identified and are trained in their relevant incident roles and responsibilities

- Agency incident response plans are in place

- CSP incident response plans are in place and have been tested in accordance with FedRAMP incident response (IR) controls

- Both internal and external incident response contact lists (in all incident response plans) are accurate and up-to-date

- CSP contact information is up-to-date and on file with FedRAMP and all federal customers of a CSP’s FedRAMP-Authorized services

## **Roles and Responsibilities**

The following table describes the stakeholder roles and responsibilities in the incident communication process.

| Stakeholder | Role                               | Responsibility                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CISA        | Risk Advisor and Incident Handling | Coordinates security and resilience efforts across private and public sectors Delivers technical assistance and assessments to federal stakeholders and infrastructure owners nationwide Conducts nationwide outreach to support and promote the ability of emergency response providers and relevant government officials in the event of an emergency Provides incident handling assistance, as needed, to CSPs and agencies Provides reporting for any identified incidents affecting government or government contracted systems to appropriate stakeholders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| FedRAMP     | Incident Communication Monitoring  | Monitors incident reporting submissions to FedRAMP Updates FedRAMP Marketplace with status of CSP CAPs, suspensions, and revocations, including those related to information security incidents Supports and advises AOs as needed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Agency AO   | Risk Monitoring                    | Provides CSP status updates to FedRAMP, including CAPs, suspensions, and revocations Acts as the final approval authority for the use of an offering by their agency Notifies CSP, CISA, and FedRAMP stakeholders if the agency becomes aware of an incident or suspects an incident that a CSP has not yet reported Ensures requirements for agency-specific incident response plans are met Confirms with a CSP that they reported an incident to CISA and has obtained a CISA tracking number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| CSP         | Service Provider                   | Protects incident information commensurate with the impact level of the cloud service Maintains a satisfactory risk management program for the cloud service in accordance with FedRAMP Complies with incident response guidance and requirements Maintains a list of all current customers and the proper communication channels with all AOs and assessors Notifies affected customers of information security incidents Notifies CISA of information security incidents as needed (see the CSP General Reporting Process section) and provides the CISA tracking number to FedRAMP at fedramp\_security@gsa.gov (as well as to all applicable stakeholders) of information security incidents and provides status updates thereafter Requests assistance from CISA, as needed Provides a final report to FedRAMP at fedramp\_security@gsa.gov (as well as to all applicable stakeholders), including the agency AO or AO representatives, after completion of the Post-Incident Activity phase of the Incident Response Life Cycle Responds to emergency inquiries from FedRAMP, including those that are the result of the issuance of CISA Emergency Directives |
| Assessor    | Independent Assessor               | Performs any required independent security assessments related to information security incidents                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## **CSP General Reporting Process**

CSPs must report all incidents, which include any suspected or confirmed events, that result in the potential or confirmed loss of confidentiality, integrity, or availability to assets or services provided by the service offering. Reporting requirements to CISA, agency customers and FedRAMP are identified in this section.

As CSPs manage and report incidents, they must not deviate from FedRAMP requirements to protect the confidentiality, integrity, or availability of data stored, processed, or transmitted by the system as well as data about the system and related to the incident. Sensitive information must be provided using approved mechanisms. CSPs must report suspected and confirmed information security incidents to the following parties **within one (1) hour** of being identified by the CSP’s top-level Computer Security Incident Response Team (CSIRT), Security Operations Center (SOC), or information technology department to the following stakeholders:

- Customers who are impacted or who are suspected of being impacted (via the CSP Incident Information and Forms folder in their respective FedRAMP Secure Repository)

- CISA, under the following conditions:
  - The CSP has confirmed, has yet to confirm, or suspects the incident is the result of any of the attack vectors listed at [Federal Incident Notification Guidelines | CISA](https://www.cisa.gov/federal-incident-notification-guidelines)

  - Reporting location: [https://www.cisa.gov/forms/report](https://www.cisa.gov/forms/report)

- FedRAMP at [fedramp_security@gsa.gov](mailto:fedramp_security@gsa.gov)

- Agency POCs to include AOs, AO representatives, and Agency Incident Response Teams (as identified by the authorizing agency)

FedRAMP encourages the use of automated mechanisms for incident reporting. If a CSP wants to leverage automated incident reporting mechanisms, the CSP must work with the AO and FedRAMP to ensure the content and context of the automated reporting provides the required information.

CSPs must maintain current and accurate contact information on file for all POCs including FedRAMP, agency customers, and other applicable stakeholders. The CSP must provide the tracking number to all POCs as soon as it is made available by CISA. Incident notifications, provided by the CSP to any POCs verbally (e.g., by phone) must be followed up by an email; however, sensitive information must be protected.

When reporting to CISA, CSPs must include the required data elements as well as any other available information. CSPs must submit incident notifications in accordance with the Submitting Incident Notifications section of [https://www.cisa.gov/federal-incident-notification-guidelines](https://www.cisa.gov/federal-incident-notification-guidelines). In some cases, it may not be feasible to have complete and validated information prior to reporting. CSPs should provide their best estimate at the time of notification and report updated information as it becomes available.

After initial incident notification, the CSP must provide updates to CISA as well as daily updates to all POCs. The final daily update must be provided to all POCs after the CSP has completed the Recovery phase of Incident Response Life Cycle (Containment, Eradication, Recovery, and Post-Incident Activity). The CSP must also provide a report to all POCs after it has completed the Post-Incident Activity in the Incident Response Life Cycle. The final report must describe what occurred, the root cause, the CSP’s response, lessons learned, and changes needed.

Additionally, CSPs are responsible for responding to emergency inquiries from FedRAMP, including those that are the result of the issuance of CISA Emergency Directives. If any emergency inquiry is issued, the CSP must comply within the timeline described in the request. Any additional reporting requirements identified in the inquiry must also be met. If there are any explicit actions the CSP must take that are identified in the emergency inquiry, they must be addressed in the timeline prescribed. Failure to report or respond to emergency inquiries, or failure to perform the prescribed remediation actions, can result in the escalation actions outlined in [Section 8](#heading=h.8hei98boqjpn) of this playbook.

## **AO Responsibilities**

Upon receipt of a CSP’s notification, AOs must take the following actions:

1. Verify that, if required, CISA has been notified

2. Request that the CSP provides daily updates and the CISA tracking number when it has become available

3. Verify the CSP’s notification and supporting documentation is posted to the Incident Information and Forms folder in the FedRAMP secure repository
   1. Notifications of incidents should be sent to the following FedRAMP POCs after each update, should not contain any sensitive data, and should direct POCs to the CSP’s designated FedRAMP secure repository:
      1. FedRAMP at [fedramp_security@gsa.gov](mailto:fedramp_security@gsa.gov)

      2. AO and applicable team members (contact information on file with the CSP)

The AO will evaluate the final report submitted by the CSP and determine an appropriate path forward. This may include developing a plan of action and milestones (POA\&Ms) and/or CAPs to address areas needing improvement.
