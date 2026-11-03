# Engine YT — EP01 distribution variant matrix v0.1

**Scope:** `SOURCE_ONLY / NO_RENDER / NO_EXPORT / NO_PUBLICATION / NO_EXECUTION`

## Research motivation

The user shared a screenshot of @asteri_eth proposing a **3 hooks × 3 aspect ratios × 2 calls-to-action = 18** campaign-asset workflow using Remotion, HyperFrames, Playwright and FFmpeg. The post claims benefits of direct `seek(t)` and reuse of scenes. These are **unverified performance claims**, not proof that 18 videos are rendered, pixel-stable, fast, affordable or safe.

**Engine application:** candidate EP01 distribution options, *not* a 25-second commercial campaign. It retains EP01's **45-second unmeasured editorial target**, 9 shots, all mandatory real/hypothetical historical disclosures and the S08/T11 source-board block. The `H1-H3` and `C1-C2` identifiers are blank **placeholders**, not drafted copy or verifiable advertisement claims; no targeting or marketing text is auto-generated.

## Implemented

- `compile-variant-manifest.mjs`: deterministic, dependency-free generation of 18 **metadata candidates** from existing PR #19 handoff and immutable commit-pinned input. No media, scripts, subprocesses, network or installation.
- `spec.unapproved.json`: exact 3×3×2 shape; all claim, rights, layout, audio sync, frame seek, render and publish gates false.
- `example-ep01-no-media.json`: source-only variant matrix with unchanged truth snapshot, empty media paths and all S08/T11 review flags blocked.
- `compile-variant-manifest.test.mjs`: thirteen Node built-in test definitions for matrix cardinality, historical labels, no media, permissions and anti-forgery.

The independent reviewer checks the candidate matrix against the **original source handoff**, not free text supplied by an agent. This is a limited *static consistency check*, not independent factual verification or formal authority.

## Evidence statement

- **12/12 direct pure-function checks** were executed in the tool's isolated JavaScript environment before creating GitHub files.
- **13 native Node test definitions** have been committed but **not run** against the exact committed bytes. Full CI, Windows checks and independent review are pending.
- Source handoff: `engineyt-documentary-production-handoff/0.1`, `ED-CASE-REAL-01`, pinned to PR #19 head commit `5b368f2ef4ae9e4e45177401a80e41572ea63540`.
- No 18 MP4 files, poster, videos, thumbnails, actual subtitles, licensed assets or per-frame quality checks exist in this output.
- There is **no demonstrated** Remotion/HyperFrames compatibility, `seek(t)` frame accuracy, FFmpeg encoder availability, audio-beat sync or "faster than 18 sequential renders" measurement.

To reproduce static test definitions after independent inspection in an authorized no-network lab:

```sh
node --test experiments/offline-edl-v0.1/handoff/variants/compile-variant-manifest.test.mjs
```

This test requires only Node and JSON inputs, not the media pipeline or the protected Engine runner.

## Conditions before qualified rendering

1. Independent validation of claim provenance and approved hook/CTA wording for the intended distribution platform.
2. Immutable media-asset provenance and explicit licensing/consent where relevant.
3. Verified aspect-ratio-specific graphic layouts, readable subtitles and historical/technical truth labels visible for sufficient *measured* frames.
4. No concealment of real vs hypothetical chess events or of omitted moves.
5. S08/T11 technical-to-public-board adjudication before visual staging; S08 remains blocked.
6. Actual measured voice timing, frame-accurate render, pixel/comprehension QC, FFmpeg build/codec licensing and resource/runtime qualification.
7. Strict Policy B process termination & confirmation **before 120 seconds** and independently bounded stdout and stderr lifetime emitted/accepted totals **1,048,576 bytes each**.
8. E5B4D model M **NO-GO**, R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED — **no merge to `main`**, render, export or publication authorization.

## Stacking

This draft branch derives from PR #19 (documentary handoff), which depends on PR #18 (media capabilities) and PR #14 (source EDL). No shared production files altered. The source-only variant matrix does not assert that any branch has passed integration acceptance.
