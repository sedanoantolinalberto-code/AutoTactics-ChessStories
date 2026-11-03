// Pure EP01 distribution variant planning, no files/network/agents/media/dependencies.
const expectedTruth = {
  "T01": "PARTIDA REAL",
  "T02": "PARTIDA REAL",
  "T03": "PARTIDA REAL",
  "T04": "REBOBINADO · PARTIDA REAL",
  "T05": "HIPOTÉTICA · NO JUGADA",
  "T06": "HIPOTÉTICA · NO JUGADA",
  "T07": "REGRESO A LA PARTIDA REAL",
  "T08": "PARTIDA REAL",
  "T09": "PARTIDA REAL",
  "T10": "SE OMITEN JUGADAS REALES",
  "T11": "PARTIDA REAL",
  "T12": "CIERRE EDITORIAL · LA PARTIDA CONTINÚA"
};
export function compileVariants(handoff,spec){
 const assert=(c,k)=>{if(!c)throw Error("VARIANT_REJECT:"+k)};
 const exact=(x,ks)=>x!==null&&typeof x==="object"&&!Array.isArray(x)&&Object.keys(x).sort().join("|")===ks.slice().sort().join("|");
 assert(handoff?.artifact_version==="engineyt-documentary-production-handoff/0.1"&&handoff?.case_id==="ED-CASE-REAL-01"&&handoff?.status==="RESEARCH_ONLY_INCOMPLETE_AND_UNRENDERABLE","SOURCE_SCOPE");
 assert(handoff?.editorial_target_duration_ms===45000&&handoff?.measured_final_duration_ms===null&&handoff?.protocol==="WRITE_NEUTRAL_SOURCE_METADATA_ONLY","UNMEASURED_DURATION");
 for(const k of ["automatic_execution_authorized","automatic_asset_generation_authorized","direct_capcut_project_write_authorized","auto_dependency_install_authorized","financial_spend_authorized","integration_authorized","media_render_authorized","publication_authorized","independent_verification_completed","legal_rights_qualified"])assert(handoff[k]===false,"SOURCE_GATE_"+k);
 assert(Array.isArray(handoff?.stages)&&handoff.stages.length===8&&handoff.stages.every(s=>s.status==="NOT_VERIFIED"&&s.can_advance===false),"SOURCE_STAGES");
 assert(Array.isArray(handoff?.frozen_gates)&&handoff.frozen_gates.includes("E5B4D_NO_GO_MODEL_M_POLICY_B")&&handoff.frozen_gates.includes("S08_T11_TECHNICAL_SOURCE_VISUAL_TREATMENT_UNRESOLVED")&&handoff.frozen_gates.includes("NO_RENDER_NO_UPLOAD"),"SOURCE_NO_GO");
 assert(Array.isArray(handoff?.shots)&&handoff.shots.length===9,"SOURCE_SHOTS");
 const seenEvents=new Set();
 const truthSnapshot=handoff.shots.map((s,i)=>{
  const shotId="S"+String(i+1).padStart(2,"0");
  assert(s.shot_id===shotId&&s.editorial_target_not_measured===true&&Array.isArray(s.editorial_target_interval_ms)&&s.editorial_target_interval_ms.length===2,"SOURCE_SHOT_"+i);
  assert(Array.isArray(s.source_events)&&s.source_events.length>0&&s.source_events.every(e=>e?.mandatory_label===expectedTruth[e.event_id]&&e.visual_duration_ms===null&&e.visibility_proved===false),"SOURCE_TRUTH_"+i);
  assert(s.rendering_permitted===false&&s.direct_editor_write_permitted===false&&s.word_level_alignment===null&&s.frame_truth_overlay_verified===false&&s.asset_manifest_hashes?.length===0,"SOURCE_UNRENDERED_"+i);
  if(shotId==="S08")assert(s.shot_quality_gate==="BLOCKED_T11_TECHNICAL_SOURCE","S08_T11_BLOCKED");
  for(const e of s.source_events)seenEvents.add(e.event_id);
  return {shot_id:shotId,editorial_target_interval_ms:[...s.editorial_target_interval_ms],mandatory_disclosures:s.source_events.map(e=>({event_id:e.event_id,label:e.mandatory_label})),source_visibility_qualified:false,render_gate:s.shot_quality_gate};
 });
 assert(seenEvents.size===12,"SOURCE_EVENTS");
 assert(exact(spec,["version","source_commit","case_id","hook_ids","aspect_ratios","cta_ids","asset_rights_verified","claims_verified","render_allowed","publish_allowed","layout_verified","audio_beats_verified","frame_seek_verified"]),"SPEC_FIELDS");
 assert(spec.version==="engineyt-variant-spec/0.1"&&spec.case_id===handoff.case_id&&/^[a-f0-9]{40}$/.test(spec.source_commit),"SPEC_IDENTITY");
 for(const k of ["asset_rights_verified","claims_verified","render_allowed","publish_allowed","layout_verified","audio_beats_verified","frame_seek_verified"])assert(spec[k]===false,"SPEC_UNQUALIFIED_"+k);
 assert(JSON.stringify(spec.hook_ids)===JSON.stringify(["H1","H2","H3"]),"HOOK_IDS");
 assert(JSON.stringify(spec.aspect_ratios)===JSON.stringify(["16:9","9:16","1:1"]),"FORMAT_IDS");
 assert(JSON.stringify(spec.cta_ids)===JSON.stringify(["C1","C2"]),"CTA_IDS");
 const variants=[];
 for(const hook_id of spec.hook_ids)for(const aspect_ratio of spec.aspect_ratios)for(const cta_id of spec.cta_ids){
  const id=hook_id+"-"+aspect_ratio.replace(":","x")+"-"+cta_id;
  variants.push({variant_id:id,hook_id,aspect_ratio,cta_id,
   copy_or_promotional_claims:null,selected_source_shot_ids:truthSnapshot.map(s=>s.shot_id),
   requires_fact_check:true,requires_layout_and_truth_label_inspection:true,
   source_duration_target_ms:handoff.editorial_target_duration_ms,output_duration_measured_ms:null,
   frame_seek_qualified:false,ffmpeg_command:null,output_media_path:null,
   encode_qualified:false,render_authorized:false,publish_authorized:false,
   review_state:"NOT_REVIEWED_S08_BLOCKED"});
 }
 return {version:"engineyt-campaign-variant-plan/0.1",source_commit:spec.source_commit,case_id:handoff.case_id,
  status:"SOURCE_ONLY_18_CANDIDATES_NO_OUTPUT",
  input_source_handoff_version:handoff.artifact_version,
  truth_snapshot:truthSnapshot,source_duration_unmeasured:true,source_duration_target_ms:45000,
  variant_count:variants.length,variants,
  completed_exports:0,assets_generated:0,real_frames_examined:0,
  source_claims_verified:false,source_rights_verified:false,layout_verified:false,
  audio_sync_verified:false,deterministic_frame_seek_demonstrated:false,
  executable:false,runtime_dependencies_installed:false,render_authorized:false,publish_authorized:false,
  hard_gates:[...handoff.frozen_gates],
  release_decision:"NOT_A_RELEASE_OR_PRODUCTION_APPROVAL"};
}

