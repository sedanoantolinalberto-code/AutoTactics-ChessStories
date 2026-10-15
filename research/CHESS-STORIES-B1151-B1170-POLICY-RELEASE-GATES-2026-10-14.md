# Chess Stories — B1151–B1170 | Modelo M y release evidence

**Fecha:** 2026-10-14. Únicamente criterios source-only propuestos. No cambia E5B4D NO-GO, no se ha ejecutado ni instalado ningún proceso del proyecto y no hay autorización de publicación.

## DK — Modelo M: observación de terminación y límites estrictos

### B1151 — Deadline de terminación es exclusivo

**Base sustentada/inferencia:** El requisito exige procesos terminados y confirmados ANTES de 120 segundos.

**Observación que permitiría aceptar:** Certificado de cada proceso pertinente con tiempo estrictamente menor que 120.

**Rechazar o mantener NO-GO si:** Falla si algún proceso confirma en t=120.000 o después

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1152 — Descendientes relevantes no desaparecen con PID raíz

**Base sustentada/inferencia:** La terminación de un wrapper no implica fin de procesos que lanzó.

**Observación que permitiría aceptar:** Conjunto de procesos y descendientes con cobertura de identidad y observación.

**Rechazar o mantener NO-GO si:** No aceptar solo exit code 0 del padre

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1153 — El stdout emitido importa aunque collector trunque

**Base sustentada/inferencia:** Un receptor puede registrar menos bytes de los emitidos físicamente.

**Observación que permitiría aceptar:** Prueba independiente de bytes emitidos y aceptados de stdout en toda su vida.

**Rechazar o mantener NO-GO si:** Falla si solo se cuentan bytes retenidos en log

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1154 — stderr tiene límite de canal autónomo

**Base sustentada/inferencia:** Política B fija stdout y stderr cada uno ≤1.048.576 emitidos/aceptados.

**Observación que permitiría aceptar:** Medición separada por stream y sin mezclar presupuestos.

**Rechazar o mantener NO-GO si:** No sumar los dos límites para permitir uno sobredimensionado

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1155 — Evento COMPLETE en trazas no demuestra cobertura

**Base sustentada/inferencia:** Un span completado puede omitir subprocesos o salidas.

**Observación que permitiría aceptar:** Demostración formal de exhaustividad del monitor y de condición de fallo M.

**Rechazar o mantener NO-GO si:** No sustituir evidencia formal por telemetría parcial

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1156 — Un timeout no garantiza matar todas las tareas

**Base sustentada/inferencia:** Al vencer un plazo el controlador puede fallar, dejando descendientes activos.

**Observación que permitiría aceptar:** Garantía demostrada de terminación y confirmación bajo todas las hipótesis del modelo M.

**Rechazar o mantener NO-GO si:** No declarar GO con timeout convencional

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1157 — Criterio de revisión no relaja modelo de fallo

**Base sustentada/inferencia:** Un benchmark rápido de cuatro inputs no prueba garantías para entradas adversariales.

**Observación que permitiría aceptar:** Exigir compatibilidad matemática o modelo aprobado sin alterar M.

**Rechazar o mantener NO-GO si:** Falla cualquier conclusión basada solo en casos felices

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1158 — Registrar estados NOT_RUN sin verdades implícitas

**Base sustentada/inferencia:** Los 77 negativos IR y 66 semánticos son borradores de especificaciones.

**Observación que permitiría aceptar:** Conservar NOT_RUN hasta ejecución lícita y resultados reales verificables.

**Rechazar o mantener NO-GO si:** No indicar tasa de 100 % de tests superados con 0 ejecutados

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1159 — La aprobación de PR no habilita CI

**Base sustentada/inferencia:** Revisar documentos source-only es otra acción distinta de ejecutar Github Actions.

**Observación que permitiría aceptar:** Permiso específico y evidencia Policy B antes de toda ejecución.

**Rechazar o mantener NO-GO si:** Rechazar activación automática por merge de PR

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1160 — E5B4D NO-GO persiste hasta decisión formal

**Base sustentada/inferencia:** El resultado bajo M ya está registrado como STRICT_GUARANTEES_INCOMPATIBLE.

**Observación que permitiría aceptar:** Solo solución formal que respete todos los invariantes permitiría cambiar gate.

**Rechazar o mantener NO-GO si:** No cambiar estado por número de commits o bloques

**Prioridad:** P0. **Referencias:** POLICY;GITHUB. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## DL — Paquete de publicación: independencia y riesgo residual

### B1161 — Autenticación del resultado no valida método terminal

