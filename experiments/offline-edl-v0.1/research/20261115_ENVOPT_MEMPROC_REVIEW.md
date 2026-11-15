# Engine YT · ENVOPT / MEM-PROC · revisión documental 2026-11-15

**Clasificación:** `SOURCE_ONLY / OFFLINE_RESEARCH / DRAFT_REVIEW / NO_MERGE / NOT_INTEGRATED`.

## Alcance

Se estudiaron las ideas generales de EnvOpt, memoria procedimental de agentes, Book-to-Skill, OpenMontage, OpenFilm, Motion Skills y audio multilingüe; no se importó ni ejecutó código de esos terceros.

Se preparó en un laboratorio independiente un paquete entregable de investigación denominado `EngineYT_Research_ENVOPT_MEMPROC_20261115_v01.zip`, suministrado por el chat al usuario. **El ZIP no está dentro de GitHub ni este PR pretende incorporar su código automáticamente.**

- ENVOPT-ENGINE-01 v0.1: lector documental UTF-8 en solo lectura, manifiesto SHA-256, selección determinista de extractos, offsets y etiquetas `source_text_untrusted`. 
- MEM-PROC-01 v0.1: procedimientos candidatos referenciados a evidencias; evaluación A/B de pares estrictos, rechazo de regresiones y ninguna API de activación/promoción.
- Laboratorio: **46/46 pruebas unitarias sintéticas PASS** en CPython 3.13.5; pruebas reproducidas también desde una copia extraída del ZIP. Esta cifra NO acredita la VM Windows, CPython 3.12.10, el harness E5B4D ni el código NIC05.
- La demostración utiliza tokens y latencias *inventados para probar el cálculo*, no mediciones de ahorro. La evaluación muestra `PASS_OFFLINE` pero siempre mantiene `PENDING_INDEPENDENT_REVIEW` y `production_eligible=false`.

SHA-256 declarado del paquete entregado en el chat: `5fde48b2b6080528d61c30cfdec11187c31a40ab84d98d4c1742bcc2c544a9a5`. **Este digest no acredita autoría ni disponibilidad del ZIP en GitHub.**

## Solapamientos verificados

El árbol experimental base ya contiene `experiments/offline-edl-v0.1/src/compile-draft.mjs`, `src/review-draft.mjs`, `source-pins.json` y `media/capability-registry.v0.1.json` + `media/plan-media.mjs`. No deben reimplementarse ni reemplazarse solo por los anuncios de X.

Los prototipos ENVOPT/MEM-PROC representan únicamente nuevas capas de recuperación de contexto y de evaluación de procedimientos candidatos. La posible compatibilidad con NIC05 no puede certificarse sin sus archivos locales actuales.

## Expedientes de investigación (sin integración)

| Código | Trabajo y disposición |
|---|---|
| ENVOPT-ENGINE-01 | Prototipo offline creado; benchmark sobre Engine real **BLOCKED** |
| MEM-PROC-01 | Prototipo offline creado; evaluación procedimental independiente **PENDIENTE** |
| VID-REF-01 | Matriz comparativa storyboard/edición/QA a añadir al mapa existente; diseño documental |
| KTS-01 | Índices de documentación con procedencia, excepciones y seguridad; diseño documental |
| HARNESS-OPT-01 | Optimización de contexto en sandbox de datos; **nunca** cambios a supervisor/gates |
| I18N-AUDIO-01 | Contratos offline de localización y control de sincronización; diseño documental |
| NARR-HMM-01 | Reserva condicionada a baseline heurístico y conjunto de historias etiquetadas |

## Riesgos y límites

- Los datos en un context pack siguen siendo **contenido no confiable**. Las etiquetas por sí mismas no previenen prompt injection.
- El SHA-256 de un manifiesto autoproducido prueba consistencia, **no** procedencia independiente.
- No hay certificación frente a carreras TOCTOU, Windows reparse points, filesystem hostil ni agent-runner comprometido.
- Un candidato documental no se convierte en fuente autoritativa, ni en instrucción de seguridad, ni en aprobación editorial por tener un ID estable.
- A/B deberá usar mismas tareas, corpus, modelos, presupuestos y evaluación independiente; no asumir reducciones porcentuales externas.

## Controles congelados

- **R17/E5B4D: NO-GO**
- **TB09/G3: BLOCKED**
- **B10-7: PRE-CAMPAIGN/BLOCKED**
- **PF02/COM03: BLOCKED**
- **NIC05: solamente offline, adquisición real bloqueada**
- **Render, publicación, merges y elevación de permisos: prohibidos en este expediente**

## Siguiente revisión

1. Obtener, en el entorno adecuado, el árbol exacto de NIC05 y sus hashes, sin alterar fuentes autoritativas.
2. Conciliar interfaces e invariantes con los prototipos aislados.
3. Repetir pruebas en OS/Python objetivo, crear baseline y medir calidad/tokens/latencia reales.
4. Someter a revisión independiente antes de cualquier decisión de integración.

**Esta rama/PR agrega solamente la presente nota, no ejecuta el prototipo, no abre la VM ni toca contratos de producción.**