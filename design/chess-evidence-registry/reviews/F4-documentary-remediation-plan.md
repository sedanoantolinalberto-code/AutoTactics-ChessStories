# Fase 4 — plan de remediación documental, NO EJECUTADO

Base a preservar: v0.1 en 5ffb8ecd278c06d596349176040abe12c3f329af. Auditoría acumulada: cuatro notas en 4f8bf0bb9ad6a48df3d00cc345c37842d2ff056b y los tres documentos F3 de esta entrega. No se modifica esquema, ejemplo, contrato cerrado ni pin de consumidor. Ninguna propuesta aquí constituye autorización.

## Orden mínimo propuesto

| Prioridad | Cambio de diseño propuesto | Hallazgo | Criterio documental de aceptación |
|---|---|---|---|
| 1 | Definir identidad compuesta y catálogo de destinos por campo | D01, CER-R01/R03 | T10 snapshot y T10 evento coexisten sin índice global ambiguo; IDs heredados intactos |
| 1 | Precisar blocked_use/objetivo pendiente de DEP-R2 | D03 | OBS-CASE sigue lectura realizada; autenticación R2 sigue bloqueada |
| 1 | Mantener UNASSESSED mientras falta modelo de evaluación competente | D02 | Ningún claim promovido; campos futuros y autoridad descritos explícitamente |
| 1 | Identificar versión exacta de testigo/transcripción Winter | D04 | TRANS-WINTER-END sigue basada en WIN0; WIN1/WIN2 conservados sin canon |
| 2 | Separar adquisición, inspección y autenticación | R02 | WIT-CR-FULL declarado no adquirido; fragmento parcial reportado; ningún byte/hash inventado |
| 2 | Precisar procedencia temporal de observaciones y revisiones | R05/R06 | Acto original, reporte y consulta diferenciados; nueva observación no sobrescribe la anterior |
| 2 | Tipar permisos y alcance por activo/uso | R03 | No autorización inferida; PENDING/NOT_AUTHORIZED y null preservados |
| 2 | Definir compatibilidad de snapshots y proyección hacia v0.2 | R01/R04/R08 | Ninguna actualización por nombre de rama; tabla de campos con pérdidas y bloqueos |
| 3 | Refinar locators, dominios, cardinalidad y límites de reutilización | R07/R09/R10/R11 | Alcance del perfil explícito, sin alegar validez ajedrecística o histórica |

La opción inicial de menor impacto es precisar estas reglas en una futura revisión documental y conservar los siete claims UNASSESSED. Si se decide materializar cambios de estructura en un alcance autorizado posterior, usar nueva versión de diseño con correspondencia explícita a v0.1; no reemplazar silenciosamente el commit revisado.

## Referencias tipadas y T10

Para campos monomórficos basta definir normativamente colección y ámbito del ID; para uniones proponer una referencia con kind, id y ámbito del caso/registro. No todos los snapshots pertenecen a un único caso: su identidad de repositorio debe permanecer separada. Para predecesores externos añadir repositorio, commit, ruta y localizador de entidad/versión; no usar HEAD como identidad.

T10 se conserva como ID legacy de escena y como ID del snapshot histórico. La futura forma tipada distinguiría scene:T10 y snapshot:T10 conceptualmente; estas expresiones son notación de propuesta, no nuevos IDs persistidos. No migrar claims.subject automáticamente: contiene textos como 17...Qd8 o SOURCE-R2-PGN y no es foreign key.

Permisos: referenciar documento y revisión exactos, sección pertinente y alcance. No basta una cadena sin namespace. Mantener acceso restringido a documentos sensibles y separar su existencia de su suficiencia.

## Confianza y autoridad

Proponer evaluación separada vinculada al claim exacto y a su versión, con evaluador identificado, competencia/autoridad para el alcance, fecha, evidencias concretas, fundamento, limitaciones, conflictos considerados y revisión trazable. No inventar personas ni certificaciones. Un origen documental no es autoridad del evaluador.

LOW, MODERATE y HIGH son juicios históricos de alcance limitado. En particular MODERATE/HIGH no deben admitirse solo por enum, longitud de rationale o número de fuentes. Deben existir bases pertinentes y revisión de independencia/contradicciones. Incluso HIGH no resuelve automáticamente conflictos, legalidad, derechos, R6 o publicación. Hasta contar con un diseño y evidencia suficientes, mantener UNASSESSED; no rebajar artificialmente a LOW como sustituto de evaluación.

## Testigos, disponibilidad y observaciones

Distinguir obra, objeto lógico, versión de reproducción/transcripción, bytes adquiridos, cobertura inspeccionada y autenticación. La disponibilidad no será una escala de verdad. Una referencia puede existir sin bytes; adquirir bytes no demuestra autenticidad; inspeccionar un fragmento no cubre páginas completas.

Preservar WIN0/WIN1/WIN2 como versiones documentales. La versión de la normalización terminal es WIN0; elegirla para esa lectura no selecciona un final histórico. No afirmar derivación de WIT-CR-FRAGMENT desde WIT-CR-FULL sin evidencia.

Observaciones futuras: sujeto/versiones exactos, observador si consta, método, fecha del acto, fecha del reporte, fecha de registro/consulta y alcance. Desconocidos explícitos. OBS-P374 sigue REPORTED_PRIOR_OBSERVATION y no se convierte en acto visual del autor. Separar el informe OUTREACH de cualquier estado futuro de correo. Mantener la protección de lectores ciegos: este paquete contiene SAN candidato y no debe entregarse como material A/B.

