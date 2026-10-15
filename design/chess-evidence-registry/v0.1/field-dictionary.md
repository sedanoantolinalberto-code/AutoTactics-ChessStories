# Diccionario de campos

Perfil documental v0.1, no contrato de producción aprobado. Todos los campos listados por entidad son obligatorios en este perfil; los que admiten null distinguen desconocido/no aplicable, según el contexto. Objetos cerrados: additionalProperties=false. Arrays vacíos representan ausencia de registros, no prueba de inexistencia.

## Raíz

registry_version identifica el diseño; status=DOCUMENTARY_DESIGN_NOT_APPROVED; repository fija alcance. Cada colección se corresponde con su definición: source_snapshots→snapshot, games→game, branches→branch, positions→position, moves→move, sources→source, witnesses→witness, transcriptions→transcription, observations→observation, claims→claim, evidence_links→evidenceLink, conflicts→conflict, scene_bindings→scene, assets→asset, rights_records→rights, validation_records→validation, dependencies→dependency, revisions→revision. constraints referencia las obligaciones congeladas.

## Referencias

Los campos *_ref internos apuntan al ID de la entidad del tipo indicado en conceptual-model.md. origins enlaza siempre source_snapshots; legacy_evidence_refs conserva IDs de CASE, no observaciones internas. claim_refs en escenas referencia claims; asset_refs referencia assets. Permisos futuros deben usar documentos identificados, nunca una cadena vacía para aparentar evidencia. La resolución de referencias y unicidad por ID son controles futuros, no funciones ejecutadas por este JSON.

## origin

snapshot_ref remite a source_snapshots.id; locator delimita el JSON Pointer, encabezado o selector textual observado.

| Campo | Tipo / restricción estructural |
|---|---|
| snapshot_ref | string |
| locator | string |

## snapshot

repository fija el único repositorio autorizado; branch_observed es etiqueta mutable informativa; commit+path+git_blob identifican el contenido. identity_scope y raw_byte_authentication prohíben confundir Git con autenticación de bytes originales.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| repository | const "sedanoantolinalberto-code/AutoTactics-ChessStories" |
| branch_observed | string |
| commit | string |
| path | string |
| git_blob | string |
| identity_scope | const "GIT_REPOSITORY_IDENTITY_ONLY" |
| raw_byte_authentication | const "NOT_QUALIFIED" |

## game

id conserva case_id; title/white/black son identidad suministrada. historical_ending_status no se deduce del final del guion.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| title | string |
| white | string |
| black | string |
| identity_status | SOURCE_DECLARED / UNASSESSED |
| historical_ending_status | UNKNOWN / UNRESOLVED |
| origins | array de #/$defs/origin |

## branch

game_ref relaciona el caso; factuality REAL_DECLARED significa línea declarada real, no autenticada. parent_branch_ref es null en MAIN. shared/return_anchor_state_ref identifican V-P1 sin añadir jugadas.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| game_ref | string |
| factuality | REAL_DECLARED / HYPOTHETICAL |
| parent_branch_ref | string o null |
| shared_anchor_state_ref | string |
| return_anchor_state_ref | string |
| origins | array de #/$defs/origin |

## position

ply identifica media jugada declarada; fen_declared es texto preservado, no FEN derivado por oráculo. branch_ref y visibility son independientes de la ocupación.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| game_ref | string |
| ply | integer |
| branch_ref | string |
| fen_declared | string |
| visibility | VISUAL / TECHNICAL_ONLY |
| historical_authentication | NOT_VERIFIED |
| origins | array de #/$defs/origin |

## capture

piece y color identifican víctima declarada; square es casilla de captura, no necesariamente destino en otros casos futuros.

| Campo | Tipo / restricción estructural |
|---|---|
| piece | P / N / B / R / Q / K |
| color | white / black |
| square | string |

## move

Identidad por caso/rama/ply, independiente del evento. san y casillas se conservan; capture=null significa sin captura declarada en estos ejemplos. historical_status separa SOURCE_DECLARED_PLAYED de HYPOTHETICAL_NOT_PLAYED; legality_status no informa de una ejecución.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| game_ref | string |
| branch_ref | string |
| ply | integer |
| san | string |
| from_state_ref | string |
| to_state_ref | string |
| from_square | string |
| to_square | string |
| capture | #/$defs/capture o null |
| historical_status | SOURCE_DECLARED_PLAYED / HYPOTHETICAL_NOT_PLAYED |
| legality_status | const "NOT_RUN" |
| origins | array de #/$defs/origin |

## source

