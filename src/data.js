// Single source of truth for every editable value on the launch page.
// Change details here — components read from this file.

export const project = {
  developer: 'Senthur Developers',
  legal: 'Senthur Developers Pvt Ltd',
  tagline: 'Building trust, creating values',
  // wording from the printed launch poster
  eventSub: 'Ceremony',
  premiumLine: 'A premium living… a better future.',
  name: 'Senthur Krishna Enclave',
  badge: 'DTCP Approved Layout',
  invite: 'You are cordially invited to the',
  eventTitle: 'Grand Opening',
  intro: 'A premium living… a better future.',
  closing:
    'Come & explore our premium DTCP-approved plots with attractive launch-day offers. Your gracious presence will make this occasion truly special.',
}

// Approval identifiers from the printed poster and layout flyer.
export const approval = {
  dtcp: 'L.P/DTCP No. 106/2026',
  plan: 'Plan permit no. 126/2026',
}

// Launch-day offers, verbatim from the poster.
export const offers = [
  {
    lead: '₹10,90,000 / cent',
    strike: '₹11,90,000',
    note: 'Launch-day price, first 20 site bookings only',
  },
  {
    lead: '1 gram gold coin free',
    strike: null,
    note: 'Per cent, for registrations done on launch day',
  },
]

// The approved layout, from the plot map flyer.
export const layout = {
  image: '/layout-map.png',
  alt: 'Approved plot layout of Senthur Krishna Enclave: 61 numbered plots along black top roads, with a park at the north east corner',
  facts: [
    '61 plots, 1 to 4 cents',
    'Park inside the layout',
    '9.14 m and 10 m black top roads',
    'Approved layout, L.P/DTCP No. 106/2026',
  ],
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
  // exact site pin, decoded from the QR on the printed invite
  lat: 11.009786,
  lng: 77.13916,
  shareUrl: 'https://maps.app.goo.gl/RkpqjKXutDT5SLFH6',
}

export const mapEmbedUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}&z=16&output=embed`

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`

// Amenity set from the launch poster, plus clear title from the invite.
export const amenities = [
  {
    title: 'DTCP Approved Layout',
    note: 'L.P/DTCP No. 106/2026',
    icon: 'shield',
  },
  {
    title: 'Wide Black Top Roads',
    note: '9.14 m and 10 m tarred roads',
    icon: 'road',
  },
  {
    title: 'Water Facility',
    note: 'Connection ready at the plot',
    icon: 'water',
  },
  {
    title: 'Street Lights',
    note: 'Lit streets, safe evenings',
    icon: 'light',
  },
  {
    title: 'Park & Landscaping',
    note: 'Green space inside the layout',
    icon: 'park',
  },
  {
    title: 'Secured Community',
    note: 'A layout planned to live safe',
    icon: 'lock',
  },
  {
    title: 'Clear Title & Legal Security',
    note: 'Verified, dispute-free documents',
    icon: 'doc',
  },
]

// Order follows the launch poster.
export const contacts = [
  { display: '93616 50470', tel: '+919361650470' },
  { display: '98410 64379', tel: '+919841064379' },
  { display: '95001 95480', tel: '+919500195480' },
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
