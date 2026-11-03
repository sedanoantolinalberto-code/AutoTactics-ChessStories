# AudioCraft audio research and monetization boundary (2026-11-03)

**Status:** `LICENSE_RESEARCH_ONLY / NO_MODEL_DOWNLOAD / NO_AUDIO_GENERATION / NO_PRODUCTION_APPROVAL`

## Provenance and inspected sources

The user linked [facebookresearch/audiocraft](https://github.com/facebookresearch/audiocraft) as the source for a recent audio tools post. Source pinned for this review to upstream `896ec7c47f5e5d1e5aa1e4b260c4405328bf009d`. Read and verified `README.md`, `LICENSE`, `LICENSE_weights` from GitHub.

- Official repository **source code**: MIT.
- Official repository **published model weights**: Creative Commons Attribution-NonCommercial 4.0 (**CC BY-NC 4.0**) per the README and `LICENSE_weights`.
- Documented model families: MusicGen, AudioGen, EnCodec, Multi Band Diffusion, MAGNeT, AudioSeal, MusicGen Style, JASCO; availability, weights and terms may vary per actual checkpoint.
- Published README targets Python 3.9 / PyTorch 2.1.0 and advises FFmpeg support. A modern Windows/RTX 5080 16 GB lab needs distinct supported build/driver/PyTorch/GPU and dependencies analysis; upstream install snippets must **not** be executed in Engine YT by default.
- Availability as a free repo must not be construed as rights to create **monetized** YouTube music or effects from NC-restricted model weights.

## Engine YT decisions

| Use case | Disposition | Required evidence to change decision |
|---|---|---|
| Reading source/documentation, studying codec / score architecture | ALLOWED AS REFERENCE | cite upstream revision, preserve MIT attribution if copying software (not done here) |
| Evaluating published models privately for methodological research | NOT AUTHORIZED IN CURRENT GATES | separate lab permissions, dependencies, weights rights review and safe isolation |
| Using default model weights to supply background music for monetized videos | **BLOCKED_FOR_COMMERCIAL_WORKFLOW** | source-specific written commercial grant or distinct commercially licensed checkpoint |
| Using model weights to generate effects for Shorts or client campaigns | **BLOCKED_FOR_COMMERCIAL_WORKFLOW** | same independent license review |
| Training own model from scratch | NOT JUSTIFIED AS SHORTCUT | dataset rights, resource/budget proof, commercial training/distribution analysis, independent review |
| Importing any package or auto-downloading weights | NO-GO | pinned artifact SHA and full dependency audit, environment process controls |
| Editing/encoding actual media, using generated audio in any S34/Chess pilot | NO-GO | separate audio rights, script and source checks, independent case and runtime qualification |

The noncommercial restriction applies to the weights specifically: MIT code does not automatically grant commercial rights over independently licensed weights, training inputs, generated media, other assets or trademarks. Copyright treatment of generated audio differs by jurisdiction; the safest operational conclusion for this project is **no commercial use without license clearance**. This note is not a legal determination.

## Substitute benchmark candidate categories (future, separate approval)

1. Rights-cleared library SFX with documented commercial license, source, checksum, attribution and permitted edit/synchronization.
2. Original commissioned/recorded/created Foley with chain of title and signed usage rights.
3. Independently verified commercial-use AI audio model and model-specific terms; never infer rights from license of repository code alone.
4. Non-rendering, synthetic beat/event timing fixture to test synchronization while keeping all media NO-GO gates closed.

When a valid source is found, verify soundtrack cue start/end, loudness, speaking intelligibility, absence of copyrighted replication, audio/video timebase alignment and exports **only** in a separately qualified isolated production test.

## Combined candidate position

Earlier PR #19 note `audio-stt-tts-candidates-20261103.md` tracks Faster-Whisper for time-aligned captions and Chatterbox for local voice research. AudioCraft addresses **music/SFX**, not speech recognition or narration verification. Its research license profile blocks use as a plug-and-play replacement for commercially cleared sound design.

## Frozen gates

**E5B4D NO-GO (model M)**; **R6 PENDING**; **IVV_GLOBAL NOT_APPROVED**; **CASE_APPROVAL NOT_APPROVED**. No model loading, rendering, external provider call, purchase, publish or main merge.
Strict Policy B: all relevant processes must terminate **and termination be confirmed before 120 s**, with per-stream independent emitted-and-accepted lifetime stdout/stderr cap of **1,048,576 bytes EACH**.

**Decision:** `RETAIN_AUDIOCRAFT_AS_ACADEMIC_REFERENCE / BLOCK_COMMERCIAL_OUTPUT_USING_PUBLISHED_NC_WEIGHTS`.
