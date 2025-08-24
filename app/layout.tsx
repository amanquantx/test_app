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

export const metadata: Metadata = {
  title: 'Gems Pride - Professional Electron Beam Services | E-Beam Technology',
  description: 'Expert e-beam services for gemstone enhancement, polymer crosslinking, and medical sterilization. Precision treatment with professional documentation.',
  keywords: 'electron beam services, gemstone enhancement, e-beam irradiation, polymer crosslinking, medical sterilization, color enhancement, material treatment',
  authors: [{ name: 'Gems Pride' }],
  creator: 'Gems Pride',
  publisher: 'Gems Pride',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Gems Pride - Professional Electron Beam Services | E-Beam Technology',
    description: 'Expert e-beam services for gemstone enhancement, polymer crosslinking, and medical sterilization. Precision treatment with professional documentation.',
    url: 'https://gemspride.com',
    siteName: 'Gems Pride',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gems Pride - Professional Electron Beam Services | E-Beam Technology',
    description: 'Expert e-beam services for gemstone enhancement, polymer crosslinking, and medical sterilization. Precision treatment with professional documentation.',
    images: ['/logo.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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