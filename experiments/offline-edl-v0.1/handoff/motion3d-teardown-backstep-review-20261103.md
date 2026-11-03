# Motion/3D — Teardown & BackStep source-review, 2026-11-03

**Disposition:** DOCUMENTARY_SOURCE_ONLY / NO_INSTALL / NO_RENDER / NO_EXTERNAL_CALL / NO_MAIN_MERGE

## Provenance and source distinction

1. **Verified public source**: [elvarofficial/teardown](https://github.com/elvarofficial/teardown), upstream `main` pinned for this research to `a91262ac1109051e014662d42ecb0b7bc1f113b1`. README, SKILL.md and LICENSE inspected directly. The skill is MIT, built in part on `whaleyxbt/claude-motion`; provenance and licenses of any additional sound samples and dependencies must be checked separately.
2. **User-provided third-party post**: [@Nyxera0x](https://x.com/nyxera0x/status/2117320669838880781), with a second original linked [@elvar_official](https://x.com/elvar_official/status/2116174609355571402). Screenshots describe scene construction from references and iterative still-frame review. Social claims are not independent performance evidence.
3. **Unverified third X post**: [@0xcodio](https://x.com/0xcodio/status/2109275834984915150). The precise statement and two uploaded screenshots could not be independently matched from accessible X text. No factual feature is attributed to the post in this document.
4. **Fourth user-supplied post**: [@getBackstep](https://x.com/getbackstep/status/2117462419819880474) links to [getbackstep.com](https://getbackstep.com/), marketing an **undo tool for Claude Code** that claims to recover local code edits and deleted Supabase tables. The user's screenshot supports only the marketing *claim*. The website was not accessible to this review; no source repository, installed binary, permissions model, backup guarantees, rollback test or verifiable provider documentation was recovered. In particular, **no Supabase data recovery is proven**. Do not associate this tool with an unrelated similarly named App Store product.

## Existing recovery baseline and unverified Backstep claim

Claude Code's [official checkpointing documentation](https://code.claude.com/docs/en/checkpointing) confirms a built-in `/rewind` that tracks file edits, with important limitations: files changed only by Bash, background subagent edits, changes from external sessions, and symlink/hardlink paths may not be restored. Checkpointing does not roll back databases, cloud mutations, secrets sent, publishes or other irreversible side effects. Backstep may claim broader coverage, but the website's behavior was **not** independently verified here. Before any adoption, verify independent database snapshots, point-in-time recovery, permissions, schema integrity, rollback under concurrent traffic, audit logs, and whether any undo first performs destructive actions. Source-only model/draft work cannot establish those capabilities.

## Verifiable upstream teardown architecture

- A **single source of numerical/physical truth** drives all animated component poses, dashboards, labels and timeline-based audio cues.
- Example mechanisms include cross-plane V8, Cessna 337 landing gear and Strandbeest linkages; examples are engineering demonstrations, not proof that arbitrary photographs yield faithful or safe engineering CAD models.
- A time-addressable `render(t)` frame contract is documented, seeded/randomness precomputed; reviewing an arbitrary frame must not depend on previous rendering order.
- `*-shared/` separates physics, `*-film/` defines camera beats, `*-live/` supports interaction; the score references timeline data.
- Review sheets at beat times and dense samples after suspicious intervals are compared against source references; the final encoded output also requires separate inspection.
- Capture, dependencies and audio are **operational** upstream (Node, Playwright Chromium, FFmpeg, Python 3), so importing them directly would bypass Engine YT execution gates.
- The upstream mentions 60 fps output as a pipeline *capability*, not proven 60 fps in our GPU/Windows environment. Runtime output/process bounds and render quality must be independently measured.

## Engineering value for Engine YT

**Near-term candidate:** original, tool-independent **static schema** for future 3D scenes:

| Input and claim | Required evidence/guard |
|---|---|
| Reference image/manual | source hash, license/rights provenance, resolved revision; NO speculative source claims |
| Parameters and solver | dimensions, units, bounded ranges, model/source revision, independent numerical plausibility review |
| `render(t)` | intended determinism verified via repeated random-access frame captures *in an authorized lab*, no hidden state or drift |
| UI values and labels | trace each displayed value to the same resolved solver state; prohibit invented measurements |
| A/V synchronization | shared canonical timeline; no separate hard-coded audio times; frame rate and encoder output independently checked |
| Visual quality | reference comparison, beat contact sheet, close-up interval inspection, final encoded-frame comparison; explicit human signoff |
| Windows compatibility | Chromium/ANGLE/shaders, font metrics, GPU fallback, app isolation, execution time and memory profiling |
| Failure isolation | no host fallback, no silent frame skip, no partial output declared complete, no auto-retries beyond authorized budget |

**Not suitable for automatic adoption:** arbitrary 3D reconstruction from one image; mechanical truth and commercial source licensing cannot be inferred from a photo. This is particularly important for sports visualizations, historical/technical diagrams and claims shown as factual.

The existing Chess Stories EP01 handoff remains **nine shots, twelve event labels, eight blocked/unverified gates**, with S08/T11 technical board unresolved. This research **does not change** that case or authorize any new media asset.

## Suggested separately authorized test (NOT EXECUTED)

- Independent code/third-party dependency audit; lock immutable commits, hashes, licensing and package lock.
- Use a minimal **non-rendering** data-only fixture with two independently calculated t-values and unit-consistent readouts before any external tool.
- In an approved isolated lab, compare frame 0, an interior frame and last frame in shuffled order and repeat; check hashes/pixel difference against explicit tolerance (GPU effects may prevent bitwise determinism).
- Check reference-source correspondence, labels, clean camera framing at 9:16 and 16:9, typography and timebase.
- Check reported tests against real process exit, stderr/stdout lifetime budgets, completed cleanup, GPU/CPU use and actual encoded media. A script saying "PASS" is not a certificate.
- Preserve the maker–checker boundary in PR #20; no self-review or implicit release approval.

## Frozen safety and status

**E5B4D NO-GO (model M)**; **R6 PENDING**; **IVV_GLOBAL NOT APPROVED**; **CASE_APPROVAL NOT APPROVED**; no integration, process launch, generation, video render, spending, publish, or main merge.

Strict Policy B: all relevant processes must terminate **and have termination confirmed before 120 seconds**; independent stdout and stderr emitted-and-accepted lifetime caps **1,048,576 bytes each**. None of the third-party tools has been qualified against these gates.

**Review verdict:** `RETAIN_HIGH_VALUE_3D_DESIGN_REFERENCE / NOT_AN_ENGINE_ADAPTER / NOT_TESTED`.