# Chess Stories — B1171–B1190: archivo y ontología de afirmaciones

**Corte 2026-10-14.** Datos source-derived del caso y bibliografía pública separados de inferencias. Sin lectura original A/B ni archivo histórico descargado. No ejecutado.

## DM — Archivo 1956: adquisición observacional sin falsear acceso

### B1171 — Portada con referencia incorrecta como control de calidad

**Hallazgo, fuente o inferencia:** Winter reproduce el reclamo de portada a p370 y sitúa la crónica en pp374–375.

**Evidencia futura requerida:** Ficha conserva la errata y enlace a las páginas correctas como hechos documentales distintos.

**Criterio de rechazo/inconclusión:** No describir p370 como fuente original de la partida Byrne–Fischer.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1172 — Imagen de revista sin URI IIIF verificada

**Hallazgo, fuente o inferencia:** La API Image 3.0 ofrece regiones y `info.json`, pero aún no hay servicio IIIF confirmado para el ejemplar exacto.

**Evidencia futura requerida:** Usar solo un identificador y URL de servicio realmente publicados por el custodio.

**Criterio de rechazo/inconclusión:** No fabricar `/pct:x,y,w,h/` en un repositorio que no ofrece IIIF.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1173 — Coordenadas porcentuales sujetas a dimensiones de rendición

**Hallazgo, fuente o inferencia:** IIIF calcula `pct:x,y,w,h` con el tamaño de la imagen anunciado en info.json.

**Evidencia futura requerida:** Un selector acepta únicamente rendition_id y dimensiones observadas.

**Criterio de rechazo/inconclusión:** Rechazar regiones sobre imágenes reescaladas sin referencia geométrica.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1174 — Conservación del contexto a ambos lados del artículo

**Hallazgo, fuente o inferencia:** Un recorte de la tabla de jugadas puede ocultar un comentario que identifica final o variante.

**Evidencia futura requerida:** El paquete futuro conserva contexto autorizable de p374 y p375 antes de transcribir.

**Criterio de rechazo/inconclusión:** Inconcluso cuando el recorte no incluye continuidad del artículo.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1175 — Dos versiones del mismo escaneo no son dos testimonios

**Hallazgo, fuente o inferencia:** Un TIFF y JPG creados de la misma captura física son dos rendiciones de un origen.

**Evidencia futura requerida:** Grafo `same_physical_item` con hash/fecha/rendición por archivo.

**Criterio de rechazo/inconclusión:** No contar TIFF+JPG como dos publicaciones independientes.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1176 — Primer testigo observado distinto de reproducción de Winter

**Hallazgo, fuente o inferencia:** Un historiador puede citar el impreso sin que hayamos inspeccionado el original primario nosotros.

**Evidencia futura requerida:** Registrar `SECONDARY_VISUAL_REFERENCE` hasta acceso directo a las páginas completas.

**Criterio de rechazo/inconclusión:** Rechazar credencial `PRIMARY_OBSERVED` basada solo en texto de Winter.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1177 — Acceso legítimo no convierte recorte en obra redistribuible

**Hallazgo, fuente o inferencia:** Una imagen visible en portal de biblioteca puede tener licencia restrictiva.

**Evidencia futura requerida:** Ficha separa access_allowed, local_copy_allowed y commercial_redistribution.

**Criterio de rechazo/inconclusión:** No añadir imágenes históricas a producto por mera accesibilidad web.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1178 — Errata de paginación como prueba de identificación

**Hallazgo, fuente o inferencia:** Un catálogo que ubique Byrne–Fischer en p370 podría estar copiando la portada, no haber leído el número.

**Evidencia futura requerida:** Cotejar índice, impreso, atribución Kmoch y páginas 374–375.

**Criterio de rechazo/inconclusión:** No aceptar catalogación contradictoria sin aclaración del objeto.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1179 — Estado de fuente que no puede descargarse

**Hallazgo, fuente o inferencia:** El PDF histórico grande falló anteriormente al abrirse desde herramientas; esto es una limitación de acceso.

**Evidencia futura requerida:** Registrar fecha, servicio, tipo de fallo y reintento con vía legítima.

**Criterio de rechazo/inconclusión:** No concluir que el archivo o las páginas no existen.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1180 — Una observación del original no es un permiso de publicación

**Hallazgo, fuente o inferencia:** La correcta lectura A/B permitiría un dictamen histórico limitado, no una licencia de escaneo.

**Evidencia futura requerida:** Estado HISTORY_WITNESS separado de RIGHTS_REPRODUCTION.

**Criterio de rechazo/inconclusión:** No desbloquear R6 a partir de una transcripción precisa.

**Prioridad:** P0. **Referencias:** `WINTER`, `IIIF`, `ANNO`, `CASE`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## DN — Taxonomía de reclamaciones y epistemología del episodio

### B1181 — Claim de movimiento jugado frente a alternativa de análisis

**Hallazgo, fuente o inferencia:** PGN puede representar variaciones y resultado; una línea alternativa de enseñanza no entra en movetext principal.

