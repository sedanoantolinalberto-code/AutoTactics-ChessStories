/**
 * Chess Stories — EP01 cross-layer routing guard v0.1 (UNEXECUTED DRAFT)
 *
 * SOURCE ONLY. This function neither imports an oracle nor performs chess
 * replay, FEN verification, I/O, rendering, tests, or external process calls.
 * The case and overlay inputs must be trusted, schema-validated ordinary JSON
 * records supplied by an independently qualified caller.
 *
 * A consistent routing plan is NOT permission to execute, render or publish.
 */
const EP01 = "ED-CASE-REAL-01";
const EVENT_IDS = Object.freeze([
  "T01","T02","T03","T04","T05","T06",
  "T07","T08","T09","T10","T11","T12"
]);
const KIND = Object.freeze({
  SET_POSITION:"INITIALIZE_DECLARED_BOARD_ONLY",
  REAL_MOVE:"QUALIFIED_RULES_ORACLE_SINGLE_MOVE_REQUIRED",
  REWIND:"EDITORIAL_REWIND_NOT_CHESS_MOVE",
  ENTER_HYPOTHETICAL:"EDITORIAL_HYPOTHETICAL_CONTEXT_SWITCH",
  HYPOTHETICAL_MOVE:"QUALIFIED_RULES_ORACLE_UNPLAYED_SINGLE_MOVE_REQUIRED",
  RETURN_TO_REAL:"EDITORIAL_EXACT_ANCHOR_RESTORE",
  ELLIPSIS:"INCONCLUSIVE_UNTIL_FULL_ATTESTED_GAP_REPLAY",
  SEQUENCE_END:"EDITORIAL_CLOSURE_NOT_GAME_TERMINATION"
});
const FROZEN = Object.freeze({
  R6:"PENDING",
  IVV_GLOBAL:"NOT APPROVED",
  "ED-CASE-REAL-01":"NOT APPROVED",
  E5B4D:"NO-GO under failure model M",
  PERMISSION_TO_PUBLISH:false
});
const isRecord = x => x!==null && typeof x==="object" && !Array.isArray(x);
const plainText = x => typeof x==="string" && x.length>0 && x.length<=4096;
const own = (o,k) => Object.prototype.hasOwnProperty.call(o,k);

/**
 * @param {object} caseV02 - independently validated v0.2 EP01 documentary case
 * @param {object} overlayV01 - independently validated 12-event overlay mapping
 * @returns {object} routing observation with unconditional NO-GO execution,
 *                   render and publication flags
 */
