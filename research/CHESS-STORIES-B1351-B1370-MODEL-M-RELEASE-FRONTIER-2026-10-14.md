# Chess Stories — B1351–B1370 | Invariant NO-GO and release evidence frontier

**Corte 2026-10-14.** Los veinte bloques de esta tanda son de carácter documental; no se han ejecutado procesos relevantes del piloto, pruebas técnicas, motor, generación audiovisual ni investigaciones con participantes.

## EE — The model M impossibility frontier and frozen semantics

### B1351 — The strict inequality cannot be changed by rounding

**Hecho o inferencia delimitada:** Policy B requires termination and confirmation before 120 s, not at 120s.

**Evidencia que faltaría:** Proof includes clock semantics and satisfies strictly t<120 for all relevant processes.

**Rechazo/inconclusión:** Reject any claim that 120.000s is an allowed edge case.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1352 — A wrapper is not the whole process family

**Hecho o inferencia delimitada:** An orchestrator might finish while its children survive under failure model M.

**Evidencia que faltaría:** Qualified process inventory includes descendants and independently confirms each termination.

**Rechazo/inconclusión:** No PASS from wrapper exit without descendant closure.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1353 — Captured stdout is not all emitted stdout

**Hecho o inferencia delimitada:** The collector can truncate bytes without preventing program from emitting more.

**Evidencia que faltaría:** Separate counts of emitted and accepted stdout across lifetime.

**Rechazo/inconclusión:** Do not measure only returned response body as emitted total.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1354 — stderr bound does not share stdout spare budget

**Hecho o inferencia delimitada:** Separate 1,048,576-byte caps are required for each output channel.

**Evidencia que faltaría:** Show individual lifetime emitted/accepted tallies for both streams.

**Rechazo/inconclusión:** Reject combined-cap arithmetic or overflow offset.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1355 — A successful nominal run does not refute NO-GO under M

**Hecho o inferencia delimitada:** E5B4D formal conclusion concerns strict guarantees under a stated failure model, not an average runtime.

**Evidencia que faltaría:** A proposed revision has formal proof compatible with unchanged model and all invariants.

**Rechazo/inconclusión:** No execution permission from fast nominal benchmark.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1356 — Static source check is evidence of text only

**Hecho o inferencia delimitada:** Git readback can establish file identity and consistency; it cannot measure processes or frame truth.

**Evidencia que faltaría:** Keep SOURCE_VALIDATED separate from RUNTIME_QUALIFIED.

**Rechazo/inconclusión:** Reject any inference that repository reads satisfy Policy B.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1357 — Negative specification count is not passed test count

**Hecho o inferencia delimitada:** 77 router cases and 66 semantic cases are written, not executed.

**Evidencia que faltaría:** Dashboard maintains separate specified_count and executed_count.

**Rechazo/inconclusión:** No metric '143 tests passed' without actual run reports.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1358 — No unapproved Actions via harmless looking commit

**Hecho o inferencia delimitada:** A repository source edit may trigger workflows under some configurations; no project Actions are authorized.

**Evidencia que faltaría:** Perform only permitted source-only GitHub actions, avoid triggering execution paths.

**Rechazo/inconclusión:** Do not enact workflow_dispatch or merge under NO-GO.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1359 — Fail-closed release flags remain unaltered

**Hecho o inferencia delimitada:** PR #11 release permit false and PR #1 frozen gates remain controlling.

**Evidencia que faltaría:** Inspect exact flags before any contemplated media publication.

**Rechazo/inconclusión:** Reject a source-only document that claims it overrode release=false.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1360 — Human autonomy does not solve physics of monitoring

**Hecho o inferencia delimitada:** Delegated chess decisions permit research, not false process guarantees or forged rights.

**Evidencia que faltaría:** Maintain M incompatibility until explicit formally adequate mechanism exists.

**Rechazo/inconclusión:** No proxy decision claiming user delegation equals technical PASS.

**Prioridad:** P0. **Fuentes:** `POLICY`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## EF — Episode release dossier, gaps and marginal research priority

### B1361 — Historical result UNKNOWN is a visible release risk

**Hecho o inferencia delimitada:** Case `historical_end.result` is UNKNOWN while secondary score ending is Rc2#.

