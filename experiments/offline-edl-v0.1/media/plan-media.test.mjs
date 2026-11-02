import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { compileDraft } from "../src/compile-draft.mjs";
import { planMediaCapabilities, reviewMediaCapabilities } from "../media/plan-media.mjs";

const base = new URL("../../../", import.meta.url);
const read = async path => JSON.parse(await readFile(new URL(path,base),"utf8"));
const inputs = async () => {
  const [shotplan,semantic,precedence,registry] = await Promise.all([
    read("editorial/EP01-45S-SHOTPLAN-DRAFT.json"),
    read("cases/ED-CASE-REAL-01.v0.2.json"),
    read("editorial/EP01-AV01-45S-EVENT-STATE-PRECEDENCE.v0.1.json"),
    read("experiments/offline-edl-v0.1/media/capability-registry.v0.1.json")
  ]);
  return {edl:compileDraft(shotplan,semantic,precedence),registry};
};
const copy=x=>structuredClone(x);
test("11 tools and 9 shots are documentary-only",async()=>{
 const {edl,registry}=await inputs();const p=planMediaCapabilities(edl,registry);
 assert.equal(p.capability_map.length,11);
 assert.equal(p.phases.length,9);
 assert.equal(p.media_processing_authorized,false);
 assert.equal(p.all_third_party_dependencies_uninstalled,true);
 assert.equal(p.proof_of_determinism,false);
});
test("independent review is PASS_LIMITED_STATIC_ONLY",async()=>{
 const {edl,registry}=await inputs();
 assert.equal(reviewMediaCapabilities(planMediaCapabilities(edl,registry),edl,registry).verdict,"PASS_LIMITED_SOURCE_ONLY");
});
test("S08/T11 technical-only visual state remains blocked",async()=>{
 const {edl,registry}=await inputs();const p=planMediaCapabilities(edl,registry);
 assert.equal(p.phases[7].requested_capabilities.length,0);
 assert.equal(p.phases[7].if_blocked_reason,"T11_TECHNICAL_ONLY_VISUAL_NOT_ADJUDICATED");
});
test("no media, commands, or actual frames are introduced",async()=>{
 const {edl,registry}=await inputs();const p=planMediaCapabilities(edl,registry);
 for(const phase of p.phases){
   assert.equal(phase.actual_media,null);
   assert.equal(phase.actual_frames,null);
   assert.equal(phase.tool_command,null);
   assert.equal(phase.target_unmeasured,true);
 }
});
test("tool install/exec switch rejected",async()=>{
 const {edl,registry}=await inputs();registry.execute_tools=true;
 assert.throws(()=>planMediaCapabilities(edl,registry),/CAP_REJECT:REGISTRY_SCOPE/);
});
test("licensing review cannot be skipped",async()=>{
 const {edl,registry}=await inputs();registry.tools[4].license_review_required=false;
 assert.throws(()=>planMediaCapabilities(edl,registry),/CAP_REJECT:TOOL_GATES/);
});
test("forged EDL render approval rejected",async()=>{
 const {edl,registry}=await inputs();edl.render_authorized=true;
 assert.throws(()=>planMediaCapabilities(edl,registry),/CAP_REJECT:EDL_GATE_render_authorized/);
});
test("independent reviewer detects historical label change",async()=>{
 const {edl,registry}=await inputs();const p=planMediaCapabilities(edl,registry);
 p.phases[5].source_disclosures[1]="PARTIDA REAL";
 assert.equal(reviewMediaCapabilities(p,edl,registry).verdict,"FAIL_CLOSED");
});
test("independent reviewer detects fake rendered frames",async()=>{
 const {edl,registry}=await inputs();const p=planMediaCapabilities(edl,registry);
 p.phases[0].actual_frames=300;
 assert.equal(reviewMediaCapabilities(p,edl,registry).verdict,"FAIL_CLOSED");
});
test("independent reviewer detects visual staging before adjudication",async()=>{
 const {edl,registry}=await inputs();const p=planMediaCapabilities(edl,registry);
 p.phases[7].requested_capabilities=["html-motion"];
 assert.equal(reviewMediaCapabilities(p,edl,registry).verdict,"FAIL_CLOSED");
});
