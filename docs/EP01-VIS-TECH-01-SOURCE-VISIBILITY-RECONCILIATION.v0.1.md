# EP01 — VIS-TECH-01: semantic technical state vs audience-visible board

**Recorded 2026-10-14 — static source audit only.** No render, chess rules oracle, tests, ffmpeg, GitHub Actions, media preview, human study or execution of project code. This is a design blocker, not a resolved IVV gate.

## Proven discrepancy across draft branches

- PR #1 `cases/ED-CASE-REAL-01.v0.2.json` declares state `V-PRE-EV2` at **ply 49**, FEN `4r1k1/1p3pbp/1Qp3p1/8/r1b5/2n2N2/P4PPP/3R2KR b - - 0 25`, `visibility: TECHNICAL_ONLY`. The case's other five states are `VISUAL`.
- PR #4 `editorial/EP01-60S-PHASE-BOARD-BINDINGS.v0.1.json` previously assigned phase S08-C/T10 `display_board_at_settled_end: V-PRE-EV2`, **without preserving the technical-only visibility distinction**.
- PR #4's target phase S08-D/T11 requires the technical ply-49 state as its logical `from_state` for the declared 25...Nxd1 knight→white-rook capture. The v0.2 `TECHNICAL_ONLY` enumeration has no separate normative rendering waiver for the source staging frames.

The state is a **technical input** needed for the semantic case's declared move, not an authorization to turn the transition from ply 35 to 49 into a played move or to depict an unapproved unqualified chess move. This is an interface requirement gap: neither the 60s shot target nor schema v0.2 certifies which audience-visible frames, if any, may use the technical state at the beginning of T11.

## Conservative source-only repair on PR #4

1. Preserve the canonical T10 `to_state=V-PRE-EV2` as an **internal state transition** and its exact fourteen **omitted real half-moves 36–49 inclusive**.
2. Set S08-C settled **audience-visible board** to the last declared visible real board `V-REAL`; show `SE OMITEN JUGADAS REALES` throughout T10. No automatic visual landing on the technical FEN or move tween is permitted.
3. Record the hidden semantic T10 target separately as `internal_after_state_id=V-PRE-EV2` with `visibility=TECHNICAL_ONLY`; distinguish `state_id` in the 60s shotplan as *semantic* rather than *screen* board identity.
4. Set T11 source-board staging as **BLOCKED** until a semantic owner independently reviews and explicitly resolves the visual treatment of the `TECHNICAL_ONLY` source position, without weakening history/disclosure requirements. This does **not** authorize the technical state to be treated as `VISUAL` or the declared move to be animated without qualified legal replay.
5. Re-pin the observed Git blob of the revised 60s shotplan in the phase-binding source manifest. Git identity is document provenance, not qualified raw-byte verification.

No change was made to PR #1's case schema/state, the original 45s plan, PR #11's twelve truth labels, or the long-standing Policy B and E5B4D controls.

## Remaining unresolved decision — cannot silently choose

**VIS-TECH-01 (OPEN):** Specify whether a `TECHNICAL_ONLY` source state may ever be *transiently staged* in an output with an explicit 14-ply omission disclosure, or whether the move needs a wholly different truthful depiction. Whatever policy is eventually approved must be versioned and audited across semantic, presentation, editorial and renderer branches; then tested with an independently qualified rules oracle and actual mobile visual comprehension evidence. An answer is **not** derivable from source text alone.

**VIS-TECH-02 (OPEN):** Even after staging semantics are resolved, actual source-board visibility duration, capture animation, truth-label transitions and 60-second total pacing are **UNMEASURED**. A 4-second T11 target is not evidence of feasibility.

## Frozen gates

E5B4D NO-GO under model M. Strict Policy B remains unchanged: **all relevant processes terminated and termination confirmed before 120s**, independent stdout and stderr lifetime bounds of **1,048,576 bytes both emitted and accepted** each. R6 PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED, all render/execution/publication flags false, no main merge. Neither documentary agreement nor the existence of this RFC is a technical PASS.

## 2026-10-14 — ALT-A: no source-board staging, static post-position cut

The Chess Stories authoring policy has a **source-only proposed mitigation** that does not require displaying `V-PRE-EV2` at all:

1. During T10/S08-C, retain the last visible real board `V-REAL` and a conspicuous **SE OMITEN JUGADAS REALES / 14 medias jugadas / 36–49** message. The semantic clock may advance internally to `V-PRE-EV2`, but that state is `TECHNICAL_ONLY` and no public pixels or played-move animation are implied.
2. During T11/S08-D, use a **hard editorial cut to `V-EV2`**, which the canonical case explicitly classifies as `VISUAL`. Display the exact **PARTIDA REAL** truth label and **25...Nxd1 · captura de torre blanca** with a static highlight on d1 and optional explicit **DESPUÉS DE 14 MEDIAS JUGADAS OMITIDAS** secondary caption. **No c3→d1 piece tween** is attempted from the technical source.
3. Maintain the underlying event T11's declared source `V-PRE-EV2` for eventual *qualified* chess-oracle review. Showing a source-declared `V-EV2` still is not proof that 25...Nxd1 is chess-legal or original-history authenticated.
4. Before the cut can become an actual stimulus, rights R6, independently approved media assets, semantic/story truth frame inspection, qualified legal replay, human comprehension and strict Policy B/M execution qualification must all be satisfied. No automatic gate change is authorized.

**Disposition:** VIS-TECH-01 technical-only **source exposure conflict has a specific documentary mitigation ALT-A**, replacing the earlier presumption that T11 needs an audience-visible technical source board. This does **not** equal verified production feasibility or IVV PASS. The item remains **OPEN FOR QUALIFIED IMPLEMENTATION AND REVIEW**, not awaiting a new arbitrary user preference. Actual video and permissions remain NO-GO.
