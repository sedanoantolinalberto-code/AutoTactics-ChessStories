# Engine YT — Media Capability Map v0.1

**Status:** `SOURCE_ONLY_RESEARCH / NOT_RENDERABLE / NO_TOOL_EXECUTION / NO_MERGE`.

Stacked experimental branch based on PR #14, not on production or `main`. The source-only media capability adapter is a **metadata planning layer**, not a video pipeline implementation.

## Origin

A public post by @0xwhrrari lists eleven open source applications as separate building blocks for editing: PySceneDetect, Auto-Editor, vid.stab, color-matcher, rembg, RIFE, Real-ESRGAN, Demucs, librosa, HyperFrames and FFmpeg.

Exact upstream links are pinned as **repository identities, not immutable source revisions** in `capability-registry.v0.1.json`; versions, SBOMs, security and any licenses must be independently qualified before installing or executing.

- HyperFrames: https://github.com/heygen-com/hyperframes — HTML as declarative composition and frame-adapter concepts; **no actual output determinism proven** for this Engine. Upstream Apache 2.0 claim requires review of dependencies and bundled media.
- PySceneDetect: https://github.com/Breakthrough/PySceneDetect — detects boundaries in supplied footage; not a creative renderer; BSD-3-Clause codebase.
- rembg: https://github.com/danielgatis/rembg — MIT application, but separate model weights can require additional licenses or prohibit commercial use. Cloud model options can transmit images off-machine; these are excluded here.
- FFmpeg: https://github.com/FFmpeg/FFmpeg — LGPL/GPL/nonfree status depends on build configuration and linked modules, notably libvidstab.
- The other seven tools remain **unqualified candidates**, not permitted dependencies or recommended installation commands.

## Implemented

- `capability-registry.v0.1.json`: eleven metadata entries with explicit capability, upstream repository, availability precondition, licence-review flag and `NOT_RUN` status.
- `plan-media.mjs`: original pure `planMediaCapabilities(edl,registry)`, taking the existing EP01 EDL proposal produced by `compileDraft`; returns unrenderable per-shot capability interests, null media, null commands and original factuality labels.
- `reviewMediaCapabilities(plan,edl,registry)`: independent static check for original event binding, unchanged mandatory disclosures, absence of any media outputs/commands and frozen NO-GO.
- `example-ep01-unrenderable.json`: source-only preview of capability interest, not HTML, frames, assets, a render command or animation.
- `plan-media.test.mjs`: ten Node built-in test definitions, including attempted tampering with truth labels, execution gates, model licenses, created frames and S08 block.

`S08/T11` remains entirely blocked in this capability mapper because the `TECHNICAL_ONLY` source-to-visible-board treatment has not been qualified. No blanket conversion of the multi-event shot to an animation is allowed.

## Trust/rights/process boundaries

- E5B4D **NO-GO under M**; Strict Policy B requires all relevant processes terminated and termination confirmed **before 120 seconds** and independent stdout/stderr lifetime emitted/accepted ceiling **1,048,576 bytes EACH**.
- R6 PENDING, IVV_GLOBAL NOT APPROVED and CASE_APPROVAL NOT APPROVED.
- No third-party code is imported or installed; no packages, GPU processes, ffmpeg, scene detection, HTML rendering, file capture, downloads, cloud requests, media export, integration or publication have been run.
- Frame-by-frame faithfulness, asset provenance, human readability, historical claims, licensing and codec compliance remain **unverified**.
- This is not a claim that a generative model plus eleven free tools equals Premiere Pro; GUI editing, performance, interoperability and color management require separate bench qualification.

## Evidence / tests

Ten initial static logic checks, executed in an isolated JS tool evaluation, passed on EP01 EDL source. The ten committed native Node test definitions have **not** been run in Node or CI; neither has any actual third-party tool.

For an authorized separate metadata-only test, use:

```sh
node --test experiments/offline-edl-v0.1/media/plan-media.test.mjs
```

This command is informational and **not permission to execute E5B4D-protected components**.

## Proposed future staged qualification

1. Independent static review of our adapter and original tool terms.
2. Per-repository license, weights, CVE, checksum, lockfile and offline reproducibility assessment.
3. Pure source-only storyboard composition prototypes; S08/T11 remains blocked.
4. A separate formally qualified sandbox with short known test assets, bounded output, deterministic timestamps and resource caps.
5. Actual compositor parity and perceptual truth-label inspection; rights and IVV gates before any media generation.
