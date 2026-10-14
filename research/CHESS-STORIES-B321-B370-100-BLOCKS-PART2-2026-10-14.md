# Chess Stories — Bloques de investigación B321–B370 (parte 2/2)

**Corte:** 14-10-2026. Segundo tramo de la investigación B271–B370; no sustituye B1–B270. Cada bloque es investigación documental o inferencia para una comprobación posterior, **no un test ejecutado ni un GO**. P0=riesgo esencial, P1=preparación posterior. El expediente GitHub (`G`) es evidencia de declaraciones, no de validación externa.

## Z — Contratos, amenazas de datos y trazabilidad de cambios

### B321 — Anclar cierre editorial como valor y no solo como texto

**Hallazgo o inferencia:** Un `sequence_end` presente con frase correcta no es suficiente si renderer decide tratar ply 50 como mate; contrato debe tipar editorial end y exigir cierre gráfico coherente.

**Prueba falsable pendiente:** Modelo de estado del renderer con `END_EDITORIAL` que prohíba jaque mate terminal salvo histórico autenticado.

**Prioridad:** P0; **referencias:** `G`, `SCHEMA`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B322 — Control de estado faltante al traducir proyecto

**Hallazgo o inferencia:** Una serialización ES/EN puede omitir el `factuality`; un sistema permisivo podría usar REAL por defecto y mentir sobre T06.

**Prueba falsable pendiente:** Especificación de rechazo de campos ausentes por idioma sin fallback a MAIN.

**Prioridad:** P0; **referencias:** `SCHEMA`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B323 — Inmutabilidad de semántica frente a adaptación editorial

**Hallazgo o inferencia:** Recortar segundos puede ser revisión editorial compatible; alterar `T06` a REAL cambia verdad y exige nueva autorización de caso.

**Prueba falsable pendiente:** Contrato diff clasifica cambios COSMETIC, PRESENTATION, SEMANTIC y GATE; negar promoción automática.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B324 — Nombres iguales con variantes Unicode

**Hallazgo o inferencia:** ID de escena con guiones visualmente similares podría crear dobles anclas; las etiquetas humanas no son identificadores seguros.

**Prueba falsable pendiente:** IDs ASCII tipados y canonicalización explícita solo donde no altere literal de testigo.

**Prioridad:** P1; **referencias:** `JCS`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B325 — Parser de untrusted JSON con recursos acotados

**Hallazgo o inferencia:** Un objeto fuente válido según sintaxis aún puede contener tamaños extremos o arrays anidados; límites están en validadores propuestos pero no probados.

**Prueba falsable pendiente:** Revisión de política de nodos/profundidad y comportamiento fail-closed sin ejecutar bajo el NO-GO.

**Prioridad:** P0; **referencias:** `SCHEMA`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B326 — No aceptar un PASS importado de otra rama

**Hallazgo o inferencia:** Un snapshot de PR #12 puede reflejar PR #1 antiguo y parecer válido si se modifica fixture después.

**Prueba falsable pendiente:** Matriz base/head de cada manifest de evidencia; invalidación automática futura ante mismatch de revisiones.

**Prioridad:** P0; **referencias:** `G`, `SLSA`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B327 — Compromiso de fuente de build sin autoridad de publicación

**Hallazgo o inferencia:** SLSA distingue sujeto build y materiales; aunque en futuro exista provenance atestada, la autorización de publicación sigue otro gate.

**Prueba falsable pendiente:** Checklist `source_integrity` y `publish_authorized` separados y obligatorios.

**Prioridad:** P0; **referencias:** `SLSA`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B328 — Proveniencia dependiente de agentes reales

**Hallazgo o inferencia:** PROV distingue Agent de Activity; la firma de un robot no representa una aprobación humana delegada no producida.

**Prueba falsable pendiente:** No insertar nombres de revisores/sello de aceptación en objetos cuando faltan sus actas.

**Prioridad:** P0; **referencias:** `PROV`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B329 — Ejecutable de QA contaminado por su propia fuente

**Hallazgo o inferencia:** Un validador y su baseline derivados del mismo archivo pueden compartir defecto sistemático; coincidencia documental 18 grupos es limitada.

**Prueba falsable pendiente:** Plan de oracle externo con inputs obtenidos independientemente, no copia circular del fixture.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B330 — Revisión de seguridad de etiquetas de evidencia

**Hallazgo o inferencia:** Una fuente que incluye texto no confiable (artículo/comentario externo) no debe modificar políticas o instrucciones de ejecución por aparecer en una descripción.

