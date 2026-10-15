# Chess Stories — Bloques de investigación B271–B320 (parte 1/2)

**Corte documental:** 14-10-2026. Continúa B1–B270; no reinicia la investigación. Los 50 bloques describen hallazgo documental o inferencia etiquetada, riesgo verificable, falsificador futuro y dependencia de evidencias. **No se han ejecutado pruebas, oráculos, renders ni estudios humanos.** Prioridad P0 = bloqueo factual o de aceptación; P1 = preparación condicional. Los IDs de fuente remiten a referencias al final.

## U — Localización y preservación granular de testigos 1956

### B271 — Manifest de ejemplares sin suponer IIIF

**Hallazgo o inferencia:** IIIF Presentation 3 modela Manifest→Canvas→Annotation Page y podría individualizar hojas 374/375; no se ha localizado un manifest IIIF real para este ejemplar.

**Prueba falsable pendiente:** Consultar catálogo oficial; registrar URI solo si existe. Un nombre de revista o PDF genérico no vale como identificador Canvas.

**Prioridad:** P0; **referencias:** `IIIF`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B272 — Paginación física frente a orden digital

**Hallazgo o inferencia:** Un Canvas puede representar la cara o página y diferir del índice de archivo PDF; el impreso 374 no equivale a PDF page 374.

**Prueba falsable pendiente:** Ficha de doble localizador: número impreso, posición digital, identificador institucional y zona de texto.

**Prioridad:** P0; **referencias:** `IIIF`, `E`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B273 — Anotaciones externas sin reescribir facsímil

**Hallazgo o inferencia:** IIIF permite asociar transcripciones mediante anotaciones suplementarias, preservando la distinción imagen fuente/lectura humana.

**Prueba falsable pendiente:** Diseñar annotation de zona con valor vacío hasta lectura A/B; rechazar sustituir el objeto primario por texto OCR.

**Prioridad:** P1; **referencias:** `IIIF`, `ANNOT`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B274 — Zonas de lectura sin copiar revista comercial

**Hallazgo o inferencia:** Web Annotation admite selectores espaciales y posicionales; una referencia a región es distinta de publicar la imagen protegida.

**Prueba falsable pendiente:** Registrar coordenadas de página autorizadas y enlace institucional; no subir recortes ni texto íntegro no licenciado.

**Prioridad:** P0; **referencias:** `ANNOT`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B275 — Ficha PREMIS de evento de observación

**Hallazgo o inferencia:** PREMIS separa Objects, Events, Rights y Agents; una inspección no debe confundirse con el objeto examinado.

**Prueba falsable pendiente:** Registrar evento «localización», actor, fecha, objeto y resultado, sin convertirlo en autenticación del original.

**Prioridad:** P1; **referencias:** `PREMIS`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B276 — Captura de incertidumbre paleográfica

**Hallazgo o inferencia:** Una letra difusa puede producir dos lecturas igualmente plausibles; guardar solo SAN normalizado suprime incertidumbre.

**Prueba falsable pendiente:** Campo de variantes observadas, región, probabilidad cualitativa y adjudicación posterior; no autocompletar con Winter.

**Prioridad:** P0; **referencias:** `G`, `E`, `ANNOT`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B277 — Control de migraciones en testigos digitales

**Hallazgo o inferencia:** Cambios de formato TIFF/PDF/OCR pueden preservar contenido visual pero alterar bitstream; PREMIS facilita eventos de migración distintos.

**Prueba falsable pendiente:** Separar hash por objeto antes/después y registrar herramienta de migración solo cuando se realice legalmente.

**Prioridad:** P1; **referencias:** `PREMIS`, `BAG`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B278 — Paquete conservable de hojas A/B

**Hallazgo o inferencia:** BagIt define manifests de checksums y validación de cargas; puede modelar un paquete privado de hojas transcritas y metadatos, no su veracidad.

**Prueba falsable pendiente:** Proponer contenido mínimo sin datos personales innecesarios; no denominar «bag válido» hasta verificar realmente checksums.

**Prioridad:** P1; **referencias:** `BAG`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B279 — Preservar auditoría de ejemplar sin desvelar respuestas

**Hallazgo o inferencia:** Archivo bruto y anotación de investigador no ciego no deben entrar en carpeta de lector independiente.

**Prueba falsable pendiente:** Diseñar árbol de acceso separado para lector A/B, curador y adjudicador, con lista negativa de archivos contaminantes.

**Prioridad:** P0; **referencias:** `G`, `PREMIS`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B280 — Distinción ejemplar 1956 y reproducción moderna

