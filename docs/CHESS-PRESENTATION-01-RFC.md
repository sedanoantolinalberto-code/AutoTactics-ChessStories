# CHESS-PRESENTATION-01 — Truth-preserving semantic display (RFC v0.1)

**Status:** DESIGN SPECIFICATION ONLY. NO RENDER, NO FRAME-BY-FRAME VIDEO, NO MEASURED VOICE, NO DEVICE PANEL, NO IVV PASS, NO COMMERCIAL ASSET CLEARANCE.

This RFC implements no visual technology. It specifies **render-time obligations** so a future Chess Stories video or clip does not accidentally turn a historical move into a fictional one, conceal skipped plies, or treat a story cut as the game’s historical ending.

Artifacts:
- \`contracts/CHESS-PRESENTATION-TRUTH-OVERLAY-v0.1.draft.json\`
- \`editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json\`

## The hidden failure mode

Narrative transitions are not always chess moves:
- \`T04 REWIND\` repositions the storytelling clock but does not mean anyone played an inverse chess move.
- \`T05 ENTER_HYPOTHETICAL\` switches factuality before any piece moves.
- \`T06 HYPOTHETICAL_MOVE\` illustrates **17...Qd8**, which was NOT played in the real Byrne–Fischer game.
- \`T07 RETURN_TO_REAL\` must restore exact real position \`V-P1\` and branch \`MAIN\`. A dissolve must not leave viewers believing the hypothetical line is history.
- \`T10 ELLIPSIS\` skips **real plies 36–49 inclusive**; that is fourteen omitted half-moves, not one chess move.
- \`T12 SEQUENCE_END\` closes the video scene after \`25...Nxd1\` and **does not close the actual game**, which the secondary candidate records ending later at \`41...Rc2#\`.

A renderer must not derive these truths from board position alone, because the same board can occur in several narrative contexts.

## Truth-preserving frame protocol

### Normal real position

Display a visible "PARTIDA REAL" marker tied to the real branch's identity. Showing a real frame does not imply all historical assertions are authenticated; source provenance remains independent. No historical actor intention or chess optimality claim is licensed by an accurate board animation.

### Entry into unplayed alternative

\`T05\` must set the "HIPOTÉTICA · NO JUGADA" frame classification **before** the first animation from \`V-P1\` to \`V-HYP\`. \`T06\` must retain that marker on every frame including freezes, replay fragments, mobile covers, crops and muted viewing. An audio cue may reinforce but never replace that written visual distinction.

### Return to real

A future renderer must use an atomic logical transition:
1. Preserve the hypothetical warning while the board is still showing \`V-HYP\`, or while an ambiguous interpolation is in progress.
2. Restore the exact stored FEN identity for real \`V-P1\` and confirm branch context \`MAIN\`.
3. Only then remove the hypothetical warning; display the explicit return marker.
4. Resume T08/T09 as real moves. Never mix T06's alternate position into the main sequence.

These are **presentation requirements**, not a claim that a working runtime transaction currently exists. The T07 JSON mapping includes \`hypothetical_warning_release_rule\` for this reason.

### Ellipsis and editorial ending

At T10 show an explicit omission overlay with the range **36–49** inclusive. A jump between FENs with no explanation is unacceptable even if it looks visually smooth. An animation must not fabricate unrecorded intermediary chess moves.

At T11 the black knight captures the white rook on d1. At T12 the display may close with "EL VÍDEO TERMINA; LA PARTIDA CONTINÚA" but not an implied historical checkmate. Accurate legal replay and original history are still pending.

## Cross-platform frame strategy

The same semantic truth annotations should be independent of output aspect ratio:

| Profile | Purpose | Current status |
|---|---|---|
| VERTICAL_9_16 | YouTube Shorts, Instagram Reels, TikTok | Design profile, not rendered |
| HORIZONTAL_16_9 | Longer YouTube episodes / eventual eBook frames | Design profile, not rendered |

No platform API, watermark export, final font, signed voice or music license is approved. Cropping or smaller phone overlays must not make the hypothetical marker disappear. Actual safe-area, font-size, duration, mobile readability and muted-versus-audio comprehension **have not been measured**.

## Provisional negative review cases (NOT EXECUTED)

| ID | Proposed injected error | Expected future guard |
|---|---|---|
| V01 | Show T06 without HYPOTHETICAL warning | Reject frame |
| V02 | Fade from T05 to T06 before warning appears | Reject ordering |
| V03 | T07 removes hypothetical warning while still on V-HYP | Reject atomic return |
| V04 | Restore MAIN branch but not exact V-P1 FEN | Reject state mismatch |
| V05 | Show Qd8 under PARTIDA REAL label | Reject factuality misclassification |
| V06 | Show T04 reverse movement as historical move | Reject event class mismatch |
| V07 | Animate 18.Bxb6 → 25.Qxb6 as one move without ellipsis | Reject implied illegal continuity |
| V08 | Hide 36–49 omitted plies behind a cut with no label | Reject missing omission |
| V09 | Display 25...Nxd1 as checkmate or END OF GAME | Reject wrong ending |
| V10 | Play accurate explanatory audio but remove visual HYPOTHETICAL marker | Reject muted-accessibility failure |
| V11 | Mobile crop hides factuality label on one output platform | Reject profile-specific layout |
| V12 | Use unlicensed historical magazine scan in final frame | Reject R6 clearance assumption |
| V13 | Put "24...Ra4 uniquely best" on a caption | Reject F03 unsupported claim |
| V14 | Mark shot durations "MEASURED" based only on a proposed 45s outline | Reject fabricated measurement |

These are documentary acceptance hypotheses, not implemented test functions or measured criteria. There is currently **no runner** and no human visual comprehension panel.

## Integration order (future only)

1. Preserve immutable semantic events, case-specific frozen policy and documentary evidence references.
2. Obtain a qualified chess-rules oracle to derive actual moves **without** promoting historical authenticity.
3. Map the semantic state and evidence references to a truthful overlay graph.
4. Resolve real scene timings from a measured original narration track once created lawfully, not from hardcoded 45-second shot allocations.
5. Render with commercial-rights-reviewed graphics, piece silhouettes, font, voice and soundtrack.
6. Independently review sample frames and on-device comprehension; log errors with exact event/frame IDs.
7. Only after required IVV and R6 gates close may a separate release decision be considered. No automatic PASS by passing an overlay check.

## Frozen restrictions and scope

R6 and IVV-03/05/06/09/10/12 remain PENDING. IVV GLOBAL and ED-CASE-REAL-01 remain NOT APPROVED. E5B4D under failure model M remains NO-GO. Strict Policy B requires every relevant process terminated with termination confirmed before 120 seconds, and independent stdout/stderr emitted-and-accepted lifetime limits of 1,048,576 bytes each.

No new code was executed, no videos/audio were rendered, no protected files moved, and no production or publishing permissions changed.

**The module should be reconsidered as a presentation contract only when a legal renderer and measured narration assets exist.**
