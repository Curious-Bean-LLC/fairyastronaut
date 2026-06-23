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
import Game from './pages/Game'
import Music from './pages/Music'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isNewsletter = location.pathname === '/newsletters'

  return (
    <div className='flex flex-col items-center gap-1'>
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
          className={`hover:underline cursor-pointer px-2 py-1 ${location.pathname === '/play' ? 'active-nav' : ''}`}
          onClick={() => navigate('/play')}
        >
          Play Game
        </h2>
        <h2
          className={`hover:underline cursor-pointer px-2 py-1 ${location.pathname === '/music' ? 'active-nav' : ''}`}
          onClick={() => navigate('/music')}
        >
          Music
        </h2>
      </div>
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

      <div>
        <img
          className='logo'
          src={
            isNewsletter ? '/thefairytimes-logo-removebg.png' : '/fa-logo.png'
          }
          alt='Fairy Astronaut Logo'
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <main className='pt-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newsletters' element={<Newsletters />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/play' element={<Game />} />
          <Route path='/music' element={<Music />} />
        </Routes>
      </main>
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
