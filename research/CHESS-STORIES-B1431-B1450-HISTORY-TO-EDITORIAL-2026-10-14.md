# Chess Stories — B1431–B1450 | Evidencia nueva aplicada a EP01 y guion fiel

**Fecha:** 2026-10-14. El nuevo testigo visual de Chess Life 5 noviembre obliga a una distinción de estado: `PRESS_SCORE_PAGE_OBSERVED` sí, `82_MOVE_TRANSCRIPTION_CONFIRMED` no, `PLAYER_ORIGINAL_SCORESHEET_AUTHENTICATED` no. Los futuros cambios en código, producto y release siguen bloqueados.

## FM — Matriz de evidencia: qué cambiaría realmente el gate histórico

### B1431 — El score de prensa contemporánea ahora tiene estatus observado

**Hallazgo o inferencia:** La fuente Chess Life 5-XI-1956 p2 existe y fue vista visualmente como página, lo que reduce incertidumbre sobre texto publicado.

**Verificación/falsificador:** Cambiar `CONTEMPORARY_SCORE_UNAVAILABLE` a `PRESS_SCORE_PAGE_OBSERVED`, manteniendo transcripción 82 tokens incompleta.

**Prioridad:** P0. **Fuentes:** `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1432 — La publicación secundaria posterior deja de ser único testigo

**Hallazgo o inferencia:** Winter y R2 ya no son únicos accesos a secuencia: existe un score impreso de 1956.

**Verificación/falsificador:** Abrir comparación línea por línea con publicación sin suponer automáticamente identidad de los 82 plies.

**Prioridad:** P0. **Fuentes:** `CL5`, `WINTER`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1433 — Observación de mate impreso reduce una hipótesis, no todas

**Hallazgo o inferencia:** Se observa una terminación etiquetada mate en la prensa de noviembre, no prueba segura de última jugada físicamente jugada.

**Verificación/falsificador:** Crear claim `PRINTED_MATE_PRESENT=OBSERVED`, mantener `PLAYER_SCORESHEET_LAST_MOVE=UNRESOLVED`.

**Prioridad:** P0. **Fuentes:** `CL5`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1434 — El resultado UNKNOWN en fixture es sobre un archivo no visto

**Hallazgo o inferencia:** `historical_end.result=UNKNOWN` sigue correcto sobre R2/PGN no recibido, aunque fuente de prensa comunica una victoria.

**Verificación/falsificador:** No modificar campo del fixture sin fuente y política de revisión; registrar prensa como evidencia paralela.

**Prioridad:** P0. **Fuentes:** `CASE`, `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1435 — Premio especial ahora tiene soporte de 1956

**Hallazgo o inferencia:** El texto digitalizado Chess Life 20-XI incluye noticia del premio, distinta de estudio retrospectivo.

**Verificación/falsificador:** Claim de reconocimiento de torneo puede citar edición y folio, con reserva por lectura visual pendiente.

**Prioridad:** P0. **Fuentes:** `CL20`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1436 — La ronda queda en conflicto entre testimonios secundarios

**Hallazgo o inferencia:** US Chess retrospectiva dice séptima ronda; Winter/Spence documenta octava y 17-X.

**Verificación/falsificador:** No publicar ronda precisa sin resolver contra documentos primarios pertinentes.

**Prioridad:** P0. **Fuentes:** `RETRO`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1437 — Fecha de competición no se deduce de fecha de publicación

**Hallazgo o inferencia:** Una edición de noviembre registra una partida de octubre; son relojes distintos.

**Verificación/falsificador:** Mantener `game_date_candidate=17-X-1956` como bibliografía Winter y `publication_date=5-XI-1956` como impreso.

**Prioridad:** P0. **Fuentes:** `WINTER`, `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1438 — El artículo diciembre no está visualmente inspeccionado aquí

**Hallazgo o inferencia:** CR1956_12.pdf está listado, pero solicitud al servicio web falló por tamaño del documento.

**Verificación/falsificador:** No inventar posición exacta de comentario Kmoch no visto, aunque Winter cite pp374–375.

**Prioridad:** P0. **Fuentes:** `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1439 — Informe A/B ciego requiere personas realmente independientes

**Hallazgo o inferencia:** El agente ha visto SAN moderno y score publicado, así que no puede atestiguar lectura ciega no contaminada.

**Verificación/falsificador:** Mantener el futuro protocolo A/B a revisores no expuestos que declaren su familiaridad.

**Prioridad:** P0. **Fuentes:** `CASE`, `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1440 — No confundir progreso archivístico con autorización de producción

**Hallazgo o inferencia:** La inspección de Chess Life cambia fuente, pero E5B4D, R6, IVV y CASE_APPROVAL siguen pendientes.

**Verificación/falsificador:** Gates por dominio permanecen no transitivos pese al hallazgo.

**Prioridad:** P0. **Fuentes:** `CL5`, `CASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## FN — Guion de EP01 y storytelling con atribución basada en dos semanas de prensa

### B1441 — Introducción de recepción histórica antes de consagración del apodo

