# EP01 visual narrative — future review ledger, asset handoff and blocked release

**Everything described below is planned, not performed.** Status for all review cases: NOT_RUN. No human participant, actual phone screen, frame, renderer, chess engine, test suite, rights adviser or independent historian was employed in preparing this file.

## Handoff package for a future qualified production phase

Each eventual shot should have a distinct manifest record with:
- `event_id` (one of T01–T12), `case_commit`, `overlay_commit`, `rendered_board_state_id` (VISUAL only), `internal_state_id` (may be TECHNICAL_ONLY, never rendered), `active_branch_id`.
- `required_display_label` copied **verbatim** from the pinned overlay; `secondary_copy` tracked separately as a noncanonical editorial candidate.
- `source_move_id` for real/hypothetical moves, with replay scenes linking back to the *same* source move identity; no fabricated intermediate steps.
- `planned_camera_treatment`, `factuality_warning_active`, `restoration_complete_before_warning_release`, `skip_count_displayed`, `editorial_end_nonterminal`.
- Exact **future** asset identity and use-level licensing evidence (font file/revision, geometry source and output hash, textures, any imported art, soundtrack/voice only if eventually used); no empty permission field treated as PASS.
- Future outputs (if ever authorized): immutable render file digest, video format, device views, frame references, measurements and human review records. **None exist today.**

This is a documentary handoff field proposal, NOT a schema change. Do not create or install this manifest as a runtime object unless a separate gate-authorized design decision allows it.

## Future acceptance questions — not executed tests

| Review ID | Intended future observation | Evidence required to report a result | Current status |
|---|---|---|---|
| VN-01 | Every scene T01–T12 appears in order without hidden chess event insertion | Timestamped or frame-indexed evidence tied to case and overlay commit | NOT_RUN |
| VN-02 | A 9:16 muted phone viewer can locate required REAL/HYPOTHETICAL truth labels | Concrete video stimulus, device/UI capture and independent report | NOT_RUN |
| VN-03 | T05 warning appears before any T06 unplayed queen movement and never disappears within ALT frames | Exact frame intervals and overlay-state trace, not author assurance | NOT_RUN |
| VN-04 | At T07 no frame loses hypothetical warning until MAIN+V-P1 exact board is restored | Frame-by-frame board/branch/label record; qualified review | NOT_RUN |
| VN-05 | T02/T08 reuse 17...Be6; T03/T09 reuse 18.Bxb6 without double-counting source moves | Manifest identity links and qualified semantic move trace | NOT_RUN |
| VN-06 | T10 signals 14 omitted REAL plies 36–49; no invented hidden moves appear | Frame review + trusted declared source and qualified rule check where required | NOT_RUN |
| VN-07 | V-PRE-EV2 technical state has **zero visible frames** | Output state provenance and verified video/frame review | NOT_RUN |
| VN-08 | T11 follows ALT-A after-only V-EV2 without fake V-REAL→V-EV2 capture animation | Footage/frame inspection plus state binding review | NOT_RUN |
| VN-09 | T12 unmistakably says editorial close and game continues; no mate/result shown | Muted final-card evidence and independent comprehension review | NOT_RUN |
| VN-10 | Piece legibility, chessboard squares, coordinates and truth labels survive 9:16 device UI overlays, compression and cropping across three target apps | Platform-specific real device/channel screenshots or permitted equivalent; no universal safe zone assumed | NOT_RUN |
| VN-11 | Every media/font/graphic asset has final byte identity and sufficient license/use authorization for the exact distribution | Qualified R6 asset-specific legal/provenance record | NOT_RUN |
| VN-12 | No primary historical source, terminal score or intent claim is presented as independently verified without adjudication | Signed/traceable historical source and independent blind transcription assessments, as applicable | NOT_RUN |
| VN-13 | No tools, validators, subprocesses or renderer ran outside an admissible E5B4D/Policy B model | Reviewed execution model and qualified approval evidence | NOT_RUN |

**Review severity proposal:** P0 = factual branch/board leak, invented move, invisible disclosure, technical-only state exposure or false permission/approval; P1 = unclear legibility, platform cropping or ambiguous secondary copy; P2 = optional atmospheric/camera refinement. The severity vocabulary is prospective and has not been applied to a measured video.

## Separate evidence responsibilities

1. **Narrative consistency**: editor may draft camera and copy; cannot self-certify chess legality, archival witness reading, rightsholder consent, audiovisual original creation, or independent audience comprehension.
2. **Historical adjudication**: obtain Chess Review 1956 pp374–375 and other identified primary materials, freeze two independent blind transcriptions per agreed protocol, resolve score/terminal divergences before historical claims are promoted. No scan or reply is implied by outreach.
3. **R6**: asset ledger explicitly covers graphics, font binaries, original designs, published facsimiles and audio modes. Removing a third-party image/audio role from a proposed silent format **reduces dependencies** but does not grant clearance to the remaining roles. Wording 'NOT_USED' is different from 'CLEARED'.
4. **Visual integrity**: editorial sign-off for label hierarchy and branch transition, plus a separate viewer-facing readability assessment if future human testing is ethically and technically authorized.
5. **Technical execution**: F5 concluded no proven compatible envelope under M/Policy B. Even a single apparently successful visual test does not supply universal guarantee, unblock E5B4D, or authorize rendering.
6. **Release governance**: IVV_GLOBAL and CASE_APPROVAL remain unapproved; `main` and draft PR #12 untouched.

## Immediate Codex-compatible *documentary* follow-up, if requested later

Read **all six files listed in README.md (including README.md itself)** and compare per-event truth contract against pinned OVER1 and CASE without running parsers, test suites, engines, Actions or renderers. Report only concrete discrepancies or ambiguities, preferably as a review note on a separate branch. Do not approve any truth claim or change the canonical scene contract on the authority of this design. Codex is NOT required to read or edit these documents today.

## Stop conditions

Proceed no further into media production under current state. Do not ask the user to download a PC program just to review these drafts. No external rights outreach was sent in this visual work; archival requests already sent remain independent and unanswered at last check. Do not create material for non-chess sports, other AutoTactics products or public channels under this permission.

E5B4D remains STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL and **NO-GO under M**. Policy B requires every relevant process terminated AND termination confirmed strictly before 120 seconds; stdout AND stderr have separate lifetime caps 1,048,576 bytes **emitted and accepted**. R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED; 66 semantic negatives, 77 router negatives and independent legality oracle NOT_RUN. No build, renderer, test, media, merge or publication exists in this package.
