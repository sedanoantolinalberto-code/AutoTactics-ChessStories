# EP01 — Production Ready Package v0.1 (EDITORIAL CANDIDATE ONLY)

**Date:** 2026-10-17. **Case:** ED-CASE-REAL-01. **Game:** Donald Byrne (White) — Bobby Fischer (Black), 17 October 1956, Third Rosenwald Trophy, New York. **Language:** Spanish. **Target:** 45 s, 9:16, 1080 × 1920, NOT MEASURED; 60 s is an unrendered comparison option, not an approval.

> **CONTROLLED STATUS: DOCUMENTARY_PACKAGE_PREPARED / NOT_PRODUCTION_READY / NOT_RENDERED / NOT_APPROVED.** “Production Ready” is the handoff packet name, *not* a claim that executable or publishable production is authorized. No finished video, audio, frames, proof-of-rights or human IVV results exist in this packet. All case/timing material is unverified design/source candidate and must not be upgraded by editorial consolidation.

## 1. Source of truth and precedence

- Semantic case: PR #1 `cases/ED-CASE-REAL-01.v0.2.json` with frozen T01–T12 and six positions. Do not modify the case via this packet.
- Nine-shot 45 s draft and its *exact* Spanish lines: PR #4 `editorial/EP01-45S-SHOTPLAN-DRAFT.json` and `docs/EP01-EDITORIAL-45S-REVIEW.md`. Below **transcribes** the candidate, not a validated replacement.
- Overlay state machine: PR #11 twelve-event truth declarations, as cross-referenced in PR #4. Ordered event-level labels overrule any shot-wide summary label.
- Technical-visibility issue: PR #4 `docs/EP01-VIS-TECH-01-SOURCE-VISIBILITY-RECONCILIATION.v0.1.md`. ALT-A is a **source-only mitigation proposal**, not a qualified render or legal replay.
- E5B4D decision and independent assurance path: `docs/E5B4D-EP01-RELEASE-PATH-DECISION-PACKET-20261017.md`, commit `ed217409f55f41e6f312ee0e1081f0de4ec39c2b`.
- Archive provenance/venue cautions: H1 §X in commit `bec23d8dcc0091470202208447230700161359ae`; Greg Keener's attributed retrospective Brady/Marshall versus Lombardy/Manhattan recollections do not settle venue.
- Diverging branch documents are **not merged**; references alone do not establish identical hashes, canonical supremacy or integrated behavior.

## 2. Nine-shot Spanish edit candidate: exact inherited copy (TIMING_TARGET_ONLY)

| Shot | Target | Events / screen board | Existing candidate narration ES | Existing candidate caption ES | Audience truth labels and major condition |
|---|---|---|---|---|---|
| S01 | 0–4s | T01; V-P1 | La dama de Fischer estaba atacada. Y no la retiró. | 1956 · ¿Salvarías la dama? | PARTIDA REAL; don't assert forced sacrifice |
| S02 | 4–10s | T01 hold; V-P1 | El alfil blanco de c5 amenazaba la dama negra en b6. | Alfil c5 → dama b6 | PARTIDA REAL; highlight, no invented move |
| S03 | 10–17s | T02; V-EV1 | Fischer jugó 17...Be6. Su alfil pasó a atacar el alfil de c4. | 17...Be6 · PARTIDA REAL | PARTIDA REAL; candidate move/source; no uniquely-best claim |
| S04 | 17–23s | T03; V-REAL | Byrne capturó la dama: 18.Bxb6. La partida no había terminado. | 18.Bxb6 · captura de dama | PARTIDA REAL |
| S05 | 23–29s | T03 hold; V-REAL | La combinación continuó con nuevos ataques y capturas. | La combinación continúa | PARTIDA REAL; no extra moves |
| S06 | 29–34s | T04/T05/T06; V-P1 rewind then V-HYP | ¿Y si hubiera jugado 17...Qd8? Es una alternativa no jugada. | HIPOTÉTICA · NO JUGADA · 17...Qd8 | **First:** REBOBINADO · PARTIDA REAL. **Then:** HIPOTÉTICA · NO JUGADA on every hypothetical frame. 5s perceptual-risk unresolved |
| S07 | 34–36s | T07; restored exact V-P1 | Volvemos a la partida real. | REGRESO A LA PARTIDA REAL | REGRESO A LA PARTIDA REAL only with MAIN anchor restored; 2s perceptual-risk unresolved |
| S08 | 36–42s | T08/T09/T10/T11; last V-REAL then proposed cut to V-EV2 | Más tarde, 25...Nxd1 capturó la torre blanca en d1. | T08/T09: PARTIDA REAL → T10: SE OMITEN JUGADAS REALES · 14 medias jugadas → T11: PARTIDA REAL · 25...Nxd1 | **Phased:** PARTIDA REAL → SE OMITEN JUGADAS REALES → PARTIDA REAL. Plies 36–49 inclusive: 14 omitted real half-moves. **ALT-A proposed:** hold V-REAL through omitted interval, hard cut to V-EV2 on T11. No V-PRE-EV2 pixels/tween. 6s high density unresolved |
| S09 | 42–45s | T12; V-EV2 hold | Y la partida siguió: este no fue su final. | CIERRE EDITORIAL · LA PARTIDA CONTINÚA | NONTERMINAL editorial close at 25...Nxd1, no mate scene |

