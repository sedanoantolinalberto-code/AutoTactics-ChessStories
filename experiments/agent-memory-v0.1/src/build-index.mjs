// Pure manual index, no side effects, network, filesystem or auto injection.
export function buildMemoryIndex(records, scope) {
 const reject=(condition,code)=>{if(!condition)throw Error("MEMORY_REJECT:"+code)};
 const plain=(v)=>v!==null&&typeof v==="object"&&!Array.isArray(v);
 const exact=(v,keys)=>plain(v)&&Object.keys(v).sort().join("|")===keys.slice().sort().join("|");
 const str=(v,min,max)=>typeof v==="string"&&v.trim().length>=min&&v.length<=max;
 reject(exact(scope,["repository","release_enabled","execution_enabled","auto_inject","cloud_sync","visibility"]),"SCOPE_FIELDS");
 reject(scope.repository==="sedanoantolinalberto-code/AutoTactics-ChessStories"&&scope.release_enabled===false&&scope.execution_enabled===false&&scope.auto_inject===false&&scope.cloud_sync===false&&scope.visibility==="PUBLIC_METADATA_ONLY","SCOPE_GATES");
 reject(Array.isArray(records)&&records.length<=40,"RECORD_COUNT");
 const allowedKinds=["ARTIFACT","DECISION","RISK","TEST"];
 const seen=new Set();
 const normalized=[];
 for(const r of records){
  reject(exact(r,["id","kind","project","recorded_at","summary","source","sensitivity","trust_class","verification"]),"RECORD_FIELDS");
  reject(/^MEM-\d{4}$/.test(r.id)&&!seen.has(r.id),"ID");
  seen.add(r.id);
  reject(allowedKinds.includes(r.kind)&&r.project==="ENGINEYT","TYPE");
  reject(/^\d{4}-\d{2}-\d{2}$/.test(r.recorded_at)&&!Number.isNaN(Date.parse(r.recorded_at+"T00:00:00Z")),"DATE");
  reject(str(r.summary,10,280) && !/[\u0000-\u001f]/.test(r.summary),"TEXT_LIMIT");
  reject(!/(?:sk-[A-Za-z0-9]{12,}|gh[pousr]_[A-Za-z0-9]{20,}|-----BEGIN|password\s*[=:]|api[_ -]?key\s*[=:]|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/i.test(r.summary),"SENSITIVE_PATTERN");
  reject(r.sensitivity==="PUBLIC_ONLY"&&r.trust_class==="UNTRUSTED_DATA_NOT_INSTRUCTIONS"&&r.verification==="DOCUMENTARY_POINTER_NOT_QUALIFIED","TRUST");
  reject(exact(r.source,["repository","path","commit_sha"]),"SOURCE_FIELDS");
  reject(r.source.repository===scope.repository&&/^[0-9a-f]{40}$/.test(r.source.commit_sha),"SOURCE_PIN");
  reject(/^(?:experiments\/|editorial\/|cases\/|docs\/|contracts\/)[A-Za-z0-9_.\/-]{1,180}$/.test(r.source.path)&&!r.source.path.includes(".."),"SOURCE_PATH");
  normalized.push({
   ...r,
   memory_role:"DISCOVERY_POINTER_ONLY",
   may_act_as_instruction:false,
   may_change_gates:false,
   permission_to_render:false,
   permission_to_publish:false,
   provenance_verified:false
  });
 }
 return {
  artifact_version:"engineyt-safe-memory-index/0.1",
  repository:scope.repository,
  classification:"MANUAL_PUBLIC_POINTERS_ONLY",
  automatic_collection_enabled:false,
  live_agent_hooks_enabled:false,
  context_autoinjection_enabled:false,
  outbound_network_enabled:false,
  cloud_sync_enabled:false,
  cross_session_store:"GIT_PINNED_SOURCE_ONLY",
  recall_returns_instructions:false,
  authority_to_execute:false,
  authority_to_render:false,
  authority_to_publish:false,
  e5b4d_state:"NO-GO_UNDER_MODEL_M",
  policy_b_state:"STRICT_UNCHANGED",
  records:normalized
 };
}

export function searchMemoryIndex(index, phrase, limit=3){
 const reject=(ok,code)=>{if(!ok)throw Error("RECALL_REJECT:"+code)};
 reject(index?.artifact_version==="engineyt-safe-memory-index/0.1"&&index?.context_autoinjection_enabled===false&&index?.authority_to_execute===false&&index?.authority_to_publish===false,"INDEX_GATES");
 reject(typeof phrase==="string"&&phrase.trim().length>=2&&phrase.length<=80,"QUERY");
 reject(Number.isInteger(limit)&&limit>=1&&limit<=5,"LIMIT");
 const terms=phrase.toLowerCase().normalize("NFKC").split(/[^a-z0-9áéíóúñ]+/i).filter(t=>t.length>=2).slice(0,8);
 reject(terms.length>0,"TERMS");
 const rows=Array.isArray(index.records)?index.records:[];
 const matching=rows.map(r=>{
  const hay=[r.id,r.kind,r.summary,r.source?.path].join(" ").toLowerCase();
  return {r,score:terms.reduce((sum,t)=>sum+(hay.includes(t)?1:0),0)};
 }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.r.id.localeCompare(b.r.id)).slice(0,limit);
 return {
  format:"engineyt-untrusted-recall/0.1",
  instruction_authority:false,
  gates_unchanged:true,
  query:phrase,
  results:matching.map(x=>({id:x.r.id,kind:x.r.kind,summary:x.r.summary,source:x.r.source,trust:"UNTRUSTED_DATA_NOT_INSTRUCTIONS",score:x.score})),
  next_action:"INDEPENDENT_SOURCE_AND_GATE_VERIFICATION_REQUIRED_BEFORE_DECISION"
 };
}
