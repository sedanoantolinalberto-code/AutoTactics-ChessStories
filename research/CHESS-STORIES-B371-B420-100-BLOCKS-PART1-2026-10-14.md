# Chess Stories — investigación B371–B420 (1/2)

**Corte:** 2026-10-14. Continuidad real tras B370. **Tipología:** hallazgo de fuente o inferencia para diseño futuro; no son resultados medidos. P0 = riesgo decisivo, P1 = preparación. Las siglas de fuente se enlazan al final. No se ejecutan herramientas ajedrecísticas ni ensayos.

## AE — Psicología del aprendizaje audiovisual aplicada a EP01

### B371 — Separar doble codificación de redundancia excesiva

**Base e interpretación:** La teoría del aprendizaje multimedia estudia integración de palabras y gráficos; la revisión de 63 estudios distingue redundancia útil de sobrecarga por varios canales simultáneos.

**Falsificador o comprobación pendiente:** Comparar un diseño ALT-A con narración breve y rótulo factual frente a versión con texto explicativo exhaustivo; medir comprensión, no preferencia.

**Prioridad:** P1. **Referencias:** `MAYER`, `REVIEW`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B372 — Señalización solo de casillas decisivas

**Base e interpretación:** El principio de signaling propone dirigir atención a lo relevante: iluminar d1 cuando se explica Nxd1 es una hipótesis pedagógica, no garantía de aprendizaje.

**Falsificador o comprobación pendiente:** Diseñar comparación posterior con/sin halo d1 manteniendo rótulo de captura e información real/hipotética intacta.

**Prioridad:** P1. **Referencias:** `CAM`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B373 — Distancia espacial entre texto y su pieza

**Base e interpretación:** La contigüidad espacial sugiere que separar excesivamente rótulo y pieza obliga al usuario a buscar visualmente el referente.

**Falsificador o comprobación pendiente:** Medir errores de asociación entre Nxd1 y casilla d1 para callout cercano vs panel lateral, sin tapar el tablero.

**Prioridad:** P1. **Referencias:** `CAM`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B374 — Coincidencia temporal de captura y explicación

**Base e interpretación:** La contigüidad temporal diferencia una explicación simultánea de una explicada demasiado tarde; el hard cut ALT-A podría retrasar significado.

**Falsificador o comprobación pendiente:** Planificar cue y rótulo de captura alrededor del corte, revisar si el público identifica qué sucedió.

**Prioridad:** P1. **Referencias:** `CAM`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B375 — Seductive details sin relación causal

**Base e interpretación:** Biografía, reloj ficticio o luces de victoria pueden atraer atención pero desplazar el conocimiento que el episodio pretende transmitir.

**Falsificador o comprobación pendiente:** Versión sin decorado extra vs propuesta enriquecida; bloquear efectos que creen hechos históricos no documentados.

**Prioridad:** P0. **Referencias:** `CAM`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B376 — Carga intrínseca según conocimiento ajedrecístico

**Base e interpretación:** La misma secuencia SAN exige distinta experiencia previa: novatos pueden no conocer símbolos, expertos pueden procesar varias jugadas.

**Falsificador o comprobación pendiente:** Estratificar IVV por familiaridad y medir errores de lectura frente a errores de interpretación histórica.

**Prioridad:** P1. **Referencias:** `MAYER`, `REVIEW`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B377 — Segmentación mediante pausas significativas

**Base e interpretación:** La división en escenas debe seguir cambios de rama/evento, no solo repartos simétricos de segundos; T07 exige transición identificable.

**Falsificador o comprobación pendiente:** Preinscribir tarea de ordenar escenas usando tarjetas de hechos con bloque real/hipotético.

**Prioridad:** P1. **Referencias:** `MAYER`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B378 — Aprendizaje verbal vs comprensión del tablero

**Base e interpretación:** Acertar una frase recordada no demuestra que el espectador reconozca qué pieza capturó a cuál.

**Falsificador o comprobación pendiente:** Preguntar por evento en palabras y por localización visual de la captura como dos resultados separados.

**Prioridad:** P0. **Referencias:** `REVIEW`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B379 — Coste perceptivo de la etiqueta de hipótesis

**Base e interpretación:** «HIPOTÉTICA · NO JUGADA» es necesaria para veracidad, aunque compite por espacio con SAN y flechas.

**Falsificador o comprobación pendiente:** No quitar la advertencia; experimentar únicamente con jerarquía, posicionamiento y tamaño de otras capas.

**Prioridad:** P0. **Referencias:** `CAM`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B380 — Prueba de transferencia a una posición nueva

