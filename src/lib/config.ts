import { WeddingConfig, CountdownTime } from '@/types/wedding'

let configCache: WeddingConfig | null = null

export function getConfig(): WeddingConfig {
  if (configCache) return configCache

  try {
    const config = require('../../config.json') as WeddingConfig
    configCache = config
    return config
  } catch (error) {
    console.error('Failed to load config.json:', error)
    throw new Error('Unable to load wedding configuration')
  }
}

export function calculateCountdown(weddingDate: string): CountdownTime {
  const wedding = new Date(weddingDate).getTime()
  const now = new Date().getTime()
  const diff = wedding - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

export function formatDate(dateStr: string, locale = 'id-ID'): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatTime(timeStr: string): string {
  return timeStr + ' WIB'
}

export function generateQRCode(text: string): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`
}
