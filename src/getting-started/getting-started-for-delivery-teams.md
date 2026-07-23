---
layout: layouts/article.njk
title: Getting started for delivery teams
lede: What a new delivery team needs to do in its first week – where code lives, how to get environments and access, and who to contact at GovTech.
---
This page is for delivery teams starting work on a government digital service – whether you are an in-house MDA team or a supplier building on behalf of one.

It covers the practical things you need to sort out in your first week: where your code lives, how to get environments to run it in, how to deploy, and who at GovTech grants you access. It is a checklist for day one, not a full guide to delivery.

If anything here is unclear or you get stuck, contact GovTech at [info@govtech.bb](mailto:info@govtech.bb). It is better to ask early than to guess.

## Before you start

A few things make your first week much smoother. Have these ready:

- the name of your service, and the MDA that owns it
- the GovTech contact who is sponsoring or supporting your work
- a list of the people on your team who will need access, with their names and email addresses
- GitHub usernames for everyone who will write code

If you do not yet have a GovTech contact, email [info@govtech.bb](mailto:info@govtech.bb) and tell us which MDA and service you are working on. We will connect you with the right person.

## Where your code lives

All GovTech Barbados code lives in the [`govtech-bb` organisation on GitHub](https://github.com/govtech-bb). Your service should have its own repository there. Working in the open, in a shared organisation, is part of the [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) – it means code can be reused, reviewed and maintained by more than one team.

In your first week you need to:

- get added to the `govtech-bb` organisation as a member
- have a repository created for your service, or get access to an existing one
- agree a name for the repository with GovTech before it is created

Do not start a service in a personal GitHub account or a separate organisation. If you have already done so, tell GovTech – code can be moved.

To get set up, contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) with your team's GitHub usernames and the name of your service.

<!-- TODO: confirm the exact process for requesting a new repo in govtech-bb (self-service via a form, or by asking a named team/role) and add it here. -->

### Start from the starter kit

Before you create anything from scratch, check the [starter kit and shared repositories](/design-and-build/which-repos-to-use.html). It explains which repositories to use as a starting point, so you are not rebuilding things that already exist.

## Environments

Most services need three environments:

- **Development (dev)** – where the team builds and tests changes. This can be your own machine to start with.
- **Staging** – a shared environment that mirrors production, for testing and for showing work to others before it goes live.
- **Production** – the live service that the public uses.

Keeping these separate means you can test safely without affecting real users or real data.

GovTech provisions the staging and production environments for government services. To get yours set up, contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) and tell us about your service and how you plan to build it.

<!-- TODO: confirm how staging and production environments are provisioned (which team owns alpha-infra, what a team needs to provide, and how long it takes) and add the concrete steps here. -->

## Deploying and getting a subdomain

Government services in the alpha phase are published on a `*.alpha.gov.bb` subdomain – for example, the [service status dashboard](https://service-dashboard.alpha.gov.bb/) runs at `service-dashboard.alpha.gov.bb`.

In your first week you should agree:

- the subdomain your service will use
- how your service is deployed to staging and production

Agree the subdomain name with GovTech early, as it often becomes the public name of your service.

To request a subdomain and get your deployment set up, contact GovTech at [info@govtech.bb](mailto:info@govtech.bb).

<!-- TODO: confirm the deployment process (e.g. deploy on merge, or a manual step) and the exact process for requesting an *.alpha.gov.bb subdomain, including who approves it. Document once confirmed. -->

## Access and credentials

You will need access to several things to do your work. Ask for only what your role needs, and ask for access to be removed when someone leaves the team.

Typical access includes:

- membership of the [`govtech-bb` GitHub organisation](https://github.com/govtech-bb) and your service's repository
- access to the staging and production environments
- any credentials or keys your service needs to run, such as connections to other systems

Never put passwords, keys or other secrets in your code or commit them to GitHub. If you are unsure how to store a secret safely, ask GovTech before you go any further.

GovTech grants access to shared government systems. Your MDA may grant access to systems it owns. If you are not sure who grants what, contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) and we will point you to the right person.

<!-- TODO: confirm who grants each type of access (GitHub org membership, environment access, secrets management) and the request route for each. Add named roles/teams once confirmed. -->

## Building to the standards

From day one, build your service to meet the [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards). Two things will help you start well:

- use the [Barbados Government Design System](/design-and-build/using-the-design-system.html) for your interface, so your service is consistent and accessible
- write your content in plain language – see [writing content for Barbadians](/design-and-build/writing-content-for-barbadians.html)

Doing this from the start is far easier than retrofitting it later.

## Your first-week checklist

By the end of your first week, aim to have:

1. everyone on the team added to the `govtech-bb` GitHub organisation
2. a repository for your service, based on the starter kit
3. the service running on your own machine (dev)
4. a plan for staging and production environments, agreed with GovTech
5. a subdomain name agreed for your service
6. the access and credentials your team needs, and a way to store secrets safely
7. a named GovTech contact you can go to when you get stuck

If any of these are missing, that is fine – raise it with GovTech rather than working around it.

## Where to get help

- Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) to get your team, repository, environments and access set up.
- The [starter kit and shared repositories](/design-and-build/which-repos-to-use.html) tell you which code to start from.
- The [Barbados Government Design System](/design-and-build/using-the-design-system.html) gives you accessible components to build with.
- The [Barbados Digital Service Standards](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) set out what your service must meet.
