import { callClaudeJSON } from "../claudeClient.js";

export class BaseAgent {
  constructor({ name, role, systemPrompt, kpis }) {
    this.name = name;
    this.role = role;
    this.systemPrompt = systemPrompt;
    this.kpis = kpis;
  }

  buildPrompt(_input) {
    throw new Error(`${this.name} must implement buildPrompt(input)`);
  }

  async run(input) {
    const startedAt = Date.now();
    const userPrompt = this.buildPrompt(input);
    const output = await callClaudeJSON(this.systemPrompt, userPrompt);
    const durationMs = Date.now() - startedAt;

    return {
      agent: this.name,
      output,
      meta: { durationMs, kpis: this.kpis },
    };
  }
}
