# Chess Stories EP01 — per-shot documentary delivery handoff v0.1

**Status: SPECIFICATION_CANDIDATE_ONLY, NOT_RENDERED, NOT_VALIDATED, NOT_CLEARED, NOT_APPROVED.** This is a **human-readable handoff**, not an executable scene manifest or a change to CASE/OVER1, Chess Evidence Registry, rights/permissions, or the production pipeline. No shots, media bytes, frames, visual tests, historical approvals or release evidence exist as a result of this document.

## Immutable source ledger

- CASE `cases/ED-CASE-REAL-01.v0.2.json` @ `2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd`, blob `3514f19ac355763a5b4c61d5c573df090b0eccc1`.
- OVER1 `editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json` @ `fa942d79a414ee3bc617b241a12f2cc58169d651`, blob `57df8acf69cdd8516c5587100bc71c533b8ecf7a`; OVER1 is a pinned **editorial comparator**, not a canonical historical source.
- Corrected narrative/copy candidate `design/chess-visual-narrative/v0.1/` @ `967d8ff11fbae46772bdb5076e37657a48e66cbd`; `editorial-copy-and-silent-treatment.md` blob `8f690e4b9577fa243eedef766d7a6ae7783c5796`.
- Documentary closeout `design/chess-visual-narrative/reviews/EP01-v0.1-remediation-closeout-20261016.md` @ `967d8ff11fbae46772bdb5076e37657a48e66cbd`; outcome `DOCUMENTARY_CORRECTIONS_ACCEPTABLE_PENDING_HIGHER_GATES`.
- Rights/staging comparator `docs/R6_EP01_CLEAN_ROOM_PRODUCTION_BASELINE.v0.1.md` @ `87cb4aac391147ed8d2b1509ddb3b23b98ca0783`, including conditional **VIS-TECH-01 ALT-A**, not a media clearance.
- Existing **VN-01–VN-13** future questions: `design/chess-visual-narrative/v0.1/future-human-review-and-delivery.md`; this handoff **references them without starting or duplicating an executed suite**.

## Read the four columns separately

1. **CASE event fields** (`kind`, `from/to_branch_id`, `from/to_state`, `move`, `omitted_plies`, `disclosure`) specify source-declared semantic events. They are not footage or original historical authentication.
2. **OVER1 `display_label`** is the **mandatory visible factuality band**, reproduced literally per Txx. The CASE `disclosure` is a distinct source attribute. Coincident wordings do NOT collapse these fields.
3. **Candidate secondary caption** is independent editorial copy and can be shortened or omitted in a later properly reviewed output; it must never override the mandatory factuality band or falsely promote historical claims.
4. **Visible board versus internal semantic state**: a source state can be TECHNICAL_ONLY and must not be shown. Active branch is not the same as the board state's declared ownership (T05 shares V-P1 while entering ALT_QD8).

All EVENT timing values and viewer/platform legibility are **UNMEASURED / NOT_RUN**. This plan uses no invented shot milliseconds, frame numbers, canvas coordinates, typeface files, playback evidence, process execution budgets or release dates.

## Master correspondence matrix — 12 source events

