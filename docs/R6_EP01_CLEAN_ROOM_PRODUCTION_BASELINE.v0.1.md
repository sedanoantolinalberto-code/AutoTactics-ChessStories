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


## 2026-10-14 — Silent-first private stimulus **proposal** (no production)

For the **first potential lawful comprehension-only stimulus**, prefer a deliberately silent, caption-and-board-only research variant derived from the existing twelve-event EP01 truth overlays (PR #11) and the alternative 45s/60s editorial targets (PR #4). This is a **design choice for a future evaluation**, not the channel's final audio strategy and not a current authorization to build or show a stimulus.

### Planned scope

- **No external music or sound effects:** no music/SFX files may be embedded or required in this deliberately silent candidate.
- **No recorded or synthetic voice:** the first silent candidate contains no voice file, speaker impersonation, speech recording, or external TTS output. The Spanish script stays as editorial text reference; all factual real/hypothetical/return/ellipsis distinctions must be visible as text and board state without sound.
- **Project-owned geometry remains only proposed:** the board and piece set must be newly authored and independently assessed for originality/provenance. An existing v4 raster/vector/silhouette is not silently reused.
- **Font is not selected yet:** a later exact binary/version, license, hash and use-mode review are still prerequisites. Noto Sans remains candidate-only, not a verified installed or released asset.
- **Exclude all archival facsimiles and third-party portraits:** use historical periodicals and scoresheets for private research citations only, not as imagery in the stimulus.
- **No media is made by this specification:** even a silent internal stimulus would still depend on lawful graphics and font, preapproved protocol/consent if exposed to humans, and separately qualified execution under Policy B/model M.

### Dependency accounting

Under this **specific proposed silent configuration**, the *voice* and *music/SFX* roles would be marked `NOT_USED_IN_SILENT_STIMULUS` **only after** the eventual media manifest confirms absence. This is **not** `CLEARED` for those assets and does **not** change their standing in the R6 ledger or in any later voiced/public version. A separate narrated cut would reactivate exact voice/TTS/audio terms and evidence.

**No R6 gate promotion.** The planned omission of two asset categories reduces prospective dependencies, but it does not establish rights in geometry/font/script/finished media, source authenticity, legal chess playback or viewer comprehension. R6 PENDING; IVV_GLOBAL NOT APPROVED; CASE_APPROVAL NOT APPROVED; E5B4D NO-GO under M; strict Policy B and publication prohibition unchanged. No execution, render, tests, human recruitment, or `main` merge.


## 2026-10-14 — Candidate vector source, not an asset license

`design/EP01-CLEANROOM-VECTOR-GEOMETRY.v0.1.json` is now a **newly drafted declarative design candidate**, not a production-rendered image. It describes a proposed 8×8 board layout, paired piece contrast styles and six original-geometry **candidates** using basic shapes/path coordinates, plus provisional 9:16 and 16:9 layout zones. The data is not imported from v4 assets, chess-font binaries, magazine facsimiles or external SVG libraries.

**Critical distinctions:** This record does **not** prove uniqueness or independently certify copyright originality; a rights reviewer must inspect final implemented asset bytes and dependencies. The selected font, exact file/hash, screen legibility, safe areas, color accessibility, image quality, motion consistency and media asset manifest remain unset/unreviewed. No renderer, picture, vector export, test, human viewing, legal chess engine or GitHub Action was invoked to make it. R6 remains PENDING and all existing NO-GO gates remain frozen. Do not silently mark `BOARD-V-*` legacy raster classes as cleared merely because candidate replacement source exists.