**Evidencia que faltaría:** Future editorial dossier either qualifies ending truth with direct sources or omits it.

**Rechazo/inconclusión:** No confident original terminal-mechanism headline on current record.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1362 — The absent complete source PGN blocks independent audit

**Hecho o inferencia delimitada:** Case hashes for PGN and R2 artifact are declared-not-checked; originals missing.

**Evidencia que faltaría:** Obtain legally available exact bytes and record hash verification before claiming audited 82 moves.

**Rechazo/inconclusión:** Do not derive FULL_PGN_VERIFIED from checkpoint excerpts.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1363 — Unplayed Qd8 must remain explicit in any marketing asset

**Hecho o inferencia delimitada:** A faithful master can still spawn a misleading thumbnail or subject line.

**Evidencia que faltaría:** A claim-to-asset review treats every derivative as separate output.

**Rechazo/inconclusión:** Reject promotional piece implying Qd8 happened.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1364 — ALT-A preserves technical-state invisibility by design

**Hecho o inferencia delimitada:** V-PRE-EV2 is technical only; hard cut moves to V-EV2 after 14-ply omission.

**Evidencia que faltaría:** Qualified media QA shows no source board or false Nxd1 tween.

**Rechazo/inconclusión:** Do not approve from static JSON alone.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1365 — R6 must be checked for the actual asset binaries

**Hecho o inferencia delimitada:** A prototype piece glyph or font name is not legal clearance of final distributed file.

**Evidencia que faltaría:** Ledger records binary, author, terms, usage, territory and approval.

**Rechazo/inconclusión:** No inherited rights PASS from source declaration.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1366 — C2PA does not certify game truth

**Hecho o inferencia delimitada:** A signed media manifest can show provenance but cannot itself judge factual accuracy.

**Evidencia que faltaría:** Keep provenance and historical claim review nontransitive.

**Rechazo/inconclusión:** No history PASS just because C2PA is valid.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1367 — Distribution rights and platform eligibility differ

**Hecho o inferencia delimitada:** Licensed chess content might still violate YouTube repetitive or reused content rules at channel level.

**Evidencia que faltaría:** Originality review tests episode-specific analysis and broader catalogue.

**Rechazo/inconclusión:** No YPP approval predicted from license status.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1368 — Human IVV cannot be simulated with model answers

**Hecho o inferencia delimitada:** A model that built the truth questionnaire knows its answers and is not a blind participant.

**Evidencia que faltaría:** Only real, qualified participants with defined stimuli count toward IVV.

**Rechazo/inconclusión:** No virtual panel of agents presented as human empirical evidence.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1369 — Main and publication each need an independently authorized action

**Hecho o inferencia delimitada:** Draft PR #12 holds research and no part of current context authorizes merging or publishing.

**Evidencia que faltaría:** Formal release file contains competent gate approvals and explicit publish permission.

**Rechazo/inconclusión:** Do not merge or upload because B1370 has been reached.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1370 — Next investigation should purchase decision information, not count

**Hecho o inferencia delimitada:** After B1370 the missing classes are external witness access, original bytes, formal M solution, rights and human media QC.

**Evidencia que faltaría:** Rank future action by probability of eliminating uncertainty and actual admissibility, not title novelty.

**Rechazo/inconclusión:** No '1370 verified checks' framing for research entries.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `WINTER`, `C2PA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias

- `POLICY`: Política B estricta y E5B4D NO-GO bajo modelo de fallos M, congelados por decisión del usuario.
- `CASE`: GitHub PR #1, case v0.2, R2 artifact hashes declared-not-checked and result UNKNOWN.
- `OVERLAY`: GitHub PR #11 truth overlays, release permit=false.
- `WINTER`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `C2PA`: https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html

**Invariantes sin excepción:** todos los procesos relevantes terminados y terminación CONFIRMADA ESTRICTAMENTE ANTES DE 120 SEGUNDOS; stdout y stderr independientes, cada flujo ≤1.048.576 bytes EMITIDOS Y ACEPTADOS durante su vida. E5B4D NO-GO bajo M; R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED. Original 1956 sin autenticar; oráculo NOT_RUN; sin proyecto ejecutado, test, render, Actions, merge main o publicación.
