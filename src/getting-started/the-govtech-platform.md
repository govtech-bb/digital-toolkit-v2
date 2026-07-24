---
layout: layouts/article.njk
title: The GovTech platform
lede: The building blocks GovTech provides – design system, identity, data exchange, form platform – and which of them to reach for depending on the type of service you are building.
---
"The GovTech platform" is the collection of shared building blocks the Government of Barbados provides for teams building digital services. Rather than each team choosing its own tools, hosting, identity approach and integration route, the platform gives you a common set to start from – so you spend your effort on the service, not on rebuilding foundations.

This page is a map of what is there, and which pieces are relevant for each type of service. If you are not sure what kind of service you are building, read [what kind of service are you building?](/getting-started/what-kind-of-service.html) first.

## Shared foundations

These apply to almost everything the government builds and are worth knowing about regardless of service type.

- **[Barbados Government Design System](https://govtech-bb.github.io/design-system/)** – reusable components, styles and patterns. Any user-facing service should use it. See [using the design system](/design-and-build/using-the-design-system.html) for how to install and integrate the packages.
- **[GovTech GitHub](https://github.com/govtech-bb)** – all code lives here, in a shared organisation. Working in the open is part of the standards. A new team needs each member added to the org and a repository created for the service – agree a repo name with GovTech before it is created, and never start a service in a personal account or a separate organisation. See [which repositories to use](/design-and-build/which-repos-to-use.html).
- **`alpha.gov.bb`** – services in alpha and early beta are published on a subdomain, for example `your-service.alpha.gov.bb`. This keeps early services together and is honest about their phase.
- **Identity and system integration** – shared approaches for authenticating users and connecting to government systems of record. See [identity and integrating with government systems](/design-and-build/identity-and-integration.html).

## For a content service

A content service is text-only guidance. The platform pieces you need are the lightest of any type.

- **Publish to gov.bb as flat files.** No content management system needed.
- **Follow the gov.bb house style** and write at the right reading age. See [writing content for Barbadians](/design-and-build/writing-content-for-barbadians.html).
- **Use the design system's page layouts** so your content looks and behaves like other government pages.

You do not need a repository template or environments beyond gov.bb itself. If your content needs any logic – a calculator, a lookup – it is smart content; see the next section.

## For a smart content service

Smart content is a front-end-only site with some client-side logic. The platform gives you a design system to build with and a hosting model to publish under.

- **Build the UI with the [design system](https://govtech-bb.github.io/design-system/).** Components, patterns and accessibility work are already done for you. See [using the design system](/design-and-build/using-the-design-system.html).
- **Talk to GovTech about a starting point.** There is no single starter repository – ask what to base your project on. See [which repositories to use](/design-and-build/which-repos-to-use.html) for what already exists.
- **Host on an `alpha.gov.bb` subdomain** while in alpha.
- **Choose privacy-respecting analytics** – measure the task, not the person. See [technology decisions](/working-with-suppliers/technology-decisions.html).

## For a simple service

A simple service captures user input and routes it to an MDA. The platform provides most of the plumbing so you do not have to build it.

- **The Simple Service Builder (SSB).** GovTech's platform for forms, case management, tracking and notifications. Talk to GovTech about whether SSB fits your service – if it does, you avoid building most of this yourself.
- **Design system.** Even where SSB provides the form runtime, you may need the [design system](https://govtech-bb.github.io/design-system/) for surrounding pages.
- **Identity.** If your form needs to know who someone is, use the government's shared identity approach – do not roll your own login. See [identity and integrating with government systems](/design-and-build/identity-and-integration.html).
- **Case management or email routing.** SSB handles both. Case management is the default; email is a stop-gap while an MDA is being onboarded.
- **Payments and notifications.** SSB integrates with shared payment and notification components (SMS, email, WhatsApp).

## For a complex service

A complex service has substantial workflow, state, or back-office interaction. Rather than building foundations from scratch, reach for shared components where they exist.

- **Design system.** Build the interface with the [design system](https://govtech-bb.github.io/design-system/) so it looks and behaves like the rest of government.
- **A repository in the `govtech-bb` GitHub organisation** from day one, deployed via an automated pipeline. See [which repositories to use](/design-and-build/which-repos-to-use.html).
- **Identity.** Use the shared identity approach for anything involving citizen authentication. See [identity and integrating with government systems](/design-and-build/identity-and-integration.html).
- **Connecting to a system of record.** If your service needs to read from or write to another government system, arrange this early with GovTech and the system owner – there is no self-service integration layer yet. See [identity and integrating with government systems](/design-and-build/identity-and-integration.html).
- **A default stack for anything else.** React 18/19 and Tailwind CSS 4 are the recommended defaults for public-facing UI. See [technology decisions](/working-with-suppliers/technology-decisions.html).

## Where to get help

- Not sure which platform components your service needs? Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) early, before you commit to an architecture.
- [Which repositories to use](/design-and-build/which-repos-to-use.html) tells you where to start reading code.
- [Technical infrastructure](/getting-started/technical-infrastructure.html) covers what to do when your service needs something the platform does not provide.
