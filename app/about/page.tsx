import { Metadata } from 'next'
import AboutSection from '@/components/AboutSection'

export const metadata: Metadata = {
  title: 'About Gems Pride | Leading E-Beam Technology Experts | Electron Beam Services',
  description: 'Learn about Gems Pride\'s expertise in electron beam technology. Professional e-beam services for gemstone enhancement, polymer crosslinking, and medical sterilization since our founding.',
  keywords: 'about gems pride, e-beam technology experts, electron beam company, gemstone enhancement specialists, polymer crosslinking experts, medical sterilization services',
  alternates: {
    canonical: 'https://gemspride.com/about',
  },
  openGraph: {
    title: 'About Gems Pride | Leading E-Beam Technology Experts',
    description: 'Learn about Gems Pride\'s expertise in electron beam technology and professional e-beam services.',
    url: 'https://gemspride.com/about',
    siteName: 'Gems Pride',
    images: [
      {
        url: '/gemstone-enhancement.jpg',
        width: 1200,
        height: 630,
        alt: 'About Gems Pride - Electron Beam Technology Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function AboutPage() {
  return <AboutSection />
} 