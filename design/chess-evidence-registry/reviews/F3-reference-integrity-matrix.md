# Fase 3 — matriz final de integridad referencial

Complementa [mapa previo](2026-10-15-reference-type-map.md) e [inspección anidada](2026-10-15-nested-provenance-inspection.md). Base de contenido: 5ffb8ecd278c06d596349176040abe12c3f329af; notas leídas en 4f8bf0bb9ad6a48df3d00cc345c37842d2ff056b. Inspección manual, no resolvedor ni validación ejecutada.

## Referencias de esquema

Las 18 colecciones raíz apuntan respectivamente a snapshot, game, branch, position, move, source, witness, transcription, observation, claim, evidenceLink, conflict, scene, asset, rights, validation, dependency y revision. constraints apunta a constraints.
Los origins de las entidades que los admiten apuntan a origin; transcription.readings.items a reading; move.capture.anyOf a capture o null; scene.omitted_plies.anyOf a omission o null. Estos son todos los tipos de destinos $ref observados. Las 23 definiciones existen. No se detectó ciclo de $ref. No confundir $ref del esquema con IDs de datos.

## Destinos de datos y resultados de lectura

| Campo(s) | Destino / cardinalidad por referencia | Valores y conclusión limitada |
|---|---|---|
| origins[].snapshot_ref, incluidos readings/conflicts/revisions | source_snapshots; uno por origin | 101 ocurrencias con pertenencia documentada anteriormente. Existencia no resuelve locator |
| branches/positions/moves/scene_bindings.game_ref | games; 1 | ED-CASE-REAL-01 existe en el único caso |
| branches.parent_branch_ref | branches; 0:1 | MAIN→null; ALT_QD8→MAIN; sin ciclo parental visible |
| branches.shared_anchor_state_ref, return_anchor_state_ref | positions; 1 cada una | Ambas ramas ancladas en V-P1; asociación no crea movimiento |
| positions.branch_ref | branches; 1 | V-HYP→ALT_QD8; otros cinco→MAIN |
| moves.branch_ref | branches; 1 | Tres movimientos MAIN y uno ALT_QD8 |
| moves.from_state_ref/to_state_ref | positions; 1 cada una | Cuatro pares en tabla siguiente; ancla MAIN compartida con alternativa |
| witnesses.source_ref | sources; 1 | WIT-WINTER-REPO→SOURCE-WINTER; WIT-CR-FULL y FRAGMENT→SOURCE-CR-1956-12 |
| witnesses.derived_from_ref | witnesses, si se adopta esa definición; 0:1 | Tres null; no cadena demostrada entre fragmento y scan completo |
| transcriptions.witness_ref | witnesses; 1 | TRANS-WINTER-END→WIT-WINTER-REPO existente pero agregado de versiones (D04) |
| observations.subject_ref | unión sources/witnesses en este ejemplo | OBS-CASE→SOURCE-CASE; OBS-P374→WIT-CR-FRAGMENT; OBS-WINTER-REVISIONS→WIT-WINTER-REPO; falta discriminante (D01) |
| evidence_links.claim_ref | claims; 1 | LINK-CASE-1…7 corresponden a los siete claims en orden |
| evidence_links.observation_ref | observations; 1 | Los siete→OBS-CASE; no siete testimonios independientes |
| scene_bindings.move_ref | moves; 0:1 | Solo T02/03/06/08/09/11; ver tabla |
| scene_bindings.replay_of_event_ref | scene_bindings; 0:1 | T08→T02, T09→T03; demás null |
| scene_bindings.from_state_ref/to_state_ref | positions; 0:1 / 1 | Solo from de T01 es null |
| scene_bindings.from_branch_ref/to_branch_ref | branches; 0:1 / 1 | Solo from de T01 null; T05 MAIN→ALT, T07 ALT→MAIN |
| scene_bindings.return_anchor_state_ref | positions; 0:1 | T05/T07→V-P1; demás null |
| scene_bindings.claim_refs | claims; 0:N | T02/03/08/09 real; T05/06 hipótesis; T10 elipsis; T11 real+continuación; T12 continuación+cierre; T01/04/07 [] |
| scene_bindings.asset_refs | assets; 0:N | Los doce→ASSET-SUPPLIED-POSITION-DATA |
| assets.upstream_asset_refs | assets; 0:N | Ambos []; sin derivación declarada, no certificación de origen propio |
| rights_records.asset_ref | assets; 1 | RIGHTS-DATA→datos; RIGHTS-CR→PERIODICAL-CHESS-REVIEW-1956 |
| rights_records.permission_document_refs | documentos de permiso por definir | Ambos []; no destino real que contrastar. No inferir permiso |
| validation_records.result_artifact_refs | artefactos de ejecución, fuera de perfil actual | Tres []; maxItems=0; no resultado ni referencia fabricada |
| dependencies.blocked_refs | unión tipada pendiente | DEP-CR→witness+rights; DEP-BLIND→dos claims; DEP-R2→OBS-CASE (D03); DEP-IPN→[] |
| revisions.previous_record_ref | revisión/registro anterior inmutable por precisar | REGISTRY-DESIGN-INITIAL→null; cadena posterior aún sin instancia |
| claims/scene_bindings.legacy_evidence_refs | CASE#/evidence, externos al registro | EVID-LEDGER-R2, EVID-R2-RESULTS, EVID-SUPPLIED-CASE-CONTEXT, EVID-R2-PGN-DECLARATION; no huérfanos internos |
| claims.subject; conflicts.subject/alternatives; dependencies.subject | texto, no foreign keys declaradas | SOURCE-R2-PGN y T10 en subject no deben resolverse automáticamente |
| snapshot.branch_observed | etiqueta Git informativa | No reemplaza commit/path/git_blob ni define una entidad de branches (ramas ajedrecísticas) |

