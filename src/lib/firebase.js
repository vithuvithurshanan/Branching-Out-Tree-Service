// Firebase is initialised lazily, well after the page is interactive,
// so it never appears on the critical render path.

const firebaseConfig = {
  apiKey: 'AIzaSyBNAYXDrMn5wSDTgcxx0NALbfisW4w9jow',
  authDomain: 'branching-out-tree.firebaseapp.com',
  projectId: 'branching-out-tree',
  storageBucket: 'branching-out-tree.firebasestorage.app',
  messagingSenderId: '728501079540',
  appId: '1:728501079540:web:3b2066ab49f2916c79bda1',
  measurementId: 'G-G40WFJ7JD9',
}

let analytics = null
let initDone = false

// Queue events that fire before analytics is ready, then flush on init.
const queue = []

async function initFirebase() {
  if (initDone) return
  initDone = true
  try {
    const { initializeApp } = await import('firebase/app')
    const { getAnalytics, isSupported, logEvent } = await import('firebase/analytics')
    const app = initializeApp(firebaseConfig)
    const ok = await isSupported()
    if (!ok) return
    analytics = getAnalytics(app)
    // Flush any events that were queued before init completed
    queue.splice(0).forEach(([name, params]) => {
      try { logEvent(analytics, name, params) } catch { /* ignore */ }
    })
  } catch {
    /* Firebase unavailable — silent fail */
  }
}

// Boot Firebase after the page is interactive but off the critical path:
// first user interaction OR 8 seconds after load, whichever comes first.
if (typeof window !== 'undefined') {
  let booted = false
  const boot = () => {
    if (booted) return
    booted = true
    initFirebase()
  }
  window.addEventListener('load', () => setTimeout(boot, 8000))
  ;['pointerdown', 'scroll', 'keydown', 'touchstart'].forEach((e) =>
    window.addEventListener(e, boot, { once: true, passive: true })
  )
}

/** Safe wrapper — queues the event if analytics isn't ready yet. */
export function track(eventName, params = {}) {
  if (analytics) {
    try {
      // logEvent is already imported by the time analytics is set
      import('firebase/analytics').then(({ logEvent }) => {
        try { logEvent(analytics, eventName, params) } catch { /* ignore */ }
      })
    } catch { /* ignore */ }
  } else if (!initDone) {
    // Queue for later flush
    queue.push([eventName, params])
  }
}

