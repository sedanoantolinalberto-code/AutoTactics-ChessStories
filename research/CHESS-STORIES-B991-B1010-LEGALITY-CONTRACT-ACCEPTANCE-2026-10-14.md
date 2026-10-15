# Chess Stories — B991–B1010 | Legalidad e integración EP01

**Fecha:** 2026-10-14. Especificación documental de aceptación futura, SIN motor, ejecución ni tests. Cada estado positivo sigue siendo hipotético hasta evidence qualified. Source labels se refieren a PRs existentes.

## CU — Dictamen de legalidad independiente del relato

### B991 — Ancla V-P1 requiere FEN íntegro

**Base:** El fixture declara 17.Kf1, ply33, bando negro y derechos FEN.

**Aceptación futura:** Comparación exacta de los seis campos desde testimonio convertido y replay.

**Rechazo/inconclusión:** Aprobar ocupación idéntica con turno/derechos distintos.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B992 — Be6 requiere reconstrucción de captura/no captura

**Base:** T02 declara B negro g4→e6 sin captura.

**Aceptación futura:** Motor legal independiente confirma trayectoria y seguridad de rey para esa posición.

**Rechazo/inconclusión:** Aceptar solo por existencia de alfil en destino.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B993 — Bxb6 requiere víctima de tipo Q

**Base:** T03 declara alfil blanco c5→b6 y captura de dama negra.

**Aceptación futura:** Informe de transición cita pieza saliente, destino, víctima y estado legal.

**Rechazo/inconclusión:** Tratar desaparición gráfica de dama como prueba de captura.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B994 — Qd8 se evalúa sin atribuirla a la historia

**Base:** T06 declara jugada b6→d8 de dama negra en ALT_QD8.

**Aceptación futura:** Resultado separado hypothesis_legal, sin cambio de played=false.

**Rechazo/inconclusión:** Aprobar rama histórica por producir FEN plausible.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B995 — Rebobinado y retorno son operaciones editoriales

**Base:** T04 y T07 restauran posiciones sin ejecutar jugadas PGN.

**Aceptación futura:** Oráculo contabiliza cero movimientos por ambas operaciones.

**Rechazo/inconclusión:** Sumar plies por REWIND o RETURN_TO_REAL.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B996 — Elipsis necesita catorce transiciones certificables

**Base:** T10 salta plies 36–49 y llega a V-PRE-EV2 técnico.

**Aceptación futura:** Si se verifica en futuro, informe legal incluye cada token y FEN intermedio.

**Rechazo/inconclusión:** Inferir legalidad de 14 plies desde FEN inicial/final solamente.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B997 — Nxd1 requiere caballo y torre específicos

**Base:** T11 declara N negro c3→d1 capturando R blanca.

**Aceptación futura:** Reporte de legalidad separa pieza, victim square y rey seguro.

**Rechazo/inconclusión:** Aprobar por fotografía con caballo sobre d1.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B998 — Rook h1 conservada tras captura d1

**Base:** La posición V-EV2 declara otra torre blanca en h1.

**Aceptación futura:** Comparación del estado posterior incluye inventario completo de piezas.

**Rechazo/inconclusión:** Mostrar captura de todas las torres o borrar h1 por error.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B999 — Reglas 2023 y fuente histórica se registran como dos marcos

**Base:** Leyes FIDE modernas sirven para comprobar reconstrucción estándar, no autenticar arbitraje de 1956.

**Aceptación futura:** Informe etiqueta ruleset y conclusión histórica por canales separados.

**Rechazo/inconclusión:** Inferir validez de anotación original por legalidad moderna.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1000 — Expected legal result requiere fuente independiente

**Base:** Reproducir SAN copiado contra FEN copiado del mismo fixture produce validación circular.

**Aceptación futura:** Informe con oráculo calificado y expected de fuente cotejada.

**Rechazo/inconclusión:** Marcar PASS por igualdad entre campos duplicados del mismo JSON.

**Prioridad:** P0. **Fuentes:** `FIDE`, `CASE`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## CV — Contratos de eventos y fallos de integración

