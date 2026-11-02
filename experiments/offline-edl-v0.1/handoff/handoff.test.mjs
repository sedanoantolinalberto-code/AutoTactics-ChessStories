import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {compileDraft} from "../src/compile-draft.mjs";
import {createDocumentaryHandoff,independentReviewHandoff} from "./build-handoff.mjs";
const root=new URL("../../../",import.meta.url);
const rd=async p=>JSON.parse(await readFile(new URL(p,root),"utf8"));
const inputs=async()=>{
 const [shotplan,semantic,precedence,config]=await Promise.all([
  rd("editorial/EP01-45S-SHOTPLAN-DRAFT.json"),
  rd("cases/ED-CASE-REAL-01.v0.2.json"),
  rd("editorial/EP01-AV01-45S-EVENT-STATE-PRECEDENCE.v0.1.json"),
  rd("experiments/offline-edl-v0.1/handoff/config.unapproved.json")
 ]);
 return {edl:compileDraft(shotplan,semantic,precedence),config};
};
test("nine-shot 45s editorial target does not imply media readiness",async()=>{
 const {edl,config}=await inputs();
 const h=createDocumentaryHandoff(edl,config);
 assert.equal(h.shots.length,9);
 assert.equal(h.editorial_target_duration_ms,45000);
 assert.equal(h.measured_final_duration_ms,null);
 assert.equal(h.media_render_authorized,false);
});
test("independent review is limited source-only",async()=>{
 const {edl,config}=await inputs();
 const h=createDocumentaryHandoff(edl,config);
 assert.equal(independentReviewHandoff(h,edl).status,"PASS_LIMITED_STATIC_ONLY");
});
test("all eight production stages remain unverified",async()=>{
 const {edl,config}=await inputs();
 const h=createDocumentaryHandoff(edl,config);
 assert.equal(h.stages.length,8);
 assert.ok(h.stages.every(s=>!s.can_advance&&s.status==="NOT_VERIFIED"));
});
test("S08/T11 remains blocked for source-board treatment",async()=>{
 const {edl,config}=await inputs();
 const h=createDocumentaryHandoff(edl,config);
 assert.equal(h.shots[7].shot_quality_gate,"BLOCKED_T11_TECHNICAL_SOURCE");
});
test("CapCut and vendor execution are impossible by output contract",async()=>{
 const {edl,config}=await inputs();
 const h=createDocumentaryHandoff(edl,config);
 assert.ok(h.shots.every(s=>s.capcut_native_project_path===null&&s.direct_editor_write_permitted===false&&s.rendering_permitted===false));
 assert.equal(h.automatic_asset_generation_authorized,false);
 assert.equal(h.auto_dependency_install_authorized,false);
});
test("unrecognized command field in config is rejected",async()=>{
 const {edl,config}=await inputs();
 config.system_command="install --yes";
 assert.throws(()=>createDocumentaryHandoff(edl,config),/HANDOFF_REJECT:CONFIG_FIELDS/);
});
test("external credit spend is blocked",async()=>{
 const {edl,config}=await inputs();
 config.external_spend_authorized=true;
 assert.throws(()=>createDocumentaryHandoff(edl,config),/HANDOFF_REJECT:UNAUTHORIZED_external_spend_authorized/);
});
test("CapCut direct writing stays prohibited",async()=>{
 const {edl,config}=await inputs();
 config.allow_direct_editor_write=true;
 assert.throws(()=>createDocumentaryHandoff(edl,config),/HANDOFF_REJECT:UNAUTHORIZED_allow_direct_editor_write/);
});
test("counterfactual cannot become historical move",async()=>{
 const {edl,config}=await inputs();
 edl.shots[5].truth_annotations[1].required_display_label="PARTIDA REAL";
 assert.throws(()=>createDocumentaryHandoff(edl,config),/HANDOFF_REJECT:TRUTH_T05/);
});
test("independent reviewer rejects forged alignment",async()=>{
 const {edl,config}=await inputs();
 const h=createDocumentaryHandoff(edl,config);
 h.shots[0].word_level_alignment=[{s:0,e:1}];
 assert.equal(independentReviewHandoff(h,edl).status,"FAIL_CLOSED");
});
test("independent reviewer rejects rendered claim",async()=>{
 const {edl,config}=await inputs();
 const h=createDocumentaryHandoff(edl,config);
 h.media_render_authorized=true;
 assert.equal(independentReviewHandoff(h,edl).status,"FAIL_CLOSED");
});
test("independent reviewer rejects unapproved stage elevation",async()=>{
 const {edl,config}=await inputs();
 const h=createDocumentaryHandoff(edl,config);
 h.stages[0].can_advance=true;
 assert.equal(independentReviewHandoff(h,edl).status,"FAIL_CLOSED");
});
