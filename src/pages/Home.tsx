import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div
      className={
        'flex flex-col items-center justify-center gap-2 w-screen h-screen bg-cover' +
        ` bg-[url('/ep-cover.png')]`
      }
    >
      <div
        className='flex flex-col items-center justify-center bg-yellow-100 border-15 border-red-500 outline-20 outline-blue-600'
        onClick={() => navigate('/newsletters')}
        style={{ cursor: 'pointer' }}
      >
        <div className='pt-4'>
          <span>Read the latest newsletter</span>
        </div>
        <img
          className='h-25 pt-2'
          src={'/thefairytimes-logo-removebg.png'}
          alt='Fairy Astronaut Logo'
        />
        <div className='flex items-center justify-center gap-4 px-4 py-2'>
          <div className='border-1 border-black w-30 h-15'></div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='border-b-1 border-black w-30'></div>
            <div className='border-b-1 border-black w-30'></div>
            <div className='border-b-1 border-black w-30'></div>
            <div className='border-b-1 border-black w-30'></div>
            <div className='border-b-1 border-black w-30'></div>
            <div className='border-b-1 border-black w-30'></div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-4 px-4 py-2'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='border-b-1 border-black w-64'></div>
            <div className='border-b-1 border-black w-64'></div>
            <div className='border-b-1 border-black w-64'></div>
            <div className='border-b-1 border-black w-64'></div>
          </div>
        </div>
        <div className='py-4'>
          <span>July 2026</span>
        </div>
      </div>
    </div>
  )
}

export default Home
