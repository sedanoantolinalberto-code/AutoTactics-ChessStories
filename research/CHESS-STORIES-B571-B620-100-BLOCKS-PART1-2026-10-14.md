# Chess Stories — Investigación B571–B620, parte 1/2

**Fecha:** 2026-10-14. Continuidad de B1–B570. 50 nuevas preguntas ligadas al piloto EP01, con referencia rastreable, inferencia acotada y falsificador. **Ningún motor o código del proyecto fue ejecutado.** Prioridad P0=riesgo crítico, P1=preparación ulterior.

## AY — Pruebas semánticas ajedrecísticas bajo autorización futura

### B571 — Estado imposible frente a secuencia imposible

**Investigación:** `Board.status()` en python-chess enumera anomalías de posición (reyes, peones, enroques, en passant y jaques imposibles); una posición válida no implica que el PGN previo la alcanzase.

**Comprobación futura:** Doble dictamen cualificado: validez estática FEN y recorrido de jugadas exacto desde inicio; hoy ambos NOT_RUN.

**Prioridad:** P0. **Fuentes:** `PYSTATUS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B572 — Reproducción SAN con error en primera divergencia

**Investigación:** `push_san` admite jugadas en secuencia; un error de SAN en ply 36 puede invalidar todo lo declarado en T10 aunque las posiciones extremas parezcan plausibles.

**Comprobación futura:** Futuro reporte identifica primer ply divergente, FEN previo y token crudo, no se salta fallos para llegar a V-EV2.

**Prioridad:** P0. **Fuentes:** `PY`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B573 — Validación legal del rey tras captura

**Investigación:** Que c3 quede vacío y d1 contenga un caballo no demuestra que 25...Nxd1 deje seguro al rey propio.

**Comprobación futura:** Generador independiente debe verificar legality y ausencia de jaque propio, con reglaset explícito y salida separada del fixture.

**Prioridad:** P0. **Fuentes:** `FIDE`, `PY`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B574 — Diferencia entre is_valid y is_legal

**Investigación:** La API ilustra `Board.is_valid`/`legal_moves` como comprobaciones distintas: la legalidad de una jugada no queda probada por integridad de FEN.

**Comprobación futura:** Contrato futuro exige `position_valid` y `declared_move_legal` con justificaciones separadas y sin datos inventados.

**Prioridad:** P0. **Fuentes:** `PYSTATUS`, `PYENG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B575 — Ronda completa y segmento editorial

**Investigación:** 82 plies secundarias no equivalen a los eventos T01–T12, porque hay REWIND, rama HYP y elipsis.

**Comprobación futura:** Comparar ledger por historic_ply, etiquetar cada evento editorial no computable y no reproducirlo como movimiento.

**Prioridad:** P0. **Fuentes:** `PGN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B576 — Validar SAN sin adjudicar texto antiguo

**Investigación:** Un SAN moderno puede ser consistente con un recorrido sin demostrar qué letras imprimió Chess Review en diciembre de 1956.

**Comprobación futura:** Mantener scoresheet_raw y modern_SAN_candidate en testimonios distintos incluso ante dictamen legal satisfactorio.

**Prioridad:** P0. **Fuentes:** `PY`, `WITNESS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B577 — Test de en passant y castling rights adversariales

**Investigación:** El fixture EP01 tiene campos FEN específicos; una simulación que conserve piezas pero pierda derechos puede crear legalidad falsa.

**Comprobación futura:** Futuro ensayo contrasta piezas iguales con derechos FEN alterados y exige rechazo de equivalencia legal automática.

**Prioridad:** P1. **Fuentes:** `FIDE`, `PYSTATUS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B578 — Jugada no jugada legal no es jugada real

**Investigación:** El hipotético 17...Qd8 podría resultar legal al comprobarse; ni esa validez ni una evaluación de motor convierten ALT_QD8 en MAIN.

**Comprobación futura:** Dos verdicts independientes: `legal_hypothesis` y `played_in_record=false`; ninguna propagación a evento real.

**Prioridad:** P0. **Fuentes:** `PY`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B579 — Análisis de motor en procesos externos

**Investigación:** La documentación engine de python-chess advierte que los motores son ejecutables y entradas inválidas pueden causar fallos; no garantiza aislamiento estricto.

**Comprobación futura:** Gate previo de Policy B/M y entrada validada; no invocar UCI ni subprocess ahora.

**Prioridad:** P0. **Fuentes:** `PYENG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B580 — Trazabilidad del oráculo hasta las fuentes históricas

