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
| Q01 | Which black move was played in the real game after 17.Kf1? | 17...Be6 | REAL/HYPOTHETICAL confusion |
| Q02 | Was the black queen move to d8 shown as a real move? | No; 17...Qd8 was hypothetical, NOT PLAYED | Alternative mistaken for history |
| Q03 | When the imagined line ended, did the video return to the original real position or continue the imagined position? | Return to the real position V-P1 | Failure of explicit return |
| Q04 | What did 18.Bxb6 capture? | The black queen | Piece/board ambiguity |
| Q05 | Were there real moves between 18.Bxb6 and 25...Nxd1 that the video did not show? | Yes; plies 36–49 were omitted | Omission misinterpreted |
| Q06 | What was captured by 25...Nxd1? | A white rook on d1 | Piece/capture confusion |
| Q07 | Did 25...Nxd1 end the historical game? | No; game continued | Editorial ending conflated with historical ending |

For novices unable to interpret move notation, ask a plain-language paraphrase of each question without supplying the move's answer. Use the same paraphrase for every participant; do not silently vary scripts between candidates.

## Secondary perception and accessibility measures

- Ask to identify black and white piece types on actual device with no explanatory pointer or external legend. Record per-square error without guessing missing data.
- Ask when the real/hypothetical context changed and whether the labeling was readable without narration.
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
