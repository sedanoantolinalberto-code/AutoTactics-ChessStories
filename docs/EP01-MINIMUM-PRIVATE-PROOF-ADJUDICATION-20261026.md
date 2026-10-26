# EP01 — Minimum private proof: frozen requirements, exact source identity and gate decision table

**2026-10-26 | CROSS_BRANCH_DOCUMENTARY_COMPARISON | DECISION_READY_NOT_APPROVED | NOT_RUN | NO_GO_UNCHANGED**

This note replaces generic future research with a **single falsifiable, small-scope decision path** for a future *private* pilot. It does **not** authorize an oracle, subprocess, renderer, screening, merge, or publication. The owner's general willingness to proceed is not an E5B4D model-change approval, independent evaluator signoff or R6 signoff.

## Read-only source inventory actually inspected

All SHA values below are **Git blob IDs** from the named branches, **not independent SHA-256 raw-source attestations**. Cross-PR source files are not merged and no one branch contains an accepted integration.

| Role | Branch | Exact source file | Git blob ID |
| --- | --- | --- | --- |
| EP01 case, six board-state declarations and 12 events | `chess-stories/semantic-contract-v0.2` | `cases/ED-CASE-REAL-01.v0.2.json` | `3514f19ac355763a5b4c61d5c573df090b0eccc1` |
| 45s nine-shot original editorial target | `chess-stories/ep01-editorial-blueprint-v0.1` | `editorial/EP01-45S-SHOTPLAN-DRAFT.json` | `deb17ae8370f56f65d546c8f076883fa91b4c9f0` |
| 60s fourteen-phase alternative | same branch | `editorial/EP01-60S-COMPREHENSION-ALTERNATIVE.v0.1.json` | `3f8f3c35a802167b5c22fad6e45b899e283b507b` |
| 60s board/visibility binding, ALT-A | same branch | `editorial/EP01-60S-PHASE-BOARD-BINDINGS.v0.1.json` | `27282e7a4bbe61cd7c3e2b867cea3b658581b918` |
| Technical vs visible board discrepancy | same branch | `docs/EP01-VIS-TECH-01-SOURCE-VISIBILITY-RECONCILIATION.v0.1.md` | `e4cf0753dcd75e689c6788986edb2b36725745d1` |
| Declarative original geometry | `chess-stories/r6-asset-rights-inventory-v0.1` | `design/EP01-CLEANROOM-VECTOR-GEOMETRY.v0.1.json` | `b41be12fd4e7f392a8234ba782dacc7401553933` |
| Fourteen distinct asset roles, pending rights | same rights branch | `rights/R6-EP01-ASSET-REGISTER-DRAFT.json` | `9815bd94095f5df35d243050676b3a4b7a4e4e49` |
| Legal rules only, proposed, execution prohibited | `chess-stories/legality-oracle-interface-rfc-v0.1` | `contracts/CHESS-LEGALITY-ORACLE-INTERFACE-v0.1.draft.json` | `4f3133b21411cf2370ffe0959c8a82c2dc8230ce` |
| Frame truth overlays | `chess-stories/presentation-truth-overlay-rfc-v0.1` | `contracts/CHESS-PRESENTATION-TRUTH-OVERLAY-v0.1.draft.json` | `23b696ce97bf27716a55572d9167a7c6adcc52c8` |
| IVV human protocol | `chess-stories/ivv-human-study-prereg-v0.1` | `docs/IVV_HUMAN_PERCEPTION_EP01_PREREG_DRAFT.md` | `253126f066a89d666f1589c6d5677823f0f294de` |

## Actual scope and key risk

The canonical case declares six states: `V-P1` (ply33, VISUAL), `V-EV1` (34, VISUAL), `V-REAL` (35, VISUAL), `V-HYP` (34, VISUAL but **unplayed**), `V-PRE-EV2` (49, **TECHNICAL_ONLY**), `V-EV2` (50, VISUAL). T01–T12 encode real play, hypothetical, exact return, 14 **omitted real plies 36–49**, candidate **25...Nxd1**, and editorial **NONTERMINAL** closure.

**Unsafe future interpretation to prohibit:** T10's internal `V-PRE-EV2` source state is *not* an audience-visible board and must not become a magically played fourteen-ply transition. Future video also must not animate `V-REAL → V-EV2` as a legal single move. The proposed `VIS-TECH-01 ALT-A` mitigates this by keeping **V-REAL visible under the omission label**, then using a **hard static cut to V-EV2**, with real-play and d1 rook-capture explanatory label and **no piece tween from the hidden technical state**. This is a coherent **source design proposal**, **not** qualified chess legality, IVV or frame evidence.

