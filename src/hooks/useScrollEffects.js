import { useEffect, useRef, useState } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Drives every [data-parallax] element on the page from a single rAF loop.
 * data-parallax = maximum drift in pixels, applied as the parent crosses the
 * viewport. Positive lags behind the scroll (backdrops), negative leads it
 * (foreground copy). Keep the value below the element's overflow headroom or
 * its edge will pull into view.
 */
export function useParallaxEngine() {
  useEffect(() => {
    if (prefersReduced()) return

    let frame = 0
    let nodes = []

    const collect = () => {
      nodes = Array.from(document.querySelectorAll('[data-parallax]')).map((el) => ({
        el,
        speed: parseFloat(el.dataset.parallax) || 0,
      }))
    }

    const render = () => {
      frame = 0
      const viewportH = window.innerHeight
      for (const { el, speed } of nodes) {
        const rect = el.parentElement.getBoundingClientRect()
        // +1 while below the viewport, 0 centred, -1 once above it.
        const raw = (rect.top + rect.height / 2 - viewportH / 2) / viewportH
        const progress = Math.max(-1, Math.min(1, raw))
        el.style.transform = `translate3d(0, ${(progress * speed).toFixed(2)}px, 0)`
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    collect()
    render()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    // Sections mount/unmount between routes, so re-collect on DOM changes.
    const observer = new MutationObserver(() => {
      collect()
      onScroll()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}

/** Adds .is-visible to every [data-reveal] element once it enters the viewport. */
export function useRevealEngine() {
  useEffect(() => {
    const reveal = (el) => el.classList.add('is-visible')

    if (prefersReduced()) {
      document.querySelectorAll('[data-reveal]').forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    const watch = () =>
      document
        .querySelectorAll('[data-reveal]:not(.is-visible)')
        .forEach((el) => observer.observe(el))

    watch()
    const mutation = new MutationObserver(watch)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])
}

/** Scroll progress 0 → 1 for the top progress bar. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}

/** Which section id currently owns the middle of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const middle = window.innerHeight / 2
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= middle) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return active
}

/** True once the page has scrolled past `offset` pixels. */
export function useScrolledPast(offset = 60) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return past
}

/** Counts from 0 to `target` the first time the element is on screen. */
export function useCountUp(target, duration = 1600) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReduced()) {
      setValue(target)
      return
    }

    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(target * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target, duration])

  return [ref, value]
}
