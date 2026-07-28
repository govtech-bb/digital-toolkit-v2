---
layout: layouts/article.njk
title: Identifying and authenticating users
lede: How to identify the people using your service, choose the right level of assurance, and reuse the government's shared identity approach – without building your own login.
---
Proving who a citizen is – with enough assurance for what your service does, and no more – is one of the hardest parts of any government service. Get it right and the rest of the service is much easier. Get it wrong and you create risk, cost and delay.

This page is for teams and suppliers building a government digital service. It explains, at a high level, how to identify and authenticate the people using your service, and who to talk to at GovTech before you commit to an approach.

Some of this is deliberately not published in full. Details of identity systems and security controls are sensitive, and are shared directly with approved teams rather than on a public page. So this page tells you **who to talk to** and **what the process looks like**. The technical detail follows once you are engaged.

**Start every one of these conversations early, and start them with GovTech.** Email [{{ site.email }}](mailto:{{ site.email }}) before you design your service around a particular approach. The choices below affect your architecture, your timeline and your procurement, so they belong in discovery – not after a contract is signed.

Most services need to know something about the person using them. There is a difference between two things that are easy to confuse:

- **Identification** – establishing who someone is (for example, matching them to a real, known person).
- **Authentication** – letting a returning user prove they are the same person as before (for example, signing in).

Not every service needs the same level of assurance. A service that lets someone check public information may need no sign-in at all. A service that pays out money, or exposes someone's personal records, needs strong assurance that the person is who they claim to be. Decide how much assurance your service genuinely needs, and no more – asking for more identity than the task requires is a barrier, and it increases the amount of personal data you have to protect.

## Use the government's shared identity approach

Wherever possible, use the government's common approach to identity rather than building your own login and storing your own passwords. Standard 7 of the [Barbados Digital Service Standards](/getting-started/barbados-digital-service-standards/) asks services to use open, common, interoperable platforms, and a shared identity service is one of these. Reusing it means:

- citizens get a consistent, familiar way to sign in across government
- you do not become responsible for storing and protecting login credentials yourself
- you inherit security work that has already been done and assured

The digital identity platform being built for Barbados is **Trident ID** – the intention is that this will become the shared way citizens sign in to government services. There is a public write-up describing it at [barbadosdigital.com/articles/barbados-trident-id](https://barbadosdigital.com/articles/barbados-trident-id); this is not an official government page but the content is accurate. GovTech staff can follow the [#trident-id channel in Slack](https://teamgovtechworkspace.slack.com/archives/C0BCC295HPV) for ongoing updates.

Trident ID is not yet live. Talk to GovTech before you commit your design to it – they can tell you its current status, whether you can integrate with it on your timeline, and what to use in the meantime if it is not yet ready.

## What to ask GovTech about identity

When you get in touch, be ready to describe:

- what your service does, and why it needs to identify or authenticate users
- the level of assurance you think you need, and why
- what personal information you would hold about a user, and for how long
- whether users are members of the public, businesses, or public officers

GovTech will help you choose an approach that is proportionate, meets the standards, and reuses shared infrastructure where it exists.

## Where to get help

Identity decisions are hard to reverse once a service is built. You do not need to have the answers before you get in touch – working them out is exactly what GovTech can help with.

- Contact GovTech at [{{ site.email }}](mailto:{{ site.email }}) to discuss identity or authentication for your service. Get in touch during discovery, before you commit your design or your procurement to a particular approach.
- Read [handling personal data safely](/design-and-build/handling-personal-data/) for what happens after sign-in – how to share data with other government systems and how to protect it.
- The [Barbados Digital Service Standards](/getting-started/barbados-digital-service-standards/) set out what your service must meet, including Standard 7 on shared platforms.
- Read [how GovTech works with MDAs](/get-help/how-govtech-works-with-mdas/) to understand the ways GovTech can support you.
