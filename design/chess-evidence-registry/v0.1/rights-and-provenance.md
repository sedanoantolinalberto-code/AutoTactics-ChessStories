# Derechos y procedencia

Diseño documental; R6 PENDING. Fuentes fijadas: RIGHTS, BASELINE, CASE, HISTORY, B1571 y OUTREACH en source-reconciliation.md.

## Por activo y por uso

RightsRecord contiene asset_ref, consultation_status, commercial_status, titular si consta, permission_document_refs, uso, plataforma, territorio, vigencia, atribución y restricciones. Los desconocidos son null, nunca licencias supuestas. No se inventan documentos de permiso.

El registro R6 existente contiene catorce roles. El ejemplo incluye datos suministrados y el facsímil de Chess Review como muestra; no declara cobertura completa de los catorce ni sustituye el ledger. Los roles excluidos siguen sin estar autorizados. Si un activo excluido reaparece, su dependencia se reactiva.

- Los datos FEN suministrados no autorizan por sí mismos fotografías, tipografías, figuras o vídeo.
- La disponibilidad de PDFs para consulta/investigación no equivale a reproducción comercial.
- PERIODICAL-CHESS-REVIEW-1956 sigue excluido de la base de publicación por defecto.
- Fotos de planillas requieren autenticidad del objeto y permisos de la imagen, por separado.
- Noto Sans es candidato, no binario identificado ni autorización integral R6.
- Geometría propia propuesta no acredita originalidad independiente ni derechos sobre todos los componentes.
- Una futura versión silenciosa solo elimina una dependencia de audio si un manifiesto real confirma ausencia; no convierte audio en CLEARED.
- V-PRE-EV2 permanece dato técnico, no sexto activo visual autorizado.

## Cadena de procedencia

Conservar obra → objeto/ejemplar → reproducción/escaneo → región consultada → transcripción → afirmación.
No inferir que dos URLs representan objetos independientes, ni que el fragmento de Winter procede del PDF concreto de US Chess. derived_from_ref queda null cuando no está demostrado.

Git commit/blob/ruta identifica el archivo de repositorio observado. No autentica bytes del PDF, tinta de una planilla, titularidad o fuente primaria. No se calcula ningún hash en esta fase. Los hashes declarados R2 siguen DECLARED_NOT_CHECKED en CASE#/evidence y no se reutilizan como identidad del ejemplo.

## Dependencias externas

OUTREACH informa solicitudes enviadas a US Chess e IPN sin respuesta en la observación registrada el 15 de octubre. Este paquete no revisa correo, no confirma recepción humana, no envía solicitudes ni acepta costes. Una respuesta futura debe separarse en acceso, entrega de objeto y permisos específicos.

IPN/Goniec Krakowski pertenece al antecedente comparativo de 1942, no a una fuente directa de la partida EP01. La numeración de otro periódico no identifica el ejemplar correcto.

## Lectores e información sensible

BLIND exige dos lectores independientes por testigo, primero texto bruto congelado, después SAN, después adjudicación dentro del testigo y entre testigos. El autor de este paquete ya conoce el SAN candidato y no puede ser lector ciego A/B. No distribuir este paquete, el ejemplo o los diffs con la hoja de respuestas al lector ciego.

No se incorporan imágenes, contratos privados, correos completos, datos de participantes ni firmas. Los futuros documentos sensibles deberán tener referencias con acceso controlado; este diseño no publica su contenido.
