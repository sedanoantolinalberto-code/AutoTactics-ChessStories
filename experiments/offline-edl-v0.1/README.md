# Engine YT — Offline Editorial Decision List (EDL) v0.1

**Disposition:** RESEARCH_CANDIDATE / SOURCE-ONLY / NO-INTEGRATION / NO-RENDER / NO-PUBLISH.  
**Reference:** isolated EP01 candidate branch `chess-stories/ep01-av01-45s-phase-state-candidate-20261026` (not `main`).  
**Scope:** no external service, no new dependency, no third-party source copied, no stock/voice generator, no network, no media processing, no branch merge.

## Purpose and provenance

This is a **working documentary adapter**, not a video editor or renderer. It implements two deliberately limited ideas from reviewed external tools:
1. Scene-oriented non-destructive planning and editable narration/caption proposals (conceptual inspiration: MakeaVideos).
2. Separation of plan compilation and independent static review, with adversarial cases and fail-closed decisions (conceptual inspiration: ECC engineering workflows).

No MakeaVideos or ECC package is installed. No commercial subscription or API key is necessary.

## What is implemented

- `src/compile-draft.mjs` — pure `compileDraft(shotplan, semantic, precedence)`, no I/O. It reads the **existing** 9-shot / 12-event / 45,000-ms **unmeasured editorial target**, checks order and contiguous shot allocations, keeps event-local disclosure labels, checks 14 omitted real plies 36–49, forbids exposing `TECHNICAL_ONLY` state `V-PRE-EV2`, preserves all relevant NO-GO flags, and returns a documentary EDL proposal.
- `src/compile-draft.mjs` — pure `proposeEdit(draft, change)` supports only a separate **unapplied** caption or narration proposal. It never changes original sources or truth labels; independent editorial review is required.
- `src/review-draft.mjs` — separately implemented `reviewDraft(draft, shotplan, semantic)`; it rechecks the EDL against source events, fixed mandatory disclosures, unknown timing, media absence and frozen release flags. `PASS_LIMITED_STATIC_ONLY` is **not** an approval.
- `src/compare-editorial-drafts.mjs` — pure *before/after* comparison allowing **only** narration and caption text changes; all other changes, including timing, source pins, rights/release flags and truth disclosures, fail closed. Outputs an **unapplied** diff requiring human editorial review.
- `src/editorial-target-risks.mjs` — source-only design-density report identifying the pre-existing high-risk S06/S07/S08 segments. Calculated ratios are **not measured voice/frame timing**.
- `source-pins.json` + `tools/verify-source-pins.mjs` — offline Git SHA-1 blob identity checks for the three checked-in EP01 documentary inputs; not an external authenticity attestation.
- `proposals/EP01-45S-EDL-SOURCE-ONLY.v0.1.json` — generated, unapproved EDL document with 9 shots and 12 ordered events.
- `reports/EP01-TARGET-RISK.v0.1.json` — scene pacing flags without audio, frame, or human testing.
- `reports/EP01-INDEPENDENT-STATIC-REVIEW.v0.1.json` — limited static review status, not a release decision.
- `tools/verify-generated-reports.mjs` — read-only, offline deterministic replay of the three checked-in EDL/review/risk JSON artifacts.
- `tests/offline-edl.test.mjs` — **27 Node test definitions**, including adversarial negative cases for source pins, factuality, rights, time gaps, technical board visibility, copy revision, and release flags.
- `proposal.schema.json` — data exchange schema for proposals, not a runner certificate.

## Review model (roles separated)

`EDITORIAL_SOURCE (unapproved) → DRAFT_COMPILER (pure data) → INDEPENDENT_STATIC_REVIEW → HUMAN_ADJUDICATION (pending)`

If source signatures, visuals, timing, rights, semantic legality, or review conditions are unknown, the design retains those unknowns. `S06`, `S07`, and `S08` **do not** acquire artificial per-event timings; `S08/T11` stays without an approved audience board treatment. A claimed source blob pin is Git documentary identity, not independently authenticated raw-byte evidence.

