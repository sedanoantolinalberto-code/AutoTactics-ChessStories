# Chess Stories — B1371–B1470 | Informe de hallazgo de archivo y decisiones

**Corte:** 14 octubre 2026. **Alcance:** exclusivamente el piloto de ajedrez EP01 Byrne–Fischer. **100 bloques documentales**, diez grupos FG–FP (10 cada uno), **93 P0 / 7 P1**. No se ha hecho ejecución de proyecto, prueba de motor, investigación con participantes ni publicación.

## Descubrimiento documental con evidencia de nueva clase

Se ha localizado el **archivo oficial abierto de US Chess**, con PDFs organizados por título y año:
- **Archivo e condiciones de uso:** https://new.uschess.org/chess-life-digital-archives — US Chess describe PDFs buscables y acceso público para **uso personal e investigación**, con permiso necesario para usos más allá del ámbito legal permitido.
- **Chess Life, 5 noviembre 1956, PDF oficial:** https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CL-ALL/1956/1956_11_1.pdf. El PDF tiene **8 páginas**. La **página índice PDF 1 (numeración cero), folio impreso 2** fue **inspeccionada visualmente**. Se observa una tabla con encabezado *GRUENFELD DEFENSE*, jugadores D. Byrne (blancas) y R. Fischer (negras), secuencia impresa en notación descriptiva hasta la jugada 41 y un marcador textual de mate en el desenlace de la tabla.
- **Chess Life, 20 noviembre 1956:** https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CL-ALL/1956/1956_11_2.pdf. Identidad del archivo y capa textual accesibles; el texto en PDF **p2, folio 3** incluye sección sobre premio especial a Fischer por la victoria contra Byrne y remite a las partidas publicadas el 5 noviembre. **No se obtuvo screenshot satisfactorio del folio 3, por lo que una lectura visual humana de sus detalles sigue pendiente.**
- **Chess Review diciembre 1956:** https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CR-ALL/CR1956/CR1956_12.pdf, enlace del índice oficial confirmado. La apertura web del PDF falló por límite de tamaño (~13.9 MB); **no** se inspeccionaron directamente las páginas 374–375 en esta tanda. Edward Winter las identifica y documenta error de portada p370: https://www.chesshistory.com/winter/extra/byrnefischer.html .

**Qué cambia:** la categoría de testigo de prensa del 5-XI puede ser **CONTEMPORARY_PRINTED_SCORE_PAGE_VISUALLY_OBSERVED**, antes no demostrada en nuestro trabajo. **Qué no cambia:** no existen dos lecturas A/B independientes de 82 plies, no se ha leído la planilla manuscrita original en el soporte físico, no sabemos si el mate impreso se llegó a jugar físicamente, ni hemos autenticado todavía las 14 medias jugadas omitidas por EP01.

## Otra contradicción histórica observable

La retrospectiva oficial US Chess de 2020, https://new.uschess.org/news/throwback-thursday-game-century-goes-viral-november-1956, llama al score una partida de la **séptima ronda**. Winter, basándose en Jack Spence y reproducciones de scoresheets, afirma **octava ronda, 17 octubre 1956**. El folio Chess Life 5-XI confirma la partida, pero el encabezado examinado no resuelve esta discrepancia. **Regla:** mantener `ROUND_CONFLICTED` en metadatos de narración hasta contrastar actas o testimonio competentes; no resolver por popularidad de una fuente.

## La planilla manuscrita y los derechos son objetos diferentes

ChessBase publica artículos con **fotografías atribuidas a la planilla con escritura de Fischer**, mientras una narración biográfica basada en Frank Brady distingue original y carbon copy conservada por el jugador: https://en.chessbase.com/post/game-of-the-century-a-full-summary%C2%A0 y https://en.chessbase.com/post/brady-bobby-fischer-s-game-of-the-century/395 . Estas imágenes ayudan a localizar material visual potencial, pero **no hemos inspeccionado ni autenticado el objeto físico** ni establecido la cadena de custodia actual. Tampoco está probada la licencia comercial de las imágenes.

US Chess advierte explícitamente en la página de archivo que los PDFs son para investigación y uso personal, con permisos adicionales según el uso. **No se han subido facsímiles ni páginas de prensa a GitHub**, solo referencias, resultados de inspección y criterios de contraste. Reutilizar fotografías, recortes, maquetación y otros materiales en YouTube/newsletter/eBook sigue dentro de R6 PENDING.

