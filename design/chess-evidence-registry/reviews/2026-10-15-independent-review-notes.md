# Chess Evidence Registry v0.1 — independent document inspection notes
Date: 2026-10-15. Source: commit `5ffb8ecd278c06d596349176040abe12c3f329af`. This is a limited, read-only inspection of the *contents* of two existing JSON documents. It is NOT a schema validation, qualified test, engine, gate check, archival inspection, or approval. The ten phase-2 files remain unchanged.

## Directly observed facts
- JSON text in `registry.schema.json` and `ep01-example.json` is parseable.
- Example has **20** source snapshots, **1** game, **2** branches, **6** positions, **4** moves, **3** sources, **3** witnesses, **1** transcription, **3** observations, **7** claims, **7** evidence links, **4** conflicts, **12** scene bindings, **2** assets, **2** rights records, **3** validation records, **4** dependencies, and **1** revision.
- Event IDs T01 through T12 are present. T08 and T02 both link to `MOVE-MAIN-34`; T09 and T03 both link to `MOVE-MAIN-35`. T06 refers to `MOVE-ALT-QD8-34`.
- All seven claims in this example use `confidence=UNASSESSED`, each with an explicit rationale. No individual claim is currently marked HIGH.
- There are no duplicate IDs *within any single collection*.
- One **cross-collection identifier collision** exists: `T10` identifies both a source snapshot and a scene event. The collision is not by itself a demonstrated failure when collection types/namespace qualify references, but any future global-ID resolver MUST NOT assume bare IDs are unique. Use namespace-qualified references or distinct identifiers, and document backward compatibility. Do not silently rename existing case or scene IDs.
- A basic membership comparison of internal `*_ref` and `*_refs` strings did not expose missing IDs, but **does not verify their target types**, polymorphic fields, optional foreign keys, semantics, typed graph closure, archive sources or historical truth. Legacy evidence identifiers and permission/result artifact fields were explicitly out of scope.
- `claim.confidence` enum includes UNASSESSED/LOW/MODERATE/HIGH but schema requirements alone do not conditionally require competent approval/review evidence for the HIGH state. This is a **schema expressivity/design risk**, not a finding that the current example asserts false high confidence.
- Foreign-key fields such as `evidenceLink.claim_ref`, `evidenceLink.observation_ref` and scene `move_ref` are plain strings. JSON Schema is insufficient alone to ensure referential existence and target type. Future semantic controls must handle this; none executed.
- `constraints.policy_b_requirements.compliance_status` in the example is `NOT_ESTABLISHED`, separate from stated requirements. The frozen 120 s strictly-before-deadline and two independent 1048576 lifetime byte caps are preserved.

## Recommended disposition before any implementation
1. **CER-R01 (medium):** establish and document namespace / target-type policy for ID references; address `T10` collision without altering frozen case IDs.
2. **CER-R02 (medium):** add design rule for HIGH or MODERATE confidence requiring traceable human assessment and basis; keep current examples UNASSESSED; no gate authority.
3. **CER-R03 (medium):** plan typed referential integrity with correct target collection per ref field, null/optional semantics and cross-snapshot identity, outside production routing.
4. **CER-R04 (high integration risk):** preserve independent Git snapshot identities for Winter and overlay revisions; no automatic pin promotion.
5. **CER-R05 (high epistemic risk):** original archival source access, game ending, round and rights all remain unresolved; no evidence confidence promotion.
6. **CER-R06 (critical hard gate):** E5B4D remains NO-GO under failure model M. No technical execution, render, release, merge, or rights clearance implied by this memo.

## Gates and nonclaims
Phase-2 schema remains `DOCUMENTARY_DESIGN_NOT_APPROVED` and not validated against EP01. E5B4D `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL`; strict Policy B unchanged (all processes and confirmation before 120 seconds; stdout and stderr individually <=1,048,576 emitted AND accepted lifetime bytes); R6=PENDING; IVV_GLOBAL=NOT APPROVED; CASE_APPROVAL=NOT APPROVED; 66 semantic negatives, 77 router negatives and independent chess legality oracle = NOT_RUN. This inspection made no code/contract changes; no engines, project test suites, validators, Actions, renders or publication were executed.

## Next when Codex becomes available
Finish a dedicated documentary reference type matrix: origin.snapshot_ref -> source_snapshots, evidenceLink.claim_ref -> claims, evidenceLink.observation_ref -> observations, scene.move_ref -> moves, scene.replay_of_event_ref -> scene_bindings, scene.*_state_ref -> positions, scene.*_branch_ref -> branches; enumerate all remaining fields and special cases, and verify mapping against the examples and dictionary. Preserve uncertainties and prepare correction proposals as an independent document, not production changes.
