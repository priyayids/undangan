export interface WeddingConfig {
  couple: {
    brideName: string
    groomName: string
    brideAlias: string
    groomAlias: string
    brideParents: {
      father: string
      mother: string
    }
    groomParents: {
      father: string
      mother: string
    }
  }
  wedding: {
    ceremonyDate: string
    ceremonyTime: string
    ceremonyTimeEnd: string
    timezone: string
    dayOfWeek: string
  }
  locations: {
    ceremony: Location
  }
  images: {
    hero: string
    bride: string
    groom: string
    gallery: string[]
    quoteBg: string
  }
  quote: {
    text: string
    reference: string
  }
  formspree: {
    wishesFormId: string
  }
  banking: {
    accounts: BankAccount[]
  }
  siteMetadata: {
    title: string
    description: string
    ogImage: string
    url: string
  }
}

export interface Location {
  name: string
  address: string
  city: string
  mapsUrl: string
}

export interface BankAccount {
  bank: string
  accountNumber: string
  accountName: string
}

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}
