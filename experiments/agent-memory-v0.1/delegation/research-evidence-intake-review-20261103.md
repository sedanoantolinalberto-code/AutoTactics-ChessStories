# Research evidence intake — academic sources for Engine YT (2026-11-03)

**Status:** `DOCUMENTARY_RESEARCH_ONLY / NO_API_CONNECTOR / NO_EXECUTION / NO_AUTOMATED_CLAIMS`

## Provenance

The user's first @RodmanAi X screenshots list OpenAlex, Open Deep Research, PaperQA2, GROBID, Semantic Scholar, Open Research Knowledge Graph, arxiv.py, Haystack, LlamaIndex and Oxylabs Web API MCP as possible research-agent capabilities. The X screenshot is a **discovery lead**, never source evidence for a historical or technical claim.

Verified upstream documentation in this review:
- [OpenAlex API reference](https://help.openalex.org/api/), a scholarly **metadata and identifier** index; do not confuse metadata with paper contents. API budget and terms are mutable.
- [LangChain Open Deep Research](https://github.com/langchain-ai/open_deep_research) pinned to `1b7d2e80db9faa586165c60e09096dbbfd483a64`: multistep configurable agent, MCP/search tools and model-provider options. Running defaults may use paid APIs, tool prompts/queries and hosted services.
- [Future-House PaperQA2](https://github.com/Future-House/paper-qa) pinned to `c692d0dfeac4a0296599f7fe21a253a58b7ac12a`: academic literature RAG with citation/page evidence and configurable models/embeddings. Defaults can call OpenAI providers; human evidence checks remain necessary.
- [GROBID](https://github.com/grobidOrg/grobid): structured scholarly PDF-to-TEI XML parser, Apache-2.0. The old link `kermitt2/grobid` in the post redirects to the current `grobidOrg/grobid`; no code adopted.
- [Semantic Scholar API](https://www.semanticscholar.org/product/api): paper/citation metadata, request throttling and key requirements vary. A record or citation edge is **not** independently verified content.
- [Haystack](https://github.com/deepset-ai/haystack) and [LlamaIndex](https://github.com/run-llama/llama_index): optional RAG/orchestration alternatives, **not additional mandatory frameworks**. Existing document/agent structures must be audited before considering migration.

## Original source-evidence record proposed (NOT YET CODED)

| Field | Reason |
|---|---|
| `claim_id`, `case_id`, `script_span` | Tie one proposed narration statement to its actual script |
| `source_kind` (primary/secondary/metadata-only/social) | Avoid treating metadata or a post as a primary historical record |
| `canonical_locator` (DOI/ISBN/archival URI/official URL) | Stable independent source address; author+title alone is insufficient |
| `retrieval_date`, `source_revision_or_digest` | Prove the reviewed source version |
| `document_page`, `section`, `short_quote_or_paraphrase` | Point at a precise supporting passage, respecting copyright limits |
| `evidence_relation` (supports/contradicts/context-only) | Do not represent mere mention as proof |
| `source_rights`, `access_permitted`, `reuse_rights` | Bibliographic access does not license reuse of page scans, figures or voice/video assets |
| `independent_checker`, `checker_verdict`, `review_date` | Reviewer distinct from the claim generator |
| `unknowns_and_conflicts`, `negative_cases` | Explicit disputes and absence of evidence |

## Admission gates for an editorial source claim

1. Preserve the raw source locator and exactly retrieved version; distinguish source access from tool-generated summary.
2. A metadata-only record (OpenAlex/S2) can identify or locate a work but **must never alone validate the text of a claim**.
3. Parse the actual permitted source (manual/structured PDF) and locate a defensible page or time marker; maintain parser error notes.
4. Require source-backed claim-level support, checked by a reviewer **not responsible for generating the proposed script**; record conflicting sources.
5. Separate `historical_claim_verified`, `media_reuse_rights_verified`, `narration_ready` and `publish_approved`. These are never implied by one another.
6. No network-bound plugin (Oxylabs), commercial API, private archive, third-party model or document download can run by interpreting this research note as permission.
7. Tests when separately authorized: DOI typo, false quotation, wrong page, retracted paper, citation to an abstract rather than full text, duplicate paper, changed edition, non-open image/figure, unsupported narrative extrapolation.
8. The PR #20's existing source-only receipts do **not** independently prove academic citation accuracy or confer approval.

## Engine YT application

- **Chess Stories:** historic match dates, player quotes, notations, positions and source licensing.
- **Darts S34:** reference standards, regulatory/sporting rules and precise citations, but no automatic escape from existing E5B4D qualification.
- **Motion/3D:** verifiable physical/mechanical claims, units and provenance of diagrams.
- **Commercial/editorial:** evidence-backed statements, with human reviewer and separate platform/rights checks.

## Freeze

E5B4D `NO-GO` under model M, R6 `PENDING`, IVV_GLOBAL and CASE_APPROVAL `NOT_APPROVED`.
Strict Policy B still requires *all relevant processes terminated and termination confirmed before 120 seconds*, independent lifetime emitted-and-accepted stdout/stderr byte caps **1,048,576 EACH**. Nothing above is an active data collector, deployed retriever, formal audit or render/publish authorization.

**Decision:** `RETAIN_PAPER_QA_AND_GROBID_AS_SOURCE_VERIFICATION_CANDIDATES`; no third-party code imported or executed.
