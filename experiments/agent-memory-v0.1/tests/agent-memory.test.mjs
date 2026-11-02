import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {buildMemoryIndex,searchMemoryIndex} from "../src/build-index.mjs";
import {reviewMemoryIndex} from "../src/independent-review.mjs";
const get = async () => JSON.parse(await readFile(new URL("../fixtures/public-source-pointers.json",import.meta.url),"utf8"));
const clone = x => structuredClone(x);
const assertRejected = (operation,code) => assert.throws(operation,new RegExp(code));
test("manual Git source pointers remain non-authoritative",async()=>{
 const {scope,records}=await get();const index=buildMemoryIndex(records,scope);
 assert.equal(index.records.length,2);
 assert.equal(index.context_autoinjection_enabled,false);
 assert.equal(index.cloud_sync_enabled,false);
 assert.equal(index.authority_to_execute,false);
 assert.equal(index.authority_to_publish,false);
 assert.equal(index.e5b4d_state,"NO-GO_UNDER_MODEL_M");
 assert.equal(reviewMemoryIndex(index).status,"PASS_LIMITED_STATIC_METADATA_ONLY");
});
test("bounded discovery only returns referenced metadata",async()=>{
 const {scope,records}=await get();const index=buildMemoryIndex(records,scope);
 const found=searchMemoryIndex(index,"editorial EDL",3);
 assert.equal(found.results[0].id,"MEM-0001");
 assert.equal(found.instruction_authority,false);
 assert.equal(found.results[0].trust,"UNTRUSTED_DATA_NOT_INSTRUCTIONS");
 assert.equal(found.next_action,"INDEPENDENT_SOURCE_AND_GATE_VERIFICATION_REQUIRED_BEFORE_DECISION");
});
test("unknown query yields no invented memory",async()=>{
 const {scope,records}=await get();
 assert.deepEqual(searchMemoryIndex(buildMemoryIndex(records,scope),"nonexistent",3).results,[]);
});
test("auto injection is rejected",async()=>{
 const {scope,records}=await get();scope.auto_inject=true;
 assertRejected(()=>buildMemoryIndex(records,scope),"MEMORY_REJECT:SCOPE_GATES");
});
test("cloud sync is rejected",async()=>{
 const {scope,records}=await get();scope.cloud_sync=true;
 assertRejected(()=>buildMemoryIndex(records,scope),"MEMORY_REJECT:SCOPE_GATES");
});
test("forged execution instruction field is rejected",async()=>{
 const {scope,records}=await get();records[0].execute_now=true;
 assertRejected(()=>buildMemoryIndex(records,scope),"MEMORY_REJECT:RECORD_FIELDS");
});
test("duplicate identifiers are rejected",async()=>{
 const {scope,records}=await get();records[1].id=records[0].id;
 assertRejected(()=>buildMemoryIndex(records,scope),"MEMORY_REJECT:ID");
});
test("obvious secret patterns are rejected",async()=>{
 const {scope,records}=await get();records[0].summary="Leaked password=abc123";
 assertRejected(()=>buildMemoryIndex(records,scope),"MEMORY_REJECT:SENSITIVE_PATTERN");
});
test("source path traversal is rejected",async()=>{
 const {scope,records}=await get();records[0].source.path="../.env";
 assertRejected(()=>buildMemoryIndex(records,scope),"MEMORY_REJECT:SOURCE_PATH");
});
test("unverified observations cannot upgrade provenance",async()=>{
 const {scope,records}=await get();records[0].verification="VERIFIED";
 assertRejected(()=>buildMemoryIndex(records,scope),"MEMORY_REJECT:TRUST");
});
test("branch names are not substitutes for immutable commit SHAs",async()=>{
 const {scope,records}=await get();records[0].source.commit_sha="main";
 assertRejected(()=>buildMemoryIndex(records,scope),"MEMORY_REJECT:SOURCE_PIN");
});
test("independent review catches altered execution authority",async()=>{
 const {scope,records}=await get();const x=buildMemoryIndex(records,scope);x.authority_to_execute=true;
 assert.equal(reviewMemoryIndex(x).status,"FAIL_CLOSED");
});
test("independent review catches record-level release authority",async()=>{
 const {scope,records}=await get();const x=buildMemoryIndex(records,scope);x.records[0].permission_to_publish=true;
 assert.equal(reviewMemoryIndex(x).status,"FAIL_CLOSED");
});
test("recall fails closed when auto-injection is enabled",async()=>{
 const {scope,records}=await get();const x=buildMemoryIndex(records,scope);x.context_autoinjection_enabled=true;
 assertRejected(()=>searchMemoryIndex(x,"audience",1),"RECALL_REJECT:INDEX_GATES");
});
test("result limits cannot exceed five",async()=>{
 const {scope,records}=await get();const x=buildMemoryIndex(records,scope);
 assertRejected(()=>searchMemoryIndex(x,"audience",99),"RECALL_REJECT:LIMIT");
});
