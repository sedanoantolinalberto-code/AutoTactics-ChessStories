# CHESS STORIES — EP02 historical source candidate: The Opera Game (1858)

**Status:** SECONDARY_SCORE_CANDIDATE / PRIMARY_DATE_AND_PERFORMANCE_UNRESOLVED / NO QUALIFIED RULE REPLAY / NOT APPROVED.

**Purpose:** exercise future game-agnostic Chess Stories storytelling requirements without inserting EP01-specific Fischer policy/F03 into all chess episodes.

## Source and identity

The candidate is Paul Morphy (White) against **two consulting Black players**, Duke Karl of Brunswick and Count Isouard, in Paris, 1858. The pair are not a single historical player identity; the v0.2 \`players.black\` field is therefore too rigid for future consultation games and needs an explicitly typed *participant group* in the generic contract.

Secondary historical score and detailed source criticism: Edward Winter, [Morphy v the Duke and Count](https://www.chesshistory.com/winter/extra/morphy.html).

External modern study corroboration: [Lichess, Morphy's Opera Game](https://lichess.org/study/aVdQHxwx).

Modern PGN sites sometimes specify **1858-11-02**, but Edward Winter's review of Max Lange, Frederick Edge, contemporary Parisian opera listings and scholarship by Fabrizio Zavatarelli identifies contradictory source claims. The opera work could be *Norma* or *The Barber of Seville* among hypotheses; exact date and work are **not established**. A dramatic claim that the event unquestionably occurred during any named opera is inadmissible without further historical evidence.

## The 33-ply score (secondary candidate only)

\`\`\`
1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5
6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5
10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8
13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7
16. Qb8+ Nxb8 17. Rd8# 1-0
\`\`\`

The move list is transcribed as a **secondary source declaration** in \`candidates/ED-CASE-REAL-02.opera-source-candidate.json\`. No chess library has replayed it within this work, no FEN checkpoints have been generated, and no contemporary 1858 score sheets have been authenticated.

## High-value editorial mechanics (untested)

**11...Nbd7 / 12.O-O-O:** show where the rook moves with long castling. The current v0.2 checker rejects special moves as unqualified and cannot validate this game; later legal-oracle support must explicitly handle long castling.

**13.Rxd7 Rxd7:** rook capture and recapture require a two-move visual sequence that respects the position after each move. It is not a static queen-sacrifice story.

**16.Qb8+ Nxb8 / 17.Rd8#:** queen offer, knight's capture and a rook checkmate. A closing shot could show the actual source-declared mate instead of EP01's editorial-only ending; this is a legitimate product-shape difference requiring the model to represent distinct ending statuses.

**Black consultation side:** the on-screen entity is a group of two historical people, not a person named "Duke Karl / Count Isouard." Avoid inventing whose hand made a specific move.

## Case-independent engine lessons

1. Chess Stories needs a participant/side model that allows \`INDIVIDUAL\` and \`CONSULTATION_TEAM\` without conflating multiple people.
2. Castling is necessary for many classic games. A generic validator that only compares one moving piece cannot validate \`O-O-O\`.
3. A single well-documented factual source result \`17.Rd8#\` can coincide with editorial ending. Do not force every future story to end before mate just because EP01 does.
4. Historical metadata needs \`year\`, optional date confidence, uncertain event/venue identity, separately corroborated facts and controversies.
5. The legal-move backend must be independently qualified, not justified by secondary score popularity.
6. Historical images/1840s opera production posters, archival portraits, music and source-book scans are separate rights assets; no license is inferred.

## Next work permitted without a qualified runner

- Draft the participant-group extension for v0.3 as optional, backward compatible with two individual players.
- Draft source provenance and date precision as independent records; avoid deterministic wrong date in episode title or script.
- Map desired narrative moves and candidate disclosure requirements without generating hypothetical moves or FENs.
- Keep legal oracle, human tests, voice/music production and licensing in PENDING.

## Frozen policy boundary

EP01-specific F03 and IVV/R6 statuses continue unchanged in their own policy snapshot. EP02 **does not acquire or override** any of those statuses merely by existing as a source candidate. E5B4D remains NO-GO under model M with strict Policy B. No source code was executed or rendered; no media permission granted.
