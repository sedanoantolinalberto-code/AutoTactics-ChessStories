# Procedencia v0.1.1 — conservación de reconciliación

Este candidato conserva los 20 snapshots de v0.1 sin repinar. La procedencia actual del paquete y preflight están en README.md y migration-map.md. Debajo se reproduce la reconciliación de Fase 2, commit 5ffb8ecd278c06d596349176040abe12c3f329af, blob 44131df44df2da4c4b9c1eb671c36557b11be23f.

IMPORTANTE: “actual”, “HEAD”, “fase” y “se añadirán” en el texto histórico siguiente corresponden a aquella observación/plan de Fase 2, no a una nueva consulta de todos los HEAD ni a esta rama. La Fase 4 comprobó las referencias indicadas en su README. La identidad de cada versión Winter se añade en witness_versions; ningún contenido de fuente ni selección canónica cambia. El inventario siguiente es el origen documental conservado, no nueva evidencia primaria.

---

# Reconciliación de fuentes y preflight

Observación actual: 2026-10-15. Solo lecturas GitHub, metadatos y diffs servidos por GitHub; no scripts del proyecto, validadores, pruebas ni nuevas inspecciones archivísticas. Repositorio de TODAS las referencias: sedanoantolinalberto-code/AutoTactics-ChessStories.

## Snapshot y colisiones

PR #12 HEAD 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd: igual al usado en fase 1. Base de PR #12: chess-stories/semantic-contract-v0.2, commit 8e3da6639060a1605947bfc3aedd4113ab0068a1. Continúa abierta/draft/no fusionada.

La rama documental se basa en main 8e1ad7e0dd8fabadd1674733353988ff5136b63d, cuyo árbol contiene solo .gitattributes, .gitignore y README.md. No se cambia main. El inventario recursivo de PR #12 y el de main no contienen el directorio destino; tampoco AGENTS.md ni workflows. Rama chess-stories/evidence-registry-v0.1-documentary ausente en el inventario previo. Solo se añadirán los diez archivos previstos dentro de design/chess-evidence-registry/v0.1/.

## Inventario inmutable

Las ramas de esta tabla expresan procedencia observada, no una versión inmóvil. commit indica una revisión donde el blob se leyó; no afirma ser siempre el commit creador. Todas las identidades son Git, no hashes cualificados de bytes históricos. Identificadores de tabla coinciden con source_snapshots del ejemplo.

