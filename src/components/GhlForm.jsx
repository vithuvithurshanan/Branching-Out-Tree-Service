import { useEffect, useRef, useState } from 'react'

const FORM_ID = 'i2dbH5TnnTq6NlobO3Qy'
const FORM_SRC = `https://link.kdlead.com/widget/form/${FORM_ID}`
const EMBED_SCRIPT = 'https://link.kdlead.com/js/form_embed.js'
const INITIAL_HEIGHT = 901

/**
 * GoHighLevel inline form embed.
 *
 * form_embed.js posts height updates back to the parent and rewrites the
 * iframe's inline height, so we only seed a sensible starting height here to
 * stop the section from jumping while the form loads.
 */
export default function GhlForm() {
  const [loaded, setLoaded] = useState(false)
  const frame = useRef(null)

  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return
    const script = document.createElement('script')
    script.src = EMBED_SCRIPT
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className={`ghl${loaded ? ' is-loaded' : ''}`}>
      <div className="ghl__pending" aria-hidden={loaded}>
        Loading estimate form…
      </div>
      <iframe
        ref={frame}
        src={FORM_SRC}
        id={`inline-${FORM_ID}`}
        title="Branching Out Tree Service"
        style={{
          width: '100%',
          height: `${INITIAL_HEIGHT}px`,
          border: 'none',
          borderRadius: '8px',
        }}
        onLoad={() => setLoaded(true)}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Branching Out Tree Service"
        data-height={INITIAL_HEIGHT}
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
      />
    </div>
  )
}
