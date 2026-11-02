// Independent structural review; cannot authorize distribution, integration or publication.
export function reviewAudienceFit(report, candidate) {
  const issues=[];
  const c=(ok,name)=>{if(!ok)issues.push(name)};
  c(report?.version==="engineyt-audience-fit-review/0.1","REPORT_VERSION");
  c(report?.case_id===candidate?.case_id && report?.case_id==="ED-CASE-REAL-01","CASE_ID");
  c(report?.status==="INSUFFICIENT_COMPARABLE_EVIDENCE" || report?.status==="SUFFICIENT_MANUAL_SAMPLE_FOR_HUMAN_REVIEW_ONLY","VALID_STATUS");
  for(const field of ["claims_algorithm_control","content_execution_authorized","rendering_authorized","publication_authorized","content_claims_verified","sample_evidence_verified","monetization_predictions"]){
    c(report?.[field]===false,"NO_AUTHORITY_"+field);
  }
  c(report?.platform_distribution_prediction==="NOT_ESTABLISHED","NO_DISTRIBUTION_PREDICTION");
  c(report?.source_case_unchanged===true && candidate?.publication_authorized===false && candidate?.render_authorized===false && candidate?.integration_authorized===false,"SOURCE_GATES");
  c(report?.candidate?.anchor===candidate?.packaging?.anchor && report?.candidate?.novelty===candidate?.packaging?.novelty,"IDEA_BINDING");
  c(report?.candidate?.title_draft===candidate?.packaging?.title_draft && report?.candidate?.thumbnail_text_draft===candidate?.packaging?.thumbnail_text_draft,"PACKAGING_BINDING");
  c(JSON.stringify(report?.candidate?.target_audience)===JSON.stringify(candidate?.audience),"AUDIENCE_BINDING");
  c(JSON.stringify(report?.candidate?.hypotheses)===JSON.stringify(candidate?.hypotheses),"HYPOTHESIS_BINDING");
  c(Array.isArray(report?.study?.risks) && ["SURVIVORSHIP_BIAS","SELECTION_BIAS","PERSONALIZED_RECOMMENDATIONS","NO_CAUSAL_INFERENCE"].every(x=>report.study.risks.includes(x)),"METHOD_RISK_DISCLOSURE");
  c(Array.isArray(report?.gate_blockers) && ["E5B4D_NO_GO_MODEL_M_POLICY_B","R6_PENDING","IVV_GLOBAL_NOT_APPROVED","CASE_APPROVAL_NOT_APPROVED","NO_RENDER_OR_UPLOAD"].every(x=>report.gate_blockers.includes(x)),"GATE_BLOCKERS");
  const n=report?.study?.comparable_count, ch=report?.study?.distinct_channel_count, neg=report?.study?.counterexample_count;
  c(Number.isInteger(n)&&n>=0 && Number.isInteger(ch)&&ch>=0 && Number.isInteger(neg)&&neg>=0,"COUNTS");
  if(report?.status==="SUFFICIENT_MANUAL_SAMPLE_FOR_HUMAN_REVIEW_ONLY")c(n>=6 && ch>=3 && neg>=2 && report?.study?.median_relative_views !== null,"SAMPLE_THRESHOLD");
  return {
    review_version:"engineyt-independent-audience-fit-review/0.1",
    verdict:issues.length?"FAIL_CLOSED":"PASS_LIMITED_SOURCE_ONLY",
    independent_release_authority:false,
    checked_real_youtube_delivery:false,
    issues
  };
}
