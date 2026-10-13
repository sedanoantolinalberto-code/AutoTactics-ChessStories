# CHESS STORIES — EP01 human perceptual IVV preregistration (draft v0.1)

**Study status:** PROTOCOL DRAFT ONLY. NO PARTICIPANTS RECRUITED, NO FILM RENDERED, NO HUMAN TEST PERFORMED, NO IVV GATE PASSED.

**Case:** ED-CASE-REAL-01 (Donald Byrne–Bobby Fischer, 1956). Candidate for private, adult, consented usability research after suitable lawful stimulus assets exist. R6 and IVV-03/05/06/09/10/12 remain PENDING. IVV_GLOBAL and pilot publication remain NOT APPROVED.

## Hypotheses to evaluate (not assumed facts)

- H1: a chess newcomer distinguishes historically played \`17...Be6\` from the explicitly *unplayed* \`17...Qd8\` sequence.
- H2: a viewer recognizes the true return from the hypothetical branch to the real \`V-P1\` board.
- H3: the visible T10 **ELLIPSIS covering plies 36–49 inclusive** communicates omitted real moves, not one magical move.
- H4: a viewer knows \`25...Nxd1\` captured a white rook but did **not** end the actual game.
- H5: board silhouettes, color, captions and arrows remain legible at actual phone viewing scale.
- H6: if independently legal, rights-cleared 45-second and 60-second candidates are produced using matched script/content, their branch comprehension can be compared without assuming shorter is better.

## Preconditions before any human presentation

1. Obtain a stimulus with lawful internal testing rights for **each used** piece silhouette, font, board graphic, voice, music, image and historical material. Accessibility of an online scan is not a license.
2. Prepare a reproducible storyboard/render version with immutable source ID, source hashes, track list and exact frame/clip mapping. Do not claim native rendering or measured times from the current 45s shot blueprint; it is only a proposed allocation.
3. Confirm independent signatory/evaluator identities and participant consent process. Do not recruit children for a pilot by default.
4. Confirm privacy design: coded participant IDs, no unnecessary name/email, no biometrics, no training usage of recordings without separate consent, retention/deletion plan documented. No fabricated consent or observations.
5. Independently approve a protocol and predefine decision thresholds *before* seeing participant performance. None of this document's suggested thresholds can automatically unlock IVV.
6. If programmatic runners are involved, qualify compliance separately under strict Policy B; E5B4D NO-GO model M remains unchanged. A human study cannot bypass it.

## Proposed two-cohort design

**Cohorts (provisional, not recruited):**
- Novice: little or no fluency reading SAN and few or no analyzed games (self-report, do not gate by formal Elo alone).
- Experienced: routinely plays or reviews chess games and recognizes SAN.

Suggested pilot planning target: 12 adult novices + 12 experienced adults, with consent; NOT a powered sample and NOT an automatically sufficient IVV acceptance size. Enrollment targets and stopping rules require protocol owner approval prior to recruitment.

**Viewing conditions:** a real smartphone at typical arm distance, vertically oriented 9:16. Record actual physical screen size/resolution, device, displayed dimensions, audio setting (muted versus voice) and platform UI overlays where applicable. Desktop browser preview cannot substitute for mobile readability.

**Randomization:** if two clip versions exist, counterbalance A→B / B→A within proficiency cohorts, with adequate separation or independent groups to control learning. Use fixed content and controlled stimulus variants (length changes only where possible). Do not count viewers who saw an answer key earlier as fresh unbiased participants.

**Blinding:** do not disclose the correct chess history or test answers before initial viewing. Human assessor who scores factual responses should not infer success from gestures alone or reveal answers midtrial.

**Noninteractive comprehension sequence:**
- Before watching: consent; neutral participant chess familiarity; check mute mode; record device conditions.
- Show stimulus once, no subtitles added by evaluator beyond actual clip.
- Ask the fixed questions below without coaching.
- Record answers verbatim or via multiple choice; mark whether playback was repeated.
- Ask open-ended clarity/confusion prompt, then a confidence/legibility scale.
- A second variant (if available) requires counterbalancing and separate question placement.

## Primary unprompted comprehension questions and keyed interpretation

| ID | Question | Evidence-consistent answer | What a wrong answer indicates |
|---|---|---|---|
| Q01 | Which black move did the video present as the **real-line** move after 17.Kf1? | 17...Be6 | REAL/HYPOTHETICAL presentation confusion |
| Q02 | Did the video label the black queen move to d8 as part of the real line? | No; 17...Qd8 was labelled hypothetical / NO JUGADA | Alternative presentation mistaken for real-line content |
| Q03 | When the hypothetical line ended, what did the video show next: a return to the saved real position or continuation of the hypothetical board? | Return to the saved real position V-P1 / MAIN | Failure of explicit return |
| Q04 | What did 18.Bxb6 capture? | The black queen | Piece/board ambiguity |
| Q05 | Did the video explicitly tell you that it skipped moves between 18.Bxb6 and the later 25...Nxd1 segment? | Yes; it displayed `SE OMITEN JUGADAS REALES` for 14 omitted half-moves / plies 36–49 | Omission presentation misinterpreted |
| Q06 | What was captured by 25...Nxd1? | A white rook on d1 | Piece/capture confusion |
| Q07 | Did the video present 25...Nxd1 as the end of the game, or did it explicitly say the game continues? | It explicitly said the game continues / editorial close only | Editorial ending conflated with presented game continuation |

For novices unable to interpret move notation, ask a plain-language paraphrase of each question without supplying the move's answer. Use the same paraphrase for every participant; do not silently vary scripts between candidates.

## Factuality boundary for scoring

Question scoring measures **stimulus comprehension only**. A participant cannot establish that a move was historically played, that a source score is authentic, or that a chess move is legal. Keyed answers refer to the current EP01 documentary/source-candidate contract and exact display overlays. Historical authentication and rules-oracle outcomes remain separate evidence layers.

The assessor must also record one technical presentation observation for the T06→T07 transition: whether `HIPOTÉTICA · NO JUGADA` remained visible until the exact V-P1 / MAIN restoration was complete, and whether `REGRESO A LA PARTIDA REAL` appeared for T07. This is an observation of the stimulus bytes, not a substitute for viewer comprehension.

## Secondary perception and accessibility measures

- Ask to identify black and white piece types on actual device with no explanatory pointer or external legend. Record per-square error without guessing missing data.
- Ask when the real/hypothetical context changed and whether the exact labels `REBOBINADO · PARTIDA REAL`, `HIPOTÉTICA · NO JUGADA`, `REGRESO A LA PARTIDA REAL`, `SE OMITEN JUGADAS REALES` and `CIERRE EDITORIAL · LA PARTIDA CONTINÚA` were readable without narration.
- Assess muted comprehension separately from narrated comprehension. If silence causes failure, that is diagnostic; do not silently exclude muted responses.
- Record legibility and cognitive-load ratings 1–5 (scale anchors preregistered; 1 = very difficult, 5 = effortless).
- Record subtitle truncation, UI-occlusion, safe-area collision, color/piece ambiguity, over-dense arrows and narration mismatch as individual defects.
- Record whether a participant spontaneously describes any visual as a historical player portrait or original archival material when no such asset is shown.

## Stop/flag conditions (not gate thresholds)

- Any test showing a real/hypothetical mislabel as a technical visual failure should be isolated for repair investigation.
- Participants mistaking 25...Nxd1 for checkmate signals an editorial design defect that must be tracked.
- Systematic novice failure on branch return or ellipsis should trigger redesign and retesting before any global IVV recommendation.
- A test supervisor must record all exclusions (technical failure, inability to view, prior familiarity with stimulus), including rationale, not discard unfavorable results.

**No numeric PASS threshold is authorized here.** The study owner must preregister minimum acceptable question performance, cohort sample sizes, exclusions and independent review signature before executing. Do not aggregate isolated PASS LIMITED controls into an IVV GLOBAL PASS.

## Expected evidence bundle after a legitimately conducted study

- Pseudonymous participants and consent register (stored privately, never in public repository).
- Immutable stimuli hashes, device context, version and duration measurements.
- Question-level answers, verbatim confusion notes, repeat/replay flags, numerator/denominator per cohort and uncertainty bands where statistically defensible.
- Individual assessor signatures and audit timestamps, separated from the engineering author.
- Known sampling limitations and decision: PENDING / NEEDS_REDESIGN / REVIEW_REQUESTED, never auto-upgrade by editing JSON.
- Defect IDs mapped to affected semantic events and exact video timecodes.

## Frozen operational position

This plan is not a human study, completed informed consent, cleared third-party rights, source authentication, production render or evidence of runner execution. **No tools or participant events from this protocol have been run.** E5B4D remains NO-GO under failure model M; Policy B requires **all relevant processes terminated and confirmed before 120 s** and **independent stdout/stderr emitted/accepted lifetime ceilings of 1,048,576 bytes each**. No changes to AutoTactics/Motion.


## 2026-10-14 static reconciliation

The preregistration now explicitly prevents a human-perception result from being misread as historical authentication. Q01/Q02/Q03/Q05/Q07 are keyed to what the EP01 stimulus **presents**, not to an independent claim that the 1956 primary record has been authenticated. The protocol also adds a stimulus-level observation for the T06→T07 warning-release order required by the presentation contract.

No participant, stimulus, score, threshold or IVV state was created by this edit.


## 2026-10-14 — Explicit 45 s / 60 s preregistration candidate cross-reference

A **new unrendered 60,000 ms target** has been proposed in PR #4 as `editorial/EP01-60S-COMPREHENSION-ALTERNATIVE.v0.1.json`. The existing 45,000 ms source candidate remains unchanged. Connected GitHub *text inspection* (not a project test or timing validation) found matching concatenated Spanish narration and the same ordered T01–T12 first-occurrence events / exact event label declarations. The 60s plan intentionally assigns longer spans to T04–T07 and T08–T11 but shortens a previous board hold by one second.

**Experimental interpretation constraint:** treating this as a simple one-variable `45 vs 60 seconds` test would be invalid unless the protocol explicitly characterizes the treatment as a **different time-allocation plan**. The candidates alter relative dwell times, not merely total length. Any future inference should be limited to viewer comprehension of these two precisely identified stimuli, with order, device, mute setting, version, exposure and potential learning controlled, and without extrapolating duration causality in general.

The R6 clean-room working branch proposes a **silent-first, captions-only research stimulus**. This reduces prospective voice/music dependencies *only if* a later lawful stimulus really omits both; it does not clear or create boards/fonts/media, grant R6 rights, or authorize reproduction/recruitment. A silent stimulus would allow testing the already mandatory audio-independent factuality labels. To compare silent versus voiced versions in future, treat voice presence as a separate experimental factor with a separate approved design; do not combine it silently with the duration intervention.

No numeric acceptance threshold, participant allocation, randomization outcome, signed consent, actual media, performance score or IVV approval is entered here. Protocol-owner independent approval remains required prior to recruiting, showing lawful stimuli or changing a frozen gate. E5B4D NO-GO under M and strict Policy B unchanged; no code, tests, renders or GitHub Actions performed by this edit.
