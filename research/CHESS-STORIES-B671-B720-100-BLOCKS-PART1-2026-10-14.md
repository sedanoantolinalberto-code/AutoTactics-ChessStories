# Chess Stories — Investigación B671–B720 (1/2)

**Fecha:** 2026-10-14. **Continuidad:** B1–B670. Cada bloque es observación documental o hipótesis explícita con futura comprobación falsable. P0 = requisito/gate relevante; P1 = preparación condicional. **No se han ejecutado test, código del proyecto, oráculo, render, media o estudios humanos.** Fuentes identificadas al final; los documentos del proyecto (`G`) prueban únicamente su contenido declarado.

## BI — Identidad de observaciones históricas y localizadores persistentes

### B671 — Identificador de página distinto del identificador de artículo

**Resultado documental o inferencia:** El testimonio impreso contiene artículo, doble página y celdas: un solo ID de artículo no permite localizar una lectura dudosa sin ambigüedad.

**Comprobación falsable pendiente:** Futura cadena `witness_id → issue_id → printed_page → region → raw_token` con campos UNKNOWN explícitos.

**Prioridad:** P0. **Fuentes:** `G`, `WA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B672 — Region sin reproducción de imagen

**Resultado documental o inferencia:** W3C Web Annotation permite referenciar regiones de fuente; almacenar selector no autoriza distribuir la imagen de la revista de 1956.

**Comprobación falsable pendiente:** Ficha de localizador sin material gráfico protegido; acceso real del objeto y licencia siguen independientes.

**Prioridad:** P0. **Fuentes:** `WA`, `WAS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B673 — Texto literal y texto de contexto como campos diferentes

**Resultado documental o inferencia:** TextQuoteSelector distingue exact/prefix/suffix; el contexto puede desambiguar un token sin formar parte de la jugada.

**Comprobación falsable pendiente:** Registrar token y margen contiguo por separado tras observación genuina; no insertar modern SAN como prefix.

**Prioridad:** P0. **Fuentes:** `WA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B674 — Selector espacial y reescalado de la página

**Resultado documental o inferencia:** Un selector de píxeles calculado sobre un recorte no tiene validez automática sobre escaneo de distinto tamaño.

**Comprobación falsable pendiente:** Asociar coordenadas a rendición concreta con anchura, altura y checksum cualificado si llega a existir.

**Prioridad:** P1. **Fuentes:** `WAS`, `WA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B675 — Versionar observación sin sobrescribir raw freeze

**Resultado documental o inferencia:** La actividad de adjudicar dos lectores es distinta de sus dos registros crudos y no debe sustituirlos.

**Comprobación falsable pendiente:** Agregar decisión adjudicada como objeto derivado, conservando objetos y agentes originales.

**Prioridad:** P0. **Fuentes:** `PROV`, `PREMIS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B676 — Acuerdo entre lectores y autenticidad externa separados

**Resultado documental o inferencia:** Dos observaciones convergentes sobre el mismo ejemplar acreditan lectura interna, no procedencia del manuscrito original Byrne.

**Comprobación falsable pendiente:** Dos indicadores independientes `within_witness_agreement` y `original_scoresheet_authenticated`.

**Prioridad:** P0. **Fuentes:** `G`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B677 — Fuente inaccesible y fuente negativa diferenciadas

**Resultado documental o inferencia:** Una página PDF no descargada no demuestra que el testimonio omita una jugada; refleja falta de observación.

**Comprobación falsable pendiente:** Establecer `ACCESS_UNAVAILABLE` distinto de `OBSERVED_TOKEN_ABSENT`, sin rellenar 82 filas.

**Prioridad:** P0. **Fuentes:** `G`, `PREMIS`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B678 — Anotación reubicada tras cambio de archivo

**Resultado documental o inferencia:** TextPositionSelector es frágil ante reordenaciones; cambios de PDF pueden apuntar a otra jugada.

**Comprobación falsable pendiente:** Usar identidad de rendición/versionado y validación humana del selector antes de aceptar anotación migrada.

**Prioridad:** P1. **Fuentes:** `WA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B679 — Registro de cadena de custodia limitado por hechos

**Resultado documental o inferencia:** PREMIS permite eventos y agentes; inventar procedencias entre 1956 y el museo falsearía la cadena.

**Comprobación falsable pendiente:** Registrar únicamente custodias documentadas; marcar lagunas sin probabilidades ficticias.

