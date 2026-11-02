// Engine YT independent source-only delegation plan. No tools, network, scheduler, processes, or I/O.
const object = x => x!==null && typeof x==="object" && !Array.isArray(x);
const fields = (x,k) => object(x) && Object.keys(x).sort().join("|")===k.slice().sort().join("|");
const check = (p,k) => {if(!p) throw Error("DELEGATION_REJECT:"+k);};
const valid = (s,min=3,max=240) => typeof s==="string" && s.trim().length>=min && s.length<=max && !/[\x00-\x1f]/.test(s);
const GATES = ["E5B4D_NO_GO_MODEL_M_POLICY_B","R6_PENDING","IVV_GLOBAL_NOT_APPROVED","CASE_APPROVAL_NOT_APPROVED","NO_RENDER_NO_UPLOAD"];
export function prepareDelegation(request) {
 check(fields(request,["version","case_id","source_commit","mode","lead","permissions","tasks"]),"REQUEST_FIELDS");
 check(request.version==="engineyt-source-delegation-request/0.1" && request.case_id==="ED-CASE-REAL-01" && request.mode==="OFFLINE_SOURCE_ONLY","REQUEST_ID");
 check(/^[a-f0-9]{40}$/.test(request.source_commit),"IMMUTABLE_SOURCE_COMMIT");
 check(valid(request.lead,3,64) && /^[a-z][a-z0-9-]+$/.test(request.lead),"LEAD_ID");
 check(fields(request.permissions,["execute","write_repo","network","spend","merge","render","publish","schedule","external_connectors"]),"PERMISSIONS_FIELDS");
 check(Object.values(request.permissions).every(x=>x===false),"PERMISSIONS_NOT_ALL_DENIED");
 check(Array.isArray(request.tasks) && request.tasks.length>=2 && request.tasks.length<=4,"TASK_BOUNDS");
 const ids=new Set(), agents=new Set([request.lead]);let makers=0,reviewers=0;
 const tasks=request.tasks.map(t=>{
  check(fields(t,["id","agent","role","objective","source_path","must_verify"]),"TASK_FIELDS");
  check(/^D[1-4]$/.test(t.id)&&!ids.has(t.id),"DUPLICATE_OR_INVALID_TASK_ID");ids.add(t.id);
  check(valid(t.agent,2,64)&&/^[a-z][a-z0-9-]+$/.test(t.agent)&&!agents.has(t.agent),"AGENT_SEPARATION");agents.add(t.agent);
  check(["source_proposal","independent_reviewer","evidence_auditor"].includes(t.role),"ROLE");
  if(t.role==="source_proposal")makers++;if(t.role==="independent_reviewer")reviewers++;
  check(valid(t.objective,12,240),"OBJECTIVE");
  check(/^(?:experiments|editorial|cases|docs|contracts)\/[a-zA-Z0-9_.\/-]{1,180}$/.test(t.source_path)&&!t.source_path.includes(".."),"SOURCE_PATH");
  check(Array.isArray(t.must_verify)&&t.must_verify.length>=1&&t.must_verify.length<=6&&t.must_verify.every(x=>valid(x,6,150)),"REVIEW_QUESTIONS");
  return {...t,must_verify:[...t.must_verify],execution_authority:false,edit_authority:false,approval_authority:false,status:"NOT_DISPATCHED",evidence_refs:[]};
 });
 check(makers>0&&reviewers>0,"MAKER_CHECKER_REQUIRED");
 return {version:"engineyt-source-delegation-plan/0.1",case_id:request.case_id,source_commit:request.source_commit,lead:request.lead,workflow:"RESEARCH_DOCUMENTARY_NO_EXECUTION",tasks,
  no_dispatch:true,no_backend_scheduler:true,no_auto_retry:true,no_live_tools:true,no_implicit_approvals:true,reported_success_does_not_change_gates:true,
  required_human_approval:"SEPARATE_FORMAL_GATE_NOT_THIS_PROTOCOL",hard_gates:[...GATES],final_status:"PLAN_ONLY_UNDISPATCHED"};
}
export function reviewDelegation(plan,request){
 const errors=[];const ok=(p,k)=>{if(!p)errors.push(k);};
 ok(plan?.version==="engineyt-source-delegation-plan/0.1","PLAN_VERSION");
 ok(plan?.case_id===request?.case_id&&plan?.source_commit===request?.source_commit&&plan?.lead===request?.lead,"PLAN_SOURCE_BINDING");
 ok(plan?.workflow==="RESEARCH_DOCUMENTARY_NO_EXECUTION"&&plan?.final_status==="PLAN_ONLY_UNDISPATCHED","PLAN_STATUS");
 for(const k of ["no_dispatch","no_backend_scheduler","no_auto_retry","no_live_tools","no_implicit_approvals","reported_success_does_not_change_gates"])ok(plan?.[k]===true,"NO_AUTHORITY_"+k);
 ok(plan?.required_human_approval==="SEPARATE_FORMAL_GATE_NOT_THIS_PROTOCOL","APPROVAL_BOUNDARY");
 ok(JSON.stringify(plan?.hard_gates)===JSON.stringify(GATES),"HARD_GATES");
 ok(Array.isArray(plan?.tasks)&&plan.tasks.length===request?.tasks?.length,"TASK_COUNT");
 if(Array.isArray(plan?.tasks))for(let i=0;i<plan.tasks.length;i++){
  const t=plan.tasks[i],r=request?.tasks?.[i];
  ok(t?.id===r?.id&&t?.agent===r?.agent&&t?.role===r?.role&&t?.objective===r?.objective,"TASK_BIND_"+i);
  ok(t?.source_path===r?.source_path&&JSON.stringify(t?.must_verify)===JSON.stringify(r?.must_verify),"TASK_SOURCE_"+i);
  ok(t?.execution_authority===false&&t?.edit_authority===false&&t?.approval_authority===false&&t?.status==="NOT_DISPATCHED"&&Array.isArray(t?.evidence_refs)&&t.evidence_refs.length===0,"TASK_PERMISSIONS_"+i);
 }
 return {version:"engineyt-independent-delegation-review/0.1",verdict:errors.length?"FAIL_CLOSED":"PASS_LIMITED_STATIC_PLAN_ONLY",authorizes_dispatch:false,authorizes_execution:false,authorizes_release:false,errors};
}
export function assessDelegationReceipts(plan,receipts){
 check(plan?.version==="engineyt-source-delegation-plan/0.1"&&plan?.no_dispatch===true&&plan?.final_status==="PLAN_ONLY_UNDISPATCHED"&&JSON.stringify(plan?.hard_gates)===JSON.stringify(GATES),"PLAN_GATE_CHECK");
 check(Array.isArray(receipts)&&receipts.length<=plan.tasks.length,"RECEIPT_BOUNDS");
 const known=new Map(plan.tasks.map(t=>[t.id,t])),seen=new Set(),overview=[];
 for(const r of receipts){
  check(fields(r,["task_id","agent","status","source_commit","evidence_ids","claim","recorded_as"]),"RECEIPT_FIELDS");
  const t=known.get(r.task_id);
  check(t&&!seen.has(r.task_id)&&t.agent===r.agent&&r.source_commit===plan.source_commit,"RECEIPT_PROVENANCE");seen.add(r.task_id);
  check(["PROPOSED","BLOCKED","FAILED"].includes(r.status),"RECEIPT_STATUS");
  check(r.recorded_as==="UNVERIFIED_THIRD_PARTY_DATA_NOT_AUTHORITY","TRUST");
  check(valid(r.claim,10,280),"CLAIM");
  check(Array.isArray(r.evidence_ids)&&r.evidence_ids.length<=5&&r.evidence_ids.every(x=>/^EV-[A-Z0-9-]{4,50}$/.test(x)),"EVIDENCE_IDS");
  overview.push({task_id:r.task_id,agent:r.agent,role:t.role,status:r.status,evidence_ids:[...r.evidence_ids],claim_treated_as_data:true,source_review_required:true,execution_authority:false});
 }
 const missing=plan.tasks.filter(t=>!seen.has(t.id)).map(t=>t.id);
 return {version:"engineyt-delegation-receipt-assessment/0.1",case_id:plan.case_id,classification:"UNTRUSTED_RECEIPTS_NO_RUN_WAS_STARTED",completed_and_qualified:false,
 manual_independent_evidence_check_required:true,all_receipts_present:missing.length===0,missing_task_ids:missing,
 reported_blocked_or_failed_task_ids:overview.filter(x=>x.status!=="PROPOSED").map(x=>x.task_id),source_commit:plan.source_commit,receipts:overview,
 release_authorized:false,merge_authorized:false,render_authorized:false,publish_authorized:false,hard_gates:[...GATES],result:"NOT_A_GATE_DECISION"};
}
