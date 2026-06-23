import { useMemo } from 'react'
import { allUpcomingDates } from '../data/upcomingDates'
import type { UpcomingDate } from '../types/newsletter'

function Calendar() {
  // Filter to only future dates and group by month
  const groupedDates = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Filter future dates
    const futureDates = allUpcomingDates
      .filter((event) => event.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime())

    // Group by month/year
    const groups: { [key: string]: UpcomingDate[] } = {}
    futureDates.forEach((event) => {
      const monthYear = event.date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
      if (!groups[monthYear]) {
        groups[monthYear] = []
      }
      groups[monthYear].push(event)
    })

    // Convert to array format
    return Object.entries(groups).map(([monthYear, dates]) => ({
      monthYear,
      dates,
    }))
  }, [])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  if (groupedDates.length === 0) {
    return (
      <div className='p-4 max-w-4xl mx-auto'>
        <h1 className='text-3xl mb-6'>Calendar</h1>
        <p className='text-gray-600'>No upcoming dates at this time.</p>
      </div>
    )
  }

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      {groupedDates.map((group) => (
        <div key={group.monthYear} className='mb-8'>
          <h2 className='text-2xl mb-4 border-b border-gray-300 pb-2'>
            {group.monthYear}
          </h2>

          <div className='space-y-4'>
            {group.dates.map((event, index) => (
              <div
                key={index}
                className='border border-gray-300 p-4 rounded bg-white'
              >
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-lg font-semibold'>{event.title}</h3>
                  <span className='text-sm px-2 py-1 bg-yellow-200 rounded'>
                    {event.type}
                  </span>
                </div>
                <p className='text-gray-700 mb-1'>{formatDate(event.date)}</p>
                {event.location && (
                  <p className='text-gray-600 text-sm'>📍 {event.location}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Calendar
