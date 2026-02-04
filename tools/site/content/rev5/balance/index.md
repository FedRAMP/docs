# Rev5 Balance Improvement Releases

!!! info "Maintaining Rev5 Balance"
    Congress and OMB directed FedRAMP to modernize assessment, authorization, and continuous monitoring for federal cloud services; that work is being developed as [FedRAMP 20x](https://fedramp.gov/20x). FedRAMP is carefully integrating select 20x improvements into Rev5—balancing modernization with stability—to minimize disruption for existing Rev5 Authorized providers.

## Mandatory Balance for Rev5

These policies apply directly to Rev5 cloud service offerings and are **mandatory** for cloud service providers to maintain their FedRAMP authorization.

!!! danger "Mandatory Implementation"
    **All** requirements and recommendations in these policies must be addressed by the Effective Date(s) listed in the policy.

| Policy | Effective Date(s) |
| -- | -- |
| [FedRAMP Security Inbox](fedramp-security-inbox) | January 5, 2026 | 
| [Secure Configuration Guide](secure-configuration-guide) _(formerly called "Recommended Secure Configuration")_ | March 1, 2026 |

## Optional Balance for Rev5

These policies may be adopted by Rev5 cloud service offerings following the Rev5-specific process outlined in the policy.

!!! warning "Do not adopt these policies without FedRAMP review!"
    Providers MUST work with FedRAMP while adopting these policies, following all relevant instructions. Providers MUST NOT adopt any optional policy without a plan to address all requirements and obtain concurrence from all active agency customers.

### Wide Releases

| Process | Overall Balance Status |
| -- | -- |
| [Minimum Assessment Scope](minimum-assessment-scope) | Optional Wide Release begins January 12, 2026|
| [Significant Change Notifications](significant-change-notifications) | Optional Wide Release begins February 27, 2026 (tentative)|

### Betas

| Process | Overall Balance Status |
| -- | -- |
| [Authorization Data Sharing](authorization-data-sharing) | Open Beta will run from February 2 to May 22, 2026|
| [Vulnerability Detection and Response](vulnerability-detection-and-response) | Open Beta will run from February 2 to May 22, 2026|
| [Collaborative Continuous Monitoring](collaborative-continuous-monitoring) | Closed Beta will run from February 2 to May 22, 2026|

---

## FedRAMP Defined Terms

FedRAMP has created authoritative definitions for a number of terms used
within these materials; everyone should be familiar with these definitions
to best understand the materials. In some cases these definitions may
explain that FedRAMP applies a different context than folks are used to when
using a specific word.

If a term is not defined by FedRAMP then the rules of common plain language
apply - don't overthink it.

## Capitalized Key Words

The capitalized key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this documentation are to be interpreted as described in [IETF RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).

!!! warning "Confusion over SHOULD"
    The use of "SHOULD" does not just make something optional for fun - there must be a valid reason not to implement a recommendation that has been carefully weighed. For FedRAMP 20x, cloud service providers MUST document this reasoning in their authorization package. 
    
    Cloud service providers who do not implement recommendations may also be assessed as being less secure than those who do and may be less likely to be reused by federal agencies.


??? quote "RFC 2119 Key Word Summary"
    1. MUST   This word, or the terms "REQUIRED" or "SHALL", mean that the
    definition is an absolute requirement of the specification.

    2. MUST NOT   This phrase, or the phrase "SHALL NOT", mean that the
    definition is an absolute prohibition of the specification.

    3. SHOULD   This word, or the adjective "RECOMMENDED", mean that there
    may exist valid reasons in particular circumstances to ignore a
    particular item, but the full implications must be understood and
    carefully weighed before choosing a different course.

    4. SHOULD NOT   This phrase, or the phrase "NOT RECOMMENDED" mean that
    there may exist valid reasons in particular circumstances when the
    particular behavior is acceptable or even useful, but the full
    implications should be understood and the case carefully weighed
    before implementing any behavior described with this label.

    5. MAY   This word, or the adjective "OPTIONAL", mean that an item is
    truly optional.  One vendor may choose to include the item because a
    particular marketplace requires it or because the vendor feels that
    it enhances the product while another vendor may omit the same item.
    An implementation which does not include a particular option MUST be
    prepared to interoperate with another implementation which does
    include the option, though perhaps with reduced functionality. In the
    same vein an implementation which does include a particular option
    MUST be prepared to interoperate with another implementation which
    does not include the option (except, of course, for the feature the
    option provides.)