import { gallery, reasons, site } from '../data/site.js'

export default function Work() {
  return (
    <section className="section" id="work">
      <span className="section__watermark display" data-parallax="80">
        03
      </span>

      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>
            Our Work
          </span>
          <h2 className="display" data-reveal style={{ '--delay': '0.08s' }}>
            Jobs from around the Rochester westside.
          </h2>
        </div>

        <div className="work">
          {gallery.map((g, i) => (
            <figure className="work__item" key={g.title}>
              <img
                src={g.image}
                alt={`${g.title} — ${g.meta}`}
                loading="lazy"
                decoding="async"
                data-parallax="26"
              />
              <figcaption className="work__cap">
                <h3>{g.title}</h3>
                <span>{g.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section className="section section--light on-light" id="why">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>
            Why Branching Out
          </span>
          <h2 className="display" data-reveal style={{ '--delay': '0.08s' }}>
            Four reasons neighbours keep the number.
          </h2>
        </div>

        <div className="reasons">
          {reasons.map((r, i) => (
            <article className="reason" key={r.title} data-reveal style={{ '--delay': `${0.07 * i}s` }}>
              <span className="reason__mark">{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </article>
          ))}
        </div>

        <p className="lede" style={{ marginTop: '2.6rem' }} data-reveal>
          Questions before you commit? Call{' '}
          <a className="link-underline" href={site.phoneHref}>
            <strong>{site.phone}</strong>
          </a>{' '}
          — estimates are free and there is no obligation attached to them.
        </p>
      </div>
    </section>
  )
}
