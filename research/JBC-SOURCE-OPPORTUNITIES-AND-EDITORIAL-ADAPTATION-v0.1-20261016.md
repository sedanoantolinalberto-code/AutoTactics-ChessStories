# Chess Stories / Engine YT — Jagiellonian Digital Library opportunity assessment v0.1

Date: 2026-10-16
Status: EXTERNAL_CATALOG_RESEARCH / DESIGN PROPOSALS ONLY; NOT_IMPLEMENTED; NOT_RIGHTS_CLEARED.
Scope: independent documentary research within the delegated Chess Stories pilot. Non-chess opportunities are **strategic observations only**, without permission to implement additional sport/history engines.

## Observed institution and collection architecture
The Jagiellonian Digital Library (JBC) runs on **dLibra 7.0.0-SNAPSHOT** and offers browsing by material type, systematic classification, thematic collections, university collection and project. Object descriptions provide title, publication dates, contributors, subject headings, original holding institution and shelfmark, source digitization IDs, item IDs such as `oai:jbc.bj.uj.edu.pl:338656`, formats, copyright labels and sometimes downloadable **RDF**/**OAI-PMH** descriptions. Such discovery features are present in the public UI. A functioning, rate-safe bulk API or IIIF endpoint has **not** been independently tested or authorized.

Source examples:
- https://www.jbc.bj.uj.edu.pl/dlibra
- https://jbc.bj.uj.edu.pl/dlibra/publication/354897/edition/338656
- https://jbc.bj.uj.edu.pl/dlibra/publication/24390/edition/18937
- https://jbc.bj.uj.edu.pl/dlibra/publication/1030129/atlas-wit-frederick-de-1630-1706

## Concrete documented pools

| Pool | Primary catalogue reference | Grounded opportunity | Evidence state |
|---|---|---|---|
| **Tygodnik Szachowy**, 1898–1899 | https://jbc.bj.uj.edu.pl/dlibra/publication/681830/tygodnik-szachowy-r-2-1899 ; sample Dec 3 1898 https://jbc.bj.uj.edu.pl/dlibra/publication/721159/edition/683616 | Early chess scores, composed problems, editorial history. Candidate serialized original Chess Stories historical research | Issue catalogue observed; actual score/page content NOT inspected |
| **Szachista**, 1933–1935 | https://jbc.bj.uj.edu.pl/dlibra/publication/354897/edition/338656 | Historical openings, players, compositions; original concept candidates | Specific issue metadata observed; pages NOT read |
| **Szachy** periodical, 1939 and 1947–1952 | https://jbc.bj.uj.edu.pl/dlibra/publication/739929 and https://jbc.bj.uj.edu.pl/dlibra/publication/928504 | Cross-period Polish chess culture and games; editorial candidates | Run/index observed; no game validated |
| **Szachista Polski**, 1946–1947 | https://jbc.bj.uj.edu.pl/dlibra/publication/739931 | Postwar chess editorial themes | Catalogue observed only |
| **Goniec Krakowski**, 1939–1945 | https://jbc.bj.uj.edu.pl/dlibra/publication/83 and IPN-provided https://www.jbc.bj.uj.edu.pl/dlibra/publication/24391/edition/18938 | Segregated Russner–Walcker 1942 comparator, historical media/source-criticism education | Precise 1942 #274 referenced by IPN; image not inspected. Occupation press demands critical contextual framing |
| **Przegląd Sportowy**, 1921–1939, 1945–1952 | https://jbc.bj.uj.edu.pl/dlibra/publication/250044?language=pl | Future **non-chess** sport-history storytelling; contemporary fixture/result/tactics contextual leads | Catalogue shows multiple years; no particular game/claim inspected |
| **Sport** illustrated, 1922 onward | https://jbc.bj.uj.edu.pl/dlibra/publication/309363?language=pl | Multisport tactical stories, historical journalism leads for future authorized expansion | Catalogue only |
| **Mapa taktyczna Polski**, 1931–1939 at 1:100,000 | https://jbc.bj.uj.edu.pl/dlibra/publication/298353?language=pl | Historical map/time/location design studies; **not** military scenario implementation | Map series catalogue only |
| **Frederick de Wit Atlas**, 1662–1688 | https://jbc.bj.uj.edu.pl/dlibra/publication/1030129/atlas-wit-frederick-de-1630-1706 | Design references for original non-reproductive cartographic storytelling | Metadata only; no rights-cleared image use |
| **Berlin collections/music holdings** | https://jcrb.uj.edu.pl/dostep/jagiellonska-biblioteka-cyfrowa | Future source discovery and public-domain historic music research | Institutional overview; no specific track or recording cleared |

## Important source disambiguation
JBC has **two distinct group records** titled Goniec Krakowski. The ordinary occupation-era newspaper, **Goniec Krakowski [1939–1945]**, has series id `DIGCZAS001749` and edition #274 targeted by IPN; a separate **1943** record `https://jbc.bj.uj.edu.pl/dlibra/publication/476352/goniec-krakowski` explicitly describes **clandestine diversionary imitations of the occupation newspaper** (`Druki dywersyjne naśladujące okupacyjny Goniec Krakowski`, Polish underground press). They must **not** be merged by title; historically distinct roles.

## Rights are per OBJECT and per USE
JBC records differ: examples show **Public domain**, **CC BY 3.0**, **CC BY-NC-SA 3.0**, and copyrighted items. A general collection name never grants release rights. Even a Public Domain metadata label should be verified against the particular asset, underlying rights, local laws, likeness/privacy where relevant, platform terms, and reproduction method. Attribution/source provenance is an editorial best practice and can be separately required by license. JBC metadata/open discovery != blanket permission for commercial scanning, content scraping, film output, thumbnails, premium newsletter or eBooks.

Examples:
- Public-domain chess issue: https://jbc.bj.uj.edu.pl/dlibra/publication/721159/edition/683616
- CC BY-NC-SA 3.0 conference resource: https://jbc.bj.uj.edu.pl/dlibra/publication/229591
- CC BY 3.0 Patrimonium project page: https://jbc.bj.uj.edu.pl/en/dlibra/publication/409357/edition/385900
- Mixed statuses in the JBC statistics public page: https://www.jbc.bj.uj.edu.pl/dlibra/pubstats?language=pl

## Reusable architecture proposal (DOCUMENTARY design, not implementation)
1. **Source discovery entry:** institution, canonical URI, publication/edition ID, parent group ID, catalogue shelfmark, archival source identifier, language, date, edition/page, alleged event, metadata-observed timestamp.
2. **Evidence layers:** CATALOGUED -> ORIGINAL_IMAGE_ACCESSED -> BYTES_IDENTIFIED -> VISUALLY_INSPECTED -> BLIND_READS_FROZEN -> ADJUDICATED -> DOMAIN_SPECIFIC_VALIDATION; do not silently skip layers; independent branch for RIGHTS.
3. **Rights per asset/use:** type of image/text/notation, specific object rights statement with URL/snapshot date, proposed commercial channel, required attribution, unresolved third-party rights, permission/analysis and reviewer gate. Separate metadata from images.
4. **Historical-event linkage:** source **asserts** event X, vs actual event X verified. Do not convert OCR to truth. Record variant spellings, old chess descriptive notation, uncertain squares/moves, alternative translations, board-state provenance.
5. **Visual style:** produce wholly original vector scene data rather than reuse historical scans in public media; image facsimiles only when independently permitted.
6. **Editorial portfolio:** source-aided chess microepisodes -> evidence-explainer -> extended historical article -> newsletter/eBook derivative, all as *future proposals*, never claims of an existing working pipeline.

### Example proposed records (NOT software implemented)
`SourceWitness`: { source_uri, institution, edition_id, print_date, printed_page, image_review_state, transcription_state, historical_claims[], dependency_claims[], uncertainties[], hash:null }.

`RightsAssessment`: { object_uri, metadata_rights_label, usage_intent, evidence_link, granted_scope:null, permitted_public_use:false }.

`StoryCandidate`: { domain:'chess', origin_witness_refs, narrative_pivot, unsolved_questions[], technical_gate_status:'NOT_RUN' }.

## Prioritized editorial research slate, Chess Stories only
- **CS-JBC-01:** Inspect one *Tygodnik Szachowy* 1898/99 issue to identify an actual historical game or chess study (no claims about a game until page seen).
- **CS-JBC-02:** Inspect *Szachista* 1935 no.1 and validate a score/study as a potential episode (separate rights review).
- **CS-JBC-03:** Compare 1939 vs 1947 *Szachy* coverage, not infer an event until primary page inspected.
- **CS-JBC-04:** Complete 1942 #274 archive retrieval; compare Russner–Walcker only after position is source-verified. Keep 1942 segregated from 1956 EP01.
- **CS-JBC-05:** Prototype *documentary* metadata schema/source-lineage matrix (no project code, parsing, scripts, or execution).

## Technical cautions
- dLibra application version is observed as a site footer; it is not a verified API contract or security assessment.
- RDF/OAI-PMH **export links in UI** are observed, but bulk endpoint, robots/terms, rate limits, harvesting, and IIIF support remain untested. Do not claim an integration exists.
- Historical original image files were not downloaded or hashed in this work. No source material copied to repo.

## Gates: unchanged
This research does not reopen EP01 technical/human gates. E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL NO-GO under M; Policy B strict (<120s with confirmed relevant-process termination; stdout/stderr independent 1,048,576-byte lifetime emission and acceptance ceilings); R6 PENDING, IVV_GLOBAL NOT APPROVED, CASE_APPROVAL NOT APPROVED; 66 semantic negatives, 77 router negatives and chess oracle NOT_RUN. CASE/OVER1/T01–T12, T12 nonterminal, main, PR#12 unchanged. No engines/scripts/tests/validators/Actions/render/publishing/merges performed.
