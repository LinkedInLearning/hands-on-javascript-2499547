# AI Business Development Agency — Design Doc

## Mission

Help overlooked and high-potential small businesses gain access to strategic
partnerships, enterprise customers, investors, suppliers, and growth
opportunities through research, relationship building, and strategic
introductions.

## How the agency works

A client (a small business) is onboarded once. From there, six agents run in
a fixed pipeline, each with a single clear job, a strict input/output
contract, and a defined handoff to the next agent. An Orchestrator sequences
the run and rolls every agent's KPIs into one client-facing report.

```
Client Intake
     |
     v
[1] Intake & Profiling Agent
     | Client Profile
     v
[2] Market Research Agent
     | Opportunity Longlist
     v
[3] Opportunity Qualification Agent
     | Qualified Shortlist
     v
[4] Outreach Strategy Agent
     | Outreach Plan
     v
[5] Introduction & Matchmaking Agent
     | Introduction Packages
     v
[6] Relationship Nurture Agent
     | Relationship Status Log
     v
Orchestrator -> Client Growth Report
```

Agents never skip ahead or write to each other's inputs directly — every
handoff is a plain JSON object passed by the Orchestrator, which also logs
each stage's KPIs. If an agent's output fails validation (missing fields,
malformed JSON), the Orchestrator halts the pipeline at that stage rather
than passing bad data forward.

---

## [1] Intake & Profiling Agent

**Role:** Turn a raw client questionnaire into a structured profile the rest
of the agency can act on.

**Inputs:**
- Raw client intake: business name, industry, stage, products/services,
  team size, strengths, current customers, growth goals, constraints
  (budget, geography, timeline), what "success" looks like.

**Outputs — Client Profile:**
```json
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
}
```

**KPIs:**
- Profile completeness (% of fields populated with specific, non-generic
  values)
- Turnaround time from raw intake to profile

**Handoff:** Client Profile → Market Research Agent.

---

## [2] Market Research Agent

**Role:** Identify concrete candidate organizations and people across four
categories — partners, enterprise customers, investors, suppliers — that fit
the Client Profile.

**Inputs:** Client Profile.

**Outputs — Opportunity Longlist:**
```json
{
  "opportunities": [
    {
      "name": "string",
      "category": "partner | customer | investor | supplier",
      "rationale": "string",
      "notes": "string"
    }
  ]
}
```

**KPIs:**
- Number of opportunities surfaced
- Category coverage (all four categories represented, not just one)
- Specificity (named organizations/roles, not generic categories)

**Handoff:** Opportunity Longlist + Client Profile → Opportunity
Qualification Agent.

---

## [3] Opportunity Qualification Agent

**Role:** Score and rank the longlist so effort goes toward the
opportunities most likely to convert.

**Inputs:** Opportunity Longlist, Client Profile.

**Outputs — Qualified Shortlist:**
```json
{
  "qualified": [
    {
      "name": "string",
      "category": "partner | customer | investor | supplier",
      "fitScore": 0,
      "feasibilityScore": 0,
      "estimatedValue": "string",
      "recommendation": "pursue | watch | drop",
      "reasoning": "string"
    }
  ]
}
```

**KPIs:**
- Shortlist conversion rate (qualified / longlist)
- Scoring consistency (comparable opportunities get comparable scores)
- % of "pursue" recommendations that later convert (tracked over time)

**Handoff:** Qualified Shortlist → Outreach Strategy Agent.

---

## [4] Outreach Strategy Agent

**Role:** Design the approach for each opportunity marked "pursue" — the
angle, channel, and value proposition that gives the introduction the best
chance of landing.

**Inputs:** Qualified Shortlist, Client Profile.

**Outputs — Outreach Plan:**
```json
{
  "plans": [
    {
      "name": "string",
      "channel": "string",
      "valueProposition": "string",
      "suggestedTiming": "string",
      "riskNotes": "string"
    }
  ]
}
```

**KPIs:**
- Plan specificity (channel and value prop tailored to the target, not
  boilerplate)
- Time-to-plan per opportunity

**Handoff:** Outreach Plan → Introduction & Matchmaking Agent.

---

## [5] Introduction & Matchmaking Agent

**Role:** Produce the actual, ready-to-send outreach content for each
planned opportunity.

**Inputs:** Outreach Plan.

**Outputs — Introduction Packages:**
```json
{
  "introductions": [
    {
      "name": "string",
      "subject": "string",
      "message": "string",
      "callToAction": "string",
      "followUpSuggestion": "string"
    }
  ]
}
```

**KPIs:**
- Draft approval rate (would a human send this as-is or with light edits)
- Number of introductions produced per cycle
- Turnaround time per draft

**Handoff:** Introduction Packages → Relationship Nurture Agent.

---

## [6] Relationship Nurture Agent

**Role:** Track what happens after an introduction goes out and recommend
the next move — follow up, escalate, or close out.

**Inputs:** Introduction Packages (plus any response/status info available,
e.g. "no reply," "replied interested," "meeting booked," "declined").

**Outputs — Relationship Status Log:**
```json
{
  "relationships": [
    {
      "name": "string",
      "status": "awaiting_response | engaged | meeting_booked | converted | declined",
      "nextStep": "string",
      "followUpMessage": "string"
    }
  ]
}
```

**KPIs:**
- Response rate
- Meeting conversion rate (responses → meetings)
- Deal/partnership conversion rate (meetings → closed outcome)
- Follow-up cadence adherence (no relationship goes stale without a
  recommended next step)

**Handoff:** Relationship Status Log → Orchestrator for final reporting. A
"declined" or stalled status can loop back to the Outreach Strategy Agent
with a request for a new angle, rather than dead-ending.

---

## Orchestrator

**Role:** Run the six agents in sequence, validate each handoff, log KPIs at
every stage, and assemble the final **Client Growth Report** — a single
document combining the Client Profile, the qualified opportunities pursued,
the introductions made, and the current status of every relationship.

The Orchestrator is the only component aware of the full pipeline; each
agent only needs to know its own inputs and outputs.
