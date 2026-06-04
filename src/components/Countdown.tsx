import React, { useState, useEffect } from 'react'
import { CountdownTime, WeddingConfig } from '@/types/wedding'
import { calculateCountdown } from '@/lib/config'

interface CountdownProps {
  weddingDate: string
  config: WeddingConfig
}

export default function Countdown({ weddingDate, config }: CountdownProps) {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setTime(calculateCountdown(weddingDate))

    const interval = setInterval(() => {
      setTime(calculateCountdown(weddingDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [weddingDate])

  const CountdownBox = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gold rounded-lg flex items-center justify-center mb-3">
        <span className="text-2xl md:text-3xl font-bold text-white">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="text-gray-600 text-sm md:text-base uppercase tracking-widest">
        {label}
      </p>
    </div>
  )

  function saveToCalendar() {
    const [year, month, day] = config.wedding.ceremonyDate.split('-')
    const time = config.wedding.ceremonyTime.replace('.', '')
    const dtStart = `${year}${month}${day}T${time}00`
    const dtEnd = `${year}${month}${day}T235959`

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Undangan Digital//ID
BEGIN:VEVENT
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:Pernikahan ${config.couple.brideName.split(' ')[0]} & ${config.couple.groomName.split(' ')[0]}
DESCRIPTION:Undangan pernikahan ${config.couple.brideName} & ${config.couple.groomName}
LOCATION:${config.locations.ceremony.name}, ${config.locations.ceremony.address}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `pernikahan-${config.couple.brideName.split(' ')[0]}-${config.couple.groomName.split(' ')[0]}.ics`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-serif text-navy mb-12">
          Countdown Timer
        </h2>

        <div className="flex justify-center gap-4 md:gap-8 mb-8">
          <CountdownBox label="Hari" value={time.days} />
          <CountdownBox label="Jam" value={time.hours} />
          <CountdownBox label="Menit" value={time.minutes} />
          <CountdownBox label="Detik" value={time.seconds} />
        </div>

        <div className="text-center">
          <button onClick={saveToCalendar} className="px-8 py-3 border-2 border-gold text-gold font-medium rounded hover:bg-gold hover:text-white transition-all">
            Save The Date
          </button>
        </div>
      </div>
    </section>
  )
}
