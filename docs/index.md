# 20x Phase Two

This page is the authoritative repository for FedRAMP 20x Phase Two pilot requirements.

!!! tip "Machine-Readable Docs"
    Machine-readable requirements are available in the [FedRAMP 20x Machine Readable Docs](https://github.com/FedRAMP/docs) repository on GitHub. Participants are strongly encouraged to leverage the underlying machine-readable documentation to simplify addressing all requirements and recommendations. All of the materials on this page are generated automatically from these machine-readable materials.

## Important Documentation Guidelines

### Definitions

Terms with FedRAMP-specific meaning are _italicized_ in all FedRAMP 20x documents. Some of these terms may be familiar from historical use, others may at times be similar to commonly used terms, but **any time a FedRAMP definition exists for a term it is authoritative in the context of FedRAMP 20x.** 

If a term is not defined by FedRAMP then the rules of common plain language apply - don't overthink it.

### Capitalized Key Words

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