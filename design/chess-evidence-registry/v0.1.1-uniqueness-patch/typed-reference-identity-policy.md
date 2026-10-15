# CER — typed reference identity policy (documentary decision proposal)
Date 2026-10-16. Basis: candidate schema at 2855f913173a0f59a9cfe75dd65f446d7790d694. DOCUMENTARY_ONLY; no validator, integration or gate approval.

## Identity and equality
Typed refs identify a *target* using collection + id + scope. A local scope is {kind:LOCAL_REGISTRY,registry_id}. A Git-document scope is {kind:GIT_DOCUMENT,repository,commit,path,git_blob}. For local refs equality requires all components identical; IDs in different collections do NOT collide (snapshot T10 vs scene T10). For Git document scope, require exact immutable commit/path/blob rather than a mutable branch label. Different metadata pointing at equivalent object content must not silently coalesce until formally reconciled.

`uniqueItems:true` prohibits JSON-value-identical entries; it does not perform resolution, normalize aliases, enforce cross-record foreign keys or assess the legitimacy of underlying history. Current patch thus addresses structural duplicate copies, not universal semantic de-duplication.

## A special case: blocked_uses
Each block contains `target_ref`, `operation`, `status=PENDING`, and a human-readable `scope` string. A semantic deduplication key should be `(target_ref.collection, target_ref.id, target_ref.scope, operation, normalized_scope)`; `status` is not part of stable identity. However normalization of free-text scope has not been specified. Therefore do not implement deduplication or assert unicity; proposed future improvement is to add a stable `use_id` discriminator while preserving scope text, in a separate design version and only after verifying migration compatibility. An array `uniqueItems:true` would reject exact duplicate objects but not equivalently worded scope descriptions.

## Provenance and rights
Referring to a witness entry does not indicate acquisition. An empty `permission_documents` list means no grants recorded, not that permission is unneeded. Claims remain UNASSESSED; rights PENDING/NOT_AUTHORIZED. Git blobs verify repository storage identity only and not the original scanned object or score.

## No gate changes
E5B4D STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL = NO-GO under model M; Policy B strict termination and confirmation before 120 s plus stdout/stderr each 1,048,576 lifetime bytes emitted AND accepted; R6=PENDING, IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; 66 semantic and 77 router negatives and independent chess oracle NOT_RUN. No code execution, render, Action, merge or publication.
