# Dirección visual — «La misma posición, dos caminos»

Propuesta autoral para EP01. Base, fuentes y gates: [README](README.md). Todas las medidas siguientes son objetivos de diseño pendientes de comprobación; no presets implementados, frames ni resultados medidos.

## Identidad

Tablero como escenario abstracto suspendido sobre fondo grafito, sin sala de torneo reconstruida, retratos, manos, relojes o objetos supuestamente de 1956. La fecha y los nombres se comunican en texto. La materialidad sugerida —cerámica clara y carbón mate— separa volúmenes y evita reflejos que borren piezas. Las siluetas futuras deberán distinguir alfil, dama, caballo, torre, rey y peón a pequeño tamaño; no se selecciona ni importa un juego existente.

Paleta propuesta: fondo #111820, casillas claras #D9D4C8, oscuras #52616A; piezas claras marfil con contorno oscuro y negras carbón con contorno claro. Acento MAIN cobre #D7A76C; alternativa cian #7DD3E8. Estos valores no certifican contraste. Textos de factualidad siempre sobre placa opaca independiente del fondo; el significado nunca depende de cobre/cian.

No destrucción espectacular de la dama, coronas, explosiones ni destellos de victoria. La captura se representa retirando exclusivamente la pieza declarada del tablero; un pie textual identifica lo ocurrido. No se inventa una vitrina acumulada de capturas de toda la partida.

## Tres encuadres, una orientación

- **Plano A — lectura:** cenital, proyección sin perspectiva apreciable, tablero completo y coordenadas. Blancas abajo, a1 abajo a la izquierda, h8 arriba a la derecha. Es la referencia de orientación en todo el episodio; nunca reflejar ni rotar 180 grados.
- **Plano B — relieve:** aproximación contenida con inclinación máxima propuesta de 12° respecto al cenital, solo durante una posición estable y manteniendo las 64 casillas. Aporta volumen en T01/T03/T12. Si oculta una pieza, reduce tamaño aparente o compromete etiquetas, se descarta a favor de A.
- **Plano C — atención:** acercamiento por escala al tablero completo, con cambio de luz en las casillas pertinentes. No recorta una posición ni crea una segunda vista desincronizada. Se usa antes/después de una jugada, no mientras una cámara móvil dificulta seguirla.

No paneos cruzando el eje, órbitas, gran angular, desenfoque del tablero o profundidad de campo que oculte información. Fondo y margen pueden tener profundidad; piezas y coordenadas permanecen nítidas. La sensación de cine procede del contraste entre planos amplios, pausas y aproximaciones contenidas. En toda acción de pieza la cámara vuelve a A y queda fija. Al terminar, sostener el estado completo antes de variar el encuadre.

## Luz y atención

Luz principal amplia desde arriba a la izquierda y relleno suficiente para que piezas negras no desaparezcan. Sombras cortas dentro de la propia casilla; no aparentan otra pieza. Brillo especular atenuado. Realce de origen/destino mediante contorno de casilla y placa textual; no colorear toda una pieza hasta confundir su bando.

La atención en T02 se dirige g4→e6; T03 c5→b6; T06 b6→d8. Son los desplazamientos declarados, no flechas de ataque ni análisis de variantes. No añadir rayos hacia reyes o piezas no citadas, evaluación numérica ni símbolos !!, ? o «única». F03 y los criterios de admisibilidad siguen vigentes.

En T11 solo se realza d1 en V-EV2. No se dibuja trayectoria c3→d1 sobre otro tablero ni una torre fantasma: el origen técnico no se expone. Una leyenda fuera del tablero explica «25...Nxd1 · captura de torre blanca».

## Gramática de contexto y transición

| Situación | Señal permanente y transición propuesta |
|---|---|
| MAIN | Rótulo PARTIDA REAL; marco continuo; acento cobre secundario |
| Rebobinado | REBOBINADO · PARTIDA REAL y disclosure exacto; banda gráfica que se desplaza hacia atrás fuera del tablero; cierre opaco y reapertura en V-P1 |
| Entrada alternativa | HIPOTÉTICA · NO JUGADA visible antes de cambiar una pieza; marco discontinuo y acento cian; V-P1 permanece idéntico |
| Alternativa activa | Aviso íntegro en cada imagen visible, incluso transición; no código basado solo en color o sonido |
| Regreso | Aviso hipotético permanece sobre cortinilla opaca; restaurar V-P1+MAIN; mostrar REGRESO A LA PARTIDA REAL y solo después retirar aviso hipotético |
| Elipsis | Cartela explícita de 14 medias jugadas; corte opaco, sin piezas corriendo ni secuencia intermedia |
| Cierre | Tablero V-EV2 estable y CIERRE EDITORIAL · LA PARTIDA CONTINÚA; fundido final sin transformación del estado |

