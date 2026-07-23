---
layout: layouts/article.njk
title: Identity and integrating with government systems
lede: How to identify the people using your service, connect to a government system of record, and handle personal data safely – and who to talk to at GovTech before you start.
---
Two of the hardest parts of any government service are proving who a citizen is, and reading or writing their information in a system that already holds it. Get these right and the rest of the service is much easier. Get them wrong and you create risk, cost and delay.

This page is for teams and suppliers building a government digital service. It explains, at a high level, how to authenticate users, how to connect to a system of record, what a data-sharing agreement is, and what is expected of you when you handle personal information.

Some of this is deliberately not published in full. Details of identity systems, connection endpoints and security controls are sensitive, and are shared directly with approved teams rather than on a public page. So this page tells you **who to talk to** and **what the process looks like**. The technical detail follows once you are engaged.

**Start every one of these conversations early, and start them with GovTech.** Email [info@govtech.bb](mailto:info@govtech.bb) before you design your service around a particular approach. The choices below affect your architecture, your timeline and your procurement, so they belong in discovery – not after a contract is signed.

## Identifying and authenticating users

Most services need to know something about the person using them. There is a difference between two things that are easy to confuse:

- **Identification** – establishing who someone is (for example, matching them to a real, known person).
- **Authentication** – letting a returning user prove they are the same person as before (for example, signing in).

Not every service needs the same level of assurance. A service that lets someone check public information may need no sign-in at all. A service that pays out money, or exposes someone's personal records, needs strong assurance that the person is who they claim to be. Decide how much assurance your service genuinely needs, and no more – asking for more identity than the task requires is a barrier, and it increases the amount of personal data you have to protect.

### Use the government's shared identity approach

Wherever possible, use the government's common approach to identity rather than building your own login and storing your own passwords. Standard 7 of the [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) asks services to use open, common, interoperable platforms, and a shared identity service is one of these. Reusing it means:

- citizens get a consistent, familiar way to sign in across government
- you do not become responsible for storing and protecting login credentials yourself
- you inherit security work that has already been done and assured

<!-- TODO: confirm the current national identity / authentication product name and status with GovTech before naming it here. The issue references "Trident ID" as a possible approach – do not state it as live or describe its technical operation until GovTech confirms. -->
GovTech can tell you which identity approach is current, whether it is available for your service, and what integrating with it involves. Do not commit your design to a specific identity product until you have confirmed this with GovTech, because the available options change.

### What to ask GovTech about identity

When you get in touch, be ready to describe:

- what your service does, and why it needs to identify or authenticate users
- the level of assurance you think you need, and why
- what personal information you would hold about a user, and for how long
- whether users are members of the public, businesses, or public officers

GovTech will help you choose an approach that is proportionate, meets the standards, and reuses shared infrastructure where it exists.

## Integrating with a system of record

A **system of record** is the authoritative source for a particular set of data – for example, the register that is treated as the truth for a given type of information. Your service will often need to read from one of these, and sometimes write to it, rather than keeping its own separate copy.

The general principle: **read from the source of truth, do not duplicate it.** Keeping your own copy of data that lives authoritatively elsewhere creates two versions that drift apart, and doubles the amount of personal data at risk.

### X-Road and how government systems connect

Barbados uses **X-Road** as the layer through which government systems exchange data securely. Rather than each system building direct, one-off connections to every other system, systems connect through X-Road, which handles secure, logged, standardised data exchange between them.

<!-- TODO: confirm current X-Road onboarding steps, the responsible team/authority, prerequisites, and any lead times with GovTech. Do not invent endpoints, security-server configuration details, member/subsystem codes, or credential-handling steps. -->
Onboarding to X-Road is a managed process, not a self-service one. At a high level you should expect it to involve:

1. **A conversation with GovTech** about the data you need, which system holds it, and why.
2. **Approval from the organisation that owns the data** (the data owner), usually recorded in a data-sharing agreement – see below.
3. **Technical onboarding** to connect your service to X-Road, carried out with the team responsible for X-Road. GovTech will point you to that team and the current steps.
4. **Testing and assurance** before any real data flows, to confirm the connection is secure and only exposes what was agreed.

Do not assume you can connect to a system of record simply because it exists. Access is granted deliberately, for a defined purpose, by the organisation that owns the data.

### What to ask GovTech about integration

