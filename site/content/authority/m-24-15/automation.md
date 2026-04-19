# M-24-15 Section V. Automation and Efficiency

As part of a technology-forward program optimized for efficiency and
consistency, FedRAMP processes should be automated wherever possible to support
the rapid delivery of services and improve security outcomes.[^24] GSA must
establish a means of automating FedRAMP security assessments and reviews, and
agency and CSP reuse of an existing authorization.[^25] To ensure that GSA meets
that requirement, FedRAMP should receive all artifacts in the authorization
process and continuous monitoring process as machine-readable data,[^26] through
application programming interfaces (APIs), to the extent feasible. The package
exchange APIs should support predictable and self-service integration between
services operated by FedRAMP and by CSPs. The FedRAMP PMO, in consultation with
the FedRAMP Board, will explore the use of Artificial Intelligence (AI) in the
FedRAMP security assessment review and continuous monitoring processes. FedRAMP
will begin by piloting the use of this emerging technology to determine
feasibility and utility in an effort to improve security outcomes and
scalability.

## Interoperability

Automation relies on interoperable standards.[^27] The FedRAMP PMO will work
with OMB, NIST, and CISA, as well as private-sector providers of governance,
risk, and compliance tools, to provide for the submission of security assessment
artifacts and continuous monitoring information using Open Secure Control
Assessment Language (OSCAL) or any succeeding protocol as defined by FedRAMP.
FedRAMP must facilitate interoperability, and develop and publish relevant
standards for that transition. Agencies must have the necessary procedures in
place to produce, accept, and submit materials in machine-readable formats. The
FedRAMP PMO will also identify additional FedRAMP processes in need of
automation to promote efficiency and effectiveness within the program, and
facilitate broader access to FedRAMP artifacts for agency partners with a
mission need.[^28]

## Service Inventories

Automating the FedRAMP process goes beyond technical implementation to
procedural efficiencies. To streamline the authorization of cloud products and
services, FedRAMP must maintain an inventory of the services that constitute a
CSO and provide per-service customer adoption assets, including relevant control
responsibilities, inheritance, and secure implementation guidance. FedRAMP will
analyze these assets to create guidance that supports CSPs and agencies in
streamlining the authorization process for cloud products and services that use
FedRAMP-authorized infrastructure or platforms.

## Reusing Existing Certifications 

Many existing CSOs have implemented or received certifications based on external
security frameworks. Performing an additional assessment of each offering every
time a product that uses an existing certification goes through the FedRAMP
process unnecessarily slows the adoption of such cloud computing products and
services by the Federal Government. Therefore, FedRAMP will establish criteria
for accepting widely-recognized external security frameworks and certifications
applicable to cloud products and services, based on FedRAMP's assessment of
relevant risks and the needs of Federal agencies. This will include leveraging
external security control assessments and evaluations in lieu of newly performed
assessments, as well as designating certifications that can serve as a full
FedRAMP authorization, if appropriate. The use of external security assessments
will target offerings that are FIPS 199 impact level low, and may include higher
impact level recognition where sufficient harmonization and coordination is
present between FedRAMP and external frameworks.[^29] Regardless of the path to
authorization, all cloud services must meet the FedRAMP continuous monitoring
requirements for the selected impact level.

## Risk Management

In accordance with guidance provided by FedRAMP, agencies may make risk
management decisions regarding acceptable controls, which may include allowing
compensating controls or risk-acceptance for certain situations or types of
cloud offerings where there are gaps or misalignments between Federal and
external security frameworks. FedRAMP may also justify acceptance of a given
level of security risk to support broader interoperability with industry
security processes, reduced burden on providers, or further streamlining of
FedRAMP authorizations and processes. Risk acceptance determinations must align
with the guidance and requirements established by the FedRAMP Board. FedRAMP
authorizations that leverage external frameworks shall also be presumed
adequate.

[^22]:
    NIST SP 800-37, _Risk Management Framework for Information Systems and
    Organization_, includes discussion of issuing authorizations for a short
    period of time.

[^23]:
    FedRAMP will provide additional procedures related to this trial process,
    and agencies are encouraged to coordinate with FedRAMP to ensure that there
    is no potential gap in service when the trial period concludes.

[^24]: 44 U.S.C. § 3609(c).
[^25]: _Id._ § 3609(c)(2).
[^26]:
    Artifacts in PDF, Word, or similar formats optimized for human readability
    should not be considered machine- readable data in this context because they
    will not be as effective for reliably automating program processes as data
    formats optimized for machine-based consumption (such as JSON, XML, and
    related formats).

[^27]:
    FedRAMP has identified NIST's Open Secure Control Assessment Language
    (OSCAL) as the machine-readable, standardized data format. Agencies must use
    OSCAL until such time as NIST formally designates a successor.

[^28]:
    Access processes should be streamlined to expand the number of individuals
    who can approve access, as well as streamline and broaden access for those
    with a need-to-know. This will also be accompanied by expanding the nature
    and scope of artifacts provided in a machine-readable format, including
    control inheritance artifacts.

[^29]:
    Refer to
    [NIST FIPS Publication 199, Standards for Security Categorization of Federal Information and Information Systems](http://csrc.nist.gov/publications)
    for additional information regarding security categorization of information.
