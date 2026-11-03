// Pure documentary planning. No system access, vendor SDK, install, media creation, CapCut mutation, or API calls.
export function createDocumentaryHandoff(edl, config) {
 const chk=(ok, code)=>{if(!ok)throw Error("HANDOFF_REJECT:"+code)};
 const obj=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
 const truth={
  T01:"PARTIDA REAL",T02:"PARTIDA REAL",T03:"PARTIDA REAL",
  T04:"REBOBINADO · PARTIDA REAL",T05:"HIPOTÉTICA · NO JUGADA",
  T06:"HIPOTÉTICA · NO JUGADA",T07:"REGRESO A LA PARTIDA REAL",
  T08:"PARTIDA REAL",T09:"PARTIDA REAL",T10:"SE OMITEN JUGADAS REALES",
  T11:"PARTIDA REAL",T12:"CIERRE EDITORIAL · LA PARTIDA CONTINÚA"
 };
 chk(obj(edl)&&edl.artifact_version==="engineyt-offline-edl-proposal/0.1"&&edl.case_id==="ED-CASE-REAL-01","EDL_VERSION");
 for(const k of ["execution_authorized","render_authorized","publishing_authorized","integration_authorized","release_authority","measured_voice_timing","frame_visibility_verified","rights_clearance_verified","semantic_legality_verified"])chk(edl[k]===false,"EDL_AUTH_"+k);
 chk(Array.isArray(edl.hard_blockers)&&edl.hard_blockers.includes("E5B4D_NO_GO_MODEL_M_POLICY_B")&&edl.hard_blockers.includes("S08_T11_TECHNICAL_SOURCE_VISUAL_TREATMENT_UNRESOLVED"),"SOURCE_NO_GO");
 chk(obj(config)&&Object.keys(config).sort().join("|")==="allow_cloud_generation|allow_direct_editor_write|allow_media_execution|approval_case|assets_rights_qualified|audio_alignment_qualified|auto_install_dependencies|character_consistency_qualified|external_spend_authorized|source_visibility_qualified|version","CONFIG_FIELDS");
 chk(config.version==="engineyt-documentary-handoff-config/0.1"&&config.approval_case==="ED-CASE-REAL-01","CONFIG_VERSION");
 for(const k of ["allow_cloud_generation","allow_direct_editor_write","allow_media_execution","assets_rights_qualified","audio_alignment_qualified","auto_install_dependencies","character_consistency_qualified","external_spend_authorized","source_visibility_qualified"])chk(config[k]===false,"UNAUTHORIZED_"+k);
 chk(Array.isArray(edl.shots)&&edl.shots.length===9,"SHOT_COUNT");
 const ids=new Set();
 let prevEnd=0;
 const shots=edl.shots.map((shot,i)=>{
  chk(shot.shot_id===`S${String(i+1).padStart(2,"0")}`&&Number.isInteger(shot.target_start_ms)&&Number.isInteger(shot.target_end_ms)&&shot.target_start_ms===prevEnd&&shot.target_end_ms>shot.target_start_ms,"SHOT_SEQUENCE");
  prevEnd=shot.target_end_ms;
  chk(shot.time_authority==="UNMEASURED_EDITORIAL_TARGET"&&shot.audio_file===null&&shot.render_instruction===null&&shot.visual_review==="NOT_EXECUTED","UNMEASURED_SOURCE");
  chk(Array.isArray(shot.event_ids)&&Array.isArray(shot.truth_annotations)&&shot.event_ids.length===shot.truth_annotations.length,"EVENT_DISCLOSURE");
  const labels=shot.truth_annotations.map((x,j)=>{
   const event=shot.event_ids[j];
   chk(truth[event]&&x.event_id===event&&x.required_display_label===truth[event],"TRUTH_"+event);
   if(event==="T10")chk(typeof x.mandatory_omission==="string"&&/14/.test(x.mandatory_omission)&&/36[–-]49/.test(x.mandatory_omission),"ELLIPSIS_DISCLOSURE");
   chk(x.phase_start_ms===null&&x.phase_end_ms===null&&x.visible_on_real_frames_verified===false,"UNMEASURED_EVENT");
   chk(x.audience_board_before_declared!=="V-PRE-EV2"&&x.audience_board_after_declared!=="V-PRE-EV2","TECHNICAL_BOARD_LEAK");
   ids.add(event);
   return {event_id:event,mandatory_label:truth[event],visual_duration_ms:null,visibility_proved:false};
  });
  return {
   shot_id:shot.shot_id,
   editorial_target_interval_ms:[shot.target_start_ms,shot.target_end_ms],
   editorial_target_not_measured:true,
   source_events:labels,
   planned_board:shot.declared_terminal_board,
   visual_identity_key:null,
   voiceover_segment_verified:false,
   word_level_alignment:null,
   asset_manifest_hashes:[],
   character_reference_approval:null,
   music_rights_approval:null,
   subtitle_fidelity_verified:false,
   frame_truth_overlay_verified:false,
   candidate_export_formats:["EDL_NEUTRAL_METADATA_ONLY"],
   capcut_native_project_path:null,
   direct_editor_write_permitted:false,
   rendering_permitted:false,
   shot_quality_gate:shot.shot_id==="S08"?"BLOCKED_T11_TECHNICAL_SOURCE":"NOT_REVIEWED"
  };
 });
 chk(prevEnd===45000&&ids.size===12,"TIMELINE_OR_EVENTS");
 const stages=["SCRIPT_EVIDENCE_AND_FACTUALITY","VOICEOVER_WORD_TIMING","CHARACTER_REFERENCE_APPROVAL","VISUAL_ASSET_AND_LICENSES","PER_SHOT_TRUTH_QC","EDITABLE_TIMELINE_INTEGRITY","INDEPENDENT_COMPREHENSION","RELEASE_GATES"];
 return {
  artifact_version:"engineyt-documentary-production-handoff/0.1",
  case_id:"ED-CASE-REAL-01",
  status:"RESEARCH_ONLY_INCOMPLETE_AND_UNRENDERABLE",
  source_edl_version:edl.artifact_version,
  editorial_target_duration_ms:45000,
  measured_final_duration_ms:null,
  automatic_execution_authorized:false,
  automatic_asset_generation_authorized:false,
  direct_capcut_project_write_authorized:false,
  auto_dependency_install_authorized:false,
  financial_spend_authorized:false,
  integration_authorized:false,
  media_render_authorized:false,
  publication_authorized:false,
  independent_verification_completed:false,
  legal_rights_qualified:false,
  protocol:"WRITE_NEUTRAL_SOURCE_METADATA_ONLY",
  stages:stages.map(stage=>({stage,status:"NOT_VERIFIED",evidence_refs:[],can_advance:false})),
  shots,
  caveats:[
   "NEVER_ASSUME_WORD_TIMES_FROM_TEXT_ONLY",
   "NO_CAPCUT_NATIVE_FILE_WRITE_OR_INSTALLER",
   "NO_AI_GENERATED_HISTORICAL_CLAIM_WITHOUT_SOURCE",
   "CROSS_SHOT_CHARACTER_IDENTITY_NEEDS_VISUAL_REVIEW",
   "NO_RENDER_OR_UPLOAD_WITH_E5B4D_NO_GO"
  ],
  frozen_gates:edl.hard_blockers.slice()
 };
}