**Prueba falsable pendiente:** Diseñar separación de contenido citado vs instrucciones del controlador y rechazo de cambios de gates inducidos por texto externo.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AA — Ejecución cualificada, fallos y cadena de custodia

### B331 — Límite de tiempo condicionado a terminación real

**Hallazgo o inferencia:** Un watchdog no cumple E5B4D si retorna antes de 120 s y quedan descendientes relevantes vivos o sin confirmación.

**Prueba falsable pendiente:** Criterio formal: terminar y confirmar cada proceso relevante estrictamente antes del deadline; bajo M sigue NO-GO.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B332 — No confundir stdout capturado con bytes emitidos

**Hallazgo o inferencia:** El truncado posterior conserva sólo bytes aceptados por collector; puede ocultar emisión superior al límite.

**Prueba falsable pendiente:** Especificar dos métricas emitido/aceptado por stdout y stderr, sin declarar observado.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B333 — Tratamiento de arranque de subprocesos colaterales

**Hallazgo o inferencia:** Un renderer futuro puede lanzar codecs y herramientas externas; cuentan como procesos relevantes bajo Política B salvo justificación formal.

**Prueba falsable pendiente:** Inventario a priori de árbol de procesos y obligaciones de terminación, sin arrancarlos ahora.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B334 — Pérdida de observabilidad no es terminación confirmada

**Hallazgo o inferencia:** Si un agente se desconecta del árbol de procesos no puede declarar que todos terminaron.

**Prueba falsable pendiente:** Estado UNKNOWN/NO-GO; prohibir convertir desaparición de señal en CONFIRMED.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B335 — Reportes reintentados no suman evidencia independiente

**Hallazgo o inferencia:** Repetir un job con mismo entorno puede reproducir un defecto, y contar intentos no equivale a replicación por mecanismo distinto.

**Prueba falsable pendiente:** Registrar intento, entorno y causa; no generar porcentajes de PASS con specs no ejecutadas.

**Prioridad:** P1; **referencias:** `G`, `SLSA`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B336 — Fuentes y herramientas congeladas antes del build

**Hallazgo o inferencia:** SLSA materials y builder identity sirven de base a un futuro artefacto, pero la propuesta actual solo aporta commits fuente.

**Prueba falsable pendiente:** Futuro manifest identifica digest de toolchain, asset y entrada; no declarar SLSA nivel logrado.

**Prioridad:** P0; **referencias:** `SLSA`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B337 — Integridad de outputs secundarios

**Hallazgo o inferencia:** Un futuro MP4 y sus captions pueden desalinearse si se entrega solo el vídeo o se edita subtítulo después.

**Prueba falsable pendiente:** Cada export versiona y conserva pares de archivo, idiomas y evento, con checksums independientes.

**Prioridad:** P0; **referencias:** `SLSA`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B338 — Revisión de rollback editorial sin aprobar viejo artefacto

**Hallazgo o inferencia:** Volver al plan 45s sin ALT-A puede reintroducir T11 desde un estado técnico no visible y problemas del corte anterior.

**Prueba falsable pendiente:** Ante rollback, recalcular lista de blockers; baseline anterior no hereda aprobación retroactiva.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B339 — Prueba de propiedades no autoriza ejecución prohibida

**Hallazgo o inferencia:** Especificar metamorphic checks o amenazas en texto no implica permiso de running, aunque sean simples o aisladas.

**Prueba falsable pendiente:** Toda tarea que requiera ejecutar código se marca EXTERNAL_GATE_REQUIRED y no se hace en esta fase.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B340 — Cadena de custodia a través de plataformas

**Hallazgo o inferencia:** Incluso si un MP4 se firma con C2PA, la plataforma puede transformarlo; la procedencia downstream necesita observación.

**Prueba falsable pendiente:** No atribuir firma del original al upload transcodificado sin inspeccionar su manifest final.

**Prioridad:** P1; **referencias:** `C2PA`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AB — Estudio IVV, comprensión y garantías de privacidad

### B341 — La muestra de novatos requiere definición operativa

**Hallazgo o inferencia:** Un panel «principiante» sin criterio previo puede incluir ajedrecistas con exposición al episodio, sesgando reconocimiento de hechos.

**Prueba falsable pendiente:** Elegibilidad preinscrita por experiencia, exposición previa y capacidad de leer coordenadas, sin reclutar hoy.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B342 — Familiaridad con la partida como covariable

