# Engine YT — NIC05 static reconciliation / B41 qualification preparation (15 Nov 2026)

**Disposition:** `REVIEW_ONLY / SOURCE_ONLY / NO_MERGE / NO_NATIVE_GO`.

This document records an independently delivered ZIP in the conversation; **the ZIP's code is not in this PR**.

## Detached package
- Filename: `EngineYT_NIC05_B41_REVIEW_ONLY_20261115_v01.zip`
- SHA-256: `a75a61e24701c205f699e58b9739f93a726c836f7a0454db62722ddab1f27b6c`
- Contents: 57 files, 56 hashes in self-consistency manifest; no vendor runtime, no network adapter, no VM access.
- **Clean-extraction tests:** 44 new and 185 inherited on a candidate copy (229 PASS in two distinct test suites), CPython 3.13.5 Linux. Rebuilding candidate diffs from pinned source copies changed zero file hashes.
- ZIP verifier: self-consistency PASS, deliberate same-size source mutation rejected with `MANIFEST_HASH`. Internal hashes do not authenticate the author or grant gate approvals.
- Synthetic NIC05 static input demonstration: 2 files, verified by strict offline ZIP reader, `PASS_LIMITED_SELF_CONSISTENCY`, native-qualified=false, acquisition-authorization=false.

## Review-only changes in the detached package

Three candidate patches to earlier experimental `engineyt50` data-only modules:
- P01: refuse duplicate/casefold-colliding NIC05 interface names instead of collapsing in a dictionary;
- P02: replace order-sensitive recursive DAG walk with bounded iterative topological validation;
- P03: require 40-character hex Git commit hashes in PR snapshot metadata; preserve `ready_for_merge=false`, `ci_source_authenticated=false`.
The earlier source tree remains unchanged; these are **not fixes to NIC05 native or the protected supervisor**.

The source-only NIC05 intake checks path safety, manifest coverage, bounded ZIP members, SHA-256, UTF-8, JSON duplicate keys and missing/null/type preservation in representative synthetic fixtures. It cannot collect NIC05 bytes from Windows, Ubuntu, VM or COM03 and does not import, extract or execute the source files presented to it.

## B41 and frozen gates

Independent B41 policy text from `AutoTactics-Darts-BuildLab` review branch (PR #21) was inspected. All ten B41-C01..C10 requirements remain `BLOCKED_NATIVE_EVIDENCE`: external observer, verified disposable isolation, correct PID namespace, nonzero exact flags, non-escaping descendants, survivor control, process/thread/privilege races, strict Policy B and fail-closed uncertainty. **No test of namespaces, mass signals, cgroups, PDEATHSIG or WAL power loss was performed.**

- `R17/E5B4D NO-GO`
- `B10-7 PRE-CAMPAIGN/BLOCKED`
- `TB09/G3 BLOCKED`
- `PF02/COM03 BLOCKED`
- `NIC05_REAL_ACQUISITION BLOCKED`
- `RENDER/PUBLISH DISABLED`

## Next needed evidence

An authenticated static export of actual NIC05 contract/source bytes via **an independently approved** channel, then target Windows/CPython 3.12 read-only parity, reviewer-approved native isolation, and independent qualification. User authorization to research does not by itself establish a safe disposable test environment or satisfy per-gate approval.

**This PR is documentary only. Do not merge; do not install or run third-party software and do not treat it as authorization to test the production harness.**