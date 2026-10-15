# Fase 3 — auditoría documental final y límites

Fecha: 2026-10-15. Estado: revisión documental completada en el alcance A–J; diseño NO APROBADO, validación técnica NO EJECUTADA. Fase 4 preparada, no ejecutada.

## Base y método

Repositorio exclusivo: sedanoantolinalberto-code/AutoTactics-ChessStories.
Antes de escribir se consultaron ambas referencias:
- chess-stories/evidence-registry-v0.1-documentary → 5ffb8ecd278c06d596349176040abe12c3f329af.
- chess-stories/evidence-registry-v0.1-review-notes → 4f8bf0bb9ad6a48df3d00cc345c37842d2ff056b.

PR #12 seguía en 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd, abierta, draft y no fusionada; main en 8e1ad7e0dd8fabadd1674733353988ff5136b63d. No se cambian. El árbol de revisión no contiene AGENTS.md ni workflows; los cuatro nombres de esta entrega no existen en él.

Se leyeron íntegramente los diez documentos de v0.1 y los cuatro documentos previos de reviews en 4f8bf0b. Los diez blobs coinciden con el inventario de Fase 2. La matriz adjunta registra sus identidades Git. Se conserva y referencia la investigación existente; no se repitió inspección archivística ni consulta de correo. Se consultó además el texto CONTRACT ya recuperado en el contexto, fijado por commit/blob en source-reconciliation.md, para el contraste de estructuras cerradas.

La revisión actual es lectura y razonamiento documental. No se ejecutó parser sobre esquema/ejemplo, validador, motor, script del proyecto, tests, Actions o render. Los recuentos anteriores se atribuyen a sus notas originales; no se presentan como nuevas ejecuciones. La lectura posterior de los archivos añadidos solo acredita persistencia textual. El nombre del informe anterior “independent” no demuestra independencia cualificada de esta revisión ni de IVV; tampoco constituye lectura ciega.

## Reutilización de resultados anteriores

- [Notas iniciales](2026-10-15-independent-review-notes.md): inventario y colisión transversal T10.
- [Mapa inicial](2026-10-15-reference-type-map.md): destinos y exclusión deliberada de IDs legacy.
- [Inspección anidada](2026-10-15-nested-provenance-inspection.md): 101 ocurrencias snapshot_ref con IDs existentes, sin probar selectores ni autenticidad.
- [Campos requeridos](2026-10-15-semantic-required-field-review.md): contraste limitado de claves de objetos, estados y límites.

Precisión de alcance: las notas hablan de 17 colecciones; el esquema enumera 18 arrays raíz cuando se incluye source_snapshots. Son 17 colecciones de entidades más la de snapshots, no 17 arrays totales. No se extiende retrospectivamente el resultado anterior a una comprobación automatizada de 18 colecciones. Hay además tres metadatos raíz y constraints: 22 claves requeridas. En lectura manual no se detectó clave raíz ausente.

Se mantienen los resultados documentados: 12 eventos, 6 posiciones, 4 movimientos, 20 snapshots; reuso T02/T08 y T03/T09; 7 claims UNASSESSED; 4 conflictos no adjudicados; dos derechos PENDING/NOT_AUTHORIZED; tres validaciones NOT_RUN. No se halló referencia interna poblada huérfana o de destino incorrecto en el contraste manual limitado. Esto no demuestra clausura ejecutable universal.

## Cierre A–J

