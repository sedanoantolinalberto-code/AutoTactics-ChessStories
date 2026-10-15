# Chess Evidence Registry v0.1.1 — Documentary Remediation

Estado: DOCUMENTARY_DESIGN_NOT_APPROVED. Candidato documental NO VALIDADO.
Fecha de preparación: 2026-10-15. Repositorio: sedanoantolinalberto-code/AutoTactics-ChessStories.

La Fase 4 materializa correcciones de diseño; no implementa componentes ejecutables. El esquema es una propuesta Draft 2020-12, no contrato aprobado. Se preservan los diez archivos v0.1 y las ocho notas de revisión.

## Base y preflight

- Rama de referencia observada: chess-stories/evidence-registry-v0.1-review-notes, HEAD 6b0644623b23381ef8ae60afb9a735e60a96f93d; coincide con la base solicitada.
- Rama original observada: chess-stories/evidence-registry-v0.1-documentary, HEAD 5ffb8ecd278c06d596349176040abe12c3f329af.
- Rama candidata: chess-stories/evidence-registry-v0.1.1-remediation, creada desde el commit Fase 3.
- main observado: 8e1ad7e0dd8fabadd1674733353988ff5136b63d. PR #12: 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd, abierta/draft/no fusionada.
- Inventario de la base sin v0.1.1, AGENTS.md ni workflows; rama candidata ausente del inventario previo. Sin colisión de rutas.
- Los diez originales, cuatro informes F3/F4 y cuatro notas previas se recuperaron íntegramente por GitHub. Sus identidades se conservan en migration-map.md. No nueva investigación archivística ni correo.

La composición de texto JSON a partir del documento anterior no es una migración ejecutable entregada, una suite ni un validador. No se ejecutó el esquema o el ejemplo, motor, tests, scripts del proyecto, Actions o render. El readback comprueba solo persistencia textual.

## Paquete completo

| Archivo | Función |
|---|---|
| conceptual-model.md | Identidades, referencias, evaluación, testigos y límites |
| registry.schema.json | Diseño candidato cerrado; referencias tipadas y modelos nuevos |
| field-dictionary.md | Semántica y catálogo de campos |
| ep01-example.json | Caso completo adaptado, sin nueva evidencia |
| migration-map.md | Correspondencia e inventario de procedencia |
| remediation-report.md | Tratamiento documental de D01–D04 y límites |
| compatibility-matrix.md | v0.1, snapshots y contrato cerrado v0.2 |
| future-validation-plan.md | Controles futuros no ejecutados |
| scene-traceability.md | Doce eventos, cuatro movimientos, seis posiciones |
| source-reconciliation.md | Veinte snapshots y genealogía conservada |
| rights-and-provenance.md | Acceso, uso, observaciones y derechos |

## Decisiones de alcance

Un registro candidato contiene un caso; los snapshots se identifican dentro del registro, no por ID global. Se conservan T10 snapshot y T10 escena, diferenciados por collection. Las referencias locales quedan vinculadas al documento contenedor; citar desde otro documento exige commit/ruta/blob. No se inventa el hash del propio archivo dentro de sí mismo.

Todos los claims siguen UNASSESSED. historical_assessments y permission_documents permanecen vacíos y el perfil candidato impide añadir instancias. Sus definiciones documentan qué datos requeriría una extensión autorizada; no crean evaluadores o permisos ficticios. No se añade PASS a validation_records.

WIT-WINTER-REPO se conserva como familia lógica, con versiones separadas WIN2→WIN1→WIN0. TRANS-WINTER-END conserva su ID y texto, ligado exactamente a WIN0. No se crean transcripciones inexistentes para WIN1/WIN2. DEP-R2 conserva la dependencia y limita explícitamente el uso bloqueado de OBS-CASE.

Los recuentos 101 referencias/17 colecciones y observaciones limitadas de Fase 3 describen v0.1, no validan este candidato. La nueva versión añade tres colecciones (witness_versions, historical_assessments, permission_documents), además de metadatos; ninguna cifra anterior se presenta como comprobación nueva.

## Límites congelados

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo M.
Política B: todos los procesos relevantes terminados y su terminación confirmada estrictamente antes de 120 segundos; stdout y stderr tienen límites independientes de 1.048.576 bytes emitidos Y aceptados durante toda su vida.
R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos = NOT_RUN. 77 negativos de router = NOT_RUN. Oráculo independiente de ajedrez = NOT_RUN.
No autorización de ejecución, render, publicación o merge. Ningún PASS técnico, histórico o de derechos. Los restantes controles de CASE, incluidos F03 y estados IVV, se conservan sin reinterpretación.
