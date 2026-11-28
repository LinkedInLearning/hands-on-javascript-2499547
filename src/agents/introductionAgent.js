import { BaseAgent } from "./baseAgent.js";

export class IntroductionAgent extends BaseAgent {
  constructor() {
    super({
      name: "Introduction & Matchmaking Agent",
      role: "Drafts ready-to-send introduction content for each planned opportunity.",
      kpis: ["draft approval rate", "# introductions produced", "turnaround time per draft"],
      systemPrompt: `You are the Introduction & Matchmaking Agent for an AI business development agency.
Given a Client Profile and an Outreach Plan, write a ready-to-send introduction for each opportunity: a subject line, a concise personalized message body, a clear call to action, and a follow-up suggestion if there's no response.
Respond with ONLY a JSON object matching this exact shape, no prose:
{
  "introductions": [
    { "name": "string", "subject": "string", "message": "string", "callToAction": "string", "followUpSuggestion": "string" }
  ]
}`,
    });
  }

  buildPrompt({ clientProfile, plans }) {
    return `Client Profile:\n${JSON.stringify(clientProfile, null, 2)}\n\nOutreach Plans:\n${JSON.stringify(plans, null, 2)}`;
  }
}
