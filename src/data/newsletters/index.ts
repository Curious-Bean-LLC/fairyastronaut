import type { Newsletter } from '../../types/newsletter'

export * from './may-2026'
export * from './june-2026'
export * from './july-2026'

import { july2026 } from './july-2026'
import { june2026 } from './june-2026'
import { may2026 } from './may-2026'

// Newsletter index - add new newsletters here in chronological order (newest first)
export const newsletters: Newsletter[] = [july2026, june2026, may2026]

// Helper function to get month name
export const getMonthName = (month: number): string => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return monthNames[month - 1] || ''
}

// Helper function to format newsletter date shorthand for listing
export const getNewsletterShorthand = (newsletter: Newsletter): string => {
  return `${getMonthName(newsletter.month)} ${newsletter.year}`
}
