# Chess Stories — B1411–B1430: planillas atribuidas a Fischer y cotejo de notación

**Corte:** 2026-10-14. Fuente biográfica de custodia indirecta (Brady/ChessBase), reproducción fotográfica publicada de planilla, e inspección visual de Chess Life 5-XI-1956 p.2. **No** se ha visto ni autentificado el objeto físico manuscrito ni se ha realizado lectura ciega completa de su final.

## FK — Material manuscrito publicado y cadena de custodia atribuida

### B1411 — ChessBase reproduce imagen atribuida a planilla original

**Hallazgo documentado / inferencia:** ChessBase publica una imagen que describe como la planilla original escrita por Fischer, diferente del score de Chess Life.

**Criterio de verificación o límite:** Clasificar como `SCORESHEET_IMAGE_PUBLISHED_BY_THIRD_PARTY`, sin afirmar objeto físico inspeccionado.

**Prioridad:** P0. **Fuentes:** `CB`, `BRADY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1412 — Fuente biográfica Brady ofrece narración sobre dos copias

**Hallazgo documentado / inferencia:** Brady describe un original que habría retenido Kmoch y un carbónico conservado por Fischer.

**Criterio de verificación o límite:** Representar `BRADY_REPORTS_CUSTODY` y no adjudicar automáticamente titularidad actual.

**Prioridad:** P0. **Fuentes:** `BRADY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1413 — Carbón del jugador y ejemplar original son objetos distintos

**Hallazgo documentado / inferencia:** Las dos copias pueden contener tachaduras, marcas o finales diferentes.

**Criterio de verificación o límite:** Crear dos witness_ids hipotéticos, no dos lecturas del mismo scan.

**Prioridad:** P0. **Fuentes:** `BRADY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1414 — La trayectoria Lawson/coleccionistas viene de relato biográfico

**Hallazgo documentado / inferencia:** Brady afirma que el original pasó a Lawson y después a coleccionistas privados, sin cadena documental completa aportada aquí.

**Criterio de verificación o límite:** No convertir relato en registro jurídico de propiedad ni ubicación presente.

**Prioridad:** P0. **Fuentes:** `BRADY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1415 — Fotografía de manuscrito no se puede reutilizar libremente

**Hallazgo documentado / inferencia:** La foto en ChessBase tiene posibles derechos de fotografía, facsímil, custodio y medio.

**Criterio de verificación o límite:** R6 por imagen/archivo antes de usarla en vídeo, banner o eBook.

**Prioridad:** P0. **Fuentes:** `BRADY`, `CB`, `ARCH`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1416 — La notación descriptiva escrita por Fischer no es SAN moderna

**Hallazgo documentado / inferencia:** ChessBase explica rasgos de notación descriptiva en la imagen, con numeración dependiente del punto de vista.

**Criterio de verificación o límite:** Separar observación de grafemas manuscritos de conversión moderna de jugadas.

**Prioridad:** P0. **Fuentes:** `CB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1417 — Fecha sobre planilla escrita no prueba por sí sola cadena de tenencia

**Hallazgo documentado / inferencia:** Winter señala dos versiones reproducidas de score con fecha 17-X-1956.

**Criterio de verificación o límite:** Dar a fecha `MANUSCRIPT_PHOTO_REPORTED` hasta análisis visual con procedencia.

**Prioridad:** P0. **Fuentes:** `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1418 — Una fotografía publicada puede sufrir recorte

**Hallazgo documentado / inferencia:** Un artículo puede enseñar parte de la planilla sin dorso, firma o última línea.

**Criterio de verificación o límite:** Lista de zonas requeridas: fecha, nombres, final, rectificaciones, reverso si existe.

**Prioridad:** P0. **Fuentes:** `BRADY`, `CB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1419 — No confundir el valor económico mencionado con tasación actual

**Hallazgo documentado / inferencia:** Brady menciona un valor estimado para la planilla en su contexto, no cotización verificable de 2026.

**Criterio de verificación o límite:** Omitir precio comercial salvo tasación fechada y verificable.

**Prioridad:** P1. **Fuentes:** `BRADY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1420 — Escrutinio de final necesita imagen legible del tramo final

**Hallazgo documentado / inferencia:** La disputa mate/abandono no se resuelve observando solo primer tercio manuscrito.

**Criterio de verificación o límite:** Si se obtiene legitimamente, lectura visual de últimas líneas sin conocer SAN de antemano.

**Prioridad:** P0. **Fuentes:** `BRADY`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## FL — Cotejo manual entre score impreso descriptivo y candidato SAN

### B1421 — Edición contemporánea usa `Kt` para caballo