**Hallazgo o inferencia:** Alguien que conoce Byrne–Fischer puede acertar T06/T11 pese a vídeo confuso, mezclando memoria y comprensión.

**Prueba falsable pendiente:** Registrar familiaridad antes de mostrar estímulo y predefinir análisis separado; datos minimizados.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B343 — Confusión T07 en visualización muda

**Hallazgo o inferencia:** La etiqueta REGRESO A LA PARTIDA REAL puede aparecer aunque el espectador no note que tablero restauró V-P1.

**Prueba falsable pendiente:** Pregunta obliga a identificar momento del retorno y jugada real posterior, no solo leer rótulo.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B344 — Intervalos de confianza frente a promedios engañosos

**Hallazgo o inferencia:** Dos grupos pequeños 45/60 pueden diferir aleatoriamente; una diferencia porcentual sin precisión no acredita ventaja.

**Prueba falsable pendiente:** Preinscribir medida, unidad, tamaño de muestra y regla de inconclusión antes de observar resultados.

**Prioridad:** P1; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B345 — Consentimiento inequívoco y separado

**Hallazgo o inferencia:** La AEPD excluye casillas preseleccionadas e inacción y exige consentimiento informado, revocable y acreditable cuando sea base jurídica.

**Prueba falsable pendiente:** Plantilla de consentimiento para visionado y tratamiento de respuesta separados de alta comercial newsletter.

**Prioridad:** P0; **referencias:** `AEPD`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B346 — Menores en una comunidad sobre ajedrez

**Hallazgo o inferencia:** La AEPD identifica régimen específico para menores de 14 años si el tratamiento se basa en consentimiento; estudio adulto evita esa complejidad inicial.

**Prueba falsable pendiente:** Futuro reclutamiento IVV 18+, verificación proporcional y sin almacenamiento innecesario de documentos de identidad.

**Prioridad:** P0; **referencias:** `AEPDM`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B347 — Captura de pantalla del dispositivo del participante

**Hallazgo o inferencia:** Un vídeo del móvil puede recoger identificadores, notificaciones o imagen personal ajena al test de ajedrez.

**Prueba falsable pendiente:** Diseñar ruta de observación minimalista sin grabación de pantalla por defecto; consentimiento separado si fuese esencial.

**Prioridad:** P0; **referencias:** `AEPD`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B348 — Dato de comprensión frente a evaluación de inteligencia

**Hallazgo o inferencia:** Fallar SAN/visualización significa dificultad de contenido para la audiencia, no menor capacidad intelectual del participante.

**Prueba falsable pendiente:** Informe prohíbe etiquetas individuales peyorativas y publica únicamente resultados agregados necesarios.

**Prioridad:** P1; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B349 — Accesibilidad de encuesta de siete preguntas

**Hallazgo o inferencia:** IVV puede tener cuestionario que requiere lectura compleja o interacción difícil, creando errores ajenos al vídeo.

**Prueba falsable pendiente:** Comprobar estructura accesible, orden de teclado y lenguaje de preguntas; no simular participantes.

**Prioridad:** P1; **referencias:** `WAI`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B350 — Condición de parada por contenido engañoso

**Hallazgo o inferencia:** Si un evaluador cree reiteradamente que 17...Qd8 se jugó, el protocolo debe permitir detener exposición y rectificar sin ajustar umbral tras datos.

**Prueba falsable pendiente:** Regla de safety stop preinscrita; clasificar defecto factual aparte de estética.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AC — Derechos, atribución y reutilización de originales

### B351 — Reproducción de facsímil frente a citar bibliografía

**Hallazgo o inferencia:** Un enlace a la revista y número de página no autoriza embebido del escaneo; los derechos del impreso y escaneo pueden requerir evaluación independiente.

**Prueba falsable pendiente:** Archivo release no incluye recortes ni miniaturas de archivo hasta R6 autorizado por activo.

**Prioridad:** P0; **referencias:** `COPY`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B352 — Cuadro de renovación copyright 1956 por edición

**Hallazgo o inferencia:** La circular 15A distingue publicaciones 1950–1963 y efectos de la renovación; no determina por sí misma si este volumen fue renovado.

**Prueba falsable pendiente:** Buscar expediente concreto de revista y componentes bajo titularidad separada antes de determinar dominio público.

**Prioridad:** P0; **referencias:** `COPY`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B353 — Crédito histórico no sustituye licencia de uso

