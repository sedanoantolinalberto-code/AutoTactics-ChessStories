// Engine YT source-only OFFLINE EDL v0.1. No rendering, media I/O, subprocesses or networking.
export function compileDraft(shotplan, semantic, precedence) {
  const requireThat = (ok, code) => { if (!ok) throw new Error("EDL_REJECT:" + code); };
  const isObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
  requireThat(isObject(shotplan) && isObject(semantic) && isObject(precedence), "INPUT_OBJECTS");
  requireThat(shotplan.case_id === "ED-CASE-REAL-01" && semantic.case_id === shotplan.case_id && precedence.case_id === shotplan.case_id, "CASE_ID");
  requireThat(shotplan.artifact_version === "chess-stories-editorial-shotplan/0.1", "SHOTPLAN_VERSION");
  requireThat(semantic.schema_version === "chess-stories-semantic-case/0.2", "CASE_VERSION");
  requireThat(shotplan.target?.target_duration_ms === 45000 && shotplan.target?.voice_timing_measured === false && shotplan.target?.rendered_duration_verified === false, "UNMEASURED_TARGET");
  requireThat(shotplan.timing_semantics === "EDITORIAL_DESIGN_TARGET_NOT_TIMING_MEASURED", "TIMING_AUTHORITY");
  requireThat(shotplan.status === "DRAFT_NOT_RENDERED_TRUTH_OVERLAY_HARDENED" && shotplan.publication_status === "NOT_APPROVED" && shotplan.process_execution_authorized === false, "SOURCE_EXECUTION_FLAG");
  requireThat(shotplan.assets_status === "VISUALS_MUSIC_FONTS_VOICES_RIGHTS_UNCLEARED", "RIGHTS_UNCLEARED");
  requireThat(precedence.frozen_gates?.render_authorized === false && precedence.frozen_gates?.publication_authorized === false && precedence.frozen_gates?.main_merge_authorized === false, "PRECEDENCE_GATES");
  requireThat(semantic.execution_policy?.execution_authorized === false && semantic.execution_policy?.policy === "STRICT_POLICY_B", "EXECUTION_GATE");
  requireThat(semantic.frozen_gates?.["PERMISSION_TO_PUBLISH"] === false && String(semantic.frozen_gates?.E5B4D).startsWith("NO-GO"), "PUBLISH_GATE");
  requireThat(semantic.frozen_gates?.R6 === "PENDING" && semantic.frozen_gates?.CASE_APPROVAL === "NOT APPROVED", "REVIEW_GATE");
  requireThat(precedence.review_status === "PROPOSED_SOURCE_ONLY_NOT_ADOPTED" && precedence.adapter_consumer_identity === "NOT_IDENTIFIED", "UNKNOWN_CONSUMER");
  requireThat(precedence.adapter_schema_acceptance === "UNKNOWN" && precedence.planned_event_intervals === "NOT_ASSIGNED_FOR_45S", "UNMEASURED_PHASES");
  const expectedIds = Array.from({length:12}, (_, i) => "T" + String(i + 1).padStart(2, "0"));
  const timelineIds = Array.isArray(semantic.timeline) ? semantic.timeline.map(e => e.id) : [];
  requireThat(JSON.stringify(timelineIds) === JSON.stringify(expectedIds), "CANONICAL_TIMELINE");
  const expectedLabels = {
    T01:"PARTIDA REAL", T02:"PARTIDA REAL", T03:"PARTIDA REAL",
    T04:"REBOBINADO · PARTIDA REAL", T05:"HIPOTÉTICA · NO JUGADA", T06:"HIPOTÉTICA · NO JUGADA",
    T07:"REGRESO A LA PARTIDA REAL", T08:"PARTIDA REAL", T09:"PARTIDA REAL",
    T10:"SE OMITEN JUGADAS REALES", T11:"PARTIDA REAL",
    T12:"CIERRE EDITORIAL · LA PARTIDA CONTINÚA"
  };
  const stateMap = new Map((semantic.states || []).map(s => [s.id, s]));
  requireThat(stateMap.get("V-PRE-EV2")?.visibility === "TECHNICAL_ONLY", "TECHNICAL_STATE_IDENTITY");
  requireThat(semantic.timeline[9]?.to_state === "V-PRE-EV2" && semantic.timeline[10]?.from_state === "V-PRE-EV2", "ELLIPSIS_STATE_BOUNDARY");
  const phasesByShot = new Map((precedence.composite_phases || []).map(p => [p.shot_id, p]));
  requireThat([...phasesByShot.keys()].sort().join(",") === "S06,S07,S08", "PRECEDENCE_SCOPE");
  const sourceShots = shotplan.shots;
  requireThat(Array.isArray(sourceShots) && sourceShots.length === 9, "SHOT_COUNT");
  let previousEnd = 0;
  let dispatchCursor = 0;
  const processed = [];
  for (const shot of sourceShots) {
    requireThat(/^S0[1-9]$/.test(shot.id) && !processed.some(x => x.shot_id === shot.id), "SHOT_ID");
    requireThat(Number.isInteger(shot.start_ms) && Number.isInteger(shot.end_ms) && shot.start_ms === previousEnd && shot.end_ms > shot.start_ms, "SHOT_TIMELINE_CONTIGUITY");
    previousEnd = shot.end_ms;
    requireThat(stateMap.has(shot.state) && stateMap.get(shot.state).visibility === "VISUAL", "NO_TECHNICAL_VISIBLE_STATE");
    requireThat(Array.isArray(shot.events) && shot.events.length > 0, "SHOT_EVENTS");
    const isHold = shot.event_behavior === "HOLD_ONLY_NO_EVENT_REPLAY";
    if (isHold) {
      requireThat(shot.event_dispatch_allowed_in_this_shot === false && shot.events.length === 1 && dispatchCursor > 0 && shot.events[0] === expectedIds[dispatchCursor - 1], "HOLD_REPLAY");
    } else {
      for (const eventId of shot.events) {
        requireThat(eventId === expectedIds[dispatchCursor], "EVENT_SEQUENCE");
        dispatchCursor++;
      }
    }
    const truthSequence = Array.isArray(shot.event_truth_sequence) ? shot.event_truth_sequence : [];
    requireThat(!truthSequence.length || (truthSequence.length === shot.events.length && truthSequence.every((p,i) => p.event_id === shot.events[i])), "TRUTH_SEQUENCE_ALIGNMENT");
    requireThat(shot.events.length === 1 || truthSequence.length === shot.events.length, "COMPOSITE_TRUTH_REQUIRED");
    const precedenceShot = phasesByShot.get(shot.id);
    if (precedenceShot) {
      requireThat(Array.isArray(precedenceShot.ordered_phases) && precedenceShot.ordered_phases.length === shot.events.length, "PRECEDENCE_LENGTH");
      requireThat(precedenceShot.ordered_phases.every((p,i) => p.event_id === shot.events[i] && p.target_start_ms === null && p.target_end_ms === null), "PRECEDENCE_EVENT_OR_MEASUREMENT");
    } else {
      requireThat(!["S06","S07","S08"].includes(shot.id), "MISSING_PRECEDENCE");
    }
    const truthAnnotations = shot.events.map((eventId,i) => {
      const display = truthSequence[i]?.display_label ?? shot.label;
      requireThat(display === expectedLabels[eventId], "TRUTH_LABEL_" + eventId);
      if (eventId === "T10") {
        const disclosure = truthSequence[i]?.mandatory_omission;
        requireThat(typeof disclosure === "string" && /14/.test(disclosure) && /36[–-]49/.test(disclosure), "ELLIPSIS_36_49");
      }
      const phase = precedenceShot?.ordered_phases[i];
      if (phase?.truth_label !== undefined) requireThat(phase.truth_label === expectedLabels[eventId], "PRECEDENCE_TRUTH_" + eventId);
      for (const board of [phase?.audience_board_before, phase?.audience_board_after]) {
        if (board !== undefined && board !== null) requireThat(stateMap.get(board)?.visibility === "VISUAL", "PRECEDENCE_TECHNICAL_BOARD");
      }
      if (eventId === "T10") requireThat(phase?.audience_board_after === "V-REAL", "OMISSION_VISIBLE_HOLD");
      if (eventId === "T11") requireThat(phase?.audience_board_before == null && phase?.audience_board_after == null, "T11_UNAPPROVED_VISUAL");
      return {
        event_id:eventId,
        required_display_label:display,
        mandatory_omission: eventId === "T10" ? truthSequence[i].mandatory_omission : null,
        audience_board_before_declared:phase?.audience_board_before ?? null,
        audience_board_after_declared:phase?.audience_board_after ?? null,
        phase_start_ms:null,
        phase_end_ms:null,
        visible_on_real_frames_verified:false
      };
    });
    processed.push({
      shot_id:shot.id,
      time_authority:"UNMEASURED_EDITORIAL_TARGET",
      target_start_ms:shot.start_ms,
      target_end_ms:shot.end_ms,
      declared_terminal_board:shot.state,
      event_dispatch_allowed:!isHold,
      event_ids:[...shot.events],
      truth_annotations:truthAnnotations,
      narration_text_draft:shot.narration_es ?? "",
      caption_text_draft:shot.caption_es ?? "",
      audio_file:null,
      subtitle_cues:[],
      visual_asset_files:[],
      render_instruction:null,
      editorial_review:"REQUIRED",
      visual_review:"NOT_EXECUTED"
    });
  }
  requireThat(dispatchCursor === expectedIds.length && previousEnd === shotplan.target.target_duration_ms, "MISSING_EVENTS_OR_DURATION");
  return {
    artifact_version:"engineyt-offline-edl-proposal/0.1",
    case_id:shotplan.case_id,
    classification:"SOURCE_ONLY_DOCUMENTARY_PROPOSAL",
    evidence_level:"STATIC_SOURCE_CONCORDANCE_ONLY",
    execution_authorized:false,
    render_authorized:false,
    publishing_authorized:false,
    integration_authorized:false,
    release_authority:false,
    measured_voice_timing:false,
    frame_visibility_verified:false,
    rights_clearance_verified:false,
    semantic_legality_verified:false,
    original_sources_unchanged:true,
    source_revisions:precedence.source_pins,
    source_revision_scope:"OBSERVED_GIT_BLOBS_NOT_RAW_BYTE_AUTHENTICATION",
    target_duration_ms:shotplan.target.target_duration_ms,
    shots:processed,
    hard_blockers:[
      "E5B4D_NO_GO_MODEL_M_POLICY_B",
      "R6_RIGHTS_PENDING",
      "IVV_GLOBAL_NOT_APPROVED",
      "CASE_APPROVAL_NOT_APPROVED",
      "VOICE_AND_FRAME_TIMINGS_UNMEASURED",
      "S06_S07_S08_PHASE_INTERVALS_UNASSIGNED",
      "S08_T11_TECHNICAL_SOURCE_VISUAL_TREATMENT_UNRESOLVED",
      "ADAPTER_CONSUMER_NOT_QUALIFIED",
      "NO_RENDER_NO_UPLOAD"
    ]
  };
}

