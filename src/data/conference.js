// All site content lives here, taken from "Conference Website-2.pptx".
// Items marked TODO were placeholders in the deck and need real content.

export const conference = {
  title: 'International Conference on Natural Farming - 2026',
  tagline: 'Global Farmer-centric, Science-driven Natural Farming Food System Platform',
  intro:
    'Hosted by RySS’s APCNF and IGGAARL to share, debate, consolidate and advance emerging farmer-led NF practices, models, approaches, and scientific evidence; and explore ways forward.',
  snapshot: [
    { label: 'Dates', value: '4–5 November 2027' },
    { label: 'Venue', value: 'Vijayawada Convention Centre, Andhra Pradesh, India' },
    { label: 'Theme', value: '“Scaling Agroecology for Climate Resilience and Farmer Prosperity”' },
    { label: 'Participants Expected', value: '400+ Delegates from 10+ Countries' },
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

export const callForPapers =
  'One paragraph with T&C, response time, eligibility, etc.' // TODO

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
  { label: 'Abstract Submission Opens', date: '04 July 2026' },
  { label: 'Abstract Submission Deadline', date: '04 September 2026' },
  { label: 'Pre-conference Workshop', date: '01 November 2026' },
]

export const organisers = ['Rythu Sadhikara Samstha (RySS)', 'Government of Andhra Pradesh']
export const coOrganisers = [
  'Potsdam Institute of Climate Impact Research (PIK), Germany',
  'Wageningen University & Research, Netherlands',
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
  { to: '/call-for-papers', label: 'Call for Papers' },
  { to: '/venue', label: 'Venue & Travel' },
  { to: '/contact', label: 'Contact' },
]
