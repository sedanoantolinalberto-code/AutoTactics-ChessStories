# Chess Stories — Investigación B721–B770 (2/2)

**Fecha:** 2026-10-14. Continuación de B671–B720. Son bloques documentales con base identificable y falsificador futuro, no resultados de validación. P0 = riesgo esencial; P1 = preparación condicional. Cualquier herramienta citada es marco conceptual, no integración instalada ni ejecución autorizada.

## BN — Procedencia de derivaciones y trazas observables sin ejecución

### B721 — Evento de proceso no implica terminación real

**Resultado documental o inferencia:** OpenLineage modela START/COMPLETE/FAIL de una ejecución declarada; un evento COMPLETE no atestigua que todos los descendientes terminaron bajo Política B.

**Comprobación falsable pendiente:** No usar eventos de linaje como terminación confirmada; pedir mecanismo formalmente independiente cuando se permita ejecutar.

**Prioridad:** P0. **Fuentes:** `OL`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B722 — Proveniencia por dataset versus legitimidad histórica

**Resultado documental o inferencia:** OpenLineage enlaza entradas y salidas de trabajos; conectar PGN→JSON→MP4 no verifica que el PGN represente actas originales.

**Comprobación falsable pendiente:** Ledger histórico separado del linaje de transformación de bytes, sin propagación de VERIFIED.

**Prioridad:** P0. **Fuentes:** `OLREF`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B723 — Identificar outputs múltiples de un mismo evento

**Resultado documental o inferencia:** Una ejecución futura podría producir vídeo, captions, portada y eBook; cada artefacto necesita identidad propia.

**Comprobación falsable pendiente:** Especificar un output por archivo con digest y derechos del formato, no «toda la campaña» en un registro genérico.

**Prioridad:** P1. **Fuentes:** `OL`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B724 — Trazas de software y pruebas de fuente no son la misma evidencia

**Resultado documental o inferencia:** OpenTelemetry define atributos de spans, logs y eventos; los spans futuros pueden explicar diagnóstico sin autenticar la partida.

**Comprobación falsable pendiente:** Separar observabilidad de software y expediente primario de 1956 en documentos y estados de gate.

**Prioridad:** P0. **Fuentes:** `OTEL`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B725 — Span completado no prueba límite de bytes emitidos

**Resultado documental o inferencia:** Un span exitoso puede omitir toda la salida stdout/stderr; Política B exige límites independientes de bytes emitidos y aceptados.

**Comprobación falsable pendiente:** No computar duraciones de spans como PASS de E5B4D sin prueba de exhaustividad de procesos y streams.

**Prioridad:** P0. **Fuentes:** `OTEL`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B726 — OpenLineage y trazas no requieren servicio externo en piloto

**Resultado documental o inferencia:** Un estándar disponible no hace obligatoria una dependencia online o broker que agrave el modelo de fallos M.

**Comprobación falsable pendiente:** Mantener diseño de manifest source-only sin agentes de telemetría ejecutándose durante NO-GO.

**Prioridad:** P1. **Fuentes:** `OL`, `OTEL`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B727 — Alertas de build como registros y no aceptación humana

**Resultado documental o inferencia:** Un dashboard puede mostrar COMPLIANT en chequeos parciales; eso no sustituye al revisor legal o histórico autorizado.

**Comprobación falsable pendiente:** Cada señal futura lleva gate al que aplica y clase de observación, con «no calificado» como valor permitido.

**Prioridad:** P0. **Fuentes:** `G`, `OL`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B728 — Identidad del editor que cambió un claim

**Resultado documental o inferencia:** Un commit identifica cuenta y cambio, no necesariamente revisor competente de historia ni autorización comercial.

**Comprobación falsable pendiente:** Registrar actor/editor y aprobador histórico/jurídico como roles distintos con evidencia de decisión externa.

