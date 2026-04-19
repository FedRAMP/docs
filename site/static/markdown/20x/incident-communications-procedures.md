# Incident Communications Procedures

!!! info "Effective Date(s) & Overall Applicability for 20x"
      - **Required** (Phase 2 Pilot)
      - Phase 1 pilot authorizations have one year from authorization to fully address this process but must demonstrate continuous quarterly progress.
      - Phase 2 Pilot participants must demonstrate significant progress towards addressing this process prior to submission for authorization review.


??? abstract "Background & Authority"
    - [FedRAMP Incident Communications Procedures](https://www.fedramp.gov/docs/rev5/playbook/csp/continuous-monitoring/incident-communication/) 

This set of requirements and recommendations converts the existing FedRAMP Incident Communications Procedures to the simpler FedRAMP 20x style and clarifies the expectations for FedRAMP 20x.

The only notable change from the default Incident Communications Procedures for 20x is the addition of a recommendation that incident information be made available in both human-readable and machine-readable formats.

---


## 20x-Specific Provider Responsibilities

These requirements and recommendations apply to all cloud service offerings following the 20x path. 

### Incident Reporting to FedRAMP

??? abstract "ICP-CSX-IRF"

    **Former ID:** FRR-ICP-01

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST responsibly report incidents to FedRAMP within 1 hour of identification by sending an email to fedramp_security@fedramp.gov or fedramp_security@gsa.gov.


    ---
    **Terms:** [Incident](fedramp-definitions/#incident){ data-preview }
  
### Incident Reporting to Agencies

??? abstract "ICP-CSX-IRA"

    **Former ID:** FRR-ICP-02

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST responsibly report incidents to all agency customers within 1 hour of identification using the incident communications points of contact provided by each agency customer.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [Incident](fedramp-definitions/#incident){ data-preview }
  
### Incident Reporting to CISA

??? abstract "ICP-CSX-IRC"

    **Former ID:** FRR-ICP-03

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST responsibly report incidents to CISA within 1 hour of identification if the incident is confirmed or suspected to be the result of an attack vector listed at https://www.cisa.gov/federal-incident-notification-guidelines#attack-vectors-taxonomy, following the CISA Federal Incident Notification Guidelines at https://www.cisa.gov/federal-incident-notification-guidelines, by using the CISA Incident Reporting System at https://myservices.cisa.gov/irf. 

    **Reference:** [CISA IRF Incident Reporting System](https://myservices.cisa.gov/irf)


    ---
    **Terms:** [Incident](fedramp-definitions/#incident){ data-preview }
  
### Incident Updates

??? abstract "ICP-CSX-ICU"

    **Former ID:** FRR-ICP-04

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.

!!! warning "This FRR includes a notification requirement!"


!!! quote ""

    Providers MUST update all necessary parties, including at least FedRAMP, CISA (if applicable), and all agency customers, at least once per calendar day until the incident is resolved and recovery is complete.


    ---
    **Terms:** [Agency](fedramp-definitions/#agency){ data-preview }, [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Incident](fedramp-definitions/#incident){ data-preview }
  
### Incident Report Availability

??? abstract "ICP-CSX-RPT"

    **Former ID:** FRR-ICP-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST make incident report information available in their secure FedRAMP repository (such as USDA Connect) or trust center.


    ---
    **Terms:** [Incident](fedramp-definitions/#incident){ data-preview }, [Trust Center](fedramp-definitions/#trust-center){ data-preview }
  
### Final Incident Report

??? abstract "ICP-CSX-FIR"

    **Former ID:** FRR-ICP-07

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST provide a final report once the incident is resolved and recovery is complete that describes at least:

    1. What occurred

    1. Root cause

    1. Response

    1. Lessons learned

    1. Changes needed


    ---
    **Terms:** [Incident](fedramp-definitions/#incident){ data-preview }, [Vulnerability Response](fedramp-definitions/#vulnerability-response){ data-preview }
  
### Responsible Disclosure

??? abstract "ICP-CSX-RSD"

    **Former ID:** FRR-ICP-06

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers MUST NOT irresponsibly disclose specific sensitive information about incidents that would likely increase the impact of the incident, but MUST disclose sufficient information for informed risk-based decision-making to all necessary parties.


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Incident](fedramp-definitions/#incident){ data-preview }, [Likely](fedramp-definitions/#likely){ data-preview }
  
### Automated Reporting

??? abstract "ICP-CSX-AUR"

    **Former ID:** FRR-ICP-08

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD use automated mechanisms for reporting incidents and providing updates to all necessary parties (including CISA).


    ---
    **Terms:** [All Necessary Parties](fedramp-definitions/#all-necessary-parties){ data-preview }, [Incident](fedramp-definitions/#incident){ data-preview }
  
### Human and Machine-Readable

??? abstract "ICP-CSX-HRM"

    **Former ID:** FRR-ICP-09

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Providers SHOULD make incident report information available in consistent human-readable and machine-readable formats.


    ---
    **Terms:** [Incident](fedramp-definitions/#incident){ data-preview }, [Machine-Readable](fedramp-definitions/#machine-readable){ data-preview }
  

---  




