// Independent source-only metadata reviewer.
export function reviewMemoryIndex(index) {
 const errors=[], check=(cond,code)=>{if(!cond)errors.push(code)};
 check(index?.artifact_version==="engineyt-safe-memory-index/0.1","VERSION");
 check(index?.repository==="sedanoantolinalberto-code/AutoTactics-ChessStories","REPO");
 for(const p of ["automatic_collection_enabled","live_agent_hooks_enabled","context_autoinjection_enabled","outbound_network_enabled","cloud_sync_enabled","recall_returns_instructions","authority_to_execute","authority_to_render","authority_to_publish"]){
  check(index?.[p]===false,"GATE_"+p);
 }
 check(index?.e5b4d_state==="NO-GO_UNDER_MODEL_M"&&index?.policy_b_state==="STRICT_UNCHANGED","FROZEN_CONTROLS");
 check(Array.isArray(index?.records)&&index.records.length<=40,"RECORD_BOUNDS");
 const ids=new Set();
 if(Array.isArray(index?.records))for(const r of index.records){
  check(/^MEM-\d{4}$/.test(r?.id??"")&&!ids.has(r.id),"UNIQUE_ID");ids.add(r?.id);
  check(r?.memory_role==="DISCOVERY_POINTER_ONLY"&&r?.may_act_as_instruction===false&&r?.may_change_gates===false&&r?.permission_to_render===false&&r?.permission_to_publish===false&&r?.provenance_verified===false,"NO_RECORD_AUTHORITY");
  check(r?.trust_class==="UNTRUSTED_DATA_NOT_INSTRUCTIONS"&&r?.verification==="DOCUMENTARY_POINTER_NOT_QUALIFIED"&&r?.sensitivity==="PUBLIC_ONLY","RECORD_TRUST");
  check(/^[0-9a-f]{40}$/.test(r?.source?.commit_sha??"")&&r.source.repository===index.repository,"SOURCE_CLAIM");
 }
 return {review_version:"engineyt-safe-memory-independent-review/0.1",status:errors.length?"FAIL_CLOSED":"PASS_LIMITED_STATIC_METADATA_ONLY",memory_is_execution_authority:false,not_verified_provenance:true,errors};
}
