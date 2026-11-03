import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {compileVariants,reviewVariantPlan} from "./compile-variant-manifest.mjs";
const load=async(path)=>JSON.parse(await readFile(new URL(path,import.meta.url),"utf8"));
const inputs=async()=>({
 handoff:await load("../example-ep01-unrenderable.json"),
 spec:await load("./spec.unapproved.json")
});
const copy=x=>structuredClone(x);
test("18 purely documentary variants",async()=>{
 const {handoff,spec}=await inputs();const p=compileVariants(handoff,spec);
 assert.equal(p.variant_count,18);assert.equal(p.variants.length,18);
 assert.equal(p.completed_exports,0);assert.equal(p.assets_generated,0);
});
test("independent static review is only limited PASS",async()=>{
 const {handoff,spec}=await inputs();
 assert.equal(reviewVariantPlan(compileVariants(handoff,spec),handoff,spec).verdict,"PASS_LIMITED_STATIC_ONLY");
});
test("source truth labels and S08 blockage preserved",async()=>{
 const {handoff,spec}=await inputs();const p=compileVariants(handoff,spec);
 assert.equal(p.truth_snapshot[7].render_gate,"BLOCKED_T11_TECHNICAL_SOURCE");
 assert.ok(p.truth_snapshot[7].mandatory_disclosures.some(x=>x.event_id==="T10"&&x.label==="SE OMITEN JUGADAS REALES"));
});
test("45-second source duration is only editorial and unmeasured",async()=>{
 const {handoff,spec}=await inputs();const p=compileVariants(handoff,spec);
 assert.equal(p.source_duration_target_ms,45000);
 assert.equal(p.source_duration_unmeasured,true);
 assert.ok(p.variants.every(v=>v.output_duration_measured_ms===null));
});
test("no generated movie or shell commands exist",async()=>{
 const {handoff,spec}=await inputs();const p=compileVariants(handoff,spec);
 assert.ok(p.variants.every(v=>v.output_media_path===null&&v.ffmpeg_command===null&&!v.render_authorized));
});
test("false rights clearance is rejected",async()=>{
 const {handoff,spec}=await inputs();spec.asset_rights_verified=true;
 assert.throws(()=>compileVariants(handoff,spec),/VARIANT_REJECT:SPEC_UNQUALIFIED_asset_rights_verified/);
});
test("historical counterfactual relabeling is rejected",async()=>{
 const {handoff,spec}=await inputs();handoff.shots[5].source_events[1].mandatory_label="PARTIDA REAL";
 assert.throws(()=>compileVariants(handoff,spec),/VARIANT_REJECT:SOURCE_TRUTH_5/);
});
test("S08/T11 lock cannot be cleared by a new manifest",async()=>{
 const {handoff,spec}=await inputs();handoff.shots[7].shot_quality_gate="NOT_REVIEWED";
 assert.throws(()=>compileVariants(handoff,spec),/VARIANT_REJECT:S08_T11_BLOCKED/);
});
test("any source render authorization is rejected",async()=>{
 const {handoff,spec}=await inputs();handoff.media_render_authorized=true;
 assert.throws(()=>compileVariants(handoff,spec),/VARIANT_REJECT:SOURCE_GATE_media_render_authorized/);
});
test("independent review flags invented MP4 path",async()=>{
 const {handoff,spec}=await inputs();const p=compileVariants(handoff,spec);
 p.variants[0].output_media_path="rendered.mp4";
 assert.equal(reviewVariantPlan(p,handoff,spec).verdict,"FAIL_CLOSED");
});
test("independent review flags omitted mandatory hypothetical label",async()=>{
 const {handoff,spec}=await inputs();const p=compileVariants(handoff,spec);
 p.truth_snapshot[5].mandatory_disclosures[1].label="PARTIDA REAL";
 assert.equal(reviewVariantPlan(p,handoff,spec).verdict,"FAIL_CLOSED");
});
test("independent review flags unsupported seek(t) guarantee",async()=>{
 const {handoff,spec}=await inputs();const p=compileVariants(handoff,spec);
 p.deterministic_frame_seek_demonstrated=true;
 assert.equal(reviewVariantPlan(p,handoff,spec).verdict,"FAIL_CLOSED");
});
test("unapproved external command keys rejected",async()=>{
 const {handoff,spec}=await inputs();spec.shell_command="run";
 assert.throws(()=>compileVariants(handoff,spec),/VARIANT_REJECT:SPEC_FIELDS/);
});