**Hallazgo o inferencia:** La partida figura como Grünfeld en 5-XI antes del titular Game of Century de diciembre.

**Verificación/falsificador:** Una narración factual puede hablar de publicación de la partida y posterior fama, con fechas y fuentes.

**Prioridad:** P1. **Fuentes:** `CL5`, `RETRO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1442 — Alfil blanco c5 y alfil c4 siguen requiriendo verificación geométrica

**Hallazgo o inferencia:** Que prensa imprima 41 movimientos no ejecuta un oráculo moderno ni valida automáticamente los seis FEN del caso.

**Verificación/falsificador:** Conservar T01–T03 como contratos candidatos hasta futuro cotejo token y legalidad.

**Prioridad:** P0. **Fuentes:** `CASE`, `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1443 — Qd8 sigue siendo editorial aunque se encuentre la partida publicada

**Hallazgo o inferencia:** La fuente de prensa imprime una línea; el hipotético Qd8 de ALT_QD8 sigue no jugado en esa línea declarada.

**Verificación/falsificador:** Rótulo NO JUGADA persistente en todas las versiones del producto.

**Prioridad:** P0. **Fuentes:** `CASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1444 — Referencia de premio no equivale a nota de brillantez objetiva del motor

**Hallazgo o inferencia:** Premio histórico puede introducirse sin calificar la jugada 24...Ra4 como única ganadora.

**Verificación/falsificador:** Si aparece F03, exigir prueba independiente de optimalidad.

**Prioridad:** P0. **Fuentes:** `CL20`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1445 — La elipsis editorial ahora tiene una vía verificable externa

**Hallazgo o inferencia:** El score 5-XI muestra jugadas hasta la 41, permitiendo futura transcripción del tramo plies 36–49.

**Verificación/falsificador:** No visualizar los catorce plies hasta que transcripción y legalidad sean competentes.

**Prioridad:** P0. **Fuentes:** `CL5`, `PHASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1446 — ALT-A no cambia al hallar nueva fuente

**Hallazgo o inferencia:** V-PRE-EV2 continúa TECHNICAL_ONLY y T11 usa corte estático a V-EV2 según el montaje candidato.

**Verificación/falsificador:** No producir tween histórico desde tabla antigua solo por disponer del periódico.

**Prioridad:** P0. **Fuentes:** `PHASE`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1447 — La línea de mate de prensa no debe aparecer como final de este Short

**Hallazgo o inferencia:** EP01 T12 termina después de 25...Nxd1, mucho antes del score impreso completo.

**Verificación/falsificador:** Pantalla final conserva LA PARTIDA CONTINÚA sin escenificar mate como si ocurriera en ply50.

**Prioridad:** P0. **Fuentes:** `OVERLAY`, `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1448 — Miniatura de periódico exigiría permiso

**Hallazgo o inferencia:** Una imagen auténtica de Chess Life es tentadora como thumbnail, pero US Chess limita uso de PDFs.

**Verificación/falsificador:** Diseñar miniatura original que cite fecha sin facsímil o solicitar derechos si se pretende reproducir.

**Prioridad:** P0. **Fuentes:** `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1449 — Historia del descubrimiento no debería fingir investigación personal en 1956

**Hallazgo o inferencia:** El documental puede indicar que hoy hemos consultado el archivo oficial, no que se descubrió una fuente desconocida.

**Verificación/falsificador:** Evitar calificativos de hallazgo exclusivo o nunca publicado.

**Prioridad:** P0. **Fuentes:** `CL5`, `RETRO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1450 — Una newsletter puede ofrecer procedencia sin reproducir imágenes protegidas

**Hallazgo o inferencia:** Una nota editorial original puede enlazar a US Chess 5-XI y 20-XI y explicar qué acredita cada cual.

**Verificación/falsificador:** Usar enlaces y comentarios nuevos, no copias extensas ni fotografías sin R6.

**Prioridad:** P0. **Fuentes:** `CL5`, `CL20`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes

- `CL5`: https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CL-ALL/1956/1956_11_1.pdf
- `CL20`: https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CL-ALL/1956/1956_11_2.pdf
- `RETRO`: https://new.uschess.org/news/throwback-thursday-game-century-goes-viral-november-1956
- `WINTER`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `CASE`: GitHub PR #1 v0.2, blob 3514f19ac355763a5b4c61d5c573df090b0eccc1
- `PHASE`: GitHub PR #4 60s blueprint, blob 27282e7a4bbe61cd7c3e2b867cea3b658581b918
- `OVERLAY`: GitHub PR #11 truth overlays, blob aafc6429d716863e225361dd4962169bf12ecfae

**Gates invariables:** E5B4D NO-GO bajo M; Política B procesos relevantes terminados Y confirmados ESTRICTAMENTE ANTES de 120 s; stdout y stderr cada uno máximo 1.048.576 bytes emitidos Y aceptados en toda su vida, independientes. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED. Sin código de proyecto ejecutado, motor, tests, render, Actions, merge o publicación.
