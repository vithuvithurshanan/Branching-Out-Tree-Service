// Single source of truth for every piece of business information on the site.
// Change it here and it updates the header, footer, contact section and legal pages.

export const site = {
  name: 'Branching Out Tree Service',
  shortName: 'Branching Out',
  tagline: 'Tree Care, Rooted In Craft',
  phone: '585-667-8733',
  phoneHref: 'tel:+15856678733',
  address: {
    street: '259 Walker Rd',
    city: 'Hilton',
    state: 'New York',
    stateShort: 'NY',
    zip: '14468',
  },
  hours: [
    ['Mon – Fri', '7:00 AM – 7:00 PM'],
    ['Saturday', '8:00 AM – 4:00 PM'],
    ['Sunday', 'Emergency calls only'],
  ],
  serviceArea:
    'Hilton, Parma, Greece, Spencerport, Brockport, Hamlin, Webster and the greater Rochester area',
  legal: {
    effectiveDate: 'January 19, 2025',
    lastUpdated: 'July 25, 2026',
  },
}

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.stateShort} ${site.address.zip}`

export const services = [
  {
    id: 'removal',
    number: '01',
    title: 'Tree Removal',
    excerpt:
      'Precision take-downs of hazardous, dead or overcrowding trees — rigged and lowered piece by piece so nothing below it gets touched.',
    points: ['Crane & rigging removals', 'Tight-access takedowns', 'Full debris haul-away'],
    image:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=70',
  },
  {
    id: 'trimming',
    number: '02',
    title: 'Trimming & Pruning',
    excerpt:
      'Structural pruning that opens the canopy, lifts weight off weak unions and keeps limbs clear of your roof, siding and service lines.',
    points: ['Crown thinning & raising', 'Deadwood removal', 'Young tree training'],
    image:
      'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=1600&q=70',
  },
  {
    id: 'stump',
    number: '03',
    title: 'Stump Grinding',
    excerpt:
      'Stumps and surface roots ground below grade, backfilled with grindings or clean topsoil so the lawn closes back over it.',
    points: ['Grinding 6–10" below grade', 'Surface root chasing', 'Seed-ready restoration'],
    image:
      'https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=1600&q=70',
  },
  {
    id: 'storm',
    number: '04',
    title: '24/7 Storm Response',
    excerpt:
      'Split trunks, limbs on the roof, a tree across the driveway — we answer the phone at 3 AM and stabilize the property first.',
    points: ['Emergency limb removal', 'Roof & vehicle extraction', 'Insurance documentation'],
    image:
      'https://images.unsplash.com/photo-1543946602-a0fce8117068?auto=format&fit=crop&w=1600&q=70',
  },
  {
    id: 'health',
    number: '05',
    title: 'Tree Health & Cabling',
    excerpt:
      'Diagnosis of decline, deep-root feeding, and cabling or bracing to hold split leaders together instead of losing the whole tree.',
    points: ['Disease & pest assessment', 'Cabling & bracing', 'Deep-root fertilization'],
    image:
      'https://images.unsplash.com/photo-1508197957336-9a2b0dcbc9f6?auto=format&fit=crop&w=1600&q=70',
  },
  {
    id: 'lot',
    number: '06',
    title: 'Lot & Brush Clearing',
    excerpt:
      'Fence lines, building pads and back acreage cleared of brush, saplings and hedgerow — chipped on site and left rake-clean.',
    points: ['Brush & hedgerow clearing', 'Building pad prep', 'On-site chipping'],
    image:
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=70',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'You Call',
    body: `One ring to ${site.phone}. Tell us what the tree is doing and where it sits — we can usually tell you over the phone whether it is urgent.`,
  },
  {
    number: '02',
    title: 'On-Site Estimate',
    body: 'We walk the property, sound the trunk, look at targets and access, then hand you a written price with no upsell attached to it.',
  },
  {
    number: '03',
    title: 'The Work',
    body: 'Drop zones roped off, mats down on soft turf, climbers in the canopy. Every cut is planned before the saw is started.',
  },
  {
    number: '04',
    title: 'Clean Exit',
    body: 'Chips loaded, ruts raked, driveway blown off. The only sign we were there is the tree that is no longer a problem.',
  },
]

export const stats = [
  { value: 18, suffix: '+', label: 'Years in the canopy' },
  { value: 3400, suffix: '+', label: 'Trees safely removed' },
  { value: 24, suffix: '/7', label: 'Storm response' },
  { value: 100, suffix: '%', label: 'Insured & licensed' },
]

export const reasons = [
  {
    title: 'Fully Insured Crews',
    body: 'Liability and workers’ compensation coverage on every job, with certificates available before we pull into the driveway.',
  },
  {
    title: 'Climbers, Not Guessers',
    body: 'Rope-and-saddle work where a bucket cannot reach, so back-yard trees come down without tearing up the lawn.',
  },
  {
    title: 'Written, Fixed Pricing',
    body: 'The number on the estimate is the number on the invoice. No day-of surprises, no “extra tree” charges.',
  },
  {
    title: 'Local To Hilton',
    body: `Based at ${addressLine} — close enough that an emergency call gets a truck moving, not a callback next week.`,
  },
]

export const gallery = [
  {
    title: 'Silver Maple Removal',
    meta: 'Hilton, NY — 92 ft, over garage',
    image:
      'https://images.unsplash.com/photo-1445052693476-5b1ee27fdaf6?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Canopy Restoration',
    meta: 'Parma, NY — storm-torn oak',
    image:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Fence Line Clearing',
    meta: 'Spencerport, NY — 400 ft hedgerow',
    image:
      'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Stump Field Grinding',
    meta: 'Hamlin, NY — 14 stumps',
    image:
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=70',
  },
]

export const testimonials = [
  {
    quote:
      'A limb came through the porch roof at midnight and they had it off and tarped before sunrise. The written estimate for the rest of the tree came the same morning.',
    name: 'Danielle R.',
    place: 'Hilton, NY',
  },
  {
    quote:
      'Two maples leaning over the garage, dropped in a space I would have said was impossible. Lawn looked untouched when they pulled out.',
    name: 'Mark T.',
    place: 'Greece, NY',
  },
  {
    quote:
      'Priced honestly, showed up when they said, and pruned rather than pushing me into a removal I did not need. That is rare.',
    name: 'Susan K.',
    place: 'Brockport, NY',
  },
]

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'work', label: 'Our Work' },
  { id: 'why', label: 'Why Us' },
  { id: 'voices', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]