**Hallazgo o inferencia:** Atribuir al autor del artículo no concede derechos de reproducción comercial de la imagen o texto extenso.

**Prueba falsable pendiente:** Ficha exige base autorizante y alcance de usos, no solo un nombre en descripción.

**Prioridad:** P0; **referencias:** `COPY`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B354 — Riesgos de derivar piezas desde glyphs conocidos

**Hallazgo o inferencia:** La geometría declarada «original» puede inadvertidamente asemejarse a set de piezas protegido; afirmarlo original sin análisis externo sería prematuro.

**Prueba falsable pendiente:** Comparación de procedencia, autoría y fuentes de inspiración por diseño final y revisores.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B355 — Incorporación de OFL de Noto Sans

**Hallazgo o inferencia:** Que una familia use SIL OFL no identifica pesos, binarios ni avisos de licencia del archivo final.

**Prueba falsable pendiente:** Seleccionar archivo/version/hash y términos antes de salida, sin redistribuir fuente por accidente.

**Prioridad:** P0; **referencias:** `N`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B356 — Licencias separadas por formato eBook

**Hallazgo o inferencia:** Un gráfico permitido para vídeo no necesariamente puede distribuirse en libro descargable; la protección de assets es por soporte.

**Prueba falsable pendiente:** Matriz de rights_scope: MP4, PNG, EPUB, PDF, newsletters, thumbnails y territorios.

**Prioridad:** P0; **referencias:** `G`, `EPUB`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B357 — Metadatos de accesibilidad veraces en EPUB

**Hallazgo o inferencia:** EPUB Accessibility 1.1 exige metadatos de accesibilidad; declararlos sin alternativas reales sería una afirmación falsa.

**Prueba falsable pendiente:** No escribir accessModeSufficient textual si diagramas complejos carecen de descripción útil verificada.

**Prioridad:** P1; **referencias:** `EPUB`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B358 — Retirada de un asset ante revocación de derechos

**Hallazgo o inferencia:** La pérdida de licencia de una foto usada en múltiples outputs requiere mapa de dependencias y proceso de corrección.

**Prueba falsable pendiente:** Ledger asset→export con capacidad de localizar cada publicación afectada; todavía sin publicación.

**Prioridad:** P1; **referencias:** `G`, `PREMIS`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B359 — Privacidad de manuscritos inéditos

**Hallazgo o inferencia:** Acceso de investigador a colección no implica derecho de publicación de documentos privados/autoría ajena.

**Prueba falsable pendiente:** Registrar condiciones de sala/copia/publicación del repositorio custodio antes de solicitar escaneos.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B360 — C2PA no es contrato de licencia

**Hallazgo o inferencia:** Una fotografía con credenciales de origen firmadas puede seguir sujeta a copyright; confianza técnica y permiso jurídico son ejes distintos.

**Prueba falsable pendiente:** Manifest R6 valida licencia y autorización aunque archivo tenga C2PA válido.

**Prioridad:** P0; **referencias:** `C2PA`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AD — Diferenciación del canal y criterio de salida comercial

### B361 — Conjunto de episodios distinto de plantilla repetida

**Hallazgo o inferencia:** YouTube aclaró en julio de 2025 su regla de contenido inauténtico producido en masa, aplicable con independencia de IA.

**Prueba falsable pendiente:** Antes de monetizar, revisar que cada historia añade análisis editorial original documentado y no solo cambia nombres/FEN.

**Prioridad:** P0; **referencias:** `YT`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B362 — Sello de autenticación que no prometa verdad total

**Hallazgo o inferencia:** Un sello «verificado» sin ámbito induce a creer que la reconstrucción, derechos y fecha están certificados a la vez.

**Prueba falsable pendiente:** Por soporte usar categorías explícitas: fuentes cotejadas, legalidad cualificada, IVV aprobada, no etiqueta global.

**Prioridad:** P0; **referencias:** `G`, `PROV`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B363 — A/B de miniaturas sin falsificar la hipótesis

**Hallazgo o inferencia:** Titular «Fischer perdió su dama» puede ser atractivo pero oculta el contexto; A/B debe estar dentro de claims admisibles.

**Prueba falsable pendiente:** Solo comparar portadas auditadas, todas con misma verdad histórica y clasificación de variaciones.

