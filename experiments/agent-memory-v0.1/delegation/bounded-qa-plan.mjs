// Source-only budget/QA record protocol. No agent execution, shell, network, scheduling or retries.
const qaGates=["E5B4D_NO_GO_MODEL_M_POLICY_B","R6_PENDING","IVV_GLOBAL_NOT_APPROVED","CASE_APPROVAL_NOT_APPROVED","NO_RENDER_NO_UPLOAD"];
function qaPlain(v){return v!==null&&typeof v==="object"&&!Array.isArray(v)}
function qaExact(v,fields){return qaPlain(v)&&Object.keys(v).sort().join("|")===fields.slice().sort().join("|")}
function qaAssert(ok,code){if(!ok)throw Error("QA_REJECT:"+code)}
export function configureQa(plan,budget){
 qaAssert(plan?.version==="engineyt-source-delegation-plan/0.1"&&plan?.case_id==="ED-CASE-REAL-01"&&plan?.final_status==="PLAN_ONLY_UNDISPATCHED"&&plan?.no_dispatch===true&&plan?.no_auto_retry===true,"SOURCE_PLAN");
 qaAssert(JSON.stringify(plan?.hard_gates)===JSON.stringify(qaGates)&&/^[0-9a-f]{40}$/.test(plan?.source_commit??""),"SOURCE_GATES");
 qaAssert(Array.isArray(plan?.tasks)&&plan.tasks.length>=2&&plan.tasks.length<=4&&plan.tasks.every(t=>t?.status==="NOT_DISPATCHED"&&t.execution_authority===false&&t.approval_authority===false),"TASK_STATUS");
 qaAssert(qaExact(budget,["version","source_commit","max_submissions_per_task","max_total_submissions","auto_retry","launch_agents","network_access","merge","render","publish"]),"BUDGET_FIELDS");
 qaAssert(budget.version==="engineyt-source-qa-budget/0.1"&&budget.source_commit===plan.source_commit,"BUDGET_REVISION");
 for(const k of ["auto_retry","launch_agents","network_access","merge","render","publish"])qaAssert(budget[k]===false,"UNAUTHORIZED_"+k);
 qaAssert(Number.isInteger(budget.max_submissions_per_task)&&budget.max_submissions_per_task>=1&&budget.max_submissions_per_task<=2,"PER_TASK_CAP");
 qaAssert(Number.isInteger(budget.max_total_submissions)&&budget.max_total_submissions>=plan.tasks.length&&budget.max_total_submissions<=8&&budget.max_total_submissions<=plan.tasks.length*budget.max_submissions_per_task,"TOTAL_CAP");
 return {
  version:"engineyt-source-qa-contract/0.1",
  case_id:plan.case_id,source_commit:plan.source_commit,
  named_task_ids:plan.tasks.map(t=>t.id),
  max_submissions_per_task:budget.max_submissions_per_task,
  max_total_submissions:budget.max_total_submissions,
  permitted_observation_only:true,
  launches_agents:false,retries_tasks:false,consumes_api_tokens:false,changes_files:false,
  approves_merge:false,approves_render:false,approves_publish:false,
  human_escalation_required_for_failure:true,
  hard_gates:[...qaGates],
  status:"DOCUMENTARY_BUDGET_NOT_AN_EXECUTOR"
 };
}
export function assessQaLog(contract,plan,log){
 qaAssert(contract?.version==="engineyt-source-qa-contract/0.1"&&contract?.case_id===plan?.case_id&&contract?.source_commit===plan?.source_commit&&contract?.status==="DOCUMENTARY_BUDGET_NOT_AN_EXECUTOR","CONTRACT_SOURCE");
 qaAssert(JSON.stringify(contract?.hard_gates)===JSON.stringify(qaGates)&&contract?.permitted_observation_only===true&&contract?.launches_agents===false&&contract?.retries_tasks===false&&contract?.approves_merge===false&&contract?.approves_render===false&&contract?.approves_publish===false,"FROZEN_GATES");
 qaAssert(Number.isInteger(contract.max_submissions_per_task)&&contract.max_submissions_per_task>=1&&contract.max_submissions_per_task<=2&&Number.isInteger(contract.max_total_submissions)&&contract.max_total_submissions>=plan.tasks.length&&contract.max_total_submissions<=8,"RECEIPT_LIMITS");
 qaAssert(JSON.stringify(contract.named_task_ids)===JSON.stringify(plan.tasks.map(t=>t.id)),"TASK_BINDING");
 qaAssert(Array.isArray(log)&&log.length<=contract.max_total_submissions,"LOG_BOUNDS");
 const known=new Map(plan.tasks.map(t=>[t.id,t])),last=new Map(),rows=[];
 for(const item of log){
  qaAssert(qaExact(item,["task_id","reporter","source_commit","attempt","outcome","evidence_ids","claim","trust"]),"LOG_FIELDS");
  const task=known.get(item.task_id),previous=last.get(item.task_id);
  qaAssert(task&&item.reporter===task.agent&&item.source_commit===plan.source_commit,"LOG_PROVENANCE");
  qaAssert(Number.isInteger(item.attempt)&&item.attempt===(previous?previous.attempt+1:1)&&item.attempt<=contract.max_submissions_per_task,"ATTEMPT_SEQUENCE");
  qaAssert(!previous||previous.outcome==="REPORTED_FAILURE","NO_RESUBMISSION_AFTER_NONFAILURE");
  qaAssert(["CLAIMED_PASS","REPORTED_FAILURE","BLOCKED","TIMEOUT","NEEDS_REVIEW"].includes(item.outcome),"LOG_OUTCOME");
  qaAssert(item.trust==="UNVERIFIED_AGENT_REPORT_NO_AUTHORITY","LOG_TRUST");
  qaAssert(typeof item.claim==="string"&&item.claim.trim().length>=10&&item.claim.length<=280,"LOG_CLAIM");
  qaAssert(Array.isArray(item.evidence_ids)&&item.evidence_ids.length<=5&&item.evidence_ids.every(v=>typeof v==="string"&&/^EV-[A-Z0-9-]{4,48}$/.test(v)),"LOG_EVIDENCE");
  if(item.outcome==="CLAIMED_PASS")qaAssert(item.evidence_ids.length>0,"PASS_REQUIRES_POINTER");
  const rec={task_id:item.task_id,attempt:item.attempt,outcome:item.outcome,reported_by:item.reporter,evidence_ids:[...item.evidence_ids],trust:"UNVERIFIED_AGENT_REPORT_NO_AUTHORITY"};
  rows.push(rec);last.set(item.task_id,item);
 }
 const missing=plan.tasks.filter(t=>!last.has(t.id)).map(t=>t.id);
 const escalation=plan.tasks.filter(t=>{
  const x=last.get(t.id);
  return !!x&&(["REPORTED_FAILURE","BLOCKED","TIMEOUT","NEEDS_REVIEW"].includes(x.outcome));
 }).map(t=>t.id);
 return {
  version:"engineyt-source-qa-assessment/0.1",case_id:plan.case_id,source_commit:plan.source_commit,
  state:escalation.length?"ESCALATE_HUMAN_NO_AUTO_RETRY":missing.length?"INCOMPLETE_UNVERIFIED":"COLLECTED_CLAIMS_AWAIT_INDEPENDENT_VERIFICATION",
  logged_submissions:log.length,max_submissions:contract.max_total_submissions,
  remaining_submission_slots:contract.max_total_submissions-log.length,
  missing_task_ids:missing,escalation_task_ids:escalation,
  unverified_claims:rows,tests_independently_verified:false,actual_agents_dispatched:false,
  permitted_next_action:"MANUAL_INDEPENDENT_EVIDENCE_CHECK_ONLY",
  action_or_retry_authorized:false,merge_authorized:false,render_authorized:false,publish_authorized:false,
  hard_gates:[...qaGates]
 };
}
export function reviewQaAssessment(report,contract,plan){
 const errors=[],check=(p,k)=>{if(!p)errors.push(k)};
 check(report?.version==="engineyt-source-qa-assessment/0.1"&&report?.case_id===plan?.case_id&&report?.source_commit===plan?.source_commit,"BINDING");
 check(["ESCALATE_HUMAN_NO_AUTO_RETRY","INCOMPLETE_UNVERIFIED","COLLECTED_CLAIMS_AWAIT_INDEPENDENT_VERIFICATION"].includes(report?.state),"STATE");
 check(report?.actual_agents_dispatched===false&&report?.tests_independently_verified===false,"EVIDENCE_SCOPE");
 for(const k of ["action_or_retry_authorized","merge_authorized","render_authorized","publish_authorized"])check(report?.[k]===false,"NO_AUTH_"+k);
 check(report?.permitted_next_action==="MANUAL_INDEPENDENT_EVIDENCE_CHECK_ONLY","NEXT_ACTION");
 check(JSON.stringify(report?.hard_gates)===JSON.stringify(qaGates),"GATES");
 check(Number.isInteger(report?.logged_submissions)&&Number.isInteger(report?.remaining_submission_slots)&&report?.logged_submissions+report?.remaining_submission_slots===contract?.max_total_submissions,"COUNT");
 check(Array.isArray(report?.unverified_claims)&&report.unverified_claims.length===report?.logged_submissions&&report.unverified_claims.every(x=>x.trust==="UNVERIFIED_AGENT_REPORT_NO_AUTHORITY"),"LOG_TRUST");
 check(Array.isArray(report?.missing_task_ids)&&Array.isArray(report?.escalation_task_ids),"TASK_TRACK");
 return {version:"engineyt-source-qa-independent-sanity-review/0.1",verdict:errors.length?"FAIL_CLOSED":"PASS_LIMITED_STATIC_ONLY",execution_qualification:false,errors};
}
