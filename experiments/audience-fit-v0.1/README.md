# Engine YT / Chess Stories — Audience-Fit Research v0.1

**Research status:** SOURCE-ONLY / NO-INTEGRATION / NO-RENDER / NO-PUBLISH.  
**Independent feature branch:** `research/engineyt-audience-fit-faraday-v01-20261102`.  
**Based on:** `chess-stories/ep01-av01-45s-phase-state-candidate-20261026`.  
**Do not merge to `main` or to production without separate independent approval.**

## Why this exists

On 2026-10-07, Daniel Faraday posted an article
[“How I force YouTube to push my videos (+24,526,216 subscribers)”](https://teapaw.org/FaradayYouTube/article/2107925216047641067).
The title, numbers and methodology are the author's claims. The article supplies *observational* examples and a compelling heuristic:
- familiar **anchor** plus a specific **novelty** (hypothesis about viewer curiosity);
- audience definition, sophistication level and clearly bounded content promise;
- research on comparable formats, including failures;
- consideration of suggested-video neighborhoods and niche adjacency;
- consistency of audience/format over an initial run.

**Do not equate these hypotheses with knowledge of YouTube's internal ranking logic.**
YouTube's [official recommendation overview](https://support.google.com/youtube/answer/16089387?hl=en) describes personalized watch/search history, feedback and satisfaction signals. A page's visible related videos may be personalized and are not a controlled observation of global candidate placement. The [YouTube Studio Reach documentation](https://support.google.com/youtube/answer/9314355?hl=en) distinguishes traffic sources and reports supporting actual retrospective review. No “forcing the algorithm” claims are adopted here.

## Implementation

- `src/evaluate.mjs`: pure, offline evaluation of audience hypothesis and *manually supplied* comparable video records, never external API/scrape.
- `src/independent-review.mjs`: a distinct fail-closed reader that independently checks source alignment, non-approval and risk disclosures.
- `fixtures/ep01-hypothesis.json`: **illustrative unapproved** EP01 angle about a real vs hypothetical move; title and audience are *research hypotheses* and must not override independently verified history.
- `fixtures/manual-comparables.empty.json`: intentionally empty. **No competitor views, baselines or traffic-source observations have been collected, and none are invented.**
- `tests/audience-fit.test.mjs`: 17 native Node built-in test *definitions*. Tests use clearly synthetic observations; no synthetic numbers count as research evidence.

The separate draft EDL branch/PR #14 concerns **source-only scene planning**; this new experimental module concerns **pre-production audience research and ethical packaging**. Neither is a qualified media processor.

## Procedure and limits

1. Define a specific intended viewer, sophistication level, what the audience may realistically learn, and expectations excluded by the video.
2. State a known anchor and a distinct differentiator. Draft a truthful title (max 100 characters) and draft thumbnail text (max 40 characters).
3. State a falsifiable hypothesis and what contradictory evidence would matter.
4. Collect observed competitors *manually*, with observation date, exact YouTube video ID, channel identity, observed views, dated channel-relative median and rationale for comparison. Document that this is **unverified**; screenshots or source URLs and independent verification would require another evidence workflow.
5. As a minimal pre-review threshold require >=6 unique comparable videos, >=3 distinct channels and >=2 contrary examples. These thresholds are **project-internal conservative heuristics**, not scientific calibration or YouTube ranking thresholds.
6. Compute a descriptive median of views divided by each supplied channel baseline. **Never** interpret this as expected reach, probability of virality, causal impact or guaranteed recommendations.
7. Submit to independent human research, semantic, rights and editorial review. There is no automatic approval outcome even with the threshold satisfied.

### Strict non-authority

- E5B4D NO-GO under model M; Strict Policy B remains mandatory (all relevant processes terminated and termination confirmed **before 120 seconds**, and independent stdout/stderr lifetime emitted-and-accepted caps of 1,048,576 bytes each).
- R6 PENDING; IVV_GLOBAL NOT APPROVED; CASE_APPROVAL NOT APPROVED.
- No renderer, audio generator, thumbnail image generator, ffmpeg, YouTube API, upload, publication or engine execution authorized.
- `PARTIDA REAL`, `HIPOTÉTICA · NO JUGADA`, 14 real omitted half-moves (36–49), and the editorial ending that **the game continues** cannot be weakened by packaging. The sample lists the six canonical exact labels but *does not* verify visible pixel compliance.
- No claim of permission to use the Faraday article's copy or graphics commercially. This implementation is original code built from a high-level analytical concept, not a third-party port.

## Reproduction / evidence status

In the isolated connector tool runtime, **13 direct logic checks passed** on the initial pure functions: neutral empty evidence state, non-authority, falsifiability, data integrity and independent detection of tampering. The committed Node test suite has 17 test definitions and has **not been run natively or in GitHub CI** in this change. Future qualified execution, if authorized:

```sh
node --test experiments/audience-fit-v0.1/tests/audience-fit.test.mjs
```

No observations from the user's channels or YouTube Analytics were available. Therefore EP01's audience selection and candidate titles are **unvalidated** and the correct research status is `INSUFFICIENT_COMPARABLE_EVIDENCE`.

## Next independent gates

- Review all executable changes for unsafe data assumptions.
- Run Node tests in a permitted isolated environment; do not treat success as qualification of the blocked E5B4D runtime.
- Gather actual comparable observations and *counterexamples*, then independently confirm baseline provenance and controls for age, topic, audience and seasonal effects.
- Validate the content promise with human preview research independently of clicks, thumbnails and packaging claims.
- Keep editorial selection separate from production and publishing decisions.
