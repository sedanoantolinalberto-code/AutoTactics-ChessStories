# Chess Stories B1551–B1570 — Protocolo A/B futuro y gates intactos

**Corte:** 2026-10-14. La nueva lectura visual se integra en un procedimiento formal de verificación histórica pendiente. **No existen transcripciones A/B independientes ni resultados humanos del estudio IVV**; no se ha ejecutado motor ni renderer.

## FY — Protocolo documental para un cotejo independiente futuro

### B1551 — El lector A sólo recibe la imagen del score publicado

**Observación/inferencia:** Un transcript ciego no puede derivarse del PGN moderno que el asistente ya conoce.

**Evidencia futura o rechazo:** Designar revisor humano que declare exposición previa, con documento original congelado.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1552 — El lector B no debe consultar la hoja del lector A

**Observación/inferencia:** Si ambos se coordinan, su concordancia no ofrece validación independiente.

**Evidencia futura o rechazo:** Recoger ambas hojas por separado, con sello de versión y región visual.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1553 — Una hoja A/B debe tener 82 posiciones tokenizadas

**Observación/inferencia:** El impreso contiene 41 pares de jugadas a transcribir.

**Evidencia futura o rechazo:** Dos columnas por medio movimiento y un valor UNREADABLE cuando proceda.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1554 — La denominación descriptiva se conserva intacta en bruto

**Observación/inferencia:** Los tokens de 1956 contienen convenciones distintas a SAN.

**Evidencia futura o rechazo:** Primero copiar glifos literalmente; solo después normalizar en columnas auditables.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1555 — El orden de lectura de dos columnas se documenta

**Observación/inferencia:** La página 2 combina columnas de ajedrez con tres partidas diferentes.

**Evidencia futura o rechazo:** Fijar región y orden manual por encabezado, no OCR de flujo general.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1556 — Las discrepancias se adjudican sin alterar los originales

**Observación/inferencia:** Dos lectores podrían diferir en Kt, B, Q, numeración o marcador de mate.

**Evidencia futura o rechazo:** Preservar ambas lecturas, region_id y decisión de tercero sin sobrescrituras.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1557 — El score de Chess Review es otro testigo editorial

**Observación/inferencia:** El número de diciembre existe como URL, pero sus pp374–375 no se inspeccionaron aquí.

**Evidencia futura o rechazo:** Conseguir visualización legítima para cotejar y declarar dependencia editorial probable.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1558 — Una planilla original no se sustituye por fotografía parcial

**Observación/inferencia:** ChessBase exhibe reproducciones atribuidas a escritura de Fischer.

**Evidencia futura o rechazo:** Sólo una zona final legible y procedencia competente permitiría discutir último movimiento manuscrito.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1559 — El arbitraje del final requiere vocabulario preciso

**Observación/inferencia:** «Mate impreso» y «última jugada efectivamente ejecutada» son proposiciones distintas.

**Evidencia futura o rechazo:** Acta con dos claims, terminal publicado y terminal del tablero, y grado de prueba independiente.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1560 — Ningún score publicado cumple por sí mismo test de legalidad independiente

**Observación/inferencia:** La prensa histórica acredita el texto impreso pero no reglas de cada posición.

**Evidencia futura o rechazo:** Oráculo técnico separado sujeto a compatibilidad formal con Política B; NOT_RUN actual.

**Prioridad:** P0. **Fuentes:** CL5;CL20;PGN;WINTER. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## FZ — Valor de decisión de la fuente nueva y alcance de permisos

### B1561 — La observación del folio 3 es un progreso real pero local

**Observación/inferencia:** Ahora el anuncio de premios es VISUALLY_INSPECTED y no solo text-layer.

**Evidencia futura o rechazo:** Actualizar metadatos de evidencia del informe, nunca el resultado histórico global por arrastre.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1562 — La contradicción de rondas tiene que permanecer abierta

**Observación/inferencia:** Una retrospectiva cita séptima; Winter remite a octava y 17-X.

**Evidencia futura o rechazo:** Buscar tabla/acta primaria de torneo antes de emitir un metadato numérico.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1563 — El original de Rc2# sigue pendiente como jugada ejecutada

**Observación/inferencia:** La página 2 imprime mate, no acredita cómo terminó físicamente.

**Evidencia futura o rechazo:** Mantener PLAYER_SCORESHEET_TERMINAL UNVERIFIED.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1564 — Los hashes R2 no cambian por obtener PDFs nuevos

**Observación/inferencia:** El hash declarado-not-checked y los bytes ausentes siguen sin recuperarse.

**Evidencia futura o rechazo:** No llamar a los PDFs de Chess Life «el mismo PGN R2». 

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1565 — La Política B no se suaviza por origen archivístico

**Observación/inferencia:** Visualizar PDFs no ejecuta los procesos del proyecto, pero usar motor/render sí sería distinto.

**Evidencia futura o rechazo:** El runner del proyecto permanece NO-GO bajo M hasta solución formal compatible.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1566 — Los negativos especificados no son controles superados

**Observación/inferencia:** El router tiene 77 negativos propuestos y el validador 66; ninguno ha sido corrido.

**Evidencia futura o rechazo:** Seguir mostrando NOT_RUN y no usar proporción de P0 como test coverage.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1567 — R6 sigue pendiente por soporte material distribuido

**Observación/inferencia:** US Chess facilita fuentes para lectura de investigación, no derechos comerciales generales.

**Evidencia futura o rechazo:** No usar portadas o PDF en vídeo/eBook sin licencia válida por pieza.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1568 — Una historia original podría comenzar con hechos de prensa

**Observación/inferencia:** El premio y ganadores se pueden explicar mediante narración propia, sin material visual protegido.

**Evidencia futura o rechazo:** Revisión editorial distingue observación fuente de imaginación escénica.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1569 — El lanzamiento depende de una conjunción de evidencias

**Observación/inferencia:** Historia, legalidad, R6, compatibilidad Policy B, media e IVV son dominios independientes.

**Evidencia futura o rechazo:** Una aprobación de archivo no permite publicar ni mezclar a main.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1570 — El siguiente trabajo de máxima utilidad es cotejo, no más títulos

**Observación/inferencia:** Una transcripción independente del score de 41 filas reduciría incertidumbre más que otra taxonomía.

**Evidencia futura o rechazo:** Priorizar A/B, Chess Review pp374–375 y última hoja original antes de nuevas tandas.

**Prioridad:** P0. **Fuentes:** CASE;POLICY;ARCH;CL5;CL20. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias

- `CL5`: https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CL-ALL/1956/1956_11_1.pdf
- `CL20`: https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CL-ALL/1956/1956_11_2.pdf
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `WINTER`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `CASE`: GitHub PR #1 ED-CASE-REAL-01.v0.2.json
- `POLICY`: E5B4D model M and strict Policy B source-only gates
- `ARCH`: https://new.uschess.org/chess-life-digital-archives

**Gates congelados:** E5B4D NO-GO bajo failure model M; Política B todos los procesos relevantes terminados Y terminación confirmada ESTRICTAMENTE antes de 120s, stdout y stderr independientes ≤1.048.576 bytes EMITIDOS Y ACEPTADOS toda su vida; R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, oráculo NOT_RUN; sin pruebas, renders, Actions, merge main ni publicación.
