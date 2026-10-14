# Chess Stories — Investigación B221–B270, tanda 2/2

**Fecha:** 2026-10-14. **Continúa:** B171–B220 del dossier adjunto y B1–B170 de la investigación anterior. **Estado:** RESEARCHED_DOCUMENTARY_ONLY para las 50 entradas. No hay ensayos, pruebas automatizadas, transcripción primaria completa ni validación de derechos.

**Interpretación:** las «conclusiones» derivan de reglas oficiales citadas, hechos documentales observados en GitHub o inferencias señaladas. Una propuesta de prueba falsable no es un test corrido. P0=riesgo/gate principal; P1=preparación posterior. La fuente `G` identifica únicamente estado/contratos de proyecto, no evidencia independiente de su corrección.

## P — Montaje, rótulos y evidencia de comprensión

### B221 — Subtítulo frente a rótulo de factualidad

**Investigación:** El caption del narrador y la señal «HIPOTÉTICA · NO JUGADA» cumplen funciones distintas; una pista de subtítulos editable no reemplaza el aviso incrustado requerido.

**Próxima comprobación falsable:** El borrado de subtítulos opcionales nunca debe quitar la clasificación jugada/no jugada de T05/T06.

**Prioridad:** P0. **Base:** `G`, `V`, `Y`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B222 — Orden de cues simultáneos

**Investigación:** WebVTT admite tiempos solapados; dos cues concurrentes pueden ocultarse según plataforma y región, sin modificar contenido textual.

**Próxima comprobación falsable:** En futuras exportaciones, comparar ventanas T05–T07 y descartar solapes que escondan verdad visual.

**Prioridad:** P0. **Base:** `V`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B223 — IDs de subtítulos vinculados a evento

**Investigación:** La pista textual debería preservar event_id incluso si cambian segundos o saltos, para rastrear quién narra qué.

**Próxima comprobación falsable:** Manifest con cue_id, event_id, idioma y fuente; cambio de SAN exige revisión de claims.

**Prioridad:** P1. **Base:** `V`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B224 — Separar target temporal de tiempo real

**Investigación:** Las fases S01–S09 suman objetivos 60 s, pero ningún fotograma o locución ha sido medido.

**Próxima comprobación falsable:** Comparar futuros timecodes de media con objetivos sin declararlos equivalentes de antemano.

**Prioridad:** P0. **Base:** `G`, `V`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B225 — Riesgo de cue que sobrevive al regreso

**Investigación:** Un subtítulo «¿Y si ... Qd8?» que perdure después de T07 puede parecer afirmar una jugada real sobre tablero MAIN.

**Próxima comprobación falsable:** Regla futura: audio/cue hipotético no puede coincidir con fase rotulada PARTIDA REAL salvo aclaración inequívoca.

**Prioridad:** P0. **Base:** `G`, `V`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B226 — CTA solo al terminar cierre editorial

**Investigación:** Un llamado a la acción durante T12 no debe ocultar «LA PARTIDA CONTINÚA».

**Próxima comprobación falsable:** Revisión futura de capas: CTA subordinado, no sustituye el cierre factual obligatorio.

**Prioridad:** P1. **Base:** `G`, `A`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B227 — Posición de subtítulos sobre la casilla crítica

**Investigación:** En T11 un subtítulo centrado puede tapar d1 o la figura del caballo, cruciales para ALT-A estático.

**Próxima comprobación falsable:** Revisar rectángulos de superposición reales para T11 y relocalizar callout si hay colisión.

**Prioridad:** P0. **Base:** `G`, `V`, `A`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B228 — Locución de nombres sin impersonación

**Investigación:** Puede pronunciarse el nombre Fischer sin atribuirle palabras o voz; el guion no debe simular una declaración suya.

**Próxima comprobación falsable:** Rechazar cues en primera persona atribuidos a protagonista histórico sin audio/testimonio independiente.

**Prioridad:** P1. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B229 — Confusión entre contenido del cue y tiempo de evento

**Investigación:** Un subtítulo enlazado a T06 puede empezar antes del T05 visual sin que el usuario distinga la rama.