## Diez grupos de investigación

| IDs | Línea | Cambio documental |
|---|---|---|
| B1371–B1380 | FG — Archivo oficial | Acceso a rutas US Chess, condiciones jurídicas y cuatro estados de observación |
| B1381–B1390 | FH — 5 noviembre | **Score impreso visualmente observado** hasta mate publicado, no cierre físico autenticado |
| B1391–B1400 | FI — 20 noviembre | Noticia y comité del premio, capa textual inspeccionada, visión directa pendiente |
| B1401–B1410 | FJ — Diciembre/cronología | Chess Review enlace identificado y **ronda 7 vs 8 en disputa** |
| B1411–B1420 | FK — Scoresheets | Fotos y relatos de cadena de custodia de copia/original, sin objeto físico verificado |
| B1421–B1430 | FL — Notación descriptiva | Cotejo futuro de texto crudo contra SAN, sin OCR ciego ni oráculo |
| B1431–B1440 | FM — Matriz de verdad | Fuente prensa observada distinta de PGN R2, resultado y mecanismo de terminación |
| B1441–B1450 | FN — Guion fiel | Premio, cronología, distinción Qd8 no jugada, elipsis y cierre editorial |
| B1451–B1460 | FO — Derechos | Investigación legítima no equivale a reutilización comercial |
| B1461–B1470 | FP — Gates e inversión marginal | Fuente histórica mejora; ejecución, copyright e IVV siguen congelados |

## Cinco decisiones prioritarias tras esta tanda

1. **Lectura de prensa:** disponer de dos transcripciones independientes, hechas por lectores realmente no contaminados por SAN, del bloque de *Chess Life* del 5-XI; además, cotejar *Chess Review* pp374–375. Evitar producir una transcripción en modo «ciego» desde un modelo que conoce el PGN.
2. **Final histórico:** registrar separadamente lo que publicó la revista —incluido mate al final de la tabla— y la última jugada físicamente disputada, que sigue sin resolver. El dato `historical_end.result=UNKNOWN` del caso R2 no debe corregirse silenciosamente por una publicación distinta.
3. **Metadatos contradictorios:** resolver **séptima/octava ronda** con una fuente competente antes de fijar el texto definitivo. Distinguir fecha del juego (candidato 17-X) y las fechas de las revistas (5-XI, 20-XI, diciembre).
4. **Assets legales:** definir qué partes del episodio son gráficos propios, datos históricos o imágenes de archivos ajenos; permisos de cada activo y soporte antes de exportarlo comercialmente.
5. **Ejecución:** esperar mecanismo formalmente compatible con Política B bajo M; las investigaciones y enlaces no prueban legalidad ajedrecística del fixture, render, accesibilidad, seguridad visual ni IVV.

## Archivos de esta tanda

- `research/CHESS-STORIES-B1371-B1390-USCHESS-PRIMARY-ARCHIVE-2026-10-14.md`
- `research/CHESS-STORIES-B1391-B1410-NOV20-CHESS-REVIEW-TIMELINE-2026-10-14.md`
- `research/CHESS-STORIES-B1411-B1430-SCORESHEET-TRANSCRIPTION-2026-10-14.md`
- `research/CHESS-STORIES-B1431-B1450-HISTORY-TO-EDITORIAL-2026-10-14.md`
- `research/CHESS-STORIES-B1451-B1470-ARCHIVE-RIGHTS-NOGO-2026-10-14.md`
- `research/CHESS-STORIES-B1371-B1470-REGISTER.v1.0.json`
- Este resumen: `research/CHESS-STORIES-B1371-B1470-DECISION-SYNTHESIS.v1.0.md`

## Invariantes NO-GO

**E5B4D NO-GO bajo failure model M**; Política B **todos los procesos relevantes terminados y terminación confirmada ESTRICTAMENTE ANTES DE 120 segundos**, stdout y stderr límites independientes de **1.048.576 bytes EMITIDOS Y ACEPTADOS** cada uno durante toda su vida. **R6 PENDING**, **IVV_GLOBAL/CASE_APPROVAL NOT APPROVED**; rules oracle NOT RUN, test y render 0; PR draft, sin merge `main`, ni publicación autorizada. Una tabla histórica visualmente leída **no cambia esas puertas**.
