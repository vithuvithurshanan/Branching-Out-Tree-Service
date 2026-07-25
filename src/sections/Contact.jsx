import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site, addressLine, services } from '../data/site.js'

const BACKDROP =
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2200&q=70'

const EMPTY = {
  name: '',
  phone: '',
  address: '',
  service: services[0].title,
  message: '',
  consent: false,
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))

  // The business has no email inbox, so the request is handed straight to SMS —
  // swap this for a POST to your CRM / SMS webhook when one is available.
  const smsHref = () => {
    const body = [
      `Estimate request — ${form.service}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      form.message && `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')
    return `sms:+15856678733?&body=${encodeURIComponent(body)}`
  }

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    window.location.href = smsHref()
  }

  return (
    <section className="section" id="contact">
      <div
        className="bg-layer"
        data-parallax="130"
        style={{ backgroundImage: `url(${BACKDROP})`, opacity: 0.55 }}
      />
      <div className="bg-scrim" />

      <div className="wrap">
        <div className="contact">
          <div>
            <span className="eyebrow" data-reveal>
              Free Estimate
            </span>
            <h2 className="display" data-reveal style={{ '--delay': '0.08s' }}>
              Call, or send the details.
            </h2>

            <a className="contact__phone display" href={site.phoneHref} data-reveal>
              {site.phone}
            </a>
            <p className="lede" style={{ fontSize: '0.92rem' }}>
              Phone and text only — we do not run an email inbox.
            </p>

            <ul className="contact__facts" data-reveal>
              <li>
                <b>Address</b>
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
              <li>
                <b>Hours</b>
                <span>
                  {site.hours.map(([day, time]) => (
                    <span key={day} style={{ display: 'block' }}>
                      {day} — {time}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <b>Service Area</b>
                <span>{site.serviceArea}</span>
              </li>
            </ul>
          </div>

          <form className="form" onSubmit={submit} data-reveal="right">
            {sent && (
              <div className="form__sent" role="status">
                Thanks {form.name.split(' ')[0] || 'there'} — your text message is ready to
                send. If it did not open, call{' '}
                <a className="link-underline" href={site.phoneHref}>
                  {site.phone}
                </a>
                .
              </div>
            )}

            <div className="form__row">
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input id="name" required value={form.name} onChange={update('name')} />
              </div>
              <div className="field">
                <label htmlFor="phone">Mobile Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="585-000-0000"
                  value={form.phone}
                  onChange={update('phone')}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="address">Service Address</label>
              <input
                id="address"
                required
                placeholder="Street, town"
                value={form.address}
                onChange={update('address')}
              />
            </div>

            <div className="field">
              <label htmlFor="service">Service Needed</label>
              <select id="service" value={form.service} onChange={update('service')}>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Emergency / Storm Damage">Emergency / Storm Damage</option>
                <option value="Not sure — please advise">Not sure — please advise</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Tell Us About The Tree</label>
              <textarea id="message" value={form.message} onChange={update('message')} />
            </div>

            <label className="consent">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={update('consent')}
              />
              <span>
                By checking this box, I agree to receive recurring automated text messages
                from {site.name} at the mobile number provided, including estimate
                confirmations, appointment reminders, project updates and occasional
                promotional offers. Consent is not a condition of purchase. Message
                frequency varies (approximately 4–8 messages per month). Message and data
                rates may apply. Reply STOP to cancel or HELP for help. See our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
                <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>.
              </span>
            </label>

            <button className="btn btn--solid" type="submit" style={{ width: '100%' }}>
              Request My Free Estimate
            </button>

            <p className="form__note">
              No mobile information will be shared with third parties or affiliates for
              marketing or promotional purposes. You must be 18 or older to submit this
              form.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
