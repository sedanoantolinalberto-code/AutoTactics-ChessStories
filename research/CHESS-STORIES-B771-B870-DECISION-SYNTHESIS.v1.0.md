# Chess Stories — Síntesis B771–B870 y siguiente evidencia decisiva

**Fecha:** 2026-10-14. **Ámbito:** solo piloto Chess Stories. **Resultado:** 100 investigaciones documentales, diez áreas BS–CB de diez bloques. **83 P0 / 17 P1**, donde P0 significa riesgo prioritario, no errores confirmados. **Todos los bloques RESEARCHED_DOCUMENTARY_ONLY**, sin test del proyecto, lectura A/B nueva, oráculo ni render.

## Diez líneas específicas

| Bloques | Línea | Consecuencia concreta | Fuente pública relevante |
|---|---|---|---|
| B771–B780 | Custodia OAIS/NDSA | Modelar objeto histórico, rendición y derivado con conservación y responsabilidades diferenciadas | [Fuente](https://www.ndsa.org/activities/levels-of-digital-preservation/) |
| B781–B790 | Perft, FIDE y fuente de jugada | Separar legalidad, secuencia reproducible y autenticación impresa, sin recurrir a motores todavía | [Fuente](https://handbook.fide.com/chapter/e012023) |
| B791–B800 | Prerregistro metodológico IVV | Hacer preguntas observables de factualidad y evitar causalidad falsa 45s/60s | [Fuente](https://www.consort-spirit.org/published-statements) |
| B801–B810 | Color BT.709 y pistas WebVTT | Fijar fuente versus pixels reales, advertencias que no dependen de captions y conformidad por archivo | [Fuente](https://www.itu.int/rec/R-REC-BT.709/en) |
| B811–B820 | Localización bidireccional | Conservar coordenadas SAN como texto LTR dentro de interfaces RTL y revisar modalidad no jugada | [Fuente](https://www.w3.org/TR/international-specs/) |
| B821–B830 | European Accessibility Act y EPUB | Distinguir obligaciones de eBook, tienda, DRM y normas aplicables sin afirmar exenciones automáticas | [Fuente](https://eur-lex.europa.eu/eli/dir/2019/882/oj) |
| B831–B840 | Denominadores de audiencia | Marcar corte de 31-03-2025 y engaged views como medida distinta de inicios/repeticiones | [Fuente](https://support.google.com/youtube/thread/333869549?hl=en) |
| B841–B850 | Derechos del archivo por activo | Documentar renovación, titularidad, uso interno y reproducción comercial por separado | [Fuente](https://www.copyright.gov/records/search.html) |
| B851–B860 | Supply chain de fuentes/PR | No interpretar SLSA, OSV o diff fuente como aprobación factual, histórica ni legal | [Fuente](https://slsa.dev/spec/v1.2/provenance) |
| B861–B870 | Valor de información y ruta crítica | Dejar de confundir cantidad de bloques con nuevos resultados de prueba; focalizar una evidencia desbloqueante | [Fuente](https://www.ndsa.org/activities/levels-of-digital-preservation/) |

## Novedades con impacto

**Preservación OAIS/NDSA.** NDSA 2.1 se publicó en marzo de 2026 e introdujo consideraciones de sostenibilidad; su existencia no acredita que nuestros archivos estén preservados. OAIS 14721:2025 describe responsabilidades de archivo hacia comunidades designadas, no autentica por sí sola la publicación ni las hojas originales de Byrne–Fischer.

**Método IVV.** SPIRIT 2025 y CONSORT 2025 proporcionan criterios de transparencia para estudios aleatorizados, pero Chess Stories no es un ensayo clínico ni hay aleatorización, participantes, datos o consentimientos. Su transferencia es *analogía metodológica*: versión fija, resultado primario, asignación, umbrales y datos faltantes si se decide experimentar.

**Producir medios no equivale a editarlos en JSON.** BT.709-6 identifica parámetros de HDTV; WebVTT define pistas temporales. Ningún archivo MP4 real existe ni ha sido descodificado/cualificado en esta tanda. La factualidad `HIPOTÉTICA · NO JUGADA` debe subsistir aunque una pista optativa se oculte, y la elipsis de catorce plies no puede ilustrarse con un falso desplazamiento único.

**Comercializar eBooks requiere más de un EPUB funcional.** La Directiva 2019/882 incluye eBooks y ecommerce en su ámbito, con disposiciones, excepciones y transposición que deben verificarse para el proveedor real. El EPUB y el checkout requieren revisiones diferentes, y un texto alternativo correcto no despeja copyright.

**Análisis de crecimiento con medidas compatibles.** La publicación oficial de YouTube situó el cambio de conteo de Shorts el **31 de marzo de 2025**, manteniendo `engaged views` como métrica distinta de starts/replays y como referencia indicada de elegibilidad/ingresos. No se debe transformar vistas brutas en suscriptores premium ni suponer datos de la cuenta.

**Integridad de build, historia y derechos son propiedades no transitivas.** SLSA u OSV pueden aportar modelos útiles de procedencia de software y vulnerabilidades, pero ningún estado verde avala 1956, legalidad, consentimiento IVV, R6 o Política B. Una checklist con cien ítems no es prueba ni certificación.

## Diez falsificadores con mayor valor de decisión

| Bloques | Evidencia futura que cambiaría decisión | Estado real |
|---|---|---|
| B771/B775 | Registrar objeto autorizado de 1956, rendiciones y fixity independientes | Custodio/acceso todavía no demostrado |
| B781/B790 | Distinguir generador legal y secuencia impresa de 1956 | Legal oracle NOT RUN + original no autenticado |
| B793/B797 | Fijar pregunta factual primaria y umbral de inconclusión | IVV sin estímulo ni participantes |
| B803/B805 | Verificar señal de HIPOTÉTICA y 14 plies tras codificación | Media NO RENDERED |
| B811/B814 | Conservar 25...Nxd1 y «no jugada» en LTR/RTL | Ninguna revisión real de locale |
| B821/B824 | Decidir alcance EAA y generar EPUB verdaderamente accesible | Producto no creado y asesoría pendiente |
| B831/B833 | Separar Shorts views, engaged views y monetización | Sin analytics del canal de Chess Stories |
| B841/B843 | Verificar renovación y derechos del ejemplar concreto | R6 PENDING |
| B856/B857 | Revisar pins Git y expected results externos, no autocopiados | E5B4D NO-GO bajo M |
| B862/B870 | Elegir evidencia independiente que sí pueda mover un gate | Gates congelados: historia, oráculo, R6, IVV |

## Documentos de esta tanda

- `research/CHESS-STORIES-B771-B820-100-BLOCKS-PART1-2026-10-14.md` (50 entradas).
- `research/CHESS-STORIES-B821-B870-100-BLOCKS-PART2-2026-10-14.md` (50 entradas).
- `research/CHESS-STORIES-B771-B870-REGISTER.v1.0.json` (100 registros con fuente, hipótesis, falsificador, prioridad).
- Este documento `research/CHESS-STORIES-B771-B870-DECISION-SYNTHESIS.v1.0.md`.

## Advertencia de solapamiento y límites

No se ha declarado que las cien ideas no tengan ningún parentesco conceptual con B1–B770: algunas profundizan riesgos conocidos. El control de duplicados que debe efectuarse es **exactitud de títulos e IDs**, no originalidad absoluta de cada hipótesis. Las referencias externas sostienen normas generales; sus aplicaciones a nuestro producto son propuestas. No se ha comprobado disponibilidad real de originales, renovación de copyright concreta, interfaz del canal ni mercado/beneficios.

**Gates congelados:** E5B4D **NO-GO bajo modelo M**; Política B exige **todos los procesos relevantes terminados y terminación confirmada estrictamente antes de 120 s**, límites **independientes** de stdout y stderr de **1.048.576 bytes emitidos y aceptados** a lo largo de la vida de cada flujo. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, 77 negativos del router y 66 semánticos aún NOT_RUN, legal oracle NOT_RUN, original 1956 no autenticado, sin render, Actions, merge a main o publicación.
