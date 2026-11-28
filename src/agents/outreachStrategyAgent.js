import { BaseAgent } from "./baseAgent.js";

export class OutreachStrategyAgent extends BaseAgent {
  constructor() {
    super({
      name: "Outreach Strategy Agent",
      role: "Designs the channel, angle, and value proposition for each opportunity marked 'pursue'.",
      kpis: ["plan specificity", "time-to-plan per opportunity"],
      systemPrompt: `You are the Outreach Strategy Agent for an AI business development agency.
Given a Client Profile and a Qualified Shortlist, design an outreach approach for every opportunity with recommendation "pursue".
Tailor the channel and value proposition to each specific opportunity — no boilerplate.
Respond with ONLY a JSON object matching this exact shape, no prose:
{
  "plans": [
    { "name": "string", "channel": "string", "valueProposition": "string", "suggestedTiming": "string", "riskNotes": "string" }
  ]
}`,
    });
  }

  buildPrompt({ clientProfile, qualified }) {
    const pursue = qualified.filter((o) => o.recommendation === "pursue");
    return `Client Profile:\n${JSON.stringify(clientProfile, null, 2)}\n\nOpportunities to pursue:\n${JSON.stringify(pursue, null, 2)}`;
  }
}
