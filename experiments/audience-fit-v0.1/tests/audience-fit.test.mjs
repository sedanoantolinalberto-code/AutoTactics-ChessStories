import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { evaluateAudienceFit } from "../src/evaluate.mjs";
import { reviewAudienceFit } from "../src/independent-review.mjs";

const dir = new URL("../fixtures/", import.meta.url);
const read = async file => JSON.parse(await readFile(new URL(file, dir), "utf8"));
const input = async () => Promise.all([read("ep01-hypothesis.json"), read("manual-comparables.empty.json")]);
const copy = value => structuredClone(value);
const mock = (i, role = "supportive") => ({
  video_id: String(i).padStart(11, "0"),
  channel_id: "TEST_CHANNEL_" + (i % 3),
  channel_name: "SYNTHETIC_TEST_CHANNEL_" + (i % 3),
  views: 1000 + i * 100,
  channel_baseline_median_views: 1000,
  observed_at: "2026-10-07",
  comparison_role: role,
  basis_for_similarity: "Synthetic format comparison used only for unit testing",
  provenance_status: "UNVERIFIED_MANUAL"
});

test("empty ledger remains explicitly insufficient", async () => {
  const [candidate, evidence] = await input();
  const report = evaluateAudienceFit(candidate,evidence);
  assert.equal(report.status,"INSUFFICIENT_COMPARABLE_EVIDENCE");
  assert.equal(report.study.median_relative_views,null);
  assert.ok(report.evidence_gaps.includes("NO_OBSERVED_VIDEO_DATA"));
  assert.equal(report.platform_distribution_prediction,"NOT_ESTABLISHED");
  assert.equal(report.content_claims_verified,false);
  assert.equal(report.publication_authorized,false);
});

test("independent review does not grant release", async () => {
  const [candidate, evidence] = await input();
  const verdict = reviewAudienceFit(evaluateAudienceFit(candidate,evidence), candidate);
  assert.equal(verdict.verdict,"PASS_LIMITED_SOURCE_ONLY");
  assert.equal(verdict.independent_release_authority,false);
});

test("comparables can only become a hypothesis for human review, never success prediction", async () => {
  const [candidate, evidence] = await input();
  evidence.comparables = Array.from({length:6}, (_,i) => mock(i+1, i>=4?"counterexample":"supportive"));
  const report = evaluateAudienceFit(candidate, evidence);
  assert.equal(report.status,"SUFFICIENT_MANUAL_SAMPLE_FOR_HUMAN_REVIEW_ONLY");
  assert.equal(report.sample_evidence_verified,false);
  assert.equal(report.monetization_predictions,false);
  assert.equal(report.claims_algorithm_control,false);
  assert.equal(reviewAudienceFit(report,candidate).verdict,"PASS_LIMITED_SOURCE_ONLY");
});

test("release flag in source is rejected", async () => {
  const [c,e] = await input();c.publication_authorized=true;
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:NO_GO/);
});

test("integrating a renderer is not allowed", async () => {
  const [c,e] = await input();c.integration_authorized=true;
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:NO_GO/);
});

test("original historical disclosures cannot be silently changed", async () => {
  const [c,e] = await input();c.guardrails.required_disclosures[2]="PARTIDA REAL";
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:NON_NEGOTIABLE_DISCLOSURES/);
});

test("unqualified media rights remain frozen", async () => {
  const [c,e] = await input();c.guardrails.rights_cleared=true;
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:TRUTH_OR_RIGHTS_GATE/);
});

test("title length is bounded", async () => {
  const [c,e] = await input();c.packaging.title_draft="X".repeat(101);
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:PACKAGING_BOUNDS/);
});

test("anchor and novelty must remain distinguishable", async () => {
  const [c,e] = await input();c.packaging.novelty=c.packaging.anchor;
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:ANCHOR_NOVELTY/);
});

test("unfalsifiable hypothesis is rejected", async () => {
  const [c,e] = await input();c.hypotheses[0].counter_evidence_needed="";
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:FALSIFIABILITY/);
});

test("duplicate video records are rejected", async () => {
  const [c,e] = await input();e.comparables=[mock(1),mock(1)];
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:DUPLICATE_VIDEO/);
});

test("channel median cannot be zero", async () => {
  const [c,e] = await input();const o=mock(1);o.channel_baseline_median_views=0;e.comparables=[o];
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:BASELINE/);
});

test("manual observation cannot be falsely marked verified", async () => {
  const [c,e] = await input();const o=mock(1);o.provenance_status="VERIFIED";e.comparables=[o];
  assert.throws(()=>evaluateAudienceFit(c,e),/AUDIENCE_REJECT:EVIDENCE_NOT_VERIFIED/);
});

test("report release-flag tampering is independently detected", async () => {
  const [c,e] = await input();const r=evaluateAudienceFit(c,e);r.publication_authorized=true;
  assert.equal(reviewAudienceFit(r,c).verdict,"FAIL_CLOSED");
});

test("report audience substitution is independently detected", async () => {
  const [c,e] = await input();const r=evaluateAudienceFit(c,e);r.candidate.target_audience.primary_interest="Anything";
  assert.equal(reviewAudienceFit(r,c).verdict,"FAIL_CLOSED");
});

test("unsupported status upgrade is independently rejected", async () => {
  const [c,e] = await input();const r=evaluateAudienceFit(c,e);r.status="SUFFICIENT_MANUAL_SAMPLE_FOR_HUMAN_REVIEW_ONLY";
  assert.equal(reviewAudienceFit(r,c).verdict,"FAIL_CLOSED");
});

test("algorithm prediction tampering is independently rejected", async () => {
  const [c,e] = await input();const r=evaluateAudienceFit(c,e);r.platform_distribution_prediction="DETERMINISTIC";
  assert.equal(reviewAudienceFit(r,c).verdict,"FAIL_CLOSED");
});
