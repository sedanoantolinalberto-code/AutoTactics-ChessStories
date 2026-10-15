# CER Fase 3 — mapa documental de referencias tipadas
Fecha 2026-10-15. Base de lectura commit 5ffb8ecd278c06d596349176040abe12c3f329af. Solo revisión de contenido del esquema y ejemplo; ninguna prueba del sistema.

## Resultados
Se enumeraron campos raíz *_ref y *_refs en las definiciones de las diecisiete colecciones. En los datos del ejemplo, los campos de referencia interna no mostraron IDs huérfanos en una comparación básica por presencia. Esa comparación NO certifica destino, rama, alcance temporal, ciclos, contrato JSON Schema, ejecutabilidad o verdad histórica. Los IDs externos legacy se mantienen deliberadamente fuera del grafo interno.

## Mapa de destino esperado
- branches.game_ref, positions.game_ref, moves.game_ref, scene_bindings.game_ref -> games
- branches.parent_branch_ref, positions.branch_ref, moves.branch_ref, scene_bindings.from_branch_ref, scene_bindings.to_branch_ref -> branches
- branches.shared_anchor_state_ref, branches.return_anchor_state_ref, moves.from_state_ref, moves.to_state_ref, scene_bindings.from_state_ref, scene_bindings.to_state_ref, scene_bindings.return_anchor_state_ref -> positions
- witnesses.source_ref -> sources
- witnesses.derived_from_ref -> witnesses (si su definición semántica futura confirma misma colección)
- transcriptions.witness_ref -> witnesses
- observations.subject_ref -> fuente o testigo (unión tipada explícita; el ejemplo incluye ambas clases)
- evidence_links.claim_ref, scene_bindings.claim_refs -> claims
- evidence_links.observation_ref -> observations
- scene_bindings.move_ref -> moves
- scene_bindings.replay_of_event_ref -> scene_bindings
- scene_bindings.asset_refs, rights_records.asset_ref, assets.upstream_asset_refs -> assets
- dependencies.blocked_refs -> unión tipada de entities relevantes; el ejemplo mezcla WIT-CR-FULL, RIGHTS-CR, CLAIM-REAL-MOVES; exigir tipos declarados, no resolución implícita
- revisions.previous_record_ref -> versión anterior tipada, no necesariamente dentro del mismo snapshot
- claims.legacy_evidence_refs y scene_bindings.legacy_evidence_refs -> identificadores externos del CASE, NO foreign keys a este ejemplo
- rights_records.permission_document_refs -> futuras referencias de autorización con procedencia, no completar con cadenas inventadas
- validation_records.result_artifact_refs -> vacío por perfil NOT_RUN; no inventar resultados
- source_snapshots y origins.snapshot_ref -> snapshots, anclaje por commit/selector (referencias anidadas en origins NO cubiertas por la comparación simple)

## Datos observados en el ejemplo
12 scene_bindings T01–T12; 4 moves, T02/T08 reutilizan MOVE-MAIN-34 y T03/T09 reutilizan MOVE-MAIN-35; 6 positions, 7 claims, 20 source_snapshots. Una colisión global de ID T10 existe entre snapshot y escena, aunque NO es un destino ambiguo para los valores de referencias raíz inspeccionadas. Un resolvedor debe exigir par (tipo, ID) para cualquier referencia.
- Se observaron 12 ocurrencias externas claims.legacy_evidence_refs y 20 scene_bindings.legacy_evidence_refs: NO clasificarlas como huérfanas internas.
- Ninguna de las referencias raíz usadas en el ejemplo apuntó a un ID global ambiguo durante el recuento de esta lectura. Eso NO elimina el riesgo de colisión futura.

## Defectos/riesgos y siguiente revisión
CER-R01: colisión transversal T10; riesgo de namespace global, no error demostrado de los enlaces actuales.
CER-R02: condiciones para asignar HIGH/MODERATE y evidencia de evaluación humana no forzadas por enum; valores actuales UNASSESSED.
CER-R03: tipos de destino no garantizados por cadenas JSON Schema, en particular observación con sujeto polimórfico y blocked_refs; documentar discriminantes antes de diseñar adaptador.
CER-R07: comprobar después todos los origins.snapshot_ref anidados, conflictos/lecturas y cadena de revisiones; contraste simple actual no cubre esos campos.
CER-R08: verificar semántica de derechos por uso y coherencia cross-document con el diccionario; no aprobar R6.
CER-R09: validar solo DOCUMENTALMENTE valores sentinela unknown/null/arrays vacíos frente al diccionario y fechas de observación; no confundir reportado con visto de primera mano.

No cambios de contrato v0.2 ni de los diez documentos Fase 2. E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL, NO-GO bajo modelo M. Política B exige terminación y confirmación de todos los procesos relevantes estrictamente antes de 120 segundos; límites independientes de stdout y stderr de 1.048.576 bytes emitidos y aceptados durante su vida. R6=PENDING, IVV_GLOBAL y CASE_APPROVAL=NOT APPROVED, 66/77 negativos y oráculo=NOT_RUN. Ningún PASS técnico, histórico, de derechos o de publicación.
