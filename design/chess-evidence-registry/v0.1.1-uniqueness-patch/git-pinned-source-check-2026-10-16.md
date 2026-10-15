# Chess Evidence Registry — Git-pinned source identity inspection
Date: 2026-10-16. This is an external readback comparison of Git repository identities in the existing v0.1.1 example, NOT historical source authentication, original byte qualification, JSON Schema validation, technical gate approval or executed oracle.

For each of the following source_snapshots in `design/chess-evidence-registry/v0.1.1/ep01-example.json` at `d73e8e913ae4f4bb77fd30f74721560d1a1239fb`, fetched the file at the record's exact commit and path, then compared the GitHub-returned blob with its declared git_blob:

| Snapshot | Declared and observed blob | Readback |
|---|---|---|
| WIN0 | c90c42d27279ca0f1809098d0c49774149061cda | MATCH |
| WIN1 | 9172831e19a98635017a298e456b4c489398a494 | MATCH |
| WIN2 | 926eae9e8b58d75fbc5f96d5133901f71d8a509b | MATCH |
| OVER0 | aafc6429d716863e225361dd4962169bf12ecfae | MATCH |
| OVER1 | 57df8acf69cdd8516c5587100bc71c533b8ecf7a | MATCH |

The witness_versions example expresses WIN2 -> WIN1 -> WIN0 through typed previous_version_ref; canonical_selection remains NONE for all three. This checks identity of these **five Git content blobs at their cited commits**, not truth of the score, the degree of modification between versions, or the original scanned/manuscript pages. Unexamined snapshots are not claimed to be verified.

This is the last useful targeted Git reference check before Codex: the remaining tasks concern qualified format validation, semantic closure and external historical material. Do not manufacture additional documentary PASS gates from this limited readback.

No files in original v0.1.1, main or PR #12 modified. E5B4D remains STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL / NO-GO under M; Policy B strict all relevant processes terminated AND termination confirmed strictly before 120s, stdout/stderr independent 1,048,576 lifetime bytes emitted AND accepted; R6 PENDING; IVV_GLOBAL/CASE_APPROVAL NOT APPROVED; 66/77 negatives and chess oracle NOT_RUN. No suites, engines, renders, Actions, merges or publication.
