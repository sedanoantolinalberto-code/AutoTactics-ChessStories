# EP01 — cinematic storyboard: twelve events, unchanged semantic truth
**Stage:** design candidate only; storyboards are descriptions, NOT rendered or tested shots. Timing per event: UNSPECIFIED/UNMEASURED. The camera/layer grammar is an editorial proposal subject to exact board legibility and R6 review.

## Common layers (future, proposed)

- **Layer 0:** exact *declared* position rendered only from the appropriate VISUAL state, project-owned board geometry proposed but neither produced nor cleared. Square identity is invariant and must be recoverable even if an exterior camera/backdrop moves.
- **Layer 1:** move/capture focus; uses a **single** declared move's from/to/captured-square information, never chess-engine interpolation or invented intervening moves. No invented piece movement on branch changes.
- **Layer 2:** persistent truth band with the **exact** overlay display_label for the event. The truth band must be legible in silent playback, not conveyed by color, voice, light, sound or motion alone.
- **Layer 3:** optional editorial short copy clearly subordinate to layer 2. Caption copy is not a substitute for the required truth label.
- **Layer 4:** abstract, non-archival cinematic depth/background; must never imply unseen historical photos, true clock time, faces, venue layout, or dated footage.
- **Internal controller:** state, branch and label are **separate** editorial concepts; no visual layer should infer factuality from FEN alone.
- **Graphic lens:** apparent dolly/zoom/lights are only 2.5D compositing proposals. Piece occupancy and board coordinates remain stable. No hidden piece or false square from dramatic perspective.

## Event-to-shot specification

**Provenance of labels:** This table reproduces the verbatim `display_label` of the pinned OVER1 overlay. It does **not** reproduce or replace `disclosure` from CASE `timeline[n]`: the two fields are distinct source attributes, even when their literal wording coincides. CASE disclosure remains untouched and must be resolved using the same Txx event ID; secondary copy is a third, noncanonical editorial layer.

