# Plan posterior de validación — NO EJECUTADO

Propuesta para v0.1.1. Todos los controles siguen NOT_RUN; no se entrega código de prueba, script, motor, validador, workflow ni adaptador. Reutiliza [CER-F01–F24 de v0.1](../v0.1/future-validation-spec.md) y [plan Fase 3](../reviews/F4-documentary-remediation-plan.md); no añade ni sustituye especificaciones de los 66/77 negativos.

## Revisión documental siguiente

Examinar las definiciones y referencias del nuevo esquema, catálogos del diccionario, conservación de EP01, scopes externos y reservas para evaluación/permisos. La presencia de diseños nuevos no confirma validez Draft 2020-12 ni resolución de datos. La tabla siguiente es una especificación de controles, no resultados.

| Control previsto | Entrada o condición de interés | Evidencia exigible en futuro ámbito autorizado |
|---|---|---|
| Estructura | Tipos anidados, required, adicionales, null, const, enums, patrones, duplicación de claves | Herramienta/dialecto/revisión fijados; resultados reales y límites |
| Referencias tipadas | ID existente en colección equivocada; T10 snapshot vs escena | Resolución por colección y ámbito; rechazo de inferencia global |
| Ámbito local | registry_id ajeno o documento copiado de otro caso | Identidad del documento contenedor y pertenencia al caso |
| Ámbito externo | Rama mutable, commit/path/blob incongruentes, ID ausente en documento anterior | Referencia Git inmutable y resolución del registro exacto; no autenticidad histórica inferida |
| Locators | JSON Pointer erróneo, # raíz, encabezado/selector parcial | Resolución acorde a locator_kind, no tratar texto como JSON Pointer |
| Versiones Winter | WIN0 transcripción enlazada erróneamente a WIN2; versiones sin snapshot | Concordancia de witness, witness_version y origins; variantes conservadas |
| Derivación | Ciclo de previous_version/derived_from/previous_record | Control por tipo de arista; permitir retornos narrativos y asociación rama/posición |
| Evaluaciones | Intento de introducir HIGH/MODERATE o evaluación en candidato | Mantener UNASSESSED y colecciones reservadas vacías; revisión humana fuera de resultado técnico |
| Modelo futuro de evaluación | Autoridad, responsable, fecha o revisión ausentes; citas dependientes | Perfil posterior revisado y evidencia competente, no simple aceptación de strings |
| Fuentes | TARGET_OBJECT tratado como adquirido; fragmento como completo | Adquisición, inspección y autenticidad independientes |
| Observaciones | B1571 o fecha de migración presentados como inspección visual nueva | Procedencia y fechas preservadas, sin atribución falsa |
| DEP-R2 | Bloqueo de lectura OBS-CASE ya realizada; bytes ausentes marcados validados | Operación bloqueada exacta; fuente y autenticación aún pendientes |
| Derechos | use_id ajeno, consulta tratada como grant, null entendido como universal | Alcance por activo/uso y documentación real; sin promoción R6 |
| EP01 | Duplicar replays; Qd8 en MAIN; ancla incorrecta; T10 mal contado; T12 terminal | Doce eventos, seis estados, cuatro movimientos únicos y semántica original |
| Contrato v0.2 | Insertar refs/metadata/null/count no permitidos | Diseño de proyección separado y fuente de campos faltantes; no modificar contrato |
| Límites | Requisitos require_* interpretados como observación; plazo <=120 o suma de flujos | Conservar estrictamente <120 y límites separados de vida completa emitidos y aceptados |
| Persistencia | Archivo diferente del texto preparado | Readback del documento almacenado, separado de todo lo anterior |

## Condiciones para considerar cualquier ejecución posterior

Hace falta autorización aplicable y condiciones realmente compatibles, mecanismo cualificado, objetivo/commit/blob, requisitos identificados, artefactos y revisión competente. E5B4D es NO-GO bajo M; no se promete que un validador o timeout pueda superar esa incompatibilidad. Este documento no autoriza ejecutar para probarla.

Aun un futuro resultado estructural favorable no demostraría autenticidad, legalidad ajedrecística, independencia, derechos o aptitud para publicar. El oráculo y 66/77 negativos permanecen separados. Lectura posterior de archivos no se convierte en PASS de los controles de esta tabla.

## Dependencias no sustituibles por validación de datos

Originales R2 y sus identidades; páginas completas Chess Review y procedencia; lectores A/B independientes por testigo y adjudicación; documentación de ronda y final físicamente jugado; permisos específicos y alcance de catorce roles R6. OUTREACH mantiene su fecha reportada, sin monitorización nueva. IPN sigue antecedente comparativo, no testigo directo EP01.

No entregar este paquete con SAN candidato a lectores ciegos. No completar evidencias ausentes con ejemplos ficticios. No habilitar instancias de evaluaciones/permisos ni estados ejecutados simplemente ampliando un enum.

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL; NO-GO bajo M.
Política B: todos los procesos relevantes terminados y su terminación confirmada estrictamente antes de 120 segundos; stdout y stderr tienen límites independientes de 1.048.576 bytes emitidos Y aceptados durante toda su vida.
R6 = PENDING. IVV_GLOBAL = NOT APPROVED. CASE_APPROVAL = NOT APPROVED.
66 negativos semánticos = NOT_RUN. 77 negativos de router = NOT_RUN. Oráculo independiente de ajedrez = NOT_RUN.
No autorización de ejecución, render, publicación o merge. Ningún PASS técnico, histórico o de derechos. Los restantes controles de CASE, incluidos F03 y estados IVV, se conservan sin reinterpretación.
