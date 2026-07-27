import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site, addressLine, navLinks } from '../data/site.js'
import { useScrollProgress, useScrolledPast } from '../hooks/useScrollEffects.js'

/* ---------- brand mark ---------- */

export function TreeGlyph({ className = 'brand__glyph' }) {
  return <img className={className} src="/images/logo-96.webp" alt="" aria-hidden="true" width="96" height="96" />
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2A16.5 16.5 0 0 1 4.5 5.5c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ---------- preloader ---------- */

export function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 60)
    return () => clearTimeout(timer)
  }, [])

  if (done) return null

  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader__inner">
        <div className="loader__mark">Branching Out</div>
        <div className="loader__track">
          <div className="loader__fill" style={{ transform: 'scaleX(1)' }} />
        </div>
      </div>
    </div>
  )
}

/* ---------- custom cursor ---------- */

export function Cursor() {
  const ring = useRef(null)
  const dot = useRef(null)
  const [hot, setHot] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const eased = { ...target }
    let raf = 0

    const move = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      const interactive = e.target.closest('a, button, input, textarea, select, [data-hot]')
      setHot(Boolean(interactive))
    }

    const loop = () => {
      eased.x += (target.x - eased.x) * 0.16
      eased.y += (target.y - eased.y) * 0.16
      if (ring.current) {
        ring.current.style.transform = `translate3d(${eased.x}px, ${eased.y}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', move)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={`cursor${hot ? ' is-hot' : ''}`} aria-hidden="true">
      <div ref={ring}>
        <div className="cursor__ring" />
      </div>
      <div ref={dot}>
        <div className="cursor__dot" />
      </div>
    </div>
  )
}

/* ---------- header ---------- */

export function Header({ active }) {
  const stuck = useScrolledPast(70)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  const href = (id) => (onHome ? `#${id}` : `/#${id}`)

  return (
    <>
      <ProgressBar />
      <header className={`header${stuck || !onHome ? ' header--stuck' : ''}`}>
        <Link to="/" className="brand" aria-label={`${site.name} — home`}>
          <TreeGlyph />
          <span>
            <span className="brand__name">Branching Out</span>
            <span className="brand__sub">Tree Service</span>
          </span>
        </Link>

        <div className="header__right">
          <nav className="header__nav" aria-label="Sections">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={href(l.id)}
                className={onHome && active === l.id ? 'is-active' : undefined}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a className="header__phone" href={site.phoneHref}>
            <PhoneIcon />
            {site.phone}
          </a>

          <button
            className={`burger${open ? ' is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`drawer${open ? ' is-open' : ''}`} role="dialog" aria-label="Navigation menu">
        <nav aria-label="Mobile navigation">
          <ul>
            {navLinks.map((l, i) => (
              <li key={l.id}>
                <a
                  href={href(l.id)}
                  style={{ transitionDelay: `${0.06 * i + 0.1}s` }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="drawer__foot">
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            {addressLine}
          </div>
        </nav>
      </div>
    </>
  )
}

function ProgressBar() {
  const progress = useScrollProgress()
  return (
    <div
      className="progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  )
}

/* ---------- dot navigation ---------- */

export function DotNav({ active }) {
  return (
    <nav className="dots" aria-label="Scroll navigation">
      {navLinks.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={`dots__item${active === l.id ? ' is-active' : ''}`}
        >
          <span className="dots__label">{l.label}</span>
          <span className="dots__dot" />
          <span className="sr-only">{l.label}</span>
        </a>
      ))}
    </nav>
  )
}

/* ---------- back to top ---------- */

export function ToTop() {
  const show = useScrolledPast(700)
  return (
    <button
      className={`to-top${show ? ' is-on' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 20V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </button>
  )
}

/* ---------- footer ---------- */

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <Link to="/" className="brand" aria-label={`${site.name} — home`} style={{ marginBottom: '1.2rem' }}>
            <TreeGlyph />
            <span>
              <span className="brand__name">Branching Out</span>
              <span className="brand__sub">Tree Service</span>
            </span>
          </Link>
          <p className="lede" style={{ fontSize: '0.94rem', marginTop: '1.1rem' }}>
            Licensed, insured tree care for {site.serviceArea}. Free on-site estimates,
            24/7 storm response.
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a className="link-underline" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
            <li>{site.address.street}</li>
            <li>
              {site.address.city}, {site.address.stateShort} {site.address.zip}
            </li>
          </ul>
        </div>

        <div>
          <h3>Hours</h3>
          <ul>
            {site.hours.map(([day, time]) => (
              <li key={day}>
                {day} — {time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <nav aria-label="Legal">
          <Link className="link-underline" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="link-underline" to="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>
          <Link className="link-underline" to="/photo-credits">
            Photo Credits
          </Link>
          <a className="link-underline" href={site.phoneHref}>
            Free Estimate
          </a>
        </nav>
      </div>
    </footer>
  )
}
