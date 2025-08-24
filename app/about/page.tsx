import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Users, Target, Zap, CheckCircle, Star, Diamond } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Gems Pride | Leading Electron Beam Technology Company',
  description: 'Learn about Gems Pride - 20+ years of electron beam expertise in gemstone enhancement, polymer crosslinking, and medical sterilization. Advanced e-beam technology solutions.',
  keywords: 'about gems pride, electron beam company, e-beam technology, gemstone enhancement experts, polymer crosslinking specialists',
}

export default function AboutPage() {
  const stats = [
    { icon: Award, number: '20+', label: 'Years Experience', desc: 'Decade of e-beam expertise' },
    { icon: Users, number: '5,000+', label: 'Successful Treatments', desc: 'Projects completed' },
    { icon: Target, number: '99.9%', label: 'Precision Rate', desc: 'Accuracy guaranteed' },
    { icon: Star, number: '24/7', label: 'Monitoring', desc: 'Quality control' }
  ]

  const capabilities = [
    'Advanced electron beam facility',
    'Advanced dose monitoring and control systems',
    'Temperature-controlled processing environments',
    'Comprehensive quality assurance protocols',
    'Custom treatment parameter development',
    'Complete documentation and traceability'
  ]

  const industries = [
    { name: 'Gemstone & Jewelry', desc: 'Color enhancement and clarity improvement' },
    { name: 'Medical Devices', desc: 'Sterilization and polymer modification' },
    { name: 'Automotive', desc: 'Component crosslinking and enhancement' },
    { name: 'Industrial', desc: 'Custom polymer and material treatments' }
  ]

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
              <Diamond className="w-4 h-4 mr-2" />
              About Our Company
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Leading E-Beam Technology
              <br />
              <span className="text-primary-700">
                Since 2010
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over a decade, Gems Pride has been at the forefront of electron beam technology, 
              delivering precision results for gemstone enhancement, material modification, and sterilization applications.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
                Our Story & Mission
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Gems Pride emerged from a vision to revolutionize material treatment 
                  through advanced electron beam technology. What started as a specialized gemstone 
                  enhancement service has evolved into a comprehensive e-beam solutions provider.
                </p>
                
                <p>
                  Our mission is to unlock the hidden potential of materials through precision electron 
                  beam processing, delivering consistent, high-quality results that exceed industry 
                  standards. We combine cutting-edge technology with deep expertise to solve complex 
                  material challenges.
                </p>
                
                <p>
                  Today, we serve clients across multiple industries, from gemstone dealers seeking 
                  perfect color enhancement to medical device manufacturers requiring sterile, 
                  crosslinked components.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-display font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities and processes designed for precision, reliability, and consistent results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{capability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized e-beam solutions across diverse industries with precision and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
            Ready to Transform Your Materials?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your electron beam processing requirements and discover how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 group"
          >
            Get Quote Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
} 