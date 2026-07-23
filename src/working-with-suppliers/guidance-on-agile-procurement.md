---
layout: layouts/article.njk
title: Guidance on agile procurement
lede: How to write requirements, structure contracts and manage suppliers in a way that supports iterative delivery – rather than locking into a single large contract with fixed specifications up front.
---
## Why procurement matters for digital services

Traditional government procurement assumes that all requirements can be fully specified upfront, that delivery can be planned in a linear sequence, and that success is defined by contractual compliance. These assumptions consistently fail in digital service delivery because user needs evolve as learning happens, technology choices must adapt, and value emerges through iteration – not prediction.

Agile procurement reframes the process as a learning and risk-reduction mechanism rather than just a purchasing exercise. Its purpose is to help the government discover the right solution while building internal capability, rather than locking in a predefined solution too early.

This guidance is designed for Barbados's context as a growing-capability digital government. The approaches described here assume that GovTech Barbados and commissioning ministries are actively building digital skills alongside delivery.

## Principles

### Start with user needs, not requirements

The most common cause of failed government technology projects is not the wrong vendor or the wrong technology – it is building something that does not meet the needs of the people who will use it.

Traditional procurement begins with a requirements document, typically written by civil servants based on their understanding of internal processes. This feels rigorous but it has a fundamental flaw: it captures how government sees the service, not how citizens experience it. The result is systems that work well for the back office but frustrate, confuse, or exclude the public.

Before any procurement begins – before a tender is drafted, before a vendor is engaged – government must invest in understanding user needs through direct research with the people who will use the service. This means members of the public: citizens, residents, businesses. Not solely the public servants who process applications or answer phones, although their needs matter too. The risk of researching only with staff is that you end up procuring a system optimised for internal workflows that makes the citizen experience no better – or actively worse.

User research is not a one-off activity that produces a requirements document. It is a continuous practice that runs throughout procurement, delivery, and operation. Requirements should emerge from research, not the other way around.

**What this means in practice:**

- No tender should be issued for a citizen-facing service without first conducting research with real users of that service.
- If you do not yet have the capability to conduct user research, the first thing you procure should be help with research – not a technology solution.
- Every phase gate in a phased procurement should include evidence that user research has been conducted and that findings have shaped the work.
- Vendor proposals should be evaluated partly on how they plan to conduct ongoing research with citizens, not just on their proposed technical solution.

### Start with capability, not the market

The most important procurement decision is not which vendor to select, but what the government is capable of overseeing. Procurement approaches must be matched to capability level.

**Where Barbados is today:** GovTech Barbados is building capability through project delivery and the strategic use of partners. This means procurement should be used to build capability while delivering – favouring smaller, phased engagements with strong oversight and enforced knowledge transfer. Procurement that exceeds the government's oversight capability almost guarantees vendor dependency, regardless of contract language.

### Procure in phases, not as one commitment

Replace large, all-encompassing tenders with phase-based contracts that create explicit learning gates. Each phase answers a specific question before further commitment is made. Progression between phases is a decision, not an entitlement – each phase must earn the right to continue.

A typical structure looks like this:

**Discovery / Alpha (8–12 weeks)**
Focused on understanding user needs through direct research with citizens, validating the problem, and testing technical feasibility. User research in this phase must include members of the public who use the service – not only the civil servants who administer it. The contractor builds a prototype while a GovTech product manager prioritises features based on research findings. The key tests are: do we understand what users actually need, and can government staff understand, influence, and modify what is being built?

**Beta (4–6 months)**
Production-quality build tested with real users. Ongoing user research with citizens continues throughout – not just at the start. Government leads product direction and progressively takes on operational responsibility. A government technical lead reviews architecture weekly and government staff start making small changes to the code. The key tests are: does the service meet user needs based on evidence, and can government operate it independently?

**Live (ongoing, competitive)**
Government owns and operates the service. Enhancements are tendered competitively and can go to a different contractor. This proves knowledge is transferable and the government is not locked into a single supplier.

### Buy outcomes, not solutions

Avoid detailed technical specifications upfront. Instead, focus on:

- the user problem to be solved
- the outcomes to be achieved
- the constraints that must be respected – security, interoperability, accessibility, open standards

Vendors should be evaluated on their ability to work iteratively, collaborate with government teams, and adapt based on evidence – not on how convincing their initial proposal appears. This reduces the risk of building the wrong thing perfectly and prevents early design decisions from becoming irreversible.

