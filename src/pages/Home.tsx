import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  FaInstagram,
  FaFacebook,
  FaSoundcloud,
  FaYoutube,
  FaTiktok,
  FaSpotify,
} from 'react-icons/fa'
import { SiBandcamp } from 'react-icons/si'
import FairyAstronautLogo from '../assets/fa-logo.png'

function Home() {
  const navigate = useNavigate()
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSocialDialog, setShowSocialDialog] = useState(false)

  const handleEatMeClick = () => {
    setIsAnimating(true)
    // Navigate almost immediately so animations overlap
    setTimeout(() => {
      navigate('/newsletters')
    }, 500)
  }

  const socialLinks = [
    { icon: FaInstagram, url: 'https://instagram.com/fairyastronaut', label: 'Instagram' },
    { icon: FaFacebook, url: 'https://facebook.com/fairyastronaut', label: 'Facebook' },
    { icon: FaSoundcloud, url: 'https://soundcloud.com/fairyastronaut', label: 'SoundCloud' },
    { icon: FaYoutube, url: 'https://youtube.com/@fairyastronaut', label: 'YouTube' },
    { icon: FaTiktok, url: 'https://tiktok.com/@fairy.astronaut', label: 'TikTok' },
    { icon: FaSpotify, url: 'https://open.spotify.com/artist/2o2CoR0mS78JbibKCr4q4q?si=DGyw_99fQmWzusRd5lGhwA', label: 'Spotify' },
    { icon: SiBandcamp, url: 'https://fairyastronaut.bandcamp.com', label: 'Bandcamp' },
  ]
// https://open.spotify.com/artist/2o2CoR0mS78JbibKCr4q4q?si=DGyw_99fQmWzusRd5lGhwA
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 w-screen h-full relative ${
        isAnimating ? 'page-content-exit' : ''
      }`}
    >
      <div className='flex flex-col items-center justify-center gap-8 py-28'>
        <img
          src={FairyAstronautLogo}
          alt='Fairy Astronaut Logo'
          className='w-250 h-auto'
        />
      </div>
      
      <button
        onClick={() => setShowSocialDialog(!showSocialDialog)}
        className='absolute top-8 right-8 text-xl font-bold cursor-pointer hover:scale-110 transition-transform'
      >
        find me →
      </button>

      {showSocialDialog && (
        <div className='absolute top-20 right-8 bg-white border-2 border-black p-4 shadow-lg rounded-lg z-50'>
          <div className='flex flex-col gap-3'>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 hover:scale-105 transition-transform text-black'
              >
                <social.icon size={24} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleEatMeClick}
        className='absolute bottom-8 right-8 text-xl font-bold cursor-pointer hover:scale-110 transition-transform'
      >
        eat me →
      </button>
    </div>
  )
}

export default Home
