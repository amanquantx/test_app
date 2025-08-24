import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Gems Pride - Professional Electron Beam Services | E-Beam Technology',
  description: 'Leading provider of electron beam services for gemstone enhancement, polymer crosslinking, and medical sterilization. Professional e-beam technology solutions with expert consultation. Contact +91 7977753638.',
  keywords: 'electron beam services, e-beam technology, gemstone enhancement, gemstone color treatment, polymer crosslinking, medical sterilization, electron beam equipment, gems pride, professional e-beam services, material modification, radiation processing',
  authors: [{ name: 'Gems Pride' }],
  creator: 'Gems Pride',
  publisher: 'Gems Pride',
  robots: 'index, follow',
  metadataBase: new URL('https://gemspride.com'),
  alternates: {
    canonical: 'https://gemspride.com',
  },
  openGraph: {
    title: 'Gems Pride - Professional Electron Beam Services | E-Beam Technology',
    description: 'Leading provider of electron beam services for gemstone enhancement, polymer crosslinking, and medical sterilization. Expert e-beam technology solutions.',
    url: 'https://gemspride.com',
    siteName: 'Gems Pride',
    images: [
      {
        url: '/gemstone-enhancement.jpg',
        width: 1200,
        height: 630,
        alt: 'Gemstone Enhancement using Electron Beam Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gems Pride - Professional Electron Beam Services',
    description: 'Leading provider of electron beam services for gemstone enhancement, polymer crosslinking, and medical sterilization.',
    images: ['/gemstone-enhancement.jpg'],
  },
  verification: {
    google: 'google-site-verification-token', // You'll need to add this from Google Search Console
  },
  category: 'Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gems Pride",
              "description": "Professional electron beam services for gemstone enhancement, polymer crosslinking, and medical sterilization",
              "url": "https://gemspride.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7977753638",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "founder": {
                "@type": "Person",
                "name": "Durgesh Yagnik"
              },
              "sameAs": [
                "https://gemspride.com"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Electron Beam Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gemstone Enhancement",
                      "description": "Professional electron beam treatment for gemstone color enhancement and property modification"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Polymer Crosslinking",
                      "description": "Electron beam crosslinking for polymer materials and plastics"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Medical Sterilization", 
                      "description": "Electron beam sterilization for medical devices and equipment"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${manrope.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 