**Prioridad:** P0. **Fuentes:** `PREMIS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B680 — Cierre histórico no promovible por lectura del final impreso

**Resultado documental o inferencia:** La cadena de anotaciones de 41...Rc2# en revista no prueba que el original jugador tuviera esa anotación.

**Comprobación falsable pendiente:** Guardar `printed_terminal` y `player_scoresheet_terminal` como entidades diferentes hasta inspección directa.

**Prioridad:** P0. **Fuentes:** `G`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BJ — Invariantes formales de posición ajedrecística y mapeo editorial

### B681 — Los seis campos FEN cumplen funciones distintas

**Resultado documental o inferencia:** FEN incluye ocupación, bando, enroques, en passant, reloj de medias jugadas y número de jugada; representar solo piezas pierde información.

**Comprobación falsable pendiente:** Contrato futuro compara campos por identidad lógica; ningún estado se califica legal sin oráculo.

**Prioridad:** P0. **Fuentes:** `FEN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B682 — Reglas Chess960 excluidas explícitamente del piloto clásico

**Resultado documental o inferencia:** Shredder-FEN y X-FEN amplían enroques para Chess960; no tienen por qué aceptarse en un fixture de ajedrez clásico 1956.

**Comprobación falsable pendiente:** Especificar `rules_variant=STANDARD` y rechazar notación de derechos Chess960 no admitida por caso.

**Prioridad:** P1. **Fuentes:** `FEN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B683 — Historia de repetición no derivable del FEN de llegada

**Resultado documental o inferencia:** La ocupación idéntica no informa por sí sola cuántas veces se alcanzó posición relevante en la partida.

**Comprobación falsable pendiente:** No generar narración de tablas por repetición a partir de un solo snapshot.

**Prioridad:** P0. **Fuentes:** `FEN`, `FIDE`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B684 — Turno siguiente versus evento que produjo el estado

**Resultado documental o inferencia:** Un FEN con bando negro en ply49 es un estado previo a 25...; no documenta cómo el caballo llegó a c3.

**Comprobación falsable pendiente:** Separar `to_play` y `last_observed_move`, con historial obligatorio para la segunda propiedad.

**Prioridad:** P0. **Fuentes:** `FEN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B685 — Casilla capturada en passant no equivale a destino

**Resultado documental o inferencia:** El caso no necesita en passant en T11, pero abstraer captura como víctima en casilla destino crearía defectos en otros juegos.

**Comprobación falsable pendiente:** Mantener subtipo `capture_kind` y `captured_square`, sin generalizar regla desde Nxd1.

**Prioridad:** P1. **Fuentes:** `FIDE`, `FEN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B686 — Promoción altera clase de pieza después de una jugada

**Resultado documental o inferencia:** Un renderer que infiera pieza final por clase inicial falla en promoción; la semántica de transición necesita resultado explícito.

**Comprobación falsable pendiente:** Para futura generalización añadir prueba de contrato de promoción, sin ejecutarla ni cambiar EP01.

**Prioridad:** P1. **Fuentes:** `FIDE`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B687 — Reloj de medias jugadas del FEN no es ply editorial

**Resultado documental o inferencia:** El fifth FEN field cuenta medias jugadas desde último peón/captura, no la posición ordinal de T01–T12.

**Comprobación falsable pendiente:** Dos campos distintos, `halfmove_clock` y `historical_ply`, con error para confusión.

**Prioridad:** P0. **Fuentes:** `FEN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B688 — Número de jugada completa no sustituye sexo del turno

**Resultado documental o inferencia:** `25` y lado negro especifican el contexto de 25..., pero no permiten concluir mate en última posición visual.

**Comprobación falsable pendiente:** Evitar marcador terminal inferido desde fullmove_number o posición de cierre.

**Prioridad:** P0. **Fuentes:** `FEN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B689 — Rewind visual no invierte historial legal

**Resultado documental o inferencia:** T04 puede representar retroceso de presentación sin que exista movimiento de ajedrez inverso en PGN.

**Comprobación falsable pendiente:** Un export de partida excluye `REWIND` y `HOLD`, que pertenecen al timeline editorial.

**Prioridad:** P0. **Fuentes:** `PGN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B690 — Elipsis y transición legal requieren tipos distintos

**Resultado documental o inferencia:** T10 no ejecuta una jugada sino que omite plies reales y cambia referencia técnica; tratarlo como legal move falsifica cronología.

**Comprobación falsable pendiente:** Definir `OMISSION_JUMP` incompatiblemente con `MOVE` y fallar antes de render si se solapan.