**Base e interpretación:** Recordar Byrne–Fischer no prueba comprensión reutilizable de lectura de alfiles y capturas.

**Falsificador o comprobación pendiente:** Evaluar un caso desconocido de ajedrez sin emitirlo públicamente; aislar transferencia de memorización del EP01.

**Prioridad:** P1. **Referencias:** `MAYER`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AF — Reproducibilidad del análisis de motor como evidencia auxiliar

### B381 — Controles UCI no equivalen a análisis realizado

**Base e interpretación:** UCI define mensajes de `position`, `go`, `stop` y opciones; un ejemplo de protocolo no prueba que el motor haya verificado Nxd1.

**Falsificador o comprobación pendiente:** Diseñar contrato futuro de request/response firmado por entorno cualificado sin llamar al motor ahora.

**Prioridad:** P0. **Referencias:** `UCI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B382 — Fijar binario y arquitectura de Stockfish

**Base e interpretación:** La documentación oficial destaca la versión y la compilación apropiada a CPU para interpretar resultados; «Stockfish» no identifica ejecutable exacto.

**Falsificador o comprobación pendiente:** Futuro reporte con versión, commit, plataforma, opciones y huellas reales de binario; hoy `NOT_RUN`.

**Prioridad:** P0. **Referencias:** `SF`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B383 — MultiPV altera la distribución de búsqueda

**Base e interpretación:** Stockfish advierte que MultiPV>1 reparte recursos entre varias líneas, así que comparaciones de «mejor jugada» con valores distintos no son homogéneas.

**Falsificador o comprobación pendiente:** Definir dos perfiles preinscritos de una y varias variantes y separar conclusiones, nunca proclamar «única».

**Prioridad:** P0. **Referencias:** `SF`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B384 — Normalización de evaluación en centipeones

**Base e interpretación:** Stockfish relaciona su eval normalizada con probabilidad de victoria; +1.0 no debe presentarse como una ventaja material literal de un peón.

**Falsificador o comprobación pendiente:** Definir eje, versión de evaluación y escala en cada gráfico futuro; no atribuir centipeones a fuente de 1956.

**Prioridad:** P0. **Referencias:** `SF`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B385 — Hash, Threads y condiciones de búsqueda

**Base e interpretación:** Las opciones Hash y Threads alteran recursos de búsqueda, lo que dificulta comparar evaluaciones sin registrarlas.

**Falsificador o comprobación pendiente:** Futura ficha captura memoria, hilos, límites de nodos/profundidad y hardware sin generar valores ficticios.

**Prioridad:** P0. **Referencias:** `SF`, `UCI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B386 — Depth no es sinónimo de veredicto estable

**Base e interpretación:** Una profundidad reportada no prueba que todas las líneas candidatas hayan convergido ni que el movimiento sea históricamente elegido.

**Falsificador o comprobación pendiente:** No promocionar un único score de profundidad a F03 «necesariamente mejor»; requerir estabilidad y revisión ajena.

**Prioridad:** P0. **Referencias:** `SF`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B387 — UCI_AnalyseMode y fuerza debilitada

**Base e interpretación:** Stockfish documenta Skill Level/UCI_Elo como mecanismos deliberados de juego subóptimo; una corrida debilitada no serviría para probar optimalidad.

**Falsificador o comprobación pendiente:** El perfil de futura auditoría debe registrar modo de análisis y fuerza limitada como campos explícitos.

**Prioridad:** P0. **Referencias:** `SF`, `UCI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B388 — Salida de motor como fuente derivada

**Base e interpretación:** Una PV producida en 2026 es interpretación computacional, no anotación original de Fischer ni resultado autónomo del torneo.

**Falsificador o comprobación pendiente:** Guardar `source_class=COMPUTED_MODERN_ANALYSIS` y prohibir escribir voz histórica en primera persona.

**Prioridad:** P0. **Referencias:** `G`, `SF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B389 — Condición de parada y Política B

**Base e interpretación:** UCI `stop` solicita detener cálculo, pero no acredita que todos los procesos pertinentes terminen y queden confirmados antes de 120s bajo M.

**Falsificador o comprobación pendiente:** Mantener E5B4D NO-GO aun si una solicitud future UCI obtuviera `bestmove`; proceso cualificado separado.