| Evento / kind | Rama y estado interno | Tablero público / movimiento | OVER1.display_label obligatorio | CASE.timeline.disclosure (atributo fuente) |
|---|---|---|---|---|
| T01 / SET_POSITION | ∅→MAIN; ∅→V-P1 | V-P1 full 8×8 throughout | PARTIDA REAL | PARTIDA REAL |
| T02 / REAL_MOVE | MAIN→MAIN; V-P1→V-EV1 | V-P1 → V-EV1 on MAIN | PARTIDA REAL | PARTIDA REAL |
| T03 / REAL_MOVE | MAIN→MAIN; V-EV1→V-REAL | V-EV1 → V-REAL on MAIN | PARTIDA REAL | PARTIDA REAL |
| T04 / REWIND | MAIN→MAIN; V-REAL→V-P1 | V-REAL → V-P1 as EDITORIAL reset | REBOBINADO · PARTIDA REAL | REBOBINADO A 17.Kf1 |
| T05 / ENTER_HYPOTHETICAL | MAIN→ALT_QD8; V-P1→V-P1 | V-P1 unchanged and full board | HIPOTÉTICA · NO JUGADA | ALTERNATIVA NO JUGADA |
| T06 / HYPOTHETICAL_MOVE | ALT_QD8→ALT_QD8; V-P1→V-HYP | V-P1 → V-HYP on ALT_QD8 | HIPOTÉTICA · NO JUGADA | VARIANTE HIPOTÉTICA — NO JUGADA |
| T07 / RETURN_TO_REAL | ALT_QD8→MAIN; V-HYP→V-P1 | V-HYP → exact V-P1 via non-chess editorial swap | REGRESO A LA PARTIDA REAL | VOLVEMOS A LA PARTIDA REAL: 17.Kf1 |
| T08 / REAL_MOVE | MAIN→MAIN; V-P1→V-EV1 | V-P1 → V-EV1 on MAIN | PARTIDA REAL | PARTIDA REAL |
| T09 / REAL_MOVE | MAIN→MAIN; V-EV1→V-REAL | V-EV1 → V-REAL on MAIN | PARTIDA REAL | PARTIDA REAL |
| T10 / ELLIPSIS | MAIN→MAIN; V-REAL→V-PRE-EV2 | Hold V-REAL only; no new audience-visible board | SE OMITEN JUGADAS REALES | SALTO TEMPORAL: SE OMITEN JUGADAS DE LA PARTIDA REAL |
| T11 / REAL_MOVE | MAIN→MAIN; V-PRE-EV2→V-EV2 | Hard cut exclusively to VISUAL after-state V-EV2 | PARTIDA REAL | PARTIDA REAL — LA PARTIDA CONTINÚA |
| T12 / SEQUENCE_END | MAIN→MAIN; V-EV2→V-EV2 | V-EV2 remains visible; optional original end-card must not hide exact truth band | CIERRE EDITORIAL · LA PARTIDA CONTINÚA | CIERRE EDITORIAL: NO ES EL FINAL DE LA PARTIDA |


The matrix's **public-board description** is a *proposed staging rule*, not a verified video. All visible-board frames retain all 64 squares and the corresponding visible truth band; no interior move interpolation may fabricate chess data.

## Per-shot instructions and dependencies

### T01 — SET_POSITION

- **Source identity (CASE):** branch `null → MAIN`, state `null → V-P1`; No move.
- **Audience-visible state:** V-P1 full 8×8 throughout. **Internal-only distinction:** V-P1 (ply 33).
- **Required OVER1 display_label:** **PARTIDA REAL**. **CASE disclosure (different field, not automatically an extra visible label):** “PARTIDA REAL”.
- **Candidate secondary caption, NOT canonical:** «Byrne–Fischer, Nueva York, 1956 · posición tras 17.Kf1».
- **Presentation / ordering rule:** Set source-declared position after 17.Kf1; first visible frame already shows all 64 squares and OVER1 band; move-free board establishment.
- **Candidate asset roles and clearance:** Project-owned board and pieces proposed, exact media bytes/licensing pending; label font pending. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-01, VN-02, VN-10; future full-frame visual/state binding evidence. Status **NOT_RUN**.

### T02 — REAL_MOVE

- **Source identity (CASE):** branch `MAIN → MAIN`, state `V-P1 → V-EV1`; Be6, g4→e6.
- **Audience-visible state:** V-P1 → V-EV1 on MAIN. **Internal-only distinction:** Same two VISUAL source states.
- **Required OVER1 display_label:** **PARTIDA REAL**. **CASE disclosure (different field, not automatically an extra visible label):** “PARTIDA REAL”.
- **Candidate secondary caption, NOT canonical:** «17...Be6 · el alfil negro pasa de g4 a e6».
- **Presentation / ordering rule:** One declared bishop motion g4→e6, 17...Be6; focus origins/destination without crop; no motive/evaluation annotation.
- **Candidate asset roles and clearance:** Original designed bishop/board motion and callout; font/graphics not cleared. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-01, VN-05, VN-10; future move ID+board+label/frame trace. Status **NOT_RUN**.

