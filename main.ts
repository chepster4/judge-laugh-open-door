import { mkdirSync, writeFileSync } from "node:fs";

// One joke about office life, one line, 95 characters. The entry program
// writes it verbatim to /output/entry.txt for the judge to read.
const JOKE =
  "My boss calls it an open-door policy, but the door is open so he can hear when you stop typing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
