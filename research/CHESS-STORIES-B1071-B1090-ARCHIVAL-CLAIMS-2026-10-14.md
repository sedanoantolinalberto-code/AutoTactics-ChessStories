# Chess Stories — Investigación B1071–B1090: evidencias archivísticas y claims

**Corte:** 2026-10-14. Contratos existentes inspeccionados; no se accedió a una hoja primaria nueva. Los predicados son propuestas de validación futura y NO resultados ejecutados.

## DC — Prueba archivística: identidad, granularidad y accesibilidad del testigo

### B1071 — Masthead como identificador distinto de portada

**Base sustentada o inferencia:** La portada y la página con la partida pueden tener paginaciones discordantes.

**Evidencia aceptable:** Ficha futura registra masthead, fecha impresa, número y páginas físicas 374–375.

**Condición de rechazo/inconclusión:** Si falta ejemplar identificable, mantener UNOBSERVED

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1072 — Errata 370 y ubicación 374–375 en campos separados

**Base sustentada o inferencia:** Winter documenta error del puntero de portada a p370, que corresponde a otra partida.

**Evidencia aceptable:** Localizador debe retener error original y ubicación corregida sin confundirlos.

**Condición de rechazo/inconclusión:** Bloquear identificación de Byrne–Fischer por p370

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1073 — Doble región del artículo histórico

**Base sustentada o inferencia:** Una transcripción de jugadas puede atravesar pp374–375 y pies de diagrama.

**Evidencia aceptable:** Dos regions/page para tabla principal y contexto de continuidad.

**Condición de rechazo/inconclusión:** Inconcluso si una de ambas páginas no está disponible

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1074 — Reproducción de originales sin redistribución automática

**Base sustentada o inferencia:** Web Annotation permite `TextPositionSelector` sin copiar pasajes extensos.

**Evidencia aceptable:** Ficha de coordenadas con object_id y rendition_id, distinta de permiso de facsímil.

**Condición de rechazo/inconclusión:** Falla si se añade recorte protegido al repo sin licencia

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1075 — Lector A no reutiliza transcripción del contrato

**Base sustentada o inferencia:** El texto PGN moderno del caso ya es conocido por el asistente, por lo que no sirve como lectura ciega.

**Evidencia aceptable:** Acta de elegibilidad de lector ajeno y fuente original aislada.

**Condición de rechazo/inconclusión:** Inadmisible si se mostró SAN antes de lectura

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1076 — Lector B debe tener sesión independiente

**Base sustentada o inferencia:** Dos lectores coordinados entre sí no añaden una observación independiente.

**Evidencia aceptable:** Sesión y documento A/B congelados antes de comparación.

**Condición de rechazo/inconclusión:** Inadmisible si B tuvo acceso a la hoja A

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1077 — Token de jugada y anotación tipográfica

**Base sustentada o inferencia:** Una exclamación o comentario en revista no significa automáticamente un movimiento jugado.

**Evidencia aceptable:** Campos print_token, commentary y derived_move distintos.

**Condición de rechazo/inconclusión:** Rechazar SAN obtenido mezclando comentario con score

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1078 — Diferencia entre publicación y planilla del jugador

**Base sustentada o inferencia:** Winter reproduce un final publicado, pero su artículo no constituye la planilla original firmada.

**Evidencia aceptable:** Tipos PUBLISHED_SCORE y PLAYER_SCORESHEET no intercambiables.

**Condición de rechazo/inconclusión:** No declarar termina_en_mate como original acreditado

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1079 — Observación de ausencia no es falta de acceso

**Base sustentada o inferencia:** No ver páginas del PDF impide concluir que en ellas falte un símbolo.

**Evidencia aceptable:** Separar ACCESS_UNAVAILABLE de OBSERVED_ABSENT con fecha y custodio.

**Condición de rechazo/inconclusión:** Bloquear cualquier ausencia inferida solo desde HTTP fallido

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1080 — Cierre de lectura con discrepancia conservada

**Base sustentada o inferencia:** El acuerdo A/B puede no resolver un grafema o el método de terminación del encuentro.

**Evidencia aceptable:** Resultado CONFLICTED con las dos transcripciones originales y justificación.

**Condición de rechazo/inconclusión:** No aprobar si se sobrescribe lectura discrepante

**Prioridad:** P0. **Referencias:** W;AN;PROV;COPY. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## DD — Grafo de afirmaciones, dependencia y contaminación de fuentes

### B1081 — RAV de PGN como rama, no acto del torneo

**Base sustentada o inferencia:** PGN define RAV para movimientos alternativos al texto principal; Qd8 está etiquetada ALT_QD8.

