# EX-VIDEO-01 v0.1 — scope closure for a possible EP01 video

Date: 2026-10-16; Engine YT / AutoTactics — Chess Stories only.
Verdict: DESIGN FEASIBILITY ONLY / NO-GO FOR EXECUTION / NOT APPROVED.
No render, implementation, test, gate change or policy change.

## A. Source and protection boundary

- E5B4D original Codex analysis report: user Library file Texto pegado(20261011-235300).txt, file id file_0000000056ec81f4b74f60321aa93eb6, 288 extracted lines. Raw bytes unavailable for hashing. Original upstream E5B4D instruction contract NOT FOUND.
- Source analysis M is about a controlled *compiler invocation and its dedicated relevant work*. Its seven failure conditions include host suspension, unbounded scheduling/confirmation delays, uncooperative producer write requests and common-mode outage. E5B4D remains NO-GO under M.
- M-ISO-01 v0.2 source reconciliation: Git commit 7a97f5b0763400ef76aab75828a9152f698d82ff; blob 80f6e5e16e48c26cc650080d522bcd498917f803. It is a different *future semantic guest* candidate, not an approved compiler execution contract.
- EP01 T01–T12 documentary per-shot handoff: Git commit 9305b009b064ca3cb5746aa8ccc7dbef2bc6b134, blob 2b54c7ff71046ebdde0ceb72069308066478afb9, path design/chess-visual-narrative/handoff/v0.1/EP01-shot-delivery-spec.md. This is NOT a runnable scene manifest or evidence of frames.
- Candidate original media/rights approach: Git commit 87cb4aac391147ed8d2b1509ddb3b23b98ca0783, blob 84b12042e23efe812e247d0b2af5d6bd09a2016c, path docs/R6_EP01_CLEAN_ROOM_PRODUCTION_BASELINE.v0.1.md. R6 remains PENDING.

**New finding:** An M-ISO-01-approved semantic function (if ever achieved) cannot automatically produce a lawful publishable EP01 MP4. It does not prove technical bounds for graphics, encoding, media export or the end-to-end process universe.

## B. Functional inventory — candidate requirements, NOT implemented software findings

| Phase | Required functional result | Evidence available | Why its process scope matters |
| --- | --- | --- | --- |
| F0 — Preflight and t0 | Input identity, allowed sources and trusted start | CASE and OVER1 pinned | Preflight and associated tools may count as relevant work; never start the deadline artificially late. |
| F1 — Chess and semantic validation | Legal moves, real/hypothetical truth, T10 omitted 14 plies, T11 and T12 semantics | Code/design candidates, oracle/66+77 negatives NOT_RUN | Validator, oracle and any spawned work need separate eligibility. |
| F2 — Editorial composition | T01–T12 direction, time, 9:16 visual labels and transitions | Accepted as documentary draft, no event milliseconds or frame rates verified | Future scene director cannot be silently considered free or bounded. |
| F3 — Raster graphics | Original board, pieces, overlays, exact fonts and source assets | Clean-room vectors and Noto Sans candidate only | Native graphics libraries, font routines, GPU helpers and unmetered writes are new trust paths. |
| F4 — Media encoding/export | Full video container and final file | FINAL-MP4-EP01 explicitly does not exist | Codec, threads, possible child processes, disk writes and teardown need analysis. |
| F5 — Closure and evidence | Artifact/asset manifest, all relevant process exits and trusted confirmation | Policy B and pending R6/IVV requirements | Supervisor and brokered/delegated work cannot be arbitrarily outside the guarantee. |
| F6 — Release | Independent historical, chess, visual, rights and publication authorization | R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED | Separate human/legal/product gates, not solved by any process sandbox. |

This is a functional design inventory. It does NOT establish that an implemented F0–F5 pipeline, toolchain or suitable runtime currently exists.

## C. Distinct routes; none admitted for execution

| Route | Proposed execution topology | Potential benefit | Missing proof |
| --- | --- | --- | --- |
| V-A: CPU-only, single native application process | One version-pinned, separately qualified executable does layout, scene rasterization, bounded codec work and file export, with no external encoder CLI, browser, TTS, GPU helper, native plugin or other application process. | Smaller causal process graph; clearer ownership of output requests and native diagnostics. | Version-pinned library/callback inventory, legitimate original bootstrapping, process/time bound, native memory, independent last-process confirmation, no bypassing output writes, rights. NOT_ADMISSIBLE. |
| V-B: multiple native tools | Separate input validator/oracle, raster renderer, external encoder and artifact checker | Traditional media workflows could eventually be assessed | Every child, brokered process, timer, output writer and exit/confirmation must be controlled including crashes. NOT_ADMISSIBLE. |
| V-C: semantic WASM guest + native sidecar | M-ISO-01 v0.2 guest produces bounded typed data for separate media engine | Separates meaning from graphics | Semantic guest success cannot certify native media sidecar or original E5B4D compiler. NOT_ADMISSIBLE. |

