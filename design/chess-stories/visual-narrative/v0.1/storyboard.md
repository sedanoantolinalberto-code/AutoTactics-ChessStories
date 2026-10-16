# Storyboard descriptivo y trazabilidad — T01–T12

Propuesta no renderizada. Fuentes C/E/O/R/B y sus commits/blobs: [README](README.md). Planos A/B/C: [dirección visual](visual-language.md).
Los submomentos de una fila son instrucciones de montaje, no nuevos eventos, estados o jugadas. Sin duración, fps ni timing medido. No se entrega guion de voz.

## Matriz de continuidad

En cada fila n, las fuentes son E#/timeline/n, O#/overlays/n y R#/scene_bindings/n. Los nombres de estado son referencias a E#/states por ID; no FEN reinterpretados. R utiliza scene_bindings/ID y scope LOCAL_REGISTRY del documento CER-EP01-v0.1.1-CANDIDATE.

| Evento / índice | Tipo | Estado semántico de entrada → salida | Contexto | Movimiento único del registry | Tablero permitido en pantalla |
|---|---|---|---|---|---|
| T01 / 0 | SET_POSITION | null → V-P1 | null → MAIN | Ninguno | V-P1 |
| T02 / 1 | REAL_MOVE | V-P1 → V-EV1 | MAIN | MOVE-MAIN-34 | Antes/después declarados y representación del único desplazamiento |
| T03 / 2 | REAL_MOVE | V-EV1 → V-REAL | MAIN | MOVE-MAIN-35 | Antes/después declarados y captura |
| T04 / 3 | REWIND | V-REAL → V-P1 | MAIN | Ninguno | V-REAL, ocultación total, V-P1 |
| T05 / 4 | ENTER_HYPOTHETICAL | V-P1 → V-P1 | MAIN → ALT_QD8 | Ninguno | V-P1 sin cambio de ocupación |
| T06 / 5 | HYPOTHETICAL_MOVE | V-P1 → V-HYP | ALT_QD8 | MOVE-ALT-QD8-34 | Alternativa siempre señalizada |
| T07 / 6 | RETURN_TO_REAL | V-HYP → V-P1 | ALT_QD8 → MAIN | Ninguno | V-HYP, ocultación total, V-P1 |
| T08 / 7 | REAL_MOVE | V-P1 → V-EV1 | MAIN | MOVE-MAIN-34, mismo T02 | Repetición editorial declarada |
| T09 / 8 | REAL_MOVE | V-EV1 → V-REAL | MAIN | MOVE-MAIN-35, mismo T03 | Misma captura, no una segunda dama |
| T10 / 9 | ELLIPSIS | V-REAL → V-PRE-EV2 | MAIN | Ninguno; omite 36–49 | V-REAL y después cartela opaca; nunca destino técnico |
| T11 / 10 | REAL_MOVE | V-PRE-EV2 → V-EV2 | MAIN | MOVE-MAIN-50 | Solo V-EV2, sin animación del trayecto |
| T12 / 11 | SEQUENCE_END | V-EV2 → V-EV2 | MAIN | Ninguno | V-EV2 sin mutación |

Seis estados fuente: V-P1 (ply33), V-EV1 (34), V-REAL (35), V-HYP (34 alternativo), V-PRE-EV2 (49 técnico), V-EV2 (50). Solo cinco son VISUAL. No existe una sexta vista pública de tablero ni una secuencia continua reconstruida 36–49.

## Paneles descriptivos

### T01 — Entrar en una posición, no en una recreación histórica

Imagen: el tablero completo ya en V-P1 emerge por aumento suave de luz sobre fondo grafito; no se montan piezas una a una. Plano B contenido pasa a A antes de la primera jugada. La animación modifica encuadre/luz, nunca ocupación.
Rótulo O y disclosure E: **PARTIDA REAL**.
Texto propuesto de apertura: «Byrne–Fischer · Nueva York, 1956»; contexto: «Representación de la secuencia declarada en las fuentes del caso».
Lectura pretendida: se observa una posición después de 17.Kf1, no el inicio de la partida. El título se retira para dar espacio; el rótulo factual permanece. Ninguna imagen de jugadores, sala o documento histórico.

