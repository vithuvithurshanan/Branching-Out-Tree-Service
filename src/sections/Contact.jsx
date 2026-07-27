import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import GhlForm from '../components/GhlForm.jsx'

const BACKDROP = '/images/contact-bg.webp'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div
        className="bg-layer"
        data-parallax="130"
        style={{ backgroundImage: `url(${BACKDROP})`, opacity: 0.8 }}
      />
      <div className="bg-scrim" />

      <div className="wrap">
        <div className="contact">
          <div className="contact__info">
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
              Phone and text only — we do not run an email inbox. Storm damage is answered
              24/7.
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

          <div data-reveal="right">
            <GhlForm />

            <p className="form__note">
              By submitting this form you agree to receive recurring automated text
              messages from {site.name} at the number provided (approximately 4–8 messages
              per month). Consent is not a condition of purchase. Message and data rates
              may apply. Reply STOP to cancel or HELP for help. No mobile information is
              shared with third parties or affiliates for marketing purposes. See our{' '}
              <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
