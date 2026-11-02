import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { compileDraft, proposeEdit } from "../src/compile-draft.mjs";
import { reviewDraft } from "../src/review-draft.mjs";
import { compareEditorialDrafts } from "../src/compare-editorial-drafts.mjs";
import { analyzeEditorialTargetRisks } from "../src/editorial-target-risks.mjs";
import { gitBlobSha1, verifySourcePins } from "../tools/verify-source-pins.mjs";


const root = new URL("../../../", import.meta.url);
const readJSON = async path => JSON.parse(await readFile(new URL(path, root), "utf8"));
async function sources() {
  const [shotplan, semantic, precedence] = await Promise.all([
    readJSON("editorial/EP01-45S-SHOTPLAN-DRAFT.json"),
    readJSON("cases/ED-CASE-REAL-01.v0.2.json"),
    readJSON("editorial/EP01-AV01-45S-EVENT-STATE-PRECEDENCE.v0.1.json")
  ]);
  return { shotplan, semantic, precedence };
}
const copy = value => structuredClone(value);

test("canonical static draft remains nine shots / 12 events / 45s target (not measured)", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const draft = compileDraft(shotplan, semantic, precedence);
  assert.equal(draft.shots.length, 9);
  assert.equal(draft.target_duration_ms, 45000);
  assert.deepEqual(draft.shots.filter(s => s.event_dispatch_allowed).flatMap(s => s.event_ids),
    Array.from({length:12},(_,i)=>"T"+String(i+1).padStart(2,"0")));
  assert.equal(draft.release_authority, false);
  assert.equal(draft.frame_visibility_verified, false);
  assert.equal(draft.shots[7].truth_annotations[3].audience_board_before_declared, null);
  assert.equal(draft.shots[7].truth_annotations[3].audience_board_after_declared, null);
});
test("independent review is strictly PASS_LIMITED_STATIC_ONLY", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const review = reviewDraft(compileDraft(shotplan, semantic, precedence), shotplan, semantic);
  assert.equal(review.status, "PASS_LIMITED_STATIC_ONLY");
  assert.equal(review.independent_release_authority, false);
});
test("editorial edit creates separate, unapplied proposal", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const draft = compileDraft(shotplan, semantic, precedence);
  const original = draft.shots[0].caption_text_draft;
  const p = proposeEdit(draft, {shot_id:"S01",field:"caption_text_draft",
    proposed_text:"1956 · Revisión pendiente",reason:"Mejorar el ritmo del titular"});
  assert.equal(p.disposition, "UNAPPLIED_INDEPENDENT_EDITORIAL_REVIEW_REQUIRED");
  assert.equal(p.can_render_or_publish, false);
  assert.equal(draft.shots[0].caption_text_draft, original);
});
test("attempt to alter truth-label field is rejected", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const draft = compileDraft(shotplan, semantic, precedence);
  assert.throws(() => proposeEdit(draft,{shot_id:"S06",field:"required_display_label",
    proposed_text:"PARTIDA REAL",reason:"Modify factuality label"}), /EDIT_REJECT:FIELD_UNSAFE/);
});
test("counterfactual must always be marked HIPOTÉTICA · NO JUGADA", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const s=copy(shotplan);s.shots[5].event_truth_sequence[1].display_label="PARTIDA REAL";
  assert.throws(()=>compileDraft(s,semantic,precedence),/EDL_REJECT:TRUTH_LABEL_T05/);
});
test("14 omitted real half moves 36–49 must be disclosed", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const s=copy(shotplan);s.shots[7].event_truth_sequence[2].mandatory_omission="omitted";
  assert.throws(()=>compileDraft(s,semantic,precedence),/EDL_REJECT:ELLIPSIS_36_49/);
});
test("TECHNICAL_ONLY state cannot be visible board", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const s=copy(shotplan);s.shots[7].state="V-PRE-EV2";
  assert.throws(()=>compileDraft(s,semantic,precedence),/EDL_REJECT:NO_TECHNICAL_VISIBLE_STATE/);
});
test("45s target interval continuity is mandatory", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const s=copy(shotplan);s.shots[3].start_ms++;
  assert.throws(()=>compileDraft(s,semantic,precedence),/EDL_REJECT:SHOT_TIMELINE_CONTIGUITY/);
});
test("approval or execution gate change blocks compilation", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const c=copy(semantic);c.execution_policy.execution_authorized=true;
  assert.throws(()=>compileDraft(shotplan,c,precedence),/EDL_REJECT:EXECUTION_GATE/);
});
test("source asset rights cannot be implicitly cleared", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const s=copy(shotplan);s.assets_status="RIGHTS_CLEARED";
  assert.throws(()=>compileDraft(s,semantic,precedence),/EDL_REJECT:RIGHTS_UNCLEARED/);
});
test("unresolved T11 cannot expose technical FEN", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const p=copy(precedence);p.composite_phases[2].ordered_phases[3].audience_board_after="V-PRE-EV2";
  assert.throws(()=>compileDraft(shotplan,semantic,p),/EDL_REJECT:PRECEDENCE_TECHNICAL_BOARD/);
});
test("independent review rejects unauthorized release flag", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const d=compileDraft(shotplan,semantic,precedence);d.release_authority=true;
  assert.equal(reviewDraft(d,shotplan,semantic).status,"FAIL_CLOSED");
});
test("independent review rejects a forged hypothetical disclosure", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const d=compileDraft(shotplan,semantic,precedence);
  d.shots[5].truth_annotations[1].required_display_label="PARTIDA REAL";
  assert.equal(reviewDraft(d,shotplan,semantic).status,"FAIL_CLOSED");
});
test("independent review rejects malformed shot container", async () => {
  const { shotplan, semantic, precedence } = await sources();
  const d=compileDraft(shotplan,semantic,precedence);
  d.shots={length:9};
  assert.equal(reviewDraft(d,shotplan,semantic).status,"FAIL_CLOSED");
});

