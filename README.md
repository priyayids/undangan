# Undangan Digital - Wedding Invitation Platform

A modern, fully customizable digital wedding invitation website built with Next.js, React, and Tailwind CSS. Based on the "Sogni Celesti" design theme.

## Features

✅ **Beautiful Hero Section** - Eye-catching landing page with countdown timer
✅ **Bride & Groom Profile** - Display couple information with photos
✅ **Event Details** - Ceremony and reception details with Google Maps integration
✅ **Love Story Timeline** - Interactive timeline of your relationship
✅ **Photo Gallery** - Lightbox gallery for wedding photos
✅ **Wedding Wishes** - Guest comment form with Formspree integration
✅ **Gift Registry** - Bank account information and shipping address
✅ **E-Checkin QR Code** - QR code for event check-in
✅ **Live Streaming** - YouTube live streaming integration
✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Easy Customization** - Single config.json file for all content

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + Custom CSS
- **Language**: TypeScript
- **Hosting**: Vercel (Free)
- **Form Handling**: Formspree
- **QR Code**: QR Server API

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone or Download the Project**
   ```bash
   cd undangan
   npm install
   ```

2. **Configure Your Wedding Details**
   
   Edit `config.json` with your information:
   ```json
   {
     "couple": {
       "brideName": "Your Bride Name",
       "groomName": "Your Groom Name",
       // ... other fields
     }
   }
   ```

3. **Add Your Images**
   
   Replace images in `public/images/`:
   - `hero.jpg` - Main background image
   - `bride-profile.jpg` - Bride photo
   - `groom-profile.jpg` - Groom photo
   - `gallery/*.jpg` - Gallery photos (12 images)
   - `quote-bg.jpg` - Quote section background
   - `love-story-bg.jpg` - Love story section background