**Prioridad:** P0. **Fuentes:** `PGEN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B729 — Contaminación de evidencia por export automático

**Resultado documental o inferencia:** Un pipeline de newsletter puede emitir el mismo error de F03 a muchos canales y multiplicar aparente autoridad.

**Comprobación falsable pendiente:** Diseño futuro de tracing de claim_id fuente a export_destinations sin convertir replicación en corroboración.

**Prioridad:** P0. **Fuentes:** `OL`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B730 — Retener solo logs necesarios sin volcar transcripciones

**Resultado documental o inferencia:** La observabilidad completa no implica subir textos de página 374–375, datos personales de lectores o secretos del repositorio.

**Comprobación falsable pendiente:** Diseñar diagnóstico por IDs, duración y error, minimizando contenido protegido y privacidad.

**Prioridad:** P0. **Fuentes:** `OTEL`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BO — Criptografía, fijación temporal y límites de atestación

### B731 — Atestación GitHub no garantiza ausencia de defectos

**Resultado documental o inferencia:** GitHub advierte que attestations asocian artefactos con fuente/build y no garantizan seguridad; menos aún veracidad de 1956.

**Comprobación falsable pendiente:** Separar output_provenance, implementation_qualified, historical_claim y release_authorized.

**Prioridad:** P0. **Fuentes:** `ATTEST`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B732 — Artefacto firmado y archivo distinto de la firma

**Resultado documental o inferencia:** Una firma para binary A no autoriza B tras compresión de plataforma; un MP4 derivado requiere identidad y revisión propias.

**Comprobación falsable pendiente:** Un manifest por bytes de cada output, sin reutilizar digest de master para Short recomprimido.

**Prioridad:** P0. **Fuentes:** `ATTEST`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B733 — Verificación offline sujeta a raíz confiable

**Resultado documental o inferencia:** GitHub explica que atestaciones pueden validarse offline con trusted roots, pero éstas pueden rotar y revocación no estar actualizada.

**Comprobación falsable pendiente:** Registrar fecha/scope de la raíz y advertir de límites de revocación cuando exista verificación real.

**Prioridad:** P1. **Fuentes:** `ATTVERIFY`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B734 — Sello de tiempo RFC3161 no autentica manuscrito

**Resultado documental o inferencia:** Una TSA puede respaldar que ciertos bytes existían antes de hora dada, no que la partida se jugara como dice el archivo.

**Comprobación falsable pendiente:** No usar sello de creación del PGN en 2026 como prueba de 1956; señalar exactamente qué se selló.

**Prioridad:** P0. **Fuentes:** `RFC3161`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B735 — Firmar consentimiento de lector no sustituye no-contaminación

**Resultado documental o inferencia:** Una credencial criptográfica verifica autoría de una declaración, no si el lector vio el SAN antes de leer la revista.

**Comprobación falsable pendiente:** Registro de elegibilidad y control de exposición externos; firma sirve únicamente para integridad de la declaración.

**Prioridad:** P0. **Fuentes:** `VC`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B736 — Credenciales verificables no reconocen ajedrez legal

**Resultado documental o inferencia:** Data Integrity W3C asegura integridad/autenticidad de credenciales bajo premisas técnicas; una firma de «mate verificado» no realiza oráculo.

**Comprobación falsable pendiente:** Sólo aceptar certificación de legalidad con proceso técnico cualificado y scope identificado, no por formato credencial.

**Prioridad:** P0. **Fuentes:** `VC`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B737 — PDM como etiqueta no transfiere derechos

**Resultado documental o inferencia:** Creative Commons distingue Public Domain Mark de CC0: PDM sólo señala obra supuestamente ya libre de restricciones conocidas.

**Comprobación falsable pendiente:** Si se encuentra revista marcada PDM, exigir juicio sobre su situación jurídica real antes de reutilizar facsímil.

**Prioridad:** P0. **Fuentes:** `CC0`, `COPY`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B738 — CC0 del aportante no licencia obra ajena

**Resultado documental o inferencia:** CC0 intenta renunciar derechos de quien lo aplica; alguien que sube un recorte no puede abandonar copyright del fotógrafo tercero.

**Comprobación falsable pendiente:** Revisar autor/titular y aplicabilidad por asset aunque un sitio muestre «CC0».

**Prioridad:** P0. **Fuentes:** `CC0`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B739 — Atribución CC BY y licencia de publicación son conceptos distintos

**Resultado documental o inferencia:** CC BY contempla uso comercial sujeto a condiciones, mientras una imagen sin licencia no queda amparada por citar al autor.

**Comprobación falsable pendiente:** Manifest registra licencia específica, titulares, atribución/aviso y modificaciones por componente.

**Prioridad:** P0. **Fuentes:** `CCLICENSE`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B740 — Artefacto protegido no debe subirse a CI para atestarlo

**Resultado documental o inferencia:** Atestar un facsímil no crea permiso para transmitirlo a almacenamiento de CI o logs públicos.

**Comprobación falsable pendiente:** Restringir artefactos no autorizados y no activar pipelines de atestación mientras E5B4D permanezca NO-GO.

**Prioridad:** P0. **Fuentes:** `ATTEST`, `COPY`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BP — Gobierno de ramas, revisión causal y cobertura declarativa

### B741 — Base semántica protegida antes de merge

**Resultado documental o inferencia:** La cola de merges de GitHub puede exigir checks de branch protection; existencia de PR draft no demuestra que tales checks se ejecutaron.

**Comprobación falsable pendiente:** Futura evaluación de reglas de protección existentes, sin crear Actions ni encolar fusiones.

**Prioridad:** P0. **Fuentes:** `MAIN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B742 — Checks requeridos no equivalen a oráculo cualificado

