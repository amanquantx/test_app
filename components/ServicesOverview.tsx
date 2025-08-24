"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Diamond, Atom, Shield, ArrowRight, Zap, CheckCircle } from 'lucide-react'

const ServicesOverview = () => {
  const services = [
    {
      icon: Diamond,
      title: 'Gemstone Enhancement',
      description: 'Precision electron beam treatment for color enhancement and clarity improvement in precious and semi-precious stones.',
      features: ['Color Enhancement', 'Clarity Improvement', 'Professional Reports'],
      gradient: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-50 to-primary-100',
      size: 'large' // This will be a larger card
    },
    {
      icon: Atom,
      title: 'Polymer Crosslinking',
      description: 'Advanced crosslinking for medical tubing, wire insulation, and industrial polymers with enhanced thermal stability.',
      features: ['Medical Tubing', 'Wire & Cable', 'Automotive Parts', 'Industrial Polymers'],
      gradient: 'from-secondary-500 to-secondary-600',
      bgGradient: 'from-secondary-50 to-secondary-100',
      size: 'medium'
    },
    {
      icon: Shield,
      title: 'Medical Sterilization',
          description: 'Professional sterilization processes for medical devices and pharmaceutical products with complete traceability.',
    features: ['Device Sterilization', 'Pharma Packaging', 'Technical Reports', 'Process Documentation'],
      gradient: 'from-accent-600 to-accent-700',
      bgGradient: 'from-accent-50 to-accent-100',
      size: 'medium'
    },
  ]

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Diagonal Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#F9FAFB"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pb-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary-50 text-primary-800 border-primary-200">
            <Zap className="w-4 h-4 mr-2" />
            Core Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900">
            Electron Beam
            <br />
            <span className="text-primary-700">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Industrial-grade e-beam processing solutions designed for precision, quality, and reliability across multiple industries.
          </p>
        </motion.div>

        {/* Asymmetrical Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {services.map((service, index) => {
            // Define different layouts for asymmetrical design
            const layouts = {
              0: 'lg:col-span-7 lg:row-span-2', // Large card
              1: 'lg:col-span-5 lg:col-start-8', // Medium card, right side
              2: 'lg:col-span-5 lg:col-start-8 lg:row-start-2', // Medium card, right side, second row
            }

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group ${layouts[index as keyof typeof layouts]}`}
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm relative overflow-hidden ${service.size === 'large' ? 'p-8' : 'p-6'}`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,95,70,0.1)_0%,transparent_50%)]"></div>
                  </div>

                  <CardHeader className={`pb-4 relative z-10 ${service.size === 'large' ? 'pb-6' : 'pb-4'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${service.size === 'large' ? 'w-16 h-16' : 'w-14 h-14'} rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`${service.size === 'large' ? 'w-8 h-8' : 'w-7 h-7'} text-white`} />
                      </div>
                      <Badge variant="outline" className="text-xs font-medium border-gray-300 text-gray-600">
                        Premium
                      </Badge>
                    </div>
                    <CardTitle className={`${service.size === 'large' ? 'text-3xl' : 'text-2xl'} font-display font-bold group-hover:text-primary-700 transition-colors text-gray-900`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className={`${service.size === 'large' ? 'text-lg' : 'text-base'} leading-relaxed text-gray-600`}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className={`${service.size === 'large' ? 'pb-8' : 'pb-6'} relative z-10`}>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 relative z-10">
                    <Button 
                      asChild 
                      variant="ghost" 
                      className="w-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-all duration-300 text-gray-700"
                    >
                      <Link href="/contact" className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl p-8 lg:p-12 border border-primary-100 shadow-lg">
            <h3 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-gray-900">
              Ready to Transform Your Materials?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get expert consultation and custom e-beam solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-primary-700 hover:bg-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview 