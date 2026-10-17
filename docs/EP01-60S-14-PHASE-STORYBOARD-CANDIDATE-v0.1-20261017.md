# EP01 — 60-second, 14-phase production storyboard candidate v0.1

**2026-10-17 — SOURCE-ONLY / NOT RENDERED / NOT APPROVED / NOT PRODUCTION READY.**

This is a transcription-oriented editorial handoff derived from **PR #4's current** `editorial/EP01-60S-COMPREHENSION-ALTERNATIVE.v0.1.json` (Git blob `3f8f3c35a802167b5c22fad6e45b899e283b507b`) and `editorial/EP01-60S-PHASE-BOARD-BINDINGS.v0.1.json` (Git blob `27282e7a4bbe61cd7c3e2b867cea3b658581b918`). Durations are *design targets*, not measured; narration, captions and labels below are copied from the 60s candidate source (only empty narration is rendered as “— (sin voz)” for readability). This review does not amend those files, protected CASE/OVER1, or other branches. The 45s cut remains a baseline, and recommending 60s for eventual comparison is **not** an empirical result.

## 1. Exact 14-phase cue sheet

Target portrait 9:16, 1080 × 1920, 60,000ms; no actual file or licensed asset exists.

| Phase | Target seconds | Event | Intended audience-visible board | Exact settled truth label | Spanish narration (candidate) | Spanish on-screen caption |
|---|---|---|---|---|---|---|
| S01 | 0–4 | T01 | V-P1 | PARTIDA REAL | La dama de Fischer estaba atacada. Y no la retiró. | 1956 · ¿Salvarías la dama? |
| S02 | 4–10 | T01 | V-P1 | PARTIDA REAL | El alfil blanco de c5 amenazaba la dama negra en b6. | Alfil c5 → dama b6 |
| S03 | 10–17 | T02 | V-EV1 | PARTIDA REAL | Fischer jugó 17...Be6. Su alfil pasó a atacar el alfil de c4. | 17...Be6 · PARTIDA REAL |
| S04 | 17–23 | T03 | V-REAL | PARTIDA REAL | Byrne capturó la dama: 18.Bxb6. La partida no había terminado. | 18.Bxb6 · captura de dama |
| S05 | 23–28 | T03 | V-REAL | PARTIDA REAL | La combinación continuó con nuevos ataques y capturas. | La combinación continúa |
| S06-A | 28–31 | T04 | V-P1 | REBOBINADO · PARTIDA REAL | — (sin voz) | REBOBINADO · PARTIDA REAL |
| S06-B | 31–35 | T05 | V-P1 | HIPOTÉTICA · NO JUGADA | ¿Y si hubiera jugado 17...Qd8? | HIPOTÉTICA · NO JUGADA |
| S06-C | 35–40 | T06 | V-HYP | HIPOTÉTICA · NO JUGADA | Es una alternativa no jugada. | HIPOTÉTICA · NO JUGADA · 17...Qd8 |
| S07 | 40–45 | T07 | V-P1 | REGRESO A LA PARTIDA REAL | Volvemos a la partida real. | REGRESO A LA PARTIDA REAL |
| S08-A | 45–47 | T08 | V-EV1 | PARTIDA REAL | — (sin voz) | 17...Be6 · PARTIDA REAL |
| S08-B | 47–49 | T09 | V-REAL | PARTIDA REAL | — (sin voz) | 18.Bxb6 · PARTIDA REAL |
| S08-C | 49–53 | T10 | V-REAL | SE OMITEN JUGADAS REALES | Más tarde, | 14 medias jugadas omitidas · plies 36–49 |
| S08-D | 53–57 | T11 | V-EV2 | PARTIDA REAL | 25...Nxd1 capturó la torre blanca en d1. | 25...Nxd1 · captura torre blanca |
| S09 | 57–60 | T12 | V-EV2 | CIERRE EDITORIAL · LA PARTIDA CONTINÚA | Y la partida siguió: este no fue su final. | CIERRE EDITORIAL · LA PARTIDA CONTINÚA |

The labels shown are **settled-phase targets**. Transitions may require the prior warning to remain visible longer; these rows cannot be used as frame-by-frame permission to remove a truth label at a boundary.

## 2. Transition choreography — documentary instructions, not measured motion

