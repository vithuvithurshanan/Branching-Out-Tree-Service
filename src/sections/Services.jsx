import { services, site } from '../data/site.js'

const BACKDROP = '/images/services-bg.jpg'

export default function Services() {
  return (
    <section className="section" id="services">
      <div
        className="bg-layer"
        data-parallax="140"
        style={{ backgroundImage: `url(${BACKDROP})` }}
      />
      <div className="bg-scrim" />

      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>
            Services
          </span>
          <h2 className="display" data-reveal style={{ '--delay': '0.08s' }}>
            Everything from a single limb to a whole hedgerow.
          </h2>
          <p className="lede" data-reveal style={{ '--delay': '0.16s' }}>
            Hover a service to see the detail. Not sure which one you need? Describe the
            tree over the phone and we will tell you straight.
          </p>
        </div>

        <div className="svc">
          {services.map((s, i) => (
            <article
              className="svc__card"
              key={s.id}
              data-reveal
              style={{ '--delay': `${0.06 * i}s` }}
            >
              <div className="svc__photo" style={{ backgroundImage: `url(${s.image})` }} />
              <span className="svc__num">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.excerpt}</p>
              <ul className="svc__points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 'clamp(2rem, 4vw, 3.2rem)' }} data-reveal>
          <a className="btn btn--solid" href={site.phoneHref}>
            Book A Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
