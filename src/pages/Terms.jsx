import { Link } from 'react-router-dom'
import { site, addressLine } from '../data/site.js'

export default function Terms() {
  return (
    <main className="legal">
      <div className="legal__inner">
        <Link className="legal__back" to="/">
          ← Back to site
        </Link>

        <h1>Terms &amp; Conditions</h1>
        <p className="legal__dates">
          Effective Date: {site.legal.effectiveDate} &nbsp;|&nbsp; Last Updated:{' '}
          {site.legal.lastUpdated}
        </p>

        <p>
          Welcome to {site.name}. By accessing this website or using our services, you agree
          to be bound by these Terms and Conditions. If you do not agree with any part of
          these terms, please do not use our website or services.
        </p>

        <h2>1. Business Identity</h2>
        <p>
          These Terms and Conditions govern your use of the services provided by{' '}
          {site.name}, located at {addressLine}. Contact:{' '}
          <a className="link-underline" href={site.phoneHref}>
            {site.phone}
          </a>{' '}
          (phone and text). We do not operate a public email inbox.
        </p>

        <h2>2. Age Requirement (18+)</h2>
        <p>
          By using this website or enrolling in our services, including SMS messaging, you
          confirm that you are at least 18 years of age. Our SMS program is not directed to
          individuals under 18.
        </p>

        <h2>3. Terminology</h2>
        <p>
          “Client,” “You,” and “Your” refers to the user of this website. “The Company,”
          “We,” “Our,” and “Us” refers to {site.name}.
        </p>

        <h2>4. SMS Messaging Terms of Service</h2>

        <h3>4a. Program Description &amp; Message Types</h3>
        <p>
          By providing your phone number and checking the SMS consent checkbox on our
          contact forms, you agree to receive recurring automated text messages from{' '}
          {site.name}. Messages may include:
        </p>
        <ul>
          <li>Free estimate confirmations and scheduling notifications</li>
          <li>Appointment reminders and project status updates</li>
          <li>Customer support and service follow-up communications</li>
          <li>
            Promotional offers and seasonal announcements related to our tree care services
          </li>
        </ul>

        <h3>4b. Message Frequency</h3>
        <p>
          Message frequency varies based on your service activity and interactions with us.
          You may receive up to 4–8 messages per month. Frequency may increase during active
          service periods.
        </p>

        <h3>4c. Message &amp; Data Rates</h3>
        <p>
          Message and data rates may apply for any messages sent to you from us and to us
          from you. Charges are determined by your mobile carrier and your individual
          service plan. {site.name} is not responsible for any carrier charges.
        </p>

        <h3>4d. How to Opt Out (STOP)</h3>
        <p>
          You can opt out of receiving SMS messages at any time by replying{' '}
          <strong>STOP</strong> to any message we send. After opting out, you will receive a
          one-time confirmation message and will no longer receive SMS messages from us
          unless you re-enroll.
        </p>

        <h3>4e. How to Get Help (HELP)</h3>
        <p>
          For help with our SMS program, reply <strong>HELP</strong> to any message or
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

        <h3>4f. Carrier Liability Disclaimer</h3>
        <p>
          Mobile carriers are not liable for delayed or undelivered messages. {site.name}{' '}
          cannot guarantee delivery of SMS messages. Delivery of information through SMS may
          be subject to your mobile carrier’s capability and coverage area.
        </p>

        <h3>4g. Supported Carriers</h3>
        <p>
          Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T,
          Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.
        </p>

        <h2>5. Cookies</h2>
        <p>
          We use cookies in accordance with our{' '}
          <Link className="link-underline" to="/privacy-policy">
            Privacy Policy
          </Link>{' '}
          to improve user experience and website functionality.
        </p>

        <h2>6. Intellectual Property &amp; License</h2>
        <p>
          Unless otherwise stated, {site.name} owns the intellectual property rights for all
          content on this website. You may not copy, reproduce, republish, sell, or
          redistribute any material without prior written permission.
        </p>

        <h2>7. Comments &amp; User Content</h2>
        <p>
          {site.name} reserves the right to monitor and remove any comments or
          user-generated content on our platforms that are inappropriate, offensive, or
          violate these terms.
        </p>

        <h2>8. Content Liability</h2>
        <p>
          We are not responsible for content that appears on external websites linking to
          us. You agree to defend and protect {site.name} against any claims arising from
          your website or digital properties.
        </p>

        <h2>9. Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, {site.name} excludes all
          warranties, representations, and conditions relating to our website and services.
          We are not liable for any loss or damage (including, without limitation, damage
          for loss of business, profits, or revenue) arising from the use of our website or
          services.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions at any time. Changes
          will be posted on this page with a revised “Last Updated” date. Continued use of
          our website or services constitutes acceptance of the updated terms.
        </p>

        <div className="legal__contact">
          <h2>11. Contact Information</h2>
          <p>For questions about these Terms and Conditions, please contact us:</p>
          <p>
            <strong>Company:</strong> {site.name}
            <br />
            <strong>Address:</strong> {addressLine}
            <br />
            <strong>Phone / Text:</strong> <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
