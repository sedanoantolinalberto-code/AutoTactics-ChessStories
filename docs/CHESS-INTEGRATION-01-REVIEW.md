# CHESS-INTEGRATION-01 — EP01 three-layer semantic/oracle/presentation routing

**Status:** SOURCE IMPLEMENTATION DRAFT; NO EXECUTION, NO CHESS ORACLE, NO RENDER OR HUMAN IVV. **Do not interpret this as a new technical PASS.**

## Goal

Connect existing Chess Stories documents without collapsing distinct kinds of evidence into one green check:

1. **v0.2 documentary case:** twelve ordered semantic events, six declared FEN board states, evidence, historical-vs-hypothetical status and immutable gates (draft PR #1).
2. **Qualified chess-rules oracle boundary:** would independently replay legal moves and derive full target FENs rather than trusting supplied output. Currently a proposed interface only (draft PR #10).
3. **Presentation truth layer:** requires persistent visual "HIPOTÉTICA · NO JUGADA", exact return-to-real restoration, explicit skipped plies and no false game ending. Currently a proposed contract only (draft PR #11).

The new source-only integration files are:
- \`integration/EP01-CROSS-LAYER-ROUTING.v0.1.json\`
- \`src/ep01-cross-layer-router.v0.1.mjs\`
- \`src/ep01-cross-layer-router.negative-drafts.mjs\`

They **do not** depend on installing, invoking or simulating a chess rules package, nor do they run when fetched from GitHub.

## Twelve-event routing matrix

| ID | Semantic action | Future rules oracle? | Required presentation truth |
|---|---|---|---|
| T01 | Initialize V-P1 | No move; source-state verification separate | PARTIDA REAL |
| T02 | 17...Be6 | Yes, independently replay declared real move | PARTIDA REAL |
| T03 | 18.Bxb6 | Yes, independently verify queen capture | PARTIDA REAL |
| T04 | Rewind to V-P1 | NO: editorial rewind | REBOBINADO |
| T05 | Enter ALT_QD8 | NO: editorial context switch | HIPOTÉTICA before motion |
| T06 | 17...Qd8, unplayed | Yes, test legal possibility; NEVER promote historical status | HIPOTÉTICA · NO JUGADA |
| T07 | Return V-HYP → V-P1 | NO: atomic editorial restoration, not SAN | Keep warning until exact MAIN+V-P1 recovered |
| T08 | Replay 17...Be6 | Yes, with context-pinned oracle evidence | PARTIDA REAL |
| T09 | Replay 18.Bxb6 | Yes, with context-pinned oracle evidence | PARTIDA REAL |
| T10 | Omit real plies 36–49 | A full, independently sourced 14-ply gap replay would be needed; current case lacks intermediate record | SE OMITEN JUGADAS REALES |
| T11 | 25...Nxd1 | Yes, independently verify capture of white rook | PARTIDA REAL; game continues |
| T12 | Editorial ending at V-EV2 | NO: closing is not a chess move or source game end | CIERRE EDITORIAL · LA PARTIDA CONTINÚA |

No event is permitted to become executable simply by gaining an oracle integration field.

## Fail-closed code-source guard

\`proposeEp01Routing(caseV02, overlayV01)\` is a **pure proposed API** that builds a routing observation rather than a runtime command. It uses:
- The original EP01 twelve-event order, types, declared move/capture properties and omitted-ply ranges.
- The exact six EP01 declared FEN states, branches and ply numbers, frozen independently in the source module. These remain **documentary declarations**, not 1956 authenticated originals.
- All **22 frozen pilot gate declarations**, including six pending IVV entries, R6 and E5B4D, plus the complete currently unqualified strict Policy B settings.
- Exact reference agreement between the documentary events and their proposed overlay entries.
- The mandatory hypothetical and return labels and EP01 editorial game-continuation distinction.

A mismatched case ID, unauthorized status, relabeled move, altered FEN, modified branch transition, omitted marker or loosened Policy B declaration returns \`REJECTED_SOURCE_ROUTING\`.

Even if no documentary mismatch is found, the output must remain \`SOURCE_ROUTING_PROPOSAL_ONLY\`; \`safe_to_publish\`, \`safe_to_render\`, \`execution_authorized\`, \`policy_b_qualified_under_m\`, \`legal_oracle_qualified\`, \`historical_score_authenticated\` and \`commercial_rights_cleared\` must all remain \`false\`.

**Caution:** comparing exact FEN strings and pinned move declarations rejects changes against this fixture version. It does **not** derive an independent answer, prove that the historical move was played, validate a FEN as a legal chess position or substitute for authenticated source bytes. The new module also assumes schema-validated ordinary JSON and uncompromised JS intrinsics, and is not yet a qualified hostile-input verifier.

## Negative mutation design

\`src/ep01-cross-layer-router.negative-drafts.mjs\` specifies **36 future-only rejection scenarios**: cross-case/cross-version confusion, fictitious IVV and R6 promotion, Policy B downgrades, event reordering, duplicate/changed FENs, invalid state transitions, missing hypothesis disclosure, premature return, wrong omitted interval, false 25...Nxd1 ending, altered SAN/captured piece and policy/status retagging. None has been executed.

The accompanying proposed future-only harness validates its own baseline *only when invoked*. Its presence in GitHub is not permission to invoke it. All results are currently **NOT_RUN**. Later source-reviewers must scrutinize mutation oracle assumptions; a lexical match of an expected error code is not a behavioral test.

## Outstanding independent evidence / release barriers

| Layer | Currently established | Still required |
|---|---|---|
| Raw source identity | Observed GitHub blob SHA of document files | Independently qualified source-byte trust and duplicate-key-safe parsing |
| Structure | Existing v0.2 JSON Schema draft | Qualified Draft 2020-12 runner + evidence |
| Semantics | v0.2 source checker and 65 mutation proposals | Authorized qualified execution and independently reviewed results |
| Chess legality | Review vectors, no oracle engine | Qualified replay with legal path, king safety, special moves and source-anchored gap |
| History | Secondary PGN and a located Dec 1956 *Chess Review* periodical lead | Inspect contemporary full game score and reconcile with secondary 82 plies |
| Presentation | 12 event overlay proposals and nine-shot 45s target | Rights-cleared render, measured soundtrack/subtitle timings and device testing |
| R6 / rights | 14-asset incomplete chain-of-title inventory | Real license/creator evidence and independent clearance for used assets |
| IVV human | Preregistration and empty record template | Consented participants, measured stimuli, assessor records |
| Strict Policy B E5B4D | NO-GO under model M, unchanged | Independently qualified execution model under the user's unchanged guarantees |
| Publication | ED-CASE-REAL-01 NOT APPROVED | Explicit independent release decision after all required checks |

**This RFC changes none of the above states.** No programme, test, dependency, production render, GitHub workflow or chess engine was invoked. The original Windows AutoTactics project was not accessed or changed. All changes remain isolated in a draft source branch outside \`main\`.

## Later adoption sequence (not authorization)

1. Independently review and reconcile draft PRs #1/#2/#10/#11 with the cross-layer router.
2. Verify source integrity and historic witness evidence without using a legal engine as a substitute for history.
3. Qualify executor separately against E5B4D strict Policy B under model M; do not substitute generic timeout settings or truncated output logs.
4. Only after a supported go decision, run actual negative and legal-oracle tests, then review results independently.
5. Acquire rights-cleared visuals/audio, test mobile comprehension, and require an independent R6/IVV/release decision.

The user has not been asked to approve repeated documentary edits, but that operational autonomy **does not** waive the protected execution and evidence conditions.


## Secondary T10 bridge found in two modern published scores — NOT original 1956 authentication

The file \`sources/EP01-T10-SECONDARY-SAN-36-49.v0.1.json\` records fourteen SAN half-moves separately, indexed by global ply, from 18...Bxc4+ (ply 36) to 25.Qxb6 (ply 49). The same visible sequence appears in:
- Edward Winter, *The Byrne v Fischer 'Game of the Century'* — https://www.chesshistory.com/winter/extra/byrnefischer.html
- Chess.com, *Game of the Century | Byrne vs Fischer (1956)* — https://www.chess.com/article/view/game-of-the-century-chess

The original v0.2 case file still only contains the endpoint FENs for T10; the new candidate is a **separate** source-scoped documentary artifact, not an automatically merged historical proof. Those two modern scores might share source lineage; their agreement is not a demonstration of witness independence or archival originality.

As no qualified legal engine has replayed the exact sequence and the contemporaneous 1956 Chess Review page scan has not been newly transcribed and authenticated in this task, the T10 oracle status remains **NOT_RUN / INCONCLUSIVE** and release status remains BLOCKED. This source discovery is useful input to future independent replay and full original-witness reconciliation, not permission to animate a purported single move between two FEN endpoints.

No original magazine image or copyrighted historical annotation prose has been reuploaded into GitHub.


## Static reviewer note — document key ordering

The EP01 source snapshot compares \`move\` and \`omitted_plies\` by a bounded, order-insensitive structural JSON equality procedure. Reordering properties in a JSON object must not, by itself, constitute a different chess move; changing a SAN, capture victim, ply range, state ID or branch ID must still be rejected. The proposed comparator has **not been executed or proved on arbitrary hostile input** and assumes the qualified upstream ordinary-JSON preflight; its resource guard is documentary defense-in-depth only.


## CHESS-INTEGRATION-02 static hardening — visual factuality and source evidence

The source-only EP01 router now additionally pins all **12 exact visual factuality labels**, their hypothetical persistence flags, audible/muted independence flags and hypothetical warning release order. A nonempty but misleading label (for example marking T02 or T11 as hypothetical) is no longer silently allowed by the *documentary* routing guard.

The router also pins the documentary source event \`disclosure\`, \`claim_refs\`, \`evidence_refs\`, \`asset_refs\` and \`timing\` declarations so a caller cannot silently replace claims, drop supporting sources or assert \`TIMING_MEASURED\` by changing JSON. The comparison is based on a bounded, order-insensitive structural equality for ordinary JSON (NOT a qualified hostile-input parser and not raw file provenance).

New proposed negative scenarios bring the integration catalog to **44**, all **NOT EXECUTED**. Source-text inspection found 44 distinct \`IR-XX\` identifiers, with every expected rejection code appearing in the source; this is not runtime proof.

The integration routing manifest references the full modern-scholarly **82-ply** Byrne–Fischer game candidate from historical PR #3 by its observed GitHub blob identity and branch, in addition to the 14-ply T10 source candidate. These are separate documentary drafts, **not a merged source-tree or independently authenticated bytes**. Both original November 5, 1956 *Chess Life* and December 1956 *Chess Review* still require an independent full-score visual transcription; an empty 82-row historical comparison template is in PR #3.

All documentary progress remains subordinate to strict Policy B, R6, IVV and the E5B4D NO-GO under failure model M.