**Prioridad:** P0. **Referencias:** `UCI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B390 — Diferenciar motor legal y motor evaluativo

**Base e interpretación:** Una biblioteca de reglas puede comprobar jugadas; el motor de búsqueda evalúa preferencias. Coincidencia de ambos en un SAN no autentica revista.

**Falsificador o comprobación pendiente:** Definir artefactos independientes `legal_transition` y `engine_assessment` con fuentes y firmas separadas.

**Prioridad:** P0. **Referencias:** `FIDE`, `SF`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AG — Catalogación bibliográfica a nivel de objeto físico

### B391 — Campos DCMI para identificar testimonio

**Base e interpretación:** Dublin Core distingue identifier, source, relation y rights; un solo URL al índice digital no basta para identificar ejemplar preciso.

**Falsificador o comprobación pendiente:** Diseñar ficha con institution, item_id, issue, printed_page, digital_locator y observación separadas.

**Prioridad:** P0. **Referencias:** `DCMI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B392 — Provenance custodial de revista

**Base e interpretación:** DCMI provenance describe cambios de custodia significativos; la donación John Donaldson→World Chess Hall of Fame se conoce por catálogo, no todo su historial.

**Falsificador o comprobación pendiente:** Registrar únicamente traslado respaldado por museo y dejar anteriores custodios como desconocidos.

**Prioridad:** P1. **Referencias:** `DCMI`, `WCH`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B393 — Autor de texto, editor y propietario de ejemplar

**Base e interpretación:** Autor de crónica Kmoch, editor de revista y donante del ejemplar no son sinónimos de titular de copyright.

**Falsificador o comprobación pendiente:** Separar creator, contributor, publisher, rightsHolder y custodian antes de expedientes R6.

**Prioridad:** P0. **Referencias:** `DCMI`, `WINTER`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B394 — Diferenciar corpus impreso y transcripción humana

**Base e interpretación:** El texto literal observado por un lector es una representación derivada del objeto; no reemplaza el objeto o su número de página.

**Falsificador o comprobación pendiente:** En un futuro registro mantener IDs de `PRINTED_WITNESS` y `READER_TRANSCRIPTION` distintos.

**Prioridad:** P0. **Referencias:** `DCMI`, `PROV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B395 — Incertidumbre de fecha exacta de edición

**Base e interpretación:** «Diciembre 1956» identifica número, no necesariamente día de impresión o distribución; inventar fecha exacta alteraría atribución temporal.

**Falsificador o comprobación pendiente:** Distinguir issue_month y exact_publication_date con UNKNOWN cuando falte prueba.

**Prioridad:** P1. **Referencias:** `DCMI`, `WCH`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B396 — Campo coverage geográfico no implica lugar de partida

**Base e interpretación:** Un catálogo de una revista conservada en EE. UU. no prueba el sitio exacto del torneo Byrne–Fischer.

**Falsificador o comprobación pendiente:** Registro separa custodial_location, publication_place, historical_game_site y fuente de cada uno.

**Prioridad:** P0. **Referencias:** `DCMI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B397 — Relación entre copia y artículo

**Base e interpretación:** La revista completa contiene artículos distintos; relacionar p.370 con EP01 sin revisar errata de portada conduce a artículo Smyslov–Pachman.

**Falsificador o comprobación pendiente:** La ficha exige sección y pp374–375 como localizador informado por Winter, manteniendo corroboración física pendiente.

**Prioridad:** P0. **Referencias:** `WINTER`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B398 — Preservación de notas de transcriptor

**Base e interpretación:** La duda entre K y Kt constituye evidencia del acto de lectura; normalizar sin conservarla destruye trazabilidad.

**Falsificador o comprobación pendiente:** Añadir notas de incertidumbre y procedencia de conversión a cada fila futura, no completar nada anticipadamente.

**Prioridad:** P0. **Referencias:** `PROV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B399 — Uso interno de cita frente a permiso de imagen

**Base e interpretación:** Se puede registrar catalogación de ejemplar y enlace sin inferir automáticamente permiso para incluir foto de portada en vídeos.

**Falsificador o comprobación pendiente:** La ficha bibliográfica apunta a un registro R6 distinto, no fija `commercial_allowed=true`.

**Prioridad:** P0. **Referencias:** `DCMI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B400 — Cadena de corrección de un error de referencia

**Base e interpretación:** Si el museo corrige su ficha, un snapshot antiguo debe seguir rastreable y la nueva lectura explicar el cambio.

**Falsificador o comprobación pendiente:** Guardar fecha de revisión del catálogo, autoridad y versiones, sin borrar decisiones previas.

