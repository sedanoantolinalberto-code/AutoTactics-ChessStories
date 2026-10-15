# Chess Stories — B371–B470: síntesis y priorización de investigación v1.0

**Fecha:** 2026-10-14. **Continuidad:** B1–B470, sin reiniciar ni repetir el registro exacto B171–B370. **Riesgo:** 70 P0 (riesgos prioritarios, NO defectos demostrados) y 30 P1, 10 disciplinas AE–AN con 10 preguntas cada una. Las cien entradas son `RESEARCHED_DOCUMENTARY_ONLY`; ninguna es test ejecutado, evidencia ajedrecística independiente o autorización.

## Novedades reales frente a B271–B370

1. **Aprendizaje multimedia y redundancia cuantificable (AE).** [Mayer (2024)](https://doi.org/10.1007/s10648-023-09842-1) ofrece un marco para palabra y gráfico; la [revisión de 63 estudios](https://pmc.ncbi.nlm.nih.gov/articles/PMC10192876/) advierte que la redundancia puede ayudar o perjudicar según canal y experiencia. Para Chess Stories esto motiva un IVV más fino: reconocer la verdad de Qd8, identificar d1 y comprender el salto de 14 plies, sin inferir aprendizaje por métricas de Shorts. No demuestra que ALT-A sea óptima.
2. **Aislar legalidad de evaluación engine (AF).** La [FAQ oficial de Stockfish](https://official-stockfish.github.io/docs/stockfish-wiki/Stockfish-FAQ.html) confirma efectos de MultiPV, Hash, Threads, normalización de evaluación y fuerza ajustada. [Protocolo UCI](https://github.com/echecsjs/uci/blob/main/SPEC.md) aporta comandos futuros. Nada de ello equivale a haber ejecutado o verificado 25...Nxd1. Se requiere cualificación distinta para legalidad, valoración de estrategia y autenticidad histórica.
3. **Catalogación físico→transcripción→interpretación (AG).** [DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) separa identifier, provenance, source, rights y rightsHolder. Ayuda a diseñar fichas del ejemplar físico de *Chess Review* sin confundir a Kmoch, al editor y al custodio con el propietario de todos los derechos.
4. **Trazabilidad de IA generativa (AH).** [NIST AI 600-1 (2024)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) propone gobernar riesgos de procedencia, contenido y predeployment testing. Se traduce a un control de claims antes de narración/localización; no convierte salida de un LLM en fuente histórica. El asistente no puede actuar como lector ciego de 82 SAN, pues ya conoce la secuencia.
5. **Idiomas como contratos de verdad (AI).** [RFC 5646](https://www.rfc-editor.org/rfc/rfc5646.html) ofrece etiquetas de idioma; cada versión requiere preservar unplayed Qd8, evento real Nxd1, 14 plies omitidos y cierre no terminal. La interfaz RTL no cambia identidad de casillas, y un guion inglés no hereda IVV español.
6. **Accesibilidad audiovisual con condiciones por canal (AJ).** [WCAG 2.2](https://www.w3.org/TR/WCAG22/) y [WebVTT](https://www.w3.org/TR/webvtt1/) distinguen diálogo/caption del estado factual incrustado. El futuro vídeo no debe permitir que desactivar subtítulos o tener el audio silenciado convierta T06 en una jugada real.
7. **Denominadores verdaderos en distribución (AK).** [YouTube 26-mar-2025](https://support.google.com/youtube/thread/333869549?hl=en&msgid=344640469) separa vistas que inician/reinician de `engaged views`. La [ayuda de Related Video](https://support.google.com/youtube/answer/14075157?hl=en) limita la función a cuentas con acceso avanzado y contenido del propio canal. Un supuesto embudo directo Shorts→web debe declarar dependencias sin inventar clics/conversión.
8. **Corrección pública sin borrar historia de versiones (AL).** [Crossmark](https://www.crossref.org/crossmark/) sirve de modelo de avisos correctivos y estados de registros, pero Chess Stories **no es miembro Crossref ni tiene derecho a insertar ese sello**. Un conflicto mate/resignación puede requerir corregir exactamente ese claim sin borrar el resultado 0–1 ni declarar retractado todo el episodio.
9. **Privacidad del futuro estudio/boletín (AM).** [EDPB Directrices 05/2020](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_es) fundamenta la distinción entre consentimiento del estudio y consentimiento de marketing donde proceda; todavía no hay reclutamiento, formularios, correo a participantes o audiencia comercial.
10. **Economía de evidencia (AN).** El criterio rector debe ser aumentar fuerza de evidencia para gates, no incrementar indefinidamente número de documentos. La frontera formal E5B4D NO-GO bajo modelo M permanece incluso si hay 470 bloques de estudio.

## Diez tareas de decisión con máximo valor marginal (sin ejecución autorizada)

| Bloque | Verificación futura concreta | Señal necesaria para cambiar un estado | Gate hoy |
|---|---|---|---|
| B372/B374 | ¿Se identifica y recuerda la captura con señales d1 y sincronía? | Vídeo lícito medido + IVV preinscrito independiente | IVV_GLOBAL NOT APPROVED |
| B383/B385 | ¿MultiPV y condiciones UCI están registradas antes de cualquier claim estratégico? | Reporte reproducible de motor **cualificado**, no ejecución actual | LEGAL/ENGINE NOT RUN |
| B388/B390 | ¿Distingue el expediente valoración moderna de legalidad y acta original? | Tres declaraciones/atestaciones independientes | HISTORIA NOT AUTHENTICATED |
| B391/B393 | ¿Está identificada la revista física, sus autores, custodios y titulares? | Metadatos granulares + examen del ejemplar y R6 | R6 PENDING |
| B402/B403 | ¿Detecta traducción/resumen automático la pérdida de «no jugada»? | Revisión adversarial de claim ES↔EN y evidencia futura | CASE NOT APPROVED |
| B412/B417 | ¿Qd8 conserva modalidad y etiqueta en EN bajo duración real? | Aprobación de copy y evaluación perceptiva por idioma | IVV PENDING |
| B422/B426 | ¿Audio apagado o subtítulos ocultos conserva verdad? | Revisión de fotogramas y locución contra rótulos | MEDIA NOT RENDERED |
| B431/B433 | ¿Las métricas del embudo usan engaged views y funciones realmente disponibles? | Captura/documentación actual de cuenta y canal + datos observados | DISTRIBUCIÓN NO OBSERVADA |
| B451/B453 | ¿Consentimientos de estudio y marketing están separados y son revocables? | Protocolo jurídico, actos válidos y controles testeados posteriormente | SIN RECLUTAMIENTO |
| B461/B470 | ¿Qué acción reduce un bloqueo real antes de nuevos documentos? | Acceso autorizado a testigo, Policy B/M cualificada, activo R6 o estímulo IVV | E5B4D NO-GO, R6/IVV PENDING |

## Resultado de control de calidad documental

- B371–B420 y B421–B470: **100 identificadores consecutivos** y **100 títulos únicos**.
- Comparación de títulos exactos con los registros B171–B370: **ninguna repetición exacta**. Existe solapamiento general de dominio que se debe evitar al convertir estas hipótesis en tareas; no se afirma originalidad absoluta de cada idea.
- Registro estructurado permite filtrar por P0/P1, área, fuente y falsificador. Ningún bloque acredita datos experimentales, derechos, muestras humanas, precios o viabilidad de producción.
- No hay decisión de ejecutar Stockfish, materializar el original de 1956, contactar con custodios, reclutar humanos o cambiar Política B.

## Fuente de verdad y estado al cierre

Cuatro archivos en PR #12: `research/CHESS-STORIES-B371-B420-100-BLOCKS-PART1-2026-10-14.md`, `research/CHESS-STORIES-B421-B470-100-BLOCKS-PART2-2026-10-14.md`, `research/CHESS-STORIES-B371-B470-REGISTER.v1.0.json` y esta síntesis.

**E5B4D sigue NO-GO bajo M**, Política B estricta **todos los procesos relevantes terminados y confirmados estrictamente antes de 120 segundos**, stdout y stderr independientes cada uno máximo **1.048.576 bytes emitidos/aceptados por toda la vida**. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; sin análisis engine, test, render, Actions, fusionar main ni publicar. Fuente documental ≠ legalidad ≠ autenticidad histórica ≠ permiso comercial ≠ validación perceptiva.
