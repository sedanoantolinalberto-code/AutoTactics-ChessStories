# Cierre de Fase 5 y viabilidad de ejecución

Fecha: 2026-10-16. Repositorio exclusivo: sedanoantolinalberto-code/AutoTactics-ChessStories.

**Decisión documental:** las cuatro correcciones de unicidad están presentes en la candidata aislada. No queda demostrada otra corrección previa necesaria para cerrar este parche. El paquete está preparado documentalmente para formular una futura solicitud de validación con objeto y límites precisos; **no está habilitado para ejecutarla ni para integrarse**. Bajo M y Política B vigentes, no se ha identificado un alcance ejecutable con garantías compatibles. Se cierra la revisión documental; no procede otra ronda de recuentos.

## Base, recuperación y trazabilidad

HEAD observado antes de escribir: `chess-stories/evidence-registry-v0.1.1-uniqueness-patch` → `8b811a313a93c8d40a8392543d7471cbe8f327b9`. Árbol del commit: `56357548a005c0eb60ea21a0cc54c41850b679be`. Se añade exclusivamente este informe a esa rama, preservando su historia.

Base v0.1.1: `d73e8e913ae4f4bb77fd30f74721560d1a1239fb`. La comparación Git de base a HEAD informa ocho archivos añadidos, todos en v0.1.1-uniqueness-patch, sin cambios en v0.1.1, v0.1 ni reviews. Se recuperan las lecturas anteriores de los doce documentos v0.1.1 cuyos blobs siguen iguales; se leen las ocho notas históricas de reviews y las siete notas del parche, junto con el esquema candidato. No se repiten las comprobaciones de 20 snapshots, 270 referencias ni 118 referencias de esquema.

Las ocho notas históricas son las cuatro 2026-10-15-* y F3-final-audit, F3-reference-integrity-matrix, F3-defect-register y F4-documentary-remediation-plan. Sus conclusiones sobre v0.1 conservan su fecha y versión; “ABIERTOS” en F3 no se sobrescribe retrospectivamente. El tratamiento posterior de D01–D04 está en [remediation-report](../v0.1.1/remediation-report.md). Los borradores no persistidos de otras revisiones no se presentan como evidencias versionadas.

Identidades clave, informadas por GitHub, no certificados históricos:

| Objeto | Blob |
|---|---|
| Esquema v0.1.1 original | 017154416519517a413f23b0fc82fb0580f6fa70 |
| Esquema del parche en HEAD | 0e3602bfadb5b1b3a3be407b185d348ed4653126 |
| Ejemplo EP01 v0.1.1 preservado | 479cea6cd499aef4c1961c3d09e509911457727a |
| structural-delta-review.md | 0d1c336be526e66fc2689a9e789329d41c63f76c |
| typed-reference-identity-policy.md | a45c450b1ca32498d5b8a500cb78a770a677e909 |
| local-reference-membership-review.md | e89e8efc9c86e658742d11c0351ca7eba1473d98 |
| schema-reference-closure-2026-10-16.md | 1ef9d3241b4c252048802386e6ac1f80878eb7d8 |

main observado en `8e1ad7e0dd8fabadd1674733353988ff5136b63d`; PR #12 HEAD `2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd`, no fusionada. No se modifican. El árbol consultado no contiene workflows ni AGENTS.md; no se instala ni invoca ninguno.

Método actual: lectura documental, consulta de metadatos Git y composición de este informe. Sin parser/validador sobre los documentos revisados, scripts de proyecto, motores, tests, Actions o renders. Las inspecciones estructuradas anteriores se atribuyen a sus notas, sin reclasificarlas como ejecución cualificada. Esta revisión tampoco acredita independencia IVV ni lectura ciega.

## Evaluación final del parche

| Ruta bajo #/$defs/ | Cambio documentado y presente en la lectura actual |
|---|---|
| scene/properties/claim_refs | uniqueItems ausente → true; items sigue claimRef |
| scene/properties/asset_refs | uniqueItems ausente → true; items sigue assetRef |
| asset/properties/upstream_asset_refs | uniqueItems ausente → true; items sigue assetRef |
| rights/properties/permission_document_refs | uniqueItems ausente → true; items sigue permissionRef |

