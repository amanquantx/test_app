import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import ContactCTA from '@/components/ContactCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Electron Beam Services ',
  description: 'Expert e-beam services for gemstone enhancement, polymer crosslinking, and medical sterilization. Precision treatment with professional documentation for industrial applications.',
  keywords: 'electron beam services, e-beam technology, gemstone enhancement, polymer crosslinking, medical sterilization, material treatment, precision technology, gems pride',
  openGraph: {
    title: 'Professional Electron Beam Services | Gems Pride E-Beam Technology',
    description: 'Expert e-beam services for gemstone enhancement, polymer crosslinking, and medical sterilization. Precision treatment with professional documentation.',
    type: 'website',
    url: 'https://gemspride.com',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ContactCTA />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Gems Pride",
            "description": "Professional electron beam services for gemstone enhancement, polymer crosslinking, and medical sterilization",
            "url": "https://gemspride.com",
            "logo": "https://gemspride.com/logo.jpeg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7977753638",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://gemspride.com"
            ],
            "services": [
              {
                "@type": "Service",
                "name": "Gemstone Enhancement",
                "description": "Professional electron beam treatment for gemstone color enhancement and clarity improvement"
              },
              {
                "@type": "Service", 
                "name": "Polymer Crosslinking",
                "description": "Advanced crosslinking for medical tubing, wire insulation, and industrial polymers"
              },
              {
                "@type": "Service",
                "name": "Medical Sterilization", 
                "description": "Professional sterilization processes for medical devices and pharmaceutical products"
              }
            ]
          })
        }}
      />
    </>
  )
} 