# Chess Stories — B1331–B1350 | Evidence admission and human IVV

**Fecha:** 2026-10-14. No se han realizado nuevos estudios, tests o acceso primario. El documento modela observaciones futuras y razones de inconclusión. `RESEARCHED_DOCUMENTARY_ONLY` en cada bloque.

## EC — Documentary admissions: scope, identity and audit trail

### B1331 — R2 witness pointer is not a recoverable object

**Dato o inferencia:** The ledger source ID is in the case, but its file bytes are not available for inspection.

**Evidencia requerida:** Record source location and obtain the exact ledger object independently.

**Rechazo/inconclusión:** Keep NO_SOURCE_FILE rather than substituting a new hand-made ledger.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1332 — Hashes declared by source are not computed evidence

**Dato o inferencia:** A SHA256 string in user-supplied JSON can be valid syntax yet unconfirmed.

**Evidencia requerida:** Verifier future report includes read length, digest and independent output identity.

**Rechazo/inconclusión:** Reject status CHECKED if the reader never received the file.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1333 — A technical test must say what it did not test

**Dato o inferencia:** Future FEN equality could prove state consistency but not magazine text or score ending.

**Evidencia requerida:** Output report includes explicit limitations of each check.

**Rechazo/inconclusión:** No aggregate PASS omitting historical/rights uncertainty.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1334 — Source authenticity and source accuracy are separate

**Dato o inferencia:** Even genuine Chess Review pages may contain Kmoch editorial errors.

**Evidencia requerida:** Store `authentic_publication` and `claim_historically_true` distinctly.

**Rechazo/inconclusión:** Reject blanket acceptance of every magazine comment after authenticating pages.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1335 — Source count needs independence weights

**Dato o inferencia:** Secondary databases may copy Winter or same PGN, producing superficially plural citations.

**Evidencia requerida:** Identify citation dependencies before counting independent corroborations.

**Rechazo/inconclusión:** No majority vote over duplicated lineage as independent evidence.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1336 — Spec identifiers should not become evidence identifiers

**Dato o inferencia:** IR negative scenarios named in PR #12 describe possible checks; they are not run reports.

**Evidencia requerida:** Separate `requirement_id`, `test_case_id`, `run_evidence_id`, `review_id`.

**Rechazo/inconclusión:** Reject attaching NOT_RUN scenario as witness proof.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1337 — Historical result can be UNKNOWN without losing real candidate moves

**Dato o inferencia:** The fixture explicitly marks historical_end.result UNKNOWN while listing 17...Be6 etc as candidates.

**Evidencia requerida:** Local claim statuses remain specific rather than global rejected.

**Rechazo/inconclusión:** Do not fill or delete candidate move data merely because result is unknown.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1338 — The exact transcript must permit disagreement

**Dato o inferencia:** Two blind readers can disagree about token while every downstream renderer prefers clean SAN.

**Evidencia requerida:** Preserve disagreement, unreadable region and adjudication status as first-class.

**Rechazo/inconclusión:** Reject silent replacement of raw reading with preferred move.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1339 — Evidence date is not game date

**Dato o inferencia:** A 2026 hash/signature demonstrates at most present bytes and process, not 1956 events.

**Evidencia requerida:** Store observation timestamp separately from source publication/game event.

**Rechazo/inconclusión:** No 1956 timestamp fabricated from 2026 cryptographic operation.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1340 — Signed approval requires scope and qualification

**Dato o inferencia:** A source reviewer can attest to observed page, not legal chess engine or commercial rights.

**Evidencia requerida:** Separate assessor competencies and signoffs by claim and asset.

**Rechazo/inconclusión:** Reject global APPROVED from an unrelated PR review.

**Prioridad:** P0. **Fuentes:** `CASE`, `PROV`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## ED — Study quality: credible perception of the real-versus-unplayed line

### B1341 — Qd8 factuality gets an outcome separate from move recall

