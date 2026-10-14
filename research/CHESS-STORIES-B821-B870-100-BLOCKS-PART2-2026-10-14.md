# Chess Stories — Investigación B821–B870 (parte 2/2)

**Fecha:** 14 octubre 2026. Se extiende B771–B820 hasta 100 bloques. Estos son resultados documentales o hipótesis de arquitectura sujetas a comprobación futura. P0 no significa bug demostrado. Las fuentes externas fundamentan normas generales; su aplicación a Chess Stories se señala como inferencia cuando procede.

## BX — Accesibilidad europea del futuro eBook y tienda

### B821 — Ámbito del European Accessibility Act para eBooks

**Observación o inferencia acotada:** La Directiva UE 2019/882 contempla eBooks y software dedicado, entre otros servicios, desde las fechas y condiciones de transposición.

**Falsificador pendiente:** Analizar proveedor, producto, fecha, excepciones y ley española aplicable antes de ofrecer un EPUB en venta.

**Prioridad:** P0. **Fuentes:** `EAA`, `EAC`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B822 — Obligaciones eCommerce distintas de archivo EPUB

**Observación o inferencia acotada:** La accesibilidad de pagos, identificación y compra no se prueba porque un archivo eBook tenga texto alternativo correcto.

**Falsificador pendiente:** Futura auditoría separada de página de producto, checkout, pago, servicio y EPUB.

**Prioridad:** P0. **Fuentes:** `EAA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B823 — Excepción de microempresa condicionada

**Observación o inferencia acotada:** La Directiva contempla un tratamiento específico para microempresas proveedoras de servicios; no puede asumirse sin verificar su definición y aplicación nacional.

**Falsificador pendiente:** Evaluación jurídica de tamaño de empresa/actividad y norma española antes de concluir exención.

**Prioridad:** P0. **Fuentes:** `EAA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B824 — Fixed layout de tablero no preserva por sí mismo lectura accesible

**Observación o inferencia acotada:** W3C trata límites de lectura, navegación, orden y texto en EPUB de maquetación fija; diagramas pueden perder semántica.

**Falsificador pendiente:** Alternativa de EPUB reflowable con descripción estructurada versus fixed layout, evaluadas sobre lectores reales.

**Prioridad:** P0. **Fuentes:** `FXL`, `EPUB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B825 — Metadata de accesibilidad debe corresponder a archivo

**Observación o inferencia acotada:** EPUB Accessibility 1.1 contempla accessMode, accessibilityFeature y otras declaraciones; escribir etiquetas no hace accesible el producto.

**Falsificador pendiente:** Completar metadatos desde QC de EPUB final, no desde aspiraciones del backlog.

**Prioridad:** P0. **Fuentes:** `EPUB`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B826 — Tablero no descrito en EPUB es contenido incompleto

**Observación o inferencia acotada:** Una pieza o flecha puede portar información causal indispensable para comprender 25...Nxd1.

**Falsificador pendiente:** Proponer transcripción por posiciones y eventos con orientación, pieza, destino y condición factual.

**Prioridad:** P0. **Fuentes:** `WAI`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B827 — La protección DRM no debe bloquear asistencia

**Observación o inferencia acotada:** La Directiva contempla que la gestión digital de derechos no impida funciones de accesibilidad en eBooks.

**Falsificador pendiente:** Revisar DRM de marketplace elegido y lector de pantalla real antes de lanzar producto.

**Prioridad:** P0. **Fuentes:** `EAA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B828 — Lectura sincronizada texto-audio como caso distinto

**Observación o inferencia acotada:** Cuando eBook incorpora audio además de texto, la Directiva establece requisitos específicos sobre sincronización.

**Falsificador pendiente:** No reutilizar narración Short como audio de eBook sin plan de sincronía y derechos propios.

**Prioridad:** P1. **Fuentes:** `EAA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B829 — Test comercial para consumidor fuera de España

**Observación o inferencia acotada:** Una tienda accesible en escritorio español puede fallar en otro idioma, método de pago o móvil.

**Falsificador pendiente:** Plan futuro por mercados efectivamente vendidos, con reporte separado por locale y dispositivo.

**Prioridad:** P1. **Fuentes:** `EAA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B830 — Accesibilidad del producto no supone derechos libres

