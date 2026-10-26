# E5B4D original Codex report — exact failure assumptions and EP01 scope boundary

**26 October 2026 | ORIGINAL_REPORT_TEXT_READ | ORIGINAL_CONTRACT_NOT_RETRIEVED | DOCUMENTARY_REVIEW_ONLY | NO_GO_UNCHANGED**

## Source witnessed, not re-run

Recovered and read complete 288-line report `Texto pegado(20261011-235300).txt` from the owner's private Engine YT Library, reported size 24,551 bytes. Its first heading is **“A. Executive verdict — E5B4D_STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL.”** The report dates its official Microsoft documentation consultation to 12 October 2026, and says it analyzed a separately supplied **E5B4D v0.1 contract**.

**Evidence caution:** the textual report was actually read in this review. Its original *raw bytes and SHA-256 were not materialized or independently authenticated*. The underlying **E5B4D v0.1 contract is a different original file that remains NOT_RETRIEVED**. This note cannot substitute for an independent reviewer with both source documents.

## The report's seven explicit model M premises

1. At least one relevant **target/compiler process is actually launched**; declining to launch does not demonstrate a compliant execution architecture.
2. Windows gives no established finite worst-case bound for dispatch, termination completion, or confirmation delivery.
3. OS/host suspension, supervisor failure, session loss and OS unavailability **may span the strict deadline**.
4. The producer may submit arbitrary write lengths, retry failures, and delegate work; do not assume voluntary cooperation.
5. Ordinary pipes have buffering/backpressure but no demonstrated cumulative accepted-byte lifetime quota.
6. Same-host supervisors and VMs share possible host-level outage.
7. No independently qualified external controller or strict pre-write/output admission boundary is part of the established candidate architecture.

The report explicitly calls this a *model-scoped incompatibility*, **not** a proof that every conceivable realtime or independent external hardware architecture is impossible.

## The exact independent counterexamples

**120-second completion + confirmation:** launch a relevant process then suspend the host while the process is alive until after the elapsed deadline. Suspended is not terminated; an in-host observer cannot confirm on time. A separate trace permits the process to terminate before deadline but denies the observer scheduling/evidence availability until afterward; that too violates **confirmed** termination. A `kill()` request, job object, successful short test, regular `wait(timeout)` or later observation cannot turn either trace into a PASS.

**Per-stream byte invariant:** for stdout and stderr separately `L=1,048,576`. The report distinguishes:
- `E_s`: **sum of write request sizes presented**, including failed/retried submissions.
- `A_s`: **bytes actually accepted** by the OS stream channel.
- `C_s`: bytes **captured** by an observer.
- `R_s`: bytes **retained** as evidence.

A first producer request with length `L+1` violates `E_s` upon submission even if every byte is rejected. With `A_s=L-1`, acceptance of a 2-byte write before an observer runs violates `A_s`. A bounded pipe/queue or log truncation controls neither invariant automatically. The report proves that **atomic non-bypassable acceptance mediation** could conditionally establish `A_s <= L`, but *not* `E_s` or the strict termination deadline by itself.

**No demonstrated implementation** of complete relevant work scope, bounded OS progress, physical confirmed termination, both per-stream quotas and non-circular bootstrapping is recorded.

## Scope distinction that an independent adjudicator must resolve

The original report states the controlled-operation context as **“one intended compiler invocation and its relevant work”** and premise #1 assumes a compiler/target process is launched. A later and separately observed EP01 governance record, [E5B4D → EP01 release-path packet](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/chess-stories/e5b4d-release-path-decision-packet-20261017/docs/E5B4D-EP01-RELEASE-PATH-DECISION-PACKET-20261017.md), **explicitly applies the existing NO-GO to Chess EP01 test/oracle/render**.

These two statements must **both** be preserved:
- The **theorem/counterexample about arbitrary host suspension and confirmation** generalizes to *any* launched process within the same M/Policy B assumptions; a different app name, an ordinary chess oracle or an offline computer does not defeat it.
- Whether *all* potential EP01 execution paths should be in the protected **relevant-process scope** is a **separate, presently binding governance/scope decision**. The original compiler proof is not itself an independently signed EP01 process inventory, and a scope change does not automatically occur just because a chess renderer is simpler.

An independent reviewer should answer whether M/Policy B has been correctly extended to each named EP01 path, whether an explicitly excluded/offline-manual workflow is technically and legally coherent, and which approval authority may adopt such a *new* boundary **without representing a model change as a proof of original M compliance**.

## Decision table (proposal only)

| Case | Original model M / Policy B satisfied? | Permissible inference now |
| --- | --- | --- |
| Any relevant launched in-host process, with arbitrary host suspension admitted | **NO demonstrated unconditional guarantee** | Maintain original NO-GO |
| Same process with standard timeout/job/VM/watchdog | **NO** under the presented counterexample | Good-faith timeout is not a strict proof |
| Hypothetical new independent enforcement + strictly bounded progress model | **NOT ESTABLISHED** | Requires a separate model, complete proof, peer review and attributable approval |
| Purely documentary or manual work **claimed outside relevant process scope** | **NOT AUTOMATICALLY EXEMPT** | Independent scope/governance adjudication **before** any use as a production bypass |
| Source review and research correspondence; no EP01 execution | **No execution claim** | Allowed documentary work within existing delegated scope |

## High-value independent reviewer questions (answer before Codex implementation)

1. Obtain exact original **E5B4D v0.1 contract**; distinguish its normative text from the Codex report's synthesized M assumptions.
2. Identify precise clause authorizing original-M requirements beyond the compiler to **EP01 chess oracle, visual renderer, existing passive assets, and any delegated subprocesses**. Are these newly scoped decisions or direct obligations from original contract?
3. For every proposed narrower or different workflow, give its **actual process inventory**, trusted observer and full `E_s`/`A_s` domain, clock/suspension semantics, and **separate attributable human authorization**.
4. Ask for one **concrete permissible minimum EP01 private proof** *after* whichever decision is adopted, with clearly separated gates for private test, human IVV, R6 and commercial publication.
5. Reject assertions that a short Python legality script, manual/offline Blender, cloud render, virtual machine, CI timeout or mere user's general enthusiasm **implicitly lifts the NO-GO**.

## Frozen outcome

Original `E5B4D=STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL`, `NO-GO` remains unchanged. Strict Policy B requires termination **and trusted confirmation strictly before 120s physical elapsed**, independent lifetime `E_s,A_s <= 1,048,576` for *each* stdout and stderr. Chess oracle, negative tests, rendering, process launching, Actions, `main` merge and publication **remain NOT_AUTHORIZED/NOT_RUN**. No tests, child processes, compiler, chess engine, renderer, media, binaries, external spend or rights approval were used or produced in this review.

This memo **does not approve** a new model, a process-scope exclusion, an exception, an independent evaluator or any actual execution.
