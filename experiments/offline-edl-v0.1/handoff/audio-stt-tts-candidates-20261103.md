# Audio/Subtitle candidate benchmark — research source only (2026-11-03)

**Scope:** user-provided @flxrnc screenshots enumerate 14 audio/video repositories. The earlier link was https://x.com/flxrnc/status/2117318336837017846, whereas the follow-up accompanying the screenshots was https://x.com/flxrnc/status/2105311836190978392; **do not treat these as the same source post without a direct match**. This note documents the **new candidates** for the existing non-renderable Chess Stories EP01 handoff. No installation, inference, speech generation, recording, MP4 encoding, browser session, credential use or authorization to advance gates.

## Repository-specific evidence observed

| Candidate | Verified primary reference | Relevant capability | Known risk / limit |
|---|---|---|---|
| Faster-Whisper | https://github.com/SYSTRAN/faster-whisper at `2a3a857737d17d974f30d818ebec69ce11929e5c` | CTranslate2 speech recognition, word-level timestamps, VAD, local CPU/GPU | CUDA 12/cuDNN 9 compatibility (current CTranslate2), model downloads, alignment errors, segmentation drift; license MIT for code |
| Chatterbox | https://github.com/resemble-ai/chatterbox at `5de7a54aa4e5e2baadb0182dde554908b48b85c2` | Local TTS, multilingual V3, reference-based speech; code repository MIT | Actual model weights/dependency terms, voice consent, hallucinated words, accent/speaker consistency, prosody, Windows/CUDA viability must be qualified |
| Remotion Skills | https://github.com/remotion-dev/skills at `c7cb2fdcacd134fb2ccb9b7a44f9ffa44e467271` | Maintained guidance for composition, animated titles, captions, rendering | A skill does not itself produce or verify a video; **Remotion software license is not OSI open source**, and license eligibility depends on use/entity |
| Chrome DevTools MCP | https://github.com/ChromeDevTools/chrome-devtools-mcp at `40c89557f50300d49ad162a7d0cadf71a8a77381` | Page/frame inspection, browser automation, performance diagnostics | Executes browser with broad surface; usage statistics enabled by default; disable usage statistics and CrUX lookups if ever qualified; no browser integration here |

Background: FFmpeg, Blender, Three.js, Remotion, HyperFrames, GSAP, ComfyUI, yt-dlp, Blender MCP and other video components named in the screenshot already have overlapping entries in PR #18. No reason to install all 14 or to equate free GitHub access with commercial license compliance.

## Original admission contract proposed for a future independent lab (NOT IMPLEMENTED)

A valid `audio_timing_candidate` is **untrusted evidence-bearing data** that must include:

- source case/revision/hash, approved script text hash, voice-recording file hash and narrator rights/consent reference;
- language, sample rate, source audio duration measured from bytes, model/version and runtime environment;
- ordered nonoverlapping intervals for each **observed** word: `text`, `start_ms`, `end_ms`, `confidence_if_available` and associated script span;
- explicit mismatches: missing or repeated words, hesitations, hallucinations, unexpected language, drift, speaker switches;
- manual verification sample set spanning opening/middle/closing, pauses, and any doubtful word boundaries;
- a complete timing/quality report rather than a single model-estimated PASS;
- the actual result from an independently supervised subprocess when authorized (exit/termination proof, stdout+stderr lifetime budgets).

The currently available EP01 metadata **must remain** `word_level_alignment: null`, `voiceover_segment_verified: false` and all eight production stages `NOT_VERIFIED`. No "estimated" word timing is ever upgraded to measured fact by documentary planning.

## Benchmark design: bounded, measurable, and rights-aware

1. On already authorized, rights-cleared *test voice*, compare candidate ASR transcription against human-checked words. Record WER, word-boundary median and P95 absolute errors, missed silences, and runtime/VRAM.
2. Independently test Chatterbox for script fidelity (omissions/insertions), intelligibility, duration variance, Spanish/English pronunciation, artifacts, narrator identity and authorized voice/reference consent.
3. Cross-check whether source transcript and TTS produced audio actually match before timing any caption. A transcription is neither a proof of what should have been spoken nor of audio licensing.
4. When test data is eligible, evaluate aspect-ratio safe regions, subtitle visibility over time and font rendering at 9:16 and 16:9; browser output is never taken on faith.
5. Compare with existing manual baseline and at least one alternative where the same sampled assets, timing policy and measurement procedure are used.
6. Track system costs, model download sizes, VRAM sharing with LAAS, and failure/cleanup evidence. No claims of realtime operation based solely on upstream benchmarks.

## Security and gate inheritance

- E5B4D **NO-GO model M**; R6 **PENDING**; IVV_GLOBAL and CASE_APPROVAL **NOT APPROVED**.
- Strict Policy B: every relevant process must terminate **and termination must be confirmed before 120 seconds**; independent lifetime emitted-and-accepted stdout and stderr caps of **1,048,576 bytes EACH**.
- All source, licensing, consent and visual review gates still require independent approval; no render, publication, external spend, dependency installation, media generation, device/browser access, API calls or automatic branch merges.
- This is **a future test protocol only**, not a media pipeline or process-boundary implementation.

**Decision:** `RETAIN_ASR_TTS_BENCHMARK_CANDIDATES / NO_INSTALL / NO_RUNTIME_QUALIFICATION`.