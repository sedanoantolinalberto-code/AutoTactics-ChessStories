# EX-MISO-01 v0.1 — alternative bounded failure model under unchanged strict Policy B
Date: 2026-10-16 | Project: Engine YT / AutoTactics — Chess Stories EP01 only

**Verdict: RFC_FOR_INDEPENDENT_REVIEW / M_ISO_01_NOT_ADOPTED / E5B4D_UNCHANGED / EXECUTION_NO_GO.**
**Change authorization:** User authorized study of an alternative isolated failure model, *not* its adoption, execution, gate modification or video rendering.
**Design objective:** investigate whether a *strictly smaller and technically justified* set of admissible faults permits the EXACT SAME Policy B guarantees. This RFC is not a redefinition of Policy B or a workaround to declare approval by relabelling the process.

## 0. Traceable protected baseline

Read-only provenance:
- Existing F5 technical feasibility record: Git blob 8e6ec0f046c6d667dc061a1e96044b3965a986b5 at commit 7bea6cb1fdf482109c559e4044e5af3e9c78ae89, path design/chess-evidence-registry/reviews/F5-closeout-and-execution-feasibility.md.
- Existing EP01 operational critical path with 16 Oct later evidence: blob acbe9a10877dd63376d0a4f98c568d57d0361747, commit 1883c2f29be0431594dc5f07dcea51890cb220d7.
- main must remain 8e1ad7e0dd8fabadd1674733353988ff5136b63d unless *other authorized work* changes it; no assertion of branch equality to the independent Chess Stories draft PRs.
- PR #12 draft/unmerged, CASE/OVER1/T01–T12 protected. R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT_APPROVED; 66 semantic negatives, 77 router negatives, chess oracle NOT_RUN.

Original E5B4D: **STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL**, NO-GO under original failure model **M**. No existing verdict is superseded.

Policy B **VERBATIM INVARIANTS**:
1. Every **relevant process** MUST have actually **terminated and have its termination confirmed strictly before t0+120 seconds**.
2. **stdout**: both emitted and accepted *lifetime* bytes individually **<=1,048,576**.
3. **stderr**: both emitted and accepted *lifetime* bytes individually **<=1,048,576**.
4. Never exchange a bound on *captured* bytes for a bound on emitted bytes; do not use the parent process exit as a surrogate for process-tree closure.

"t0", scope of relevant processes, definition of acceptance and authority of the confirming observer need a normative independent decision; this RFC suggests criteria, it does NOT unilaterally narrow the protected process universe.

## 1. Fault-model comparison

| Fault/behavior | Original M (observed record and explicit M counterexample classes) | Candidate M-ISO-01 assumption; eligibility test |
|---|---|---|
| Guest infinite loop / instruction exhaustion | Admitted, including uncooperative work | ADMITTED; use finite fuel for guest and bounded host service path. Fuel alone does NOT bound real time. |
| Guest malformed input / unsupported instruction | Admitted | ADMITTED; reject or trap before output, with bounded parser/host treatment *if independently demonstrated*. |
| Guest output flood | Admitted | ADMITTED; trusted write barrier must refuse bytes BEFORE they are emitted, with separate stream accounting. |
| Guest memory resource exhaustion | May occur | ADMITTED within preallocated quota; native/runtime overhead must also be accounted for, without unbounded OS paging. |
| Process spawn, or descendants escaping supervisor | Admitted/possible | PROHIBITED by capability model, not simply assumed absent; if even one native guest spawn is allowed, add whole subtree to the guarantee and prove closure. |
| Full Windows/Linux host suspend / VM pause / arbitrary scheduling delay | Admitted in M counterexample classes | EXCLUDED from *candidate domain only*; must justify an environment with actual bounded scheduling and non-suspend timebase. Normal Windows desktop/ordinary VM does not substantiate this exclusion. |
| Loss/indefinite pause/crash of supervisor or confirmation path | Admitted in M | EXCLUDED only by independently justified trusted observer availability/bounded recovery. No magical watchdog exemption. |
| Unbounded blocking host calls, uninterruptible kernel I/O, uncontrolled GPU/codec workers | Admitted | EXCLUDED in narrowly limited guest core. Any broader workflow using them falls OUTSIDE this candidate until separately qualified. |
| Power loss, kernel lockup, malicious breakout/privilege escalation | Not excluded by universal original guarantees | EXCLUDED from conditional reliability case but NOT claimed physically impossible; independent reviewer must decide whether this is acceptable for a separate M' policy. |
| Unknown/unenumerated child, third-party plugin, inherited stdout handle | Admitted/possible | FORBIDDEN; process/file-descriptor closure proof required. Detection-only controls are insufficient. |

