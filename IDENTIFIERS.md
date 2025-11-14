# Understanding FedRAMP's 20x Documentation Identifiers

To enhance clarity, consistency, and prepare our documentation for future
machine-readable applications, FedRAMP is exploring a standardized system for
identifying specific rules, definitions, and guidance. This new approach will
apply across all FedRAMP 20x materials.

You will begin to see these unique identifiers, or "designators," in our newly
published and updated content. This page explains the structure and purpose of
these designators.

## How These Designators Look

Designators include a prefix, a label, an optional suffix, then a number.

### Prefixes

- `FRD-`: FedRAMP Definitions
- `FRR-`: FedRAMP Requirements
- `FRA-`: FedRAMP Technical Assistance
- `KSI-`: Key Security Indicator

### Labels

- `KSI`: Key Security Indicators _(this can be either a prefix or a label)_
- `MAS`: Minimum Assessment Standard
- `SCN`: Significant Change Notifications
- `ADS`: Authorization Data Sharing Standard
- `ALL`: Applies to all documents, used for definitions and general rules

**Key Security Indicator Labels:**

- `AFR`: Authorization by FedRAMP
- `CED`: Cybersecurity Education
- `CMT`: Change Management
- `CNA`: Cloud Native Architecture
- `IAM`: Identity and Access Management
- `INR`: Incident Reporting
- `MLA`: Monitoring, Logging, and Auditing
- `PIY`: Policy and Inventory
- `RPL`: Recovery Planning
- `SVC`: Service Configuration
- `TPR`: Third-Party Information Resources



### Suffixes

- `-AY`: "Apply" requirements add clarifying information on application of the
  overall standard 
- `-EX`: "Exception" requirements note circumstances where exceptions may be granted to the requirements

## Examples

Here are a few examples to illustrate the format:

- `FRD-ALL-01`: A **definition** for all FedRAMP materials:

  - `FRD` indicates a FedRAMP Definition.
  - `ALL` specifies it applies to all FedRAMP materials.
  - `01` is the unique number for that definition within the FRD-ALL.

- `FRR-KSI-03`: A **requirement** for **Key Security Indicators**:

  - `FRR` indicates a FedRAMP Requirement.
  - `KSI` notes it is from the Key Security Indicators Standard.
  - `03` indicates it is the third rule within the KSI.


- `FRR-MAS-AY-01`: A **requirement** related to application of the **Minimum Assessment Standard**:

  - `FRR` indicates a FedRAMP Requirement.
  - `MAS` specifies it's from the Minimum Assessment Standard.
  - `AY` indicates this is guidance on Applying the MAS.
  - `01` is the unique number for this guidance.

- `KSI-EXM-01`: A specific **Key Security Indicator** capability.

  - `KSI` indicates a Key Security Indicator.
  - `EXM` is the three-letter code for a specific KSI category.
  - `01` is the unique number for that capability.