export function proposeEp01Routing(caseV02, overlayV01) {
  const faults=[];
  function fault(code,source) {
    if(faults.length<64) faults.push({code,source});
  }
  function response(routes=[]) {
    return {
      decision:faults.length ? "REJECTED_SOURCE_ROUTING" : "SOURCE_ROUTING_PROPOSAL_ONLY",
      faults,
      event_routes:routes,
      execution_authorized:false,
      legal_oracle_qualified:false,
      human_ivv_approved:false,
      commercial_rights_cleared:false,
      safe_to_render:false,
      safe_to_publish:false,
      policy_b_qualified_under_m:false,
      historical_score_authenticated:false,
      evidence_scope:"DOCUMENTARY_CROSS_REFERENCES_ONLY_NOT_EXECUTED"
    };
  }
  if(!isRecord(caseV02)||!isRecord(overlayV01)) {
    fault("INPUT_RECORDS_REQUIRED","$");
    return response();
  }
  if(caseV02.case_id!==EP01||caseV02.schema_version!=="chess-stories-semantic-case/0.2")
    fault("EP01_V02_ONLY","case");
  if(overlayV01.case_id!==EP01 ||
    overlayV01.artifact_version!=="chess-stories-ep01-truth-overlay-map/0.1-draft")
    fault("OVERLAY_VERSION_OR_CASE","overlay");
  if(caseV02.status!=="DOCUMENTARY_CANDIDATE_NOT_APPROVED")
    fault("CASE_STATUS_UNAUTHORIZED","case.status");
  for(const [k,v] of Object.entries(FROZEN)) {
    if(!isRecord(caseV02.frozen_gates)||caseV02.frozen_gates[k]!==v)
      fault("FROZEN_GATE_MISMATCH","frozen_gates."+k);
  }
  const exec=caseV02.execution_policy;
  if(!isRecord(exec) ||
     exec.execution_authorized!==false ||
     exec.policy!=="STRICT_POLICY_B" ||
     exec.failure_model!=="M" ||
     exec.runner_qualification!=="NOT_ESTABLISHED" ||
     exec.termination_deadline_seconds_exclusive!==120 ||
     exec.stdout_lifetime_emitted_accepted_limit_bytes!==1048576 ||
     exec.stderr_lifetime_emitted_accepted_limit_bytes!==1048576 ||
     exec.stream_limits_independent!==true ||
     exec.schema_validation_establishes_compliance!==false)
    fault("POLICY_B_UNCHANGED_REQUIRED","case.execution_policy");
  if(!Array.isArray(caseV02.timeline)||!Array.isArray(overlayV01.overlays)||
    caseV02.timeline.length!==12||overlayV01.overlays.length!==12) {
    fault("EP01_TWELVE_EVENTS_REQUIRED","timeline");
    return response();
  }
  if(!Array.isArray(caseV02.states)) {
    fault("EP01_STATES_REQUIRED","states");
    return response();
  }
  const states=new Map();
  for(const s of caseV02.states) {
    if(!isRecord(s)||!plainText(s.id)||states.has(s.id)) {
      fault("STATE_REGISTRY_INVALID","states");continue;
    }
    states.set(s.id,s);
  }
  if(states.size!==6) fault("EP01_SIX_STATES_REQUIRED","states");
  const routes=[];
  for(let i=0;i<12;i++) {
    const event=caseV02.timeline[i],ov=overlayV01.overlays[i];
    if(!isRecord(event)||!isRecord(ov)) {
      fault("EVENT_OR_OVERLAY_INVALID","timeline["+i+"]");continue;
    }
    const id=EVENT_IDS[i], p="event."+id;
    if(event.id!==id||ov.id!==id||ov.event_kind!==event.kind)
      fault("EVENT_ORDER_KIND_MISMATCH",p);
    if(!own(KIND,event.kind)) {
      fault("UNKNOWN_EVENT_KIND",p);continue;
    }
    for(const [a,b] of [
      ["from_branch_id","from_branch_id"],["to_branch_id","to_branch_id"],
      ["from_state","from_state_id"],["to_state","to_state_id"]
    ]) if(event[a]!==ov[b])fault("OVERLAY_REFERENCE_MISMATCH",p+"."+a);
    const originalClaims=event.claim_refs,overlaidClaims=ov.claim_references;
    if(!Array.isArray(originalClaims)||!Array.isArray(overlaidClaims)||
      originalClaims.length!==overlaidClaims.length||
      originalClaims.some((v,j)=>v!==overlaidClaims[j]))
      fault("OVERLAY_CLAIM_REFERENCES_MISMATCH",p);
    if(event.to_state!==null && !states.has(event.to_state))
      fault("UNKNOWN_TO_STATE",p);
    if(event.from_state!==null && !states.has(event.from_state))
      fault("UNKNOWN_FROM_STATE",p);
    if(!plainText(ov.display_label)||!plainText(ov.rendering_policy))
      fault("TRUTH_OVERLAY_MISSING",p);
    const isAlt=id==="T05"||id==="T06";
    if(isAlt&&(!ov.persistent_hypothetical ||
       !ov.display_label.includes("HIPOTÉTICA")||
       !ov.display_label.includes("NO JUGADA")))
      fault("HYPOTHETICAL_WARNING_MISSING",p);
    if(id==="T06"&&
       (event.kind!=="HYPOTHETICAL_MOVE" ||
        event.to_branch_id!=="ALT_QD8" ||event.move?.san!=="Qd8"))
      fault("T06_UNPLAYED_QD8_MISMATCH",p);
    if(id==="T07"&&
       (event.kind!=="RETURN_TO_REAL" ||event.from_branch_id!=="ALT_QD8"||
        event.to_branch_id!=="MAIN"||event.from_state!=="V-HYP"||
        event.to_state!=="V-P1"||
        ov.hypothetical_warning_release_rule!==
          "ONLY_AFTER_EXACT_V-P1_REAL_BOARD_AND_MAIN_CONTEXT_RESTORED"))
      fault("T07_ATOMIC_RETURN_MISMATCH",p);
    if(id==="T10") {
      const range=event.omitted_plies, overlayRange=ov.mandatory_omission;
      if(event.kind!=="ELLIPSIS" ||
        event.from_state!=="V-REAL"||event.to_state!=="V-PRE-EV2"||
        !isRecord(range)||range.first!==36||range.last!==49||
        !isRecord(overlayRange)||overlayRange.first_ply!==36||
        overlayRange.last_ply!==49)
        fault("T10_REAL_GAP_DISCLOSURE_MISMATCH",p);
    }
    if(id==="T11"&&(event.kind!=="REAL_MOVE"||
       event.move?.san!=="Nxd1"||event.from_state!=="V-PRE-EV2"||
       event.to_state!=="V-EV2"))
      fault("T11_ROOK_CAPTURE_MISMATCH",p);
    if(id==="T12"&&(event.kind!=="SEQUENCE_END"||
        event.to_state!=="V-EV2"|| !ov.display_label.includes("PARTIDA CONTINÚA")))
      fault("T12_EDITORIAL_END_MISMATCH",p);
    routes.push({
      event_id:id,kind:event.kind,oracle_or_editorial_route:KIND[event.kind],
      display_overlay:ov.display_label,
      externally_checked_legality:"NOT_RUN",
      source_historical_witness:"NOT_AUTHENTICATED",
      factuality_label_held_while_alt_or_return:isAlt||id==="T07",
      measured_frame_timing:null,
      legal_media_assets_cleared:false
    });
  }
  if(caseV02.sequence_end?.state_id!=="V-EV2"||
     caseV02.sequence_end?.historical_relation!=="GAME_CONTINUES")
    fault("PILOT_HISTORY_CONTINUATION_REQUIRED","sequence_end");
  // Even perfect documentary correspondence cannot establish execution safety.
  return response(routes);
}