**Resultado documental o inferencia:** Un status verde de CI podría provenir de linter o script incompleto y no evaluar F03, Policy B ni media real.

**Comprobación falsable pendiente:** Mapear nombre de check a requisito específico; nunca interpretar «all checks green» como aprobación global.

**Prioridad:** P0. **Fuentes:** `MAIN`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B743 — Integrar 11 PR requiere orden causal documentado

**Resultado documental o inferencia:** PR #12 deriva de PR #1 y lee otros contratos; fusionar sin secuencia puede mezclar versiones incompatibles.

**Comprobación falsable pendiente:** Matriz de dependencies con head SHA y path por PR, bloqueo de merge sin owner y evidence gates.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B744 — Estado draft no equivale a permiso para editar cualquier rama

**Resultado documental o inferencia:** Autonomía del piloto permite source-only, pero no cambiar core/otros deportes ni bases de Motion congeladas.

**Comprobación falsable pendiente:** Revisar rutas afectadas contra lista de scope antes de cualquier commit, sin tocar archivos ajenos.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B745 — Dependencia semántica que cambia después del snapshot

**Resultado documental o inferencia:** Un blob PR #1 puede cambiar y dejar pins del router obsoletos aunque PR #12 siga draft.

**Comprobación falsable pendiente:** Recalcular snapshot de dependencias como revisión documental, sin correr pruebas, y marcar DRIFT.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B746 — Conflicto de interés revisor-autor

**Resultado documental o inferencia:** Quien implementa router no debe ser el único validador de su legalidad/IVV; un auto-review puede confirmar el mismo sesgo.

**Comprobación falsable pendiente:** Proponer ownership de test independente con rol y firma cuando exista revisor externo.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B747 — Revisión de PR no cambia autorizaciones de publicación

**Resultado documental o inferencia:** Aprobar un diff de documentación no significa que R6, IVV y Policy B estén satisfechos.

**Comprobación falsable pendiente:** Preservar checkboxes independientes y voto de release específico posterior; ninguna aprobación implícita.

**Prioridad:** P0. **Fuentes:** `G`, `MAIN`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B748 — Resolver conflicto editando fuente canónica sin versión

**Resultado documental o inferencia:** Cambiar visibility de V-PRE-EV2 a VISUAL para satisfacer un plano haría falso el caso semántico anterior.

**Comprobación falsable pendiente:** Establecer owner de contrato y regla de bump/version de cualquier cambio de clase factual.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B749 — Cobertura de mutaciones por amenaza y no por cantidad

**Resultado documental o inferencia:** 77 casos IR no ejecutados pueden duplicar el mismo riesgo; aumentar IDs da falsa sensación de avance.

**Comprobación falsable pendiente:** Reordenar catálogo por clase de fallo y evidencia que lo ejecutaría, sin contarlo como test.

**Prioridad:** P1. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B750 — Protección contra aprobación parcial fuera de alcance

**Resultado documental o inferencia:** Un reviewer de copyright puede aceptar tipografía OFL pero no legalidad ajedrecística; su firma no debe cerrar gate de historia.

**Comprobación falsable pendiente:** Aprobación tipada por gate, objeto y jurisdicción; rechazo de credencial global no justificada.

**Prioridad:** P0. **Fuentes:** `G`, `VC`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BQ — Evidencia multimedia final y referencias reproducibles de escenas

### B751 — URI temporal sólo sirve tras existir un archivo

**Resultado documental o inferencia:** W3C media fragments permite `#t=10,20`; una URL teórica no prueba que haya un MP4 validado.

**Comprobación falsable pendiente:** No incluir enlaces de escenas como evidencia audiovisual hasta tener archivo y reproducción inspeccionada.

