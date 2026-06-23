import type { Newsletter } from '../../types/newsletter'
import { AUTHORS } from '../../types/newsletter'

export const may2026: Newsletter = {
  month: 5,
  year: 2026,
  title: 'Blooming Into Spring',
  media: [
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-05-01'),
      body: '# May Newsletter\n\nSpring is in full bloom and so is our creativity! Here is what is new this month.',
      span: 4, // Full width
    },
    {
      author: AUTHORS.MCKENZIE,
      date: new Date('2026-05-12'),
      body: 'New merch drop alert! Limited edition items now available.',
      image: '/fa-logo.png',
      span: 1, // Quarter width
    },
    {
      author: AUTHORS.ANON_GUEST,
      date: new Date('2026-05-28'),
      body: 'Celebrating our amazing community and all the love you share!',
      span: 1, // Quarter width
    },
  ],
}
