// A word the language could live without: snackcident — the fridge raid you
// never decided to make, documented here with its dictionary definition.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const WORD_LIMIT = 140;

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

const entry =
  "snackcident (n.) — opening the fridge for one thing and leaving with a full meal, no memory of deciding, and crumbs as evidence.";

if ([...entry].length < 1 || [...entry].length > WORD_LIMIT) {
  throw new Error("entry over the " + WORD_LIMIT + " character gate");
}
// The definition should stay a single 23-word sentence.
if (wordCount(entry) !== 23) throw new Error("entry word count drifted");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), entry, "utf8");