**Próxima comprobación falsable:** Exigir que cualquier referencia a Qd8 esté acompañada del aviso HIPOTÉTICA mientras sea visible.

**Prioridad:** P0. **Base:** `G`, `V`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B230 — Cortes 45 versus 60 sin causalidad falsaria

**Investigación:** Guion idéntico con distinta distribución temporal es intervención conjunta (duración + dwell time), no experimento puro de duración.

**Próxima comprobación falsable:** Preinscripción debe llamar al contraste «dos montajes», no asignar causalidad a 15 s de diferencia.

**Prioridad:** P1. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Q — Integridad documental, esquemas y dependencias

### B231 — Identidad de Git frente a hash de bytes independiente

**Investigación:** Git blob SHA observado ayuda a rastrear revisiones pero no acredita por sí solo original externo o digest SHA-256 certificado.

**Próxima comprobación falsable:** Mantener separados observed_git_blob, source_sha256_qualified y upstream_artifact_attestation.

**Prioridad:** P0. **Base:** `G`, `B`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B232 — Clave duplicada en JSON bruto

**Investigación:** RFC 8785 requiere datos I-JSON sin nombres duplicados: JSON.parse puede descartar una clave anterior antes de una validación de objeto.

**Próxima comprobación falsable:** Diseñar entrada que rechace duplicados **antes** de parsear; prohibido declararla ejecutada hoy.

**Prioridad:** P0. **Base:** `J`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B233 — Orden arbitrario de propiedades

**Investigación:** El router compara objetos documentales; orden textual JSON no debería inducir diferencia de significado, pero arrays de eventos sí son ordenados.

**Próxima comprobación falsable:** Especificar semántica por objeto vs array y no confundir comparación estructural con canonicalización RFC 8785.

**Prioridad:** P1. **Base:** `J`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B234 — Unicode visible igual, bytes distintos

**Investigación:** Composición Unicode y normalización pueden alterar bytes de «HIPOTÉTICA» sin cambiar su apariencia; RFC 8785 no normaliza Unicode.

**Próxima comprobación falsable:** Escoger política de inmutabilidad de caracteres y registrar hash de recurso final, sin ajuste encubierto.

**Prioridad:** P1. **Base:** `J`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B235 — Semántica oneOf y campos exclusivos

**Investigación:** JSON Schema 2020-12 distingue formas de eventos; un campo omitido y uno explícitamente null son casos distintos.

**Próxima comprobación falsable:** Guardar casos de mutación presencia-null como especificación, sin reclamar que 77 casos hayan pasado.

**Prioridad:** P0. **Base:** `S`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B236 — Control de rango bounded comparator

**Investigación:** El router limita igualdad documental a 1024 nodos por comparación; añadir evidencia extensa puede causar falso rechazo, no certificación adversarial.

**Próxima comprobación falsable:** Antes de cambio legítimo de fixture, revisión formal de dimensión y estrategia con límites seguros.

**Prioridad:** P1. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B237 — Dependencia PR #1 al pie de otras PR

**Investigación:** Las PR #2–#12 derivan de la rama semántica y no se deben rebasar silenciosamente a main con nueva aprobación implícita.

**Próxima comprobación falsable:** Mapa de commit base, head y paths; cada actualización de PR #1 invalida snapshots relacionados hasta re-inspección.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B238 — Círculo de evidencia autorreferente

**Investigación:** Un fixture y su router pueden coincidir porque ambos fueron copiados de la misma declaración; 18/18 coincidencias no son auditoría independiente.

**Próxima comprobación falsable:** Separar ledger de concordancia interna de verificación con fuente histórica y reglas por tercero.

**Prioridad:** P0. **Base:** `G`, `B`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B239 — Títulos/IDs de test negativos como cobertura aparente

**Investigación:** 77 IR y 66 negativos del validator son especificaciones; sin ejecución real son índice de amenazas, no porcentajes de cobertura.

**Próxima comprobación falsable:** UI de proyecto muestra «propuestos», «ejecutados» y «aprobados» en campos distintos.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B240 — Ruta de actualización semántica tras ALT-A

**Investigación:** ALT-A afecta exhibición, no debería modificar historial, FEN de PR #1 ni el contrato de T11.

