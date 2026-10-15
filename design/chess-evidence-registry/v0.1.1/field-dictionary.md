# Diccionario v0.1.1

Candidato documental NO VALIDADO. El catálogo de campos abajo describe el esquema propuesto, no certifica conformidad del ejemplo. Cada objeto está cerrado y sus campos enumerados son obligatorios; los nullable conservan desconocido/no aplicable según el campo. [] es ausencia de registros, no evidencia de inexistencia.

## Raíz y ámbitos

registry_version=chess-evidence-registry/0.1.1-candidate; status=DOCUMENTARY_DESIGN_NOT_APPROVED; repository fija el único repositorio. registry_id identifica el documento local. provenance.derived_from fija commit/ruta/blob del ejemplo anterior; review_basis_commit fija Fase 3, review_directory su ruta y migration_status prohíbe confundir preparación con validación.

Las 18 colecciones de v0.1 se conservan y se añaden witness_versions, historical_assessments y permission_documents. games contiene un caso. Las dos últimas colecciones nuevas tienen maxItems=0 en este candidato. Sus definiciones reservadas son diseño futuro, no datos faltantes a inventar.

## Referencias normativas

Toda referencia interna poblada pasa a {collection,id,scope}. Los Ref monomórficos limitan collection; subjectRef admite sources/witnesses/witness_versions; blockedTargetRef admite witnesses/rights_records/claims/observations. Solo previousRevisionRef y legacyObservationRef admiten GIT_DOCUMENT además del ámbito local; el ejemplo usa Git para conservar predecesor y observaciones originales. Un consumidor no debe buscar por ID en todas las colecciones ni usar una rama mutable para resolver un scope Git.

| Campo | Colección destino |
|---|---|
| origins.snapshot_ref; witness_versions.snapshot_ref | source_snapshots |
| game_ref | games |
| parent_branch_ref, branch_ref, from_branch_ref, to_branch_ref | branches |
| *_state_ref y anclas | positions |
| witness.source_ref | sources |
| witness.derived_from_ref, original_object_ref; transcription.witness_ref; witness_version.witness_ref | witnesses |
| transcription.witness_version_ref; previous_version_ref; provenance.subject_version_refs | witness_versions |
| observation.subject_ref | sources / witnesses / witness_versions |
| evidenceLink.claim_ref; scene.claim_refs; assessment.claim_ref | claims |
| evidenceLink.observation_ref; assessment/review.evidence_refs | observations |
| scene.move_ref | moves |
| replay_of_event_ref | scene_bindings |
| scene.asset_refs, rights.asset_ref, upstream_asset_refs, permission.covered_asset_ref | assets |
| rights.permission_document_refs | permission_documents |
| claim.historical_assessment_refs | historical_assessments (vacío en candidato) |
| dependency.blocked_uses.target_ref | witnesses / rights_records / claims / observations |
| revision.previous_record_ref | revisions, con ámbito local o Git |
| observation.provenance.legacy_record_ref | observations en documento anterior |

legacy_evidence_refs conserva cadenas externas EVID-* de CASE. result_artifact_refs sigue vacío por NOT_RUN y no define un destino ejecutado. claim.subject, conflict.subject/alternatives y dependency.subject son texto; no resolver automáticamente T10 o SOURCE-R2-PGN contenidos allí.

## Semántica por entidad

