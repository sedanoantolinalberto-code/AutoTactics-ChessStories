# Chess Stories — B1011–B1030 | Media e IVV: observables futuros

**Fecha:** 2026-10-14. No hay MP4 verificado ni participantes humanos reclutados. Estas son preguntas de aceptación **propuestas**, no medidas ni resultados. Mantener NO-GO en todas las ejecuciones.

## CW — Aceptación de verdad visual en el archivo final

### B1011 — Frente inicial legible de T01

**Base documental:** V-P1 y PARTIDA REAL son datos de contrato, no fotogramas renderizados.

**Aceptar solo si:** Captura real del primer tablero con estado correcto y etiqueta visible.

**Rechazar o dejar inconcluso si:** Primer tablero aparece sin contexto real.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1012 — Amenaza b6 comunicada sin flecha falsa

**Base documental:** El alfil de c5 y dama de b6 son referentes específicos.

**Aceptar solo si:** Overlay muestra geometría correcta sin inventar movimiento en T01.

**Rechazar o dejar inconcluso si:** Flecha desde alfil c4 u otra casilla.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1013 — Ataque tras Be6 no se confunde con captura

**Base documental:** El alfil e6 amenaza c4; T02 no captura esa pieza.

**Aceptar solo si:** Fotogramas no eliminan el alfil c4 durante Be6.

**Rechazar o dejar inconcluso si:** Desaparición visual de pieza atacada sin captura.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1014 — Captura de reina representada en el instante debido

**Base documental:** En T03 el alfil blanco ocupa b6 y la dama negra desaparece.

**Aceptar solo si:** Secuencia final con pieza moviente y víctima correctas.

**Rechazar o dejar inconcluso si:** Reina reaparece o se borra antes de la jugada representada.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1015 — Rebobinado lleva rótulo mientras retrocede

**Base documental:** T04 retorna al ancla sin equivaler a movimiento histórico.

**Aceptar solo si:** Cualquier imagen transicional presenta REBOBINADO de forma inequívoca.

**Rechazar o dejar inconcluso si:** Tween inverso con etiqueta de partida lineal.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1016 — Aviso de Qd8 persiste en todos los frames alternativos

**Base documental:** T05/T06 son hipotéticos incluso durante animación intermedia.

**Aceptar solo si:** Auditoría frame-by-frame sin un solo frame alternativo sin NO JUGADA.

**Rechazar o dejar inconcluso si:** Advertencia aparece un frame después de dama en d8.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1017 — Retorno atómico sin contaminación entre capas

**Base documental:** T07 debe restaurar V-P1 y MAIN antes de rotular regreso completado.

**Aceptar solo si:** Imagen y datos de rama coinciden antes de liberar alerta.

**Rechazar o dejar inconcluso si:** Dama en d8 persiste mientras se muestra PARTIDA REAL.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1018 — Elipsis señalada antes del estado posterior

**Base documental:** T10 omite 14 plies sin ilustrarlos.

**Aceptar solo si:** Usuario ve texto de omisión antes de corte de V-REAL a V-EV2.

**Rechazar o dejar inconcluso si:** Corte parece desplazamiento único entre plies 35 y 50.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1019 — Torre de h1 persiste tras Nxd1

**Base documental:** Después de capturar torre d1 queda torre blanca h1 en FEN candidato.

**Aceptar solo si:** Última imagen muestra caballo d1 y torre blanca h1 sin torre fantasma d1.

**Rechazar o dejar inconcluso si:** Imagen elimina ambas torres o conserva víctima en d1.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1020 — Cierre visible deja claro que sigue la partida

**Base documental:** T12 es SEQUENCE_END y no 41...Rc2#.

**Aceptar solo si:** En últimos frames permanece LA PARTIDA CONTINÚA sin etiqueta de mate.

**Rechazar o dejar inconcluso si:** Fade o CTA oculta la continuidad y sugiere final histórico.

