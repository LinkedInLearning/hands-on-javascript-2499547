import { BaseAgent } from "./baseAgent.js";

export class QualificationAgent extends BaseAgent {
  constructor() {
    super({
      name: "Opportunity Qualification Agent",
      role: "Scores and ranks the opportunity longlist by fit, feasibility, and value.",
      kpis: ["shortlist conversion rate", "scoring consistency", "pursue-to-conversion rate"],
      systemPrompt: `You are the Opportunity Qualification Agent for an AI business development agency.
Given a Client Profile and an Opportunity Longlist, score each opportunity 0-10 on fit and feasibility, estimate its value, and recommend pursue/watch/drop.
Be consistent: comparable opportunities should receive comparable scores. Justify each recommendation briefly.
Respond with ONLY a JSON object matching this exact shape, no prose:
{
  "qualified": [
    { "name": "string", "category": "partner | customer | investor | supplier", "fitScore": 0, "feasibilityScore": 0, "estimatedValue": "string", "recommendation": "pursue | watch | drop", "reasoning": "string" }
  ]
}`,
    });
  }

  buildPrompt({ clientProfile, longlist }) {
    return `Client Profile:\n${JSON.stringify(clientProfile, null, 2)}\n\nOpportunity Longlist:\n${JSON.stringify(longlist, null, 2)}`;
  }
}
