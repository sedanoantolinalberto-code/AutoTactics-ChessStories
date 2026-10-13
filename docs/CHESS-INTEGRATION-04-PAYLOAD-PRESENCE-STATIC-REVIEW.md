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