Conclusión limitada: los destinos poblados inequívocos se identifican en la colección prevista. Campos vacíos y polimórficos no quedan cualificados por ello. La definición de observation del modelo dice “entidad”; el ejemplo solo usa fuente/testigo. Una extensión debe enumerar el conjunto admitido, no asumir cualquier entidad.

## Identidades y eventos EP01

| Movimiento único | Origen → destino | Rama / ply | Apariciones |
|---|---|---|---|
| MOVE-MAIN-34, Be6 | V-P1→V-EV1 | MAIN / 34 | T02 y T08 |
| MOVE-MAIN-35, Bxb6 | V-EV1→V-REAL | MAIN / 35 | T03 y T09 |
| MOVE-ALT-QD8-34, Qd8 | V-P1→V-HYP | ALT_QD8 / 34 | T06, no jugada |
| MOVE-MAIN-50, Nxd1 | V-PRE-EV2→V-EV2 | MAIN / 50 | T11 |

Las seis posiciones son V-P1/33, V-EV1/34, V-REAL/35, V-HYP/34 alternativo, V-PRE-EV2/49 y V-EV2/50. V-PRE-EV2 es TECHNICAL_ONLY. No se derivó FEN ni legalidad.

| Evento | Enlace documental conservado | Distinción revisada |
|---|---|---|
| T01 | null→V-P1, MAIN | Inicialización, no jugada |
| T02 | MOVE-MAIN-34 | 17...Be6 declarado |
| T03 | MOVE-MAIN-35 | 18.Bxb6, captura declarada de dama negra |
| T04 | V-REAL→V-P1 | Rebobinado, sin SAN inverso |
| T05 | V-P1→V-P1, MAIN→ALT_QD8 | Ancla compartida; aviso hipotético |
| T06 | MOVE-ALT-QD8-34 | 17...Qd8 NO JUGADA |
| T07 | V-HYP→V-P1, ALT_QD8→MAIN | Restauración exacta antes de retirar aviso: requisito, no frames comprobados |
| T08 | MOVE-MAIN-34; replay T02 | Misma jugada, no nuevo ply histórico |
| T09 | MOVE-MAIN-35; replay T03 | Misma captura, no segunda dama |
| T10 | V-REAL→V-PRE-EV2 | Omisión inclusiva 36–49, 14 plies; move_ref null |
| T11 | MOVE-MAIN-50 | 25...Nxd1 desde estado técnico; captura declarada de torre blanca |
| T12 | V-EV2→V-EV2 | CIERRE EDITORIAL · LA PARTIDA CONTINÚA |

El detalle literal de rótulos, claims, evidencia legacy y obligaciones se reutiliza de [scene-traceability.md](../v0.1/scene-traceability.md). Cada evento conserva CASE#/timeline/i y OVER1/OVER0#/overlays/i. No se fusionan source_disclosure y required_display_label.

## Ciclos, colisiones y registros sin enlaces entrantes

