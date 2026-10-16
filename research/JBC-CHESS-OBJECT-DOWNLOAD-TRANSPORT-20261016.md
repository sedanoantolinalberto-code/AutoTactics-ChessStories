# Chess Stories / JBC — Object-level source and download transport investigation

Date: 2026-10-16
Status: OBJECT_CATALOG_VERIFIED; DOWNLOAD_LINK_RESOLVED; ARCHIVE_BYTES_NOT_OBTAINED; PRIMARY_PAGES_NOT_INSPECTED

## Actual item-level catalogue evidence

### Tygodnik Szachowy — issue 9, 26 November 1898
- Official item: https://jbc.bj.uj.edu.pl/dlibra/publication/721158/edition/683615/tygodnik-szachowy-r-1-9-26-listopada-1898
- Original holder: Biblioteka Jagiellońska
- Shelfmark: `404626 II`
- Creator/editor: W. Dzierzbicki
- Place: Warsaw
- Printed date: 1898-11-26
- Digital edition identifier: `683615`
- OAI identifier: `oai:jbc.bj.uj.edu.pl:683615`
- Digital source identifier: `NDIGCZAS040429`
- Public JBC metadata-rights statement: **Domena publiczna / Public domain**.
- The official **Pobierz / Download** link resolves specifically to `https://jbc.bj.uj.edu.pl/Content/683615/download`, and web fetch fails with `400 Unsupported content-type: application/zip`. This establishes a **ZIP-type download response**, not PDF file bytes or an extracted scan.
- An additional direct downloader attempt also failed. **No source ZIP acquired, no SHA-256, no page inspection, no chess score yet.**

### Szachista — issue 1, January 1935
- Official item: https://jbc.bj.uj.edu.pl/dlibra/publication/354897/edition/338656/szachista-czasopismo-poswiecone-grze-i-studjom-szachowym-1935-nr-1
- Original holder: Biblioteka Jagiellońska
- Shelfmark: `404627 II`
- Editor: Henryk Friedman (1903–1942)
- Place: Lwów; publication: 1935-01
- Digital edition: `338656`; identifier `oai:jbc.bj.uj.edu.pl:338656`
- Digital source ID: `NDIGCZAS015457`
- 20 pages reported as extent `20 w.` in the catalogue; avoid claiming PDF page count verified.
- Object-level metadata-rights label: **Domena publiczna / Public domain**.
- Viewer shows PDF preview but source pages are not accessible via available text reader. No move or problem selected as real episode yet.

### Goniec Krakowski — year 1942
- 1942 series catalogue: https://jbc.bj.uj.edu.pl/dlibra/publication/19185/goniec-krakowski-1942
- Original holder: Biblioteka Jagiellońska; shelfmark `409317 IV`; digitization ID `DIGCZAS001749`.
- Metadata-rights label: **Domena publiczna / Public domain** for the year-level catalogue record; NOT a verified per-use license/clearance for the targeted issue.
- The IPN-supplied `Goniec Krakowski` no.274 22/23 Nov 1942 edition URL remains https://www.jbc.bj.uj.edu.pl/dlibra/publication/24391/edition/18938 and is currently inaccessible to the web reader. No primary content read, no 1942 chess position established.
- Do not conflate this occupation-era publication with the distinct clandestine imitation publication also called `Goniec Krakowski`.

## Operational finding
The reader's PDF/page-access failures can coexist with officially published downloadable **ZIP archives**. Source acquisition must use authorized original links and distinguish:
`CATALOG_ACCESSIBLE` -> `DOWNLOAD_LINK_RESOLVED` -> `BYTES_RECEIVED` -> `BINARY_HASHED` -> `CONTENT_MEMBER_INSPECTED` -> `PAGE_VISUALLY_READ`.
The current result reaches only **DOWNLOAD_LINK_RESOLVED** on the 1898 issue.

A ZIP transport is not permission to reuse scanned artwork. Catalog `Public domain` should trigger per-object, per-territory and per-use rights review; R6 remains PENDING. Do not write guessed `Content/<id>` URLs as real endpoints without observing the link.

## Decision
Do **not** generate new episodes, extracted PGNs, original chess positions or viewer-test PASS from these catalogue records. The next genuine proof is lawful archive bytes/page imagery and historical chess text on original pages. Preserve source artifacts off GitHub until rights/provenance evaluation.

## Frozen gates
E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL and NO-GO under M; Policy B strict, all relevant processes terminated/confirmed strictly before 120 seconds, independent stdout/stderr lifetime emission+acceptance caps 1,048,576 bytes; R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; 66 semantic, 77 router negatives and independent chess legality oracle NOT_RUN. EP01 CASE/OVER1/T01–T12, main, PR#12 unchanged. No engines, production scripts, tests, validators, Actions, rendering or merges.