- origin: snapshot_ref tipado, locator literal preservado y locator_kind. # es DOCUMENT_ROOT; #/... es JSON_POINTER; demás TEXT_SELECTOR, sin fingir un selector ejecutable ni certificar coincidencia de encabezado.
- snapshot: repository+commit+path+git_blob fija texto Git; branch_observed es observación mutable histórica. identity_scope=GIT_REPOSITORY_IDENTITY_ONLY y raw_byte_authentication=NOT_QUALIFIED no autentican bytes históricos.
- game: identidad suministrada, historical_ending_status separado del cierre narrativo.
- branch: parent null en MAIN; anclas compartidas V-P1. factuality REAL_DECLARED no significa autenticidad.
- position: ply declarado, fen_declared preservado, propiedad de rama distinta de contexto activo. V-PRE-EV2 TECHNICAL_ONLY; historical_authentication NOT_VERIFIED.
- move/capture: datos declarados, no reconstruidos. Identidad por caso/rama/ply; capture null sin captura declarada en el ejemplo. legality_status NOT_RUN. No se amplía ahora a un verificador ajedrecístico.
- witness: object_type conserva clase de objeto declarada, identity_role distingue familia/objetivo/reproducción. legacy_availability es texto de estado anterior preservado. original_object_ref null = identidad original no establecida; derived_from_ref null = derivación no demostrada. No significa independencia.
- witnessVersion: fija una revisión exacta mediante snapshot_ref, familia witness_ref y previous_version_ref documental. coverage limita el contenido; canonical_selection NONE. Estados de adquisición/lectura corresponden a lo reportado en v0.1; no nueva adquisición de scan.
- reading: raw_text y normalized_text mantienen procedencia y nota de normalización; alternatives=[] no adjudica lectura histórica.
- transcription: witness_ref identifica familia y witness_version_ref versión exacta. Deben concordar mediante control semántico futuro. reader/raw_frozen_at null, blind_status NOT_APPLICABLE conservan ausencia de nueva lectura primaria.
- observation: reporting_mode describe el acto registrado originalmente. reported_date no se actualiza porque se relea el paquete. provenance conserva enlace inmutable, observer desconocido null, original_act_date con basis SOURCE_REPORTED_DATE_NOT_INDEPENDENTLY_VERIFIED, report_recorded_at desconocido null, migrated_on fecha de preparación y subject_version_refs cuando se examinaron revisiones.
- claim: confidence UNASSESSED obligatorio; rationale conserva razones de no valoración. admissibility_status PENDING_REVIEW independiente. historical_assessment_refs vacío, sin autoridad implícita.
- historicalAssessment (reservado): responsible/authority/assessed_at/scope/evidence_refs/rationale/limitations/proposed_confidence/review/origins. evidence_refs requiere al menos una observación pertinente; no suficiente por sí misma. review es objeto embebido con responsable, autoridad, fecha, alcance, evidencia, fundamento, independencia declarada y disposición. No tiene aprobación global ni abre gates. Las cadenas de identidad/autoridad deben respaldarse con origins y juicio competente, no inventarse.
- evidenceLink: relation SUPPORTS se interpreta junto a scope y limitations. Los siete enlaces conservados apoyan existencia de declaraciones, no autenticidad. independence_status SAME_SOURCE no se transforma por tipado.
- conflict: estados OPEN o REVISION_LINEAGE_IDENTIFIED_NO_CANONICAL_SELECTION; alternativas no son votos ni versión elegida.
- omission: first/last inclusivos y count; coherencia aritmética pendiente de control futuro. No movimiento.
- scene: mantiene kind, estados, ramas, move_ref y replay, con null explícitos del registro. source_disclosure y required_display_label son capas distintas. warning_release_requirement es obligación; timing_status UNMEASURED no mide frames.
- asset: rol de datos o facsímil, disponibilidad declarada y upstream vacío sin independencia probada.
- rights: asset_ref+use_id identifica uso documental. intended_use/platform/territory/validity/attribution/restrictions mantienen alcance; scope_basis DOCUMENTED_INTENDED_USE_NOT_PERMISSION. consultation_status no autoriza reproducción. commercial_status PENDING/NOT_CLEARED/NOT_AUTHORIZED no equivalen a denegación expresa ni permiso. Los null no significan uso mundial/indefinido.
- permissionDocument (reservado): documento identificado por origin, otorgante y base de autoridad si constan, activo, use_id y alcance; review_status NOT_ESTABLISHED. El candidato no admite instancias, no permite fabricar un permiso para completar el modelo.
- validation: requirement describe futuro; specification_count cuenta especificaciones. execution_status NOT_RUN, result null, result_artifact_refs vacío; no PASS.
- dependency: observed_status/status_as_of son reporte histórico, no monitor. blocked_uses lleva target_ref tipado, operation, status PENDING y scope. No dice que la entidad no exista. closure_evidence_required conserva condiciones faltantes.
- revision: ID original conservado; record_scope identifica documento al que se refiere. previous_record_ref fija predecesor, change/basis explican edición, author/revision_date conocidos o null. La revisión nueva es autoría documental, no IVV.
- constraints: const preservado íntegro. require_* expresa requisito; compliance_status NOT_ESTABLISHED y execution_authorized/publication_authorized false son independientes.

