# Chess Stories — B871–B970: auditoría factual de EP01, síntesis v1.0

**Fecha:** 2026-10-14. **Ámbito:** piloto de ajedrez, EP01 Byrne–Fischer 1956, excluidos otros deportes. **Resultado:** 100 bloques nuevos por eventos, 10 grupos × 10, **89 P0 / 11 P1**. P0 significa importancia del riesgo, no 89 defectos comprobados. Ninguna entrada se considera prueba ejecutada, legalidad certificada ni inspección original de scoresheets de 1956.

## Método y evidencia observada

Esta tanda profundiza en los **IDs T01–T12 reales de PR #1**, los rótulos de PR #11 y la versión de **14 fases planificadas para 60 segundos** de PR #4. Los documentos son declaraciones source-only; se verificó manualmente el mapeo de 6 estados FEN del caso (5 VISUAL y 1 TECHNICAL_ONLY), 12 eventos de timeline, 12 overlays de verdad y objetivos temporales. La mera concordancia no constituye oráculo de movimientos, comprobación de derechos ni IVV. Fuentes de contexto externo:
- [FIDE Laws 2023](https://handbook.fide.com/chapter/e012023) para reglas modernas de movimiento, captura, anotación y mate. **No** sustituyen reglas/técnicas del torneo de 1956 ni lectura de hoja original.
- [PGN Standard](https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt) para distinguir movimiento, variante anotada, resultado y cierre de archivo.
- [Edward Winter, Byrne–Fischer](https://www.chesshistory.com/winter/extra/byrnefischer.html) para distinguir *Chess Review* dic. 1956, pp.374–375 de la errata de portada p.370, y resultados editoriales de testimonios originales.
- [W3C WAI complex images](https://www.w3.org/WAI/tutorials/images/complex/) para futuras descripciones útiles de relaciones espaciales entre piezas.

## Diez grupos de predicados concretos

| Bloques | Estado/acción del caso | Hallazgo concreto |
|---|---|---|
| B871–880 | T01 / V-P1 después de 17.Kf1 | Alfil blanco **c5** amenaza dama negra **b6**; alfil blanco **c4** es otro referente; turno de negras |
| B881–890 | T02 / 17...Be6 | Alfil negro **g4→e6** pasa a amenazar alfil blanco **c4**, sin desplazar la dama |
| B891–900 | T03 / 18.Bxb6 | Alfil blanco **c5→b6** captura dama negra **b6**; la captura no es final histórico |
| B901–910 | T04 / REWIND | Retorno **V-REAL→V-P1**, MAIN→MAIN, sin nueva media jugada ni falsa transcripción inversa |
| B911–920 | T05/T06 / ALT_QD8 | Entrar en hipótesis sin cambiar ocupación y luego dama negra **b6→d8**, nunca jugada en MAIN |
| B921–930 | T07 / RETURN_TO_REAL | Restaurar exactamente **V-P1/MAIN** antes de retirar el aviso HIPOTÉTICA |
| B931–940 | T08/T09 / REPLAY | Repetición **Be6 y Bxb6** en narrativa, no dos plies ni dos capturas adicionales |
| B941–950 | T10 / ELLIPSIS | Plies reales declarados **36–49** (14 medias jugadas) se omiten; V-PRE-EV2 es TECHNICAL_ONLY y no se muestra |
| B951–960 | T11 / 25...Nxd1 | Caballo negro **c3→d1** captura torre blanca **d1**; una torre blanca **h1** permanece. ALT-A propone corte estático a V-EV2, nunca tween desde fuente oculta |
| B961–970 | T12 / SEQUENCE_END | Final editorial en **ply50** V-EV2, no mate ni término de la partida. El propio caso secundario declara **26.h3** en ply51 y **41...Rc2#** en ply82, este último **no autenticado como final del scoresheet original** |

Los datos de casillas y plies anteriores están **observados en el contrato secundario candidato**, no verificados por inspección primaria ni oráculo FIDE. No se ha generado MP4 ni medido tiempos; los objetivos S01–S09 no son resultados audiovisuales.

## Cinco riesgos que se volvieron más verificables

1. **Doble alfil blanco:** T01 requiere distinguir c5 (amenaza y captura de reina) de c4 (pieza atacada por Be6). Una imagen confusa puede desfigurar la explicación incluso si muestra un alfil en ambas casillas.
2. **Rama alternativa a igual posición:** T05 cambia factualidad/branch con las piezas todavía en V-P1. De aquí deriva un predicado claro: **ningún frame que represente Qd8 sin HIPOTÉTICA · NO JUGADA**.
3. **Retorno atómico:** T07 NO permite liberar el aviso al empezar un fade; solo **después** de reponer exactamente V-P1 y MAIN.
4. **Elipsis no sintetizable:** una ausencia de plies 36–49 no puede reemplazarse por movimiento c3→d1 directo desde V-REAL. El evento T11 muestra un resultado posterior y la captura tras la elipsis, no una trayectoria desde el último tablero público.
5. **Dos cierres distintos:** T12 cierra un Short, mientras el expediente secundario continúa. Ni la convención PGN `0-1` ni un fade final justifican afirmar mate o abandono en ply50. La discrepancia original mate/abandono sigue irresuelta.

## Diez comprobaciones externas que podrían mover resultados

| Bloque | Objeto a observar, cuando esté autorizado | Gate |
|---|---|---|
| B872/B874 | Posiciones de c5/c4/b6 en testimonio auténtico + rules oracle | HISTORIA + LEGALIDAD |
| B882/B885 | Relación real g4→e6 y ataque e6→c4 en reconstrucción independiente | LEGALIDAD |
| B891/B892 | Captura B c5→b6 y desaparición reina negra en archivo autorizado | LEGALIDAD + MEDIA |
| B901/B904 | Video rebobinado declarado sin sumar jugada al PGN | IVV + MEDIA |
| B913/B919 | Frames alternativos Qd8 siempre rotulados y transición legal evaluada aparte | IVV + ORACLE |
| B922/B923 | Regreso V-P1 y MAIN exactos **antes** de quitar HIPOTÉTICA | IVV + MEDIA |
| B931/B936 | T08/T09 sin duplicación de medias jugadas en export/contadores | ROUTER |
| B941/B943 | 14 medias jugadas omitidas, V-PRE-EV2 no visible | SOURCE/FRAME |
| B951/B954 | Captura sobre d1 y **torre h1 superviviente** tras V-EV2 | ORACLE + MEDIA |
| B961/B965 | Texto «LA PARTIDA CONTINÚA» y método terminal original no afirmado como verificado | HISTORY + IVV |

## Entregables, límites y criterio de continuidad

Cinco tomos de veinte bloques y un registro JSON con cien títulos, prioridades, fuente y un falsificador por bloque, más esta síntesis. El registro identifica cada objeto de fuente con su Git blob observado, **sin elevar Git blob a hash SHA-256 independiente o licencia**.

La próxima evidencia que más ayudaría no es el número de bloques: **dos lectores independientes no contaminados por SAN en testigos exactos de 1956**, derechos R6 del medio final, oráculo legal ejecutado en entorno formalmente compatible, y IVV humana sobre export real sin mentir sobre el estado de las ramas.

**E5B4D NO-GO bajo failure model M**, Política B estricta: todos los procesos relevantes terminados y terminación confirmada **estrictamente antes de 120 segundos**; stdout/stderr **separados**, cada uno como máximo **1.048.576 bytes emitidos y aceptados durante toda la vida**. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED. Sin proyecto ejecutado, test, motor, renderer, Actions, merge a `main` ni publicación. Ningún gate ha cambiado con esta tanda.
