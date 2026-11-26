// Out of Tokens, Mid-Sentence — u-kiencx-out-of-tokens-mid-sentence-00f60233
// Writes exactly one line — the error message an AI agent shows when it runs
// out of tokens mid-sentence — to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback
// /output). No trailing newline: char count equals byte count.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Error: token supply exhausted. The sentence you were reading has been repossessed.";

// Gate: 1..140 chars, not only whitespace, single line. The line is ASCII,
// so char count equals byte count; verify both so the gate can never drift.
const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (chars < 1 || chars > 140) {
  throw new Error(`entry length ${chars} outside 1..140`);
}
if (bytes !== chars) {
  throw new Error(`char/byte mismatch: ${chars} chars, ${bytes} bytes`);
}
if (!LINE.trim()) {
  throw new Error("entry is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
// Read back: the file must contain exactly the line, no trailing newline.
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
