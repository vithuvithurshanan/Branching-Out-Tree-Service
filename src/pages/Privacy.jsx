import { Link } from 'react-router-dom'
import { site, addressLine } from '../data/site.js'

export default function Privacy() {
  return (
    <main className="legal">
      <div className="legal__inner">
        <Link className="legal__back" to="/">
          ← Back to site
        </Link>

        <h1>Privacy Policy</h1>
        <p className="legal__dates">
          Effective Date: {site.legal.effectiveDate} &nbsp;|&nbsp; Last Updated:{' '}
          {site.legal.lastUpdated}
        </p>

        <p>
          {site.name} (“we,” “our,” or “us”) is committed to protecting your privacy and
          personal information. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your data in compliance with applicable U.S. data protection laws,
          including the California Consumer Privacy Act (CCPA) and the General Data
          Protection Regulation (GDPR) where applicable.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect the following categories of personal information when you contact
          us, request a quote, submit a web form, or use our services:
        </p>
        <ul>
          <li>Full name</li>
          <li>Mailing or service address</li>
          <li>Mobile phone number</li>
          <li>Service request details and project descriptions</li>
          <li>Communication history and preferences</li>
        </ul>
        <p>
          We do not operate a public email inbox. All customer communication takes place by
          phone call or text message at {site.phone}.
        </p>

        <h2>2. SMS / Text Message Communications</h2>

        <h3>2a. How We Collect Your Mobile Number</h3>
        <p>
          We collect your mobile phone number when you voluntarily provide it through our
          website contact forms, phone calls, or other direct communication channels. By
          providing your mobile number and checking the SMS consent checkbox on our forms,
          you expressly consent to receive SMS (text message) communications from{' '}
          {site.name}.
        </p>

        <h3>2b. Types of Messages We Send</h3>
        <p>
          By opting in, you may receive recurring automated text messages from {site.name},
          including:
        </p>
        <ul>
          <li>Free estimate confirmations and appointment reminders</li>
          <li>Project status updates and scheduling notifications</li>
          <li>Customer support and follow-up communications</li>
          <li>
            Promotional offers and seasonal service announcements related to our tree care
            services
          </li>
        </ul>

        <h3>2c. Message Frequency</h3>
        <p>
          Message frequency varies based on your interactions with us, ongoing service
          needs, and active promotions. You may receive up to 4–8 messages per month
          depending on your service activity.
        </p>

        <h3>2d. Message &amp; Data Rates</h3>
        <p>
          Message and data rates may apply. Charges are determined by your mobile carrier
          and your individual service plan. {site.name} is not responsible for any charges
          incurred from your mobile carrier.
        </p>

        <h3>2e. How to Opt Out (STOP)</h3>
        <p>
          You may cancel SMS messages at any time by replying <strong>STOP</strong> to any
          text message you receive from us. After opting out, you will receive one final
          confirmation message and will no longer receive SMS communications from{' '}
          {site.name} unless you re-enroll.
        </p>

        <h3>2f. How to Get Help (HELP)</h3>
        <p>
          For help with our SMS program, reply <strong>HELP</strong> to any message, or
          contact us directly at:
        </p>
        <div className="legal__box">
          <p>
            Phone / Text:{' '}
            <a className="link-underline" href={site.phoneHref}>
              {site.phone}
            </a>
          </p>
        </div>

        <h2>3. Mobile Information &amp; SMS Consent — No Third-Party Sharing</h2>
        <p>
          No mobile information (including your mobile phone number and SMS opt-in consent
          data) will be shared with third parties or affiliates for marketing or
          promotional purposes.
        </p>
        <p>
          All other categories of personal data exclude text messaging originator opt-in
          data and consent; this information will not be shared with any third parties
          under any circumstances.
        </p>

        <h2>4. How We Use Your Information</h2>
        <p>We use the personal information we collect to:</p>
        <ul>
          <li>Provide and manage tree care services</li>
          <li>Respond to inquiries and service requests</li>
          <li>Schedule appointments and send reminders</li>
          <li>Send promotional communications (with your consent)</li>
          <li>Improve our website and service quality</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar technologies to improve website functionality, analyze
          traffic, and enhance user experience. Cookies do not store sensitive personal
          information. By continuing to use this website, you consent to our use of cookies
          in accordance with this policy.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical security measures
          to protect your personal data against unauthorized access, disclosure,
          alteration, or destruction. However, no method of electronic transmission or
          storage is 100% secure.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy, or as required by applicable law. When
          your data is no longer needed, we securely delete or anonymize it.
        </p>

        <h2>8. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have the following rights regarding your
          personal data:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal data we hold about you
          </li>
          <li>
            <strong>Correction:</strong> Request correction of inaccurate personal data
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal data (including
            your mobile number and SMS consent record)
          </li>
          <li>
            <strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time
          </li>
          <li>
            <strong>Opt-Out of Marketing:</strong> Contact us directly to be removed from
            marketing lists
          </li>
        </ul>
        <p>
          To exercise any of these rights, call or text us at{' '}
          <a className="link-underline" href={site.phoneHref}>
            {site.phone}
          </a>
          , or write to us at {addressLine}.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated
          policy on this page with a revised “Last Updated” date. Continued use of our
          website or services after any changes constitutes your acceptance of the updated
          policy.
        </p>

        <div className="legal__contact">
          <h2>10. Contact Information</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <p>
            <strong>Company:</strong> {site.name}
            <br />
            <strong>Address:</strong> {addressLine}
            <br />
            <strong>Phone / Text:</strong>{' '}
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
