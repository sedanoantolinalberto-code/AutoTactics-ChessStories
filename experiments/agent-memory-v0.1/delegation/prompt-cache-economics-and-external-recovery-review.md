# Prompt-cache economics and external rollback — source-only review (2026-11-03)

**Disposition:** `RESEARCH_ONLY / NO_API_CALLS / NO_BACKUP_TOOL_INSTALL / NO_MODEL_LAUNCH / NO_GATES_CHANGED`.

## Grounded source references

- [Anthropic prompt caching (official)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching): reading a genuinely cached prefix on Claude Opus 5.5 is billed at **0.05× base input token price**, currently **$0.20/M tokens** (base **$4/M input tokens**). This is **not** a 95% discount on total agent cost, output, tool usage or every call. Five-minute cache writes cost 1.25× base input; one-hour writes 2× base input. Rates and eligibility must be verified for the precise model and billable account.
- The default 5-minute TTL begins at the **start of the request** that writes/reads cache and is refreshed on valid reuse. A multi-minute streamed response consumes part of the next request's time budget. An optional one-hour TTL costs more to create. There is a minimum cacheable prefix size which varies by model; short prefixes fail silently and produce no cache hit.
- Cache eligibility requires exact matching of the cached prefix, including tool/system/message layout; separate agents/workspaces do not automatically share a cache. An identical configured prefix may be reusable **where supported**, but it must be established by actual usage receipts.
- Inspect actual response `cache_read_input_tokens`, `cache_creation_input_tokens`, `input_tokens`, `output_tokens` and detailed per-TTL creation buckets. Never assume a cache hit from a fast response or a social media assertion.
- [Claude Code checkpoints (official)](https://code.claude.com/docs/en/checkpointing): `/rewind` tracks certain file edits with documented limitations involving Bash-only files, background subagent edits, concurrent external changes, symlinks and hard links. It **is not** a general cloud/database rollback system.
- [@getBackstep X screenshot](https://x.com/getbackstep/status/2117462419819880474): vendor claims one-command undo including deleted Supabase tables. Website `getbackstep.com` could not be independently inspected; **no specific restore mechanism, source repository, database write-ahead protection, point-in-time backup, remote credential scope, atomicity or rollback guarantee has been validated**.

## Candidate cost benchmark (NOT EXECUTED)

Use *only* matched metadata-only test workloads in an authorized lab. Compare the same task with:
1. no prompt caching;
2. one static source bundle/prefix plus changing tail data, at a five-minute TTL;
3. same bundle with a one-hour TTL across deliberate longer gaps;
4. sequential versus parallel invocations, with explicit measurement of actual cache hits.

Collect **grounded** telemetry for each run: model ID, workspace/account pricing tier, input + output + cached tokens, cache-read vs cache-write billed cost, static prefix digest, prefix length, first request start, subsequent request start, error codes, tool counts, latency, review quality and independent test results. Exclude secrets and user data from public logs.

**Important:** A 0.05× cached read is a per-token *input charge*, not evidence that serializing every subagent is optimal. Parallelism may improve wall-clock latency while identical prefixes can sometimes reuse cache depending on provider rules; model scheduling must be benchmarked rather than inferred. Every additional write, output and advisory-model call affects total cost.

## Recovery and compensation acceptance matrix (NOT EXECUTED)

| Change class | Candidate control | Required proof |
|---|---|---|
| Git files changed | immutable commit, isolated branch/worktree, documented diff | clean checkout can reconstruct exact bytes; unrelated paths unchanged |
| Uncommitted local edits | copy-on-write snapshots and explicit restore preview | actual bytes, permissions and symlink behavior checked |
| Claude Code history | built-in `/rewind` scoped to tracked file edits | test documented exclusions; never assume subagent or shell-only changes recovered |
| Cloud object writes | versioned object storage + independent rollback capability | object version and deletion semantics demonstrated |
| Supabase/PostgreSQL `DROP TABLE` | preexisting tested backup/PITR or transaction-safe migration and recovery plan | isolated database restore of schema, indexes, policies, relationships, roles and rows with completeness checks; **not** a screenshot claim |
| Already-sent email, payment, publish, live external side effect | prohibit automatically; separately designed compensating transaction if logically possible | explicit responsible owner and real independent transaction evidence; often irreversible |
| Crash during rollback | write-ahead intent/transaction record, idempotency keys and restart recovery tests | no silent partial restoration or unsafe repeated mutation |

Do not install or empower Backstep, other shell-hook rollback tools, or external database connections from this note. A backup mechanism that runs within the same trust boundary as a potentially faulty agent is insufficient by itself.

## Admission gates for a real runner

- Independent maker/checker, source SHA, narrow read-only test environment and **no default external mutation**.
- Explicit allowlist, scope of tools, audit of third-party dependencies and secrets; no credentials in prompts or logs.
- No blind auto-resume, retries, destructive migration, automatic cloud recovery or code merge.
- An independent authority verifies the case, actual processes and output, not merely a model's `SUCCESS` verdict.
- Strict Policy B: each relevant process **terminated and termination confirmed before 120s**, independent stdout and stderr lifetime *emitted-and-accepted* caps of **1,048,576 bytes EACH**.
- E5B4D `NO-GO` under model M; R6 `PENDING`; IVV_GLOBAL and CASE_APPROVAL `NOT APPROVED`; no render, publication, release, main merge or runtime integration.

## Decision

`RETAIN_COST_AND_RECOVERY_BENCHMARK_DESIGN`; **no installed dependency, real cache test, restore test, process invocation or production release**.