| ID | Rama de procedencia | Commit leído | Ruta | Blob |
|---|---|---|---|---|
| CASE | chess-stories/integration-assurance-gates-rfc-v0.1 | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | [cases/ED-CASE-REAL-01.v0.2.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd/cases/ED-CASE-REAL-01.v0.2.json) | 3514f19ac355763a5b4c61d5c573df090b0eccc1 |
| CONTRACT | chess-stories/integration-assurance-gates-rfc-v0.1 | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | [contracts/scene-contract-v0.2.schema.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd/contracts/scene-contract-v0.2.schema.json) | 7dc513bad7082e54c8ade5f0568202cd804ba3c0 |
| MANIFEST | chess-stories/integration-assurance-gates-rfc-v0.1 | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | [integration/EP01-CROSS-LAYER-ROUTING.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd/integration/EP01-CROSS-LAYER-ROUTING.v0.1.json) | 48b4124b0fa22c097ca33f53696974789867408f |
| BRIDGE | chess-stories/integration-assurance-gates-rfc-v0.1 | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | [integration/EP01-ORACLE-SOURCE-BRIDGE.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd/integration/EP01-ORACLE-SOURCE-BRIDGE.v0.1.json) | c284e3ccb72f376d23d2ae86e7d6262ee313a1a2 |
| T10 | chess-stories/integration-assurance-gates-rfc-v0.1 | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | [sources/EP01-T10-SECONDARY-SAN-36-49.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd/sources/EP01-T10-SECONDARY-SAN-36-49.v0.1.json) | 06746705894dcd797c13d4775b4367848da61023 |
| B1571 | chess-stories/integration-assurance-gates-rfc-v0.1 | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | [research/CHESS-STORIES-B1571-CHESS-REVIEW-P374-VISUAL-EXCERPT-2026-10-15.md](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd/research/CHESS-STORIES-B1571-CHESS-REVIEW-P374-VISUAL-EXCERPT-2026-10-15.md) | 1962921e625019f97c0d241ee4791b677c36a2f6 |
| OUTREACH | chess-stories/integration-assurance-gates-rfc-v0.1 | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | [research/CHESS-STORIES-POST-OUTREACH-EVIDENCE-STATUS-2026-10-15.md](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd/research/CHESS-STORIES-POST-OUTREACH-EVIDENCE-STATUS-2026-10-15.md) | 50996fdb9ab095af7895a30b26bb59bf9292e4a7 |
| HISTORY | chess-stories/secondary-pgn-result-reconciliation | 541cfa4ae1df0ea52b36ada1f0379bc4e02c8aa9 | [docs/HISTORICAL_WITNESSES_EP01_1956.md](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/541cfa4ae1df0ea52b36ada1f0379bc4e02c8aa9/docs/HISTORICAL_WITNESSES_EP01_1956.md) | 9875132a0b681b7722f0f4e40cd85193d12a77e2 |
| BLIND | chess-stories/secondary-pgn-result-reconciliation | 541cfa4ae1df0ea52b36ada1f0379bc4e02c8aa9 | [docs/EP01-PRIMARY-BLIND-TRANSCRIPTION-PROTOCOL.v0.1.md](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/541cfa4ae1df0ea52b36ada1f0379bc4e02c8aa9/docs/EP01-PRIMARY-BLIND-TRANSCRIPTION-PROTOCOL.v0.1.md) | df8e99a3420dd57aa7eaf4a73e7b34d84b70437f |
| RIGHTS | chess-stories/r6-asset-rights-inventory-v0.1 | 87cb4aac391147ed8d2b1509ddb3b23b98ca0783 | [rights/R6-EP01-ASSET-REGISTER-DRAFT.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/87cb4aac391147ed8d2b1509ddb3b23b98ca0783/rights/R6-EP01-ASSET-REGISTER-DRAFT.json) | 9815bd94095f5df35d243050676b3a4b7a4e4e49 |
| WIN0 | chess-stories/secondary-pgn-result-reconciliation | 166685bbe394251f2195fbde03ac9691c4c7ccdf | [sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/166685bbe394251f2195fbde03ac9691c4c7ccdf/sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json) | c90c42d27279ca0f1809098d0c49774149061cda |
| WIN1 | chess-stories/secondary-pgn-result-reconciliation | ee3703c71e7aeb9b5fee10f8d8eac079db17f72e | [sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/ee3703c71e7aeb9b5fee10f8d8eac079db17f72e/sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json) | 9172831e19a98635017a298e456b4c489398a494 |
| WIN2 | chess-stories/secondary-pgn-result-reconciliation | a89f9c24b06f522ea60d8ee7c6229a2f0a1bf301 | [sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/a89f9c24b06f522ea60d8ee7c6229a2f0a1bf301/sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json) | 926eae9e8b58d75fbc5f96d5133901f71d8a509b |
| OVER0 | chess-stories/presentation-truth-overlay-rfc-v0.1 | 6f6a78ba84abe83f5cd1c65044947dd77a10d270 | [editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/6f6a78ba84abe83f5cd1c65044947dd77a10d270/editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json) | aafc6429d716863e225361dd4962169bf12ecfae |
| OVER1 | chess-stories/presentation-truth-overlay-rfc-v0.1 | fa942d79a414ee3bc617b241a12f2cc58169d651 | [editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/fa942d79a414ee3bc617b241a12f2cc58169d651/editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json) | 57df8acf69cdd8516c5587100bc71c533b8ecf7a |
| OVER2 | chess-stories/presentation-truth-overlay-rfc-v0.1 | d0f0d57afd385c0c91c90f709b36632b338d0f12 | [editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/d0f0d57afd385c0c91c90f709b36632b338d0f12/editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json) | 03a3fdcd56403866496bc788c6846c3a769747bb |
| BASELINE | chess-stories/r6-asset-rights-inventory-v0.1 | 87cb4aac391147ed8d2b1509ddb3b23b98ca0783 | [docs/R6_EP01_CLEAN_ROOM_PRODUCTION_BASELINE.v0.1.md](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/87cb4aac391147ed8d2b1509ddb3b23b98ca0783/docs/R6_EP01_CLEAN_ROOM_PRODUCTION_BASELINE.v0.1.md) | 84b12042e23efe812e247d0b2af5d6bd09a2016c |
| WINCURRENT | chess-stories/secondary-pgn-result-reconciliation | 541cfa4ae1df0ea52b36ada1f0379bc4e02c8aa9 | [sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/541cfa4ae1df0ea52b36ada1f0379bc4e02c8aa9/sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json) | c90c42d27279ca0f1809098d0c49774149061cda |
| OVERCURRENT | chess-stories/presentation-truth-overlay-rfc-v0.1 | 8f35555d03e5052cd4fbe5bd086ae46083c47878 | [editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/8f35555d03e5052cd4fbe5bd086ae46083c47878/editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json) | aafc6429d716863e225361dd4962169bf12ecfae |
| DESKAUDIT | chess-stories/integration-assurance-gates-rfc-v0.1 | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | [research/CHESS-STORIES-B2172-B3171-INDIVIDUAL-DESK-AUDIT-SYNTHESIS-2026-10-15.md](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/blob/2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd/research/CHESS-STORIES-B2172-B3171-INDIVIDUAL-DESK-AUDIT-SYNTHESIS-2026-10-15.md) | 182b2950425e362028a6c0923091cad2827e3416 |

