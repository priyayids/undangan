import React from 'react'
import { WeddingConfig } from '@/types/wedding'

interface FooterProps {
  config: WeddingConfig
}

export default function Footer({ config }: FooterProps) {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Thank You Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Thank You
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir 
            dalam hari bahagia kami. Terima Kasih atas segala ucapan, doa, dan perhatian yang diberikan.
            <br />
            <br />
            Sampai jumpa di hari bahagia kami
          </p>

          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-2">
              Kami yang berbahagia
            </h3>
            <h4 className="text-2xl md:text-3xl font-serif mb-4">
              {config.couple.brideName.split(' ')[0]} &
              <br />
              {config.couple.groomName.split(' ')[0]}
            </h4>
            <p className="text-gray-400">Beserta keluarga</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} {config.couple.brideName} & {config.couple.groomName}
          </p>
        </div>
      </div>
    </footer>
  )
}
