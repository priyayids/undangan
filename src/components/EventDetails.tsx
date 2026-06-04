import React from 'react'
import { WeddingConfig } from '@/types/wedding'

interface EventDetailsProps {
  config: WeddingConfig
}

export default function EventDetails({ config }: EventDetailsProps) {
  return (
    <section className="bg-cream py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-navy mb-16">
          Wedding Event
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i 
          dapat memberikan doa restu kepada kami dengan berkenan hadir dalam acara pernikahan 
          kami yang insyaallah akan dilaksanakan pada:
        </p>

        <div className="max-w-2xl mx-auto px-4">
          {/* Akad Nikah */}
          <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-6">
              Akad Nikah
            </h3>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-gray-600 text-sm mb-1">Hari</p>
                <p className="text-2xl text-navy font-serif">
                  {config.wedding.dayOfWeek}
                </p>
              </div>

              <div>
                <p className="text-gray-600 text-sm mb-1">Tanggal</p>
                <p className="text-2xl text-navy font-serif">
                  {config.wedding.ceremonyDate}
                </p>
              </div>

              <div>
                <p className="text-gray-600 text-sm mb-1">Waktu</p>
                <p className="text-2xl text-navy font-serif">
                  {config.wedding.ceremonyTime} s.d selesai WIB
                </p>
              </div>
            </div>

            <div className="border-t border-gold pt-6">
              <p className="text-gray-600 text-sm mb-2">Lokasi</p>
              <h4 className="text-lg text-navy font-semibold mb-2">
                {config.locations.ceremony.name}
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                {config.locations.ceremony.address}
              </p>
              <a
                href={config.locations.ceremony.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gold text-white rounded hover:bg-opacity-90 transition-all"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
