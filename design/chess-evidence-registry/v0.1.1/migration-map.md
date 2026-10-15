# Correspondencia v0.1 → v0.1.1

Migración de representación documental, no programa ejecutable. Base de los diez originales: 5ffb8ecd278c06d596349176040abe12c3f329af. Base de rama nueva: 6b0644623b23381ef8ae60afb9a735e60a96f93d. Toda escritura queda en v0.1.1; v0.1/reviews permanecen intactos.

## Cambios de datos

| v0.1 | v0.1.1 | Conservación / pérdida deliberada |
|---|---|---|
| registry_version 0.1-draft | 0.1.1-candidate; registry_id y provenance | Versión nueva; procedencia exacta añadida |
| *_ref internos como strings | collection/id/scope | Mismo ID y relación, destino explícito; formato no retrocompatible |
| origins.snapshot_ref string | referencia tipada; locator_kind añadido | Locator literal conservado |
| claim.subject y EVID-* externos | mismo texto/string | No reinterpretados como FK interna |
| T10 snapshot y T10 escena | mismos dos IDs con collection diferente | Ningún renombrado ni canon |
| Siete claims UNASSESSED | UNASSESSED constante; assessment_refs=[] | Ninguna valoración añadida |
| Sin modelo de evaluación | historicalAssessment con review embebida; historical_assessments=[] | Definición reservada, sin responsables o resultados inventados |
| WIT-WINTER-REPO agregado | mismo ID de familia lógica | Todos los orígenes conservados; identidad exacta en versiones |
| WIN2, WIN1, WIN0 | mismos snapshots + WIT-WINTER-WIN2/WIN1/WIN0 | Nuevos IDs de diseño, no nuevos testimonios históricos |
| TRANS-WINTER-END y READ-WINTER-82 | mismos IDs/textos + witness_version_ref WIN0 | No duplicar lectura para WIN1/WIN2 |
| witness.availability | legacy_availability + acquisition/inspection/authentication | Valor viejo conservado; estado compuesto desglosado |
| Tres observations | mismas declaraciones + provenance | No nueva inspección ni actualización de fechas reportadas |
| DEP-R2.blocked_refs OBS-CASE | blocked_uses AUTHENTICATE_UNDERLYING_R2_BYTES | Lectura realizada conservada, autenticación pendiente |
| DEP-CR / DEP-BLIND | blocked_uses por operación | Pendientes, sin eliminar entidades declaradas |
| DEP-IPN [] | blocked_uses [] | Antecedente comparativo conservado |
| Derechos por activo e intended_use | mismos valores + use_id y scope_basis | Sin permisos; permission_documents=[] |
| REGISTRY-DESIGN-INITIAL | mismo ID con record_scope histórico | Autor/fecha desconocidos null |
| Sin revisión F4 | REGISTRY-DOCUMENTARY-REMEDIATION-0.1.1 | Predecesor Git fijo, alcance documental local |
| constraints | copia literal | Sin cambios a requisitos ni estados |

Todos los IDs de entidades de v0.1 permanecen. Sus referencias cambian de representación, no su identidad. Enlace al registro anterior por provenance.derived_from; una lectura del formato viejo no acepta automáticamente el nuevo.

## EP01 conservado

Un juego, MAIN y ALT_QD8, seis posiciones, cuatro movimientos, doce escenas, siete claims, siete enlaces, cuatro conflictos, dos activos, dos derechos y tres validaciones. Los 20 snapshots se conservan sin repinar; se añaden tres versiones Winter y una revisión documental. Las colecciones de evaluaciones y permisos están vacías.

T02/T08 comparten MOVE-MAIN-34 (17...Be6); T03/T09 MOVE-MAIN-35 (18.Bxb6); T06 conserva MOVE-ALT-QD8-34 (17...Qd8 no jugada); T11 MOVE-MAIN-50 (25...Nxd1). FEN, SAN, casillas y capturas declarados se copian, no se recalculan. T07 requiere V-P1 y MAIN; T10 omite 36–49, 14 plies; T12 cierra editorialmente con LA PARTIDA CONTINÚA. Ninguna terminación histórica nueva.

## Correspondencia de documentos

| Archivo anterior | Tratamiento |
|---|---|
| README / conceptual-model / schema / dictionary / example | Nueva versión completa, cambios D01–D04 explícitos |
| scene-traceability.md | Tabla y obligaciones preservadas; nota sobre referencias tipadas |
| source-reconciliation.md | Inventario y genealogía preservados como observación anterior |
| rights-and-provenance.md | Reformulado con uso, disponibilidad y observaciones tipadas |
| future-validation-spec.md | Reutiliza CER-F01–F24 por referencia y añade plan v0.1.1 |
| integration-plan.md | Reutilizado por referencia; límites precisados en compatibility-matrix.md |
| Cuatro notas anteriores y cuatro F3/F4 | Intactos y referenciados; resultados limitados siguen perteneciendo a v0.1 |

## Inventario leído antes de editar

Repositorio único arriba indicado. Todas estas rutas se recuperaron en 6b0644623b23381ef8ae60afb9a735e60a96f93d. Los blobs de v0.1 coinciden con los originales. Son identidades Git informadas, no hashes cualificados de objetos históricos.

| Ruta bajo design/chess-evidence-registry/ | Blob |
|---|---|
| reviews/2026-10-15-independent-review-notes.md | 20be49dcf9a260987429a6afc9d0cbf299999240 |
| reviews/2026-10-15-nested-provenance-inspection.md | 518feb8880a745f06f3964ed2a0f0c84e7f91dbb |
| reviews/2026-10-15-reference-type-map.md | afb30f74faeeb0ccbcec7a457bde47ea55244e03 |
| reviews/2026-10-15-semantic-required-field-review.md | 5fd982972bbf9417c210f914751cb177ad1d4c13 |
| reviews/F3-defect-register.md | 8ff3389b1dcd2ab4d79674ae583cb5dd164bacde |
| reviews/F3-final-audit.md | 79f99a8edbc82ed87f0810cf1b7b432e2fb5f693 |
| reviews/F3-reference-integrity-matrix.md | 7325bf716d9647b61820724696105699671959fe |
| reviews/F4-documentary-remediation-plan.md | 4b685b0454fa4ce34f3f217453dc7be247ddf8ef |
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

Las cuatro notas 2026-10-15 conservan sus resultados de pertenencia, 101 snapshot_ref, required de primer nivel y límites. No se recalculan ni se atribuyen al nuevo esquema. F3 precisa 17 colecciones de entidades más snapshots (18 arrays originales). Los informes F3/F4 conservan su estado histórico de defectos abiertos y plan no ejecutado; remediation-report.md registra el tratamiento candidato posterior, sin reescribir esa historia.
