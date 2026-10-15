# Chess Stories — B1271–B1370: evidence-critical findings and falsification register

**Date:** 2026-10-14. **Scope:** Chess Stories pilot EP01 only. The batch adds **100 documentary investigations in ten groups DW–EF × 10**, 99 P0 and 1 P1. These are research priority labels, **not discovered bugs or executed tests**. Evidence boundaries were checked against the live source-only case in GitHub PR #1, the truth overlays in PR #11, and external public chess history and specifications. None of the source status was promoted.

## Ten decision questions

| Range | Theme | Actual documentary observation | Remaining gap |
|---|---|---|---|
| B1271–B1280 DW | R2 declared hash vs verified artifact | Two declared SHA-256 values point to source material whose bytes were not inspected | BINARY_MISSING |
| B1281–B1290 DX | PGN metadata and historic end | `historical_end.result=UNKNOWN` although candidate terminal is 41...Rc2# ply82 | SOURCE_RESULT_UNVERIFIED |
| B1291–B1300 DY | Historical attribution traps | Purdy's similarly named feature concerns Smyslov–Pachman, not Byrne–Fischer; nickname originally scoped to prodigies | HISTORY_NOT_FULLY_AUTHENTICATED |
| B1301–B1310 DZ | Claim falsifiers by T-events | Attack, capture, sacrifice, Qd8 optimality, narrator intention and resignation require distinct evidence | LEGALITY_NOT_RUN |
| B1311–B1320 EA | Truth across media transformations | Thumbnail/EPUB/newsletter/captions may lose an UNPLAYED negation even if master is correct | MEDIA_NOT_RENDERED |
| B1321–B1330 EB | Accessibility and notation | N=knight, SAN 25...Nxd1, bidi, two bishops, muted audio and reduced motion affect factual comprehension | IVV_NOT_APPROVED |
| B1331–B1340 EC | Evidence admission and independence | Hashes, excerpts, sources and acceptance signatures each warrant only a bounded kind of claim | ARCHIVE_NOT_AUTHENTICATED |
| B1341–B1350 ED | Perceptual evaluation quality | Comprehension of alternative, 14 omitted plies, h1 survivor and finish needs neutral preregistered questions | NO_HUMAN_RESULTS |
| B1351–B1360 EE | Policy B under model M | A fast nominal run, wrapper exit or truncated logs cannot prove strict lifetime guarantees | E5B4D_NO_GO |
| B1361–B1370 EF | Release and marginal value | Signoffs for historic truth, oracles, assets, IVV, Policy B and publish permission are conjunctive | PUBLICATION_PROHIBITED |

## Genuinely discriminating findings

### 1. The R2 PGN/replay evidence is weaker than the headline '82/82'

Direct read of PR #1 `cases/ED-CASE-REAL-01.v0.2.json` (Git blob `3514f19ac355763a5b4c61d5c573df090b0eccc1`) reveals the source PGN declared SHA-256 `42f2d04cc2bcd20386f40ca1c97770b2d54e8b1ad5547b5b0cb9f4756a8dc2c8` and R2 replay-results declared SHA-256 `bea694cdfda7f8a8467430d71f993ad1b121fcf29b507daf74deca6e112b31b8`. **Both have `check_status=DECLARED_NOT_CHECKED`.** The case itself says the complete source files are unavailable and merely seven positional checkpoints were provided. The report of same-library 82/82 replay is inherited from supplied context, *not* a current independent oracle result. Even a future verified hash would prove file identity, not whether the player's original historical notation agreed.

