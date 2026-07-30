import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import './App.css'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Music from './pages/Music'
import Newsletters from './pages/Newsletters'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div
      className={'flex flex-col items-center h-screen'}
      style={{ filter: 'url(#crumpled-paper)' }}
    >
      <main className='h-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newsletters' element={<Newsletters />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/music' element={<Music />} />
        </Routes>
      </main>

      {/* The hidden SVG filter that generates the physical wrinkles */}
      <svg
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
        aria-hidden='true'
      >
        <filter id='crumpled-paper'>
          {/* Generates a high-frequency fractal noise map for creases */}
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.04'
            numOctaves='5'
            result='noise'
          />
          {/* Convert noise to grayscale */}
          <feColorMatrix
            in='noise'
            type='saturate'
            values='0'
            result='grayNoise'
          />
          {/* Reduce opacity of noise and blend over content */}
          <feComponentTransfer in='grayNoise' result='fadedNoise'>
            <feFuncA type='linear' slope='0.1' />
          </feComponentTransfer>
          {/* Composite over the original content */}
          <feBlend mode='overlay' in='SourceGraphic' in2='fadedNoise' />
        </filter>
      </svg>
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
