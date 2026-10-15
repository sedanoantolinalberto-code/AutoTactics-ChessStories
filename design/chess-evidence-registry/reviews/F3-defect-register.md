# Fase 3 — defectos, riesgos y cuestiones inconclusas

Base: diez archivos v0.1 en 5ffb8ecd278c06d596349176040abe12c3f329af; cuatro notas en 4f8bf0bb9ad6a48df3d00cc345c37842d2ff056b. Complemento de CER-R01–R15, no sustitución ni renumeración de esos hallazgos. Todos los D permanecen ABIERTOS; no se modifica el diseño.

Criticidad: media = ambigüedad o carencia documental relevante antes de reutilizar; alta = impacto potencial de integración o promoción de evidencia; crítica = bloqueo preexistente obligatorio. “Demostrado” se limita a evidencia textual citada, no a ejecución.

## Defectos documentales demostrados

### D01 — Destinos polimórficos y alcance de identidad incompletos — media

Evidencia: registry.schema.json #/$defs/observation/properties/subject_ref, dependency/blocked_refs, revision/previous_record_ref, rights/permission_document_refs; conceptual-model.md “Identidad y cambios”; diccionario “Referencias”.

Las referencias son cadenas, mientras identidad se declara por tipo y caso. El ejemplo usa SOURCE-CASE y WIT-CR-FRAGMENT como sujetos; DEP-CR bloquea un witness y un rights_record; DEP-BLIND claims; DEP-R2 una observation. No existe discriminante común ni scope explícito para resolver un predecesor en otro snapshot. permission_document_refs tampoco identifica una colección de documentos. La colisión snapshot T10 / escena T10 está demostrada, pero NO viola unicidad por tipo ni prueba que los enlaces actuales estén mal resueltos. claim.subject="T10" es texto de asunto, no foreign key declarada.

Corrección mínima propuesta: catálogo normativo de destinos; clave compuesta tipo+ID+ámbito, y referencia inmutable para revisiones externas. Conservar T01–T12 y demás IDs heredados. No renombrar T10 en CASE. Relacionado: CER-R01/R03/R07/R13.

### D02 — Valoración histórica exigida en prosa, no representada explícitamente — media

Evidencia: conceptual-model.md “Confianza” exige responsable, fecha, evidencia, alcance y revisión; #/$defs/claim permite LOW/MODERATE/HIGH, solo requiere confidence_rationale y origins, y cierra propiedades adicionales. field-dictionary.md admite que texto no vacío no acredita suficiencia.

El esquema no tiene assessment_ref ni campos de autoridad/revisor/fecha; una rationale puede narrarlos pero no asegura su presencia ni identifica una revisión estructurada. Es una brecha de representación/expresividad; no incumplimiento demostrado de los siete claims, todos UNASSESSED. No confundir origins de una declaración con evaluación competente de esa declaración.

Corrección mínima propuesta: mantener perfil actual UNASSESSED hasta diseñar evaluación trazable aparte; después, extensión versionada con identidad del evaluador, competencia/autoridad para ese ámbito, fecha, claim/revisión exactos, razones, evidencias y revisión. MODERATE y HIGH requieren justificación y límites; ningún nivel abre gates. Relacionado: CER-R02/R10.

### D03 — DEP-R2 no especifica qué uso de OBS-CASE bloquea — media

Evidencia: ejemplo dependencies[id=DEP-R2].blocked_refs=["OBS-CASE"]; observations[id=OBS-CASE] declara lectura de repositorio realizada, scope “Candidate declarations, not underlying R2 artifacts”; diccionario dependency dice que blocked_refs delimita requisitos.

Los bytes R2 faltantes bloquean autenticación/contraste de los artefactos subyacentes, pero no la lectura documental ya registrada. El enlace no distingue bloquear la realización de una observación de bloquear su uso como prueba más fuerte. El texto permite esta ambigüedad sin invalidar ni inventar la observación.

Corrección mínima propuesta: mantener OBS-CASE inmutable; representar objetivo pendiente o blocked_use explícito (“autenticar/contrastar R2”), conservar dependencia abierta. No borrar OBS-CASE ni afirmar R2 disponible. Relacionado: CER-R13/R12.

### D04 — Un testigo exacto agrupa revisiones Winter distintas — media

Evidencia: conceptual-model.md define witness como objeto concreto; diccionario transcription exige objeto exacto. Ejemplo WIT-WINTER-REPO tiene locator sin commit y origins WIN0 y WIN2, identity_status conserva ambas. TRANS-WINTER-END.witness_ref apunta a ese agregado; sus origins y lectura READ-WINTER-82 sí fijan WIN0.

