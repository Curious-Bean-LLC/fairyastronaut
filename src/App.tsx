import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import {
  FaInstagram,
  FaFacebook,
  FaSoundcloud,
  FaYoutube,
  FaTiktok,
  FaSpotify,
} from 'react-icons/fa'
import { SiBandcamp } from 'react-icons/si'
import './App.css'
import Home from './pages/Home'
import Newsletters from './pages/Newsletters'
import Calendar from './pages/Calendar'
import Music from './pages/Music'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className={'flex flex-col items-center bg-yellow-50'}>
      {/* header */}
      <div className='flex flex-wrap space-between items-center justify-center gap-4 w-full p-4 bg-yellow-300'>
        <div className=''>
          <img
            className='h-25'
            src='/fa-logo.png'
            alt='Fairy Astronaut Logo'
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='flex flex-col items-center'>
          {/* nav */}
          <div className='flex items-center justify-center gap-2'>
            <h2
              className={`hover:underline cursor-pointer px-2 py-1 ${location.pathname === '/newsletters' ? 'active-nav' : ''}`}
              onClick={() => navigate('/newsletters')}
            >
              Newsletters
            </h2>
            <h2
              className={`hover:underline cursor-pointer px-2 py-1 ${location.pathname === '/calendar' ? 'active-nav' : ''}`}
              onClick={() => navigate('/calendar')}
            >
              Calendar
            </h2>
            <h2
              className={`hover:underline cursor-pointer px-2 py-1 ${location.pathname === '/music' ? 'active-nav' : ''}`}
              onClick={() => navigate('/music')}
            >
              Music
            </h2>
          </div>
          {/* links */}
          <div className='flex items-center justify-center gap-1'>
            <a
              href='https://www.instagram.com/FAIRYASTRONAUT/'
              target='_blank'
              rel='noopener noreferrer'
              title='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.facebook.com/FAIRYASTRONAUT'
              target='_blank'
              rel='noopener noreferrer'
              title='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              href='https://soundcloud.com/FAIRYASTRONAUT'
              target='_blank'
              rel='noopener noreferrer'
              title='SoundCloud'
            >
              <FaSoundcloud />
            </a>
            <a
              href='https://fairyastronaut.bandcamp.com'
              target='_blank'
              rel='noopener noreferrer'
              title='Bandcamp'
            >
              <SiBandcamp />
            </a>
            <a
              href='https://www.youtube.com/@FAIRYASTRONAUT'
              target='_blank'
              rel='noopener noreferrer'
              title='YouTube'
            >
              <FaYoutube />
            </a>
            <a
              href='https://www.tiktok.com/@FAIRY.ASTRONAUT'
              target='_blank'
              rel='noopener noreferrer'
              title='TikTok'
            >
              <FaTiktok />
            </a>
            <a
              href='https://open.spotify.com/artist/2o2CoR0mS78JbibKCr4q4q?si=8l2_8JLESqmMD3MRs5aUFw'
              target='_blank'
              rel='noopener noreferrer'
              title='Spotify'
            >
              <FaSpotify />
            </a>
            <a
              href='https://gofishtalent.com/talent/fairy-astronaut'
              target='_blank'
              rel='noopener noreferrer'
              title='Booking'
            >
              EPK
            </a>
          </div>
        </div>
      </div>

      <main className='h-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newsletters' element={<Newsletters />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/music' element={<Music />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className='w-full py-6 px-4 bg-red-500'>
        <div className='max-w-4xl mx-auto'>
          {/* Navigation Links */}
          <div className='flex items-center justify-center gap-3 mb-4 text-sm'>
            <span
              className='hover:underline cursor-pointer'
              onClick={() => navigate('/')}
            >
              Home
            </span>
            <span>|</span>
            <span
              className='hover:underline cursor-pointer'
              onClick={() => navigate('/newsletters')}
            >
              Newsletters
            </span>
            <span>|</span>
            <span
              className='hover:underline cursor-pointer'
              onClick={() => navigate('/calendar')}
            >
              Calendar
            </span>
            <span>|</span>
            <span
              className='hover:underline cursor-pointer'
              onClick={() => navigate('/music')}
            >
              Music
            </span>
          </div>

          {/* Contributors */}
          <div className='text-center text-sm space-y-1'>
            <p>ARTISTIC DIRECTOR + FAIRY | McKenzie Van Oss</p>
            <p>
              WEB DEV |{' '}
              <a
                href='https://curiousbean.dev'
                target='_blank'
                rel='noopener noreferrer'
              >
                Curious Bean LLC
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper
