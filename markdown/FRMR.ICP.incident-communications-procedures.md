# FedRAMP Incident Communications Procedures

- **Release:** 25.11A
- **Published:** 2025-11-08  
- **Designator:** ICP
- **Description:** Initial release of simplified 20x version of this existing FedRAMP policy.

## Front Matter

### Effective Date(s) & Overall Applicability

- **FedRAMP 20x**:
  - This release is effective **2025-11-01** for **20x**. 
  - This policy applies to all FedRAMP 20x authorizations.

- **FedRAMP Rev5**:
  - This version does not apply to Rev5; the full Rev5 requirements related to this policy are documented in FedRAMP&#x27;s Incident Communications Procedures.


### Documentation Guidelines

The following FedRAMP documentation guidelines apply to this document:

- The capitalized key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [IETF RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).
- FedRAMP-specific terms defined in [FRD-ALL (FedRAMP Definitions)](https://github.com/FedRAMP/docs/blob/main/markdown/FRMR.FRD.fedramp-definitions.md) are italicized throughout this document for reference.


## Background & Authority

### Purpose

This set of requirements and recommendations converts the existing FedRAMP Incident Communications Procedures (https://www.fedramp.gov/resources/documents/CSP_Incident_Communications_Procedures.pdf) to the simpler FedRAMP 20x standard style and clarifies the expectations for FedRAMP 20x.

The only notable change from the default Rev5 Incident Communications Procedures for 20x is the addition of a recommendation that incident information be made available in both human-readable and machine-readable formats.


---


## Requirements

### FRR-ICP

**These requirements apply ALWAYS to ALL FedRAMP Authorized cloud services based on the current Effective Date(s) and Overall Applicability of this standard.**

#### FRR-ICP-01
_Applies to:_ Low, Moderate, High

> Providers MUST responsibly report _incidents_ to FedRAMP within 1 hour of identification by sending an email to fedramp_security@fedramp.gov or fedramp_security@gsa.gov.

#### FRR-ICP-02
_Applies to:_ Low, Moderate, High

> Providers MUST responsibly report _incidents_ to all _agency_ customers within 1 hour of identification using the _incident_ communications points of contact provided by each _agency_ customer.

#### FRR-ICP-03
_Applies to:_ Low, Moderate, High

> Providers MUST responsibly report _incidents_ to CISA within 1 hour of identification if the incident is confirmed or suspected to be the result of an attack vector listed at https://www.cisa.gov/federal-incident-notification-guidelines#attack-vectors-taxonomy, following the CISA Federal Incident Notification Guidelines at https://www.cisa.gov/federal-incident-notification-guidelines, by using the CISA Incident Reporting System at https://myservices.cisa.gov/irf. 

#### FRR-ICP-04
_Applies to:_ Low, Moderate, High

> Providers MUST update _all necessary parties_, including at least FedRAMP, CISA (if applicable), and all _agency_ customers, at least once per calendar day until the _incident_ is resolved and recovery is complete.

#### FRR-ICP-05
_Applies to:_ Low, Moderate, High

> Providers MUST make _incident_ report information available in their secure FedRAMP repository (such as USDA Connect) or _trust center_.

#### FRR-ICP-06
_Applies to:_ Low, Moderate, High

> Providers MUST NOT irresponsibly disclose specific sensitive information about _incidents_ that would _likely_ increase the impact of the _incident_, but MUST disclose sufficient information for informed risk-based decision-making to _all necessary parties_.

#### FRR-ICP-07
_Applies to:_ Low, Moderate, High

> Providers MUST provide a final report once the _incident_ is resolved and recovery is complete that describes at least:
> 1. What occurred
> 1. Root cause
> 1. Response
> 1. Lessons learned
> 1. Changes needed

#### FRR-ICP-08
_Applies to:_ Low, Moderate, High

> Providers SHOULD use automated mechanisms for reporting incidents and providing updates to all necessary parties (including CISA).

#### FRR-ICP-09
_Applies to:_ Low, Moderate, High

> Providers SHOULD make _incident_ report information available in consistent human-readable and _machine-readable_ formats.

---   