### T02 — Un desplazamiento concreto

Desde A fijo, contorno discreto en g4 y e6. El alfil negro se representa desplazándose g4→e6; las demás piezas permanecen según los estados declarados. Luz de atención acompaña sin señalar ataques adicionales. Al asentarse en V-EV1, pausa de lectura del tablero completo; no cambio de cámara durante el movimiento.
Rótulo y disclosure: **PARTIDA REAL**. SAN: **17...Be6**.
No se califica de sacrificio intencional, mejor jugada o trampa. La pregunta dramática se deja a la imagen de la siguiente captura.

### T03 — La dama sale del tablero

A fijo, atención c5/b6. El alfil blanco c5→b6 captura únicamente la dama negra de b6. La dama desaparece al representar la captura; no vuela ni cae sobre otras casillas. V-REAL queda estable y puede pasar a un B leve, sin pérdida de visión del conjunto.
Rótulo y disclosure: **PARTIDA REAL**. SAN: **18.Bxb6**. Texto propuesto: «Captura de dama negra».
La pausa permite entender lo ocurrido sin sugerir victoria, mate o final. No marcador de resultado ni reacción ficticia de Fischer.

### T04 — Volver al instante anterior

Mantener V-REAL y activar primero el aviso. Una banda fuera del tablero se retrae hacia la izquierda; cortinilla opaca cubre el tablero completo y revela V-P1 en A. No se animan alfiles hacia atrás ni reaparece una dama mediante una jugada inversa. La reaparición pertenece al restablecimiento editorial de la posición.
Rótulo: **REBOBINADO · PARTIDA REAL**.
Disclosure separado: **REBOBINADO A 17.Kf1**.
El ritmo cambia de avance a revisión. Sin estados intermedios nuevos ni SAN inverso.

### T05 — Abrir una posibilidad no jugada

V-P1 permanece inmóvil en A. Aparece **HIPOTÉTICA · NO JUGADA** antes de cualquier movimiento alternativo; después se cambia marco continuo por discontinuo y acento cobre por cian. No cambiar el color de las piezas.
Disclosure separado: **ALTERNATIVA NO JUGADA**.
La posición sigue perteneciendo a MAIN como ancla; el contexto activo pasa a ALT_QD8. Texto opcional de enlace editorial: «Una alternativa para comparar». No «lo que pensó» ni «lo que habría ganado».

### T06 — La alternativa queda limitada a una jugada

En A fijo se representa dama negra b6→d8 hasta V-HYP; no hay captura ni continuación inventada. Contornos de origen y destino, sin ramas adicionales.
Rótulo persistente: **HIPOTÉTICA · NO JUGADA**.
Disclosure: **VARIANTE HIPOTÉTICA — NO JUGADA**.
SAN: **17...Qd8**.
El aviso permanece durante entrada, movimiento, pausa y salida. No afirmar que la variante salva la partida, es legalmente probada o conduce a un resultado. La clasificación hipotética no autoriza esas afirmaciones.

### T07 — Regreso exacto, sin filtración de la alternativa

Orden obligatorio propuesto:
1. V-HYP aún visible con HIPOTÉTICA · NO JUGADA; introducir el rótulo de regreso en banda distinta.
2. Cubrir completamente tablero y cualquier reflejo; mantener aviso hipotético.
3. Restaurar el estado completo V-P1 y contexto MAIN bajo cobertura.
4. Revelar V-P1 en A, sin mezcla ni restos de V-HYP; conservar todavía el aviso hasta que la restauración sea efectiva.
5. Solo entonces retirar el aviso hipotético y mantener el rótulo de regreso. T08 no empieza antes de este punto.

Rótulo O: **REGRESO A LA PARTIDA REAL**.
Disclosure E: **VOLVEMOS A LA PARTIDA REAL: 17.Kf1**.
El plano recupera exactamente la orientación y caja de T01/T05. La igualdad visual es necesaria pero no suficiente: rama y estado semántico requieren controles futuros. No se declara realizada esa comprobación.

### T08 — Releer el movimiento real

