import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { WeddingConfig } from '@/types/wedding'
import { getConfig } from '@/lib/config'
import Hero from '@/components/Hero'
import Invitation from '@/components/Invitation'
import BrideGroom from '@/components/BrideGroom'
import EventDetails from '@/components/EventDetails'
import Countdown from '@/components/Countdown'
import Quote from '@/components/Quote'
import Gallery from '@/components/Gallery'
import BankingSection from '@/components/BankingSection'
import Wishes from '@/components/Wishes'
import Footer from '@/components/Footer'

interface HomeProps {
  config: WeddingConfig
}

export default function Home({ config }: HomeProps) {
  const router = useRouter()
  const guestName = (router.query.to as string) || ''

  return (
    <>
      <Head>
        <title>{guestName ? `Undangan untuk ${guestName} - ${config.couple.brideName.split(' ')[0]} & ${config.couple.groomName.split(' ')[0]}` : config.siteMetadata.title}</title>
        <meta name="description" content={guestName ? `Kepada Yth. ${guestName}, kami mengundang Anda untuk merayakan momen spesial kami` : config.siteMetadata.description} />
        <meta property="og:title" content={guestName ? `Undangan untuk ${guestName} - ${config.couple.brideName.split(' ')[0]} & ${config.couple.groomName.split(' ')[0]}` : config.siteMetadata.title} />
        <meta property="og:description" content={guestName ? `Kepada Yth. ${guestName}, kami mengundang Anda untuk merayakan momen spesial kami` : config.siteMetadata.description} />
        <meta property="og:image" content={config.siteMetadata.ogImage} />
        <meta property="og:url" content={config.siteMetadata.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D4AF37" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <main>
        <Hero config={config} guestName={guestName} />
        <Invitation config={config} guestName={guestName} />
        <BrideGroom config={config} />
        <EventDetails config={config} />
        <Countdown weddingDate={config.wedding.ceremonyDate} config={config} />
        <Quote config={config} />
        <Gallery config={config} />
        <BankingSection accounts={config.banking.accounts} />
        <Wishes config={config} defaultName={guestName} />
        <Footer config={config} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const config = getConfig()

  return {
    props: {
      config,
    },
    revalidate: 3600,
  }
}
