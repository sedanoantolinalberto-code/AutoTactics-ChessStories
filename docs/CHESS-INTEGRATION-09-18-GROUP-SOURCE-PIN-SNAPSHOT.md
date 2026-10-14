# CHESS-INTEGRATION-09 — Cross-layer source pin inventory snapshot

**2026-10-14 | Static text inspection only | NOT EXECUTED | NOT A TEST PASS**

## Input identities (observed Git, not qualified byte hashes)

| Input | Branch | Observed Git blob |
|---|---|---|
| `src/ep01-cross-layer-router.v0.1.mjs` | `chess-stories/integration-assurance-gates-rfc-v0.1` | `87f441b9052319a48a2ca9f302ae1beebf520b43` |
| `cases/ED-CASE-REAL-01.v0.2.json` | `chess-stories/semantic-contract-v0.2` | `3514f19ac355763a5b4c61d5c573df090b0eccc1` |
| `editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json` | `chess-stories/presentation-truth-overlay-rfc-v0.1` | `aafc6429d716863e225361dd4962169bf12ecfae` |

## Structural source declaration correspondences inspected

The following **18 groups** were inspected by treating the repository source declarations as documentary data (reading JSON-like literal constants, not evaluating or importing the project's JavaScript). They matched the observed PR #1/PR #11 source declarations:

1. Six complete EP01 states: full source records, including `visibility`.
2. Seven canonical claim records, including F03-sensitive assertion strings.
3. The case claim-admissibility and F03 policy record.
4. The secondary-source candidate historical ending record.
5. The distinct editorial-only sequence-ending record.
6. Title, player identity, branch declarations, four evidence records, and documentary asset declaration as one pinned source-record group.
7. Ordered event kinds T01–T12.
8. Mandatory story-truth declarations.
9. Explicit unapproved overlay-release record.
10. Twelve overlay rendering-policy source strings.
11. Twelve event transition/move/omission declarations.
12. Twelve event `disclosure` declarations.
13. Twelve event `claim_refs`.
14. Twelve event `evidence_refs`.
15. Twelve event `asset_refs`.
16. Twelve event timing declarations (unmeasured).
17. Twelve fixed visual truth-label/persistence/release-rule records.
18. The six states' FEN/branch/factuality/ply subset.

**No source-literal mismatch was found within these 18 groups at the observed Git revisions.** This is evidence about *documentary correspondence only*. No call was made to `validateSemanticCase`, `proposeEp01Routing`, the mutation harness, a chess engine, an oracle, image generation, builds, Actions or renderers.

## Important limits

- This static inspection is **not** a test execution and cannot count toward the 77 mutation cases, 66 semantic-validator negatives, schema qualification, or any behavioral coverage percentage.
- JavaScript literal text readback is not an independently qualified code parser, raw JSON duplicate-key check, JSON Schema Draft 2020-12 validator, or runtime promise.
- Copying all fields from one source into a router cannot prove the source is historically correct, legally valid, original, licensed, or fit for commercial publication.
- State `V-PRE-EV2` remains `TECHNICAL_ONLY`; PR #4's source-level VIS-TECH-01 issue still blocks audience-visible T11 staging. This pin inspection does **not** certify that the 60s storyboard is renderable.
- Observation of Git blob IDs is **not** separately qualified SHA-256 source-object identity.
- **Cross-branch drift is possible after this snapshot**; references must be rechecked if canonical case, overlay or code revisions change.

## Frozen gate status

E5B4D **NO-GO** under failure model M. Strict Policy B unchanged: all relevant processes terminated **and termination confirmed strictly before 120 s**; stdout and stderr each independently bounded to **1,048,576 bytes emitted and accepted for the entire process lifetime**. R6 PENDING; IVV_GLOBAL / CASE_APPROVAL NOT APPROVED; no rendering, execution or publication authority, and no merge into `main`.
