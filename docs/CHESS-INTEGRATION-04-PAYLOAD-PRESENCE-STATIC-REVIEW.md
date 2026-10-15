# CHESS-INTEGRATION-04 — Event payload presence review (SOURCE ONLY)

Date: 2026-10-14. Scope: EP01 v0.2 event payload presence, draft PR #12. No runtime, package installation, test, chess replay, render, or Actions execution.

## Source contract (v0.2)

The `timeline` event definition uses a `oneOf` keyed by `kind`:

| Event kind | `move` | `omitted_plies` |
|---|---|---|
| REAL_MOVE / HYPOTHETICAL_MOVE | Required | Forbidden |
| ELLIPSIS | Forbidden | Required |
| SET_POSITION / REWIND / ENTER_HYPOTHETICAL / RETURN_TO_REAL / SEQUENCE_END | Forbidden | Forbidden |

A missing required key is different from explicit `null`. A forbidden key remains forbidden even if its value is `null`. This follows the draft 2020-12 source schema declaration, **not** a validator execution result. The event-type schema requires independently qualified enforcement; router is explicitly downstream of that qualified validation boundary.

## Change to router source (not evaluated)

The earlier comparison `event.move ?? null` / `event.omitted_plies ?? null` treated absence and explicit null equivalently when comparing to pinned null declarations. The source guard now additionally compares own-property presence against the pinned EP01 move/ellipsis requirements, and compares populated payloads structurally. This is defense-in-depth rather than a new independent validator; it does not replace the schema and does not establish chess legality or hostile-input safety.

Added four proposed negatives: IR-58 absent required REAL_MOVE `move`; IR-59 absent required ELLIPSIS `omitted_plies`; IR-60 forbidden null `move` on REWIND; IR-61 forbidden null `omitted_plies` on REAL_MOVE. The existing catalogue had IR-01 through IR-57. **61 proposed in total; 0 executed.** The additional specifications are not runtime evidence and do not prove expected diagnostics will occur.

## Remaining static audit limitations

1. No qualified raw-byte JSON parser / duplicate-key handling or full Draft 2020-12 validation evidenced here.
2. No authorized or qualified evaluator for the proposed negative cases; no observed behavioral PASS.
3. EP01 router is case-pinned, downstream of independent schema validation, and not a general hostile-input validator.
4. 82-ply candidate and 14-ply T10 bridge match at documentary level only; historical witness conflict and qualified legal replay remain unresolved.
5. Git head/blob identifiers are provenance observations, not independently qualified SHA-256 raw-byte trust.

## Frozen disposition

**E5B4D NO-GO under model M. Strict Policy B unchanged.** All relevant processes must terminate with termination confirmed strictly before 120 seconds. stdout/stderr each have independent lifetime emitted-and-accepted ceilings of 1,048,576 bytes. R6 PENDING; IVV_GLOBAL NOT APPROVED; ED-CASE-REAL-01 / CASE_APPROVAL NOT APPROVED; execution/render/publication not authorized. No merge into `main`.

## CHESS-INTEGRATION-05 — EP01 branch-anchor declaration hardening (2026-10-14, SOURCE ONLY)

The v0.2 event schema requires both `shared_anchor_state_id` and `return_anchor_state_id` for ENTER_HYPOTHETICAL, and `return_anchor_state_id` for RETURN_TO_REAL; the fields are forbidden for all other event kinds. The published EP01 documentary fixture specifies T05 shared/return = `V-P1` and T07 return = `V-P1`. The semantic validator also contains separate context-transition checks (including its ENTER_HYPOTHETICAL / RETURN_TO_REAL cases), so this is **defense-in-depth at the router boundary**, not evidence of a reachable production failure.

The source-only router now pins both the **presence and exact value** of those anchor keys. Four additional negative specifications were added: IR-62 T05 shared-anchor drift; IR-63 required T05 return-anchor deletion; IR-64 T07 return-anchor drift into V-HYP; IR-65 forbidden anchor insertion on T08 REAL_MOVE. The proposed catalog now has **65 identified cases**, with **zero executed**. Anchor checks do not establish actual rendering-phase warning persistence; semantic/static correspondence does not substitute for visual tests or the certified legal oracle.

