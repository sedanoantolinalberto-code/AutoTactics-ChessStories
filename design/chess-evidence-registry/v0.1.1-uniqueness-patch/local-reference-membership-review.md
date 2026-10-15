# Chess Evidence Registry v0.1.1 — local typed-reference membership inspection
Date: 2026-10-16. Source example: design/chess-evidence-registry/v0.1.1/ep01-example.json, unmodified commit d73e8e913ae4f4bb77fd30f74721560d1a1239fb. Pure documentary/data inspection, not qualification, JSON Schema validation, engine/test execution, or gate approval.

Inspected recursively **270** structured local references meeting shape {collection:string,id:string,scope:{kind:"LOCAL_REGISTRY",registry_id:string}} in the example. Checked each: (a) the named collection is an array in the example; (b) an element with exact id exists in it; (c) scope.registry_id matches the root registry_id, CER-EP01-v0.1.1-CANDIDATE. **No missing local targets or mismatched root registry scope were observed in these 270 entries.**

This does NOT check references with other shapes or remote Git scopes, whether names carry correct semantics, cycles, locator integrity, original source bytes, historical authenticity, licensing, or complete JSON Schema conformity. A structurally mistyped object that fails to match the detection shape would not be counted, so this cannot replace qualified validation.

The five example dependency blocks remain: DEP-CR (full witness acquisition; commercial-use authorization), DEP-BLIND (two historical claim assessments), DEP-R2 (original R2 byte authentication only), and DEP-IPN (no typed EP01 blocked target, comparative archive request). The presence or absence of these references does not clear any dependency.

Reference identity remains typed by collection + ID + scope, allowing scene T10 and snapshot T10 to coexist. The four uniqueItems restorations in the isolated candidate remain unvalidated; blocked_uses semantic deduplication remains unresolved and should not be broadened without a demonstrated defect.

No original v0.1.1 edits, no main/PR12 changes, no Actions, validators, engines, project tests, renders or publication. E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL NO-GO under model M; Policy B requires termination and confirmation of every relevant process strictly before 120 seconds and independent lifetime stdout and stderr caps of 1,048,576 emitted AND accepted bytes each. R6=PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; 66 semantic negatives, 77 router negatives, legality oracle NOT_RUN.
