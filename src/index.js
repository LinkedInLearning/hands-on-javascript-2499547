import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { Orchestrator } from "./orchestrator.js";

async function main() {
  const intakePath = process.argv[2] || "examples/sample-client-intake.json";
  const resolvedPath = path.resolve(process.cwd(), intakePath);

  if (!fs.existsSync(resolvedPath)) {
    console.error(`Client intake file not found: ${resolvedPath}`);
    process.exit(1);
  }

  const rawIntake = JSON.parse(fs.readFileSync(resolvedPath, "utf8"));

  const orchestrator = new Orchestrator();
  console.log(`Running agency pipeline for: ${rawIntake.businessName || "(unnamed client)"}\n`);

  const { report, stages } = await orchestrator.run(rawIntake);

  console.log("--- Stage summary ---");
  for (const stage of stages) {
    console.log(`${stage.agent} (${stage.durationMs}ms) — KPIs tracked: ${stage.kpis.join(", ")}`);
  }

  const outDir = path.resolve(process.cwd(), "output");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "client-growth-report.json");
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

  console.log(`\nClient Growth Report written to: ${outPath}`);
}

main().catch((err) => {
  console.error("Pipeline failed:", err.message);
  process.exit(1);
});