The 82-ply modern secondary score, T10 14-ply documentary bridge, original 1956 witness comparison, qualified hash/byte trust, R6 and IVV outcomes are not upgraded. Frozen E5B4D = **NO-GO under M**, strict Policy B identical, `main` unchanged, all permissions to run/render/publish remain false.

## CHESS-INTEGRATION-06 — EP01 claim/F03/terminal distinction pin (2026-10-14, SOURCE ONLY)

The v0.2 semantic validator contains only a defensive **textual cue veto** for F03 and explicitly does not claim to be a complete natural-language classifier. The router previously pinned event-level claim IDs/references but not the seven referenced claim bodies or the entire case admissibility map. An altered assertion could therefore retain the same ID while changing its meaning; this is a source-only interface review finding, **not a demonstrated end-to-end exploit** because independent upstream validation and review are mandatory.

The EP01-only router source now pins four additional documentary records against the observed PR #1 case fixture:
- All seven canonical claim records, including text, category, predicate, scope, review state and evidence refs;
- The case claim-admissibility mapping including the exact F03 prohibition and review status;
- The secondary-source historical terminal declaration (with `original_historical_authentication=NOT_VERIFIED`);
- The editorial `sequence_end` record (not game termination).

This is a **literal case-specific source contract**; changing these declarations legitimately requires versioned review of the fixture and router. It is not a claim about actual legal validity, historical evidence independence or raw-byte trust.

New **proposed but NOT RUN** mutation specifications: IR-66 rewriting a real-move claim into a forced/optimal assertion without changing its ID; IR-67 introducing a prohibited F03 category exemption; IR-68 falsely authenticating the historical terminal declaration; IR-69 relabeling editorial closure as historical termination. Combined EP01 router catalog: **69 distinct proposed negatives; 0 executed**. This specification count is not test coverage proof.

The Nov/Dec 1956 printed-mate tradition, later reported player-original resignation/mate divergence, and the separated modern 82-ply SAN reference remain historical source issues, not magically resolved by pinned text. The 1956 first-hand 82-row comparison records remain blank pending independent unexposed readers. Independently qualified legality replay has NOT_RUN/UNKNOWN status. E5B4D NO-GO under model M, strict Policy B unchanged (confirmed termination before 120 seconds and independent lifetime stdout/stderr emitted/accepted limits of 1,048,576 each). R6 PENDING, IVV_GLOBAL NOT APPROVED, CASE_APPROVAL NOT APPROVED, render/publish false, no main merge.


## CHESS-INTEGRATION-07 — EP01 identity, branch, witness and asset integrity (2026-10-14, SOURCE ONLY)

### Reason for change

The router already pinned case identifier, individual state FEN/ply/branch declarations, event move and truth labels, full claim bodies, policy F03, and both ending declarations. However, **it did not require exact equality of `case.title`, `case.players`, `case.branches`, `case.evidence`, or `case.assets`**. Those fields influence what the source *means* even if each referenced ID remains valid. In particular:

- A source-only change in `players.white.display_name` could relabel the player while keeping the player ID and claim references unchanged. The separately drafted validator checks player identity IDs and references, **not fixed EP01 spelling/name equality**.
- A source evidence title or explanation could overstate original 1956 authentication while retaining the exact evidence ID referenced by the case's immutable claim declarations.
- An asset use's purpose could be rewritten to imply publication without changing its asset ID or the string `clearance_status`. This does **not** legally grant any rights, but unpinned declarations should not appear to be the unchanged EP01 source candidate.

These are **static code-review findings about the router interface**; no hypothetical mutated document has been submitted to a qualified schema/semantic validator or project runtime. Do not present them as observed or exploitable production execution failures.

### Source-only remediation

Pinned `case.title` by exact string and the following EP01 draft fixture sections by structural JSON comparison:

1. `players` — names, IDs, colors-by-map-key and declared supporting evidence.
2. `branches` — real/hypothetical hierarchy, anchor declarations, and supporting evidence refs.
3. `evidence` — the complete four source candidate records, each record's claims, verification limits, source identifiers and metadata.
4. `assets` — the one documentary position-data asset and its clearance/use declarations.

