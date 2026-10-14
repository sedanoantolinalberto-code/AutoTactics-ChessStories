# Chess Stories — B1231–B1250: BOM de derechos y diseño IVV falsable

**Fecha 2026-10-14.** Investigación source-only. No hay assets comerciales finales ni panel humano. Fuentes jurídicas/técnicas generales no sustituyen signoff aplicable a archivos concretos.

## DS — Derechos y metadatos de procedencia por derivado específico

### B1231 — El folio escaneado y la jugada como dato tienen riesgos distintos

**Base documental/inferencia:** Una partitura de jugadas y una fotografía compuesta de la revista no son el mismo objeto jurídico.

**Comprobación admisible:** BOM distingue game_data, commentary, photo y scan_layout.

**Rechazo o insuficiencia:** No dar derecho de reproducción del folio por conocer los movimientos.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1232 — Cada transformación del facsímil conserva dependencia de derechos

**Base documental/inferencia:** Reducir o recortar una fotografía protegida no asegura disponer de licencia.

**Comprobación admisible:** Dependencia scan_original→crop→thumbnail anotada con permisividad jurídica.

**Rechazo o insuficiencia:** Fallo si una imagen derivada se marca libre solo por su nuevo tamaño.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1233 — Archivo de fuente tipográfica requiere checksum independiente

**Base documental/inferencia:** La mención de Noto Sans no identifica versión, weight, glyphs o licencia anexa.

**Comprobación admisible:** Binario exacto y permiso comercial revisados por cada instancia usada.

**Rechazo o insuficiencia:** No acreditar fuente mediante nombre de familia sin archivo real.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1234 — Diseño vectorial original necesita evidencia de elaboración

**Base documental/inferencia:** El clean-room JSON de seis piezas es diseño propuesto, no prueba de creación final.

**Comprobación admisible:** Documentación de trazado y control de similitud contra referencias propias.

**Rechazo o insuficiencia:** No sustituir revisión de obra resultante por intención clean-room.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1235 — Páginas de revista y narración del comentarista no heredan licencia

**Base documental/inferencia:** Un archivo PDF consultable no otorga libre traducción extensa del artículo de Kmoch.

**Comprobación admisible:** Política de cita limitada y expresión narrativa genuinamente original.

**Rechazo o insuficiencia:** Rechazar copy extendido de comentario sin permiso.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1236 — Imagen del jugador puede añadir derechos distintos de copyright

**Base documental/inferencia:** Una recreación realista con semejanza de persona puede requerir otros análisis legales.

**Comprobación admisible:** Expediente separado likeness, copyright, autoría IA y afirmaciones atribuidas.

**Rechazo o insuficiencia:** No confundir autorización de fondo con autorización de personaje.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1237 — Content credentials no demuestran titularidad de un elemento

**Base documental/inferencia:** C2PA manifiesta procedencia técnica bajo ciertas firmas; titularidad jurídica es cuestión distinta.

**Comprobación admisible:** Rights BOM y provenance manifest con IDs y verdicts separados.

**Rechazo o insuficiencia:** No promover R6 por credencial firmada solamente.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1238 — EPUB y Short usan componentes y condiciones distintas

**Base documental/inferencia:** Un eBook comercial podría contener diagramas en mejor resolución y texto añadido no presente en Shorts.

**Comprobación admisible:** Dos listas de activos y dos checklists de usos permitidos por formato.

**Rechazo o insuficiencia:** No heredar clearance de Shorts al EPUB sin evaluar materiales.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1239 — Distribución orgánica y anuncios no implican igual derecho contractual

**Base documental/inferencia:** Algunas licencias distinguen usos editoriales, publicitarios y territorios.

**Comprobación admisible:** Rights scope indica paid_ads, organic y sublicencia por destino cuando aplique.

**Rechazo o insuficiencia:** No dar permiso a campañas comerciales porque vídeo orgánico fuera aceptado.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1240 — Caducidad y retirada de un asset exigen mapa de afectados

**Base documental/inferencia:** Una licencia limitada o impugnada podría afectar tres plataformas y los libros vendidos.

**Comprobación admisible:** Índice asset_hash→version_outputs→release_date y corrección por soporte.

**Rechazo o insuficiencia:** No considerar retirada de un solo Short suficiente para todos los derivados.

**Prioridad:** P0. **Referencias:** `R6`, `COPY`, `C2PA`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## DT — Auditoría perceptiva: pausas, fatiga, diseño de preguntas

### B1241 — Pausa del contenido no sustituye claridad del rótulo

**Base documental/inferencia:** W3C recomienda mecanismos para pausar ciertos contenidos móviles; un Short de terceros puede imponer controles concretos.

