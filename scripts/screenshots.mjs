// Full-page screenshots of every page at phone, tablet and desktop widths.
// Uses the Microsoft Edge already installed on this PC (no browser download).
// Usage: node scripts/screenshots.mjs [baseUrl] [outDir]
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3001";
const outDir = process.argv[3] ?? "screenshots";
const pages = [
  ["home", "/"],
  ["about", "/about"],
  ["portfolio", "/portfolio"],
  ["packages", "/packages"],
  ["contact", "/contact"],
  ["credits", "/credits"],
];
const sizes = [
  ["375", { width: 375, height: 812 }],
  ["768", { width: 768, height: 1024 }],
  ["1440", { width: 1440, height: 900 }],
];

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ channel: "msedge" });
const problems = [];

for (const [label, viewport] of sizes) {
  // Reduced motion = every reveal is already in its final state for a full-page capture
  const context = await browser.newContext({ viewport, reducedMotion: "reduce", deviceScaleFactor: 1 });
  for (const [name, path] of pages) {
    const page = await context.newPage();
    page.on("console", (m) => m.type() === "error" && problems.push(`${label} ${path} console: ${m.text()}`));
    page.on("response", (r) => r.status() >= 400 && problems.push(`${label} ${path} HTTP ${r.status()} ${r.url()}`));
    await page.goto(base + path, { waitUntil: "networkidle" });
    // Scroll to the bottom so lazy images load, then wait for every image to finish
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");
    await page.waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 30000 });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 0) problems.push(`${label} ${path}: horizontal overflow ${overflow}px`);
    await page.screenshot({ path: `${outDir}/${name}-${label}.png`, fullPage: true });
    console.log("saved", `${name}-${label}.png`);
    await page.close();
  }
  await context.close();
}

await browser.close();
console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "No console errors, failed requests or overflow.");