**Note on S08:** The inherited 45s shotplan's description of a generic replay of T08/T09 and transition to T11 must **not** be taken as evidence that the ALT-A video path is approved or that any missing board frames can be interpolated. `V-PRE-EV2` (ply 49) is `TECHNICAL_ONLY`. ALT-A's hard cut is a *proposed* non-exposure strategy awaiting independent semantic, chess legality and media qualification. Where the shotplan and the visibility RFC conflict, **block render**; this packet does not silently reconcile or modify their source files.

## 3. Source-specific visual direction — design guidance, not produced assets

- Consistent legible 64-square chessboard; provide board orientation and coordinates only after checking the canonical FEN mapping and mobile readability. Avoid using a specific photograph or recognizable Marshall/Manhattan club room.
- Original geometrical primitives and sober editorial tone; distinguish WHITE and BLACK pieces with tested contrast. Style/palette/font selections remain **DESIGN_UNDECIDED** pending render QC/asset clearance; no fabricated license grant.
- T01: board first, conspicuous bishop c5 and black queen b6 indicators. T02/T03: clearly stage source-declared played moves, not player thoughts. T04–T06: distinct rewind / counterfactual treatment with **persistent** hypothetical marker. T07: visibly restore MAIN; no crossfade-only equivalence claim.
- T10: no depiction of 14 missing plies as one move; absence disclosure text and elapsed semantic state are not substitutes for chess legal verification. T11: the cut to visual V-EV2, marked as position after 25...Nxd1, with d1 static capture callout is proposed only; never animate directly from `TECHNICAL_ONLY` V-PRE-EV2.
- Final frame: static V-EV2 with exact `CIERRE EDITORIAL · LA PARTIDA CONTINÚA`; no simulation of historically disputed terminal mate.
- Camera/animation: restrained highlighting and purposeful movement only; exact motion curves, safe-area margins, subtitle px sizes, FPS and exposure times must be measured in permitted media QC, not invented now. Produce original artwork when authorized; no use of press scans, unlicensed historical images or commercial music.

## 4. Historical truth / claims register

| Claim | Classification | Permitted treatment now |
|---|---|---|
| Byrne–Fischer, 17 Oct 1956, New York, 1956 Rosenwald event | Published history / project documentary candidate | Title context with source trace; final publication needs historical editorial signoff |
| T01–T12, 17...Be6, 18.Bxb6 and 25...Nxd1 | Pinned EP01 source-state declarations / candidate secondary scores | Can appear in source-level script; independent chess oracle and historical reconciliation PENDING |
| 17...Qd8 | Hypothetical, NOT played | Must visibly label `HIPOTÉTICA · NO JUGADA`, including in muted playback |
| T10 plies 36–49 | Explicit editorial ellipsis, 14 real half-moves omitted | Label `SE OMITEN JUGADAS REALES`; never pretend continuity |
| 25...Nxd1 | Narrative closure, NOT historical game termination | Preserve `CIERRE EDITORIAL · LA PARTIDA CONTINÚA` |
| 41...Rc2# at ply 82 | Published secondary continuation; whether physically played versus resignation unresolved | Do not stage a historically verified mate or call it observed physical end |
| Specific 17 Oct game venue | Brady=Marshall versus Lombardy=Manhattan attributed recollections, not primary adjudication | No precise club interior or confident venue label |
| Fischer intent / only best move / forced outcomes | No independently competent proof of intention or uniqueness | No such claims |
| Physical original scoresheet custody | No item-level present custodian authentication | No “original verified” or reproduction rights claim |

