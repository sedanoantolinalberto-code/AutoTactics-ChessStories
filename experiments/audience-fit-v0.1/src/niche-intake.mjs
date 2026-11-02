// SOURCE-ONLY. No network, media, automated collection, or production authority.
export function compileIntake(input) {
 const ck=(a,c)=>{if(!a)throw Error("INTAKE_REJECT:"+c)};
 const keys=(o,required)=>o!==null&&typeof o==="object"&&!Array.isArray(o)&&Object.keys(o).sort().join("|")===required.slice().sort().join("|");
 const textOk=(x,min=3,max=240)=>typeof x==="string"&&x.trim().length>=min&&x.length<=max;
 const iso=x=>typeof x==="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(x)&&Number.isFinite(Date.parse(x));
 ck(keys(input,["version","as_of_date","collection_method","automated_fetch","analytics_connected","release_authorized","observations"]),"ROOT_FIELDS");
 ck(input.version==="engineyt-manual-niche-intake/0.1"&&input.collection_method==="MANUAL_PUBLIC_OBSERVATIONS_UNVERIFIED","ROOT_VERSION");
 ck(input.automated_fetch===false&&input.analytics_connected===false&&input.release_authorized===false,"GATE");
 ck(/^\d{4}-\d{2}-\d{2}$/.test(input.as_of_date)&&!Number.isNaN(Date.parse(input.as_of_date+"T00:00:00Z")),"DATE");
 ck(Array.isArray(input.observations)&&input.observations.length<=80,"LIMIT");
 const ids=new Set(),channels=new Set(),negative=new Set(),rows=[],end=Date.parse(input.as_of_date+"T23:59:59Z");
 for(const r of input.observations){
   ck(keys(r,["video_id","channel_id","format","notes","comparison_role","published_at","observed_at","views","baseline_median_views","baseline_sample_size","source_status"]),"ROW_FIELDS");
   ck(/^[A-Za-z0-9_-]{11}$/.test(r.video_id)&&!ids.has(r.video_id),"VIDEO_ID");ids.add(r.video_id);
   ck(textOk(r.channel_id,3,80)&&textOk(r.format,3,70)&&textOk(r.notes,12,240),"DESCRIPTION");
   ck(["supportive","counterexample"].includes(r.comparison_role)&&r.source_status==="MANUAL_NOT_INDEPENDENTLY_VERIFIED","SOURCE_TRUST");
   ck(Number.isSafeInteger(r.views)&&r.views>=0&&Number.isSafeInteger(r.baseline_median_views)&&r.baseline_median_views>=0&&Number.isSafeInteger(r.baseline_sample_size)&&r.baseline_sample_size>=0,"METRICS");
   ck(iso(r.published_at)&&iso(r.observed_at),"DATETIME");
   const pub=Date.parse(r.published_at),obs=Date.parse(r.observed_at);
   ck(pub<=obs&&obs<=end,"TIME");
   const ageHours=(obs-pub)/3600000,eligible=ageHours>=24&&r.baseline_sample_size>=5&&r.baseline_median_views>0;
   channels.add(r.channel_id);if(r.comparison_role==="counterexample")negative.add(r.video_id);
   rows.push({
    video_id:r.video_id,channel_id:r.channel_id,comparison_role:r.comparison_role,
    age_hours:Math.round(ageHours*100)/100,
    relative_views_multiple:eligible?Math.round(1000*r.views/r.baseline_median_views)/1000:null,
    status:eligible?"DESCRIPTIVE_ONLY_HUMAN_REVIEW":"INSUFFICIENT_BASELINE_OR_AGE",
    source_verified:false,virality_predicted:false,production_approved:false
   });
 }
 const gaps=[];
 if(!rows.length)gaps.push("NO_REAL_DATA");
 if(rows.length<6)gaps.push("FEWER_THAN_6_OBSERVATIONS");
 if(channels.size<3)gaps.push("FEWER_THAN_3_CHANNELS");
 if(negative.size<2)gaps.push("FEWER_THAN_2_COUNTEREXAMPLES");
 if(rows.some(r=>r.status==="INSUFFICIENT_BASELINE_OR_AGE"))gaps.push("INSUFFICIENT_AGE_OR_BASELINE");
 const ranked=rows.filter(x=>x.relative_views_multiple!==null).sort((a,b)=>b.relative_views_multiple-a.relative_views_multiple||a.video_id.localeCompare(b.video_id)).slice(0,10);
 return {
  version:"engineyt-daily-niche-research-report/0.1",as_of_date:input.as_of_date,
  status:gaps.length?"INSUFFICIENT_EVIDENCE":"SAMPLE_FOR_INDEPENDENT_HUMAN_REVIEW_ONLY",
  record_count:rows.length,channel_count:channels.size,counterexample_count:negative.size,
  research_candidates:ranked,evidence_gaps:gaps,
  independent_source_verification:false,
  automatic_collection:false,algorithm_control_claimed:false,monetization_predicted:false,
  execution_authorized:false,render_authorized:false,publication_authorized:false,
  human_shortlist_decision:"NOT_MADE",
  caveats:["MANUAL_UNVERIFIED_METRICS","RELATIVE_VIEWS_NOT_EXPECTED_REACH","FIRST_VIDEO_NOT_PROOF_OF_REPEATABILITY","NO_CAUSAL_INFERENCE"],
  gates:["E5B4D_NO_GO_MODEL_M","STRICT_POLICY_B_UNCHANGED","R6_PENDING","IVV_GLOBAL_NOT_APPROVED","CASE_APPROVAL_NOT_APPROVED"]
 };
}