An independent reviewer should also assess the **text** of any proposed narration/caption: structural review does not prove historical truth, comprehensibility, originality or copyright clearance.

## Frozen control state

- E5B4D: **NO-GO under model M**.
- Strict Policy B: all relevant processes terminated and termination confirmed **before 120 seconds**; independent stdout and stderr emitted/accepted lifetime caps of **1,048,576 bytes each**.
- R6 PENDING; IVV_GLOBAL NOT APPROVED; CASE_APPROVAL NOT APPROVED.
- No authorization for integration, execution of the media engine, real render, stock retrieval, voice generation, publication, production CI, or merge to `main`.
- Source shot times are **editorial targets, NOT measurements**. No actual voice alignment, automatic captions, audiovisual synchronization, mobile readability or frame checks have been carried out.

## Read-only, isolated test procedure (future qualified lab only)

On an approved isolated Node.js environment with no network and without granting Engine execution permissions:

```sh
node --test experiments/offline-edl-v0.1/tests/offline-edl.test.mjs
```

These tests exercise pure data compilation and static review; their result cannot qualify the E5B4D runner. They are **not** to be interpreted as authorization to execute the blocked renderer or wider production pipeline.

## Open gates and measurable next steps

1. Independently inspect the generated proposal and adjudicate `S08/T11` under the existing ALT-A no-technical-board-staging proposal.
2. Qualify the adapter/consumer contract **without** merging the project branch into `main`.
3. In a separately approved lab, measure narration segment lengths, real subtitles and scene edit deltas; these are currently null, not inferred.
4. Validate licensed assets, legal chess replay, documentary sources, human comprehension/IVV and Policy B/M before any media runner or output.
5. Reassess whether selective third-party tool licensing yields concrete benefit; do not adopt advertising claims as proof.

## Evidence status

A first isolated pure-function check of the compiler and reviewer in the connected tool runtime passed **12 focused cases** (including adverse mutations) on the unchanged candidate inputs. After further hardening, **24 of the 27 committed test cases** were executed with actual GitHub-sourced module text and EP01 JSON source content in a **V8 JavaScript harness with emulated read-only file access**: **24 PASS, 0 FAIL**. The remaining **3 Node-specific checks** (actual checkout-file Git blob identity, SHA-1 reference vector, and the read-only full report replay) were **not executed as part of the committed native Node test suite**. Separately, the SHA-1 reference vector was checked using Node v22.16.0 in an isolated container, but the GitHub repository files were not available inside that Node checkout. **The three generated EDL/risk/review JSON files were separately compared with fresh V8-generated results and **all 3 matched**. No completed native Node suite run, CI run, Windows run, cross-platform verification, E5B4D runner qualification, or audiovisual test is claimed.** No gate upgrades are inferred.

## 2026-11-02 isolated extension and ready-to-review handoff

- **Working branch:** `research/engineyt-offline-edl-ecc-review-v01-20261102`.
- **Draft PR:** [#14](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/pull/14) targeting the prior EP01 candidate branch, **not `main`**.
- **Safe next test:** in an authorized isolated checkout with Node.js, run `node --test experiments/offline-edl-v0.1/tests/offline-edl.test.mjs`. Do not infer production runner permission from a passing result.
- **Source verification:** the two Node-specific tests validate the three exact local Git blob identities and a known SHA-1 vector.
- **No adoption of third-party code:** neither ECC nor MakeaVideos code has been copied, installed, paid for or contacted. Only general workflow ideas were implemented independently.
- **Unresolved:** historical primary sources and chess oracle, `S08/T11` presentation, `S06/S07` comprehension, rights/voice/font clearance, measured audio timings, real subtitles, human IVV, Policy B/M qualification.
- **Do not merge**, and do not run any blocked media execution/publishing tasks as part of this experiment.