**Dato o inferencia:** Knowing d8 appears does not mean the viewer knows it was never played.

**Evidencia requerida:** Neutral recall asks whether it was played and confidence in answer.

**Rechazo/inconclusión:** Reject 'recognized Qd8' as equivalent to recognizing UNPLAYED.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1342 — Recall of Bxb6 need not imply comprehension of sacrifice

**Dato o inferencia:** Viewers may notice queen captured but not understand Be6 threatened c4.

**Evidencia requerida:** Use separate factual and tactical-understanding items.

**Rechazo/inconclusión:** Do not summarize all tactics with one multiple-choice question.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1343 — Movement between 45s and 60s arms changes exposure order

**Dato o inferencia:** Repeating the same game can improve second viewing without any edit improvement.

**Evidencia requerida:** Protocol controls counterbalancing or between-subject allocation.

**Rechazo/inconclusión:** No causal claim for edit superiority under single fixed order.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1344 — A cut that is semantically faithful may still confuse the viewer

**Dato o inferencia:** ALT-A holds V-REAL then cuts to V-EV2 under elision; viewers may infer direct capture.

**Evidencia requerida:** Question asks whether missing moves occurred between displayed boards.

**Rechazo/inconclusión:** No media IVV PASS from JSON invariants alone.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1345 — Questions about unseen internal c3 cannot be scored as failure

**Dato o inferencia:** T11 source is TECHNICAL_ONLY and ALT-A does not animate from c3.

**Evidencia requerida:** Evaluate captured piece and result if origin never shown.

**Rechazo/inconclusión:** Reject rubric requiring hidden technical movement recognition.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1346 — Observation with subtitles and muted audio are not equivalent

**Dato o inferencia:** Captions may be disabled and on-platform UI moves them.

**Evidencia requerida:** Protocol defines playback mode and presentation explicitly.

**Rechazo/inconclusión:** No transfer of captions-on PASS to silent captions-off users.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1347 — A visual safety gate precedes participants

**Dato o inferencia:** Strobing or unsafe effects are not validated by comprehension questionnaires.

**Evidencia requerida:** Technical safety QC on actual media before any participant exposure.

**Rechazo/inconclusión:** Reject recruitment into uninspected flash-heavy prototype.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1348 — Nonresponse is different from incorrect answer

**Dato o inferencia:** A viewer who skipped early cannot answer about end label reliably.

**Evidencia requerida:** Define exposure sufficiency and missing-data handling before collecting.

**Rechazo/inconclusión:** No post hoc removal of low-comprehension viewers to inflate PASS.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1349 — A confidence rating is not evidence of historical truth

**Dato o inferencia:** Participants can confidently repeat an editorial error if a cue is wrong.

**Evidencia requerida:** Grade against independently verified source and event contract.

**Rechazo/inconclusión:** Do not accept confident consensus as chess or history oracle.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1350 — Global IVV requires more than one favorable question

**Dato o inferencia:** Four accurate answers on queen capture do not cover T07 return, T10 gap or T12 close.

**Evidencia requerida:** Criterion maps coverage to all protected failure modes.

**Rechazo/inconclusión:** No IVV_GLOBAL PASS via narrow subset of questionnaire.

**Prioridad:** P0. **Fuentes:** `CASE`, `IVV`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias

- `CASE`: PR #1, exact v0.2 contract with EVID-R2 metadata check_status DECLARED_NOT_CHECKED and historical_end.result UNKNOWN.
- `PROV`: https://www.w3.org/TR/prov-o/
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `IVV`: PR #6 draft human perception protocol, not approved/executed.
- `WCAG`: https://www.w3.org/TR/WCAG22/

**No-go:** E5B4D NO-GO bajo M; todos los procesos relevantes terminados Y terminación confirmada ESTRICTAMENTE antes de 120s; stdout/stderr independientes cada uno ≤1.048.576 bytes emitidos Y aceptados durante toda la vida; R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; sin tests, motor, render, Actions, merge o publicación.