**Próxima comprobación falsable:** En futuras PR, exigir diff sin alteraciones en claims/estados canónicos salvo versionado y reauditoría.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## R — Seguridad de ejecución y cadena de producción

### B241 — No confundir timeout con terminación

**Investigación:** Política B exige terminar y confirmar terminación de **todos** los procesos antes de 120 s, no solo devolver control del padre.

**Próxima comprobación falsable:** Cualquier diseño que mida únicamente timeout del wrapper no puede promover E5B4D.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B242 — Dos canales de salida, límites independientes

**Investigación:** El límite de 1.048.576 bytes se aplica **por separado** a stdout y stderr, tanto emitidos como aceptados en toda la vida.

**Próxima comprobación falsable:** La futura especificación cuenta bytes de extremo a extremo por canal y rechaza fusiones de streams.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B243 — Límite temporal estrictamente menor

**Investigación:** «Antes de 120 s» no equivale a «en 120 s o menos»; borde 120.000 s no cumple.

**Próxima comprobación falsable:** Documentar límite exclusivo y test de frontera en un entorno cualificado futuro.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B244 — Descendientes que sobreviven al proceso padre

**Investigación:** Un retorno de shell no prueba que hijos, nietos u otros procesos relevantes hayan terminado bajo modelo M.

**Próxima comprobación falsable:** Formalizar conjunto de procesos relevantes, sin asumir que process.kill de padre cubre descendencia.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B245 — Salida generada antes de censura del collector

**Investigación:** Truncar logs después de aceptar 1 MB no demuestra que el proceso no emitió bytes extra.

**Próxima comprobación falsable:** Distinguir contador emitido de contador aceptado y fuente independiente de atestación.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B246 — NO-GO no convertible por benchmark aislado

**Investigación:** Un benchmark corto que termina satisfactoriamente no refuta imposibilidad de garantías estrictas universales en el modelo de fallos M.

**Próxima comprobación falsable:** Si se propone ejecutar prueba aislada, etiquetar como observación bajo supuestos distintos, nunca Policy B PASS.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B247 — Proveniencia de build separada de commit

**Investigación:** SLSA diferencia source provenance y build provenance: un commit fuente no es informe verificable de cómo se construyó un MP4.

**Próxima comprobación falsable:** Pedir manifest real de build con entradas, herramientas, entorno, outputs y digest antes de afirmar reproducibilidad.

**Prioridad:** P0. **Base:** `B`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B248 — Frontera de archivos protegidos

**Investigación:** Las nuevas escenas no justifican tocar baselines Motion/P1, rig ni experimentos congelados del otro motor.

**Próxima comprobación falsable:** Auditar futuros diffs por rutas permitidas Chess Stories, rechazar cambio fuera de aislamiento.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B249 — Evidencia de media real versus JSON de target

**Investigación:** JSON con duration_ms o render_status inventado no demuestra que exista un archivo audiovisual coherente.

**Próxima comprobación falsable:** Gate de media requeriría bytes, duración de container y evidencias de frames realmente inspeccionados.

**Prioridad:** P0. **Base:** `G`, `B`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B250 — Gobierno de herramientas no aprobadas

**Investigación:** Dependencias visuales o de ajedrez no se instalan ni ejecutan por conveniencia bajo E5B4D actual.

**Próxima comprobación falsable:** Catálogo de futuros requisitos y alternativas, sin descargar/ejecutar paquetes o Actions.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## S — Derechos y cadena de activos del episodio

### B251 — Datos de juego frente a diagramas originales

**Investigación:** La secuencia de casillas declaradas y el diseño gráfico de revista son objetos de derechos diferentes; poseer la primera no libera reproducir la segunda.

**Próxima comprobación falsable:** Manifest distingue datos, comentario, foto, recorte, tipografía y vector nuevo.

**Prioridad:** P0. **Base:** `C`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B252 — Renovación histórica por componente

**Investigación:** La revista estadounidense de 1956 pertenece a régimen pre-1978 de la Copyright Office; una conclusión global de dominio público requiere comprobación específica de obra/renovación.

**Próxima comprobación falsable:** Sin expediente de renovación/autorización, excluir facsímiles del producto aunque sean visibles públicamente.