[structural-delta-review](../v0.1.1-uniqueness-patch/structural-delta-review.md) documenta que, excluidos esos cuatro campos, las estructuras comparadas eran idénticas. Su objeto del parche en commit `568f15de880e248cb9333520ce7ed5e099438e78` tiene el mismo blob `0e3602bfadb5b1b3a3be407b185d348ed4653126` que el HEAD actual, comprobado mediante lectura Git. Por ello ese resultado sigue siendo aplicable sin repetir su comparación estructurada. No hay evidencia de diferencias adicionales en el esquema; las otras adiciones de la rama son documentación, no alteraciones del ejemplo.

Se considera **subsanada documentalmente la omisión de las cuatro restricciones**, no demostrado el comportamiento de un validador. No se afirma que el ejemplo tuviera duplicados, que se haya ejecutado un caso adverso ni que el esquema sea formalmente válido. v0.1.1 original sigue siendo el objeto anterior, intacto; el parche es una copia candidata separada.

### Dos criterios distintos de identidad

Se conserva [typed-reference-identity-policy](../v0.1.1-uniqueness-patch/typed-reference-identity-policy.md):

- Unicidad JSON: uniqueItems compara valores completos. No es comparación de bytes del texto ni depende del orden de miembros de un objeto; tampoco resuelve destinos o alias.
- Identidad semántica: colección + ID + ámbito. LOCAL_REGISTRY exige el documento contenedor y registry_id correcto; el nombre del registro por sí solo no permite fusionar documentos. GIT_DOCUMENT fija repository, commit, path y git_blob, además de colección/ID.
- source_snapshots/T10 y scene_bindings/T10 siguen siendo entidades diferentes. No se renombra T10 ni se resuelve por ID desnudo.
- Un mismo blob en commits o rutas distintos no permite colapsar automáticamente revisiones, procedencia, derechos o alcance. No se incorpora normalización de alias.

dependency.blocked_uses se conserva íntegro. Operaciones distintas sobre un mismo destino no son necesariamente duplicadas. La normalización de su texto scope no está especificada; la sugerencia histórica de use_id sigue propuesta, no requisito implementado ni defecto probado del ejemplo. No se restaura blocked_refs.

## Evidencias acumuladas y límites

| Observación conservada | Evidencia existente | Lo que no establece |
|---|---|---|
| 20/20 snapshots con identidad Git coincidente | [Cinco iniciales](../v0.1.1-uniqueness-patch/git-pinned-source-check-2026-10-16.md) y [quince restantes](../v0.1.1-uniqueness-patch/remaining-15-git-snapshots-2026-10-16.md) | Autenticidad del original, hashes R2 cualificados o verdad histórica |
| 270 referencias locales tipadas con destinos existentes y ámbito raíz coincidente | [Membership](../v0.1.1-uniqueness-patch/local-reference-membership-review.md) | Referencias que no coincidan con la forma detectada, semántica universal, ciclos o locators |
| 118 $ref con destinos presentes; 52 definiciones | [Closure](../v0.1.1-uniqueness-patch/schema-reference-closure-2026-10-16.md) | Validación Draft 2020-12 o conformidad de la instancia |
| 12 escenas, 6 posiciones, 4 movimientos; 7 claims UNASSESSED | [Trazabilidad EP01](../v0.1.1/scene-traceability.md), ejemplo preservado | Replay, legalidad, final histórico o promoción de confianza |
| WIN0, WIN1 y WIN2 individualizados sin canon | [Reconciliación](../v0.1.1/source-reconciliation.md), remediación D04 | Una transcripción primaria independiente o resolución del final |

Se conservan 17...Be6, 18.Bxb6, la hipótesis no jugada 17...Qd8, reuso T02/T08 y T03/T09, retorno exacto a MAIN como requisito, omisión inclusiva 36–49 de 14 plies, transición a 25...Nxd1 y cierre editorial «LA PARTIDA CONTINÚA». No se reconstruye una terminación histórica.

