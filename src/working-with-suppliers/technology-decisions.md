---
layout: layouts/article.njk
title: "Technology decisions: how to choose the right approach"
lede: A framework for making technology choices – focusing on capability, user needs and long-term sustainability rather than just build vs. buy.
---
## The question behind the question

When government faces a technology decision, the instinct is to ask: should we build this ourselves or buy an existing solution? But this framing presents a false choice. In reality, modern government technology exists on a spectrum, with multiple paths available: buying and configuring commercial products, building on Digital Public Infrastructure (DPI) and Digital Public Goods (DPGs), commissioning vendors to build, self-building with in-house teams, or hybrid approaches that combine purchased software with custom interfaces and integrations.

The right answer depends on the strategic importance of the service, interoperability requirements, internal capability, and the maturity of available solutions. But the single most important factor is this: **your capability – not just your choice – determines success.**

## Start with the people who use the service

Before capability, before technology options, before build-vs-buy: understand the needs of the people who will use the service.

This sounds obvious, but it is routinely skipped. The typical pattern is that a ministry identifies a need for a digital service, convenes internal workshops with civil servants, writes a requirements document based on those workshops, and issues a tender. At no point has anyone spoken to the citizens, residents, or businesses who will actually use the service.

The result is predictable: systems that faithfully digitise existing government processes – including all the complexity, jargon, and unnecessary steps that make those processes difficult for people to navigate. The service works for staff because it was designed around their view of the world. But for citizens, it may be no better than what came before, and sometimes it is worse – because a confusing paper process that a helpful person at a counter could guide you through becomes a confusing digital process where you are entirely on your own.

**User research means research with the public.** Interviewing, observing, and testing with the people who use or will use the service. Not exclusively with the civil servants who process applications, answer phones, or manage queues – although their perspective matters too. The danger of researching only with staff is that you optimise for the internal workflow rather than the citizen experience. A system can be efficient for government and miserable for the public at the same time.

**User research is not a phase – it is a continuous practice.** It should happen before technology decisions are made, during delivery, and after launch. Every significant decision about what to build, buy, or configure should be grounded in evidence about what users need. If you cannot point to specific research findings that justify a design or technology choice, you are guessing.

This applies regardless of which technology approach you choose. Whether you are buying a commercial product, building on DPI, commissioning a vendor, or building in-house, the question is the same: does this meet the needs of the people who will use it? And the only way to answer that question is to ask them.

## Start with a capability assessment

Before making any technology decision, honestly assess your current capability. The Build vs. Buy Guidance includes a full self-assessment tool, but the core question is straightforward: does your team have the skills to oversee, evaluate, and eventually own whatever approach you choose?

**High capability** means you have digital leadership with authority, multidisciplinary teams (engineers, product managers, user researchers, designers), a user-centred culture, and the ability to hold vendors accountable for outcomes. All technology options are realistic.

**Growing capability** – where GovTech Barbados sits today – means you have emerging digital leadership, a small but expanding team of digital professionals, and the ability to evaluate vendor claims with increasing confidence. The right strategy is to commission with strong oversight, build on DPI with implementation partners, and ensure every engagement builds your capability alongside delivering a service.

**Low capability** means no dedicated digital leadership, no product management function, and limited ability to evaluate technical proposals. In this situation, major technology decisions should be delayed until capability is built. Only commodity purchases with short contracts are safe.

Use the capability self-assessment in the Build vs. Buy Guidance to score your current position before proceeding.

## The decision framework

### Step 1: Understand the service and its users

Before choosing a technology approach, understand what you are building, why it matters, and – most importantly – what the people who use the service actually need. If you have not conducted user research with members of the public, stop here. No technology decision should be made without evidence of user needs.

**What do users need from this service?** This question can only be answered through direct research with the public. Do not rely on assumptions, internal workshops, or the experience of civil servants alone. What staff believe citizens need and what citizens actually need are often very different things.

**How strategically important is this service?** Services that define how citizens experience government – identity, civil registration, service access – are strategic. Government needs long-term control over how these services evolve. Commodity functions like email, calendar, or basic content management are not strategic and can be bought off the shelf.

**How unique are the user needs?** If the needs are common across governments and well served by existing products, buying makes sense. If the needs are specific to Barbados's context, citizens, or policy landscape, some degree of building or customisation will be needed.

**What are the interoperability requirements?** Services that need to connect with other government systems, share data across agencies, or form part of a national digital infrastructure must be built on open standards. This rules out products that lock data into proprietary formats or require expensive integrations.

### Step 2: Consider the options

There is no single right answer. Each approach has strengths and risks that shift depending on your capability.

**Buy commercial (off-the-shelf products)**