**Observación o inferencia acotada:** Un eBook técnicamente accesible podría contener facsímiles históricos no autorizados.

**Falsificador pendiente:** Dos aprobaciones independientes: eBook usable y R6 de cada material reutilizado.

**Prioridad:** P0. **Fuentes:** `EAA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BY — Analítica de Shorts, denominadores y evidencia comercial

### B831 — Nueva métrica Shorts views del 31 de marzo de 2025

**Observación o inferencia acotada:** YouTube cuenta reproducciones y repeticiones sin mínimo de tiempo desde 31-03-2025; la serie histórica no es homogénea sin ajuste.

**Falsificador pendiente:** Etiquetar rupturas metodológicas en dashboards futuros y no comparar directamente ambos periodos.

**Prioridad:** P0. **Fuentes:** `YT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B832 — Engaged views sigue separado de plays

**Observación o inferencia acotada:** YouTube conserva engaged views para quienes deciden seguir viendo; la variable no es lo mismo que impresiones o starts.

**Falsificador pendiente:** Usar nombre técnico y fuente de cada métrica, no denominar indistintamente «audiencia».

**Prioridad:** P0. **Fuentes:** `YT`, `YTA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B833 — Ingresos YPP no previstos por starts

**Observación o inferencia acotada:** El anuncio oficial indica que elegibilidad e ingresos Shorts seguirían usando engaged views; más starts no implican mismo incremento en pagos.

**Falsificador pendiente:** Simular escenarios únicamente tras comprobar términos y métricas actuales de la cuenta, sin cifras inventadas.

**Prioridad:** P0. **Fuentes:** `YT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B834 — Fuga entre reproducción y visita al perfil

**Observación o inferencia acotada:** Una CTA narrada puede generar atención pero los enlaces de descripción/comentarios Shorts no son clicables.

**Falsificador pendiente:** Instrumentar paso perfil→enlace sólo con plataforma/cuenta autorizada y privacidad aplicable.

**Prioridad:** P0. **Fuentes:** `YTL`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B835 — Conversión no identificable desde visitas agregadas

**Observación o inferencia acotada:** Un lector puede suscribirse por otra fuente; atribuir toda alta al Short sin datos produce sobreestimación.

**Falsificador pendiente:** Separar reach, engaged view, profile visit, click, sign-up confirmado y suscriptor retenido.

**Prioridad:** P0. **Fuentes:** `YTA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B836 — Retención no es aprendizaje de ajedrez

**Observación o inferencia acotada:** Un Short viral puede transmitir falsamente que Qd8 se jugó; la métrica de permanencia no valida comprensión.

**Falsificador pendiente:** Gate factual IVV independiente de crecimiento de vistas o CTR.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B837 — Rendimiento por locale mezclado con dispositivo

**Observación o inferencia acotada:** Un idioma puede atraer audiencias con diferente conexión y UI; tasas agregadas mezclan efectos y sesgos.

**Falsificador pendiente:** Segmentar por idioma, plataforma y periodo cuando haya muestra suficiente, sin atribución causal improvisada.

**Prioridad:** P1. **Fuentes:** `YTA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B838 — Experimento de portada exige igualdad de veracidad

**Observación o inferencia acotada:** Dos miniaturas con distinto número de piezas o mate ficticio no son tratamientos éticamente comparables.

**Falsificador pendiente:** Filtrar todas las versiones contra claims de EP01 antes de testar interés.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B839 — Desuscripción reduce audiencia propia efectiva

**Observación o inferencia acotada:** Captar email no equivale a relación estable; medir solo gross subscribers oculta bajas y fallos de entrega.

**Falsificador pendiente:** Registro futuro de nuevos activos, bajas, quejas y entregabilidad agregada.

**Prioridad:** P1. **Fuentes:** `GDPR`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B840 — No usar datos personales sin finalidades claras

**Observación o inferencia acotada:** Relacionar IDs de espectadores con correo de pago por conveniencia analítica requiere base jurídica, transparencia y minimización.

**Falsificador pendiente:** Diseñar panel de agregados sin cookies identificables salvo necesidad y fundamento jurídico revisado.

