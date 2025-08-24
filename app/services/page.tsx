import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Diamond, Atom, Shield, Star, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Electron Beam Services | Gemstone Enhancement & Material Treatment',
  description: 'Professional electron beam services including gemstone color enhancement, polymer crosslinking, and medical sterilization. Advanced e-beam technology with precision results.',
  keywords: 'electron beam services, gemstone enhancement, polymer crosslinking, medical sterilization, e-beam technology, material treatment',
}

const services = [
  {
    icon: Diamond,
    title: 'Gemstone Color Enhancement',
    subtitle: 'Precision Crystal Transformation',
    description: 'Advanced electron beam technology for precise gemstone color enhancement and treatment. Our controlled irradiation processes can transform the natural colors of precious and semi-precious stones.',
    features: [
      'Diamond color enhancement and clarity improvement',
      'Sapphire and ruby color development',
      'Topaz blue and other color variations',
      'Emerald clarity enhancement',
      'Controlled dose irradiation processes',
      'Professional documentation'
    ],
    process: [
      'Initial gemstone evaluation and grading',
      'Treatment parameter optimization',
      'Controlled electron beam irradiation',
      'Quality assessment'
    ],
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200'
  },
  {
    icon: Atom,
    title: 'Polymer Crosslinking',
    subtitle: 'Advanced Material Modification',
    description: 'Professional electron beam crosslinking services for enhanced polymer properties. Our precision technology improves mechanical strength, chemical resistance, and thermal stability of various polymer materials.',
    features: [
      'Medical device tubing crosslinking',
      'Wire and cable insulation enhancement',
      'Automotive component treatment',
      'Industrial polymer modification',
      'Heat-shrinkable tubing processing',
      'Custom crosslinking solutions'
    ],
    process: [
      'Material analysis and specification review',
      'Crosslinking parameter development',
      'Controlled electron beam processing',
      'Property testing and analysis'
    ],
    color: 'from-secondary-500 to-secondary-600',
    bgColor: 'bg-secondary-50',
    borderColor: 'border-secondary-200'
  },
  {
    icon: Shield,
    title: 'Medical Sterilization',
    subtitle: 'Complete Pathogen Elimination',
    description: 'Advanced electron beam sterilization services for medical devices, pharmaceuticals, and surgical instruments. Our process ensures 99.99% pathogen elimination while maintaining product integrity.',
    features: [
      'Medical device sterilization',
      'Pharmaceutical product treatment',
      'Surgical instrument sterilization',
      'Single-use device processing',
      'Packaging material sterilization'
    ],
    process: [
      'Product evaluation and dose mapping',
      'Sterilization parameter development',
      'Controlled electron beam treatment',
      'Sterility testing'
    ],
    color: 'from-accent-500 to-accent-600',
    bgColor: 'bg-accent-50',
    borderColor: 'border-accent-200'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#065F4608_1px,transparent_1px),linear-gradient(to_bottom,#065F4608_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-800 text-sm font-medium mb-6 border border-primary-200">
              <Zap className="w-4 h-4 mr-2" />
              Professional E-Beam Services
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Advanced Electron Beam
              <br />
              <span className="text-primary-700">
                Technology Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Precision electron beam processing for gemstone enhancement, material modification, 
              and sterilization applications. Delivering consistent, high-quality results with complete documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-bold text-gray-900">Key Features:</h3>
                    <div className="grid gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Process Card */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`bg-white p-8 rounded-2xl shadow-xl border ${service.borderColor} hover:shadow-2xl transition-all duration-300`}>
                    <div className={`${service.bgColor} p-6 rounded-xl mb-6`}>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center">
                        <Star className="w-5 h-5 text-primary-600 mr-2" />
                        Our Process
                      </h3>
                      <div className="space-y-4">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-bold text-primary-700 flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <span className="text-gray-700 font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Quality Guarantee</h4>
                          <p className="text-gray-600 text-sm">
                            All treatments include comprehensive documentation, detailed reporting, 
                            and our standard satisfaction guarantee.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Why Choose Gems Pride?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading expertise, advanced technology, and unwavering commitment to quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: '20+ Years Experience',
                description: 'Decade of proven expertise in electron beam technology and material processing.',
              },
              {
                icon: Zap,
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment with precision controls and comprehensive monitoring.',
              },
              {
                icon: CheckCircle,
                title: 'Quality Assured',
                description: 'Rigorous quality control processes with complete documentation and traceability.',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements and discover how our electron beam technology can benefit your materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Get Quote Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 