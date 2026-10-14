# Chess Stories — investigación B421–B470 (2/2)

**Fecha:** 2026-10-14. Continúa B371–B420 y B1–B370. Cada entrada es hipótesis documental o hallazgo de fuente con verificación futura; NO ejecución, NO estudio humano, NO resultados de audiencia. P0 significa importancia del riesgo; P1 preparación. Las claves externas se indican al final.

## AJ — Subtítulos, audiodescripción y arquitectura inclusiva

### B421 — Pista de captions contiene sonidos relevantes

**Base e interpretación:** WCAG distingue captions del diálogo simple: información sonora significativa debe estar representada cuando hay audio.

**Falsificador o comprobación pendiente:** Si se incorpora efecto de captura, caption futura lo describe sin inventar sonido real del torneo.

**Prioridad:** P1. **Referencias:** `CAP`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B422 — Texto de realidad incrustado separado de captions

**Base e interpretación:** T05/T06 requiere HIPOTÉTICA visible aun con subtítulos opcionales desactivados; ambos flujos no son sustituibles.

**Falsificador o comprobación pendiente:** Future video sin pista caption conserva aviso durante todo frame alternativo, comprobado por dispositivo.

**Prioridad:** P0. **Referencias:** `WCAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B423 — Audiodescripción no narra la pieza técnica

**Base e interpretación:** El lector de pantalla o una audiodescripción podría inferir que V-PRE-EV2 aparece aunque ALT-A no lo enseña.

**Falsificador o comprobación pendiente:** Redactar pista de descripción únicamente sobre tableros visibles V-REAL/V-EV2 y salto temporal.

**Prioridad:** P0. **Referencias:** `WCAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B424 — No duplicar voz y letras sin propósito

**Base e interpretación:** La revisión de redundancia muestra efectos diferentes al duplicar narración y texto; la advertencia legal de rama sí es una redundancia necesaria.

**Falsificador o comprobación pendiente:** Reducir texto accesorio sin eliminar HIPOTÉTICA; diferenciar condición audio/sin audio en IVV.

**Prioridad:** P1. **Referencias:** `RED`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B425 — Timing WebVTT de avisos con solape

**Base e interpretación:** Los cues WebVTT admiten solapes y posiciones; un caption de captura puede cubrir el aviso durante T06.

**Falsificador o comprobación pendiente:** Comprobar región, orden de cues y prioridad visual por frame futuro, no validar solo sintaxis de VTT.

**Prioridad:** P0. **Referencias:** `WEBVTT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B426 — Lectura audible de coordenadas y cambio de contexto

**Base e interpretación:** Una voz que dice «dama a d8» sin «en la línea no jugada» da un mensaje falso a personas sin visión del rótulo.

**Falsificador o comprobación pendiente:** Antes de la notación alternativa exigir frase oral inequívoca «supongamos que», no impersonación del jugador.

**Prioridad:** P0. **Referencias:** `G`, `WCAG`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B427 — Movimiento de imágenes y alternativa reducida

**Base e interpretación:** Efectos intensos de rebobinado pueden distraer; variante de movimiento reducido es hipótesis de diseño no resultado medido.

**Falsificador o comprobación pendiente:** Definir cut alternativo con mismos rótulos y eventos, analizar comprensión e incomodidad en muestra elegible.

**Prioridad:** P1. **Referencias:** `WCAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B428 — Foco de interfaz en reproductor interactivo

**Base e interpretación:** Si el futuro episodio permite pausar por evento, cada foco debe comunicar nombre y estado factual con teclado.

**Falsificador o comprobación pendiente:** Prototipo futuro cumple navegación, etiquetas y orden de foco antes de cualquier web interactiva.

**Prioridad:** P1. **Referencias:** `WCAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B429 — Contraste sobre pieza resaltada en d1

**Base e interpretación:** Un halo amarillo puede desdibujar el caballo negro, especialmente en compresión móvil.

**Falsificador o comprobación pendiente:** Prueba de reconocimiento de color/pieza sobre fondo claro y oscuro con captura real de export.

**Prioridad:** P0. **Referencias:** `WCAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B430 — Fallback transcripción accesible completa

**Base e interpretación:** Una transcripción plana que enumere 25...Nxd1 sin mención de 14 plies omitidos reinterpreta la historia.