## Derechos

Conservar registros por activo y uso, sin aprobación global. Proponer alcance identificable (finalidad, medio, plataforma, territorio, vigencia, atribución, restricciones) y evidencia de quién puede conceder ese permiso. Acceso personal/investigación, disponibilidad del documento y licencia comercial son independientes.

No equiparar PENDING, NOT_CLEARED y NOT_AUTHORIZED: documentar respectivamente evaluación/permiso pendiente, ausencia de clearance establecido y falta de autorización para ese uso, sin inferir denegación expresa si no está documentada. En RIGHTS-CR “Permission pending” y NOT_AUTHORIZED son compatibles: no consta autorización actual. Los null de titular/plataforma/territorio/vigencia no significan libre uso. [] es ausencia de permisos registrados, no dominio público. Dos ejemplos no sustituyen catorce roles R6. El activo de datos no autoriza los futuros medios visuales/sonoros.

## Revisiones y compatibilidad

Toda modificación material debe preservar el registro anterior y explicar sujeto, motivo, autoría conocida, fecha y evidencia. Versionar registros y relaciones por snapshot; impedir arrastre de una valoración/permiso a otra revisión sin revisión de alcance. Conservar por separado etiqueta de rama observada y commit/path/blob. Mismo blob en commits distintos no prueba misma situación de derechos ni identidad de objeto histórico.

El futuro adaptador sería externo, no una ampliación del contrato v0.2:
- Registry usa *_ref y metadatos de evidencia; v0.2 usa estructuras y campos cerrados diferentes.
- Campos inaplicables ausentes en v0.2 no se sustituyen por null; omitted_plies.count es metadato registry no permitido en omittedPlies v0.2.
- v0.2 move requiere moving_piece, moving_color y special_move que no están en move registry. Debe recurrirse a la fuente fijada y mapearse explícitamente, nunca inventarse por inferencia silenciosa.
- Los IDs de claims/observaciones internos no sustituyen evidence_refs legacy del caso.
- V-P1 pertenece MAIN aunque sea ancla de ALT; mantener contexto activo separado.
- No convertir UNMEASURED en tiempos ni source_disclosure en overlay único.
- No repinar MANIFEST ni BRIDGE por descubrir una revisión más reciente.
- No exportar directamente confidence o permisos como aprobaciones.

## Criterios de futura validación técnica — sin ejecución

Se reutilizan [CER-F01–F24](../v0.1/future-validation-spec.md), no se crea ni ejecuta una suite. Los siguientes son criterios de preparación, todos pendientes:

| Capa futura | Evidencia necesaria para concluir dentro de su alcance |
|---|---|
| Parser y meta-esquema | Dialecto/herramienta/versiones identificados; claves duplicadas, límites, tipos y anidación incluidos; resultados reales separados de requisitos |
| Instancia | Commit/blob exactos; todos required, adicionales, null, enums, const, patrones y cardinalidad evaluados; no limitarse a claves raíz |
| Referencias | Tipo+ID+ámbito; T10 adverso; destinos de tipo incorrecto aun existentes; campos polimórficos; referencias externas y locators tipados |
| Grafo/versiones | Ciclos de derivación/revisión/replay indebidos; permitir retorno narrativo y ancla compartida; no resolver versión por rama mutable |
| EP01 | Doce eventos, cuatro movimientos únicos, T08/T09 reuso, T07 V-P1/MAIN, T10 36–49/14, T11 estado técnico, cierre editorial intacto |
| Confianza/derechos | Casos que intenten promover por conteo, consulta o documento no adquirido deben seguir pendientes; revisión humana separada |
| Adaptador futuro | Mapeo completo y pérdidas documentadas; no propiedades extra/null indebidos en v0.2; ninguna mutación de contratos o pins |
| Ejecución/revisión | Autorización aplicable, objeto exacto, mecanismo cualificado, resultados observados, artefactos y revisión competente; nunca datos inventados |

La ejecución solo podría considerarse en un alcance futuro autorizado y bajo condiciones realmente compatibles. E5B4D sigue incompatible bajo M; este plan no propone un timeout alternativo ni permite ejecutar para “demostrar” una garantía imposible. Los criterios no son resultados esperados convertidos en observaciones.

Dependencias históricas y jurídicas no se resuelven validando JSON: originales R2, páginas completas, procedencia/autenticidad, lecturas independientes, ronda/final y permisos específicos permanecen pendientes. No se repite outreach ni se acepta coste.

## Estado al cierre

Fase 4 NO EJECUTADA. Esquema DOCUMENTARY_DESIGN_NOT_APPROVED.
E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo M.
Política B exige todos los procesos relevantes terminados y terminación confirmada estrictamente antes de 120 segundos, con stdout y stderr limitados independientemente a 1.048.576 bytes emitidos y aceptados durante toda su vida.
R6=PENDING; IVV_GLOBAL=NOT APPROVED; CASE_APPROVAL=NOT APPROVED.
66 negativos semánticos, 77 de router y oráculo independiente=NOT_RUN. No cambio de ningún gate ni autorización de implementación, ejecución, render, publicación o merge.
