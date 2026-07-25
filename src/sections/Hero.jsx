import { site, addressLine } from '../data/site.js'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=72'
const HERO_MID =
  'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=2000&q=70'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* three layers, each moving at its own rate — the Kutcher parallax stack */}
      <div
        className="bg-layer"
        data-parallax="120"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div
        className="bg-layer"
        data-parallax="175"
        style={{
          backgroundImage: `url(${HERO_MID})`,
          opacity: 0.35,
          mixBlendMode: 'luminosity',
        }}
      />
      <div className="bg-scrim" />
      <div className="bg-grain" />

      <div className="hero__content" data-parallax="-70">
        <span className="eyebrow hero__eyebrow">
          {site.address.city}, {site.address.state} — Est. 2008
        </span>

        <h1 className="display hero__title">
          <span className="line">
            <span style={{ '--d': '0.15s' }}>Tree Work</span>
          </span>
          <span className="line">
            <span style={{ '--d': '0.3s' }}>
              Done <em>Clean</em>
            </span>
          </span>
        </h1>

        <div className="hero__meta">
          <div className="hero__actions">
            <a className="btn btn--solid" href={site.phoneHref}>
              Call {site.phone}
            </a>
            <a className="btn" href="#contact">
              Free Estimate
            </a>
          </div>

          <div className="hero__tags">
            <span>Removal</span>
            <span>Trimming</span>
            <span>Stump Grinding</span>
            <span>24/7 Storm</span>
          </div>
        </div>
      </div>

      <div className="hero__cue">
        <i />
        Scroll
      </div>

      <div className="hero__badge">
        Licensed &amp; Fully Insured
        <br />
        {addressLine}
      </div>
    </section>
  )
}

export function Marquee() {
  const words = [
    'Tree Removal',
    'Canopy Pruning',
    'Stump Grinding',
    'Storm Damage',
    'Lot Clearing',
    'Cabling & Bracing',
  ]

  return (
    <div className="marquee" aria-hidden="true">
      {[0, 1].map((row) => (
        <div className="marquee__row" key={row}>
          {words.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
