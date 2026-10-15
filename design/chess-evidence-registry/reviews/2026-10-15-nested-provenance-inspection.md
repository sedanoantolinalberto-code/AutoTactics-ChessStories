# CER Fase 3 — alcance complementario de revisión de procedencia
Fecha: 2026-10-15. Documento adicional a reference-type-map.md, que dejaba las referencias anidadas pendientes. Es una observación de lectura de datos JSON a través de GitHub, NO una prueba cualificada ni una validación del esquema.

Se inspeccionó recursivamente el ejemplo documental ep01-example.json, commit fuente 5ffb8ecd278c06d596349176040abe12c3f329af. Hay 101 ocurrencias de claves snapshot_ref en el ejemplo y las 101 contienen IDs existentes en la colección source_snapshots de ese mismo ejemplo. No se encontraron destinos ausentes por mera pertenencia al conjunto de IDs. Esto NO verifica selectores, commits históricos, contenido externo, independencia o legitimidad de observaciones.

Los cuatro conflictos documentales son CONFLICT-WINTER-REF, CONFLICT-OVERLAY-REF, CONFLICT-TERMINATION y CONFLICT-ROUND, sin adjudicación derivada de esta lectura.

Los dos derechos del ejemplo conservan:
- RIGHTS-DATA: commercial_status=PENDING.
- RIGHTS-CR: commercial_status=NOT_AUTHORIZED.
Estos estados son los del EJEMPLO, no una revisión jurídica de la cartera de activos completa ni concesión de permisos. R6 global permanece PENDING.

No se ejecutaron motores, tests de proyecto, validadores, renders ni Actions. Sin cambios en main, PR #12, diez archivos Fase 2 ni gates. E5B4D NO-GO bajo modelo M; Política B estricta; IVV_GLOBAL y CASE_APPROVAL no aprobados; 66 y 77 negativos, oráculo NOT_RUN.

Quedan pendientes revisión semántica campo a campo, tipado polimórfico de referencias, cualificación de los hashes y validación futura bajo autorización y condiciones factibles. Esta inspección no resuelve el bloqueo externo archivístico.