**Base sustentada/inferencia:** El score secundario puede decir 0–1 aunque el original difiera en abandono/mate.

**Observación que permitiría aceptar:** Dictamen histórico por claim y texto de incertidumbre aprobado.

**Rechazar o mantener NO-GO si:** Falla título que presenta mate original como hecho sin testigo

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1162 — Legalidad y fuente primaria requieren dos decisiones

**Base sustentada/inferencia:** Una transición puede ser legal y no figurar en testigo de torneo.

**Observación que permitiría aceptar:** Reportes independientes por validación de rules y verificación original.

**Rechazar o mantener NO-GO si:** No emitir historical VERIFIED por engine PASS

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1163 — Rights R6 por soporte frente a evento único

**Base sustentada/inferencia:** Un sprite licenciado para Short no cubre automáticamente ebook o publicidad.

**Observación que permitiría aceptar:** BOM final con alcance comercial específico y evidencia de titular.

**Rechazar o mantener NO-GO si:** No autorizar publicación global por licencia parcial

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1164 — Accesibilidad y verdad factual son gates diferentes

**Base sustentada/inferencia:** Un vídeo muy accesible puede contar Qd8 como si fuera real.

**Observación que permitiría aceptar:** Separar WCAG/lectura de evaluación de comprensión histórica.

**Rechazar o mantener NO-GO si:** No pasar IVV por solo contraste o captions

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1165 — IVV humana depende de estímulo real y lícito

**Base sustentada/inferencia:** Un preregistro no reemplaza vídeo renderizado con derechos ni consentimiento.

**Observación que permitiría aceptar:** Acta de resultados reales, criterios preregistrados y revisión del medio.

**Rechazar o mantener NO-GO si:** No publicar «IVV PASS» por el protocolo escrito

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1166 — Cada derivado tiene compromiso de verdad propio

**Base sustentada/inferencia:** Una miniatura, clip EN y eBook pueden alterar claims al recortar o traducir.

**Observación que permitiría aceptar:** Matriz claim_id→asset_id→auditoría por superficie.

**Rechazar o mantener NO-GO si:** No heredar PASS al derivado modificado sin examen

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1167 — Correcciones posteriores no sustituyen QA previo

**Base sustentada/inferencia:** La capacidad de publicar erratas no permite estrenar datos falsos a sabiendas.

**Observación que permitiría aceptar:** Plan de actualización versionado como salvaguarda adicional.

**Rechazar o mantener NO-GO si:** Falla la lógica «podremos arreglarlo luego»

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1168 — Aprobaciones parciales tienen responsables específicos

**Base sustentada/inferencia:** Jurista, lector ciego y revisor técnico cubren dominios distintos.

**Observación que permitiría aceptar:** Cada gate registra aprobador competente, objeto y evidencias efectivamente examinadas.

**Rechazar o mantener NO-GO si:** No agrupar firmas o simular autorización humana

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1169 — La preparación de marketing espera a fuente veraz

**Base sustentada/inferencia:** SEO, premium y newsletter deben evitar vender un score no cualificado.

**Observación que permitiría aceptar:** Checklist de claims mínima antes de hacer promesas comerciales.

**Rechazar o mantener NO-GO si:** No derivar fecha de estreno desde número de investigaciones

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1170 — GO de publicación es conjunción, no puntuación media

**Base sustentada/inferencia:** Historia, legalidad, derechos, Policy B, seguridad visual, IVV y permiso de publicación deben satisfacerse.

**Observación que permitiría aceptar:** Decisión documentada que exige cada gate necesario completo.

**Rechazar o mantener NO-GO si:** No elevar release GO con mayoría de casillas verdes

**Prioridad:** P0. **Referencias:** CASE;R6;IVV;PROV. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Fuentes

- `POLICY`: E5B4D modelo M + Política B congelados por el usuario.
- `GITHUB`: https://docs.github.com/en/actions/concepts/security/artifact-attestations
- `CASE`: PR #1 source-only; `R6`: PR #7 PENDING; `IVV`: PR #6 draft; `PROV`: https://www.w3.org/TR/prov-o/

**Política B estricta sin cambios:** todos los procesos relevantes deben **terminar y tener terminación confirmada estrictamente antes de 120 segundos**, stdout y stderr cada uno máximo independiente de **1.048.576 bytes emitidos Y aceptados durante toda la vida del proceso**. E5B4D NO-GO bajo M; R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, original 1956 no autenticado completamente, oráculo legal NOT RUN; sin tests, render, Actions, main merge o publicación.
