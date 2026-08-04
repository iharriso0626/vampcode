# VampCoding

Professional portfolio of Ian Harrison — Security Analyst & Developer.

Built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS, and Framer
Motion. Deployed as a fully static site (`output: "export"`) to
[vampcoding.com](https://vampcoding.com).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export into ./out
```

## Editing the content

All resume content lives in [`app/data/resume.ts`](app/data/resume.ts) — profile,
contact links, work experience, education, skills, and certifications. Edit that
file rather than the components; the panels, the `#skills` / `#experience` deep
links, and the schema.org structured data all read from it.

The deployed origin is set once in [`app/data/site.ts`](app/data/site.ts) and is
used for metadata, the canonical URL, the sitemap, and structured data.

## Layout

| Breakpoint | Layout |
| --- | --- |
| `< xl` (1280px) | Stacked — identity header above, content panel below |
| `>= xl` | Split — fixed 35% identity rail, 65% scrolling content panel |

Sections are deep-linkable: `/#experience`, `/#skills`, `/#contact`.

## Crawlability

The site is meant to be readable by search engines and AI/LLM crawlers,
including AI-powered recruiting systems:

- Every panel stays mounted in the DOM (inactive ones use the `hidden`
  attribute), so the full resume ships in the prerendered HTML rather than
  appearing only after a tab is clicked.
- [`public/robots.txt`](public/robots.txt) allows all crawlers and names the
  major AI user-agents explicitly.
- [`app/components/StructuredData.tsx`](app/components/StructuredData.tsx) emits
  a schema.org `Person` graph covering work history, skills, and credentials.
- `app/sitemap.ts` generates `/sitemap.xml`.

## Theme

Palette and font are defined in [`tailwind.config.ts`](tailwind.config.ts) and
[`app/globals.css`](app/globals.css):

- `ink` `#0C0004` — background
- `blood` `#670A0D` — accent, `blood-light` `#B8474B` for accent text
- Cinzel (Google Fonts), loaded in `app/layout.tsx`
