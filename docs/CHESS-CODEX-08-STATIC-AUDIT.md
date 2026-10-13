# CHESS-CODEX-08 — Independent static crosswalk: v0.2 checker ↔ EP01 fixture ↔ negative mutations

**Status:** STATIC_SOURCE_REVIEW_COMPLETE_WITH_LIMITATIONS / NO EXECUTED TESTS / NO POLICY B QUALIFICATION / NO APPROVAL.

**Scope:** GitHub draft branch \`chess-stories/semantic-validator-v0.2-draft\`, based on the original \`chess-stories/semantic-contract-v0.2\` documentary case. All edits are source-only and staged in draft PR #2, not \`main\`.

## Confirmed source-level changes this round

1. **Zero-displacement necessary invariant:** \`MOVE_NOOP_SQUARE\` rejects ordinary moves from a square to itself rather than accepting a possible board-no-op transition.
2. **FEN physical bounds:** the lightweight parser now rejects an unmoved pawn on rank 1/8 or more than 16 pieces of one color, while preserving its existing exactly-one-king-per-side checks. This is not legal-position verification; e.g., an actual king in check or wrong piece path remains outside the scope.
3. **Frozen v0.2 scope:** \`V02_CASE_POLICY_SCOPE_UNSUPPORTED\` rejects non-EP01 case IDs. The source originally used a conditional \`if (case_id === ED-CASE-REAL-01)\` around the immutable gate assertions; that allowed callers who bypassed the upstream schema to avoid this *semantic* guard by relabeling the case. Now the gate assertions apply even if case ID is changed. EP02 must not use this v0.2 checker; v0.3 has a separate unapproved policy architecture.
4. **Source byte-declaration collisions:** \`SOURCE_BYTE_DIGEST_CONFLICT\` rejects contradictory SHA-256 digest strings bound to the same \`(source_id, object_identity, byte_scope)\` tuple. This is a check of conflicting **claims**, not an independently measured digest or proof of source authenticity.
5. **Regression specifications:** 7 new negative mutation descriptions exercise the changed rules, bringing the catalog from 59 to **66**.

## Static coverage and consistency audit

A source-text comparison of the v0.2 checker, its negative mutation catalog and the original fixture identified:

| Measure | Static observation |
|---|---:|
| Proposed negative mutation names | 66 |
| Unique mutation names | 66 |
| Expected rejection codes visibly defined as \`fail("...")\` in checker source | 65/65 |
| Unknown literal IDs used by mutation helper calls (\`event\`, \`state\`, \`claim\`, \`evidence\`, \`asset\`) | 0 |
| Fixture's R6 and E5B4D declarations unchanged | Yes |
| Executed negative mutations | **0** |
| Qualified legal chess replays | **0** |
| Runtime, memory or process termination measurements | **0** |

**Interpretation:** the 66 expected codes are lexically present. This does NOT prove each mutation reaches the expected condition, that the parser can successfully load the source, that baseline evaluates to \`semantic_consistent=true\`, that the checker cannot throw on other malformed inputs, or that its semantic rules are sound/complete. No claims of test PASS are permitted.

## Architectural decision

The earlier v0.2 file was described as a reusable/general checker, but the frozen case policy and F03 were EP01-specific. To avoid the false implication that unrelated games inherit or can bypass Byrne–Fischer's immutables, the checker is now explicitly **EP01-only under v0.2**. Its chess move and transition subroutines remain reusable in principle, but should only be ported after a separately reviewed policy-binding adapter is available under v0.3 or later.

The v0.3 generic document remains a separate architecture candidate (draft PR #5) with \`DECLARED_NOT_VERIFIED\` policy binding; this audit does not validate v0.3.

## Remaining safety, correctness and evidence gaps

- **Runner qualification remains blocked:** Under strict Policy B, every relevant process must terminate *and its termination must be confirmed before 120 seconds*, with independent stdout/stderr lifetime emitted/accepted limits of **1,048,576 bytes each**. E5B4D remains **NO-GO under failure model M**. No execution was authorized or performed.
- **No upstream raw JSON/data-source proof:** v0.2 checker expects already-parsed ordinary JSON. Duplicate raw keys, bytes and qualified Draft 2020-12 validation require independent steps.
- **No complete legal move proof:** check/path geometry, illegal checks, pins, rook/bishop jump paths, castling, en passant, promotion, repetition and outcomes require a qualified chess oracle.
- **No original 1956 historical score authentication:** the contemporary periodical has been located but its original full game score has not been independently transcribed and compared here.
- **No human IVV or R6 proof:** readability, comprehension, asset origin/fonts/voice/music/photos and commercial rights remain unapproved.
- **No gate aggregation:** six previous IVV controls are PASS LIMITED, six PENDING, IVV GLOBAL and pilot NOT APPROVED, R6 PENDING; E5B4D NO-GO under M.

## Next eligible documentary work

Document input trust boundaries and fail-closed API profiles; specify how a qualified legal oracle would integrate with the generic semantic contract without overwriting the actual history witness; separately review v0.3 case-policy binding. No test execution or merge is approved.

**No user intervention is needed to retain the code and review documents in GitHub.**


### Static follow-up: strict Policy B termination literal

A follow-up source audit found that the v0.2 JSON Schema already pins `termination_requirement` to `ALL_RELEVANT_PROCESSES_TERMINATED_AND_TERMINATION_CONFIRMED_BEFORE_DEADLINE`, but the semantic checker's own defense-in-depth execution-policy comparison did not repeat that literal. The checker source now mirrors the schema requirement and the negative catalog adds one unexecuted timeout-only weakening mutation. This does not qualify an executor or change E5B4D.
