import type { UpcomingDate } from '../types/newsletter'

// All upcoming dates - add new dates here as they're announced
export const allUpcomingDates: UpcomingDate[] = [
  {
    date: new Date('2026-06-01'),
    type: 'release',
    title: 'EP Release - "Celestial Journey"',
  },
  {
    date: new Date('2026-06-15'),
    type: 'performance',
    title: 'Intimate Acoustic Show',
    location: 'Portland, OR',
  },
  {
    date: new Date('2026-07-10'),
    type: 'performance',
    title: 'Galaxy Nights Tour Kickoff',
    location: 'San Francisco, CA',
  },
  {
    date: new Date('2026-07-20'),
    type: 'release',
    title: 'Music Video - "Cosmic Love"',
  },
  {
    date: new Date('2026-08-15'),
    type: 'release',
    title: 'New Single - "Stardust Dreams"',
  },
  {
    date: new Date('2026-08-22'),
    type: 'performance',
    title: 'Summer Cosmic Festival',
    location: 'Los Angeles, CA',
  },
  {
    date: new Date('2026-09-05'),
    type: 'performance',
    title: 'Moonlight Sessions',
    location: 'Brooklyn, NY',
  },
]

/**
 * Get upcoming dates for a given newsletter month/year
 * Returns dates for the current month and the following month only, sorted by date
 */
export const getUpcomingDatesForNewsletter = (
  month: number,
  year: number,
): UpcomingDate[] => {
  const newsletterStartDate = new Date(year, month - 1, 1) // First day of newsletter month
  const endDate = new Date(year, month + 1, 0) // Last day of following month (month+1, day 0)

  return allUpcomingDates
    .filter((event) => event.date >= newsletterStartDate && event.date <= endDate)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}
