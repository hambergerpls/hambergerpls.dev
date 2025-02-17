import { createHash } from "node:crypto";

export function removeNumberPrefixFromContentId(id: string) {
  return id.replace(/\d+-/gm, "");
}

export function hashEntry(entry: string) {
  return createHash("sha256")
    .update(JSON.stringify(entry))
    .digest("hex")
    .slice(0, 6);
}
