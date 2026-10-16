# EP01 — Visual Narrative Design v0.1

Fecha: 2026-10-16. Estado: PROPUESTA DOCUMENTAL NO APROBADA, NO RENDERIZADA.
Repositorio: sedanoantolinalberto-code/AutoTactics-ChessStories.
Episodio: Donald Byrne–Bobby Fischer, Nueva York, 1956.

## Propuesta y alcance

**La misma posición, dos caminos:** un escenario ajedrecístico abstracto, mate y escultórico, con cámara contenida y montaje que permite volver al instante de bifurcación. La tensión nace de ver una dama capturada, explorar una alternativa explícitamente no jugada y regresar a la secuencia declarada. No se atribuyen pensamientos, emociones, cálculo o intenciones a los jugadores. No se afirma mejor jugada, victoria forzada o mate.

El dinamismo procede de cambios de escala, atención lumínica, pausas y cortes; no de alterar el tablero. El plano de lectura conserva las 64 casillas. La alternativa se distingue por texto persistente y borde discontinuo además de color. T10 declara una elipsis; T11 muestra solo el estado posterior VISUAL. El cierre abre la continuidad de la partida.

Entregables:
- [Identidad, cámara y legibilidad](visual-language.md).
- [Storyboard y correspondencia T01–T12](storyboard.md).
- [Matriz de revisión futura](future-visual-review.md).

Son documentos de dirección visual, no configuración ejecutable, extensión del contrato, guion histórico aprobado ni activos con derechos concedidos. No se genera imagen, vídeo, audio, FEN, código, script o cronograma medido.

## Base y procedencia inmutable

Rama nueva desde cierre F5: `7bea6cb1fdf482109c559e4044e5af3e9c78ae89`, HEAD observado de chess-stories/evidence-registry-v0.1.1-uniqueness-patch antes de escribir. El árbol no contiene este directorio ni AGENTS.md/workflows; la rama propuesta no figura en el inventario previo. Se mantiene el paquete registry íntegro. main observado `8e1ad7e0dd8fabadd1674733353988ff5136b63d`; PR #12 HEAD `2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd`, no fusionada.

Todas las fuentes pertenecen al mismo repositorio. Las rutas de esta tabla se resuelven en su commit exacto, no en esta rama de diseño.

| Clave | Commit | Ruta | Blob |
|---|---|---|---|
| C | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | contracts/scene-contract-v0.2.schema.json | 7dc513bad7082e54c8ade5f0568202cd804ba3c0 |
| E | 2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd | cases/ED-CASE-REAL-01.v0.2.json | 3514f19ac355763a5b4c61d5c573df090b0eccc1 |
| O | 6f6a78ba84abe83f5cd1c65044947dd77a10d270 | editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json | aafc6429d716863e225361dd4962169bf12ecfae |
| R | d73e8e913ae4f4bb77fd30f74721560d1a1239fb | design/chess-evidence-registry/v0.1.1/ep01-example.json | 479cea6cd499aef4c1961c3d09e509911457727a |
| RS | d73e8e913ae4f4bb77fd30f74721560d1a1239fb | design/chess-evidence-registry/v0.1.1/registry.schema.json | 017154416519517a413f23b0fc82fb0580f6fa70 |
| RP | 8b811a313a93c8d40a8392543d7471cbe8f327b9 | design/chess-evidence-registry/v0.1.1-uniqueness-patch/registry.schema.json | 0e3602bfadb5b1b3a3be407b185d348ed4653126 |
| F5 | 7bea6cb1fdf482109c559e4044e5af3e9c78ae89 | design/chess-evidence-registry/reviews/F5-closeout-and-execution-feasibility.md | 8e6ec0f046c6d667dc061a1e96044b3965a986b5 |
| B | 87cb4aac391147ed8d2b1509ddb3b23b98ca0783 | docs/R6_EP01_CLEAN_ROOM_PRODUCTION_BASELINE.v0.1.md | 84b12042e23efe812e247d0b2af5d6bd09a2016c |

C/E/O y B se consultaron directamente; registry y cierre se recuperan del trabajo anterior y de sus identidades conservadas. No se repiten los controles de 20 snapshots, 270 referencias ni 118 $ref. No son validación formal ni autorización.

O se utiliza para leer los rótulos y reglas de presentación compartidos con OVER1 (commit fa942d79a414ee3bc617b241a12f2cc58169d651; blob 57df8acf69cdd8516c5587100bc71c533b8ecf7a). La reconciliación existente documenta igualdad de los doce overlays en ese intervalo y diferencias de metadatos de procedencia. No se cambia el pin de MANIFEST ni se elige canon histórico. La etiqueta source_document_commit de O es una rama, no un SHA; E aporta aquí la identidad inmutable.

B contiene una sugerencia antigua que permitía exponer V-PRE-EV2, seguida de VIS-TECH-01 y ALT-A. Este diseño conserva la restricción TECHNICAL_ONLY de E y usa ALT-A como propuesta: no eleva la sugerencia antigua ni declara resuelto el bloqueo de producción.

## Relación con contrato y evidencias

Cada fila del storyboard enlaza E#/timeline/n, O#/overlays/n y R#/scene_bindings/n, con índices de cero a once. Estados y movimientos se toman de E; R permite distinguir colección, ID y ámbito. T10 escena no es source_snapshots/T10. No añadir cámara, paleta o timing a los objetos cerrados de C. Una eventual proyección requeriría diseño y autorización separados.

Los rótulos O.display_label y E.disclosure se conservan como capas distintas. Se muestran en banda de contexto y banda de explicación respectivamente; si son idénticos basta una sola instancia visible. Los textos creativos adicionales se identifican como propuestas, no sustituyen disclosures.

PARTIDA REAL conserva la clasificación del caso, no certifica autenticación histórica. Nota propuesta de encuadre documental en T01: «Representación de la secuencia declarada en las fuentes del caso». Siete claims continúan UNASSESSED. WIN0/WIN1/WIN2, conflictos, falta de originales R2 y derechos permanecen pendientes; ninguna elección de luz adjudica esos asuntos.

## Restricciones heredadas

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo modelo M.
Política B: todos los procesos relevantes terminados y terminación confirmada estrictamente antes de 120 segundos; stdout y stderr con límites independientes de 1.048.576 bytes emitidos y aceptados durante toda su vida.
R6 PENDING; IVV_GLOBAL NOT APPROVED; CASE_APPROVAL NOT APPROVED.
66 negativos semánticos, 77 negativos de router y oráculo independiente NOT_RUN. Todos los demás controles, incluido F03, se mantienen.

El cierre F5 sigue aplicando: separar funcionalmente una revisión visual no demuestra viabilidad de ejecución bajo M. No motores, validadores, scripts, pruebas, Actions, renders, reclutamiento, publicación o merge. No cambios en main, PR #12, producción o contratos. Ningún PASS técnico, histórico, visual o de derechos. Lectura posterior solo acredita persistencia.