TRANS-WINTER-END sigue vinculada a WIN0; no se fabrican transcripciones para WIN1/WIN2. DEP-R2 bloquea AUTHENTICATE_UNDERLYING_R2_BYTES y no revoca la lectura OBS-CASE. historical_assessments y permission_documents siguen vacíos; no prueban modelos futuros de evaluación o concesión. Fuente declarada, adquisición, inspección y autenticación permanecen dimensiones separadas. Derechos PENDING/NOT_AUTHORIZED, no autorizaciones nuevas.

## Defectos pendientes y riesgos de compatibilidad

No se demuestra un defecto adicional del parche que obligue a otra modificación documental antes de solicitar validación. Esto no equivale a ausencia universal de defectos.

| Pendiente / riesgo | Disposición |
|---|---|
| Integridad semántica, referencias externas, locators y ciclos por tipo de arista | Pendiente de controles autorizados; pertenencia de 270 referencias no basta. No imponer DAG al grafo narrativo completo |
| permission_document_refs puede describir referencias aunque la colección de permisos esté reservada vacía | Resolver/rechazar destinos inexistentes en un control semántico futuro; el ejemplo conserva [] |
| Modelos reservados de evaluación y permisos sin instancias | Su suficiencia y autoridad real no se deducen de strings requeridos; no habilitar HIGH/MODERATE ni grants |
| Mismo $id del esquema en original y parche, blobs distintos | Riesgo de selección/caché futura. Identificar el objeto por commit+ruta+blob y no cargar ambos bajo el mismo $id en un catálogo. Sin consumidor actual no se declara fallo ejecutado ni se cambia $id aquí |
| Contrato cerrado de escenas v0.2 | Incompatible con sustitución directa: referencias, null/ausencia, omitted_plies.count y campos de movimiento difieren. Reutilizar [matriz](../v0.1.1/compatibility-matrix.md); adaptador no implementado |
| Derivación, evaluación y derechos entre revisiones | No trasladar permisos/confianza por similitud de contenido o nombre de rama |
| Originales, lectores, ronda/final y derechos | Dependencias externas abiertas; no las resuelve un validador |

Los dominios y cardinalidades diferidos en F3 y la cobertura limitada de este ejemplo permanecen límites del diseño, no resultados fallidos. No se reabren D01–D04 por conservar notas históricas: su remediación es documental y su eficacia técnica sigue pendiente.

## Viabilidad: independencia funcional no demuestra compatibilidad de ejecución

Un chequeo de sintaxis/meta-esquema o de referencias sobre archivos fijados es **funcionalmente separable** del motor, del renderer y de una exportación v0.2. Puede especificarse sin autenticar archivos históricos ni usar activos comerciales. Esa separación de datos y funciones no elimina los procesos que lo ejecutan ni los requisitos de Política B.

Bajo el modelo M y el veredicto E5B4D vigentes, no hay evidencia documental de un entorno o mecanismo cualificado que garantice simultáneamente, para todo comportamiento admitido por M, terminación de todos los procesos relevantes, confirmación estrictamente antes de 120 segundos y ambos límites de emisión/aceptación durante toda su vida. No se presume que un validador pequeño, sin red o sin subprocesos quede fuera del modelo.

Un timeout o una petición de cancelación no prueba terminación confirmada. Finalizar el proceso padre no acredita todos los procesos relevantes. Truncar lo capturado no limita lo ya emitido; sumar flujos o vaciar buffers no satisface dos límites independientes de vida completa. Reducir el fixture o observar una ejecución rápida tampoco demuestra una garantía universal. No se propone probar primero para resolver este bloqueo.

| Nivel | Estado y alcance |
|---|---|
| Análisis documental de viabilidad | Realizado aquí: separación funcional identificable, compatibilidad de garantía no establecida bajo M; ejecución bloqueada |
| Prueba experimental aislada | NO EJECUTADA y no autorizada en esta fase. Un eventual resultado solo describiría esa ejecución |
| Garantía técnica demostrada | NO ESTABLECIDA; E5B4D permanece STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL |
| Autorización de integración | NO CONCEDIDA; tampoco se deriva de un futuro resultado estructural favorable |