**Falsificador o comprobación pendiente:** Documento accesible separado debe contener transiciones de rama, omisiones y cierre editorial, con QA.

**Prioridad:** P0. **Referencias:** `WCAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AK — Medición de distribución con denominadores y recorrido verificables

### B431 — Shorts `views` actualizadas no son engaged views

**Base e interpretación:** YouTube anunció que desde marzo 2025 una vista de Short se cuenta al iniciar reproducción/repetición; las engaged views mantienen definición anterior.

**Falsificador o comprobación pendiente:** Toda serie temporal de métricas marca fecha de cambio y no compara vistas brutas con engaged views.

**Prioridad:** P0. **Referencias:** `YT`, `API`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B432 — Reproducción en bucle infla oportunidades sin comprensión

**Base e interpretación:** La métrica de vistas puede contar replay, sin implicar que alguien interpretó correctamente la rama hipotética.

**Falsificador o comprobación pendiente:** Definir exposición reproducida y pregunta IVV como métricas separadas; nunca tomar views como aprendizaje.

**Prioridad:** P0. **Referencias:** `YT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B433 — YPP depende de engaged views según anuncio 2025

**Base e interpretación:** El anuncio oficial señala que ingresos/elegibilidad de Shorts continúan basados en engaged views, no automáticamente en nuevo contador bruto.

**Falsificador o comprobación pendiente:** Revisar condiciones vigentes al publicar y almacenar indicador real, no proyectar ingresos desde views nuevas.

**Prioridad:** P0. **Referencias:** `YT`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B434 — Short relacionado condicionado al acceso avanzado

**Base e interpretación:** La ayuda de YouTube indica que añadir un vídeo relacionado está restringido a acceso de funciones avanzadas.

**Falsificador o comprobación pendiente:** No diseñar embudo obligatorio basado en botón sin comprobar función activa en cuenta del canal.

**Prioridad:** P1. **Referencias:** `RELATED`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B435 — Vídeo relacionado debe ser del mismo canal

**Base e interpretación:** Según la ayuda oficial el vídeo vinculado es de ese canal y está público o no listado y conforme a normas.

**Falsificador o comprobación pendiente:** No prometer enlace navegable a newsletter externo mediante función que admite otra pieza del canal.

**Prioridad:** P1. **Referencias:** `RELATED`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B436 — Metadatos Clip vs SeekToAction en web propia

**Base e interpretación:** Google Search Central distingue Clip manual de SeekToAction automático para momentos clave en páginas con VideoObject.

**Falsificador o comprobación pendiente:** No afirmar aparición de capítulos en buscador ni indexación sin URL propia, markup válido y comprobación pública.

**Prioridad:** P1. **Referencias:** `VIDEO`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B437 — Segmento T11 como key moment condicionado a factualidad

**Base e interpretación:** Un momento de búsqueda rotulado «mate final» sería falso porque el corte termina en ply50.

**Falsificador o comprobación pendiente:** Solo registrar en futura web un key moment «captura tras elipsis» cuando media real y metadatos estén aprobados.

**Prioridad:** P0. **Referencias:** `VIDEO`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B438 — Attribution por enlace sin consentimiento de tracking implícito

**Base e interpretación:** Medir visitas a newsletter no autoriza crear perfiles individuales que no sean necesarios para finalidad editorial.

**Falsificador o comprobación pendiente:** Diseñar métricas de agregados y consentimiento cuando corresponda; separar clics de inscripción verificable.

**Prioridad:** P0. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B439 — CTR alto con comprensión falsa sigue siendo defecto

**Base e interpretación:** Un hook puede elevar clics porque promete que la partida termina en mate al capturar torre; éxito de marketing no subsana falsedad.

**Falsificador o comprobación pendiente:** Gate de calidad prioriza comprensión factual y derechos antes de seleccionar variación por CTR.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B440 — Resultados por superficie no son ensayo aleatorio

**Base e interpretación:** Shorts, Reels y TikTok tienen audiencias y distribución distintas; comparar retención cruda entre ellas no identifica causalidad de edición.

**Falsificador o comprobación pendiente:** Evitar atribuciones fuertes sin intervención controlada y denominadores comparables; registrar segmentación y periodo.

**Prioridad:** P1. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AL — Correcciones, retractaciones parciales y versiones públicas

### B441 — Corrección no elimina edición original de historial

