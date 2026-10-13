# EP01 — Chess Stories 45-second edit proposal (NOT RENDERED)

**Case:** ED-CASE-REAL-01, Byrne–Fischer 1956.  
**Artifact:** \`editorial/EP01-45S-SHOTPLAN-DRAFT.json\`.  
**Status:** EDITORIAL_TARGET_ONLY / NO REAL-TIME MEASUREMENTS / NO MEDIA PRODUCED / NOT APPROVED.

The plan below translates the *12 ordered semantic events* in v0.2 into *nine editorial shots*. Time intervals are **design allocations** for a target 45-second video, not measured timings and not fields to be copied as \`TIMING_MEASURED\` into the semantic case.

| Shot | Target time | Semantic events | Board/scene | Required onscreen truth label |
|---|---|---|---|---|
| S01 | 0–4s | T01 | V-P1: black queen b6 attacked by bishop c5 | PARTIDA REAL |
| S02 | 4–10s | T01 hold | V-P1: identification and geometry | PARTIDA REAL |
| S03 | 10–17s | T02 | V-EV1: 17...Be6 | PARTIDA REAL |
| S04 | 17–23s | T03 | V-REAL: 18.Bxb6 captures queen | PARTIDA REAL |
| S05 | 23–29s | T03 hold | Real position held; no extra moves invented | PARTIDA REAL |
| S06 | 29–34s | T04, T05, T06 | REWIND; branch switch; V-HYP 17...Qd8 | HIPOTÉTICA / NO JUGADA |
| S07 | 34–36s | T07 | RETURN_TO_REAL exact V-P1 | REGRESO A LA PARTIDA REAL |
| S08 | 36–42s | T08, T09, T10, T11 | Real replay, visible ellipsis **36–49 inclusive**, 25...Nxd1 | PARTIDA REAL / SE OMITEN JUGADAS |
| S09 | 42–45s | T12 | V-EV2 held; **the game continues** | CIERRE EDITORIAL, NO FINAL DE PARTIDA |

## Editorial checks and source bounds

- Byrne's move 18.Bxb6 removes the black queen. It is not itself checkmate or the end of the historical game.
- The alternative **17...Qd8** is a labelled **unplayed counterfactual**, never a historically recorded Fischer move.
- The two-second return in S07 must restore both the **MAIN narrative context** and the exact original real position. A crossfade alone does not prove this.
- S08 requires a visually explicit omission for real plies 36–49. Do not portray an instantaneous position jump as a single legal chess move.
- After 25...Nxd1 the game continues. The secondary score places the mate at 41...Rc2# (ply 82). Do not render a mate animation without a separately verified terminal FEN and legal replay.
- The F03 restriction prohibits claims that **24...Ra4** was uniquely best, regardless of whether it was played historically. No player intentions are inferred.

## Highest-priority unresolved perceptual risks

**S06:** Five seconds contains rewind, changed context and hypothetical move. A novice viewer may miss that the second path was not played. **S07:** Two seconds may be insufficient to recognize the return to the real position. **S08:** The assumed six-second span carries two real replay moves, a 14-ply ellipsis and another capture. This is a **high-risk pacing hypothesis**, not an approved creative solution. A longer cut or different shot allocation may be necessary after human review.

None of these timings are observations. We do not infer that a 45-second version is superior to a 60-second one without a controlled study.

## Assets and operational restrictions

- The boards referenced are FEN declarations and prior v4 still design artifacts; this branch contains no authorized commercial fonts, images, periodical reprints, audiovisual voice/music or final video.
- Source-image ownership, silhouette origin, font license, commercial rights and social-platform uses remain to be cleared at the asset level.
- No original Chess Review 1956 photograph, cover, Kmoch article scan, Fischer score-sheet scan or ChessBase illustration is re-uploaded.
- No terminal, executor, codec, ffmpeg, audio process or render was invoked.
- This editorial plan does not change IVV, R6, E5B4D, Policy B or any baseline. R6 PENDING / ED-CASE-REAL-01 NOT APPROVED.

## Future execution prerequisites

1. Semantic validator v0.2 requires independent static review and a qualified supervised runtime before authorized invocation.
2. A real source-of-history reconciliation needs full inspection of the contemporary Chess Review score and separate reproducible replay before asserting historical verification.
3. A controlled mobile human study should preregister comprehension of REAL/HYPOTHETICAL/RETURN and ellipsis segments.
4. Asset license clearance and relevant IVV signoffs must precede any commercial release.
5. Runner and tool qualification under strict Policy B remain unavailable for E5B4D failure model M, which is NO-GO.

**This is an editorial design deliverable, not a video, tested storyboard or publication authority.**
