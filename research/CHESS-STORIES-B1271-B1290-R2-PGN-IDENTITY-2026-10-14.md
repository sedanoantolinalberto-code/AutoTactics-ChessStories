# Chess Stories — Investigación B1271–B1290 | Auditoría de la evidencia R2 y PGN

**Corte 2026-10-14.** Inspección directa del contrato fuente PR #1 (no del PGN original ni del artifact R2). Cada afirmación está marcada como declaración de expediente o inferencia y con criterio de rechazo. No se ha ejecutado ningún test del proyecto.

## DW — R2 artifact integrity: declared hash is not verified content

### B1271 — Declared R2 replay digest without replay bytes

**Observado o inferido:** EVID-R2-RESULTS contains SHA-256 bea694... with check_status DECLARED_NOT_CHECKED.

**Evidencia necesaria:** Future manifest identifies exact R2 file bytes, digest and who obtained them.

**Rechazo/limitación:** Do not mark R2_BYTESTREAM_VERIFIED from the JSON declaration alone.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1272 — PGN digest is a locator only until bytes examined

**Observado o inferido:** EVID-R2-PGN-DECLARATION names SHA-256 42f2d0... but text and encoding are absent.

**Evidencia necesaria:** A future read captures complete PGN raw bytes and independently computes identity.

**Rechazo/limitación:** Never equate literal SHA string with completed hash verification.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1273 — Checkpoints are excerpts rather than complete replay

**Observado o inferido:** The case provides plies 33,34,35,49,50,51,82 but not intervening full replay-results.

**Evidencia necesaria:** A future verifier receives full output and tests byte scope and cardinality.

**Rechazo/limitación:** Do not represent seven checkpoints as a complete 82-row original audit.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1274 — Same-library reproducibility is a reported state

**Observado o inferido:** R2 reports chess.js@1.4.0 replay 82/82 in context, no run was executed in this task.

**Evidencia necesaria:** A distinct qualified rules oracle must report its own tested scope.

**Rechazo/limitación:** Do not label same-library reported agreement INDEPENDENT_LEGALITY_PASS.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1275 — Git blob of case differs from PGN digest scope

**Observado o inferido:** PR #1 Git blob 3514... identifies fixture bytes, not secondary source PGN bytes.

**Evidencia necesaria:** Provenance manifest records SHA identity of each distinct object and method.

**Rechazo/limitación:** Reject equivalence between repository object ID and source PGN SHA256.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1276 — Hashable serialization must be pinned before comparison

**Observado o inferido:** A JSON serialization can change byte order/spacing while preserving structured data.

**Evidencia necesaria:** Freeze encoding, newline and byte scope for each future digest check.

**Rechazo/limitación:** Reject claims of mismatched content solely on differently serialized JSON.

**Prioridad:** P1. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1277 — Proof of citation requires excerpt plus source identity

**Observado o inferido:** EVID-LEDGER-R2 is referenced but underlying ledger unavailable, a reference is not inspection.

**Evidencia necesaria:** Future ledger must be independently located and bounded by object/section IDs.

**Rechazo/limitación:** No source_access VERIFIED solely from link in evidence array.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1278 — Unknown byte source cannot be reconstructed from its SHA

**Observado o inferido:** One cannot regenerate an 82-ply PGN from the digest, nor verify its moves without contents.

**Evidencia necesaria:** Mark complete original text UNAVAILABLE and show dependency explicitly.

**Rechazo/limitación:** No fabricated PGN file matching declared digest by replacing from internet.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1279 — Hash algorithm name not a signing authority

**Observado o inferido:** SHA-256 identifies bytes if computed but supplies neither publisher attribution nor archival custody.

**Evidencia necesaria:** Store hash check, witness authentication and rights authority separately.

**Rechazo/limitación:** No signature/authenticity inferred from cryptographic digest.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1280 — Fixture change invalidates implicit source comparison

**Observado o inferido:** A changed case branch could retain old R2 digest metadata and alter move claims.

**Evidencia necesaria:** Future change log flags revalidation needs of all dependent source fields.

**Rechazo/limitación:** Reject treating a stale pinned digest as evidence of new fixture.

