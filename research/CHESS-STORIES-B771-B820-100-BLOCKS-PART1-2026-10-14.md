# Chess Stories — Investigación B771–B820 (parte 1/2)

**Fecha:** 14 octubre 2026. Continuación de B1–B770. Los 50 apartados son investigación de fuentes y aplicaciones específicas, NO datos ejecutados o aprobaciones. En cada apartado se distingue hecho documental y futura comprobación. `P0` indica riesgo prioritario, no bug certificado; `P1` indica preparación.

## BS — Archivo duradero y preservación con responsabilidades definidas

### B771 — Paquete de ingreso frente a paquete de consulta

**Observación o inferencia acotada:** OAIS diferencia la custodia archivística del material destinado a comunidad usuaria; un enlace a la revista no constituye un paquete preservado.

**Falsificador pendiente:** Inventariar qué bytes se recibieron legalmente, quién los custodia, qué se puede consultar y qué no distribuir.

**Prioridad:** P0. **Fuentes:** `OAIS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B772 — Comunidad designada para el ajedrez de 1956

**Observación o inferencia acotada:** OAIS utiliza Designated Community: lectores de notación descriptiva y espectadores principiantes requieren información de representación distinta.

**Falsificador pendiente:** Describir conocimientos asumidos por revisor histórico y por consumidor del Short, sin confundir ambos públicos.

**Prioridad:** P1. **Fuentes:** `OAIS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B773 — NDSA v2.1 no es certificado automático

**Observación o inferencia acotada:** NDSA publicó la revisión 2.1 en marzo de 2026 con guía de sostenibilidad; usar la matriz no significa haber alcanzado un nivel de preservación.

**Falsificador pendiente:** Evaluación por función y nivel basada en evidencia de copias, integridad, metadatos y responsabilidad reales.

**Prioridad:** P0. **Fuentes:** `NDSA26`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B774 — Copias en ubicaciones independientes

**Observación o inferencia acotada:** La pérdida de cuenta Git no debería destruir las únicas observaciones de 1956; guardar enlaces externos no crea copia autorizada.

**Falsificador pendiente:** Plan de redundancia sólo para materiales que podamos conservar, especificando repositorios y permisos sin crear copias hoy.

**Prioridad:** P1. **Fuentes:** `NDSA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B775 — Chequeo de integridad periódico diferente del hash inicial

**Observación o inferencia acotada:** Un Git blob identifica contenido en un momento; NDSA contempla gestión de integridad a lo largo del tiempo.

**Falsificador pendiente:** Futura verificación de digests contra objetos originales preservados y registro de fallo y reparación.

**Prioridad:** P0. **Fuentes:** `NDSA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B776 — Metadatos mínimos para una futura migración

**Observación o inferencia acotada:** Un PGN secundario o archivo TIFF sin identidad de formato/versión complicará futuras migraciones y auditoría.

**Falsificador pendiente:** Ficha de formato, encoding, tamaño, origen, licencia, dependencia técnica y evento de conversión.

**Prioridad:** P1. **Fuentes:** `OAIS`, `NDSA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B777 — Destino de derivados EPUB, captions y MP4

**Observación o inferencia acotada:** Una fuente histórica puede producir tres soportes con plazos y rights scope distintos; el mismo paquete de conservación no equivale a mismo permiso.

**Falsificador pendiente:** Tabla input→output→transformación→licencia→retención con digest futuro por derivado.

**Prioridad:** P0. **Fuentes:** `OAIS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B778 — Ausencia de original no se resuelve con snapshots secundarios

**Observación o inferencia acotada:** Preservar copias de PGN moderno protege esa edición, pero no autentica manuscritos perdidos ni scoresheets originales.

**Falsificador pendiente:** Inventario separado de original-no-observado, reproducción autorizada y derivado analítico.

**Prioridad:** P0. **Fuentes:** `OAIS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B779 — Plan de salida si cierra proveedor del archivo

**Observación o inferencia acotada:** La dependencia de un catálogo público remoto exige alternativa legal de identificación sin garantizar que exista una copia entregable.

**Falsificador pendiente:** Ficha custodio, accession si lo proporciona, contacto público y condiciones de acceso por verificar.

**Prioridad:** P1. **Fuentes:** `NDSA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B780 — Retención de actas de gate distinta de media

**Observación o inferencia acotada:** La política de conservación de informes R6/IVV y decisiones firmadas no debería depender de que un MP4 permanezca publicado.

