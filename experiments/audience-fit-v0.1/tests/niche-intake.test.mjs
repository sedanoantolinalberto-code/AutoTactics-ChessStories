import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {compileIntake,reviewIntake} from "../src/niche-intake.mjs";
const read = async () => JSON.parse(await readFile(new URL("../fixtures/niche-intake.empty.json", import.meta.url),"utf8"));
const mock = (n, role = "supportive") => ({
  video_id:String(n).padStart(11,"0"),channel_id:"CHANNEL_"+(n%3),
  format:"Synthetic chess documentary short",notes:"SYNTHETIC UNIT TEST NOT REAL DATA",
  comparison_role:role,published_at:"2026-11-01T09:00:00Z",
  observed_at:"2026-11-03T09:00:00Z",views:1000+n*100,
  baseline_median_views:1000,baseline_sample_size:5,
  source_status:"MANUAL_NOT_INDEPENDENTLY_VERIFIED"
});
test("empty evidence does not invent niches",async()=>{
 const input=await read(), report=compileIntake(input);
 assert.equal(report.status,"INSUFFICIENT_EVIDENCE");
 assert.deepEqual(report.research_candidates,[]);
 assert.ok(report.evidence_gaps.includes("NO_REAL_DATA"));
});
test("source-only review is limited",async()=>{
 const input=await read();
 assert.equal(reviewIntake(compileIntake(input),input).status,"PASS_LIMITED_STATIC_ONLY");
});
test("no algorithm-control or economic predictions",async()=>{
 const report=compileIntake(await read());
 assert.equal(report.algorithm_control_claimed,false);
 assert.equal(report.monetization_predicted,false);
});
test("automated fetching not authorized",async()=>{
 const x=await read();x.automated_fetch=true;
 assert.throws(()=>compileIntake(x),/INTAKE_REJECT:GATE/);
});
test("publishing not authorized",async()=>{
 const x=await read();x.release_authorized=true;
 assert.throws(()=>compileIntake(x),/INTAKE_REJECT:GATE/);
});
test("malformed video ID rejected",async()=>{
 const x=await read();x.observations=[mock(1)];x.observations[0].video_id="invalid-id!!!";
 assert.throws(()=>compileIntake(x),/INTAKE_REJECT:VIDEO_ID/);
});
test("duplicate video ID rejected",async()=>{
 const x=await read();x.observations=[mock(1),mock(1)];
 assert.throws(()=>compileIntake(x),/INTAKE_REJECT:VIDEO_ID/);
});
test("new videos must not be ranked without a comparable window",async()=>{
 const x=await read();x.observations=[mock(1)];
 x.observations[0].published_at="2026-11-03T08:00:00Z";
 assert.deepEqual(compileIntake(x).research_candidates,[]);
});
test("zero channel baseline does not produce an outlier ratio",async()=>{
 const x=await read();x.observations=[mock(1)];
 x.observations[0].baseline_median_views=0;
 assert.deepEqual(compileIntake(x).research_candidates,[]);
});
test("six synthetic observations require human review",async()=>{
 const x=await read();
 x.observations=Array.from({length:6},(_,i)=>mock(i+1,i>=4?"counterexample":"supportive"));
 const report=compileIntake(x);
 assert.equal(report.status,"SAMPLE_FOR_INDEPENDENT_HUMAN_REVIEW_ONLY");
 assert.equal(report.research_candidates.length,6);
 assert.equal(report.publication_authorized,false);
 assert.equal(reviewIntake(report,x).status,"PASS_LIMITED_STATIC_ONLY");
});
test("independent reviewer rejects publish tamper",async()=>{
 const x=await read(),r=compileIntake(x);r.publication_authorized=true;
 assert.equal(reviewIntake(r,x).status,"FAIL_CLOSED");
});
test("independent reviewer rejects evidence upgrade",async()=>{
 const x=await read(),r=compileIntake(x);
 r.status="SAMPLE_FOR_INDEPENDENT_HUMAN_REVIEW_ONLY";
 assert.equal(reviewIntake(r,x).status,"FAIL_CLOSED");
});
test("independent reviewer rejects fabricated candidate",async()=>{
 const x=await read(),r=compileIntake(x);
 r.research_candidates=[{video_id:"1234567890a",status:"DESCRIPTIVE_ONLY_HUMAN_REVIEW",
 source_verified:false,virality_predicted:false,production_approved:false}];
 assert.equal(reviewIntake(r,x).status,"FAIL_CLOSED");
});