**Hallazgo o inferencia:** Museo cataloga revista diciembre 1956; la ficha no prueba que exhibición contenga todas sus páginas ni que digitalización actual sea íntegra.

**Prueba falsable pendiente:** Solicitar futura metadata de número, encuadernación, huecos, anverso/reverso y procedencia; no asignar 82 lecturas hoy.

**Prioridad:** P0; **referencias:** `WCH`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## V — Conflictos historiográficos y trazabilidad de inferencias

### B281 — Entidad afirmación frente a entidad fuente

**Hallazgo o inferencia:** En PROV-O una Entity derivada de otra puede conservar enlace wasDerivedFrom sin afirmar identidad ni veracidad; conviene separar texto claim, escaneo y lectura.

**Prueba falsable pendiente:** Para cada claim histórico exigir fuente física, acceso concreto y transformación, o mantener `SOURCE_DECLARED`.

**Prioridad:** P0; **referencias:** `PROV`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B282 — Actividades de lectura múltiples no son corroboración independiente

**Hallazgo o inferencia:** PROV modela agentes y actividades; dos lecturas de la misma tabla son independientes como lectores, no necesariamente como tradición editorial.

**Prueba falsable pendiente:** Contar independencia intra-ejemplar y transmisión interpublicaciones en columnas distintas.

**Prioridad:** P0; **referencias:** `PROV`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B283 — Gráfico de procedencia ante versión contradictoria

**Hallazgo o inferencia:** Russell relata una divergencia mate/resignación; una estructura PROV puede conservar ambas atribuciones sin forzar una sola conclusión.

**Prueba falsable pendiente:** Dos nodos de aserción con modalidad distinta + estado UNRESOLVED; prohibir consolidar en un booleano terminal.

**Prioridad:** P0; **referencias:** `G`, `PROV`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B284 — Hecho editorial y hecho sobre el tablero

**Hallazgo o inferencia:** La expresión «Game of the Century» es una caracterización editorial, no dato de jugada; Winter documenta quién lo difundió.

**Prueba falsable pendiente:** Clasificar título valorativo como ATTRIBUTED_LABEL y no como hecho del evento sujeto a FEN.

**Prioridad:** P1; **referencias:** `E`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B285 — «Fischer renunció a salvar su dama» es intencionalidad

**Hallazgo o inferencia:** La variación del guion de PR #4 hacia «no la retiró» reduce inferencia psicológica sin cambiar el resultado visual declarado.

**Prueba falsable pendiente:** Detectar en guiones verbos pensó, sabía, deseaba, planeó; exigir testimonio atribuido antes de publicar.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B286 — Estado de una renuncia no reproducida

**Hallazgo o inferencia:** Un testimonio sobre lo que anotó Byrne no prueba instantáneamente el instante formal en que se detuvo el reloj del torneo.

**Prueba falsable pendiente:** Disociar scoresheet_mark, result_marker y actual_termination_event; todos pueden estar UNKNOWN.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B287 — Origen de la interpretación estratégica

**Hallazgo o inferencia:** Un comentarista posterior puede encontrar secuencia brillante con evaluación moderna; no convertirla en palabras o intenciones de Fischer.

**Prueba falsable pendiente:** Cada línea analítica cita autor/fecha y distingue AUTO_ENGINE, HISTORICAL_ANNOTATION, EDITORIAL_INFERENCE.

**Prioridad:** P0; **referencias:** `G`, `E`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B288 — Degradación controlada de afirmaciones ante nueva evidencia

**Hallazgo o inferencia:** Si una foto autorizada futura contradice el testigo impreso, la historia debería degradar certeza sin borrar versiones anteriores.

**Prueba falsable pendiente:** Plan de event-sourced revision: claim anterior conserva vigencia temporal y nuevo estado requiere autor de decisión.

**Prioridad:** P0; **referencias:** `PROV`, `PREMIS`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B289 — No evidencia no significa desmentido

**Hallazgo o inferencia:** No acceso a diciembre 1956 significa NOT_INSPECTED; no significa que Chess Review difiera del SAN secundario.

**Prueba falsable pendiente:** Establecer vocabulario observability: NOT_SEEN, SEEN_AMBIGUOUS, SEEN_LEGIBLE, READER_CONFIRMED, EXTERNAL_AUTHENTICATED.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B290 — Revisor A/B y curador no ciego incompatibles

**Hallazgo o inferencia:** El asistente ya vio 82 SAN y no puede firmar testimonio independiente por cambiar la herramienta o el navegador.