**45s/60s static tradeoff:** 45s `S06+S07` cover rewind/hypothetical/return in **7,000 ms** (29–36s), while 60s `S06-A/B/C+S07` allocate **17,000 ms** (28–45s). 45s `S08` compresses `T08–T11` into **6,000 ms** (36–42s), while 60s allocates **12,000 ms** (45–57s). The 60s phase-binding file explicitly encodes ALT-A; the 45s S08 text does not by itself demonstrate a per-frame compliant staging path. **The 60s plan has more design-time headroom for viewer comprehension, but neither runtime pace nor perceptual superiority has been measured.** Existing October 17 governance calls the 45s proof first, 60s optional; no automatic editorial priority change is approved. This discrepancy belongs in human storyboard review, not a new 100-block study.

## Minimum future proof: four distinct gates, not a combined PASS

| Gate | Present verified state | Required independent decision / bounded future artifact | Not implied |
| --- | --- | --- | --- |
| **G0 — Process execution eligibility** | E5B4D under original M is NO-GO; Chess-specific October17 packet extends restriction to EP01. Original 288-line Codex technical report retrieved, original `E5B4D v0.1` *normative contract* NOT_RETRIEVED. | Obtain exact contract; independent scope/failure-model adjudication; explicit human authorization of any model/eligible process boundary; exact lifecycle and independent `E_s`/`A_s` proofs. | Ordinary 120s timeout, same-host watchdog, idle runner, general approval, cloud/offline tool |
| **G1 — Historical and chess-rule evidence** | Original-manuscript identity established **by New In Chess editor email attestation**; original physical object not inspected. US Chess-provided two-page 1956 print facsimile **directly inspected**, SHA-256 `d1043d5c62f5f39a7922289fc59c5080927eaac848e5a1c08baf5dab63a575ed`. Observed descriptive `17...B-K3!!`, `18 BxQ`, `25...NxR`; no blinded transcription/qualified legality replay. | Independent authenticated witness adjudication focused on episode's played moves; pre-registered independent readers, exact source bytes, full skipped-ply candidate; future qualified oracle verifies source and target FEN and separates unplayed 17...Qd8 from real line. | Printed mate = physically played mate; legal move = authenticated historical occurrence |
| **G2 — One rights-bound technical stimulus** | Original geometry only a **source design**, no generated stills. 14 rights roles not cleared. US Chess explicitly denied commercial reproduction of their copyrighted printed pages. | Only **after G0 and G1 permitted gates**, build a minimal original vector board/labels, no magazine pages/photos/facsimiles, no third-party music/voice; exact font binary/license/creator, asset manifest, allowed private use; preflight visually guards V-PRE-EV2. | Research access = commercial rights; clean-room label = proven originality |
| **G3 — Human IVV and case approval** | Existing IVV prereg **zero participants**, no real complete stimulus, IVV_GLOBAL/CASE NOT_APPROVED. Protocol proposes **12 novice + 12 experienced adults only as provisional planning target**, not automatically sufficient. | After lawful actual media, preregister thresholds, recruit consented adults, observe silent/mobile truth comprehension including T04–T07, T10/11 and T12; independent qualified case signoff. | Two arbitrary reviewers = IVV PASS; static storyboard = media PASS |

**Order of work now:** (1) original E5B4D contract and independent scope adjudication; (2) adjudicate historical EP01 source sufficiency using newly accessible 1956 facsimile and publisher response; (3) decide via a human storyboard risk review whether 45s or 60s is a safer first *research stimulus*; (4) only after actual execution/rights/quality approvals, request specific Codex changes and permitted tests. These are **dependencies**, not permission to execute.

## Current candidate deliverable definition, no implementation now

One nonpublic 9:16, chessboard-and-text, mute-comprehensible **EP01** research stimulus after gates permit. **No player likenesses, named venue interiors, original magazine images, original handwritten-score reproductions, broadcast footage, music, synthetic speech or external assets**. Render the real versus hypothetical distinction and nonterminal editorial close in text; keep source-technical position internal-only; avoid claiming uniquely best move, historical intent, or final played mate. Duration 45s or 60s requires an editorial risk decision and eventual measured pacing/IVV, not presumption.

**Stop:** no more ungrounded EXT or Chess control-ID rounds. Any additional work must resolve an identified proof obligation with new primary bytes, human signature or an observed defect and bounded corrective proposal. None of this document is a production asset or alters `main`.

**Frozen gates:** E5B4D model M NO-GO, strict Policy B actual termination and independent confirmation before 120s, stdout/stderr independent lifetime **`E_s <= 1,048,576` and `A_s <= 1,048,576`** each; 66 semantic/77 router negative specs NOT_RUN; oracle NOT_RUN; R6 PENDING; IVV_GLOBAL/CASE not approved; no Actions, tests, renderer, release or publication.
