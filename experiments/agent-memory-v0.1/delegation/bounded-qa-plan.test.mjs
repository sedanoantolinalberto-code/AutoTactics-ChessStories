import test from "node:test";
import assert from "node:assert/strict";
import {configureQa,assessQaLog,reviewQaAssessment} from "./bounded-qa-plan.mjs";
const gates=["E5B4D_NO_GO_MODEL_M_POLICY_B","R6_PENDING","IVV_GLOBAL_NOT_APPROVED","CASE_APPROVAL_NOT_APPROVED","NO_RENDER_NO_UPLOAD"];
const commit="6761433a7f0661a57e6b85c120fbd27ebd0a4cc1";
const plan=()=>({version:"engineyt-source-delegation-plan/0.1",case_id:"ED-CASE-REAL-01",source_commit:commit,no_dispatch:true,no_auto_retry:true,final_status:"PLAN_ONLY_UNDISPATCHED",hard_gates:[...gates],tasks:[
{id:"D1",agent:"maker",status:"NOT_DISPATCHED",execution_authority:false,approval_authority:false},
{id:"D2",agent:"checker",status:"NOT_DISPATCHED",execution_authority:false,approval_authority:false}
]});
const budget=()=>({version:"engineyt-source-qa-budget/0.1",source_commit:commit,max_submissions_per_task:2,max_total_submissions:4,auto_retry:false,launch_agents:false,network_access:false,merge:false,render:false,publish:false});
const receipt=(task,attempt,outcome="CLAIMED_PASS")=>({task_id:task.id,reporter:task.agent,source_commit:commit,attempt,outcome,evidence_ids:outcome==="CLAIMED_PASS"?["EV-CASE-01"]:[],claim:"Documentary observation only, awaits independent verification",trust:"UNVERIFIED_AGENT_REPORT_NO_AUTHORITY"});
const rejected=(action,code)=>assert.throws(action,new RegExp(code));
test("a budget cannot start an agent or advance release gates",()=>{
 const a=configureQa(plan(),budget());
 assert.equal(a.launches_agents,false);
 assert.equal(a.retries_tasks,false);
 assert.equal(a.approves_merge,false);
 assert.deepEqual(a.hard_gates,gates);
});
test("empty logs are incomplete rather than silently successful",()=>{
 const p=plan(),b=configureQa(p,budget()),r=assessQaLog(b,p,[]);
 assert.equal(r.state,"INCOMPLETE_UNVERIFIED");
 assert.deepEqual(r.missing_task_ids,["D1","D2"]);
});
test("independent sanity review is limited static only",()=>{
 const p=plan(),b=configureQa(p,budget()),r=assessQaLog(b,p,[]);
 assert.equal(reviewQaAssessment(r,b,p).verdict,"PASS_LIMITED_STATIC_ONLY");
});
test("reject automatic retry switch",()=>{
 const b=budget();b.auto_retry=true;
 rejected(()=>configureQa(plan(),b),"QA_REJECT:UNAUTHORIZED_auto_retry");
});
test("reject actual agent launch switch",()=>{
 const b=budget();b.launch_agents=true;
 rejected(()=>configureQa(plan(),b),"QA_REJECT:UNAUTHORIZED_launch_agents");
});
test("reject more than two documentary attempts per task",()=>{
 const b=budget();b.max_submissions_per_task=30;
 rejected(()=>configureQa(plan(),b),"QA_REJECT:PER_TASK_CAP");
});
test("reject extra executable command field",()=>{
 const b=budget();b.shell_command="danger";
 rejected(()=>configureQa(plan(),b),"QA_REJECT:BUDGET_FIELDS");
});
test("reported failure always escalates for manual review",()=>{
 const p=plan(),b=configureQa(p,budget());
 const r=assessQaLog(b,p,[receipt(p.tasks[0],1,"REPORTED_FAILURE")]);
 assert.equal(r.state,"ESCALATE_HUMAN_NO_AUTO_RETRY");
 assert.equal(r.action_or_retry_authorized,false);
});
test("two claimed passes still cannot approve a merge",()=>{
 const p=plan(),b=configureQa(p,budget());
 const r=assessQaLog(b,p,p.tasks.map(t=>receipt(t,1)));
 assert.equal(r.state,"COLLECTED_CLAIMS_AWAIT_INDEPENDENT_VERIFICATION");
 assert.equal(r.merge_authorized,false);
});
test("a stale source commit is rejected",()=>{
 const p=plan(),b=configureQa(p,budget()),r=receipt(p.tasks[0],1);r.source_commit="0".repeat(40);
 rejected(()=>assessQaLog(b,p,[r]),"QA_REJECT:LOG_PROVENANCE");
});
test("duplicate attempt numbers are rejected",()=>{
 const p=plan(),b=configureQa(p,budget()),r=receipt(p.tasks[0],1,"REPORTED_FAILURE");
 rejected(()=>assessQaLog(b,p,[r,r]),"QA_REJECT:ATTEMPT_SEQUENCE");
});
test("resubmission after a claimed pass is rejected",()=>{
 const p=plan(),b=configureQa(p,budget());
 rejected(()=>assessQaLog(b,p,[receipt(p.tasks[0],1),receipt(p.tasks[0],2)]),"QA_REJECT:NO_RESUBMISSION_AFTER_NONFAILURE");
});
test("a claimed pass without a source pointer is rejected",()=>{
 const p=plan(),b=configureQa(p,budget()),r=receipt(p.tasks[0],1);r.evidence_ids=[];
 rejected(()=>assessQaLog(b,p,[r]),"QA_REJECT:PASS_REQUIRES_POINTER");
});
test("receipt from an unrelated reporter is rejected",()=>{
 const p=plan(),b=configureQa(p,budget()),r=receipt(p.tasks[0],1);r.reporter="fake-reviewer";
 rejected(()=>assessQaLog(b,p,[r]),"QA_REJECT:LOG_PROVENANCE");
});
test("documented resubmission after failure is still not automated",()=>{
 const p=plan(),b=configureQa(p,budget());
 const r=assessQaLog(b,p,[receipt(p.tasks[0],1,"REPORTED_FAILURE"),receipt(p.tasks[0],2)]);
 assert.equal(r.state,"INCOMPLETE_UNVERIFIED");
 assert.equal(r.action_or_retry_authorized,false);
});
test("independent sanity check rejects forged publish authority",()=>{
 const p=plan(),b=configureQa(p,budget()),r=assessQaLog(b,p,[]);
 r.publish_authorized=true;
 assert.equal(reviewQaAssessment(r,b,p).verdict,"FAIL_CLOSED");
});
test("independent sanity check rejects claimed test qualification",()=>{
 const p=plan(),b=configureQa(p,budget()),r=assessQaLog(b,p,[]);
 r.tests_independently_verified=true;
 assert.equal(reviewQaAssessment(r,b,p).verdict,"FAIL_CLOSED");
});