T04 no reproduce movimientos inversos ni representa una partida distinta: el movimiento editorial está en la banda temporal y cortinilla. No mostrar SAN inverso ni mover piezas capturadas de vuelta mediante una jugada. T07 no usa disolución entre V-HYP y V-P1: una superposición formaría un tablero híbrido. La cortinilla debe cubrir completamente el tablero durante la sustitución.

Retorno exacto significa igualdad del estado declarado completo V-P1 y contexto MAIN, no solo colocar de nuevo la dama. La futura revisión deberá comprobar estado y rama por separado; una imagen no demuestra campos FEN no visibles.

## Formato vertical y lectura sin sonido

Lienzo de referencia propuesto 9:16, por ejemplo 1080×1920 para especificar proporciones, no para ejecutar exportación. Composición inicial:
- Banda superior: x 8–92%, y 8–21%; rótulo factual prioritario y título breve.
- Tablero completo: x 8–92%, y 25–72,25%; cuadrado con márgenes exteriores para coordenadas. El borde incluye coordenadas dentro de esta caja; nunca piezas fuera de sus casillas.
- Banda inferior: x 8–92%, y 75–89%; SAN/captura y disclosure cuando difiere del rótulo.
- Zona restante: respiración, sin datos indispensables. Estos márgenes no están certificados contra interfaces de ninguna plataforma.

Si la futura interfaz invade la zona útil, reducir y recolocar el conjunto sin recortar tablero ni avisos; reexaminar legibilidad. No desplazar texto bajo botones ni reducirlo hasta hacerlo ilegible.

Objetivo tipográfico inicial: rótulos equivalentes a 48 px o más en el lienzo de referencia; explicación 42 px o más; coordenadas 32 px o más. Elegir un peso claro y estable, sin texto contorneado sobre tablero. Una familia sans legible es intención; Noto Sans sigue candidato documental, binario/licencia sin seleccionar. No se declara fuente autorizada.

Rótulos largos pueden ocupar dos líneas sin cambiar palabras. Disclosures largos requieren líneas adicionales o una cartela dedicada, nunca truncado o scroll. La duración se ajustaría a lectura real futura, no se reduce el texto para cumplir una duración inventada. Los tiempos siguen TIMING_UNSPECIFIED/UNMEASURED; no se fijan 45/60 segundos, fps ni número de frames.

Prioridad en conflicto: aviso factual → tablero completo → SAN/captura → disclosure/contexto → ornamento. Retirar ornamento o separar momentos de lectura; no suprimir contenido obligatorio. En T10 la cartela sin tablero permite explicar «14 medias jugadas omitidas · 36–49», sin convertir plies en catorce turnos completos.

Comprensión futura a comprobar a tamaño de teléfono, sin zoom y con audio silenciado: qué se jugó, qué no, cuándo se vuelve, qué se omite y por qué el cierre no es final histórico. Prever revisión en escala de grises y con necesidades visuales diversas; no afirmar accesibilidad por paleta. Evitar flashes y aceleraciones bruscas; versión de movimiento reducido conservaría los mismos cortes y textos, pendiente de diseño autorizado.

## Activos y sonido

Propuesta silenciosa coherente con B; ningún sonido necesario para interpretar la secuencia. No se generan ni seleccionan música, voz, TTS o efectos. Un eventual corte sonoro requeriría su propio alcance y derechos; no se simulan ruidos históricos.

La geometría original futura, iluminación, tipografía, textos y medios finales necesitan procedencia y revisión por activo/uso. No reutilizar stills v4, siluetas no identificadas, fotografías o facsímiles. “Abstracto” y “propio” describen intención de diseño, no certificación de originalidad. R6 continúa PENDING; no se modifican roles del ledger por proponer ausencia de audio.
