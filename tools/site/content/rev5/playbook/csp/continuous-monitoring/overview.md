# Continuous Monitoring Overview

FedRAMP ConMon is based on the continuous monitoring process described in NIST SP 800-137, _Information Security Continuous Monitoring for Federal Information Systems and Organization_. The goal is to provide: **(i) operational visibility; (ii) managed change control; and (iii) attendance to incident response duties.**

The effectiveness of a CSP’s ConMon capability supports ongoing agency authorization decisions. CSPs report on the status of the CSO’s security posture by providing ConMon deliverables to federal agency customers. Required ConMon deliverables are described in greater detail throughout this playbook.

CSPs with more than one federal agency customer are required to implement a collaborative ConMon approach, intended to streamline the ConMon process and potentially minimize duplicative efforts in a way that helps each federal agency still perform their due diligence related to ConMon. This approach is described in the [Collaborative ConMon](collaborative-monitoring.md) section of this playbook.

## **Continuous Monitoring Process Areas**

### Operational Visibility

CSPs demonstrate a mature and effective security program through the implementation of security controls (for example, system monitoring and event logging) and provide operational visibility by producing required deliverables and supporting evidence. Deliverables and supporting evidence are provided monthly, annually, every three years, and on an as-needed basis. Controls with minimally required frequencies for each continuous monitoring activity are identified in Column J of the [FedRAMP Security Controls Baseline workbook](https://www.fedramp.gov/resources/documents/FedRAMP_Security_Controls_Baseline.xlsx).

### Change Control

Cloud systems are dynamic and are in a constant state of change. Configuration management and change control processes help maintain a secure baseline configuration of the cloud system. Before implementing a change, CSPs conduct a security impact analysis, and \- depending on the type of change \- implement the process steps described in the [Significant Changes](significant-changes.md) section of this playbook.

### Incident Response

CSPs must demonstrate the ability to adequately respond to security incidents and emergency directives. As part of the FedRAMP authorization process, the CSP is required to submit and maintain an incident response plan. Requirements and guidance for incident communications are described in the [Incident Communication](incident-communication.md) section of this playbook.

## **Continuous Monitoring Roles & Responsibilities**

### Cloud Service Provider (CSP)

Cloud Service Providers (CSPs) bear the primary responsibility for implementing and maintaining the security controls documented in their System Security Plan (SSP) and continuously monitoring the effectiveness of those controls. This includes proactively identifying and addressing vulnerabilities, responding to security incidents, and providing timely and accurate information to agency AOs, the FedRAMP PMO, and assessors. CSPs are expected to fully cooperate with assessments, providing access to systems, documentation, and personnel as needed to demonstrate compliance with FedRAMP requirements. Furthermore, CSPs are responsible for maintaining a secure repository of ConMon deliverables, either on USDA Connect.gov or their own secure repository. They must also promptly address any findings or recommendations identified during assessments or by other stakeholders, ensuring the ongoing security and compliance of their cloud offerings.

### Agency Authorization Official (AO)

Agency AOs and their teams review the CSP’s ConMon activities to ensure the security posture remains sufficient for the agency’s use and supports an ongoing authorization. This includes reviewing the monthly Plan of Action and Milestones (POA&M), approving deviation requests and significant change requests, and reviewing the results of the annual assessment. AOs use this information to make risk-based decisions about ongoing authorization of the system for that agency.

### FedRAMP Program Management Office (PMO)

The FedRAMP PMO oversees daily operations, provides guidance to agencies and CSPs, and ensures ConMon materials are made available to all leveraging agencies for review. CSPs with cloud offerings categorized at LI-SaaS, Low, or Moderate use the FedRAMP secure repository on USDA Connect.gov for posting ConMon deliverables. CSPs with cloud offerings categorized at High use their own secure repository.

### Cybersecurity and Infrastructure Security Agency (CISA)

The Cybersecurity and Infrastructure Security Agency (CISA) coordinates with the FedRAMP PMO when issuing Binding Operational Directives (BODs) and Emergency Directives (EDs).

### Independent Assessment Organizations

Independent assessors perform initial and annual assessments of cloud systems, as well as out-of-cycle assessments associated with significant changes. Most CSPs use a FedRAMP recognized Third Party Assessment Organization (3PAO) that meets the necessary quality, independence, and knowledge requirements to perform independent security assessments. A list of FedRAMP recognized 3PAOs can be found on the [FedRAMP Marketplace](https://marketplace.fedramp.gov/products).

With approval by the agency AO, CSPs may choose to use an independent assessment organization that is not recognized by FedRAMP, such as an agency’s Independent Verification and Validation (IV&V) team. When using an agency’s IV&V team or other third-party assessor that is not a FedRAMP recognized 3PAO, the agency AO must attest to the independence of the assessment organization. In addition, the assessor must comply with FedRAMP requirements and guidance, and use FedRAMP provided templates.

3PAOs (or other independent assessors) are responsible for ensuring that the chain of custody is maintained for any 3PAO-authored documentation. 3PAOs also ensure the veracity and integrity of data provided by the CSP. For example:

- If scans are performed by the CSP, the 3PAO must either be on site and observe the CSP performing the scans or be able to monitor and verify the results of the scans through other means.
- Documentation provided to the CSP must be provided in a format that either the CSP cannot alter or that allows the 3PAO to verify the integrity of the document.

Throughout the remainder of this playbook, FedRAMP recognized 3PAOs, other third-party independent assessment organizations, and agency IV&V teams will be collectively referred to as “assessors”.

## **Monthly ConMon Reporting**

Security control CA-5 requires CSPs to develop and maintain a POA&M to document remediation plans for correcting risks (e.g., weaknesses, deficiencies, and vulnerabilities) identified during security assessments and ConMon activities. Security control CM-8 requires CSPs to provide an updated inventory at least monthly or when there is a change. Each month, the CSP uploads an up-to-date POA&M and inventory, along with raw vulnerability scan files (when required by agreements with agency customers) and reports to the secure repository. Agency AOs review these deliverables to ensure the risk posture of the CSO remains sufficient for the agency’s use of the system.
