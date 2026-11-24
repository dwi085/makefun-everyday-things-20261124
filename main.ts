import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Everyday Things, Two Lines — a queue, explained to a 10-year-old.
// Deterministic: fixed strings, no input, no clock, no network —
// two runs always write byte-identical output.
const line1 =
  "A queue is a slow caterpillar made of people, each person one segment shuffling forward a tiny step at a time until the head reaches the counter and the whole creature disappears one person at a time.";
const line2 =
  "The caterpillar shows how a queue creeps forward in small steps and shrinks from the front, but it leaves out that people can chat, leave, or cut in — real caterpillars never choose anything.";

const text = line1 + "\n" + line2;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