The case also explicitly sets `historical_end.result=UNKNOWN` and `historical_end.final_san=Rc2#` at `final_ply=82` as a **secondary source declaration**. It does not supply the full PGN Result tag or authenticate the original score. [PGN Standard](https://github.com/fsmosca/PGN-Standard/blob/master/PGN-Standard.txt) distinguishes game result markers from movetext and annotations. Do not silently fill this fixture with `0-1` because another modern reference reports a black victory.

### 2. Two independent historiographic attribution traps

[Edward Winter, Byrne v Fischer](https://www.chesshistory.com/winter/extra/byrnefischer.html) documents the December 1956 *Chess Review* **cover pointing to page 370 in error**, while the Byrne–Fischer Kmoch article appears on **pp374–375**. Its celebrated 'Game of the Century' expression was applied in the context of **performances by prodigies**, not objective ranking of every chess game. [Winter, C.J.S. Purdy](https://www.chesshistory.com/winter/extra/purdy.html) identifies a different feature, **'Game of the Century? Yes and No'**, about **Smyslov–Pachman**. A script or ebook attributing that Purdy piece to Byrne–Fischer would be historically wrong, even if every move frame were legal. These are text-source facts; the 1956 original player scoresheet still has not been inspected.

### 3. Transforming truth across outputs needs its own acceptance evidence

The contract's Qd8 alternative is editorially unplayed, but a crop or newsletter illustration can hide the label `HIPOTÉTICA · NO JUGADA`. Likewise, an EPUB may lose the MAIN→ALT→MAIN distinction; a subtitle track may reflow over the d1/h1 squares; and a static after-position cut can imply an unshown direct move. [W3C accessibility guidance](https://www.w3.org/WAI/tutorials/images/complex/) requires conveying the relationships of complex graphics, not simply listing an opaque FEN. The [C2PA explainer](https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html) warns that media provenance can be incomplete and cannot alone tell whether depicted content is true. These are proposed controls; no MP4, accessible ebook or viewer study exists in this batch.

## Highest-value next evidence, without executing the project

1. **Recover specific R2 bytes if legitimately available:** complete secondary PGN and replay-results from the identified origin, raw encoding and independently computed digests. Do not replace the missing originals with a reconstruction from Winter and call the hashes verified.
2. **Independent original witness review:** consult identifiable *Chess Review* pp374–375 and any qualified independent original scoresheets/readers. Keep printed and played terminal claims separate.
3. **Qualified rules replay only under an admissible runner:** reconstruct complete sequence and the 36–49 gap; no execution while E5B4D remains NO-GO under the stated model M.
4. **Output-specific truth evidence:** media frame QA, caption/thumbnail truth, R6 asset manifest and consented human IVV. The semantic case/overlay matching is necessary but not sufficient.
5. **Separate original editorial value and eventual channel eligibility:** Shorts, newsletter and ebook each must add genuine researched teaching value; no amount of document titles proves audience or revenue.

## Files

- `research/CHESS-STORIES-B1271-B1290-R2-PGN-IDENTITY-2026-10-14.md`
- `research/CHESS-STORIES-B1291-B1310-HISTORICAL-ERROR-TRAPS-2026-10-14.md`
- `research/CHESS-STORIES-B1311-B1330-CROSS-OUTPUT-TRUTH-ACCESSIBILITY-2026-10-14.md`
- `research/CHESS-STORIES-B1331-B1350-EVIDENCE-IVV-BOUNDARIES-2026-10-14.md`
- `research/CHESS-STORIES-B1351-B1370-MODEL-M-RELEASE-FRONTIER-2026-10-14.md`
- `research/CHESS-STORIES-B1271-B1370-REGISTER.v1.0.json` — machine-readable 100 source-bound falsifiers and future evidence requirements.
- This document: `research/CHESS-STORIES-B1271-B1370-DECISION-SYNTHESIS.v1.0.md`.

## Immutable gates, never inferred from research count

**E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL, NO-GO under failure model M.** Policy B: **all relevant processes terminated AND termination confirmed STRICTLY BEFORE 120 seconds**, stdout and stderr each with **independent max 1,048,576 bytes emitted AND accepted over their entire lifetime**. **R6 PENDING, IVV_GLOBAL and CASE_APPROVAL NOT APPROVED**, 77 router and 66 semantic negative specifications NOT RUN, qualified chess oracle NOT RUN, no original 1956 authentication. No project code/tests/Actions/media rendered, no merge to `main` and no publication. A GitHub document readback is not a technical or historical PASS.
