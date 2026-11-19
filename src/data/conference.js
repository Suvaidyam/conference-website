// All site content lives here, taken from "Conference Website-2.pptx".
// Items marked TODO were placeholders in the deck and need real content.

export const conference = {
  title: 'International Conference on Natural Farming - 2027',
  tagline: 'Global Farmer-centric, Science-driven Natural Farming Food System Platform',
  intro:
    'Hosted by RySS’s APCNF and IGGAARL to share, debate, consolidate and advance emerging farmer-led NF practices, models, approaches, and scientific evidence; and explore ways forward.',
  snapshot: [
    { label: 'Dates', value: '4–5 November 2027' },
    { label: 'Venue', value: 'Indian Institute of Management, Vishakhapatnam (IIMV)' },
    { label: 'Participants Expected', value: '400+ Delegates from 10+ Countries' },
    { label: 'Theme', value: '“Scaling Agroecology for Climate Resilience and Farmer Prosperity”' },
  ],
}

export const about = {
  organisation: {
    eyebrow: 'About Rythu Sadhikara Samstha',
    heading: 'Punch Line', // TODO: replace with the RySS punch line
    body: 'About RySS’s APCNF and IGGAARL', // TODO: replace with the description
  },
  conference: {
    eyebrow: 'About the Conference',
    heading: 'Building the Future of Natural Farming',
    paragraphs: [
      'APCNF Global Conclave 2026 is envisioned as a premier international platform bringing together researchers, policymakers, farmers, civil society, development agencies, universities, youth innovators, and practitioners working on agroecology and sustainable food systems.',
      'The conference draws inspiration from Andhra Pradesh Community Managed Natural Farming (APCNF), one of the world’s largest agroecology transitions, and the research and innovation ecosystem led by IGGAARL.',
    ],
  },
  stats: [
    { value: '1.8M+', label: 'Farmers Engaged' },
    { value: '50+', label: 'Research Papers Expected' },
  ],
}

export const themes = [
  { id: 1, slug: 'natural-farming-ecosystem', title: 'Natural Farming Ecosystem', subtitle: 'Production, Technology, and Resilience' },
  { id: 2, slug: 'natural-farming-food-system', title: 'Natural Farming Food System', subtitle: 'Health and Value Chains' },
  { id: 3, slug: 'scaling-natural-farming', title: 'Scaling Natural Farming / Extension', subtitle: 'Extension' },
  { id: 4, slug: 'education-human-capital', title: 'Education and Human Capital', subtitle: 'Transdisciplinary Learning and Leadership' },
]

// TODO: replace with real speakers. `photo` may be an image URL.
export const speakers = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: 'Name',
  bio: 'Bio: 2 liners',
  photo: null,
}))
export const speakersIntro = 'International leaders from the …' // TODO: one-liner

// Conference schedule, from "Conf Schedule for Website - Sample.pptx".
// Each row is either a full-width break ({ time, span }) or one cell per
// venue in `halls` order; null means nothing scheduled in that venue.
// TODO: replace hall names and fill each `link` with the viewing URL.
const session = (n) => ({ title: `Session-${n}`, link: '' })
const sessionRow = (first) => [null, ...[0, 1, 2, 3, 4].map((i) => session(first + i))]
const empty = [null, null, null, null, null]

export const schedule = {
  halls: ['Auditorium', 'Hall-1/Name', 'Hall-2/Name', 'Hall-3/Name', 'Hall-4/Name', 'Hall-5/Name'],
  days: [
    {
      label: 'Day 1',
      date: 'Thursday, 4 November 2027',
      shortDate: 'Thu, 4 Nov',
      rows: [
        { time: '9:00', cells: [{ title: 'Inauguration', link: '' }, ...empty] },
        { time: '11:00', cells: sessionRow(1) },
        { time: '12:30', cells: sessionRow(6) },
        { time: '14:00', span: 'Lunch Break' },
        { time: '15:00', cells: sessionRow(11) },
        { time: '17:00', cells: [{ title: 'Plenary' }, ...empty] },
        { time: '19:00', span: 'Gala Dinner' },
      ],
    },
    {
      label: 'Day 2',
      date: 'Friday, 5 November 2027',
      shortDate: 'Fri, 5 Nov',
      rows: [
        { time: '9:00', cells: [{ title: 'Declaration Announcement' }, ...empty] },
        { time: '11:00', cells: sessionRow(16) },
        { time: '12:30', cells: sessionRow(21) },
        { time: '14:00', span: 'Lunch Break' },
        { time: '15:00', cells: sessionRow(26) },
        { time: '17:00', cells: [{ title: 'Conclusion & Closing Ceremony' }, ...empty] },
      ],
    },
  ],
}

export const venue = {
  intro:
    'One paragraph on travel, weather conditions, dos and don’ts, visa requirements for the international participants, etc.', // TODO
  details: [
    { label: 'Hotel Address', value: '' },
    { label: 'Contact', value: '' },
    { label: 'E-mail', value: '' },
    { label: 'Hotel Reservation', value: '' },
  ],
}

export const timeline = [
  { label: 'Curtain Raiser', date: '02 March 2027' },
  { label: 'Conference Inauguration', date: '03 March 2027' },
  { label: 'Signing of NF Declaration', date: '04 March 2027' },
  { label: 'Post Conference Field Visit', date: '05 March 2027' },
]

export const organisers = ['Rythu Sadhikara Samstha (RySS)', 'Government of Andhra Pradesh']
export const coOrganisers = [
  'Potsdam Institute of Climate Impact Research (PIK), Germany',
  'Indian Institute of Management, Vishakhapatnam (IIMV)',
  'International Crops Research Institute for the Semi-Arid Tropics (ICRISAT), India',
  'Thünen Institute, Germany',
  'ICRAF',
]

export const contact = {
  email: 'conference@ryss.ap.gov.in',
  phone: '(+91) 12345 67890',
  address: 'Gorantla, Guntur, Andhra Pradesh, India',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/themes', label: 'Themes' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/schedule', label: 'Conference Schedule' },
  { to: '/venue', label: 'Venue & Travel' },
  { to: '/contact', label: 'Contact' },
]
