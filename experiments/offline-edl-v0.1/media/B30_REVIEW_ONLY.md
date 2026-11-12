# Engine YT — B30, revisión estática de EDL y herramientas (REVIEW ONLY)

## Estado

**CANDIDATE / SOURCE_ONLY / NO EXECUTION GO.**

Rama: `review/engineyt-media-plan-failclosed-b29-20261112`, derivada de `research/engineyt-media-capability-map-v01-20261103`. No modificar `main`.

**Objeto:** el revisor `reviewMediaCapabilities(plan, edl, registry)`. Se mantiene el planificador audiovisual declarativo; no se añaden llamadas a procesos, herramientas, red, medios, render o publicación.

## Hallazgos antes de B30

Se han reproducido contraejemplos con las funciones reales en un entorno JavaScript aislado:

- `registry.tools[0].license_review_required=false` era aceptado.
- `runtime_qualification="PASS"` era aceptado.
- Cambiar a la vez `registry.tools[0].capability` y `plan.capability_map[0].capability` a `execute-shell` era aceptado.
- Cambiar a la vez URL de herramienta y `capability_map` a una ruta `file://` era aceptado.
- `edl.shots[0].visual_review="APPROVED"`, `edl.shots[0].render_instruction="ffmpeg ..."`, `edl.rights_clearance_verified=true` y `edl.source_revision_scope="CERTIFIED_BYTE_EXACT"` eran aceptados.
- Alterar coordinadamente tiempos, IDs de eventos, tablero visible o etiqueta factual en el EDL y el plan seguía devolviendo `PASS_LIMITED_SOURCE_ONLY`.
- `edl.target_duration_ms=1000` era aceptado pese al objetivo documental original de 45 segundos.

Los efectos demostrados son **falsos positivos del revisor documental**; no se ha demostrado ejecución de comandos, procesamiento de medios ni publicación.

## Corrección B30

- Validación independiente de los límites del registro: licencias, `planning_only`, `NOT_RUN`, capacidades permitidas, formato de URL, disponibilidad e identidades no repetidas.
- Reafirmación de los gates negativos, etiquetas de procedencia y pines del EDL original.
- Comprobación de las nueve escenas canónicas y objetivo editorial no medido de 45 segundos.
- Comprobación de los eventos T01–T12 y sus etiquetas de veracidad, incluidos los contrafactuales.
- Rechazo de cronologías, tableros y etiquetas alterados conjuntamente en EDL y plan.
- Esquemas exactos para EDL, escenas, plan, fases y mapa de herramientas.
- Rechazo controlado `FAIL_CLOSED` de entradas nulas en fases.

**Límite de diseño:** los datos canónicos son específicos del caso EP01. No convertir este revisor en validador genérico de vídeos; para otros casos debe definirse un contrato distinto y aprobado.

## Comprobaciones realizadas

- Ejecución de las funciones reales `compileDraft`, `planMediaCapabilities` y `reviewMediaCapabilities` obtenidas de la rama y con los JSON originales: baseline `PASS_LIMITED_SOURCE_ONLY`.
- **2.516 mutaciones negativas** sobre plan, fases, registro, mapa de herramientas y seis casos de EDL + plan: **2.516 `FAIL_CLOSED`**, **0 aceptaciones indebidas**, **0 excepciones**.
- Archivo `plan-media.hardening.test.mjs`: **36 casos** definidos (un baseline y 33 mutaciones). El workflow existente ejecuta también las suites de pruebas previas.

**IMPORTANTE:** estas 2.516 mutaciones se ejecutaron con las funciones originales mediante un motor JavaScript aislado. La ejecución oficial con `node --test` y el estado de GitHub Actions **no se pudieron verificar**. No atribuir `PASS` a la suite Node.js antes de recuperar registros del runner.

## Reproducción nativa requerida

```sh
node --version
node --test experiments/offline-edl-v0.1/media/plan-media.test.mjs
node --test experiments/offline-edl-v0.1/media/plan-media.hardening.test.mjs
node --test experiments/offline-edl-v0.1/tests/offline-edl.test.mjs
```

Evidencia exigida: versión Node, commit exacto, códigos de salida, conteo total por suite, `PASS/FAIL/SKIP` individualizados, `git status` y logs textuales sin secretos.

## Gates inalterados

- `R17/E5B4D = NO-GO`.
- `TB09/G3 = BLOCKED`.
- `rendering_go = false`, `publishing_go = false`.
- B30 no acredita sincronía de audio, exactitud de frames, derechos, seguridad de subprocesos ni contención del árbol.

## Integración

No hacer merge. Requiere regresión Node.js, revisión independiente del diff y confirmación de que la función continúa siendo exclusivamente documental.

## Comprobación adicional de entradas malformadas

Tres alteraciones de `edl.shots[0].truth_annotations` (objeto, texto y número) provocaban una excepción no estructurada en el revisor. Se cambió la lectura por una comprobación explícita de `Array.isArray`. En el candidato actual las tres devuelven `FAIL_CLOSED` y el baseline documental conserva `PASS_LIMITED_SOURCE_ONLY`.

Matriz final V8 sobre el código de esta rama: **2519 mutaciones**, **2519 rechazos**, **0 aceptaciones inesperadas**, **0 excepciones**. Archivo de pruebas Node.js: **36 casos**, pendiente de ejecución nativa.