| Área | Conclusión documental | Límite / seguimiento |
|---|---|---|
| A Integridad y tipos | Referencias monomórficas tienen destinos identificables; T10 se desambigua por colección | Matriz completa adjunta; comprobación mecánica pendiente |
| B Polimorfismo | subject_ref, blocked_refs, previous_record_ref y futuros permisos no tienen discriminante completo | D01; no resolver en un índice global por texto |
| C Confianza | Rationale existe; faltan campos explícitos de evaluador, autoridad, fecha y revisión | D02; MODERATE/HIGH no tienen autorización implícita |
| D Testigos | WIT-CR-FULL es objetivo no adquirido; fragmento es reproducción parcial informada; Winter es transcripción secundaria | D04 y R02; presencia de entidad no acredita posesión/inspección/autenticidad |
| E Derechos | Dos activos, dos usos declarados, sin permiso comercial; consulta separada | R03; no cubren catorce roles R6 |
| F Diccionario | Separaciones y valores del ejemplo coherentes en términos generales; campos cerrados conservados | D02/D04; null y vacío exigen contexto, no licencia/certeza |
| G Snapshots/ramas | Commit+ruta+blob conservados; rama es etiqueta de observación | R04; no selección canónica, no repinado de consumidores |
| H Revisión/procedencia | Orígenes preservan fuentes; revisión inicial sin predecesor | R05/R06; identidad del registro versionado y actos de observación necesitan precisión |
| I Contrato v0.2 | No es formato intercambiable con registry; incompatibilidad de copia directa demostrable en definiciones | R01; adaptador futuro separado, nunca edición del contrato |
| J Requisitos/resultados/autorización | NOT_RUN/null/[] y compliance_status NOT_ESTABLISHED separados de obligaciones | Sin cambio de gates; ninguna cadena de requisitos es evidencia de ejecución |

## Lectura del esquema

Se examinaron las 23 definiciones: origin, snapshot, game, branch, position, capture, move, source, witness, reading, transcription, observation, claim, evidenceLink, conflict, omission, scene, asset, rights, validation, dependency, revision y constraints. Los $ref escritos apuntan a definiciones locales existentes; no se detectó $ref externo ni recursión entre definiciones. $schema designa el dialecto y $id identifica el diseño; no son referencias a entidades EP01.

Se contrastaron required/properties y las envolturas anidadas origin, reading, capture y omission por lectura. No se identificó incompatibilidad concreta del ejemplo con esos campos durante esta lectura; eso NO equivale a conformidad JSON Schema. La falta de reglas de cardinalidad, referencias entre datos y condiciones por kind está expresamente diferida en future-validation-spec.md. No se contabiliza automáticamente como fallo ejecutado.

## Hallazgos y disposición

Cuatro defectos documentales medios (D01–D04) se detallan en [registro](F3-defect-register.md): tipado insuficiente, representación de valoración histórica incompleta, bloqueo R2 sin alcance operativo, identidad Winter agregada. Son insuficiencias/ambigüedades demostradas por texto; no corrupción histórica ni fallo de software observado. No se ha demostrado defecto crítico o alto nuevo en los diez archivos. Los riesgos altos de integración/epistemología y el bloqueo crítico E5B4D ya documentados siguen vigentes y no se rebajan.

Se propone [remediación mínima](F4-documentary-remediation-plan.md), sin aplicarla. Faltan originales R2, páginas completas de Chess Review y procedencia, lectores independientes por testigo, adjudicación de ronda/final y derechos por activo/uso. IPN sigue antecedente comparativo, no fuente directa EP01. El estado de respuestas es el informado por OUTREACH; no se afirma haber comprobado hoy el buzón.

## Pendientes que esta lectura no puede concluir

Validez formal Draft 2020-12, claves duplicadas del JSON, cobertura exhaustiva de tipos/enums/formatos, resolución ejecutada de todos los locators, grafos adversos, replay/FEN/legalidad, comportamiento de adaptador inexistente, tiempos/frames, autenticidad primaria, independencia real y derechos. Se reutilizan CER-F01–F24; sus resultados siguen NOT_RUN.

## Restricciones preservadas

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL. NO-GO bajo modelo de fallos M.
Política B: todos los procesos relevantes terminados y su terminación confirmada estrictamente antes de 120 segundos; stdout y stderr con límites independientes de 1.048.576 bytes emitidos y aceptados durante toda su vida.
R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos = NOT_RUN. 77 negativos de router = NOT_RUN. Oráculo independiente de ajedrez = NOT_RUN.
No PASS técnico, histórico o de derechos; ningún gate cambiado. Se mantienen los demás controles por referencia a CASE, incluidos F03 y estados IVV. No se modifican los diez originales, contratos, main ni PR #12; no merge ni publicación de materiales.