**Prioridad:** P0. **Fuentes:** `GDPR`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BZ — Investigación de derechos por objeto del expediente original

### B841 — Búsqueda de renovación con variantes editoriales

**Observación o inferencia acotada:** El catálogo estadounidense puede indexar revista, título abreviado, editorial o titular; un solo término negativo es insuficiente.

**Falsificador pendiente:** Registro de búsquedas US Copyright Office, alcance temporal y páginas consultadas, no resultado legal presunto.

**Prioridad:** P0. **Fuentes:** `USC`, `USCR`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B842 — Número de revista y fotos como obras diferenciables

**Observación o inferencia acotada:** El copyright de la edición colectiva no cubre automáticamente con igual titularidad cada fotografía o texto.

**Falsificador pendiente:** Expediente R6 por contribución y soporte, incluidos recortes, portada y diagramas.

**Prioridad:** P0. **Fuentes:** `USCR`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B843 — Catalogar ejemplar no significa disponer de licencia

**Observación o inferencia acotada:** El PDF de la colección del World Chess Hall of Fame documenta una revista; no concede implícitamente copia digital comercial.

**Falsificador pendiente:** Solicitar condiciones de acceso/reproducción a custodio competente si el flujo futuro lo requiere.

**Prioridad:** P0. **Fuentes:** `MUSEUM`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B844 — Permiso de transcripción distinto del de fotografía

**Observación o inferencia acotada:** Una lectura literal breve de jugadas y una reproducción de página pueden implicar necesidades jurídicas distintas.

**Falsificador pendiente:** Mapa de derechos para datos, comentario editorial, facsímil, imagen y traducción.

**Prioridad:** P0. **Fuentes:** `G`, `USCR`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B845 — Fuente usada internamente y fuente publicada no coinciden

**Observación o inferencia acotada:** Un recorte no autorizado podría servir como referencia privada bajo condiciones concretas sin entrar en thumbnail o libro.

**Falsificador pendiente:** Registro de `internal_research_use` y `public_redistribution_use` por objeto, sin promover uno a otro.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B846 — Cadena de licencia de iconos de ajedrez

**Observación o inferencia acotada:** Un vector «redibujado» desde símbolo ajeno no se vuelve automáticamente clean-room por cambiar color o trazo.

**Falsificador pendiente:** Documentar creación, referencia visual, autoría, licencias y revisión del arte final.

**Prioridad:** P0. **Fuentes:** `G`, `SPDX`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B847 — SPDX identifica licencias, no derechos del conjunto

**Observación o inferencia acotada:** Un identificador SPDX ayuda a declarar licencia de componente; no verifica licencia genuina del archivo descargado.

**Falsificador pendiente:** Asociar licencia exacta, archivo, hash y titular al producto final antes de marcar R6.

**Prioridad:** P0. **Fuentes:** `SPDX`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B848 — Sin música no autoriza efectos auditivos ocultos

**Observación o inferencia acotada:** Un MP4 silencioso candidato puede introducir SFX en export posterior, reabriendo derechos aunque guion siga igual.

**Falsificador pendiente:** Lista efectiva de pistas/streams por archivo con origen de cada recurso, no confiando en diseño source-only.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B849 — Acceso restringido a manuscritos y confidencialidad

**Observación o inferencia acotada:** Permiso de sala o lectura no equivale a publicación de originales posiblemente no difundidos.

**Falsificador pendiente:** Separar acuerdos con archivo, derechos de autor y confidencialidad/política de reproducción.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B850 — Cambio de titular o licencia con el tiempo

**Observación o inferencia acotada:** Una licencia revocada/disputada puede afectar varias salidas; conservar procedencia facilita localizar usos.

**Falsificador pendiente:** Dependencias asset→release y procedimiento de retirada, sin asumir derechos perpetuos no acreditados.

**Prioridad:** P1. **Fuentes:** `G`, `SPDX`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## CA — Riesgo de dependencias, supply chain y evidencia de PR

### B851 — SLSA provenance y veredicto no son lo mismo

**Observación o inferencia acotada:** SLSA define campos de materiales y constructor; acreditar cadena de build no garantiza lógica factual ni derechos.

**Falsificador pendiente:** Separar build provenance de case truth, Policy B y R6 en el registro central.