**Prioridad:** P0. **Fuentes:** `G`, `FIDE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BK — Lógica temporal de rótulos por intervalos de fotograma

### B691 — Ventana de hipótesis semántica y ventana de rótulo

**Resultado documental o inferencia:** Mostrar Qd8 en frame F sin aviso en F no se subsana con aviso en F+1; las propiedades requieren simultaneidad.

**Comprobación falsable pendiente:** Predicado futuro `visible_hypothetical_frame ⇒ visible_not_played_label`, para cada frame real.

**Prioridad:** P0. **Fuentes:** `G`, `FRAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B692 — Intervalos de evento semiabiertos

**Resultado documental o inferencia:** Media Fragments define t=[inicio,fin); usar ambos extremos cerrados duplica instante frontera entre T06 y T07.

**Comprobación falsable pendiente:** Temporal manifest con intervalos `[start,end)` sin trasladar duraciones a frames no medidos.

**Prioridad:** P0. **Fuentes:** `FRAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B693 — Orden de restaurar y liberar advertencia

**Resultado documental o inferencia:** Un fade con etiqueta REAL antes de restaurar V-P1 crea un frame imposible editorialmente aunque FEN final sea correcto.

**Comprobación falsable pendiente:** Ordenar por evento de commit: primero MAIN restaurado, después el aviso alternativo se retira.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B694 — T10 exige advertencia durante elipsis

**Resultado documental o inferencia:** Si rótulo '14 plies omitidos' desaparece a mitad de hold, la audiencia puede atribuir movimiento a la imagen congelada.

**Comprobación falsable pendiente:** Futura propiedad cobertura del intervalo de elipsis por marcador no engañoso.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B695 — ALT-A no necesita tween pero necesita orden de información

**Resultado documental o inferencia:** Pasar a V-EV2 sin establecer que hubo salto puede parecer captura directamente desde V-REAL.

**Comprobación falsable pendiente:** Precondición para hard cut: marcador previo de omisión y rótulo post-corte que identifique situación tras las jugadas.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B696 — Repetición de evento en dos planos no crea dos hechos

**Resultado documental o inferencia:** T02/T08 presentan la misma acción histórica en momentos editoriales distintos; un contador de jugadas no puede sumarlas.

**Comprobación falsable pendiente:** Registro `historical_move_key` único, múltiples `display_event_id` permitidos sin duplicar ply.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B697 — Persistencia del cierre editorial hasta fin de escena

**Resultado documental o inferencia:** Desaparecer 'LA PARTIDA CONTINÚA' y dejar tablero solo al final podría sugerir final de partida.

**Comprobación falsable pendiente:** Futura comprobación de últimos frames de T12 para ausencia de simbolismo terminal.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B698 — Junta de montaje no hereda flechas obsoletas

**Resultado documental o inferencia:** Un overlay de Bxb6 persistente durante nueva posición viola semántica espacial sin modificar JSON de FEN.

**Comprobación falsable pendiente:** Listar capas por evento y exigir limpieza declarativa en cada frontera de escena.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B699 — La fuente de audio no determina exclusividad factual

**Resultado documental o inferencia:** Un audio que dice 'imaginemos' no corrige la ausencia del aviso en espectadores con audio apagado.

**Comprobación falsable pendiente:** Propiedad factual solo visual, y revisión de accesibilidad audible separada.

**Prioridad:** P0. **Fuentes:** `G`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B700 — Anotación temporal no acredita frame real

**Resultado documental o inferencia:** `t=10,20` es una referencia de intervalo; no prueba que MP4 exista ni que su PTS coincida.

**Comprobación falsable pendiente:** No registrar URI de media como evidencia de render sin archivo real, identidad y observación humana.

**Prioridad:** P0. **Fuentes:** `FRAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BL — Evolución de contratos de escena y localizadores JSON

### B701 — Dialecto JSON Schema fijado por contrato

**Resultado documental o inferencia:** El significado de keywords depende del `$schema`; un validador que infiere otro dialecto puede aceptar/rechazar equivocadamente.

**Comprobación falsable pendiente:** Conservar `$schema` explícito y revisión de implementación antes de cualquier ejecución.

**Prioridad:** P0. **Fuentes:** `DIALECT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B702 — Campos adicionales no evaluados con composición

**Resultado documental o inferencia:** `unevaluatedProperties` maneja composición `allOf` con semántica diferente de `additionalProperties` local; mal aplicarlo puede dejar ruta abierta.

**Comprobación falsable pendiente:** Revisión manual de schema EP01 y casos negativos propuestos, sin afirmar prueba en runtime.

**Prioridad:** P0. **Fuentes:** `JSCHEMA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B703 — Referencia dinámica innecesaria en caso cerrado

