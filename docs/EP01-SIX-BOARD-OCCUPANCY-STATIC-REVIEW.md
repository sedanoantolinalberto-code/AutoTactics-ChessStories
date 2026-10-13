# EP01 — Six-state square inventory and declared-move occupancy crosswalk (SOURCE ONLY)

**Recorded:** 2026-10-14. **Input:** `cases/ED-CASE-REAL-01.v0.2.json` from PR #1, observed Git blob `3514f19ac355763a5b4c61d5c573df090b0eccc1`. **Output:** `design/EP01-FEN-PIECE-PLACEMENTS.v0.1.json`.

## Purpose and limits

This dossier expands the **already-declared textual FEN placement fields** into explicit square/piece/color records for proposed future clean-room geometry. It is **not** an external chess-rules or historical-source verification. The decoded positions and the moves below come from the **same source fixture**; agreement is source-internal, not independent corroboration. JSON/source-field comparisons in the connected GitHub inspection are not tests of the AutoTactics project. No chess library, project code, engine, test runner, render or Action was invoked.

## Six declared states

| State | Ply | Declared branch | Pieces from FEN occupancy | Intended source display |
|---|---:|---|---:|---|
| V-P1 | 33 | MAIN | 25 | Initial real anchor, also exact return target |
| V-EV1 | 34 | MAIN | 25 | After declared real 17...Be6 |
| V-REAL | 35 | MAIN | 24 | After declared real 18.Bxb6 queen capture |
| V-HYP | 34 | ALT_QD8 | 25 | **Unplayed** hypothetical 17...Qd8 only |
| V-PRE-EV2 | 49 | MAIN | 20 | Technical landing after real plies 36–49 omission |
| V-EV2 | 50 | MAIN | 19 | After declared real 25...Nxd1 rook capture; game continues |

**Source-internal occupancy spot check:** all six FEN rank strings expanded into an 8×8 square map in this documentation process. Each declared position contains one white and one black king *as text occupancy*. This is neither a proof of king safety nor legal chess.

## Six declared single-move field checks

| Event | Piece from | Piece to | FEN occupancy difference | Assessment scope |
|---|---|---|---|---|
| T02 | black bishop g4 | e6 | g4→empty, e6→black bishop | Declared text occupancy matches |
| T03 | white bishop c5 | b6 | c5→empty, b6 black queen→white bishop | Declared capture metadata matches |
| T06 | black queen b6 | d8 | b6→empty, d8→black queen | Declared hypothetical occupancy matches; **not historical** |
| T08 | black bishop g4 | e6 | Same candidate before/after as T02 | Replayed real editorial event, not new historical move |
| T09 | white bishop c5 | b6 | Same candidate before/after as T03 | Replayed real editorial event, not new historical move |
| T11 | black knight c3 | d1 | c3→empty, d1 white rook→black knight | Declared capture metadata matches |

These six source-field comparisons found **no mismatch within the declared FEN and move squares**, but did **not** check legal moves, paths, FEN halfmove clocks, SAN syntax, check, castling, hidden historical moves, or actual 1956 evidence. The unplayed 17...Qd8 stays visibly hypothetical even if independently found legal in a future oracle.

## Non-move event implementation risk

- **T04** is rewind. Show a truthful rewind/clock-context transition from V-REAL to V-P1, not an inverse chess move counted as played.
- **T05** enters ALT_QD8 with board still V-P1; switch truth warning before changing pieces.
- **T07** restores exact V-P1 **and** MAIN before releasing the hypothetical warning. A matching square map alone is insufficient: branch truth is independent context.
- **T10** spans real plies **36–49 inclusive**. Never synthesize one piece-tween from V-REAL to V-PRE-EV2. If V-PRE-EV2 is shown, treat it as a new landing board under an explicit omission label before T11; not as the result of a single animated chess move.
- **T12** is an editorial cut after ply 50; never depict checkmate at this cut or invent the later terminal board.

## Asset gate and integration

The square inventory points to six **candidate procedural** piece primitives in `design/EP01-CLEANROOM-VECTOR-GEOMETRY.v0.1.json`. It is not a completed SVG/image/font or a granted commercial license. A future qualified renderer must bind exact asset bytes/fonts and source digests, verify colors and readability on actual devices, and preserve required event truth labels frame-by-frame. An independent oracle and original historical witnesses remain separate requirements.

**Frozen:** E5B4D NO-GO under failure model M. Strict Policy B unchanged (all relevant processes terminated with confirmation **before 120 s**, with independent stdout and stderr 1,048,576-byte lifetime **emitted and accepted** limits each). R6 PENDING, IVV_GLOBAL NOT APPROVED, ED-CASE-REAL-01 NOT APPROVED, publication false. No run/test/render/build/Actions/merge.
