/**
 * Chess Stories semantic validator v0.2 — DOCUMENTARY CANDIDATE.
 * No imports, file I/O, commands, engine use, or auto-execution.
 * Call only after independently checking raw JSON and JSON Schema Draft 2020-12.
 * This checker cannot establish historical truth, chess legality, rights,
 * source-byte identity, publication approval, or Policy B executor compliance.
 * Input model: ordinary JSON.parse-style data with uncompromised JS intrinsics.
 */

const LIMITS = Object.freeze({
  depth: 32, nodes: 50000, diagnostics: 128, string: 16384,
  branches: 32, states: 256, timeline: 1024,
  evidence: 256, claims: 256, assets: 256
});
const ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;
const SQ = /^[a-h][1-8]$/;
const PIECES = "KQRBNP";
const COLORS = new Set(["white", "black"]);
const MOVES = new Set(["REAL_MOVE", "HYPOTHETICAL_MOVE"]);
const KINDS = new Set([
  "SET_POSITION", "REAL_MOVE", "REWIND", "ENTER_HYPOTHETICAL",
  "HYPOTHETICAL_MOVE", "RETURN_TO_REAL", "ELLIPSIS", "SEQUENCE_END"
]);
const PILOT_GATES = Object.freeze({
  "IVV-01":"PASS LIMITED", "IVV-02":"PASS LIMITED", "IVV-03":"PENDING",
  "IVV-04":"PASS LIMITED", "IVV-05":"PENDING", "IVV-06":"PENDING",
  "IVV-07":"PASS LIMITED", "IVV-08":"PASS LIMITED", "IVV-09":"PENDING",
  "IVV-10":"PENDING", "IVV-11":"PASS LIMITED", "IVV-12":"PENDING",
  "R6":"PENDING", "IVV_GLOBAL":"NOT APPROVED",
  "ED-CASE-REAL-01":"NOT APPROVED", "CASE_APPROVAL":"NOT APPROVED",
  "MOTION_GATE_2":"NOT PASSED", "GATE_3":"NOT RUN",
  "SI-G0":"NOT RUN", "E5B4D":"NO-GO under failure model M",
  "FOOTBALL_P1":"NO-GO", "PERMISSION_TO_PUBLISH":false
});
const UNVERIFIED = Object.freeze({
  scope: "PARSED_JSON_SEMANTIC_CONSISTENCY_ONLY",
  raw_bytes_and_duplicate_keys: "NOT_VERIFIED",
  json_schema_2020_12: "NOT_VERIFIED_BY_THIS_FUNCTION",
  full_chess_legality: "NOT_VERIFIED",
  original_historical_authentication: "NOT_VERIFIED",
  legal_rights_clearance: "NOT_ESTABLISHED",
  protected_file_integrity: "NOT_VERIFIED",
  policy_b_runner_compliance: "NOT_ESTABLISHED",
  publishability: "NOT_APPROVED"
});
const own = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const obj = v => v !== null && typeof v === "object" && !Array.isArray(v);
const arr = v => Array.isArray(v) ? v : [];
const str = v => typeof v === "string";
const idOK = v => str(v) && ID.test(v);
const int = v => Number.isSafeInteger(v) && v >= 0;

function fenParse(fen) {
  if (!str(fen) || fen.length > 128) return null;
  const f = fen.split(" ");
  if (f.length !== 6) return null;
  const [placement, turn, castle, ep, halfText, fullText] = f;
  if (turn !== "w" && turn !== "b") return null;
  if (castle !== "-" &&
      (!/^[KQkq]{1,4}$/.test(castle) ||
       [...new Set(castle)].length !== castle.length ||
       "KQkq".split("").filter(c => castle.includes(c)).join("") !== castle)) {
    return null;
  }
  if (ep !== "-" && !/^[a-h][36]$/.test(ep)) return null;
  if (!/^(0|[1-9][0-9]*)$/.test(halfText) ||
      !/^[1-9][0-9]*$/.test(fullText)) return null;
  const half = Number(halfText), full = Number(fullText);
  if (!int(half) || !int(full) || full < 1 || full > Math.floor(Number.MAX_SAFE_INTEGER / 2)) return null;
  const ranks = placement.split("/");
  if (ranks.length !== 8) return null;
  const board = Object.create(null);
  let whiteK = 0, blackK = 0;
  for (let rank = 8; rank >= 1; rank--) {
    const row = ranks[8 - rank];
    let file = 0, digitBefore = false;
    for (const ch of row) {
      if (/^[1-8]$/.test(ch)) {
        if (digitBefore) return null;
        file += Number(ch);
        digitBefore = true;
      } else if (/^[KQRBNPkqrbnp]$/.test(ch)) {
        if (file >= 8) return null;
        board["abcdefgh"[file] + rank] = ch;
        file++;
        digitBefore = false;
        if (ch === "K") whiteK++;
        if (ch === "k") blackK++;
      } else return null;
    }
    if (file !== 8) return null;
  }
  if (whiteK !== 1 || blackK !== 1) return null;
  return { board, turn, castle, ep, half, full };
}