**Prueba falsable pendiente:** En eventual contratación de lector registrar declaración de exposición previa; la ausencia de acceso se verifica antes de asignar.

**Prioridad:** P0; **referencias:** `G`, `PROV`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## W — Alcance exacto de las reglas de ajedrez y del score

### B291 — FIDE 2023 no autentica arbitraje de 1956

**Hallazgo o inferencia:** Las Leyes FIDE de 2023 definen legalidad moderna; aplicar retroactivamente una disposición de torneo específica a 1956 puede ser erróneo.

**Prueba falsable pendiente:** Mantener ORACLE_RULESET_2023 para reconstrucción moderna y RULES_1956_HISTORICAL_STATUS_UNKNOWN separados.

**Prioridad:** P0; **referencias:** `FIDE`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B292 — Jaque y ataque no equivalen a jugada disponible

**Hallazgo o inferencia:** FIDE 3.9 distingue ataque al rey y restricción de exponer rey propio; diferencia FEN puede sugerir movimiento aunque fuera ilegal.

**Prueba falsable pendiente:** Dictamen de oráculo incluye estado de jaque previo/posterior, no solo origen/destino.

**Prioridad:** P0; **referencias:** `FIDE`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B293 — Misma posición para repetición no es mismo dibujo

**Hallazgo o inferencia:** El artículo FIDE 9.2.3 diferencia posibles movimientos (en passant y enroque) aunque las piezas ocupen mismas casillas.

**Prueba falsable pendiente:** Un futuro fingerprint de estado legal debe llevar derechos y legal-EP; no comparar exclusivamente tablero renderizado.

**Prioridad:** P0; **referencias:** `FIDE`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B294 — Metadatos de juego PGN no provienen de imagen

**Hallazgo o inferencia:** PGN Seven Tag Roster Event/Site/Date/Round/White/Black/Result no se infiere de un tablero ni de un mate representado.

**Prueba falsable pendiente:** Marcar procedencia por cada tag y exigir fuente independiente para «Round» si no aparece en expediente.

**Prioridad:** P0; **referencias:** `PGN`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B295 — Variación editorial PGN no añade evento MAIN

**Hallazgo o inferencia:** PGN puede contener variaciones entre paréntesis; una línea `17...Qd8` analítica no vuelve histórica la jugada.

**Prueba falsable pendiente:** El compilador futuro crea branch HYPOTHETICAL aun si la variación procede de otro PGN secundario.

**Prioridad:** P0; **referencias:** `PGN`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B296 — SAN con número no resuelve legalidad

**Hallazgo o inferencia:** Etiqueta `25...Nxd1` incluye turno y destino; de acuerdo con FIDE la legalidad exige reglas completas, incluida protección del rey.

**Prueba falsable pendiente:** No adjudicar legalidad por regex de SAN ni comparación de etiqueta, conservar `ORACLE_NOT_RUN`.

**Prioridad:** P0; **referencias:** `FIDE`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B297 — Turno e implicación de ply 49

**Hallazgo o inferencia:** FEN `b ... 25` en V-PRE-EV2 implica que juegan negras en media jugada 50, pero no demuestra que el salto precedente sea auténtico.

**Prueba falsable pendiente:** Separar cronología sintáctica de confirmación de los 14 medios movimientos omitidos.

**Prioridad:** P0; **referencias:** `FIDE`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B298 — Movimientos compuestos no representables por diferencia de dos casillas

**Hallazgo o inferencia:** Enroque y en passant alteran piezas de maneras no capturadas por un transform simple origen→destino; promoción requiere elección.

**Prueba falsable pendiente:** El oráculo futuro trata tipos especiales, no extrapola regla de seis movimientos EP01 al motor de ajedrez general.

**Prioridad:** P0; **referencias:** `FIDE`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B299 — Marcador de resultado 0-1 no implica mate

**Hallazgo o inferencia:** PGN distingue tag Result y token de terminación; la coincidencia `0-1` no certifica el último SAN `Rc2#`.

**Prueba falsable pendiente:** Compare resultado y anotación final por separado en testigos A/B y secundario.

**Prioridad:** P0; **referencias:** `PGN`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B300 — Desfase entre nivel pedagógico y exhaustividad legal

**Hallazgo o inferencia:** Explicar todos los recursos tácticos en 60s puede requerir estado legal no validado y más tiempo; no cubrir vacíos con espectacularidad visual.

**Prueba falsable pendiente:** Un claim estratégico profundo se difiere a newsletter/largo salvo fuente e IVV demostrables.

