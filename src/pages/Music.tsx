function Music() {
  const trackPath = '/LVL 5 _Fairy Astronaut_Master 1 (1).wav'
  const trackTitle = 'LVL 5'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = trackPath
    link.download = 'Fairy_Astronaut_LVL_5.wav'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <div className='border border-gray-300 p-6 rounded bg-white'>
        <h2 className='text-2xl mb-4' style={{ fontFamily: 'Inconsolata, monospace' }}>{trackTitle}</h2>
        
        {/* Audio Player */}
        <audio
          controls
          className='w-full mb-4'
          style={{ minWidth: '600px', fontFamily: 'Inconsolata, monospace' }}
          preload='metadata'
        >
          <source src={trackPath} type='audio/wav' />
          Your browser does not support the audio element.
        </audio>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className='px-4 py-2 bg-yellow-300 hover:bg-yellow-400 rounded cursor-pointer border border-gray-300'
        >
          Download Track
        </button>
      </div>
    </div>
  )
}

export default Music
