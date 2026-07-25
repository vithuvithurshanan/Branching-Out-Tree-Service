# Branching Out Tree Service — website

Single-page parallax site (React + Vite) in the style of the Kutcher Studio parallax
template: full-viewport stacked sections, photographic backdrops that drift at their own
rate behind pinned content, fixed dot navigation, and reveal-on-scroll transitions.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Business details

Everything factual lives in one file — [src/data/site.js](src/data/site.js).

| Field   | Value |
| ------- | ----- |
| Name    | Branching Out Tree Service |
| Phone   | 585-667-8733 (calls **and** text — no email inbox) |
| Address | 259 Walker Rd, Hilton, NY 14468 |

Change the phone number in `site.phone` **and** `site.phoneHref`, plus the hard-coded
number inside `smsHref()` in [src/sections/Contact.jsx](src/sections/Contact.jsx).

## Pages

| Route | File |
| ----- | ---- |
| `/` | [src/pages/Home.jsx](src/pages/Home.jsx) |
| `/privacy-policy` | [src/pages/Privacy.jsx](src/pages/Privacy.jsx) |
| `/terms-and-conditions` | [src/pages/Terms.jsx](src/pages/Terms.jsx) |

Both legal pages carry the full SMS/A2P language (opt-in, message types, 4–8 msgs/month,
carrier rates, STOP, HELP, no third-party sharing, 18+) and are linked from the footer and
from the consent checkbox on the estimate form.

## The effects

All motion is driven from [src/hooks/useScrollEffects.js](src/hooks/useScrollEffects.js) —
no animation library.

- `useParallaxEngine` — one `requestAnimationFrame` loop transforms every
  `[data-parallax="n"]` element relative to its parent's position in the viewport.
  Positive `n` lags behind the scroll (backdrops), negative `n` leads it (hero copy).
- `useRevealEngine` — `IntersectionObserver` adds `.is-visible` to `[data-reveal]`
  (variants: default fade-up, `mask` clip-wipe, `left`, `right`, `scale`).
- `useCountUp`, `useScrollProgress`, `useActiveSection`, `useScrolledPast` — stat counters,
  top progress bar, dot-nav highlighting, sticky header state.
- Preloader, blend-mode custom cursor, marquee strip, auto-rotating reviews.

`prefers-reduced-motion: reduce` disables the parallax loop, reveals everything
immediately, and short-circuits the CSS transitions.

## Contact form

The estimate form is the **GoHighLevel inline embed** for
`Branching Out Tree Service` (form id `i2dbH5TnnTq6NlobO3Qy`), wrapped in
[src/components/GhlForm.jsx](src/components/GhlForm.jsx). Submissions land in the GHL
account, not on this site — there is no local form state or mail handler.

- `form_embed.js` is injected once on mount and drives the iframe's auto-height.
- Fields, validation and the **SMS consent checkbox live in GHL** — edit them there. The
  A2P disclosure printed under the form is in
  [src/sections/Contact.jsx](src/sections/Contact.jsx).
- To swap forms, change `FORM_ID` at the top of `GhlForm.jsx`.

## Images

All photography is served locally from [public/images/](public/images/) (~4.5 MB, 18
files) — nothing is hot-linked, so a dead external URL can never blank out a section.

| File | Used by |
| ---- | ------- |
| `hero-canopy.jpg`, `hero-mist.jpg` | hero parallax stack (canopy preloaded for LCP) |
| `about-climber.jpg` | About figure |
| `services-bg.jpg`, `process-bg.jpg`, `voices-bg.jpg`, `cta-bg.jpg`, `contact-bg.jpg` | section backdrops |
| `svc-*.jpg` | service cards — `services[].image` in `src/data/site.js` |
| `work-*.jpg` | gallery — `gallery[].image` in `src/data/site.js` |

The About, service-card and gallery photos are **real tree-work photography** sourced from
Openverse; the section backdrops are generic forest scenery from Unsplash. Licences and
attribution are recorded in [CREDITS.md](CREDITS.md) and mirrored on the `/photo-credits`
page linked from the footer — the CC BY images require that credit until they are replaced.

To use real job photos, drop them in `public/images/` under the same names — no code change
needed. Keep backdrops ≤ 1800px wide and cards ≤ 1200px; they sit behind dark scrims, so
quality 50–60 is plenty.

`.about__figure` and `.work__item` carry a moss-to-bark gradient underneath, so a missing
file degrades to a coloured panel rather than an empty column.

## Deploying

`vercel.json` and `public/_redirects` are included so `/privacy-policy` and
`/terms-and-conditions` resolve on a static host instead of 404-ing.
