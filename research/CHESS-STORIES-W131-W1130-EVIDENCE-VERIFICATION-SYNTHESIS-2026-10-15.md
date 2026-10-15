# Chess Stories — W131–W1130 evidence verification: actual work versus queue

Date 2026-10-15. Scope Chess Stories pilot. Ten JSON files of 100 IDs from W131 through W1130 were created and read back: 1,000 consecutive unique IDs, 1,000 individually stated questions, required evidence, candidate references, conservative initial verdicts. **Not 1,000 verified or executed jobs.** This is a 1,000-entry evidence verification queue plus limited actual external research.

## Outcomes of triage

| Verdict | Number |
|---|---:|
| CATALOG_SUPPORTED_LIMITED | 7 |
| SECONDARY_CITATION_ONLY | 30 |
| PRIMARY_NOT_INSPECTED | 140 |
| PENDING_EVIDENCE | 383 |
| RIGHTS_PENDING | 220 |
| SOURCE_BYTES_OR_ORACLE_MISSING | 40 |
| SPECIFICATION_ONLY | 80 |
| BLOCKED_NOT_EXECUTED | 100 |
| **Total** | **1,000** |

These classes are not 1,000 primary-source visual inspections. No approved gates or independent test evidence resulted from the classification.

## Actual source retrieval attempted

1. **Jagiellonian Digital Library, Goniec Krakowski 1942 nr273:** individual issue catalogue exists, publication 24390, edition 18937, published year 1942. The live HTML text does not expose a day-month date, masthead or page-3 content. The number 273 **cannot be asserted** to be Sunday 22 November 1942 from index proximity alone. https://jbc.bj.uj.edu.pl/dlibra/publication/24390/edition/18937/goniec-krakowski-1942-nr-273
2. **Exact issue 22 November 1942:** date-specific open search did not surface a verified full original page 3. The previously found Winter excerpt remains partial; we still cannot read the complete game notation on the original folio. https://www.chesshistory.com/winter/extra/byrnefischer.html
3. **Chess Review December 1956:** Winter provides secondary historical confirmation that Hans Kmoch's Byrne–Fischer article is printed pp374–375 and the cover's p370 pointer was an error referring to Smyslov–Pachman. This turn did not visually inspect both full official pages. https://www.chesshistory.com/winter/extra/byrnefischer.html
4. **Contemporaneous 1957 newspaper photograph and scoresheet reproductions:** ChessBase depicts a scoresheet attributed to Fischer and describes 1957 newspaper photo publication, without authenticated physical provenance/rights; not sufficient to close score or rights gates. https://en.chessbase.com/post/the-game-that-shook-the-world-2
5. **Adjacent archive search caution:** a search for a nearby issue returned 1943 no275, demonstrating cross-year number collision. Never infer 1942 date solely from no273 or a neighboring number. https://www.jbc.bj.uj.edu.pl/Content/140652/PDF/NDIGCZAS002211_1943_275.pdf

## Controls unchanged
- E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL / NO-GO under failure model M.
- Strict Policy B: all relevant processes terminated and termination confirmed **STRICTLY BEFORE 120 seconds**, with stdout and stderr **separately <=1,048,576 bytes emitted and accepted over each lifetime**.
- R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED.
- 66 semantic negatives, 77 router negatives, independent legal-chess oracle NOT_RUN.
- R2 raw PGN/replay bytes not available; SHA256 DECLARED_NOT_CHECKED.
- No tests, engines, rendering, GitHub Actions, human study, merge to main or release.

## Next falsifiable retrieval
Get issue 273's **actual masthead** or an archival catalog record with exact day/month. If it is the target date, obtain **original page 3** with legible chess score, independently recording document-level provenance and limitations. Separately request lawful *Chess Review* December 1956 pp374–375 page images from a custodian. No assumption or scan redistribution until rights resolved.

## Files
Ten `research/CHESS-STORIES-W<start>-W<end>-EVIDENCE-VERIFICATION-QUEUE-2026-10-15.json` files: W131–W230, W231–W330, W331–W430, W431–W530, W531–W630, W631–W730, W731–W830, W831–W930, W931–W1030, W1031–W1130.
