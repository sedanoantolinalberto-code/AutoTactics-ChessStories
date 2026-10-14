# Chess Stories — B1111–B1130 | BOM R6 y QA audiovisual específico

**Fecha 2026-10-14.** Solo fuente conceptual y revisión documental, sin MP4 ni paquete de activos certificados. `C2PA` y `WebVTT` fundamentan cómo representar procedencia/cues, no derechos, verdad o seguridad ya demostrados.

## DG — BOM de activos y clearance comercial por salida

### B1111 — Piezas declarativas frente a seis sprites reales

**Base e inferencia:** PR #7 propone geometría vectorial, aún no acredita originalidad ni licencias.

**Evidencia futura admisible:** BOM final P/R/N/B/Q/K con autor, archivo, digest y revisión independiente.

**Fallo o inconclusión:** Rechazar R6 por mera existencia de JSON geométrico

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1112 — Tablero como recurso separado de las piezas

**Base e inferencia:** Un tablero original podría usar texturas o símbolos de terceros ajenos a los glyphs.

**Evidencia futura admisible:** R6 item separado para fondo, coordenadas, tableros y animaciones.

**Fallo o inconclusión:** No heredar licencia de piezas al fondo

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1113 — Tipografía por binario y variante

**Base e inferencia:** Una familia tipográfica puede tener archivos/weights y licencias particulares.

**Evidencia futura admisible:** Registrar hashes del TTF/OTF realmente incorporado y texto aplicable.

**Fallo o inconclusión:** No aceptar «Noto Sans» como identificador jurídico suficiente

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1114 — Retrato de Fischer versus facsímil de 1956

**Base e inferencia:** Un retrato publicado en revista y su escaneo son usos jurídicos distintos.

**Evidencia futura admisible:** Identificar fotografía, creador, titular y condiciones para thumbnail/video.

**Fallo o inconclusión:** No inferir permiso por antigüedad o acceso de catálogo

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1115 — Narración humana versus TTS

**Base e inferencia:** Licencia de locutor humano y voz sintética tiene términos diferentes.

**Evidencia futura admisible:** Manifest por pista de voz con origen, términos y mercado.

**Fallo o inconclusión:** No reutilizar voz de tercero o estilo personificado sin permiso

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1116 — Sin música no equivale a sin audio

**Base e inferencia:** Un archivo etiquetado silent-first puede contener efectos o narración en una exportación posterior.

**Evidencia futura admisible:** Auditar streams reales por artefacto, no solo storyboard.

**Fallo o inconclusión:** R6 PENDING si aparece audio no declarado

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1117 — Caption y traducción como activos independientes

**Base e inferencia:** Texto de subtítulos podría copiar comentario literario protegido o introducir falsa historia.

**Evidencia futura admisible:** Texto original y procedencia de claims con licencia de traducción si corresponde.

**Fallo o inconclusión:** No publicar citas extensas de 1956 bajo apariencia de caption propio

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1118 — Proveniencia C2PA no califica propiedad intelectual

**Base e inferencia:** C2PA permite verificar cadena de cambios, no veracidad ni derechos de uso.

**Evidencia futura admisible:** Guardar provenance manifest y rights clearance como registros separados.

**Fallo o inconclusión:** No elevar C2PA validated a R6 CLEARED

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1119 — Miniatura y promo fuera del master

**Base e inferencia:** El thumbnail puede incluir imágenes distintas a las del MP4.

**Evidencia futura admisible:** Licencias y revisiones propias para thumbnail, imagen de newsletter y landing.

**Fallo o inconclusión:** No firmar paquete global solo por MP4 limpio

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1120 — Territorio y producto de comercialización

**Base e inferencia:** Un permiso para YouTube ES puede no incluir ebook vendido en EE. UU.

**Evidencia futura admisible:** Rights scope por país, soporte, fecha y modalidad de ingreso.

**Fallo o inconclusión:** Rechazar extensión implícita a nuevos mercados

**Prioridad:** P0; **referencias:** R6;C2PA;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## DH — Comprobación de media renderizada y verdad visual

### B1121 — Un screenshot de editor no sustituye export final

