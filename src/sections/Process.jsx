import { processSteps, stats } from '../data/site.js'
import { useCountUp } from '../hooks/useScrollEffects.js'

const BACKDROP = '/images/process-bg.webp'

function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <b>
        {current.toLocaleString('en-US')}
        {suffix}
      </b>
      <span>{label}</span>
    </div>
  )
}

export default function Process() {
  return (
    <section className="section section--panel" id="process">
      <span className="section__watermark display" data-parallax="90">
        02
      </span>

      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" data-reveal>
            How It Goes
          </span>
          <h2 className="display" data-reveal style={{ '--delay': '0.08s' }}>
            Four steps, no surprises.
          </h2>
        </div>

        <div className="steps">
          {processSteps.map((s, i) => (
            <div className="step" key={s.number} data-reveal style={{ '--delay': `${0.1 * i}s` }}>
              <b>{s.number}</b>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="wrap"
        style={{ marginTop: 'clamp(3rem, 8vw, 5.5rem)', position: 'relative' }}
      >
        <div
          className="bg-layer"
          data-parallax="30"
          style={{ backgroundImage: `url(${BACKDROP})`, opacity: 0.7 }}
        />
        <div className="stats" data-reveal>
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
