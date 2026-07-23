---
layout: layouts/article.njk
title: Service assessments and phase gates
lede: How a service moves from discovery to live, who signs off at each stage, and a checklist mapped to the 13 Barbados Digital Service Standards.
lastUpdated: July 2026
permalink: /getting-started/service-assessments-and-phase-gates.html
---
Good digital services are built in phases. At the end of each phase, someone checks the evidence and decides whether the service is ready to move on. That decision point is called a phase gate. The check itself is a service assessment.

This page is for MDA project leads, product managers and delivery teams. It explains the four phases, what has to be true to pass each gate, who signs off, and how your service is measured against the 13 [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards).

## Why phase gates matter

A phase gate stops a service moving forward until it has earned the right to. This protects you. It means you commit budget one phase at a time, learn before you spend, and can change direction without writing off a large investment.

Without a gate, a team can finish alpha with no clear owner, no checklist, and no agreed route to beta. Work drifts. Money gets spent on a service that was never tested against real user needs. A phase gate prevents that by making each step a deliberate decision, backed by evidence.

A gate is not a test to pass and forget. It is a chance to catch problems early, while they are still cheap to fix.

## The four phases

Every service moves through four phases. You can read more about what happens in each in the [introduction to digital transformation](/getting-started/introduction-to-digital-transformation.html).

- **Discovery** – learn about the problem, the users and the current process.
- **Alpha** – try out possible solutions with rough prototypes and real users.
- **Beta** – build a working service and run it with real users, first privately, then publicly.
- **Live** – the service is fully public, measured, maintained and improved.

Between each phase there is a gate. There is also a check before a service goes live, and light ongoing checks once it is running.

## What happens at each gate

At each gate, the team shows what it has done and learned. An assessor looks at the evidence against the Digital Service Standards and gives one of three outcomes:

- **Met** – the service can move to the next phase.
- **Met with conditions** – the service can move on, but must fix named issues by an agreed date.
- **Not yet met** – the service stays in its current phase and addresses the gaps before trying again.

The point is a fair, evidence-based conversation, not a pass-or-fail exam. Most services need more than one look before a gate is fully met. That is normal.

### Discovery to alpha

Before you start building prototypes, you should be able to show:

- who your users are and what they need
- a clear problem statement, based on research, not assumption
- that the problem is worth solving and fits your MDA's remit
- a plan for the alpha and the team to run it

### Alpha to beta

Before you build the real service, you should be able to show:

- prototypes tested with real users, and what you learned
- the approach you have chosen, and why you ruled others out
- the main technology and design decisions, and the risks
- that the service can realistically be built, run and afforded

### Beta to live

Before you open the service to everyone, you should be able to show:

- a working service that real users have completed end to end
- that it is accessible, secure and protects personal data
- performance data, and how you will keep measuring it
- a team and budget in place to run and improve the service

### Living service checks

Going live is not the finish line. A live service is checked from time to time to confirm it still meets user needs and the standards. If a service stops being maintained or measured, it may be asked to fix this or be retired.

## Who signs off at each gate

GovTech Barbados owns the service assessment process. GovTech provides the assessor, runs the assessment against the standards, and records the outcome. If you want to book an assessment or talk one through, contact GovTech at [info@govtech.bb](mailto:info@govtech.bb).

The MDA that owns the service is responsible for the service itself. Your senior responsible owner accepts the outcome of each gate and the decision to commit budget to the next phase. In short: GovTech assesses, the MDA owns and decides to proceed.

<!-- TODO: confirm gate owners once the process is agreed -->
The exact roles that sign off at each gate are still being agreed between GovTech and MDAs. The model below is a sensible default, not settled policy. Treat it as a guide and confirm the detail with GovTech before you plan around it.

| Gate | Assessed by | Signed off by |
| --- | --- | --- |
| Discovery to alpha | GovTech assessor | MDA senior responsible owner |
| Alpha to beta | GovTech assessor | MDA senior responsible owner, with GovTech |
| Beta to live | GovTech assessor | GovTech, with MDA senior responsible owner |
| Living service check | GovTech assessor | GovTech |

