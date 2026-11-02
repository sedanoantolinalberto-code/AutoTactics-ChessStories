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
- `tests/offline-edl.test.mjs` — 14 Node built-in tests, including negative cases for factuality tampering, rights, time gaps, technical board visibility and release flags.
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

A first isolated pure-function check of the compiler and reviewer in the connected tool runtime passed **12 focused cases** (including adverse mutations) on the unchanged candidate inputs. The GitHub-committed Node test suite is a **reproducibility deliverable**, not claimed to have run in Node, on Windows/Linux or in CI during this change. The later hardening edits to source flag checks and reviewer array checks were not separately runtime-qualified. No gate upgrades are inferred.
