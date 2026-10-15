# Especificación de controles futuros — NO EJECUTADOS

Este archivo especifica obligaciones; no contiene código de pruebas ni resultados.
Todos los controles CER-Fxx = NOT_RUN. No se suman a los 66 negativos semánticos ni a los 77 del router, cuyos catálogos permanecen intactos.

## Controles estructurales y semánticos

| ID | Invariante / entrada adversa futura | Respuesta requerida |
|---|---|---|
| CER-F01 | JSON con claves duplicadas, estructura ambigua, tamaño excesivo o dialecto no cualificado | Rechazar antes de interpretar; límites y parser requieren diseño/cualificación aparte |
| CER-F02 | ID duplicado, referencia ausente, tipo de destino equivocado, derivación cíclica | Rechazar o mantener explícitamente inconcluso; no resolver por coincidencia de texto |
| CER-F03 | Rama mutable presentada como commit; Git blob usado como SHA256 histórico | Rechazar promoción de identidad |
| CER-F04 | Falta de locator o de alcance exacto en evidencia | No admitir como apoyo suficiente |
| CER-F05 | Investigación B/W presentada como ejecución; resultado no nulo con NOT_RUN | Rechazar; conservar estado pendiente |
| CER-F06 | Confianza alta sin valoración competente; suma de fuentes convertida en confianza global | Requerir revisión independiente, nunca aprobación automática |
| CER-F07 | Testigo primario confundido con reproducción; fragmento tratado como página completa | Mantener objeto, cobertura y método separados |
| CER-F08 | OCR ambiguo rellenado desde SAN moderno; variante sobrescrita | Preservar raw_text, alternativas y conflicto |
| CER-F09 | Lectores distintos asignados a periódicos distintos como si fueran A/B del mismo testigo | Rechazar independencia; aplicar BLIND |
| CER-F10 | Token normalizado mate/# usado como prueba de último movimiento físicamente jugado | Mantener conflicto histórico abierto |
| CER-F11 | Qd8 movido a MAIN o legalidad usada para atribuirlo a la partida | Rechazar promoción histórica |
| CER-F12 | T08/T09 contabilizados como nuevas jugadas/capturas | Enlazar mismos movimientos; conservar eventos narrativos diferentes |
| CER-F13 | T07 retira aviso antes de restaurar exactamente V-P1 y MAIN | Rechazar presentación; futuro control de frames separado |
| CER-F14 | T10 sin 36–49 inclusivos o count distinto de 14 | Rechazar; no sintetizar jugada entre extremos |
| CER-F15 | V-PRE-EV2 convertido en VISUAL; T11 interpolado desde V-REAL | Rechazar reinterpretación; respetar estado técnico |
| CER-F16 | T12 cambia a fin histórico, mate o resultado inventado | Rechazar; LA PARTIDA CONTINÚA |
| CER-F17 | Acceso de consulta, exclusión o licencia candidata utilizados como permiso comercial | No autorizar activo; exigir alcance por uso |
| CER-F18 | Tiempo de guion marcado como medido; plan de render marcado como artefacto | Rechazar fabricación de mediciones |
| CER-F19 | Renombrar campos de Política B como cumplimiento observado; plazo inclusivo 120; límites combinados/truncados | Rechazar; conservar requisitos exactos |
| CER-F20 | Nuevo documento intenta cambiar E5B4D/R6/IVV/CASE o autorizar ejecución/publicación | Rechazar; no autoridad del registro |
| CER-F21 | 24...Ra4 presentado como única mejor jugada sin prueba competente | Mantener F03; sin excepción por categoría narrativa |
| CER-F22 | Evidencia de versión antigua reutilizada después de cambio de objeto/claim | Reabrir revisión del alcance; no arrastrar aprobación |
| CER-F23 | Leer source-reconciliation y declarar corregido MANIFEST/router | Rechazar: ninguna fuente congelada se modifica |
| CER-F24 | Contenido del ejemplo llega a lectores ciegos | Excluir del paquete lector y documentar contaminación |

## Límites de registry.schema.json

Draft 2020-12 propuesto, sin ejecución de meta-esquema ni validación del ejemplo. Su estructura distingue tipos y obliga estados no aprobados, pero no comprueba por sí sola:
- resolución/unicidad de IDs ni semántica de JSON Pointer;
- secuencia exacta de T01–T12, relación ply/rama o igualdad count=last-first+1;
- legalidad, FEN derivado, casillas, mate o optimalidad;
- identidad de objetos históricos, independencia de lectores o suficiencia de derechos;
- cumplimiento de Política B o condiciones de M.

Estas limitaciones son expresas; no se presenta el esquema como un verificador hostil, un contrato productivo ni un mecanismo de liberación.

## Evidencia exigible para una evaluación futura

Una especificación debe identificar requisito, objetivo y revisión exactos, método previsto y resultado esperado. Una ejecución autorizada necesitaría mecanismo cualificado, resultado observado, artefactos identificados y revisión competente. No rellenar ninguno de esos hechos desde una propuesta.

El perfil actual validation_records SOLO admite NOT_RUN, result=null y lista de artefactos vacía. Un esquema futuro para resultados ejecutados requeriría revisión separada, sin alterar estas restricciones por conveniencia.

No se ha ejecutado ninguno de CER-F01–F24. No hay PASS estructural, técnico, histórico o de derechos. Los 66/77 negativos existentes y el oráculo continúan NOT_RUN.

## Política B y E5B4D

Todos los procesos relevantes deberán haber terminado Y su terminación estar confirmada estrictamente antes de 120 segundos. stdout y stderr deberán limitarse de forma independiente a 1.048.576 bytes emitidos y aceptados durante toda su vida. Timeout de proceso padre, kill solicitado, truncación o logs parciales no demuestran estas condiciones.

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL, NO-GO bajo M. Ningún resultado hipotético de este registro demuestra compatibilidad ni constituye una vía para eludir el NO-GO.