### T03 — REAL_MOVE

- **Source identity (CASE):** branch `MAIN → MAIN`, state `V-EV1 → V-REAL`; Bxb6, c5→b6; captures black Q on b6.
- **Audience-visible state:** V-EV1 → V-REAL on MAIN. **Internal-only distinction:** Same two VISUAL source states.
- **Required OVER1 display_label:** **PARTIDA REAL**. **CASE disclosure (different field, not automatically an extra visible label):** “PARTIDA REAL”.
- **Candidate secondary caption, NOT canonical:** «18.Bxb6 · el alfil blanco captura la dama negra en b6».
- **Presentation / ordering rule:** One declared white bishop c5→b6, capturing black queen at b6; no extra capture as a separate chess move.
- **Candidate asset roles and clearance:** Board/piece graphics, capture callout and text font all require R6 evidence. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-01, VN-05, VN-10; capture-square and piece identity review. Status **NOT_RUN**.

### T04 — REWIND

- **Source identity (CASE):** branch `MAIN → MAIN`, state `V-REAL → V-P1`; No move.
- **Audience-visible state:** V-REAL → V-P1 as EDITORIAL reset. **Internal-only distinction:** No source move; MAIN remains active.
- **Required OVER1 display_label:** **REBOBINADO · PARTIDA REAL**. **CASE disclosure (different field, not automatically an extra visible label):** “REBOBINADO A 17.Kf1”.
- **Candidate secondary caption, NOT canonical:** «Rebobinamos hasta la posición tras 17.Kf1».
- **Presentation / ordering rule:** Explicit timeline rewind/cut only; do not animate SAN in reverse or treat as another historical move.
- **Candidate asset roles and clearance:** Original timeline graphics/label typography; no archival-film footage. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-01, VN-02; future visible timeline and restored board trace. Status **NOT_RUN**.

### T05 — ENTER_HYPOTHETICAL

- **Source identity (CASE):** branch `MAIN → ALT_QD8`, state `V-P1 → V-P1`; No move.
- **Audience-visible state:** V-P1 unchanged and full board. **Internal-only distinction:** Active branch changes MAIN → ALT_QD8; V-P1 remains a MAIN-owned shared anchor.
- **Required OVER1 display_label:** **HIPOTÉTICA · NO JUGADA**. **CASE disclosure (different field, not automatically an extra visible label):** “ALTERNATIVA NO JUGADA”.
- **Candidate secondary caption, NOT canonical:** «Ahora veremos una alternativa que no se jugó».
- **Presentation / ordering rule:** SHOW 'HIPOTÉTICA · NO JUGADA' before first alternate frame. Hold that warning across T05, T06 and restoration until T07 board+MAIN are confirmed.
- **Candidate asset roles and clearance:** Distinct original branch border design PLUS mandatory words; not color-only; fonts pending. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-02, VN-03, VN-04; future precedence/warning persistence records. Status **NOT_RUN**.

### T06 — HYPOTHETICAL_MOVE

- **Source identity (CASE):** branch `ALT_QD8 → ALT_QD8`, state `V-P1 → V-HYP`; Qd8, b6→d8.
- **Audience-visible state:** V-P1 → V-HYP on ALT_QD8. **Internal-only distinction:** V-HYP hypothetical at ply 34.
- **Required OVER1 display_label:** **HIPOTÉTICA · NO JUGADA**. **CASE disclosure (different field, not automatically an extra visible label):** “VARIANTE HIPOTÉTICA — NO JUGADA”.
- **Candidate secondary caption, NOT canonical:** «¿Y si se hubiese jugado 17...Qd8?».
- **Presentation / ordering rule:** Move black queen b6→d8 under continuous 'HIPOTÉTICA · NO JUGADA'; no inference that Fischer historically selected it or that outcomes were analyzed.
- **Candidate asset roles and clearance:** Original queen geometry and candidate hypothetical graphic treatment; R6 pending. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-03, VN-10, VN-12; future warning/move-frame alignment. Status **NOT_RUN**.

