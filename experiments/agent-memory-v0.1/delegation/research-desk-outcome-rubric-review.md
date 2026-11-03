# Agent outcome rubric — research desk differential review (2026-11-03)

**Scope:** DOCUMENTARY EVALUATION DESIGN / NOT A WORKING GRADER / NO AGENTS LAUNCHED / NO RELEASE AUTHORITY.

## Verified upstream

Anthropic official workshop [cwc-workshops/research-desk](https://github.com/anthropics/cwc-workshops/tree/4c34ec4863dfdc6b0ba3a473bd3408eb38660c22/research-desk), pinned commit `4c34ec4863dfdc6b0ba3a473bd3408eb38660c22`; `prompts/analyze_rubric.md` blob `34b7a5529a098c5430650879dc36fa78564d790c`. Apache-2.0 sample material, README notes **not maintained/not accepting contributions**.

Upstream creates delegated analyst sessions via a server-side watcher, grades outputs with an explicit five-point evidence rubric, and writes shared memory. It is a **tutorial involving external API credentials**, not a turnkey Engine YT implementation or proof that any particular agent is reliable or economical.

## What is new relative to draft PR #20

PR #20 currently has documentary (untrusted) delegation receipts, bounded-submission records and static sanity checks. What it **does not yet have** is a proven **outcome rubric** with agreed source-backed acceptance criteria and independent adjudication. We should avoid calling a self-reported PASS an accepted result.

The following suggested five-axis rubric is inspired by the workshop, adapted to Engine YT and **not copied as an implementation**:

| Axis | Required evidence before a claim of acceptance | Failure or unknown |
|---|---|---|
| **Artifact integrity** | Exact immutable Git commit + file hashes + schema validation of outputs | FAIL_CLOSED if missing, malformed, wrong branch or mutable source |
| **Reproducible tests** | Separate evaluator repeats **exact committed bytes** in a permitted isolated environment and records command, environment, exit, stdout/stderr bounds | NOT_VERIFIED without independent rerun; direct mock PASS is insufficient |
| **Security and authority** | Frozen E5B4D/R6/IVV/CASE gates, permission scope, process isolation, time and independent emitted/accepted stream budgets rechecked | FAIL_CLOSED on elevated capability or process/output escape |
| **Source / editorial truth** | Evidence-linked chronology and event labels; real vs hypothetical chess moves; S08/T11 source-board adjudication checked | BLOCKED if visible truth or legal rights cannot be qualified |
| **Honest caveats and memory** | Explicit unknowns, provenance/freshness of knowledge notes, no credentials in memory and no automatic promotion to formal decision | NOT_VERIFIED for missing source; never infer accuracy from a summary |

## Proposed future scorecard protocol — not implemented

- Required input: `case_id`, exact immutable `source_commit`, `task_id`, reviewer identity, evidence object IDs and qualified runtime environment.
- Each axis needs a **separate evidence pointer and reviewer assertion**, recorded as `PASS_REVIEWED`, `FAIL`, or `NOT_VERIFIED`; missing or unsourced claims are `NOT_VERIFIED`, **never** default PASS.
- `PASS_REVIEWED` must mean the reviewer **actually verified** the underlying artifact. Merely entering a string into JSON must not qualify evidence.
- Overall verdict: any critical `FAIL` ⇒ `FAIL_CLOSED`; unresolved S08/T11, E5B4D or any unverified critical axis ⇒ `BLOCKED_NOT_QUALIFIED`. A set of passing documentary scorecards remains **insufficient** to lift formal gates.
- Distinct maker/reviewer attribution and non-replayable approval provenance required; compare independent evaluations on the same tasks and source revision.
- Before operational implementation: adversarial tests for forged reports, stale commits, prompt injection in evidence, missing files, grader manipulation and backfilled results. Budget and latency included in evaluation.

## Related lessons from other user-provided X posts in this 10-item batch

- `@nicogarcia_ia`: high-volume agent-skill collections contain community packages and official Anthropic examples, **not** hundreds of official Anthropic agents. Use targeted read-only skill reviews; never bulk-install into coding tools.
- `@unknownnode404`: seven memory layers (claude-mem, mem0, cognee, graphiti, letta, basic-memory, MCP memory service). Overlap heavily with PR #16/20; defer architecture changes pending retrieval evaluations.
- `@asteri_eth`: 3×3×2 aspect/hook/CTA plan addressed separately in source-only PR #21; no claimed MP4 export or pixel-accurate seek.
- `@slonski_rt`: a community-coded `andrej-karpathy-skills` inspired by Karpathy; narrow changes, explicit assumptions, simple code and tests before claims, but **not** an official Karpathy/Anthropic plugin.
- `@he1s_sammy`: REA is reverse engineering, not core media orchestration; do not grant native-code inspection tools automated broad host access.
- `@sownjuinho`: '10×' autonomous agent output is unsupported without a controlled benchmark; bounded retries and escalation remain mandatory.
- `@samaipr`: Anthropic [Message Threads](https://platform.claude.com/docs/en/build-with-claude/message-threads) can eliminate repeatedly sending old conversation on immediate follow-ups, but threads **expire after about 5 minutes idle** and need full replay on 404. Not a persistent memory store.
- `@mojeskoqq`: Second Brain / Obsidian vault duplicates our Markdown navigation experiment; avoid bulk importing chats and private data into a public repo.
- `@hey_madni`: [Hob](https://www.hob.chat/) is an open-source local AI app, not a demonstrated upgrade over our present local inference architecture.
- `@beamnxw`: official Research Desk provides inspectable evaluation pattern; external API/long-running server architecture is **not** automatically Policy B compliant.

## Next qualification

1. Reproduce the **exact committed** PR #20 static tests in isolated Node; record actual environment and hashes.
2. Independently review this proposed rubric and define what specific evidence qualifies a `PASS_REVIEWED`.
3. Prototype a **read-only evaluator** on synthetic/historical evidence, with no shell, network, API keys, budget spending or authority to change gates.
4. Measure defect detection, disagreement rate, latency, token spend, and false-acceptance against a single-review baseline.
5. Consider an operational runner only after explicit, independent higher-gate qualification.

## Frozen gates

E5B4D **NO-GO** under model M. Strict Policy B: all relevant processes terminated and termination confirmed **before 120 s**, stdout and stderr each bounded independently to **1,048,576 emitted AND accepted lifetime bytes**. R6 PENDING, IVV_GLOBAL NOT APPROVED, CASE_APPROVAL NOT APPROVED. No autonomous execution, integration, merge to main, render, release, or publish authorization.
