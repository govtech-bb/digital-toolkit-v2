# Contributing to the Digital Toolkit

Thank you for helping to improve the Barbados Digital Toolkit for Government.

The toolkit is only useful if it stays accurate, clear and up to date. It gets better when the people who use it tell us what is missing, fix what is wrong, and share what they have learned. That includes you.

This guide explains who can contribute, how the site is put together, the house style we write in, and how to propose a change. If you are not comfortable with Git or GitHub, there is a simple way to help too — see [If you are not comfortable with Git or GitHub](#if-you-are-not-comfortable-with-git-or-github).

<!-- TODO: confirm the named GovTech owner/maintainer of this repository. Until then, contributions are reviewed by "the GovTech team" and contact is info@govtech.bb. -->

## Who can contribute

Anyone can contribute. You do not need to work for GovTech.

We especially welcome contributions from:

- people who work in a ministry, department or agency (MDA) and use the toolkit in their work
- GovTech staff
- suppliers who build government services
- anyone who spots something that is wrong, out of date or hard to understand

You do not need to be a technical person. If you can send an email, you can suggest a change.

## What kinds of contributions are welcome

All of these help:

- **Fixing errors** — a broken link, a wrong fact, a spelling mistake, out-of-date guidance
- **Improving content** — making a page clearer, shorter or easier to follow
- **Adding content** — a new page or section that fills a gap
- **Suggesting resources** — a tool, template or piece of guidance that others would find useful
- **Reporting a problem** — telling us something is confusing or missing, even if you are not sure how to fix it

If you are not sure whether something is worth raising, raise it anyway. A short note is enough.

## How the toolkit is put together

You do not need to understand all of this to contribute. But it helps to know how the pages are made.

The toolkit is a static website built with [Eleventy](https://www.11ty.dev/). The content lives as markdown files, which Eleventy turns into web pages.

```
src/
├── index.njk                       ← the home page and its list of sections
├── styles.css                      ← the site styles
├── _includes/                      ← page templates and shared parts
└── <section>/<slug>.md             ← one markdown file per page
```

The important parts to know are:

- **Each page is a markdown (`.md`) file** in a section folder — for example, `src/design-and-build/writing-content-for-barbadians.md`. This is the source you edit.
- **Eleventy renders each `.md` file into an `.html` page** when the site is built. You do not edit the `.html` — it is generated for you.
- **The home page lists every page.** The list of sections and links lives in `src/index.njk`. When you add a new page, you also add a link to it here so people can find it.

### The top of every page

Every page starts with a short block of settings called front matter. It sets the title, the one-line summary (the "lede"), the web address and the date it was last updated:

```yaml
---
layout: layouts/article.njk
title: Writing content for Barbadians
lede: How to write government content that anyone can understand …
lastUpdated: April 2026
permalink: /design-and-build/writing-content-for-barbadians.html
---
```

Below the front matter, write the page in markdown. Use `##` headings for each section — the page's Contents list is built automatically from them.

## House style

We write for the public and for busy people in government. Follow the same style across the whole toolkit:

- **Use plain language.** Write for the reader with the least confidence, not the most. Short words, short sentences, one idea at a time.
- **Aim for a low reading age.** Keep sentences to about 15 to 20 words. Split anything longer.
- **Be consistent with gov.bb.** Match the tone and terms used across Barbados government services. Use British and Barbadian English spelling.

The best guide to our house style is a page in the toolkit itself: **[Writing content for Barbadians](https://barbados-digital-toolkit.alpha.gov.bb/design-and-build/writing-content-for-barbadians.html)**. Read it before you write or edit a page. It covers common words to use, sentence length, page structure, and habits to avoid.

## How to propose a change

There are two ways, depending on how comfortable you are with GitHub.

### Open an issue (to suggest or report something)

Use an issue when you want to raise something but do not want to make the change yourself:

1. Go to the [Issues page](https://github.com/govtech-bb/digital-toolkit-v2/issues).
2. Check whether someone has already raised it.
3. If not, open a new issue. Describe what is wrong or what you would like to add, and which page it affects.

### Open a pull request (to make the change yourself)

Use a pull request when you want to make the edit yourself:

1. Fork the repository, or create a branch if you have access.
2. Make your change to the markdown file. If you added a new page, add a link to it in `src/index.njk`.
3. Check it builds. With [Node.js](https://nodejs.org/) 18 or later installed, run `npm install` then `npm run build`.
4. Open a pull request against the `main` branch. Explain what you changed and why.

## What happens next

Once you open an issue or a pull request:

1. **The GovTech team reviews it.** We aim to look at new contributions within a week or two.
2. **We may ask questions or suggest changes** — usually about plain language or keeping things consistent with the rest of the toolkit.
3. **We merge it** once it is ready. Your change then goes live the next time the site is published.

We review every contribution. Please do not be discouraged if we suggest edits — it is a normal part of how we keep the toolkit clear and consistent.

<!-- TODO: confirm the named GovTech owner who reviews and merges contributions. -->

## If you are not comfortable with Git or GitHub

You do not need to use GitHub to help.

Email **[info@govtech.bb](mailto:info@govtech.bb)** and tell us:

- which page you are looking at (a link or the page title)
- what is wrong, or what you would like to change or add

That is all we need. The GovTech team will make the change for you, or turn your suggestion into an issue. You will not miss out by not knowing GitHub.

## Questions

If you are unsure about anything, contact the GovTech team at [info@govtech.bb](mailto:info@govtech.bb). We are happy to help.
