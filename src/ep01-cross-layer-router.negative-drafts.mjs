/**
 * CHESS-INTEGRATION-01B — proposed source-level negative cases.
 * DO NOT AUTO-EXECUTE. Policy B executor qualification remains unavailable.
 * These mutations run only if a later authorized, qualified caller explicitly
 * invokes the exported future harness. Their presence is not test evidence.
 */
const clone = x => JSON.parse(JSON.stringify(x));
const event=(x,id)=>x.timeline.find(v=>v.id===id);
const overlay=(x,id)=>x.overlays.find(v=>v.id===id);
const state=(x,id)=>x.states.find(v=>v.id===id);

export const ROUTING_NEGATIVE_CASES=[
  {id:"IR-01",description:"Foreign case ID",expected:"EP01_V02_ONLY",
   mutate:(c,o)=>{c.case_id="ED-CASE-REAL-02";}},
  {id:"IR-02",description:"Unsupported case schema version",expected:"EP01_V02_ONLY",
   mutate:(c,o)=>{c.schema_version="chess-stories-semantic-case/0.3-draft";}},
  {id:"IR-03",description:"Case self-promotes to approved",expected:"CASE_STATUS_UNAUTHORIZED",
   mutate:(c,o)=>{c.status="APPROVED";}},
  {id:"IR-04",description:"R6 falsely changed to CLEARED",expected:"FROZEN_GATE_MISMATCH",
   mutate:(c,o)=>{c.frozen_gates.R6="CLEARED";}},
  {id:"IR-05",description:"Case falsely authorizes execution",expected:"POLICY_B_UNCHANGED_REQUIRED",
   mutate:(c,o)=>{c.execution_policy.execution_authorized=true;}},
  {id:"IR-06",description:"Policy B termination deadline silently changed",expected:"POLICY_B_UNCHANGED_REQUIRED",
   mutate:(c,o)=>{c.execution_policy.termination_deadline_seconds_exclusive=121;}},
  {id:"IR-07",description:"Missing timeline event",expected:"EP01_TWELVE_EVENTS_REQUIRED",
   mutate:(c,o)=>{c.timeline=c.timeline.filter(x=>x.id!=="T07");}},
  {id:"IR-08",description:"Missing overlay record",expected:"EP01_TWELVE_EVENTS_REQUIRED",
   mutate:(c,o)=>{o.overlays=o.overlays.filter(x=>x.id!=="T10");}},
  {id:"IR-09",description:"Narrative event IDs exchanged",expected:"EVENT_ORDER_KIND_MISMATCH",
   mutate:(c,o)=>{const a=c.timeline.findIndex(x=>x.id==="T05"),b=c.timeline.findIndex(x=>x.id==="T06");[c.timeline[a],c.timeline[b]]=[c.timeline[b],c.timeline[a]];}},
  {id:"IR-10",description:"Duplicate state ID",expected:"STATE_REGISTRY_INVALID",
   mutate:(c,o)=>{c.states[1].id=c.states[0].id;}},
  {id:"IR-11",description:"Overlay points at wrong board state",expected:"OVERLAY_REFERENCE_MISMATCH",
   mutate:(c,o)=>{overlay(o,"T03").to_state_id="V-EV2";}},
  {id:"IR-12",description:"Event references unknown destination state",expected:"UNKNOWN_TO_STATE",
   mutate:(c,o)=>{event(c,"T02").to_state="V-UNKNOWN";}},
  {id:"IR-13",description:"Overlay loses a factual claim reference",expected:"OVERLAY_CLAIM_REFERENCES_MISMATCH",
   mutate:(c,o)=>{overlay(o,"T11").claim_references=["CLAIM-UNKNOWN"];}},
  {id:"IR-14",description:"Hypothetical opening marker omitted",expected:"HYPOTHETICAL_WARNING_MISSING",
   mutate:(c,o)=>{overlay(o,"T05").persistent_hypothetical=false;}},
  {id:"IR-15",description:"Hypothetical move mislabeled as real",expected:"HYPOTHETICAL_WARNING_MISSING",
   mutate:(c,o)=>{overlay(o,"T06").display_label="PARTIDA REAL";}},
  {id:"IR-16",description:"Nonhistorical alternative replaced silently by played bishop move",expected:"T06_UNPLAYED_QD8_MISMATCH",
   mutate:(c,o)=>{event(c,"T06").move.san="Be6";}},
  {id:"IR-17",description:"Return removes warning before exact restoration",expected:"T07_ATOMIC_RETURN_MISMATCH",
   mutate:(c,o)=>{overlay(o,"T07").hypothetical_warning_release_rule="BEFORE_RETURN";}},
  {id:"IR-18",description:"T07 returns to nonhistorical board",expected:"T07_ATOMIC_RETURN_MISMATCH",
   mutate:(c,o)=>{event(c,"T07").to_state="V-HYP";}},
  {id:"IR-19",description:"Ellipsis omits wrong first ply",expected:"T10_REAL_GAP_DISCLOSURE_MISMATCH",
   mutate:(c,o)=>{event(c,"T10").omitted_plies.first=37;}},
  {id:"IR-20",description:"Ellipsis overlay incorrectly states omitted last ply",expected:"T10_REAL_GAP_DISCLOSURE_MISMATCH",
   mutate:(c,o)=>{overlay(o,"T10").mandatory_omission.last_ply=48;}},
  {id:"IR-21",description:"Rook capture replaced by false SAN",expected:"T11_ROOK_CAPTURE_MISMATCH",
   mutate:(c,o)=>{event(c,"T11").move.san="Qxd1";}},
  {id:"IR-22",description:"Editorial ending presented as historical game end",expected:"T12_EDITORIAL_END_MISMATCH",
   mutate:(c,o)=>{overlay(o,"T12").display_label="FIN DE LA PARTIDA";}},
  {id:"IR-23",description:"Game continuation hidden from sequence end",expected:"PILOT_HISTORY_CONTINUATION_REQUIRED",
   mutate:(c,o)=>{c.sequence_end.historical_relation="GAME_ENDED";}},
  {id:"IR-24",description:"Remove EP01 position registry entirely",expected:"EP01_STATES_REQUIRED",
   mutate:(c,o)=>{delete c.states;}},
  {id:"IR-25",description:"Remove all six state entries",expected:"EP01_SIX_STATES_REQUIRED",
   mutate:(c,o)=>{c.states=[];}},
  {id:"IR-27",description:"Historical bishop position silently replaced",expected:"EP01_PINNED_STATE_CHANGED",
   mutate:(c,o)=>{state(c,"V-P1").fen="8/8/8/8/8/8/8/8 b - - 3 17";}},
  {id:"IR-28",description:"Hypothetical V-HYP rewritten as real factuality",expected:"EP01_PINNED_STATE_CHANGED",
   mutate:(c,o)=>{state(c,"V-HYP").factuality="REAL";}},
  {id:"IR-29",description:"T02 real move silently reclassified as hypothetical in both case and overlay",expected:"EP01_EVENT_FACTUALITY_CHANGED",
   mutate:(c,o)=>{event(c,"T02").kind="HYPOTHETICAL_MOVE";overlay(o,"T02").event_kind="HYPOTHETICAL_MOVE";}},
  {id:"IR-30",description:"IVV-03 falsely changed to PASS LIMITED",expected:"FROZEN_GATE_MISMATCH",
   mutate:(c,o)=>{c.frozen_gates["IVV-03"]="PASS LIMITED";}},
  {id:"IR-31",description:"Termination confirmation condition weakened without changing deadline",expected:"POLICY_B_UNCHANGED_REQUIRED",
   mutate:(c,o)=>{c.execution_policy.termination_requirement="TIMEOUT_ONLY";}},
  {id:"IR-32",description:"Technical pre-capture ply changed without explicit case version",expected:"EP01_PINNED_STATE_CHANGED",
   mutate:(c,o)=>{state(c,"V-PRE-EV2").ply=48;}},
  {id:"IR-33",description:"T02 played move SAN silently changed while source and target boards remain fixed",expected:"EP01_MOVE_OR_GAP_DECLARATION_CHANGED",
   mutate:(c,o)=>{event(c,"T02").move.san="Qd8";}},
  {id:"IR-34",description:"T11 rook capture victim covertly replaced by a bishop",expected:"EP01_MOVE_OR_GAP_DECLARATION_CHANGED",
   mutate:(c,o)=>{event(c,"T11").move.capture.captured_piece="B";}},
  {id:"IR-35",description:"T09 real continuation silently moved to alternative branch with matching overlay change",expected:"EP01_TRANSITION_CHANGED",
   mutate:(c,o)=>{event(c,"T09").to_branch_id="ALT_QD8";overlay(o,"T09").to_branch_id="ALT_QD8";}},
  {id:"IR-36",description:"T10 omitted plies semantics text silently changed",expected:"EP01_MOVE_OR_GAP_DECLARATION_CHANGED",
   mutate:(c,o)=>{event(c,"T10").omitted_plies.semantics="NOT_REAL_MOVES";}},
  {id:"IR-37",description:"T02 real move is mislabeled as hypothetical",expected:"EP01_VISUAL_FACTUALITY_CHANGED",
   mutate:(c,o)=>{overlay(o,"T02").display_label="HIPOTÉTICA · NO JUGADA";}},
  {id:"IR-38",description:"T05 hypothetical overlay is accessible only through sound",expected:"EP01_VISUAL_FACTUALITY_CHANGED",
   mutate:(c,o)=>{overlay(o,"T05").audio_independent_factuality_label=false;}},
  {id:"IR-39",description:"T06 removes persistent hypothetical marker but otherwise keeps the label",expected:"EP01_VISUAL_FACTUALITY_CHANGED",
   mutate:(c,o)=>{overlay(o,"T06").persistent_hypothetical=false;}},
  {id:"IR-40",description:"Event T03 evidence silently replaced by another known reference",expected:"EP01_EVENT_EVIDENCE_OR_TIMING_CHANGED",
   mutate:(c,o)=>{event(c,"T03").evidence_refs=[];}},
  {id:"IR-41",description:"T11 narration claim refs changed in both semantic and visual maps",expected:"EP01_EVENT_EVIDENCE_OR_TIMING_CHANGED",
   mutate:(c,o)=>{event(c,"T11").claim_refs=[];overlay(o,"T11").claim_references=[];}},
  {id:"IR-42",description:"A measured timing is claimed without a measured video",expected:"EP01_EVENT_EVIDENCE_OR_TIMING_CHANGED",
   mutate:(c,o)=>{event(c,"T02").timing.status="TIMING_MEASURED";}},
  {id:"IR-43",description:"T04 editorial rewind disclosure rewritten as a historical forward move",expected:"EP01_EVENT_EVIDENCE_OR_TIMING_CHANGED",
   mutate:(c,o)=>{event(c,"T04").disclosure="JUGADA HISTÓRICA";}},
  {id:"IR-44",description:"T06 warning release rule weakened to allow removal during alternative",expected:"EP01_VISUAL_FACTUALITY_CHANGED",
   mutate:(c,o)=>{overlay(o,"T06").hypothetical_warning_release_rule="AFTER_MOVE";}},
  {id:"IR-45",description:"Overlay self-promotes from unrendered editorial spec",expected:"OVERLAY_TOP_LEVEL_STATE_CHANGED",
   mutate:(c,o)=>{o.status="RENDERED_APPROVED";}},
  {id:"IR-46",description:"Overlay release permission falsely granted",expected:"OVERLAY_RELEASE_STATE_CHANGED",
   mutate:(c,o)=>{o.release.permit=true;}},
  {id:"IR-47",description:"Overlay story truth falsely promotes primary authentication",expected:"OVERLAY_STORY_TRUTH_CHANGED",
   mutate:(c,o)=>{o.mandatory_story_truth.historical_primary_authentication="VERIFIED";}},
  {id:"IR-48",description:"Hypothetical label is declared optional despite correct text",expected:"EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",
   mutate:(c,o)=>{overlay(o,"T05").display_label_required=false;}},
  {id:"IR-49",description:"Atomic return flag removed from T07",expected:"EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",
   mutate:(c,o)=>{overlay(o,"T07").special_atomic_return=false;}},
  {id:"IR-50",description:"Displayed hypothetical move text no longer matches routed SAN",expected:"EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",
   mutate:(c,o)=>{overlay(o,"T06").displayed_chess_move="Be6";}},
  {id:"IR-51",description:"T10 human-readable omitted-ply count changed while numeric endpoints stay fixed",expected:"EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",
   mutate:(c,o)=>{overlay(o,"T10").mandatory_omission.language="13 medias jugadas omitidas";}},
  {id:"IR-52",description:"Rendering policy permits hypothetical warning suppression",expected:"EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",
   mutate:(c,o)=>{overlay(o,"T06").rendering_policy="Hide hypothetical label after the first frame.";}},
  {id:"IR-53",description:"Overlay claims a shot timing despite globally unmeasured timing",expected:"EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",
   mutate:(c,o)=>{overlay(o,"T02").shot_start_ms=1;}},
  {id:"IR-54",description:"Per-event historical authentication is silently promoted",expected:"EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",
   mutate:(c,o)=>{overlay(o,"T02").historical_authentication="VERIFIED";}},
  {id:"IR-55",description:"Top-level muted-viewing truth is weakened to require audio",expected:"OVERLAY_MUTED_TRUTH_REQUIREMENT_CHANGED",
   mutate:(c,o)=>{o.muted_viewing_requirements="Audio required to identify hypothetical content.";}},
  {id:"IR-56",description:"Overlay provenance attribution falsely claims original authentication",expected:"OVERLAY_PROVENANCE_ATTRIBUTION_CHANGED",
   mutate:(c,o)=>{o.policy_disclosure_attribution="Original 1956 history authenticated";}},
  {id:"IR-57",description:"Overlay source Git blob identity drifts while branch label remains unchanged",expected:"OVERLAY_SOURCE_BINDING_CHANGED",
   mutate:(c,o)=>{o.source_document_git_blob_sha_observed="0000000000000000000000000000000000000000";}},
  {id:"IR-58",description:"Required REAL_MOVE move key absent despite a declared destination",expected:"EP01_MOVE_OR_GAP_DECLARATION_CHANGED",
   mutate:(c,o)=>{delete event(c,"T02").move;}},
  {id:"IR-59",description:"Required ELLIPSIS omitted_plies key absent",expected:"EP01_MOVE_OR_GAP_DECLARATION_CHANGED",
   mutate:(c,o)=>{delete event(c,"T10").omitted_plies;}},
  {id:"IR-60",description:"Non-move event covertly supplies a null move key forbidden by v0.2 schema",expected:"EP01_MOVE_OR_GAP_DECLARATION_CHANGED",
   mutate:(c,o)=>{event(c,"T04").move=null;}},
  {id:"IR-61",description:"Non-ellipsis event covertly supplies a null omission key forbidden by v0.2 schema",expected:"EP01_MOVE_OR_GAP_DECLARATION_CHANGED",
   mutate:(c,o)=>{event(c,"T02").omitted_plies=null;}},
  {id:"IR-26",description:"Overlay profile references a different case",expected:"OVERLAY_VERSION_OR_CASE",
   mutate:(c,o)=>{o.case_id="ED-CASE-REAL-02";}}
];

