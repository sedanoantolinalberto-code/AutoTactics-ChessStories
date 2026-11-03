# Claude Code /goal and Advisor — bounded multi-model orchestration research

**Status:** RESEARCH_ONLY / DOCUMENTARY / NO_COMMANDS_RUN / NO_AGENT_LAUNCH / NO_APPROVAL_CHANGE  
**Observation date:** 2026-11-03

## Primary documentation reviewed

- https://code.claude.com/docs/en/goal — official semantics of `/goal`, Stop-hook evaluator, session scope, manual versus auto permissions, partial recovery and error behavior.
- https://code.claude.com/docs/en/advisor — official semantics of the experimental Advisor tool, model compatibility, cost, restrictions and limitations.
- X @mirku21 screenshot, user-provided, advertises an architecture combining Opus architect, Sonnet builder, Haiku evaluator, Fable adversarial reviewer and JEV router. This is third-party promotional material, not an official model compatibility specification or benchmark.
- X @n01ennn screenshot/reference (status 2116195115085463859). Exact post content is not independently matched via web; no unverified claims from that X status are treated as requirements.

## Distinguish claims from evidence

| Control | Official behavior | Engine YT trust boundary |
|---|---|---|
| `/goal` | A session-scoped prompt-based Stop hook checks the conversational evidence after each turn and may continue another turn | A model verdict is **NOT** a native test, source verification, process boundary certificate, gate decision or render approval |
| `/goal` with auto mode | Auto mode can approve ordinary tool calls within turns; `/goal` advances turns | **Do not enable** for blocked Engine components; auto approval would conflict with fail-closed controls |
| `/goal` failure handling | May retry transient errors or pause, and persists across session resume; counters may reset | Generic retries and reset counters must not circumvent independent process/time/output budgets |
| Advisor tool | A second model receives the whole conversation (including tool traces) at main-model-selected points | Advice is untrusted diagnostic input; sharing whole transcripts creates exposure and cost risks |
| Advisor eligibility | Official pairing rules restrict weaker advisors; Fable 5 advisor was documented temporarily unavailable during review | **Do not assume** that Fable 5.1 can be selected or that a named model version is available in the user's installation |
| Independent PR reviewer | A separate case/provenance-aware checker validates evidence against explicit acceptance criteria | Required regardless of advisor response or `/goal` verdict |
| JEV deterministic forks | External, separately licensed and benchmarked architecture suggested by third-party posts | Not an official required dependency; no adoption or use until scoped, audited, and benchmarked |

## Relevant safe design pattern (not activated)

Proposed roles in a future authorized **isolated, metadata-only lab**:

1. **Planner:** records a bounded objective, immutable source revision, explicit acceptance checks and mandatory stop reasons.
2. **Builder:** may implement on an isolated scratch branch **only with separately granted repository permissions**; no agent writes to protected `main`.
3. **Lightweight evaluator:** reviews the tool transcript but cannot independently attest tests or successful termination.
4. **Advisor:** may recommend a revised plan if model and billing prerequisites are satisfied; its recommendation cannot upgrade trust.
5. **Independent auditor:** checks actual source bytes, terminal results, provenance, negative cases, permission scopes and frozen gates. It cannot self-approve release without formal authority.

The current PR #20 has only **pure source-only preparation/review functions** and documentary QA budgets. It has **NO** actual agent dispatcher, process-boundary runtime enforcement, CLI adapter, Advisor invocation, token-metering guarantee, automatic retry control or production deployment.

## Admission criteria for a future benchmark

- Confirm actual installed Claude Code build, subscription/API access, advisor/main-model pairing, exact flags and feature availability in the lab.
- Check the latest official docs again; these features are experimental and evolve.
- Prohibit network or secrets unless required and separately approved; redact private and proprietary sources from transcripts that an advisor receives.
- Benchmark a baseline against no Advisor, allowed Sonnet+Opus Advisor and independent review with identical tasks; record token costs, quality defects and total latency.
- Confirm explicit budget caps and **no** automatic retry or turn restart outside the lab's separate authoritative controller.
- Reject stale/forged transcript verdicts; a claimed `PASS` must have immutable evidence pointers and reproduced test output.
- Exercise cancellation, crash recovery, session resume and exhausted-budget failure with independent cleanup verification.
- Before any actual Engine process tests: qualify **E5B4D** separately. Strict Policy B mandates termination and confirmation of every relevant process **before 120 seconds**, and each stdout/stderr stream's emitted-and-accepted lifetime cap **1,048,576 bytes**. Generic `/goal` timers do not satisfy Policy B.

## Decision

**RETAIN AS ARCHITECTURAL REFERENCE; NO LIVE INTEGRATION.** Review docs and the next native PR #20 test results before creating an executable adapter. The @hanakoxbt status https://x.com/hanakoxbt/status/2110067711363457244 is now verified independently as an **October 13, 2026 REA (Reverse Engineer Anything)** post, not a `/goal` or Advisor announcement. REA was previously evaluated for Engine YT as an exceptional reverse-engineering audit candidate; no duplicate integration or dependency is required.

E5B4D **NO-GO** model M; R6 **PENDING**; IVV_GLOBAL and CASE_APPROVAL **NOT APPROVED**; no merge to main, render, publication, external API spend or credentials authorized.