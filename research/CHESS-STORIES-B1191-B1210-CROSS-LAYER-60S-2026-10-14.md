# Chess Stories — B1191–B1210: auditoría de integración y tiempos del corte 60s

**Fecha 2026-10-14.** Hallazgos del JSON de fases/caso inspeccionado como texto, no del vídeo. Objetivos temporales NO medidos. Sin ejecución del router ni test visual.

## DO — Router y contrato: fronteras entre estado histórico, técnico y visual

### B1191 — T10 desemboca internamente en estado no visual

**Declaración observada / inferencia:** T10 to_state es V-PRE-EV2 (TECHNICAL_ONLY), mientras S08-C mantiene visible V-REAL.

**Comprobación futura admisible:** Spec separada `logical_state_id` vs `audience_visible_state_id`, con campos ambos obligatorios.

**Rechazo o inconclusión:** Fallo de integración si renderer muestra directamente V-PRE-EV2.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1192 — Un estado técnico no es una escena pública

**Declaración observada / inferencia:** `visibility=TECHNICAL_ONLY` prohíbe usar V-PRE-EV2 como fotograma de audiencia.

**Comprobación futura admisible:** Criterio de rechazo para cualquier salida visual que declare V-PRE-EV2 como board visible.

**Rechazo o inconclusión:** Inconcluso si inspección solo examina `to_state_id`, sin capa visual.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1193 — T11 REAL_MOVE no obliga a animar desplazamiento

**Declaración observada / inferencia:** En el caso T11 es jugada real; S08-D declara `visual_chess_movement=NONE_IN_THIS_CANDIDATE`.

**Comprobación futura admisible:** Dos flags separados: `historical_event_kind=REAL_MOVE` y `visual_transition=CUT_STATIC_POST_POSITION`.

**Rechazo o inconclusión:** Fallo si generador aplica tween por inferirlo de `REAL_MOVE`.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1194 — S08-D utiliza fuente técnica solo para referencia semántica

**Declaración observada / inferencia:** S08-D prevé `source_state_is_not_rendered=true`, por lo que c3 no se muestra como tablero previo en esta solución.

**Comprobación futura admisible:** Rechazar still/tween desde V-PRE-EV2 en ALT-A sin excepción aprobada.

**Rechazo o inconclusión:** No confundir validación interna de Nxd1 con aparición audiovisual.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1195 — Texto de omisión permanece al cambiar escenario

**Declaración observada / inferencia:** S08-C usa `SE OMITEN JUGADAS REALES`; S08-D mantiene `DESPUÉS DE 14 MEDIAS JUGADAS OMITIDAS`.

**Comprobación futura admisible:** Contrato de precedencia entre ambas etiquetas en el hard cut.

**Rechazo o inconclusión:** Fallo si la segunda posición parece el resultado de un solo movimiento desde ply35.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1196 — T07 deja el aviso hipotético hasta restauración

**Declaración observada / inferencia:** Overlay T07 marca `ONLY_AFTER_EXACT_V-P1_REAL_BOARD_AND_MAIN_CONTEXT_RESTORED`.

**Comprobación futura admisible:** Propiedad de orden temporal release_banner > exact_restore_commit.

**Rechazo o inconclusión:** Fallo si se muestra PARTIDA REAL mientras dama sigue d8.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1197 — Los HOLD no son nuevas jugadas

**Declaración observada / inferencia:** S02 retiene T01/V-P1 y S05 retiene T03/V-REAL sin ejecutar de nuevo.

**Comprobación futura admisible:** Futuro evaluator distingue count_replay_event y count_historical_ply.

**Rechazo o inconclusión:** Fallo si S02 o S05 altera estado FEN.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1198 — Los replay T08/T09 sí muestran jugadas ya presentadas

**Declaración observada / inferencia:** S08-A y B representan movimientos legítimos de MAIN ya mostrados por T02/T03.

**Comprobación futura admisible:** Un historical_move_id compartido por parejas con dos display_event_ids.

**Rechazo o inconclusión:** Fallo si se genera un score 18.Bxb6 dos veces seguidas.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1199 — El label de aterrizaje no equivale a la etiqueta durante transición

**Declaración observada / inferencia:** S07 settled label es REGRESO; durante restauración debe seguir visible advertencia alternativa.

**Comprobación futura admisible:** Manifest define `transition_label` y `settled_label` distintos cuando cambie factualidad.

**Rechazo o inconclusión:** Inconcluso si solo se inspecciona still final de S07.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1200 — Clasificación de publicación permanece FALSE pese a coincidencia documental

**Declaración observada / inferencia:** El router fuente declara `execution_authorized=false` y `safe_to_publish=false`.

**Comprobación futura admisible:** Fuente e informe cualificados separan coherencia estática de aprobación para ejecutar.

**Rechazo o inconclusión:** No promover gates por igualdad entre dos PR dependientes.

