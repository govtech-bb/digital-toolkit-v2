---
layout: layouts/article.njk
title: Technical infrastructure
lede: What the GovTech infrastructure team provides for services that need something beyond the standard platform – and how to engage them.
---
The [GovTech platform](/getting-started/the-govtech-platform/) is designed so that a team building an ordinary service does not have to think about infrastructure. If you use the design system, the platform hosting, and the shared components, you can deploy without a networking conversation.

This page is for what happens when that stops being true. As soon as your service needs something outside the standard offer – a different hosting model, private networking, a dedicated environment, connectivity to a specific ministry's system – you have crossed from platform into infrastructure. That is where this page picks up.

If you are still on the platform, you do not need this page yet. Come back when you hit something it does not cover.

## Talk to the GovTech infrastructure team first

Most infrastructure decisions in Barbados are made by the GovTech infrastructure team, not by individual delivery teams. This is deliberate. Deviations from the standard hosting model affect cost, security, availability and interconnection with the rest of government, so they are agreed rather than chosen.

Get in touch as soon as you know your service needs something the platform does not cover. Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) and ask to be connected with the infrastructure team.

Before that first conversation, be ready to describe:

- what your service does and who uses it
- what the standard platform does not cover for you, and why
- your timeline and the phase you are in
- any external dependencies you already know about (particular ministry systems, particular data sources)

## What the infrastructure offer covers

The GovTech infrastructure team's remit includes:

- **Hosting environments** – for services that need more than a standard `alpha.gov.bb` subdomain can provide, for example services with their own back end, background workers, or a database.
- **Networking and connectivity** – VPNs, private endpoints, and connectivity into networks that are not publicly reachable, when your service needs to talk to a specific ministry system.
- **Domains and TLS** – provisioning subdomains of `alpha.gov.bb` for services, and the certificates that go with them.
- **Secrets and credentials** – a shared, secure way to store and rotate API keys, database credentials and other secrets, so they never sit in code or shared documents.
- **Monitoring, logging and alerting** – the observability layer that lets someone see whether the service is healthy in production and be paged when it is not.
- **Backup and disaster recovery** – how service data is backed up, how often, and how it would be restored if lost.

The specifics of each – tooling, providers, timelines, cost – are decisions the infrastructure team owns. Do not assume any particular technology (a cloud provider, a monitoring tool, a VPN product) until you have confirmed it with them.

<!-- TODO: confirm the formal name of the GovTech infrastructure team, the standard tooling for each element above, published SLAs or lead times, and how services request non-standard environments. Replace this note with the concrete details once confirmed. -->

## What to ask when you engage them

A first meeting is more productive if you bring the right questions:

- What is the standard hosting environment for a service like mine? Can I use it?
- What is the process to request a non-standard environment, and how long does it take?
- Which networks does my service need to reach, and how are those connections made?
- How do I store secrets, and how do I give my service access to them?
- What monitoring, logging and alerting is provided by default, and what do I need to add?
- What are the backup and recovery expectations for a service at my phase – alpha, beta or live?
- Who is on call for infrastructure incidents once my service is live?

## Where to get help

- Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) to be connected with the infrastructure team. Get in touch during discovery or early alpha – decisions about hosting, networking and environments are much cheaper to make early.
- If you can build on the [GovTech platform](/getting-started/the-govtech-platform/) without needing any of this, do that. It is faster and cheaper for both your team and GovTech.