## Catálogo de campos del esquema propuesto

Tipos Ref apuntan a definiciones locales del esquema; no constituyen resolución de entidades. Las restricciones detalladas (minLength, patrones, mínimos, maxItems) están en registry.schema.json. El catálogo se compone como documentación, no como comprobación ejecutada.


### origin

| Campo | Tipo propuesto |
|---|---|
| snapshot_ref | snapshotRef |
| locator | string |
| locator_kind | enum JSON_POINTER / DOCUMENT_ROOT / TEXT_SELECTOR |

### snapshot

| Campo | Tipo propuesto |
|---|---|
| id | string |
| repository | const "sedanoantolinalberto-code/AutoTactics-ChessStories" |
| branch_observed | string |
| commit | string |
| path | string |
| git_blob | string |
| identity_scope | const "GIT_REPOSITORY_IDENTITY_ONLY" |
| raw_byte_authentication | const "NOT_QUALIFIED" |

### game

| Campo | Tipo propuesto |
|---|---|
| id | string |
| title | string |
| white | string |
| black | string |
| identity_status | enum SOURCE_DECLARED / UNASSESSED |
| historical_ending_status | enum UNKNOWN / UNRESOLVED |
| origins | array de origin |

### branch

| Campo | Tipo propuesto |
|---|---|
| id | string |
| game_ref | gameRef |
| factuality | enum REAL_DECLARED / HYPOTHETICAL |
| parent_branch_ref | branchRef o null |
| shared_anchor_state_ref | positionRef |
| return_anchor_state_ref | positionRef |
| origins | array de origin |

### position

| Campo | Tipo propuesto |
|---|---|
| id | string |
| game_ref | gameRef |
| ply | integer |
| branch_ref | branchRef |
| fen_declared | string |
| visibility | enum VISUAL / TECHNICAL_ONLY |
| historical_authentication | enum NOT_VERIFIED |
| origins | array de origin |

### capture

| Campo | Tipo propuesto |
|---|---|
| piece | enum P / N / B / R / Q / K |
| color | enum white / black |
| square | string |

### move

| Campo | Tipo propuesto |
|---|---|
| id | string |
| game_ref | gameRef |
| branch_ref | branchRef |
| ply | integer |
| san | string |
| from_state_ref | positionRef |
| to_state_ref | positionRef |
| from_square | string |
| to_square | string |
| capture | capture o null |
| historical_status | enum SOURCE_DECLARED_PLAYED / HYPOTHETICAL_NOT_PLAYED |
| legality_status | const "NOT_RUN" |
| origins | array de origin |

### source

| Campo | Tipo propuesto |
|---|---|
| id | string |
| title | string |
| source_class | enum PRIMARY_PERIODICAL / SECONDARY_PUBLICATION / SUPPLIED_DECLARATION |
| author | string o null |
| publication_date | string o null |
| url | string o null |
| origins | array de origin |

### witness