source_class clasifica la obra respecto a la afirmación, no la calidad de cualquier copia. author/publication_date/url pueden ser desconocidos; YYYY-MM expresa precisión mensual, no un día inventado.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| title | string |
| source_class | PRIMARY_PERIODICAL / SECONDARY_PUBLICATION / SUPPLIED_DECLARATION |
| author | string o null |
| publication_date | string o null |
| url | string o null |
| origins | array de #/$defs/origin |

## witness

object_type distingue original, escaneo, reproducción y transcripción de repositorio. locator+coverage limitan lo observado; derived_from_ref solo relaciona derivaciones documentadas, nunca inferidas por compartir título.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| source_ref | string |
| object_type | ORIGINAL_OBJECT / ARCHIVAL_SCAN / SECONDARY_REPRODUCTION / REPOSITORY_TRANSCRIPTION |
| locator | string |
| coverage | string |
| availability | LOCATED_NOT_FULLY_INSPECTED / REPORTED_PARTIAL_INSPECTION / REPOSITORY_TEXT_READ |
| derived_from_ref | string o null |
| identity_status | string |
| origins | array de #/$defs/origin |

## reading

raw_text preserva lo visto/informado; normalized_text mantiene una transformación documentada; no rellenar huecos desde una respuesta esperada. alternatives conserva otras lecturas sin adjudicarlas.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| locator | string |
| raw_text | string o null |
| normalized_text | string o null |
| notation | string |
| normalization_note | string |
| alternatives | array de string |
| origins | array de #/$defs/origin |

## transcription

witness_ref identifica el objeto exacto. reader desconocido es null. blind_status y raw_frozen_at no se fabrican. coverage puede ser un fragmento, aunque el documento de origen contenga la partida completa.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| witness_ref | string |
| reader | string o null |
| method | string |
| blind_status | NOT_ESTABLISHED / NOT_BLIND / NOT_APPLICABLE |
| raw_frozen_at | string o null |
| coverage | string |
| readings | array de #/$defs/reading |
| origins | array de #/$defs/origin |

## observation

reporting_mode diferencia lectura actual de repositorio de observación previa informada. reported_date corresponde al acto informado; method, scope y limitations impiden ampliar la cobertura. No significa inspección actual de imágenes externas.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| subject_ref | string |
| reporting_mode | CURRENT_REPOSITORY_READ / REPORTED_PRIOR_OBSERVATION |
| reported_date | string o null |
| method | string |
| scope | string |
| limitations | array de string |
| origins | array de #/$defs/origin |

## claim

category separa historia, hipótesis, interpretación y metadatos. confidence requiere rationale; no equivale a validación técnica. legacy_evidence_refs se resuelve en CASE#/evidence. admissibility_status permanece pendiente.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| category | HISTORY_FACT / HYPOTHETICAL / INTERPRETATION / SOURCE_METADATA |
| text | string |
| subject | string |
| confidence | UNASSESSED / LOW / MODERATE / HIGH |
| confidence_rationale | string |
| admissibility_status | const "PENDING_REVIEW" |
| legacy_evidence_refs | array de string |
| origins | array de #/$defs/origin |

## evidenceLink

claim_ref+observation_ref delimitan la relación SUPPORTS/CONTRADICTS/CONTEXT_ONLY. scope puede apoyar solo la existencia de una declaración. independence_status no se infiere de coincidencias.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| claim_ref | string |
| observation_ref | string |
| relation | SUPPORTS / CONTRADICTS / CONTEXT_ONLY |
| scope | string |
| independence_status | NOT_ESTABLISHED / SAME_SOURCE |
| limitations | array de string |

## conflict

subject define la pregunta, alternatives preserva versiones o relatos. status distingue genealogía identificada de asunto histórico abierto; no hay campo de versión canónica. resolution_requirement indica evidencia que falta.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| subject | string |
| status | OPEN / REVISION_LINEAGE_IDENTIFIED_NO_CANONICAL_SELECTION |
| alternatives | array de string |
| resolution_requirement | string |
| origins | array de #/$defs/origin |

## omission

first/last son inclusivos; count debe ser last-first+1 mediante control futuro. No representa un movimiento.

| Campo | Tipo / restricción estructural |
|---|---|
| first | integer |
| last | integer |
| count | integer |
| semantics | const "INCLUSIVE_MOVES_NOT_SHOWN" |

## scene

