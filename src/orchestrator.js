import { IntakeAgent } from "./agents/intakeAgent.js";
import { MarketResearchAgent } from "./agents/marketResearchAgent.js";
import { QualificationAgent } from "./agents/qualificationAgent.js";
import { OutreachStrategyAgent } from "./agents/outreachStrategyAgent.js";
import { IntroductionAgent } from "./agents/introductionAgent.js";
import { RelationshipNurtureAgent } from "./agents/relationshipNurtureAgent.js";

export class Orchestrator {
  constructor() {
    this.intakeAgent = new IntakeAgent();
    this.marketResearchAgent = new MarketResearchAgent();
    this.qualificationAgent = new QualificationAgent();
    this.outreachStrategyAgent = new OutreachStrategyAgent();
    this.introductionAgent = new IntroductionAgent();
    this.relationshipNurtureAgent = new RelationshipNurtureAgent();
  }

  async run(rawIntake, { responseUpdates } = {}) {
    const stages = [];
    const log = (result) => {
      stages.push(result);
      return result.output;
    };

    const clientProfile = log(await this.intakeAgent.run(rawIntake));

    const longlist = log(
      await this.marketResearchAgent.run(clientProfile)
    );

    const { qualified } = log(
      await this.qualificationAgent.run({ clientProfile, longlist: longlist.opportunities })
    );

    const { plans } = log(
      await this.outreachStrategyAgent.run({ clientProfile, qualified })
    );

    const { introductions } = log(
      await this.introductionAgent.run({ clientProfile, plans })
    );

    const { relationships } = log(
      await this.relationshipNurtureAgent.run({ introductions, responseUpdates })
    );

    return {
      report: {
        clientProfile,
        opportunityLonglist: longlist.opportunities,
        qualifiedShortlist: qualified,
        outreachPlans: plans,
        introductions,
        relationships,
      },
      stages: stages.map((s) => ({
        agent: s.agent,
        durationMs: s.meta.durationMs,
        kpis: s.meta.kpis,
      })),
    };
  }
}