export function independentReviewHandoff(candidate,edl) {
 const errs=[],ck=(ok,k)=>{if(!ok)errs.push(k)};
 const truth={T01:"PARTIDA REAL",T02:"PARTIDA REAL",T03:"PARTIDA REAL",T04:"REBOBINADO · PARTIDA REAL",T05:"HIPOTÉTICA · NO JUGADA",T06:"HIPOTÉTICA · NO JUGADA",T07:"REGRESO A LA PARTIDA REAL",T08:"PARTIDA REAL",T09:"PARTIDA REAL",T10:"SE OMITEN JUGADAS REALES",T11:"PARTIDA REAL",T12:"CIERRE EDITORIAL · LA PARTIDA CONTINÚA"};
 ck(candidate?.artifact_version==="engineyt-documentary-production-handoff/0.1"&&candidate?.case_id===edl?.case_id,"IDENTITY");
 ck(candidate?.status==="RESEARCH_ONLY_INCOMPLETE_AND_UNRENDERABLE"&&candidate?.protocol==="WRITE_NEUTRAL_SOURCE_METADATA_ONLY","SOURCE_SCOPE");
 for(const k of ["automatic_execution_authorized","automatic_asset_generation_authorized","direct_capcut_project_write_authorized","auto_dependency_install_authorized","financial_spend_authorized","integration_authorized","media_render_authorized","publication_authorized","independent_verification_completed","legal_rights_qualified"])ck(candidate?.[k]===false,"AUTH_"+k);
 ck(candidate?.measured_final_duration_ms===null&&candidate?.editorial_target_duration_ms===edl?.target_duration_ms,"TIMING_AUTHORITY");
 ck(Array.isArray(candidate?.stages)&&candidate.stages.length===8&&candidate.stages.every(s=>s.status==="NOT_VERIFIED"&&s.can_advance===false&&Array.isArray(s.evidence_refs)&&s.evidence_refs.length===0),"STAGE_REVIEW");
 ck(Array.isArray(candidate?.shots)&&candidate.shots.length===edl?.shots?.length,"SHOT_COUNT");
 if(Array.isArray(candidate?.shots))for(let i=0;i<candidate.shots.length;i++){
  const s=candidate.shots[i],source=edl?.shots?.[i];
  ck(s.shot_id===source?.shot_id&&JSON.stringify(s.editorial_target_interval_ms)===JSON.stringify([source?.target_start_ms,source?.target_end_ms]),"SHOT_BIND_"+i);
  ck(s.editorial_target_not_measured===true&&s.word_level_alignment===null&&s.visual_identity_key===null&&s.character_reference_approval===null&&s.music_rights_approval===null,"NO_ASSUMPTIONS_"+i);
  ck(s.capcut_native_project_path===null&&s.direct_editor_write_permitted===false&&s.rendering_permitted===false,"NO_WRITES_"+i);
  ck(s.shot_quality_gate===(s.shot_id==="S08"?"BLOCKED_T11_TECHNICAL_SOURCE":"NOT_REVIEWED"),"S08_GUARD_"+i);
  ck(s.source_events?.length===source?.event_ids?.length,"EVENT_COUNT_"+i);
  if(Array.isArray(s.source_events))for(let j=0;j<s.source_events.length;j++){
    const item=s.source_events[j], id=source?.event_ids?.[j];
    ck(item.event_id===id&&item.mandatory_label===truth[id]&&item.visual_duration_ms===null&&item.visibility_proved===false,"TRUTH_"+i+"_"+j);
  }
 }
 for(const q of ["E5B4D_NO_GO_MODEL_M_POLICY_B","S08_T11_TECHNICAL_SOURCE_VISUAL_TREATMENT_UNRESOLVED"])ck(candidate?.frozen_gates?.includes(q),"NO_GO_"+q);
 for(const c of ["NEVER_ASSUME_WORD_TIMES_FROM_TEXT_ONLY","NO_CAPCUT_NATIVE_FILE_WRITE_OR_INSTALLER","CROSS_SHOT_CHARACTER_IDENTITY_NEEDS_VISUAL_REVIEW"])ck(candidate?.caveats?.includes(c),"CAUTION_"+c);
 return {review_version:"engineyt-documentary-handoff-independent-review/0.1",status:errs.length?"FAIL_CLOSED":"PASS_LIMITED_STATIC_ONLY",release_authority:false,errors:errs};
}
