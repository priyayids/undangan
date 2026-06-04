import React from 'react'
import { WeddingConfig } from '@/types/wedding'

interface BrideGroomProps {
  config: WeddingConfig
}

export default function BrideGroom({ config }: BrideGroomProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-navy mb-16">
          The Bride & Groom
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bride */}
          <div className="text-center animate-slideInLeft">
            <div className="mb-8 overflow-hidden rounded-lg h-80 md:h-96">
              <img
                src={config.images.bride}
                alt={config.couple.brideName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-navy mb-2">
              The Bride
            </h3>

            <h4 className="text-2xl md:text-3xl font-serif text-gold mb-6">
              {config.couple.brideName}
            </h4>

            <p className="text-gray-600 mb-4">Putri Pertama dari</p>

            <p className="text-lg text-navy mb-4">
              {config.couple.brideParents.father} dan {config.couple.brideParents.mother}
            </p>

            <p className="text-gold font-medium">@{config.couple.brideAlias}</p>
          </div>

          {/* Groom */}
          <div className="text-center animate-slideInRight">
            <div className="mb-8 overflow-hidden rounded-lg h-80 md:h-96">
              <img
                src={config.images.groom}
                alt={config.couple.groomName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-navy mb-2">
              The Groom
            </h3>

            <h4 className="text-2xl md:text-3xl font-serif text-gold mb-6">
              {config.couple.groomName}
            </h4>

            <p className="text-gray-600 mb-4">Putra Pertama dari</p>

            <p className="text-lg text-navy mb-4">
              {config.couple.groomParents.father} dan {config.couple.groomParents.mother}
            </p>

            <p className="text-gold font-medium">@{config.couple.groomAlias}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
