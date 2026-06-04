import React, { useState, useEffect } from 'react'
import { WeddingConfig } from '@/types/wedding'

interface Wish {
  name: string
  alias: string
  message: string
  timestamp: number
}

interface WishesProps {
  config: WeddingConfig
  defaultName?: string
}

export default function Wishes({ config, defaultName }: WishesProps) {
  const [formData, setFormData] = useState({
    name: defaultName || '',
    alias: '',
    message: '',
  })
  const [errors, setErrors] = useState({ name: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [wishes, setWishes] = useState<Wish[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('wedding-wishes')
    if (saved) {
      try {
        setWishes(JSON.parse(saved))
      } catch {}
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function validate(): boolean {
    const newErrors = { name: '', message: '' }
    if (!formData.name.trim()) {
      newErrors.name = 'Nama tamu wajib diisi'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Ucapan wajib diisi'
    }
    setErrors(newErrors)
    return !newErrors.name && !newErrors.message
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const wish: Wish = {
      name: formData.name.trim(),
      alias: formData.alias.trim(),
      message: formData.message.trim(),
      timestamp: Date.now(),
    }

    const updated = [wish, ...wishes]
    setWishes(updated)
    localStorage.setItem('wedding-wishes', JSON.stringify(updated))

    setSubmitted(true)
    setFormData({ name: defaultName || '', alias: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)

    if (config.formspree.wishesFormId && config.formspree.wishesFormId !== 'YOUR_FORMSPREE_ID') {
      setLoading(true)
      try {
        await fetch(`https://formspree.io/f/${config.formspree.wishesFormId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: wish.name,
            alias: wish.alias,
            message: wish.message,
          }),
        })
      } catch {}
      setLoading(false)
    }
  }

  function formatTime(ts: number) {
    const d = new Date(ts)
    const now = new Date()
    const diff = now.getTime() - d.getTime()
    if (diff < 60000) return 'Baru saja'
    if (diff < 3600000) return `${Math.floor(diff / 60000)} menit yang lalu`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} jam yang lalu`
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  return (
    <section className="bg-cream py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-navy mb-4">
          Wedding Wishes
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Kepada Bapak/Ibu/Saudara/i yang ingin memberikan ucapan kepada kami 
          dapat dituliskan di bawah ini:
        </p>

        {submitted && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            ✓ Terima kasih! Ucapan Anda telah dikirim.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nama Tamu <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${
                  errors.name ? 'border-red-400' : 'border-gray-300'
                }`}
                placeholder="Nama Lengkap"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nama Alias
              </label>
              <input
                type="text"
                name="alias"
                value={formData.alias}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="Alias"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Ucapan & Doa <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${
                errors.message ? 'border-red-400' : 'border-gray-300'
              }`}
              placeholder="Tulis ucapan dan doa terbaik Anda..."
              rows={5}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
          >
            {loading ? 'Mengirim...' : 'Beri Ucapan'}
          </button>
        </form>

        {/* Wish List */}
        {wishes.length > 0 && (
          <div>
            <h3 className="text-2xl font-serif text-navy mb-6">
              Ucapan dan Doa Para Tamu
            </h3>
            <div className="space-y-4">
              {wishes.map((w, i) => (
                <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold text-navy">
                      {w.name}{w.alias ? ` (${w.alias})` : ''}
                    </p>
                    <p className="text-xs text-gray-400">{formatTime(w.timestamp)}</p>
                  </div>
                  <p className="text-gray-600">{w.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
