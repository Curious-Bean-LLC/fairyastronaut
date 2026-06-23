import { useState, useMemo } from 'react'
import { newsletters, getNewsletterShorthand } from '../data/newsletters'
import { getUpcomingDatesForNewsletter } from '../data/upcomingDates'
import type { Newsletter } from '../types/newsletter'
import NewsletterMedia from '../components/NewsletterMedia'

function Newsletters() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter>(
    newsletters[0],
  )

  // Dynamically get upcoming dates for the selected newsletter
  const upcomingDates = useMemo(
    () =>
      getUpcomingDatesForNewsletter(
        selectedNewsletter.month,
        selectedNewsletter.year,
      ),
    [selectedNewsletter.month, selectedNewsletter.year],
  )

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      {/* Header - responsive layout */}
      <div className='mb-8'>
        {/* Mobile: stacked center-aligned, Desktop: space-between row */}
        <div className='flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center'>
          {/* Left side - Logo */}
          <div className='flex justify-start md:w-1/2'>
            <img
              className='w-full h-auto object-contain'
              src='/thefairytimes-logo-removebg.png'
              alt='The Fairy Times Logo'
            />
          </div>

          {/* Right side - Newsletter title and date selector in row */}
          <div className='flex flex-row items-center gap-4 md:w-1/2 md:justify-end'>
            {selectedNewsletter.title && (
              <h2 className='text-xl'>
                {selectedNewsletter.title}
              </h2>
            )}
            
            <div className='relative'>
              <select
                value={`${selectedNewsletter.year}-${selectedNewsletter.month}`}
                onChange={(e) => {
                  const [year, month] = e.target.value.split('-').map(Number)
                  const newsletter = newsletters.find(
                    (n) => n.year === year && n.month === month,
                  )
                  if (newsletter) setSelectedNewsletter(newsletter)
                }}
                className='appearance-none bg-transparent text-base cursor-pointer pr-6 focus:outline-none'
              >
                {newsletters.map((newsletter) => (
                  <option
                    key={`${newsletter.year}-${newsletter.month}`}
                    value={`${newsletter.year}-${newsletter.month}`}
                  >
                    {getNewsletterShorthand(newsletter)}
                  </option>
                ))}
              </select>
              {/* Down arrow */}
              <svg
                className='absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Current Newsletter Display */}
      <div>
        {/* Newsletter Media - Newspaper Column Layout */}
        <div className='flex flex-wrap gap-4'>
          {selectedNewsletter.media.map((mediaItem, index) => (
            <NewsletterMedia key={index} media={mediaItem} />
          ))}
        </div>

        {/* Upcoming Dates Table */}
        {upcomingDates && upcomingDates.length > 0 && (
          <div className='mt-8'>
            <h3 className='text-xl mb-3'>Upcoming Dates</h3>
            <table className='w-full border-collapse border border-yellow-600'>
              <thead>
                <tr>
                  <th className='border border-yellow-600 px-4 py-2 text-left'>
                    Date
                  </th>
                  <th className='border border-yellow-600 px-4 py-2 text-left'>
                    Type
                  </th>
                  <th className='border border-yellow-600 px-4 py-2 text-left'>
                    Event
                  </th>
                  <th className='border border-yellow-600 px-4 py-2 text-left'>
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {upcomingDates.map((event, index) => (
                  <tr key={index} className='hover:bg-yellow-100'>
                    <td className='border border-yellow-600 px-4 py-2'>
                      {event.date.toLocaleDateString()}
                    </td>
                    <td className='border border-yellow-600 px-4 py-2 capitalize'>
                      {event.type}
                    </td>
                    <td className='border border-yellow-600 px-4 py-2'>
                      {event.title}
                    </td>
                    <td className='border border-yellow-600 px-4 py-2'>
                      {event.location || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default Newsletters