These are source-to-source **fixture integrity pins only**. They do not establish external provenance, independent historical witnesses, qualified byte hashes, asset originality or commercial license, and do not replace external schema/runtime validation. Future legitimate fixture revisions require a deliberate, independently reviewed rebase/re-pin, not a silent follower of mutable branch refs.

Five **proposed NOT RUN** negatives added: IR-70 altered title, IR-71 swapped white display name, IR-72 missing hypothetical evidence reference, IR-73 falsely relabeled evidence source title, IR-74 falsely repurposed asset for commercial publication. Current router catalogue: **74 proposed distinct mutation specs, 0 executed**.

### Static boundary review

The `sameDeclaredJson` source comparator has a bound of 1024 visited item pairs. An authoring-time inspection of the original fixture's four pinned sections counted **11 / 18 / 119 / 29 nested JSON values** respectively (players / branches / evidence / assets), safely below that bound **as source structure**, not as observed runtime behavior. This does not make the comparator a raw-byte validator, tamper-resistant hash verifier or universally safe JSON parser.

Frozen E5B4D **NO-GO under failure model M**; strict Policy B and independent lifetime emitted-and-accepted stdout/stderr limits unchanged. No project code/tests/engine/Actions/render ran; R6 PENDING; IVV_GLOBAL / case NOT APPROVED; publishing false; `main` not merged.


## CHESS-INTEGRATION-08 — Preserve state visibility, labels and per-state evidence (2026-10-14, SOURCE ONLY)

**Newly identified static interface gap:** the EP01 router originally pinned each of its six states' IDs, FEN, branch, factuality and ply, but did not independently pin the source `visibility` field (`VISUAL` vs `TECHNICAL_ONLY`), `san_label`, `evidence_refs`, or `claim_refs`. An otherwise structurally valid change to the V-PRE-EV2 visibility flag could describe that technical T10 landing as an ordinary visible state while retaining the unchanged FEN, ply 49 and T10 ellipsis event. The router's partial state equality would not flag that **source-field difference**. This is a static control-coverage finding, not an observed runtime or video failure; actual source validator behavior has not been executed or qualified.

**Patch:** the router now pins full EP01 state objects against the PR #1 fixture in addition to its existing important per-state FEN/branch/ply checks. This preserves:
- `V-PRE-EV2.visibility = TECHNICAL_ONLY` as a **default source declaration**. Its technical role does not permit rendering a fictitious single legal move from V-REAL. An eventual explicitly labelled omission-transition visual still needs lawful approval and frame testing.
- All six state SAN labels without asserting independent legal replay.
- Per-state historical candidate evidence/claim references, without falsely authenticating the underlying original sources.
- The original EP01 source ordering as a case-pinned documentary input (a hypothetical generic schema's array ordering invariance is out of scope).

**Negative proposals:** IR-75 technical landing misclassified `VISUAL`; IR-76 a real state misleadingly relabelled; IR-77 hypothetical supporting evidence dropped. All three are **source-only mutation definitions**, not executed. Router catalogue now **77 proposed distinct negative specifications, ZERO executed**.

### Integrity assurance boundary after CHESS-INTEGRATION-08

At the *case-specific source declaration level*, the router checks the EP01 fixture's case/version/status/title, canonical players, branches, six complete states, twelve event transition/move/gap/anchor/provenance declarations, four evidence records, seven claim records and F03 policy, declared documentary asset, historical and editorial end records, all protected gate literals and the strict execution policy. It also pins truth overlay declarations and observed Git IDs.

This is substantially more complete **source consistency**, **NOT** a certified raw-byte parser/digest, structural JSON-schema validator, FEN legality proof, original historical authentication, commercial rights grant, visual-frame inspection, Policy B/M executor qualification, or approval to render/publish. The **underlying 1956 source-witness discrepancy** is unchanged; no test harness was run. Mutable branch names and observed Git blob IDs do not establish independently qualified content trust.

E5B4D `NO-GO` under M; strict Policy B unchanged (all relevant processes terminated and termination confirmed **before** 120 s; independent stdout and stderr lifetime **emitted/accepted** bounds of 1,048,576 bytes each); R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED; publication false, no merge to main.
