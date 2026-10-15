# Informe de remediación D01–D04

Estado de cada hallazgo: TRATADO EN DISEÑO CANDIDATO, PENDIENTE DE REVISIÓN Y VALIDACIÓN AUTORIZADA. No se declara cierre técnico ni aprobación histórica. La revisión F3 original conserva sus estados históricos ABIERTOS.

## D01 — Referencias tipadas

Implementación documental en registry.schema.json: localScope/gitScope y referencias con collection, id y scope. Definiciones monomórficas restringen colección; subjectRef y blockedTargetRef enumeran uniones. previousRevisionRef y legacyObservationRef permiten documento Git inmutable. El ejemplo adapta todas las referencias internas pobladas, incluidos origins anidados; EVID-* sigue externo y claim.subject sigue texto.

T10 conserva ambas identidades: source_snapshots/T10 y scene_bindings/T10. Se preservan también MAIN, ALT_QD8, V-*, claims, observaciones y demás IDs anteriores. La identidad local tiene ámbito del documento candidato y la externa commit/ruta/blob. No se inventa un hash autorreferente del archivo nuevo.

Límite: el esquema solo propone estructura de la referencia; existencia, tipo semántico, igualdad de ámbito/caso y selectores requieren controles futuros. No hay resolvedor.

## D02 — Evaluación histórica y revisión

Se incorpora historicalAssessment: claim_ref, responsible, authority, assessed_at, scope, evidence_refs, rationale, limitations, proposed_confidence y review, con origins. La revisión embebida registra responsible, authority, reviewed_at, scope, evidence_refs, rationale, independence_status, disposition y origins. El modelo permite describir una valoración futura y su revisión sin inventar autoridad actual.

El candidato fija confidence=UNASSESSED. historical_assessments y historical_assessment_refs deben estar vacíos: no hay evaluador, evaluación ni permiso para promover estado. LOW/MODERATE/HIGH solo aparecen en la definición reservada de propuesta de evaluación. El simple hecho de rellenar el modelo futuro no bastaría para suficiencia histórica ni aprobación.

Límite: aún hace falta revisión competente del propio modelo y un perfil futuro autorizado para registrar evaluaciones reales; no se cambia el resultado de ningún claim.

## D03 — Bloqueo R2 por uso

DEP-R2 conserva observed_status ORIGINAL_BYTES_UNAVAILABLE, fecha reportada, condiciones y orígenes. Sustituye blocked_refs por blocked_uses con target_ref observations/OBS-CASE y operation AUTHENTICATE_UNDERLYING_R2_BYTES. scope dice expresamente que la lectura documental realizada no queda bloqueada ni revocada.

OBS-CASE conserva método, alcance, limitaciones y declaración original; provenance enlaza exactamente la observación de v0.1. DEP-CR y DEP-BLIND también expresan operaciones pendientes, sin borrar sus entidades. DEP-IPN permanece sin uso EP01 bloqueado.

Límite: no hay bytes R2 adquiridos, contrastados o autenticados, ni replay; no se inventa una nueva observación para aparentarlo.

## D04 — Versiones Winter y transcripción

WIT-WINTER-REPO mantiene su ID como familia lógica. witness_versions separa:
- WIT-WINTER-WIN2 → snapshot WIN2, blob 926eae9e8b58d75fbc5f96d5133901f71d8a509b.
- WIT-WINTER-WIN1 → WIN1, blob 9172831e19a98635017a298e456b4c489398a494.
- WIT-WINTER-WIN0 → WIN0, blob c90c42d27279ca0f1809098d0c49774149061cda.

previous_version_ref representa WIN2→WIN1→WIN0 según la genealogía ya documentada. No deriva una reproducción física ni selecciona autoridad histórica. canonical_selection=NONE en las tres.

TRANS-WINTER-END y READ-WINTER-82 conservan contenido y IDs; witness_version_ref fija WIT-WINTER-WIN0, coherente con sus origins existentes. No se inventa transcripción derivada de WIN1/WIN2 ni se cuenta la normalización terminal como nueva lectura primaria. Las otras revisiones conservan posibilidad de transcripción futura, sin instancias ficticias.

Límite: referencias Git no autentican la planilla ni resuelven el final; las advertencias de distintas revisiones siguen preservadas.

## Mejoras complementarias

Adquisición/inspección/autenticación separadas; identidad original y derivación desconocidas explícitas; procedencia de observaciones con fecha original reportada frente a fecha de migración; derechos por use_id sin autorización; historial de revisión con scope inmutable; política explícita de no proyección directa a v0.2. No se amplían dominios de movimientos, tipos de fuente o resultados ejecutados fuera de estas correcciones.

## Revisión documental de preparación

Se revisaron decisiones y fragmentos preparados de referencias, versiones, transcripción, DEP-R2, procedencia y restricciones mediante lectura. No se ha validado el schema ni contrastado automáticamente su instancia. Los 101 enlaces y ausencia limitada de huérfanos de Fase 3 corresponden a v0.1. El nuevo candidato requiere su propia revisión futura. La lectura posterior del conector solo confirma almacenamiento.

## Problemas abiertos

Suficiencia y coherencia formal del esquema candidato; integridad semántica y locators; ciclos de revisiones/derivaciones; modelo de valoración sujeto a revisión competente; disponibilidad primaria, R2, lectores ciegos, final/ronda, derechos; compatibilidad de un adaptador todavía inexistente. Ninguno se da por resuelto mediante la remediación documental.

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo M.
Política B: todos los procesos relevantes terminados y su terminación confirmada estrictamente antes de 120 segundos; stdout y stderr tienen límites independientes de 1.048.576 bytes emitidos Y aceptados durante toda su vida.
R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos = NOT_RUN. 77 negativos de router = NOT_RUN. Oráculo independiente de ajedrez = NOT_RUN.
No autorización de ejecución, render, publicación o merge. Ningún PASS técnico, histórico o de derechos. Los restantes controles de CASE, incluidos F03 y estados IVV, se conservan sin reinterpretación.
