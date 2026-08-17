# OCEANS Magazine — Vite + React + Tailwind

Converted from the original static HTML/CSS page into a componentized
Vite + React app styled with Tailwind CSS.

## Structure

- `src/App.jsx` — assembles all page sections
- `src/components/` — one component per section (Nav, Hero, EditorialTeam,
  SubscriberMap, MagazineLibrary, ShareYourStory, Advertise, Partners, Footer)
- `src/i18n/` — EN/FR/DE translation strings + a `LanguageContext` that
  replaces the original page's `data-en/fr/de` attribute-swapping script
- `src/assets/` — images extracted from the original inline base64 data URIs
- `index.html` — loads the `svgMap` library from the same CDN the original
  page used (it's a UMD library not published in a way that plays nicely
  with bundlers, so it's kept as a script tag rather than an npm import)

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Notes

- Language switching is handled by React state (`LanguageContext`) instead
  of directly mutating the DOM.
- The subscriber map still uses the `svgmap` library via `window.svgMap`,
  initialized in a `useEffect` in `SubscriberMap.jsx`, with the same
  retry/fallback behavior as the original inline script.
- Colors and fonts (Fraunces / Work Sans) are defined in `tailwind.config.js`.