**Prioridad:** P0. **Fuentes:** `FRAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B752 — Referencia de medio medioabierta precisa

**Resultado documental o inferencia:** Una selección temporal `[start,end)` evita duplicar el corte entre T10 y T11, pero requiere casar timebase real.

**Comprobación falsable pendiente:** Futura comparación de intervalos con PTS reales, no con duration targets del storyboard.

**Prioridad:** P0. **Fuentes:** `FRAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B753 — Checksum del MP4 no confirma rótulos visibles

**Resultado documental o inferencia:** Un archivo puede ser íntegro y mostrar HIPOTÉTICA oculto por UI; contenido semántico necesita revisión perceptiva independiente.

**Comprobación falsable pendiente:** Separar fixity del archivo, verdad de fotogramas y legibilidad móvil por dispositivo.

**Prioridad:** P0. **Fuentes:** `G`, `ATTEST`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B754 — Un thumbnail es otro artefacto de verdad

**Resultado documental o inferencia:** Una portada derivada de Qd8 puede recortar el aviso NO JUGADA y falsear el hecho aunque el vídeo esté bien.

**Comprobación falsable pendiente:** Manifiesto thumbnail con claim_id y revisión de crop, independiente del timeline original.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B755 — La secuencia T05–T07 requiere tres observables distintos

**Resultado documental o inferencia:** Entrada en hipotética, jugada hipotética y retorno real son tres estados temporales, no una única etiqueta de escena.

**Comprobación falsable pendiente:** Futura QA frame-based comprueba preaviso, persistencia y restauración atómica.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B756 — Intervalo de elipsis y momento de captura no se solapan como una jugada

**Resultado documental o inferencia:** T10 abarca catorce medias jugadas; T11 representa resultado posterior y captura, no una ejecución de todo lo omitido.

**Comprobación falsable pendiente:** Separar ID de gap y ID de evento real de captura en medios y subtítulos.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B757 — Texto accesible asociado a fotogramas no hereda derechos

**Resultado documental o inferencia:** La descripción de un gráfico original puede ser propia, pero copiar extensa crónica de 1956 como alt text no libera copyright.

**Comprobación falsable pendiente:** Escribir resumen original y mantener citas mínimas dentro de política de derechos del soporte.

**Prioridad:** P0. **Fuentes:** `W3CA`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B758 — No confundir duración del viewer y duración del source

**Resultado documental o inferencia:** Si el feed reproduce a velocidad distinta o bucle, las coordenadas de Media Fragment source no equivalen a tiempo observado por usuario.

**Comprobación falsable pendiente:** Registrar timebase de archivo y momento de exposición real separadamente en futuro IVV.

**Prioridad:** P1. **Fuentes:** `FRAG`, `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B759 — Atenuación al final no significa mate

**Resultado documental o inferencia:** Un fade-to-black tras ply50 puede sugerir cierre de partida si la etiqueta de continuidad desaparece pronto.

**Comprobación falsable pendiente:** Último estado visible incluye señal editorial no terminal, comprobada en reproductor real.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B760 — Cambios de plataforma invalidan evidencia visual antigua

**Resultado documental o inferencia:** Nueva overlay IA, comentarios o controles UI pueden tapar avisos sin modificar el MP4.

**Comprobación falsable pendiente:** Versionar revisión por plataforma/fecha/cliente y reabrir IVV de presentación al variar UI sustancialmente.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## BR — Auditoría para decisión de inversión, publicación y siguiente evidencia

### B761 — Prerrequisito histórico y prerrequisito comercial diferentes

**Resultado documental o inferencia:** La revista puede confirmar secuencia publicada sin aclarar derechos de recorte; ambos requisitos independientes.

**Comprobación falsable pendiente:** Matriz HISTORY_WITNESS frente a ASSET_RIGHTS por objeto antes de aceptar un plan de producción.

**Prioridad:** P0. **Fuentes:** `G`, `COPY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B762 — Tipo de GO por función de salida

**Resultado documental o inferencia:** Un vídeo mudo interno no equivale a estreno de canal, eBook de pago o entrega a usuario; cada salida tiene requisitos propios.

**Comprobación falsable pendiente:** Política de release por `private_stimulus`, `public_short`, `paid_pdf`, `newsletter` con precondiciones explícitas.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B763 — Número de investigaciones no es avance verificable

**Resultado documental o inferencia:** Los lotes B1–B770 acumulan hipótesis; no se han convertido en tests del motor ni revisión de archivo A/B.

**Comprobación falsable pendiente:** Reportar separadamente investigación, corrección source-only, prueba ejecutada, validación y release.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B764 — La primera evidencia independiente no tiene por qué ser un MP4

