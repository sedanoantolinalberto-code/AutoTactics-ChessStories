# Modelo conceptual

Estado: diseño documental no aprobado; ninguna entidad tiene autoridad para abrir gates.

## Separaciones obligatorias

1. Source describe la obra/publicación; witness describe un objeto concreto. Un periódico de 1956 es fuente primaria para lo publicado, pero una reproducción moderna parcial no es el ejemplar original ni una inspección completa.
2. Transcription conserva texto original, normalización y alternativas. Normalizar 'mate' a '#' no calcula mate ni certifica lo jugado.
3. Game y branch organizan posiciones/movimientos declarados. Scene es una aparición narrativa: T08/T02 comparten MOVE-MAIN-34; T09/T03 comparten MOVE-MAIN-35.
4. Claim expresa una afirmación de alcance preciso. Observation registra el acto de consulta o el informe de una consulta anterior. EvidenceLink describe qué parte de una afirmación apoya, contradice o contextualiza.
5. Confidence es juicio histórico motivado; validation es estado de un control técnico/documental. Ninguna se deriva de la otra.
6. RightsRecord vincula activo + uso + permiso. Consulta, reproducción comercial, identidad y autenticidad son dimensiones separadas.
7. Requirement declara una obligación; execution y result describirían hechos distintos. El perfil actual solo admite NOT_RUN y resultado null para validaciones: representa la fase autorizada, no futuras aprobaciones.
8. SourceSnapshot identifica texto del repositorio, no bytes autenticados de un objeto histórico.

## Relaciones y cardinalidad

| Origen | Relación | Destino |
|---|---|---|
| game | 1:N | branches, positions, moves, scene_bindings |
| branch | padre opcional; anclas obligatorias | branch, positions |
| move | exactamente dos estados declarados | positions |
| scene_binding | 0:1 movimiento; repetición opcional | move, scene_binding |
| source | 1:N | witnesses |
| witness | derivación 0:1 conocida; transcripciones 0:N | witness, transcriptions |
| transcription | 0:N lecturas | readings |
| observation | un sujeto y uno o más orígenes documentales | entidad, source_snapshots |
| evidence_link | relación de alcance explícito | claim + observation |
| conflict | varias alternativas conservadas | afirmaciones o versiones descritas |
| rights_record | un activo para un uso concreto | asset; documentos de permiso si existen |
| dependency | bloquea 0:N elementos | entidades del registro |
| revision | predecesor opcional | registro anterior |

Las cardinalidades e integridad referencial requieren controles futuros; no se afirma haberlos ejecutado. No hay elección automática de fuente canónica ni votación por número de citas.

## Identidad y cambios

Cada ID interno es estable dentro de su tipo y caso. Un cambio material requiere nueva revisión/registro y motivo; no se borra la alternativa anterior. Las referencias de origen utilizan snapshot_ref + locator. Un locator '#/...' es JSON Pointer; un encabezado o selector textual se conserva como tal, sin fingir ser un JSON Pointer.

Las identidades heredadas T01–T12, MAIN, ALT_QD8 y V-* conservan su significado. Las evidencias legacy EVID-* y claims originales se resuelven exclusivamente contra CASE. Su existencia como referencia no demuestra disponibilidad del documento subyacente.

## Confianza

UNASSESSED: no se ha emitido valoración. LOW: apoyo limitado con carencias sustantivas. MODERATE: apoyo pertinente con limitaciones identificadas. HIGH: apoyo sólido para la afirmación exacta, sujeto a juicio documentado. Ningún nivel autoriza publicación ni elimina conflictos.

El ejemplo mantiene UNASSESSED. Una futura valoración necesita responsable, fecha, evidencia, alcance y revisión; el perfil v0.1 no permite certificarla por conteo de fuentes. No usar una media de confianza global.

## Límites EP01

V-PRE-EV2 es TECHNICAL_ONLY. T07 restaura V-P1 y MAIN antes de retirar el aviso. T10 omite catorce plies; no es una transición de ajedrez única. T12 es cierre editorial con LA PARTIDA CONTINÚA. La terminación histórica permanece UNRESOLVED, aunque exista una tradición publicada de mate.