**Hallazgo documentado / inferencia:** Chess Life página 2 emplea notación descriptiva y abreviaturas propias del sistema de época.

**Criterio de verificación o límite:** Hoja raw conserva `Kt` y codifica `N` solo en columna de traducción.

**Prioridad:** P0. **Fuentes:** `CL5`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1422 — La abreviatura de torre difiere de captura SAN

**Hallazgo documentado / inferencia:** El remate impreso expresa torre en notación descriptiva, y el candidato secundario expresa Rc2#.

**Criterio de verificación o límite:** Dos lectores independientes cotejan renglón final y orientación antes de declarar equivalencia.

**Prioridad:** P0. **Fuentes:** `CL5`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1423 — El orden de lectura del folio es multicolumna

**Hallazgo documentado / inferencia:** El score de Chess Life ocupa parte inferior de una columna y números continúan en su mitad derecha.

**Criterio de verificación o límite:** Definir reading_order manual por filas de movimiento, no OCR de columnas enteras.

**Prioridad:** P0. **Fuentes:** `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1424 — Los signos + y mate deben conservarse textualmente

**Hallazgo documentado / inferencia:** Transcripciones SAN con `#` pueden proceder de traducción del texto impreso `mate`.

**Criterio de verificación o límite:** Campos raw_terminal, normalized_terminal, editorial_annotation separados.

**Prioridad:** P0. **Fuentes:** `CL5`, `PGN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1425 — El encabezado Grünfeld es clasificación editorial

**Hallazgo documentado / inferencia:** La sección impresa se titula GRUENFELD DEFENSE, no un sello de oráculo moderno ECO.

**Criterio de verificación o límite:** Si se convierte a ECO, registrarlo como derivación posterior.

**Prioridad:** P0. **Fuentes:** `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1426 — Se deben aislar juegos vecinos

**Hallazgo documentado / inferencia:** En el mismo folio aparecen Benoni y Siciliana, y una extracción textual combinada puede introducir jugadas ajenas.

**Criterio de verificación o límite:** Control visual por encabezado de jugadores antes de capturar cada token.

**Prioridad:** P0. **Fuentes:** `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1427 — El folio impreso es evidencia primaria de publicación, no partida física

**Hallazgo documentado / inferencia:** Las 41 parejas de jugadas impresas se pueden comprobar sobre la imagen sin inferir si un jugador las anotó todas.

**Criterio de verificación o límite:** Estado `PRESS_SCORE_TRANSCRIPTION_PENDING` hasta A/B; `ACTUAL_MOVES` por separado.

**Prioridad:** P0. **Fuentes:** `CL5`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1428 — El dato de 82 plies es cardinalidad candidata

**Hallazgo documentado / inferencia:** 41 movimientos completos equivaldrían a 82 medias jugadas, pero esa cardinalidad no valida cada token.

**Criterio de verificación o límite:** Recuentos independientes de filas impresas y de PGN completo recuperado.

**Prioridad:** P0. **Fuentes:** `CL5`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1429 — Movimientos centrales necesitan reconciliación exacta

**Hallazgo documentado / inferencia:** EP01 usa plies 33,34,35,49,50,51; las 14 medias jugadas omitidas no se comprobaron contra periódico.

**Criterio de verificación o límite:** Lectura A/B del tramo 16–26 y reporte de variantes de transcripción.

**Prioridad:** P0. **Fuentes:** `CL5`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1430 — No ejecutar chess.js para suplir lectura textual

**Hallazgo documentado / inferencia:** Un motor legal no puede decidir qué caracteres históricos están impresos ni resolver erratas editoriales.

**Criterio de verificación o límite:** Primero transcribir testigo y después, cuando Policy B lo permita, verificar legalidad.

**Prioridad:** P0. **Fuentes:** `CL5`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes

- `BRADY`: https://en.chessbase.com/post/brady-bobby-fischer-s-game-of-the-century/395
- `CB`: https://en.chessbase.com/post/game-of-the-century-a-full-summary%C2%A0
- `WINTER`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `ARCH`: https://new.uschess.org/chess-life-digital-archives
- `CL5`: https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CL-ALL/1956/1956_11_1.pdf
- `CASE`: GitHub PR #1, ED-CASE-REAL-01.v0.2.json
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt

**No-go:** E5B4D NO-GO bajo fallo M; Política B procesos relevantes terminados Y terminación confirmada estrictamente antes de 120s, stdout/stderr independientes ≤1.048.576 bytes emitidos Y aceptados por toda su vida. R6 PENDING, IVV_GLOBAL y CASE_APPROVAL NOT APPROVED; no chess oracle, pruebas, render, Actions, merge o publicación.
