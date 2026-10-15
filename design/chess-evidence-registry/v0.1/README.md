# Chess Evidence Registry v0.1 — diseño documental

Estado: DOCUMENTARY_DESIGN_NOT_APPROVED. Fecha de observación: 2026-10-15.
Repositorio exclusivo: sedanoantolinalberto-code/AutoTactics-ChessStories.

Este paquete materializa la fase 2 autorizada. Es documentación y datos de ejemplo; no incluye componentes ejecutables, adaptadores, tests, motores, renders ni workflows. registry.schema.json es un artefacto de diseño JSON Schema 2020-12 no aprobado y NO VALIDADO. No se instala ni se conecta al contrato de producción.

## Preflight y aislamiento

- PR #12 observada abierta, draft, sin merge; HEAD 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd, idéntico al snapshot de fase 1. No hay commits posteriores que revisar en esa PR.
- Base de la nueva rama: main observado en 8e1ad7e0dd8fabadd1674733353988ff5136b63d. Se crea una referencia independiente; main no se modifica.
- Rama prevista: chess-stories/evidence-registry-v0.1-documentary.
- Inventarios recursivos de main y HEAD de PR #12 obtenidos completos, sin truncación: no existe design/chess-evidence-registry/v0.1/, ni AGENTS.md ni .github/workflows en esos árboles. No colisiones de destino.
- El inventario de ramas no contenía la rama prevista.
- Las dependencias documentales de PR #3 y #7 sí tienen revisiones posteriores a los snapshots usados en fase 1; se describen en source-reconciliation.md.
- Todas las referencias son externas al paquete y están fijadas a commit/ruta/blob. No se presupone que existan como archivos locales en esta rama.

## Archivos

| Archivo | Función |
|---|---|
| conceptual-model.md | Entidades, relaciones y límites de autoridad |
| registry.schema.json | Propuesta estructural cerrada para el perfil documental |
| field-dictionary.md | Semántica, campos y referencias |
| ep01-example.json | Seis estados, doce eventos, evidencias y conflictos documentados |
| scene-traceability.md | Mapeo T01–T12 |
| source-reconciliation.md | Preflight, inventario inmutable y divergencias |
| rights-and-provenance.md | Derechos por activo y procedencia |
| future-validation-spec.md | Invariantes y controles futuros no ejecutados |
| integration-plan.md | Secuencia futura y riesgos; no autorización |

## Restricciones inmutables

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo M.
Política B requiere todos los procesos relevantes terminados Y su terminación confirmada estrictamente antes de 120 segundos; stdout y stderr tienen límites INDEPENDIENTES de 1.048.576 bytes EMITIDOS Y ACEPTADOS durante toda su vida.
R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos, 77 negativos de router y oráculo independiente = NOT_RUN.
No aprobación técnica, histórica, de derechos, ejecución o publicación.

Los demás controles del caso, incluidos F03 y los estados IVV existentes, se conservan por referencia CASE#/frozen_gates y CASE#/claim_admissibility; no se recalculan ni reinterpretan. Los PASS LIMITED históricos que aparezcan en las fuentes no son nuevos resultados del registro ni aprobación global.

## Alcance de la revisión

Las comprobaciones actuales son lecturas de repositorio y del diff servido por GitHub. Las observaciones históricas se atribuyen a sus documentos originales; no se consultaron de nuevo imágenes, archivos externos ni Gmail. Los IDs nuevos son identificadores de diseño, no certificados. Las declaraciones de hash R2 no se convierten en hashes medidos.

La lectura posterior de archivos comprueba persistencia documental mediante el conector, no validez de esquema, legalidad, autenticidad, derechos ni comportamiento. Todos los controles futuros permanecen NOT_RUN. No se solicita merge ni se crea una publicación.
