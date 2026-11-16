# The Bean Box

Single-page site for The Bean Box, Ravens Tech's robotic coffee kiosk. Built with React, Vite and Tailwind CSS.

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/ (index.html + privacy.html)
npm run preview   # serve the build
```

## Settings

Everything you edit is in `src/config.js`: contact email, phone, location, social links, form endpoint,
Ravens Tech URL, product film URL and the coffee origin facts. An empty value hides the element that uses it.

- `formEndpoint` set (Formspree-compatible): the inquiry form POSTs JSON there.
- `formEndpoint` empty: the form opens a pre-filled email to `email`.
- `filmUrl`: a YouTube or Vimeo link, or a direct `.mp4`/`.webm`. Empty shows "Film coming soon".
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
| `rwanda-farm` | Origin section |
| `drink-espresso`, `drink-americano`, `drink-cappuccino`, `drink-cafe-latte`, `drink-flat-white`, `drink-mocha`, `drink-hot-chocolate` (square) | Menu |
| `venue-office`, `venue-hotel`, `venue-airport`, `venue-university`, `venue-mall` (3:2) | Locations |

Until an image exists, a dark labelled placeholder is shown in its place.

`bean-kiosk-render.png` is a cut-out (transparent background) so the kiosk sits directly on the page's
near-black background. Replace it with another transparent PNG to keep that look.

## Colours

The palette is limited to four colours: `#080806` (background), `#C8A76B` (gold), `#E8D3A6` (light gold)
and `#F5F1EA` (text). Card fills, borders and glows are translucent tints of these.

## Content

Copy for the menu, features, venues and form options is in `src/data/content.js`.
Before launch, set `og:image` in `index.html` to the full `https://` URL of `og-image.jpg`.