### B1001 — T01 no aumenta el contador del PGN

**Base:** Inicializar V-P1 en SET_POSITION es puesta en escena.

**Aceptación futura:** Ledger de historic_ply sin avance cuando cambia solo presentación.

**Rechazo/inconclusión:** Agregar nueva jugada 17.Kf1 al inicializador sin procedencia.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1002 — T02/T08 tienen identidad histórica compartida

**Base:** Los dos eventos representan la misma Be6 en proyecciones distintas.

**Aceptación futura:** Un historical_move_id con dos display_event_id compatibles.

**Rechazo/inconclusión:** Contar dos Be6 nuevas como plies separados.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1003 — T03/T09 no duplican la dama capturada

**Base:** La segunda captura de pantalla es replay de Bxb6.

**Aceptación futura:** Contador material compartido y sin segunda víctima nueva.

**Rechazo/inconclusión:** Sustraer dos damas negras en recuento global.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1004 — T04 exige kind REWIND sin mover tablero históricamente

**Base:** La transición V-REAL→V-P1 es editorial.

**Aceptación futura:** Un tipo de evento que rechaza san/moving_piece como datos de nueva jugada.

**Rechazo/inconclusión:** Permitir REWIND como REAL_MOVE de signo inverso.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1005 — T05 cambia branch con FEN invariado

**Base:** La entrada MAIN→ALT_QD8 no implica ocupación nueva.

**Aceptación futura:** Validar branch_id y factuality aun si from_state==to_state.

**Rechazo/inconclusión:** Derivar factualidad únicamente comparando FEN.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1006 — T07 no puede liberar aviso a mitad de restore

**Base:** La etiqueta hipotética persiste hasta V-P1/MAIN restaurado.

**Aceptación futura:** Predicado temporal truth_label_release_after_exact_restore.

**Rechazo/inconclusión:** Permitir etiqueta PARTIDA REAL mientras persiste pieza d8 de alternativa.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1007 — T10 restringe VISUAL de V-PRE-EV2

**Base:** El estado de ply49 es TECHNICAL_ONLY por contrato.

**Aceptación futura:** Fallaría cualquier phase-binding que lo convierta en audience_visible.

**Rechazo/inconclusión:** Tratar un FEN técnico como permiso de escena pública.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1008 — T11 no anima desde estado que no se ha mostrado

**Base:** La opción ALT-A muestra corte al estado V-EV2 tras elipsis.

**Aceptación futura:** Transición declara CUT y omisión; prohíbe interpolación falsa desde V-REAL.

**Rechazo/inconclusión:** Generar caballo viajando desde c3 sobre tablero de ply35.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1009 — T12 mantiene estado pero cambia estatus editorial

**Base:** SEQUENCE_END deja V-EV2 sin nueva jugada.

**Aceptación futura:** Caso valida no incrementar ply ni publicar texto de mate final.

**Rechazo/inconclusión:** Concluir game_over por cierre de vídeo.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1010 — Concordancia de PR no es aprobación independiente

**Base:** El router puede coincidir con caso/overlay y repetir un error común.

**Aceptación futura:** Dos checks futuros: consistencia cruzada y expected histórico/oráculo externos.

**Rechazo/inconclusión:** Declarar legalidad o history PASS por comparación entre JSONs.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`, `PHASE`, `JSON`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes y límites

- `FIDE`: https://handbook.fide.com/chapter/e012023
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `JSON`: https://json-schema.org/draft/2020-12
- `CASE`: PR #1, case v0.2, blob `3514f19ac355763a5b4c61d5c573df090b0eccc1`.
- `OVERLAY`: PR #11 truth overlay, blob `aafc6429d716863e225361dd4962169bf12ecfae`.
- `PHASE`: PR #4 60s binding, blob `27282e7a4bbe61cd7c3e2b867cea3b658581b918`.

**Frozen:** E5B4D NO-GO bajo M; Policy B terminación y confirmación estrictamente antes de 120 segundos, stdout/stderr independientemente ≤1.048.576 bytes emitidos Y aceptados durante toda su vida. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; no ejecución/render/publicación.
