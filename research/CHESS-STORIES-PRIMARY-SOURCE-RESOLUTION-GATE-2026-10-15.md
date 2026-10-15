# Chess Stories — Primary source resolution gate (2026-10-15)

**Scope:** Chess Stories pilot only. Actual archive research / conditional accession protocol. Not a newly completed series of 1,000 tests. No engine, render or Actions.

## Newly corroborated route and existing provenance
- Jagiellonian Digital Library, *Goniec Krakowski* 1942 grouped collection: https://jbc.bj.uj.edu.pl/dlibra/publication/19185?tab=1 . Institution: Biblioteka Jagiellońska; shelfmark 409317 IV; digital ID DIGCZAS001749; metadata says Public Domain at *group record* level.
- Direct issue catalogue for 1942 **nr273**: https://jbc.bj.uj.edu.pl/dlibra/publication/24390/edition/18937/goniec-krakowski-1942-nr-273 . The issue's accessible metadata gives only year 1942, **not 22 November**. Do not infer exact calendar date by item numbering, even if nearby citations seem consistent.
- Winter: https://www.chesshistory.com/winter/extra/byrnefischer.html identifies Henryk Konaszczuk's report of *Goniec Krakowski* **22 November 1942, p3**, match Warsaw–Cracow on 28 June 1942, initials H.W. Russner and K. Walcker. A reproduced clipping is partial. No full p3 and original game text inspected here.
- Official publisher-hosted *Chess Review* Vol24 No12 December 1956 searchable/indexed PDF: https://uscf1-nyc1.aodhosting.com/CL-AND-CR-ALL/CR-ALL/CR1956/CR1956_12.pdf . An indexing layer reveals the issue's bibliographic matter, but full PDF retrieval failed due ~13.9MB fetch cap; **no assertion of visual review** of original pp374–375. Winter's original-image *excerpt* from p374 and museum catalogue are bibliographic/partial witnesses, not the complete pages.
- A 2023 scholarly theatre article indexes *Goniec Krakowski* 1942 **nr210 on 9 September**, **nr212 on 11 September**, **nr214 on 13 September** and **nr217 on 17 September**: https://www.instytut-teatralny.pl/wp-content/uploads/2023/04/montoretp20232.pdf . These date/number pairs are cited by an independent secondary scholarly source. They may help **candidate sequencing only**; do not infer or certify the date of nr273 or unseen November issue.
- Winter additionally quotes Spence identifying eighth round, 17 October 1956, whereas a modern US Chess article says seventh. **ROUND_CONFLICTED** until first-party paired tournament ledger resolves.

## Actual decision gate and explicit tests
1. **Newspaper issue identification**: obtain legally a Jagiellonian digital image of the nr273 **masthead** OR a day-specific original catalog line. Read exact date and printed number. Record screenshot/source metadata, not guessed number. If date is not 22 Nov 1942, query correct issue date with library before touching p3.
2. **22 Nov 1942 p3 authentication**: retrieve entire original page, not Winter's clipping. Check physical edition header, chess section location, player initials and literal move notation. Cross-check whether two distinct games appear in the column. Do not silently rewrite original historical spelling.
3. **1956 print pages**: request a lawful **page-range excerpt** of *Chess Review* Dec 1956 printed pp374–375 from US Chess/archive or holder. Verify the front-matter issue, the printed page numbers and entire annotated move list. Record printed score vs manuscript as separate identities.
4. **Independent readers**: do not present model transcription against already-exposed SAN as blinded historical verification. Request two independent genuinely blind human transcriptions for historical score confirmation if/when sources are accessible.
5. **Rights**: public accessibility, grouped public-domain catalogue status and private study permissions do not by themselves authorize reuse of Winter/ChessBase artwork, photographs, scans and text. R6 remains pending.
6. **Source archiving**: metadata, institutional canonical URL, publication/edition IDs, access date and precise folio before claims. No bulk copying or public republication of possibly encumbered images.

## Preparation for a bounded archive request (not yet sent)

**To Jagiellonian Digital Library**, subject `Goniec Krakowski — 22 XI 1942, str. 3 — identification and access`: request whether *Goniec Krakowski*, 22 November 1942, is represented among 1942 issues under document DIGCZAS001749 / shelfmark 409317 IV. Ask for the exact issue number and stable digital edition URL, plus lawful access to **the masthead and p3**, and scan/license citation. Explain nr273 / edition 18937 is a *candidate only*; do not assert it is the target.

**To US Chess archive**, subject `Chess Review Dec 1956 pp. 374–375 — page-level scholarly consultation`: request page-level lawful scholarly-access route to the two printed pages containing Kmoch's Byrne–Fischer article, citation and reproduction conditions. Cite official source URL and explain issue PDF size precludes current full visual inspection. No reproduction/publication permission presumed.

No outbound request was sent; no custodian response claimed.

## State
- `GONIEC_1942_11_22_P3=NOT_INSPECTED`;
- `GONIEC_1942_NO273_EXACT_DAY=UNVERIFIED`;
- `CHESS_REVIEW_1956_P374_375=NOT_FULLY_VISUALLY_INSPECTED`;
- `ORIGINAL_FISCHER_SCORE_SHEET=UNAUTHENTICATED`;
- `ROUND=CONFLICTED`; `HISTORICAL_END.result=UNKNOWN`;
- `R2_HASHES=DECLARED_NOT_CHECKED`; `RIGHTS_R6=PENDING`;
- `IVV_GLOBAL=NOT_APPROVED`; `CASE_APPROVAL=NOT_APPROVED`.

## Frozen execution invariants
E5B4D `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL`, **NO-GO under M**.
Strict Policy B: all relevant processes terminated **AND termination confirmed strictly before t=120s**; stdout and stderr independently capped at 1,048,576 lifetime bytes **emitted and accepted**. Semantic negatives 66, router negatives 77, chess legality oracle NOT_RUN. No motor, code tests, workflows, render, release or main merge.
