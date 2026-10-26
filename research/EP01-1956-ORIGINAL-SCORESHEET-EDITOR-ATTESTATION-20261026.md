# EP01 — Direct publisher attestation of original Fischer scoresheet reproduction (26 October 2026)

**Evidence state: DIRECT_EMAIL_READ / DOCUMENTARY_NEW_DELTA.**  
**No historical last-move adjudication, rights clearance, chess oracle, IVV, execution, render, merge or release.**

## Specific new primary-source correspondence

On **22 October 2026, 07:34:28 (provider-reported timestamp)**, the user received a direct reply from **Dirk Jan ten Geuzendam, editor-in-chief of New In Chess**, subject **“Byrne-Fischer 1956 Scoresheet New In Chess 2024/3”**. Read from the connected dedicated research Gmail mailbox; provider message id **`1a162886b3737197`**, thread **`1a162886b3737197`**.

The editor explicitly attested that:
1. The score sheet depicted in the column **“The Scoresheet”** in **New In Chess 2024/3** is **the original in David DeLucia's collection**.
2. **John Donaldson's _Inside the Mind of Bobby Fischer_** accurately distinguishes among the original score sheet, a version written for **Jack Collins**, and a **carbon copy**.

The user replied with thanks on 22 October, 10:24:13 (message **`1a16323d0a209b4d`**). **No further inquiry, outgoing email or cost authorized by this note.**

**Scope of attestation:** firsthand publisher/editor statement about identity of **the object reproduced by his publication**, **not** a physical inspection by this audit, collection accession record, acquisition chain, precise original handwriting transcription, object metadata hash, full 82-ply historical move authentication or eyewitness confirmation of the last move actually played. **Do not silently upgrade `LAST_MOVE_PHYSICALLY_PLAYED`**; no claim that either terminal narrative has been independently adjudicated.

## Independent contemporaneous publication and explicit usage boundary

The dedicated research mailbox also contains **John Hartmann (US Chess) reply dated 16 October 2026 15:28:41**, thread **`1a13f5137015cbaa`**, message **`1a1455478de24b0d`**:
- Attachment **`Pages from Chess Review 1956.pdf`** (provider-reported size **1,148,045 bytes**) sent in response to a request for **December 1956 _Chess Review_, printed pp. 374–375**.
- The sender expressly stated that US Chess publications remain under copyright and that the supplied material is **not available for commercial use**. Limited educational research access is **not** a commercial-media license.
- Follow-up response (16 October 2026 16:05:04, message **`1a14575c6658e342`**) indicates US Chess does not possess the original score sheet.

**This review did not download/open/hash the attached PDF or visually transcribe its page images**, nor the original-score illustration from New In Chess. Their *existence in the correspondence* is verified, but their bytes, completeness, image authenticity, final move and editorial annotations are **NOT_DIRECTLY_INSPECTED_THIS_TURN**. Preserve original attachment in mailbox; do not upload/reproduce its copyrighted scans or photos in GitHub or eventual commercial deliverables.

## EP01 gate implications (narrow)

| Control | Before | After this documentary source delta |
| --- | --- | --- |
| Identify which physical manuscript New In Chess 2024/3 reproduces | Publisher identification not independently held in the 17 October GitHub branch | **DIRECT_EDITOR_ATTESTATION**, specifically original in DeLucia collection |
| Original vs. Collins reconstruction/carbon differentiation | Secondary/book-related report | Publisher confirms Donaldson's distinction; no underlying objects independently inspected |
| 1956 printed witness access | Earlier documentary access claims | Hartmann email and PDF attachment presence verified directly; **actual PDF page bytes not inspected** |
| Original game's physically played last move | CONFLICTED/UNRESOLVED | **UNCHANGED** |
| 82-ply blinded two-reader transcription | NOT_DONE | **UNCHANGED** |
| PGN source-bytes authentication / legal oracle | NOT_RUN / UNKNOWN | **UNCHANGED** |
| Original-image/print commercial-use rights | R6 PENDING | **US Chess: explicit no commercial reuse of publication**; DeLucia/New In Chess imagery not cleared |
| E5B4D model M / strict Policy B | NO-GO | **UNCHANGED** |
| IVV_GLOBAL / CASE_APPROVAL / render / publish | NOT_APPROVED | **UNCHANGED** |

Editorial design remains EP01 **T01–T12**, ending at played-score candidate **ply 50 / 25...Nxd1 as a NONTERMINAL editorial end**. This avoids a claim about the physically played final mating move, but does **not** itself certify the moves' primary-source transcription or rules.

## Minimal next independent check, not authorization

1. Ask an **independent historically competent reviewer** to evaluate the publisher correspondence *with authorized access* and the cited publication/object, including whether identity evidence suffices for claims used only through ply 50. Do not substitute author/editor attestation for physical custody proof.
2. If authorized research PDF bytes may be obtained for an independent review, create a private **exact-byte digest and page-level observation record** without redistributing the facsimile; check licensing boundaries before use.
3. Request from the evaluator a precise **source-sufficiency decision for EP01 17...Be6 / 18.Bxb6 / 25...Nxd1** distinct from the disputed historical last move. This is a **proposed decision**, not a granted CASE approval.
4. An actual chess oracle, source-only checker run, renderer or CI action remains **NOT AUTHORIZED** under the recorded E5B4D EP01 decision packet; a revised independent execution/fault-model adjudication must precede any run.

## Trace / provenance

- Message identifiers above are exact connected-provider references; they identify a source in the owner's private mailbox, not a publicly available, independently authenticated signature. No contents/attachments are copied into the repo.
- Existing governance: `docs/E5B4D-EP01-RELEASE-PATH-DECISION-PACKET-20261017.md` on branch `chess-stories/e5b4d-release-path-decision-packet-20261017`; `issue #8`, PR #10 and PR #12; **no merge to main**.
- This note records only the **new substantive correspondence not contained in the 17 October documentary state**. Historical claims and copyright grants are intentionally not promoted.
