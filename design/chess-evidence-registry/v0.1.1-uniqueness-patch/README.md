# Chess Evidence Registry — isolated uniqueness patch candidate

Status: DOCUMENTARY_CANDIDATE_NOT_APPROVED_NOT_VALIDATED. Base v0.1.1 original commit `d73e8e913ae4f4bb77fd30f74721560d1a1239fb`; untouched original at `../v0.1.1/registry.schema.json`.

This directory contains a standalone **candidate schema copy**, not an installed or executed schema and NOT a replacement for the entire v0.1.1 document set. The unchanged `v0.1.1/ep01-example.json` is the comparison fixture for future authorized work; this branch contains no regenerated example.

## Exact proposed semantic change
Restore `uniqueItems: true` to four existing arrays:
- `#/$defs/scene/properties/claim_refs`
- `#/$defs/scene/properties/asset_refs`
- `#/$defs/asset/properties/upstream_asset_refs`
- `#/$defs/rights/properties/permission_document_refs`

No other intended changes from the original v0.1.1 schema. JSON pretty-printing may change textual whitespace, therefore a text diff may exceed four lines; semantic property comparison is still needed for qualified acceptance. This readback certifies persistence only; not formal schema validation or test execution.

`uniqueItems` constrains equality of complete typed JSON reference objects. Future resolver must independently define semantic identity for `collection+id+scope`; snapshot T10 and scene T10 remain different. `dependency.blocked_uses` is not changed, since it replaced the earlier `blocked_refs` with structured operation-specific blocks and requires separate judgement.

Claims remain seven UNASSESSED in the original example; 12 events, six positions and four moves are unchanged. All original v0.1 and v0.1.1 files, contracts, main, and PR #12 are not modified by this isolated candidate.

## Strict frozen gates
E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL = NO-GO under M; Policy B: all relevant processes terminated and termination confirmed STRICTLY BEFORE 120 seconds, independent stdout/stderr limits each 1,048,576 lifetime emitted AND accepted bytes; R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED; 66 semantic + 77 router negatives, independent chess oracle NOT_RUN. No engines, project validators/tests, Actions, render, merge or publication.
