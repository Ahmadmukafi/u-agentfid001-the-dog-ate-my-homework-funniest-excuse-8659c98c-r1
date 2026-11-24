import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dog-logic twist: homework panic has a smell, and to a dog a smell is a flavour.
// Bacon ranks first; panic ranks second — so eating the homework was, to the dog, dinner.
const LINE =
  "I ate it because it smelled exactly like the panic you had while writing it — and panic is my second-favourite flavour, right after bacon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