id conserva Txx; kind y estados/ramas preservan el caso. move_ref enlaza movimiento, replay_of_event_ref marca repetición. omitted_plies y return_anchor_state_ref solo aplican a los eventos correspondientes. source_disclosure preserva el texto del caso y required_display_label el del overlay, sin confundir capas. warning_release_requirement es obligación, no hecho observado. claim_refs/asset_refs son internos; legacy_evidence_refs externos. timing_status no aporta tiempo medido.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| game_ref | string |
| kind | SET_POSITION / REAL_MOVE / REWIND / ENTER_HYPOTHETICAL / HYPOTHETICAL_MOVE / RETURN_TO_REAL / ELLIPSIS / SEQUENCE_END |
| from_state_ref | string o null |
| to_state_ref | string |
| from_branch_ref | string o null |
| to_branch_ref | string |
| move_ref | string o null |
| replay_of_event_ref | string o null |
| omitted_plies | #/$defs/omission o null |
| return_anchor_state_ref | string o null |
| source_disclosure | string |
| required_display_label | string |
| warning_release_requirement | string |
| claim_refs | array de string |
| legacy_evidence_refs | array de string |
| asset_refs | array de string |
| timing_status | const "UNMEASURED" |
| origins | array de #/$defs/origin |

## asset

medium y description identifican rol; availability diferencia datos disponibles de archivos no creados. upstream_asset_refs no vacío en futuros derivados cuando se conozcan dependencias; vacío no certifica ausencia universal.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| medium | string |
| description | string |
| availability | string |
| upstream_asset_refs | array de string |
| origins | array de #/$defs/origin |

## rights

consultation_status no autoriza commercial_status. permission_document_refs contiene referencias solo si existen; titular y alcance desconocidos permanecen null. intended_use no acredita permiso.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| asset_ref | string |
| consultation_status | string |
| commercial_status | PENDING / NOT_CLEARED / NOT_AUTHORIZED |
| rightsholder | string o null |
| permission_document_refs | array de string |
| intended_use | string |
| platform | string o null |
| territory | string o null |
| validity | string o null |
| attribution | string o null |
| restrictions | array de string |
| origins | array de #/$defs/origin |

## validation

requirement es condición futura; specification_count cuenta propuestas, no ejecuciones. execution_status=NOT_RUN implica result=null y result_artifact_refs vacío. No incluye estado PASS en este perfil documental.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| layer | SEMANTIC_NEGATIVES / ROUTER_NEGATIVES / CHESS_ORACLE / HISTORY / RIGHTS |
| requirement | string |
| specification_count | integer o null |
| execution_status | const "NOT_RUN" |
| result | null |
| result_artifact_refs | array |
| origins | array de #/$defs/origin |

## dependency

observed_status y status_as_of son la última observación documentada, no monitorización viva. closure_evidence_required y blocked_refs delimitan requisitos; no cierran un gate por sí solos.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| subject | string |
| observed_status | string |
| status_as_of | string o null |
| closure_evidence_required | array de string |
| blocked_refs | array de string |
| origins | array de #/$defs/origin |

## revision

previous_record_ref puede ser null en primera revisión. change y basis explican evolución documental sin reemplazar fuentes anteriores.

| Campo | Tipo / restricción estructural |
|---|---|
| id | string |
| previous_record_ref | string o null |
| change | string |
| basis | string |
| origins | array de #/$defs/origin |

## constraints

Constantes del perfil autorizado. Campos require_* y *_requirement son obligaciones. compliance_status=NOT_ESTABLISHED y autorizaciones false son estados separados. Las constantes no prueban que el entorno satisfaga Política B.

## Requisitos de Política B

- require_all_relevant_processes_terminated=true exige terminación de todos los procesos relevantes; NO dice que haya ocurrido.
- require_termination_confirmed=true exige confirmación; NO la registra como obtenida.
- require_termination_and_confirmation_strictly_before_seconds=120 aplica a AMBAS obligaciones y excluye igualdad con 120.
- stdout_requirement y stderr_requirement: maximum_bytes=1048576 por flujo, accounting_scope=ENTIRE_PROCESS_LIFETIME y counting_requirement=EMITTED_AND_ACCEPTED.
- require_independent_stream_limits=true impide sumar flujos o sustituirlo por truncación de logs.
- compliance_status=NOT_ESTABLISHED, E5B4D inmutable bajo M y execution_authorized=false.

## Perfil deliberadamente limitado

El esquema representa propuestas, evidencia documental y estados pendientes. No es un sistema de certificados ni admite resultados ejecutados en validation_records. Una extensión futura para resultados requerirá diseño separado con objetivo/revisión, mecanismo cualificado, artefactos, identidad, fecha y revisión independiente; no basta con añadir PASS a un enum. El control de confianza motivada requiere revisión humana; una cadena no vacía no garantiza suficiencia.