## 5. Production asset inventory — each item must be cleared independently

| Asset family | Required artifact | Current state |
|---|---|---|
| Board/pieces/highlights/camera design | Independent original artwork and reproducible provenance | PROPOSAL_ONLY / NOT_RENDERED |
| FEN and move playback | Qualified independent chess-rule oracle and frame-to-state trace | NOT_RUN |
| Spanish narration / actor / synthetic voice | Exact approved script, lawful audio source and consent/licensing if applicable | SCRIPT_DRAFT_ONLY |
| Font and caption design | Specific licensed binaries, version/source and redistribution/commercial rights evidence | NOT_SELECTED / RIGHTS_PENDING |
| Music / SFX | Original or commercially licensed tracks and attribution terms | NOT_SELECTED / RIGHTS_PENDING |
| Historical documents/photos | Item-level rights, reproduction terms and provenance | NOT_CLEARED — do not include |
| Export MP4, subtitles and thumbnails | Actual files + frame/audio QC + format checks | NOT_CREATED |
| Social publishing surfaces | Platform-specific safe areas, captions and release decisions | NOT_QUALIFIED |

## 6. Release-blocking acceptance checklist — no checkbox is a PASS absent evidence

1. **E5B4D/Policy B:** independent formal adjudication, governing authority approval for any new model, demonstrable all-process actual confirmed termination before 120s physical including suspension, and *per stdout/stderr* both submitted-write `E_s` and accepted `A_s` <= 1,048,576 lifetime bytes. Under original M: NO-GO.
2. **Semantic consistency:** case T01–T12 and six declared FENs preserved; qualified replay of legal moves and omissions. The 66 semantic + 77 router negative scenarios are specified but NOT_RUN.
3. **Truth overlays:** event-level exact Spanish labels present in every phase; muted truth; branch and MAIN restoration; rejected routes fail closed. T10 is an omission, not a move.
4. **VIS-TECH-01:** explicitly approved cross-layer treatment of `TECHNICAL_ONLY` V-PRE-EV2; proposed ALT-A vetted, implemented in a qualified environment and inspected on actual frames before any signoff.
5. **Editorial timing:** record measured voice/timing, check S06 (5s), S07 (2s), S08 (6s), compare 45s vs 60s if warranted; do not label either preferable absent human playback evidence.
6. **R6 rights and privacy:** document provenance and use permission for each included asset; archival access or educational permission is not commercial permission.
7. **Human IVV:** collect actual qualified review of mobile reading, real/hypothetical/return/ellipsis understanding, silent viewing, video pacing; no fabricated participants or ratings.
8. **Release:** IVV_GLOBAL and CASE_APPROVAL explicitly granted and recorded; only then qualify private MP4 for distribution, format-specific exports, published copy and thumbnail.
9. **Change control:** protected CASE/OVER1, main and PR #12 untouched until separately authorized; dossier creation is not a test or a merge.

## 7. Risk-prioritized next actionable work

**P0 external:** obtain signed independent E5B4D/model-M review (five preliminary inquiries SENT, no substantive technical reply as of last inbox check); evidence must address precise fault and trusted-monitor assumptions. Original M NO-GO remains.

**P0 after authorized runtime:** qualify chess oracle + execute specified negative tests; *not* under this documentary mandate.

**P0 visual design decision under qualified review:** reconcile T11 staging via ALT-A or an explicit alternative; keep current tech-state visibility CLOSED, not waived.

**P1 editorial:** compare 45/60 through actual human IVV only after permitted private stimuli and independent rights review; freeze target candidate now, not measured timings.

**P1 external archives:** await item-level custody/venue historical evidence; do not block a historically cautious editorial script solely to achieve certainty on unrelated room depiction.

## 8. Scope and audit statement

This consolidated packet was prepared by **reading PR #4's actual shotplan and VIS-TECH-01 dossier**, cross-checking issue #8's gates, and preserving external research disposition. It does not assert that CASE, renderer, oracle, platform runtime or license proofs were independently inspected today. All narration and caption rows reproduce existing PR #4 proposal verbatim; visual direction elsewhere is explicitly an *additional non-binding design inference*. No project code execution, scripts, tests, renders, Actions, new media, purchase, merge or publication occurs through this file.
