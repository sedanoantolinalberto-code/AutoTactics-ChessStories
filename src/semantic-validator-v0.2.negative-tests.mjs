/**
 * CHESS-CODEX-06B / negative mutation catalog for semantic-contract v0.2.
 * SOURCE ONLY — no tests have been executed or certified.
 * Importing this module performs no work; the harness must be explicitly invoked.
 * A qualified execution/supervision mechanism and explicit authorization are
 * prerequisites to invoking runDraftNegativeTests. Policy B NO-GO remains.
 */

const clone = value => JSON.parse(JSON.stringify(value));
const event = (v, id) => v.timeline.find(x => x.id === id);
const state = (v, id) => v.states.find(x => x.id === id);
const claim = (v, id) => v.claims.find(x => x.id === id);
const evidence = (v, id) => v.evidence.find(x => x.id === id);
const asset = (v, id) => v.assets.find(x => x.id === id);

export const NEGATIVE_MUTATIONS = [
  { name: "Hypothetical move falsely made REAL",
    code: "REAL_MOVE_BRANCH",
    mutate: v => { event(v,"T06").kind="REAL_MOVE"; } },
  { name: "Hypothetical state falsely owned by MAIN",
    code: "STATE_BRANCH_OWNERSHIP",
    mutate: v => { state(v,"V-HYP").factuality="REAL"; } },
  { name: "Delete explicit real return",
    code: "UNRETURNED_HYPOTHETICAL",
    mutate: v => { v.timeline=v.timeline.filter(e=>e.id!=="T07"); } },
  { name: "Return points to alternate state rather than real anchor",
    code: "RETURN_TO_REAL_INVALID",
    mutate: v => { event(v,"T07").to_state="V-HYP"; } },
  { name: "Enter with mismatched activated branch",
    code: "ENTER_HYPOTHETICAL_INVALID",
    mutate: v => { event(v,"T05").to_branch_id="MAIN"; } },
  { name: "Enter with invented shared anchor",
    code: "ENTER_HYPOTHETICAL_INVALID",
    mutate: v => { event(v,"T05").shared_anchor_state_id="V-EV1"; } },
  { name: "Delete the rewind and break state continuity",
    code: "TIMELINE_CONTINUITY",
    mutate: v => { v.timeline=v.timeline.filter(e=>e.id!=="T04"); } },
  { name: "Delete the real-line ellipsis",
    code: "TIMELINE_CONTINUITY",
    mutate: v => { v.timeline=v.timeline.filter(e=>e.id!=="T10"); } },
  { name: "Ellipsis omitted range begins at wrong ply",
    code: "ELLIPSIS_RANGE",
    mutate: v => { event(v,"T10").omitted_plies.first=37; } },
  { name: "Ellipsis omitted range ends at wrong ply",
    code: "ELLIPSIS_RANGE",
    mutate: v => { event(v,"T10").omitted_plies.last=48; } },
  { name: "Unknown T10 source returns structured rejection",
    code: "UNKNOWN_REFERENCE",
    mutate: v => { event(v,"T10").from_state="V-MISSING"; } },
  { name: "Unknown T10 destination returns structured rejection",
    code: "UNKNOWN_REFERENCE",
    mutate: v => { event(v,"T10").to_state="V-MISSING"; } },
  { name: "Queen capture incorrectly calls victim a pawn",
    code: "CAPTURE_PIECE_MISMATCH",
    mutate: v => { event(v,"T03").move.capture.captured_piece="P"; } },
  { name: "Rook capture incorrectly calls victim a bishop",
    code: "CAPTURE_PIECE_MISMATCH",
    mutate: v => { event(v,"T11").move.capture.captured_piece="B"; } },
  { name: "Omit mandatory rook capture metadata",
    code: "UNDECLARED_CAPTURE",
    mutate: v => { delete event(v,"T11").move.capture; } },
  { name: "Conflicting SAN capture declaration",
    code: "SAN_DECLARATION_CONFLICT",
    mutate: v => { event(v,"T11").move.san="Nd1"; } },
  { name: "Move origin with invalid object-to-string coercion remains a structured rejection",
    code: "MOVE_FIELDS_INVALID",
    mutate: v => { event(v,"T02").move.from={toString:null}; } },
  { name: "Capture square with invalid object-to-string coercion remains a structured rejection",
    code: "CAPTURE_METADATA",
    mutate: v => { event(v,"T11").move.capture.capture_square={toString:null}; } },
  { name: "Invalid FEN rank width",
    code: "FEN_INVALID",
    mutate: v => { state(v,"V-P1").fen=state(v,"V-P1").fen.replace("r3r1k1","r3r1k2"); } },
  { name: "FEN board after bishop move changed at unrelated square",
    code: "MOVE_BOARD_MISMATCH",
    mutate: v => { state(v,"V-EV1").fen=state(v,"V-EV1").fen.replace("/pp3pbp/","/1p3pbp/"); } },
  { name: "Displayed SAN label contradicts actual declared move",
    code: "AFTER_SAN_LABEL_MISMATCH",
    mutate: v => { state(v,"V-EV1").san_label="17...Qd8"; } },
  { name: "Malformed SAN object must reject instead of throwing during label formatting",
    code: "SAN_MISSING",
    mutate: v => { event(v,"T11").move.san={toString:null}; } },
  { name: "Malformed earlier real ply object must not throw in REWIND or ELLIPSIS",
    code: "STATE_PLY_INVALID",
    mutate: v => { state(v,"V-REAL").ply={toString:null}; } },
  { name: "Malformed terminal ply object must not throw during historical end arithmetic",
    code: "STATE_PLY_INVALID",
    mutate: v => { state(v,"V-EV2").ply={toString:null}; } },
  { name: "FEN cannot spontaneously grant white castling rights after black bishop move",
    code: "FEN_CASTLING_RIGHT_GAIN",
    mutate: v => { state(v,"V-EV1").fen=state(v,"V-EV1").fen.replace(" w - - 4 18", " w K - 4 18"); } },
  { name: "FEN cannot introduce en-passant target after a bishop move",
    code: "FEN_EP_TARGET_UNJUSTIFIED",
    mutate: v => { state(v,"V-EV1").fen=state(v,"V-EV1").fen.replace(" w - - 4 18", " w - h6 4 18"); } },
  { name: "FEN cannot introduce en-passant target after a knight capture",
    code: "FEN_EP_TARGET_UNJUSTIFIED",
    mutate: v => { state(v,"V-EV2").fen=state(v,"V-EV2").fen.replace(" w - - 0 26", " w - c6 0 26"); } },
  { name: "State ply conflicts with FEN side to move",
    code: "FEN_PLY_MISMATCH",
    mutate: v => { state(v,"V-EV1").ply=33; } },
  { name: "Duplicate state ID",
    code: "DUPLICATE_REGISTRY_ID",
    mutate: v => { v.states.push(clone(v.states[0])); } },
  { name: "White and black identity collision",
    code: "PLAYER_ID_COLLISION",
    mutate: v => { v.players.black.id=v.players.white.id; } },
  { name: "Unknown evidence reference",
    code: "UNKNOWN_REFERENCE",
    mutate: v => { event(v,"T03").evidence_refs=["EVID-UNKNOWN"]; } },
  { name: "Unknown claim cross-reference",
    code: "UNKNOWN_REFERENCE",
    mutate: v => { event(v,"T06").claim_refs=["CLAIM-UNKNOWN"]; } },
  { name: "Unknown asset cross-reference",
    code: "UNKNOWN_REFERENCE",
    mutate: v => { event(v,"T06").asset_refs=["ASSET-UNKNOWN"]; } },
  { name: "Source of visual asset is undeclared",
    code: "ASSET_SOURCE_UNRESOLVED",
    mutate: v => { asset(v,"ASSET-SUPPLIED-POSITION-DATA").provenance.source_identity="SOURCE-UNKNOWN"; } },
  { name: "Per-asset rights object missing",
    code: "ASSET_RIGHTS_RECORD_MISSING",
    mutate: v => { asset(v,"ASSET-SUPPLIED-POSITION-DATA").license=null; } },
  { name: "Per-asset clearance falsely promoted without evidence",
    code: "UNSUPPORTED_RIGHTS_PROMOTION",
    mutate: v => { asset(v,"ASSET-SUPPLIED-POSITION-DATA").uses[0].clearance_status="CLEARANCE_REPORTED_NOT_ESTABLISHED_BY_SCHEMA"; } },
  { name: "R6 falsely changed from PENDING to CLEARED",
    code: "FROZEN_GATE_CHANGE",
    mutate: v => { v.frozen_gates.R6="CLEARED"; } },
  { name: "IVV-03 falsely changed to PASS",
    code: "FROZEN_GATE_CHANGE",
    mutate: v => { v.frozen_gates["IVV-03"]="PASS"; } },
  { name: "Publish permission falsely granted",
    code: "FROZEN_GATE_CHANGE",
    mutate: v => { v.frozen_gates.PERMISSION_TO_PUBLISH=true; } },
  { name: "Execution falsely authorized",
    code: "EXECUTION_POLICY_UNAUTHORIZED",
    mutate: v => { v.execution_policy.execution_authorized=true; } },
  { name: "Historical final ply incorrectly moved before editorial ending",
    code: "HISTORICAL_END_CONTRADICTION",
    mutate: v => { v.historical_game_end.final_ply=50; } },
  { name: "Ending source identity does not resolve",
    code: "HISTORICAL_SOURCE_UNKNOWN",
    mutate: v => { v.historical_game_end.source_id="SOURCE-UNKNOWN"; } },
  { name: "Editorial sequence end points to earlier state",
    code: "EDITORIAL_END_MISMATCH",
    mutate: v => { v.sequence_end.state_id="V-REAL"; } },
  { name: "Measured timing overlaps previous measured event",
    code: "TIMING_OVERLAP",
    mutate: v => {
      event(v,"T01").timing={status:"TIMING_MEASURED",start_ms:0,duration_ms:10000,measurement_evidence_refs:["EVID-R2-RESULTS"]};
      event(v,"T02").timing={status:"TIMING_MEASURED",start_ms:9000,duration_ms:1000,measurement_evidence_refs:["EVID-R2-RESULTS"]};
    } },
  { name: "Measured timing sum overflows safe integer",
    code: "TIMING_INVALID_OR_OVERFLOW",
    mutate: v => { event(v,"T02").timing={status:"TIMING_MEASURED",start_ms:Number.MAX_SAFE_INTEGER,duration_ms:2,measurement_evidence_refs:["EVID-R2-RESULTS"]}; } },
  { name: "Timing object omitted",
    code: "TIMING_MISSING",
    mutate: v => { delete event(v,"T02").timing; } },
  { name: "Unreviewed uniquely-best 24...Ra4 claim (F03)",
    code: "F03_UNSUPPORTED_UNIQUENESS",
    mutate: v => { claim(v,"CLAIM-EDITORIAL-END").text="24...Ra4 was the uniquely best move."; } },
  { name: "Claim admissibility self-promoted without review",
    code: "UNSUPPORTED_CLAIM_PROMOTION",
    mutate: v => { claim(v,"CLAIM-REAL-MOVES").admissibility_status="ADMISSIBILITY_REVIEW_REPORTED"; } },
  { name: "Historical verification self-promoted without record",
    code: "UNSUPPORTED_VERIFICATION_PROMOTION",
    mutate: v => { evidence(v,"EVID-LEDGER-R2").verification.original_historical_authentication="REVIEW_REPORTED_NOT_ESTABLISHED_BY_SCHEMA"; } },
  { name: "Unqualified historical technical verification has no evidence records",
    code: "UNSUPPORTED_VERIFICATION_PROMOTION",
    mutate: v => { evidence(v,"EVID-R2-RESULTS").verification.declared_level="QUALIFIED_ORACLE_REVIEW_REPORTED"; } },
  { name: "Two evidence records cannot share a source ID with contradictory identity metadata",
    code: "SOURCE_ID_CONFLICT",
    mutate: v => { evidence(v,"EVID-R2-RESULTS").source.source_id="SOURCE-SUPPLIED-V01-CASE"; } },
  { name: "Mutually dependent evidence reviews form a circular qualification",
    code: "EVIDENCE_CIRCULAR_VERIFICATION",
    mutate: v => {
      evidence(v,"EVID-LEDGER-R2").verification.verification_record_refs=["EVID-R2-RESULTS"];
      evidence(v,"EVID-R2-RESULTS").verification.verification_record_refs=["EVID-LEDGER-R2"];
    } },
  { name: "Evidence must not independently qualify itself",
    code: "EVIDENCE_SELF_QUALIFICATION",
    mutate: v => { evidence(v,"EVID-LEDGER-R2").verification.verification_record_refs=["EVID-LEDGER-R2"]; } },
  { name: "Hash verification must not refer to its own evidence as an independent check",
    code: "HASH_SELF_QUALIFICATION",
    mutate: v => { evidence(v,"EVID-R2-PGN-DECLARATION").declared_hash.check_evidence_refs=["EVID-R2-PGN-DECLARATION"]; } },
  { name: "Asset provenance review cannot self-promote without evidence",
    code: "ASSET_PROVENANCE_SELF_PROMOTION",
    mutate: v => {
      const a=asset(v,"ASSET-SUPPLIED-POSITION-DATA");
      a.provenance.status="REVIEW_REPORTED";
      a.provenance.evidence_refs=[];
    } },
  { name: "F03 uniqueness assertion in displayed event disclosure is rejected",
    code: "F03_UNSUPPORTED_UNIQUENESS",
    mutate: v => { event(v,"T11").disclosure="24...Ra4 was uniquely best."; } },
  { name: "Unqualified special chess move must not silently pass",
    code: "SPECIAL_MOVE_NOT_QUALIFIED",
    mutate: v => { event(v,"T02").move.special_move="CASTLING_KINGSIDE"; } },
  { name: "Hypothetical branch illegally nested within itself",
    code: "NESTED_HYPOTHETICAL_UNSUPPORTED",
    mutate: v => { v.branches.find(b=>b.id==="ALT_QD8").parent_branch_id="ALT_QD8"; } }
];

/**
 * Future qualified harness only. NO AUTOMATIC INVOCATION.
 * Passing these mutations does not establish legality, history or publication rights.
 */
export function runDraftNegativeTests(validate, original) {
  if (typeof validate !== "function") throw new Error("validator function is required");
  const result = [];
  const base = validate(clone(original));
  if (!base || base.semantic_consistent !== true) {
    throw new Error("The baseline documentary case was not accepted by the semantic checker");
  }
  for (const test of NEGATIVE_MUTATIONS) {
    const document = clone(original);
    test.mutate(document);
    const before = JSON.stringify(document);
    let actual;
    try { actual = validate(document); }
    catch (error) { throw new Error(test.name + ": validator threw instead of rejecting structurally"); }
    if (JSON.stringify(document) !== before) throw new Error(test.name + ": mutated input during validation");
    if (!actual || actual.semantic_consistent !== false ||
        !Array.isArray(actual.errors) ||
        !actual.errors.some(e => e.code === test.code)) {
      throw new Error(test.name + ": expected " + test.code + " rejection");
    }
    result.push({ name:test.name, expected_code:test.code,
      evaluated_in_this_invocation:true,
      scope:"Documentary semantic checks only; external evidence and runner qualification required." });
  }
  return result;
}
