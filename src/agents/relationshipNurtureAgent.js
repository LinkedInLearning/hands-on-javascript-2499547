import { BaseAgent } from "./baseAgent.js";

export class RelationshipNurtureAgent extends BaseAgent {
  constructor() {
    super({
      name: "Relationship Nurture Agent",
      role: "Tracks introduction outcomes and recommends the next step for each relationship.",
      kpis: [
        "response rate",
        "meeting conversion rate",
        "deal/partnership conversion rate",
        "follow-up cadence adherence",
      ],
      systemPrompt: `You are the Relationship Nurture Agent for an AI business development agency.
Given the introductions that were sent (and any known response status), determine the current status of each relationship and recommend the next step.
If no response status is known yet, assume "awaiting_response" and recommend an appropriate first follow-up timeline.
Respond with ONLY a JSON object matching this exact shape, no prose:
{
  "relationships": [
    { "name": "string", "status": "awaiting_response | engaged | meeting_booked | converted | declined", "nextStep": "string", "followUpMessage": "string" }
  ]
}`,
    });
  }

  buildPrompt({ introductions, responseUpdates }) {
    return `Introductions sent:\n${JSON.stringify(introductions, null, 2)}\n\nKnown response updates (may be empty):\n${JSON.stringify(responseUpdates || [], null, 2)}`;
  }
}
