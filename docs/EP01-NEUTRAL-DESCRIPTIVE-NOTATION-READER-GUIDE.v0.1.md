# EP01 — Neutral English descriptive-notation legend for blind 1956 readers (v0.1 DRAFT)

**Purpose:** permit literal transcription of contemporaneous English-descriptive chess notation without exposure to the modern Byrne–Fischer PGN/SAN reference. **Status:** neutral reference draft for *future independently screened readers*. No reader has been recruited, assigned, tested or authenticated, and no original historical score has been transcribed or adjudicated by this work.

**Do not include:** complete or partial Byrne–Fischer move sequences, modern game score, Winter 82-ply list, EP01 FENs, historical terminal-answer comparisons, expected event sequence, original-review template with the answer-key field, or another reader's worksheet. This legend must be provided **only** with the assigned publisher-scanned periodical and the empty blind-reader worksheet.

## 1. Piece letters in English descriptive notation

| Printed token family | Piece it describes |
|---|---|
| K | King |
| Q | Queen |
| R | Rook |
| B | Bishop |
| N or Kt | Knight (older typesetting can use **Kt**) |
| P | Pawn |

Letter case, abbreviations and OCR confusions should be recorded **exactly** in the raw field; later normalization is a separate, post-freeze operation. A blurred `Kt` is **not** to be silently read as `K` or vice versa.

## 2. Descriptive file names (neutral reference)

| White-view file from left to right | Descriptive file name | Common printed abbreviation |
|---|---|---|
| a | Queen's rook | QR |
| b | Queen's knight | QN or QKt |
| c | Queen's bishop | QB |
| d | Queen | Q |
| e | King | K |
| f | King's bishop | KB |
| g | King's knight | KN or KKt |
| h | King's rook | KR |

Ranks in English descriptive notation are counted **from the moving player's own home rank**: their home row is 1; the opposite back rank is 8. Hence a printed descriptive square is side-relative, not automatically a unique modern letter-number square without the correct moving side. This reference is **for understanding notation**, not an instruction to translate any EP01 move into algebraic notation during first-pass transcription.

## 3. General printed markers

- A dash often separates a piece or pawn token from its descriptive destination.
- `x` or another printed capture symbol may indicate a capture; notation can name the *victim piece*, so literal capture tokens must not be guessed from an assumed board.
- `+`, `ch`, `check`, `mate` and similar terms can appear as printed move suffixes or adjoining editorial prose. Record precisely whether each glyph appears **inside the move token** or **as notes**.
- `!`, `?`, parentheses, dashes, line breaks, variation numbers and editorial diagrams may be annotations, not moves. Do not add them to the main score or discard them silently.
- A numbered full-move row can contain two printed half-moves (White, Black); one may be absent, continued elsewhere or illegible. Do not infer missing text from assumed alternating-move conventions.
- 1956 typography, faded ink and machine extraction may turn `Kt` into `K`, confuse `B` and `8`, or blur capture marks. Flag with uncertainty and page-region locator rather than guessing.

**No source-specific move examples are supplied intentionally.**

## 4. Reader workflow (binding protocol is separate)

1. Confirm **no prior exposure** to the modern Byrne–Fischer move list, another reader's output or answer-bearing EP01 code. If exposed, disclose it and **do not accept** the blind role.
2. Only examine the **assigned** source witness's printed page(s). Follow `docs/EP01-PRIMARY-BLIND-TRANSCRIPTION-PROTOCOL.v0.1.md`.
3. In each of the 82 empty worksheet rows, copy what is visibly printed in `original_descriptive_token`. Record visual confidence, printed issue/page and precise region, plus ambiguity notes. Preserve literal typographic forms and omitted/illegible marks.
4. Do not convert to SAN yet. Freeze/date the raw worksheet, with an attestation that no SAN key or other reader output was consulted.
5. Only **after** raw freeze, perform a separately labeled SAN conversion using the periodical text. Keep unresolved reading and notation ambiguities explicit; do not look up a modern score to fill gaps.
6. The *other* fresh reader of the **same exact periodical witness** independently repeats the process without seeing the first worksheet. Only after both freezes may an adjudicator compare within-witness, then across 1956 publications and finally against the modern secondary list.
7. If a page does not actually supply 82 textual half-moves, mark missing/ambiguous rows as such. Do not fabricate the missing portions or infer the terminal result.

The late-1956 Fischer/Collins edited *Chess Life* witness and purported handwritten original player scoresheets are **different witness classes** from a blind reading of a magazine table. A match between magazine publications cannot authenticate the purported Byrne-original resignation versus Fischer-original mate difference.

## 5. Internal source note — keep off the blind packet

For project curators **only** (not to be given to readers): the basic language of English descriptive chess notation, relative rank numbering and Q/K file naming was cross-checked at authoring time against a general exposition and an encyclopedia summary. These are generic background, **not** sources for the Byrne–Fischer game or its ending:
- https://chess.phd/learn/notation/what-is-descriptive-notation/
- https://en.wikipedia.org/wiki/Descriptive_notation

If the guide is distributed as a blind packet, **strip section 5** and prevent opening game-score or other internet references during the first-pass transcription.

## Frozen conditions

Guide author has seen modern SAN and **cannot** act as blind Reader A/B. No primary rows were populated, no human attestation was created, no source manuscript was downloaded/committed, no commercial rights were granted. E5B4D NO-GO under failure model M; strict Policy B unchanged (all relevant processes terminated and confirmed before 120 seconds, independent 1,048,576-byte stdout/stderr lifetime emitted-and-accepted limits). R6 PENDING, IVV_GLOBAL and ED-CASE-REAL-01 NOT APPROVED, publication forbidden.
