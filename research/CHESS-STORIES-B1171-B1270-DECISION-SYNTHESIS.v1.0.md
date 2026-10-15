# Chess Stories — B1171–B1270: síntesis de decisiones y hallazgos documentales

**Corte:** 14 de octubre de 2026. **Ámbito:** EP01 Chess Stories exclusivamente. **Resultado:** 100 hipótesis/controles de investigación, diez áreas DM–DV × 10, 93 P0/7 P1. Estas prioridades representan importancia del riesgo, no defectos ejecutados. Todos los hallazgos se clasifican `RESEARCHED_DOCUMENTARY_ONLY`. El cotejo GitHub mostró 100 IDs y títulos distintos, sin repetición literal frente a B171–B1170 (1.000 títulos). Ese cotejo NO demuestra ausencia de solapamiento semántico.

## Diez bloques de decisión

| Bloques | Dominio | Hallazgo / restricción de inferencia | Estado pendiente |
|---|---|---|---|
| B1171–B1180 | Archivo 1956 | Errata p370 vs pp374–375; selector IIIF solo si existe servicio real; original sigue sin observación completa | HISTORY_UNAUTHENTICATED |
| B1181–B1190 | Claims y procedencia | PGN RAV, resultado 0–1, intención psicológica y método de final como entidades disjuntas | HISTORY_CONFLICTED |
| B1191–B1200 | Estado lógico/visual | S08-C publica V-REAL bajo omisión mientras contexto interno pasa a V-PRE-EV2; S08-D corte estático | NO_RENDER |
| B1201–B1210 | Timing de 60s | 14 fases con objetivos temporales, sin duración real; T05–T07 y T10–T12 requieren truth temporal | IVV_NOT_RUN |
| B1211–B1220 | Originalidad YouTube | Desde julio 2025 política inauthentic para contenido repetitivo en masa; distinta de reused | YPP_NOT_EVALUATED |
| B1221–B1230 | Ley IA UE | Transparencia art.50 aplicada desde 2 ago 2026 para supuestos concretos; obra artística no exención total | LEGAL_SCOPE_NOT_QUALIFIED |
| B1231–B1240 | Derechos por derivado | Fotos, composición editorial, vectores, font, voice, thumbnail, EPUB y anuncios como assets con licencias separadas | R6_PENDING |
| B1241–B1250 | IVV y acceso | Preguntas sin inducir; visibilidad real de h1; balance sonido/orden y riesgos visuales | IVV_GLOBAL_NOT_APPROVED |
| B1251–B1260 | Originalidad del producto | Un PGN reproducido o un quiz genérico ya existe; valor diferencial depende de fuentes y análisis originales | MARKET_HYPOTHESIS |
| B1261–B1270 | Valor marginal y GO | Una nueva clase de evidencia externa es más útil que cien titulares y no suple Política B bajo M | E5B4D_NO_GO |

## Tres novedades sustantivas para Engine YT

### A. El corte 60s usa dos contextos durante T10 y una escena estática para T11

Observación textual del artefacto PR #4 `editorial/EP01-60S-PHASE-BOARD-BINDINGS.v0.1.json` (Git blob `27282e7a4bbe61cd7c3e2b867cea3b658581b918`): S08-C declara `to_state_id=V-PRE-EV2` y `internal_after_state_id=V-PRE-EV2`, pero `display_board_at_settled_end=V-REAL` con el aviso `SE OMITEN JUGADAS REALES`. El estado técnico tiene `visibility=TECHNICAL_ONLY` en el caso PR #1 (Git blob `3514f19ac355763a5b4c61d5c573df090b0eccc1`). S08-D tiene `source_state_is_not_rendered=true`, `visual_chess_movement=NONE_IN_THIS_CANDIDATE`, `display_board_at_settled_end=V-EV2` y texto `DESPUÉS DE 14 MEDIAS JUGADAS OMITIDAS`. `source_event_kind=REAL_MOVE` permanece correcto porque se refiere al hecho histórico candidato, **no** a un movimiento animado entre dos tableros visibles. Esto es un **riesgo de integración futura** si otro componente confunde categorías, no evidencia de un bug ejecutado.