**Falsificador pendiente:** Definir retención proporcional de evidencia de autorización y derecho de acceso, sin recolectar datos de humanos.

**Prioridad:** P0. **Fuentes:** `OAIS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BT — Ajedrez legal: exhaustividad, perft y notación histórica

### B781 — Perft valida generador, no testimonio

**Observación o inferencia acotada:** Perft compara número de posiciones alcanzables por profundidad; una cifra correcta comprueba parte del generador, no el score de 1956.

**Falsificador pendiente:** En entorno autorizado separar perft de validación de trayectoria EP01 y de lectura histórica ciega.

**Prioridad:** P0. **Fuentes:** `PERFT`, `FIDE`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B782 — Suite de posiciones especiales sin extrapolación

**Observación o inferencia acotada:** Bancos de perft contemplan capturas, enroques y promociones; pasar el inicio no cubre casos especiales.

**Falsificador pendiente:** Matriz futura con posiciones adversariales por regla y evidencia de expected values de fuentes independientes.

**Prioridad:** P0. **Fuentes:** `PERFT`, `FIDE`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B783 — Dos implementaciones no son dos árbitros independientes por defecto

**Observación o inferencia acotada:** Bibliotecas legales pueden compartir código o test suites; diversidad de nombre no garantiza independencia del mecanismo.

**Falsificador pendiente:** Inventariar dependencia de librerías, reglas, fixtures y evaluadores antes de afirmar doble oráculo.

**Prioridad:** P0. **Fuentes:** `FIDE`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B784 — Anotación descriptiva no sujeta retroactivamente a FIDE 2023

**Observación o inferencia acotada:** La FIDE actual exige notación algebraica; el artículo histórico usa otra convención y puede ser evidencia histórica aunque no cumpla normas actuales.

**Falsificador pendiente:** Dos verificaciones separadas: lectura literal 1956 y traducción a reglas de reconstrucción modernas.

**Prioridad:** P0. **Fuentes:** `FIDE`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B785 — Distinción crítica SAN y notación descriptiva

**Observación o inferencia acotada:** El símbolo impreso Kt no debe convertirse a N antes de guardar fotografía/lectura; la normalización puede ocultar error de transcripción.

**Falsificador pendiente:** Futura hoja A/B congela caracteres originales y estado de duda antes de SAN moderno.

**Prioridad:** P0. **Fuentes:** `PGN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B786 — Semántica de mover/capturar sin inferir intención

**Observación o inferencia acotada:** Un move legal no demuestra que jugador supiera o planeara sacrificio; el análisis moderniza resultado, no psicología.

**Falsificador pendiente:** Clasificar claim de movimiento como observable y claim de intención como necesitado de testimonio independiente.

**Prioridad:** P0. **Fuentes:** `G`, `FIDE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B787 — Rango 36–49 con verificación de lista y orden

**Observación o inferencia acotada:** Catorce plies significa cardinalidad 49−36+1=14; eso no certifica cuál fue cada movimiento omitido.

**Falsificador pendiente:** Cuando se permita, contrastar lista exacta y FEN consecutivo con testigo autorizado y oráculo aparte.

**Prioridad:** P0. **Fuentes:** `G`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B788 — Análisis de mate en reconstrucción vs cierre editorial

**Observación o inferencia acotada:** Un mate secundario en ply82 no autoriza símbolo de mate en el frame editorial ply50.

**Falsificador pendiente:** Comparar terminal de PGN, terminal documentado y fin de episodio en campos separados.

**Prioridad:** P0. **Fuentes:** `G`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B789 — Resultado competitivo y anotación ajedrecística de final

**Observación o inferencia acotada:** Un marcador 0–1 no revela si el final fue resignación, mate impreso o reconstrucción; ambigüedad afecta lenguaje narrativo.

**Falsificador pendiente:** Exigir testigo por clase de final y conservar CONFLICTED si sólo hay publicaciones secundarias.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B790 — Error histórico que sobrevive a dos validadores legales

**Observación o inferencia acotada:** Una jugada totalmente legal puede ser incorrecta respecto del archivo impreso; dos engines podrían aceptar la misma falsificación.

**Falsificador pendiente:** Mantener HISTORY_AUTHENTICATED independiente de LEGALITY_QUALIFIED sin promoción cruzada.

**Prioridad:** P0. **Fuentes:** `G`, `PERFT`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BU — IVV como estudio humano preespecificado y no como encuesta informal

### B791 — SPIRIT 2025 aplicable como plantilla, no requisito reglamentario automático

**Observación o inferencia acotada:** SPIRIT 2025 incluye versión de protocolo, responsables, intervención y medidas; Chess Stories no está realizando un ensayo clínico.

**Falsificador pendiente:** Tomar criterios de rigor útiles sin describir la futura evaluación perceptiva como ensayo clínico ni reclutar hoy.

**Prioridad:** P1. **Fuentes:** `SPIRIT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B792 — CONSORT 2025 para describir resultados si hay aleatorización

