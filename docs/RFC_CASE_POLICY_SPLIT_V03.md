# RFC — Chess Stories semantic contract v0.3: generic case / frozen-policy split

**Status:** DOCUMENTARY ARCHITECTURE PROPOSAL. NO CODE OR SCHEMA TESTS EXECUTED. NOT APPROVED.

## Why a version bump is required

The v0.2 structural schema hardcodes ED-CASE-REAL-01 fields inside every generic case: \`frozen_gates\`, \`execution_policy\` and a literal F03 restriction to \`24...Ra4\`. This is safe as a preserved EP01 snapshot but inappropriate as a universal data contract for Morphy, Anderssen, Fischer–Spassky, Carlsen and other Chess Stories episodes.

Changing v0.2 in place would silently move existing frozen assumptions. This RFC **does not modify** either v0.2 source file or the earlier accepted documentary checks. Instead it proposes a *breaking draft version*:

- \`contracts/scene-contract-v0.3-draft.schema.json\` — reusable narrative-state and evidence structure without EP01-specific gates.
- \`cases/ED-CASE-REAL-01.v0.3-proposal.json\` — original 6 FENs and 12 events, moved to the generic case structure.
- \`policies/case-policy-v0.1-draft.schema.json\` — structural shape of a policy sidecar.
- \`policies/ED-CASE-REAL-01.frozen-policy.v0.1.json\` — literal EP01 gate/policy declarations, immutable from the v0.2 source.
- \`policies/ED-CASE-REAL-01.frozen-policy.lock.schema.json\` — case-specific exact \`const\` lock requiring all frozen values.

## Data separation

| v0.2 field | v0.3 candidate | Meaning |
|---|---|---|
| \`case_id\` | same | The declared historical/editorial case. |
| \`states\` / \`timeline\` / \`branches\` | same records | Identity, FEN and sequence are unchanged. |
| \`evidence\`, \`claims\`, \`assets\` | unchanged | Declaration ≠ historical verification or license. |
| \`claim_admissibility.f03\` | \`claim_admissibility.policy_rule_refs: ["F03"]\` | F03 is referenced by policy ID, no longer universal. |
| \`frozen_gates\` | \`policies/*.json\` | Preserved exact EP01 states in sidecar. |
| \`execution_policy\` | \`policies/*.json\` | Preserved unqualified runner and strict B. |
| New \`policy_binding\` | ID, case ID, version, optional declared digest, explicit \`DECLARED_NOT_VERIFIED\` | This is only a declaration; policy lookup and byte identity need independent qualification. |

No other case is authorized to inherit EP01 restrictions automatically. In particular, a future Morphy story MUST have its own case-specific policy record and independent editorial, historical and rights gates. A null policy SHA must never be interpreted as evidence of a verified binding.

## Pilot invariants retained verbatim

The v0.3 frozen policy manifest preserves these exact declarations from the 05B fixture:

- PASS LIMITED: IVV-01, IVV-02, IVV-04, IVV-07, IVV-08, IVV-11.
- PENDING: IVV-03, IVV-05, IVV-06, IVV-09, IVV-10, IVV-12, R6.
- NOT APPROVED: IVV_GLOBAL, ED-CASE-REAL-01, CASE_APPROVAL.
- NOT PASSED: MOTION_GATE_2. NOT RUN: GATE_3 and SI-G0.
- NO-GO under failure model M: E5B4D. NO-GO: FOOTBALL_P1.
- PERMISSION_TO_PUBLISH: false.
- Strict Policy B: all relevant processes terminate *and their termination is confirmed before 120s*. Independent stdout/stderr lifetime emitted/accepted caps of exactly 1,048,576 bytes per stream, with no qualification or authorization of a runner.
- F03: \`24...Ra4\` cannot be uniquely-best-asserted without competent proof and independent review, regardless of claim category.

No rights or external event can elevate those fields merely by changing JSON.

## Cross-file semantic rules (not expressible by standalone JSON Schema)

Any future schema orchestrator **must**:

1. Verify the case schema independently using a Draft 2020-12 implementation.
2. Verify the policy document separately against the generic policy schema AND the immutable EP01 exact-lock schema.
3. Require \`case.policy_binding.case_id === case.case_id === policy.case_id\`.
4. Require exact equality between \`case.policy_binding.policy_id\` and \`policy.policy_id\`, plus schema-version match.
5. Qualify and verify the policy file bytes and their SHA-256 using an independently checked, immutable mechanism. A null digest or user-reported digest leaves binding unverified. Neither name nor path is enough.
6. Resolve every policy rule referenced by \`claim_admissibility.policy_rule_refs\`; no unknown, repeated, or foreign-case policy rule may pass.
7. Verify no contradictory or unauthorized rights, timing, execution or case status claims across other fields and assets. An \`asset.uses[].clearance_status\` claim cannot promote R6.
8. Verify every FEN, ply and move through an independently qualified rules oracle before ever stating chess legal verification.
9. Verify sources/claims separately, without promoting original-score authentication from source duplication.
10. Reject missing policy documents, policy digest mismatches, unlocked gates, cross-case references, and any attempt to run under an unqualified Policy B mechanism.

The v0.2 validator in \`src/semantic-validator-v0.2.mjs\` **cannot validate a v0.3 document**: its version check and embedded frozen-gate assertions target the old shape. No v0.3 validator is provided or claimed.

## Proposed documentary negative cases (NOT EXECUTED)

| ID | Mutation | Expected safeguard |
|---|---|---|
| P01 | Change R6 \`PENDING\` to \`CLEARED\` | Exact policy-lock mismatch |
| P02 | Change E5B4D to \`PASS\` | Exact policy-lock mismatch |
| P03 | Make \`PERMISSION_TO_PUBLISH=true\` | Generic policy and exact lock reject |
| P04 | Move \`F03\` to another case silently | Case/policy binding mismatch |
| P05 | Use Morphy's case ID with EP01 policy ID | Binding mismatch |
| P06 | Set \`binding_status=VERIFIED\` without evidence | Structural rejection |
| P07 | Add a declared SHA-256 that does not match policy bytes | Qualified digest mismatch |
| P08 | Drop F03 from the policy rules while case references it | Missing policy-rule reference |
| P09 | Duplicate rule IDs / evidence IDs | Semantic registry collision |
| P10 | Delete the policy sidecar | Fail-closed source missing |
| P11 | Give a case \`EXCUSED\` without independent case-specific gate review | Case status disallowed |
| P12 | Change any of the six FEN positions in version migration | Migration ledger mismatch |

No test execution or Policy B qualification has occurred.

## How to adopt later

Retain the v0.2 artifacts as historical documentary baselines. Review this RFC first, then independently qualify a v0.3 policy loader and schema validation path; only after a safe runner exists can a new validation phase be authorized. Do not immediately migrate production data, renderers or media publication.

**This RFC is not a mechanism to bypass frozen checks. Its purpose is to prevent EP01 rules from being silently treated as universal while preserving them exactly for EP01.**


## New cross-case finding: consultation games (Morphy's Opera Game)

The independent EP02 secondary score identifies Paul Morphy playing White against **Duke Karl of Brunswick and Count Isouard as two consulting Black participants**. Treating their group as one historical person would fabricate an identity relationship.

The proposed \`contracts/scene-contract-v0.3-draft.schema.json\` now supports either:
- \`$defs/player\`: an individually identified person with separate evidence references; or
- \`$defs/consultationTeam\`: a \`group_kind: "CONSULTATION_TEAM"\` record containing at least two distinct referenced member identities and group-level evidence references.

The side's member IDs remain subject to a future cross-record uniqueness check. A game's PGN records the Black moves **by side**, not by which consulting member physically selected or moved each piece. Individual move attribution must remain unsupported without a source.

Additional documentary negative scenarios (not executed):
- P13: Duplicate the same person ID twice inside a consultation team; future semantic validator must reject member-ID collisions.
- P14: Replace the consultation-team record with one individual's identity while retaining two-person assertions; content-to-source review must reject an unsupported identity simplification.
- P15: Assign a specific 13...Rxd7 decision to an individual consultative member without evidence; claim admissibility review must reject unsupported attribution.

This extension changes **only** the new v0.3 candidate schema, not the EP01 v0.2 schema, its original case data, the frozen sidecar, or any gate.
