// Pure analysis of unmeasured scene design allocations. Never a voice or frame timing certificate.
export function analyzeEditorialTargetRisks(draft) {
  if(!draft||draft.artifact_version!=="engineyt-offline-edl-proposal/0.1"||
     !Array.isArray(draft.shots)||draft.shots.length!==9||draft.release_authority!==false||
     draft.render_authorized!==false||draft.measured_voice_timing!==false)throw Error("EDL_RISK_REJECT:UNQUALIFIED_DRAFT");
  const highRisk={
    S06:"COMPOSITE_REWIND_AND_HYPOTHETICAL_UNMEASURED",
    S07:"RETURN_TO_REAL_TWO_SECOND_TARGET_UNTESTED",
    S08:"FOUR_EVENTS_ELLIPSIS_AND_T11_STAGING_OPEN"
  };
  let contiguousEnd=0;
  const assessments=draft.shots.map(s=>{
    if(!Number.isInteger(s.target_start_ms)||!Number.isInteger(s.target_end_ms)||
       s.target_start_ms!==contiguousEnd||s.target_end_ms<=s.target_start_ms||
       !Array.isArray(s.event_ids)||s.event_ids.length<1||
       typeof s.narration_text_draft!=="string")throw Error("EDL_RISK_REJECT:TARGET_INTEGRITY");
    contiguousEnd=s.target_end_ms;
    const dur=s.target_end_ms-s.target_start_ms;
    const words=s.narration_text_draft.trim()?s.narration_text_draft.trim().split(/\s+/u).length:0;
    return {
      shot_id:s.shot_id,target_duration_ms:dur,
      event_count:s.event_dispatch_allowed?s.event_ids.length:0,
      draft_narration_word_count:words,
      word_density_per_target_second_ARITHMETIC_ONLY:Number((words*1000/dur).toFixed(2)),
      audio_duration_measured:false,event_phase_duration_measured:false,
      frame_overlay_readability_tested:false,
      specific_documentary_risk:highRisk[s.shot_id]??null
    };
  });
  if(contiguousEnd!==45000)throw Error("EDL_RISK_REJECT:TARGET_END");
  return {
    artifact_version:"engineyt-editorial-risk-report/0.1",
    evidence_level:"UNMEASURED_DESIGN_HEURISTICS_ONLY",
    advisory_status:"ALL_SHOTS_REQUIRE_REAL_TIMING_AND_FRAME_REVIEW",
    render_authorized:false,release_authority:false,
    high_risk_shot_ids:["S06","S07","S08"],assessments
  };
}
