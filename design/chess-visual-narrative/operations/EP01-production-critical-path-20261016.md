# Chess Stories EP01 — production dependency critical path (documentary only)
**Date: 2026-10-16. Verdict: DESIGN_HANDOFF_ACCEPTED_AS_DOCUMENTARY_DRAFT / PRODUCTION_NOT_ADMISSIBLE.**

This is a **decision and dependency routing memo**, not another storyboard, a substitute for formal execution policy, a revision to R6, an executable specification, a production green light, or a promise of timescales. Its purpose is to stop repetitive documentary audit loops and identify *which missing evidence could genuinely change the next permitted action*.

## Evidence pins and latest editorial milestone

- The 12-shot handoff in `design/chess-visual-narrative/handoff/v0.1/` at `9305b009b064ca3cb5746aa8ccc7dbef2bc6b134` has a Git-verified **ACCEPTABLE_AS_DOCUMENTARY_DRAFT** review in `design/chess-visual-narrative/reviews/EP01-plan-handoff-v0.1-review-20261016.md` at `39ff6900e10161635a57f2db32d432f4c1db06b7`, blob `1a0c39648f8cfccdd8dfaf0c804fb055e870cf42`.
- Frozen CASE, `cases/ED-CASE-REAL-01.v0.2.json` at `2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd`, blob `3514f19ac355763a5b4c61d5c573df090b0eccc1`. OVER1 `editorial/EP01-TRUTH-OVERLAYS-12-EVENTS.v0.1.json` at `fa942d79a414ee3bc617b241a12f2cc58169d651`, blob `57df8acf69cdd8516c5587100bc71c533b8ecf7a`.
- Existing **14-role** rights ledger: `rights/R6-EP01-ASSET-REGISTER-DRAFT.json` at `87cb4aac391147ed8d2b1509ddb3b23b98ca0783`, Git blob `9815bd94095f5df35d243050676b3a4b7a4e4e49`.
- Clean-room decisions: `docs/R6_EP01_CLEAN_ROOM_PRODUCTION_BASELINE.v0.1.md` at same commit, blob `84b12042e23efe812e247d0b2af5d6bd09a2016c`; existing declaration of vector geometry in `design/EP01-CLEANROOM-VECTOR-GEOMETRY.v0.1.json`, blob `b41be12fd4e7f392a8234ba782dacc7401553933`. They are candidates, not media or cleared design proof.
- E5B4D and F5 viability: `design/chess-evidence-registry/reviews/F5-closeout-and-execution-feasibility.md` at `7bea6cb1fdf482109c559e4044e5af3e9c78ae89`, blob `8e6ec0f046c6d667dc061a1e96044b3965a986b5`.
- GitHub PR #12 stays OPEN/DRAFT and unmerged, HEAD `2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd` when inspected on 2026-10-16. No branch merges or production edits are proposed here.

## One-sentence operational decision

**STOP producing additional near-identical visual handoffs or Registry/F5 audit notes.** The useful next work is resolving missing *primary-source evidence, exact asset provenance and admissible execution guarantees* on their own independent tracks; editorial design is already sufficient as a candidate to hand off once those prerequisites exist.

## Hard dependencies by track

| Track | Presently evidenced | Missing evidence / strict prerequisite | What can proceed **now** | Production effect |
|---|---|---|---|---|
| **EX — execution safety and admissibility (critical blocker)** | E5B4D says `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL` (NO-GO under M); F5 finds no proven compatible executable envelope | Formally justified guarantees under the **actual** failure model for *all* relevant processes; termination **and confirmation strictly before 120 s**; separate stdout/stderr lifetime limits **1,048,576 emitted and accepted bytes EACH**; competent review and permission | Only targeted documentary analysis of a genuinely new proposed assurance mechanism, if one exists; no 'try a tiny script' workaround | **Nothing executable can be promoted**, even a parser, renderer, preview, validator, checker or human stimulus, until resolved |
| **H — primary historical authentication** | Secondary source candidates, fixed T01–T12 as declarations; R2 originals unverified; Winter 0/1/2 genealogy known; terminal/ronda contested | Actual archival originals with custody/byte identity, reading of *Chess Review* Dec 1956 pp374–375, correct witness attribution, independent blind readings/adjudication; R2 source provenance | Follow up on archive requests when due, store received source *references* safely, draft blind transcription instructions already prepared; do not infer scores from unviewed pages | Cannot promote the seven UNASSESSED historical claims, historic motives/result or first-party assertions |
| **R — asset provenance and exploitation rights** | Fourteen role records inventoried, clean-room exclusion baseline, new geometric design *proposal*, candidate Noto Sans, silent-first concept | Exact asset bytes and author/derivation/licence evidence for **used** graphics, typography, final scripts, footage, eventual audio and exports; independent use/platform scope and rights sign-off | Specify evidence intake fields and eligible original-only art direction; *not* design, generate, download, render, view or redistribute media through a blocked execution path | R6 remains PENDING; 'reference-only' and 'not used' never mean CLEARED |
| **Q — chess, semantic and presentation IVV** | CASE/OVER1 and corrected handoff accepted documentarily; 14-plies gap/atomic return fully specified | Qualified independent chess legality oracle, 66 semantic negatives, 77 router negatives, visual muted comprehension and frame/state evidence, case/global IVV approval | Read/prepare exact review questions already listed (VN-01–VN-13); avoid another identical checklist or self-awarded PASS | Tests NOT_RUN and IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; no integration |
| **D — editorial product** | Twelve-event storyboard, sound-off copy, handoff per scene accepted as **documentary draft** | Actual licensed original media, runtime measured on legal system, platform-specific legibility and clearance, authenticated claims where used | **No further general rewrite required**. Reopen only in response to new source evidence or a concrete defect | Copy is a strong *design candidate*, not an authorized video |

