# M-ISO-01 v0.1 — internal static assurance review and disposition

Date: 16 Oct 2026 | Engine YT / AutoTactics — Chess Stories EP01 ONLY

Verdict: **REQUIRES_CORRECTION / NOT_ADMISSIBLE_FOR_EXECUTION / NO_GATES_PROMOTED.**

Review independence: **SELF-REVIEW BY THE ASSISTANT, NOT AN INDEPENDENT TECHNICAL REVIEW**. This does not fulfill M08. Method: source-only reading of pinned GitHub RFC, F5 and external official vendor documents. No project commands, programs, validators, scripts, Actions, renderer, benchmarks, fault injection, or tests were run.

## Exact protected baseline

- Reviewed RFC commit: 03b5942ffe94e1ff3a85f424d2ed819555e3cdba; Git blob e6b83392d3170a797df743f1bee107ba25d529d7; path design/execution-assurance/M-ISO-01-POLICY-B-STRICT-FAULT-MODEL-RFC-v0.1.md.
- Existing F5 closeout blob 8e6ec0f046c6d667dc061a1e96044b3965a986b5; operational critical-path blob acbe9a10877dd63376d0a4f98c568d57d0361747.
- Original E5B4D remains STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL, execution NO-GO under original M.
- Strict Policy B remains unchanged: ALL relevant processes must have actually terminated AND termination must be confirmed strictly before t0+120 physical seconds; stdout and stderr separately each <=1,048,576 lifetime bytes EMITTED and ACCEPTED. No capture-only loophole.
- Current signed/normative full original M specification beyond the archived review summaries is not reauthenticated in this review. Obtaining its immutable authoritative copy is a prerequisite to any exhaustive M vs M-ISO-01 subset claim.

## Official external technical evidence

1. Wasmtime Config API documents that fuel and epoch interruption do NOT handle Wasm execution blocked in native host calls: https://docs.wasmtime.dev/api/wasmtime/struct.Config.html
2. Wasmtime ResourceLimiter explicitly does NOT limit all Store/host/embedder memory: https://docs.wasmtime.dev/api/wasmtime/runtime/limits/trait.ResourceLimiter.html
3. Microsoft TerminateProcess documents asynchronous exit when terminating another process and possible pending I/O delay; process-handle wait is needed for actual termination: https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-terminateprocess
4. Windows Job Object notifications on completion ports generally are NOT guaranteed; only specifically documented classes are exceptions: https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects and https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-jobobject_associate_completion_port
5. Linux cgroup v2 cgroup.kill and cgroup.events populated fields concern a named subtree and current live process membership, not all out-of-subtree control processes: https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html
6. On Linux CLOCK_MONOTONIC excludes time spent suspended, CLOCK_BOOTTIME includes it; clock choice does not compel progress while the host is suspended: https://man7.org/linux/man-pages/man3/clock_gettime.3.html

## Concrete assurance findings and required correction

| Finding | Severity | Source-grounded defect / counterexample | Required evidence, without weakening Policy B |
| --- | --- | --- | --- |
| AR01 | BLOCKER | Candidate excludes supervisor unavailability/host suspension without a physically justified bounded-progress contract. Simply defining those faults away risks circularity: the proposed guarantee is assumed, not proved. | Target hardware, OS/version, trusted observer time/progress contract with credible worst-case reasoning, independent evaluation of excluded fault admissibility. |
| AR02 | BLOCKER | The complete set of relevant processes P(e) and the last-process confirmation authority are unsettled. If the observer is itself a relevant process, its exit and confirmation cannot be silently excluded. | Normative process/control-plane universe, causal dependency graph, observer identity and justified closure protocol without self-certification loopholes. |
| AR03 | BLOCKER | 116 seconds is a sum of ASSIGNED targets (10+6+70+12+10+8), not proven worst-case execution times. t0 placement and scheduler/kill/I/O/confirmation maxima are not established. | Explicit physical t0 before all relevant steps; WCET-style upper bounds including all processes, scheduling and clock error; total STRICTLY below 120 seconds. |
| AR04 | BLOCKER | Finite Wasm guest fuel cannot stop an unbounded blocking host import; async cancellation also requires scheduling progress. A guest trap is not host OS-process exit. | Whitelist or eliminate every blocking import, establish bounds for all host callbacks/compilation/panic handlers and trusted teardown, independently assess worst-case. |
| AR05 | HIGH | Wasmtime guest memory limit does not bound all host/runtime allocations, threads, compiler/JIT and OS paging. | Process-wide memory/threads/CPU/host allocation closure; exact runtime/feature/version identity; failure and cleanup bounds. |
| AR06 | BLOCKER | Guest output counters do not imply actual stdout/stderr emitted byte caps if native runtime diagnostics, crash reports, inherited pipes or other writers bypass the sink. Accepted bytes at more than one endpoint are ambiguous. | Enumerate every writer, handle and sink. Separate unbypassable per-stream emission and acceptance accounting including retries/partial writes/diagnostics, with pre-write reservation. |
| AR07 | HIGH | Windows asynchronous TerminateProcess return and generally non-guaranteed Job Object completion notifications cannot certify all exits by the deadline. | Relevant process handles/group membership, no breakaway, explicit wait/exit confirmation, worst-case time bound, not notification-only evidence. |
| AR08 | HIGH | Linux populated=0 describes a named cgroup subtree and only its live members; it does not prove a separate observer or other helper process has terminated or that kill/notification latency is bounded. | Complete process-tree/cgroup closure and no escapes or late spawn; bounded confirmation under target faults, including control-plane termination. |
| AR09 | HIGH | CLOCK_MONOTONIC time can omit OS suspend. CLOCK_BOOTTIME addresses counting but cannot guarantee the process advances during suspension. | Physical deadline clock selection and error bounds, plus independently defensible non-suspend/scheduling-progress assumption. |
| AR10 | HIGH | Narrower M-ISO-01 excludes kernel lockup, power failure and host pauses with no signed governance or target operational argument; assumptions are not automatically reality. | Complete original-M policy pin and explicit competent policy-ownership decision accepting narrower fault domain; original M remains NO-GO. |
| AR11 | HIGH | A future proved semantic-core execution would not qualify GPU, encoders, FFmpeg, browser, network, soundtrack and final video-production processes. | Separate process/fault-domain assurances for FULL VIDEO pipeline; no success transfer from CORE_ONLY to publication. |
| AR12 | MEDIUM | User authorization to study a model is distinct from authorization to adopt it or approve tests. Reviewer's own findings are not M08 independence. | Named independent reviewer, reviewed version/target and signed admissibility evidence before seeking a separate testing authorization. |