**Base e interpretación:** Crossmark informa de updates y correcciones de registros; el principio útil es preservar qué versión consumió el lector.

**Falsificador o comprobación pendiente:** Proponer ledger de release_version y notice separado; aún no publicado ni miembro Crossref.

**Prioridad:** P1. **Referencias:** `CROSS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B442 — No simular DOI de obra privada en draft

**Base e interpretación:** Crossref describe DOI diferentes para versiones públicas significativas, no exige ni habilita crear DOI de un borrador privado.

**Falsificador o comprobación pendiente:** Usar IDs internos de episodio mientras no exista obra publicada o servicio DOI formal.

**Prioridad:** P1. **Referencias:** `CROSSUP`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B443 — Advertencia de evidencia no es retractación de resultado

**Base e interpretación:** Una discrepancia en planilla original puede requerir corrección del método de finalización, no necesariamente cambiar 0–1.

**Falsificador o comprobación pendiente:** Diseñar taxonomía notice_terminal_vs_result, con referencia a evidencia nueva y ámbito.

**Prioridad:** P0. **Referencias:** `G`, `CROSS`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B444 — Archivo de miniaturas obsoletas

**Base e interpretación:** Una portada retirada puede persistir en caches/redes; ocultar la publicación no elimina automáticamente capturas externas.

**Falsificador o comprobación pendiente:** Registrar asset_id y versión de metadatos por fecha para explicar límites de corrección después de publicar.

**Prioridad:** P1. **Referencias:** `G`, `PROV`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B445 — Aviso de cambio significativo vs corrección tipográfica

**Base e interpretación:** Crossref trata como status update cambios que alteran interpretación, no ajustes triviales de formato.

**Falsificador o comprobación pendiente:** Si se descubre que Qd8 fue rotulado REAL, un notice sustantivo es necesario; corregir tilde aislada no es el mismo riesgo.

**Prioridad:** P0. **Referencias:** `CROSSUP`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B446 — Derecho de autor y error histórico son avisos distintos

**Base e interpretación:** Retirar una foto por licencia no implica que la notación SAN sea falsa; una corrección factual no prueba permiso de imagen.

**Falsificador o comprobación pendiente:** Sistema de notices separa RIGHTS_REMEDIATION de HISTORICAL_CORRECTION y MEDIA_ACCESSIBILITY_FIX.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B447 — Asociar update con audiencia efectivamente expuesta

**Base e interpretación:** Una corrección solo enviada a newsletter no garantiza que espectadores Shorts la encuentren.

**Falsificador o comprobación pendiente:** Inventario por superficies y punto de aviso que no prometa cobertura perfecta sin métricas reales.

**Prioridad:** P1. **Referencias:** `G`, `CROSS`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B448 — Versionar la evidencia externa sin sobreescribir el testigo

**Base e interpretación:** Dublin Core `modified` y `provenance` ayudan a documentar cambios del registro, no autorizar editar facsímil.

**Falsificador o comprobación pendiente:** Conservar identidades de fuente e inspecciones y añadir revisión nueva, sin alterar transcripción congelada anterior.

**Prioridad:** P0. **Referencias:** `DCMI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B449 — Retirar claims afectados por revisión nueva

**Base e interpretación:** Si se desautoriza atribución de mate original, un guion debe poder retirar solo ese claim sin reescribir hechos independientes.

**Falsificador o comprobación pendiente:** Grafo future claim_id→metadata/video/newsletter identifica outputs afectados; no atribuir permisos previos.

