# Chess Stories — B1051–B1070 | Ejecución estricta y decisión de release

**Fecha:** 2026-10-14. Estos bloques **NO son pruebas del sistema**, son criterios de aceptación negativos/positivos destinados a trabajos futuros bajo autorización separada y mecanismos formalmente compatibles. Nada modifica E5B4D.

## DA — Cumplimiento estricto del entorno antes de ejecutar

### B1051 — El instante límite 120s es exclusivo

**Base:** Política B exige evidencia de terminación y confirmación antes de 120s.

**Aceptar solo con:** Certificado futuro debe probar t < 120 s para todos procesos pertinentes.

**Rechazar o mantener NO-GO si:** Usar timeout a 120s como prueba de cumplimiento.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1052 — Confirmación de descendientes además del proceso raíz

**Base:** La muerte del PID de un wrapper no demuestra la de los subprocesos.

**Aceptar solo con:** Cobertura formal de árbol o conjunto relevante y confirmación positiva.

**Rechazar o mantener NO-GO si:** Comprobar solo estado del proceso principal.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1053 — Emisión y recepción stdout se cuentan separadamente

**Base:** Un colector con truncamiento puede aceptar menos bytes de los emitidos.

**Aceptar solo con:** Evidencia futura de emitidos y aceptados por canal durante toda la vida.

**Rechazar o mantener NO-GO si:** Declarar PASS porque el log visible mide menos de límite.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1054 — El presupuesto stderr es independiente de stdout

**Base:** Un programa puede emitir poco stdout y demasiados bytes stderr.

**Aceptar solo con:** Dos cotas independientes 1.048.576 para cada flujo y modalidad.

**Rechazar o mantener NO-GO si:** Sumar flujos en un presupuesto único de 2 MB.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1055 — Terminación antes de deadline bajo fallo M

**Base:** El veredicto E5B4D constata incompatibilidad de garantías estrictas bajo M declarado.

**Aceptar solo con:** Solo solución formal compatible podría alterar NO-GO, nunca un benchmark superficial.

**Rechazar o mantener NO-GO si:** Ejecutar «porque probablemente acabará rápido».

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1056 — Prueba de código no ejecutado no se cuenta PASS

**Base:** 77 mutaciones del router y 66 negativas semánticas son propuestas.

**Aceptar solo con:** Dashboard conserva NOT_RUN hasta runner cualificado y resultados.

**Rechazar o mantener NO-GO si:** Elevar número de escenarios redactados a cobertura ejecutada.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1057 — Firma de source review no activa permisos de render

**Base:** Una PR source-only puede recibir aprobación documental limitada.

**Aceptar solo con:** Gate técnico explícito de ejecución se comprueba separadamente.

**Rechazar o mantener NO-GO si:** Usar aprobación de PR para lanzar FFmpeg, engines o Actions.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1058 — Metadatos de exit code no bastan para cierre completo

**Base:** Un proceso hijo podría seguir aunque padre reporte exit 0.

**Aceptar solo con:** Evidencia completa de cierre y flujos, con premisas del modelo M descritas.

**Rechazar o mantener NO-GO si:** Aceptar exit 0 del wrapper como terminación universal.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1059 — Hash de commit no sustituye observación de runtime

**Base:** Git documenta bytes fuente versionados, pero no comportamiento de programas.

**Aceptar solo con:** Dos tipos de evidencia SOURCE_MATCH y EXECUTION_OBSERVED.

**Rechazar o mantener NO-GO si:** Presentar SHA de JSON como prueba de seguridad de ejecución.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1060 — El resultado NO-GO se mantiene explícito en toda salida

**Base:** Los informes de investigación no deben suavizar restricciones al resumirse.

**Aceptar solo con:** Cualquier síntesis reproduce condición antes de 120s, dos límites y M.

**Rechazar o mantener NO-GO si:** Publicar resumen «ejecución lista» sin garantía establecida.

**Prioridad:** P0; **fuentes:** `POLICY`, `ROUTER`, `GITHUB`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## DB — Revisión de salida editorial, comerciales y decisión de continuidad

### B1061 — La historia debe conservar incertidumbre de terminación original

**Base:** El score candidato termina en ply82, no está certificado como planilla original.

**Aceptar solo con:** Guion dice lo probado y deja conflicto del original sin resolver.

**Rechazar o mantener NO-GO si:** Título anuncia mate final original como hecho acreditado.

