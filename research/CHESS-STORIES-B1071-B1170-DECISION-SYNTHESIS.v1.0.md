# Chess Stories — B1071–B1170: síntesis ejecutiva de aceptación v1.0

Fecha: 2026-10-14. Ámbito exclusivo: Chess Stories EP01. 100 nuevas entradas documentales (10×10), 93 P0 y 7 P1. Prioridad P0 no significa defecto observado. Ningún bloque es un test ejecutado ni una aprobación humana.

## Diez paquetes de evidencia

| Bloques | Dominio | Evidencia futura decisiva | Estado |
|---|---|---|---|
| B1071–B1080 | Fuente primaria y archivo | Identidad de revista, pp.374–375, raw witness y licencia separada | Original no inspeccionado |
| B1081–B1090 | Dependencias de claims | PROV: score publicado ≠ planilla original ≠ RAV Qd8 | Árbol documental parcial |
| B1091–B1100 | IVV 45s/60s | Factores duración, audio, reparto temporal, contraste causal y no-inducción | Sin participantes ni estímulo |
| B1101–B1110 | Legalidad ajedrecística | Certificado de trayectoria, reglas, movimientos hipotéticos y 14 plies omitidos | Oráculo NO EJECUTADO |
| B1111–B1120 | Bill of materials y R6 | Piezas, font binaria, fotos, voz, audio, miniaturas, usos territoriales | R6 PENDING |
| B1121–B1130 | Frames y truth overlay | Qd8 siempre no jugada, T07 retorno, T10 elipsis, torre h1 conservada | Media NO RENDERED |
| B1131–B1140 | Accesibilidad y pedagogía | Descripción de tablero, variantes mudas y localización ES/EN | IVV/QA no iniciadas |
| B1141–B1150 | Audiencia y newsletter | Short→perfil→enlace→alta consentida, funciones reales | Sin datos de cuenta |
| B1151–B1160 | Política B bajo M | Terminación confirmada de todos los procesos antes de t<120 y bytes por flujo | E5B4D NO-GO |
| B1161–B1170 | Gate de publicación | GO conjuntivo por historia, legalidad, derechos, ejecución, media, IVV | PUBLICACIÓN NO AUTORIZADA |

## Evidencia contrastada frente a inferencias

**Historia:** Edward Winter sitúa el artículo Byrne–Fischer de Chess Review diciembre de 1956 en pp.374–375 y registra la errata de portada p370. El artículo publica el score moderno, pero no autentica por sí solo la planilla manuscrita original ni termina la necesidad de dos lectores ciegos. https://www.chesshistory.com/winter/extra/byrnefischer.html

**Procedencia:** W3C Web Annotation permite registrar localizadores de partes de un documento sin reproducir el texto completo; PROV-O distingue derivación, revisión y fuente primaria. Son marcos para expedientes futuros, no pruebas de inspección efectuadas. https://www.w3.org/TR/annotation-model/ — https://www.w3.org/TR/prov-o/

**Reglas y PGN:** FIDE describe reglas de movimiento; PGN distingue variantes RAV de línea principal y marcador de resultado 0-1 de un mecanismo histórico de final. Según el caso candidato PR #1, Qd8 nunca se jugó, T10 omite plies 36–49, Nxd1 captura torre blanca d1 pero conserva la de h1 y T12 cierra el episodio en ply50. Nada de ello certifica scoresheet original o un oracle ejecutado. https://handbook.fide.com/chapter/e012023 — https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt

**Medios:** C2PA 2.2 permite afirmar ciertas relaciones de procedencia de archivo cuando se validen, pero no verdad de la historia ni derechos. WebVTT y WCAG proveen requisitos para futura accesibilidad, sin certificar nuestro clip inexistente. https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html — https://www.w3.org/TR/webvtt1/ — https://www.w3.org/TR/WCAG22/

**Conversión de audiencia:** YouTube documenta que URL de descripción/comentarios de Shorts no son clicables, y que Related Video requiere acceso avanzado y contenido del canal. Los 10 bloques de newsletter exigen verificar ruta real de cuenta y altas válidas, no proyectar ingresos desde reproducciones. https://support.google.com/youtube/answer/13748639?hl=en-419 — https://support.google.com/youtube/answer/14075157?hl=en

## Evidencia con mayor valor marginal

El siguiente avance técnico/histórico es obtener clases nuevas de prueba: objeto y transcripción independiente de 1956, licencias del bill of materials final, compatibilidad formal de runner con Política B bajo M, oráculo ajedrecístico calificado, medio real seguro y evaluación humana con estímulo autorizado. La secuencia documental no suplanta a esas verificaciones. Los bloqueos externos se mantienen explícitos, sin firmas simuladas ni declaraciones PASS inventadas.

## Archivos de esta tanda

Cinco informes de veinte: B1071–1090 archivo y claims; B1091–1110 IVV y legalidad; B1111–1130 assets R6 y medios; B1131–1150 accesibilidad y embudo; B1151–1170 ejecución/release. Registro estructurado: research/CHESS-STORIES-B1071-B1170-REGISTER.v1.0.json. Este documento: research/CHESS-STORIES-B1071-B1170-DECISION-SYNTHESIS.v1.0.md.

## Gates congelados

E5B4D NO-GO bajo modelo M. Política B: todos los procesos relevantes terminados y terminación confirmada estrictamente antes de 120 segundos; stdout y stderr independientes cada uno máximo 1.048.576 bytes emitidos Y aceptados durante toda la vida. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED. 77 negativas IR y 66 semánticas NO EJECUTADAS. Original 1956 no autenticado, oracle NOT RUN; no ejecución, render, Actions, fusión a main ni publicación.