- which system holds the data you need, and who owns it
- whether that system is already connected to X-Road
- what the current onboarding process and lead times are
- what your service is allowed to do – read only, or read and write

## Data-sharing agreements

Whenever one organisation lets another read or write personal data it holds, that arrangement should be written down in a **data-sharing agreement** (sometimes called a data-sharing agreement or memorandum of understanding). It is the document that makes the sharing lawful, clear and accountable. You will usually need one in place before any real data flows – including before X-Road onboarding completes.

### What a data-sharing agreement is for

It records what is being shared and why, so that everyone – the data owner, your team, and anyone assuring the service – can see that the sharing is necessary, proportionate and safe. It protects citizens, and it protects you: it is the evidence that you are handling someone else's data with permission and within agreed limits.

### What it should cover

<!-- TODO: obtain the official Barbados government data-sharing agreement template from GovTech / the data protection function and link it here, or replace this list with the approved template's contents. The list below describes the PURPOSE of typical clauses and must not be treated as legal drafting or as a complete/authoritative template. -->
GovTech can tell you whether an approved template exists and share it with you. There is no official template reproduced on this page. In general, a data-sharing agreement is expected to describe:

- **The parties** – which organisations are sharing data, and who owns it.
- **The purpose** – exactly what the data will be used for, and the lawful basis for using it.
- **The data** – which specific fields are shared, not "all data". Share the minimum needed.
- **Direction and access** – who can read, who can write, and how access is granted and removed.
- **Security** – how the data is protected in transit and at rest, and who is accountable.
- **Retention** – how long data is kept, and what happens to it afterwards.
- **Responsibilities** – what each party must do, including reporting problems and breaches.
- **Duration and review** – how long the agreement lasts and when it is reviewed.

Treat this as a description of intent, not as legal wording. The approved template and the exact clauses come from GovTech and the government's data protection function.

### Who approves it

<!-- TODO: confirm the exact approval chain and the named data protection authority/officer responsible for signing off data-sharing agreements in Barbados. Do not invent role titles or a named person. -->
A data-sharing agreement is approved by the **owner of the data** being shared – not by the team that wants the data. There is usually also a data protection sign-off. The approval chain depends on the systems and organisations involved, so confirm it early: contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) and they will point you to the right data owner and approver. Building this approval time into your plan from the start avoids a common and avoidable delay near the end of a project.

## Security and data protection

Handling personal information is a responsibility, not just a technical task. This is the subject of **Standard 11 of the [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards): "Design for trust, safety, and confidentiality"**. Your service must protect the people whose data it touches, and be trustworthy in how it does so.

**Personally identifiable information (PII)** is any information that identifies a person or could be combined to identify them – names, national identifiers, addresses, dates of birth, contact details, and much more. Treat it with care at every step.

Some practical expectations for any service handling PII:

- **Collect the minimum.** Only ask for and store data you genuinely need. Data you do not hold cannot be lost or misused.
- **Limit who can see it.** Give people and systems access only to the data they need to do their job, and remove access when it is no longer needed.
- **Protect it in transit and at rest.** Use encryption and the secure connection methods GovTech advises. Do not move PII around in spreadsheets, email or informal exports.
- **Keep records.** Know what data you hold, where it is, why you have it, and who can access it.
- **Retain it no longer than needed.** Agree retention periods and delete data when its purpose is served.
- **Plan for things going wrong.** Know how you would detect a breach, who you would tell, and how quickly. Agree this before you go live.
- **Get security assurance early.** Security decisions are hard to reverse once a service is built. Involve GovTech while the architecture is still on the whiteboard, not after launch.

If you are procuring the service, these expectations belong in your contract, so the supplier is required to meet them. See [what to include in a request for proposals (RFP)](/working-with-suppliers/what-to-include-in-an-rfp.html).

## Where to get help

Identity, integration and data sharing are the parts of a service where early advice saves the most time and money. You do not need to have the answers before you get in touch – working them out is exactly what GovTech can help with.

- Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) to discuss identity, connecting to a system of record, X-Road onboarding, or a data-sharing agreement. Get in touch during discovery, before you commit your design or your procurement to a particular approach.
- The [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) set out what your service must meet, including Standard 11 on trust, safety and confidentiality.
- Read [how GovTech works with MDAs](/get-help/how-govtech-works-with-mdas.html) to understand the ways GovTech can support you, including architecture and security assurance.