**Observación o inferencia acotada:** CONSORT 2025 define flujo de participantes y contenido de reporte para ensayos aleatorizados; no sustituye consentimiento ni criterio de IVV.

**Falsificador pendiente:** Si algún día hay comparación 45/60 aleatorizada, registrar asignaciones, exclusiones y datos ausentes.

**Prioridad:** P1. **Fuentes:** `CONSORT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B793 — Primario de factualidad separado de satisfacción

**Observación o inferencia acotada:** Preferencia estética no es comprensión de Qd8; elegir IVV por satisfacción puede favorecer un vídeo engañoso.

**Falsificador pendiente:** Predefinir variable primaria de clasificación real/no jugada, dejando agrado como secundaria.

**Prioridad:** P0. **Fuentes:** `G`, `SPIRIT`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B794 — Diferencia entre comparación editorial y efecto de duración

**Observación o inferencia acotada:** 45 vs 60 modifica distribución de tiempo y ALT-A; una diferencia no es efecto causal aislado de quince segundos.

**Falsificador pendiente:** Nombrar brazos completos y factores confundidos en protocolo antes de hipotetizar superioridad.

**Prioridad:** P0. **Fuentes:** `G`, `SPIRIT`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B795 — Señal de fuga de respuestas por repetición

**Observación o inferencia acotada:** Ver ambas versiones de Byrne–Fischer en secuencia puede enseñar las preguntas de la segunda condición.

**Falsificador pendiente:** Fijar si se usará asignación entre sujetos o contrabalanceo, sin escoger después de datos.

**Prioridad:** P0. **Fuentes:** `SPIRIT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B796 — Límite de familiaridad y transferencia

**Observación o inferencia acotada:** Un experto que conoce la partida puede acertar sin ver bien el corte; un novato puede fallar por desconocer SAN.

**Falsificador pendiente:** Registrar familiaridad y alfabetización de notación como covariables predefinidas, con mínimos datos personales.

**Prioridad:** P0. **Fuentes:** `G`, `SPIRIT`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B797 — Umbral de inconclusión definido antes del estudio

**Observación o inferencia acotada:** Una diferencia pequeña con muestra reducida no debe convertirse en PASS narrativo por conveniencia editorial.

**Falsificador pendiente:** Plan con umbral, intervalo de incertidumbre y criterio de insuficiencia, firmado antes de resultados.

**Prioridad:** P0. **Fuentes:** `SPIRIT`, `CONSORT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B798 — Aislar si d1 se entendió sin presentar el tablero técnico

**Observación o inferencia acotada:** No puede puntuarse como error no conocer trayectoria c3→d1 si el montaje ALT-A nunca mostró el origen.

**Falsificador pendiente:** Variable primaria sobre víctima/destino y variable de trayectoria sólo si tratamiento la enseñó.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B799 — Seguridad visual como criterio previo no perceptivo

**Observación o inferencia acotada:** Preguntar satisfacción no verifica destellos, solapamientos o riesgos de accesibilidad; requiere QC independiente.

**Falsificador pendiente:** No exponer participantes hasta comprobar condiciones técnicas y permiso de estímulo real.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B800 — CONSORT no certifica un estudio no ejecutado

**Observación o inferencia acotada:** Tener una checklist o diagramas de flujo no equivale a participantes, consentimiento, datos ni evaluación independiente.

**Falsificador pendiente:** Estado preregistration DRAFT y results NOT_COLLECTED; impedir promoción por documento acabado.

**Prioridad:** P0. **Fuentes:** `CONSORT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BV — Normas de vídeo, subtítulos y evidencia visual en móvil

### B801 — BT.709 como espacio técnico identificado

**Observación o inferencia acotada:** La UIT publica BT.709-6 como norma de parámetros HDTV; mencionar RGB en JSON no determina espacio de color del MP4.

**Falsificador pendiente:** Manifest futuro declara espacio real de producción, exportación y reproducción observado, sin reivindicar conformidad actual.

