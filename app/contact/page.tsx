import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Gems Pride | Get E-Beam Treatment Quote | Expert Consultation',
  description: 'Contact Gems Pride for professional electron beam services. Get expert consultation for gemstone enhancement, polymer crosslinking, and medical sterilization. Call +91 7977753638.',
  keywords: 'contact gems pride, e-beam quote, electron beam consultation, gemstone enhancement quote, polymer treatment quote, medical sterilization services',
  alternates: {
    canonical: 'https://gemspride.com/contact',
  },
  openGraph: {
    title: 'Contact Gems Pride | Professional E-Beam Services Consultation',
    description: 'Contact us for expert consultation on electron beam services. Professional quotes for gemstone enhancement, polymer crosslinking, and medical sterilization.',
    url: 'https://gemspride.com/contact',
    siteName: 'Gems Pride',
    images: [
      {
        url: '/gemstone-enhancement.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Gems Pride for E-Beam Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactForm />
} 