**Comprobación admisible:** Revisión de control real y alternativas de lectura que no oculten truth labels.

**Rechazo o insuficiencia:** No afirmar WCAG A de toda la plataforma porque el vídeo sea estático.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1242 — Escala de comprensión no mezcla tres conceptos

**Base documental/inferencia:** Distinguir pieza amenazada, contrafactual y salto de plies requiere ítems separados.

**Comprobación admisible:** Outcomes EP01 `TACTICAL_RELATION`, `HYPOTHETICAL_CLASS`, `OMISSION_RECOGNITION`.

**Rechazo o insuficiencia:** No promediar respuestas inconmensurables como única nota global.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1243 — Una pregunta no puede enseñar solución durante la prueba

**Base documental/inferencia:** «¿Por qué Qd8 era hipotética?» ya explica que no se jugó.

**Comprobación admisible:** Ítem neutral que presenta movimientos y solicita clasificarlos.

**Rechazo o insuficiencia:** Rechazar encuesta con negación/sugerencia enunciada.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1244 — Conocimiento previo de Byrne–Fischer es variable de confusión

**Base documental/inferencia:** Un aficionado puede conocer Bxb6 sin haber leído la posición en el vídeo.

**Comprobación admisible:** Pregunta de familiaridad predefinida y análisis independiente del grupo.

**Rechazo o insuficiencia:** Inconcluso si familiaridad sólo se mide después de resultados.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1245 — Tiempo de exposición en feed difiere de vídeo nominal

**Base documental/inferencia:** Quien desliza a los 20 s nunca recibe el rótulo final aunque clip tenga 60 s.

**Comprobación admisible:** Análisis separa intención de diseño de atención efectivamente recibida.

**Rechazo o insuficiencia:** No penalizar como comprensión errónea un frame nunca visto sin definir exposición.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1246 — Solo usuarios con audio pueden conocer una aclaración hablada

**Base documental/inferencia:** La advertencia NO JUGADA debe ser perceptible sin locución.

**Comprobación admisible:** Comparación silenciosa específica con criterios de factualidad idénticos.

**Rechazo o insuficiencia:** Rechazar PASS si solo la voz aclara la hipótesis.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1247 — Enfermedad visual no se infiere de un test de ajedrez

**Base documental/inferencia:** Un estudio de comprensión no diagnostica sensibilidad a destellos ni mareo.

**Comprobación admisible:** Seguridad visual técnica y escucha/experiencia separadas de IVV.

**Rechazo o insuficiencia:** No tratar puntuación cognitiva como evaluación de seguridad.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1248 — Cuestión de h1 requiere casilla visible en estímulo

**Base documental/inferencia:** Preguntar por la torre h1 tras Nxd1 carece de validez si la interfaz recorta esa casilla.

**Comprobación admisible:** Evidencia de visibilidad efectiva para todos los sujetos evaluados.

**Rechazo o insuficiencia:** Inconcluso si h1 estaba tapada por superposición del reproductor.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1249 — Orden de presentación de 45s y 60s genera aprendizaje

**Base documental/inferencia:** Una persona que ve primero la versión explicativa puede mejorar artificialmente en la segunda.

**Comprobación admisible:** Diseño entre sujetos o contrabalanceo fijado antes del estudio.

**Rechazo o insuficiencia:** No atribuir mejora de segunda versión solo a edición.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1250 — Tamaño muestral e incertidumbre impiden PASS retrospectivo

**Base documental/inferencia:** Sin muestra y umbral predefinido no hay evidencia de comprensión generalizable.

**Comprobación admisible:** Criterio de equivalencia o superioridad y desviaciones fijadas antes de recolectar.

**Rechazo o insuficiencia:** No proclamar IVV_GLOBAL aprobado por dos comentarios de espectadores.

**Prioridad:** P0. **Referencias:** `WAI`, `WCAG`, `CASE`, `IVV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes

- `R6`: GitHub PR #7 rights inventory PENDING.
- `COPY`: https://www.copyright.gov/vcc/card-guide.html
- `C2PA`: https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html
- `IIIF`: https://iiif.io/api/image/3.0/
- `WCAG`: https://www.w3.org/TR/WCAG22/
- `WAI`: https://www.w3.org/WAI/WCAG22/Techniques/general/G4
- `CASE`: GitHub PR #1 EP01 v0.2; `IVV`: PR #6 draft.

**Gates:** E5B4D NO-GO bajo M y Política B todos procesos relevantes terminados Y confirmados estrictamente antes de 120s, stdout/stderr independientes cada uno max. 1.048.576 bytes emitidos/aceptados durante toda su vida. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; no test, render, motor, Actions, merge ni publicación.