Best for commodity functions where the market is mature and competitive: appointment booking, content management, email, productivity tools. Use short contracts (1–2 years) with clear exit rights. Ensure data portability – you must be able to extract your data in a standard format at any time. Never sign long-term contracts with monopoly vendors. This approach works at any capability level, but keep it simple and keep contracts short.

**Build on DPI / adopt Digital Public Goods**

DPI components – such as OpenCRVS for civil registration, MOSIP for identity, or X-Road for interoperability – offer a middle path: technical sovereignty without full build costs. You get the benefit of a community-maintained codebase while retaining control over your data and the ability to customise for local needs.

This approach works well for growing-capability governments like Barbados, provided you work with an experienced implementation partner who prioritises knowledge transfer. The risk is a different form of lock-in if the partner, rather than the government team, holds all the implementation knowledge. The same knowledge transfer disciplines described in the agile procurement guidance apply here.

**Commission a vendor to build**

This is appropriate when you need something custom but do not yet have the in-house team to build it. The critical success factor is government oversight: a government product manager must own the service direction, a government technical lead must review architecture, and knowledge transfer must be contractually enforced and tested.

Without this oversight, commissioned builds create the worst possible outcome: a custom system that only the vendor understands, at a cost that only the vendor controls. See the agile procurement guidance for contract structures that mitigate this risk.

**Self-build with government teams**

This gives government the most control and is the long-term goal for strategic services. It requires a permanent, multidisciplinary team with engineering, design, and product management capability. For Barbados, self-build is realistic today for simpler services and will become viable for more complex services as the GovTech team grows.

**Hybrid approaches**

Many services combine approaches. You might buy a commercial product for basic functionality, build a custom front end to meet the Design System standards and user needs, and integrate with DPI components for identity or payments. This is often the most pragmatic path for growing-capability governments.

### Step 3: Apply the decision criteria

For each service, work through these questions:

| Question | If yes | If no |
|----------|--------|-------|
| Is this a commodity function with mature market options? | Buy commercial, short contract | Consider build, DPI, or commission |
| Is there a DPG that meets the core need? | Evaluate DPG with implementation partner | Consider build or commission |
| Do we have the in-house team to build and maintain this? | Self-build | Commission with strong oversight, or buy |
| Will this service need to evolve rapidly based on user feedback? | Favour approaches where government controls the pace of change | Buying may be acceptable |
| Does this need to interoperate with other government systems? | Require open standards; avoid proprietary lock-in | Less critical, but open standards still preferred |
| Is this urgent and we lack capability? | Buy the simplest thing that works; build capability in parallel | Take time to build capability first |

### Step 4: Test your decision with a pilot

For any significant technology choice, run a time-boxed pilot before committing. A 12-week pilot at a single location, for a single service, costing $40,000–$80,000, will reveal more than months of requirements gathering – precisely because it puts the service in front of real users.

Design the pilot to answer specific questions:

- Do citizens actually need this, and do they use it the way we expect?
- Does the service work for the people who find the existing process hardest – not just the most digitally confident?
- Can the simplest possible solution meet the core need?
- Can government staff operate and modify the service?
- What does integration with existing systems actually require?

Conduct user research throughout the pilot – observe how citizens use the service, interview them about their experience, and use what you learn to decide whether to proceed, change direction, or stop.

Define success criteria before the pilot starts. Schedule the decision meeting from day one. If the pilot fails, that is a valuable outcome – you have spent a small amount to avoid a large mistake.

## A default stack for simple services

The principles above tell you what to optimise for: open source, open standards, and long-term government control. They do not tell a small team what to actually choose on a Monday morning. For a simple service – a form, a lookup, a booking, a short transaction that a small team can self-build – you should not have to relitigate every technology decision from first principles.

This section is the paved road: a set of sensible defaults that already meet the principles above, so the team can spend its thinking on the service rather than the setup. These are defaults, not rules. They sit under the open-standards principles, they do not replace them. Depart from them when you have a good reason – but write the reason down.

### Build the front end with React and Tailwind

For a simple public-facing service, build the front end with React (version 18 or 19) and Tailwind CSS 4. This is what the Barbados Government Design System assumes, so you get its components, patterns, and accessibility work without rebuilding them. Building on the Design System is the fastest way to meet the Digital Service Standards for a public-facing service, and it keeps your service looking and behaving like the rest of government.

Use this unless you have a specific reason not to. If you do depart from it, you take on the cost of meeting the Standards yourself – accessibility, responsive layouts, error handling, and the rest.

### Hosting, deploy and analytics

**Deploy to a subdomain of `alpha.gov.bb`.** While a service is in alpha, host it at an address like `your-service.alpha.gov.bb`. This keeps alpha services together, and it tells users honestly what phase the service is in.