4. **Setup Form Submission** (Optional)
   
   - Create free account at [Formspree.io](https://formspree.io)
   - Get your Form ID and add to `config.json`:
   ```json
   "formspree": {
     "wishesFormId": "YOUR_FORM_ID"
   }
   ```

5. **Run Locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

6. **Deploy to Vercel**
   
   - Push to GitHub
   - Import project in [Vercel](https://vercel.com)
   - Auto-deploys on every push!

## Configuration Guide

### `config.json` Structure

```json
{
  "couple": {
    "brideName": "Full bride name",
    "groomName": "Full groom name",
    "brideAlias": "Instagram handle",
    "groomAlias": "Instagram handle",
    "brideParents": {
      "father": "Father's name",
      "mother": "Mother's name"
    },
    "groomParents": {
      "father": "Father's name",
      "mother": "Mother's name"
    }
  },

  "wedding": {
    "ceremonyDate": "YYYY-MM-DD",
    "ceremonyTime": "HH:MM",
    "ceremonyTimeEnd": "HH:MM",
    "receptionTime": "HH:MM",
    "receptionTimeEnd": "HH:MM",
    "timezone": "Asia/Jakarta",
    "dayOfWeek": "Sabtu"
  },

  "locations": {
    "ceremony": {
      "name": "Venue name",
      "address": "Full address",
      "city": "City",
      "mapsUrl": "Google Maps link"
    },
    "reception": {
      "name": "Venue name",
      "address": "Full address",
      "city": "City",
      "mapsUrl": "Google Maps link"
    }
  },

  "images": {
    "hero": "/images/hero.jpg",
    "bride": "/images/bride-profile.jpg",
    "groom": "/images/groom-profile.jpg",
    "gallery": ["/images/gallery/1.jpg", ...],
    "loveStory": "/images/love-story-bg.jpg",
    "quoteBg": "/images/quote-bg.jpg"
  },

  "loveStory": [
    {
      "year": 2019,
      "title": "Awal Pertemuan",
      "description": "Story text here..."
    }
  ],

  "quote": {
    "text": "Quranic verse text",
    "reference": "Q.S. Reference"
  },

  "giftRegistry": {
    "bankAccounts": [
      {
        "bank": "BCA",
        "accountNumber": "12345678",
        "accountName": "Name"
      }
    ],
    "address": {
      "street": "Street name",
      "village": "Village",
      "district": "District",
      "city": "City",
      "province": "Province",
      "recipientName": "Name",
      "recipientPhone": "+62-xxx"
    }
  },

  "streaming": {
    "enabled": true,
    "ceremonyUrl": "YouTube live link",
    "ceremonyTime": "11:00"
  },

  "formspree": {
    "wishesFormId": "YOUR_FORM_ID"
  },

  "siteMetadata": {
    "title": "Undangan Pernikahan",
    "description": "Our wedding invitation",
    "ogImage": "/images/hero.jpg",
    "url": "https://your-wedding.vercel.app"
  }
}
```

## Project Structure

```
undangan/
├── public/
│   └── images/              # All wedding images (override with yours)
│       ├── hero.jpg
│       ├── bride-profile.jpg
│       ├── groom-profile.jpg
│       ├── gallery/         # 12 wedding photos
│       ├── quote-bg.jpg
│       └── love-story-bg.jpg
├── src/
│   ├── pages/
│   │   ├── index.tsx       # Main page
│   │   ├── _app.tsx        # Next.js app wrapper
│   │   └── _document.tsx   # Next.js document
│   ├── components/         # React components
│   │   ├── Hero.tsx
│   │   ├── Invitation.tsx
│   │   ├── BrideGroom.tsx
│   │   ├── EventDetails.tsx
│   │   ├── Countdown.tsx
│   │   ├── LoveStory.tsx
│   │   ├── Quote.tsx
│   │   ├── Gallery.tsx
│   │   ├── Wishes.tsx
│   │   ├── GiftRegistry.tsx
│   │   ├── Streaming.tsx
│   │   ├── ECheckin.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── globals.css    # Global styles & animations
│   ├── types/
│   │   └── wedding.ts     # TypeScript interfaces
│   └── lib/
│       └── config.ts      # Config utilities
├── config.json            # 🔑 YOUR WEDDING DATA HERE
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.js` to change theme colors:
```js
colors: {
  gold: '#D4AF37',      // Main accent color
  cream: '#FFF8F0',     // Background
  sage: '#9CAF88',      // Secondary
  navy: '#1A365D',      // Text
}
```

### Fonts
Google Fonts are used:
- **Playfair Display** - Headers & elegant text
- **Poppins** - Body text

Change in `tailwind.config.js` and `globals.css`

### Sections
Enable/disable sections in `src/pages/index.tsx`:
```tsx
<Streaming config={config} />    {/* Remove this line to hide */}
<ECheckin config={config} />
```

## Deployment

### To Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select your repo
4. Deploy! (takes ~1 minute)

Your site: `https://your-repo-name.vercel.app`

### Custom Domain

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel → Settings → Domains
3. Add your domain
4. Follow DNS instructions

## Form Handling

### Wedding Wishes

Uses **Formspree** (free tier):

1. Sign up at https://formspree.io
2. Create a form
3. Get Form ID and add to `config.json`
4. Responses go to your email automatically

## Mobile Optimization

The site is **mobile-first** optimized:
- Responsive images
- Touch-friendly buttons
- Optimized for all screen sizes
- No dark mode issues

Test on mobile:
```bash
npm run dev
# Visit on phone with IP: http://your-computer-ip:3000
```

## SEO & Social Sharing

The site includes:
- Meta tags for search engines
- Open Graph tags for social media previews
- Mobile viewport optimization
- Structured content

## Performance

- **Static Generation**: Pre-built pages at deploy time
- **Image Optimization**: Automatic image compression
- **CDN Delivery**: Vercel global CDN
- **Page Speed**: <1 second load time

## Support & Updates

For issues or features:
- Check `src/components/` for component structure
- Modify `config.json` for content changes
- Edit `src/styles/globals.css` for styling

## License

MIT License - Feel free to use and modify!

## Credits

- Design inspired by HelloGuest "Sogni Celesti" theme
- Built with Next.js + React + Tailwind CSS
- Hosted on Vercel

---

**Ready to celebrate your special day? 🎉**

Happy customizing! 💕
