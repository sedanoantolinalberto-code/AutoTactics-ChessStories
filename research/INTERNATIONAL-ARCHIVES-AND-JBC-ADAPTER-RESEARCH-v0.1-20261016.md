# Engine YT / Chess Stories — International archive discovery and JBC comparison v0.1
Date: 2026-10-16
Scope: documentary research only, delegated Chess Stories pilot. Other sports/history formats are **future strategy**, not implemented or authorized expansion.
Status: OFFICIAL_DISCOVERY_VERIFIED; OBJECT_LEVEL_RIGHTS_UNASSESSED; NO_INTEGRATION_IMPLEMENTED.

## Baseline
Continue from JBC research commit `48103c1864c874bdea60e013b65500595e104e87`. Do not re-open closed F5, narrative storyboard, visual, IVV or E5B4D decisions. The IPN-supplied JBC issue locator for *Goniec Krakowski* #274 (22–23 November 1942) remains `https://www.jbc.bj.uj.edu.pl/dlibra/publication/24391/edition/18938`: institutional edition reference only; issue page images NOT inspected.

## Verified international archive landscape

| Archive | Country / scope | Discovery / technical affordance observed in institutional documentation | Engine application / constraint |
|---|---|---|---|
| **Jagiellonian Digital Library (JBC)** https://www.jbc.bj.uj.edu.pl/dlibra | Poland | dLibra public editions, bibliographic hierarchy, identifiers; some catalogue export affordances in UI. No bulk harvesting endpoint or IIIF confirmed live. | Source of 1942 comparator, older chess periodicals, provenance and rights patterns; issue image access unresolved |
| **POLONA / Biblioteka Narodowa** https://polona.pl/ | Poland | Polish national library states open internet access to public-domain items, licensed materials and metadata; copyrighted materials can have reading-room restrictions. https://www.katalogi.bn.org.pl/uslugi/centrum-kompetencji/udostepnianie-zbiorow-cyfrowych/ | Supplementary Polish chess press/library holdings; item-level rights must be checked |
| **Gallica / BnF** https://gallica.bnf.fr/ | France | BnF IIIF Presentation + Image access, documented public API; OAI-PMH descriptive metadata with persistent ARK and retrieval-date attribution. https://www.data.gouv.fr/dataservices/api-gallica-iiif ; https://api.bnf.fr/fr/entrepot-oai-pmh-de-gallica-et-des-expositions-virtuelles-oai-num | High-potential page-based provenance experiments on a future verified chess source; metadata reuse distinct from image reuse |
| **Biblioteca Virtual de Prensa Histórica** https://prensahistorica.mcu.es/ | Spain | Spanish Culture Ministry: over 17 million pages, 2.4 million issues from 133+ participating libraries as of Dec 2025; text search, OAI-PMH, SRU. https://prensahistorica.mcu.es/ | Spanish historical chess/tournament press discovery; no specific chess item validated |
| **Hemeroteca Digital / Biblioteca Nacional de España** https://hemerotecadigital.bne.es/ | Spain | Issue calendars, bibliographic entries, originals and digitized issues by title. Example https://hemerotecadigital.bne.es/hd/es/card?oid=0002000232 | Complementary Spanish primary witnesses; rights and exact page access per issue |
| **Chronicling America / Library of Congress** https://www.loc.gov/collections/chronicling-america/ | USA | Current access via loc.gov API (since 2025); text/image services and IIIF; no key for public API, recommended rate limiting. https://www.loc.gov/apis/additional-apis/chronicling-america-api/ ; https://www.loc.gov/collections/chronicling-america/about-this-collection/technical-information/ | Historic chess news and cross-issue witness discovery; original primary sources must be identified case by case |
| **US Chess Chess Life / Chess Review Archive** https://new.uschess.org/chess-life-digital-archives | USA | Text-searchable per-issue/year PDFs; explicitly *personal and research use only*, permission beyond fair use. | Already targeted Byrne–Fischer 1956 primary sources, rights NOT CLEARED |
| **British Library / British Newspaper Archive** https://www.bl.uk/collection | UK | British Library lists digitized newspaper collection via BNA and library reading-room access. | Historical chess coverage; remote accessibility and reproduction restrictions need assessment |
| **Deutsche Digitale Bibliothek (DDB)** https://www.deutsche-digitale-bibliothek.de/ | Germany | Documented API requiring registered user's API key; descriptive metadata generally CC0 but binary content per-object rights. https://labs.deutsche-digitale-bibliothek.de/app/ddbapi/ | Future catalog discovery API candidate, not installed |
| **Delpher / KB** https://www.delpher.nl/nl/boeken | Netherlands | Portal reports 2m+ historical newspaper issues 1618–1995, historical books and periodicals. | Search chess reports in Dutch print; access and rights per object |
| **National Library of Norway** https://www.nb.no/ | Norway | Institutional digitization pipeline includes OCR, structure analysis, preservation formats; some materials reading-room only. https://www.nb.no/en/digitizing-at-the-national-library/ | Distinguish digitization from externally reusable assets |
| **Hemeroteca Digital Brasileira** https://memoria.bn.gov.br/hdb/DefaultNew.aspx | Brazil | National Library catalogue with searches by periodical, period and place. | Portuguese-language tournament/comparator discovery; technical interface and rights not assessed |
| **Europeana** https://www.europeana.eu/ | Pan-European aggregator | Standardized rights statements; IIIF Presentation objects with individual canvases and rights metadata. https://pro.europeana.eu/index.php/page/available-rights-statements ; https://europeana.atlassian.net/wiki/spaces/EF/pages/1627914244/Europeana%27s+IIIF+APIs | Cross-repository discovery, deduplication via stable object identifiers; aggregator record ≠ original custodian |

