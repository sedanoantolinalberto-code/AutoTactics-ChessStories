# CHESS-ORACLE-01 — Qualified chess-rules oracle interface (RFC v0.1)

**Status:** SPECIFICATION ONLY / NOT IMPLEMENTED / NOT EXECUTED / NO GO AUTHORIZATION.

Artifacts:
- \`contracts/CHESS-LEGALITY-ORACLE-INTERFACE-v0.1.draft.json\`
- \`contracts/CHESS-LEGALITY-ORACLE-REVIEW-VECTORS-v0.1.json\`

## Architectural placement

\`\`\`text
Untrusted original or secondary source / PGN
  ↓ provenance + raw source-byte handling (qualified separately)
Normalized *declared* game-score and editorial case
  ├── historical witness review → SOURCE VERIFIED / PENDING
  ├── literal JSON Schema + protected case policy → DOCUMENTARY STATUS
  └── chess-rules oracle → LEGAL / ILLEGAL / INCONCLUSIVE
          ↓ explicit comparison of independently derived full FEN
      semantic event reconciliation → REAL / HYPOTHETICAL / EDITORIAL
          ↓ separately qualified temporal/visual review + R6
      editorial presentation eligibility → NOT APPROVED until all gates close
\`\`\`

A legal game is NOT necessarily the historically played game. An authenticated historical game score is NOT necessarily licensed for reproduction as a facsimile. A legal but unplayed hypothetical variation may be shown only if continually identified as hypothetical. An editorial cut is not a chess move.

## Required input safety and reference model

The future caller must supply a trusted, schema-reviewed ordinary JSON document and a pinned **source FEN**, **declared SAN**, and declared full destination FEN. The rules library must calculate a *new* destination position from the source and move, then compare **all six FEN fields** against the declaration using one explicitly chosen FEN en-passant convention. Do not use the declared destination board as the oracle answer.

For multi-ply gaps, the caller must present the full independently sourced intermediate SAN list. An editorial ellipse from 18.Bxb6 to 25.Qxb6 **cannot** be certified as legal by checking just its endpoints or treating a long state jump as one move. If intermediary data or source identity is incomplete, return INCONCLUSIVE rather than guess or use an engine-generated plausible path.

Preserve a stable separate ID for the source witness and for each editorial statement. A chess rules library validates no biography, date, game provenance, historical attribution, rightsholder/license, textual claim, UI legibility or presenter intentions.

## Piece and state obligations

The oracle must handle *complete* chess move legality, not only board deltas: sliding-piece obstruction, king safety, check/pins, legal side-to-move, captures and captured pawn square for en passant, both castlings (king and rook together, attacked squares and loss of rights), promotion SAN/UCI, FEN halfmove/fullmove counters and mate outcome.

Checkmate is derived only from a verified board state after a move; never from a label such as \`#\` by itself. The move must be checked legal before reporting mate. Canonical SAN/coordinate notation is an **output** of the engine in addition to the supplied SAN; do not silently overwrite a faulty source SAN.

## EP01 obligations

- T02 real: 17...Be6 from g4 to e6, source \`V-P1\` to \`V-EV1\`. The candidate position alone does not make it historically authenticated.
- T03 real: 18.Bxb6 from c5 to b6, black queen capture.
- T06 \`ALT_QD8\`: 17...Qd8 from b6 to d8. The oracle may examine legality, but the semantic tag remains **HIPOTÉTICA / NO JUGADA** even if found legal.
- T07 \`RETURN_TO_REAL\`: restore saved real anchor \`V-P1\`. It is editorial control flow, not an SAN move.
- T10 \`ELLIPSIS\`: omitted plies 36–49 inclusive. The dossier holds endpoints, not an independently qualified original full-game replay.
- T11 real: 25...Nxd1 from c3 to d1 captures white rook. At ply 50 the **game continues**, whatever the editorial sequence ends.
- Secondary PGN declares a later final \`41...Rc2#\` at ply 82, but original 1956 witness authentication remains pending.

## EP02 portability obligations

The independent Opera Game candidate requires queenside castling \`12.O-O-O\` (two chess pieces change squares), a Black side comprising two consultation players, and a candidate terminal \`17.Rd8#\` at ply 33. Those features cannot be implemented by EP01-specific F03 gates, a single-identity player model or ordinary board-delta simulation. A legal replay does not decide which opera was performed or on which exact date.

**Do not ingest EP02 through the EP01-only v0.2 checker.** A qualified future v0.3+ case/policy adapter is a separately reviewed prerequisite. EP02 is a separate *secondary source candidate*, not a verified historical score.

## Proposed review vectors (all UNEXECUTED)

The accompanying vector file declares:
- **L01–L04:** real and hypothetical EP01 single-move references with supplied FENs and declared UCI; all require independent oracle recomputation.
- **L05–L06:** editorial \`RETURN_TO_REAL\` and \`ELLIPSIS\` that a chess move oracle must never mistake for one chess move.
- **L07–L08:** OPERA Game candidate long castling and mate, missing independently derived FENs (null, not made up).
- **N01–N08:** negative layer-confusion, illegal move, missing data and illegitimate assurance-promotion hypotheses, all marked NOT EXECUTED.

The vector labels are **test-design assertions only**. No library has been imported and no test run has passed. The source code of any future rules oracle must be separately audited; a README, package name or passing tests cannot, by itself, qualify process termination guarantees under model M.

## Fail-closed expected response model

Use distinct machine-readable fields:
- \`outcome\`: RULES_CONFIRMED / RULES_REJECTED / INCONCLUSIVE / NOT_RUN.
- \`legality_status\`: LEGAL / ILLEGAL / UNKNOWN.
- \`derived_target_fen\`: null unless independently computed.
- \`target_matches_declaration\`: null unless compared against a computed position.
- \`mate_status\`: CHECKMATE / NOT_CHECKMATE / UNKNOWN.
- \`historical_score_authenticated\`: NEVER determined by rules oracle.
- \`commercial_rights_cleared\`: NEVER determined by rules oracle.
- \`policy_b_runner_compliance\`: NEVER determined by rules oracle.

Avoid a single ambiguous \`PASS\` field.

## Runner and frozen non-goals

E5B4D is **NO-GO under failure model M**. Strict Policy B is unchanged: all relevant processes must have terminated, and their termination must have been **confirmed before 120 seconds**; stdout and stderr separately have lifetime *emitted and accepted* caps of **1,048,576 bytes** each. These properties are not assured by typical subprocess timeouts, display truncation, standard log buffers, or fixed input-size limits.

No legal-oracle code is executed, no test packages installed, no GitHub Actions enabled, no image/font/media assets acquired, no source file or case approval rewritten, and no changes made to original Windows AutoTactics or its frozen baselines.

R6 and IVV-03/05/06/09/10/12 remain PENDING; IVV GLOBAL and ED-CASE-REAL-01 remain NOT APPROVED. EP02 has no release authorization.

**Next permitted action:** independent *static* interface review, a source-lock and complete-history provenance specification; no runner execution before independently qualified authorization.


## 2026-10-14 cross-branch L06 source-availability clarification

L06 was intentionally authored against the EP01 v0.2 case fixture, where no intermediate move list is embedded. That statement remains true and the vector is not rewritten retrospectively.

A later source-only artifact in PR #12, `integration/EP01-ORACLE-SOURCE-BRIDGE.v0.1.json`, now references:
- the separate 14-ply modern-secondary T10 candidate (plies 36–49);
- the separate PR #3 82-ply modern-secondary candidate;
- this oracle interface and L06 vector.

The connected GitHub documentary comparison records 14/14 field matches for ply/move-number/side/SAN across the gap. It deliberately leaves oracle `outcome=NOT_RUN`, `legality_status=UNKNOWN`, `derived_target_fen=null` and primary 1956 comparison pending.

Therefore, future reviewers must distinguish:
1. **intermediate moves absent from the v0.2 case fixture**;
2. **a modern-secondary candidate list available as an external documentary input**; and
3. **a qualified independently sourced/legal replay**, which still does not exist.

This clarification is source architecture only and changes no execution authorization or gate.
