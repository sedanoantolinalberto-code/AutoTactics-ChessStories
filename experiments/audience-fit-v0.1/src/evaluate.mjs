// Research-only pure function. No web scraping, YouTube API calls, or production controls.
export function evaluateAudienceFit(candidate, evidence) {
  const assert = (ok, code) => { if (!ok) throw new Error("AUDIENCE_REJECT:" + code); };
  const requiredText = (x, max = 300) => typeof x === "string" && x.trim().length >= 3 && x.length <= max;
  const safe = x => JSON.parse(JSON.stringify(x));
  assert(candidate && typeof candidate === "object" && !Array.isArray(candidate), "CANDIDATE_OBJECT");
  assert(candidate.version === "engineyt-audience-fit-candidate/0.1" && candidate.case_id === "ED-CASE-REAL-01", "SOURCE_VERSION_OR_CASE");
  assert(candidate.review_status === "UNAPPROVED_EDITORIAL_HYPOTHESIS", "STATUS");
  assert(candidate.publication_authorized === false && candidate.render_authorized === false && candidate.integration_authorized === false, "NO_GO");
  const a=candidate.audience||{},p=candidate.packaging||{},g=candidate.guardrails||{};
  assert(requiredText(a.primary_interest) && requiredText(a.viewer_promise) && requiredText(a.excluded_expectation), "AUDIENCE_DEFINITION");
  assert(["beginner","intermediate","advanced"].includes(a.sophistication), "AUDIENCE_SOPHISTICATION");
  assert(requiredText(p.anchor) && requiredText(p.novelty) && p.anchor.trim().toLowerCase() !== p.novelty.trim().toLowerCase() && requiredText(p.viewer_question), "ANCHOR_NOVELTY");
  assert(requiredText(p.title_draft,100) && requiredText(p.thumbnail_text_draft,40), "PACKAGING_BOUNDS");
  assert(p.title_draft.length <= 100 && p.thumbnail_text_draft.length <= 40, "TITLE_THUMBNAIL_LIMIT");
  assert(g.chess_legality_qualified === false && g.historical_primary_sources_verified === false && g.rights_cleared === false && g.human_approval === false, "TRUTH_OR_RIGHTS_GATE");
  assert(g.source_case_path === "cases/ED-CASE-REAL-01.v0.2.json", "SOURCE_PATH");
  const expected = ["PARTIDA REAL","REBOBINADO · PARTIDA REAL","HIPOTÉTICA · NO JUGADA","REGRESO A LA PARTIDA REAL","SE OMITEN JUGADAS REALES","CIERRE EDITORIAL · LA PARTIDA CONTINÚA"];
  assert(JSON.stringify(g.required_disclosures)===JSON.stringify(expected), "NON_NEGOTIABLE_DISCLOSURES");
  assert(Array.isArray(candidate.hypotheses) && candidate.hypotheses.length>=1 && candidate.hypotheses.length<=5, "HYPOTHESES");
  const ids=new Set();
  for(const h of candidate.hypotheses){
    assert(/^H0[1-5]$/.test(h?.id) && !ids.has(h.id), "HYPOTHESIS_ID");
    ids.add(h.id);
    assert(requiredText(h.testable_question) && requiredText(h.counter_evidence_needed) && requiredText(h.validation_metric), "FALSIFIABILITY");
  }
  assert(evidence && evidence.version === "engineyt-manual-comparables/0.1" && evidence.collection_method === "MANUAL_OBSERVATION_UNVERIFIED" && evidence.platform === "YouTube" && evidence.auto_scraped === false, "EVIDENCE_ORIGIN");
  assert(Array.isArray(evidence.comparables) && evidence.comparables.length<=100, "EVIDENCE_BOUNDS");
  const byVideo=new Set(), channels=new Set(),ratios=[], issues=[];
  let negatives=0;
  for(const o of evidence.comparables){
    assert(o && typeof o==="object" && /^[-_A-Za-z0-9]{11}$/.test(o.video_id), "VIDEO_ID");
    assert(!byVideo.has(o.video_id), "DUPLICATE_VIDEO");
    byVideo.add(o.video_id);
    assert(requiredText(o.channel_id,100) && requiredText(o.channel_name,120), "CHANNEL_ID");
    channels.add(o.channel_id);
    assert(Number.isSafeInteger(o.views) && o.views>=0 && Number.isSafeInteger(o.channel_baseline_median_views) && o.channel_baseline_median_views>0, "BASELINE");
    assert(/^\d{4}-\d{2}-\d{2}$/.test(o.observed_at) && Number.isFinite(Date.parse(o.observed_at+"T00:00:00Z")), "OBSERVATION_DATE");
    assert(["supportive","counterexample"].includes(o.comparison_role), "COMPARISON_ROLE");
    assert(requiredText(o.basis_for_similarity), "COMPARABILITY_RATIONALE");
    assert(o.provenance_status === "UNVERIFIED_MANUAL", "EVIDENCE_NOT_VERIFIED");
    if(o.comparison_role==="counterexample") negatives++;
    ratios.push(o.views/o.channel_baseline_median_views);
  }
  if(evidence.comparables.length<6) issues.push("FEWER_THAN_6_COMPARABLES");
  if(channels.size<3) issues.push("FEWER_THAN_3_DISTINCT_CHANNELS");
  if(negatives<2) issues.push("FEWER_THAN_2_COUNTEREXAMPLES");
  if(evidence.comparables.length===0) issues.push("NO_OBSERVED_VIDEO_DATA");
  const sorted=ratios.slice().sort((a,b)=>a-b);
  const median=sorted.length?(sorted.length%2?sorted[(sorted.length-1)/2]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2):null;
  return {
    version:"engineyt-audience-fit-review/0.1",
    case_id:candidate.case_id,
    status:issues.length?"INSUFFICIENT_COMPARABLE_EVIDENCE":"SUFFICIENT_MANUAL_SAMPLE_FOR_HUMAN_REVIEW_ONLY",
    platform_distribution_prediction:"NOT_ESTABLISHED",
    claims_algorithm_control:false,
    content_execution_authorized:false,
    rendering_authorized:false,
    publication_authorized:false,
    content_claims_verified:false,
    sample_evidence_verified:false,
    monetization_predictions:false,
    source_case_unchanged:true,
    candidate:{
      anchor:p.anchor,novelty:p.novelty,viewer_question:p.viewer_question,
      title_draft:p.title_draft,thumbnail_text_draft:p.thumbnail_text_draft,
      target_audience:safe(a),hypotheses:safe(candidate.hypotheses)
    },
    study:{
      comparable_count:evidence.comparables.length,
      distinct_channel_count:channels.size,
      counterexample_count:negatives,
      median_relative_views:median,
      relative_views_interpretation:"DESCRIPTIVE_MANUAL_SAMPLE_NOT_PROBABILITY_OR_CAUSAL_EFFECT",
      suggested_video_neighbors_checked:false,
      risks:["SURVIVORSHIP_BIAS","SELECTION_BIAS","CONFOUNDED_CHANNEL_BASELINES","PERSONALIZED_RECOMMENDATIONS","NO_CAUSAL_INFERENCE"]
    },
    evidence_gaps:issues,
    recommendations:[
      "REVIEW_TITLE_AND_THUMBNAIL_FOR_HONEST_CONTENT_PROMISE",
      "COLLECT_INDEPENDENT_CONTRASTING_CHANNEL_EXAMPLES",
      "DO_NOT_INFER_YOUTUBE_ALGORITHM_CONTROL",
      "HUMAN_EDITORIAL_AND_SEMANTIC_REVIEW_REQUIRED"
    ],
    gate_blockers:["E5B4D_NO_GO_MODEL_M_POLICY_B","R6_PENDING","IVV_GLOBAL_NOT_APPROVED","CASE_APPROVAL_NOT_APPROVED","NO_RENDER_OR_UPLOAD"]
  };
}
