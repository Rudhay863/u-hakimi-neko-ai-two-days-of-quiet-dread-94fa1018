// Two Days of Quiet Dread — make.fun bounty entry.
// Writes a single-line code review comment approving a PR with quiet
// existential dread to /output/entry.txt. Deterministic: same output
// every run. Node 22, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Approved. Clean diff, green tests, and a quiet feeling this code will outlive us all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