**Prioridad:** P0; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1062 — No multiplicar episodios desde un solo PASS parcial

**Base:** Aunque EP01 tuviera edición sólida, EP02 necesita evidencia de su propio caso.

**Aceptar solo con:** Matriz por episodio y fuente independiente, sin herencia automática.

**Rechazar o mantener NO-GO si:** Clonar rótulo VERIFIED en series enteras.

**Prioridad:** P0; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1063 — SEO no puede convertir hipótesis en jugada real

**Base:** La palabra Qd8 podría aparecer en título de historia como si se hubiera jugado.

**Aceptar solo con:** Título/caption/metadata pasan filtro factual de rama.

**Rechazar o mantener NO-GO si:** Portada presenta Qd8 como jugada de Fischer.

**Prioridad:** P0; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1064 — Un producto premium no puede ocultar corrección factual

**Base:** La versión gratuita debe señalar que la partida continúa.

**Aceptar solo con:** Cada formato conserva evidencia mínima de realidad e incertidumbre.

**Rechazar o mantener NO-GO si:** Vender la verdad de Qd8 como aclaración exclusiva.

**Prioridad:** P0; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1065 — La ruta Shorts a newsletter precisa acciones reales

**Base:** URL de descripción de Short no clicable, no hay cuenta comprobada para embudo.

**Aceptar solo con:** Futura verificación de perfil, vídeo relacionado y pasos de usuario.

**Rechazar o mantener NO-GO si:** Proyectar inscripciones basándose en vistas sin links funcionales.

**Prioridad:** P1; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1066 — Una corrección pública exige mapa de superficies

**Base:** Si se retracta un claim, vídeos, eBook, portada y newsletter pueden conservarlo.

**Aceptar solo con:** Grafo claim_id→outputs con aviso o retirada por superficie.

**Rechazar o mantener NO-GO si:** Corregir solo fuente JSON y dar caso por solucionado.

**Prioridad:** P0; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1067 — La aceptación humana no sustituye derechos R6

**Base:** Un panel podría entender el vídeo y aun así contener fotos no licenciadas.

**Aceptar solo con:** IVV y rights signoff por separado, sin transferencia de GO.

**Rechazar o mantener NO-GO si:** Publicar porque participantes comprendieron combinación.

**Prioridad:** P0; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1068 — No fijar fecha de estreno por cantidad de investigación

**Base:** Acumular 100 bloques no demuestra que se haya podido generar media.

**Aceptar solo con:** Fecha depende de gate M, historia, R6, legibilidad e IVV verificables.

**Rechazar o mantener NO-GO si:** Planificar estreno desde número de commits.

**Prioridad:** P0; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1069 — El coste de verificación es una variable no observada

**Base:** Faltan datos de trabajo real para estimar escala comercial.

**Aceptar solo con:** Reporte distingue costes desconocidos de tiempos medidos y cotizaciones.

**Rechazar o mantener NO-GO si:** Modelar beneficio cierto desde supuestos no verificados.

**Prioridad:** P1; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B1070 — Decisión de release requiere conjunción de evidencias

**Base:** Historia, legalidad, R6, seguridad de ejecución, media e IVV son ámbitos distintos.

**Aceptar solo con:** GO solo con firmas y observaciones válidas de cada dominio, publicación aparte.

**Rechazar o mantener NO-GO si:** Declarar GO por mayoría de checks documentales.

**Prioridad:** P0; **fuentes:** `CASE`, `OVERLAY`, `R6`, `IVV`, `POLICY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Referencias

- `POLICY`: E5B4D model M y Política B congelados por decisión del usuario; no mecanismo calificado.
- `ROUTER`: GitHub PR #12, `src/ep01-cross-layer-router.v0.1.mjs` fuente no ejecutada.
- `GITHUB`: https://docs.github.com/en/actions/concepts/security/artifact-attestations; attestations no garantizan seguridad.
- `CASE`: PR #1 caso v0.2; `OVERLAY`: PR #11, `R6`: PR #7, `IVV`: PR #6, todos parciales o pendientes.

**Política B intacta:** todos los procesos relevantes terminados **y** con terminación confirmada **estrictamente antes de 120s** bajo modelo M, límite independiente stdout y stderr de 1.048.576 bytes **emitidos Y aceptados** por flujo durante su vida. E5B4D NO-GO. R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED. Ninguna ejecución, render, merge o publicación.
