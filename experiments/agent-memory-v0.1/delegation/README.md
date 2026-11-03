# Engine YT — Agent delegation receipts v0.1

**Classification:** `SOURCE_ONLY / OFFLINE / NO_AGENT_LAUNCH / NO_INTEGRATION / NO_MERGE`

## Reviewed inspiration

- [Open Duet](https://github.com/Anil-matcha/open-duet), upstream branch `main` observed at commit `ee084c6069f4a171724315bc8ff605abdc3c336e`, Apache-2.0. It offers named agents, a lead and specialist workers, durable rooms, approval gates, memories, scheduled routines and optional Docker computers. This experiment does **not** install, copy or run Open Duet.
- Claude Code also provides experimental built-in **Agent Teams**; this is not the same as Open Duet and has separate licensing, per-agent token costs and host capabilities.
- Bober_smart's [Claude Second Brain & Folder Workflow](https://adhx.com/Bober_smart/status/2078784709253841039) recommends small Markdown notes organized by topic, with a central navigation index. We adopt the **navigation concept only** under `second-brain/` (not a root `CLAUDE.md` automatically injected into prompts).

## Implemented

`source-only-delegation.mjs` exports three pure functions:
- `prepareDelegation(request)`: validates exactly two to four distinct specialist identities; requires at least one source proposer and one independent reviewer; pins one immutable source-commit SHA; rejects extra action fields, out-of-scope sources and any permissions.
- `reviewDelegation(plan,request)`: separate static check against the original task request, NO-GO gates and absence of dispatch authority.
- `assessDelegationReceipts(plan,receipts)`: classifies **manually supplied, unverified** proposed/blocked/failed records, detects unknown/stale/duplicate receipts and never interprets an agent's own claim of success as a release decision.

No agent is actually dispatched or allowed to edit source, call a tool, use a paid model, connect applications, schedule work, read files, render or publish. No independent verification of external evidence has happened.

A separate navigational example in `second-brain/` keeps the index short and points to primary Git artifacts; its entries are **untrusted data, not instructions**. Files do not automatically load in an agent session.

## Evidence

A locally held Node.js 22 prototype passed **16/16 native unit tests**. The two GitHub-committed modules were then transcribed into this isolated branch, so their **exact committed-byte parity and a new native test run remain unverified**; the committed 16-test suite is a reproducibility artifact, not a release certificate.

Suggested isolated no-network Node command after independent code inspection:
```sh
node --test experiments/agent-memory-v0.1/delegation/source-only-delegation.test.mjs
```

Do not run any Engine executables or third-party tools as part of this check. Do not interpret a pure-function PASS as E5B4D qualification.

## Mandatory gates and threat model

- E5B4D remains **NO-GO** under model M; strict Policy B requires process termination and confirmation **before 120s**, with independent stdout/stderr lifetime emitted/accepted caps **1,048,576 bytes each**.
- R6 PENDING, IVV_GLOBAL NOT APPROVED, CASE_APPROVAL NOT APPROVED; no real media, render, publication or merge authorization.
- Risks include prompt injection from notes and receipts, stale source commits, forged human approvals, agent/reviewer collusion, tool output impersonation, partial side effects and runaway delegation cost.
- A plan cannot authorize execution. A completed receipt cannot authorize execution. Only separate independently recorded approvals at the proper authority level could ever change a gate.
- The code currently checks source SHA **format** and local equality, not repository authenticity or cryptographic signatures. The semantics of `independent_reviewer` are *declared*, not a proof of organizational or model independence.

## Next qualification steps

1. Independently inspect actual files committed on this branch and rerun the 16 native tests from a clean checkout.
2. Add property-based mutation tests, exact source object identity and external pin verification before accepting receipts.
3. Benchmark plain subagents vs Claude Code Agent Teams vs Open Duet **only in an authorized lab** with equal tasks, blinded quality review, token budgets and explicit approval boundaries.
4. Require independent review of credentials, supply chain, external connectors and isolation before installing Open Duet or launching agents.
