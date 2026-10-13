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
  "IVV-01": "PASS LIMITED",
  "IVV-02": "PASS LIMITED",
  "IVV-03": "PENDING",
  "IVV-04": "PASS LIMITED",
  "IVV-05": "PENDING",
  "IVV-06": "PENDING",
  "IVV-07": "PASS LIMITED",
  "IVV-08": "PASS LIMITED",
  "IVV-09": "PENDING",
  "IVV-10": "PENDING",
  "IVV-11": "PASS LIMITED",
  "IVV-12": "PENDING",
  "R6": "PENDING",
  "IVV_GLOBAL": "NOT APPROVED",
  "ED-CASE-REAL-01": "NOT APPROVED",
  "CASE_APPROVAL": "NOT APPROVED",
  "MOTION_GATE_2": "NOT PASSED",
  "GATE_3": "NOT RUN",
  "SI-G0": "NOT RUN",
  "E5B4D": "NO-GO under failure model M",
  "FOOTBALL_P1": "NO-GO",
  "PERMISSION_TO_PUBLISH": false
});
const EXEC_POLICY = Object.freeze({
  "policy": "STRICT_POLICY_B",
  "failure_model": "M",
  "execution_authorized": false,
  "runner_qualification": "NOT_ESTABLISHED",
  "termination_requirement": "ALL_RELEVANT_PROCESSES_TERMINATED_AND_TERMINATION_CONFIRMED_BEFORE_DEADLINE",
  "termination_deadline_seconds_exclusive": 120,
  "stdout_lifetime_emitted_accepted_limit_bytes": 1048576,
  "stderr_lifetime_emitted_accepted_limit_bytes": 1048576,
  "stream_limits_independent": true,
  "schema_validation_establishes_compliance": false
});
const PINNED_STATE_DECLARATIONS = Object.freeze({
  "V-P1": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 33,
    "fen": "r3r1k1/pp3pbp/1qp3p1/2B5/2BP2b1/Q1n2N2/P4PPP/3R1K1R b - - 3 17"
  },
  "V-EV1": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 34,
    "fen": "r3r1k1/pp3pbp/1qp1b1p1/2B5/2BP4/Q1n2N2/P4PPP/3R1K1R w - - 4 18"
  },
  "V-REAL": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 35,
    "fen": "r3r1k1/pp3pbp/1Bp1b1p1/8/2BP4/Q1n2N2/P4PPP/3R1K1R b - - 0 18"
  },
  "V-HYP": {
    "branch_id": "ALT_QD8",
    "factuality": "HYPOTHETICAL",
    "ply": 34,
    "fen": "r2qr1k1/pp3pbp/2p3p1/2B5/2BP2b1/Q1n2N2/P4PPP/3R1K1R w - - 4 18"
  },
  "V-PRE-EV2": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 49,
    "fen": "4r1k1/1p3pbp/1Qp3p1/8/r1b5/2n2N2/P4PPP/3R2KR b - - 0 25"
  },
  "V-EV2": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 50,
    "fen": "4r1k1/1p3pbp/1Qp3p1/8/r1b5/5N2/P4PPP/3n2KR w - - 0 26"
  }
});
const PINNED_EVENT_KINDS = Object.freeze([
  "SET_POSITION",
  "REAL_MOVE",
  "REAL_MOVE",
  "REWIND",
  "ENTER_HYPOTHETICAL",
  "HYPOTHETICAL_MOVE",
  "RETURN_TO_REAL",
  "REAL_MOVE",
  "REAL_MOVE",
  "ELLIPSIS",
  "REAL_MOVE",
  "SEQUENCE_END"
]);
const PINNED_EVENT_DECLARATIONS = Object.freeze([
  {
    "kind": "SET_POSITION",
    "from_branch_id": null,
    "to_branch_id": "MAIN",
    "from_state": null,
    "to_state": "V-P1",
    "move": null,
    "omitted_plies": null
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-P1",
    "to_state": "V-EV1",
    "move": {
      "san": "Be6",
      "from": "g4",
      "to": "e6",
      "moving_piece": "B",
      "moving_color": "black",
      "special_move": "NONE"
    },
    "omitted_plies": null
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-EV1",
    "to_state": "V-REAL",
    "move": {
      "san": "Bxb6",
      "from": "c5",
      "to": "b6",
      "moving_piece": "B",
      "moving_color": "white",
      "special_move": "NONE",
      "capture": {
        "captured_piece": "Q",
        "captured_color": "black",
        "capture_square": "b6"
      }
    },
    "omitted_plies": null
  },
  {
    "kind": "REWIND",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-REAL",
    "to_state": "V-P1",
    "move": null,
    "omitted_plies": null
  },
  {
    "kind": "ENTER_HYPOTHETICAL",
    "from_branch_id": "MAIN",
    "to_branch_id": "ALT_QD8",
    "from_state": "V-P1",
    "to_state": "V-P1",
    "move": null,
    "omitted_plies": null
  },
  {
    "kind": "HYPOTHETICAL_MOVE",
    "from_branch_id": "ALT_QD8",
    "to_branch_id": "ALT_QD8",
    "from_state": "V-P1",
    "to_state": "V-HYP",
    "move": {
      "san": "Qd8",
      "from": "b6",
      "to": "d8",
      "moving_piece": "Q",
      "moving_color": "black",
      "special_move": "NONE"
    },
    "omitted_plies": null
  },
  {
    "kind": "RETURN_TO_REAL",
    "from_branch_id": "ALT_QD8",
    "to_branch_id": "MAIN",
    "from_state": "V-HYP",
    "to_state": "V-P1",
    "move": null,
    "omitted_plies": null
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-P1",
    "to_state": "V-EV1",
    "move": {
      "san": "Be6",
      "from": "g4",
      "to": "e6",
      "moving_piece": "B",
      "moving_color": "black",
      "special_move": "NONE"
    },
    "omitted_plies": null
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-EV1",
    "to_state": "V-REAL",
    "move": {
      "san": "Bxb6",
      "from": "c5",
      "to": "b6",
      "moving_piece": "B",
      "moving_color": "white",
      "special_move": "NONE",
      "capture": {
        "captured_piece": "Q",
        "captured_color": "black",
        "capture_square": "b6"
      }
    },
    "omitted_plies": null
  },
  {
    "kind": "ELLIPSIS",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-REAL",
    "to_state": "V-PRE-EV2",
    "move": null,
    "omitted_plies": {
      "first": 36,
      "last": 49,
      "semantics": "INCLUSIVE_MOVES_NOT_SHOWN"
    }
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-PRE-EV2",
    "to_state": "V-EV2",
    "move": {
      "san": "Nxd1",
      "from": "c3",
      "to": "d1",
      "moving_piece": "N",
      "moving_color": "black",
      "special_move": "NONE",
      "capture": {
        "captured_piece": "R",
        "captured_color": "white",
        "capture_square": "d1"
      }
    },
    "omitted_plies": null
  },
  {
    "kind": "SEQUENCE_END",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-EV2",
    "to_state": "V-EV2",
    "move": null,
    "omitted_plies": null
  }
]);
// v0.2 defines anchor keys by event kind. Pin the EP01 values as well as
// their presence, so an otherwise schema-shaped context switch cannot drift.
const PINNED_EVENT_ANCHORS = Object.freeze({
  "T05": Object.freeze({shared_anchor_state_id:"V-P1",return_anchor_state_id:"V-P1"}),
  "T07": Object.freeze({return_anchor_state_id:"V-P1"})
});
const ANCHOR_FIELDS = Object.freeze(["shared_anchor_state_id","return_anchor_state_id"]);

