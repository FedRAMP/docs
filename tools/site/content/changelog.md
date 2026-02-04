# Documentation Changelog

!!! info "Additional Technical Information"

    The [FedRAMP Machine-Readable Documentation](https://github.com/FedRAMP/docs/releases)
    releases page contains additional technical information about underlying changes
    to the machine-readable materials and the management of this site.

    This changelog page only tracks major releases.

---

## v0.9.0-beta released Feb 4, 2026

This release includes a significant rework of
[FedRAMP Machine-Readable Documentation](https://github.com/FedRAMP/docs),
affecting both 20x and Rev5 Balance Improvement Release materials.

This rework applies lessons learned from the alpha of these materials to
improve function, layout, readability, and the ability to directly reference
requirements and recommendations. Some requirements and recommendations have
been updated for clarity or reorganized but in general **there are no significant
changes to the guidance itself.**

### Specific Changes of Note

1. The Minimum Assessment Scope has been simplified considerably.

2. The `Recommended Secure Configuration` process has been renamed to `Secure Configuration Guide`; this has been simplified by combining a few requirements and recommendations for clarity and establishing a separate `Enhanced Capabilities` section for recommendations.

3. The FedRAMP Security Inbox has been updated to generally change use of "respond" (or similar) to "react" (or similar) to clarify that a reply via email is not always the expected reaction.

### General Display Changes

The following changes will be noted by humans using these materials:


1. Individual FRR and KSI identifiers have all been renamed to make them easier to reference and avoid future gaps:

    - Numbers have been removed
    - Each id is now 3x3 letters, such as `FSI-FRP-VRE` instead of `FRR-FSI-01`
        - The first three indicate the process
        - The second three indicate the subset, theme, or group
        - The third three are the specific item
    - The previous identifier is included as an `fka` string or `fkas` array if applicable

2. FRD identifiers have been simplified to 2x3 letters, with the first indicating they are a definition and the second indicating the item, such as `FRD-ACV` instead of `FRD-ALL-31`

3. All requirements, recommendations, and key security indicators have been given a human-readable name; those that already had human-readable names have been updated for clarity in many cases.

4. Changes to individual items will be tracked individually moving forward and can be reviewed by expanding the identifier box under the name.
 
5. All items that varied by impact level or category have been combined to avoid repeat rules assigned to different impact levels. If a requirement, recommendations, or key security indicator varies by level then a selection box appears for each level.

6. Many of the traditional application (`-AY-`) sections have been removed and repurposed as notes on specific requirements and recommendations, matching their intent.

7. Technical assistance has been folded into the specific requirements and recommendations as appropriate.

8. All requirements, recommendations, and key security indicators have been re-ordered for clarity and readability.

9. FedRAMP defined terms are now listed in each item where they are used with a link to the definition and a hover-based tooltip; these terms were previously italicized.

10. Some requirements and recommendations are now Rev5 or 20x specific; these are only displayed in the respective documentation section.

11. Key security indicators are now grouped and displayed by theme instead of all being on one very long page.

12. Items with notification requirements are explicitly highlighted.



### Machine-Readable Changes

The underlying JSON data has gone through considerable change; technical implementers should review the core JSON data.

**In general this should be the last significant shift like this of the underlying JSON data. There may be minor tweaks here and there to metadata but further restructuring is unexpected at this time. Apologies and thank you for participating in the alpha!**

1. All individual JSON files have been combined into one. The new singular JSON data is structured with major sections for FRD, FRR, and KSI.

2. All the release history per section has been removed; individual items now contain their own `updated` array.

3. Each item has either an `fka` string with the previous id or an `fkas` array with all previous ids where items were combined. This allows for easier migrating from previous versions; you'll need to script a map or similar against these to bring information you've populated against the previous ids into the new ids.

4. Some items have a new `varies_by_level` object that includes a different `statement` depending on the impact level.

5. Tried to add additional timeframe and notification metadata bits; these are still being refined and can be ignored.

6. Added a `terms` array, built by keyword search, to flag when a defined term appears.

7. Many various other smaller changes here and there.