**Prioridad:** P0. **Base:** `C`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B253 — Fotografía de Fischer frente a anotación

**Investigación:** Un retrato incluido en la colección de museo puede tener fotógrafo o licencia propia separada del artículo o del tablero.

**Próxima comprobación falsable:** No reusar fotos en miniaturas ni eBooks sin identidad del autor y permisos aplicables.

**Prioridad:** P0. **Base:** `G`, `H`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B254 — Geometría propia todavía no es activo final

**Investigación:** El JSON de primitivas para seis piezas documenta una propuesta de diseño, no prueba de originalidad ni fuente de SVG/PNG final.

**Próxima comprobación falsable:** Future reviewer debe evaluar bytes finales y procedencia de cada derivado renderizado.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B255 — Font family frente a archivo tipográfico

**Investigación:** «Noto Sans tiene licencia OFL» no identifica archivo, peso, revisión, notice ni incorporación en salida concreta.

**Próxima comprobación falsable:** Asset record con hash/version exactos y texto de licencia; mantener R6 hasta inspección.

**Prioridad:** P0. **Base:** `N`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B256 — Obligación de atribución CC BY por formato

**Investigación:** CC BY 4.0 contempla uso comercial y derivaciones con reconocimiento y aviso de modificaciones; no equivale a licencia universal de cualquier imagen online.

**Próxima comprobación falsable:** Si un asset usa CC BY, registrar licenciante, enlace, licencia y cambios por export y comprobar atribución visible/accesible.

**Prioridad:** P1. **Base:** `CC`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B257 — Dependencias de licencia del código de terceros

**Investigación:** El código de un repositorio open source puede tener condiciones distintas de fuentes, piezas, iconos, fotos o contenido integrado.

**Próxima comprobación falsable:** Inventario de licencias por ruta concreta, no inferencia por licencia raíz de un monorepo.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B258 — Captura de pantalla de plataforma ajena

**Investigación:** Mostrar interfaz de un servicio de ajedrez puede incluir logos, UX, piezas e imágenes no despejados por la licencia del código.

**Próxima comprobación falsable:** Preferir representación propia hasta disponer de licencia audiovisual específica del conjunto.

**Prioridad:** P1. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B259 — Derechos en tres soportes y acceso premium

**Investigación:** Permiso para vídeo educativo no implica permiso para eBook comercial ni material premium de suscripción.

**Próxima comprobación falsable:** Matriz asset × canal × soporte × territorio; prohibir promoción cruzada de R6.

**Prioridad:** P0. **Base:** `G`, `C`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B260 — Uso silente como eliminación de dependencias

**Investigación:** Un estímulo privado sin voz ni música elimina la necesidad de esas pistas concretas solo si ningún archivo audio se incorpora realmente.

**Próxima comprobación falsable:** Inventario de media debe demostrar no-usado; no establecer licencia de voz/música que no existe.

**Prioridad:** P1. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## T — Distribución, aceptación y siguiente camino mínimo

### B261 — Canal orgánico no es campaña publicitaria

**Investigación:** Las normas de audio o safe zones de anuncios TikTok/Meta no son automáticamente restricciones de publicación orgánica; separar universos regulatorios.

**Próxima comprobación falsable:** Registro con URL normativa, tipo de distribución y fecha antes de seleccionar formato final.

**Prioridad:** P1. **Base:** `T`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B262 — Maestro semántico frente a tres exports

**Investigación:** Un único EP01 truth contract puede producir outputs distintos por interfaz; identical assets no implica mismas posiciones oculares.

**Próxima comprobación falsable:** Manifest futuro por export vincula mismos T01–T12 y checks de UI plataforma-specific.

**Prioridad:** P1. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B263 — ID de pista YouTube distinto del ID interno

**Investigación:** YouTube Data API asocia captions a videoId y su estado de servicio; un archivo WebVTT planificado no demuestra que la pista esté cargada/publicada.

**Próxima comprobación falsable:** Guardar source cue ID y futuro remote caption track ID en campos separados, si algún día se autorizan publicaciones.

