import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      Catch our latest newsletter!
      <div className='flex flex-col items-center justify-center gap-2 border-2 border-black p-2'>
        <img
          className='logo'
          src={'/thefairytimes-logo-removebg.png'}
          alt='Fairy Astronaut Logo'
          onClick={() => navigate('/newsletters')}
          style={{ cursor: 'pointer' }}
        />
        June 2026
      </div>
    </div>
  )
}

export default Home
