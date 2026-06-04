import React from 'react'
import { WeddingConfig } from '@/types/wedding'

interface QuoteProps {
  config: WeddingConfig
}

export default function Quote({ config }: QuoteProps) {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={config.images.quoteBg}
          alt="Quote Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <p className="text-5xl text-gold font-serif">"</p>
        </div>

        <p className="text-white text-lg md:text-xl leading-relaxed mb-8 italic">
          {config.quote.text}
        </p>

        <p className="text-gold text-lg font-semibold">
          {config.quote.reference}
        </p>
      </div>
    </section>
  )
}
