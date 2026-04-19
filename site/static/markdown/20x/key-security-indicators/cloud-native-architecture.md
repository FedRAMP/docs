# Cloud Native Architecture

!!! info ""

    A secure cloud service offering will use cloud native architecture and design principles to enforce and enhance the confidentiality, integrity and availability of the system.


### Defining Functionality and Privileges

??? abstract "KSI-CNA-DFP"

    **Former ID:** KSI-CNA-04

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Strictly define the functionality and privileges for infrastructure and services.

    **Related SP 800-53 Controls:** [CM-2](https://controlfreak.risk-redux.io/controls/CM-02), [SI-3](https://controlfreak.risk-redux.io/controls/SI-03)




### Enforcing Intended State

??? abstract "KSI-CNA-EIS"

    **Former ID:** KSI-CNA-08

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    === "Low"
        **Optional:** Use automated services to persistently assess the security posture of all machine-based information resources and automatically enforce their intended operational state.


    === "Moderate"
        Use automated services to persistently assess the security posture of all machine-based information resources and automatically enforce their intended operational state.



    **Related SP 800-53 Controls:** [CA-2.1](https://controlfreak.risk-redux.io/controls/CA-02(01)), [CA-7.1](https://controlfreak.risk-redux.io/controls/CA-07(01))


    ---
    **Terms:** [Information Resource](../fedramp-definitions/#information-resource){ data-preview }, [Machine-Based (information resources)](../fedramp-definitions/#machine-based-information-resources){ data-preview }, [Persistently](../fedramp-definitions/#persistently){ data-preview }



### Implementing Best Practices

??? abstract "KSI-CNA-IBP"

    **Former ID:** KSI-CNA-07

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Persistently ensure cloud-native machine-based information resources are implemented based on the host provider&#x27;s best practices and documented guidance.

    **Related SP 800-53 Controls:** [AC-17.3](https://controlfreak.risk-redux.io/controls/AC-17(03)), [CM-2](https://controlfreak.risk-redux.io/controls/CM-02), [PL-10](https://controlfreak.risk-redux.io/controls/PL-10)


    ---
    **Terms:** [Information Resource](../fedramp-definitions/#information-resource){ data-preview }, [Machine-Based (information resources)](../fedramp-definitions/#machine-based-information-resources){ data-preview }, [Persistently](../fedramp-definitions/#persistently){ data-preview }



### Minimizing Attack Surface

??? abstract "KSI-CNA-MAT"

    **Former ID:** KSI-CNA-02

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Persistently ensure machine-based information resources have a minimal attack surface and that lateral movement is minimized if compromised.

    **Related SP 800-53 Controls:** [AC-17.3](https://controlfreak.risk-redux.io/controls/AC-17(03)), [AC-18.1](https://controlfreak.risk-redux.io/controls/AC-18(01)), [AC-18.3](https://controlfreak.risk-redux.io/controls/AC-18(03)), [AC-20.1](https://controlfreak.risk-redux.io/controls/AC-20(01)), [CA-9](https://controlfreak.risk-redux.io/controls/CA-09), [SC-7.3](https://controlfreak.risk-redux.io/controls/SC-07(03)), [SC-7.4](https://controlfreak.risk-redux.io/controls/SC-07(04)), [SC-7.5](https://controlfreak.risk-redux.io/controls/SC-07(05)), [SC-7.8](https://controlfreak.risk-redux.io/controls/SC-07(08)), [SC-8](https://controlfreak.risk-redux.io/controls/SC-08), [SC-10](https://controlfreak.risk-redux.io/controls/SC-10), [SI-10](https://controlfreak.risk-redux.io/controls/SI-10), [SI-11](https://controlfreak.risk-redux.io/controls/SI-11), [SI-16](https://controlfreak.risk-redux.io/controls/SI-16)


    ---
    **Terms:** [Information Resource](../fedramp-definitions/#information-resource){ data-preview }, [Machine-Based (information resources)](../fedramp-definitions/#machine-based-information-resources){ data-preview }, [Persistently](../fedramp-definitions/#persistently){ data-preview }



### Optimizing for Availability

??? abstract "KSI-CNA-OFA"

    **Former ID:** KSI-CNA-06

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Appropriately optimize machine-based information resources for high availability and rapid recovery.


    ---
    **Terms:** [Information Resource](../fedramp-definitions/#information-resource){ data-preview }, [Machine-Based (information resources)](../fedramp-definitions/#machine-based-information-resources){ data-preview }



### Restricting Network Traffic

??? abstract "KSI-CNA-RNT"

    **Former ID:** KSI-CNA-01

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Persistently ensure all machine-based information resources are configured to limit inbound and outbound network traffic.

    **Related SP 800-53 Controls:** [AC-17.3](https://controlfreak.risk-redux.io/controls/AC-17(03)), [CA-9](https://controlfreak.risk-redux.io/controls/CA-09), [CM-7.1](https://controlfreak.risk-redux.io/controls/CM-07(01)), [SC-7.5](https://controlfreak.risk-redux.io/controls/SC-07(05)), [SI-8](https://controlfreak.risk-redux.io/controls/SI-08)


    ---
    **Terms:** [Information Resource](../fedramp-definitions/#information-resource){ data-preview }, [Machine-Based (information resources)](../fedramp-definitions/#machine-based-information-resources){ data-preview }, [Persistently](../fedramp-definitions/#persistently){ data-preview }



### Reviewing Protections

??? abstract "KSI-CNA-RVP"

    **Former ID:** KSI-CNA-05

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Persistently review the effectiveness of protection against denial of service attacks and other unwanted activity.

    **Related SP 800-53 Controls:** [SC-5](https://controlfreak.risk-redux.io/controls/SC-05), [SI-8](https://controlfreak.risk-redux.io/controls/SI-08), [SI-8.2](https://controlfreak.risk-redux.io/controls/SI-08(02))


    ---
    **Terms:** [Persistently](../fedramp-definitions/#persistently){ data-preview }



### Using Logical Networking

??? abstract "KSI-CNA-ULN"

    **Former ID:** KSI-CNA-03

    **Changelog:**

    - **2026-02-04:** Removed italics and changed the ID as part of new standardization in v0.9.0-beta; no material changes.



!!! quote ""

    Use logical networking and related capabilities to enforce traffic flow controls.

    **Related SP 800-53 Controls:** [AC-12](https://controlfreak.risk-redux.io/controls/AC-12), [AC-17.3](https://controlfreak.risk-redux.io/controls/AC-17(03)), [CA-9](https://controlfreak.risk-redux.io/controls/CA-09), [SC-4](https://controlfreak.risk-redux.io/controls/SC-04), [SC-7](https://controlfreak.risk-redux.io/controls/SC-07), [SC-7.7](https://controlfreak.risk-redux.io/controls/SC-07(07)), [SC-8](https://controlfreak.risk-redux.io/controls/SC-08), [SC-10](https://controlfreak.risk-redux.io/controls/SC-10)



