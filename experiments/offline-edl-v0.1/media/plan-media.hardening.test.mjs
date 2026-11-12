import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { compileDraft } from "../src/compile-draft.mjs";
import { planMediaCapabilities, reviewMediaCapabilities } from "./plan-media.mjs";

const base = new URL("../../../", import.meta.url);
const read = async path => JSON.parse(await readFile(new URL(path, base), "utf8"));
async function fixture(){
 const [shotplan, semantic, precedence, registry] = await Promise.all([
  read("editorial/EP01-45S-SHOTPLAN-DRAFT.json"),
  read("cases/ED-CASE-REAL-01.v0.2.json"),
  read("editorial/EP01-AV01-45S-EVENT-STATE-PRECEDENCE.v0.1.json"),
  read("experiments/offline-edl-v0.1/media/capability-registry.v0.1.json")
 ]);
 const edl=compileDraft(shotplan, semantic, precedence);
 return {edl, registry, plan:planMediaCapabilities(edl, registry)};
}
async function rejects(name, mutate){
 test(name, async()=>{
  const {edl, registry, plan}=await fixture();
  mutate(plan,edl,registry);
  const review=reviewMediaCapabilities(plan,edl,registry);
  assert.equal(review.verdict, "FAIL_CLOSED");
  assert.ok(review.problems.length>0);
 });
}
test("baseline remains source-only PASS_LIMITED",async()=>{
 const {edl,registry,plan}=await fixture();
 assert.equal(reviewMediaCapabilities(plan,edl,registry).verdict,"PASS_LIMITED_SOURCE_ONLY");
});
await rejects("forged render authorization rejected",p=>{p.render_authorized=true});
await rejects("forged execution authorization rejected",p=>{p.execution_authorized=true});
await rejects("unregistered capability in S01 rejected",p=>{p.phases[0].requested_capabilities=["execute-shell"]});
await rejects("registry tool identity substituted rejected",p=>{p.capability_map[0].id="different-provider"});
await rejects("arbitrary review dependencies rejected",p=>{p.required_next_review=["EVERYTHING_APPROVED"]});
await rejects("technical-only board substitution rejected",p=>{p.phases[0].source_board="V-PRE-EV2"});
await rejects("mandatory blockers removed rejected",p=>{p.hard_blockers=p.hard_blockers.filter(x=>x!=="R6_RIGHTS_PENDING")});
await rejects("shortened plan and EDL rejected", (p,e)=>{p.phases.pop();e.shots.pop()});
await rejects("unverified phase status rejected",p=>{p.phases[0].phase_timing_status="VERIFIED"});
await rejects("numeric render authorization rejected",p=>{p.render_authorized=1});
await rejects("unexpected top-level executable plan field rejected",p=>{p.execute_command="rm nothing"});
await rejects("unexpected phase subprocess request rejected",p=>{p.phases[0].execute_command="echo test"});
await rejects("unexpected tool privilege flag rejected",p=>{p.capability_map[0].can_execute=true});
await rejects("untrusted registry runtime switch rejected",(_p,_e,r)=>{r.execute_tools=true});
await rejects("forged EDL runtime gate rejected",(_p,e)=>{e.render_authorized=true});


await rejects("registry license spoof rejected",(_p,_e,r)=>{r.tools[0].license_review_required=false});
await rejects("registry runtime spoof rejected",(_p,_e,r)=>{r.tools[0].runtime_qualification="PASS"});
await rejects("registry capability and output map spoof rejected",(p,_e,r)=>{r.tools[0].capability="execute-shell";p.capability_map[0].capability="execute-shell"});
await rejects("registry URL and output map spoof rejected",(p,_e,r)=>{r.tools[0].upstream_url="file:///tmp/evil";p.capability_map[0].upstream_url="file:///tmp/evil"});
await rejects("forged EDL shot visual approval rejected",(_p,e)=>{e.shots[0].visual_review="APPROVED"});
await rejects("forged EDL render instruction rejected",(_p,e)=>{e.shots[0].render_instruction="ffmpeg ..."});
await rejects("forged EDL rights clearance rejected",(_p,e)=>{e.rights_clearance_verified=true});
await rejects("forged EDL provenance rejected",(_p,e)=>{e.source_revision_scope="CERTIFIED_BYTE_EXACT"});
await rejects("forged EDL source pin rejected",(_p,e)=>{e.source_revisions.shotplan.observed_git_blob="fake"});
await rejects("missing required EDL blocker rejected",(p,e)=>{p.hard_blockers.splice(1,1);e.hard_blockers.splice(1,1)});
await rejects("null phase rejected without crash",p=>{p.phases[0]=null});

await rejects("EDL timeline cannot be jointly retimed",(p,e)=>{e.shots[0].target_end_ms=9000;p.phases[0].target_end_ms=9000});
await rejects("EDL event ID and plan cannot be jointly forged",(p,e)=>{e.shots[0].event_ids[0]="T99";p.phases[0].event_ids[0]="T99"});
await rejects("EDL board and plan cannot be jointly forged",(p,e)=>{e.shots[0].declared_terminal_board="FABRICATED";p.phases[0].source_board="FABRICATED"});
await rejects("truth-label and plan cannot be jointly forged",(p,e)=>{e.shots[0].truth_annotations[0].required_display_label="PARTIDA FICTICIA";p.phases[0].source_disclosures[0]="PARTIDA FICTICIA"});
await rejects("EDL duration cannot be forged",(_p,e)=>{e.target_duration_ms=1000});
await rejects("EDL source cannot carry executable extra",(_p,e)=>{e.execute_tools=true});
await rejects("EDL shot source cannot carry hidden render command",(_p,e)=>{e.shots[0].tool_command="echo forbidden"});
