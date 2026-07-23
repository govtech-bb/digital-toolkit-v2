# Barbados Digital Toolkit for Government

Everything you need to design, build and procure digital services that meet the
Barbados Digital Service Standards — whether you are building in-house or
working with a supplier.

## How the site is built

Content lives as markdown under `src/`. Templates and partials live under
`src/_includes/`. [Eleventy](https://www.11ty.dev/) turns them into static
HTML in `_site/`.

```
src/
├── index.njk                             ← home page (data-driven sections)
├── styles.css                            ← copied through to _site/
├── flag_of_barbados.png                  ← favicon, copied through
├── _includes/
│   ├── layouts/
│   │   ├── base.njk                      ← banner, header, phase banner, footer
│   │   ├── home.njk                      ← extends base; hero + section lists
│   │   └── article.njk                   ← extends base; breadcrumb, header, TOC
│   └── partials/                         ← official banner, phase banner, logo, footer
└── <section>/<slug>.md                   ← one markdown file per article
```

Each article's front matter drives its title, lede and output URL:

```yaml
---
layout: layouts/article.njk
title: Writing content for Barbadians
lede: How to write government content that anyone can understand …
permalink: /design-and-build/writing-content-for-barbadians.html
---
```

The table of contents is generated automatically from the `##` headings in
each article. Heading IDs are slugified from the heading text.

## Running locally

Requires Node.js 18+.

```bash
npm install
npm start        # dev server on http://localhost:8080 with live reload
npm run build    # one-off build into _site/
```

## Deployment

The toolkit is deployed at [https://barbados-digital-toolkit.alpha.gov.bb/](https://barbados-digital-toolkit.alpha.gov.bb/).

Any deploy pipeline should run `npm ci && npm run build` and publish the
contents of `_site/`.
