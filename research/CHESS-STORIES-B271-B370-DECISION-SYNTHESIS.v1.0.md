# Chess Stories — B271–B370: síntesis crítica y cartera mínima de verificaciones

**Fecha:** 2026-10-14. **Ámbito:** Chess Stories exclusivamente. **Proveniencia:** 100 bloques nuevos, 10 áreas de 10; 75 P0 de riesgo y 25 P1 de preparación. P0 es **prioridad de estudio**, nunca cantidad de defectos encontrados o pruebas realizadas. Continuación B1–B270. Estado de los cien: `RESEARCHED_DOCUMENTARY_ONLY`.

## Resumen: qué hay realmente de nuevo

1. **Proveniencia multinivel y preservación** (U/V): IIIF Presentation 3.0 distingue Manifest, Canvas y Annotation; PREMIS 3 distingue objeto, evento, agente y derecho; PROV-O distingue derivación y atribución. Son modelos para representar evidencia, NO confirmación de que el ejemplar de 1956 tenga IIIF disponible ni de que su contenido se haya transcrito.
2. **Reglas históricas frente a legales modernas** (W): las Leyes FIDE 2023 son base útil del futuro oráculo moderno, pero su existencia no reconstruye automáticamente las normas particulares de un torneo de 1956 ni certifica un SAN original.
3. **ALT-A como problema de percepción específica** (X/Y): representar 25...Nxd1 mediante hard cut a V-EV2 evita exponer V-PRE-EV2 `TECHNICAL_ONLY` pero puede hacer incomprensible el salto de 14 plies o simular desplazamiento inexistente si los overlays sobreviven al corte. Ningún frame se ha renderizado o inspeccionado.
4. **Cadena de confianza no transitiva** (Y/Z/AA): C2PA puede aportar integridad de declaraciones sobre activos; SLSA aporta marcos de provenance de build; BagIt distingue paquete completo de paquete con checksums verificados. Ninguno concede derechos R6, evidencia de jugadas ni satisfacción de Política B bajo modelo M.
5. **Estudio humano legítimo** (AB): el documento de la AEPD exige un consentimiento inequívoco, informado, revocable y demostrable cuando se recurre a consentimiento como base jurídica. No se ha preparado reclutamiento ni tratado dato personal de participantes.
6. **Accesibilidad y comercialización diferenciadas** (AC/AD): EPUB Accessibility 1.1 requiere metadatos veraces y evaluación real del contenido. YouTube aclara que su política de contenido «inauthentic» también cubre material masivo repetitivo con independencia de técnica de creación; no se debe simular demanda ni métricas del canal.

## Diez verificaciones que más podrían cambiar el estado del proyecto

| Selección | Pregunta concreta | Entregable que cambiaría estado | Tipo de bloqueo |
|---|---|---|---|
| B271, B272 | ¿Podemos localizar hojas 374–375 del ejemplar exacto sin confundir índices? | Identidad de ejemplar y acceso autorizado a página, **no** una URL supuesta | Dependencia de archivo/custodio |
| B275, B281 | ¿Cada afirmación histórica enlaza a un objeto y a lectura independiente? | Cadena fuente→observación→agente y adjudicación A/B | Lectores independientes |
| B286, B289 | ¿Qué termina realmente la partida en la planilla original Byrne? | Inspección directa consentida y discrepancia adjudicada | Originales o incertidumbre persistente |
| B291, B293 | ¿Está explícito el alcance del ruleset usado por el oráculo? | Contrato oracle moderno independiente de reglas torneo 1956 | Modelo M/Política B + especialista |
| B301, B306 | ¿El corte ALT-A enseña salto y captura sin implicar una sola jugada ficticia? | Frames legales e IVV independiente de comprensión de T10/T11 | R6, ejecución, IVV |
| B315, B320 | ¿Se puede identificar el output exacto y su semántica en la plataforma final? | Bytes de media/caption y pruebas de integridad+visualización | E5B4D, R6 |
| B325, B326 | ¿Se rechaza un drift semántico entre idiomas y ramas? | Especificación revisada y luego evidencia de validación cualificada | Gate ejecución, independencia |
| B331–B334 | ¿Todos los procesos terminan y queda confirmado estrictamente antes de 120s en M? | Garantía formal, no un simple timeout/benchmark | **E5B4D permanece NO-GO** |
| B346–B350 | ¿Un IVV puede medir comprensión sin contaminarla ni incumplir RGPD? | Protocolo independiente, adultos, consentimiento y criterio preinscrito | Responsables externos / R6 |
| B352, B360, B369 | ¿Hay derechos y calidad originales suficientes por producto/superficie? | Manifiesto por asset y derechos verificables + aceptación factual | R6, editorial y publicación |