| Campo | Tipo propuesto |
|---|---|
| id | string |
| source_ref | sourceRef |
| object_type | enum ORIGINAL_OBJECT / ARCHIVAL_SCAN / SECONDARY_REPRODUCTION / REPOSITORY_TRANSCRIPTION |
| locator | string |
| coverage | string |
| derived_from_ref | witnessRef o null |
| identity_status | string |
| origins | array de origin |
| legacy_availability | enum LOCATED_NOT_FULLY_INSPECTED / REPORTED_PARTIAL_INSPECTION / REPOSITORY_TEXT_READ |
| identity_role | enum LOGICAL_FAMILY / TARGET_OBJECT / REPRODUCTION_OBJECT |
| original_object_ref | witnessRef o null |
| acquisition_status | enum NOT_APPLICABLE_LOGICAL_FAMILY / NOT_ACQUIRED / NOT_ESTABLISHED |
| inspection_status | enum NOT_APPLICABLE_LOGICAL_FAMILY / NOT_INSPECTED_IN_REGISTRY_PHASE / PRIOR_PARTIAL_INSPECTION_REPORTED |
| authentication_status | const "NOT_ESTABLISHED" |

### reading

| Campo | Tipo propuesto |
|---|---|
| id | string |
| locator | string |
| raw_text | string o null |
| normalized_text | string o null |
| notation | string |
| normalization_note | string |
| alternatives | array de string |
| origins | array de origin |

### transcription

| Campo | Tipo propuesto |
|---|---|
| id | string |
| witness_ref | witnessRef |
| reader | string o null |
| method | string |
| blind_status | enum NOT_ESTABLISHED / NOT_BLIND / NOT_APPLICABLE |
| raw_frozen_at | string o null |
| coverage | string |
| readings | array de reading |
| origins | array de origin |
| witness_version_ref | witnessVersionRef |

### observation

| Campo | Tipo propuesto |
|---|---|
| id | string |
| subject_ref | subjectRef |
| reporting_mode | enum CURRENT_REPOSITORY_READ / REPORTED_PRIOR_OBSERVATION |
| reported_date | string o null |
| method | string |
| scope | string |
| limitations | array de string |
| origins | array de origin |
| provenance | observationProvenance |

### claim

| Campo | Tipo propuesto |
|---|---|
| id | string |
| category | enum HISTORY_FACT / HYPOTHETICAL / INTERPRETATION / SOURCE_METADATA |
| text | string |
| subject | string |
| confidence | const "UNASSESSED" |
| confidence_rationale | string |
| admissibility_status | const "PENDING_REVIEW" |
| legacy_evidence_refs | array de string |
| origins | array de origin |
| historical_assessment_refs | array de assessmentRef (vacío obligatorio) |

### evidenceLink

| Campo | Tipo propuesto |
|---|---|
| id | string |
| claim_ref | claimRef |
| observation_ref | observationRef |
| relation | enum SUPPORTS / CONTRADICTS / CONTEXT_ONLY |
| scope | string |
| independence_status | enum NOT_ESTABLISHED / SAME_SOURCE |
| limitations | array de string |

### conflict

| Campo | Tipo propuesto |
|---|---|
| id | string |
| subject | string |
| status | enum OPEN / REVISION_LINEAGE_IDENTIFIED_NO_CANONICAL_SELECTION |
| alternatives | array de string |
| resolution_requirement | string |
| origins | array de origin |

### omission

| Campo | Tipo propuesto |
|---|---|
| first | integer |
| last | integer |
| count | integer |
| semantics | const "INCLUSIVE_MOVES_NOT_SHOWN" |

### scene

| Campo | Tipo propuesto |
|---|---|
| id | string |
| game_ref | gameRef |
| kind | enum SET_POSITION / REAL_MOVE / REWIND / ENTER_HYPOTHETICAL / HYPOTHETICAL_MOVE / RETURN_TO_REAL / ELLIPSIS / SEQUENCE_END |
| from_state_ref | positionRef o null |
| to_state_ref | positionRef |
| from_branch_ref | branchRef o null |
| to_branch_ref | branchRef |
| move_ref | moveRef o null |
| replay_of_event_ref | sceneRef o null |
| omitted_plies | omission o null |
| return_anchor_state_ref | positionRef o null |
| source_disclosure | string |
| required_display_label | string |
| warning_release_requirement | string |
| claim_refs | array de claimRef |
| legacy_evidence_refs | array de string |
| asset_refs | array de assetRef |
| timing_status | const "UNMEASURED" |
| origins | array de origin |