Important: **M-ISO-01 is *not* M**. A success under its narrower assumptions never changes the impossibility verdict under M. Excluding problematic failures by wording, without a credible engineered environment and explicit approval, yields **NOT_ADMISSIBLE**.

### Formal conditional claim
Let F(M-ISO-01) be the explicitly accepted bounded subset of faults, and P(e) be the *complete, independently reviewed* set of relevant user-mode processes/descendants/control-plane processes for execution e.

**Proposed obligation, NOT a proof:**
For all e and f in F(M-ISO-01),
- Terminated(p, t) AND IndependentlyConfirmed(p,t') with t,t' < t0+120s, for every p in P(e);
- E_stdout(e) <= 1,048,576 AND A_stdout(e) <= 1,048,576;
- E_stderr(e) <= 1,048,576 AND A_stderr(e) <= 1,048,576.

If the confirming observer is itself a relevant process, its own termination/confirmation must be accounted for as well. Either define an independently defensible external non-process trusted anchor (e.g. a separately reviewed kernel event source) or present the complete closure protocol; **do not arbitrarily call a running controller “outside scope”**. Confirmations must be established before the deadline; later viewing of an earlier trusted immutable timestamp may be acceptable only after a normative review defines confirmation semantics. No indefinite chain of self-confirming monitors may be hidden.

## 2. Preferred engineering research candidate: single closed-world semantic execution

**Candidate EX-WASM-01 (not implemented):**
- A fixed, verified input *subset* of EP01 semantic data, separately byte-pinned and validated before any invocation.
- A single finite-capability WebAssembly guest with **fuel** set in a trusted host. No WASI ambient file/network/process access, no subprocess import, no arbitrary native plugin, no user-defined blocking host call, no unbounded instantiation, recursion or unbounded memory growth. Limit/validate linear memory, tables, stack, instance creation and host callbacks.
- Trusted host exposes only deterministic pure functions and TWO separately metered byte sinks. All host diagnostics and errors use the same included per-stream caps; no bypass through inherited fd, library stderr, OS crash reporting, logging sidecars, filesystem proxy or plugin.
- Supervisor/process monitor built in a *fully enumerated* and bounded control plane, with independently verified timebase, scheduling assumptions, process exit + confirmation.
- Guest exhaustion or input rejection MUST produce a bounded abort and complete termination; a trap is neither OS process termination nor a deadline certificate.

Wasmtime documents **fuel** as deterministic guest instruction consumption; **epoch** interruption is scheduling/time based. Neither establishes finite host-function execution time, guaranteed OS scheduling or process-tree termination. See https://docs.wasmtime.dev/examples-interrupting-wasm.html and https://docs.wasmtime.dev/api/wasmtime/struct.Config.html .

**Narrow scope:** only qualified *semantic/validation* functions whose execution graph and dependencies are fully closed. DO NOT infer approval for FFmpeg, browser screenshots, GPU drivers, render pipelines, encoders, TTS, network sources or video publication. Those require their own closed failure model, process inventory, exact assets/rights and separate gates; reclassifying them as “post-processing outside the run” is prohibited when they are causally relevant.

## 3. Native-OS alternatives considered, not equivalent to EX-WASM-01

| Option | Supports | Why insufficient without additional evidence |
|---|---|---|
| Windows Job Object, breakaway disabled, tracked handles | Process grouping and termination; some accounting. | Close/terminate is not proof of deadline-limited confirmation under a suspendable host, nor a separate stdout/stderr *emission* quota. Windows completion-port notifications are not generally delivery-guaranteed. |
| Linux cgroup v2, cgroup.kill, cgroup.events populated=0 | Subtree group kill, recursive live-member status. | Kill request and populated=0 do not establish a universal upper wall-clock bound when host stalls/kernel faults/scheduling delays are admitted. Nor cap emitted stderr/stdout. |
| Linux seccomp, namespaces, capabilities and cgroups | Reduce capabilities and syscall attack surface. | Kernel documentation explicitly warns seccomp is **not a complete sandbox**. Proving *all* write and spawn bypasses absent is still necessary. |
| Timeout / task cancellation / truncating logs / PID checks | May produce useful **observations** after future authorization. | Does not establish termination confirmed before 120s, full process closure or lifetime emitted-and-accepted byte caps. |
| Disposable VM / hard reset | Bounds isolation blast radius in some scenarios. | Destroying a VM/host != proof that all relevant guest/host processes terminated and termination was confirmed before physical deadline if virtual CPU/host can pause. |
| Current original model M | Fully preserves adopted failure assumptions. | Existing E5B4D **NO-GO**, remains binding for every execution still under M. |

Official references:
- Microsoft Job Objects: https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects
- Windows completion port delivery caveat: https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-jobobject_associate_completion_port
- Kernel cgroup v2: https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html
- Kernel seccomp scope: https://docs.kernel.org/userspace-api/seccomp_filter.html

## 4. Illustrative budget: physical wall-clock and *every relevant process*

Proposed *target maxima for future proof work*, NOT observed or certified timing:
- input/preflight + source identity: 10 s;
- isolated envelope setup and launch: 6 s;
- bounded guest/host work: 70 s;
- abort/forced teardown allowance: 12 s (include even if normal completion);
- exhaustive exit/closure confirmation: 10 s;
- final event/audit record and closure of remaining relevant control processes: 8 s.

**Total worst-case provisional bound = 116 seconds, 4 seconds strictly before 120.**

The 116-second arithmetic is a **specification of proof obligations only**, not evidence these upper bounds hold on Windows, Linux, in a VM or with GPU. The actual final stage must include a *trusted confirmation* that even the **last** relevant process terminated. If the adopted timebase excludes sleep but Policy B means elapsed real physical seconds, it is invalid. Clock, timer drift, monotonicity, scheduler latency, process kill/exit/reap and final confirmation must ALL have defensible worst-case bounds; no percentiles, means, timeout flags or one successful dry-run can substitute for a universal claim under M-ISO-01.

If any component has unbounded latency, abort this proposal as **INCOMPATIBLE/INSUFFICIENT_EVIDENCE**, not by adding an undocumented “pause the clock” exemption.

## 5. Independent stdout/stderr emission AND acceptance ceilings

Required event-level invariants for s in {stdout, stderr}:
- C_emit[s] and C_accept[s] are **distinct unsigned lifetime byte counters** (actual encoded octets, including line terminators and host diagnostics).
- No component may write/forward bytes to stream s unless a trusted mechanism preauthorizes capacity such that C_emit[s] <= 1,048,576 can never be exceeded. Rejected guest output is NOT emitted; reject BEFORE OS write, do not print and then truncate.
- C_accept[s] must account for bytes actually admitted to all relevant capture/acceptance endpoints. Include kernel/pipe buffers, forwarding, runtime logging and every permitted writer in the scope. Where multiple sinks interpret "accepted" differently, contract must settle definitions without weakening the global cap.
- Any partial write, retry, interrupted write, Unicode re-encoding, subprocess stderr, trusted runtime diagnostic or exception path must be governed by the barrier. A mere receiver-side cap is insufficient.
- Suggested *design* sub-quota (not a new policy): guest payload <= 900,000 per stream; reserve up to 148,576 for all other permitted emissions. Global per-stream hard cap is **still 1,048,576**, and no shared combined quota can replace it.
- To prove absence of bypass, establish all allowed handles, callbacks, imports, file descriptors and native OS emission paths *at the beginning and through teardown*. If stdout/stderr path cannot be proven sealed, **NO-GO**.

Test/measurement subsequently, if authorized, can challenge counters and demonstrate example behavior; it cannot independently establish that no bypass exists for every admitted fault.

## 6. Proof obligations and independent review gates — NONE satisfied yet

| ID | Strict evidence demanded before even one isolated technical execution | Today |
|---|---|---|
| M01 | Exact normative definitions of M versus M-ISO-01, fault scope, explicit excluded failure plausibility and governing authority's independent approval | PROPOSED |
| M02 | Exhaustive list of relevant processes including supervisor, encoder if used, host helpers, logging and potential descendants; no circular scope exemption | UNPROVEN |
| M03 | Version-pinned OS, hardware, time source, scheduling/progress and non-suspend assumptions with credible physical worst-case justification | UNPROVEN |
| M04 | Closed capabilities and all input/import/native callback paths, no subprocesses or blocking/out-of-model calls; immutable artifacts | UNPROVEN |
| M05 | Worst-case end-to-end deadline inequality including *real process termination plus confirmation*, every control-plane component, strictly <120s | UNPROVEN |
| M06 | Separate complete lifetime emit/accept <=1,048,576 per stdout AND per stderr, all writers and buffers, with unbypassable pre-write guards | UNPROVEN |
| M07 | Fail-closed handling of crashes, traps, resource exhaustion, output attempts, exit races, partial writes, restart and event recording | UNPROVEN |
| M08 | Independent evaluator signs soundness of assumptions and implementation architecture; absence of observations cannot be promoted to PASS | NOT_REVIEWED |
| M09 | Only if M01–M08 reviewed: separate explicit authorization to conduct bounded technical tests and define adversarial test matrix; outputs not preclaimed | NOT_AUTHORIZED |
| M10 | Only after successful permitted tests and reviews: case-specific technical gate consideration, PLUS historical evidence, R6, IVV, and independent publication approval | NOT_ELIGIBLE |

**Rejection/admissibility rules:**
- If the original policy authority says all original M faults remain in scope, M-ISO-01 is **inapplicable**; E5B4D remains NO-GO.
- If a Windows workstation can sleep/hibernate, a VM can be paused, a supervisor can fail or process closure cannot be confirmed with a worst-case bound, strict Policy B proof is **not supplied**.
- If an API can spawn work outside containment, a native tool may log independently, or stdout/stderr emissions are not pre-governed, **reject** the claimed stream guarantee.
- If the claimed bounds are 120.000 seconds exactly, or confirmation is delayed until after deadline, **reject** (Policy B demands *strictly before* 120s).
- If a research-only kernel passes but the renderer adds unbounded processes/graphics/GPU steps, do NOT extrapolate the kernel result to the final media pipeline.
- If some independent auditor cannot account for the trusted observer itself under P(e), **reject** the closure proof.

## 7. Required decision and non-promotion statement

**Requested later governance choice (NOT taken):**
1. Keep original M unchanged for existing Engine, Policy B unchanged globally.
2. Optionally authorize M-ISO-01 as a *separate fault-domain candidate* only after independent reasoned acceptance of actual physical exclusions/assumptions, full process boundary and timing/output proof obligations.
3. Only after separate explicit gate decision, scope a limited qualification of the semantic core; do NOT assume rendering, publishing, R6 or chess/legal/historical verification.
4. If credible worst-case guarantees cannot be supported with available hardware/OS, prefer **NO-GO** to falsely claiming feasibility. Any real production-policy renegotiation is a separate human governance decision beyond this RFC.

**Current effective decision**: NO-GO under M; M-ISO-01 **DRAFT_ONLY, UNAPPROVED, UNIMPLEMENTED, NOT_TESTED**. Policy B unchanged (120s strict confirmation + 2x independent 1,048,576 emitted-and-accepted ceilings). CASE/OVER1, original failure assumptions, R6, IVV, negative test statuses, all production gates, main and PR#12 UNCHANGED. No code, binaries, runs, tests, scripts, renderers, workflows or media created by this RFC.
