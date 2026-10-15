# Modelo conceptual v0.1.1

Candidato documental, no aprobado ni validado. Procede de v0.1, F3 D01–D04 y el plan F4; no reemplaza sus fuentes.

## Identidad y referencias

La identidad local es (documento de registro, collection, id). Cada registro de este perfil contiene un caso; los IDs por colección deben ser únicos en ese documento. Para otro caso se usa otro registro/ámbito, sin renombrar MAIN ni T01–T12 del caso original. Un ID anidado de reading se identifica por transcripción padre e ID; no es destino genérico de referencias raíz.

Referencia local: collection, id, scope={kind:LOCAL_REGISTRY, registry_id}. Solo el documento contenedor define LOCAL_REGISTRY; el texto registry_id no es una identidad Git ni un permiso de importar otro documento con el mismo nombre. Referencia entre revisiones: scope={kind:GIT_DOCUMENT, repository, commit, path, git_blob}. El par commit/ruta debe contener el blob declarado; esa comprobación futura no se presume realizada.

Cada campo tiene un destino o una unión cerrada definida en el esquema y diccionario. La existencia, igualdad de ámbitos y pertenencia al caso requieren control semántico futuro. Un string que parece ID en claim.subject, conflict.alternatives o dependency.subject sigue siendo texto. legacy_evidence_refs se resuelve contra CASE, no contra el grafo interno.

T10 de source_snapshots y T10 de scene_bindings coexisten sin renombrar. Las ramas Git en branch_observed son etiquetas informativas; branches representa ramas ajedrecísticas. No se mezclan.

## Entidades y relaciones

- Game contiene branches, positions, moves y scene_bindings. Movimiento = identidad caso/rama/ply; escena = aparición narrativa.
- Source describe la obra/publicación; witness describe familia lógica, objetivo de adquisición u objeto de reproducción declarado. witness_version fija una revisión de repositorio a un source_snapshot. Un witness lógico no es imagen adquirida.
- Transcription identifica witness y witness_version exacta. Reading conserva raw/normalized y alternativas; normalizar mate a # no prueba mate.
- Observation conserva acto/reportado, sujeto, alcance, limitaciones y procedencia temporal; EvidenceLink relaciona claim y observation con alcance e independencia explícitos.
- Claim permanece UNASSESSED. historicalAssessment define una valoración futura con responsable, autoridad, fecha, alcance, evidencia, razones, limitaciones y revisión embebida con responsable/autoridad propios.
- Conflict conserva alternativas y requisito de resolución; no tiene elección canónica automática.
- Asset identifica rol/medio; RightsRecord identifica activo y use_id, finalidad y alcance. PermissionDocument describe futuro documento de permiso, no autorización implícita.
- Dependency bloquea una operación sobre una entidad mediante blocked_uses. Registrar una entidad y poder usarla para una conclusión son hechos diferentes.
- Revision identifica ámbito del registro y predecesor fijado, motivo, autor y fecha conocidos. provenance raíz fija ejemplo v0.1 y base F3.

## Testigos y disponibilidad

WIT-WINTER-REPO es LOGICAL_FAMILY; no adquirido/inspeccionado como objeto físico. WIT-WINTER-WIN2, WIT-WINTER-WIN1 y WIT-WINTER-WIN0 identifican contenidos Git distintos y genealogía documental, no genealogía de una planilla original. Todos mantienen canonical_selection=NONE y autenticación NOT_ESTABLISHED.

WIT-CR-FULL es TARGET_OBJECT: páginas completas no adquiridas, no inspeccionadas en fase registry. WIT-CR-FRAGMENT es REPRODUCTION_OBJECT: inspección parcial informada anteriormente; adquisición actual y autenticación no establecidas. original_object_ref y derived_from_ref son null cuando no hay identidad/cadena demostrada. No se crea un objeto original ficticio para rellenar una relación.

availability anterior se conserva como legacy_availability, sin usarlo como estado operativo combinado. Acquisition, inspection y authentication son dimensiones separadas; ninguna implica las otras.

## Confianza histórica y autoridad

La definición historicalAssessment es modelo documental reservado. El perfil candidato tiene historical_assessments=[] y claims.historical_assessment_refs=[]; confidence=UNASSESSED. Para introducir valoraciones haría falta una extensión revisada y evidencia real, no solo rellenar campos.

La evaluación propuesta debe fijar claim y versión, responsable, autoridad pertinente, fecha, alcance, observaciones de apoyo, razones, limitaciones y revisión. La revisión incluye responsable, autoridad, fecha, alcance, evidencias, independencia declarada y disposición. LOW, MODERATE y HIGH no se obtienen contando citas. MODERATE/HIGH requieren valorar contradicciones y dependencia entre fuentes; ni una estructura completa prueba competencia o verdad. Una revisión contraria no puede convertirse en elevación automática. No se infiere autoridad de un cargo, correo, fuente primaria o resultado técnico.

## Observaciones y bloqueos

Las tres observaciones se migran conservando contenido, fecha reportada y reporting_mode como descripción de su acto original. provenance.legacy_record_ref apunta al registro v0.1 inmutable; basis impide tratarlas como nueva inspección. observer/report_recorded_at desconocidos son null. original_act_date conserva la fecha reportada con calificación explícita, no una medición temporal independiente.

OBS-CASE ya registra lectura de declaraciones. DEP-R2 bloquea AUTHENTICATE_UNDERLYING_R2_BYTES, no esa lectura. DEP-BLIND bloquea evaluar claims, no su existencia. DEP-CR distingue adquirir páginas de autorizar uso comercial. DEP-IPN conserva [] por ser antecedente comparativo, no evidencia directa EP01.

## Ciclos y cambios

No exigir un grafo global acíclico: MAIN↔V-P1 y retornos narrativos son relaciones legítimas. Sí se requieren controles futuros de ciclos de parentesco, derivación, versiones y replay. No convertir T08/T09 en jugadas nuevas.

Los originales permanecen consultables. Un cambio de fuente exige otra revisión y estudio de impacto; no arrastrar confianza, permisos o validaciones. La revisión inicial se conserva con ámbito histórico y datos desconocidos null; una nueva revisión describe solo esta remediación.

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo M.
Política B: todos los procesos relevantes terminados y su terminación confirmada estrictamente antes de 120 segundos; stdout y stderr tienen límites independientes de 1.048.576 bytes emitidos Y aceptados durante toda su vida.
R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos = NOT_RUN. 77 negativos de router = NOT_RUN. Oráculo independiente de ajedrez = NOT_RUN.
No autorización de ejecución, render, publicación o merge. Ningún PASS técnico, histórico o de derechos. Los restantes controles de CASE, incluidos F03 y estados IVV, se conservan sin reinterpretación.