**Prioridad:** P0. **Fuentes:** `SLSA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B852 — Identidad de versión de herramienta como entrada

**Observación o inferencia acotada:** Un paquete ajedrecístico puede cambiar legalidad o API entre releases; depender de latest crea reproducibilidad incierta.

**Falsificador pendiente:** Futuro lock de versión/digest y revisión de changelog, sin instalar hoy.

**Prioridad:** P0. **Fuentes:** `G`, `SLSA`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B853 — Base de vulnerabilidades sin escaneo autorizado

**Observación o inferencia acotada:** OSV proporciona información estructurada de vulnerabilidades; consultar servicio no equivale a haber auditado dependencias privadas.

**Falsificador pendiente:** Listar rutas/dependencias futuras y condición de revisión de vulnerabilidades antes de ejecutar.

**Prioridad:** P1. **Fuentes:** `OSV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B854 — Falsos negativos por ecosistema no representado

**Observación o inferencia acotada:** Una dependencia interna o script sin paquete público puede no tener registro OSV, pero seguir siendo riesgoso.

**Falsificador pendiente:** Distinguir `no advisory found` de `verified safe`, manteniendo revisión independiente.

**Prioridad:** P0. **Fuentes:** `OSV`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B855 — PR draft como espacio de investigación y no release

**Observación o inferencia acotada:** Una PR en borrador puede contener especificaciones no ejecutadas, no debe generar automatismos de publicación.

**Falsificador pendiente:** Check explícito `DRAFT_SOURCE_ONLY` y puertas separadas para merge/render/publicación.

**Prioridad:** P0. **Fuentes:** `ISSUE`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B856 — Deriva por re-pinning automático

**Observación o inferencia acotada:** Una PR que observa Git blob antiguo puede apuntar a un caso diferente tras actualización legítima de rama.

**Falsificador pendiente:** Relación por commit exacto y revisión de diffs antes de revalidar snapshot.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B857 — Riesgo de test que usa mismo fixture como oráculo

**Observación o inferencia acotada:** La coincidencia 18/18 de router/case es concordancia documental, no comparación con realidad ajedrecística o histórica.

**Falsificador pendiente:** Una futura prueba de aceptación necesita expected independently obtained, no autocopia del caso.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B858 — Aislamiento de logs frente a datos de lectores

**Observación o inferencia acotada:** Un eventual CI podría imprimir transcripciones primarias o información de participantes que no deben exponerse.

**Falsificador pendiente:** Diseñar error codes mínimos y límites de bytes sin ejecutar procesos hoy.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B859 — Model M bloquea promesas de término estricto

**Observación o inferencia acotada:** Un timeout en wrapper no garantiza matar/confirmar todos descendientes bajo fallos del modelo M.

**Falsificador pendiente:** No ejecutar build/renderer hasta mecanismo formal compatible sin rebajar Política B.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B860 — Decisión humana firmada no sustituida por PR aprobada

**Observación o inferencia acotada:** Revisión de código puede ser competente técnicamente y no en copyright/historia/IVV.

**Falsificador pendiente:** Tipos de signoff por autoridad, objeto y alcance, con no-herencia automática.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## CB — Priorización por valor de información y estrategia de episodio

### B861 — Priorización por test que cambia una decisión

**Observación o inferencia acotada:** Una pregunta útil debe especificar qué observación distinguiría GO de NO-GO o de inconcluso.

**Falsificador pendiente:** Ordenar hipótesis por evidencia nueva factible, no sólo número P0 o cantidad de documentos.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B862 — Aislar bloqueo externo de tarea autónoma realizable

**Observación o inferencia acotada:** Un curator externo no puede ser simulado por el asistente; el repo sí permite preparar hojas y criterios source-only.

**Falsificador pendiente:** En tracker separar SOURCE_PREPARED de EXTERNAL_REVIEW_REQUIRED y WAITING_EXECUTION_GATE.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B863 — Acceso al original antes de completar guion final

**Observación o inferencia acotada:** Si el manuscrito original difiere de la edición, es mejor ajustar claim antes de producir varios vídeos.