## Winter: genealogía identificada, sin elección canónica

Ruta: sources/EP01-WINTER-SECONDARY-MAINLINE-82-PLIES.v0.1.json.
Rama: chess-stories/secondary-pgn-result-reconciliation.

1. WIN2: commit a89f9c24b06f522ea60d8ee7c6229a2f0a1bf301, blob 926eae9e8b58d75fbc5f96d5133901f71d8a509b. Introduce el candidato secundario de 82 plies. MANIFEST conserva esta referencia.
2. WIN1: commit ee3703c71e7aeb9b5fee10f8d8eac079db17f72e, blob 9172831e19a98635017a298e456b4c489398a494. Revisión intermedia de metadatos/testigos.
3. WIN0: commit 166685bbe394251f2195fbde03ac9691c4c7ccdf, blob c90c42d27279ca0f1809098d0c49774149061cda. BRIDGE apunta a esta revisión.
4. WINCURRENT: HEAD actual de PR #3 541cfa4ae1df0ea52b36ada1f0379bc4e02c8aa9 devuelve el mismo blob que WIN0.

[Diff documental Winter](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/compare/a89f9c24b06f522ea60d8ee7c6229a2f0a1bf301...166685bbe394251f2195fbde03ac9691c4c7ccdf).

El diff de esta ruta no cambia candidate_secondary_mainline_plies. Cambia los estados de acceso a Chess Life y Chess Review, añade terminal_record_visual, precisa la necesidad de lectores ciegos y adjudicación, y añade terminal_witness_divergence: mate informado en Fischer frente a abandono informado en Byrne, más apoyo de publicaciones contemporáneas.

Interpretación: la secuencia secundaria no cambia en este diff, pero la evaluación historiográfica SÍ se enriquece y limita. No llamar a toda la modificación «metadatos irrelevantes». Dos textos de jugadas iguales no hacen equivalentes sus advertencias sobre testigos. No se ha hecho replay, verificación de legalidad ni una nueva comparación primaria.

Conservación: mantener WIN2, WIN1 y WIN0, además de la observación WINCURRENT; conservar las referencias divergentes de MANIFEST y BRIDGE sin editar esos archivos. Estado: REVISION_LINEAGE_IDENTIFIED_NO_CANONICAL_SELECTION. La selección para un consumidor futuro permanece pendiente de revisión explícita del alcance.

