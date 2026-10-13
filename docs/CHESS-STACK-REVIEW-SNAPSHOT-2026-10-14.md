# Chess Stories review-stack snapshot — 2026-10-14

**Purpose:** source-review reproducibility only. This is not a merge plan, build manifest, executable lockfile, gate approval or publication authority.

The following draft heads were observed after the 2026-10-14 static remediation cycle:

| PR | Head SHA | Role |
|---|---|---|
| #1 | `8e3da6639060a1605947bfc3aedd4113ab0068a1` | v0.2 schema + EP01 documentary fixture |
| #2 | `5f5932888eaeb0aa501e48dcfefd3fe572b9e986` | semantic checker + 66 unexecuted mutations |
| #3 | `166685bbe394251f2195fbde03ac9691c4c7ccdf` | contemporaneous published-mate witnesses + 82-ply secondary source + blind primary protocol + unresolved scoresheet divergence |
| #4 | `5d297774656b929c46ca11a66debd097e3f10d4b` | 45s editorial target reconciled to event truth |
| #5 | `182bd001adbef10081b6efd749647dbc69a52d1a` | v0.3 policy-separation RFC, not adopted; 24 unexecuted binder threats |
| #6 | `51fccc724e06e9d8fe48cded6aefa23aec80078e` | perceptual preregistration, no participants |
| #7 | `0d23ae38959fdc14656b0dda340957d7638f21e8` | R6 ledger + clean-room baseline |
| #9 | `d8a60294e20f05c2911070975f9d9628cbadb877` | EP02 secondary candidate |
| #10 | `571e9c557746bc6408e5af64c01847683f63e38e` | legality-oracle RFC + T10 source clarification |
| #11 | `8f35555d03e5052cd4fbe5bd086ae46083c47878` | truth overlay + Git source identity |
| #12 parent before this snapshot refresh | `d7cc4d8e7e11054257c04d48aef8ed2157351743` | integration router + 57 proposed mutations; bridge provenance refresh pending in this snapshot commit |

All listed PRs were open, draft and unmerged when observed.

## Main branch guard

Observed `main/README.md` Git blob: `6c1cde33c02c495d3f6c0c60b30c8a104d32dd9c`.

No source from these draft PRs was merged to `main` during this review cycle.

## Interpretation limits

- A head SHA proves only repository identity of that draft state.
- Cross-branch documentary comparison is not an executable dependency resolution.
- This snapshot does not establish raw-byte SHA-256 trust, chess legality, historical authentication, R6, IVV_GLOBAL, Policy B qualification or E5B4D execution permission.
- Any later change to a referenced head requires re-review of the affected cross-branch assumptions before claiming this snapshot still applies.


### Snapshot refresh after PR #5 source-identity hardening

PR #5 moved after PB23/PB24 were added. This file was refreshed to point to the new PR #5 head. The PR #12 row records the parent head immediately before this snapshot-refresh commit; a file cannot self-record the hash of the commit that is created by updating itself.


### Snapshot refresh after PR #3 witness expansion

PR #3 now includes the visually confirmed 5 Nov contemporary terminal record, the 20 Dec Fischer/Collins annotated witness, and the unresolved scoresheet divergence dossier. The PR #12 T10/full82 bridge was statically re-compared after the metadata change and remained 14/14 exact for plies 36–49 on the four documentary fields. No rules replay occurred.
