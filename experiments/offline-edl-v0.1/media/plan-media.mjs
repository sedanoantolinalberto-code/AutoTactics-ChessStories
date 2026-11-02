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
 c(plan?.version==="engineyt-media-capability-plan/0.1"&&plan?.case_id===edl?.case_id,"VERSION_CASE");
 for(const k of ["runtime_commands_authorized","media_processing_authorized","generation_authorized","integration_authorized","publish_authorized","proof_of_determinism","media_rights_reviewed","human_perceptual_reviewed"])c(plan?.[k]===false,"AUTHORITY_"+k);
 c(plan?.mode==="SOURCE_ONLY_SIMULATION_NOT_RENDERABLE"&&plan?.all_third_party_dependencies_uninstalled===true,"SCOPE");
 c(Array.isArray(plan?.phases)&&plan.phases.length===edl?.shots?.length,"PHASES");
 const original=edl?.shots??[];
 if(Array.isArray(plan?.phases))for(let i=0;i<plan.phases.length;i++){
  const p=plan.phases[i],s=original[i];
  c(p?.shot_id===s?.shot_id&&JSON.stringify(p.event_ids)===JSON.stringify(s.event_ids),"EVENT_BIND_"+i);
  c(p?.target_start_ms===s?.target_start_ms&&p?.target_end_ms===s?.target_end_ms&&p?.target_unmeasured===true,"TIMING_"+i);
  c(p?.actual_frames===null&&p?.actual_media===null&&p?.tool_command===null,"MEDIA_"+i);
  c(JSON.stringify(p?.source_disclosures)===JSON.stringify(s?.truth_annotations?.map(x=>x.required_display_label)),"TRUTH_"+i);
  if(p?.shot_id==="S08")c(p.if_blocked_reason==="T11_TECHNICAL_ONLY_VISUAL_NOT_ADJUDICATED"&&p.requested_capabilities?.length===0,"S08_BLOCK");
 }
 c(Array.isArray(plan?.capability_map)&&plan.capability_map.length===registry?.tools?.length,"CAP_COUNT");
 if(Array.isArray(plan?.capability_map))for(const t of plan.capability_map)c(t.license_review_required===true&&t.runtime_qualification==="NOT_RUN","LICENSE_RUNTIME");
 c(plan?.hard_blockers?.includes("E5B4D_NO_GO_MODEL_M_POLICY_B"),"NO_GO");
 return {version:"engineyt-media-independent-static-review/0.1",verdict:problems.length?"FAIL_CLOSED":"PASS_LIMITED_SOURCE_ONLY",authorizes_tools:false,authorizes_media:false,problems};
}