**Investigación:** Un oráculo que lee solo fixture y PGN copiado puede compartir error con router y no resolver original histórico.

**Comprobación futura:** Exigir ledger de fuente independiente para legitimidad histórica y reporte de chess law separado, evitando circularidad.

**Prioridad:** P0. **Fuentes:** `PY`, `PROV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AZ — Forénsica editorial de los testigos físicos y discrepancias

### B581 — Impreso no es copia de planilla original

**Investigación:** Una página impresa que dice mate es evidencia de lo publicado, no del último apunte manuscrito de Byrne.

**Comprobación futura:** Dictámenes distintos `published_terminal` vs `original_scoresheet_terminal`, sin promover ninguno por equivalencia.

**Prioridad:** P0. **Fuentes:** `WITNESS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B582 — Contaminación por navegación junto al artículo

**Investigación:** Una web que reproduce el artículo de Kmoch junto a SAN moderno deja de ser un entorno apto para lectura ciega si el lector accede a ella.

**Comprobación futura:** Paquete blind único con páginas originales autorizadas y guía neutral; certificar no exposición antes de asignar lectores.

**Prioridad:** P0. **Fuentes:** `WITNESS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B583 — A/B con desacuerdo explícito por casilla

**Investigación:** Si lector A descifra Kt y B descifra K, promediar confianza no reconstruye el símbolo publicado.

**Comprobación futura:** Guardar ambas variantes, región original y arbitraje ciego a clave moderna antes de comparar fuentes.

**Prioridad:** P0. **Fuentes:** `G`, `IIIF`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B584 — Número impreso no implica índice PDF

**Investigación:** Printed p374 puede ser página distinta dentro de un volumen escaneado con cubiertas o índice no paginado.

**Comprobación futura:** Anotación de localizador `issue/page_printed/page_scan_index/region` antes de transcribir.

**Prioridad:** P0. **Fuentes:** `IIIF`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B585 — Copia facsimilar recortada sin margen

**Investigación:** Un recorte puede eliminar cabecera o continuación de jugadas, simulando partida incompleta.

**Comprobación futura:** Calificar paquete solo si contiene recto completo de ambas páginas y continuidad visible; si no, registrar MISSING_CONTEXT.

**Prioridad:** P0. **Fuentes:** `WITNESS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B586 — Tabla y variante de comentario no son dos partidas

**Investigación:** Kmoch puede presentar línea comentada dentro del artículo; copiarla en main movetext crea falsos plies.

**Comprobación futura:** Separar score, variación anotada y prosa antes de conversión SAN, usando ubicación física.

**Prioridad:** P0. **Fuentes:** `WITNESS`, `PGN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B587 — Adjudicación y reconciliación no son la misma operación

**Investigación:** Llegar a acuerdo sobre grafía del impreso no demuestra concordancia con secundario moderno ni autenticidad de la planilla original.

**Comprobación futura:** Congelar adjudicación intra-testigo antes de comparar 1956 entre revistas y después con modern candidate.

**Prioridad:** P0. **Fuentes:** `G`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B588 — Evidencia negativa registrada como búsqueda fallida

**Investigación:** Que una biblioteca no responda o enlace no cargue no equivale a prueba de que el ejemplar no exista.

**Comprobación futura:** Registro de intento, fecha y clase de fallo con retry externo futuro; no marcar fuente LOST.

**Prioridad:** P1. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B589 — Cambios de erratas editoriales entre ejemplares

**Investigación:** Dos ejemplares de mismo issue podrían contener correcciones de tirada, sin ser testigos independientes del torneo.

**Comprobación futura:** Identificar impresión/paginación y posibles sustituciones de hoja antes de comparar diferencias.

**Prioridad:** P1. **Fuentes:** `IIIF`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B590 — Actor de atribución frente a actor de observación

**Investigación:** Quien publicó la crónica, quien posee la revista y quien la leyó son roles disjuntos en PROV-O.

**Comprobación futura:** Registrar author/editor/custodian/reader/adjudicator y prohibir que la propiedad del objeto certifique la lectura.

**Prioridad:** P0. **Fuentes:** `PROV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BA — Calidad de media: decodificación, tiempo y color