No se afirma imposibilidad de cualquier validación bajo cualquier modelo imaginable. Se afirma que **con las restricciones y evidencias actualmente aplicables no existe un alcance de ejecución demostrado compatible y habilitado**. Una delimitación futura tendría que justificar formalmente aplicabilidad, supuestos, procesos y mecanismos sin excluir fallos por conveniencia. Mientras M y Política B sigan aplicando con este NO-GO, no puede aprobarse por renombrar el trabajo como “aislado”. Cambiar modelo, garantías o gates excede este cierre y no se realiza.

## Plan técnico mínimo posterior, condicionado y sin ejecución

Se reutiliza [future-validation-plan](../v0.1.1/future-validation-plan.md); no se crea suite ni matriz duplicada. Orden mínimo:

| Paso futuro | Entradas fijadas | Resultado exigible y evidencia necesaria |
|---|---|---|
| 0. Admisibilidad | M, Política B, inventario de procesos y mecanismo propuesto | Justificación revisada de compatibilidad y autorización aplicable. Hoy bloqueado; no basta un ensayo ni un timeout |
| 1. Conformidad estructural | Esquema parche blob 0e3602bf… y ejemplo blob 479cea6c… en commit 8b811a3…; dialecto/herramienta/versiones fijados | Resultados reales de meta-esquema e instancia, claves duplicadas, required/tipos/const/enum y cuatro casos de duplicación JSON; artefactos identificados. Estado actual NOT_RUN |
| 2. Semántica dirigida | Mismos objetos; casos de colección/ámbito erróneo, dos T10, identidad externa, Winter, DEP-R2 y replays | Resolución conforme al catálogo, rechazo de referencias incorrectas y conservación EP01; distinguir igualdad JSON de identidad semántica. Estado actual NOT_RUN |
| 3. Revisión de resultados | Entradas, configuración, resultados y límites observados de 1–2 | Revisión competente y trazabilidad; no convertir aceptación estructural en autenticidad, derechos, garantía B o aprobación global |
| 4. Integración eventual | Evidencia anterior, fuentes primarias/lecturas/permisos y proyección v0.2 especificada | Evaluación separada de compatibilidad y gates. Sin implementación ni autorización actual |

Los commits y blobs completos están fijados arriba; las abreviaturas de esta tabla son únicamente de lectura. La evidencia temporal/de flujos, si llegara a existir bajo alcance admisible, tendría que distinguir emitidos de aceptados, ambos canales y todo proceso relevante; no se fabrican certificados de ejecución.

Siguen impidiendo integración: E5B4D/Política B; R6 y aprobaciones pendientes; 66/77 negativos y oráculo no ejecutados; originales R2; páginas completas de Chess Review con procedencia; lectores independientes y adjudicación; final/ronda; derechos por activo/uso y cobertura de los catorce roles R6; proyección compatible v0.2 aún inexistente. IPN sigue antecedente comparativo, no fuente directa EP01. No se repite outreach ni se presupone una respuesta.

## Límites preservados y cierre

E5B4D = **STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL**, **NO-GO bajo modelo de fallos M**.

Política B: todos los procesos relevantes deben haber terminado y su terminación debe estar confirmada **estrictamente antes de 120 segundos**. Stdout y stderr tienen límites **independientes de 1.048.576 bytes emitidos y aceptados durante toda su vida**.

R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos = NOT_RUN. 77 negativos de router = NOT_RUN. Oráculo independiente de ajedrez = NOT_RUN. Restantes controles conservados, sin reinterpretación.

Solo se añade este informe. No se modifica el esquema del parche, ejemplo, v0.1.1, v0.1, main, PR #12 ni contratos; no hay ejecución técnica, merge, render o publicación de materiales. La lectura posterior acredita persistencia del informe, no validación o aprobación. El commit resultante y su readback se comunican en la entrega; no se inventa un hash autorreferente dentro del documento.

**Fase 5 documental cerrada; parche tratado documentalmente; validación técnica e integración bloqueadas.** No se requieren más documentos repetitivos para sostener esta conclusión.
