'use client'

import { motion } from 'framer-motion'
import { Gem, Atom, Shield, Star, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6 border border-blue-100">
            <Star className="w-4 h-4 mr-2" />
            About Our Technology
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Leading E-Beam Technology
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Since 2010
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, Gems Pride has pioneered electron beam technology, 
            specializing in gemstone enhancement and advanced material treatment services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Our E-Beam Expertise</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Gem,
                    title: 'Gemstone Color Enhancement',
                    description: 'Advanced electron beam treatment for precise color development in gemstones with controlled irradiation processes.',
                    color: 'text-purple-600 bg-purple-50 border-purple-100'
                  },
                  {
                    icon: Atom,
                    title: 'Polymer Crosslinking Technology',
                    description: 'State-of-the-art crosslinking for medical tubing, wire insulation, and industrial polymers with enhanced mechanical properties.',
                    color: 'text-blue-600 bg-blue-50 border-blue-100'
                  },
                  {
                    icon: Shield,
                    title: 'Sterilization Services',
                    description: 'Professional sterilization for medical devices, pharmaceuticals, and surgical instruments ensuring complete pathogen elimination.',
                    color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 bg-white rounded-2xl border ${item.color} shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link href="/about" className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More About Our Technology
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Stats Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Our E-Beam Services?</h3>
                <p className="text-gray-600">Advanced technology, proven results</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: '20+', label: 'Years E-Beam Experience', color: 'text-purple-600' },
                  { number: '5,000+', label: 'Successful Treatments', color: 'text-blue-600' },
                  { number: '99.9%', label: 'Precision Rate', color: 'text-indigo-600' },
                  { number: '24/7', label: 'Process Monitoring', color: 'text-pink-600' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Capabilities List */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 mb-4">Our Capabilities</h4>
                {[
                  'Advanced e-beam facility',
                  'Advanced dose monitoring systems', 
                  'Temperature-controlled processing',
                  'Quality assurance protocols'
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 