### B591 — Compatibilidad de códec frente a fluidez real

**Investigación:** MediaCapabilities puede informar supported/smooth/powerEfficient, pero sin dispositivo ni archivo real no mide reproducción EP01.

**Comprobación futura:** Cuando exista MP4 permitido, observar decodificación en móviles elegibles y eventos perdidos; no afirmar compatibilidad universal.

**Prioridad:** P1. **Fuentes:** `MDN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B592 — Declaración del fabricante no equivale a medición

**Investigación:** La API puede estimar `smooth` por supuestos iniciales sin estadísticas del dispositivo, según MDN.

**Comprobación futura:** Registrar configuración y medición en reproducción, distinguiendo predicción API de dropped frames observados.

**Prioridad:** P1. **Fuentes:** `MDN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B593 — Ancho codificado no es tablero visible

**Investigación:** VideoFrame.codedWidth puede incluir padding oculto; usarlo para localizar d1 desplaza coordenadas del overlay.

**Comprobación futura:** Verificar codedWidth vs displayWidth/crop efectivo antes de cualquier coordenada de casilla o rótulo.

**Prioridad:** P0. **Fuentes:** `FRAME`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B594 — Color de fuente en BT.709 frente a display

**Investigación:** VideoFrame.colorSpace describe colores de vídeo; cambios de espacio/rango pueden volver ilegible el texto sobre casilla.

**Comprobación futura:** Comparar luminancia/contraste del archivo descodificado real, no solo tokens RGB de JSON.

**Prioridad:** P0. **Fuentes:** `COLOR`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B595 — Señal «HIPOTÉTICA» tras compresión

**Investigación:** T06 puede quedar legible en previsualización PNG y volverse borrosa en bitrate bajo de Shorts.

**Comprobación futura:** Calificar inteligibilidad sobre export descodificado y variantes de transcodificación observadas.

**Prioridad:** P0. **Fuentes:** `MDN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B596 — Inestabilidad de timestamp tras hard cut ALT-A

**Investigación:** Un corte puede desplazar PTS o duplicar último frame real, pareciendo captura directa sin salto.

**Comprobación futura:** Revisión futura de frame timestamps y etiqueta de elipsis a ambos lados del corte.

**Prioridad:** P0. **Fuentes:** `MDN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B597 — Color solo no distingue rama

**Investigación:** Acentos cian/lila podrían comprimirse hacia tonos próximos; eso no debe decidir factualidad.

**Comprobación futura:** Exigir etiqueta textual además de color y comprobar legibilidad de ambos estados sin audio.

**Prioridad:** P0. **Fuentes:** `COLOR`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B598 — Escala de resolución de piezas de ajedrez

**Investigación:** La silueta original del caballo tiene detalles finos, potencialmente ilegibles a miniaturas de feed.

**Comprobación futura:** Calificar identificación de seis tipos sobre claros/oscuros en resolución real de presentación.

**Prioridad:** P1. **Fuentes:** `FRAME`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B599 — Corte y eliminación de capas del tablero previo

**Investigación:** Una composición con retención de capa de flecha antigua puede falsear V-EV2 aunque ocupación FEN esté bien.

**Comprobación futura:** Visual diff future de todos los overlays por fase; nada heredado sin autorización.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B600 — Loop en el último frame editorial

**Investigación:** El cierre T12 puede enganchar con T01 en bucle y sugerir una secuencia histórica continua sin reinicio.

**Comprobación futura:** Diseñar transición semántica de loop con marcador de reanudación y comprobar interpretación en scroll real.

**Prioridad:** P1. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BB — Seguridad y accesibilidad del movimiento en pantalla

### B601 — Límite de flashes antes de elegir efecto

**Investigación:** WCAG 2.3.1 aborda destellos potencialmente desencadenantes de crisis; advertir no sustituye eliminar la fuente de riesgo.

**Comprobación futura:** Rechazar flashes peligrosos y revisar futura tasa/intensidad en media final con metodología cualificada.

**Prioridad:** P0. **Fuentes:** `W3CFLASH`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B602 — Parpadeo prolongado en la rama hipotética

**Investigación:** Repetir HIPOTÉTICA con efecto intermitente puede distraer y vulnerar criterios de pausa para contenido parpadeante persistente.