const PINNED_EVENT_PROVENANCE = Object.freeze({
  "disclosure": [
    "PARTIDA REAL",
    "PARTIDA REAL",
    "PARTIDA REAL",
    "REBOBINADO A 17.Kf1",
    "ALTERNATIVA NO JUGADA",
    "VARIANTE HIPOTÉTICA — NO JUGADA",
    "VOLVEMOS A LA PARTIDA REAL: 17.Kf1",
    "PARTIDA REAL",
    "PARTIDA REAL",
    "SALTO TEMPORAL: SE OMITEN JUGADAS DE LA PARTIDA REAL",
    "PARTIDA REAL — LA PARTIDA CONTINÚA",
    "CIERRE EDITORIAL: NO ES EL FINAL DE LA PARTIDA"
  ],
  "claim_refs": [
    [],
    [
      "CLAIM-REAL-MOVES"
    ],
    [
      "CLAIM-REAL-MOVES"
    ],
    [],
    [
      "CLAIM-HYPOTHETICAL-QD8"
    ],
    [
      "CLAIM-HYPOTHETICAL-QD8"
    ],
    [],
    [
      "CLAIM-REAL-MOVES"
    ],
    [
      "CLAIM-REAL-MOVES"
    ],
    [
      "CLAIM-EDITORIAL-ELLIPSIS"
    ],
    [
      "CLAIM-REAL-MOVES",
      "CLAIM-CONTINUATION"
    ],
    [
      "CLAIM-CONTINUATION",
      "CLAIM-EDITORIAL-END"
    ]
  ],
  "evidence_refs": [
    [
      "EVID-LEDGER-R2"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-LEDGER-R2"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-SUPPLIED-CASE-CONTEXT"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-SUPPLIED-CASE-CONTEXT"
    ],
    [
      "EVID-LEDGER-R2"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-R2-RESULTS",
      "EVID-LEDGER-R2"
    ],
    [
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ]
  ],
  "asset_refs": [
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ]
  ],
  "timing": [
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    }
  ]
});
const PINNED_VISUAL_TRUTH = Object.freeze([
  {
    "id": "T01",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T02",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T03",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T04",
    "label": "REBOBINADO · PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T05",
    "label": "HIPOTÉTICA · NO JUGADA",
    "persistent_hypothetical": true,
    "audio_independent_factuality_label": true,
    "release_rule": "NEVER_DURING_HYPOTHETICAL_FRAMES"
  },
  {
    "id": "T06",
    "label": "HIPOTÉTICA · NO JUGADA",
    "persistent_hypothetical": true,
    "audio_independent_factuality_label": true,
    "release_rule": "NEVER_DURING_HYPOTHETICAL_FRAMES"
  },
  {
    "id": "T07",
    "label": "REGRESO A LA PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "ONLY_AFTER_EXACT_V-P1_REAL_BOARD_AND_MAIN_CONTEXT_RESTORED"
  },
  {
    "id": "T08",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T09",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T10",
    "label": "SE OMITEN JUGADAS REALES",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T11",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T12",
    "label": "CIERRE EDITORIAL · LA PARTIDA CONTINÚA",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  }
]);
const PINNED_RENDERING_POLICY = Object.freeze([
  "Set declared real board and real context before any move.",
  "Display real 17...Be6, do not infer optimality or intentions.",
  "Display real 18.Bxb6 queen capture; real game continues.",
  "Explicit rewind animation; no inverse chess move asserted.",
  "Raise hypothetical label before any unplayed move animation begins.",
  "Maintain persistent hypothetical label for all frames of 17...Qd8.",
  "Replace exact real board V-P1 before releasing hypothetical warning; show return banner.",
  "Resume the 17...Be6 real event without silent variant leak.",
  "Resume 18.Bxb6 real event on MAIN before timeline jump.",
  "Declare fourteen omitted real plies, 36 through 49 inclusive; never interpolate an invented game sequence.",
  "Show real 25...Nxd1 and correctly identify the white rook capture.",
  "Show editorial closure, NOT a historical end or checkmate."
]);
const PINNED_STORY_TRUTH = Object.freeze({
  hypothetical_move:"17...Qd8",
  hypothetical_historical_status:"UNPLAYED",
  real_move:"17...Be6",
  queen_taken_at:"18.Bxb6",
  rook_taken_at:"25...Nxd1",
  editorial_end_state:"V-EV2",
  editorial_end_ply:50,
  final_source_candidate:"41...Rc2# ply 82; secondary witness only",
  historical_primary_authentication:"NOT_VERIFIED"
});
const PINNED_OVERLAY_RELEASE = Object.freeze({
  permit:false,
  R6:"PENDING",
  IVV_GLOBAL:"NOT APPROVED"
});
const isRecord = x => x!==null && typeof x==="object" && !Array.isArray(x);
const plainText = x => typeof x==="string" && x.length>0 && x.length<=4096;
const own = (o,k) => Object.prototype.hasOwnProperty.call(o,k);
/**
 * Bounded structural equality for plain prevalidated JSON. Unlike stringify,
 * object member order cannot make an otherwise identical move declaration
 * appear different. This is still NOT a hostile-input or raw-byte validator.
 */