test("source-pinned local Git blob bytes are unchanged", async () => {
  const result=await verifySourcePins();
  assert.equal(result.status,"PASS_LIMITED_LOCAL_GIT_BLOB_MATCH");
  assert.equal(result.files.length,3);
  assert.equal(result.release_authority,false);
});
test("Git blob checksum function matches a known SHA-1 test vector", () => {
  assert.equal(gitBlobSha1(Buffer.from("abc","utf8")),"f2ba8f84ab5c1bce84a7b441cb1959cfc7093b7f");
});
test("independent reviewer detects mutated source revision references", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const draft=compileDraft(shotplan,semantic,precedence);
  draft.source_revisions.truth_overlay.observed_git_blob="fake";
  assert.equal(reviewDraft(draft,shotplan,semantic).status,"FAIL_CLOSED");
});
test("compiler defensively copies frozen source pin references", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const original=precedence.source_pins.shotplan.observed_git_blob;
  const draft=compileDraft(shotplan,semantic,precedence);
  draft.source_revisions.shotplan.observed_git_blob="tampered";
  assert.equal(precedence.source_pins.shotplan.observed_git_blob,original);
});
test("independent reviewer detects any unreviewed narration change", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const draft=compileDraft(shotplan,semantic,precedence);
  draft.shots[0].narration_text_draft="unreviewed change";
  assert.equal(reviewDraft(draft,shotplan,semantic).status,"FAIL_CLOSED");
});
test("offline editorial diff accepts strictly textual changes only", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const original=compileDraft(shotplan,semantic,precedence);
  const updated=copy(original);
  updated.shots[0].caption_text_draft="1956 · Nueva propuesta de edición";
  const diff=compareEditorialDrafts(original,updated);
  assert.equal(diff.status,"UNAPPLIED_EDITORIAL_CHANGES_REQUIRE_HUMAN_ADJUDICATION");
  assert.equal(diff.changes.length,1);
  assert.equal(diff.render_authorized,false);
});
test("composite shots can retain empty optional captions", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const original=compileDraft(shotplan,semantic,precedence);
  const updated=copy(original);
  assert.equal(updated.shots[5].caption_text_draft,"");
  updated.shots[5].narration_text_draft="Narración alternativa a revisar";
  assert.equal(compareEditorialDrafts(original,updated).changes.length,1);
});
test("editorial diff rejects attempts to remove required hypothetical labeling", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const original=compileDraft(shotplan,semantic,precedence);
  const updated=copy(original);
  updated.shots[5].truth_annotations[1].required_display_label="PARTIDA REAL";
  assert.throws(()=>compareEditorialDrafts(original,updated),/EDL_DIFF_REJECT:NON_EDITORIAL_FIELD_CHANGED/);
});
test("editorial diff rejects hidden approvals and timing changes", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const original=compileDraft(shotplan,semantic,precedence);
  const approved=copy(original);
  approved.render_authorized=true;
  assert.throws(()=>compareEditorialDrafts(original,approved),/EDL_DIFF_REJECT:NON_EDITORIAL_FIELD_CHANGED/);
  const retimed=copy(original);
  retimed.shots[0].target_end_ms=8000;
  assert.throws(()=>compareEditorialDrafts(original,retimed),/EDL_DIFF_REJECT:NON_EDITORIAL_FIELD_CHANGED/);
});
test("editorial diff requires actual, nonempty edit", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const original=compileDraft(shotplan,semantic,precedence);
  assert.throws(()=>compareEditorialDrafts(original,copy(original)),/EDL_DIFF_REJECT:NO_CHANGES/);
  const updated=copy(original);
  updated.shots[0].caption_text_draft=" ";
  assert.throws(()=>compareEditorialDrafts(original,updated),/EDL_DIFF_REJECT:PROPOSED_COPY_INVALID/);
});
test("editorial risk report identifies known high-risk S06, S07 and S08", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const report=analyzeEditorialTargetRisks(compileDraft(shotplan,semantic,precedence));
  assert.deepEqual(report.high_risk_shot_ids,["S06","S07","S08"]);
  assert.equal(report.assessments.length,9);
  assert.equal(report.release_authority,false);
  assert.equal(report.assessments.every(s=>!s.audio_duration_measured&&!s.event_phase_duration_measured),true);
});
test("risk report rejects a forged execution/release authority", async () => {
  const {shotplan,semantic,precedence}=await sources();
  const draft=compileDraft(shotplan,semantic,precedence);
  draft.release_authority=true;
  assert.throws(()=>analyzeEditorialTargetRisks(draft),/EDL_RISK_REJECT:UNQUALIFIED_DRAFT/);
});
