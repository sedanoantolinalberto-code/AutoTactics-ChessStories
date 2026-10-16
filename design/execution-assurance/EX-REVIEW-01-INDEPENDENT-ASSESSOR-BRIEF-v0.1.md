# EX-REVIEW-01 — Independent assessor briefing and hard-stop feasibility request

Date: 2026-10-16. Project: Engine YT / AutoTactics — Chess Stories only.
Status: PREPARED_FOR_POTENTIAL_EXTERNAL_ASSESSMENT / REVIEWER_NOT_APPOINTED / NOT_SENT / NO_GATES_ADOPTED.
This is a REVIEW BRIEF, not an independent technical review. It does not authorize implementation or execution.

## 1. Goal

Obtain an appropriately scoped independently qualified judgment whether a real, justified isolated environment can guarantee the EXACT strict Policy B for a separately adopted fault model and a specified Chess Stories operation. Stop at a fundamental counterexample rather than building more timeouts, safety wrappers or unqualified renders.

## 2. Source package and provenance

| Item | Fixed reference | Classification |
| --- | --- | --- |
| Recovered original E5B4D Codex analysis report | User Library Engine YT / Texto pegado(20261011-235300).txt, file ID file_0000000056ec81f4b74f60321aa93eb6, 288 complete extracted lines, reported 24,551 bytes | Text retrieved, original raw bytes NOT materialized; do not claim raw-byte SHA-256 |
| Original separate E5B4D v0.1 INSTRUCTION CONTRACT | Codex attachment referenced in the recovered report, historic attachment UUID 53de9bc4-2ba5-49db-bce3-106769190a8a, basename Texto pegado.txt | NOT RECOVERED. Do NOT reconstruct as exact original |
| F5 existing no-execution closeout | Git blob 8e6ec0f046c6d667dc061a1e96044b3965a986b5 | Original M NO-GO |
| M-ISO-01 v0.1 | Commit 03b5942ffe94e1ff3a85f424d2ed819555e3cdba, blob e6b83392d3170a797df743f1bee107ba25d529d7 | Documentary initial candidate ONLY |
| M-ISO-01 assistant self-review | Commit 5fa4f752d5fd22e1189b685a6f5dc0e7b8dc59f4, blob cfb85e40e57b12b8bef387c4d1dc0be09806d427 | SELF-REVIEW, NOT independent assurance |
| M-ISO-01 v0.2 reconciled to original REPORT | Commit 7a97f5b0763400ef76aab75828a9152f698d82ff, blob 80f6e5e16e48c26cc650080d522bcd498917f803 | Corrected candidate only, unadopted |
| EX-VIDEO-01 EP01 full-media scope | Commit 9c8383c10af80cc0c7a406856a8ec58ddfc4bf45, blob 7b48c8a3c3282869d23ddebde8ac45422f912397 | Functional inventory, NOT implemented |

The recovered REPORT defines a research failure model M, rather than itself proving the original upstream instruction contract. Original M was used for an actual compiler invocation. M-ISO-01 semantic-only execution and EX-VIDEO media encoding are DIFFERENT operations. A guest-only success cannot clear original E5B4D, the compiler bootstrap or full video.

## 3. Frozen strict guarantees, same semantics

Original report M includes seven items: (1) at least one relevant compiler process actually launched (no vacuous zero-launch solution), (2) no established finite Windows scheduler, termination or confirmation delay, (3) host suspension, supervisor failure, session loss and OS unavailability may cross deadline, (4) producers can submit arbitrary valid stdout/stderr write lengths and repeat failures, (5) pipes buffer/backpressure but do not provide cumulative accepted-byte quota, (6) same-host supervisor and VM outages share host failure, (7) no already qualified external controller or strict admission barrier is assumed.

Policy B is not amended: ALL relevant processes must actually terminate AND have termination CONFIRMED strictly BEFORE 120 real elapsed seconds. Source research used t0 immediately before compiler process creation; late observer logs, kill requests, completed parent only, CPU or sleep-excluding clock measurements do not meet this rule.

For each stream stdout and stderr separately, L=1,048,576 bytes over the COMPLETE lifetime:
- E_s = cumulative requested byte LENGTHS submitted by producers, INCLUDING FAILED/REPEATED write attempts.
- A_s = bytes accepted by designated OS output channel.
- C_s = observer-captured bytes. R_s = retained evidence. Neither replaces E_s or A_s.
- Required independent invariants E_stdout <= L, A_stdout <= L, E_stderr <= L, A_stderr <= L, under all ADMITTED faults. No borrowing budgets between streams. An attempted first request of L+1 bytes violates E_s even if OS accepts ZERO bytes. A post-submission rejection is too late for E_s.

## 4. Four sequential HARD-STOP assessment questions

### H1. Authority and physically credible fault exclusions

For the new precisely named candidate operation, does the governing authority permit an independently justified, narrower M-prime model? Which model-M failures are excluded or bounded? What exact target CPU, power state, OS/kernel, runtime and process control can credibly support every exclusion? Is the original E5B4D upstream instruction contract available? If model exclusions are merely assumed without target evidence, answer NOT_ADMISSIBLE and STOP; do not improve imaginary timers.