**Prioridad:** P1; **referencias:** `YT`, `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B364 — Estrategia de correcciones públicas verificables

**Hallazgo o inferencia:** Si publicación futura contiene error de SAN, corregir en newsletter y redes con log visible genera confianza sin ocultar versión previa.

**Prueba falsable pendiente:** Plan de aviso, alcance y reemplazo, pero no crear historial falso de errores publicados.

**Prioridad:** P1; **referencias:** `G`, `PREMIS`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B365 — Contenido gratuito autosuficiente

**Hallazgo o inferencia:** Un Short que diga «la dama fue capturada» debe permitir entender qué pasó; premium añade análisis, no corrige afirmación omitida deliberadamente.

**Prueba falsable pendiente:** Evaluación de comprensión sobre pieza gratuita antes de vender explicación premium.

**Prioridad:** P1; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B366 — Comparación del episodio piloto con segundo caso

**Hallazgo o inferencia:** EP02 Opera Game documentado como fuente candidata puede revelar hardcode EP01, pero no está listo para replicación audiovisual.

**Prueba falsable pendiente:** Diseñar abstracción común sin ejecutar EP02 ni extrapolar potencial comercial de un caso.

**Prioridad:** P1; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B367 — Crisis por fuente histórica contradicha

**Hallazgo o inferencia:** Si el testimonio original diverge, una página de evidencias por episodio puede explicar qué se sabe y qué se suspendió.

**Prueba falsable pendiente:** Redactar esquema de errata/revisión (sin publicar) ligado a historia, no borrar silenciosamente evidencia antigua.

**Prioridad:** P0; **referencias:** `G`, `PROV`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B368 — Diferenciar originalidad de derechos

**Hallazgo o inferencia:** Guion propio no garantiza que música, piezas o fotografías queden autorizadas; identidad creativa y derechos son gates distintos.

**Prueba falsable pendiente:** Antes de release exigir QA editorial original + manifest R6 completo, no elegir uno como sustituto del otro.

**Prioridad:** P0; **referencias:** `G`, `YT`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B369 — No monetizar un render sin examen perceptivo

**Hallazgo o inferencia:** Un MP4 bien codificado puede comunicar falsamente Qd8 como real; retención y CTR no invalidan una falsedad.

**Prueba falsable pendiente:** Gate de publicación obliga a IVV independiente y exactitud por evento antes de métricas de negocio.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B370 — Decisión marginal tras B370

**Hallazgo o inferencia:** Otro bloque genérico sin nueva fuente/acción falsable puede elevar deuda de coordinación más que conocimiento.

**Prueba falsable pendiente:** Tras esta tanda elegir máximo diez verificaciones de capacidad de desbloqueo real; evitar nuevos registros infinitos por inercia.

**Prioridad:** P0; **referencias:** `G`; **estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias verificables

- `G`: Repositorio privado Chess Stories PR #1/#2/#3/#4/#6/#7/#10/#11/#12; issue #8. Declara estados, no certifica ejecución.
- `SCHEMA`: https://json-schema.org/draft/2020-12
- `JCS`: https://www.rfc-editor.org/rfc/rfc8785.html
- `SLSA`: https://slsa.dev/spec/v1.2/provenance
- `PROV`: https://www.w3.org/TR/prov-o/
- `PREMIS`: https://www.loc.gov/standards/premis/v3/
- `AEPD`: https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/5-bases-legitimadoras-del-tratamiento/FAQ-0211-segun-el-rgpd-como-debe-solicitarse-el-consentimiento-de-los-interesados-para-tratar-sus-datos-personales
- `AEPDM`: https://www.aepd.es/preguntas-frecuentes/10-menores-y-educacion/FAQ-1002-se-puede-recabar-y-tratar-datos-personales-de-menores
- `WAI`: https://www.w3.org/TR/WCAG22/
- `EPUB`: https://www.w3.org/TR/epub-a11y/
- `CC`: https://creativecommons.org/licenses/by/4.0/deed.es
- `COPY`: https://www.copyright.gov/circs/circ15a.pdf
- `N`: https://github.com/notofonts/noto-fonts/blob/main/LICENSE
- `YT`: https://support.google.com/youtube/thread/356734251?hl=en&msgid=441516931
- `C2PA`: https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html
- `FIDE`: https://handbook.fide.com/chapter/e012023

## NO-GO

E5B4D NO-GO bajo M; Política B estricta e inalterada: todos los procesos relevantes terminados y confirmados antes de 120 s, límites independientes stdout/stderr **1.048.576 bytes emitidos/aceptados** durante toda la vida; R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, sin ejecución, renders, Actions, merge a main ni publicación.