V-A is merely the narrowest *paper architecture to investigate for complete media*. It is NOT selected, implemented, timed, original-asset-approved or rights-cleared. Absence of explicit child launch does not prove absence of OS helper/brokered processes, native threads, asynchronous writes or unbounded kernel behavior.

## D. Unchanged strict Policy B and source-faithful output definitions

For each stream s = stdout, stderr, with L=1,048,576:
- E_s is the sum of **all producer-requested write byte lengths submitted**, including failed or repeated write requests.
- A_s is the sum of accepted bytes at the designated OS output channel.
- C_s captured/consumed and R_s retained are distinct and do NOT substitute for either bound.

Require E_stdout, A_stdout, E_stderr, A_stderr <= L for whole run. A pre-write request budget must control attempts BEFORE submission, including failures/retries, and an OS admission boundary must separately ensure accepted bytes. Any native library or panic/logging writer bypass invalidates the proof. Downstream truncation does not erase already-submitted requests.

A legitimate MP4 is a separate file artifact, NOT presumed to be stdout/stderr. Its byte size, write permissions, hash, manifest, disk I/O failures and rights require own controls. Writing a video file does not license execution outside the strict process/temporal envelope.

All **relevant OS processes** must have terminated and their termination must be confirmed strictly before t0+120 real elapsed seconds including host suspension. The original E5B4D report analyses t0 immediately before target creation and warns about *broker-created relevant work* outside the descendant tree. Do not declare the observer exempt without a reviewed closure protocol. The v0.1 illustrative 116-second allocation is an UNPROVEN goal, not a maximum certified execution time.

Single-process CPU media cannot meet the physical deadline merely by removing FFmpeg or using WASM fuel. If actual failure model still admits indefinite host/supervisor suspension, the original counterexample immediately defeats a universal completion claim.

## E. Reviewer's first six eligibility questions — any unsupported answer = NO-GO

1. Has the authority adopted a distinct full-video fault domain (different from original M), listing failures excluded AND justification that the chosen physical target can enforce or reliably tolerate them? No default inheritance from M-ISO-01 semantic-only.
2. Are the exact CPU, OS, runtime, prequalified supervisor and application toolchain version/byte-pinned with independent noncircular provenance? Original compiler cannot bootstrap its own protector.
3. Is every causally relevant native process, supervisor, broker/child and output writer listed, along with its exit and target-independent confirmation mechanism? Can uncontrolled process creation/writes be prevented rather than merely detected?
4. Do credible worst-case physical scheduler, native library work, abort, I/O completion, OS process exit and confirmation bounds sum to **STRICTLY LESS THAN 120s** from the approved t0? No average, benchmark sample or promise substitutes for universal bounds.
5. Are both E_s (attempts incl. failures/retries) AND A_s (accepted) caps separately enforced for stdout and stderr across setup, failure paths, runtime diagnostics and teardown with no reset/bypass?
6. For F3–F4, can the *complete* final 45–60-second EP01 media work be guaranteed within that bound using known original assets, selected rights-reviewed font, fixed media runtime, without hidden GPU/codec workers, and subsequently independently reviewed? Any media-domain addition reopens review.

Prioritize question 4/target environment: if a credible physical progress/termination-confirmation bound cannot exist, STOP at NO-GO rather than starting more implementation or tests. If questions 1–6 are fully evidenced, a separate human governance authorization would STILL be required to start any bounded technical validation; independent R6/IVV/history/chess legality and release approval remain separate.

## F. Exact protected disposition

- Original M/E5B4D: STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO for original compiler operation.
- M-ISO-01 v0.2: unadopted semantic-only model; **NO** admissibility certificate for full video.
- EX-VIDEO-01 v0.1: documentary comparison, NOT a newly adopted process policy, not an executable architecture, no proof of feasibility under 120s.
- Strict Policy B unchanged; 66 semantic and 77 router negatives, independent chess oracle NOT_RUN; R6 PENDING, IVV_GLOBAL and CASE_APPROVAL NOT_APPROVED.
- No CASE/OVER1, main, PR#12, protected contract, execution, binaries, scripts, workflows, tests, render, image or media publication changes.