**Resultado documental o inferencia:** `$dynamicRef` es útil para esquemas recursivos/extensibles; incluirlo en episodio cerrado agrega complejidad de resolución.

**Comprobación falsable pendiente:** No introducir referencias dinámicas sin un escenario de extensión y validador formalmente fijados.

**Prioridad:** P1. **Fuentes:** `DYNAMIC`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B704 — Punteros JSON con caracteres especiales

**Resultado documental o inferencia:** RFC 6901 usa `~0` y `~1` para tildes y barras; formar punteros por concatenación no escapada identifica el campo equivocado.

**Comprobación falsable pendiente:** Contrato de path para diagnósticos utiliza escaping normativo cuando existan IDs con `/` o `~`.

**Prioridad:** P1. **Fuentes:** `RFC6901`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B705 — Array ordenado y objeto no ordenado

**Resultado documental o inferencia:** Un hash de texto JSON puede cambiar con orden de claves; el orden T01–T12 sí es semántico en array.

**Comprobación falsable pendiente:** Distinguir igualdad de objetos, secuencia de array y hash de archivo, sin deducir equivalencia de uno solo.

**Prioridad:** P0. **Fuentes:** `RFC8785`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B706 — Migración mayor vs copia silenciosa

**Resultado documental o inferencia:** Cambiar significado de `visibility` o `kind` requiere versión incompatible y revalidar PR dependientes, no solo editar misma v0.2.

**Comprobación falsable pendiente:** Definir bump de contrato por impacto semántico y prohibir re-pinnear automáticamente.

**Prioridad:** P0. **Fuentes:** `G`, `DIALECT`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B707 — Nulos y omisiones no equivalentes

**Resultado documental o inferencia:** Un campo `move:null` puede ser distinto de ausencia de `move` por contrato; la estrategia de pin actual ya intenta distinguirlos.

**Comprobación falsable pendiente:** Revisión de reglas de presencia requerida por tipo de evento antes de aumentar mutaciones.

**Prioridad:** P0. **Fuentes:** `G`, `JSCHEMA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B708 — Referencia de source case distinta de su versión

**Resultado documental o inferencia:** Un enlace a branch HEAD puede evolucionar; el caso congelado debe identificar objeto Git exacto al revisar.

**Comprobación falsable pendiente:** Registrar snapshot de source blob y política explícita de invalidez tras modificarlo.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B709 — Diagnóstico legible sin exponer contenido restringido

**Resultado documental o inferencia:** Un fallo del parser podría devolver transcripción completa con copyright; la evidencia de rechazo necesita mínimo de ubicación.

**Comprobación falsable pendiente:** Error codes/path y contadores, no volcar texto original protegido al issue público.

**Prioridad:** P0. **Fuentes:** `G`, `RFC6901`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B710 — Cuándo dejar de ampliar el validador

**Resultado documental o inferencia:** 77 negativos no corridos no se vuelven fiables al llegar a 100; la prioridad debe ser capacidad de ejecutar bajo política formal.

**Comprobación falsable pendiente:** Plan de cobertura vincula mutación propuesta a requisito y estado `NOT_RUN`, sin elevar PASS por densidad.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BM — Descripción accesible de un tablero y una partida como información

### B711 — El tablero es un diagrama complejo, no un icono decorativo

**Resultado documental o inferencia:** W3C WAI exige alternativa breve y descripción extensa para imágenes cuyo significado excede una frase.

**Comprobación falsable pendiente:** Futura página EP01: resumen visible y descripción de posición/relaciones tácticas para cada estado aprobado.

**Prioridad:** P0. **Fuentes:** `W3CA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B712 — Lectura de FEN sin formato comprensible no es alternativa

**Resultado documental o inferencia:** Dictar `r1b...` no equivale a explicar qué alfil ataca a qué pieza; requiere traducción pedagógica revisada.

**Comprobación falsable pendiente:** Evaluar comprensión del lector de pantalla con descripción validada por conocedor del tablero.

**Prioridad:** P0. **Fuentes:** `W3CA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B713 — Casilla de captura después de Nxd1 sin sprite fantasma

**Resultado documental o inferencia:** ALT-A enseña caballo en d1; una alternativa que diga 'torre blanca en d1' sería temporalmente falsa.

**Comprobación falsable pendiente:** Describir primero resultado: caballo negro capturó torre blanca y ocupa d1, con antecedente editorial claro.

**Prioridad:** P0. **Fuentes:** `G`, `W3CA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B714 — Orientación de filas para lector sin visión