export function proposeEdit(draft, change) {
  const ok = (v, code) => { if (!v) throw new Error("EDIT_REJECT:" + code); };
  ok(draft?.artifact_version === "engineyt-offline-edl-proposal/0.1" && draft.release_authority === false, "SOURCE_DRAFT");
  ok(change && typeof change === "object", "CHANGE");
  ok(["narration_text_draft","caption_text_draft"].includes(change.field), "FIELD_UNSAFE");
  const shot = draft.shots?.find(s => s.shot_id === change.shot_id);
  ok(shot, "SHOT_UNKNOWN");
  ok(typeof change.proposed_text === "string" && change.proposed_text.trim().length > 0 && change.proposed_text.length <= 300, "TEXT_LIMIT");
  ok(typeof change.reason === "string" && change.reason.trim().length >= 8 && change.reason.length <= 300, "JUSTIFICATION");
  return {
    artifact_version:"engineyt-unapplied-edit-proposal/0.1",
    case_id:draft.case_id,
    shot_id:shot.shot_id,
    editable_field:change.field,
    original_text:shot[change.field],
    proposed_text:change.proposed_text,
    reason:change.reason,
    disposition:"UNAPPLIED_INDEPENDENT_EDITORIAL_REVIEW_REQUIRED",
    would_change_original_files:false,
    can_change_disclosure_labels:false,
    can_render_or_publish:false
  };
}
