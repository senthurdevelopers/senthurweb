// Single source of truth for every editable value on the launch page.
// Change details here — components read from this file.

export const project = {
  developer: 'Senthur Developers',
  legal: 'Senthur Developers Pvt Ltd',
  tagline: 'Building trust, creating values',
  name: 'Senthur Krishna Enclave',
  badge: 'DTCP Approved Layout',
  invite: 'You are cordially invited to the',
  eventTitle: 'Grand Launch',
  intro:
    'Be a part of a new beginning and discover a lifestyle of comfort, convenience & prosperity.',
  closing:
    'Come & explore our premium DTCP-approved plots with attractive launch-day offers. Your gracious presence will make this occasion truly special.',
}

export const event = {
  // Launch: 09.08.2026, Sunday, 10:00 AM IST
  isoDate: '2026-08-09T10:00:00+05:30',
  dateLabel: '09.08.2026',
  dayLabel: 'Sunday',
  timeLabel: '10:00 AM',
  timeNote: 'Onwards',
  venue: 'Senthur Krishna Enclave',
  extra: 'Followed by Lunch',
}

export const location = {
  line1: 'Senthur Krishna Enclave,',
  line2: 'Kalangal, Sulur,',
  line3: 'Coimbatore 641 402.',
  query: 'Senthur Krishna Enclave, Kalangal, Sulur, Coimbatore 641402',
}

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  location.query,
)}&output=embed`

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  location.query,
)}`

export const amenities = [
  {
    title: 'DTCP Approved',
    note: 'Government-sanctioned layout',
    icon: 'shield',
  },
  {
    title: 'Well Developed Black Top Roads',
    note: 'Wide, tarred internal roads',
    icon: 'road',
  },
  {
    title: 'Potable Water Facility',
    note: 'Clean water connection ready',
    icon: 'water',
  },
  {
    title: 'Street Light Facility',
    note: 'Lit streets, safe evenings',
    icon: 'light',
  },
  {
    title: 'Park & Open Spaces',
    note: 'Green breathing room for families',
    icon: 'park',
  },
  {
    title: 'Clear Title & Legal Security',
    note: 'Verified, dispute-free documents',
    icon: 'doc',
  },
]

export const contacts = [
  { display: '95001 95480', tel: '+919500195480' },
  { display: '98410 64379', tel: '+919841064379' },
  { display: '94433 26039', tel: '+919443326039' },
]

export const office = {
  lines: [
    'No. 16, 2nd Floor,',
    'Bharathi Colony Main Road,',
    'Peelamedu, Coimbatore 641 004.',
  ],
  email: 'office@senthurdevelopers.com',
}

export const company = {
  since: '2018',
  what: 'Land aggregators, promoters and developers.',
  about:
    'Senthur Developers has worked across Coimbatore since 2018, taking land from acquisition through approval to a layout a family can build on. We prioritise quality, timely delivery and customer satisfaction, and keep innovating on how we do it, building on our record in both residential development and commercial property.',
  vision:
    "To make every person's dream of owning land a reality, in a safe and healthy environment.",
  mission:
    'To help families thrive by providing safe, accessible and affordable plots.',
  purpose:
    'To delight customers at every step, with constant updates and a process kept as transparent as possible.',
  values: ['Innovation', 'Affordability', 'Passion', 'Growth', 'Fairness'],
  projects: [
    { place: 'Arasur', note: 'Delivered' },
    { place: 'Sulur', note: 'Current · Senthur Krishna Enclave' },
    { place: 'Erode', note: 'Delivered' },
  ],
}

// Every enquiry on the site is delivered here. Change this one value to move
// all forms and WhatsApp buttons to a different number.
export const whatsappNumber = '919500195480'

export const homeNav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
