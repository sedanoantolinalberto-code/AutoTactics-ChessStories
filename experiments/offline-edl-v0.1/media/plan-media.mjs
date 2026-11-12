// Source-only capability planner. No invocation of external tools, subprocess, network, or media I/O.
export function planMediaCapabilities(edl, registry){
 const check=(ok,code)=>{if(!ok)throw Error("CAP_REJECT:"+code)};
 check(edl?.artifact_version==="engineyt-offline-edl-proposal/0.1"&&edl?.case_id==="ED-CASE-REAL-01","EDL_IDENTITY");
 for(const k of ["execution_authorized","render_authorized","publishing_authorized","integration_authorized","release_authority","frame_visibility_verified","rights_clearance_verified"]){check(edl?.[k]===false,"EDL_GATE_"+k)}
 check(Array.isArray(edl.shots)&&edl.shots.length===9,"EDL_SHOTS");
 check(edl.hard_blockers?.includes("E5B4D_NO_GO_MODEL_M_POLICY_B")&&edl.hard_blockers?.includes("S08_T11_TECHNICAL_SOURCE_VISUAL_TREATMENT_UNRESOLVED"),"EDL_BLOCKERS");
 check(registry?.version==="engineyt-media-capabilities/0.1"&&registry?.auto_install===false&&registry?.execute_tools===false&&registry?.network_enabled===false,"REGISTRY_SCOPE");
 check(Array.isArray(registry.tools)&&registry.tools.length===11,"REGISTRY_COUNT");
 const allow=new Set(["scene-detection","silence-analysis","stabilization","color-match","background-removal","frame-interpolation","upscaling","audio-separation","beat-analysis","html-motion","media-encoding"]);
 const seen=new Set();
 for(const t of registry.tools){
  check(typeof t.id==="string"&&/^[a-z0-9-]+$/.test(t.id)&&!seen.has(t.id),"TOOL_ID");
  seen.add(t.id);
  check(allow.has(t.capability),"CAPABILITY");
  check(t.planning_only===true&&t.license_review_required===true&&t.runtime_qualification==="NOT_RUN","TOOL_GATES");
  check(/^https:\/\/github\.com\/[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/.test(t.upstream_url),"UPSTREAM");
  check(["INPUT_MEDIA_REQUIRED","SOURCE_ONLY_COMPOSITION","OPTIONAL_IF_ASSETS_APPROVED"].includes(t.availability),"AVAILABILITY");
 }
 check(edl.shots.every((s,i)=>s.shot_id==="S0"+(i+1)&&s.time_authority==="UNMEASURED_EDITORIAL_TARGET"&&s.render_instruction===null&&s.audio_file===null&&s.visual_review==="NOT_EXECUTED"),"NO_MEDIA_PROMOTION");
 const phases=edl.shots.map(s=>{
  const isComposite=s.event_ids.length>1;
  const isBlocked=s.shot_id==="S08";
  return {
   shot_id:s.shot_id,event_ids:s.event_ids.slice(),
   target_start_ms:s.target_start_ms,target_end_ms:s.target_end_ms,
   target_unmeasured:true,source_board:s.declared_terminal_board,
   requested_capabilities:(isBlocked?[]:["html-motion"]).concat(!isBlocked&&!isComposite?["media-encoding"]:[]),
   compatibility:"SCHEMA_CONCEPT_ONLY_NO_TOOL_EXECUTION",
   phase_timing_status:isComposite?"UNASSIGNED":"NOT_MEASURED",
   if_blocked_reason:isBlocked?"T11_TECHNICAL_ONLY_VISUAL_NOT_ADJUDICATED":null,
   source_disclosures:s.truth_annotations.map(a=>a.required_display_label),
   actual_frames:null,actual_media:null,tool_command:null
  };
 });
 return {
  version:"engineyt-media-capability-plan/0.1",case_id:edl.case_id,
  mode:"SOURCE_ONLY_SIMULATION_NOT_RENDERABLE",
  all_third_party_dependencies_uninstalled:true,
  runtime_commands_authorized:false,
  media_processing_authorized:false,
  generation_authorized:false,
  integration_authorized:false,
  publish_authorized:false,
  proof_of_determinism:false,
  media_rights_reviewed:false,
  human_perceptual_reviewed:false,
  capability_map:registry.tools.map(t=>({id:t.id,capability:t.capability,upstream_url:t.upstream_url,availability:t.availability,license_review_required:true,runtime_qualification:"NOT_RUN"})),
  phases,hard_blockers:edl.hard_blockers.slice(),
  required_next_review:["INDEPENDENT_STATIC_SOURCE_REVIEW","PER_TOOL_LICENSE_AND_WEIGHTS_REVIEW","NO_MEDIA_EXECUTION_BEFORE_POLICY_B_M_QUALIFICATION","S08_T11_ADJUDICATION","ACTUAL_FRAME_TIMING_AND_TRUTH_VISIBILITY","R6_IVV_CASE_APPROVAL"]
 };
}

export function reviewMediaCapabilities(plan,edl,registry){
 const problems=[],c=(ok,k)=>{if(!ok)problems.push(k)};
 const exactKeys=(obj,keys)=>obj!==null&&typeof obj==="object"&&!Array.isArray(obj)&&JSON.stringify(Object.keys(obj).sort())===JSON.stringify([...keys].sort());
 const planKeys=["version","case_id","mode","all_third_party_dependencies_uninstalled","runtime_commands_authorized","media_processing_authorized","generation_authorized","integration_authorized","publish_authorized","proof_of_determinism","media_rights_reviewed","human_perceptual_reviewed","capability_map","phases","hard_blockers","required_next_review"];
 const phaseKeys=["shot_id","event_ids","target_start_ms","target_end_ms","target_unmeasured","source_board","requested_capabilities","compatibility","phase_timing_status","if_blocked_reason","source_disclosures","actual_frames","actual_media","tool_command"];
 const toolKeys=["id","capability","upstream_url","availability","license_review_required","runtime_qualification"];
 c(exactKeys(plan,planKeys),"PLAN_EXACT_SCHEMA");
 c(plan?.version==="engineyt-media-capability-plan/0.1"&&plan?.case_id===edl?.case_id,"VERSION_CASE");
 for(const k of ["runtime_commands_authorized","media_processing_authorized","generation_authorized","integration_authorized","publish_authorized","proof_of_determinism","media_rights_reviewed","human_perceptual_reviewed"])c(plan?.[k]===false,"AUTHORITY_"+k);
 // Guard against additional authorization fields that are not emitted by this source-only schema.
 for(const k of ["execution_authorized","render_authorized","publishing_authorized","process_execution_authorized"])c(plan?.[k]!==true,"UNEXPECTED_AUTHORITY_"+k);
 c(plan?.mode==="SOURCE_ONLY_SIMULATION_NOT_RENDERABLE"&&plan?.all_third_party_dependencies_uninstalled===true,"SCOPE");
 c(Array.isArray(plan?.phases)&&plan.phases.length===9&&plan.phases.length===edl?.shots?.length,"PHASES");
 c(registry?.version==="engineyt-media-capabilities/0.1"&&registry?.auto_install===false&&registry?.execute_tools===false&&registry?.network_enabled===false&&Array.isArray(registry.tools)&&registry.tools.length===11,"REGISTRY_SOURCE_SCOPE");
 c(edl?.artifact_version==="engineyt-offline-edl-proposal/0.1"&&edl?.case_id==="ED-CASE-REAL-01"&&edl?.render_authorized===false&&edl?.execution_authorized===false&&edl?.publishing_authorized===false&&edl?.integration_authorized===false,"EDL_SOURCE_SCOPE");
 // Independently pin the editorial invariants for this single, non-renderable EP01 case.
 // Cross-document agreement alone is insufficient: an attacker could alter the EDL and plan together.
 const edlKeys=["artifact_version","case_id","classification","evidence_level","execution_authorized","render_authorized","publishing_authorized","integration_authorized","release_authority","measured_voice_timing","frame_visibility_verified","rights_clearance_verified","semantic_legality_verified","original_sources_unchanged","source_revisions","source_revision_scope","target_duration_ms","shots","hard_blockers"];
 const shotKeys=["shot_id","time_authority","target_start_ms","target_end_ms","declared_terminal_board","event_dispatch_allowed","event_ids","truth_annotations","narration_text_draft","caption_text_draft","audio_file","subtitle_cues","visual_asset_files","render_instruction","editorial_review","visual_review"];
 c(exactKeys(edl,edlKeys)&&edl?.classification==="SOURCE_ONLY_DOCUMENTARY_PROPOSAL"&&edl?.evidence_level==="STATIC_SOURCE_CONCORDANCE_ONLY"&&edl?.original_sources_unchanged===true,"EDL_DOCUMENTARY_SCHEMA");
 c(edl?.target_duration_ms===45000,"EDL_TARGET_45S");
 const editorialShots=[
  [0,4000,"V-P1",["T01"],true],
  [4000,10000,"V-P1",["T01"],false],
  [10000,17000,"V-EV1",["T02"],true],
  [17000,23000,"V-REAL",["T03"],true],
  [23000,29000,"V-REAL",["T03"],false],
  [29000,34000,"V-HYP",["T04","T05","T06"],true],
  [34000,36000,"V-P1",["T07"],true],
  [36000,42000,"V-EV2",["T08","T09","T10","T11"],true],
  [42000,45000,"V-EV2",["T12"],true]
 ];
 const truthLabels={
  T01:"PARTIDA REAL",T02:"PARTIDA REAL",T03:"PARTIDA REAL",
  T04:"REBOBINADO · PARTIDA REAL",T05:"HIPOTÉTICA · NO JUGADA",T06:"HIPOTÉTICA · NO JUGADA",
  T07:"REGRESO A LA PARTIDA REAL",T08:"PARTIDA REAL",T09:"PARTIDA REAL",
  T10:"SE OMITEN JUGADAS REALES",T11:"PARTIDA REAL",T12:"CIERRE EDITORIAL · LA PARTIDA CONTINÚA"
 };
 c(Array.isArray(edl?.shots)&&edl.shots.length===editorialShots.length,"EDL_CANONICAL_SHOTS");
 if(Array.isArray(edl?.shots))for(let i=0;i<edl.shots.length;i++){
  const s=edl.shots[i],expected=editorialShots[i];
  c(exactKeys(s,shotKeys),"EDL_SHOT_EXACT_SCHEMA_"+i);
  c(!!expected&&s?.shot_id==="S0"+(i+1)&&s?.target_start_ms===expected?.[0]&&s?.target_end_ms===expected?.[1]&&s?.declared_terminal_board===expected?.[2]&&s?.event_dispatch_allowed===expected?.[4]&&JSON.stringify(s?.event_ids)===JSON.stringify(expected?.[3]),"EDL_CANONICAL_SEQUENCE_"+i);
  c(Array.isArray(s?.truth_annotations)&&s.truth_annotations.length===(expected?.[3]?.length??-1),"EDL_TRUTH_COUNT_"+i);
  if(Array.isArray(s?.truth_annotations))for(let j=0;j<s.truth_annotations.length;j++){
   const a=s.truth_annotations[j],id=expected?.[3]?.[j];
   c(a?.event_id===id&&a?.required_display_label===truthLabels[id]&&a?.visible_on_real_frames_verified===false&&a?.phase_start_ms===null&&a?.phase_end_ms===null,"EDL_TRUTH_LABEL_"+i+"_"+j);
   if(id==="T10")c(typeof a?.mandatory_omission==="string"&&/14/.test(a.mandatory_omission)&&/36[–-]49/.test(a.mandatory_omission),"EDL_MANDATORY_OMISSION");
   if(id==="T11")c(a?.audience_board_before_declared===null&&a?.audience_board_after_declared===null,"EDL_T11_UNRESOLVED");
  }
 }

 for(const k of ["release_authority","frame_visibility_verified","rights_clearance_verified","semantic_legality_verified","measured_voice_timing"])c(edl?.[k]===false,"EDL_UNQUALIFIED_"+k);
 c(edl?.source_revision_scope==="OBSERVED_GIT_BLOBS_NOT_RAW_BYTE_AUTHENTICATION","EDL_PROVENANCE_SCOPE");
 const requiredPins={
  shotplan:"0f20ef02a32b7275bb6393e0418907429f663053",
  semantic_case:"3514f19ac355763a5b4c61d5c573df090b0eccc1",
  truth_overlay:"aafc6429d716863e225361dd4962169bf12ecfae",
  prior_60s_analogue_not_timing_authority:"95b8c3befe6da95be1a297af4c7bb7722231ab64"
 };
 for(const [name,pin] of Object.entries(requiredPins))c(edl?.source_revisions?.[name]?.observed_git_blob===pin,"EDL_PIN_"+name);
 const requiredBlockers=["E5B4D_NO_GO_MODEL_M_POLICY_B","R6_RIGHTS_PENDING","IVV_GLOBAL_NOT_APPROVED","CASE_APPROVAL_NOT_APPROVED","VOICE_AND_FRAME_TIMINGS_UNMEASURED","S06_S07_S08_PHASE_INTERVALS_UNASSIGNED","S08_T11_TECHNICAL_SOURCE_VISUAL_TREATMENT_UNRESOLVED","ADAPTER_CONSUMER_NOT_QUALIFIED","NO_RENDER_NO_UPLOAD"];
 c(Array.isArray(edl?.hard_blockers)&&requiredBlockers.every(k=>edl.hard_blockers.includes(k)),"EDL_REQUIRED_BLOCKERS");
 const knownCapabilities=new Set(["scene-detection","silence-analysis","stabilization","color-match","background-removal","frame-interpolation","upscaling","audio-separation","beat-analysis","html-motion","media-encoding"]);
 const ids=new Set();
 if(Array.isArray(registry?.tools))for(let i=0;i<registry.tools.length;i++){
  const t=registry.tools[i];
  c(typeof t?.id==="string"&&/^[a-z0-9-]+$/.test(t.id)&&!ids.has(t.id),"REGISTRY_TOOL_ID_"+i);
  if(typeof t?.id==="string")ids.add(t.id);
  c(knownCapabilities.has(t?.capability)&&t?.planning_only===true&&t?.license_review_required===true&&t?.runtime_qualification==="NOT_RUN","REGISTRY_TOOL_GATE_"+i);
  c(typeof t?.upstream_url==="string"&&/^https:\/\/github\.com\/[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/.test(t.upstream_url),"REGISTRY_UPSTREAM_"+i);
  c(["INPUT_MEDIA_REQUIRED","SOURCE_ONLY_COMPOSITION","OPTIONAL_IF_ASSETS_APPROVED"].includes(t?.availability),"REGISTRY_AVAILABILITY_"+i);
 }
 const original=edl?.shots??[];
 if(Array.isArray(plan?.phases))for(let i=0;i<plan.phases.length;i++){
  const p=plan.phases[i],s=original[i];
  c(exactKeys(p,phaseKeys),"PHASE_EXACT_SCHEMA_"+i);
  c(s?.shot_id==="S0"+(i+1)&&s?.time_authority==="UNMEASURED_EDITORIAL_TARGET"&&s?.visual_review==="NOT_EXECUTED"&&s?.editorial_review==="REQUIRED"&&s?.render_instruction===null&&s?.audio_file===null,"EDL_SHOT_GATE_"+i);
  c(Array.isArray(s?.visual_asset_files)&&s.visual_asset_files.length===0&&Array.isArray(s?.subtitle_cues)&&s.subtitle_cues.length===0,"EDL_NO_MEDIA_"+i);
  c(p?.shot_id===s?.shot_id&&JSON.stringify(p?.event_ids)===JSON.stringify(s?.event_ids),"EVENT_BIND_"+i);
  c(p?.target_start_ms===s?.target_start_ms&&p?.target_end_ms===s?.target_end_ms&&p?.target_unmeasured===true,"TIMING_"+i);
  c(p?.actual_frames===null&&p?.actual_media===null&&p?.tool_command===null,"MEDIA_"+i);
  c(JSON.stringify(p?.source_disclosures)===JSON.stringify(Array.isArray(s?.truth_annotations)?s.truth_annotations.map(x=>x?.required_display_label):null),"TRUTH_"+i);
  const expectedCapabilities=p?.shot_id==="S08"?[]:["html-motion",...(s?.event_ids?.length>1?[]:["media-encoding"])];
  c(JSON.stringify(p?.requested_capabilities)===JSON.stringify(expectedCapabilities),"CAPABILITY_REQUEST_"+i);
  c(p?.source_board===s?.declared_terminal_board,"BOARD_BIND_"+i);
  c(p?.compatibility==="SCHEMA_CONCEPT_ONLY_NO_TOOL_EXECUTION","COMPATIBILITY_"+i);
  c(p?.phase_timing_status===(s?.event_ids?.length>1?"UNASSIGNED":"NOT_MEASURED"),"PHASE_MEASUREMENT_"+i);
  c(p?.if_blocked_reason===(p?.shot_id==="S08"?"T11_TECHNICAL_ONLY_VISUAL_NOT_ADJUDICATED":null),"BLOCK_REASON_"+i);
  if(p?.shot_id==="S08")c(p.if_blocked_reason==="T11_TECHNICAL_ONLY_VISUAL_NOT_ADJUDICATED"&&p.requested_capabilities?.length===0,"S08_BLOCK");
 }
 c(Array.isArray(plan?.capability_map)&&plan.capability_map.length===11&&plan.capability_map.length===registry?.tools?.length,"CAP_COUNT");
 if(Array.isArray(plan?.capability_map))for(let i=0;i<plan.capability_map.length;i++){
  const t=plan.capability_map[i],source=registry?.tools?.[i];
  c(exactKeys(t,toolKeys),"CAP_EXACT_SCHEMA_"+i);
  c(t?.license_review_required===true&&t?.runtime_qualification==="NOT_RUN","LICENSE_RUNTIME_"+i);
  c(t?.id===source?.id&&t?.capability===source?.capability&&t?.upstream_url===source?.upstream_url&&t?.availability===source?.availability,"CAP_SOURCE_BIND_"+i);
 }
 c(Array.isArray(plan?.hard_blockers)&&JSON.stringify(plan.hard_blockers)===JSON.stringify(edl?.hard_blockers)&&plan.hard_blockers.includes("E5B4D_NO_GO_MODEL_M_POLICY_B"),"NO_GO");
 const expectedNext=["INDEPENDENT_STATIC_SOURCE_REVIEW","PER_TOOL_LICENSE_AND_WEIGHTS_REVIEW","NO_MEDIA_EXECUTION_BEFORE_POLICY_B_M_QUALIFICATION","S08_T11_ADJUDICATION","ACTUAL_FRAME_TIMING_AND_TRUTH_VISIBILITY","R6_IVV_CASE_APPROVAL"];
 c(JSON.stringify(plan?.required_next_review)===JSON.stringify(expectedNext),"REVIEW_DEPS");
 return {version:"engineyt-media-independent-static-review/0.1",verdict:problems.length?"FAIL_CLOSED":"PASS_LIMITED_SOURCE_ONLY",authorizes_tools:false,authorizes_media:false,problems};
}