**Falsificador pendiente:** Ruta crítica: testigo → dictamen histórico → guion → rights/render → IVV, sin fechas ficticias.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B864 — Un solo episodio publicable no es escala probada

**Observación o inferencia acotada:** La eventual validación de EP01 no demuestra que EP02 y serie internacional tengan mismas fuentes, costes o audiencia.

**Falsificador pendiente:** Criterios de replicación por episodio con nuevo R6/caso y pruebas de calidad propias.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B865 — Experimentos pedagógicos no sustituyen distribución

**Observación o inferencia acotada:** Un estudio de comprensión pequeño no pronostica algoritmo Shorts ni monetización; pruebas de mercado requerirían otra clase de evidencia.

**Falsificador pendiente:** Mantener tablero de producto (engagement) y IVV (verdad) completamente separados.

**Prioridad:** P0. **Fuentes:** `YT`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B866 — Derechos y accesibilidad influyen en margen

**Observación o inferencia acotada:** Versión EPUB accesible y licencias comerciales tienen trabajo independiente del guion; precio premium no equivale a margen.

**Falsificador pendiente:** Estructura de costes por soporte sin afirmar euros hasta cotizaciones y trabajo medido.

**Prioridad:** P1. **Fuentes:** `EAA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B867 — Corrección post-publicación necesita trazabilidad

**Observación o inferencia acotada:** La presencia de un canal para rectificar no permite aprobar contenido falso por adelantado.

**Falsificador pendiente:** Plan release_version, claimed facts y destino de erratas como salvaguarda adicional.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B868 — Finitud del backlog sin rellenar con sinónimos

**Observación o inferencia acotada:** Tras B870 una investigación nueva sólo merece bloque si incorpora observación, fuente o prueba distinguible.

**Falsificador pendiente:** Regla para aceptar B871+: novelty test semántico y beneficio de decisión identificado.

**Prioridad:** P1. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B869 — Matriz de no-hacer bajo autonomía limitada

**Observación o inferencia acotada:** No expandir a otros deportes, publicar, contactar instituciones o activar Actions por inercia; el trabajo de ajedrez conserva límites.

**Falsificador pendiente:** Revisar alcance y gates antes de nuevas acciones externas y cambios materiales.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B870 — Siguiente hito significativo es evidencia independiente

**Observación o inferencia acotada:** Una hoja A/B auténtica, revisión R6 de binario real o garantía formal Policy B aporta más que otro centenar de títulos.

**Falsificador pendiente:** Tras este dossier seleccionar máximo 10 oportunidades con resultados comprobables, marcar indisponibles las dependientes de M.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes trazables

- `G`: Repositorio privado Chess Stories: PR #1/#3/#4/#6/#7/#11/#12 e issue #8, hechos de proyecto declarados no autenticados.
- `EAA`: https://eur-lex.europa.eu/eli/dir/2019/882/oj
- `EAC`: https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en
- `EPUB`: https://www.w3.org/TR/epub-a11y/
- `FXL`: https://www.w3.org/TR/epub-fxl-a11y/
- `WAI`: https://www.w3.org/WAI/tutorials/images/complex/
- `YT`: https://support.google.com/youtube/thread/333869549?hl=en
- `YTA`: https://developers.google.com/youtube/analytics/metrics
- `YTL`: https://support.google.com/youtube/answer/13748639?hl=en
- `GDPR`: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en
- `USC`: https://www.copyright.gov/records/search.html
- `USCR`: https://www.copyright.gov/circs/circ15a.pdf
- `MUSEUM`: https://worldchesshof.org/wp-content/uploads/2025/02/amlvitrine-packetsfinal3.pdf
- `SPDX`: https://spdx.dev/learn/overview/
- `OSV`: https://osv.dev/
- `SLSA`: https://slsa.dev/spec/v1.2/provenance
- `ISSUE`: https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues
- `NDSA`: https://www.ndsa.org/activities/levels-of-digital-preservation/

## Congelación

E5B4D NO-GO bajo M. Política B: todos los procesos relevantes terminados y terminación confirmada **estrictamente antes de 120 s**; stdout/stderr cada uno independiente ≤ **1.048.576 bytes emitidos y aceptados durante toda su vida**. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; NO ejecución, chess engine, tests, renders, Actions, merge main ni publicación.
