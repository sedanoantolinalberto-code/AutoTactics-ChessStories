# EP01 primary-witness blind transcription protocol v0.1

Status: **PROCEDURE ONLY — NO READER RESULT RECORDED**

## Why this exists

The 82-row comparison template contains the modern Winter SAN reference for later reconciliation. It therefore must **not** be handed directly to a reader whose job is to produce an independent transcription from a 1956 witness. A reviewer exposed to that answer key cannot satisfy the existing `transcription_without_san_answer_key_required` condition.

The connected research agent has already inspected the modern secondary SAN sequence during source integration work. It is therefore **not eligible to act as Reader A or Reader B** for the blind primary transcription. This is a contamination-control rule, not a judgment about the underlying score.

## Clean handout separation (2026-10-14)

The reader-facing packet is now specifically `docs/EP01-BLIND-READER-HANDOUT.NO-ANSWER-KEY.v0.1.md` **plus** the assigned contemporary witness and an **empty copy** of `sources/EP01-1956-PRIMARY-BLIND-READER-WORKSHEET.v0.1.json`. The reader-facing handout is self-contained and carries no internet links, 1956 game-score transcription, source-derived FEN, results or modern SAN key.

The longer `docs/EP01-NEUTRAL-DESCRIPTIVE-NOTATION-READER-GUIDE.v0.1.md` is a curator-side draft that contains background references; it must **not** be supplied wholesale to blind readers. The project issue/PR description, source-side validation code, FEN fixture and modern score are likewise forbidden reader inputs.

Neither document certifies that a prospective reader is actually unexposed. Each independent reader must affirm the no-answer-key protocol and record raw observations before any conversion. The source material and reader record remain subject to privacy/access governance. The two readers must inspect the **same witness** independently before any cross-witness comparison.

## Reader workflow

1. Assign one witness and one fresh reader who has not been shown a Byrne–Fischer SAN/PGN score in the review task.
2. Give the reader only the contemporaneous scan URL, a neutral descriptive-notation legend if needed, and `sources/EP01-1956-PRIMARY-BLIND-READER-WORKSHEET.v0.1.json`.
3. The reader first records the printed descriptive token for each ply exactly as seen, plus confidence and a page-region locator. No SAN conversion is allowed during this phase.
4. Freeze and timestamp the raw 82-ply transcription. The reader attests that no modern score or second reader output was consulted.
5. Only after the raw text is frozen may that same reader convert each row to SAN. This conversion is still a human documentary operation, not a qualified chess-rules replay.
6. Repeat independently with a second fresh reader. Reader B must not see Reader A's worksheet.
7. Only after both records are frozen may an adjudicator copy both results into the 82-row comparison template and compare against the modern secondary reference.
8. Any disagreement remains an explicit discrepancy; it is not silently normalized from the modern reference. A rules oracle, when later authorized, is a separate layer and cannot replace primary-source authentication.

## Witness-by-reader independence matrix — scope clarification (2026-10-14)

A single pair of worksheets split between two different periodicals is **insufficient** to distinguish transcription disagreement from differences between the publications. Treat the 5 Nov *Chess Life* and Dec *Chess Review* as **separate witness objects**, not as interchangeable pages of one scoresheet.

| Witness | Reader A | Reader B | What is compared |
|---|---|---|---|
| 5 Nov 1956 *Chess Life* p. 2 | Fresh blind raw 82-ply worksheet, then post-freeze SAN | Different fresh blind raw 82-ply worksheet, then post-freeze SAN | A vs B **within this exact witness** |
| Dec 1956 *Chess Review* pp. 374–375 | Fresh blind raw 82-ply worksheet, then post-freeze SAN | Different fresh blind raw 82-ply worksheet, then post-freeze SAN | A vs B **within this exact witness** |

A and B are **roles per witness**, not permission to reuse a contaminated reader. Where one person would cover more than one witness, document the potential cross-witness contamination and use a genuinely independent reviewer when necessary. Neither role may see the modern Winter/PGN answer key or the other reader's output before its own raw transcription is frozen. Freeze witness-specific raw records before any cross-publication adjudication.

Only after both readers per witness have frozen their raw records and SAN conversions should an adjudicator: (1) resolve or explicitly retain *within-witness* reading discrepancies; (2) compare the two independently reconciled periodical witnesses *against each other*; (3) compare each witness with the modern 82-ply secondary candidate. Do not collapse disagreement into a single apparently verified score. Any ambiguous page token, missing printed ply or variant move must remain explicitly unresolved, rather than inferred from Winter.

**Separate terminal-record question:** contemporaneous periodicals printed mate, while a later first-person account reports a resignation entry one move earlier in Byrne's original scoresheet. Published periodical scores and purported original player scoresheets are distinct witness classes. The periodical 82-ply matrix **cannot adjudicate original scoresheet divergence** without qualified direct inspection of those different objects; do not upgrade `41...Rc2#` to original-scoresheet-authenticated merely because magazines concur.

No reader assignments, raw observations, SAN conversions, signed attestations, access to restricted originals or primary template values have been generated by this protocol update. The existing 82-row comparison template remains deliberately unpopulated.

## Current access observations, not reader evidence

- *Chess Life*, 5 Nov 1956, printed page 2 / PDF page index 1: the Byrne–Fischer table is visually legible in the publisher-hosted scan. This access/readability observation was made by a research agent already exposed to the modern SAN score, so it is **not** Reader A evidence and no row in the comparison template is populated from it.
- *Chess Review*, Dec 1956, printed pp. 374–375: the archive issue and Kmoch article location are established, and a modern historical reproduction shows part of p.374. The full publisher-hosted PDF is currently too large for the connected web fetch path used in this session, so no full-page blind transcription claim is made here.

## Acceptance boundary

Two completed blind worksheets plus an adjudicated comparison can support a stronger documentary finding. They still do not by themselves establish chess legality, source-byte identity, R6 rights clearance, IVV_GLOBAL, Policy B compliance, render approval or publication permission.