**Prioridad:** P1. **Fuentes:** `ITU`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B802 — Contraste medido sobre píxeles finales

**Observación o inferencia acotada:** El contraste de un cartel no depende sólo del hex del diseño, pues compresión y transferencias pueden alterarlo.

**Falsificador pendiente:** Inspección de frames decodificados después del export para rótulos sobre casillas claras/oscuras.

**Prioridad:** P0. **Fuentes:** `WCAG`, `ITU`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B803 — WebVTT es pista externa diferente de verdad visual embebida

**Observación o inferencia acotada:** WebVTT sirve para captions, descripciones y metadata temporal; el usuario puede desactivar subtítulos opcionales.

**Falsificador pendiente:** Mantener HIPOTÉTICA/ELIPSIS de manera independiente a WebVTT y a locución.

**Prioridad:** P0. **Fuentes:** `VTT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B804 — Cues solapados no prueban visibilidad simultánea

**Observación o inferencia acotada:** La especificación admite regiones, desplazamiento y configuración de cues; el reproductor puede desplazar una etiqueta.

**Falsificador pendiente:** Inspeccionar recortes y zonas de caption junto con marcador de factualidad en pantalla real.

**Prioridad:** P0. **Fuentes:** `VTT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B805 — Intervalos de caption y GOP no son equivalentes

**Observación o inferencia acotada:** El texto designado 4000ms puede no coincidir con límite de frame codificado; el reproductor decide qué instante muestra.

**Falsificador pendiente:** Usar PTS real para comprobar fronteras T05/T07 y T10/T11, sin inferir de duraciones objetivo.

**Prioridad:** P0. **Fuentes:** `G`, `VTT`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B806 — Legibilidad de piezas en video comprimido

**Observación o inferencia acotada:** El caballo original declarativo puede perder contorno en feed móvil mientras el rótulo SAN sigue nítido.

**Falsificador pendiente:** QA de identificación ciega de pieza en archivo descodificado y dispositivo, no sólo diagrama vectorial.

**Prioridad:** P0. **Fuentes:** `G`, `ITU`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B807 — Avisos reales junto a controles de plataforma

**Observación o inferencia acotada:** Badges automáticos, descripción expandida y botones pueden cubrir el texto aunque el export esté técnicamente correcto.

**Falsificador pendiente:** Calificar panel UI real por cliente/fecha además de revisión del MP4.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B808 — Subtítulo localizado sin recorte del tablero

**Observación o inferencia acotada:** En una edición EN la longitud puede cambiar; reaplicar layout ES puede cubrir d1 o «LA PARTIDA CONTINÚA».

**Falsificador pendiente:** Verificación de wrapping y posición por lengua contra la salida final.

**Prioridad:** P0. **Fuentes:** `VTT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B809 — Flash y movimiento como dimensiones de QC separadas

**Observación o inferencia acotada:** Un vídeo sin flashes puede producir mareo por cámara rápida y uno legible puede contener destellos peligrosos.

**Falsificador pendiente:** Dos criterios QC independientes y evidencia de medio real, no pase global a partir de una captura fija.

**Prioridad:** P0. **Fuentes:** `WCAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B810 — Aprobar sólo un archivo no aprueba reexportaciones

**Observación o inferencia acotada:** Una transcodificación de plataforma puede alterar contraste y reubicación de subtítulos externos.

**Falsificador pendiente:** Manifest por archivo y verificación en cada canal antes de heredar estado de presentación.

**Prioridad:** P0. **Fuentes:** `G`, `ITU`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BW — Localización internacional y orden lógico de la notación

### B811 — LTR SAN incrustado dentro de árabe RTL

**Observación o inferencia acotada:** W3C recomienda aislamiento de fragmentos cuando cambian direcciones; `25...Nxd1` puede reordenarse visualmente.

**Falsificador pendiente:** Propuesta de campo `chess_notation_direction=ltr` independiente de lengua para futuro rendering.

**Prioridad:** P0. **Fuentes:** `BIDI`, `BIDIMARK`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B812 — RLI/LRI/FSI/PDI frente a marcas antiguas

**Observación o inferencia acotada:** La guía W3C favorece aislamiento bidireccional; caracteres invisibles heredados mal balanceados pueden afectar fragmentos ajenos.

**Falsificador pendiente:** Proponer revisión de secuencias Unicode de control y texto visual en entorno autorizado.