- **S01–S02**: establish canonical V-P1 and highlight white bishop c5 / black queen b6. S02 is T01 hold, not a second event application.
- **S03–S04**: source-declared real 17...Be6 then 18.Bxb6 queen capture, subject to independent legal/historical qualification.
- **S05**: hold V-REAL; no invented intermediate move.
- **S06-A / T04**: rewind to exact V-P1 on MAIN; retain `REBOBINADO · PARTIDA REAL` until settled. Rewind is NOT a legal move.
- **S06-B / T05**: switch into explicit alternative branch, and show `HIPOTÉTICA · NO JUGADA` **before** depicting any unplayed move.
- **S06-C / T06**: show unplayed 17...Qd8 only with continuous persistent `HIPOTÉTICA · NO JUGADA` visible even with audio muted.
- **S07 / T07**: restore exact V-P1 and MAIN atomically. Retain hypothetical warning throughout restoration; show `REGRESO A LA PARTIDA REAL` after restoration completes. Five seconds is a target, not proof of sufficient viewer exposure.
- **S08-A and S08-B / T08–T09**: editorial replay of already depicted REAL positions; no new chronological plays are implied.
- **S08-C / T10**: explicit 14 REAL half-moves omitted (plies 36–49 inclusive). **Audience board remains V-REAL**, while `V-PRE-EV2` is the hidden internal T10 destination. `V-PRE-EV2` is `TECHNICAL_ONLY`, never an audience-visible board or automatic move.
- **S08-D / T11**: **ALT-A ONLY AS PROPOSED** — a hard cut to source-declared VISUAL V-EV2, with static d1 capture annotation and the displayed 25...Nxd1 caption; do NOT expose `V-PRE-EV2` and do NOT animate a c3→d1 move from the hidden board. The visual strategy remains **unqualified** until independent legality, semantic, rights, actual-frame and IVV review. If cross-layer source requirements conflict, **block production** rather than infer permission.
- **S09 / T12**: hold V-EV2 with `CIERRE EDITORIAL · LA PARTIDA CONTINÚA`; 25...Nxd1 is not the historically terminal result.

## 3. Storyboard visual and audio design tokens (not assets)

Use one consistently oriented, legible 64-square chessboard; distinct BLACK/WHITE shapes and contrast; reserved caption/title locations on 9:16 mobile display **to be determined by actual safe-area measurement**. Original geometry/piece outlines only when rights cleared. All factual disclosures must survive muted playback. Restrained highlights, explicit context badges and hard scene cut are narrative instructions, not validated animations. **No identifying interior of Marshall or Manhattan**: game venue remains disputed in directly received 2026 archival correspondence. No portrait, photo, historic scoresheet or licensed music is assumed. No chosen font binary, narrator, audio waveform, frame rate, pixel font sizes, timing of holds or safe-area offsets is asserted.

Audio draft is *only* the exact Spanish strings in the cue sheet; no synthetic voice or music has been produced or licensed. Empty narration in phases S06-A, S08-A and S08-B means no additional spoken line in the source proposal, not an instruction to insert unvetted SFX.

## 4. Blocking qualification and review checklist

- **Source integrity:** independently reconcile cross-branch case T01–T12, 6 FENs, overlay truth, 14 chronological phase declarations and source hashes; no silent cross-branch merge.
- **Chess legality:** qualified oracle NOT_RUN. Historical physical 41...Rc2# remains uncertain and outside this clip's endpoint; F03 forbids unsupported forced/uniquely-best or intention assertions.
- **Visual semantics:** VIS-TECH-01 ALT-A PROPOSAL_ONLY; mandatory visibility of real/hypothetical/return/ellipsis and no public `TECHNICAL_ONLY` states.
- **Runtime:** under original M, E5B4D remains `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL` and NO-GO. Exact strict Policy B applies: all relevant processes actually terminated and independently confirmed before physical 120 seconds including suspension; stdout and stderr separately both submitted `E_s` and accepted `A_s` <= 1,048,576 lifetime bytes. Alternative fault models are NOT adopted.
- **Behavioral test gate:** 66 semantic + 77 router negative cases NOT_RUN; no claimed PASS.
- **Asset provenance & rights:** R6 PENDING; no reproduction or commercialization authorized by archive consultation. Qualified typography/audio/graphics required.
- **Media QC/human IVV:** actual frames, measured narration/caption timing, 9:16 safe areas, quiet/silent truth perception and controlled 45/60 evaluation NOT_DONE; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED. No MP4/publication.

**Status at handoff:** a single editorial candidate document for a future authorized production workflow, not executable production instructions. No tests, scripts, video, engine, GitHub Actions, main, PR #12, CASE or OVER1 changes.