/**
 * @returns {{
 *   semantic_consistent:boolean, outcome:string, errors:Array<{code:string,path:string}>,
 *   diagnostics_truncated:boolean, assurance:object
 * }}
 * Success here is NOT a chess-legality, historical, rights or publishability PASS.
 */
export function validateSemanticCase(document) {
  const errors = [];
  let diagnosticsTruncated = false;
  function fail(code, path) {
    if (errors.length < LIMITS.diagnostics) errors.push({ code, path: String(path).slice(0, 160) });
    else diagnosticsTruncated = true;
  }
  function finish() {
    return {
      semantic_consistent: errors.length === 0 && !diagnosticsTruncated,
      outcome: errors.length === 0 && !diagnosticsTruncated
        ? "CONSISTENT_WITH_LIMITATIONS" : "REJECTED",
      errors, diagnostics_truncated: diagnosticsTruncated,
      assurance: { ...UNVERIFIED }
    };
  }
  if (!obj(document)) {
    fail("DOCUMENT_OBJECT_REQUIRED", "$");
    return finish();
  }
  // Bounded traversal of JSON-like data, not a substitute for raw-byte limits.
  const stack = [[document, 0]];
  const seen = new Set();
  let nodes = 0;
  while (stack.length) {
    const [v, depth] = stack.pop();
    if (++nodes > LIMITS.nodes || depth > LIMITS.depth) {
      fail("INPUT_RESOURCE_LIMIT", "$");
      return finish();
    }
    if (v !== null && typeof v === "object") {
      if (seen.has(v)) { fail("NON_JSON_SHARED_OR_CYCLIC_INPUT", "$"); return finish(); }
      seen.add(v);
      if (!Array.isArray(v) && !obj(v)) { fail("NON_JSON_OBJECT", "$"); return finish(); }
      const keys = Object.keys(v);
      if (keys.length > LIMITS.nodes) { fail("INPUT_RESOURCE_LIMIT", "$"); return finish(); }
      for (const k of keys) stack.push([v[k], depth + 1]);
    } else if (str(v) && v.length > LIMITS.string) {
      fail("INPUT_STRING_LIMIT", "$"); return finish();
    } else if (typeof v === "number" && !Number.isFinite(v)) {
      fail("NON_JSON_NUMBER", "$"); return finish();
    } else if (!(v === null || ["string","boolean","number"].includes(typeof v))) {
      fail("NON_JSON_PRIMITIVE", "$"); return finish();
    }
  }
  if (document.schema_version !== "chess-stories-semantic-case/0.2") fail("VERSION_UNSUPPORTED", "schema_version");
  if (!idOK(document.case_id)) fail("CASE_ID_INVALID", "case_id");
  if (document.status !== "DOCUMENTARY_CANDIDATE_NOT_APPROVED") fail("UNAUTHORIZED_STATUS", "status");
  const groups = ["branches","states","timeline","evidence","claims","assets"];
  const indexes = Object.create(null);
  for (const key of groups) {
    const list = document[key];
    const max = LIMITS[key];
    if (!Array.isArray(list) || list.length > max ||
        ((key === "branches" || key === "states") && list.length < 1) ||
        (key === "timeline" && list.length < 2)) {
      fail("REGISTRY_SHAPE", key);
      indexes[key] = new Map();
      continue;
    }
    const map = new Map();
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (!obj(item) || !idOK(item.id)) { fail("RECORD_ID_INVALID", key+"["+i+"]"); continue; }
      if (map.has(item.id)) fail("DUPLICATE_REGISTRY_ID", key+"."+item.id);
      else map.set(item.id, item);
    }
    indexes[key] = map;
  }
  const branch = indexes.branches, state = indexes.states, event = indexes.timeline;
  const evidence = indexes.evidence, claim = indexes.claims, asset = indexes.assets;
  function ref(id, map, path, nullable = false) {
    if (id === null && nullable) return null;
    if (!idOK(id) || !map.has(id)) { fail("UNKNOWN_REFERENCE", path); return null; }
    return map.get(id);
  }
  function refs(source, map, path) {
    if (!Array.isArray(source)) { fail("REFERENCE_LIST_INVALID", path); return; }
    for (let i=0;i<source.length;i++) ref(source[i], map, path+"["+i+"]");
  }
  const sourceIDs = new Set();
  const sourceIdentities = new Map();
  for (const e of evidence.values()) {
    if (!obj(e.source) || !idOK(e.source.source_id)) fail("SOURCE_ID_INVALID", "evidence."+e.id);
    else {
      sourceIDs.add(e.source.source_id);
      const stableIdentity = ["title","source_class","creator","publication_date","origin_description"]
        .map(key => [key,e.source[key]]);
      const prior = sourceIdentities.get(e.source.source_id);
      if (prior && JSON.stringify(prior) !== JSON.stringify(stableIdentity))
        fail("SOURCE_ID_CONFLICT", "evidence."+e.id+".source.source_id");
      else sourceIdentities.set(e.source.source_id, stableIdentity);
    }
    if (!obj(e.verification)) fail("EVIDENCE_VERIFICATION_MISSING", "evidence."+e.id);
    else {
      refs(e.verification.verification_record_refs, evidence, "evidence."+e.id+".verification_record_refs");
      const support = arr(e.verification.verification_record_refs);
      const declaredHigh = ["INDEPENDENT_TECHNICAL_REVIEW_REPORTED",
        "QUALIFIED_ORACLE_REVIEW_REPORTED"].includes(e.verification.declared_level);
      if ((declaredHigh || e.verification.original_historical_authentication ===
          "REVIEW_REPORTED_NOT_ESTABLISHED_BY_SCHEMA") && !support.length)
        fail("UNSUPPORTED_VERIFICATION_PROMOTION", "evidence."+e.id);
      if (support.includes(e.id))
        fail("EVIDENCE_SELF_QUALIFICATION", "evidence."+e.id);
    }
    if (e.declared_hash && obj(e.declared_hash)) {
      refs(e.declared_hash.check_evidence_refs, evidence, "evidence."+e.id+".hash");
      if (e.declared_hash.check_status === "BYTE_MATCH_REPORTED" &&
          !arr(e.declared_hash.check_evidence_refs).length)
        fail("UNSUPPORTED_BYTE_MATCH_PROMOTION", "evidence."+e.id);
      if (arr(e.declared_hash.check_evidence_refs).includes(e.id))
        fail("HASH_SELF_QUALIFICATION", "evidence."+e.id);
    }
  }
  // Verification evidence must be acyclic, not merely different from itself.
  // Cycles of two or more evidence IDs are no substitute for independent review.
  const supportEdges = new Map();
  for (const e of evidence.values()) {
    const edgeIDs = [
      ...arr(e.verification?.verification_record_refs),
      ...arr(e.declared_hash?.check_evidence_refs)
    ].filter(id => idOK(id) && evidence.has(id));
    supportEdges.set(e.id, edgeIDs);
  }
  const visitColor = new Map();
  for (const sourceId of evidence.keys()) {
    if (visitColor.get(sourceId) === 2) continue;
    const stack = [{ id:sourceId, cursor:0 }];
    visitColor.set(sourceId,1);
    while (stack.length) {
      const current = stack[stack.length-1];
      const neighbors = supportEdges.get(current.id) || [];
      if (current.cursor >= neighbors.length) {
        visitColor.set(current.id,2);
        stack.pop();
        continue;
      }
      const nextId = neighbors[current.cursor++];
      if (visitColor.get(nextId) === 1) {
        fail("EVIDENCE_CIRCULAR_VERIFICATION", "evidence."+current.id);
        continue;
      }
      if (visitColor.get(nextId) !== 2) {
        visitColor.set(nextId,1);
        stack.push({id:nextId,cursor:0});
      }
    }
  }
  if (obj(document.players)) {
    const white = document.players.white, black = document.players.black;
    for (const [k,p] of [["white",white],["black",black]]) {
      if (!obj(p) || !idOK(p.id)) fail("PLAYER_INVALID", "players."+k);
      else refs(p.evidence_refs, evidence, "players."+k+".evidence_refs");
    }
    if (obj(white) && obj(black) && white.id === black.id) fail("PLAYER_ID_COLLISION", "players");
  } else fail("PLAYERS_INVALID", "players");
  for (const b of branch.values()) {
    refs(b.evidence_refs, evidence, "branches."+b.id+".evidence_refs");
    if (b.factuality === "REAL") {
      const anchor = ref(b.anchor_state_id, state, "branches."+b.id+".anchor");
      if (anchor && (anchor.branch_id !== b.id || anchor.factuality !== "REAL"))
        fail("REAL_BRANCH_ANCHOR_INVALID", "branches."+b.id);
    } else if (b.factuality === "HYPOTHETICAL") {
      const parent = ref(b.parent_branch_id, branch, "branches."+b.id+".parent");
      if (parent && parent.factuality !== "REAL") fail("NESTED_HYPOTHETICAL_UNSUPPORTED", "branches."+b.id);
      const anchor = ref(b.shared_anchor_state_id, state, "branches."+b.id+".shared_anchor");
      ref(b.return_anchor_state_id, state, "branches."+b.id+".return_anchor");
      if (anchor && parent && (anchor.branch_id !== parent.id ||
          anchor.factuality !== "REAL" || b.source_divergence_ply !== anchor.ply))
        fail("HYPOTHETICAL_DIVERGENCE_INVALID", "branches."+b.id);
    } else fail("BRANCH_FACTUALITY_INVALID", "branches."+b.id);
  }
  const parsed = new Map();
  for (const st of state.values()) {
    refs(st.evidence_refs, evidence, "states."+st.id+".evidence_refs");
    refs(st.claim_refs, claim, "states."+st.id+".claim_refs");
    const owner = ref(st.branch_id, branch, "states."+st.id+".branch_id");
    if (owner && st.factuality !== owner.factuality)
      fail("STATE_BRANCH_OWNERSHIP", "states."+st.id);
    if (!int(st.ply)) fail("STATE_PLY_INVALID", "states."+st.id);
    const p = fenParse(st.fen);
    if (!p) { fail("FEN_INVALID", "states."+st.id+".fen"); continue; }
    parsed.set(st.id,p);
    const implied = 2*(p.full-1) + (p.turn === "b" ? 1:0);
    if (st.ply !== implied) fail("FEN_PLY_MISMATCH", "states."+st.id);
  }
  for (const c of claim.values()) {
    refs(c.evidence_refs, evidence, "claims."+c.id+".evidence_refs");
    refs(c.admissibility_review_refs, evidence, "claims."+c.id+".review_refs");
    if (!obj(c.scope)) { fail("CLAIM_SCOPE_MISSING", "claims."+c.id); continue; }
    refs(c.scope.state_refs,state,"claims."+c.id+".scope.states");
    refs(c.scope.event_refs,event,"claims."+c.id+".scope.events");
    refs(c.scope.branch_refs,branch,"claims."+c.id+".scope.branches");
    if (c.admissibility_status === "ADMISSIBILITY_REVIEW_REPORTED" &&
        (!arr(c.evidence_refs).length || !arr(c.admissibility_review_refs).length))
      fail("UNSUPPORTED_CLAIM_PROMOTION", "claims."+c.id);
    // F03 textual cue is only a defensive veto, never a complete NLP classifier.
    if (document.case_id === "ED-CASE-REAL-01" && str(c.text) &&
        /24\s*\.{3}\s*Ra4/i.test(c.text) &&
        /\b(unique|uniquely|only best|únic[ao]|únicamente|la mejor)\b/i.test(c.text))
      fail("F03_UNSUPPORTED_UNIQUENESS", "claims."+c.id);
  }
  if (obj(document.claim_admissibility)) {
    refs(document.claim_admissibility.independent_review_evidence_refs,
      evidence,"claim_admissibility.review_refs");
    if (document.claim_admissibility.review_status === "INDEPENDENT_REVIEW_REPORTED" &&
        !arr(document.claim_admissibility.independent_review_evidence_refs).length)
      fail("UNSUPPORTED_POLICY_PROMOTION","claim_admissibility");
    for (const rule of arr(document.claim_admissibility.rules))
      if (obj(rule)) refs(rule.review_evidence_refs,evidence,"claim_admissibility.rules");
  } else fail("ADMISSIBILITY_MAPPING_MISSING","claim_admissibility");
  for (const a of asset.values()) {
    if (!obj(a.provenance) || !obj(a.license)) {
      fail("ASSET_RIGHTS_RECORD_MISSING", "assets."+a.id); continue;
    }
    refs(a.provenance.evidence_refs,evidence,"assets."+a.id+".provenance");
    refs(a.license.evidence_refs,evidence,"assets."+a.id+".license");
    if (a.provenance.status === "REVIEW_REPORTED" &&
        !arr(a.provenance.evidence_refs).length)
      fail("ASSET_PROVENANCE_SELF_PROMOTION","assets."+a.id);
    if (str(a.provenance.source_identity) && !sourceIDs.has(a.provenance.source_identity))
      fail("ASSET_SOURCE_UNRESOLVED","assets."+a.id);
    if (!Array.isArray(a.uses) || !a.uses.length) fail("ASSET_USES_MISSING","assets."+a.id);
    for (const u of arr(a.uses)) {
      if (!obj(u)) { fail("ASSET_USE_INVALID","assets."+a.id); continue; }
      refs(u.clearance_evidence_refs,evidence,"assets."+a.id+".use.clearance");
      if (u.clearance_status === "CLEARANCE_REPORTED_NOT_ESTABLISHED_BY_SCHEMA" &&
          !arr(u.clearance_evidence_refs).length)
        fail("UNSUPPORTED_RIGHTS_PROMOTION","assets."+a.id);
    }
  }
  function inspectMove(e,before,after) {
    if (!obj(e.move)) { fail("MOVE_MISSING","timeline."+e.id); return; }
    const m=e.move, a=before&&parsed.get(before.id), z=after&&parsed.get(after.id);
    if (!a || !z) return;
    if (m.special_move !== "NONE") {
      fail("SPECIAL_MOVE_NOT_QUALIFIED","timeline."+e.id); return;
    }
    if (!(str(m.from) && SQ.test(m.from)) || !(str(m.to) && SQ.test(m.to)) ||
        !(typeof m.moving_piece === "string" && m.moving_piece.length === 1 && PIECES.includes(m.moving_piece)) || !COLORS.has(m.moving_color)) {
      fail("MOVE_FIELDS_INVALID","timeline."+e.id); return;
    }
    if (!int(before.ply) || !int(after.ply)) {
      fail("MOVE_PLY_MISMATCH","timeline."+e.id); return;
    }
    if (!str(m.san)) { fail("SAN_MISSING","timeline."+e.id); return; }
    if (before.ply+1 !== after.ply) fail("MOVE_PLY_MISMATCH","timeline."+e.id);
    // A declared state label must agree with the current move and absolute ply.
    // This is SAN *label correspondence*, not SAN legality or historical proof.
    const moverNumber = Math.floor(before.ply / 2) + 1;
    const expectedLabel = moverNumber + (before.ply % 2 === 0 ? "." : "...") + m.san;
    if (after.san_label !== expectedLabel)
      fail("AFTER_SAN_LABEL_MISMATCH","timeline."+e.id);
    const moving = m.moving_color === "white" ? m.moving_piece : m.moving_piece.toLowerCase();
    if (a.board[m.from] !== moving) fail("MOVE_SOURCE_PIECE","timeline."+e.id);
    if (a.turn !== (m.moving_color === "white"?"w":"b") ||
        z.turn !== (a.turn==="w"?"b":"w")) fail("MOVE_TURN","timeline."+e.id);
    const capture = own(m,"capture");
    if (capture) {
      if (!obj(m.capture) || !(str(m.capture.capture_square) && SQ.test(m.capture.capture_square)) ||
          m.capture.capture_square !== m.to ||
          !(typeof m.capture.captured_piece === "string" && m.capture.captured_piece.length === 1 && PIECES.includes(m.capture.captured_piece)) ||
          m.capture.captured_piece === "K" ||
          !COLORS.has(m.capture.captured_color) ||
          m.capture.captured_color === m.moving_color)
        fail("CAPTURE_METADATA","timeline."+e.id);
      else {
        const victim = m.capture.captured_color === "white"
          ? m.capture.captured_piece : m.capture.captured_piece.toLowerCase();
        if (a.board[m.to] !== victim) fail("CAPTURE_PIECE_MISMATCH","timeline."+e.id);
      }
    } else if (a.board[m.to]) fail("UNDECLARED_CAPTURE","timeline."+e.id);
    const hasCapture = m.san.includes("x");
    if (hasCapture !== capture || !m.san.includes(m.to))
      fail("SAN_DECLARATION_CONFLICT","timeline."+e.id);
    const expected={...a.board};
    delete expected[m.from];
    expected[m.to]=moving;
    for(const file of "abcdefgh") for(let rank=1;rank<=8;rank++) {
      const sq=file+rank;
      if(expected[sq]!==z.board[sq]) {
        fail("MOVE_BOARD_MISMATCH","timeline."+e.id); return;
      }
    }
    // FEN state metadata: an ordinary move cannot reintroduce a lost
    // castling right. This is a necessary (not sufficient) chess invariant.
    if (z.castle !== "-" && [...z.castle].some(right => !a.castle.includes(right)))
      fail("FEN_CASTLING_RIGHT_GAIN", "timeline."+e.id);
    // A FEN en-passant target can only newly follow a two-square pawn push.
    // Allow "-" for serializers using legal-EP-only FEN conventions.
    if (z.ep !== "-") {
      const fromRank = m.moving_color === "white" ? "2" : "7";
      const toRank = m.moving_color === "white" ? "4" : "5";
      const targetRank = m.moving_color === "white" ? "3" : "6";
      if (m.moving_piece !== "P" || capture ||
          m.from[0] !== m.to[0] || m.from[1] !== fromRank ||
          m.to[1] !== toRank || z.ep !== m.from[0]+targetRank)
        fail("FEN_EP_TARGET_UNJUSTIFIED","timeline."+e.id);
    }
    const expectedHalf = capture || m.moving_piece === "P" ? 0 : a.half+1;
    const expectedFull = a.full + (a.turn==="b"?1:0);
    if(z.half!==expectedHalf || z.full!==expectedFull)
      fail("MOVE_FEN_CLOCK_MISMATCH","timeline."+e.id);
    // Castling and en-passant metadata consistency is reserved for a qualified rule oracle.
  }
  let currentState=null, active=null, excursion=null;
  let lastMeasuredEnd=0, anyUnspecified=false, seenEnd=false;
  const visitedReal = new Set();
  const timeline=arr(document.timeline);
  for(let i=0;i<timeline.length;i++){
    const e=timeline[i];
    if(!obj(e)||!idOK(e.id)){fail("EVENT_INVALID","timeline["+i+"]");continue;}
    const at="timeline."+e.id;
    refs(e.evidence_refs,evidence,at+".evidence_refs");
    refs(e.claim_refs,claim,at+".claim_refs");
    refs(e.asset_refs,asset,at+".asset_refs");
    if (document.case_id === "ED-CASE-REAL-01" && str(e.disclosure) &&
        /24\s*\.{3}\s*Ra4/i.test(e.disclosure) &&
        /\b(unique|uniquely|only best|únic[ao]|únicamente|la mejor)\b/i.test(e.disclosure))
      fail("F03_UNSUPPORTED_UNIQUENESS",at+".disclosure");
    if(!KINDS.has(e.kind)){fail("EVENT_KIND_UNSUPPORTED",at);continue;}
    const from=ref(e.from_state,state,at+".from_state",e.kind==="SET_POSITION");
    const to=ref(e.to_state,state,at+".to_state");
    const beforeCtx=ref(e.from_branch_id,branch,at+".from_branch_id",e.kind==="SET_POSITION");
    const afterCtx=ref(e.to_branch_id,branch,at+".to_branch_id");
    if (seenEnd) fail("EVENT_AFTER_END",at);
    if (e.kind==="SET_POSITION") {
      if(i!==0 || e.from_state!==null || e.from_branch_id!==null ||
          !afterCtx || afterCtx.factuality!=="REAL" ||
          !to || to.branch_id!==afterCtx.id)
        fail("SET_POSITION_INVALID",at);
    } else if(e.from_state!==currentState || e.from_branch_id!==active) {
      fail("TIMELINE_CONTINUITY",at);
    }
    if(!obj(e.timing)) fail("TIMING_MISSING",at);
    else if(e.timing.status==="TIMING_MEASURED"){
      const st=e.timing.start_ms, du=e.timing.duration_ms;
      refs(e.timing.measurement_evidence_refs,evidence,at+".timing.evidence");
      if(!int(st)||!int(du)||st>Number.MAX_SAFE_INTEGER-du)
        fail("TIMING_INVALID_OR_OVERFLOW",at);
      else {
        if(st<lastMeasuredEnd)fail("TIMING_OVERLAP",at);
        lastMeasuredEnd=st+du;
      }
    } else if(e.timing.status==="TIMING_UNSPECIFIED") anyUnspecified=true;
    else fail("TIMING_STATUS_INVALID",at);
    const sameReal = from && to && beforeCtx && afterCtx &&
      beforeCtx.id===afterCtx.id && beforeCtx.factuality==="REAL" &&
      from.branch_id===beforeCtx.id && to.branch_id===afterCtx.id &&
      from.factuality==="REAL" && to.factuality==="REAL";
    switch(e.kind){
      case "SET_POSITION":
        if(to)visitedReal.add(to.id);
        break;
      case "REAL_MOVE":
        if(excursion || !sameReal)fail("REAL_MOVE_BRANCH",at);
        if(!arr(e.evidence_refs).length)fail("REAL_EVIDENCE_MISSING",at);
        inspectMove(e,from,to);
        if(to)visitedReal.add(to.id);
        break;
      case "REWIND":
        if(excursion||!sameReal||!from||!to||!int(from.ply)||!int(to.ply)||to.ply>=from.ply||!visitedReal.has(to.id))
          fail("REWIND_ANCHOR_INVALID",at);
        break;
      case "ENTER_HYPOTHETICAL":
        if(excursion || !from||!to || from.id!==to.id ||
           !beforeCtx||beforeCtx.factuality!=="REAL"||
           !afterCtx||afterCtx.factuality!=="HYPOTHETICAL"||
           afterCtx.parent_branch_id!==beforeCtx.id||
           afterCtx.shared_anchor_state_id!==e.shared_anchor_state_id||
           afterCtx.return_anchor_state_id!==e.return_anchor_state_id||
           from.id!==e.shared_anchor_state_id||!visitedReal.has(from.id))
          fail("ENTER_HYPOTHETICAL_INVALID",at);
        excursion={id:afterCtx?afterCtx.id:null, parent:beforeCtx?beforeCtx.id:null,
          anchor:e.return_anchor_state_id, shared:e.shared_anchor_state_id};
        break;
      case "HYPOTHETICAL_MOVE":
        if(!excursion || !beforeCtx||!afterCtx ||
           beforeCtx.id!==excursion.id || afterCtx.id!==excursion.id ||
           !from||!to || to.branch_id!==excursion.id ||
           to.factuality!=="HYPOTHETICAL"||
           !(from.branch_id===excursion.id || from.id===excursion.shared))
          fail("HYPOTHETICAL_MOVE_BRANCH",at);
        inspectMove(e,from,to);
        break;
      case "RETURN_TO_REAL":
        if(!excursion || !beforeCtx||!afterCtx || beforeCtx.id!==excursion.id ||
           afterCtx.id!==excursion.parent || !from||!to ||
           from.branch_id!==excursion.id || to.id!==excursion.anchor ||
           e.return_anchor_state_id!==excursion.anchor ||
           to.branch_id!==excursion.parent)
          fail("RETURN_TO_REAL_INVALID",at);
        excursion=null;
        break;
      case "ELLIPSIS":
        if(excursion || !sameReal || !from||!to || !int(from.ply)||!int(to.ply)||!(to.ply>from.ply+1))
          fail("ELLIPSIS_BRANCH_OR_DIRECTION",at);
        if(!obj(e.omitted_plies)||!from||!to||!int(from.ply)||!int(to.ply)||
           e.omitted_plies.first!==from.ply+1||
           e.omitted_plies.last!==to.ply||
           e.omitted_plies.semantics!=="INCLUSIVE_MOVES_NOT_SHOWN")
          fail("ELLIPSIS_RANGE",at);
        if(to)visitedReal.add(to.id);
        break;
      case "SEQUENCE_END":
        if(excursion || !sameReal || !from||!to ||
           from.id!==to.id || i!==timeline.length-1)
          fail("SEQUENCE_END_INVALID",at);
        seenEnd=true;
        break;
    }
    if(sameReal && from && to && int(from.ply) && int(to.ply) &&
       to.ply>from.ply+1 && e.kind!=="ELLIPSIS")
      fail("ELLIPSIS_REQUIRED",at);
    currentState=e.to_state;
    active=e.to_branch_id;
  }
  if(excursion)fail("UNRETURNED_HYPOTHETICAL", "timeline");
  if(!seenEnd)fail("SEQUENCE_END_REQUIRED","timeline");
  if(!obj(document.sequence_end) ||
      document.sequence_end.closure!=="EDITORIAL_ONLY" ||
      document.sequence_end.state_id!==currentState ||
      document.sequence_end.event_id!==timeline[timeline.length-1]?.id)
    fail("EDITORIAL_END_MISMATCH","sequence_end");
  else refs(document.sequence_end.evidence_refs,evidence,"sequence_end.evidence_refs");
  if(!obj(document.historical_game_end))fail("HISTORICAL_END_MISSING","historical_game_end");
  else {
    const end=document.historical_game_end;
    refs(end.evidence_refs,evidence,"historical_game_end.evidence_refs");
    if(end.status==="SOURCE_DECLARED") {
      if(!sourceIDs.has(end.source_id))fail("HISTORICAL_SOURCE_UNKNOWN","historical_game_end.source_id");
      const final=state.get(currentState);
      if(final && int(final.ply) && int(end.final_ply) && end.final_ply <= final.ply &&
         document.sequence_end?.historical_relation==="GAME_CONTINUES")
        fail("HISTORICAL_END_CONTRADICTION","historical_game_end.final_ply");
    }
  }
  if(document.case_id==="ED-CASE-REAL-01"){
    for(const [key,value] of Object.entries(PILOT_GATES))
      if(!obj(document.frozen_gates)||document.frozen_gates[key]!==value)
        fail("FROZEN_GATE_CHANGE","frozen_gates."+key);
    // This is pilot-specific: ordinary cases must not inherit its gates implicitly.
    if(document.sequence_end?.historical_relation!=="GAME_CONTINUES")
      fail("PILOT_END_PREMATURE","sequence_end.historical_relation");
  }
  const policy=document.execution_policy;
  if(!obj(policy) ||
    policy.policy!=="STRICT_POLICY_B" || policy.failure_model!=="M" ||
    policy.execution_authorized!==false || policy.runner_qualification!=="NOT_ESTABLISHED" ||
    policy.termination_deadline_seconds_exclusive!==120 ||
    policy.stdout_lifetime_emitted_accepted_limit_bytes!==1048576 ||
    policy.stderr_lifetime_emitted_accepted_limit_bytes!==1048576 ||
    policy.stream_limits_independent!==true ||
    policy.schema_validation_establishes_compliance!==false)
    fail("EXECUTION_POLICY_UNAUTHORIZED","execution_policy");
  // A semantically consistent document can still have incomplete timing.
  const result=finish();
  result.assurance.timeline_completeness=anyUnspecified?
    "TIMING_INCOMPLETE":"MEASURED_TIMING_DECLARED_NOT_AUTHENTICATED";
  return result;
}