/**
 * Proposed future-only harness — DO NOT INVOKE under current E5B4D NO-GO.
 * Success proves only that these direct interface mutations are rejected,
 * not that chess legality, human IVV, provenance or Policy B have passed.
 */
export function runRoutingNegativeDrafts(propose,baseCase,baseOverlay){
  if(typeof propose!=="function") throw new Error("Need explicitly supplied router");
  const base=propose(clone(baseCase),clone(baseOverlay));
  if(base.decision!=="SOURCE_ROUTING_PROPOSAL_ONLY"||base.safe_to_publish!==false||
     base.execution_authorized!==false) throw new Error("Unaccepted documentary baseline");
  const observations=[];
  for(const t of ROUTING_NEGATIVE_CASES){
    const c=clone(baseCase),o=clone(baseOverlay);
    t.mutate(c,o);
    const result=propose(c,o);
    if(result.decision!=="REJECTED_SOURCE_ROUTING"||
       !result.faults?.some(x=>x.code===t.expected)||
       !Array.isArray(result.event_routes)||result.event_routes.length!==0||
       result.rejected_routes_suppressed!==true||
       result.safe_to_publish!==false||result.execution_authorized!==false){
      throw new Error(t.id+": expected fail-closed "+t.expected);
    }
    observations.push({id:t.id,expected:t.expected,evaluated_in_this_invocation:true,
      claim_scope:"DOCUMENTARY_ROUTING_ONLY"});
  }
  return observations;
}