The later the gate, the more the risk to the public if the service falls short, so GovTech's role in sign-off grows as the service gets closer to live.

## Checklist mapped to the 13 standards

Use this checklist to see where your service stands before an assessment. It follows the 13 [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) in order. Not every item applies fully in early phases – for example, you cannot show live performance data in discovery. Aim to show honest progress against each standard for the phase you are in.

### 1. Make sure your service meets your users' needs

- You have spoken with and observed real users, not just asked what they want
- You have a clear problem statement based on that research
- You test the service with real users and improve it based on what you learn

### 2. Discover, design, build and deliver with a multidisciplinary team

- The service has a named product owner and a team with the right mix of skills
- The team includes user research and design, not just people who build
- Where a vendor is involved, you check in regularly and their decisions are research-backed

### 3. Ensure that everyone can use the service

- You have identified groups who might be excluded and designed so they are not
- The service works for people with disabilities and low digital confidence
- You use the [Barbados Government Design System](https://govtech-bb.github.io/design-system/) and offer a route for people who cannot use it online

### 4. Use simple and relatable language

- Content is written in plain language for your users' reading age
- You have watched real users understand the words and instructions
- The service uses language familiar to Barbadians, not internal jargon

### 5. Make sure the service works the first time it's used

- Users can complete the service end to end, first time, with little help
- You have run usability tests at each phase and acted on them
- The service is reliable and every step moves the user towards their goal

### 6. Choose the right tools and technology

- Technology choices are based on cost, ease of use, scale and accessibility
- You have avoided heavy front-ends that slow the service down
- Your choices avoid vendor lock-in and support regular, safe deployment

### 7. Use open, common, interoperable platforms

- You have checked whether a similar service or component already exists
- You reuse shared components such as payments and identity where you can
- You have spoken to MIST about relevant Digital Public Infrastructure

### 8. Make the service scalable and sustainable

- Code and key decisions are documented in a shared repository
- You have a team and at least a six-month budget to run and grow the service
- You do not depend on a single vendor to keep the service running

### 9. Be open and transparent

- You hold regular show and tells and share progress as you build
- Source code is published openly and securely, for example on GitHub
- You collaborate with other MDAs working on similar problems

### 10. Make sure the service can be continuously improved

- Real users are using the earliest usable version of the service
- You have a way to collect user feedback and act on it
- You have the capacity to keep improving the service, not just fix bugs

### 11. Design for trust, safety, and confidentiality

- The service clearly shows users they are dealing with the government
- It meets recognised security, data protection and confidentiality standards
- You run regular security tests and manage risks on an ongoing basis

### 12. Make it easy for users to find

- The service is named for what users want to do, using verbs
- People can find it through the channels and search engines they already use
- Users can easily learn about other ways to access the service

### 13. Monitor, manage, and measure performance

- You have defined what success looks like and chosen metrics to measure it
- You collect performance data from all channels, online and offline
- You use that data to improve the service and publish results to stakeholders

<!-- TODO: confirm exact wording of each standard against the published Barbados Digital Service Standards before removing this note -->

## How to prepare for an assessment

You do not need a polished presentation. You need honest evidence. To prepare:

1. **Read the standards.** Go through the 13 standards and note where you have strong evidence and where you have gaps.
2. **Gather your evidence.** User research findings, prototypes, test results, technical decisions, performance data. Real artefacts, not summaries.
3. **Be honest about gaps.** Naming a weakness and your plan to fix it is stronger than hiding it. Assessors expect gaps at every phase.
4. **Book early.** Contact GovTech before you reach the gate, not after. An early conversation usually leads to a smoother assessment.

## Where to get help

- The 13 [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) set out what your service must meet.
- Read the [introduction to digital transformation](/getting-started/introduction-to-digital-transformation.html) for more on how the phases work.
- Read [how GovTech works with MDAs](/get-help/how-govtech-works-with-mdas.html) to understand the support available.
- Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) to book an assessment or talk through where your service stands.
</content>
</invoke>