**Comprobación futura:** Proponer cartel estático continuo en vez de parpadeo; verificar duración y frecuencia de animación si se implementa.

**Prioridad:** P0. **Fuentes:** `W3CBLINK`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B603 — Rayo de captura como recurso no esencial

**Investigación:** Un flash rojo en d1 no comunica contenido ajedrecístico indispensable y puede introducir daño visual.

**Comprobación futura:** Priorizar halo estático y texto para ALT-A; descartar efectos explosivos no justificados.

**Prioridad:** P0. **Fuentes:** `W3CFLASH`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B604 — Rebobinado sin flashes estroboscópicos

**Investigación:** T04 es recurso editorial, no acción histórica; secuencia de alternancias rápidas no es necesaria para comunicar retorno.

**Comprobación futura:** Comparar opción de corte no estroboscópico y precisión de recuerdo en IVV futuro.

**Prioridad:** P0. **Fuentes:** `W3CFLASH`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B605 — Compresión de frames y límites de parpadeo

**Investigación:** Un pulso aparentemente lento en timeline podría producir cambios bruscos de brillo tras transcodificación.

**Comprobación futura:** No certificar riesgo de destello en targets JSON; analizar salida real decodificada antes de publicación.

**Prioridad:** P0. **Fuentes:** `W3CFLASH`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B606 — Seguridad no se delega en el usuario

**Investigación:** Las guías WAI advierten que advertencias pueden omitirse incluso en espectadores sensibles.

**Comprobación futura:** Diseñar por defecto sin secuencias de destello peligrosas; aviso no es mitigación suficiente.

**Prioridad:** P0. **Fuentes:** `W3CFLASH`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B607 — Interacción de zoom repetitivo y mareo

**Investigación:** Una cámara que se acerca rápidamente a d1 podría generar malestar incluso si no parpadea.

**Comprobación futura:** Ofrecer corte fijo ALT-A como candidato y estudiar comodidad por dispositivo sin asumir certificación médica.

**Prioridad:** P1. **Fuentes:** `W3C`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B608 — Subtítulos y controles de movimiento reducido

**Investigación:** Reducir transiciones no permite quitar «NO JUGADA» o «SE OMITEN JUGADAS REALES».

**Comprobación futura:** Comparar versión con menos movimiento conservando exactamente las mismas señales factuales.

**Prioridad:** P0. **Fuentes:** `W3C`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B609 — Índice de zonas con señal de peligro

**Investigación:** Tablero, callout, etiqueta factual, marca plataforma y subtítulos pueden superponerse en móvil.

**Comprobación futura:** Future media QC inspecciona regiones por frame y falla si verdad queda oculta, incluso si frame no parpadea.

**Prioridad:** P0. **Fuentes:** `W3C`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B610 — Prueba visual como condición distinta de IVV

**Investigación:** Un IVV que pregunta si entendieron la partida no prueba que vídeo cumpla umbrales de destellos.

**Comprobación futura:** Dos dictámenes separados: riesgos perceptuales de salud/seguridad visual y comprensión factual.

**Prioridad:** P0. **Fuentes:** `W3CFLASH`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BC — Aprendizaje del ajedrez con práctica de recuperación

### B611 — Recordar la variante frente a reconocerla

**Investigación:** Roediger/Karpicke describen que recuperar información fortalece recuerdo diferido frente a sólo releer, en contextos estudiados.

**Comprobación futura:** Hipótesis de mini-ejercicio posterior al episodio sobre REAL/HYP frente a simple replay, no ensayo realizado.

**Prioridad:** P1. **Fuentes:** `RETR`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B612 — Espaciado de preguntas de ajedrez

**Investigación:** Dunlosky et al. califican práctica distribuida como prometedora en distintos materiales; no prueba una cadencia exacta para Chess Stories.

**Comprobación futura:** Diseñar recordatorio opcional de una jugada a intervalos preinscritos y medir retención sin prometer mejora.

**Prioridad:** P1. **Fuentes:** `DUN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B613 — Preguntar por qué la dama estaba atacada

**Investigación:** La interrogación elaborativa puede impulsar explicación causal, pero respuesta no debe inventar intención histórica.

**Comprobación futura:** Pregunta restringida a relaciones de piezas en posición cualificada, con respuesta verificable.

**Prioridad:** P1. **Fuentes:** `DUN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B614 — Intercalar contraste real y no jugado