**Base e inferencia:** La composición antes de codificar puede diferir de MP4 transcodificado.

**Evidencia futura admisible:** Muestras de frames del medio final con identidad de archivo y timebase.

**Fallo o inconclusión:** No aceptar layout JSON como comprobación visual

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1122 — Entrada a Qd8 siempre precedida de NO JUGADA

**Base e inferencia:** El aviso factual debe estar cuando se represente una posición alternativa.

**Evidencia futura admisible:** Cobertura frame-level durante T05/T06, no un único frame de ejemplo.

**Fallo o inconclusión:** Falla si aparece dama d8 sin advertencia

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1123 — T07 mantiene rótulo hasta restaurar MAIN

**Base e inferencia:** Una disolución puede mezclar tablero HYP y etiqueta REAL.

**Evidencia futura admisible:** Confirmación de igualdad exacta V-P1 + branch MAIN antes de aviso real.

**Fallo o inconclusión:** Falla si se libera etiqueta durante tween

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1124 — Elipsis T10 no es una animación de Nxd1 directa

**Base e inferencia:** El espectador ve V-REAL antes del salto; V-PRE-EV2 es técnico.

**Evidencia futura admisible:** Rótulo de 14 plies y hard cut sin trayectoria inventada.

**Fallo o inconclusión:** Rechazar pieza que salta desde tablero viejo a d1 como jugada única

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1125 — La torre h1 no desaparece con captura d1

**Base e inferencia:** V-EV2 declara caballero negro d1 y torre blanca h1.

**Evidencia futura admisible:** Frame final con ambas ocupaciones correctas según candidato.

**Fallo o inconclusión:** Falla si desaparece la torre superviviente

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1126 — Cierre T12 requiere texto visible hasta fin

**Base e inferencia:** Un fade bajo caption o CTA puede ocultar LA PARTIDA CONTINÚA.

**Evidencia futura admisible:** Inspección de últimos fotogramas sobre reproductor real.

**Fallo o inconclusión:** Falla si visual parece fin histórico en lugar de editorial

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1127 — Captions WebVTT no reemplazan advertencia embebida

**Base e inferencia:** El espectador puede tener subtítulos desactivados o reubicados.

**Evidencia futura admisible:** Criterio de verdad visual independiente de opciones de pista.

**Fallo o inconclusión:** Falla con audio y captions apagados

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1128 — Contraste sobre casillas tras compresión

**Base e inferencia:** Una etiqueta legible en PNG podría perderse bajo bitrate móvil.

**Evidencia futura admisible:** Medición y revisión de píxeles decodificados en varios fondos.

**Fallo o inconclusión:** No aceptar contraste hex teórico

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1129 — Seguridad de flashes separada de retención

**Base e inferencia:** La falta de quejas o las views no prueban seguridad del efecto de REWIND.

**Evidencia futura admisible:** Informe técnico del archivo final por criterio de destellos aplicable.

**Fallo o inconclusión:** No declarar seguro por encuesta IVV de factualidad

**Prioridad:** P0; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1130 — App overlays alteran zona útil del vídeo

**Base e inferencia:** La plataforma puede colocar etiquetas IA, comentarios o controles sobre el tablero.

**Evidencia futura admisible:** QA por interfaz/fecha/locale y condiciones de playback.

**Fallo o inconclusión:** Reabrir revisión si cambia superposición real

**Prioridad:** P1; **referencias:** WCAG;VTT;OVERLAY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes

- `R6`: PR #7 — geometría declarativa y derechos PENDING.
- `C2PA`: https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html
- `COPY`: https://www.copyright.gov/vcc/card-guide.html
- `WCAG`: https://www.w3.org/TR/WCAG22/
- `VTT`: https://www.w3.org/TR/webvtt1/
- `OVERLAY`: PR #11, estados T01–T12.

**Congelado:** E5B4D NO-GO bajo M y Política B (todos procesos relevantes terminados y confirmados estrictamente antes de 120s; stdout/stderr independientes cada uno 1.048.576 bytes emitidos Y aceptados durante toda su vida). R6 PENDING; IVV_GLOBAL/CASE NOT APPROVED, no ejecutable/renderer/estudio humano/publicación.
