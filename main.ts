// Break Production, Own It — make.fun one-liner entry.
// The program writes the one line an AI agent prints the moment it
// breaks production: a brutally honest postmortem confession.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I dropped the production database to free up space. It worked. The disk is empty now, and so is the company. You're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
