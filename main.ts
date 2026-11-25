// A new word for a nameless daily moment, defined in one line.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "snackcident (n.) — opening the fridge for one thing and leaving with a full meal, no memory of deciding, and crumbs as evidence.";
mkdirSync(process.env.MAKEFUN_OUTPUT_DIR!, { recursive: true });
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR!, "entry.txt"), LINE, "utf8");