### T07 — RETURN_TO_REAL

- **Source identity (CASE):** branch `ALT_QD8 → MAIN`, state `V-HYP → V-P1`; No move.
- **Audience-visible state:** V-HYP → exact V-P1 via non-chess editorial swap. **Internal-only distinction:** Active branch ALT_QD8 → MAIN; restore state AND branch together.
- **Required OVER1 display_label:** **REGRESO A LA PARTIDA REAL**. **CASE disclosure (different field, not automatically an extra visible label):** “VOLVEMOS A LA PARTIDA REAL: 17.Kf1”.
- **Candidate secondary caption, NOT canonical:** «Restauramos la posición real tras 17.Kf1».
- **Presentation / ordering rule:** Keep hypothetical warning ON while any ALT frame persists. Restore exact MAIN + V-P1 completely FIRST; only then retire hypothetical warning and present the OVER1 return banner. No chess trajectory.
- **Candidate asset roles and clearance:** Original transition art and mandatory label typography; no sound dependency. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-04, VN-02; future contiguous frame/branch/label timeline proving atomic order. Status **NOT_RUN**.

### T08 — REAL_MOVE

- **Source identity (CASE):** branch `MAIN → MAIN`, state `V-P1 → V-EV1`; Be6, g4→e6.
- **Audience-visible state:** V-P1 → V-EV1 on MAIN. **Internal-only distinction:** Replays SAME MOVE-MAIN-34 as T02.
- **Required OVER1 display_label:** **PARTIDA REAL**. **CASE disclosure (different field, not automatically an extra visible label):** “PARTIDA REAL”.
- **Candidate secondary caption, NOT canonical:** «De vuelta a la partida: 17...Be6».
- **Presentation / ordering rule:** Repeat black bishop g4→e6, 17...Be6, with all squares and factual band visible; never count a second underlying historical move.
- **Candidate asset roles and clearance:** Reuse the same proposed clean-room bishop/board geometry; same rights still pending. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-05, VN-10; future shared identity and visible board trace. Status **NOT_RUN**.

### T09 — REAL_MOVE

- **Source identity (CASE):** branch `MAIN → MAIN`, state `V-EV1 → V-REAL`; Bxb6, c5→b6; captures black Q on b6.
- **Audience-visible state:** V-EV1 → V-REAL on MAIN. **Internal-only distinction:** Replays SAME MOVE-MAIN-35 as T03.
- **Required OVER1 display_label:** **PARTIDA REAL**. **CASE disclosure (different field, not automatically an extra visible label):** “PARTIDA REAL”.
- **Candidate secondary caption, NOT canonical:** «Después, 18.Bxb6: la dama negra es capturada».
- **Presentation / ordering rule:** Repeat white bishop c5→b6 taking black queen; no duplicate independent source or second historical capture.
- **Candidate asset roles and clearance:** Same proposed board/piece/capture graphic roles and R6 requirements. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-05, VN-10; future source-move identity and capture visualization. Status **NOT_RUN**.

### T10 — ELLIPSIS

- **Source identity (CASE):** branch `MAIN → MAIN`, state `V-REAL → V-PRE-EV2`; No move.
- **Audience-visible state:** Hold V-REAL only; no new audience-visible board. **Internal-only distinction:** MAIN internally advances to V-PRE-EV2, ply49, TECHNICAL_ONLY.
- **Required OVER1 display_label:** **SE OMITEN JUGADAS REALES**. **CASE disclosure (different field, not automatically an extra visible label):** “SALTO TEMPORAL: SE OMITEN JUGADAS DE LA PARTIDA REAL”.
- **Candidate secondary caption, NOT canonical:** «Salto editorial: 14 medias jugadas reales no mostradas (36–49)».
- **Presentation / ordering rule:** Show explicit omitted plies 36–49 inclusive (14 half-moves), using non-board gap markers. NEVER expose V-PRE-EV2 or synthesize missing move pictures.
- **Candidate asset roles and clearance:** Original timeline gap typography and static V-REAL board; no borrowed scoresheet. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-06, VN-07; future zero-frame V-PRE-EV2 and text-disclosure evidence. Status **NOT_RUN**.