function sameDeclaredJson(left,right) {
  const pending=[[left,right]];
  let visited=0;
  while(pending.length) {
    if(++visited>1024) return false;
    const [a,b]=pending.pop();
    if(a===b) continue;
    if(Array.isArray(a)&&Array.isArray(b)) {
      if(a.length!==b.length) return false;
      for(let j=0;j<a.length;j++) pending.push([a[j],b[j]]);
    } else if(isRecord(a)&&isRecord(b)) {
      const ak=Object.keys(a).sort(),bk=Object.keys(b).sort();
      if(ak.length!==bk.length||ak.some((key,j)=>key!==bk[j])) return false;
      for(const key of ak) pending.push([a[key],b[key]]);
    } else return false;
  }
  return true;
}

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
      event_routes:faults.length ? [] : routes,
      rejected_routes_suppressed:faults.length>0,
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
  if(overlayV01.source_document!=="cases/ED-CASE-REAL-01.v0.2.json" ||
     overlayV01.source_document_commit!=="chess-stories/semantic-contract-v0.2" ||
     overlayV01.source_document_ref_kind!=="BRANCH_LABEL_NOT_IMMUTABLE" ||
     overlayV01.source_document_head_commit_sha_observed!=="8e3da6639060a1605947bfc3aedd4113ab0068a1" ||
     overlayV01.source_document_git_blob_sha_observed!=="3514f19ac355763a5b4c61d5c573df090b0eccc1" ||
     overlayV01.source_identity_qualification!=="GIT_REPOSITORY_IDENTITY_ONLY_NOT_RAW_SHA256_BYTE_TRUST")
    fault("OVERLAY_SOURCE_BINDING_CHANGED","overlay");
  if(overlayV01.status!=="EDITORIAL_SPEC_NOT_RENDERED" ||
     overlayV01.all_time_values!=="UNSPECIFIED_UNMEASURED" ||
     overlayV01.frame_timing!==null)
    fault("OVERLAY_TOP_LEVEL_STATE_CHANGED","overlay");
  if(overlayV01.muted_viewing_requirements!==
       "No sound is required to distinguish real vs hypothetical; overlays are persistent by design.")
    fault("OVERLAY_MUTED_TRUTH_REQUIREMENT_CHANGED","overlay.muted_viewing_requirements");
  if(overlayV01.policy_disclosure_attribution!==
       "Case source candidates; not original-history authentication")
    fault("OVERLAY_PROVENANCE_ATTRIBUTION_CHANGED","overlay.policy_disclosure_attribution");
  if(!sameDeclaredJson(overlayV01.release,PINNED_OVERLAY_RELEASE))
    fault("OVERLAY_RELEASE_STATE_CHANGED","overlay.release");
  if(!sameDeclaredJson(overlayV01.mandatory_story_truth,PINNED_STORY_TRUTH))
    fault("OVERLAY_STORY_TRUTH_CHANGED","overlay.mandatory_story_truth");
  if(caseV02.status!=="DOCUMENTARY_CANDIDATE_NOT_APPROVED")
    fault("CASE_STATUS_UNAUTHORIZED","case.status");
  for(const [k,v] of Object.entries(FROZEN)) {
    if(!isRecord(caseV02.frozen_gates)||caseV02.frozen_gates[k]!==v)
      fault("FROZEN_GATE_MISMATCH","frozen_gates."+k);
  }
  const exec=caseV02.execution_policy;
  for(const [k,v] of Object.entries(EXEC_POLICY)) {
    if(!isRecord(exec)||exec[k]!==v)
      fault("POLICY_B_UNCHANGED_REQUIRED","case.execution_policy."+k);
  }
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
  for(const [id,pinned] of Object.entries(PINNED_STATE_DECLARATIONS)){
    const actual=states.get(id);
    if(!actual || Object.entries(pinned).some(([key,val])=>actual[key]!==val))
      fault("EP01_PINNED_STATE_CHANGED","states."+id);
  }

  const routes=[];
  for(let i=0;i<12;i++) {
    const event=caseV02.timeline[i],ov=overlayV01.overlays[i];
    if(!isRecord(event)||!isRecord(ov)) {
      fault("EVENT_OR_OVERLAY_INVALID","timeline["+i+"]");continue;
    }
    const id=EVENT_IDS[i], p="event."+id;
    if(event.id!==id||ov.id!==id||ov.event_kind!==event.kind)
      fault("EVENT_ORDER_KIND_MISMATCH",p);
    if(event.kind!==PINNED_EVENT_KINDS[i])
      fault("EP01_EVENT_FACTUALITY_CHANGED",p);
    const pinned=PINNED_EVENT_DECLARATIONS[i];
    for(const key of ["from_branch_id","to_branch_id","from_state","to_state"]){
      if(event[key]!==pinned[key]) fault("EP01_TRANSITION_CHANGED",p+"."+key);
    }
    // This EP01-only guard compares exact documentary move and gap declarations,
    // not independent move legality, historical source bytes or PGN authenticity.
    // Schema v0.2 requires "move" only for move kinds and "omitted_plies"
    // only for ELLIPSIS; other event kinds prohibit these keys entirely.
    // Reinforce that prevalidation boundary without treating missing as null.
    if(own(event,"move") !== (pinned.move!==null) ||
       own(event,"omitted_plies") !== (pinned.omitted_plies!==null) ||
       (own(event,"move") && !sameDeclaredJson(event.move,pinned.move)) ||
       (own(event,"omitted_plies") && !sameDeclaredJson(event.omitted_plies,pinned.omitted_plies)))
      fault("EP01_MOVE_OR_GAP_DECLARATION_CHANGED",p);
    const anchors=PINNED_EVENT_ANCHORS[id]??{};
    for(const key of ANCHOR_FIELDS) {
      const required=own(anchors,key),present=own(event,key);
      if(present!==required || (present && event[key]!==anchors[key]))
        fault("EP01_EVENT_ANCHOR_CHANGED",p+"."+key);
    }
    if(event.disclosure!==PINNED_EVENT_PROVENANCE.disclosure[i] ||
       !sameDeclaredJson(event.claim_refs,PINNED_EVENT_PROVENANCE.claim_refs[i]) ||
       !sameDeclaredJson(event.evidence_refs,PINNED_EVENT_PROVENANCE.evidence_refs[i]) ||
       !sameDeclaredJson(event.asset_refs,PINNED_EVENT_PROVENANCE.asset_refs[i]) ||
       !sameDeclaredJson(event.timing,PINNED_EVENT_PROVENANCE.timing[i]))
      fault("EP01_EVENT_EVIDENCE_OR_TIMING_CHANGED",p);
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
    const truth=PINNED_VISUAL_TRUTH[i];
    if(ov.id!==truth.id ||
       ov.display_label!==truth.label ||
       ov.persistent_hypothetical!==truth.persistent_hypothetical ||
       ov.audio_independent_factuality_label!==true ||
       ov.hypothetical_warning_release_rule!==truth.release_rule)
      fault("EP01_VISUAL_FACTUALITY_CHANGED",p);
    const expectedDisplayedMove =
      (event.kind==="REAL_MOVE"||event.kind==="HYPOTHETICAL_MOVE")
        ? (event.move?.san??null) : null;
    const expectedOmission=id==="T10"
      ? {first_ply:36,last_ply:49,language:"14 medias jugadas omitidas"}
      : null;
    if(ov.index!==i+1 ||
       ov.display_label_required!==true ||
       ov.special_atomic_return!==(id==="T07") ||
       ov.displayed_chess_move!==expectedDisplayedMove ||
       !sameDeclaredJson(ov.mandatory_omission,expectedOmission) ||
       ov.rendering_policy!==PINNED_RENDERING_POLICY[i] ||
       ov.shot_start_ms!==null || ov.shot_end_ms!==null ||
       ov.voice_start_ms!==null || ov.voice_end_ms!==null ||
       ov.visual_comprehension_test!=="NOT_RUN" ||
       ov.historical_authentication!=="NOT_VERIFIED")
      fault("EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",p);
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
