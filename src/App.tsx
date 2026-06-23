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

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  return (
    <>
      <div
        className={`header-container ${isHome ? 'home-layout' : 'compact-layout'}`}
      >
        <img
          className='logo'
          src='/fa-logo.png'
          alt='Fairy Astronaut Logo'
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div className='social-links'>
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

      <main className={`content ${isHome ? 'home-content' : 'nested-content'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </>
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