**Prioridad:** P1. **Referencias:** `DCMI`, `PROV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AH — Gobernanza de afirmaciones y supervisión de contenido asistido por IA

### B401 — Salida LLM como borrador sin fuente

**Base e interpretación:** Un modelo puede completar coherentemente un hueco histórico. Coherencia lingüística no es evidencia de que el texto aparezca en 1956.

**Falsificador o comprobación pendiente:** Clasificar afirmaciones sin cita verificable como UNSUPPORTED y bloquear promocionarlas a hecho.

**Prioridad:** P0. **Referencias:** `NIST`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B402 — Control de instrucciones inyectadas en fuentes externas

**Base e interpretación:** El texto de una web histórica puede incluir instrucciones que no deben alterar el pipeline ni los NO-GO del proyecto.

**Falsificador o comprobación pendiente:** Tratar fuentes como datos inertes y requerir autorización de controlador para todo cambio de política.

**Prioridad:** P0. **Referencias:** `NIST`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B403 — Resumen automático y pérdida de negaciones

**Base e interpretación:** «No fue jugada» puede comprimirse a «jugada». La transformación editorial merece cotejo por proposición, no por fluidez.

**Falsificador o comprobación pendiente:** Propuesta: matriz frase origen→frase destino con token de modalidad preservado y revisión humana futura.

**Prioridad:** P0. **Referencias:** `G`, `NIST`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B404 — Evaluaciones automáticas no son árbitro independiente

**Base e interpretación:** Un segundo LLM leyendo el mismo contexto puede repetir el mismo supuesto; redundancia de modelos no garantiza diversidad de evidencia.

**Falsificador o comprobación pendiente:** Separar revisión del texto por modelo, verificación de documentos primarios y legalidad ajedrecística.

**Prioridad:** P0. **Referencias:** `NIST`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B405 — Modelo no selecciona derechos comerciales

**Base e interpretación:** Describir una silueta como «original» con IA no autentica autoría de piezas, licencia o alcance comercial.

**Falsificador o comprobación pendiente:** No permitir que evaluación automática marque R6 CLEARED sin documento jurídico y origen de bytes.

**Prioridad:** P0. **Referencias:** `G`, `NIST`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B406 — Estabilidad de claims ante regeneración del guion

**Base e interpretación:** Volver a generar ES/EN puede introducir «inevitable», «única» o «mate» pese al F03 inmutable.

**Falsificador o comprobación pendiente:** Guardar diff factual por afirmación y activar REVIEW_REQUIRED para cambios semánticos.

**Prioridad:** P0. **Referencias:** `G`, `NIST`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B407 — Capacidad de decir «desconocido»

**Base e interpretación:** Una salida convincente que inventa hora exacta de torneo es peor que una ficha con UNKNOWN.

**Falsificador o comprobación pendiente:** Incluir categorías UNKNOWN y CONFLICTED para campos de sitio/hora/terminación no probados.

**Prioridad:** P0. **Referencias:** `G`, `NIST`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B408 — Riesgo de expansión editorial automática

**Base e interpretación:** Un vídeo largo derivado del Short podría rellenar 14 plies con supuestas acciones visuales ficticias.

**Falsificador o comprobación pendiente:** Exigir ledger de 82 medias jugadas cualificado antes de cualquier largo que represente omitidas como reales.

**Prioridad:** P0. **Referencias:** `G`, `NIST`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B409 — Distinguir confianza narrativa de confianza histórica

**Base e interpretación:** Una puntuación interna del modelo no informa sobre integridad de fuente de 1956 ni predice percepción de audiencia.

**Falsificador o comprobación pendiente:** No mapear ninguna métrica sintética a `SOURCE_VERIFIED` o `IVV_PASS`.

**Prioridad:** P0. **Referencias:** `G`, `NIST`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B410 — Trazabilidad de recomendaciones editoriales

**Base e interpretación:** Una sugerencia de cambiar el final o el hook tiene autor y fecha, pero no debe reemplazar automáticamente afirmaciones canónicas.

**Falsificador o comprobación pendiente:** Propuesta de registro actor/fecha/diff/justificación, con aprobaciones externas separadas.

**Prioridad:** P1. **Referencias:** `PROV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AI — Localización precisa y equivalencia semántica ES/EN

### B411 — Etiquetas BCP 47 para idioma de pista

**Base e interpretación:** RFC 5646 especifica tags como `es-ES` y `en-US`; un título traducido no basta para identificar pista de audio o subtítulos.

**Falsificador o comprobación pendiente:** Contratos futuros marcan tag por guion, caption, audio y export sin adivinar preferencia del espectador.

**Prioridad:** P1. **Referencias:** `BCP`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B412 — Traducción de HIPOTÉTICA con modalidad inequívoca

**Base e interpretación:** «Alternative line» por sí solo puede sonar jugado; la etiqueta inglesa debe transmitir explícitamente NOT PLAYED.

**Falsificador o comprobación pendiente:** Revisión semántica bilingüe de T05/T06 y prueba de comprensión nativa, no traducción literal sin estudio.

