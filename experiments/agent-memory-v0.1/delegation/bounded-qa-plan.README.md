# Bounded QA & Retry-Log Contract v0.1 (documentary only)

**Status:** SOURCE-ONLY / NO-EXECUTION / NO-AUTO-RETRY / NOT-QUALIFIED.

The user provided a screenshot of a promotional `one_shot_setup.xml` prompt for Claude Code autonomous agent teams by @marfinxx (X status 2081687570488954915, dated July 27, 2026). The screenshot is a **planning prompt**, not evidence that the system was implemented, deployed, audited or that the suggested five-day schedule is achievable.

## What we implemented

- `bounded-qa-plan.mjs` takes an already prepared source-only plan from `source-only-delegation.mjs` (PR #20) and a budget with *all action flags false*.
- `configureQa` limits allowed **documentary submissions** to 1–2 per task, up to eight total, and binds claims to one immutable source commit.
- `assessQaLog` checks claims for reporter identity, monotonic attempt numbers, source revision, evidence pointer format, and records a human escalation on failure/timeout/block. It forbids resubmission after a nonfailure. **It does not resubmit anything or run agents.**
- `reviewQaAssessment` checks the scope and non-authority of report outputs (limited static sanity check only).
- `bounded-qa-plan.test.mjs` contains 17 Node built-in test definitions (fail-closed cases).

A PASS claim in a log is **not** a qualified test, is not automatically verified, and cannot lift any gate. The sample plan records no actual agent work.

## Policy and operational caveat

This is **a budget for untrusted metadata**, not an enforceable runtime limit on token usage or cost. An actual agent runner requires separately qualified process isolation, termination controls, output limits, credentials, quotas, scope, and audit. Neither screenshot nor this code establishes those properties.

- E5B4D remains NO-GO under model M.
- Strict Policy B: processes terminated and termination confirmed **before 120 s**, independently capped stdout and stderr emitted/accepted lifetime budgets of **1,048,576 bytes each**.
- R6 PENDING, IVV_GLOBAL and CASE_APPROVAL NOT APPROVED.
- No real delegations, worktrees, subprocesses, Git merges, external connectors, rendering, subscriptions or publication.
- Any agent team feature, whether in Claude Code or Open Duet, requires independent compatibility, privacy, authentication and budget qualification.

## Evidence

17 direct JS pure-function checks passed within the tool isolate against this source implementation before upload. The committed 17 native Node tests are **not independently reported as executed from this exact GitHub checkout**.

After independent source review in a permitted offline metadata-only lab:
```sh
node --test experiments/agent-memory-v0.1/delegation/bounded-qa-plan.test.mjs
```

This command does not exercise the Engine runner or qualify any release gate.

## Upstream and other links

Official Claude Code documentation distinguishes lightweight subagents, independent Agent Teams, isolated worktrees, and permission modes. Model/usage costs and technical constraints must be independently confirmed. The additional @thegreatest_sv, @bober_smart, @robiartec and @silvanrec URLs supplied in this turn were **not verifiably retrieved by post ID** and are not used as requirements for this change.

Decision: retain as a pre-integration source-only validation layer and request independent review before considering an operational agent runner.