**Prioridad:** P0. **Referencias:** `PROV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B450 — No usar sello Crossmark sin adhesión

**Base e interpretación:** Crossmark es un servicio de miembros con política de actualizaciones y DOI; citarlo como modelo no equivale a disponer del sello.

**Falsificador o comprobación pendiente:** No insertar badge/logo ni afirmar adhesión del canal al programa sin alta y obligaciones cumplidas.

**Prioridad:** P0. **Referencias:** `CROSS`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AM — Privacidad operativa y newsletter como producto de investigación

### B451 — Consentimiento al estudio y al marketing son finalidades separadas

**Base e interpretación:** Las directrices EDPB exigen consentimiento específico por finalidad; participar en IVV no autoriza boletín de ventas.

**Falsificador o comprobación pendiente:** Diseñar dos registros jurídicos y evitar casilla conjunta «estudio + ofertas».

**Prioridad:** P0. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B452 — Prueba de consentimiento necesita versión exacta del aviso

**Base e interpretación:** La evidencia de consentimiento debe indicar qué información se proporcionó, no solo fecha de clic.

**Falsificador o comprobación pendiente:** Future ledger con copy_version, finalidad, método y revocación, minimizado y protegido; sin recolectar ahora.

**Prioridad:** P0. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B453 — Revocación debe ser practicable

**Base e interpretación:** Las directrices consideran la retirada del consentimiento en cualquier momento, sin perjuicio y con facilidad comparable.

**Falsificador o comprobación pendiente:** Flujo de baja comprobado por canal y ausencia de reutilización posterior para el fin revocado.

**Prioridad:** P0. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B454 — Lista de supresión frente a eliminación de todo rastro

**Base e interpretación:** Evitar contacto a personas dadas de baja puede exigir registro mínimo de supresión según base y circunstancias jurídicas aplicables.

**Falsificador o comprobación pendiente:** Diseñar separación de supresión operativa y respuestas IVV, con revisión jurídica real antes de implementar.

**Prioridad:** P0. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B455 — No convertir error del ajedrez en perfil psicológico

**Base e interpretación:** Resultados IVV de lectura difícil no justifican almacenar etiquetas sobre capacidad cognitiva o nivel personal permanente.

**Falsificador o comprobación pendiente:** Mantener solo cohorte necesaria y respuestas anonimizadas/agregadas si es viable; revisar conservación.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B456 — Retención de emails de no inscritos

**Base e interpretación:** Un formulario abandonado no crea suscriptor activo ni consentimiento a newsletter; reducir almacenamiento accidental.

**Falsificador o comprobación pendiente:** Prueba futura de expiración/borrado de intentos incompletos, sin asumir que cada clic es lead válido.

**Prioridad:** P0. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B457 — Exportar audiencia propia sin reimportar bajas

**Base e interpretación:** Cambiar proveedor implica conservar limitaciones del consentimiento original; base exportada puede contener contactos revocados.

**Falsificador o comprobación pendiente:** Ensayo de migración ficticio con supresión intacta y consent version sin usar datos reales ahora.

**Prioridad:** P0. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B458 — Seguimiento por UTM no es identidad personal segura

**Base e interpretación:** Parámetros de origen sirven para agregados, pero asociarlos directamente a email eleva el riesgo de seguimiento innecesario.

**Falsificador o comprobación pendiente:** Definir separación identificador de campaña y dato personal, con finalidad explícita.

**Prioridad:** P1. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B459 — Promesa de envío premium exige cumplimiento de entrega

**Base e interpretación:** Cobrar newsletter no demuestra que envíos estén llegando; producto requiere fiabilidad, soporte y reembolso definido.

**Falsificador o comprobación pendiente:** Futuro ensayo de entrega en cuentas propias autorizadas, antes de pagar/licenciar publicación.

**Prioridad:** P1. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B460 — Separación editorial de bases de cohortes IVV

**Base e interpretación:** Los emails de evaluadores que valoran la historia no deben mezclarse automáticamente con una lista comercial sobre ajedrez.

**Falsificador o comprobación pendiente:** Dos data stores lógicos, permisos mínimos y auditoría de finalidad antes de cualquier captación.

**Prioridad:** P0. **Referencias:** `EDPB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## AN — Control del backlog e inversión en evidencia real

### B461 — Priorización por capacidad de cambiar un gate

**Base e interpretación:** Tras B470 tener centenares de hipótesis no equivale a progreso probado; criterio útil es qué evidencia haría cambiar NO-GO.

**Falsificador o comprobación pendiente:** Score cualitativo por riesgo, dependencia y probabilidad de obtener evidencia nueva; no ordenar solo por P0.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B462 — Falsificador localizable frente a requisito circular

**Base e interpretación:** «Obtener IVV» como próxima acción es genérico; «identificar T07 en vídeo mudo» produce observación definida.

**Falsificador o comprobación pendiente:** Cada priorización debe exigir predicado observable y objeto real concreto, no otra descripción abstracta.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B463 — Ruta crítica del modelo M previa a renders

**Base e interpretación:** Mientras Política B estricta sea incompatible bajo M, export/render no puede producir un PASS válido aunque existan 100 diseños.

