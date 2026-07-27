import { site, addressLine } from '../data/site.js'

const ABOUT_IMAGE = '/images/about-climber.webp'

export default function About() {
  return (
    <section className="section section--light on-light" id="about">
      <span className="section__watermark display" data-parallax="70">
        01
      </span>

      <div className="wrap grid-2">
        <div className="about__figure">
          <img
            src={ABOUT_IMAGE}
            alt="Arborist in helmet and hearing protection cutting an overgrown evergreen with a chainsaw"
            loading="lazy"
            decoding="async"
            data-parallax="42"
          />
          <div className="about__stamp">
            <span>
              <b>18</b>
              Years
              <br />
              Climbing
            </span>
          </div>
        </div>

        <div>
          <span className="eyebrow" data-reveal>
            Who We Are
          </span>
          <h2 className="display" data-reveal style={{ '--delay': '0.08s' }}>
            A small crew that treats your yard like the job site it is.
          </h2>
          <p className="lede" data-reveal style={{ '--delay': '0.16s' }}>
            Branching Out Tree Service is a locally owned outfit working out of{' '}
            {addressLine}. No sales team, no subcontracted strangers — the person who
            prices your tree is on the rope when it comes down. We work {site.serviceArea}.
          </p>

          <ul className="about__list" data-reveal style={{ '--delay': '0.24s' }}>
            <li>
              <b>01</b>
              <span>
                <strong>Free, written estimates.</strong> We walk the property, sound the
                trunk and price the job on paper before anything starts.
              </span>
            </li>
            <li>
              <b>02</b>
              <span>
                <strong>Insured, ground-protected work.</strong> Mats on soft turf, drop
                zones roped, full liability and workers’ comp coverage.
              </span>
            </li>
            <li>
              <b>03</b>
              <span>
                <strong>We answer the phone.</strong> Storm at 2 AM? Call{' '}
                <a className="link-underline" href={site.phoneHref}>
                  {site.phone}
                </a>{' '}
                and a truck starts moving.
              </span>
            </li>
          </ul>

          <div style={{ marginTop: '2.4rem' }} data-reveal>
            <a className="btn" href="#services">
              See What We Do
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
