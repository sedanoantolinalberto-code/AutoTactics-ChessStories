# M-ISO-01 v0.2 — reconcile with recovered original E5B4D report

**Date:** 16 October 2026; Engine YT / AutoTactics Chess Stories only.
**Verdict:** DOCUMENTARY_CORRECTION_ONLY / NOT_ADOPTED / NO_EXECUTION / E5B4D_UNCHANGED.

This addendum corrects deficiencies in the v0.1 candidate and internal self-review. It does NOT replace original M, Policy B, E5B4D, or any approval.

## 1. Recovered primary report, exact location and evidence limits

User Library file: **Texto pegado(20261011-235300).txt**, folder **Engine YT**, canonical Library file ID **file_0000000056ec81f4b74f60321aa93eb6**. File listing: created **2026-10-11 23:52:59 UTC**, reported size **24,551 raw bytes**. Library read: **288 rendered lines, complete**. Section A verdict: **E5B4D_STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL**. This is the original Codex analysis *report* of E5B4D, not an external independent proof.

**Raw provenance limit:** Library read provided textual lines but the authorized raw-byte materialization failed. Do NOT invent a SHA-256 for original raw bytes. The E5B4D v0.1 *instruction contract* the report says it read was a separate historical Codex attachment and has NOT been directly recovered; therefore the report's section D is a reliable record of what that analysis called M, not an authenticated reproduction of the upstream contract.

Existing candidate RFC: commit **03b5942ffe94e1ff3a85f424d2ed819555e3cdba**, blob **e6b83392d3170a797df743f1bee107ba25d529d7**. Its assistant-only review: commit **5fa4f752d5fd22e1189b685a6f5dc0e7b8dc59f4**, blob **cfb85e40e57b12b8bef387c4d1dc0be09806d427**.

## 2. The seven M conditions, preserving recovered report section D

1. At least one relevant **compiler** target process is actually launched; never launching anything is not a qualified execution solution.
2. On Windows no finite bound is established for supervisor scheduling/dispatch, termination completion, and confirmation delivery.
3. Suspension, supervisor failure, session loss, and OS unavailability can span the deadline.
4. The producer need not cooperate; it may request arbitrary valid write lengths, retry failed writes and create work through available mechanisms.
5. Ordinary pipes offer buffering/backpressure, not a documented cumulative acceptance quota.
6. Same-host supervisors and guest VMs can be affected by the same host outage.
7. No independently qualified external controller or strict output-admission boundary is assumed.

These are **admitted failure possibilities** of this specific analytical model; they do not establish empirical failure on the user's PC, nor universal impossibility of every restricted environment. E5B4D's original scope is a **compiler invocation and its dedicated relevant work**. The earlier M-ISO-01 proposal described a **different, future WebAssembly semantic kernel**. Proving that new operation could be bounded would NOT lift the original compiler-bootstrap E5B4D NO-GO. This is a second distinct error of scope in v0.1.

## 3. Output semantics were misstated in M-ISO-01 v0.1

Section D of original report defines for each separate stream s = stdout or stderr, with L = 1,048,576:

| Symbol | EXACT ANALYTICAL MEANING | Implication |
| --- | --- | --- |
| E_s | **Cumulative producer-requested byte lengths submitted on stream s**, including **FAILED and REPEATED** attempts | Even rejected writes count once submitted. This is a strict attempted-byte metric. |
| A_s | Cumulative bytes **accepted by the designated OS output channel** | Atomic quota on admission may conditionally enforce this alone. |
| C_s | Bytes captured/consumed by observer | Capture limit does not bound requests or OS admission. |
| R_s | Raw bytes retained as evidence | Retention limit is independent of both obligations. |

Counterexample from original section F, attempted limit: producer's FIRST request is for L+1 bytes. Then E_s > L immediately EVEN IF the receiver rejects the entire request. A second counterexample: A_s=L-1 and a producer gets 2 additional bytes accepted before supervisor dispatch; then A_s=L+1, and subsequent closure is too late.

The abstract atomic acceptance rule 0 <= a_k <= L-A_{k-1}; A_k=A_{k-1}+a_k proves **only A_s <= L by induction**, never E_s <= L. A guest-metered stdout sink or downstream log truncation cannot protect E_s if oversized requests already occurred.

**Mandatory correction:** Do not say the unchanged Policy B is satisfied if only successful/emitted or accepted bytes are bounded. The new proof MUST meet separately E_stdout, A_stdout, E_stderr, A_stderr <= L throughout whole lifetime, including failures and retries. Do not reinterpret a stream request as 'internal data' without explicit normative approval of the output interface boundary. The source's research metric E_s is stricter than an intuitive colloquial reading of 'emitted bytes'; source-faithful preservation is safer pending policy-authority review.

## 4. Candidate M-ISO-01-SEMANTIC, newly separated domain (NOT ADOPTED)

