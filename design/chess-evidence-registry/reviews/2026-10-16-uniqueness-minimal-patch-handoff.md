# CER v0.1.1 — minimum patch specification and handoff to Codex

Date: 2026-10-16. Documentary proposal only. Base v0.1.1 commit `d73e8e913ae4f4bb77fd30f74721560d1a1239fb`; preceding review `09292823619fbcc7f37f6d102f9f8641d014cd63`.

## Four exact schema changes proposed

In `design/chess-evidence-registry/v0.1.1/registry.schema.json`, preserve all existing properties, `items` refs and required lists. Add only `"uniqueItems": true` to the array declarations at:
- `#/$defs/scene/properties/claim_refs` (existing `items: {"$ref":"#/$defs/claimRef"}`)
- `#/$defs/scene/properties/asset_refs` (existing `items: {"$ref":"#/$defs/assetRef"}`)
- `#/$defs/asset/properties/upstream_asset_refs` (existing `items: {"$ref":"#/$defs/assetRef"}`)
- `#/$defs/rights/properties/permission_document_refs` (existing `items: {"$ref":"#/$defs/permissionRef"}`)

The four fields currently lack `uniqueItems` and all retained that keyword in v0.1. Do not edit v0.1.1 in place: create a new isolated documentary patch candidate, retain a migration/delta note, and do not claim that the patch is formally validated.

## Equality contract

The typed ref shapes use a `collection` discriminator, an `id` and a `scope`. For structurally identical JSON objects, `uniqueItems` forbids exact duplicates as defined by JSON Schema value equality. This is NOT a guarantee of semantic uniqueness when distinct textual scopes refer to an equivalent object, or where future external identities are represented in different but equivalent forms. Any later semantic resolver must define comparison using the normalized tuple `(collection, id, scope)` and preserve scope kind. Cross-collection T10 snapshot and T10 scene are distinct identities.

For `dependency.blocked_uses`, do not infer the old `blocked_refs` behavior: each record has `target_ref, operation, status, scope`. A future semantic deduplication rule may need an operation-target-scope key but is not automatically equivalent to `uniqueItems`. Classify this as an unresolved design decision, not a fifth confirmed regression.

## Targeted documentary example review

EP01 v0.1.1 contains 12 scenes, six positions, four moves and seven UNASSESSED claims. Manual comparison of serialized entries within each of the four affected arrays showed no identical duplicates in the example; empty permission document arrays are not licenses. This does not establish structural schema conformance or reference integrity. No gates promoted.

## Acceptance handoff

1. Inspect current candidate and branch heads; avoid overlapping changes from interrupted Codex sessions.
2. Branch only from known commit; add four keywords in a new candidate revision, do not alter protected originals or mutable refs.
3. Specify exact diff and prove readback persistence after write (text readback only, NOT test).
4. Document identity and semantic equivalence rules, keeping T10's two types disambiguated.
5. Defer code execution, JSON Schema validator, other technical negative suites, chess engine, renderer, Actions and publication.
6. If a structural constraint contradicts preservation of historical data, stop and report rather than rewriting events or claims.

## Frozen operational decisions

E5B4D = STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL, NO-GO under M. Policy B: every relevant process terminates AND termination is confirmed strictly before 120s, independent stdout and stderr 1,048,576 lifetime bytes emitted AND accepted. R6 PENDING, IVV_GLOBAL and CASE_APPROVAL NOT APPROVED; 66/77 negatives and chess legality oracle NOT_RUN. No new validation PASS or historical authentication.
