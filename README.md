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

## Deploying

Cloudflare Pages builds from GitHub. **Pushing to `master` deploys** — no
manual upload step. Build settings: framework preset *Next.js (Static HTML
Export)*, build command `npm run build`, output directory `out`, and an
environment variable `NODE_VERSION=20`.

Cloudflare issues and renews TLS, so there is no certificate or HTTPS-redirect
config to maintain. `www` folds into the apex via a zone-level Redirect Rule.

## Editing the content

All resume content lives in [`app/data/resume.ts`](app/data/resume.ts) —
profile, contact links, experience, projects, education, skills, and
certifications. Edit that file rather than the components; the panels, the deep
links, and the schema.org structured data all read from it.

The deployed origin is set once in [`app/data/site.ts`](app/data/site.ts) and is
used for metadata, the canonical URL, the sitemap, and structured data.

### The resume PDF

`public/Ian_Harrison_Resume.pdf` is **generated, not hand-edited**. It is
rendered from an HTML template to a two-page Letter PDF with real selectable
text so applicant tracking systems can parse it.

It deliberately omits the phone number, street-level location, and zip code —
the site is public and the file is directly downloadable. If it is ever
regenerated, verify those are absent from the extracted text *and* from the
decompressed content streams. Do not "redact" the original PDF instead: text
covered by a box remains extractable underneath.

Project descriptions in both the PDF and the site are written for a public
audience and omit internal identifiers — GCP project IDs, Cloud Run service
names, Power Automate flow GUIDs, Dataverse column prefixes, and local paths.

## Layout

| Breakpoint | Layout |
| --- | --- |
| `< xl` (1280px) | Stacked — identity header above, content panel below |
| `>= xl` | Split — fixed 35% identity rail, 65% scrolling content panel |

The split needs `xl` rather than `lg`: at ~1024px the 35% rail is too narrow to
hold the nav.

Sections are deep-linkable: `/#experience`, `/#skills`, `/#projects`,
`/#contact`.

## Crawlability

The site is meant to be readable by search engines and AI/LLM crawlers,
including AI-powered recruiting systems:

- Every panel stays mounted in the DOM (inactive ones use the `hidden`
  attribute), so the full resume ships in the prerendered HTML rather than
  appearing only after a tab is clicked. Most AI crawlers do not execute JS.
- A `<noscript>` rule reveals all sections for visitors without JavaScript.
- [`public/robots.txt`](public/robots.txt) allows all crawlers and names the
  major AI user-agents explicitly.
- [`app/components/StructuredData.tsx`](app/components/StructuredData.tsx)
  emits a schema.org `@graph`: a `Person` node plus one `CreativeWork` per
  project, each attributed back to the Person.
- `app/sitemap.ts` generates `/sitemap.xml`.

### ⚠️ Cloudflare can silently override robots.txt

Cloudflare's **managed robots.txt** feature rewrites the file at the edge,
prepending `Disallow: /` for ClaudeBot, GPTBot, CCBot, Google-Extended and
others, plus a `Content-Signal: ai-train=no` declaration. It is **on by default
for new zones** and completely negates the allow-list above.

It is not visible in the repo and does not affect HTTP status codes, so crawler
access tests still pass while compliant crawlers read the file and skip the
site. Verify by diffing the served file against the repo copy:

```bash
curl -s https://vampcoding.com/robots.txt | diff - public/robots.txt
```

The setting lives at **Security → Settings → Manage your robots.txt**, and must
be set to *Disable robots.txt configuration*. This is separate from
**Configure AI bot policies**, which controls edge blocking and should stay on
*Allow*.

## Theme

Palette and font are defined in [`tailwind.config.ts`](tailwind.config.ts) and
[`app/globals.css`](app/globals.css):

- `ink` `#0C0004` — background
- `blood` `#670A0D` — accent, `blood-light` `#B8474B` for accent text
- Cinzel (Google Fonts), loaded in `app/layout.tsx`

`public/og.png` is the link-preview card, rendered from the same palette and
typeface. `public/_headers` sets security headers and cache policy for
Cloudflare Pages.
