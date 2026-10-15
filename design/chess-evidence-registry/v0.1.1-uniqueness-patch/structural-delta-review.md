# CER v0.1.1 — isolated uniqueness schema structural delta review

Date 2026-10-16. Status: DOCUMENTARY_INSPECTION_ONLY, NOT_APPROVED, NOT_VALIDATED.

Compared original `design/chess-evidence-registry/v0.1.1/registry.schema.json` at commit `d73e8e913ae4f4bb77fd30f74721560d1a1239fb` with proposed `design/chess-evidence-registry/v0.1.1-uniqueness-patch/registry.schema.json` at commit `568f15de880e248cb9333520ce7ed5e099438e78`. The structured JSON objects were inspected, removing the four candidate `uniqueItems` fields from a comparison-only copy. **The remaining JSON object structures were identical**, including definitions, enum values, required fields, and all other properties. This is evidence of a limited structural delta, not JSON Schema validation or semantic reference verification.

Only four proposed differences:
- `#/$defs/scene/properties/claim_refs/uniqueItems`: absent -> true
- `#/$defs/scene/properties/asset_refs/uniqueItems`: absent -> true
- `#/$defs/asset/properties/upstream_asset_refs/uniqueItems`: absent -> true
- `#/$defs/rights/properties/permission_document_refs/uniqueItems`: absent -> true

The patch candidate is a separately stored schema copy. The unchanged original v0.1.1 example is NOT validated against either schema here. Whether different object representations resolve to the same semantic external reference remains outside this check. `dependency.blocked_uses` remains unchanged and requires its own key-level policy.

GitHub PR #12 remained draft, HEAD `2dbae6f6e303785929a574aa7d3ea2bd3a4c23fd` on inspection. No modifications to production, contracts, PR #12 or main.

Next authorized documentary task: review policy and migration notes for typed references, especially object-equality vs canonical identity, but avoid another new version or broader copy until a specific defect is established. For any future technical validator, record actual execution conditions before attributing PASS.

E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL / NO-GO under M. Policy B: every relevant process must terminate AND be confirmed terminated strictly before 120 seconds, with independent stdout and stderr lifetime limits 1,048,576 bytes each emitted AND accepted. R6=PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; 66 semantic negatives, 77 router negatives, chess legality oracle NOT_RUN.