### T11 — REAL_MOVE

- **Source identity (CASE):** branch `MAIN → MAIN`, state `V-PRE-EV2 → V-EV2`; Nxd1, c3→d1; captures white R on d1.
- **Audience-visible state:** Hard cut exclusively to VISUAL after-state V-EV2. **Internal-only distinction:** Semantic move is V-PRE-EV2 → V-EV2, MAIN, 25...Nxd1 (knight c3→d1 takes white rook).
- **Required OVER1 display_label:** **PARTIDA REAL**. **CASE disclosure (different field, not automatically an extra visible label):** “PARTIDA REAL — LA PARTIDA CONTINÚA”.
- **Candidate secondary caption, NOT canonical:** «25...Nxd1 · el caballo negro captura una torre blanca».
- **Presentation / ordering rule:** Use VIS-TECH-01 ALT-A candidate: static annotation on d1 after the cut. NEVER animate from V-REAL to V-EV2 and NEVER reveal V-PRE-EV2 to explain the knight origin.
- **Candidate asset roles and clearance:** New clean-room after-position still and static capture callout, not yet produced or licensed; typography pending. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-07, VN-08, VN-10; future after-state-only footage and verified zero technical frames. Status **NOT_RUN**.

### T12 — SEQUENCE_END

- **Source identity (CASE):** branch `MAIN → MAIN`, state `V-EV2 → V-EV2`; No move.
- **Audience-visible state:** V-EV2 remains visible; optional original end-card must not hide exact truth band. **Internal-only distinction:** No chess move, editorial closure at ply50; historic game continues.
- **Required OVER1 display_label:** **CIERRE EDITORIAL · LA PARTIDA CONTINÚA**. **CASE disclosure (different field, not automatically an extra visible label):** “CIERRE EDITORIAL: NO ES EL FINAL DE LA PARTIDA”.
- **Candidate secondary caption, NOT canonical:** «Aquí termina esta secuencia, no la partida».
- **Presentation / ordering rule:** Always retain 'CIERRE EDITORIAL · LA PARTIDA CONTINÚA'; no mate, score, result, winner animation or game-over implication.
- **Candidate asset roles and clearance:** Original ending graphic/copy and font pending; CTA is future concept only. Source CASE references `ASSET-SUPPLIED-POSITION-DATA`, which is documentary position data, NOT proof of commercial rights for the proposed output artwork. See asset ledger below.
- **What future review would need:** VN-09, VN-11, VN-12; future silent nonterminal reading and R6 asset record. Status **NOT_RUN**.

## Cross-cutting chronological constraints

**T05 → T06 → T07 order:** activate OVER1 hypothetical warning before entering an unplayed frame; keep it across all hypothetical frames and any return intermediary; restore **exact MAIN + V-P1** before first frame where hypothetical warning is removed; only then show the return-to-real label. This temporal rule is stricter than simply listing a single T07 label. A future renderer must not infer correct event ordering from static per-shot columns alone.

**T10 → T11 visible/internal split:** T10 audience view remains **V-REAL** while internal semantic endpoint is `V-PRE-EV2` TECHNICAL_ONLY after exactly 14 omitted plies (36–49 inclusive). T11 uses ALT-A **after-position-only VISUAL V-EV2**, with a static d1 capture annotation. No visible board `V-PRE-EV2` and no fictitious knight movement between T10's V-REAL and V-EV2.

**Repeated events:** T02=T08 is the **same** move identity 17...Be6, and T03=T09 is the **same** move identity 18.Bxb6; re-showing those clips is not a second played historical move. T04 and T07 are EDITORIAL transitions, not inverted SAN or move records.

**Ending:** T12 closes our **sequence** at V-EV2/ply50; do not portray the candidate secondary terminal at ply82 as verified or reached in this story. No winner/checkmate/status proof may be inferred from static staging.