export function reviewIntake(out,input){
 const problems=[],check=(x,c)=>{if(!x)problems.push(c)};
 check(out?.version==="engineyt-daily-niche-research-report/0.1","VERSION");
 check(out?.as_of_date===input?.as_of_date,"DATE_BIND");
 check(out?.human_shortlist_decision==="NOT_MADE","NO_HUMAN_DECISION");
 for(const k of ["independent_source_verification","automatic_collection","algorithm_control_claimed","monetization_predicted","execution_authorized","render_authorized","publication_authorized"])check(out?.[k]===false,"NO_AUTHORITY_"+k);
 check(out?.record_count===input?.observations?.length,"SOURCE_COUNT");
 const channels=new Set((input?.observations||[]).map(x=>x.channel_id));
 const counter=(input?.observations||[]).filter(x=>x.comparison_role==="counterexample").length;
 check(out?.channel_count===channels.size&&out?.counterexample_count===counter,"CHANNEL_OR_COUNTER_COUNT");
 check(Array.isArray(out?.research_candidates)&&out.research_candidates.length<=10,"BOUNDS");
 const ids=new Set((input?.observations||[]).map(x=>x.video_id));
 if(Array.isArray(out?.research_candidates))for(const row of out.research_candidates){
  check(ids.has(row.video_id),"NOT_FROM_SOURCE");
  check(row.status==="DESCRIPTIVE_ONLY_HUMAN_REVIEW"&&row.production_approved===false&&row.source_verified===false&&row.virality_predicted===false,"CANDIDATE_GATES");
 }
 check(out?.caveats?.includes("FIRST_VIDEO_NOT_PROOF_OF_REPEATABILITY")&&out?.caveats?.includes("MANUAL_UNVERIFIED_METRICS"),"CAVEATS");
 for(const gate of ["E5B4D_NO_GO_MODEL_M","STRICT_POLICY_B_UNCHANGED","R6_PENDING","IVV_GLOBAL_NOT_APPROVED","CASE_APPROVAL_NOT_APPROVED"])check(out?.gates?.includes(gate),"GATE_"+gate);
 if(out?.status==="SAMPLE_FOR_INDEPENDENT_HUMAN_REVIEW_ONLY")check(out.record_count>=6&&out.channel_count>=3&&out.counterexample_count>=2&&out.evidence_gaps?.length===0,"FALSE_EVIDENCE_UPGRADE");
 return {version:"engineyt-independent-intake-review/0.1",status:problems.length?"FAIL_CLOSED":"PASS_LIMITED_STATIC_ONLY",release_authority:false,problems};
}
