---
layout: layouts/article.njk
title: Handling personal data safely
lede: How to share personal data with other parts of government lawfully, and how to protect it while your service holds it – covering data-sharing agreements and Standard 11 of the service standards.
---
Once your service knows something about the people using it, you carry two responsibilities: sharing that information with other parts of government only when it is agreed, and protecting it while you hold it. This page covers both.

This is for teams and suppliers building a government digital service. It sits alongside [identifying and authenticating users](/design-and-build/identifying-users/) – identity gets someone into the service; this page is about the personal data your service handles after that.

Some of the detail is deliberately not published in full. Approved templates and security controls are shared directly with engaged teams rather than on a public page. So this page tells you **what is expected** and **who to talk to**. The technical detail follows once you are engaged.

**Start every one of these conversations early, and start them with GovTech.** Email [{{ site.email }}](mailto:{{ site.email }}) before you design your service around a particular approach.

## Data-sharing agreements

Whenever one organisation lets another read or write personal data it holds, that arrangement should be written down in a **data-sharing agreement** (sometimes called a data-sharing agreement or memorandum of understanding). It is the document that makes the sharing lawful, clear and accountable. You will usually need one in place before any real data flows.

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
A data-sharing agreement is approved by the **owner of the data** being shared – not by the team that wants the data. There is usually also a data protection sign-off. The approval chain depends on the systems and organisations involved, so confirm it early: contact GovTech at [{{ site.email }}](mailto:{{ site.email }}) and they will point you to the right data owner and approver. Building this approval time into your plan from the start avoids a common and avoidable delay near the end of a project.

## Security and data protection

Handling personal information is a responsibility, not just a technical task. This is the subject of **Standard 11 of the [Barbados Digital Service Standards](/getting-started/barbados-digital-service-standards/): "Design for trust, safety, and confidentiality"**. Your service must protect the people whose data it touches, and be trustworthy in how it does so.

**Personally identifiable information (PII)** is any information that identifies a person or could be combined to identify them – names, national identifiers, addresses, dates of birth, contact details, and much more. Treat it with care at every step.

Some practical expectations for any service handling PII:

- **Collect the minimum.** Only ask for and store data you genuinely need. Data you do not hold cannot be lost or misused.
- **Limit who can see it.** Give people and systems access only to the data they need to do their job, and remove access when it is no longer needed.
- **Protect it in transit and at rest.** Use encryption and the secure connection methods GovTech advises. Do not move PII around in spreadsheets, email or informal exports.
- **Keep records.** Know what data you hold, where it is, why you have it, and who can access it.
- **Retain it no longer than needed.** Agree retention periods and delete data when its purpose is served.
- **Plan for things going wrong.** Know how you would detect a breach, who you would tell, and how quickly. Agree this before you go live.
- **Get security assurance early.** Security decisions are hard to reverse once a service is built. Involve GovTech while the architecture is still on the whiteboard, not after launch.

If you are procuring the service, these expectations belong in your contract, so the supplier is required to meet them. See [what to include in a request for proposals (RFP)](/working-with-suppliers/what-to-include-in-an-rfp/).

## Where to get help

Data sharing and security are the parts of a service where early advice saves the most time and money. You do not need to have the answers before you get in touch – working them out is exactly what GovTech can help with.

- Contact GovTech at [{{ site.email }}](mailto:{{ site.email }}) to discuss a data-sharing agreement or security assurance. Get in touch during discovery, before you commit your design or your procurement to a particular approach.
- Read [identifying and authenticating users](/design-and-build/identifying-users/) if you also need to work out how users sign in.
- The [Barbados Digital Service Standards](/getting-started/barbados-digital-service-standards/) set out what your service must meet, including Standard 11 on trust, safety and confidentiality.
- Read [how GovTech works with MDAs](/get-help/how-govtech-works-with-mdas/) to understand the ways GovTech can support you, including architecture and security assurance.