The tracks can collect evidence independently as text, but release conditions are conjunctive. Solving H alone does not solve R/EX/Q; drafting a silent version reduces prospective audio use **only if a future asset manifest proves absence**. A model change cannot be inferred or adopted from a convenient test result. No new policy exemption is proposed.

## Exact mapping of R6's fourteen ledger roles (no silent clearance)

| Existing R6 role(s) | Count | Current disposition and real release dependency |
|---|---:|---|
| `BOARD-V-P1`, `BOARD-V-EV1`, `BOARD-V-REAL`, `BOARD-V-HYP`, `BOARD-V-EV2` | **5** | Legacy v4 stills explicitly **REFERENCE_ONLY / EXCLUDED** from the proposed clean-room release. Do not revive them or mistake their exclusion for recovered rights. |
| `BOARD-V-PRE-EV2` | **1** | **DATA-only TECHNICAL_ONLY** state; not a visual still. Its display would be a factual/visibility defect, not a requirement for a sixth board graphic. |
| `PIECE-SILHOUETTES-V4`, `FONT-DEJAVU-V4` | **2** | Legacy silhouettes/binary excluded; replace with independently assessed, genuinely original geometry and exact specified/license-reviewed new font. Current geometry and Noto family remain unapproved proposals. |
| `SCRIPT-EP01-SPANISH` | **1** | Originality, sourcing, rights and factual wording not independently accepted for exploitation. Corrected silent captions are a **documentary candidate only**. |
| `VOICE-EP01`, `MUSIC-SFX-EP01` | **2** | Not selected. If an authorized future silent variant has no audio, these would be absent in **that specific verified derivative**, NOT cleared; narrated variant reactivates licensing. |
| `PERIODICAL-CHESS-REVIEW-1956`, `FISCHER-SCORESHEET-PHOTO` | **2** | Research only / default exclusion from public release, irrespective of archive access. Permission for copying a page/image is separate from historical source access. |
| `FINAL-MP4-EP01` | **1** | Does not exist. A final output would require all actually used upstream identities, R6 review, qualified technical pipeline, IVV/CASE_APPROVAL and publication authorization. |
| **TOTAL** | **14** | No R6 clearance has been promoted. |

No invented 'cleared new board/font' records are added to R6 merely because design-source candidates exist. The next *meaningful* R6 update would require identification of **actual** eventual asset bytes and rights evidence. The ledger above restates current tracked roles, not a new inventory or license grant.

## Research outreach status — narrow observation, not evidence of delivery

On **2026-10-16**, a targeted search in the same Gmail account used for the historical outreach returned two sent items, and **no incoming matching messages** from US Chess / IPN in the specified post-2026-10-14 window. Sent items observed:
- Research access request to US Chess about `Chess Review`, December 1956, pp.374–375, sent 2026-10-15.
- Request to IPN Rzeszów concerning `Goniec Krakowski` no.274, Nov 22/23 1942, archival unit `IPN Rz 616/2`, sent 2026-10-15.

This is a time-bounded **mail search result**, not proof of delivery, receipt by a person, lack of replies in every account, copyright permission, or acquired original. No new outgoing mail or reminder was scheduled. IPN 1942 is a **separate comparator**, not an independent witness of the Byrne–Fischer 1956 game.

## Trigger-based next actions (not activity for activity's sake)

| New event | First rational response | Explicitly NOT authorized |
|---|---|---|
| Reply from US Chess with access conditions or material | Record terms, object identification and custody; preserve copyright boundary; plan independent blind transcription without introducing authors already familiar with the candidate as blind readers | Claim authenticated score from an email; reproduce/archive-scan in output without authorization |
| Reply from IPN | Verify exact item/page, archival identity and scope; keep the 1942 record segregated from EP01 1956 | Assert copying, identical FEN or any legal rights in a reproduction |
| Actual font source/graphics provenance with immutable identities appears | Prepare independent R6 per-asset use-level decision for qualifying reviewer | Mark rights CLEARED from family-level licence pages or draft geometry |
| A formally specified *new* M-compatible assurance mechanism is proposed | Examine M, coverage of processes, guaranteed termination confirmation and both lifetime streams; submit for independent review **before any execution** | Launch 'isolation' tests, timers, validators, scripts, Actions, engines or renders as a substitute for proof |
| All relevant strict guarantees, primary-history/rights/IVV conditions eventually satisfied | Separate explicit gate approvals and only then consider scoped media-production authorizations | Treat this memo or prior editorial acceptances as an implicit go-ahead |

## Program management outcome

**Documentary design milestone: COMPLETE AS CANDIDATE. Production readiness: BLOCKED.** No further repetitive EP01 storyboard/visual handoff reviews are recommended absent a concrete new fact. High-value pending work is real third-party archival material, actual asset-rights decisions or a rigorously admissible execution architecture. Because the user previously preserved Model M and strict Policy B, this memo **does not** soften or reinterpret them.

No `main`, PR #12, R6 registry, historical CASE, scene contract, Evidence Registry, frozen approvals or negative/oracle status is modified by this isolated note. No new tool execution in the project's technical domain; reading GitHub and correspondence metadata is documentary observation only.
