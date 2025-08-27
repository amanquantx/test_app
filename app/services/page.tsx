import { Metadata } from 'next'
import ServicesOverview from '@/components/ServicesOverview'

export const metadata: Metadata = {
  title: 'E-Beam Services | Gemstone Enhancement, Polymer Crosslinking | Gems Pride',
  description: 'Professional electron beam services including gemstone color enhancement, polymer crosslinking, medical sterilization, and material modification. Expert e-beam technology solutions.',
  keywords: 'electron beam services, gemstone enhancement, polymer crosslinking, medical sterilization, e-beam technology, material modification, radiation processing, gemstone color treatment',
  alternates: {
    canonical: 'https://gemspride.com/services',
  },
  openGraph: {
    title: 'E-Beam Services | Professional Electron Beam Technology | Gems Pride',
    description: 'Professional electron beam services for gemstone enhancement, polymer crosslinking, and medical sterilization.',
    url: 'https://gemspride.com/services',
    siteName: 'Gems Pride',
    images: [
      {
        url: '/gemstone-enhancement.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional E-Beam Services by Gems Pride',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <ServicesOverview />
} 