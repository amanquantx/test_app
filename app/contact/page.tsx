import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Gems Pride | Get E-Beam Treatment Quote | Expert Consultation',
  description: 'Contact Gems Pride for professional electron beam services. Get expert consultation for gemstone enhancement, polymer crosslinking, and medical sterilization. Call +91 7977753638.',
  keywords: 'contact gems pride, e-beam quote, electron beam consultation, gemstone enhancement quote, polymer treatment quote',
}

export default function ContactPage() {
  return <ContactForm />
} 