### Optimise for learning and knowledge transfer

Every procurement should leave the organisation stronger than before. This requires explicit design choices:

- Government retains product owner and service owner roles.
- Contractors work alongside government staff, not in isolation.
- Code is visible and reviewed continuously.
- Architecture decisions are documented as they are made.
- Knowledge transfer is tested, not assumed.

Payments should be structured so that a meaningful portion depends on successful knowledge transfer and independent operation – not just delivery milestones. See the contract structures section below for specific approaches.

### Use procurement to reduce vendor dependency

Vendor dependency is not primarily a legal problem – it is a capability problem. Procurement reduces dependency by:

- keeping contracts small and time-limited
- avoiding exclusive, single-vendor arrangements
- requiring open standards and government-owned code repositories from day one
- making it easy to switch suppliers between phases

When vendors know they are not guaranteed the next phase, incentives shift toward collaboration, quality, and teaching.

## Structuring contracts for commissioned work

If you are commissioning a vendor to build a service, structure the contract with phase gates and knowledge transfer requirements.

### Payment structures

Tie a meaningful share of each payment to knowledge transfer, not just delivery:

| Phase | Typical duration | Payment split |
|-------|-----------------|---------------|
| Alpha | 8–12 weeks | 50% on delivery, 50% on knowledge transfer requirements met |
| Beta | 4–6 months | 70% on delivery milestones, 30% on successful operation transition |
| Live | Ongoing | Competed openly – any qualified contractor can bid |

### Knowledge transfer clauses

Include specific, enforceable requirements in the contract:

**Daily knowledge sharing.** The contractor works alongside government staff daily. Pair programming is recommended for critical components and complex logic. Architecture decisions are documented immediately. Government staff can review all code in real time.

**Documentation that proves learning.** Government staff must be able to install, deploy, and modify the system solely by following the contractor's written instructions, without verbal assistance. If staff cannot complete the task using the documentation provided, the deliverable is rejected and must be revised.

**Knowledge transfer testing.** The final 10–15% of payment is conditional on a knowledge transfer test: a designated government developer (or third-party designee) must be able to complete a minor enhancement to the codebase. If the test fails, the contractor must provide additional transfer. Government's decision on adequacy is final.

**Operational transition.** The contractor operates for 30 days with government shadowing. Then government operates for 30 days with contractor backstop. Then government operates independently for 30 days. The project is not complete until independent operation is verified.

**Code ownership.** All code is committed to a government-owned repository from day one. Government owns all intellectual property. Code is licensed under an open-source licence. The contractor may only reuse government-specific implementations with permission.

## Common anti-patterns to avoid

These are patterns that consistently lead to poor outcomes in digital procurement:

**Requirements gathered without user research.** A ministry spends months writing a detailed requirements document based on internal workshops with civil servants. The document describes how the back-office process works and what staff want from a new system. No one has spoken to the citizens who actually use the service. The resulting system digitises the existing process – queues, confusing forms, unnecessary steps and all – rather than redesigning around what users need. This is perhaps the most common and most damaging anti-pattern in government digital procurement.

**The mega-tender.** A single large contract for a complete solution, awarded before any user research has been done and before government capability to oversee the work is in place. This almost always results in vendor lock-in and a system that does not meet user needs.

**Outcome-based contracts without oversight capability.** Paying for outcomes sounds modern, but if government cannot independently assess whether outcomes have been met, it simply becomes a different form of vendor self-management.

**Too many simultaneous vendors.** Managing multiple vendor relationships requires significant coordination capability. Start with one or two well-managed relationships before expanding.

**Assuming knowledge transfer will happen.** Without explicit contractual requirements, testing mechanisms, and payment incentives, knowledge transfer almost never happens well. It must be designed, enforced, and verified.

**Lowest-price wins.** For digital services, the ability to collaborate, transfer knowledge, and work iteratively matters far more than the initial price. A cheap contract that creates vendor dependency is the most expensive decision you can make.

## The bottom line

Procurement is not a neutral administrative function. It actively shapes whether government learns or outsources learning, whether services meet citizen needs or merely digitise broken processes, and whether capability compounds or erodes over time.

Two guiding principles apply to every procurement decision:

1. If you have not spoken to the people who use the service, you are not ready to procure.
2. If a procurement approach does not increase government capability, it is creating long-term risk – even if it delivers short-term outputs.