Original M continues to apply to the compiler and E5B4D. New *hypothetical* M-ISO-01-SEMANTIC would govern a DIFFERENT strictly closed Chess Stories semantic run, only if a competent authority later approves its faults, capabilities and process scope.

Research-only possible architecture:

- Version-pinned WebAssembly guest with NO WASI ambient process/file/network/stdout/stderr access, no output stream imports, subprocess imports, native plugins, or unbounded/blocking host functions. The absence of all bypasses is a **proof obligation**, not a claim about an installed runtime.
- A bounded in-memory typed result passed to a separately qualified and preexisting host serializer. If any such interface is normatively treated as an output stream attempt, it must satisfy E_s there; relabeling a syscall does not erase counts.
- Only a trusted, preexisting serializer can submit OS stdout/stderr write requests. It must accumulate ALL request LENGTHS including failed/partial/retried submissions in two independent non-resetting per-stream lifetime budgets. Check and reserve BEFORE request submission; if remaining E_s budget is exhausted do not issue another request. Host diagnostics, error paths, panic, inherited file descriptors and other writers must be proven absent or subject to the exact same attempt budget.
- An independently sealed atomic acceptance gate also enforces A_s on the designated OS channel, separate from attempted E_s. Returning data from guest is not automatically a stdout/stderr write, but this boundary must be reviewed explicitly.
- Independent bootstrapping and versioned host toolchain are required BEFORE running this design. Using the originally blocked compiler to build its own protector is still circular.
- WASM fuel limits guest computation but neither guarantees bounded native host work nor completed OS process termination/confirmation before 120 physical seconds.
- Complete process scope includes dedicated control/delegated and possibly broker-created work to which the guarantee applies. The original report warns that shared services cannot automatically be killed. Define a qualified trusted observer and complete scope without arbitrary exclusion or endless observer recursion.

If the candidate cannot prove zero unmetered OS write paths or justified real-time progress, its correct verdict is NOT_ADMISSIBLE, not a success from narrow test data.

## 5. Source-faithful deadline and coverage

Original report section D:
- Relevant process = compiler + processes dedicated to this compiler invocation, including delegated work that the guarantee claims to cover; a descendant in the creation chain is NOT a complete inventory because brokers can create further work.
- Termination = completed OS process exit, not a kill request, suspension or absence of output; destruction of remaining handles not required.
- Confirmation = trusted target-independent evidence covering each relevant process, available to the designated observer.
- Research t0 = immediately before target process creation; D=t0+120 elapsed real seconds INCLUDING suspension.
- Original report section E displays termination and confirmation times **<=D**. However the user's protected Policy B is **STRICTLY BEFORE 120s**, so any future M-ISO implementation must use <D, not equality at 120. No policy relaxation inferred.

Source section H offers a conditional timing inequality with shutdown initiation tau, detection B_d, scheduling B_s, completion B_t, confirmation B_c and clock-error B_eps:

  tau + B_d + B_s + B_t + B_c + B_eps <= D

No values were proven for these terms. Under strict Policy B require a properly justified **<D** inequality. Candidate v0.1's illustrative allocation of 116 seconds remains NOT a measured WCET, and cannot be substituted for missing bounds. Under original M a host suspension can span D, so no universal success is provable.

## 6. Decision and staged evidence requirements

1. **M original unchanged:** The seven reported M assumptions and source output metrics remain in force for the original compiler. The model-scoped NO-GO is NOT appealed or overridden by a new guest architecture.
2. **Provenance:** The original E5B4D *report* is now actually read; its upstream v0.1 *instruction contract* remains unavailable. Obtain raw-byte evidence or signed text only when available; no invented digest.
3. **Fault-domain authorization:** Formally name the new SEMANTIC operation and enumerated process/observer graph, define narrower faults and capabilities and have competent independent review explicitly distinguish it from original M.
4. **Output:** Demand two independent complete attempted-byte bounds **E_stdout and E_stderr**, and two independent OS-accepted-byte bounds **A_stdout and A_stderr**, all across full lifetime, including failed attempts and repeated writes; prove absence of bypass routes.
5. **Time:** Justify version-pinned physical-time progress, output enforcement, termination and confirmation for ALL relevant processes, strictly before D with independent evidence. If no credible target exists, stop with NO-GO.
6. **Governance:** Independent M01–M08 review and separate later test permission remain pending. Even an eventually qualified SEMANTIC guest does not imply compiler bootstrap, the final video pipeline, assets R6, chess legality, history, human IVV or publication approval.

**Frozen state**: Original E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL / NO-GO under M; strict Policy B exactly intact; M-ISO-01 v0.1 proposal and internal review untouched; new M-ISO-01 v0.2 DRAFT ONLY; 66 semantic negatives, 77 router negatives and independent chess oracle NOT_RUN; R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED. No code/tests/scripts/workflows/renders/binaries/merges/policy changes/main/PR#12 changes.