| ID | Contract: branch/state | OVER1 display_label obligatorio (NO es CASE disclosure) | Future scene direction (candidate) | Editorial invariant / confusion to prevent |
|---|---|---|---|---|
| **T01 SET_POSITION** | ∅ → MAIN; ∅ → V-P1 (ply 33, after 17.Kf1) | **PARTIDA REAL** | Begin with the exact V-P1 board already fully visible: all 64 squares and the required factuality band remain legible from the **first visible frame**. Any close camera effect may change only apparent scale, depth or exterior margins; it must not crop the board or the truth band. No real camera or archival footage is implied. A small caption identifies 'posición tras 17.Kf1'. Board is already exactly V-P1 when visible. | Position placement is editorial; do not animate 17.Kf1 as a newly displayed move. Attribution remains secondary pending original authentication. |
| **T02 REAL_MOVE** | MAIN, V-P1 → V-EV1 | **PARTIDA REAL** | Keep stable board; focus square g4, show black bishop g4→e6 **17...Be6** as one declared move. Hold e6 location with simple tracking highlight. | Do not assert motive, evaluation, sacrifice intent or best move. Reuse movement identity MOVE-MAIN-34, also at T08. |
| **T03 REAL_MOVE** | MAIN, V-EV1 → V-REAL | **PARTIDA REAL** | Restore wide-enough board for c5→b6. White bishop captures black queen on b6 in **18.Bxb6**. Focal callout 'Dama negra capturada en b6', not a separate fictional move or new score. | Queen disappears only at b6 in this declared capture. The match continues; there is no terminal/game-over cue. Also T09. |
| **T04 REWIND** | MAIN, V-REAL → V-P1 | **REBOBINADO · PARTIDA REAL** | A clearly editorial timeline scrub/film-strip rewind resets display **directly to exact V-P1**, with no reverse SAN/moves. Use change-of-frame graphic rather than pieces illegally gliding backwards. | A rewind is not another chess event. No re-creation of unrecorded moves or time claim. |
| **T05 ENTER_HYPOTHETICAL** | MAIN → ALT_QD8; V-P1 → V-P1 | **HIPOTÉTICA · NO JUGADA** | Before any candidate alternate move frame, place a full-height/large truth tag and branch 'qué habría pasado si…' boundary. Retain identical V-P1 board with alternate-state design garnish, not new occupancy. | Hypothetical warning must precede movement and stay visible through every hypothetical frame. Never use a mere color change as disclosure. |
| **T06 HYPOTHETICAL_MOVE** | ALT_QD8, V-P1 → V-HYP | **HIPOTÉTICA · NO JUGADA** | Show declared **17...Qd8**, black queen b6→d8, with restrained square emphasis. Add optional caption 'alternativa, no jugada'. | This is not an actual 1956 move and must never be incorporated into the played mainline or presented as Fischer's actual choice. |
| **T07 RETURN_TO_REAL** | ALT_QD8 → MAIN; V-HYP → V-P1 | **REGRESO A LA PARTIDA REAL** | A single editorial swap restores **exact V-P1 in MAIN**. Keep the hypothetical warning while **any** hypothetical frame or intermediary remains visible. Only once board+branch exactly restored may replace warning with return banner. | This is an **atomic-return requirement**. Do not briefly flash an unlabeled ALT_QD8 frame. Never interpolate chess pieces between V-HYP and V-P1 as a legal move. |
| **T08 REAL_MOVE** | MAIN, V-P1 → V-EV1 | **PARTIDA REAL** | Re-show black bishop g4→e6, **17...Be6**, with optional reduced exterior margins and atmospheric depth while all 64 squares, source/target squares and the exact factuality band remain visible throughout. | This replays **the SAME source-declared move MOVE-MAIN-34 as T02**; not an additional historical occurrence/evidence. |
| **T09 REAL_MOVE** | MAIN, V-EV1 → V-REAL | **PARTIDA REAL** | Re-show white bishop c5→b6 taking the black queen, **18.Bxb6**. Wider board/callout reinforces the contrast with 17...Qd8 alternative. | Same MOVE-MAIN-35 as T03. No checkmate/ending claim. |
| **T10 ELLIPSIS** | MAIN, V-REAL → V-PRE-EV2 (technical internal) | **SE OMITEN JUGADAS REALES** | Hold audience-visible **V-REAL** while placing a clear full-screen timeline gap: '14 medias jugadas no mostradas · plies 36–49'. Screen may wipe through *empty timeline markers*, not occupied boards. Internal destination V-PRE-EV2 is **TECHNICAL_ONLY** and must never be shown as an audience-visible board. | Do not simulate/invent 14 chess moves, morph pieces, or show V-PRE-EV2. Distinguish narrative ellipsis from sequence ending. |
| **T11 REAL_MOVE** | MAIN, V-PRE-EV2 → V-EV2 | **PARTIDA REAL** | Adopt **VIS-TECH-01 ALT-A only as staging candidate**: cut directly to the declared **visual after-state V-EV2**, with static annotation '25...Nxd1 · caballo negro captura torre blanca en d1'. Highlight d1 in the *after* image; no drawn c3→d1 travel from undisplayed V-PRE-EV2. | Neither V-PRE-EV2 nor a falsely animated move from V-REAL is allowed. Static after-position is not proof of correctness/rights/renderer ability. Original case still declares source move c3→d1 at ply 50. |
| **T12 SEQUENCE_END** | MAIN, V-EV2 → V-EV2 | **CIERRE EDITORIAL · LA PARTIDA CONTINÚA** | Freeze the exact V-EV2 after-state; move to end-card with full exact truth label. Avoid checkmate effects, winner graphics, scores, clocks or results. A CTA is permissible as **conceptual copy**, not publication. | This is an editorial end at ply 50, NOT the historical game end; original candidate ending at ply 82 is unresolved and not depicted. |

## CASE disclosure versus OVER1 display_label: preserve both attributes