**Prioridad:** P1. **Base:** `Y`, `V`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B264 — Newsletter no abreviará incertidumbre histórica

**Investigación:** Un mail de acompañamiento puede contener más detalle que un Short, pero no promover 41...Rc2# a original-score verificado.

**Próxima comprobación falsable:** La misma claim admissibility F03/history se reutiliza en todo canal antes de considerar newsletter.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B265 — Revisión epistemológica de metadatos

**Investigación:** Miniatura y título pueden prometer «mate final» mientras vídeo corta en 25...Nxd1; la coherencia editorial debe incluir metadatos externos.

**Próxima comprobación falsable:** Checklist de claims cubre título, thumbnail, descripción, captions y CTA.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B266 — Costo de validación como variable explícita

**Investigación:** Las 100 investigaciones son catálogo, no avances en gates; el próximo gasto debería priorizar evidencia capaz de cambiar una decisión real.

**Próxima comprobación falsable:** Por bloque registrar riesgo eliminado esperado, coste y prerequisito; no crear un backlog infinito.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B267 — Ruta mínima para prueba de comprensión

**Investigación:** Los requisitos para estudio humano son estímulo real lícito, protocolo preinscrito, evaluadores independientes y protección de datos.

**Próxima comprobación falsable:** No reclutar ni mostrar hasta demostrar cada precondición; ALT-A documental no basta.

**Prioridad:** P0. **Base:** `G`, `A`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B268 — Cierre de la divergencia 1956 separado del vídeo corto

**Investigación:** La duda mate/abandono al final de ply 82 puede permanecer explícita sin falsear el cierre editorial en ply 50.

**Próxima comprobación falsable:** El guion EP01 debe abstenerse del terminal original mientras fuente primaria siga irresuelta.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B269 — Criterio de abandono de investigación circular

**Investigación:** Si un bloque repite limitación ya registrada sin nueva fuente, falsificador o alternativa, su utilidad marginal tiende a cero.

**Próxima comprobación falsable:** No abrir nueva PR por bloque; archivar 100 entradas en un dossier de investigación, priorizar 10 preguntas causales.

**Prioridad:** P1. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B270 — Definición de próximo GO verificable

**Investigación:** Ningún GO se infiere de documentos: requiere Policy B/M compatible, oráculo, derechos R6, originalidad, evidencia visual/humana e intervención autorizada correspondiente.

**Próxima comprobación falsable:** Checklist independiente con resultados concretos por gate; hasta entonces `EP01 NOT APPROVED`, `main` y publicación congelados.

**Prioridad:** P0. **Base:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes y referencias

- `G`: Repositorio privado: PR #1–#12 en la vertical Chess Stories (principalmente #1, #3, #4, #6, #7, #10, #11, #12), issue #8. Fuente de declaraciones, no de PASS de ejecución.
- `V`: https://www.w3.org/TR/webvtt1/
- `Y`: https://developers.google.com/youtube/v3/docs/captions
- `S`: https://json-schema.org/draft/2020-12
- `J`: https://datatracker.ietf.org/doc/rfc8785/
- `L`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `B`: https://slsa.dev/spec/v1.2/provenance
- `C`: https://www.copyright.gov/circs/circ15a.pdf
- `N`: https://github.com/notofonts/noto-fonts/blob/main/LICENSE
- `CC`: https://creativecommons.org/licenses/by/4.0/deed.es
- `A`: https://www.w3.org/TR/WCAG22/
- `F`: https://handbook.fide.com/chapter/e012023
- `T`: https://ads.tiktok.com/help/article/tiktok-ads-policy-ad-format-and-functionality?lang=es

## Separación radical entre investigación y aprobación

El volumen de 100 bloques B171–B270 no constituye 100 pruebas ni cambios de gate. E5B4D **NO-GO bajo M**; Política B estricta: todos los procesos relevantes terminados y confirmado ese término **antes de 120 s**, stdout y stderr independientes de **1.048.576 bytes emitidos y aceptados** durante toda su vida; R6 PENDING, IVV_GLOBAL/CASE_APPROVAL/EP01 NOT APPROVED, oráculo NOT_RUN, prohibidas ejecución/renders/Actions/fusión `main`/publicación.