T10 pertenece a source_snapshots y scene_bindings. La clave (tipo, caso/ámbito, ID) distingue ambas; no se renombra el evento. Los números ply34 de MAIN y ALT son identidades distintas. snapshot.branch_observed no pertenece a la colección de ramas de ajedrez.

ALT_QD8→MAIN→null es acíclico por parentesco; T08→T02→null y T09→T03→null por replay. Testigos derivados, activos upstream y predecesor inicial están vacíos/null. La asociación MAIN→V-P1→MAIN y los retornos narrativos son ciclos legítimos de relaciones diferentes. No exigir que el grafo completo sea un DAG.

OBS-P374, OBS-WINTER-REVISIONS y READ-WINTER-82 no son destino de evidence_links actuales; ello limita cobertura, pero no es un enlace roto. Snapshots de inventario sin enlace directo siguen sirviendo a reconciliación. No se ha demostrado ausencia universal de ciclos o huérfanos mediante ejecución.

## Git y procedencia

El inventario completo de 20 fuentes con repositorio, rama observada, commit, ruta y blob se conserva en [source-reconciliation.md](../v0.1/source-reconciliation.md#inventario-inmutable), sin duplicarlo ni actualizar sus observaciones históricas.

Winter: WIN2=926eae9e8b58d75fbc5f96d5133901f71d8a509b, WIN0=c90c42d27279ca0f1809098d0c49774149061cda. La reconciliación documenta mismas jugadas candidatas y advertencias historiográficas diferentes. Overlay: OVER1=57df8acf69cdd8516c5587100bc71c533b8ecf7a, OVER0=aafc6429d716863e225361dd4962169bf12ecfae; cuatro campos de identidad añadidos, sin cambio de los doce overlays en ese intervalo. Se retienen ambas versiones, WIN1/OVER2 y observaciones CURRENT. No se elige canon ni se altera MANIFEST/BRIDGE/router.

Las observaciones CURRENT del paquete significan “leído entonces”, no HEAD monitorizado. Esta reanudación verificó las dos ramas solicitadas, main y PR #12; no volvió a comprobar todos los HEAD de dependencias. Identidad Git no autentica el objeto histórico ni cualifica hashes R2.

## Inventario leído en esta reanudación

Todos los archivos siguientes se leyeron en el commit de revisión 4f8bf0bb9ad6a48df3d00cc345c37842d2ff056b. Los de v0.1 son los diez originales de Fase 2; hashes informados por GitHub, no certificados de autenticidad histórica.

| Ruta bajo design/chess-evidence-registry/ | Blob |
|---|---|
| reviews/2026-10-15-independent-review-notes.md | 20be49dcf9a260987429a6afc9d0cbf299999240 |
| reviews/2026-10-15-nested-provenance-inspection.md | 518feb8880a745f06f3964ed2a0f0c84e7f91dbb |
| reviews/2026-10-15-reference-type-map.md | afb30f74faeeb0ccbcec7a457bde47ea55244e03 |
| reviews/2026-10-15-semantic-required-field-review.md | 5fd982972bbf9417c210f914751cb177ad1d4c13 |
| v0.1/README.md | e6dedf710af7b895bd6faf9d3ced9e949965f353 |
| v0.1/conceptual-model.md | a818ef3ecc47fbf5715f8f56edac0de97f0c7100 |
| v0.1/ep01-example.json | 1d943d4d8bba613ad7c0382cfb2696e2406a9ae9 |
| v0.1/field-dictionary.md | bab392b0bea9d87e6958efea90f9126a5431254e |
| v0.1/future-validation-spec.md | 3c9c68e5c77544c75ca7add855f474111bfa405d |
| v0.1/integration-plan.md | 605807904066723fde4dffd27f4114ef41f862a8 |
| v0.1/registry.schema.json | 85740872bda4b553637c2a228cf65cc8e425beb9 |
| v0.1/rights-and-provenance.md | 6707c8ad05223de679d2a2f1809752631a03cfc2 |
| v0.1/scene-traceability.md | 04f5b6aa42df25cce45544aec0f76aafd9f2784a |
| v0.1/source-reconciliation.md | 44131df44df2da4c4b9c1eb671c36557b11be23f |

Solo se añaden notas de revisión. [Restricciones intactas](F3-final-audit.md#restricciones-preservadas); no PASS ni validación ejecutada.
