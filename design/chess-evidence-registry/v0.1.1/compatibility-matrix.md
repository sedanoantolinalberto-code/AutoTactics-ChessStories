# Matriz de compatibilidad v0.1.1

No es contrato de producción ni plan de ejecución. Base CONTRACT conservada en source_snapshots: commit 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd, ruta contracts/scene-contract-v0.2.schema.json, blob 7dc513bad7082e54c8ade5f0568202cd804ba3c0. No se modifica ese contrato, CASE, MANIFEST, BRIDGE ni router.

| Área | v0.1.1 candidato | Compatibilidad / conducta futura |
|---|---|---|
| v0.1 lector | refs objeto, metadatos y colecciones nuevos | No compatible por sustitución. Conservar versión explícita y fuente original |
| IDs | Los originales se conservan | Traducir mediante collection+scope; nunca índice global por texto |
| Registro de otro caso | Otro registry scope; un game por candidato | MAIN y Txx pueden repetirse entre registros, nunca resolver sin ámbito |
| $id del esquema | URN distinto 0.1.1 | Identidad de diseño; no URI de ejecución ni aprobación |
| Caso v0.2 raíz | registry tiene games/positions/scene_bindings | No es schema_version/case_id/states/timeline de v0.2; no copia directa |
| Evento v0.2 cerrado | refs tipadas, origins, replay, labels y timing_status | Mantener metadatos externos; no añadir propiedades a evento congelado |
| Null / ausencia | registry tiene payloads null explícitos | v0.2 prohíbe determinados campos inaplicables; no serializar null como sustituto de ausencia |
| Movimiento | registry conserva SAN/casillas/captura declarados | v0.2 requiere moving_piece/color/special_move y otra forma capture; recuperar fuente fijada, no completar desde conjeturas |
| Captura | registry enum conserva K del diseño anterior | No usar como prueba de legalidad ni exportar una captura de rey; dominio pendiente de revisión |
| Omisión T10 | first36,last49,count14,semantics | count no pertenece al objeto cerrado omittedPlies de v0.2; registrar externamente, no cambiar contrato |
| Posiciones | fen_declared, NOT_VERIFIED | No derivar FEN ni transformar estado técnico en visual; formato lexical no prueba legalidad |
| Rama | REAL_DECLARED frente REAL de v0.2 | Mapeo de declaración, nunca promoción histórica; propiedad de posición separada del contexto activo |
| Ancla | V-P1 compartida con ALT_QD8 | No exigir igualdad universal de branch_ref de posición y contexto T05/T06 |
| Replays | T08/T02 y T09/T03 comparten move | No nuevas medias jugadas ni capturas |
| T07 | obligación de restaurar V-P1 y MAIN antes de retirar aviso | Requisito de presentación; frames no disponibles |
| T12 | cierre editorial, LA PARTIDA CONTINÚA | No reconstruir final físico ni resultado histórico |
| Claims/evidence | IDs internos vs EVID-* externos | No sustituir evidence_refs de CASE con observations locales |
| Confianza | UNASSESSED; evaluaciones vacías | No convertir en admisibilidad o IVV; modelo futuro no abre gates |
| Derechos | activo+use_id, permiso inexistente | No traducir consulta o PENDING a clearance ni sustituir ledger de 14 roles |
| Tiempos | UNMEASURED | No números sintéticos ni equivalencia a TIMING_MEASURED |
| Winter | tres versiones, transcripción en WIN0 | No repinar MANIFEST desde WIN2 ni BRIDGE desde WIN0 automáticamente |
| Overlay | OVER1 y OVER0 conservados | Misma narrativa en intervalo documentado no equivale a mismos metadatos/pins |
| Git | branch_observed informativa, commit/path/blob exactos | No descargar HEAD como reemplazo silencioso de snapshot |
| Restricciones | objeto constraints literal heredado | No usar const como prueba de cumplimiento; no adaptar Política B |

Cualquier futura integración necesita especificación separada de proyección, campos sin fuente, pérdidas y revisión de impacto. No se implementa adaptador ni se generan salidas v0.2. No puede reconstruirse todo el caso cerrado únicamente desde el registro reducido; el CASE fijado sigue siendo referencia necesaria.

La referencia local siempre se interpreta en su documento contenedor; una copia parcial que pierda scope/provenance no es evidencia equivalente. Revisión documental nueva no hereda automáticamente autorización, derechos o confianza del registro anterior. Si una fuente cambia, conservar ambos snapshots y revisar alcance; no mover pins de consumidores.

Riesgos altos F3 de integración y evidencia siguen abiertos; la separación tipada reduce ambigüedad del diseño, no demuestra compatibilidad ejecutada.

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo M.
Política B: todos los procesos relevantes terminados y su terminación confirmada estrictamente antes de 120 segundos; stdout y stderr tienen límites independientes de 1.048.576 bytes emitidos Y aceptados durante toda su vida.
R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos = NOT_RUN. 77 negativos de router = NOT_RUN. Oráculo independiente de ajedrez = NOT_RUN.
No autorización de ejecución, render, publicación o merge. Ningún PASS técnico, histórico o de derechos. Los restantes controles de CASE, incluidos F03 y estados IVV, se conservan sin reinterpretación.