The main table's rótulos are OVER1 `display_label`. For the seven events whose CASE `disclosure` differs, the corresponding original CASE literal is shown below for reference only; these CASE strings are **not** additional required onscreen labels and are not substituted for OVER1:

| Event | CASE timeline[n].disclosure (source attribute only) | OVER1 display_label (required onscreen) |
|---|---|---|
| T04 | REBOBINADO A 17.Kf1 | REBOBINADO · PARTIDA REAL |
| T05 | ALTERNATIVA NO JUGADA | HIPOTÉTICA · NO JUGADA |
| T06 | VARIANTE HIPOTÉTICA — NO JUGADA | HIPOTÉTICA · NO JUGADA |
| T07 | VOLVEMOS A LA PARTIDA REAL: 17.Kf1 | REGRESO A LA PARTIDA REAL |
| T10 | SALTO TEMPORAL: SE OMITEN JUGADAS DE LA PARTIDA REAL | SE OMITEN JUGADAS REALES |
| T11 | PARTIDA REAL — LA PARTIDA CONTINÚA | PARTIDA REAL |
| T12 | CIERRE EDITORIAL: NO ES EL FINAL DE LA PARTIDA | CIERRE EDITORIAL · LA PARTIDA CONTINÚA |

## Factuality and continuity ledger

- Displayed move identities, not new SAN instances: **T02=T08: 17...Be6 (g4→e6); T03=T09: 18.Bxb6 (c5→b6, black queen captured at b6)**.
- Alternative: **T05→T06 17...Qd8 (b6→d8)** on ALT_QD8, wholly unplayed.
- **T07 exact real restore** precedes removal of hypothetical warning. Avoid displaying a frame in which physical board is still ALT and band says MAIN.
- **T10** omits inclusively plies **36–49 = 14**, starting from V-REAL; the only destination between this and T11 is invisible *technical* V-PRE-EV2.
- **T11** after-position-only cut is a *production staging candidate*. Semantic move remains declared 25...Nxd1; no animation manufactured to make a coherent jump.
- **T12** is nonterminal relative to the history; **'LA PARTIDA CONTINÚA'** remains unmistakable.

## Graphic shot priorities

1. On each shown square/action, chess legibility wins over cinematic impact. Every 8×8 board shown must correspond to its declared VISUAL state and correct branch.
2. For a moving-piece beat, use a board-anchored highlight/pulse with no supplementary objects that can be mistaken for pieces. No computer-generated best-move lines or evaluations.
3. Hypothetical scenes may have separate border geometry, typography and texture, **in addition** to their persistent exact words; they cannot rely solely on hue.
4. Never show footage/paper/face likeness or magazines without verified rights. Generic period evocation is acceptable only as an invented illustration clearly not claimed archival.
5. Avoid emotional assertions ('genius sacrifice', 'deliberate queen gift', 'forced mate') absent independent historical evaluation.
6. The storyboard deliberately does not decide color values, timing, actual lens focal lengths, material assets or output dimensions of final graphics.

## Proposed future review prompts — no tests performed

- Pause any alternate frame with sound off: is 'HIPOTÉTICA · NO JUGADA' still legible?
- At the instant of return, is the V-P1 board restored **before** any frame loses hypothetical warning?
- Are T02 and T08 recognizably replaying the *same* move instead of two moves in the score?
- Does the T10 gap *explicitly* mention 14 unseen half-moves without drawing an invented sequence?
- Can anyone see V-PRE-EV2 (should be **no**) or infer an impossible V-REAL→V-EV2 knight animation (should be **no**)?
- Is T12 a visibly nonterminal **editorial** ending even without voice?
- Are square labels, the board, main move and truth tag simultaneously readable on a vertically cropped phone?
- Has any implemented piece, typeface, texture or sound entered from a non-cleared source?

All answers currently **NOT_TESTED / UNASSESSED**. Refer to the review plan; do not claim a pass from the conceptual storyboard.
