import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I bought a plant to feel responsible. It died. Now I feel responsible.";

// One line, one laugh: a tiny tragedy in three beats — hope, death, guilt.
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote entry.txt (${trimmed.length} characters)`);