export function reviewVariantPlan(plan,handoff,spec){
 const problems=[],ck=(p,k)=>{if(!p)problems.push(k)};
 ck(plan?.version==="engineyt-campaign-variant-plan/0.1"&&plan?.case_id===handoff?.case_id&&plan?.source_commit===spec?.source_commit,"IDENTITY");
 ck(plan?.status==="SOURCE_ONLY_18_CANDIDATES_NO_OUTPUT"&&plan?.release_decision==="NOT_A_RELEASE_OR_PRODUCTION_APPROVAL","SCOPE");
 ck(plan?.variant_count===18&&plan?.variants?.length===18,"COUNT");
 ck(plan?.completed_exports===0&&plan?.assets_generated===0&&plan?.real_frames_examined===0,"NO_MEDIA");
 for(const k of ["source_claims_verified","source_rights_verified","layout_verified","audio_sync_verified","deterministic_frame_seek_demonstrated","executable","runtime_dependencies_installed","render_authorized","publish_authorized"])ck(plan?.[k]===false,"NO_AUTH_"+k);
 ck(JSON.stringify(plan?.hard_gates)===JSON.stringify(handoff?.frozen_gates),"GATES");
 ck(plan?.truth_snapshot?.length===handoff?.shots?.length,"TRUTH_LENGTH");
 if(Array.isArray(plan?.truth_snapshot))for(let i=0;i<plan.truth_snapshot.length;i++){
  const a=plan.truth_snapshot[i],s=handoff.shots[i];
  ck(a?.shot_id===s?.shot_id&&JSON.stringify(a.editorial_target_interval_ms)===JSON.stringify(s.editorial_target_interval_ms),"TIMING_"+i);
  ck(JSON.stringify(a?.mandatory_disclosures)===JSON.stringify(s?.source_events?.map(e=>({event_id:e.event_id,label:e.mandatory_label}))),"TRUTH_"+i);
  ck(a?.source_visibility_qualified===false&&a?.render_gate===s?.shot_quality_gate,"SHOT_GATE_"+i);
 }
 if(Array.isArray(plan?.variants)){
  const expected=[];
  for(const h of ["H1","H2","H3"])for(const f of ["16:9","9:16","1:1"])for(const c of ["C1","C2"])expected.push({h,f,c,id:h+"-"+f.replace(":","x")+"-"+c});
  for(let i=0;i<plan.variants.length;i++){
   const v=plan.variants[i],e=expected[i];
   ck(v.variant_id===e?.id&&v.hook_id===e?.h&&v.aspect_ratio===e?.f&&v.cta_id===e?.c,"VARIANT_ORDER_"+i);
   ck(v.copy_or_promotional_claims===null&&v.render_authorized===false&&v.publish_authorized===false&&v.encode_qualified===false&&v.output_media_path===null&&v.ffmpeg_command===null,"VARIANT_NO_MEDIA_"+i);
   ck(v.frame_seek_qualified===false&&v.output_duration_measured_ms===null&&v.source_duration_target_ms===handoff.editorial_target_duration_ms,"VARIANT_TIMING_"+i);
   ck(v.review_state==="NOT_REVIEWED_S08_BLOCKED"&&v.requires_fact_check===true&&v.requires_layout_and_truth_label_inspection===true,"VARIANT_REVIEW_"+i);
   ck(JSON.stringify(v.selected_source_shot_ids)===JSON.stringify(handoff.shots.map(s=>s.shot_id)),"VARIANT_SOURCE_"+i);
  }
 }
 return {version:"engineyt-variant-independent-review/0.1",verdict:problems.length?"FAIL_CLOSED":"PASS_LIMITED_STATIC_ONLY",production_authorized:false,problems};
}
