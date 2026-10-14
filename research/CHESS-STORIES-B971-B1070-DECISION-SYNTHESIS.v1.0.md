# Chess Stories — B971–B1070: criterios de aceptación y decisión

**Fecha:** 2026-10-14. **Scope:** exclusivamente Chess Stories EP01. **100 nuevas investigaciones documentales** en diez áreas CS–DB (10 por área); **95 P0 y 5 P1**. No son 95 defectos ni 100 tests: el estado común es `RESEARCHED_DOCUMENTARY_ONLY`. Se contrastaron los contratos de caso PR #1, overlays PR #11, versión editorial PR #4 y los gates de PR #12/issue #8.

## Qué aporta esta tanda frente a B871–B970

Los B871–B970 documentaron cada evento T01–T12. **B971–B1070 añaden una decisión triádica por hipótesis**: (1) objeto/afirmación fuente; (2) evidencia precisa que permitiría aceptar el requisito; (3) observación que obligaría a rechazarlo o clasificarlo inconcluso. Ningún criterio se da por probado por redactarlo. Se han evitado títulos exactamente repetidos de los 800 B171–B970 registrados; existe solapamiento conceptual, y el índice NO acredita cien descubrimientos externos independientes.

## Diez paquetes de evaluación

| Bloques | Tipo de evaluación | Evidencia futura que realmente haría avanzar | Bloqueo actual |
|---|---|---|---|
| B971–980 CS | Testigo de 1956 | Identidad exacta de *Chess Review* diciembre 1956, pp.374–375, página/edición/objeto y acceso legítimo | No original plenamente inspeccionado |
| B981–990 CT | Lecturas ciegas | Hojas A y B de lectores independientes no expuestos al SAN moderno, cerradas antes de adjudicación | LECTORES NO DESIGNADOS |
| B991–1000 CU | Legalidad de estados | Oráculo competente registra seis campos FEN y legalidad por transición, apartado de fuente histórica | LEGAL_ORACLE NOT RUN; E5B4D NO-GO |
| B1001–1010 CV | Integración semántica | Contratos preservan identidad MAIN/HYP, replay, 14 plies omitidos y T12 no terminal | 77 negativos IR / 66 semánticos NOT RUN |
| B1011–1020 CW | Media verdadera | Fotogramas reales con Qd8 siempre marcado NO JUGADA, retorno T07 correcto, Nxd1 sin borrar torre h1 | MEDIA NO RENDERED |
| B1021–1030 CX | IVV humana | Ítems no inductivos sobre amenaza, hipotética, elipsis, víctima, torre h1 y cierre; muestra/umbrales preescritos | IVV_GLOBAL NOT APPROVED |
| B1031–1040 CY | Derechos R6 | Licencia atribuida a cada binario de pieza/font/foto/audio/portada según uso y territorio | R6 PENDING |
| B1041–1050 CZ | Accesibilidad audiovisual | QC en medios y dispositivos reales: rótulos legibles, texto alternativo, seguridad visual, idioma | SIN MEDIO Y SIN QC |
| B1051–1060 DA | Política B/M | Prueba formalmente suficiente de todos los procesos terminados y confirmados antes del límite **estricto** y bytes en ambos streams | **E5B4D NO-GO BAJO M** |
| B1061–1070 DB | Decisión comercial/editorial | Acta de aprobación tipada para historia, legalidad, derechos, IVV, media y ejecución; salida/publicación por soporte | NO RELEASE/PUBLISH |

## Observaciones sustantivas fundamentadas

**Fuente histórica y procedencia no transitiva.** PREMIS 3 describe objetos, eventos, agentes y derechos; [W3C PROV-O](https://www.w3.org/TR/prov-o/) permite derivaciones y responsabilidades. Son marcos adecuados para hojas de lectores y facsímiles, pero ninguno convierte un PGN moderno o el resumen de Winter en el scoresheet manuscrito original. Fuente histórica: [Edward Winter sobre Byrne–Fischer](https://www.chesshistory.com/winter/extra/byrnefischer.html). El problema de la terminación original permanece explícitamente abierto.

**Legalidad diferente de autenticación histórica.** [FIDE Laws 2023](https://handbook.fide.com/chapter/e012023) respalda comprobaciones modernas de reglas, no qué anotó un jugador en 1956. Incluso si una línea de SAN fuera legal, el investigador debe contrastarla con el testigo y no convertir Qd8 en movida histórica.

**Truth overlays por frame.** El mínimo no negociable de T05/T06 es `HIPOTÉTICA · NO JUGADA` persistente; T07 solo lo retira tras restauración atómica MAIN/V-P1; T10 declara saltadas 14 medias jugadas y `V-PRE-EV2` es TECHNICAL_ONLY; T11 lleva caballo negro de c3 a d1 y captura torre blanca d1, conservando torre blanca h1; T12 termina la pieza editorialmente en ply50, no concluye el juego histórico. Estos predicados proceden de **source-only contractual candidates**, no de frames medidos.

**IVV y accesibilidad.** [WCAG 2.2 — medios basados en tiempo](https://www.w3.org/WAI/WCAG22/Understanding/time-based-media.html) distingue captions, descripción de audio y alternativas; que el guion incluya una etiqueta no acredita accesibilidad ni comprensión de su efecto en pantalla. Los diez ítems CX proponen preguntas concretas, sin reclutar a nadie o procesar datos personales.

**C2PA y derechos.** La [especificación C2PA 2.2](https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html) declara relaciones de ingredientes y validación técnica; expresamente evita juzgar si una procedencia es buena o mala. No despeja copyright ni R6 de piezas, revistas o imágenes.

**Atestaciones y Política B.** [GitHub artifact attestations](https://docs.github.com/en/actions/concepts/security/artifact-attestations) vincula software con su fuente/build bajo verificaciones, pero no garantiza seguridad. El proyecto conserva el resultado formal **STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL** para el modelo M. Ninguna respuesta de `timeout`, `exit 0` o checksum unilateral es prueba de la terminación del conjunto total de procesos/streams exigido.

## Decisión de investigación a partir de B1070

El siguiente rendimiento marginal de alto valor no es otro centenar de requisitos con títulos nuevos, sino **obtener evidencia de otra clase**:

- Primero, adjudicación independiente del testigo exacto y de qué parte del final se publicó frente a qué parte fue jugada.
- En paralelo, expediente jurídico R6 por recurso concreto y material de producción realmente disponible.
- Para pasar a ejecución, una solución demostrablemente compatible con **Política B bajo M**, no solo scripts de diagnóstico sin ejecutar.
- Solo después, oráculo cualificado, export real, control de accesibilidad y IVV con preregistro.

La tarea del asistente se ha limitado a preparar criterios documentales en la rama draft autorizada. Sin firmas simuladas, contactos de custodios, pruebas, render ni publicación.

## Archivos y controles

Cinco tomos de 20, el registro `research/CHESS-STORIES-B971-B1070-ACCEPTANCE-REGISTER.v1.0.json` y esta síntesis. El registro contiene título, prioridad, base documental, condición de aceptación y condición de rechazo/inconclusión de cada uno de los 100 bloques.

**Frozen:** E5B4D = NO-GO bajo failure model M. Política B: **todos** los procesos relevantes deben terminar **y** confirmarse terminados **estrictamente antes de 120 s**; límites independientes de stdout y stderr de **1.048.576 bytes emitidos y aceptados** en toda su vida. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, testigos originales incompletos, oráculo NOT RUN. Sin tests, build, Actions, render, fusión `main` ni publicación.