**Prioridad:** P1. **Fuentes:** `BIDI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B813 — Coordenada algebraica no debe invertirse con layout

**Observación o inferencia acotada:** Un tablero visual espejado por idioma no modifica nombres de a–h ni el lado al que mueve cada bando.

**Falsificador pendiente:** Data model de coordenadas LTR universal y view transform separado para UI RTL.

**Prioridad:** P0. **Fuentes:** `FIDE`, `BIDI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B814 — «... » de turno negro con bidi

**Observación o inferencia acotada:** Tres puntos en `25...Nxd1` podrían desplazarse en frase árabe y alterar lectura de quién mueve.

**Falsificador pendiente:** Pruebas de texto por idioma con aislamiento span SAN en narración/captions.

**Prioridad:** P0. **Fuentes:** `BIDI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B815 — Etiquetas de modalidad con negación conservada

**Observación o inferencia acotada:** «Línea alternativa» no equivale siempre a «no se jugó», y algunos lenguajes colocan negación lejos del verbo.

**Falsificador pendiente:** Glosario traducido con revisión humana de modalidad factual por evento, no traducción literal automática.

**Prioridad:** P0. **Fuentes:** `G`, `LANG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B816 — Separación de idioma y región comercial

**Observación o inferencia acotada:** Un texto `es` puede destinarse a España o Latinoamérica, pero un tag de lengua no determina IVA o jurisdicción de derechos.

**Falsificador pendiente:** Campos independientes locale, territory y rights_scope de cada publicación.

**Prioridad:** P0. **Fuentes:** `LANG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B817 — Calendario de fecha histórica en distintas culturas

**Observación o inferencia acotada:** Una fecha de 1956 puede formatearse culturalmente distinto; formato ISO de metadatos sigue fuente fechada.

**Falsificador pendiente:** Mostrar fecha localizada sin modificar el dato original ni inventar día exacto.

**Prioridad:** P1. **Fuentes:** `LANG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B818 — Fragmentos históricos literales dentro de traducción

**Observación o inferencia acotada:** La cita inglesa de una revista no puede aparecer entre comillas como literal en español sin calificar que es traducción.

**Falsificador pendiente:** Registrar `quote_original` y `translated_paraphrase` y conservar origen atribuido.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B819 — Fuente tipográfica internacional por binario

**Observación o inferencia acotada:** Que Noto Sans cubra latín no prueba que una variante concreta cubra árabe y símbolos ajedrecísticos simultáneamente.

**Falsificador pendiente:** Revisión de glyph coverage y licencia exacta de cada archivo a incorporar, R6 sin aprobación automática.

**Prioridad:** P0. **Fuentes:** `G`, `BIDI`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B820 — Medición de comprensión por idioma no heredable

**Observación o inferencia acotada:** Un IVV en castellano no verifica si las personas comprenden el aviso no jugado en otra lengua.

**Falsificador pendiente:** Pruebas humanas independientes por lengua de salida cuando haya media lícita.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes trazables

- `G`: GitHub privado AutoTactics-ChessStories, contratos en PR #1/#3/#4/#6/#7/#11/#12 e issue #8, declaraciones sin ejecución
- `NDSA`: https://www.ndsa.org/activities/levels-of-digital-preservation/
- `NDSA26`: https://www.ndsa.org/2026/03/23/announcing-version-2_1-of-the-ndsa-levels-of-digital-preservation.html
- `OAIS`: https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/08/74/87471.html
- `FIDE`: https://handbook.fide.com/chapter/e012023
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `PERFT`: https://www.chessprogramming.org/Perft_Results
- `SPIRIT`: https://www.consort-spirit.org/published-statements
- `CONSORT`: https://www.bmj.com/content/389/bmj-2024-081123
- `ITU`: https://www.itu.int/rec/R-REC-BT.709/en
- `VTT`: https://www.w3.org/TR/webvtt1/
- `WCAG`: https://www.w3.org/TR/WCAG22/
- `BIDI`: https://www.w3.org/TR/international-specs/
- `BIDIMARK`: https://www.w3.org/International/articles/inline-bidi-markup/Overview.en.php
- `LANG`: https://www.rfc-editor.org/rfc/rfc5646.html

## Estado del proyecto congelado

E5B4D NO-GO bajo M. Política B estricta: procesos relevantes terminados y terminación confirmada **estrictamente antes de 120 s**, stdout/stderr cada uno ≤ **1.048.576 bytes emitidos Y aceptados durante toda su vida** de forma independiente. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; no código del proyecto, motor, tests, render, Actions, merge `main` o publicación.
