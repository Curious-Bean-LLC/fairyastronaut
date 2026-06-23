import type { NewsletterMedia as NewsletterMediaType } from '../types/newsletter'

interface NewsletterMediaProps {
  media: NewsletterMediaType
}

function NewsletterMedia({ media }: NewsletterMediaProps) {
  const span = media.span || 2 // Default to half width
  
  // Calculate width based on span (1=25%, 2=50%, 4=100%)
  const widthClass = {
    1: 'w-full md:w-[calc(25%-0.75rem)]',
    2: 'w-full md:w-[calc(50%-0.75rem)]',
    4: 'w-full',
  }[span]

  return (
    <div className={`newsletter-media border border-gray-300 p-4 rounded ${widthClass}`}>
      {media.image && (
        <img
          src={media.image}
          alt='Newsletter media'
          className='max-w-full h-auto mb-2'
        />
      )}

      {media.video && (
        <div className='mb-2'>
          <a
            href={media.video}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'
          >
            Watch Video
          </a>
        </div>
      )}

      {media.body && (
        <div className='mb-2 whitespace-pre-wrap'>{media.body}</div>
      )}

      <div className='flex justify-between items-start mb-2'>
        <span className='font-semibold'>{media.author}</span>
        {media.date && (
          <span className='text-sm text-gray-600'>
            {media.date.toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  )
}

export default NewsletterMedia
