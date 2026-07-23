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

Each article's front matter drives its title and lede:

```yaml
---
layout: layouts/article.njk
title: Writing content for Barbadians
lede: How to write government content that anyone can understand …
---
```

The output URL is derived from the file path — `src/design-and-build/writing-content-for-barbadians.md`
becomes `/design-and-build/writing-content-for-barbadians/`.

The "Last updated" date shown on the home page is computed at build time from
the last git commit that touched each file, so there is no `lastUpdated` field
to maintain.

The table of contents is generated automatically from the `##` headings in
each article. Heading IDs are slugified from the heading text.

## Adding a new page

1. Create a markdown file at `src/<section>/<slug>.md` (pick an existing
   section directory or create a new one). Use the frontmatter shape above.
2. Write the body. Use `##` for headings — they become the table of contents.
3. Add the page to the home index by editing `src/index.njk`. Find the right
   section under `sections:` and add an item that references the file:

   ```yaml
   - page: design-and-build/writing-content-for-barbadians.md
   ```

   The title, description and URL are pulled from the page's own frontmatter,
   so you only ever write them in one place. Optionally add a tag:

   ```yaml
   - page: getting-started/introduction-to-digital-transformation.md
     tag: { variant: new, label: New }
   ```

For an external link or a placeholder for something not yet built, use the
inline shape instead of `page:`:

```yaml
- title: Assess your service's readiness
  href: "#"
  tag: { variant: soon, label: Coming soon }
  desc: A short checklist to help you understand where your service is today …
```

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