**Evidencia futura requerida:** Cada claim usa `PLAYED_CANDIDATE` o `EDITORIAL_HYPOTHESIS`, nunca una mezcla.

**Criterio de rechazo/inconclusión:** Rechazar Qd8 como movimiento real por estar en un vídeo de partida.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1182 — Resultado del encuentro y tipo de final como dos entidades

**Hallazgo, fuente o inferencia:** El candidato 0–1 no demuestra si las planillas originales terminan antes de mate publicado.

**Evidencia futura requerida:** Registrar game_result y ending_mechanism con distintas evidencias.

**Criterio de rechazo/inconclusión:** No interpretar 0–1 como `CHECKMATE_ON_BOARD`.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1183 — Afirmación geométrica no necesita intención psicológica

**Hallazgo, fuente o inferencia:** Que el alfil e6 apunte a c4 es relación de tablero; que Fischer viera toda la línea es atribución mental.

**Evidencia futura requerida:** Separar ATTACK_RELATION de PLAYER_INTENTION.

**Criterio de rechazo/inconclusión:** Bloquear voz en primera persona sin testimonio de intención.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1184 — Anotación Kmoch frente a voz propia

**Hallazgo, fuente o inferencia:** La crónica de Kmoch y el guion original pueden coincidir en hechos sin copiar su expresión.

**Evidencia futura requerida:** Claim de hecho citado separadamente de frase editorial original.

**Criterio de rechazo/inconclusión:** Inconcluso si se reutiliza formulación específica sin revisión de derechos.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1185 — «Partida real» y «historia autenticada» son dimensiones

**Hallazgo, fuente o inferencia:** Un rótulo de MAIN diferencia variante pedagógica, pero no certifica los 82 plies originales.

**Evidencia futura requerida:** Clasificador factualidad_narrativa distinto de source_authentication.

**Criterio de rechazo/inconclusión:** No elevar HISTORY_VERIFIED por mostrar PARTIDA REAL.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1186 — Un titular superlativo es una proposición verificable

**Hallazgo, fuente o inferencia:** «Game of the Century» es denominación histórica atribuida, no evaluación editorial demostrada.

**Evidencia futura requerida:** Si se usa, atribución a fuente y contexto de aparición.

**Criterio de rechazo/inconclusión:** No anunciar «mejor partida del siglo por evaluación objetiva» sin prueba.

**Prioridad:** P1. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1187 — Fuente historiográfica frente a evento observado

**Hallazgo, fuente o inferencia:** La página de Winter describe la circulación del calificativo y la errata, no sustituye planilla manuscrita.

**Evidencia futura requerida:** Usar `wasDerivedFrom` en resúmenes, y `hadPrimarySource` solo con prueba real.

**Criterio de rechazo/inconclusión:** Rechazar grafo con relaciones de procedencia inventadas.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1188 — La apertura del clip puede no decir todo el resultado

**Hallazgo, fuente o inferencia:** T01 presenta jugada 17.Kf1 y dama atacada, no la totalidad de un enfrentamiento.

**Evidencia futura requerida:** Scope de cada frase limitado al intervalo y testigo pertinente.

**Criterio de rechazo/inconclusión:** No sobreinterpretar hook como descripción global de partida.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1189 — La elipsis debe tener incertidumbre de contenido diferenciada

**Hallazgo, fuente o inferencia:** Se declaran catorce medias jugadas omitidas, pero sigue pendiente cotejar su lista con la fuente primaria.

**Evidencia futura requerida:** Declarar número de plies del contrato y estado de autenticación por secuencia.

**Criterio de rechazo/inconclusión:** No etiquetar los catorce movimientos como transcritos A/B.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1190 — El cierre editorial no identifica método terminal histórico

**Hallazgo, fuente o inferencia:** T12 está en ply50 y el secundario sitúa su final en ply82.

**Evidencia futura requerida:** Usar CLOSED_EPISODE y HISTORICAL_TERMINAL_UNKNOWN separados.

**Criterio de rechazo/inconclusión:** No mostrar mate de Rc2# en el cierre del episodio como hecho original.

**Prioridad:** P0. **Referencias:** `PROV`, `PGN`, `CASE`, `WINTER`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Bibliografía

- `WINTER`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `IIIF`: https://iiif.io/api/image/3.0/
- `ANNO`: https://www.w3.org/TR/annotation-model/
- `PROV`: https://www.w3.org/TR/prov-o/
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `CASE`: PR #1 case v0.2, Git blob 3514f19ac355763a5b4c61d5c573df090b0eccc1 (candidate source only).

## Gates congelados

E5B4D NO-GO bajo M; Política B todos los procesos relevantes terminados y confirmación de su terminación ESTRICTAMENTE ANTES DE 120 s; stdout/stderr cada uno límite independiente 1.048.576 bytes EMITIDOS y ACEPTADOS durante toda la vida. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; ningún chess engine, tests, render, Actions, publicación o merge main.
