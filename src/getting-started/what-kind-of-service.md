---
layout: layouts/article.njk
title: What kind of service are you building?
lede: A shared vocabulary for the four types of government service in Barbados. Situating yours helps you avoid over-engineering something small or under-scoping something large.
---
Not every government service is the same size. Government work in Barbados falls into four types, from the simplest to the most involved. Knowing where yours sits is a useful first step: it tells you roughly what shape of team you need, what a sensible technical approach looks like, and what you will be measured against.

If you are just joining a team, one of the first conversations to have is where the service you are building fits in this list. If people on the team disagree, the scope probably has not been settled yet.

The four types, from simplest to most involved:

1. Content
2. Smart content (also called smart tools)
3. Simple service
4. Complex service

## Content

Guidance made up of text only. It tells people where to go and what they need before they get there – for example, the information to bring to a government office, or what to have ready before starting an online service.

Content is published as flat files rendered on gov.bb and does not need a content management system. The technical change is straightforward; the harder part is making sure content is readable, at the right reading age, and consistent with the gov.bb house style.

**Defining characteristic:** static information, no logic.

**Example:** [Get a document notarised](https://alpha.gov.bb/travel-id-citizenship/get-a-document-notarised).

**What to build with:** [The GovTech platform for a content service](/getting-started/the-govtech-platform.html#for-a-content-service).

## Smart content

More than plain content. Built with HTML, CSS and JavaScript, it provides guidance and information while also handling basic logic – for example calculators (tax, pension) or lookups such as the next public holiday in Barbados.

It is essentially a front-end-only website: there is no back end.

**Defining characteristic:** contains logic, but no two-way communication with an external service or database access. It may read data from an API or a flat file containing key information. A service that only reads from an API without caching still sits here; if a caching layer is added to protect the upstream service from load, it should usually be reclassified as a complex service.

**Example:** [Bank holidays](https://alpha.gov.bb/bank-holiday-calendar?year=2026).

**What to build with:** [The GovTech platform for a smart content service](/getting-started/the-govtech-platform.html#for-a-smart-content-service).

## Simple service

What has traditionally been called a form. A user completes a form online and the information is sent to the relevant MDA – either into a case management system or by email. A simple service can also take payments and accept document or file uploads.

The typical flow is: form → case management → track my application → notifications by SMS, email or WhatsApp.

Case management is the default for new forms. Email is still useful, particularly while an MDA is being onboarded onto case management.

**Defining characteristic:** captures user input and routes it to an MDA; may involve payments and uploads.

**Example:** [Get a copy of a birth certificate](https://alpha.gov.bb/family-birth-relationships/get-birth-certificate).

**What to build with:** [The GovTech platform for a simple service](/getting-started/the-govtech-platform.html#for-a-simple-service).

## Complex service

A service with substantial functionality, workflow or logic beyond capturing and routing a single submission. Examples include a case management system, or the job letters service for the Ministry of Education, which lets staff request evidence of their employment to use for purchases and similar needs.

Even if they are not served from alpha.gov.bb, complex services should sit on the gov.bb domain – for example `service.alpha.gov.bb`. A team can build on any domain during development; once a service passes assessment and is adopted onto the platform, it is given a proper gov.bb service domain.

**Defining characteristic:** multi-step workflow, ongoing state, or interaction between users and back-office processes.

**Example:** A polyclinic check-in service (an exception: hosted on AWS and does not use the GovTech design system, since it is only ever accessed from inside a polyclinic).

**What to build with:** [The GovTech platform for a complex service](/getting-started/the-govtech-platform.html#for-a-complex-service).

## At a glance

| Type | Logic | External connections | Sends data to an MDA | Typical example |
| --- | --- | --- | --- | --- |
| Content | None | None | No | "What to bring to renew your licence" |
| Smart content | Client-side only | APIs | No | Tax calculator, next public holiday |
| Simple service | Form logic | Case management or email | Yes | An application form |
| Complex service | Workflow and state | APIs, databases, case management | Yes | Case management, job letters service |

## Where to get help

- Not sure which type your service is? Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) – the earlier this is settled, the less rework it costs.
- The [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) apply to every type, though they are lightest for content and heaviest for complex services.
