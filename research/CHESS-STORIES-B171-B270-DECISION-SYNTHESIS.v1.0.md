# Chess Stories — B171–B270: síntesis operativa y decisión de investigación

**Corte:** 14 octubre 2026. **Total:** 100 bloques documentales nuevos de ajedrez (continuación real de B1–B170, no los antiguos bloques generales AutoTactics 510+). **Instrumentos:** dos informes de 50 bloques + registro JSON de 100 entradas. **Prohibiciones y NO-GO intactos.**

## Qué aporta esta tanda, y qué no

No pretende encontrar 100 «funcionalidades» ni presentar 100 PASS. Los 100 bloques descomponen los **bloqueos observados del piloto EP01** en preguntas con conclusión/inferencia, fuente, falsificador y prioridad. El resultado es un mapa de **74 riesgos P0 y 26 P1**, no 74 defectos demostrados ni 74 asuntos para ejecutar inmediatamente.

### Diez áreas (10 bloques cada una)

| Rango | Área | Material recuperable |
|---|---|---|
| B171–180 | Acceso histórico al testimonio de 1956 | Ejemplar de museo, errata p.370, lectores independientes, copyright |
| B181–190 | Jerarquía documental de evidencia | Publicación vs planilla original, autoridad de fuente, temporalidad, denominación |
| B191–200 | Legalidad y límites del fixture | Qd8 unplayed, captura Nxd1, 14 plies, diferencia FEN-historia |
| B201–210 | Semántica de representación | Tablero visible vs estado interno, retorno T07, ALT-A, T12 |
| B211–220 | Accesibilidad específica | Hipotética persistente, d1, casillas y subtítulos a escala móvil |
| B221–230 | Sincronización editorial | WebVTT, cue/event_id, solapes entre ramas, ritmo 45/60 |
| B231–240 | Integridad del contrato | JSON duplicado, JCS RFC8785, Git blob vs objeto independiente, ramas PR |
| B241–250 | Política B/M y artefactos | Terminación confirmada de descendientes, límites independientes, build provenance |
| B251–260 | Derechos R6 por objeto/soporte | Revista 1956, fotos, fuente exacta, geometría, voz/audio, newsletter |
| B261–270 | Distribución y cierre de gates | Orgánico vs anuncios, titulares, aceptación perceptiva, criterio de GO |

## Hallazgos concretos con respaldo externo

