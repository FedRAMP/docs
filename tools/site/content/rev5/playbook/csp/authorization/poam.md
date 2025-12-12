# Plan of Action and Milestones (POA&M)

!!! abstract "Vulnerability Detection and Response Balance Improvement Release"

    This entire section and set of requirements for POA&Ms does not apply to cloud service providers who have met all of the requirements for adopting the optional [Rev5 Vulnerability Detection and Response Balance Improvement Release](../../../balance/vulnerability-detection-and-response).

Security control CA-5 requires CSPs to develop a POA&M to document remediation plans for correcting risks (e.g., weaknesses, deficiencies, and vulnerabilities) identified during security assessments and ConMon activities.  
CSPs are required to use the [_FedRAMP POA&M Template_](https://www.fedramp.gov/resources/templates/FedRAMP-POAM-Template.xlsx) to track and manage risks.  

CSPs are required to submit a POA&M with the initial authorization package. Before authorizing the CSO, federal agency AOs will review the POA&M to understand the current risk posture. Depending on the federal agency AO’s risk tolerance, the CSP may be required to remediate or mitigate open risks prior to authorization. General POA&M management guidance is provided in this section, but CSPs should also review the [FedRAMP Continuous Monitoring Playbook](../../csp/continuous-monitoring/intro.md).

## General POA&M Guidance

- The POA&M submitted with the initial authorization package must correspond to the risk exposure table (RET) in the SAR. That is, for every risk identified in the RET, there must be a corresponding POA&M item.
  - 3PAOs may combine risks associated with the use of unauthorized external services into a single risk in the RET. This is acceptable if the 3PAO determines the risk impact level is the same for all services; however, CSPs must create unique POA&M items to track each unauthorized service because remediation plans and mitigating factors will likely differ for each service.

- All open risks must be captured on the POA&M’s “_Open_” tab, even if they are not considered past due.

  - During ConMon, CSPs are only required to capture and track past due scan-related risks in the POA&M; however, all risks identified during the 3PAO security assessment must be captured in the POA&M submitted with the initial authorization package.

- POA&Ms remediated _after_ the SAR was delivered by the 3PAO should be listed on the POA&M’s “_Closed_” tab. These risks will be validated as closed by the 3PAO during the annual assessment.

- A risk adjustment (RA) is a reduction in the scanner-defined risk level of a vulnerability. To justify a RA, CSPs must describe mitigating factors or compensating controls in place that reduce likelihood and/or impact of exploitation. For RAs validated by the 3PAO during the assessment, select “_Yes_” in Column V (Risk Adjustment). For RAs that were not validated by the 3PAO, select “_Pending_” in Column V. Pending RAs must be approved by the federal agency AO prior to authorization.

- A false positive (FP) occurs when a vulnerability is identified that does not actually exist on the system. For FPs validated by the 3PAO during the assessment, select “_Yes_” in Column W (False Positive) and move the risk to the POA&M’s “_Closed_” tab (validated FPs are not considered open risks). For FPs that were not validated by the 3PAO, select “_Pending_” in Column W. Pending FPs must be approved by the federal agency AO prior to authorization.

- An operational requirement (OR) is a finding that cannot be remediated, often because the system will not function as intended or because a vendor explicitly indicated it does not intend to offer a fix to their product. FedRAMP will not approve an OR for a High vulnerability; however, CSPs may mitigate the risk. For ORs validated by the 3PAO during the assessment, select “_Yes_” in Column X (Operational Requirement). For ORs that were not validated by the 3PAO, select “_Pending_” in Column X. Pending ORs must be approved by the federal agency AO prior to authorization.

  - Approved ORs are still considered open risks. They must be captured on the POA&M’s “_Open_” tab and periodically reassessed by the CSP.

- A vendor dependency (VD) exists when the CSP must rely on a downstream vendor to resolve a vulnerability, such as a patch for a commercial off-the-shelf (COTS) product, but the vendor has not yet made the fix available.

- VDs are not considered deviation requests and do not require approval.

- High-risk VDs must be mitigated to a Moderate level through compensating controls within thirty (30) days.

- VDs are tracked as open risks, and CSPs are required to check in with the vendor at least once a month to determine the status of the patch/fix.

- When capturing risks as VDs in the POA&M, select “_Yes_” in Column Q (Vendor Dependency), enter the last check-in date in Column R (Last Vendor Check-in Date), and enter the product name in Column S (Vendor Dependent Product Name).

!!! warning "Remediation Requirements"

    FedRAMP requires Critical and High risks to be remediated within 30 days of discovery, Moderate risks within 90 days of discovery, and Low risks within 180 days of discovery. |

## **POA&M Do’s and Don’ts**

### Do

- **Do** follow the instructions in the Instructions tab of the [POA&M template](https://www.fedramp.gov/resources/templates/FedRAMP-POAM-Template.xlsx) to ensure the POA&M is completed correctly. This will prevent delays during the review process. 

- **Do** remediate or mitigate all High risks identified during the security assessment. FedRAMP will not issue a “FedRAMP Authorized” designation on the FedRAMP Marketplace if there are open High risks. 

- **Do** ensure that POA&M items can be easily mapped to the [_SAR Risk Exposure Table_](<https://www.fedramp.gov/resources/templates/SAR-Appendix-A-FedRAMP-Risk-Exposure-Table-(RET)-Template.xlsx>). 

- **Do** provide evidence of vendor interactions regarding the status of patches/fixes (e.g., vendor notifications, email exchanges, etc.). 

- **Do** ensure that the information in Column F (Weakness Detector Source) is consistent with Column F (Weakness Detector Source) in the RET

### Don't

- **Don’t** wait until the CSO is FedRAMP Authorized before checking in with vendors on the status of patches/fixes. CSPs should conduct ConMon activities, such as vendor check-ins, while the federal agency AO is reviewing the authorization package.

- **Don’t** put VDs and ORs in the POA&M’s “Closed” tab. VDs and ORs are considered open risks that must be tracked by the CSP.