### B. Políticas de distribución más precisas que «un vídeo para todos»

YouTube, [políticas del Programa para Partners](https://support.google.com/youtube/answer/1311392?hl=en), confirma modificación de nombre/clarificación de inauthentic content a partir del 15-julio-2025 para producciones repetitivas/en masa, además de una política separada para reused content. Por ello, los episodios deben aportar narrativa, investigación y análisis originales, no solo reemplazar PGN en una plantilla. No se ha revisado una cuenta ni determinado elegibilidad real.

La [Comisión Europea anunció la aplicación de transparencia del AI Act a partir del 2-agosto-2026](https://digital-strategy.ec.europa.eu/es/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august). [Artículo 50 consolidado](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R1689-20260727) distingue divulgación de determinados deepfakes, transparencia por sujeto responsable y condiciones de obras evidentemente creativas. Una pizarra esquemática no equivale automáticamente a recreación fotorrealista, y el aviso de IA nunca sustituye «Qd8 no jugada». No hay dictamen legal ni export de IA examinado.

### C. Investigación de archivo sin crear falsos testigos

[Edward Winter sobre Byrne–Fischer](https://www.chesshistory.com/winter/extra/byrnefischer.html) documenta la errata de portada de Chess Review (p370) y el artículo verdadero en pp374–375. [IIIF Image API 3.0](https://iiif.io/api/image/3.0/) admite regiones sobre imágenes de servidores que realmente la implementan; esto NO significa que haya servicio IIIF para este número. No se ha leído el score completo primario, no se ha realizado cotejo ciego A/B y no se ha resuelto si el mate publicado es el último movimiento de una planilla original.

## Cinco próximos puntos de control operativos

1. **Acceso original:** localizar una rendición completa legítima de la revista e identificar regiones sin confundir p370 errónea con pp374–375. Congelar hojas verdaderamente independientes A/B antes de convertir a SAN.
2. **Semantic-to-visual:** revisar cualquier futura integración del router contra la distinción `internal_after_state_id`/`display_board_at_settled_end`, los dos tipos de T11 (`REAL_MOVE` semántico, `CUT_STATIC_POST_POSITION` visual) y el orden de retirada de advertencia T07.
3. **R6:** antes de producir media, BOM por archivo y derecho específico de uso: seis glyphs, tablero, fuentes exactas, fotografías, voz, capturas de pantalla y portadas.
4. **IVV:** no declarar comprensión de Qd8, elipsis, Nxd1 o final editorial hasta disponer de estímulo legítimo y ensayo humano preregistrado, y comprobar seguridad/legibilidad separadamente.
5. **Release:** mantener formalmente E5B4D NO-GO bajo M sin atajos de runtime; sólo una solución realmente compatible con Política B permitiría ejecutar en el alcance autorizado.

## Artefactos de esta tanda

Cinco informes de 20 bloques: `CHESS-STORIES-B1171-B1190-ARCHIVE-CLAIMS-2026-10-14.md`, `CHESS-STORIES-B1191-B1210-CROSS-LAYER-60S-2026-10-14.md`, `CHESS-STORIES-B1211-B1230-YPP-AI-ACT-2026-10-14.md`, `CHESS-STORIES-B1231-B1250-R6-PERCEPTUAL-2026-10-14.md`, `CHESS-STORIES-B1251-B1270-ORIGINALITY-EVIDENCE-FRONTIER-2026-10-14.md`, todos bajo `research/`. Registro: `research/CHESS-STORIES-B1171-B1270-REGISTER.v1.0.json` (100 elementos con base y falsificador). Esta síntesis no es un séptimo gate de aprobación.

## Congelación estricta

E5B4D = **STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL**, ejecución **NO-GO bajo failure model M**. Política B exige TODOS los procesos relevantes terminados Y terminación confirmada **estrictamente antes de 120 segundos**, límites stdout y stderr **independientes** de **1.048.576 bytes emitidos Y aceptados** a lo largo de toda su vida. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED. Original 1956 no autenticado, oráculo NOT RUN, 77 specs IR y 66 semánticos NOT RUN; sin código de proyecto ejecutado, CI/Actions, renders, fusión a main o publicación.