## Strategic evaluation
For Chess Stories, a **source-first historical catalogue** is preferable to building a live scraper or copying assets. Trial order: (1) JBC targeted 1942 and Polish chess magazines; (2) Spanish Hemeroteca + Gallica for chess primary stories; (3) LoC, Europeana and DDB for cross-institution discovery.

For future, separately authorized sports/history domains, press and topographic/illustrated archives suggest a repeatable **story-from-evidence** workflow but do not grant project permission. An archive item is **not** an episode until source image, historical claim and usage rights have been checked.

### Proposed adapter-neutral documentary record — NOT IMPLEMENTED
`ArchiveRecord = { institution, country, source_url, provider_record_id, object_id, edition_id, collection_id, issued_date, printed_page, digital_canvas_id, language, physical_custody_claim, rights_statement_url, rights_scope, license_checked_at, access_state, image_inspection_state, raw_bytes_sha256:null, text_extraction_state, blind_readers:[], disputed_claims:[], source_dependencies:[] }`.

Differentiate:
- **CATALOG_LOCATED**
- **PAGE_LOCATED_BY_INDEX**
- **PAGE_IMAGE_VISUALLY_INSPECTED_NON_BLIND**
- **BINARY_IDENTIFIED**
- **PRIMARY_OBJECT_AUTHENTICATED**
- **INDEPENDENT_BLIND_TRANSCRIPTIONS_FROZEN**
- **ADJUDICATED / DOMAIN_VALIDATED**
- **RIGHTS_CLEARED_FOR_SPECIFIC_USE** (separate branch of evidence, never implied by above).

### Technical and rights guardrails
IIIF is a standardized page/image presentation protocol, not an unrestricted redistribution license (see https://iiif.io/api/presentation/3.0/). OAI-PMH is metadata harvesting, not equivalent to full-text rights. Provider APIs may require registration, keys and rate limits, and the availability of a documented API does not imply it was tested or integrated. Never store third-party page images, licensed font files or OCR dumps in this Git repository without a per-use rights decision. Prevent conflating historical claims with fact, scanned page with physical original, or multiple copies of one source with independent corroboration.

## Active H-1 dependencies retained
- Byrne–Fischer 1956 *Chess Life* 5 Nov p.2: non-blind visual scan observation; raw bytes/hash absent; independent blind readers A/B NOT_RUN.
- *Chess Review* Dec 1956 pp.374–375: primary search text indexed, direct original page images NOT inspected, historical terminal mode UNKNOWN/NOT_VERIFIED.
- Russner–Walcker 1942 JBC issue 274 referenced by IPN; page images NOT inspected; no position equivalence with Fischer claimed.
- Await actual archival access or replies before claiming higher proof.
- No source licenses issued by this research.

## Frozen technical/human gates
E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL / NO-GO under M; Policy B <120 s all relevant processes ended and confirmed, stdout/stderr separate 1,048,576-byte emitted/accepted lifetime ceilings; R6 PENDING, IVV_GLOBAL NOT APPROVED, CASE_APPROVAL NOT APPROVED; 66+77 negatives and independent chess oracle NOT_RUN. CASE/OVER1/T01–T12 and T12 nonterminal unchanged. No project engines, scripts, tests, workflows, renders, merges, main/PR #12 writes.
