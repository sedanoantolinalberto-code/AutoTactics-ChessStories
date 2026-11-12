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
