import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Music from './pages/Music'
import Newsletters from './pages/Newsletters'

function App() {
  return (
    <div className='w-full h-full'>
      <main className='w-full h-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newsletters' element={<Newsletters />} />
          <Route path='/calendar' element={<Calendar />} />
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