**Keep hosting boring.** The code should live in a government-owned repository from day one, deployed by an automated pipeline so that any team member can ship a change – and roll it back – without a specialist. Avoid clever infrastructure that only one person understands. Boring, well-understood hosting is easier to hand over and cheaper to run.

**Choose analytics that respect privacy.** Use an open, privacy-respecting analytics tool that measures whether people can complete the service – not one that tracks individuals across the web. Measure the task, not the person: how many people start, how many finish, and where they get stuck. Do not collect personal data you do not need.

<!-- TODO: confirm GovTech's standard hosting/analytics -->

The specific hosting and analytics tools GovTech uses as standard should be confirmed with the GovTech engineering team. The recommendations above are sensible defaults, not settled policy.

### When to reach for the heavier DPI components instead

The default stack is for simple services. Some needs are bigger than a front end and a form, and for those you should adopt a shared Digital Public Infrastructure (DPI) component rather than build your own. Reach for these when your service touches a foundational government capability:

- **OpenCRVS** – for civil registration, such as recording births, deaths, and marriages. Reach for it when your service is the registry itself, not just a form that feeds one.
- **MOSIP** – for foundational digital identity. Reach for it when your service needs to establish or verify who someone is at a national level, rather than manage its own small login.
- **X-Road** – for secure data exchange between government systems. Reach for it when your service must share data across agencies, rather than holding a copy of everything itself.

These components are described more fully in "The role of Digital Public Infrastructure" below. The rule of thumb is simple: build the simple service on the default stack, but do not rebuild the foundations – adopt the shared component. If you find yourself writing your own identity system, your own registry, or your own cross-agency data exchange, stop and check whether a DPI component already exists.

## Avoiding vendor dependency

Vendor dependency is the single greatest risk in government technology decisions. It is not primarily a legal or contractual problem – it is a capability problem. When government lacks the skills to understand, modify, or operate its own systems, it becomes dependent on whoever built them, regardless of what the contract says.

The pattern is predictable: government recognises the need for a digital service, writes a requirements document without user research, tenders for a complete solution, awards a large contract, and then discovers – months or years later – that it cannot maintain, modify, or exit the system without the vendor's involvement.

### How to prevent it

**Own the product direction.** The product manager must be a government employee. They decide what gets built, in what order, based on user needs. The vendor executes; government leads.

**Own the code.** All code lives in a government-owned repository from day one, under an open-source licence. Any qualified developer should be able to read, understand, and modify the code.

**Own the knowledge.** Knowledge transfer is not a final handover – it is a continuous process built into every sprint. Test it regularly: can a government developer make a change without vendor help?

**Keep contracts short.** Twelve-month contracts with optional extensions give government regular opportunities to change direction, change supplier, or bring work in-house.

**Use open standards.** Data stored in open formats. APIs built to open standards. No proprietary dependencies that make switching costly.

**Make switching easy.** Structure work so that a different supplier could pick it up at the next phase. If only one company in the world can maintain your system, you have already lost control.

## The role of Digital Public Infrastructure

DPI – shared digital building blocks like identity, payments, data exchange, and civil registration – offers a particularly powerful option for Barbados. Rather than building every capability from scratch or buying proprietary products, government can adopt and adapt open-source components that are maintained by international communities and used by multiple countries.

The benefits are significant: lower cost than custom builds, faster implementation than starting from zero, access to a global community of practice, and the ability to customise for local needs while benefiting from shared investment in the core platform.

The key requirement is that government builds the internal capability to deploy, configure, and maintain these components – or works with implementation partners under contracts that enforce genuine knowledge transfer. Adopting DPI without building capability simply shifts the dependency from a commercial vendor to an implementation partner.

Barbados is already exploring this path through initiatives like the OpenCRVS civil registration system. The principle should extend to other foundational services as GovTech's capability grows.

## Making the decision

Two things matter more than any technology choice: understanding what citizens need, and having the capability to deliver it. A government that researches with the public and builds strong teams can succeed with almost any approach. A government that skips research and lacks capability will struggle with all of them.

The practical path for Barbados is:

1. **Research with citizens first** – no technology decision without evidence of user needs, gathered through direct research with the public.
2. **Assess capability honestly** before each technology decision.
3. **Start with the simplest approach** that meets the immediate user need.
4. **Pilot before committing** – test assumptions with real users at small scale.
5. **Build capability with every engagement** – ensure every project leaves the team stronger.
6. **Prefer open standards and open source** to maximise future flexibility.
7. **Keep contracts short and phased** to maintain government control.
8. **Own the product, the code, and the knowledge** – these are non-negotiable.

Over time, as GovTech Barbados's capability grows, the balance will shift naturally from commissioning and buying toward self-building and independent DPG adoption. The goal is not to reach a single "right" approach but to ensure that every technology decision is grounded in evidence of what citizens need and strengthens government's ability to make the next decision better.