## Paper counterexamples (not executed)

- CE1 — Guest enters a host import that blocks indefinitely. Fuel is exhausted only on guest instructions, not necessarily while native host is waiting. Policy B cannot be derived from guest fuel alone.
- CE2 — At t0+119 seconds, host/supervisor stops making progress. Previous kill request or log output is not a termination-confirmation event before 120 seconds. Excluding this class needs a separately justified target guarantee.
- CE3 — Guest emits 900,000 allowed bytes, then host panic-handler sends >148,576 unmetered bytes on stderr. The stream cap fails despite a correctly capped guest API. Receiver truncation after emission cannot undo emitted bytes.
- CE4 — TerminateProcess returns, but pending kernel I/O prevents actual process termination and the controller never receives a timely qualified confirmation. The call return is insufficient.
- CE5 — cgroup.events reports populated=0 for guest subtree while a causally relevant controller remains live outside the subtree. Full P(e) closure has NOT been demonstrated.
- CE6 — A process spends physical time suspended while CLOCK_MONOTONIC does not advance. A deadline computed solely with that clock may misstate physical elapsed time.

## Targeted corrections / engineering decision plan

**Phase A — normative eligibility only (documentary)**
1. Pin the full original signed definition of failure model M, original governing authority, exact process universe and Policy B semantics. No inferred exemptions.
2. Define an actual candidate target, versioned OS/hardware/runtime and physical scheduling assumptions; if credible bounded progress and all-process confirmation cannot be established, conclude UNPROVABLE_ON_THIS_TARGET / NO-GO.
3. Document whether a trusted external confirmation anchor is permitted; no infinite supervisor chain or arbitrary observer exclusion.

**Phase B — architecture proof obligations (documentary)**
4. Bound entire process universe, all import/host callbacks, memory usage, output writer paths, native diagnostics and exit behavior. Separate the WASM fuel proof from the OS deadline proof.
5. Derive independent full-lifetime stdout and stderr emitted/accepted invariants for all writers. Define exact treatment of partial writes, retries, errors, multibyte encodings, buffers and cleanup.
6. Replace 116-second target schedule with credible independent worst-case bounds from t0 through last relevant process termination and trusted confirmation strictly before t0+120 seconds.

**Phase C — independent review and contingent future authorization**
7. An independent competent technical reviewer must separately evaluate M-ISO-01 assumptions, closure/time/output proofs and target feasibility; assistant self-review cannot satisfy M08.
8. Only a separately issued human/governance authorization AFTER admissibility review could permit any bounded test; tests cannot be used as a substitute for proof under the original model M.
9. Publishing a video has additional R6, IVV, source-history and case approval gates and entails full render-pipeline qualification; M-ISO-01 does not automatically cover them.

## Frozen state

M-ISO-01 v0.1: PROPOSED, NOT ADOPTED, REQUIRES CORRECTION. EX-WASM-01: NOT IMPLEMENTED. E5B4D: original NO-GO under M. Strict Policy B intact including termination confirmed STRICTLY before 120 seconds and both per-stream 1,048,576 emitted AND accepted lifetime caps. M08 independent signoff: NOT_SATISFIED. 66 semantic / 77 router negatives and independent legality oracle NOT_RUN; R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED.

This report changes NO engine code, policy, contracts, CASE, OVER1, gates, user-facing video, protected branches, main, PR #12, tests, renderer, execution or workflow.
