import { readFile } from "node:fs/promises";
import { compileDraft } from "../src/compile-draft.mjs";
import { reviewDraft } from "../src/review-draft.mjs";
import { analyzeEditorialTargetRisks } from "../src/editorial-target-risks.mjs";

// Offline read-only reproducibility check for committed source-only JSON proposals.
// Does not spawn processes, access the network, render media, write files or grant approval.
export async function verifyGeneratedReports() {
  const repositoryRoot = new URL("../../../", import.meta.url);
  const experimentRoot = new URL("../", import.meta.url);
  const readJson = async (root,path) => JSON.parse(await readFile(new URL(path,root),"utf8"));
  const [shotplan,semantic,precedence, savedEdl,savedRisk,savedReview] = await Promise.all([
    readJson(repositoryRoot,"editorial/EP01-45S-SHOTPLAN-DRAFT.json"),
    readJson(repositoryRoot,"cases/ED-CASE-REAL-01.v0.2.json"),
    readJson(repositoryRoot,"editorial/EP01-AV01-45S-EVENT-STATE-PRECEDENCE.v0.1.json"),
    readJson(experimentRoot,"proposals/EP01-45S-EDL-SOURCE-ONLY.v0.1.json"),
    readJson(experimentRoot,"reports/EP01-TARGET-RISK.v0.1.json"),
    readJson(experimentRoot,"reports/EP01-INDEPENDENT-STATIC-REVIEW.v0.1.json")
  ]);
  const generatedEdl=compileDraft(shotplan,semantic,precedence);
  const generatedRisk=analyzeEditorialTargetRisks(generatedEdl);
  const generatedReview=reviewDraft(generatedEdl,shotplan,semantic);
  const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
  if (!same(savedEdl,generatedEdl))throw new Error("REPORT_REPLAY_REJECT:EDL_MISMATCH");
  if (!same(savedRisk,generatedRisk))throw new Error("REPORT_REPLAY_REJECT:RISK_MISMATCH");
  if (!same(savedReview,generatedReview))throw new Error("REPORT_REPLAY_REJECT:REVIEW_MISMATCH");
  if (generatedReview.status!=="PASS_LIMITED_STATIC_ONLY" ||
      generatedEdl.release_authority!==false || generatedEdl.render_authorized!==false ||
      generatedRisk.release_authority!==false)throw new Error("REPORT_REPLAY_REJECT:UNAUTHORIZED_STATUS");
  return {
    status:"PASS_LIMITED_STATIC_DOCUMENT_REPLAY_ONLY",
    deterministic_report_count:3,
    native_media_execution:false,
    independent_authentication:false,
    release_authority:false,
    cases_approved:false
  };
}