V-P1→V-EV1 con el mismo alfil negro g4→e6, A fijo. Repetir el tratamiento de T02 para favorecer reconocimiento; simplificar adornos y centrar atención en e6.
Rótulo/disclosure: **PARTIDA REAL**. SAN: **17...Be6**.
Texto editorial complementario propuesto: «Repetición de la secuencia». No añadir ply histórico ni nueva evidencia: MOVE-MAIN-34 es el mismo objeto.

### T09 — Releer la captura

Repetir T03 desde V-EV1 hasta V-REAL; misma dama negra capturada en b6 y mismo alfil blanco c5→b6. Mantener A y sostener posición antes del salto temporal.
Rótulo/disclosure: **PARTIDA REAL**. SAN: **18.Bxb6**.
Texto complementario: «Repetición de la secuencia · captura de dama negra». Puede dividirse en dos líneas; no duplicar pieza o contador histórico.
El acento prepara una pausa de montaje, sin deducir consecuencias tácticas que no se han demostrado.

### T10 — Mostrar la ausencia, no rellenarla

Con V-REAL estable, mostrar primero **SE OMITEN JUGADAS REALES** y después una cartela opaca que sustituye el tablero. Sobre la cartela: **14 medias jugadas omitidas · 36–49**. No enumerar SAN, hacer pasar piezas a gran velocidad, interpolar posiciones o usar un reloj para inventar tiempo transcurrido.
Disclosure exacto: **SALTO TEMPORAL: SE OMITEN JUGADAS DE LA PARTIDA REAL**.
Puede distribuirse en líneas, sin abreviar su significado ni sustituirlo por «más tarde» solamente. La cartela permanece hasta el corte a T11. El destino interno es V-PRE-EV2; no se presenta en pantalla ni se renombra como estado visual. Las catorce medias jugadas no incluyen ply50.

### T11 — Una nueva posición y una captura identificada

Corte desde cartela opaca a A con **V-EV2 ya establecido**. Es la opción ALT-A de B como propuesta de dirección. No hay animación c3→d1, tablero previo ni crossfade desde V-REAL. Un contorno estático realza d1 y el caballo negro presente en el estado posterior.
Rótulo: **PARTIDA REAL**.
Disclosure: **PARTIDA REAL — LA PARTIDA CONTINÚA**.
SAN: **25...Nxd1**. Texto propuesto fuera del tablero: «Captura de torre blanca en d1 · posición posterior».
No dibujar torre fantasma, trayectoria o before/after que exponga V-PRE-EV2. La jugada se conserva semánticamente en E y R; se representa por su resultado declarado y texto, no se cambia a evento de inicialización ni se afirma haber animado su legalidad.

### T12 — Cerrar el fragmento, dejar abierta la partida

Mantener V-EV2. Pasar de A a un B leve o alejarse con todas las casillas visibles; la luz del entorno puede atenuarse, conservando piezas y texto. La imagen no contiene rey derribado, mate, marcador 0–1, apretón de manos o sala vacía.
Rótulo: **CIERRE EDITORIAL · LA PARTIDA CONTINÚA**.
Disclosure separado: **CIERRE EDITORIAL: NO ES EL FINAL DE LA PARTIDA**.
El último texto legible conserva «LA PARTIDA CONTINÚA». No incorporar 41...Rc2# ni un final reconstruido: el conflicto histórico sigue abierto. El fundido termina la pieza audiovisual propuesta, no la partida.

## Trazabilidad de afirmaciones

Claims de R preservados:
- T02/T03/T08/T09: CLAIM-REAL-MOVES.
- T05/T06: CLAIM-HYPOTHETICAL-QD8.
- T10: CLAIM-EDITORIAL-ELLIPSIS.
- T11: CLAIM-REAL-MOVES y CLAIM-CONTINUATION.
- T12: CLAIM-CONTINUATION y CLAIM-EDITORIAL-END.
- T01/T04/T07: sin claim nuevo; actos editoriales.

EVID-LEDGER-R2, EVID-R2-RESULTS y EVID-SUPPLIED-CASE-CONTEXT se consultan mediante E#/evidence según cada evento; su presencia no autentica originales. Los nombres de cámara, colores y textos marcados como propuestos son decisiones autorales de este documento, no afirmaciones extraídas de evidencia histórica. No se alteran claims, assets, FEN, disclosures, overlays o condiciones de admisibilidad.
