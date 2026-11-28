import { BaseAgent } from "./baseAgent.js";

export class IntakeAgent extends BaseAgent {
  constructor() {
    super({
      name: "Intake & Profiling Agent",
      role: "Turns a raw client questionnaire into a structured Client Profile.",
      kpis: ["profile completeness %", "turnaround time"],
      systemPrompt: `You are the Intake & Profiling Agent for an AI business development agency.
Your job is to turn a raw client intake questionnaire into a structured Client Profile.
Be specific and avoid generic filler — infer reasonable detail from what's given, but never invent facts not implied by the input.
Respond with ONLY a JSON object matching this exact shape, no prose:
{
  "businessName": "string",
  "industry": "string",
  "stage": "string",
  "summary": "string",
  "strengths": ["string"],
  "growthGoals": ["string"],
  "constraints": ["string"],
  "idealPartnerProfile": "string",
  "idealCustomerProfile": "string",
  "idealInvestorProfile": "string",
  "idealSupplierProfile": "string"
}`,
    });
  }

  buildPrompt(intake) {
    return `Raw client intake:\n${JSON.stringify(intake, null, 2)}`;
  }
}
