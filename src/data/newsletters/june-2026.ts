import type { Newsletter } from '../../types/newsletter'
import { AUTHORS } from '../../types/newsletter'

export const june2026: Newsletter = {
  month: 6,
  year: 2026,
  title: 'Summer Sounds & Stellar Vibes',
  media: [
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-06-01'),
      body: '# June Edition\n\nSummer vibes are here! Check out what we have been working on this month.',
      image: '/fa-logo.png',
      span: 2, // Half width
    },
    {
      author: AUTHORS.BRADY,
      date: new Date('2026-06-10'),
      body: 'Guest post: Behind the scenes of our latest music video production.',
      span: 2, // Half width
    },
    {
      author: AUTHORS.BRADY,
      date: new Date('2026-06-25'),
      body: 'Thank you all for the incredible turnout at our June shows!',
      image: '/fa-logo.png',
      span: 4, // Full width
    },
  ],
}
