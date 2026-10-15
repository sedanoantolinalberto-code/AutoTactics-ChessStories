# Chess Evidence Registry v0.1.1 — uniqueness regression review, 2026-10-16

Status: DOCUMENTARY_REVIEW_ONLY. Origin commit: `d73e8e913ae4f4bb77fd30f74721560d1a1239fb`. The v0.1.1 schema and example have not been modified. This document does not report a formal JSON Schema validation or technical execution.

## Confirmed structural regression

Comparison of v0.1 schema at `5ffb8ecd278c06d596349176040abe12c3f329af` with v0.1.1 schema shows that `uniqueItems: true` was present in the original arrays but missing in these four surviving arrays:

1. `#/$defs/scene/properties/claim_refs` (items now `claimRef` typed objects).
2. `#/$defs/scene/properties/asset_refs` (items now `assetRef` typed objects).
3. `#/$defs/asset/properties/upstream_asset_refs` (items now `assetRef` typed objects).
4. `#/$defs/rights/properties/permission_document_refs` (items now `permissionRef` typed objects).

The current EP01 example was inspected for exact repeated serialized reference objects within each of these arrays and NONE were observed. This is a **schema regression**, not an EP01 data duplicate nor a failed validator run.

Minimum patch for a new future documentary candidate, not applied: add `"uniqueItems": true` to the four named array schemas. Under JSON Schema, uniqueItems compares entire array item values. The semantic equality of typed references requires additionally comparing collection+id+scope; define whether logically equivalent external scopes with different textual representation count as duplicates. The current localScope requires kind=LOCAL_REGISTRY and registry_id.

## Non-equivalent migration

Former `dependency.blocked_refs` was superseded by `dependency.blocked_uses`, whose entries describe target reference, operation, status and scope. It is NOT a mechanically surviving array. Do not restore the former property or blindly set uniqueItems. Review whether two identical operation/target/scope entries must be rejected semantically, or if duplicates can intentionally represent separate evidence sources.

The present example has 2,2,1,0 blocked_uses across DEP-CR, DEP-BLIND, DEP-R2, DEP-IPN respectively. No approval derives from this count.

## Recommended acceptance criteria for a future documentation-only patch

- Only a separate version or branch modifies the four array property declarations; retain v0.1.1 immutable for forensic comparison.
- Document object equality versus semantic identity, including same id in different collection (T10 snapshot vs T10 scene).
- Keep T01–T12 IDs unchanged, seven claims UNASSESSED, WIT-WINTER-WIN0/WIN1/WIN2 without canonical selection, and DEP-R2 blocking R2 original byte authentication without revoking OBS-CASE repository read.
- Distinguish documentary inspection from any future qualified validator run and avoid any PASS statement.

## Invariants

E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL, NO-GO under failure model M. Policy B: all relevant processes terminate AND their termination is confirmed strictly before 120s; independent stdout/stderr caps of 1,048,576 bytes emitted AND accepted across each entire lifetime. R6 PENDING, IVV_GLOBAL and CASE_APPROVAL NOT APPROVED, 66 semantic negatives + 77 router negatives and independent chess oracle NOT_RUN. No actions, engines, project tests, render, merge or publication.