**Resultado documental o inferencia:** Un registro de renovación de copyright o una lectura cualificada de una página podría reducir incertidumbre sin lanzar renderer.

**Comprobación falsable pendiente:** Priorizar extracción/gestión de originales legales como trabajo no ejecutivo, conservando no-contacto si no autorizado.

**Prioridad:** P0. **Fuentes:** `G`, `COPY`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B765 — Modelo M puede bloquear todas las ejecuciones aun con licencia completa

**Resultado documental o inferencia:** Aunque R6 cerrase, E5B4D NO-GO bajo M seguiría vigente; las autorizaciones no son intercambiables.

**Comprobación falsable pendiente:** Acreditar mecanismo formal compatible con Política B antes de ejecutar cualquier herramienta del proyecto.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B766 — Prueba negativa futura requiere verdad esperada independiente

**Resultado documental o inferencia:** Un test de router que compara solo contra fixture copiado puede proteger invariantes equivocadas.

**Comprobación falsable pendiente:** Revisión de expected outcomes contra reglas y testigo distinto cuando haya runner cualificado.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B767 — Calidad de monetización posterior a veracidad

**Resultado documental o inferencia:** CTR y conversión de Shorts no validan que Qd8 se presentó como no jugada o que T12 no era mate final.

**Comprobación falsable pendiente:** Revisión factual como condición antecedente a optimización de anuncios, newsletter o precio.

**Prioridad:** P0. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B768 — Costo de mantener activos y fuentes por edición

**Resultado documental o inferencia:** Cada update de plataformas, claim o archivo puede invalidar revisiones de varios soportes; coste operativo desconocido.

**Comprobación falsable pendiente:** Diseño de matriz de dependencias con recertificación por cambio y coste medido a partir de trabajos reales posteriores.

**Prioridad:** P1. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B769 — Criterio de parada del backlog fuente-only

**Resultado documental o inferencia:** Otra tanda de 100 debe explicar qué incertidumbre reduce y qué evidencia nueva incorpora, no sólo nueva terminología.

**Comprobación falsable pendiente:** Regla editorial: filtrar B771+ por novedad de fuente/falsificador/decisión respecto a B1–B770.

**Prioridad:** P1. **Fuentes:** `G`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

### B770 — Paquete de decisión no suplanta responsable humano

**Resultado documental o inferencia:** Una checklist documental puede preparar recomendación, pero no firmar revisión humana independiente, conceder licencias ni revocar NO-GO.

**Comprobación falsable pendiente:** Si algún gate llega a cumplir evidencias, registrar decisor competente y alcance, sin auto-certificar por volumen de commits.

**Prioridad:** P0. **Fuentes:** `G`, `VC`. **Estado:** RESEARCHED_DOCUMENTARY_ONLY.

## Bibliografía

- `G`: Repositorio privado Chess Stories, PR #1, #3, #4, #7, #11, #12 e issue #8. Prueba de estado documental, no ejecución ni fuente independiente de 1956.
- `OL`: https://openlineage.io/docs/spec/examples/
- `OLREF`: https://openlineage.io/docs/client/python/development/api-reference/openlineage.client/
- `OTEL`: https://opentelemetry.io/docs/specs/semconv/general/
- `ATTEST`: https://docs.github.com/en/actions/concepts/security/artifact-attestations
- `ATTVERIFY`: https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/verify-attestations-offline
- `RFC3161`: https://www.rfc-editor.org/info/rfc3161/
- `VC`: https://www.w3.org/TR/vc-data-integrity/
- `CC0`: https://wiki.creativecommons.org/wiki/CC0_FAQ
- `CCLICENSE`: https://creativecommons.org/licenses/by/4.0/deed.es
- `COPY`: https://www.copyright.gov/circs/circ15a.pdf
- `MAIN`: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue
- `W3CA`: https://www.w3.org/WAI/tutorials/images/complex/
- `FRAG`: https://www.w3.org/TR/media-frags/
- `WCAG`: https://www.w3.org/TR/WCAG22/
- `PGEN`: https://www.w3.org/TR/prov-o/
- `PGN`: https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt

## Límites NO-GO inalterados

E5B4D NO-GO bajo M; todos los procesos relevantes terminados y terminación confirmada estrictamente antes de 120 s, stdout/stderr **por separado** ≤1.048.576 bytes **emitidos y aceptados toda la vida**; R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, oráculo NOT_RUN; sin código ejecutado, tests, renderer, Actions, main merge ni publicación.
