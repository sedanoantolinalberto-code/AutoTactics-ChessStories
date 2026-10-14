# Chess Stories — B571–B670: síntesis decisional v1.0

**Fecha:** 2026-10-14. **Alcance:** exclusivamente Chess Stories; continuación B1–B570. **Resultado:** 100 nuevos bloques, 10 grupos de 10, 73 P0 y 27 P1. Son prioridades documentales, no 73 defectos comprobados. No se ha ejecutado ningún oráculo, test, lector independiente, estudio humano o render.

## Nuevas líneas con fuentes contrastadas

| Bloques | Investigación | Implicación para EP01 |
|---|---|---|
| B571–B580 | [python-chess](https://github.com/niklasf/python-chess) y [FIDE 2023](https://handbook.fide.com/chapter/e012023) | FEN válido, movimiento legal, recorrido auténtico y testigo histórico son dictámenes distintos |
| B581–B590 | [Edward Winter](https://www.chesshistory.com/winter/extra/byrnefischer.html) y [IIIF 3](https://iiif.io/api/presentation/3.0/) | La lectura de *Chess Review* requiere transcripción A/B por región sin SAN preconocido |
| B591–B600 | [MDN MediaCapabilities](https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo) y [VideoFrame](https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame/codedWidth) | Diferenciar dimensiones codificadas, tablero visible, fluidez, color y texto tras compresión |
| B601–B610 | [WCAG destellos](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) | Evitar flashes de rebobinado o captura; comprensión IVV no certifica seguridad visual |
| B611–B620 | [Roediger/Karpicke](https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/) y [Dunlosky et al.](https://www.psychologicalscience.org/journals/pspi/1529100612453266/) | Distinguir recuerdo, comprensión, transferencia y satisfacción |
| B621–B630 | [YouTube enlaces](https://support.google.com/youtube/answer/13748639?hl=es-ES) y [vídeo relacionado](https://support.google.com/youtube/answer/14075157?hl=en-419) | Las URL de comentarios/descripciones Shorts no son clicables, y el vídeo relacionado requiere acceso avanzado |
| B631–B640 | [Lichess Studies](https://lichess.org/%40/lichess/blog/study-chess-the-lichess-way/V0KrLSkA) y [Chess.com Lessons](https://www.chess.com/lessons/learn-to-play) | Reproducir PGN no diferencia el producto; hipótesis de ventaja en periodismo histórico + visualización veraz |
| B641–B650 | PR de historia/IVV y [PROV-O](https://www.w3.org/TR/prov-o/) | Comentarios públicos y aportaciones UGC no sustituyen lectores históricos ciegos ni otorgan licencia comercial |
| B651–B660 | Derechos R6 y fuentes pedagógicas | Reutilizar una plantilla no transfiere derechos o validación entre Shorts, eBook, curso y newsletter |
| B661–B670 | E5B4D y Política B congelados | El volumen de investigaciones nunca sustituye verificación formal de procesos ni permisos |

## Cinco decisiones precisas

**Motor no equivale a fuente histórica:** la futura validación debe producir cuatro salidas independientes: validez del FEN, legalidad de transición, coherencia del recorrido y procedencia de la jugada en el testimonio de 1956. Cumplir las tres primeras no autentica la cuarta.

**ALT-A solo es alternativa documental:** conservar V-REAL visible mientras se anuncia la elipsis de catorce medias jugadas, y cortar a V-EV2 tras la captura, evita mostrar el estado TECHNICAL_ONLY V-PRE-EV2. Para convertirlo en media harían falta captura real decodificada, QA de rótulos, cualificación ajedrecística, derechos y IVV.

**Riesgo visual distinto de comprensión:** evitar destellos rápidos de captura/REWIND es un requisito de diseño separado de medir si el espectador entiende Qd8. Un halo estático es candidato conservador, no certificado de seguridad del vídeo.

**Funnel Shorts→newsletter:** YouTube declara las URL en descripciones y comentarios de Shorts no clicables. El perfil y los vídeos relacionados son rutas diferentes. Una segunda discrepancia de documentación oficial debe quedar abierta: unas instrucciones hablan de seleccionar un fotograma desde la app y otras de añadir miniatura personalizada desde Studio con cuenta verificada. No asumir disponibilidad uniforme antes de revisar funciones reales de la cuenta.

**Producto frente a competencia:** Lichess ofrece estudios con capítulos y exportación PGN; Chess.com proporciona lecciones y desafíos. Chess Stories necesita comprobar si aporta valor diferencial mediante narración históricamente atribuida, transparencia de incertidumbre y ejercicios originales. No se ha medido demanda ni precio.

## Diez próximos hitos de evidencia (no ejecutados)

| Bloques | Evidencia futura que importaría | Gate |
|---|---|---|
| B571/B574 | Validez de posición y legalidad comprobadas por mecanismo cualificado | LEGAL/Policy B |
| B582/B587 | Lecturas A/B congeladas de páginas 374–375 | HISTORY |
| B593/B595 | Media real descodificada con advertencia hipotética legible | MEDIA |
| B601/B603 | Comprobación de riesgos de destello en export real | SAFETY |
| B616/B619 | Comprensión y transferencia sin preguntar por información ausente | IVV |
| B621/B623 | Ruta de links y función vídeo relacionado comprobadas en cuenta real | DISTRIBUTION |
| B624/B625 | Thumbnail que no oculta verdad factual y permisos reales | PRESENTATION |
| B631/B638 | Originalidad y valor educativo diferenciados de reproducción PGN | PRODUCT |
| B641/B644 | Gobernanza de correcciones y licencia de aportaciones UGC | COMMUNITY/R6 |
| B661/B662 | Evidencia específica por gate, sin promociones documentales | ALL |

Los 100 bloques son un registro consultable, **no cien instrucciones para ejecutar**. El siguiente trabajo con máximo rendimiento marginal debe crear una nueva clase de evidencia o resolver un bloqueo realmente reparable, no repetir hipótesis.

## Artefactos

- research/CHESS-STORIES-B571-B620-100-BLOCKS-PART1-2026-10-14.md
- research/CHESS-STORIES-B621-B670-100-BLOCKS-PART2-2026-10-14.md
- research/CHESS-STORIES-B571-B670-REGISTER.v1.0.json
- Este documento.

**Gates congelados:** E5B4D NO-GO bajo M. Política B estricta: todos los procesos relevantes deben terminar **y** tener terminación confirmada **estrictamente antes de 120 s**, stdout y stderr cada uno con máximo independiente de **1.048.576 bytes emitidos y aceptados durante toda su vida**. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, oráculo NO EJECUTADO, publicación falsa; no project run, renders, tests, Actions, merge main ni otros deportes.