### H2. Real physical deadline and all-process confirmation

Inventory ALL dedicated relevant native processes, including broker-created work, supervisor, sidecars and observer if in normative scope; specify independent exit and last-process confirmation without arbitrary self-certification exemption. Provide justified worst-case physical bounds for work, scheduling, abort, pending I/O, OS process exit, evidence delivery and clock error from t0 to strictly less than 120 seconds. A VM/host pause crossing the deadline is a counterexample if admitted. Even a single native application cannot solve an unbounded observer-progress failure.

### H3. Strict pre-submission attempted write and admission quotas

Inventory every native stdout and stderr writer, inherited handle, trusted serializer, host diagnostics, crash/panic path and broker helper. Prove no bypass to submitted-byte limits, and that failed/partial/repeated writes still consume attempted E_s budget before each attempt. Separately prove OS accepted A_s within each stream lifetime limit. Demonstrate exact invariants, not merely tested averages or truncated capture. If a relevant producer can submit L+1 bytes at once, STOP.

### H4. Noncircular bootstrapping and full video rather than WASM-only

Who independently built and qualified the monitor/serializer/compiler/toolchain without the original blocked compiler building its own protector? Is this semantic-only validation, or an actual EP01 45–60 second MP4 production operation with graphics, font, renderer, codec, disk writes and termination/confirmation? Enumerate all native libraries and processes. Scope expansion reopens the entire proof. A proven semantic guest cannot license media, historical assertions or rights.

## 5. Alternative architecture comparison — research ONLY

| Path | Possible benefit | Unresolved proof obligations |
| --- | --- | --- |
| V-A: preexisting, qualified, CPU-only native EP01 compositor plus encoder in one process | Fewer application-level child processes and output writers | Native library/codec/panic effects, trustworthy bootstrap, actual OS exit+confirmation, physical worst-case timing, output-attempt controls |
| M-ISO-01 v0.2: closed WebAssembly semantic-only guest | Candidate isolation of guest imports; guest stdout/stderr capability can be absent if proved | Wasmtime does not bound a blocked HOST call or OS process termination; no full-media pipeline proof |
| Independently configured real-time host, e.g. PREEMPT_RT Linux | May improve bounded scheduling/jitter in new approved fault domain | Actual hardware/kernel/firmware/userspace timing, suspension and power assumptions, full relevant-process exit/confirmation and four stream invariants |

Exact manufacturer/open documentation:
- PREEMPT_RT theory: https://cdn.kernel.org/doc/html/latest/core-api/real-time/theory.html
- Kernel real-time configuration: https://cdn.kernel.org/doc/html/latest/core-api/real-time/kernel-configuration.html
- Wasmtime host blocking caveat: https://docs.wasmtime.dev/api/wasmtime/struct.Config.html
- Microsoft TerminateProcess asynchronous exit: https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-terminateprocess

These are evidence of documented COMPONENT behavior, not qualifying installed local software or a global under-120-second proof.

## 6. Required reviewer deliverable, none available yet

A genuinely independent competent assessor, not the assistant evaluating its own draft, must identify: assessor identity/competence/independence; versioned source package and missing contract; exact target hardware OS/runtime; actual review method; normative scope and fault-set rationale; process/observer causal closure; physically defensible worst-case bound strictly under 120 seconds; E_s and A_s proofs for stdout and stderr including unsuccessful attempts; exact assumptions; independent result; blockers and minimum additional evidence.

Allow outcomes:
1. NOT_ADMISSIBLE: a counterexample under admitted faults or unjustified exclusion.
2. INSUFFICIENT_EVIDENCE: potentially meaningful but missing normative/physical/byte-level proofs.
3. REVIEWABLE_UNDER_SEPARATE_APPROVED_DOMAIN: the review considers an independently justified model worth formally evaluating. This is NOT a PASS, NOT test authorization, not change of M/E5B4D and NOT publication permission.

An unsigned GitHub issue or another assistant-generated document does not fulfil independent M08 reviewer judgment. An assessor has NOT been selected or contacted by preparing this handoff.

## 7. Status and next responsible action

Original M/E5B4D: STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL, NO-GO unchanged. Strict Policy B unchanged. M-ISO-01 and EX-VIDEO-01: UNADOPTED, UNIMPLEMENTED, UNQUALIFIED. Independent assessor: NOT_APPOINTED. 66 semantic/77 router negatives and independent chess oracle NOT_RUN; R6 PENDING; IVV_GLOBAL, CASE_APPROVAL NOT APPROVED; no final MP4.

Do not implement/build/run/test/render/publish, change gates, alter CASE/OVER1, main, PR#12 or other protected branches. A competent authorized independent review and independently grounded target configuration are the next indispensable assurance inputs. If no target can credibly bound physical progress and all-process confirmation, report NO-GO instead of repeating F5 or issuing a speculative production date.