**Prioridad:** P0. **Fuentes:** `CASE`, `PHASE`, `OVERLAY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## DP — Storyboard 60 segundos: cronología, atención y corte sin engaño

### B1201 — S01 y S02 componen una exposición de diez segundos

**Declaración observada / inferencia:** 0–4s + 4–10s son metas diseñadas de T01 y HOLD, no datos del render.

**Comprobación futura admisible:** Validar legibilidad real de dama b6, alfiles c4/c5 y PARTIDA REAL.

**Rechazo o inconclusión:** No llamar «diez segundos efectivos» a un JSON no renderizado.

**Prioridad:** P1. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1202 — S03 deja siete segundos para Be6

**Declaración observada / inferencia:** 10–17s representa transición declarativa g4→e6 y contexto táctico.

**Comprobación futura admisible:** Comparar carga de lectura del SAN, piezas y rótulo con media futura.

**Rechazo o inconclusión:** Inconcluso sobre comprensibilidad sin playback medido.

**Prioridad:** P1. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1203 — S04 y S05 comparten once segundos para captura y HOLD

**Declaración observada / inferencia:** 17–23s y 23–28s son un movimiento más conservación de posición.

**Comprobación futura admisible:** No ejecutar dos capturas o dos desapariciones de dama.

**Rechazo o inconclusión:** Fallo si el segundo tramo recrea Bxb6 como evento histórico nuevo.

**Prioridad:** P0. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1204 — Entrada en hipótesis no depende de 17...Qd8

**Declaración observada / inferencia:** S06-B 31–35s etiqueta ALT_QD8 sin que todavía se mueva dama; esta anticipación es una defensa de verdad.

**Comprobación futura admisible:** Si cambia timing, preservar siempre aviso antes de imagen contrafactual.

**Rechazo o inconclusión:** Fallo si se adelanta tween Qd8 al inicio sin banner.

**Prioridad:** P0. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1205 — S06-C debe mantener aviso continuo cinco segundos previstos

**Declaración observada / inferencia:** 35–40s muestra Qd8 no jugada con rótulo persistente.

**Comprobación futura admisible:** Inspección frame-a-frame en todas las resoluciones finales pertinentes.

**Rechazo o inconclusión:** Inconcluso si solo se evalúa still settled V-HYP.

**Prioridad:** P0. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1206 — S07 usa cinco segundos para retorno editorial

**Declaración observada / inferencia:** 40–45s prevé restaurar V-P1/MAIN y sustituir rótulo a su término.

**Comprobación futura admisible:** La visualización no cruza contextos incompatibles durante transición.

**Rechazo o inconclusión:** Fallo por un solo frame MAIN con dama d8 alternativa.

**Prioridad:** P0. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1207 — S08-A/B dedican cuatro segundos a dos jugadas ya conocidas

**Declaración observada / inferencia:** 45–49s muestra Be6 y Bxb6 en replay, no cuatro segundos nuevos de ajedrez.

**Comprobación futura admisible:** Evaluar si el público distingue recapitulación de continuidad histórica.

**Rechazo o inconclusión:** Rechazar conteo de plies basado en número de escenas.

**Prioridad:** P0. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1208 — S08-C dedica cuatro segundos a elipsis de catorce plies

**Declaración observada / inferencia:** 49–53s conserva V-REAL como board público aunque contexto técnico avanza a ply49.

**Comprobación futura admisible:** Mantener rótulo de omisión y sin movimiento falso durante cambio.

**Rechazo o inconclusión:** Fallo si board público se convierte en V-PRE-EV2 en S08-C.

**Prioridad:** P0. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1209 — S08-D muestra después de Nxd1 por corte estático

**Declaración observada / inferencia:** 53–57s presenta V-EV2, caballo d1, torre h1 y callout sobre víctima previa.

**Comprobación futura admisible:** Distinguir explicación de captura de animación histórica no presentada.

**Rechazo o inconclusión:** Fallo si se anima Nxd1 como única transición desde V-REAL.

**Prioridad:** P0. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1210 — S09 reserva tres segundos a cierre editorial no terminal

**Declaración observada / inferencia:** 57–60s conserva V-EV2 con «LA PARTIDA CONTINÚA».

**Comprobación futura admisible:** Exigir verificación de últimos frames y posible solapamiento de CTA/UI.

**Rechazo o inconclusión:** Fallo si el cierre parece mate o final del juego.

**Prioridad:** P0. **Fuentes:** `PHASE`, `OVERLAY`, `WCAG`, `MEDIA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Documentos primarios del proyecto y normas

- `CASE`: PR #1, case v0.2, Git blob 3514f19ac355763a5b4c61d5c573df090b0eccc1.
- `PHASE`: PR #4, EP01-60S-PHASE-BOARD-BINDINGS.v0.1.json, Git blob 27282e7a4bbe61cd7c3e2b867cea3b658581b918.
- `OVERLAY`: PR #11, EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json, Git blob aafc6429d716863e225361dd4962169bf12ecfae.
- `WCAG`: https://www.w3.org/TR/WCAG22/
- `MEDIA`: https://www.w3.org/TR/media-frags/

## Restricciones

E5B4D NO-GO bajo modelo M; Política B exige todos los procesos relevantes terminados Y terminación confirmada ESTRICTAMENTE ANTES DE 120 s, stdout/stderr cada uno límite independiente de 1.048.576 bytes emitidos y aceptados durante su vida. R6 PENDING, IVV_GLOBAL y CASE_APPROVAL NOT APPROVED, sin test, motor, render, Actions, publicación o merge a main.
