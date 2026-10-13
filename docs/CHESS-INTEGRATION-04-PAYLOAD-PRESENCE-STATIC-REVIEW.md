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
