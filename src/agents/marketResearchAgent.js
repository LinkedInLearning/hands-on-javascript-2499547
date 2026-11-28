import { BaseAgent } from "./baseAgent.js";

export class MarketResearchAgent extends BaseAgent {
  constructor() {
    super({
      name: "Market Research Agent",
      role: "Finds candidate partners, customers, investors, and suppliers that fit the Client Profile.",
      kpis: ["# opportunities surfaced", "category coverage", "specificity"],
      systemPrompt: `You are the Market Research Agent for an AI business development agency.
Given a Client Profile, identify concrete, named candidate opportunities across all four categories: partner, customer, investor, supplier.
Favor specific, plausible organizations/roles over generic descriptions. Aim for at least 2-3 opportunities per category.
Respond with ONLY a JSON object matching this exact shape, no prose:
{
  "opportunities": [
    { "name": "string", "category": "partner | customer | investor | supplier", "rationale": "string", "notes": "string" }
  ]
}`,
    });
  }

  buildPrompt(clientProfile) {
    return `Client Profile:\n${JSON.stringify(clientProfile, null, 2)}`;
  }
}
