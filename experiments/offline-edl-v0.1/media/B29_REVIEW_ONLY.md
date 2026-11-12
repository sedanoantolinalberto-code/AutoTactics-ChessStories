# B29 — Revisor fail-closed de planes multimedia (REVIEW ONLY)

**Ámbito:** solo revisión estática de `engineyt-offline-edl-proposal/0.1`. No hay invocación de FFmpeg, navegador, modelos, red o procesos; no hay render ni publicación.

## Defecto observado por lectura y reproducción lógica

El `reviewMediaCapabilities()` de la rama base no exigía un esquema completo para los planes o sus fases. Podía devolver `PASS_LIMITED_SOURCE_ONLY` ante mutaciones documentales tales como:

- `plan.render_authorized = true`;
- `plan.phases[0].requested_capabilities = ["execute-shell"]`;
- reemplazar `plan.capability_map[0].id` por una identidad ajena;
- sustituir `plan.required_next_review` por `["EVERYTHING_APPROVED"]`;
- acortar el plan junto con el EDL a una sola escena.

La reproducción fue un modelo JavaScript extraído de la lógica del revisor (no una ejecución de Node contra los ficheros del repositorio).

## Cambios en esta rama

- Comparación exacta de claves para plan, fases y mapa de capacidades.
- Rechazo de autorizaciones añadidas al esquema declarativo.
- Asociación exacta de `requested_capabilities` al comportamiento del planificador.
- Asociación de identidades de herramienta, origen, disponibilidad y licencia al registro.
- Comprobación de `hard_blockers` y `required_next_review`.
- Revalidación de los flags de solo lectura del registro y del EDL de entrada.
- Fichero de pruebas adversariales: `plan-media.hardening.test.mjs` (16 casos).

## Comandos que DEBEN ejecutarse antes de cualquier aceptación

Desde la raíz del repositorio, con Node.js que soporte `node:test` y `structuredClone`:

```bash
node --test experiments/offline-edl-v0.1/media/plan-media.test.mjs
node --test experiments/offline-edl-v0.1/media/plan-media.hardening.test.mjs
node --test experiments/offline-edl-v0.1/tests/offline-edl.test.mjs
```

**Estado:** pruebas creadas, NO EJECUTADAS en la presente sesión. No se afirma PASS nativo ni equivalencia funcional completa. Requiere revisión independiente antes de cualquier merge.

## Frontera de seguridad

Este revisor no es un *sandbox* de ejecución y sus resultados no levantan `E5B4D`, `R17`, `TB09`, `G3`, derechos R6, ni habilitan generación, renderizado o publicación.

**Independencia:** la rama `review/engineyt-media-plan-failclosed-b29-20261112` parte exclusivamente de `research/engineyt-media-capability-map-v01-20261103`; no contiene T21-R09 ni cambios al supervisor.

**Prohibido** confundir `PASS_LIMITED_SOURCE_ONLY` con un GO productivo.


## CI aislado de B29

El workflow `.github/workflows/engineyt-b29-review-only.yml` se ha incorporado **solo a esta rama de revisión**. Configuración: `push` limitado a `review/engineyt-media-plan-failclosed-b29-20261112`; permisos `contents: read`; `ubuntu-latest`; Node.js 22; tres suites `node --test`. No instala dependencias ni solicita secretos.

GitHub Actions: https://github.com/sedanoantolinalberto-code/AutoTactics-ChessStories/actions

**Estado verificable en esta sesión:** ejecución de las funciones reales del repositorio en V8 con fixtures reales: 21/21 comprobaciones, 20 mutaciones rechazadas. El workflow ha sido versionado, pero su conclusión remota no es accesible desde la conexión actual; **no se afirma `node --test PASS` hasta obtener el job log**.