**Prioridad:** P0. **Referencias:** `CASE`, `OVERLAY`, `WCAG`, `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## CX — IVV perceptiva preregistrada sin sesgo por respuesta

### B1021 — Pregunta T01 sobre qué pieza estaba amenazada

**Base documental:** Un espectador puede ver dama sin identificar quién la ataca.

**Aceptar solo si:** Ítem abierto sobre dama y alfil, con codificación ciega predefinida.

**Rechazar o dejar inconcluso si:** Pregunta ya menciona «dama en b6» y contamina respuesta.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1022 — Pregunta T02 sobre alfil c4 frente alfil c5

**Base documental:** El guion contiene dos alfiles blancos con funciones diferentes.

**Aceptar solo si:** Participante identifica cuál es atacado y cuál captura reina.

**Rechazar o dejar inconcluso si:** Un mismo acierto genérico «alfil» contabilizado como comprensión precisa.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1023 — Pregunta de si Qd8 ocurrió realmente

**Base documental:** Este es el punto factual crítico del contrafactual.

**Aceptar solo si:** Ítem neutro que solicita clasificar movimientos ocurridos/no ocurridos.

**Rechazar o dejar inconcluso si:** Instrucción anticipa la solución en la pregunta.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1024 — Pregunta de cuándo regresamos a partida real

**Base documental:** T07 es restauración de estado y rama simultáneos.

**Aceptar solo si:** Respuesta identifica frontera entre hipótesis y MAIN sin mostrar texto indicador.

**Rechazar o dejar inconcluso si:** Participante sólo repite rótulo que se presenta con la pregunta.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1025 — Pregunta sobre número de medias jugadas omitidas

**Base documental:** T10 abarca exactamente 14 plies, no 14 movimientos completos.

**Aceptar solo si:** Distinguir medias jugadas de turnos completos, con rúbrica previa.

**Rechazar o dejar inconcluso si:** Aceptar «14 jugadas completas» como exacto.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1026 — Pregunta sobre pieza capturadora y víctima

**Base documental:** T11 declara caballo negro captura torre blanca.

**Aceptar solo si:** Respuesta identifica ambos tipos y casilla d1.

**Rechazar o dejar inconcluso si:** Evaluar como correcto simplemente «ganó una pieza».

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1027 — Pregunta sobre supervivencia de segunda torre

**Base documental:** FEN declara torre blanca h1 tras captura.

**Aceptar solo si:** Ítem comprueba si se entendió que aún queda esa torre, solo si fue visible.

**Rechazar o dejar inconcluso si:** Penalizar no advertir h1 cuando el vídeo recorta el tablero.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1028 — Pregunta sobre si la partida terminó en el Short

**Base documental:** T12 marca fin editorial pero no fin histórico.

**Aceptar solo si:** Ítem pregunta fin de vídeo versus fin de juego como dimensiones separadas.

**Rechazar o dejar inconcluso si:** Usar «¿no terminó?» con negación inducida y sesgo.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1029 — Comparación 45/60 debe incluir tratamiento declarado

**Base documental:** Las versiones no solo difieren en 15 segundos sino reparto temporal.

**Aceptar solo si:** Preregistro distingue duración, edición, sonido y conocimiento previo.

**Rechazar o dejar inconcluso si:** Atribuir diferencias observadas únicamente a duración.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1030 — Criterio de inconclusión previo a participantes

**Base documental:** Las seis IVV limitadas no equivalen a IVV_GLOBAL.

**Aceptar solo si:** Plan de muestra, exclusiones y umbral antes de exposición.

**Rechazar o dejar inconcluso si:** Declarar PASS por encuestas incompletas o post hoc.

**Prioridad:** P0. **Referencias:** `IVV`, `CASE`, `WCAG`, `STUDY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes y controles

- `CASE`: GitHub PR #1 v0.2, source-only.
- `OVERLAY`: GitHub PR #11, truth overlays.
- `IVV`: GitHub PR #6, borrador de protocolo preregistro, sin participantes.
- `WCAG`: https://www.w3.org/TR/WCAG22/Understanding/time-based-media.html
- `VIDEO`: https://www.w3.org/TR/media-frags/
- `STUDY`: https://www.consort-spirit.org/published-statements (referencia metodológica por analogía, NO ensayo clínico).

**Bloqueado:** E5B4D NO-GO modelo M; Política B procesos relevantes terminados y terminación confirmada estrictamente antes de 120s, stdout/stderr independientes 1.048.576 bytes emitidos y aceptados por vida; R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, sin render, motores, test ni publicación.
