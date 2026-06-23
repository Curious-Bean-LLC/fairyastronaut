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
      body: '# Welcome to July!\n\nThe cosmic summer continues with stellar new releases and upcoming shows. Thank you for being part of this magical journey through the stars.',
      image: '/fa-logo.png',
      span: 4, // Full width hero
    },
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-07-15'),
      body: 'Excited to announce our new single dropping this month! Stay tuned for the official release date.',
      span: 2, // Half width
    },
    {
      author: AUTHORS.BRADY,
      date: new Date('2026-07-20'),
      body: 'Fan spotlight: Amazing cover performances from our community this month!',
      video: 'https://example.com/video1',
      span: 2, // Half width
    },
  ],
}
