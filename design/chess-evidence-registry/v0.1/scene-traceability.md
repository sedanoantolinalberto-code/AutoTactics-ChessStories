# EP01 — trazabilidad T01–T12

Estado documental; todos los replays, controles de presentación, tiempos medidos y derechos permanecen pendientes. CASE conserva el contrato; OVER1 y OVER0 conservan las dos revisiones de overlay sin elegir canon. MANIFEST y BRIDGE aportan rutas futuras de oráculo, no ejecuciones.

| Evento / tipo | Estados | Ramas | Movimiento / omisión | Claims y evidencias legacy | Rótulo requerido |
|---|---|---|---|---|---|
| T01 SET_POSITION | — → V-P1 | — → MAIN | Acción editorial, no movimiento | Sin claim explícito; EVID-LEDGER-R2 | PARTIDA REAL |
| T02 REAL_MOVE | V-P1 → V-EV1 | MAIN → MAIN | MOVE-MAIN-34 | CLAIM-REAL-MOVES; EVID-LEDGER-R2, EVID-R2-RESULTS | PARTIDA REAL |
| T03 REAL_MOVE | V-EV1 → V-REAL | MAIN → MAIN | MOVE-MAIN-35 | CLAIM-REAL-MOVES; EVID-LEDGER-R2, EVID-R2-RESULTS | PARTIDA REAL |
| T04 REWIND | V-REAL → V-P1 | MAIN → MAIN | Acción editorial, no movimiento | Sin claim explícito; EVID-LEDGER-R2 | REBOBINADO · PARTIDA REAL |
| T05 ENTER_HYPOTHETICAL | V-P1 → V-P1 | MAIN → ALT_QD8 | Acción editorial, no movimiento | CLAIM-HYPOTHETICAL-QD8; EVID-LEDGER-R2, EVID-SUPPLIED-CASE-CONTEXT | HIPOTÉTICA · NO JUGADA |
| T06 HYPOTHETICAL_MOVE | V-P1 → V-HYP | ALT_QD8 → ALT_QD8 | MOVE-ALT-QD8-34 | CLAIM-HYPOTHETICAL-QD8; EVID-LEDGER-R2, EVID-SUPPLIED-CASE-CONTEXT | HIPOTÉTICA · NO JUGADA |
| T07 RETURN_TO_REAL | V-HYP → V-P1 | ALT_QD8 → MAIN | Acción editorial, no movimiento | Sin claim explícito; EVID-LEDGER-R2 | REGRESO A LA PARTIDA REAL |
| T08 REAL_MOVE | V-P1 → V-EV1 | MAIN → MAIN | MOVE-MAIN-34 (repite T02) | CLAIM-REAL-MOVES; EVID-LEDGER-R2, EVID-R2-RESULTS | PARTIDA REAL |
| T09 REAL_MOVE | V-EV1 → V-REAL | MAIN → MAIN | MOVE-MAIN-35 (repite T03) | CLAIM-REAL-MOVES; EVID-LEDGER-R2, EVID-R2-RESULTS | PARTIDA REAL |
| T10 ELLIPSIS | V-REAL → V-PRE-EV2 | MAIN → MAIN | 36–49 inclusivos, 14 plies | CLAIM-EDITORIAL-ELLIPSIS; EVID-R2-RESULTS, EVID-LEDGER-R2 | SE OMITEN JUGADAS REALES |
| T11 REAL_MOVE | V-PRE-EV2 → V-EV2 | MAIN → MAIN | MOVE-MAIN-50 | CLAIM-REAL-MOVES, CLAIM-CONTINUATION; EVID-R2-RESULTS | PARTIDA REAL |
| T12 SEQUENCE_END | V-EV2 → V-EV2 | MAIN → MAIN | Acción editorial, no movimiento | CLAIM-CONTINUATION, CLAIM-EDITORIAL-END; EVID-LEDGER-R2, EVID-R2-RESULTS | CIERRE EDITORIAL · LA PARTIDA CONTINÚA |

## Obligaciones por evento

- T01: V-P1 representa ply33 después de 17.Kf1; inicializar no genera una media jugada.
- T02/T08: 17...Be6, alfil negro g4→e6, un mismo movimiento declarado ply34. Vector L01 futuro.
- T03/T09: 18.Bxb6, alfil blanco c5→b6 captura dama negra b6, un mismo movimiento ply35. Vector L02 futuro.
- T04: rebobinado V-REAL→V-P1, sin SAN inverso ni alteración de la historia.
- T05: cambia contexto a ALT_QD8 conservando V-P1. El aviso aparece antes de mover piezas.
- T06: 17...Qd8, dama negra b6→d8, ply34 de la alternativa NO JUGADA. L03 futuro no la convierte en historia.
- T07: restaura exactamente V-P1 y MAIN antes de retirar aviso; L05 referencia una obligación de restauración, no un movimiento legal.
- T10: omite 14 plies reales declarados, 36–49 inclusivos. Destino interno V-PRE-EV2 TECHNICAL_ONLY. L06 futuro exige fuente continua y replay independiente. El bridge conserva concordancia documental previa de 14/14; aquí no se ejecuta ese control.
- T11: 25...Nxd1, caballo negro c3→d1 captura torre blanca, ply50; L04 futuro. No animar una trayectoria ficticia desde V-REAL ni exponer V-PRE-EV2. BASELINE describe ALT-A como propuesta de corte estático a V-EV2, no resultado de render ni decisión adoptada por el registro.
- T12: conserva V-EV2, cierre editorial LA PARTIDA CONTINÚA; nunca mate ni fin histórico.

El campo source_disclosure preserva el texto literal del caso; required_display_label preserva el overlay. Son capas distintas y no deben normalizarse silenciosamente.

Todos los eventos enlazan ASSET-SUPPLIED-POSITION-DATA y tiempos UNMEASURED. Las referencias legacy se resuelven en CASE#/evidence: incluyen declaraciones y extractos con originales ausentes. T02 y T08 no crean dos evidencias históricas independientes por repetirse.

La hipótesis, el retorno, la omisión y el cierre deben ser comprensibles sin audio en un futuro artefacto. No hay frames, mediciones ni IVV disponibles en este paquete.
