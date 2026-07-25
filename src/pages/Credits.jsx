import { Link } from 'react-router-dom'

// Attribution for the CC BY placeholder photography. Keep in sync with CREDITS.md.
// Delete this page once every file below is replaced with the company's own photos.
const photos = [
  ['Tree removal operations', 'OregonDOT', 'https://www.flickr.com/photos/28364885@N02/36849923600'],
  ['Tree Trimmer', 'scostello22', 'https://www.flickr.com/photos/23122882@N05/2231213535'],
  [
    'Clearing debris with a stump grinder',
    'NCDOTcommunications',
    'https://www.flickr.com/photos/39320593@N03/8161466261',
  ],
  [
    'Storm Damage — Tree down in the wind',
    'cletch',
    'https://www.flickr.com/photos/26542961@N07/3476461044',
  ],
  [
    'Tree surgeon working in the canopy of a beech',
    'Lasting Spring',
    'https://www.flickr.com/photos/81764994@N05/8353129286',
  ],
  [
    'Coordinating tree removal and utility lines',
    'OregonDOT',
    'https://www.flickr.com/photos/28364885@N02/50494182048',
  ],
  [
    'Chainsaw Tree Climber Service',
    'jacobavanzato',
    'https://www.flickr.com/photos/98915111@N02/16152519186',
  ],
  [
    'Hazard tree removal work on U.S. 20 and OR 126',
    'OregonDOT',
    'https://www.flickr.com/photos/28364885@N02/52054540213',
  ],
  [
    'Tree removal truck',
    'Matthew Paul Argall',
    'https://www.flickr.com/photos/79157069@N03/40552744874',
  ],
]

export default function Credits() {
  return (
    <main className="legal">
      <div className="legal__inner">
        <Link className="legal__back" to="/">
          ← Back to site
        </Link>

        <h1>Photo Credits</h1>
        <p className="legal__dates">Placeholder photography — licensed &amp; attributed</p>

        <p>
          The tree-work photography on this site is licensed stock used while our own job
          photos are being collected. The images below are licensed under{' '}
          <a
            className="link-underline"
            href="https://creativecommons.org/licenses/by/2.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY 2.0
          </a>{' '}
          and have been resized and re-compressed for the web.
        </p>

        <ul>
          {photos.map(([title, author, href]) => (
            <li key={href}>
              <a className="link-underline" href={href} target="_blank" rel="noreferrer">
                {title}
              </a>{' '}
              by {author} — CC BY 2.0
            </li>
          ))}
        </ul>

        <h2>No attribution required</h2>
        <p>
          The About photograph is by Wonderlane (
          <a
            className="link-underline"
            href="https://www.flickr.com/photos/71401718@N00/7352351512"
            target="_blank"
            rel="noreferrer"
          >
            CC0 1.0
          </a>
          ) and the gallery photograph by crazydave174 is public domain (PDM 1.0). Section
          backdrops are from Unsplash, whose licence does not require credit.
        </p>
      </div>
    </main>
  )
}
