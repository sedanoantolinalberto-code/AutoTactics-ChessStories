# EP01 — Direct, non-blind visual inspection of the US Chess-supplied 1956 _Chess Review_ pp. 374–375

**26 October 2026 | PRIMARY_PRINT_FACSIMILE_DIRECTLY_VIEWED | NON_BLIND_SINGLE_READER | ARTICLE_NOT_REPUBLISHED | HISTORICAL_SCORE_NOT_ADJUDICATED | NO_GO_UNCHANGED**

## Physical file and chain of access

- US Chess editor John Hartmann emailed a two-page PDF on **16 October 2026** to the owner's dedicated research mailbox. Sender message ID `1a1455478de24b0d`, thread ID `1a13f5137015cbaa`, attached filename **`Pages from Chess Review 1956.pdf`**.
- This review actually retrieved the **1,148,045-byte** PDF and calculated its **SHA-256 `d1043d5c62f5f39a7922289fc59c5080927eaac848e5a1c08baf5dab63a575ed`** on the retrieved byte stream.
- PDF structural inspection: **2 pages**, unencrypted, page dimensions **540 × 749.28 pt**, PDF version 1.6. Local document metadata says its image-conversion PDF was created **16 October 2026 15:27:21 UTC**, not in 1956. The object inspected is a **2026 facsimile/reprographic copy of printed 1956 pages**, not the surviving paper edition itself.
- Both pages were rendered for **private inspection at 160 dpi** and visually inspected, **without OCR**. Embedded extraction returned no text; figures and descriptive notation were read from the rendered page images.
- Neither the PDF nor its private rendered images or the full historic column is stored in this repository, public release or external distribution. This note records only short excerpts and page-specific observations.

## Page-by-page direct observations

### Printed p. 374 (PDF page 1)

- Heading **“THE THIRD ROSENWALD TOURNAMENT”**, section **“SELECTED GAMES ANNOTATED BY HANS KMOCH”**, game title **“Game of the Century”**.
- Players named **Donald Byrne** (White) and **Robert Fischer** (Black). Opening **“GRUENFELD DEFENSE”**.
- Continuation visibly prints Black's move **`17 ... B-K3!!`**, following the earlier `16 B-B5 KR-K1†`. This descriptive move agrees *at the level of printed notation* with the semantic role of the candidate EP01 black bishop move at 17...Be6, **without independently computing the FEN or legality**.
- Immediately thereafter, White's **`18 BxQ`** appears. This supports the narrative's claim that the bishop captures the queen, but the precise from/to squares and resulting FEN are **NOT QUALIFIED** from the printed text alone.
- The article also includes variant lines and diagrams. Printed parentheses and alternate sequences must not be conflated with the actual game score; no full 82-ply line transcription or sequence reconciliation was conducted.
- It supplies a standings table, but that does not certify the precise room/location of this specific game.

### Printed p. 375 (PDF page 2)

- The top-left column resumes the **same Byrne–Fischer game**. The contiguous line includes **`25 QxP NxR`**, supporting a black **knight-captures-rook** event at Black's 25th move. Mapping that event to candidate `25...Nxd1` requires independently qualified source position, candidate SAN and board replay; this page does **not** by itself prove the destination square.
- Further continuation is printed, including final score ending **`41 K-B1 R-QB7 mate`**. **Printed ending is not proof that the final mating move was physically played on the board.** Original vs reconstructed player scoresheets and competing eyewitness/secondary accounts must remain differentiated.
- A photograph caption states that the tournament was held at **both the Manhattan Chess Club and the Marshall**. The caption does **not** demonstrate which venue hosted the actual Byrne–Fischer game or the room configuration; no venue scene should be rendered as historical fact without additional evidence.

## What is newly verified, and what is not

| Proposition | Evidence state on 26 Oct |
| --- | --- |
| PDF supplied in original US Chess correspondence physically obtainable and parseable as a two-page facsimile | **OBSERVED_BYTES + HASH** |
| Printed pages are labeled 374/375, _Chess Review_ December 1956, and contain Hans Kmoch Byrne–Fischer score/article | **DIRECT_VISUAL_NONBLIND** |
| Printed move tokens `17...B-K3!!`, `18 BxQ`, `25...NxR` | **DIRECT_VISUAL_NONBLIND** |
| Printed line includes a 41st-move mate | **DIRECT_VISUAL_NONBLIND**, historic performance **UNRESOLVED** |
| Actual source-object origin, unaltered identity relative to the 1956 physical edition | **US_CHESS_PROVIDED / NOT_FULL_FORENSICALLY_AUTHENTICATED** |
| Full score, descriptive→SAN correspondence, gap T10, 82 plies, exact game-state/FEN and chess rules oracle | **NOT_TRANSCRIBED / NOT_RUN** |
| Independent blind readers | **ZERO**; inspector already knew candidate notation |
| Original DeLucia manuscript | Publisher email **attestation only**; object not examined |
| Original printed images reused in commercial video or newsletter | **NOT LICENSED**; Hartmann explicitly disallowed commercial use of US Chess publication |
| E5B4D model M, strict Policy B, R6, IVV_GLOBAL, CASE_APPROVAL | **NO-GO / PENDING / NOT_APPROVED, all unchanged** |

## Preserved interpretation and next scientific work

1. This is the *first directly observed, SHA-256-pinned copy of the exact two-page 1956 _Chess Review_ article supplied by US Chess in this audit sequence*. It improves **witness access and cited printed move observations**, not independent game-score authenticity.
2. A truly blind reader must be recruited **without prior exposure to the expected SAN, these particular move readings or candidate game score**; the inspector who performed this review is **not blind** and cannot count as Reader A/B. Freeze the raw page-byte digest and record independent readers' source/role/reading conditions before transcription.
3. Distinguish **printed primary-era witness**, **original physical player manuscript** and **publisher identity attestation**. The October 22 New In Chess editor email identifies the DeLucia-held original in its 2024/3 reproduction; this PDF is a *different witness*.
4. Never republish the attached PDF/page images. Request specific commercial permission before any facsimile use; private research access was authorized but commercial reproduction explicitly disallowed. Original board/vector geometry may be considered separately under its own R6 review.
5. Before a replay or render: resolve **governance of actual code execution** under the protected Chess Stories EP01 E5B4D packet and preserve `NOT_RUN` for all rules engines, tests and renders.

## Traceability and stop rule

- Source: provider attachment, message `1a1455478de24b0d`, read under recipient's authorized research mailbox. No private email address or historical scans committed.
- Related documentary attestation: `research/EP01-1956-ORIGINAL-SCORESHEET-EDITOR-ATTESTATION-20261026.md` on this branch.
- Frozen baseline: `docs/E5B4D-EP01-RELEASE-PATH-DECISION-PACKET-20261017.md` on the decision packet branch, chess issue #8 and draft PRs #3/#10/#12.
- Neither the hash of a modern PDF nor a printed contemporary score is by itself a proof of physically executed historical last move or release rights. **No test, chess engine, renderer, Actions, main merge, release, or publication was performed.**
