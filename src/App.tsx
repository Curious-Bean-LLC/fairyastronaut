import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Merch from './pages/Merch'
import Shows from './pages/Shows'
import About from './pages/About'

function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className='navbar'>
      <div className='nav-buttons'>
        <button 
          className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button 
          className={`nav-button ${location.pathname === '/merch' ? 'active' : ''}`}
          onClick={() => navigate('/merch')}
        >
          Merch
        </button>
        <button 
          className={`nav-button ${location.pathname === '/shows' ? 'active' : ''}`}
          onClick={() => navigate('/shows')}
        >
          Shows
        </button>
        <button 
          className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}
          onClick={() => navigate('/about')}
        >
          About
        </button>
      </div>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/merch' element={<Merch />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