**Regla de asignación:** sólo se priorizarán actividades capaces de cambiar el veredicto real de un gate, de localizar evidencia primaria o de reducir un riesgo comprobable con pruebas futuras. El registro de 100 entradas **no** se traduce en 100 nuevas PR ni 100 tickets. Antes de un nuevo paquete grande, revisar solapamientos con B1–B370 y el valor marginal de las siguientes preguntas.

## Mapa de archivos

- `research/CHESS-STORIES-B271-B320-100-BLOCKS-PART1-2026-10-14.md`: 50 bloques U–Y.
- `research/CHESS-STORIES-B321-B370-100-BLOCKS-PART2-2026-10-14.md`: 50 bloques Z–AD.
- `research/CHESS-STORIES-B271-B370-REGISTER.v1.0.json`: 100 IDs, fuentes, hallazgo, falsificador, prioridad y estatus.
- Este documento: síntesis de decisiones y límites de evidencia.

## Fuentes primarias de estándares y políticas contrastadas

- [IIIF Presentation 3.0](https://iiif.io/api/presentation/3.0/), [PREMIS 3.0 Library of Congress](https://www.loc.gov/standards/premis/v3/), [W3C PROV-O](https://www.w3.org/TR/prov-o/) y [Web Annotation](https://www.w3.org/TR/annotation-model/).
- [FIDE Laws of Chess 2023](https://handbook.fide.com/chapter/e012023) y [PGN specification](https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt).
- [RFC 8493 BagIt](https://www.rfc-editor.org/rfc/rfc8493.html), [C2PA 2.1](https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html), [SLSA provenance v1.2](https://slsa.dev/spec/v1.2/provenance), [JSON Schema 2020-12](https://json-schema.org/draft/2020-12).
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/), [EPUB Accessibility 1.1](https://www.w3.org/TR/epub-a11y/), [AEPD consentimiento](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/5-bases-legitimadoras-del-tratamiento/FAQ-0211-segun-el-rgpd-como-debe-solicitarse-el-consentimiento-de-los-interesados-para-tratar-sus-datos-personales), [AEPD menores](https://www.aepd.es/preguntas-frecuentes/10-menores-y-educacion/FAQ-1002-se-puede-recabar-y-tratar-datos-personales-de-menores), [YouTube política sobre contenido repetitivo](https://support.google.com/youtube/thread/356734251?hl=en&msgid=441516931).
- [U.S. Copyright Office Circular 15A](https://www.copyright.gov/circs/circ15a.pdf), [Noto OFL](https://github.com/notofonts/noto-fonts/blob/main/LICENSE). Estas fuentes **no establecen** por sí mismas si las revistas o fotografías concretas usadas en EP01 son libres.

## Garantías inalteradas

**E5B4D = NO-GO bajo M**, Política B estricta exige **todos** los procesos relevantes terminados y con terminación confirmada **antes de 120 segundos** (límite exclusivo), stdout y stderr **por separado** 1.048.576 bytes **emitidos y aceptados durante toda la vida**. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, episodio no autorizado. Sin ejecutar código, tests, oráculo, render, Actions, ni fusionar en `main` ni publicar. Documentación ≠ pruebas ≠ permiso.