### asset

| Campo | Tipo propuesto |
|---|---|
| id | string |
| medium | string |
| description | string |
| availability | string |
| upstream_asset_refs | array de assetRef |
| origins | array de origin |

### rights

| Campo | Tipo propuesto |
|---|---|
| id | string |
| asset_ref | assetRef |
| consultation_status | string |
| commercial_status | enum PENDING / NOT_CLEARED / NOT_AUTHORIZED |
| rightsholder | string o null |
| permission_document_refs | array de permissionRef |
| intended_use | string |
| platform | string o null |
| territory | string o null |
| validity | string o null |
| attribution | string o null |
| restrictions | array de string |
| origins | array de origin |
| use_id | string |
| scope_basis | const "DOCUMENTED_INTENDED_USE_NOT_PERMISSION" |

### validation

| Campo | Tipo propuesto |
|---|---|
| id | string |
| layer | enum SEMANTIC_NEGATIVES / ROUTER_NEGATIVES / CHESS_ORACLE / HISTORY / RIGHTS |
| requirement | string |
| specification_count | integer o null |
| execution_status | const "NOT_RUN" |
| result | null |
| result_artifact_refs | array de sin elementos admitidos (vacío obligatorio) |
| origins | array de origin |

### dependency

| Campo | Tipo propuesto |
|---|---|
| id | string |
| subject | string |
| observed_status | string |
| status_as_of | string o null |
| closure_evidence_required | array de string |
| origins | array de origin |
| blocked_uses | array de blockedUse |

### revision

| Campo | Tipo propuesto |
|---|---|
| id | string |
| previous_record_ref | previousRevisionRef o null |
| change | string |
| basis | string |
| origins | array de origin |
| record_scope | localScope o gitScope |
| revision_date | string o null |
| author | string o null |

### constraints

Objeto constante de restricciones; no datos de cumplimiento observado.

### localScope

| Campo | Tipo propuesto |
|---|---|
| kind | const "LOCAL_REGISTRY" |
| registry_id | string |

### gitScope

| Campo | Tipo propuesto |
|---|---|
| kind | const "GIT_DOCUMENT" |
| repository | const "sedanoantolinalberto-code/AutoTactics-ChessStories" |
| commit | string |
| path | string |
| git_blob | string |

### documentIdentity

| Campo | Tipo propuesto |
|---|---|
| kind | const "GIT_DOCUMENT" |
| repository | const "sedanoantolinalberto-code/AutoTactics-ChessStories" |
| commit | string |
| path | string |
| git_blob | string |

### provenance

| Campo | Tipo propuesto |
|---|---|
| derived_from | documentIdentity |
| review_basis_commit | const "6b0644623b23381ef8ae60afb9a735e60a96f93d" |
| review_directory | const "design/chess-evidence-registry/reviews/" |
| migration_status | const "DOCUMENTARY_CANDIDATE_NOT_VALIDATED" |

### gameRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum games |
| id | string |
| scope | localScope |

### branchRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum branches |
| id | string |
| scope | localScope |

### positionRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum positions |
| id | string |
| scope | localScope |

### moveRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum moves |
| id | string |
| scope | localScope |

### sourceRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum sources |
| id | string |
| scope | localScope |

### witnessRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum witnesses |
| id | string |
| scope | localScope |

### witnessVersionRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum witness_versions |
| id | string |
| scope | localScope |

### observationRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum observations |
| id | string |
| scope | localScope |

### claimRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum claims |
| id | string |
| scope | localScope |

### sceneRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum scene_bindings |
| id | string |
| scope | localScope |

### assetRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum assets |
| id | string |
| scope | localScope |

### rightsRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum rights_records |
| id | string |
| scope | localScope |

### snapshotRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum source_snapshots |
| id | string |
| scope | localScope |

### permissionRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum permission_documents |
| id | string |
| scope | localScope |

### assessmentRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum historical_assessments |
| id | string |
| scope | localScope |

### subjectRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum sources / witnesses / witness_versions |
| id | string |
| scope | localScope |

### blockedTargetRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum witnesses / rights_records / claims / observations |
| id | string |
| scope | localScope |

### previousRevisionRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum revisions |
| id | string |
| scope | localScope o gitScope |

### legacyObservationRef

| Campo | Tipo propuesto |
|---|---|
| collection | enum observations |
| id | string |
| scope | localScope o gitScope |

### witnessVersion

| Campo | Tipo propuesto |
|---|---|
| id | string |
| witness_ref | witnessRef |
| snapshot_ref | snapshotRef |
| previous_version_ref | witnessVersionRef o null |
| object_type | const "REPOSITORY_TRANSCRIPTION_VERSION" |
| acquisition_status | const "REPOSITORY_TEXT_AVAILABLE_AS_REPORTED" |
| inspection_status | const "REPOSITORY_READ_REPORTED_IN_V0_1" |
| authentication_status | const "NOT_ESTABLISHED" |
| canonical_selection | const "NONE" |
| coverage | string |
| origins | array de origin |

### observationProvenance

| Campo | Tipo propuesto |
|---|---|
| legacy_record_ref | legacyObservationRef |
| basis | const "MIGRATED_REPORTED_ACT_NOT_NEW_INSPECTION" |
| observer | string o null |
| original_act_date | string o null |
| report_recorded_at | string o null |
| migrated_on | const "2026-10-15" |
| subject_version_refs | array de witnessVersionRef |
| original_act_date_basis | const "SOURCE_REPORTED_DATE_NOT_INDEPENDENTLY_VERIFIED" |

### historicalAssessment

| Campo | Tipo propuesto |
|---|---|
| id | string |
| claim_ref | claimRef |
| responsible | string |
| authority | string |
| assessed_at | string |
| scope | string |
| evidence_refs | array de observationRef |
| rationale | string |
| limitations | array de string |
| proposed_confidence | enum LOW / MODERATE / HIGH |
| review | historicalAssessmentReview |
| status | const "REPORTED_ASSESSMENT_NOT_VERIFIED" |
| origins | array de origin |

### historicalAssessmentReview

| Campo | Tipo propuesto |
|---|---|
| responsible | string |
| authority | string |
| reviewed_at | string |
| scope | string |
| evidence_refs | array de observationRef |
| rationale | string |
| independence_status | enum NOT_ESTABLISHED / INDEPENDENCE_REPORTED_NOT_VERIFIED |
| disposition | enum REPORTED_CONCUR / REPORTED_DISAGREE / REQUIRES_MORE_EVIDENCE |
| origins | array de origin |

### permissionDocument

| Campo | Tipo propuesto |
|---|---|
| id | string |
| document_origin | origin |
| grantor | string o null |
| authority_basis | string o null |
| covered_asset_ref | assetRef |
| use_id | string |
| scope | string |
| review_status | const "NOT_ESTABLISHED" |

### blockedUse

| Campo | Tipo propuesto |
|---|---|
| target_ref | blockedTargetRef |
| operation | enum ACQUIRE_FULL_WITNESS / AUTHORIZE_COMMERCIAL_USE / ASSESS_HISTORICAL_CLAIM / AUTHENTICATE_UNDERLYING_R2_BYTES |
| status | const "PENDING" |
| scope | string |

## Política B

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo M.
Política B: todos los procesos relevantes terminados y su terminación confirmada estrictamente antes de 120 segundos; stdout y stderr tienen límites independientes de 1.048.576 bytes emitidos Y aceptados durante toda su vida.
R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos = NOT_RUN. 77 negativos de router = NOT_RUN. Oráculo independiente de ajedrez = NOT_RUN.
No autorización de ejecución, render, publicación o merge. Ningún PASS técnico, histórico o de derechos. Los restantes controles de CASE, incluidos F03 y estados IVV, se conservan sin reinterpretación.