## Asset and usage boundary ledger (proposal, nothing approved)

| Future asset role | Affected scenes | Current provenance / allowed assumption | What is missing before use |
|---|---|---|---|
| Source-declared position data `ASSET-SUPPLIED-POSITION-DATA` | T01–T12 | Referenced in CASE, documentary candidate only | Qualified chess/history source evaluation; position data itself does not license graphics |
| 8×8 board + piece geometry | All board-bearing scenes | Proposed original clean-room vector and placement sources in prior R6 baseline, not implemented/cleared | Selected source/binary identity, derivation proof, original-rights review, correct state binding |
| Type family and exact glyph resources | All required labels, captions, T10 count | Noto Sans named only as a candidate family | Exact file/version/hash, licence and redistribution mode, legibility and independent R6 assessment |
| Branch and factuality bands / borders | T01–T12 (especially T05–T07) | New original graphic design intention | Concrete artifact identities and mandatory-word visibility evidence; hue alone insufficient |
| Motion, rewind, gap and after-capture accents | T02–T04; T06–T11 | Future compositing/animation plan only | Final original source/output bytes, provenance, rendering integrity; no moving board transition over gaps |
| Background, atmosphere, 2.5D lighting and textures | Optional all scenes | Original-only concept, no stock/period footage assumed | Actual assets and rights review; must never suggest authentic archival footage |
| Voice, TTS, music and SFX | **Not used** in *proposed* silent-first option | No audio asset produced; 'not used' is NOT 'cleared' | Separate exact licences/provenance and new review if a voiced/audio derivative is proposed |
| Primary periodical scans, player portraits, brands, scoresheets | **Excluded** from this plan | No acquisition or reproduction grant represented | Specific permissions if later included; otherwise retain exclusion |
| Short-form end CTA/newsletter promotion | Conceptual T12 only | Optional copy, no signup tool or public delivery | Final factual copy/consent/compliance, platform clearance and ALL gates |

The rights ledger is **role-based**, not an invented claim of actual files or permissions. Rights `R6=PENDING`. This handoff does not choose or ship any graphic/font/audio asset. It cannot replace the fourteen role identities tracked in the separate R6 register.

## Handoff evidence contract — future only, no new formal schema

A later *authorized* producer would have to preserve, for **each** event: `Txx`, immutable source pointers, CASE fields including `disclosure`, OVER1 `display_label`, secondary caption, internal semantic board+branch, **visible VISUAL state only**, visibility/warning lifecycle and any asset outputs identified by exact bytes/license/use. Documentary drafts need not invent those later IDs today. Do not create a runtime adapter with these field names on the basis of this text; v0.2 is a closed schema with separate compatibility requirements.

The existing `VN-01..VN-13` questions remain **NOT_RUN**, not a passed inspection. A future reviewer should use their evidence requirements, with special emphasis on VN-03/VN-04 (hypothetical order), VN-06/VN-07/VN-08 (ellipsis and technical-only visibility), VN-09 (nonterminal end), VN-10 (mobile legibility) and VN-11 (rights). Human review requires any applicable consent and qualified stimulus first.

## Non-negotiable stop conditions

E5B4D = `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL`; **NO-GO under fault model M**. Policy B means every relevant process has terminated **and termination was confirmed strictly before 120 seconds**, independent lifetime stdout and stderr caps each **1,048,576 bytes emitted AND accepted**. R6 `PENDING`; IVV_GLOBAL and CASE_APPROVAL `NOT APPROVED`; 66 semantic negatives, 77 router negatives and independent chess oracle `NOT_RUN`. F5 closed documentary-only. No permission for execution, JSON Schema validation, tests, engines, Actions, render, media display, release, merge, use of uncleared third-party IP or changes to `main`/PR #12.

**Next useful check:** a distinct documentary reviewer may compare this table's literals and state staging against CASE/OVER1 and corrected storyboard, then report concrete ambiguities only. Such review cannot certify an actual video or lift any gate.
