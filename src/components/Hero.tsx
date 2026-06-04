import React from 'react'
import { WeddingConfig } from '@/types/wedding'

interface HeroProps {
  config: WeddingConfig
  guestName?: string
}

export default function Hero({ config, guestName }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={config.images.hero}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fadeInUp">
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-light tracking-widest mb-4">
            THE WEDDING OF
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-2">
            {config.couple.brideName.split(' ')[0]}
            <br />
            <span className="text-gold">&</span>
            <br />
            {config.couple.groomName.split(' ')[0]}
          </h1>
        </div>

        <p className="text-xl md:text-2xl font-light mb-4">
          {config.wedding.dayOfWeek}, {config.wedding.ceremonyDate.split('-').reverse().join('.')}
        </p>

        {guestName && (
          <p className="text-base md:text-lg font-light tracking-wider mb-6 text-gold">
            Kepada Yth. {guestName}
          </p>
        )}

        <button
          onClick={() => {
            document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-navy transition-all duration-300"
        >
          BUKA UNDANGAN
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white text-2xl font-light leading-none">⌄</span>
          <span className="text-white text-2xl font-light leading-none">⌄</span>
        </div>
      </div>
    </section>
  )
}
