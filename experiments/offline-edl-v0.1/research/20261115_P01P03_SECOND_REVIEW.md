# Engine YT — P01/P02/P03 second review (2026-11-15)

**Disposition:** `PASS_LIMITED_SOURCE_ONLY / NOT_INTEGRATED / NO_NATIVE_QUALIFICATION / NO_MERGE`.

## Detached package delivered in ChatGPT

- Name: `EngineYT_P01P03_Review_20261115.zip`
- SHA-256: `c2e4bf1f7a5c572b863046fd0763af5be66fc9c8615a24fbcd28f4a2141bb40c`
- 19 ZIP members, 18 pinned in internal SHA-256 manifest. Clean-extraction replay: manifest PASS, **27/27 independent-method new tests PASS**, manifest PASS.
- Three tamper cases rejected (same-size changed bytes, undeclared extra file, missing file).
- Separate historical suite reruns: **185/185** on the candidate copy and **44/44** from the preceding offline NIC05/B41 pack. Distinct suites, total 256 data-only passes. CPython 3.13.5/Linux, no Windows or Python 3.12 parity.
- Separate seeded DFS graph oracle compared with the candidate Kahn implementation over **250 graphs**; an acyclic 1,999-node reversed chain passes and a long cycle is rejected.
- Prior and candidate copies each had 19 normal source files. **Only** `engineyt50/evidence.py` and `engineyt50/agents.py` differed; supplied patch files match exactly. Internal hashes do not authenticate authorship or provenance.

## Residual findings found beyond the three original defects

1. **R01 (P01) ordering:** the earlier candidate returns `PASS_LIMITED_DOCUMENTARY` for expected interfaces `[alpha,beta]` versus observed `[beta,alpha]`, because it compares dictionaries by name. Whether the order is semantically significant requires the real NIC05 contract. The separate new `review_v2.py` conservatively returns `FAIL_CLOSED_ORDER_NOT_RECONCILED`; it is NOT installed or merged into the engine.
2. **R02 (P01) malformed expected, observed absent:** earlier candidate returns `BLOCKED_REAL_INPUT` before validating duplicated names in the expected list. It is not a false GO, but conflates an invalid contract with unavailable input. New wrapper validates expected list first.
3. **R03 (P03) untrusted CI declarations:** earlier `pr_custodian` may return `ci_all_success=true` from supplied checks, including duplicates, although it also reports `ci_source_authenticated=false` and `ready_for_merge=false`. The new wrapper rejects duplicate check identities and exposes distinct `declared_checks_all_success` versus `verified_checks_all_success=false`, with no ambiguous `ci_all_success` result.

Original P02 Kahn candidate agrees with a separate algorithm for the tested graph cases, but this does not prove security or exhaustion of all inputs. No independent external reviewer has authenticated or qualified the code.

## B41 and NIC05 remain blocked

No Windows NIC05 source tree was available, and none was acquired. No VM opened; no namespaces, signals, cgroups, PF02/COM03, runner or media operations executed. B41-C01..C10 all remain `BLOCKED_NATIVE_EVIDENCE`. Requirements: independently authenticated NIC05 static export, exact contract semantics (including ordering), Windows/CPython 3.12 parity, external disposable isolation and observer, and actual independent audit.

**Frozen gates:**

- `R17/E5B4D = NO-GO`
- `B10-7 = PRE-CAMPAIGN/BLOCKED`
- `TB09/G3 = BLOCKED`
- `PF02/COM03 = BLOCKED`
- `NIC05_REAL_ACQUISITION = BLOCKED`
- `RENDER/PUBLISH = DISABLED`

## Decision

**GO for offline documentary review only. NO-GO for integration, merge, native process experiments or release.** This PR adds only this note and does not contain or execute the detached ZIP's code.