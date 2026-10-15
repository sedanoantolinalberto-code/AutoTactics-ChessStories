# Chess Evidence Registry — semantic and required-field inspection (2026-10-15)

Scope: documentary reading of phase-2 JSON Schema and example at source commit `5ffb8ecd278c06d596349176040abe12c3f329af`. These are observations of JSON content, not JSON Schema validation, technical tests, approvals or historical authentication.

## Observations directly supported by example
- Across all 17 registry collections, the example has **zero** missing top-level required keys per the corresponding schema `$defs` `required` arrays, and **zero** unexpected top-level object keys where `additionalProperties=false`. Nested properties, JSON types, const/enum, conditional constraints, semantic relationships and qualified validation are **not** established by this limited comparison.
- All 7 claims have `confidence=UNASSESSED` and nonempty general rationale. The schema enum nonetheless permits HIGH without an explicit conditional rule requiring qualified supporting assessment. Current example itself does not assert HIGH.
- The 4 conflicts remain recorded: Winter revision, overlay revision, historically played termination, tournament round. They are not resolved by this review.
- The 3 validation records retain `execution_status=NOT_RUN`, `result=null` and no artifacts, with 66 semantic and 77 router negative specifications; oracle specification count null. No tests were run.
- The 2 example rights entries remain `PENDING` and `NOT_AUTHORIZED`; no permissions are added.
- `WIT-CR-FULL` exists as a registry entry but represents an **unacquired target**, `availability=LOCATED_NOT_FULLY_INSPECTED`, with no acquired bytes. Entity presence must NOT be interpreted as possession of a full scan. `WIT-CR-FRAGMENT` records a secondary partial reproduction and prior reported observation, not current original inspection. `WIT-WINTER-REPO` is a repository transcription, not a primary witness.
- `OBS-P374.reporting_mode=REPORTED_PRIOR_OBSERVATION` clearly distinguishes the earlier report from this review.
- T10 has inclusive omitted plies 36–49, count 14; T11 points from V-PRE-EV2 to V-EV2; T12 is editorial closure, not physical historical ending.

## Risks requiring future *design* attention
1. **CER-R10 / medium:** schema conditional rules not yet enforce HIGH/MODERATE confidence evidence-review competence; add typed review metadata or keep claims UNASSESSED until explicit adjudication. Do not infer confidence from witness counts.
2. **CER-R11 / medium:** unavailable witness entries such as WIT-CR-FULL are useful dependency placeholders but require a distinct `object_acquired` or availability discriminant to prevent consumers treating declarations as possessed image bytes.
3. **CER-R12 / medium:** preserve exact meaning of `REPORTED_PRIOR_OBSERVATION` vs `CURRENT_REPOSITORY_READ` vs future primary-source visual inspection. It is a source-origin distinction, not an authenticity ranking.
4. **CER-R13 / medium:** `blocked_refs` include mixed entity classes. Future typed resolver must distinguish unacquired target witnesses from source witness observations and unavailable byte inputs.
5. **CER-R14 / lower:** preliminary top-level property comparison is not a schema validator. Any future test plan must declare gaps including nested properties, enums, formats and semantic reference typing.
6. **CER-R15 / high historical dependency:** resolved round and physical game termination still require suitable primary documentation, with authentic object provenance; original Chess Review pp374–375 and Goniec Krakowski no274 p3 requests pending.

## Frozen boundaries
No phase-2 file or schema altered. No executables, engine, suites, validator, Actions, render, release or merge. E5B4D `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL`, NO-GO under M; Policy B strictly before 120 seconds with independent stdout/stderr 1,048,576 byte lifetime emitted-and-accepted limits; R6=PENDING; IVV_GLOBAL/CASE_APPROVAL not approved; all technical negatives/oracle NOT_RUN. These observations do not approve documentary design or any other gate.
