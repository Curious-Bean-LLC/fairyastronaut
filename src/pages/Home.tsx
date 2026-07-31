import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FairyAstronautLogo from '../assets/fa-logo.png'

function Home() {
  const navigate = useNavigate()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleEatMeClick = () => {
    setIsAnimating(true)
    // Navigate almost immediately so animations overlap
    setTimeout(() => {
      navigate('/newsletters')
    }, 500)
  }

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-black text-white ${
        isAnimating ? 'page-content-exit' : ''
      }`}
    >
      <div className='flex flex-col items-center justify-center gap-8 py-28 px-10'>
        <img
          src={FairyAstronautLogo}
          alt='Fairy Astronaut Logo'
          className={'w-250 h-auto invert'}
          style={{ filter: 'url(#watery-glitter), url(#effect-on-solid)' }}
        />
      </div>

      <button
        onClick={handleEatMeClick}
        className='absolute bottom-8 right-8 text-xl font-bold cursor-pointer hover:scale-110 transition-transform'
      >
        eat me →
      </button>

      {/* Animated watery glitter filter */}
      <svg
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        }}
        aria-hidden='true'
      >
        <filter id='effect-on-solid'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.8'
            result='noise'
          />

          <feComposite in='noise' in2='SourceGraphic' operator='in' />

          <feBlend in='SourceGraphic' in2='ClippedEffect' mode='multiply' />
        </filter>
        <filter id='watery-glitter'>
          {/* Create animated turbulence for glittery sparkles */}
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.5 0.3'
            numOctaves='4'
            result='sparkles'
          >
            <animate
              attributeName='baseFrequency'
              dur='8s'
              values='0.5 0.3;0.6 0.4;0.5 0.3'
              repeatCount='indefinite'
            />
          </feTurbulence>

          {/* Create warbling displacement map */}
          <feTurbulence
            type='turbulence'
            baseFrequency='0.02'
            numOctaves='2'
            result='warp'
          >
            <animate
              attributeName='baseFrequency'
              dur='6s'
              values='0.02;0.03;0.02'
              repeatCount='indefinite'
            />
          </feTurbulence>

          {/* Apply wavy displacement */}
          <feDisplacementMap
            in='SourceGraphic'
            in2='warp'
            scale='8'
            xChannelSelector='R'
            yChannelSelector='G'
            result='warped'
          />

          {/* Tint with blue color */}
          <feColorMatrix
            in='warped'
            type='matrix'
            values='0.3 0.3 0.8 0 0
                    0.3 0.5 1.0 0 0
                    0.5 0.7 1.2 0 0
                    0   0   0   1 0'
            result='blueWarped'
          />

          {/* Add glittery sparkles */}
          <feBlend
            mode='screen'
            in='blueWarped'
            in2='sparkles'
            result='glittery'
          />

          {/* Boost saturation and brightness */}
          <feComponentTransfer in='glittery'>
            <feFuncR type='linear' slope='1.2' intercept='0.05' />
            <feFuncG type='linear' slope='1.2' intercept='0.05' />
            <feFuncB type='linear' slope='1.4' intercept='0.1' />
          </feComponentTransfer>
        </filter>
      </svg>
    </div>
  )
}

export default Home
