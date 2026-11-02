import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

// Test-only source identity check. No network, subprocess, render or release action.
export function gitBlobSha1(bytes) {
  if (!(bytes instanceof Uint8Array)) throw new TypeError("BLOB_BYTES_REQUIRED");
  const prefix = Buffer.from(`blob ${bytes.byteLength}\0`, "utf8");
  return createHash("sha1").update(prefix).update(bytes).digest("hex");
}

export async function verifySourcePins() {
  const manifest = JSON.parse(await readFile(new URL("../source-pins.json", import.meta.url), "utf8"));
  const expectedPaths = [
    "editorial/EP01-45S-SHOTPLAN-DRAFT.json",
    "cases/ED-CASE-REAL-01.v0.2.json",
    "editorial/EP01-AV01-45S-EVENT-STATE-PRECEDENCE.v0.1.json"
  ];
  if (manifest.artifact_version !== "engineyt-source-pin-manifest/0.1" ||
      manifest.status !== "DOCUMENTARY_GIT_BLOB_IDENTITY_ONLY_NOT_EXTERNAL_AUTHENTICATION" ||
      !Array.isArray(manifest.source_files) ||
      manifest.source_files.length !== expectedPaths.length ||
      manifest.source_files.some((v,i)=>v.path!==expectedPaths[i] || !/^[0-9a-f]{40}$/.test(v.expected_git_blob_sha1))) {
    throw new Error("SOURCE_PIN_REJECT:MANIFEST_STRUCTURE");
  }
  const results=[];
  for (const item of manifest.source_files) {
    const bytes = await readFile(new URL("../../../" + item.path, import.meta.url));
    if (bytes.byteLength > 262144) throw new Error("SOURCE_PIN_REJECT:FILE_SIZE_CAP");
    const observedRaw = gitBlobSha1(bytes);
    let matchMode = "EXACT_CHECKOUT_BYTES";
    if (observedRaw !== item.expected_git_blob_sha1) {
      // Git has '* text=auto': on Windows, checkout can convert LF to CRLF.
      // Accept ONLY the strictly reversible CRLF -> LF worktree transformation.
      const decoded = bytes.toString("utf8");
      if (!decoded.includes("\r\n")) {
        throw new Error("SOURCE_PIN_REJECT:SOURCE_BYTES_MISMATCH:" + item.path);
      }
      const canonical = decoded.replace(/\r\n/g, "\n");
      if (canonical.includes("\r") || gitBlobSha1(Buffer.from(canonical,"utf8")) !== item.expected_git_blob_sha1) {
        throw new Error("SOURCE_PIN_REJECT:SOURCE_BYTES_MISMATCH:" + item.path);
      }
      matchMode = "GIT_LF_CANONICALIZED_FROM_CRLF_CHECKOUT";
    }
    results.push({path:item.path,git_blob_sha1:item.expected_git_blob_sha1,match:true,match_mode:matchMode});
  }
  return {
    status:"PASS_LIMITED_LOCAL_GIT_BLOB_MATCH",
    release_authority:false,
    external_authentication:false,
    case_legality_verified:false,
    runner_qualification:false,
    files:results
  };
}
