import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Cursor, DotNav, Footer, Header, Loader, ToTop } from './components/Chrome.jsx'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Credits from './pages/Credits.jsx'
import { navLinks } from './data/site.js'
import { track } from './lib/firebase.js'
import {
  useActiveSection,
  useParallaxEngine,
  useRevealEngine,
} from './hooks/useScrollEffects.js'

const SECTION_IDS = navLinks.map((l) => l.id)

/** GA4: page_view per route + phone-tap conversions from anywhere on the page. */
function AnalyticsManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    track('page_view', { page_path: pathname, page_location: window.location.href })
  }, [pathname])

  useEffect(() => {
    const onClick = (e) => {
      const tel = e.target.closest('a[href^="tel:"]')
      if (tel) {
        track('phone_call_click', {
          link_text: tel.textContent.trim().slice(0, 60),
          page_path: window.location.pathname,
        })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}

/** Land at the top on route change, unless the URL carries a #hash. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const active = useActiveSection(SECTION_IDS)

  useParallaxEngine()
  useRevealEngine()

  return (
    <>
      <Loader />
      <Cursor />
      <AnalyticsManager />
      <ScrollManager />
      <Header active={active} />
      {isHome && <DotNav active={active} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/photo-credits" element={<Credits />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      <ToTop />
    </>
  )
}