## Overlay T01–T12: revisión de identidad de fuente

Ruta: editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json.
Rama: chess-stories/presentation-truth-overlay-rfc-v0.1.

- OVER1: commit fa942d79a414ee3bc617b241a12f2cc58169d651, blob 57df8acf69cdd8516c5587100bc71c533b8ecf7a. Ya incluye la regla de conservación del aviso hipotético hasta restaurar el tablero y rama reales. MANIFEST lo referencia.
- OVER0: commit 6f6a78ba84abe83f5cd1c65044947dd77a10d270, blob aafc6429d716863e225361dd4962169bf12ecfae.
- OVERCURRENT: HEAD actual PR #11 8f35555d03e5052cd4fbe5bd086ae46083c47878, mismo blob que OVER0.
- OVER2 conserva el antecedente inicial para distinguir la modificación anterior de T07 de la divergencia aquí investigada.

[Diff documental overlay](https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/compare/fa942d79a414ee3bc617b241a12f2cc58169d651...6f6a78ba84abe83f5cd1c65044947dd77a10d270).

El diff de la ruta añade exclusivamente cuatro campos:
source_document_ref_kind=BRANCH_LABEL_NOT_IMMUTABLE;
source_document_head_commit_sha_observed=8e3da6639060a1605947bfc3aedd4113ab0068a1;
source_document_git_blob_sha_observed=3514f19ac355763a5b4c61d5c573df090b0eccc1;
source_identity_qualification=GIT_REPOSITORY_IDENTITY_ONLY_NOT_RAW_SHA256_BYTE_TRUST.

No cambia los doce overlays en este intervalo. Sí corrige cómo debe interpretarse source_document_commit: contiene etiqueta de rama, no SHA inmutable. Este cambio es relevante para procedencia, no prueba de autenticación de bytes o ejecución.
Se conservan OVER1 y OVER0; el ejemplo enlaza ambas revisiones en cada evento porque las declaraciones de evento no cambian en este diff. No selecciona una autoridad histórica o de producción. MANIFEST permanece intacto.

## Actualizaciones posteriores a los snapshots dependientes de fase 1

PR #12 no cambió, pero las dependencias leídas entonces incluían snapshots más antiguos:
- PR #3: de 166685bbe394251f2195fbde03ac9691c4c7ccdf a 541cfa4ae1df0ea52b36ada1f0379bc4e02c8aa9. Se añade paquete lector sin clave SAN, guía solo para curador, independencia por testigo y nueva pista de ejemplar físico World Chess Hall of Fame con corrección de p.370 a pp.374–375. WINCURRENT mantiene el blob c90c42d2...; HISTORY y BLIND se fijan al HEAD actual.
- PR #7: de 0d23ae38959fdc14656b0dda340957d7638f21e8 a 87cb4aac391147ed8d2b1509ddb3b23b98ca0783. Nuevos diseños de geometría/ocupación y addenda de base de producción: opción silenciosa, tipografía candidata y ALT-A con V-PRE-EV2 no visible. RIGHTS mantiene blob 9815bd94095f5df35d243050676b3a4b7a4e4e49; BASELINE se lee en HEAD actual.
- PR #11 mantiene HEAD 8f35555d03e5052cd4fbe5bd086ae46083c47878.

Estas actualizaciones son límites documentales, no funcionalidades adoptadas. La revisión se centra en documentos usados; no se certifica todo el código de esas ramas.

## Discrepancias y límites abiertos

- Referencias del manifiesto frente a referencias más recientes: explicadas por revisión, no corregidas ni adoptadas.
- Final físicamente jugado: OPEN; no adjudicado por publicaciones contemporáneas coincidentes.
- Ronda siete/ocho: OPEN, según DESKAUDIT; falta asignación primaria precisa por alternativa.
- R2 originales, hash de bytes y ledger subyacente: no disponibles/cualificados.
- Páginas completas de Chess Review, lecturas A/B y permisos: pendientes.
- Estado de correo: solo el informe OUTREACH, no una nueva lectura de buzón.
- Concordancia Git/textual no es PASS técnico, histórico ni de derechos.
