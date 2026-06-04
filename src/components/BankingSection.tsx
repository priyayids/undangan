import React, { useState } from 'react'
import { BankAccount } from '@/types/wedding'

interface BankingSectionProps {
  accounts: BankAccount[]
}

export default function BankingSection({ accounts }: BankingSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  function copy(text: string, index: number) {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-navy mb-4">
          Wedding Gift
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Kehadiran Bapak/Ibu/Saudara/i merupakan hadiah terindah. Namun, 
          apabila hendak memberikan tanda kasih kepada kami, dapat melalui rekening di bawah ini:
        </p>

        <div className="space-y-4">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="p-6 border border-gold rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{account.bank}</p>
                  <p className="text-lg font-mono text-navy font-semibold mb-1">
                    {account.accountNumber}
                  </p>
                  <p className="text-sm text-gray-700">a.n. {account.accountName}</p>
                </div>
                <button
                  onClick={() => copy(account.accountNumber, index)}
                  className={`px-6 py-2 rounded font-medium transition-all whitespace-nowrap ${
                    copiedIndex === index
                      ? 'bg-green-500 text-white'
                      : 'bg-gold text-white hover:bg-opacity-90'
                  }`}
                >
                  {copiedIndex === index ? '✓ Tersalin' : 'Salin No. Rekening'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
