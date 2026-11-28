# The Bean Box

Single-page site for The Bean Box, Ravens Tech's robotic coffee kiosk. Built with React, Vite and Tailwind CSS.

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/ (index.html, story.html, privacy.html)
npm run preview   # serve the build
```

## Hosting (Cloudflare Pages)

Connect the GitHub repository in Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, then use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | Vite (or None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory (advanced) | `bean-box` |

Every push to `main` then redeploys the site; other branches get preview links.

- **Project name** sets the address (`<name>.pages.dev`). If it isn't `thebeanbox`, add an environment variable
  `VITE_SITE_URL=https://<name>.pages.dev/` (or your custom domain, ending in `/`) so link previews point to the right place.
- **Custom domain:** in the Pages project, **Custom domains → Set up a domain**.
- `public/_headers` sets caching (a year for hashed build files) and basic security headers.
- `.node-version` pins Node 20 for the build.

## Settings

Everything you edit is in `src/config.js`: contact email, phone, location, social links, form endpoint,
Ravens Tech URL, product film URL and the coffee origin facts. An empty value hides the element that uses it.

- `formEndpoint` set (Formspree-compatible): the inquiry form POSTs JSON there.
- `formEndpoint` empty: the form opens a pre-filled email to `email`.
- `filmUrl`: a YouTube or Vimeo link, or a direct `.mp4`/`.webm` (put files in `public/film/`). Empty shows "Film coming soon".
- `filmPoster`: the still shown before a direct video file plays.
- `hours`: office hours in the footer. `socialHandle`: shown after "Tag us in your photos!".
- `origin`: region, altitude, cooperative and roaster. Each row appears only once it has a value.

## Images

Each image is served in three widths: `public/img/<name>-480.webp`, `-960.webp` and `-1440.webp`.

1. Put the full-size originals in `images-src/`, named as below.
2. Run `npm run images`.

| File name | Used in |
| --- | --- |
| `bean-kiosk-render` | Hero, Meet The Bean Box, gallery |
| `bean-kiosk-concept` | Gallery, product film poster |
| `bean-cup-espresso`, `bean-cup-autumn` | Gallery |
| `rwanda-farm` | Origin section ("The growers" tab) |
| `story-women-picking` | Story page, chapter 03 |
| `highlands` | Film banner fallback when no poster is set |
| `cherries` | Section divider band (from the guideline) |
| `brand-cup-beans`, `brand-espresso-pour` | Gallery (brand photography from the guideline) |
| `venue-office`, `venue-hotel`, `venue-airport`, `venue-university`, `venue-mall`, `venue-stadium` (3:2) | Locations |

Until an image exists, a dark labelled placeholder is shown in its place.

`bean-kiosk-render.png` is a cut-out (transparent background) so the kiosk sits directly on the page's
near-black background. Replace it with another transparent PNG to keep that look.

## Brand (from The Bean Box Brand Guideline)

- **Colours.** Primary: forest `#12211C`, sage `#C8C5A5`, white. Secondary, for highlights only: gold `#C9A96E`,
  brown `#3B2A26`, green `#557769`, grey `#D9D9D9`. Sections are either `tone-dark` (forest, white text, sage
  accents) or `tone-light` (sage, forest text); components pick their colours from the tone they sit in.
- **Type.** Montserrat for all web text (the guideline's digital typeface). Carvest appears only inside the logo artwork.
- **Logo.** Vector files extracted from the guideline are in `src/brand/` (`logo-full`, `logo-word`, `logo-mark`).
  They use `currentColor`; keep to the guideline's pairings (sage on forest, forest on sage, black on white,
  white on forest), at least 150px wide on screen, and never stretch, rotate, outline or recolour them.
- **Favicon.** The bean mark on a forest tile, per the guideline's favicon page.

## Content

Partnership programmes, Story chapters, copy for the menu (drink names), features, venues, Question Coffee and form options is in `src/data/content.js`.
Before launch, set `og:image` in `index.html` to the full `https://` URL of `og-image.jpg`.
