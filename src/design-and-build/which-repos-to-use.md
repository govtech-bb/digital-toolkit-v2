---
layout: layouts/article.njk
title: Which repositories to use
lede: Where to start when you build a new government service, and what each of the other GovTech repositories is for.
lastUpdated: July 2026
permalink: /design-and-build/which-repos-to-use.html
---
The [GovTech GitHub organisation](https://github.com/govtech-bb) has many repositories. If you are starting a new service, it is not obvious which one to clone. This page tells you where to begin and what the other main repositories are for.

## Start here: govbb-scaffold

If you are building a new front end or a prototype, start from [**govbb-scaffold**](https://github.com/govtech-bb/govbb-scaffold).

It is a minimal HTML starter that loads the official Barbados Government styles and assets. Out of the box it gives you the official banner, the alpha status banner, the header and the footer. So you begin with the right look and the right building blocks, instead of a blank page.

To use it, clone the repository and follow the steps in its README. You can run it with a simple static server, so you do not need a heavy setup to see something on screen.

When you extend the scaffold, follow the [Barbados Government Design System](https://govtech-bb.github.io/design-system/) for components and patterns. This keeps your service consistent with other government services.

<!-- TODO: confirm official starter repo -->

If you are not sure the scaffold fits your service, contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) before you start. The team can point you at the current starter for your kind of work.

## Other repositories, and what they are for

These are reference only. Do not start a new service by cloning one of these. Read them to learn how things are done, or reuse parts of them where it makes sense.

- [**gov-bb**](https://github.com/govtech-bb/gov-bb) — the Simple Service Builder (SSB). This is the platform behind online forms, the no-code form builder, the services landing site and the assistant chatbot. It is a large monorepo, not a starting point for one small service.
- [**frontend-alpha**](https://github.com/govtech-bb/frontend-alpha) — the code for the alpha.gov.bb website, built with Next.js. Look here to see how the main citizen-facing site is built.
- [**govbb-prototypes**](https://github.com/govtech-bb/govbb-prototypes) — a collection of HTML prototypes and a prototype generator. Useful for ideas and examples, not a base for a live service.
- [**Barbados Government Design System**](https://govtech-bb.github.io/design-system/) — the components, styles and patterns every service should use. The scaffold above already pulls these in.
- [**Barbados-Digital-Service-Standards**](https://github.com/govtech-bb/Barbados-Digital-Service-Standards) — the standard your service must meet. Read this first, whatever you are building.

## If you are still not sure

Ask before you build. Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) and tell the team what you are trying to do. It is quicker to start from the right place than to move your work later.
