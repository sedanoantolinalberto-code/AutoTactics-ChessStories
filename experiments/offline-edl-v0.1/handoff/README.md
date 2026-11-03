# Engine YT — Documentary Handoff Gates v0.1

**Status:** `EXPERIMENTAL / SOURCE-ONLY / NO-RENDER / NO-DIRECT-EDITOR-WRITES / NO-PUBLISH`.

This is a draft **metadata** contract for EP01/Chess Stories, stacked on the unmerged media-capability research PR #18 (and therefore also dependent on the offline EDL PR #14). It is not a CapCut plugin, installer, storyboard generator, video creator, voice aligner or native project writer.

## Research input — limited provenance

The user submitted a third-party CapCut/Claude editing automation package and accompanying documentation. The original package was statically inspected **without executing scripts**; the parent Drive item's visibility could not be verified and **no file from it is redistributed in this public repository**. The abstract workflow is:
- source-backed script → human script approval;
- recorded voice → actual word-level timestamps, not estimated line lengths;
- approved character sheet → visual identity consistency across shots;
- source-backed licensed images/audio → per-shot quality review;
- editable timeline → independent validation and safe recovery before export.

The package's native CapCut project writer is **not** adopted. Its scripts can install dependencies automatically, download model files, run FFmpeg subcommands without universal hard deadlines, and overwrite draft project JSON/copies. Backups are offered but there is no demonstrated complete transaction/rollback guarantee. Any eventual CapCut integration requires independently qualified version support, license review, original-byte verification, an explicitly authorized **read-only clone-first** study and a separate process-boundary signoff.

Further references:
- Source-only EDL and scene truth: parent PR #14.
- Media capability candidates, no execution: parent PR #18.
- Long-video production ideas in an online tutorial: text→shots→identity locking→per-shot visual QC→assembly→voice. These are **methodology observations**, not evidence of accuracy, ownership or monetization.
- No claims of automatic compilation into native CapCut, Premiere, Resolve, Remotion, HyperFrames or other editor formats.

## What this module does

- `build-handoff.mjs`: original pure function `createDocumentaryHandoff(edl,config)` creates **nine** per-shot non-renderable metadata proposals and **eight** unverified gates; it preserves all 12 exact event truth labels including the never-played 17...Qd8 and the 14 omitted real half-moves 36–49. No assets or timing measurements are fabricated.
- `build-handoff.mjs`: `independentReviewHandoff(candidate,edl)` separately verifies non-authority, unchanged source binding, no claimed word alignment, no native project writes and blocked S08/T11 technical-board treatment.
- `config.unapproved.json`: all external operations, credit spends, license clearance and media execution explicitly false.
- `example-ep01-unrenderable.json`: deterministic data-only sample with null alignment and empty asset references.
- `handoff.test.mjs`: 12 native Node built-in test **definitions** including adversarial authority, historical label and false timing mutations.

## No misleading progress claims

A first V8 isolated evaluation of the pure functions on the actual candidate EP01 EDL passed **12 direct checks**. The subsequently committed Node test suite **has not been executed natively or in CI**. No real narration, reference sheets, images, media files, stream limits, licenses or human comprehension were tested.

No third-party code, model or credit consumer is installed; no Higgsfield, CapCut, FFmpeg, browser, subprocess, media encoder or writer is run. No network, filesystem or background processing is performed by the committed functions.

The module only returns `RESEARCH_ONLY_INCOMPLETE_AND_UNRENDERABLE`. Future qualified tests of *source-only data* may use:

```sh
node --test experiments/offline-edl-v0.1/handoff/handoff.test.mjs
```

This is **not** permission to execute the Engine runner or any blocked media component.

## Retained hard gates

- E5B4D **NO-GO under model M**.
- Strict Policy B: all relevant processes must terminate and termination must be confirmed **before 120 s**, independent emitted-and-accepted stdout and stderr lifetime limits **1,048,576 bytes EACH**.
- R6 PENDING; IVV_GLOBAL NOT APPROVED; CASE_APPROVAL NOT APPROVED.
- Source of historical claims, chess legality, rights, character consistency, frame truth overlays and word timestamps remain unqualified.
- S08/T11 `TECHNICAL_ONLY` treatment remains BLOCKED; no automatic state exposure.
- No `main` merge, external spend, direct CapCut write, render, integration or publishing authorization.

## Next review obligations

1. Independently review source and execute native Node tests in an approved offline lab.
2. Verify identity and legal status of any media assets and references, and confirm whether a narration alignment method measures rather than guesses timestamps.
3. Maintain human-in-the-loop visual review and separate source/provenance signoff.
4. Only after E5B4D/M and rights gates are independently qualified, consider a fully separate editor interchange adapter; native CapCut private file formats are not a safe default.
