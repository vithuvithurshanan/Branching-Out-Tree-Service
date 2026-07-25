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

The business has no email inbox, so the form composes an SMS to 585-667-8733 with the
customer's name, number, address and service instead of posting to a mail handler. To wire
it to a CRM or SMS API later, replace the `submit` handler in
[src/sections/Contact.jsx](src/sections/Contact.jsx).

## Images

Hero and section backdrops are hot-linked Unsplash URLs so the repo stays light. Swap them
for real job photos before launch — the service photos are in `services[].image` and the
gallery in `gallery[].image` in `src/data/site.js`.

## Deploying

`vercel.json` and `public/_redirects` are included so `/privacy-policy` and
`/terms-and-conditions` resolve on a static host instead of 404-ing.
