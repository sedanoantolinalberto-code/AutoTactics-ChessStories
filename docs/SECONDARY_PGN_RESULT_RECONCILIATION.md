# ED-CASE-REAL-01 — secondary PGN result reconciliation

**Status:** source-attributed documentary correction proposal. Not a change to any approval gate.

## Original and change

The unchanged CHESS-CODEX-05B candidate declared \`historical_game_end.result = "UNKNOWN"\` because Codex 05B did not have access to full secondary PGN bytes.

An earlier assistant-side **CHESS-CODEX-05B evidence audit**, generated on 2026-10-13 and preserved as \`CHESS_STORIES_CODEX05B_EVIDENCE_AUDIT_2026-10-13_v0.1/AUDIT.md\`, states that it inspected the R2 handoff PGN archive and verified:

- The PGN tag \`[Result "0-1"]\`.
- Terminal secondary candidate movetext \`41. Kc1 Rc2# 0-1\`, at ply 82.
- SHA-256 of the secondary PGN bytes matched the previously declared \`42f2d04cc2bcd20386f40ca1c97770b2d54e8b1ad5547b5b0cb9f4756a8dc2c8\`.

**Current GitHub edit has not independently re-read or re-hashed the archival PGN bytes.** The evidence level is therefore a **reported prior assistant-side byte check**, not a newly completed recheck and not original-source historical authentication.

The source-backed v0.2 fixture now declares:
- \`historical_game_end.status = "SOURCE_DECLARED"\`
- \`historical_game_end.result = "0-1"\`
- \`historical_game_end.original_historical_authentication = "NOT_VERIFIED"\`
- \`historical_game_end.final_ply = 82\`
- \`historical_game_end.final_san = "Rc2#"\`
- Specific source-attributed changes in evidence record \`EVID-R2-PGN-DECLARATION\`, preserving its SHA declaration as \`DECLARED_NOT_CHECKED\` within this new editing context.

This change preserves the real/hypothetical state data, all 12 narrative events, exact FEN values, evidence registry IDs, claim review states, rights states, Policy B settings, and frozen gates.

## Non-assertions and blockers

- A PGN's result tag does not authenticate the original contemporary 1956 game score.
- It does not qualify move legality, chess engine superiority, a final film, a source asset license, or permission to publish.
- R6 and IVV-03/05/06/09/10/12 remain PENDING; IVV GLOBAL and ED-CASE-REAL-01 remain NOT APPROVED.
- E5B4D remains NO-GO under model M. Strict Policy B and no-run restrictions are unchanged.

Keep this correction as a separate review. Do not silently modify the primary documentary candidate branch or merge into main without authorization.
