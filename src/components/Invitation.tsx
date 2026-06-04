import React from 'react'
import { WeddingConfig } from '@/types/wedding'

interface InvitationProps {
  config: WeddingConfig
  guestName?: string
}

export default function Invitation({ config, guestName }: InvitationProps) {
  return (
    <section id="invitation" className="bg-cream py-16">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2">Kepada Yth</p>
          <p className="text-gray-600 mb-8">Bapak/Ibu/Saudara/i:</p>
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
            {guestName || 'Nama Tamu Undangan'}
          </h2>
          <p className="text-sm text-gray-500">
            Mohon maaf jika ada kesalahan penulisan nama & gelar
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-sm md:text-base uppercase tracking-widest text-gray-600 mb-4">
            The Wedding of
          </h2>

          <h1 className="text-4xl md:text-5xl font-serif text-navy mb-2">
            {config.couple.brideName.split(' ')[0]}
          </h1>

          <p className="text-gold text-3xl mb-2">&</p>

          <h1 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            {config.couple.groomName.split(' ')[0]}
          </h1>

          <p className="text-lg text-navy mb-8">
            {config.wedding.dayOfWeek}, {config.wedding.ceremonyDate}
          </p>

          {/* Quote */}
          <div className="border-t border-b border-gold py-8 mb-8">
            <p className="text-gray-700 italic leading-relaxed">
              Maha Suci Allah yang telah menciptakan manusia dengan berpasang-pasangan. 
              Dengan memohon Rahmat dan Ridho Allah SWT, kami mengajak Saudara/i hadir 
              merayakan kisah cinta kami
            </p>
          </div>

          {/* CTA */}
          <button className="px-8 py-3 bg-gold text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300">
            SCROLL UNTUK LANJUT
          </button>
        </div>
      </div>
    </section>
  )
}
