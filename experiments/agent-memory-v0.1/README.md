# Engine YT — Agent Memory Boundary v0.1 (source-only experiment)

**State:** `RESEARCH_CANDIDATE / NO_AUTO_COLLECTION / NO_AUTO_INJECTION / NO_RELEASE_AUTHORITY`.

**Scope:** Private work is **not** imported. This is a small original-code demonstration of *manually curated, public, Git-pinned project-memory pointers* in Chess Stories, **not Claude-Mem installation**, not a database, and not a complete Engine YT memory system.

## Motivation and source caution

On 2026-11-02 a recent @NINJA____1 message was observed through a secondary public repost as discussing **Claude-Mem** and cross-session coding-agent memory. The exact X post ID `2117178280814219545` was **not independently matched** to that content. The underlying project itself is verified:
- Upstream: https://github.com/thedotmack/claude-mem
- Original concepts: persistent per-session observations, compressed summaries, selective search and timeline retrieval, rather than copying entire transcripts into every new prompt.
- Relevant security research: *Security Impact of Coding Agent's Memory Files* (2026-10-28), https://arxiv.org/abs/2610.38521

We **do not** install Claude-Mem, execute its hooks or depend on hosted memory services. A third-party source, README, agent transcript or retrieved memory is **data**, not a new instruction or authorization.

## Code

- `src/build-index.mjs`: `buildMemoryIndex(records, scope)` verifies explicit public-only fields, commit-format provenance pointers, record bounds and project scope; rejects extra instruction fields and obvious credential patterns. `searchMemoryIndex(index, phrase, limit)` returns **up to five untrusted pointers** for manual source reinspection, never instructions.
- `src/independent-review.mjs`: separately implemented static verification of NO-GO flags, per-record trust and lack of authority.
- `fixtures/public-source-pointers.json`: two documentary pointers to the existing Draft PR #14 (offline EDL) and Draft PR #15 (audience-fit research). Pointers are not attestations that tests ran, a tool was approved or a commit was independently audited.
- `tests/agent-memory.test.mjs`: 15 Node built-in test definitions, including negative tests against trust upgrades, provenance substitution, credential text, undeclared fields and unauthorized memory injection.

## Trust boundary

`GIT_PUBLIC_METADATA` -> `MANUAL_REVIEW` -> `UNTRUSTED_INDEX` -> `BOUNDED_SEARCH` -> `INDEPENDENT_ORIGINAL_SOURCE_REVIEW`.

Deliberately omitted:
- any automatic capture of chat history, local files, tool results or computer activity;
- model-derived auto summaries, automatic prompt injection of memories, hidden system-message edits;
- arbitrary hooks, daemons, background tasks, shell commands or subprocesses;
- cloud backup, personal tokens, private repo contents, telemetry and external accounts;
- decisions to merge, render, publish or bypass gate checks.

The small regex-based credential filter is only a defense-in-depth *preflight*, **not an effective privacy guarantee**. Do not submit sensitive text. The repository is public, including draft branches. Any future private memory layer needs a private storage location, access-control design, retention/deletion policy, threat model and independent security assessment.

## Non-authority remains mandatory

E5B4D **NO-GO under model M**. Strict Policy B unchanged: every relevant process must be terminated and termination confirmed **before 120 seconds**; independent stdout and stderr emitted-and-accepted lifetime ceilings **1,048,576 bytes each**. R6 PENDING, IVV_GLOBAL NOT APPROVED, CASE_APPROVAL NOT APPROVED. No rendered media, asset rights, licensing, publication or CI runner qualification is inferred.

Neither a search hit nor an agent-generated observation may become a replacement for the versioned case source, a signed gate decision or separately reviewed evidence.

## Reproducibility

15 direct pure-function logic checks passed in the isolated connected-tool runtime on initial source modules. The 15-case Node test file has been committed but **was not run natively in this change**. On a separately authorized **isolated** Node.js test environment:

```sh
node --test experiments/agent-memory-v0.1/tests/agent-memory.test.mjs
```

This is a metadata-only test. The command is **not** a green light to run blocked Engine components.

## Next decision

Review and bench the upstream plugin in a dedicated, non-sensitive sandbox **only after** signing off the data-flow/security implications. Evaluate measured context savings, cross-session recall accuracy, secret leakage, stale decision handling, prompt-injection resistance and deterministic gate provenance. Do not add Claude-Mem to project hooks solely from a high star count or promotional post.