**Investigación:** Interleaving puede ayudar a discriminar conceptos; Qd8 hipotética y Be6 real ofrecen un par potencial de comparación.

**Comprobación futura:** Tras oráculo, comparar entrenamiento bloqueado vs intercalado manteniendo etiqueta no jugada.

**Prioridad:** P1. **Fuentes:** `DUN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B615 — Aprendizaje activo sin copiar comentario de terceros

**Investigación:** Lichess alberga estudios con capítulos y puzzles; Chess Stories tendría que añadir su propio valor educativo y licencias separadas.

**Comprobación futura:** Distinguir ejercicio original y referencia a plataforma; no importar texto de estudios ajenos sin permisos.

**Prioridad:** P1. **Fuentes:** `LICHESS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B616 — Recuerdo inmediato vs diferido

**Investigación:** El estudio de test-enhanced learning distingue rendimientos inmediatos y diferidos, potencialmente opuestos.

**Comprobación futura:** Definir endpoints al instante y días después antes de afirmar eficacia del episodio.

**Prioridad:** P1. **Fuentes:** `RETR`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B617 — Comprensión de un fracaso como feedback

**Investigación:** Una respuesta errónea sobre Qd8 requiere corregir explícitamente modalidad, no repetir un frame ambiguo.

**Comprobación futura:** Feedback textual vinculado a claim: «Qd8 era hipotética; no se jugó», sin motor inventado.

**Prioridad:** P0. **Fuentes:** `G`, `RETR`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B618 — Microlección separada del entretenimiento

**Investigación:** Un vídeo para Shorts no tiene automáticamente licencia de curso ni produce transferencia pedagógica.

**Comprobación futura:** En IVV diferenciar entretenimiento, hechos históricos y transferencia ajedrecística, sin KPI único.

**Prioridad:** P0. **Fuentes:** `DUN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B619 — Ejercicio de d1 sin tablero de origen técnico

**Investigación:** ALT-A muestra tablero posterior V-EV2; preguntar trayectoria c3→d1 exigiría información no mostrada.

**Comprobación futura:** Evaluar sólo información expuesta o añadir contenido explícito en un futuro producto distinto y autorizado.

**Prioridad:** P0. **Fuentes:** `G`, `RETR`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B620 — Interfaz para repetir sin confundir tiempo histórico

**Investigación:** Un modo repaso de eventos no debe incorporar REWIND como jugada jugada realmente.

**Comprobación futura:** Diseñar repetición editorial con separado historic_move_id / display_event_id, antes de biblioteca interactiva.

**Prioridad:** P0. **Fuentes:** `G`, `DUN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias

- `G`: GitHub conectado AutoTactics-ChessStories: caso EP01 PR #1, historia PR #3, edición PR #4, R6 PR #7, rótulos PR #11, router PR #12 e issue #8. Evidencia de contratos, no de validación externa.
- `PY`: https://github.com/niklasf/python-chess
- `PYENG`: https://github.com/niklasf/python-chess/blob/master/docs/engine.rst
- `PYSTATUS`: https://github.com/niklasf/python-chess/blob/master/chess/__init__.py
- `FIDE`: https://handbook.fide.com/chapter/e012023
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `IIIF`: https://iiif.io/api/presentation/3.0/
- `PROV`: https://www.w3.org/TR/prov-o/
- `WITNESS`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `MDN`: https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo
- `FRAME`: https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame/codedWidth
- `COLOR`: https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame/colorSpace
- `W3CFLASH`: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
- `W3CBLINK`: https://www.w3.org/WAI/WCAG22/Techniques/failures/F112
- `W3C`: https://www.w3.org/TR/WCAG22/
- `RETR`: https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/
- `DUN`: https://www.psychologicalscience.org/journals/pspi/1529100612453266/
- `LICHESS`: https://lichess.org/study/topic/studies/updated

## Restricciones

E5B4D NO-GO bajo modelo M. Política B **estrictamente antes de 120 segundos** todos procesos relevantes terminados y confirmados; límites stdout y stderr **independientes de 1.048.576 bytes emitidos Y aceptados en toda su vida**. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, NO ejecución/chess engine/tests/renders/Actions/merge main/publicación.
