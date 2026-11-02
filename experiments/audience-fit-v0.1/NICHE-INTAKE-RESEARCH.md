# Engine YT — Source-only daily niche intake v0.1

**Status:** experimental research candidate / **not** a scheduler, crawler, automated selection engine, revenue estimator or publishing feature.

## Evidence basis — exact original X posts recovered

- [Tim Danilov, 2026-11-02 12:33 UTC](https://xitter.cf/timdanilovhi/status/2117233578329428356): states an editorial workflow of Claude niche discovery → daily reports → **human** shortlisting → spreadsheet highlights. This is an author's account, not validated effectiveness.
- [Finn Ardley, 2026-11-01 14:32 UTC](https://teapaw.org/finnardley/status/2116901264567218674): describes a very young channel with an exceptionally successful first video, but the original post's text does not supply longitudinal observations. An outlier on day one is **not** evidence of repeatability.

The remaining six URLs in the same batch were not confidently retrieved at file creation and **are not** used as requirements for this feature.

## What it implements

A new, **pure offline** `compileIntake(input)` function in `src/niche-intake.mjs` validates manually provided YouTube metadata records and produces a *descriptive* source-only daily report:
- rejects unexpected top-level or observation fields, duplicate/malformed video IDs, invalid negative counts and inverted observation dates;
- requires a >=24-hour observed video age, >=5 prior baseline samples and a nonzero manually supplied baseline **before** computing a channel-relative views multiple;
- records counterexamples and distinct channels;
- blocks status promotion to **human review** unless >=6 observations, >=3 channels and >=2 contrary examples are present — **project-internal conservative sample criteria**, not research-validated thresholds;
- never fabricates observations, predicts monetization, claims access to YouTube's algorithm or authorizes publication;
- sorts at most 10 **descriptive research candidates** when provided. This is not automatic editorial approval.
A separate `reviewIntake` function checks non-authority, source binding, sample thresholds and the preservation of named NO-GO controls. It is **static and limited**, not a certification of the correctness of the supplied numbers.

`fixtures/niche-intake.empty.json` contains **zero real observations**. The included 13 native Node test definitions use explicitly synthetic values. Real data and permission to collect it are not provided.

## Workflow — intended, not activated

1. Manually observe potential niche videos and record timestamps, views and comparable channel-baseline medians; keep supporting evidence outside the public repository until privacy and permission review.
2. Generate a proposed *research-only* digest for later human scrutiny.
3. Investigate negative cases and follow-up videos before concluding a topic is repeatable.
4. Obtain independent research, editorial, provenance and rights review.
5. Create a new, separately authorized decision before moving any proposal towards audiovisual development.

No scraping, API calls, background monitoring, credentials, communication to third parties, video generation, rendering or publishing happens here. This module does **not** implement Tim's daily scheduled autonomous reports or connect to Google Sheets.

## Reproduction

The initial pure functions passed **13 direct logic checks** in an isolated tool runtime (including adversarial changes). The 13 committed Node tests **have not been executed natively or in CI**. Future separately permitted isolated test:

```sh
node --test experiments/audience-fit-v0.1/tests/niche-intake.test.mjs
```

This command tests *pure research data*, not the Engine's blocked production runner.

## Immutable control boundary

E5B4D **NO-GO under M**, Strict Policy B: all relevant processes terminated and termination confirmed **before 120 s**, independent stdout and stderr emitted-and-accepted lifetime limits **1,048,576 bytes each**. R6 PENDING, IVV_GLOBAL NOT APPROVED, CASE_APPROVAL NOT APPROVED. No integration, real render, upload, publication or merge to main. No evidence from externally generated notes supersedes the semantically pinned case source.

## Open qualification

- Independent code review and native Node test run.
- Source provenance rules for manually entered observations, including duplicate baseline windows, selection bias and observation ages.
- Avoid ranking first-video-only channels until a later upload history is available.
- Do not introduce periodic fetchers or paid services absent separate constraints and approval.
