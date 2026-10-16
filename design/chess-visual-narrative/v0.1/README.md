# Chess Stories EP01 — Visual Narrative Design v0.1 (documentary only)

**Status: CONCEPT_PROPOSAL / NOT_RENDERED / NOT_TESTED / NOT_APPROVED / NOT_CLEARED.** Scope restricted to the Chess Stories chess pilot and the twelve already-declared EP01 events. No build, engine, validator, shader, font binary, graphic asset, preview, human testing, publishing, merge or gate change is authorized by these files.

## Objective and incremental value

Translate the existing *semantic* twelve-event sequence into an actionable, cinematic **visual communication system** for a future clean-room implementation, while preventing camera, editing or captions from accidentally fabricating chess moves or confusing real versus hypothetical positions. This is an editorial design layer, **not** a replacement or reinterpretation of the semantic case, R6, any overlay version, or the Chess Evidence Registry.

Documents in this directory:

1. [Storyboard T01–T12](storyboard-T01-T12.md): per-event board visibility, camera intent, graphic action, precise factual labels, known hazards, and proposed review questions.
2. [Visual system and platform adaptations](visual-system-and-platforms.md): cinematic grammar, silent-first 9:16 layout, optional 16:9, future 45s/60s target variants, accessibility and licensing boundaries.
3. [Editorial copy / silent treatment](editorial-copy-and-silent-treatment.md): candidate on-screen copy and optional voice reference, distinguished from certified voice, narration truth, measured timing or cleared media.
4. [Human review and delivery contract](future-human-review-and-delivery.md): future review protocols, blocked dependencies and acceptance questions, all NOT_RUN.

## Immutable inputs and explicit version discrimination

- Semantic case: `cases/ED-CASE-REAL-01.v0.2.json`, commit `2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd`, Git blob `3514f19ac355763a5b4c61d5c573df090b0eccc1`.
- Scene contract: `contracts/scene-contract-v0.2.schema.json`, same commit, Git blob `7dc513bad7082e54c8ade5f0568202cd804ba3c0`.
- Overlay basis for T01–T12: `editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json` at `fa942d79a414ee3bc617b241a12f2cc58169d651` (OVER1; blob `57df8acf69cdd8516c5587100bc71c533b8ecf7a`). This revision includes the explicit T07 warning-release rule. Other overlay revisions exist; this selection is a *design reference*, not a historical canonical selection or a merge.
- Traceability and editorial truth: `design/chess-evidence-registry/v0.1.1/scene-traceability.md` at `d73e8e913ae4f4bb77fd30f74721560d1a1239fb`.
- Source/rights constraints: `docs/R6_EP01_CLEAN_ROOM_PRODUCTION_BASELINE.v0.1.md`, commit `87cb4aac391147ed8d2b1509ddb3b23b98ca0783` (R6 candidate decisions, including **VIS-TECH-01 ALT-A after-position-only**, not an approved render).
- CER F5 closure: `design/chess-evidence-registry/reviews/F5-closeout-and-execution-feasibility.md`, commit `7bea6cb1fdf482109c559e4044e5af3e9c78ae89`.

T01–T12 sequence is fixed; candidate stage directions do not change event kind, SAN, boards, capture identities, branch transitions, factuality, omissions or the sequence's ending. The 1942 Russner–Walcker parallel is not inserted into this EP01 visual plan; identical-FEN/plagiarism hypotheses are unsupported.

## Distinguish four layers

1. **Declarative fact from CASE/overlay**: e.g. T03 white bishop c5→b6 captures black queen on b6; *declared*, not primary-authenticated.
2. **Visual candidate**: how to make the declared fact understandable, subject to rights/originality and visual checks.
3. **Risk / future acceptance question**: expected viewer confusion or motion artifacts, NOT a completed test.
4. **Release or technical gate**: still blocked; no design note constitutes clearance.

All overlay shot/voice times remain **UNSPECIFIED/UNMEASURED**; proposed target runtime variants (45s/60s) are *planning targets only*, not measurements. No evidence of public or private-screen viewing exists here.

## Execution and approval freeze

- E5B4D: `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL`, **NO-GO under fault model M**.
- Policy B: every relevant process must have terminated **and** termination confirmed strictly before 120 seconds; independent stdout and stderr lifetime caps **1,048,576 emitted AND accepted bytes per stream**.
- R6 **PENDING**; IVV_GLOBAL **NOT APPROVED**; CASE_APPROVAL **NOT APPROVED**.
- 66 semantic negatives, 77 router negatives and independent chess legality oracle **NOT_RUN**.
- F5 closed *documentarily*; technical validation/integration still blocked.
- Do not change `main`, draft PR #12, contracts, original v0.1.1, other sports/projects, or permissions. In particular, artwork and fonts remain proposed source and NOT cleared commercial assets.

This set is prepared for later Codex documentary review; it does not require PC availability from the user.
