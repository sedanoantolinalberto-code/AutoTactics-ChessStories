# Open Duet upstream review — Engine YT hardening gaps (2026-11-03)

**Status:** documentary comparison; **NOT** an integration, executable adapter, safety certificate, or release authorization.

## Provenance

Upstream: [Anil-matcha/open-duet](https://github.com/Anil-matcha/open-duet), public `main` observed at commit `ee084c6069f4a171724315bc8ff605abdc3c336e`. Source documentation reviewed: `README.md`, `docs/TEAMS.md`, `docs/ROUTINES.md`, `docs/MEMORY.md`, `docs/COMPUTERS.md`, `docs/CONNECTED_APPS.md`, `LICENSE`. These are **upstream documentation claims**, not independently reproduced behavior or code-line audit.

Engine target: draft PR #20 (source-only delegation receipts and Markdown index, stacked on PR #16), not production `main`.

## Source-documented mechanisms with potential value

| Upstream documented concept | Possible Engine YT requirement | Current limitation |
|---|---|---|
| Lead delegates to 1–4 workers and receives persisted receipts | Bound the fanout, ledger each task and source revision; make receipts **untrusted data** | PR #20 validates documentary requests/receipts but **dispatches no actual agent** |
| Lead resumes after all awaited replies, or a worker requests human input | Model explicit `AWAITING_INPUT` / `COLLECTED_UNVERIFIED` / `BLOCKED` terminal conditions | No runtime state machine, cancellation implementation or persistence-restore tests |
| After a crash, a never-started job may be retried once, an already-started job becomes failed | Use idempotency keys and verified start/side-effect markers to prevent replay | Pure records cannot establish real side-effect absence |
| Room membership updates reject stale roster saves and skip removed members | Optimistic concurrency/version binding for assignments and independent reviewers | PR #20 uses name separation, not identity attestation, durable queues or concurrency locking |
| Memory note save checks prior content hash and journal is stored outside editable agent workspace | Compare-and-swap memory revisions and append-only audit / non-authority provenance | Markdown index is static public navigation; no secure atomic memory store exists |
| Docker agent computer disables host tools and has no host fallback; network none by default | Fail closed when isolation is unavailable; bind mount and permissions must be audited | **No real Docker/process/tool isolation currently qualified for this new integration** |
| Routine approval mode cannot be looser than owning agent's mode; scheduled retries can be configured | Never silently elevate capability; require human review, bounded retries and no side effects | Our QA budget is **documentary only**, not runtime enforcement |
| GitHub/Gmail/calendar access uses an external Composio account/key, and actions may incur costs | Separate service-account policy, scopes, secret hygiene, explicit approvals and budget control | No external app or cloud connection authorized |

## Differential acceptance matrix — NOT RUN

1. **Source identity:** resolve actual immutable Git commit, repository and task files; reject mutable `main` as evidence pin.
2. **Cross-agent independence:** maker and reviewer must use independently attributable identities; a named `reviewer` field alone is insufficient.
3. **Failure races:** cancel while dispatch is queued, while provider is starting, while tool is executing, and after response settlement; no late mutation may land.
4. **Crash recovery:** after restart, distinguish *not launched* from *already launched*; prevent duplicate external side effects and replay of stale approvals.
5. **Roster consistency:** mutate membership between queue claim and result arrival; verify revocation prevents action and late report authority.
6. **Memory conflict:** concurrent writes with different prior hashes must produce an explicit conflict; retrieved notes remain untrusted data.
7. **Isolation failure:** invalid or missing Docker image / disabled daemon / absent sandbox must yield a **blocked** result, never a host fallback.
8. **Permission floor:** tools, MCP connections, API spend, Git write/merge, external accounts and render/publish stay denied unless separately approved; an agent's own declaration cannot approve.
9. **Policy B / model M:** every relevant process is terminated and termination confirmed **before 120 seconds**, with independent emitted-*and*-accepted lifetime stdout and stderr caps of **1,048,576 bytes each**; upstream routine limits (1–240 minutes) do **not** prove this.
10. **Adversarial inputs:** forged receipts, memory prompt injection, stale source hash, fabricated PASS, malicious user-provided instructions, token/secret leaks, and retry-loop exhaustion must fail closed.
11. **Cost and quality:** compare a no-team baseline, Claude Code native subagents/Agent Teams and Open Duet on matched tasks with blinded outcome review, token/cost accounting, defect rate and time-to-verdict.
12. **Windows qualification:** validate Windows/Docker/WSL host interactions only in an authorized isolated lab; upstream macOS-focused tests are not Windows acceptance evidence.

## Decision

**`RESEARCH_RETAIN / NO_INSTALL / NO_RUNTIME_INTEGRATION`.** Open Duet adds useful **engineering reference patterns** beyond our PR #20, but a live adoption currently duplicates source-only work while expanding the trust, process, memory and external-service attack surface.

Next action: independently reproduce the **exact GitHub-committed** PR #20 Node tests and inspect the code; then stage a separately scoped, no-credential and no-network benchmark only after formal authorization. Do not merge, render, publish or enable agent computers from this research note.

## Frozen gates

E5B4D **NO-GO** (model M); R6 **PENDING**; IVV_GLOBAL and CASE_APPROVAL **NOT APPROVED**; Strict Policy B as above; no production execution, automatic agent launch, code merging, API spend, rendering or publication permitted.
