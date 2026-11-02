# Offline EDL experiment — threat model and non-goals

**Status:** static research/experiment only; E5B4D NO-GO preserved.

| Threat | Guard in this branch | Residual / missing proof |
|---|---|---|
| Historical counterfactual depicted as a played move | T05/T06 event-local `HIPOTÉTICA · NO JUGADA` annotations, compile and independent review | Real rendered frame visibility and human interpretation UNTESTED |
| Real half-moves 36–49 silently skipped | Mandatory T10 14-ply disclosure, no visual jump claimed as one move | Actual animation and legal replay UNTESTED |
| Technical-only chess position exposed | Compiler/reviewer forbid `V-PRE-EV2` as audience state; T11 staging unresolved/null | ALT-A unadjudicated; no rendered pixels |
| Source pin or release flag tampered with | Frozen Git blob pin map, independently copied proposal metadata and fail-closed review | Git SHA-1 does not prove external authorship or SHA-256 provenance |
| Unsanctioned copy rewrites semantic meaning | Separate edit proposal, strict before/after diff, base reviewer detects changed copy | Semantic truth of rewritten text still requires human checker |
| False assertion of timing, asset availability or rights | Null phase timing, empty media arrays, frozen false flags and pacing warnings | Real voice, scene lengths, frame visibility, assets and rights not measured |
| Unreviewed third-party code executes with project credentials | No third-party packages, no secrets, no network, no external API | Any future vendor dependency requires separate supply-chain audit |
| Failure of engine process limits | No runner, renderer, shell invocation, code execution permission or media process in delivered modules | E5B4D failure model M, strict Policy B 120s + stdout/stderr 1,048,576 B, still NO-GO |

**Independent review boundary:** a source-only static PASS establishes only limited agreement between frozen known inputs and a generated proposal. No human study, rights decision, proof of legal chess, real frame observation, Docker/Linux qualification, native UI or runtime release certification occurs here.

**Change policy:** only new files under `experiments/offline-edl-v0.1/`; original Chess Stories source inputs must remain unchanged. PR #14 is a draft targeting the isolated EP01 candidate branch, not the default branch.