**Prioridad:** P1; **referencias:** `G`, `FIDE`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## X — ALT-A, continuidad perceptiva y contradicciones visuales

### B301 — Corte al después sin fotografiar fuente técnica

**Hallazgo o inferencia:** ALT-A evita mostrar V-PRE-EV2, pero el salto V-REAL→V-EV2 puede confundirse con un único movimiento si no se señaliza.

**Prueba falsable pendiente:** Storyboard de frontera: tarjeta 14 plies omitidos, transición dura, etiqueta «después» y captura en d1.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B302 — Borrar flechas heredadas antes del corte T11

**Hallazgo o inferencia:** Una flecha Be6 o Bxb6 sobreviviente al salto puede superponerse a tablero de otra posición, sugiriendo causa falsa.

**Prueba falsable pendiente:** Lista de capas debe reiniciarse en hard-cut a V-EV2; sin animación de piezas retroactiva.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B303 — V-EV2 como still auténtico solo del fixture

**Hallazgo o inferencia:** La declaración `VISUAL` permite planificar escena, no equivale a fotografía de 1956 ni a partida legal certificada.

**Prueba falsable pendiente:** Rotular fuentes modernas «reconstrucción declarada» en expediente, no añadir certificación de archivo a pantalla.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B304 — Rótulo de captura diferido respecto al jump

**Hallazgo o inferencia:** Si se lee «25...Nxd1» antes de entender el salto, se interpretará que salta de posición anterior inmediata.

**Prueba falsable pendiente:** Diseñar jerarquía: tiempo omitido primero, luego número de jugada/captura.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B305 — T10 sin tween de piezas también puede ocultar movimientos

**Hallazgo o inferencia:** Mantener la imagen V-REAL durante 4 s omite posiciones 36–49 legítimamente, pero puede parecer congelación no intencionada.

**Prueba falsable pendiente:** Un aviso independiente «SE OMITEN 14 MEDIAS JUGADAS» visible y contrastado debe distinguir hold narrativo de error de reproducción.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B306 — El d1 destacado no representa la torre

**Hallazgo o inferencia:** Tras 25...Nxd1 la torre capturada ya no está: añadir icono de torre sobre d1 podría volverla a dibujar.

**Prueba falsable pendiente:** Llamada de texto fuera de casilla + halo del caballo negro, no sprite fantasma de torre sobre la posición final.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B307 — Persistencia de glifo de captura en frame final

**Hallazgo o inferencia:** Un halo persistente durante T12 puede sugerir que la partida acaba por capturar torre en d1, contradiciendo cierre editorial.

**Prueba falsable pendiente:** Eliminación programada de callout antes de «LA PARTIDA CONTINÚA» y revisión de frames.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B308 — Punto de referencia espacial en tablero vertical

**Hallazgo o inferencia:** La zona d1 cambia de proximidad a borde inferior según orientación; perfil propone blancas abajo, no se ha probado recorte móvil.

**Prueba falsable pendiente:** Criterio de coordenadas d1 completamente visible en cada crop 9:16 y en interfaz ampliada.

**Prioridad:** P1; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B309 — Prueba perceptiva del corte estático con información completa

**Hallazgo o inferencia:** ALT-A deja de animar una jugada, por lo que un espectador puede recordar la captura como resultado sin conocer su recorrido.

**Prueba falsable pendiente:** Instrumento diferencia «qué sucedió» de «cómo se desplazó», sin culpar al participante por información no mostrada.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B310 — Intervención de alta prioridad sin cambio al contrato base

**Hallazgo o inferencia:** Evitar exposición de TECHNICAL_ONLY debe ocurrir en presentación, no cambiando PR #1 V-PRE-EV2 a VISUAL.

**Prueba falsable pendiente:** Auditoría future diff: prohibir modificar visibility canónica solo para facilitar diseño.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Y — Tiempos reales, pistas, integridad audiovisual

### B311 — Timebase racional versus milisegundos de diseño

**Hallazgo o inferencia:** Una duración prevista de 4000ms no determina número entero de fotogramas a 23.976/25/30fps.

**Prueba falsable pendiente:** Especificar timebase, PTS/DTS y rounding por fase del MP4 real solo tras autorización.

**Prioridad:** P1; **referencias:** `G`, `WEBVTT`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B312 — PTS discontinuos tras cortes y transcodificación

**Hallazgo o inferencia:** Una duración de container correcta puede coexistir con huecos o repetición de cuadros, afectando orden de T07.

**Prueba falsable pendiente:** QC por timestamps de cuadros y rótulos en archivo real, no inferir de duración total.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B313 — Subtítulos como pista y rótulos quemados

