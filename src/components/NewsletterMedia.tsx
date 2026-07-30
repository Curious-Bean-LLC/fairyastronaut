import type { NewsletterMedia as NewsletterMediaType } from '../types/newsletter'

interface NewsletterMediaProps {
  media: NewsletterMediaType
  index: number
}

// Helper function to determine title colors based on index
function getTitleColorClasses(index: number): string {
  const remainder = index % 3
  switch (remainder) {
    case 0:
      return 'bg-red-600 text-white'
    case 1:
      return 'bg-blue-600 text-white'
    case 2:
      return 'bg-yellow-400 text-black'
    default:
      return 'bg-blue-600 text-white'
  }
}

function NewsletterMedia({ media, index }: NewsletterMediaProps) {
  const span = media.span || 2 // Default to half width

  // Calculate width based on span (1=25%, 2=50%, 4=100%)
  const widthClass = {
    1: 'w-full md:w-[calc(25%-0.75rem)]',
    2: 'w-full md:w-[calc(50%-0.75rem)]',
    4: 'w-full',
  }[span]

  return (
    // <div className={`newsletter-media border-1 border-black border-dotted p-4 ${widthClass}`}>
    <div className={`newsletter-media ${widthClass}`}>
      {media.title && (
        <h3 className={`text-lg mb-3 p-2 ${getTitleColorClasses(index)}`}>
          {media.title}
        </h3>
      )}

      {media.image && (
        <img
          src={`./src/assets/${media.image}`}
          alt='Newsletter media'
          className='max-w-full h-auto mb-2'
        />
      )}

      {media.video && (
        <div className='mb-2'>
          <iframe
            src={media.video}
            className='w-full h-64 mb-2'
            allowFullScreen
          ></iframe>
        </div>
      )}

      {media.body && (
        <div className='mb-2 whitespace-pre-wrap'>{media.body}</div>
      )}

      <div className='flex justify-between items-start mb-2 px-2 py-1 bg-gray-300'>
        <span className='text-sm'>{media.author}</span>
        {media.date && (
          <span className='text-sm'>{media.date.toLocaleDateString()}</span>
        )}
      </div>
    </div>
  )
}

export default NewsletterMedia
