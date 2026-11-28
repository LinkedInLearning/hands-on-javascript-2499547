# AI Business Development Agency

A multi-agent system that helps overlooked, high-potential small businesses
gain access to strategic partnerships, enterprise customers, investors,
suppliers, and growth opportunities — through research, relationship
building, and strategic introductions.

Six AI agents, each with a clearly defined role, inputs, outputs, KPIs, and
handoff process, run in sequence to turn a client intake into a full growth
report. See [`docs/agency-design.md`](docs/agency-design.md) for the complete
design: every agent's contract and the reasoning behind the pipeline.

## Pipeline

1. **Intake & Profiling Agent** — builds a structured Client Profile
2. **Market Research Agent** — finds candidate partners, customers,
   investors, and suppliers
3. **Opportunity Qualification Agent** — scores and ranks them
4. **Outreach Strategy Agent** — designs the approach for each one worth
   pursuing
5. **Introduction & Matchmaking Agent** — drafts ready-to-send introductions
6. **Relationship Nurture Agent** — tracks responses and recommends next
   steps

An Orchestrator runs the pipeline end-to-end and assembles everything into a
single **Client Growth Report**.

## Setup

```bash
npm install
cp .env.example .env
# then edit .env and set ANTHROPIC_API_KEY
```

## Run it

```bash
npm start
```

This runs the pipeline against the example client in
`examples/sample-client-intake.json` and writes the full report to
`output/client-growth-report.json`.

To run it against your own client, write a new intake JSON file (same shape
as the example) and pass its path:

```bash
node src/index.js path/to/your-client-intake.json
```

## Project layout

```
src/
  claudeClient.js        Thin wrapper around the Anthropic SDK
  orchestrator.js         Runs all six agents in sequence, logs KPIs
  index.js                CLI entry point
  agents/
    baseAgent.js           Shared agent behavior
    intakeAgent.js
    marketResearchAgent.js
    qualificationAgent.js
    outreachStrategyAgent.js
    introductionAgent.js
    relationshipNurtureAgent.js
examples/
  sample-client-intake.json
docs/
  agency-design.md         Full design spec for every agent
```
