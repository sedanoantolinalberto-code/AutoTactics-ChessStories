# E5B4D → EP01 production path — independent-adjudication packet (2026-10-17)

**Status: DOCUMENTARY DECISION PACKET ONLY — NO-GO UNCHANGED.** This document does not approve execution, replace an evaluator, narrow the original failure model M, change strict Policy B, or authorize publishing. Based on the project's recorded E5B4D disposition and issue #8; an exact independent review of original E5B4D model M and its counterexample is required before adopting any technical remedy. The full original proof is **not reproduced or independently re-proven** here.

## 1. Protected, non-negotiable requirements (original Policy B)

1. Every **relevant process** must have **actually terminated** and its termination must be **independently confirmed** strictly **before 120 s elapsed physical time**, including any suspension. Sending a kill or observing a local watchdog deadline is not equivalent to observing confirmed termination.
2. For **stdout and stderr independently**, over the entire process lifetime, require both:
   - `E_s <= 1,048,576` bytes: aggregate lengths of submitted write requests, including unsuccessful/retried attempts.
   - `A_s <= 1,048,576` bytes: bytes actually accepted by the OS channel.
   A log file, pipe-drain quota or truncation bound on accepted output **does not establish** the submitted-request bound.
3. Verify all descendants and other processes included in the exact relevant-process scope defined in the governing model; neither subprocess-tree assumptions nor close-on-parent-exit shortcuts are assumed sufficient.
4. Claim only what has been proven under the specified failure model; wall-clock observations, scheduler behavior, suspend/resume and uncooperative-process cases matter where M permits them.

**Existing governance:** E5B4D: `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL`; execution **NO-GO under M**. M-ISO-01 v0.2 and EX-VIDEO-01 are proposals under different assumptions, **NOT adopted**. Independent evaluator not appointed. A test run cannot overturn a model-level incompatibility proof.

## 2. Decision tree for independent evaluator (not implementation permission)

- **Path A — Original M remains and strict B remains:** maintain **NO-GO**. Neither process-tree termination nor write-attempt ceiling can be asserted by instrumentation not itself guaranteed under M. No EP01 test/render attempts.
- **Path B — Alternative fault model is proposed:** define exactly and openly what adversarial behaviors are removed, what trusted kernel/supervisor/OS facilities are added, clock semantics (including suspension), process scope, and fail-closed behavior. Prove *both* E_s and A_s per stream and all-process confirmed termination under the *new* model. Require explicit governing approval and independent review **before** any execution. Never silently call this compliance with original M.
- **Path C — Physically offline/manual media production without subjecting a process to Policy B:** only a *scope hypothesis*. No automatic exemption; project governance must first decide whether any relevant processes are implicated. No manual-render loophole may be assumed or used as a substitute for approval.
- **Path D — Relax B:** outside existing autonomous mandate. Do not propose a time extension, aggregate stdout+stderr limit, post-deadline cleanup or accepted-output-only accounting as if equivalent. Requires a separate explicit human policy change, which is not authorized here.

## 3. Exact independent questions and acceptable evidence

| Question | Evidence necessary | Reject as insufficient |
|---|---|---|
| What is the formal M counterexample causing E5B4D? | Citation to exact governing M clauses and witness/counterexample, with assumptions | "It usually terminates" or an experimental PASS |
| What are all relevant processes and descendants? | Closed-world scope definition or trusted discovery guarantee under chosen model | Parent PID terminated |
| Is `E_s` bounded per stdout/stderr separately, counting failed and retried write requests? | Pre-submission mediation/proof that accounts full requested lengths *before* every write attempt | OS pipe size, bytes captured, logfile truncation |
| Is `A_s` independently bounded per stdout/stderr? | Channel-level accepted-byte control/accounting with defined races | Assuming it follows from E_s without proving interception/exhaustiveness |
| How is actual termination confirmed before physical 120s under suspension? | Trusted observation + clock semantics and worst-case proof | watchdog's timeout fired; `kill()` returned; wall-clock check after resumption |
| What process failure makes guarantees impossible under M? | Counterexample proof; mapped violation and trusted-component requirements | Promises of best-effort cleanup |
| Who can sign off a new model/protocol? | Named independent evaluator, signed scope, findings, explicit governance decision | Author's own checklist or code review |

Independent deliverable must provide: *scope, assumptions, proof/counterexample, limitations, test eligibility, human decision authority, outcome* (`NO-GO` / `MODEL_CHANGE_PROPOSED` / `PROVEN_IN_NEW_MODEL_PENDING_APPROVAL`). Do **not** use an ambiguous PASS.

## 4. EP01 gated critical path following an actual approval (ordered, not authorized now)

1. Receive independent E5B4D adjudication and explicit approval of any admissible execution model; document change control. **Currently blocked.**
2. Reproduce and pin approved test environment and exact eligible process inventory; independent preflight against approved model before first test.
3. Qualify independent chess legality oracle; adjudicate full move/position evidence and T10's 14-ply omission. Historic terminal physical play remains uncertain; editorial T12 `25...Nxd1` stays **NONTERMINAL**.
4. Execute 66 semantic and 77 router negative test specifications under approved protocol, record exact coverage/outcomes; `NOT_RUN` is **not** PASS.
5. Independently reconcile static event truth labels and visual staging: never expose `TECHNICAL_ONLY` `V-PRE-EV2` as audience-visible; proposed ALT-A T10 hold / T11 hard cut remains **UNQUALIFIED** until actual image QC.
6. Qualify assets/rights under R6 (original art, music, fonts and any historical facsimile); do not infer commercial rights from archive access or education-only sharing.
7. Create **private** 45s proof render (60s variant is optional, not mandatory) only after gates permit. Perform frame/audio/silent-view/mobile safe-area QC and human IVV per approved preregistration; no fabricated participant results.
8. Obtain IVV_GLOBAL, CASE_APPROVAL and rights/release decisions before publishing. PR #12 draft/main unaffected until normal review and explicit merge authorization.

## 5. Immediate no-execution work authorized here

- Maintain a single **adjudication packet**; avoid another generic 100-block research round.
- Preserve five existing external technical inquiries as **SENT/PENDING**; no response = no evaluation; do not resend same-day or invent signoff.
- On first substantive evaluator reply: record its exact text, identify which specific model assumptions it addresses, whether it is an independent signed evaluation or only informal guidance, then propose a **separate** approval decision. No automatic promotion.
- Investigate only genuinely new documentary contradictions. Historical venue remains unresolved (Greg Keener 2026 reply reports Brady=Marshall and Lombardy=Manhattan); no venue-specific room claim in EP01 final imagery.
- No engines, tests, scripts, Actions, rendering, external spend, main or PR #12 edits under this packet.

**Source anchors (project internal):** GitHub issue #8 E5B4D/Policy B and EP01 draft-gate descriptions; H1 documentary branch `bec23d8dcc0091470202208447230700161359ae`. Source statements above are transcriptions/synthesis of existing project governance, **not new empirical demonstrations**.
