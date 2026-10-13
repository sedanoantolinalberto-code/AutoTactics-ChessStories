# CHESS-CODEX-06 — Semantic validator v0.2 (source draft)

**Status:** IMPLEMENTATION DRAFT / NOT EXECUTED / NOT QUALIFIED.

This document accompanies:
- [Structural schema](../contracts/scene-contract-v0.2.schema.json) (v0.2).
- [Byrne–Fischer case](../cases/ED-CASE-REAL-01.v0.2.json) (v0.2).
- [Semantic checker](../src/semantic-validator-v0.2.mjs).
- [Negative mutation catalog](../src/semantic-validator-v0.2.negative-tests.mjs).

## Scope and safe interpretation

The exported function is \`validateSemanticCase(document)\` and accepts an **ordinary, already-parsed JSON object**, whose raw bytes and structural schema validation have been independently vetted. It does NOT parse raw JSON and cannot detect duplicate raw object keys or attest source bytes. It does not invoke imports, a chess engine, subprocesses, a renderer, the filesystem or the network.

A \`semantic_consistent: true\` result means only that the *implemented subset* of semantic checks did not reject the supplied document under the limited input model. It is not a full chess game validator or a gate PASS. The output contains a non-removable assurance object indicating that historical authentication, original-byte identity, legal replay, actual asset rights, publication permission and execution safety remain unverified.

**The code in this branch has not been executed, tested, compiled or benchmarked.** Negative-test expectations are specifications, not observed results.

## Implemented code paths (not executed)

- Rejects a malformed, overly deep or overlarge JSON-like object as a defensive *parsed-input* check, using proposed limits (not runtime termination guarantees).
- Builds branch, state, event, evidence, claim and asset ID maps; rejects collisions and unresolved references.
- Checks FEN shape, square occupancy, kings, turn, counters, and ply/turn correspondence for the case's ordinary-move states.
- Checks ordinary move source and destination occupancy, declared capture, board transformation, SAN capture notation presence, turn, and move counters; special moves are rejected until a qualified rule library is integrated.
- Checks active-context narrative transitions, branch ownership, shared anchor, explicit hypothetical return, visited rewind target and inclusive skipped ply range.
- Separates editorial closure from source-declared historical termination.
- Checks timing format, safe-integer addition and non-overlap of measured events; unspecified timing remains incomplete.
- Requires referential rights/provenance declarations without asserting that they establish clearance. Rejects unsupported self-promotions that lack even declared evidence.
- Defensively rejects a visible textual F03 cue concerning an unjustified uniquely-best claim for \`24...Ra4\`. This is a limited textual veto, **not** general natural-language claim adjudication.
- Enforces the immutable known pilot gate values for \`ED-CASE-REAL-01\` and the strict unapproved execution-policy declaration.

## Important limits / known backlog

1. **No JSON Schema engine:** This module deliberately does not substitute for Draft 2020-12 validation. An independently qualified upstream schema validator must validate structure before calling it. Raw duplicate-key detection is also a separate pre-parse responsibility.
2. **No fully qualified legal chess replay:** General move legality, check, pins, path clearance, attack semantics, castling, en passant, promotions, forced wins and engine-evaluation claims remain unverified. Only ordinary-piece board edits are checked. Full candidate game replay must be qualified separately.
3. **No primary historical authentication:** R2 secondary data and declared hash strings are not original historical witnesses. The v0.2 fixture's \`historical_game_end.result\` intentionally remains \`UNKNOWN\`; a distinct secondary PGN declaration may support a later explicit, evidence-scoped reconciliation to \`0-1\`.
4. **No rights grant:** The schema's \`CLEARANCE_REPORTED_NOT_ESTABLISHED_BY_SCHEMA\` remains a declaration. Even a nonempty supporting-ref list does not prove the reference is competent.
5. **Generic reusability is limited by the v0.2 schema:** Its \`frozen_gates\` and F03 objects are pilot-specific. The validator is generic in transition and move inspection but deliberately preserves known pilot requirements. Schema extraction into a generic base + case-policy overlay is future work.
6. **Input bounds are not an execution sandbox:** Limits on JSON nodes, strings and diagnostics cannot guarantee process termination, stack/memory safety or independently bounded stdout and stderr generated/accepted bytes.
7. **Inconsistent timestamps or ambiguous editorial overlays:** No multi-track narration/subtitle/music synchronization, duration overlap permitting or full mobile readability proof is implemented.
8. **No immutable file integrity check:** Git branch permissions, protected hashes and external baseline guards must be independently established and audited.
9. **No broad linguistic guarantee:** Claims and disclosures can carry inaccurate plain-language semantics not captured by the limited F03 safeguard. Editorial and historical review remain necessary.
10. **No permission inference:** The checker preserves explicit documentary statuses and does not implement gate approvals.

## Preflight required before any test execution

Execution remains **NOT AUTHORIZED**. Under strict Policy B and E5B4D model M, all relevant processes must have ended and their termination must be confirmed **before 120 seconds**. Stdout and stderr each have independent **1,048,576-byte lifetime emitted/accepted ceilings**. Merely setting a timeout, truncating logs, or running in a named container/sandbox does not prove compliance. An independently qualified runner and an explicit execution authorization must precede any harness invocation.

Until then:
- The negative-test module is **source only**; do not import/invoke it in automation.
- Do not create GitHub Actions workflows or enable run-on-push checks.
- Do not merge either documentary draft PR into \`main\`.
- Do not modify AutoTactics Windows, Motion, football P1 or frozen baselines.
- No EP01 publication or commercial usage permission is implied.

## Known gate snapshot (unchanged)

| Scope | Status |
|---|---|
| IVV-01/02/04/07/08/11 | PASS LIMITED |
| IVV-03/05/06/09/10/12 | PENDING |
| R6 | PENDING |
| IVV_GLOBAL | NOT APPROVED |
| ED-CASE-REAL-01 | NOT APPROVED |
| Motion Gate 2 | NOT PASSED |
| Gate 3 / SI-G0 | NOT RUN |
| E5B4D | NO-GO under failure model M |
| Football P1 | NO-GO |

**Next permitted documentary action:** independent static code review of the semantic checker and its mutation catalog, including confirmed code-path traces and source-data/oracle dependency analysis. No test-pass or integration claim is allowed without real evidence.


## Static follow-up (2026-10-13; not executed)

The current draft adds fail-closed **necessary** FEN metadata checks to ordinary moves:

- \`FEN_CASTLING_RIGHT_GAIN\` if an after-state declares castling rights absent in the before-state. A transition cannot recover a right once lost, but removing rights and general castling legality remain outside this lightweight checker.
- \`FEN_EP_TARGET_UNJUSTIFIED\` if an after-state declares an en-passant square without a same-file double pawn move with the correct ranks. The checker accepts \`-\` when a serializer uses a legal-capture-only EP convention; it does not qualify the full set of double-pawn path legality rules.
- Three draft negative mutations cover these metadata constraints, bringing the negative mutation catalog to **53 proposed scenarios; 0 executed**.

This is an intentionally narrow improvement to FEN bookkeeping, **not** qualified chess-rule replay. The existing original-history and commercial-rights blockers are unchanged.


## CHESS-CODEX-08 audit supersession (2026-10-13, no execution)

The earlier counts of 50 and 53 in this historical review are previous source-draft checkpoints, **not current test results**. Current catalog: **66 negative mutation specifications, 0 executed**.

The checker is now explicitly **EP01-only** for v0.2 by \`V02_CASE_POLICY_SCOPE_UNSUPPORTED\`. It also asserts frozen gates irrespective of \`case_id\`, so relabeling a case cannot evade those documentary guards. Any reuse outside EP01 must be a new, independently qualified contract and policy loader, not a silent v0.2 retag.

Additional necessary (not sufficient) position checks reject zero-displacement ordinary moves, FEN pawns on ranks 1/8, more than 16 pieces per side and contradictory declared digests for the same exact source-object/byte-scope identity.

See \`docs/CHESS-CODEX-08-STATIC-AUDIT.md\` for the exact scope of the static string/reference audit and its unsupported execution claims. No tests or Policy B runs were performed.
