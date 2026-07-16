import type { Newsletter } from '../../types/newsletter'
import { AUTHORS } from '../../types/newsletter'

export const july2026: Newsletter = {
  month: 7,
  year: 2026,
  title: 'Taking a Cosmic Summer Journey',
  media: [
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-07-01'),
      title: 'Welcome to July!',
      body: '# Welcome to July!\n\nThe cosmic summer continues with stellar new releases and upcoming shows. Thank you for being part of this magical journey through the stars.',
      image: '/fa-1.png',
      span: 2, // Full width hero
    },
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-07-20'),
      title: 'Cactus Club Performance',
      body: 'Fairy Astronaut as a 5-piece band!',
      video: 'https://www.youtube.com/embed/EpC7_M5oxrA?si=OXMEVfAwfsLrACNS',
      span: 2, // Half width
    },
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-07-15'),
      title: 'New Single Release',
      body: 'Excited to announce our new single dropping this month! Stay tuned for the official release date.',
      span: 1, // Half width
    },
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-07-01'),
      title: 'Charles E. Fromage Performance',
      body: "We're thrilled to have performed at Charles E. Fromage this past month for their summer concert series. See a recap of that on the Charles E. Fromage socials! <3",
      image: '/fa-faklandia-may2025.jpg',
      span: 2, // Half width
    },
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-07-20'),
      title: 'Newsletter Debut',
      body: 'We are thrilled to debut our newsletter this month! Stay tuned for exciting updates and exclusive content.',
      span: 1, // Half width
    },
  ],
}
