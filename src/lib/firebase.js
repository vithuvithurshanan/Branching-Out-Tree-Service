import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics'

// Web config is public by design — security comes from Firebase rules, not this key.
const firebaseConfig = {
  apiKey: 'AIzaSyBNAYXDrMn5wSDTgcxx0NALbfisW4w9jow',
  authDomain: 'branching-out-tree.firebaseapp.com',
  projectId: 'branching-out-tree',
  storageBucket: 'branching-out-tree.firebasestorage.app',
  messagingSenderId: '728501079540',
  appId: '1:728501079540:web:3b2066ab49f2916c79bda1',
  measurementId: 'G-G40WFJ7JD9',
}

export const app = initializeApp(firebaseConfig)

// Analytics is unavailable in some contexts (unsupported browsers, blocked
// cookies, SSR) — resolve it lazily and let track() become a no-op there.
let analytics = null

isSupported()
  .then((ok) => {
    if (ok) analytics = getAnalytics(app)
  })
  .catch(() => {})

/** Safe wrapper — never throws, silently drops events when analytics is off. */
export function track(eventName, params = {}) {
  if (!analytics) return
  try {
    logEvent(analytics, eventName, params)
  } catch {
    /* ignore */
  }
}
