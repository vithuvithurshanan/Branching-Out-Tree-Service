import { useEffect, useState } from 'react'
import { testimonials, site } from '../data/site.js'

const BACKDROP = '/images/voices-bg.jpg'
const CTA_BACKDROP = '/images/cta-bg.jpg'

export default function Voices() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section section--full" id="voices">
      <div
        className="bg-layer"
        data-parallax="150"
        style={{ backgroundImage: `url(${BACKDROP})` }}
      />
      <div className="bg-scrim" />
      <div className="bg-grain" />

      <div className="wrap">
        <div className="voices">
          <span className="eyebrow" style={{ marginBottom: '2rem' }} data-reveal>
            Reviews
          </span>
          <span className="quote-mark display" aria-hidden="true">
            “
          </span>

          <div className="voices__stage">
            {testimonials.map((t, i) => (
              <div className={`voice${i === index ? ' is-on' : ''}`} key={t.name}>
                <blockquote className="display">{t.quote}</blockquote>
                <cite>
                  {t.name} — {t.place}
                </cite>
              </div>
            ))}
          </div>

          <div className="voices__dots">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                className={i === index ? 'is-on' : undefined}
                onClick={() => setIndex(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta">
      <div
        className="bg-layer"
        data-parallax="110"
        style={{ backgroundImage: `url(${CTA_BACKDROP})` }}
      />
      <div className="bg-scrim" />

      <div className="wrap" data-parallax="-45">
        <span className="eyebrow" style={{ marginBottom: '1.4rem' }}>
          Storm damage? Call now.
        </span>
        <h2 className="display" data-reveal>
          We answer 24/7
        </h2>
        <a className="btn btn--solid" href={site.phoneHref}>
          {site.phone}
        </a>
      </div>
    </section>
  )
}