1. **Ruta histórica que sí cambia el plan de búsqueda:** la página 2 del PDF de objeto expositivo del World Chess Hall of Fame lista *Chess Review* vol.24 no.12 (dic.1956), ejemplar recibido de John Donaldson. Se comprobó visualmente **la página del catálogo** (índice de PDF 1). Esto no equivale a lectura de las páginas de revista 374–375. [Fuente institucional](https://worldchesshof.org/wp-content/uploads/2025/02/amlvitrine-packetsfinal3.pdf). B171–B173.
2. **Prevención de atribución a partida equivocada:** Edward Winter distingue la errata de portada «See page 370», el contenido Smyslov–Pachman de p.370 y Byrne–Fischer en pp.374–375. [Winter](https://www.chesshistory.com/winter/extra/byrnefischer.html). B172/B187.
3. **Derechos más complejos que el año de edición:** según [Circular 15A de la US Copyright Office](https://www.copyright.gov/circs/circ15a.pdf), las obras estadounidenses que obtuvieron copyright entre 1950–1963 tenían que cumplir condiciones de renovación para mantener protección tras el término inicial. **No se ha investigado o probado el estado concreto de renovación del volumen de *Chess Review***, ni derechos de fotografías/editorial por separado. B180/B251/B252.
4. **Fundamento ajedrecístico:** [Leyes FIDE](https://handbook.fide.com/chapter/e012023) definen legalidad del movimiento más allá de la simple diferencia de ocupación de casillas; [PGN Standard](https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt) distingue partida/etiquetas/variantes. Ningún cotejo actual de FEN/SAN sustituye oráculo competente ni testigo de 1956. B191–B200.
5. **Integridad formal:** [JSON Schema 2020–12](https://json-schema.org/draft/2020-12) y [JCS RFC8785](https://datatracker.ietf.org/doc/rfc8785/) aportan modelos para esquemas y formato canónico, pero el router no acredita parseado de bytes JSON ni duplicados de claves. B231–B240.
6. **Contratos de presentación:** [W3C WebVTT](https://www.w3.org/TR/webvtt1/) permite solapes y posicionamientos de cues; [WCAG 2.2](https://www.w3.org/TR/WCAG22/) da criterios de accesibilidad. Su existencia no confirma legibilidad de un Short real. B211–B230.
7. **Procedencia de artefacto:** [SLSA v1.2](https://slsa.dev/spec/v1.2/provenance) separa procedencia de fuente y de build. Git blob observado ≠ MP4 generado/atestiguado y no satisface Política B/M. B231/B247/B249.

## Las 10 preguntas prioritarias antes de más investigación genérica

| Bloque | Riesgo crítico específico | Acción útil sin falso PASS | Depende de |
|---|---|---|---|
| B174 | Lecturas A/B contaminadas o de revistas distintas | Custodiar paquetes por testimonio y definir lectura por objeto | Lectores independientes externos |
| B180 | Imágenes de 1956 sin derechos confirmados | Registro de aviso/renovación y exclusión comercial por defecto | Acceso documental / responsable R6 |
| B193 | Declarar Nxd1 legal por coincidencia de FEN | Contrato de oráculo independientes y criterios de discrepancia | Ejecución cualificada bajo Política B |
| B194 | Convertir 14 plies omitidos en una jugada ficticia | Mantener disclosure 36–49 y ALT-A en PR #4 | Revisión visual futura |
| B203 | Ocultar HIPOTÉTICA antes del retorno real T07 | Gate por fotogramas con restauración atómica | Media efectivamente renderizada |
| B205 | Exponer estado TECHNICAL_ONLY | Conservar ALT-A: V-REAL visible → V-EV2 estático | Oráculo, R6, IVV, ejecución |
| B232 | Parser que acepta claves JSON duplicadas | Requisito de parseo bruto e identidad de bytes | Runner cualificado, revisión técnica |
| B241 | Confundir wrapper timeout con terminación confirmada | Prueba formal contra modelo M, no simplemente cronómetro | Condición E5B4D estructural |
| B255 | Seleccionar familia tipográfica sin binario identificado | Identificador de Noto Sans y texto de licencia por asset final | Binario real y revisor de derechos |
| B267 | Pedir opinión humana sin estímulo lícito | Prerrequisitos de IVV y consentimiento, sin reclutamiento hoy | R6 + estudio aprobado |

## Orden de trabajo por utilidad de decisión

1. **No prometer GO:** si la Política B es formalmente incompatible con el modelo M, documentación adicional no la hace verdadera; resolver mediante evidencia/calificación o un proceso formal externo, nunca relajarla por estas investigaciones.
2. **Evitar degradación factual:** mantener PR #1/3/4/11/12 alineadas y VIS-TECH-01 ALT-A explícito; no confundir seis estados técnicos con seis fotogramas o 60 segundos target con vídeo real.
3. **Resolver accesos originales:** buscar lectura independiente por testimonio exacto; conservar primarios vacíos mientras no existan lectores elegibles.
4. **Cerrar cadena de activos:** cada gráfico/audio/fuente definitiva necesita origen y términos reales; candidatos geométricos no son assets con R6 aprobado.
5. **Una vez existan permisos y pruebas:** producir estímulos genuinos bajo sistema cualificado, y entonces realizar IVV separado de las afirmaciones históricas o ajedrecísticas.

## Racionalización del backlog

Solo diez preguntas se proponen para el próximo ciclo de decisión. Las otras 90 quedan como **registro consultable**, no 90 órdenes de implementación ni obligación de producir 90 artefactos. Un bloque pasa de «investigado» a «verificado» solo con observaciones independientes específicas y revisión; un título, JSON o commit no puede autoescalar el estado.

**Estados preservados:** E5B4D NO-GO bajo M; Política B estricta (procesos relevantes terminados y confirmados **antes de 120 s**, stdout y stderr **independientes** ≤1.048.576 bytes emitidos/aceptados durante toda la vida de cada proceso); R6 PENDING, IVV_GLOBAL/CASE_APPROVAL/EP01 NOT APPROVED; oráculo NOT_RUN; sin renders, tests, Actions, merge a main, publicación o trabajo en otros deportes.
