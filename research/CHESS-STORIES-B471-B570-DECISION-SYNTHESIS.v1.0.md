# Chess Stories — B471–B570: síntesis de decisiones y restricciones v1.0

**Fecha:** 14 de octubre de 2026. **Alcance:** exclusivamente el piloto Chess Stories. **Continuidad:** B1–B470, ahora B471–B570. **Auditoría documental:** 100 bloques únicos, diez áreas de diez; 77 P0 de prioridad, 23 P1. P0 no significa defectos confirmados. Ninguno de los 100 se ha ejecutado o aprobado.

## Lo que añade valor nuevo

1. **B471–B480 — investigación formal de copyright de 1956.** La [Copyright Office](https://www.copyright.gov/records/search.html) distingue el catálogo histórico pre-1978 y los asientos posteriores; la [Circular 15A](https://www.copyright.gov/circs/circ15a.pdf) explica reglas de renovación para décadas relevantes. No se ha encontrado ni calificado un asiento definitivo del número de *Chess Review* o de fotografías. La prioridad documental es definir consultas comprobables y distinguir revista, artículo, portada, fotografías y licencia de digitalización.
2. **B481–B490 — crítica de datos del torneo.** La metadata PGN de bases posteriores puede indicar evento, fecha, ronda y ciudad, pero esos campos no son originales por el mero hecho de verse en un archivo PGN. Se proponen testimonios contemporáneos específicos por tag; sin inventar fecha exacta o lugar de tablero donde no haya soporte.
3. **B491–B500 — paleografía y tipografía editorial.** Un 82-ply score en notación descriptiva puede contener «Kt», signos de captura, anotaciones, diagramas y cambios de columna. Dos lectores limpios del mismo impreso y sus observaciones congeladas hacen falta; la herramienta de investigación actual ya conoce el SAN moderno y no puede asumir esa condición.
4. **B501–B510 — requisitos por fotograma.** Estado de rama, FEN, tablero público, cartel REAL/HIPOTÉTICA/ELLIPSIS y cierre son predicados independientes. ALT-A propone **no dibujar** TECHNICAL_ONLY V-PRE-EV2, cortar de V-REAL a V-EV2 con 14 plies de omisión visibles y capturas con callout estático, sin asumir legalidad ni verdad histórica.
5. **B511–B520 — licencias por componente.** [Lichess Terms, actualización de agosto 2026](https://lichess.org/terms-of-service) distingue los distintos regímenes de software, assets, bases, contribuciones y servicios; su licencia de servidor no libera automáticamente piezas, estudios privados, comentarios ni fotos. [ChessBase Reader](https://pgn.chessbase.com/) aporta funcionalidades comparables, no derechos de copia de widget o marca.
6. **B521–B530 — transparencia de IA en YouTube 2026.** [YouTube (27 mayo 2026)](https://blog.youtube/news-and-events/improving-ai-labels-viewers-creators/) movió el aviso de IA realista a overlay visible sobre Shorts e introdujo detección automática. El aviso de IA no sustituye HIPOTÉTICA para Qd8; la colocación de capas debe probarse en el reproductor real cuando exista media y aprobación.
7. **B531–B540 — productos comerciales digitales UE.** [OSS España](https://vat-one-stop-shop.ec.europa.eu/national-vat-rules/spain-vat-rules_en) establece una ruta específica si procede; [guías 2026](https://vat-one-stop-shop.ec.europa.eu/guides_en) anotan cambios desde enero 2027. La [LSSI española](https://lssi.digital.gob.es/lssi/la-ley/aspectos-basicos/publicidad-en-internet) exige condiciones para newsletters promocionales; [Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/shopping-consumer-rights/index_en.htm) distingue el desistimiento en digital, y la Comisión aclara remedios por contenido/servicios no conformes. Nada de ello autoriza abrir tienda, registrar usuarios ni fijar impuestos no individualizados.
8. **B541–B550 — IVV orientado a falsedad concreta.** Se proponen ítems separados para si Qd8 fue real, si T07 restauró MAIN, si T10 saltó 14 plies, si Nxd1 capturó torre, y si T12 es fin de partida. Las hipótesis no equivalen a un protocolo autorizado ni a resultados de humanos.
9. **B551–B560 — incertidumbre y corroboración no transitiva.** Un oráculo de legalidad no autentica una planilla; un registro de copyright no corrobora ajedrez; dos archivos secundarios idénticos pueden proceder de una sola fuente. Evitar probabilidades fabricadas de autenticación.
10. **B561–B570 — gobierno marginal.** El próximo avance relevante no es otro lote de títulos, sino evidencia genuinamente nueva y admisible bajo el control correspondiente. E5B4D bajo modelo M continúa NO-GO y no puede rodearse etiquetando tareas de ejecución como «investigación».

## Diez preguntas accionables con posible impacto en gates

| Referencia | Verificación necesaria | Clase de evidencia | Gate que NO está aprobado |
|---|---|---|---|
| B471–B474 | ¿Existe aviso y renovación aplicable al número exacto 1956 y cada componente? | Asientos/obras exactos y dictamen de derechos | R6 |
| B481–B483 | ¿Se corrobora Event/Date/Round del PGN contra el periódico contemporáneo? | Tabla/agenda de torneo original | HISTORY |
| B491–B497 | ¿Dos lectores limpios coinciden sobre el score de páginas 374–375? | Hojas A/B congeladas, zonas, adjudicación | HISTORY |
| B501–B504 | ¿Cada frame hipotético y salto tiene etiqueta factual correcta? | Media real y evaluación frame-level | PRESENTATION/IVV |
| B511/B516 | ¿Qué licencia se aplica al archivo concreto que deseamos reutilizar? | Licencia/digest/componentes | R6 |
| B521/B527 | ¿Una etiqueta externa de IA oculta señales REAL/HIPOTÉTICA? | UI real con export aprobado | MEDIA/IVV |
| B531–B538 | ¿Quién factura y qué régimen corresponde a cada futuro producto/país? | Contrato merchant, residencia cliente, normativa aplicable | COMMERCIAL |
| B541–B546 | ¿Un panel elegible comprende el montaje sin ser inducido por preguntas? | Estímulo lícito, IVV preinscrito y consentido | IVV_GLOBAL |
| B552/B556 | ¿Las fuentes secundarias y oráculo son realmente independientes? | Grafo de derivación, oracle cualificado | HISTORY/LEGALITY |
| B561/B570 | ¿Qué requisito puede obtener un resultado observacional nuevo y no circular? | Plan mínimo por gate con revisor/artefacto real | E5B4D/R6/IVV |

## Resultado y limitaciones de esta investigación

Los dos tomos contienen 50 bloques cada uno, un registro JSON completo y esta síntesis. Los verificadores de coherencia documental sólo cuentan entradas y comprueban campos, **no son tests del proyecto Chess Stories**. Las fuentes oficiales enlazadas respaldan sus reglas generales; las aplicaciones concretas al EP01 se etiquetan como inferencias o requisitos futuros. La fuente más reciente citada de la Lichess TOS es 1-agosto-2026 y la actualización de YouTube 27-mayo-2026; ambas pueden cambiar antes de una publicación futura.

**Congelado:** E5B4D NO-GO bajo modelo de fallos M; Política B sin cambio (todos los procesos pertinentes terminados Y confirmados **estrictamente antes de 120 segundos**; stdout y stderr **independientes**, cada uno ≤1.048.576 bytes **emitidos y aceptados durante toda la vida**). R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; original 1956 sin autenticación completa; legal oracle NOT RUN; renders/tests/Actions prohibidos, main intacta, publicación no autorizada.