**Falsificador o comprobación pendiente:** Registrar E5B4D como dependencia dominante sin trasladar riesgo al usuario por mera inercia.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B464 — Costo incremental de nueva prueba histórica

**Base e interpretación:** Otro resumen de Winter no sustituye lector original. Acceso legítimo a páginas y dos lectores independientes sí genera clase nueva de evidencia.

**Falsificador o comprobación pendiente:** Distinguir coste de repetir fuentes secundarias del de adquirir testimonio genuino sin violar licencias.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B465 — Deuda de múltiples PR sin integración verificada

**Base e interpretación:** PR #12 pinnea PR #1 y #11; cambios paralelos pueden dejar evidencia textual coherente hoy pero obsoleta mañana.

**Falsificador o comprobación pendiente:** Registrar matriz de revisión entre ramas al cambiar head antes de cualquier fusión autorizada.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B466 — No escalar por cuenta de mutaciones propuestas

**Base e interpretación:** 77 IR y 66 negativos no corridos no prueban salud del router; más mutaciones solo sirven si cubren riesgo distinto.

**Falsificador o comprobación pendiente:** Auditar trazabilidad riesgo→mutación sin inflar denominador de tests ejecutados.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B467 — Reservar esfuerzo para revisión externa de R6

**Base e interpretación:** Una nueva silueta JSON es menos decisiva que identificar la fuente final exacta, licencia y revisor competente.

**Falsificador o comprobación pendiente:** Plan de activos finitos por soporte en vez de producir estilos infinitos sin derechos finalizados.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B468 — Prueba perceptiva como último eslabón, no oráculo

**Base e interpretación:** El público puede entender un vídeo históricamente falso; IVV solo mide percepción y no autentica la partida.

**Falsificador o comprobación pendiente:** Aprobaciones históricas/legalidad y derechos preceden a IVV; no invertir dependencias.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B469 — Stop de investigación saturada

**Base e interpretación:** Una investigación nueva que repite de forma parafraseada B71–B470 sin nueva evidencia/experimento tiene utilidad marginal baja.

**Falsificador o comprobación pendiente:** Aplicar filtro prepublicación de duplicación de hipótesis, no solo duplicado exacto de título.

**Prioridad:** P1. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B470 — Entregable más próximo realmente desbloqueante

**Base e interpretación:** La siguiente unidad de trabajo óptima podría ser plan de acceso a fuente/rights, no una tanda B471–B570 automática.

**Falsificador o comprobación pendiente:** Decisión documentada tras B470 con hipótesis jerarquizadas y bloqueo externo explícito; no declarar producción terminada.

**Prioridad:** P0. **Referencias:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias

- `G`: Private Chess Stories GitHub source PR #1/#3/#4/#6/#7/#11/#12, issue #8. Source state only; not qualified test data.
- `WCAG`: https://www.w3.org/TR/WCAG22/
- `CAP`: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded
- `WEBVTT`: https://www.w3.org/TR/webvtt1/
- `MAYER`: https://doi.org/10.1007/s10648-023-09842-1
- `RED`: https://pmc.ncbi.nlm.nih.gov/articles/PMC10192876/
- `YT`: https://support.google.com/youtube/thread/333869549?hl=en&msgid=344640469
- `API`: https://developers.google.com/youtube/analytics/revision_history
- `RELATED`: https://support.google.com/youtube/answer/14075157?hl=en
- `VIDEO`: https://developers.google.com/search/docs/appearance/structured-data/video
- `CROSS`: https://www.crossref.org/crossmark/
- `CROSSUP`: https://www.crossref.org/documentation/crossmark/version-control-corrections-and-retractions/
- `DCMI`: https://www.dublincore.org/specifications/dublin-core/dcmi-terms/
- `PROV`: https://www.w3.org/TR/prov-o/
- `EDPB`: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_es
- `AEPD`: https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/5-bases-legitimadoras-del-tratamiento/FAQ-0211-segun-el-rgpd-como-debe-solicitarse-el-consentimiento-de-los-interesados-para-tratar-sus-datos-personales
- `C2PA`: https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html

## Condiciones congeladas

E5B4D NO-GO bajo M; Política B intacta: terminación y confirmación de todos los procesos relevantes antes de 120s, stdout/stderr por separado ≤1.048.576 bytes emitidos y aceptados durante toda su vida. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; no pruebas del proyecto, oráculo, renders, Actions, merge a main o publicación.