**Resultado documental o inferencia:** Enumerar filas 8→1 con blancas abajo sin declarar orientación obliga a inferirla.

**Comprobación falsable pendiente:** Declarar orientación explícita y ofrecer lista estructurada por bando y pieza, no únicamente tabla de 64 símbolos.

**Prioridad:** P1. **Fuentes:** `W3CA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B715 — Descripción del salto temporal en texto accesible

**Resultado documental o inferencia:** La secuencia ALT-A necesita informar que entre V-REAL y V-EV2 se omitieron 14 plies reales.

**Comprobación falsable pendiente:** Agregar párrafo temporal a transcript y verificar que el resultado no parezca una jugada directa.

**Prioridad:** P0. **Fuentes:** `G`, `W3CA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B716 — Una descripción de hipótesis no debe sonar a hecho

**Resultado documental o inferencia:** Para T06 decir 'la dama fue a d8' sin condicional en audiodescripción falsea lo no jugado.

**Comprobación falsable pendiente:** Anteponer 'en la línea hipotética no realizada' en toda salida textual/audio equivalente.

**Prioridad:** P0. **Fuentes:** `G`, `W3CA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B717 — Resumen y detalle con destino claro

**Resultado documental o inferencia:** WAI propone identificar imagen con descripción corta y proporcionar texto completo enlazado; una nota escondida sin enlace es insuficiente.

**Comprobación falsable pendiente:** Diseñar título 'Tablero T11' y vínculo a 'Descripción completa del estado tras la captura'.

**Prioridad:** P1. **Fuentes:** `W3CA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B718 — Texto en imagen debe mantenerse como texto alternativo

**Resultado documental o inferencia:** Una portada con HIPOTÉTICA incrustado en PNG necesita equivalente que conserve esas palabras, no solo 'tablero'.

**Comprobación falsable pendiente:** Revisión de miniatura/thumbnail con descripción equivalente cuando plataforma lo permita.

**Prioridad:** P0. **Fuentes:** `W3CI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B719 — Diagramas de varias fases necesitan relato de grupo

**Resultado documental o inferencia:** Describir seis tableros aislados puede perder causalidad entre ellos; WAI contempla alternativa del conjunto.

**Comprobación falsable pendiente:** Una descripción global de T01–T12 conserva real/hyp/ellipsis y cierre sin atribuir todas las posiciones a hechos.

**Prioridad:** P1. **Fuentes:** `W3CI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B720 — Accesibilidad cualificada por formato, no heredada

**Resultado documental o inferencia:** Que eBook incluya descripción larga no demuestra que vídeo cumpla audio description ni que el Short sea legible.

**Comprobación falsable pendiente:** Gate por medio y evaluación independiente de usuarios; ninguna carta de intención permite AA.

**Prioridad:** P0. **Fuentes:** `WCAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Bibliografía y naturaleza de la evidencia

- `G`: Repositorio privado Chess Stories: PR #1 case, #3 testigos, #4 ALT-A, #7 activos, #11 avisos, #12 router e issue #8. Evidencia de declaraciones, no hechos externos autenticados.
- `WA`: https://www.w3.org/TR/annotation-model/
- `WAS`: https://www.w3.org/TR/selectors-states/
- `PROV`: https://www.w3.org/TR/prov-o/
- `PREMIS`: https://www.loc.gov/standards/premis/v3/
- `FEN`: https://chessprogramming.org/Forsyth-Edwards_Notation
- `FIDE`: https://handbook.fide.com/chapter/e012023
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `JSCHEMA`: https://json-schema.org/understanding-json-schema/reference/object
- `DIALECT`: https://json-schema.org/understanding-json-schema/reference/schema
- `DYNAMIC`: https://json-schema.org/draft/2020-12/draft-bhutton-json-schema-01
- `RFC6901`: https://www.rfc-editor.org/rfc/rfc6901.html
- `RFC8785`: https://www.rfc-editor.org/rfc/rfc8785.html
- `FRAG`: https://www.w3.org/TR/media-frags/
- `W3CA`: https://www.w3.org/WAI/tutorials/images/complex/
- `W3CI`: https://www.w3.org/WAI/tutorials/images/
- `WCAG`: https://www.w3.org/TR/WCAG22/

## Límites inalterados

E5B4D NO-GO bajo modelo M. Política B exige **todos** los procesos relevantes terminados y terminación confirmada **estrictamente antes de 120 s**; límites independientes stdout y stderr de **1.048.576 bytes emitidos y aceptados durante toda la vida** de cada canal. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; oráculo/ejecución/render/Actions NO RUN; main no fusionada ni publicación autorizada.
