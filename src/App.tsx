import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaInstagram, FaFacebook, FaSoundcloud, FaYoutube, FaTiktok, FaSpotify } from 'react-icons/fa'
import { SiBandcamp } from 'react-icons/si'
import './App.css'
import Home from './pages/Home'
import Merch from './pages/Merch'
import Shows from './pages/Shows'
import About from './pages/About'

function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (path: string) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <nav className='navbar'>
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className={`nav-button planet-merch ${location.pathname === '/merch' ? 'active' : ''}`}
          onClick={() => handleNavClick('/merch')}
        >
          <span className="planet-label">Merch</span>
        </button>
        <button 
          className={`nav-button planet-shows ${location.pathname === '/shows' ? 'active' : ''}`}
          onClick={() => handleNavClick('/shows')}
        >
          <span className="planet-label">Shows</span>
        </button>
        <button 
          className={`nav-button planet-about ${location.pathname === '/about' ? 'active' : ''}`}
          onClick={() => handleNavClick('/about')}
        >
          <span className="planet-label">About</span>
        </button>
      </div>
    </nav>
  )
}

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  return (
    <>
      <div className={`header-container ${isHome ? 'home-layout' : 'compact-layout'}`}>
        <img 
          className="logo" 
          src="/fa-logo.png" 
          alt="Fairy Astronaut Logo" 
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <Navigation />
      </div>
      
      <img className="light-gif" src="/r-unscreen.gif" alt="Light effect" />
      <img className="ship-gif" src="/r-2--unscreen.gif" alt="Ship" />
      
      <div className="social-links">
        <a href="https://www.instagram.com/FAIRYASTRONAUT/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/FAIRYASTRONAUT" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebook />
        </a>
        <a href="https://soundcloud.com/FAIRYASTRONAUT" target="_blank" rel="noopener noreferrer" title="SoundCloud">
          <FaSoundcloud />
        </a>
        <a href="https://fairyastronaut.bandcamp.com" target="_blank" rel="noopener noreferrer" title="Bandcamp">
          <SiBandcamp />
        </a>
        <a href="https://www.youtube.com/@FAIRYASTRONAUT" target="_blank" rel="noopener noreferrer" title="YouTube">
          <FaYoutube />
        </a>
        <a href="https://www.tiktok.com/@FAIRY.ASTRONAUT" target="_blank" rel="noopener noreferrer" title="TikTok">
          <FaTiktok />
        </a>
        <a href="https://open.spotify.com/artist/2o2CoR0mS78JbibKCr4q4q?si=8l2_8JLESqmMD3MRs5aUFw" target="_blank" rel="noopener noreferrer" title="Spotify">
          <FaSpotify />
        </a>
      </div>
      
      <main className={`content ${isHome ? 'home-content' : 'nested-content'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/merch' element={<Merch />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/about' element={<About />} />
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