**Evidencia aceptable:** El ledger de claims mantiene played=false aunque la jugada alternativa sea legal.

**Condición de rechazo/inconclusión:** Falla al convertir RAV en MAIN en un export de enseñanza

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1082 — Marcador 0–1 distinto de causa de derrota

**Base sustentada o inferencia:** PGN define el resultado, no prueba abandono frente a mate físico anotado.

**Evidencia aceptable:** Registrar `result=0-1` y `terminal_mechanism=CONFLICTED` por separado.

**Condición de rechazo/inconclusión:** Rechazar salto de 0–1 a «resignó en ply82»

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1083 — Claim c5→b6 anclado a contrato, no original

**Base sustentada o inferencia:** PR #1 dice que el alfil blanco de c5 captura dama negra en b6.

**Evidencia aceptable:** Clase SOURCE_CASE_DECLARATION hasta cotejo original.

**Condición de rechazo/inconclusión:** No marcar PRIMARY_VERIFIED por coincidencia de overlay

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1084 — Claim de ataque a c4 requiere oráculo táctico

**Base sustentada o inferencia:** El relato afirma que Be6 amenaza al otro alfil blanco c4.

**Evidencia aceptable:** Separar geom_attack_check del testimonio histórico del movimiento.

**Condición de rechazo/inconclusión:** No declarar FIDE_CERTIFIED sin reporte legal independiente

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1085 — Proveniencia del corpus secundario no es cinco testigos

**Base sustentada o inferencia:** Múltiples webs pueden copiar la misma secuencia SAN divulgada.

**Evidencia aceptable:** Grafo de ancestry PGN y criterios de independencia entre autores.

**Condición de rechazo/inconclusión:** Inconcluso si no se puede distinguir procedencia

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1086 — `wasDerivedFrom` versus `hadPrimarySource`

**Base sustentada o inferencia:** PROV-O distingue derivación común de relación con fuente primaria con conocimiento directo.

**Evidencia aceptable:** Tipar explícitamente relación de cada manuscrito, revista, edición y summary.

**Condición de rechazo/inconclusión:** No afirmar `hadPrimarySource` para contenido modelado sin acceso al original

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1087 — Cita de Kmoch separada de narración inventada

**Base sustentada o inferencia:** El artículo de 1956 contiene expresiones históricas; un guion nuevo puede limitarse a hechos.

**Evidencia aceptable:** Claim cita literal acompañado de página y derechos, o paráfrasis editorial declarada.

**Condición de rechazo/inconclusión:** Bloquear pseudo-cita sin localización y fuente directa

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1088 — Fecha y evento como claims independientes

**Base sustentada o inferencia:** Un PGN agrega Event y Date que podrían proceder de bases secundarias.

**Evidencia aceptable:** Dos IDs con evidencia específica de fecha y torneo contemporáneo.

**Condición de rechazo/inconclusión:** No aceptar Date por mera repetición entre PGN copiados

**Prioridad:** P1. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1089 — Claims de mejor jugada no derivados de scoring

**Base sustentada o inferencia:** Ni el motor se ha ejecutado ni F03 permite decir que Be6 era única defensa.

**Evidencia aceptable:** Clase ENGINE_ANALYSIS_NOT_RUN para adjetivos de optimalidad.

**Condición de rechazo/inconclusión:** Eliminar «única», «forzada» si no hay cálculo cualificado

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1090 — Actualización de guion dispara revisión de metadatos

**Base sustentada o inferencia:** Cambiar una afirmación en voz puede dejar título/miniatura/newsletter con mensaje anterior.

**Evidencia aceptable:** Mapa `claim_id→output_id` y estado de revisión por salida.

**Condición de rechazo/inconclusión:** Inconcluso si se corrige solo el JSON de caso

**Prioridad:** P0. **Referencias:** PROV;PGN;W;CASE. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias

- `W`: https://www.chesshistory.com/winter/extra/byrnefischer.html
- `AN`: https://www.w3.org/TR/annotation-model/
- `PROV`: https://www.w3.org/TR/prov-o/
- `COPY`: https://www.copyright.gov/vcc/card-guide.html
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt
- `CASE`: PR #1 case v0.2 source-only.

**Sin cambios:** E5B4D NO-GO bajo M, Política B todos los procesos relevantes terminados y confirmados **estrictamente antes de 120 segundos**, stdout/stderr **independientes ≤1.048.576 bytes emitidos y aceptados toda su vida**. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; no código ejecutado, motors, render, Actions, merge main o publicación.
