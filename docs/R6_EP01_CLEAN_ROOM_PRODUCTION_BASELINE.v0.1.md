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

## 2026-10-14 — Source-only piece-placement bridge

For the six EP01 candidate positions, `design/EP01-FEN-PIECE-PLACEMENTS.v0.1.json` expands the FEN text from draft PR #1 into per-square records with proposed references to the six piece geometry primitives. Its static review is `docs/EP01-SIX-BOARD-OCCUPANCY-STATIC-REVIEW.md`.

The documentary expansion yields source-declared 25/25/24/25/20/19 pieces respectively across V-P1/V-EV1/V-REAL/V-HYP/V-PRE-EV2/V-EV2, with six event move origin/target/capture **text-field** correspondences T02/T03/T06/T08/T09/T11. This agreement is **not an independent chess-rules check** and does not validate the historical source or FEN legality: all values were derived from the same PR #1 fixture. The test-like field comparisons were conducted during document authoring using connected GitHub text, **not** by running AutoTactics project code, chess libraries or tests.

The visual interface must bind board squares and branch truth *separately*. A matching 8×8 position does not reveal whether a clip is within the unplayed ALT_QD8 branch. The ellipsis destination V-PRE-EV2 may be used as a clearly disclosed landing state before 25...Nxd1 but cannot be shown as the result of a fictitious direct legal move from V-REAL. Commercial provenance and accessibility remain pending.


## 2026-10-14 — Noto Sans licensing evidence and asset-bound gap

Research-only source cross-check of the **official Noto project**:
- Official typography use FAQ: https://github.com/notofonts/noto-docs/blob/main/docs/website/use.md — describes Noto fonts under the **SIL Open Font License** and states commercial print/digital use is allowed, subject to license conditions; fonts must not be sold as standalone font software.
- License text: https://github.com/notofonts/noto-fonts/blob/main/LICENSE — SIL OFL **v1.1** terms distinguish using fonts to produce a document or video from redistributing actual font software, and place conditions on bundling, notices, modifications and reserved names.
- The old `notofonts/noto-fonts` general monorepo is **archived/migrated**, not an assurance that any unpinned `main` checkout reflects the current build. The Noto project provides newer family-specific repositories; a **specific file and release** must be selected later, not guessed from a family name.

**Decision recorded:** `Noto Sans` remains the **preferred font candidate**, not a selected release artifact. No `.ttf`/`.otf` font binary, executable tool, stylesheet, external SVG or license bundle was added here. Do not claim a font family URL establishes rights to an unidentified local binary.

**Future asset-bound font record, all unset today:** exact family/subfamily (including variable-vs-static and weight), filename, upstream immutable release/commit, downloadable upstream artifact location, complete downloaded byte hash SHA-256 measured by a qualified mechanism, license text/copyright holders/reserved names and whether the font software is embedded/distributed or only rasterized into final media, plus a separate review of the implemented text UI across devices. Only a competent independent rights review may close the R6 font component; this memo cannot close R6 for other assets.

No commercial-rights `PASS` is claimed, and no output/caption font preview has been rendered or device-tested. **R6 PENDING**, E5B4D NO-GO under M, Policy B unchanged, IVV_GLOBAL and CASE_APPROVAL NOT APPROVED, publish false.

## 2026-10-14 — VIS-TECH-01 technical state cannot silently become production graphic

The FEN inventory includes `V-PRE-EV2` for **data representation only**, because the semantic case explicitly marks it `TECHNICAL_ONLY`. It must not be counted as a sixth audience-visible board/still. PR #4's visual phase-binding source now separates T10's internal endpoint from its screen board and marks T11 staging as unresolved. No rights, originality, device or semantic renderer review authorizes making that technical state public; VIS-TECH-01 remains an active production blocker in issue #8. R6 PENDING.

## 2026-10-14 — VIS-TECH-01 ALT-A candidate reduces technical source exposure

PR #4 now proposes **ALT-A**, a static **after-position-only** cut for T11: T10 retains visible V-REAL with the fourteen-plies-omitted overlay, then T11 displays **VISUAL V-EV2** with a static capture/d1 callout and never draws TECHNICAL_ONLY V-PRE-EV2. Therefore an additional audience-visible bitmap/still for V-PRE-EV2 is **not required by this candidate**, and the six-entry FEN occupancy registry remains purely technical source data. The previous T11 staging blocker has a design alternative, **not a rendered/commercially cleared resolution**. R6, human IVV, qualified rules replay and strict Policy B remain unfulfilled.
