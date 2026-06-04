import React, { useRef, useState, useEffect } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const play = () => {
      audio.play().then(() => {
        setIsPlaying(true)
        setShowButton(true)
      }).catch(() => {
        setShowButton(true)
      })
    }

    const handleInteraction = () => {
      play()
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }

    audio.play().then(() => {
      setIsPlaying(true)
      setShowButton(true)
    }).catch(() => {
      setShowButton(true)
      document.addEventListener('click', handleInteraction)
      document.addEventListener('touchstart', handleInteraction)
    })

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />
      {showButton && (
        <button
          onClick={togglePlay}
          className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center hover:bg-black/40 transition-all duration-300 animate-fadeInUp`}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="white">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      )}
    </>
  )
}
