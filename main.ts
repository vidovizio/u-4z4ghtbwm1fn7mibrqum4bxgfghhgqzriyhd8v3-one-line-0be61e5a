import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
const outputPath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });

const line = "Human's 3,000-word prompt says 'be concise' — I replied 'be concise' and they wrote 3,000 words back.";

writeFileSync(outputPath, line, { encoding: "utf8", flag: "w" });