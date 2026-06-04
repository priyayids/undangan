import React, { useState } from 'react'
import { WeddingConfig } from '@/types/wedding'

interface GalleryProps {
  config: WeddingConfig
}

export default function Gallery({ config }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-navy mb-16">
          Our Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {config.images.gallery.map((image: string, index: number) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64 md:h-72"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt="Gallery Full"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
