---
layout: layouts/article.njk
title: The GovTech platform
lede: The building blocks GovTech provides – design system, identity, data exchange, form platform – and which of them to reach for depending on the type of service you are building.
---
"The GovTech platform" is the collection of shared building blocks the Government of Barbados provides for teams building digital services. Rather than each team choosing its own tools, hosting, identity approach and integration route, the platform gives you a common set to start from – so you spend your effort on the service, not on rebuilding foundations.

This page is a map of what is there, and which pieces are relevant for each type of service. If you are not sure what kind of service you are building, read [what kind of service are you building?](/getting-started/what-kind-of-service/) first.

## Shared foundations

These apply to almost everything the government builds and are worth knowing about regardless of service type.

- **[Barbados Government Design System](https://govtech-bb.github.io/design-system/)** – reusable components, styles and patterns. Any user-facing service should use it. See [using the design system](/design-and-build/using-the-design-system/) for how to install and integrate the packages.
- **[GovTech GitHub](https://github.com/govtech-bb)** – all code lives here, in a shared organisation. Working in the open is part of the standards. A new team needs each member added to the org and a repository created for the service – agree a repo name with GovTech before it is created, and never start a service in a personal account or a separate organisation.
- **`alpha.gov.bb`** – the platform on which the Government of Barbados publishes its digital services today. Your service will be published at a subdomain like `your-service.alpha.gov.bb`, regardless of what phase it is in. See [about alpha.gov.bb](/getting-started/about-alpha-gov-bb/).
- **Identity and system integration** – shared approaches for authenticating users and connecting to government systems of record. See [identity and integrating with government systems](/design-and-build/identity-and-integration/).

### Repositories worth knowing about

There is no single starter repository to clone. Talk to GovTech before you begin – the team can point you at the most current starting point for the kind of service you are building. In the meantime, these are the main repositories in the `govtech-bb` organisation:

- [**gov-bb**](https://github.com/govtech-bb/gov-bb) – the Simple Service Builder (SSB). The platform behind online forms, the no-code form builder, the services landing site and the assistant chatbot. A large monorepo, not a starting point for one small service.
- [**govbb-prototypes**](https://github.com/govtech-bb/govbb-prototypes) – a collection of HTML prototypes and a prototype generator. Useful for ideas and examples, not a base for a live service.
- [**design-system**](https://github.com/govtech-bb/design-system) – the components, styles and patterns every service should use. See [using the design system](/design-and-build/using-the-design-system/).

## For a content service

A content service is text-only guidance. The platform pieces you need are the lightest of any type.

- **Author in markdown, deploy via `gov-bb`.** Content lives in the [landing app](https://github.com/govtech-bb/gov-bb/tree/main/apps/landing) inside the gov-bb monorepo, under `apps/landing/src/content/`. Add or update content by raising a pull request – see [#1945](https://github.com/govtech-bb/gov-bb/pull/1945) as a small worked example. Changes deploy through the standard alpha.gov.bb deployment process and are served under [alpha.gov.bb](https://alpha.gov.bb/).
- **Follow the GovTech style guide** and write at the right reading age. See [writing content for Barbadians](/design-and-build/writing-content-for-barbadians/).
- **Get a GovTech content designer review before publishing.** They catch issues that authors close to the subject often miss.

If your content needs any logic – a calculator, a lookup – it is smart content; see the next section.

## For a smart content service

Smart content is a front-end-only site with client-side logic. It runs entirely in the user's browser: no back end, no database, no runtime API calls. Any data it uses is bundled into the site itself.

- **Author in TypeScript, deploy via `gov-bb`.** Smart content apps live in the same [landing app](https://github.com/govtech-bb/gov-bb/tree/main/apps/landing) as plain content, under `apps/landing/src/routes/`, but written in TypeScript. Deployment goes through the same alpha.gov.bb process, and pages are served at paths under `alpha.gov.bb`.
- **TypeScript must come with automated tests.** See the [pension calculator PR (#2055)](https://github.com/govtech-bb/gov-bb/pull/2055) for a worked example – content, `compute.ts` and `compute.test.ts` all landed together. The [Bank holidays page](https://alpha.gov.bb/bank-holiday-calendar) is another live example.
- **Build the UI with the [design system](https://govtech-bb.github.io/design-system/).** Components, patterns and accessibility work are already done for you. See [using the design system](/design-and-build/using-the-design-system/).
- **State stays in the browser.** Transient state can live in a browser session or local storage – for example to remember a partial calculation or to route a user to a specific piece of guidance. Nothing persists server-side.
- **Choose privacy-respecting analytics** – measure the task, not the person. See [technology decisions](/working-with-suppliers/technology-decisions/).

## For a simple service

A simple service captures user input and routes it to an MDA. The platform provides most of the plumbing so you do not have to build it. The workflow is **prototype → form builder → route to email or case management**.

- **Prototype the form first.** Build a clickable HTML prototype in the [govbb-prototypes](https://github.com/govtech-bb/govbb-prototypes) repository – it includes a generator that produces prototypes from a form specification. Test it with real users before writing any production code. Changing a real form after MDA sign-off is far more expensive than changing a prototype.
- **Build the real form as a recipe in the Simple Service Builder (SSB).** Once the design is validated, define the form as a JSON "recipe" at `apps/api/src/forms/form-definitions/recipes/{formId}/{version}.json` in the gov-bb monorepo. The [form creation guide](https://github.com/govtech-bb/gov-bb/blob/main/FORM-CREATION-GUIDE.md) and [conventions guide](https://github.com/govtech-bb/gov-bb/blob/main/FORMS.md) explain the schema and the registry of standard fields (name, date of birth, national ID, etc.) you should prefer over hand-rolled fields. See [PR #1442](https://github.com/govtech-bb/gov-bb/pull/1442) for a clean single-form publish, or [PR #2071](https://github.com/govtech-bb/gov-bb/pull/2071) for a form landed alongside its landing pages.
- **Route submissions to email or case management.** SSB handles both. Case management is the default; email is a stop-gap while an MDA is being onboarded to case management.
- **Identity, payments and notifications** are shared components SSB integrates with. Use the [shared identity approach](/design-and-build/identity-and-integration/) if your form needs to know who someone is; SSB provides SMS, email and WhatsApp notifications and payment integration out of the box.
- **Design system.** Even where SSB provides the form runtime, you may need the [design system](https://govtech-bb.github.io/design-system/) for surrounding pages.

## For a complex service

A complex service has substantial workflow, state, or back-office interaction. Rather than building foundations from scratch, reach for shared components where they exist.

- **Design system.** Build the interface with the [design system](https://govtech-bb.github.io/design-system/) so it looks and behaves like the rest of government.
- **A repository in the `govtech-bb` GitHub organisation** from day one, deployed via an automated pipeline.
- **Identity.** Use the shared identity approach for anything involving citizen authentication. See [identity and integrating with government systems](/design-and-build/identity-and-integration/).
- **Connecting to a system of record.** If your service needs to read from or write to another government system, arrange this early with GovTech and the system owner – there is no self-service integration layer yet. See [identity and integrating with government systems](/design-and-build/identity-and-integration/).
- **A default stack for anything else.** React 18/19 and Tailwind CSS 4 are the recommended defaults for public-facing UI. See [technology decisions](/working-with-suppliers/technology-decisions/).

## Where to get help

- Not sure which platform components your service needs? Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) early, before you commit to an architecture.
- [Technical infrastructure](/getting-started/technical-infrastructure/) covers what to do when your service needs something the platform does not provide.