**Prioridad:** P0. **Referencias:** `G`, `BCP`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B413 — Consistencia de knight/bishop por color

**Base e interpretación:** «Alfil negro atacó alfil de c4» traduce información de pieza/color; en EN no debe simplificarse a «attacked white queen».

**Falsificador o comprobación pendiente:** Ledger con mover_piece, color y square por idioma, comparar con contrato canónico.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B414 — Narración de 'dama atacada' sin intención

**Base e interpretación:** La versión revisada «Y no la retiró» evita lectura mentalista; EN debe evitar «he knowingly sacrificed» si no respaldado.

**Falsificador o comprobación pendiente:** Proponer «he did not move it away» sin añadir voluntariedad estratégica como hecho histórico.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B415 — Acentos Unicode y pistas de subtítulos

**Base e interpretación:** UTF-8 de «HIPOTÉTICA» requiere representación y escapado correcto; un sistema que pierda tilde podría romper cotejos de rótulo.

**Falsificador o comprobación pendiente:** Validación futura de bytes y glyph coverage de font elegida en ES, no inferir de familia tipográfica.

**Prioridad:** P1. **Referencias:** `W3C`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B416 — No invertir notación al pasar a RTL

**Base e interpretación:** Una interfaz árabe o hebrea puede invertir paneles, pero archivos a→h y coordenadas d1 no deben transformarse por CSS lingüístico.

**Falsificador o comprobación pendiente:** Mantener coordenadas lógicas independientes del layout; test visual real pendiente.

**Prioridad:** P1. **Referencias:** `BCP`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B417 — Tiempo de lectura diferente por idioma

**Base e interpretación:** Un rótulo EN puede ocupar menos o más caracteres que ES; el objetivo 60s no garantiza legibilidad universal.

**Falsificador o comprobación pendiente:** Auditar duración y clipping por locale y no reutilizar un PASS español para inglés.

**Prioridad:** P0. **Referencias:** `G`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B418 — SEO multilingüe no cambia fuente

**Base e interpretación:** Título inglés podría llamarlo «checkmate» para atraer clics aunque el clip termina en captura y la partida sigue.

**Falsificador o comprobación pendiente:** Metadatos traducidos pasan mismo clasificador de F03 y cierre T12.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B419 — Audio de notación 17...Be6 contextualizado

**Base e interpretación:** El nombre oral «bishop to e6» debe sincronizarse con estado real y diferenciarse de «queen to d8» unplayed.

**Falsificador o comprobación pendiente:** Revisión future de subtítulo/locución por evento y modo real/hipotético.

**Prioridad:** P1. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B420 — Cambio de lengua dentro de una cita histórica

**Base e interpretación:** Una cita de revista inglesa no debe traducirse y presentarse entre comillas como literal de la publicación de 1956.

**Falsificador o comprobación pendiente:** Guardar quote_original, paraphrase_translated y atribución distintos; falta de original bloquea comillas.

**Prioridad:** P0. **Referencias:** `DCMI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias

- `G`: Chess Stories connected private GitHub: PR #1, #3, #4, #6, #7, #11, #12 and issue #8 (declarations and frozen gates only, not independently validated).
- `MAYER`: https://doi.org/10.1007/s10648-023-09842-1
- `REVIEW`: https://pmc.ncbi.nlm.nih.gov/articles/PMC10192876/
- `CAM`: https://doi.org/10.1017/9781108894333.019
- `FIDE`: https://handbook.fide.com/chapter/e012023
- `SF`: https://official-stockfish.github.io/docs/stockfish-wiki/Stockfish-FAQ.html
- `UCI`: https://github.com/echecsjs/uci/blob/main/SPEC.md
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `DCMI`: https://www.dublincore.org/specifications/dublin-core/dcmi-terms/
- `WINTER`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `WCH`: https://worldchesshof.org/wp-content/uploads/2025/02/amlvitrine-packetsfinal3.pdf
- `NIST`: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- `PROV`: https://www.w3.org/TR/prov-o/
- `BCP`: https://www.rfc-editor.org/rfc/rfc5646.html
- `W3C`: https://www.w3.org/International/questions/qa-html-language-declarations
- `WCAG`: https://www.w3.org/TR/WCAG22/

## Alcance congelado

Solo Chess Stories; E5B4D NO-GO bajo M; Política B mantiene terminación de todos los procesos relevantes con confirmación **estrictamente antes de 120 segundos**, stdout/stderr cada uno independiente ≤1.048.576 bytes **emitidos y aceptados en toda su vida**; R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; no oráculo, tests, renders, Actions, fusionar main ni publicar.
