import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const base = "/pinterest-platform-positioning/";
const clientRoot = path.resolve(new URL("../dist/client/", import.meta.url).pathname);
async function render() {
  const u = new URL("../dist/server/index.js", import.meta.url);
  u.searchParams.set("test", Date.now());
  const { default: w } = await import(u.href);
  const assets = { fetch: async (request) => {
    let pathname = decodeURIComponent(new URL(request.url).pathname);
    if (pathname.startsWith(base)) pathname = pathname.slice(base.length);
    pathname = pathname.replace(/^\/+/, "");
    const filePath = path.resolve(clientRoot, pathname);
    if (!filePath.startsWith(`${clientRoot}${path.sep}`)) return new Response("Not found", { status: 404 });
    try { return new Response(await readFile(filePath)); }
    catch { return new Response("Not found", { status: 404 }); }
  }};
  return w.fetch(new Request(`http://localhost${base}`, { headers: { accept: "text/html" } }), { ASSETS: assets }, { waitUntil() {}, passThroughOnException() {} });
}
test("renders Pinterest internal recap", async () => {
  const r = await render(); assert.equal(r.status, 200); const h = await r.text();
  for (const x of ["turn intention into action", "Seven chapters, one commercial argument", "80B+", "Pinterest Intelligence", "Visual Search Ads", "Sephora", "Samsung", "2–4×", "NOW · STRATEGY", "NEXT · DESIGN", "LATER · SCALE"]) assert.match(h, new RegExp(x, "i"));
  assert.equal((h.match(/data-story-panel="true"/g) ?? []).length, 19);
  assert.match(h, /rel="stylesheet"[^>]+href="\/pinterest-platform-positioning\/assets\/.+\.css"/);
});