Los orígenes conservan la información, pero witness_ref por sí solo no identifica una versión exacta. Las revisiones tienen blobs y contenido historiográfico diferentes. No hay pérdida demostrada ni normalización atribuida falsamente: WIN0 se recupera leyendo origins.

Corrección mínima propuesta: separar testigo lógico de versión, o testigos por revisión; fijar la transcripción a WIN0 y preservar WIN1/WIN2 con sus relaciones. No declarar una versión canónica de la historia. Relacionado: CER-R04/R11.

## Riesgos preservados o precisados

| ID nuevo | Nivel | Evidencia y riesgo | Tratamiento documental |
|---|---|---|---|
| R01 | Alto, integración (CER-R04) | Contrato v0.2 cerrado; escena registry exige move_ref/omitted_plies null/origins, v0.2 usa move y prohíbe payloads inaplicables | No copia directa ni mero renombrado; matriz de proyección futura. Faltan moving_piece/color/special_move en move registry; no inferirlos automáticamente |
| R02 | Medio (CER-R11) | availability combina ubicación, inspección y reporte; identity_status es texto libre | Separar adquisición, cobertura inspeccionada y autenticación; WIT-CR-FULL sigue no adquirido |
| R03 | Medio (CER-R08) | commercial_status y consultation_status separados, pero permisos son strings y scope/fechas pueden ser null | Uso identificado por activo+finalidad+plataforma+territorio+vigencia; no grant universal ni inferir permiso de [] |
| R04 | Alto, integración (CER-R04) | WIN2 frente WIN0, OVER1 frente OVER0 y branch_observed mutable | Conservar pins, revisiones y advertencias; “CURRENT” es observación histórica del paquete, no actualización viva |
| R05 | Medio (CER-R07) | revision solo id/previous/change/basis/origins; no objeto revisado ni fecha explícitos | Precisar sujeto, versión, autoría y alcance; cadena inmutable fuera de contratos |
| R06 | Medio (CER-R09/R12) | observation.reported_date tiene un solo reloj; no observador/reportero tipados | Distinguir acto original, registro del informe y consulta actual; no convertir B1571 en inspección propia |
| R07 | Medio | origin.locator mezcla JSON Pointer, encabezado y selector textual; arrays sin mínimos | Tipar locator y declarar cardinalidad esperada; no afirmar resolución solo por snapshot existente |
| R08 | Medio | V-P1 pertenece MAIN pero es ancla compartida en ALT_QD8 | Reglas de contexto activo distintas de propiedad de posición; no rechazar T05/T06 por igualdad ingenua |
| R09 | Bajo | Campos nullable admiten string vacío; casillas de move sin patrón, capture permite K; ply posición mínimo 1 | Definir dominios y si se representan errores de fuente. No se observó captura de rey ni ply0 en EP01 |
| R10 | Medio | source_class carece de manuscrito primario; perfil no admite validación ejecutada ni lectura ciega certificada | Límites de reutilización, no completar con estados ficticios; extensión futura separada |
| R11 | Medio | Los siete enlaces apoyan solo declaraciones de OBS-CASE; otras observaciones/lectura sin enlace claim | Cobertura parcial expresada; registro sin enlace entrante no equivale a referencia huérfana |
| R12 | Alto, epistemológico (CER-R05/R15) | Final/ronda, originales y permisos pendientes | Documentación primaria y juicio competente externos; no resolubles por software |
| R13 | Crítico, gate preexistente (CER-R06) | E5B4D NO-GO bajo M | Ningún cambio documental ni futura prueba propuesta lo levanta |

## Qué no se registra como defecto demostrado

No se detectó $ref local inexistente; no faltan movimientos por el reuso T08/T09; T10 no es jugada; T12 no termina la partida. Null en derived_from_ref no prueba independencia y [] no prueba inexistencia. Un ciclo de navegación narrativa o asociación bidireccional branch/position no es una derivación circular inválida. Campos/controles deliberadamente diferidos no constituyen tests fallados. Las 101 referencias existentes no certifican selectores ni tipos universales.

## No concluyente sin ejecución o evidencia externa

Validación formal y adversa, claves duplicadas, integridad referencial automática, compatibilidad de un adaptador aún inexistente, replay y legalidad, medidas y frames siguen sin ejecutar. Autenticidad, ronda/final y derechos requieren evidencia externa y revisión competente; ni ejecutar un esquema bastaría.

Todos los controles futuros siguen NOT_RUN. Las restricciones y estados exactos se conservan en [informe final](F3-final-audit.md#restricciones-preservadas).
