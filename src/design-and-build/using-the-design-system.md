---
layout: layouts/article.njk
title: Using the Barbados Government Design System
lede: How to install and use the Barbados Government Design System packages in a React project, and what to do if you are building a plain HTML prototype.
lastUpdated: July 2026
permalink: /design-and-build/using-the-design-system.html
---
The Barbados Government Design System gives you ready-made components, styles and patterns so your service looks and behaves like the rest of government. This page is for developers who are ready to start building.

If you are new to the design system, look through the [Storybook](https://govtech-bb.github.io/design-system/) first to see what is available.

## The system is pre-release

The design system is still in early development. The packages are published under alpha version tags, the components may change, and new ones are still being added. Pin to a specific version so an update does not break your build without warning, and check back before you upgrade.

## What you get

The design system is published as two npm packages:

- `@govtech-bb/react` — the React components, such as `Button`, `Input`, `Header` and `Footer`
- `@govtech-bb/styles` — the compiled CSS, which you can use on its own without React

Both are published under the `@govtech-bb` scope on the public npm registry.

## Requirements

To use the React components you need:

- React 18 or React 19
- Tailwind CSS 4

If your project does not use React, see [Building a plain HTML prototype](#building-a-plain-html-prototype) below.

## Install the packages

Install both packages from npm. Use the `@alpha` tag — this matters, see the caveat below.

```bash
npm install @govtech-bb/react@alpha @govtech-bb/styles@alpha
```

### Install the alpha tag, not latest

The newest release is published under the `alpha` dist-tag. The `latest` tag currently lags behind it. If you run `npm install @govtech-bb/react` without a tag, npm gives you `latest` — which is an older version than the current alpha.

So always ask for `@alpha`, or pin the exact version you want:

```bash
# gets the current alpha release
npm install @govtech-bb/react@alpha

# or pin an exact version
npm install @govtech-bb/react@1.0.0-alpha.17
```

<!-- TODO: confirm current version/tag before each release of this page. As of July 2026: latest = 1.0.0-alpha.16, alpha = 1.0.0-alpha.17 -->

## Use the components

Import the stylesheet once, near the top of your app — for example in your root layout or entry file. Then import components where you need them.

```jsx
// import the design system styles once, at the root of your app
import "@govtech-bb/styles";

// import components where you use them
import { Button, Input } from "@govtech-bb/react";

function ContactForm() {
  return (
    <form>
      <Input label="Full name" name="fullName" />
      <Button>Continue</Button>
    </form>
  );
}
```

This example is illustrative — check the [Storybook](https://govtech-bb.github.io/design-system/) for the components that exist and the props each one takes.

## Building a plain HTML prototype

The components are React only. A plain static HTML page cannot use `@govtech-bb/react`.

You can still get the government look and feel by using the compiled CSS from `@govtech-bb/styles`. Install the package and link its stylesheet in your page:

```html
<link rel="stylesheet" href="node_modules/@govtech-bb/styles/dist/styles.css">
```

This gives you the design system's styles, but not its behaviour. Anything the React components do in JavaScript — validation, showing and hiding content, and so on — you would have to build yourself.

If you need working components in a prototype, build it in React so you can use the design system directly.

## What is not there yet

The design system gives you primitives — individual components such as buttons, inputs, checkboxes, headers and footers.

It does not yet give you the composite page patterns that a transactional service is built from, such as:

- the question page (one thing per page)
- the task list
- the check-your-answers page

Until those patterns are published, you will need to assemble these pages yourself from the primitives. Follow the layout and spacing shown in the Storybook so your pages stay consistent with the rest of government.

## Where to get help

- Browse the [Barbados Government Design System Storybook](https://govtech-bb.github.io/design-system/) to see every component and its documentation.
- The source code is on the [GovTech GitHub](https://github.com/govtech-bb/design-system).
- Contact GovTech at [info@govtech.bb](mailto:info@govtech.bb) if you have questions or want to suggest a component or pattern.
</content>
</invoke>
