// Builds a plain static version of the site into /out for classic hosting (o2switch / Apache).
// Usage: node scripts/build-static.mjs https://your-domain.example
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const siteUrl = (process.argv[2] ?? "").replace(/\/$/, "");
if (!/^https:\/\/[^/]+$/.test(siteUrl)) {
  console.error("Please pass the live address, e.g. node scripts/build-static.mjs https://elara.example.com");
  process.exit(1);
}

const build = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, STATIC_EXPORT: "1", NEXT_PUBLIC_SITE_URL: siteUrl },
});
if (build.status !== 0) process.exit(build.status ?? 1);

// Next writes segment prefetch files as  about/__next.about/__PAGE__.txt
// but the browser requests             about/__next.about.__PAGE__.txt
// Copy each one to the flat name so link prefetching works on any static host.
let copied = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory() || name === "_next") continue;
    if (name.startsWith("__next.")) flatten(full, dir, name);
    else walk(full);
  }
}
function flatten(segDir, parent, prefix) {
  const files = [];
  (function collect(d) {
    for (const n of readdirSync(d)) {
      const f = join(d, n);
      statSync(f).isDirectory() ? collect(f) : files.push(f);
    }
  })(segDir);
  for (const f of files) {
    const flat = join(parent, `${prefix}.${relative(segDir, f).split(sep).join(".")}`);
    if (!existsSync(flat)) {
      copyFileSync(f, flat);
      copied++;
    }
  }
}
walk("out");
console.log(`\nStatic site ready in /out for ${siteUrl} (${copied} prefetch files added).`);
