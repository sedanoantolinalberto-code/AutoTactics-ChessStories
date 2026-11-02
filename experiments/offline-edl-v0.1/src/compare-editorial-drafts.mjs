// Pure offline EDL differential audit. No file writes, media, or approval authority.
export function compareEditorialDrafts(before, after) {
  const reject=code=>{throw new Error("EDL_DIFF_REJECT:"+code)};
  const plain=v=>v!==null&&typeof v==="object"&&!Array.isArray(v)&&Object.getPrototypeOf(v)===Object.prototype;
  if(!plain(before)||!plain(after)||before.artifact_version!=="engineyt-offline-edl-proposal/0.1"||after.artifact_version!==before.artifact_version||before.case_id!=="ED-CASE-REAL-01"||after.case_id!==before.case_id)reject("DRAFT_IDENTITY");
  if(!Array.isArray(before.shots)||!Array.isArray(after.shots)||before.shots.length!==9||after.shots.length!==9)reject("SHOT_SHAPE");
  const canonical=value=>{
    if(Array.isArray(value))return value.map(canonical);
    if(plain(value))return Object.fromEntries(Object.keys(value).sort().map(k=>[k,canonical(value[k])]));
    if(value===null||typeof value==="string"||typeof value==="boolean"||(typeof value==="number"&&Number.isFinite(value)))return value;
    reject("NON_JSON_DATA");
  };
  const scrub=d=>{
    const o=canonical(d);
    o.shots.forEach(s=>{delete s.narration_text_draft;delete s.caption_text_draft});
    return o;
  };
  if(JSON.stringify(scrub(before))!==JSON.stringify(scrub(after)))reject("NON_EDITORIAL_FIELD_CHANGED");
  const edits=[];
  for(let i=0;i<9;i++){
    const s=before.shots[i],t=after.shots[i];
    if(s?.shot_id!==t?.shot_id)reject("SHOT_ID");
    for(const field of ["narration_text_draft","caption_text_draft"]){
      const x=s[field],y=t[field];
      if(typeof x!=="string"||typeof y!=="string")reject("COPY_FIELD_TYPE");
      if(x!==y){
        if(y.length>300||!y.trim())reject("PROPOSED_COPY_INVALID");
        edits.push({shot_id:s.shot_id,field,original_text:x,proposed_text:y,requires_independent_editorial_review:true});
      }
    }
  }
  if(!edits.length)reject("NO_CHANGES");
  return {
    artifact_version:"engineyt-unapplied-editorial-diff/0.1",
    status:"UNAPPLIED_EDITORIAL_CHANGES_REQUIRE_HUMAN_ADJUDICATION",
    case_id:before.case_id,
    protected_structure_unchanged:true,
    historical_factuality_reviewed:false,
    licensed_assets_reviewed:false,
    render_authorized:false,
    publication_authorized:false,
    changes:edits
  };
}
