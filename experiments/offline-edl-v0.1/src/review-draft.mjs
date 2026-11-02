// Independent, separately implemented static reviewer. No release authority.
export function reviewDraft(draft, shotplan, semantic) {
  const failures = [];
  const check = (condition, code) => { if (!condition) failures.push(code); };
  const expected = {
    T01:"PARTIDA REAL",T02:"PARTIDA REAL",T03:"PARTIDA REAL",T04:"REBOBINADO · PARTIDA REAL",
    T05:"HIPOTÉTICA · NO JUGADA",T06:"HIPOTÉTICA · NO JUGADA",T07:"REGRESO A LA PARTIDA REAL",
    T08:"PARTIDA REAL",T09:"PARTIDA REAL",T10:"SE OMITEN JUGADAS REALES",T11:"PARTIDA REAL",
    T12:"CIERRE EDITORIAL · LA PARTIDA CONTINÚA"
  };
  const flags = ["execution_authorized","render_authorized","publishing_authorized","integration_authorized","release_authority","measured_voice_timing","frame_visibility_verified","rights_clearance_verified","semantic_legality_verified"];
  check(draft?.artifact_version === "engineyt-offline-edl-proposal/0.1", "DRAFT_VERSION");
  check(draft?.classification === "SOURCE_ONLY_DOCUMENTARY_PROPOSAL", "DOCUMENTARY_SCOPE");
  for (const name of flags) check(draft?.[name] === false, "UNAUTHORIZED_" + name.toUpperCase());
  check(draft?.case_id === shotplan?.case_id && draft?.case_id === semantic?.case_id, "CASE_BINDING");
  check(semantic?.execution_policy?.execution_authorized === false && semantic?.frozen_gates?.PERMISSION_TO_PUBLISH === false, "ORIGINAL_GATES");
  check(draft?.source_revision_scope === "OBSERVED_GIT_BLOBS_NOT_RAW_BYTE_AUTHENTICATION", "PROVENANCE_CAVEAT");
  check(draft?.original_sources_unchanged === true, "SOURCES_INTEGRITY_CLAIM");
  const expectedPins = {
    shotplan:"0f20ef02a32b7275bb6393e0418907429f663053",
    semantic_case:"3514f19ac355763a5b4c61d5c573df090b0eccc1",
    truth_overlay:"aafc6429d716863e225361dd4962169bf12ecfae",
    prior_60s_analogue_not_timing_authority:"95b8c3befe6da95be1a297af4c7bb7722231ab64"
  };
  for (const [key,sha] of Object.entries(expectedPins)) {
    check(draft?.source_revisions?.[key]?.observed_git_blob === sha, "PIN_" + key);
  }
  check(Array.isArray(draft?.hard_blockers) && draft.hard_blockers.includes("E5B4D_NO_GO_MODEL_M_POLICY_B") && draft.hard_blockers.includes("S08_T11_TECHNICAL_SOURCE_VISUAL_TREATMENT_UNRESOLVED"), "BLOCKER_PRESERVATION");
  const expectedShots = Array.isArray(shotplan?.shots) ? shotplan.shots : [];
  const actualShots = Array.isArray(draft?.shots) ? draft.shots : [];
  check(Array.isArray(draft?.shots), "SHOT_ARRAY");
  check(expectedShots.length === 9 && actualShots.length === expectedShots.length, "SHOT_COUNT");
  if (Array.isArray(actualShots)) {
    let running = 0;
    const dispatch = [];
    for (let i=0;i<actualShots.length;i++) {
      const s=actualShots[i], source=expectedShots[i];
      check(s?.shot_id === source?.id, "SHOT_ID_" + i);
      check(s?.target_start_ms === running && s?.target_start_ms === source?.start_ms && s?.target_end_ms === source?.end_ms, "SHOT_TIMELINE_" + i);
      running=s?.target_end_ms;
      check(s?.time_authority === "UNMEASURED_EDITORIAL_TARGET" && s?.editorial_review === "REQUIRED" && s?.visual_review === "NOT_EXECUTED", "SHOT_MEASUREMENT_" + i);
      check(s?.audio_file === null && s?.render_instruction === null && Array.isArray(s?.subtitle_cues) && s.subtitle_cues.length === 0 && Array.isArray(s?.visual_asset_files) && s.visual_asset_files.length === 0, "NO_MEDIA_" + i);
      check(JSON.stringify(s?.event_ids) === JSON.stringify(source?.events), "SHOT_EVENTS_" + i);
      check(s?.narration_text_draft === (source?.narration_es ?? "") &&
            s?.caption_text_draft === (source?.caption_es ?? ""),
            "EDITORIAL_COPY_MUST_MATCH_UNADOPTED_SOURCE_" + i);
      check(s?.declared_terminal_board === source?.state && s?.declared_terminal_board !== "V-PRE-EV2", "TECHNICAL_VISIBILITY_" + i);
      const anns=s?.truth_annotations;
      check(Array.isArray(anns) && anns.length === (source?.events?.length ?? -1), "TRUTH_COUNT_" + i);
      if (Array.isArray(anns)) for (let j=0;j<anns.length;j++) {
        const a=anns[j],eventId=source?.events?.[j];
        check(a?.event_id === eventId && a?.required_display_label === expected[eventId], "TRUTH_" + i + "_" + j);
        check(a?.phase_start_ms === null && a?.phase_end_ms === null && a?.visible_on_real_frames_verified === false, "NO_PHASE_AUTHORITY_" + i + "_" + j);
        check(a?.audience_board_before_declared !== "V-PRE-EV2" && a?.audience_board_after_declared !== "V-PRE-EV2", "NO_TECHNICAL_PHASE_" + i + "_" + j);
        if(eventId === "T10") check(typeof a?.mandatory_omission === "string" && /14/.test(a.mandatory_omission) && /36[–-]49/.test(a.mandatory_omission), "ELLIPSIS_DISCLOSURE");
        if(eventId === "T11") check(a?.audience_board_before_declared === null && a?.audience_board_after_declared === null, "T11_UNRESOLVED");
      }
      if (s?.event_dispatch_allowed) dispatch.push(...(s.event_ids ?? []));
    }
    check(JSON.stringify(dispatch) === JSON.stringify(Object.keys(expected)), "TWELVE_DISPATCH_EVENTS");
    check(running === 45000 && draft?.target_duration_ms === 45000, "UNMEASURED_45S_TARGET");
  }
  return {
    review_version:"engineyt-independent-static-review/0.1",
    status:failures.length ? "FAIL_CLOSED" : "PASS_LIMITED_STATIC_ONLY",
    independent_release_authority:false,
    checked_executable_media:false,
    checked_human_comprehension:false,
    checked_licensing:false,
    checked_chess_legality:false,
    failures
  };
}
