# EP01 R6 clean-room production baseline v0.1

**Status:** design choice only; **not commercial clearance**. R6 remains **PENDING**.

## Decision

For EP01 production, do not make the release depend on recovering the provenance of the old v4 stills, their unidentified piece silhouettes or the unidentified DejaVu-family binary. Treat those items as **reference-only**.

The intended release baseline is instead:

- a newly authored procedural board and piece set made from project-owned geometry, without tracing or importing a third-party chess-piece artwork;
- a later-selected exact font binary whose version, SHA-256 and license are recorded before render use;
- original EP01 script/captions;
- a specifically selected commercial voice/TTS and music/SFX package, or an explicit editorial decision to omit music;
- a final render manifest that enumerates every actual upstream asset.

## Typography candidate

**Noto Sans** is the preferred candidate, not yet an asset-bound clearance. Official Noto documentation states that Noto fonts are under the Open Font License and may be used in commercial print or digital products. Google Fonts metadata identifies the current Noto Sans family as `license: OFL`.

Sources:
- https://notofonts.github.io/
- https://github.com/google/fonts/blob/main/ofl/notosans/METADATA.pb
- https://scripts.sil.org/OFL

Before use, bind one exact binary by filename, version and SHA-256, preserve the relevant license text, and review whether the distribution method embeds or redistributes font software. Do not infer clearance for an unidentified local font merely from the family name.

## Historical material exclusion

The US Chess archive itself states that its PDFs are available for personal and research use only and directs users to seek permission for uses beyond fair use:
https://new.uschess.org/chess-life-digital-archives

Accordingly, the default EP01 release baseline excludes:
- *Chess Life* and *Chess Review* page/cover facsimiles;
- the historical scoresheet photograph;
- third-party player photographs;
- reproduced Kmoch annotation prose.

These materials may remain research evidence. They can enter release media only through a separately documented permission or competent fair-use decision. Their exclusion does not weaken the historical sourcing requirement for factual claims.

## Consequence for the rights ledger

“Excluded from release baseline” means **not used**, not “cleared”. If any excluded item later appears in a stimulus, thumbnail, newsletter, eBook or video, it becomes an active R6 dependency again.

This policy reduces the number of legacy provenance recoveries needed for a future release, but it does not change any frozen state: R6 PENDING, IVV_GLOBAL NOT APPROVED, ED-CASE-REAL-01 NOT APPROVED, E5B4D NO-GO under M, and no publication permission.
