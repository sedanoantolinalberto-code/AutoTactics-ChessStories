# Chess Stories — Síntesis de investigación B671–B770

**Fecha:** 2026-10-14. **Continuidad:** B1–B670, ahora B671–B770. **Alcance:** exclusivamente el piloto Chess Stories EP01. **Registro:** 100 bloques consecutivos, diez temas de diez bloques; **83 P0, 17 P1**. P0 significa prioridad de riesgo, NO 83 bugs ni controles ejecutados. Todos `RESEARCHED_DOCUMENTARY_ONLY`.

## Diez campos nuevos con criterios falsables

| Bloques | Disciplina | Qué añade a la decisión sobre EP01 |
|---|---|---|
| B671–B680 BI | Observaciones y localizadores de archivo | [Web Annotation](https://www.w3.org/TR/annotation-model/) separa fuente, región y anotación; permitiría auditar lecturas A/B sin pegar fragmentos protegidos |
| B681–B690 BJ | Semántica completa de estados FEN | [FEN](https://chessprogramming.org/Forsyth-Edwards_Notation) contiene más que piezas: turno, enroques, en passant, reloj y jugada; no sirve como planilla original |
| B691–B700 BK | Intervalos de veracidad por fotograma | [W3C Media Fragments](https://www.w3.org/TR/media-frags/) utiliza intervalos de tiempo semiabiertos; evita confundir transiciones reales/hipotéticas por el instante frontera |
| B701–B710 BL | Evolución de JSON Schema v0.2 | [$schema](https://json-schema.org/understanding-json-schema/reference/schema), [unevaluatedProperties](https://json-schema.org/understanding-json-schema/reference/object) y [JSON Pointer RFC 6901](https://www.rfc-editor.org/rfc/rfc6901.html) ayudan a especificar cambios compatibles/incompatibles |
| B711–B720 BM | Accesibilidad de diagramas de tablero | [W3C WAI](https://www.w3.org/WAI/tutorials/images/complex/) aconseja descripción breve y descripción detallada de imágenes complejas, no dictar cadenas FEN opacas |
| B721–B730 BN | Linaje y observabilidad | [OpenLineage](https://openlineage.io/docs/spec/examples/) y [OpenTelemetry](https://opentelemetry.io/docs/specs/semconv/general/) modelan transformaciones/observaciones; NO certifican historia ni Policy B |
| B731–B740 BO | Atestación e integridad | [GitHub Attestations](https://docs.github.com/en/actions/concepts/security/artifact-attestations) y [RFC3161](https://www.rfc-editor.org/info/rfc3161/) pueden acreditar builds/tiempos bajo sus condiciones, nunca validez de movimientos ni copyright |
| B741–B750 BP | Gobernanza de PR y aprobaciones | [GitHub merge queue](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue) ofrece reglas de integración, no un PASS automático de IVV/R6/E5B4D |
| B751–B760 BQ | Prueba audiovisual futura | Media Fragments y contratos de escena exigen distinguir hash MP4, duración, rótulo visible, crop de thumbnail y comprensión real |
| B761–B770 BR | Decisión sobre límites del proyecto | Paquete de liberación por soporte/escenario; no agregar autorizaciones independientes ni contar volumen de investigación como prueba |

## Distinciones recién explicitadas

**1. Un selector de página no es un permiso de reproducción.** W3C Web Annotation permite describir regiones o fragmentos. Esto ayuda a preservar el token histórico y su localización tras una lectura legítima, pero sin escanear o copiar todavía páginas 374–375 ni transformar la consulta del museo en una supuesta licencia comercial.

**2. FEN, reloj de medias jugadas y ply editorial no son sinónimos.** El contador de semijugadas FEN desde la última captura/avance de peón difiere del ply histórico y de la secuencia T01–T12. La posición TECHNICAL_ONLY V-PRE-EV2 sigue siendo un dato interno y no un fotograma automáticamente autorizado.

**3. La veracidad tiene un orden temporal exacto.** HIPOTÉTICA · NO JUGADA debe cubrir los frames que muestran Qd8; el salto de 14 plies necesita advertencia visible y ALT-A debe mostrar V-EV2 solo tras explicar omisión. Un valor de timecode estimado no es evidencia audiovisual.

**4. Firmar no significa saber si es verdad.** Una atestación asociada a software o un sello temporal podría indicar su procedencia, pero ni una firma de build ni una credencial genérica de testigo resuelven la divergencia entre crónica publicada y planilla manuscrita. GitHub advierte expresamente que las atestaciones no garantizan artefactos seguros.

**5. CC0 y Public Domain Mark son diferentes.** [Creative Commons](https://wiki.creativecommons.org/wiki/CC0_FAQ) distingue el instrumento de renuncia/licencia CC0 y la marca PDM para señalar material presuntamente libre; ninguno autoriza a alguien sin titularidad a disponer de obra ajena. R6 permanece pendiente.

## Diez próximos falsificadores que sí podrían crear evidencia nueva

| ID de referencia | Pregunta operacional | Estado de dependencia |
|---|---|---|
| B672/B675 | ¿Podemos localizar una lectura A/B congelada con región exacta y ejemplar identificado? | TESTIGO 1956 NO REVISADO |
| B681/B684 | ¿La reconstrucción utiliza íntegramente FEN y recorrido, no solo ocupación? | ORÁCULO NOT RUN |
| B691/B693 | ¿Existe algún frame de Qd8 sin aviso o T07 etiquetado REAL antes del retorno? | MEDIA NOT RENDERED |
| B695/B700 | ¿Se identifica correctamente el salto real y existe media temporal verificable? | IVV / MEDIA NO APPROVED |
| B701/B705 | ¿Una nueva versión de schema conserva semántica y diagnostics bajo dialecto fijado? | CÓDIGO NOT RUN |
| B711/B715 | ¿Un lector no visual comprende Nxd1 y la elipsis sin información falsa? | IVV + ACCESSIBILITY NOT RUN |
| B721/B725 | ¿Distingue un futuro log completo entre terminación observada y mera señal COMPLETE? | E5B4D NO-GO UNDER M |
| B731/B734 | ¿Se verifica el artefacto exacto sin confundir integridad con autoría histórica? | BUILD/EVIDENCE NOT RUN |
| B737/B739 | ¿Licencia concreta y titular permiten uso de cada asset? | R6 PENDING |
| B741/B746 | ¿Las dependencias PR están congeladas y los reviewers son competentes/independientes? | MAIN UNMERGED / GATES NOT APPROVED |

## Recomendación de alcance

Una vez documentados **770 bloques**, nuevas tandas pueden prepararse si se solicitan, pero el criterio de prioridad debería ser una **fuente nueva, un falsificador nuevo o un requisito que cambie una decisión real**, no solo otro grupo de 100 nombres. Los próximos hitos materiales siguen siendo acceso legítimo y lectura independiente de testigos de 1956, autorización/rights de assets finales, mecanismo de ejecución compatible con Política B bajo M, oráculo legal ajedrecístico e IVV basada en media real.

## Archivos

- `research/CHESS-STORIES-B671-B720-100-BLOCKS-PART1-2026-10-14.md`
- `research/CHESS-STORIES-B721-B770-100-BLOCKS-PART2-2026-10-14.md`
- `research/CHESS-STORIES-B671-B770-REGISTER.v1.0.json`
- Este documento, `research/CHESS-STORIES-B671-B770-DECISION-SYNTHESIS.v1.0.md`.

## Congelación explícita

E5B4D **NO-GO bajo modelo M**. Política B **todos los procesos relevantes terminados y confirmada su terminación estrictamente antes de 120 s**, stdout y stderr **por separado** con límites de **1.048.576 bytes emitidos y aceptados a lo largo de toda la vida de cada canal**. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; historia original NOT AUTHENTICATED, legal oracle NOT RUN, proyecto sin tests, renders, CI/Actions, fusión a main o publicación.