**Prioridad:** P0. **Referencias:** `CASE`, `RFC8785`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## DX — Metadata and PGN result uncertainty, strictly source-bound

### B1281 — R2 Result field has explicit UNKNOWN

**Observado o inferido:** The case `historical_end.result` equals UNKNOWN, not an observed PGN Seven Tag Roster.

**Evidencia necesaria:** Keep case result UNKNOWN until actual complete PGN or competent witness inspected.

**Rechazo/limitación:** Do not silently fill result=0-1 in fixture based on common scorebooks.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1282 — PGN termination marker is not terminal mechanism

**Observado o inferido:** PGN result markers encode who won or unknown; they do not distinguish resignation from mate in history.

**Evidencia necesaria:** Store terminal_marker, result and manner of termination as separate claims.

**Rechazo/limitación:** Do not derive an actual played mate from a black win marker.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1283 — Ply82 Rc2# may be editorially appended

**Observado o inferido:** The secondary candidate ends `41...Rc2#`; manuscript last-played is still disputed.

**Evidencia necesaria:** Use printed_terminal, candidate_terminal and original_last_played distinct.

**Rechazo/limitación:** Do not assert literal original player scoresheet records Rc2#.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1284 — `*` in PGN has defined unknown status

**Observado o inferido:** PGN defines `*` as game in progress or result otherwise unavailable, not necessarily draw.

**Evidencia necesaria:** If PGN lacks result, express result_unknown not draw.

**Rechazo/limitación:** Reject mapping missing tag to 1/2-1/2.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1285 — Event and Site tags are not archival provenance

**Observado o inferido:** PGN metadata can identify a tournament and city, but source editor may have supplied them later.

**Evidencia necesaria:** Track origin of Event, Site, Date independent from game move text.

**Rechazo/limitación:** Do not call metadata original 1956 testimony without witness.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1286 — White/Black names need no identity invention

**Observado o inferido:** The case attributes Donald Byrne white and Bobby Fischer black in New York 1956.

**Evidencia necesaria:** Maintain case-declared identity until independent archive support.

**Rechazo/limitación:** Avoid expanding round/date/venue beyond documentary data.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1287 — F03 is specific to unsupported uniqueness on 24...Ra4

**Observado o inferido:** The case explicitly forbids unsupported uniqueness for move 24...Ra4.

**Evidencia necesaria:** Search downstream scripts for unique-best qualifiers tied to that move.

**Rechazo/limitación:** Do not carry a blanket PASS from general tactic accuracy to F03.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1288 — Variation RAV cannot override main score

**Observado o inferido:** The chess story teaches unplayed Qd8; PGN RAV syntax distinguishes alternative branches.

**Evidencia necesaria:** Future export contains Qd8 only in clearly labelled variation, never mainline.

**Rechazo/limitación:** Reject move count if variation shifts subsequent plies.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1289 — SAN suffix `#` may encode a published notation claim

**Observado o inferido:** Published score writes 41...Rc2#; notation suffix alone doesn't prove it was played.

**Evidencia necesaria:** Separately prove SAN legality, press publication and player-record terminal.

**Rechazo/limitación:** Reject equating notation glyph with observed over-the-board finish.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1290 — Question-mark placeholders must not become facts

**Observado o inferido:** When full PGN uninspected, unknown round, result, or exact date remain unknown.

**Evidencia necesaria:** Future metadata export uses explicit unknown or omits optional tags.

**Rechazo/limitación:** Reject fabricated STR values for attractive story framing.

**Prioridad:** P0. **Referencias:** `CASE`, `PGN`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes

- `CASE`: GitHub PR #1 `cases/ED-CASE-REAL-01.v0.2.json`, Git blob `3514f19ac355763a5b4c61d5c573df090b0eccc1`; se inspeccionó el JSON, no artefactos que referencia.
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `WINTER`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `RFC8785`: https://www.rfc-editor.org/rfc/rfc8785.html
- `PROV`: https://www.w3.org/TR/prov-o/

**Gates:** E5B4D NO-GO bajo M; Política B todos procesos relevantes terminados Y terminación confirmada estrictamente antes de 120s, límites independientes stdout/stderr 1.048.576 bytes emitidos Y aceptados toda la vida. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED. Sin ejecución, oráculo, render, Actions o publicación.