**Hallazgo o inferencia:** La caption opcional sirve a accesibilidad; el aviso hipotético en el relato debe seguir visible aunque la plataforma desactive subtítulos.

**Prueba falsable pendiente:** Futura export prueba con pistas ocultas y audio silenciado sin perder estado REAL/HYPOTHETICAL.

**Prioridad:** P0; **referencias:** `CAP`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B314 — Texto alternativo sincronizado del corte T10/T11

**Hallazgo o inferencia:** W3C admite alternativa textual temporal o audiodescripción para transmitir contenido visual no audible; el guion fuente no basta si no refleja el montaje final.

**Prueba falsable pendiente:** Describir el corte y omisión en una transcripción final actualizada a los frames reales.

**Prioridad:** P1; **referencias:** `WAI`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B315 — C2PA como evidencia de transformaciones, no de hecho histórico

**Hallazgo o inferencia:** C2PA firma manifiestos y puede vincular ingredientes; verifica procedencia declarada, no que Fischer hiciera determinada jugada.

**Prueba falsable pendiente:** Futuro manifest identifica generador y assets sin marcar `historical_authenticated` por la firma.

**Prioridad:** P1; **referencias:** `C2PA`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B316 — Reexportación rompe identidad de media

**Hallazgo o inferencia:** Un archivo retranscodificado puede tener hash distinto y perder manifest C2PA; eso no significa necesariamente cambio de semántica.

**Prueba falsable pendiente:** Registrar output digest nuevo y verificaciones de verdad por plataforma, no reciclar el hash maestro.

**Prioridad:** P1; **referencias:** `C2PA`, `BAG`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B317 — Audio silencioso declarado frente a pista de silencio codificada

**Hallazgo o inferencia:** Un candidato sin música puede tener pista de audio silenciosa; manifest debe distinguir NO_AUDIO_TRACK y SILENT_AUDIO_TRACK.

**Prueba falsable pendiente:** Para el estudio privado, registrar stream presence y derechos, no asumir que silencio auditivo implica ausencia de assets.

**Prioridad:** P1; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B318 — Checksum de paquete no verifica orden de eventos

**Hallazgo o inferencia:** BagIt valida presencia/integridad de bytes, no que T07 muestre MAIN antes de retirar aviso.

**Prueba falsable pendiente:** Combinar en el futuro fixity de media con inspección independiente frame a frame y truth ledger.

**Prioridad:** P0; **referencias:** `BAG`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B319 — Frame de portada no autorizado fuera del timeline

**Hallazgo o inferencia:** Una portada automática extraída de T06 puede mostrar Qd8 sin aviso si el crop elimina etiqueta.

**Prueba falsable pendiente:** Revisar still de portada por separado; la historia temporal veraz no valida recortes de thumbnail.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B320 — Cierre visible de 60s y loop automático

**Hallazgo o inferencia:** En bucle el último «partida continúa» puede empalmar con inicio «dama atacada» y parecer causalmente seguido.

**Prueba falsable pendiente:** Evaluar transición de loop en reproducción repetida, sin añadir un mate o último movimiento inventado.

**Prioridad:** P1; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias y límites

- `G`: Repositorio conectado sedanoantolinalberto-code/AutoTactics-ChessStories, PR #1/#3/#4/#7/#10/#11/#12, issue #8; testimonio del estado declarado, no autentificación externa.
- `IIIF`: https://iiif.io/api/presentation/3.0/
- `PREMIS`: https://www.loc.gov/standards/premis/v3/
- `ANNOT`: https://www.w3.org/TR/annotation-model/
- `PROV`: https://www.w3.org/TR/prov-o/
- `BAG`: https://www.rfc-editor.org/rfc/rfc8493.html
- `FIDE`: https://handbook.fide.com/chapter/e012023
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `WAI`: https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded
- `CAP`: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded
- `C2PA`: https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html
- `WEBVTT`: https://www.w3.org/TR/webvtt1/
- `E`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `WCH`: https://worldchesshof.org/wp-content/uploads/2025/02/amlvitrine-packetsfinal3.pdf

## NO-GO preservado

E5B4D NO-GO bajo M; Política B sin cambios: todos los procesos relevantes terminados y confirmados **antes de 120 s**; cada stream stdout/stderr con máximo **1.048.576 bytes emitidos y aceptados** por toda su vida. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; fuente 1956 y jugadas aún sin cualificar; no ejecutar proyecto/tests, render, Actions, fusionar main o publicar.
