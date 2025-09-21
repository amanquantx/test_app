"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone, Mail, Calendar, Zap } from 'lucide-react'

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      action: 'tel:+917977753638',
      label: '+91 79777 53638',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get detailed information',
      action: 'mailto:yagnikdurgesh@gmail.com',
      label: 'yagnikdurgesh@gmail.com',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation(5 to 7 pm everyday)',
      action: 'https://meet.google.com/phs-whmx-jqi',
      label: 'Join Google Meet',
      color: 'from-accent-600 to-accent-700'
    }
  ]

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Diagonal Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#FFFFFF"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Column - Content */}
                  <div className="p-8 lg:p-12 xl:p-16 space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mr-4 shadow-lg">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                          Ready to Get Started?
                        </span>
                      </div>

                      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6 leading-tight text-gray-900">
                        Transform Your Materials with
                        <br />
                        <span className="text-primary-700">
                          Precision E-Beam
                        </span>
                      </h2>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Get expert consultation and custom solutions for your gemstone enhancement, 
                        polymer crosslinking, or medical sterilization needs. Our team is ready to help 
                        you achieve exceptional results.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button 
                          asChild 
                          size="lg"
                          className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Link href="/contact" className="group">
                            Get Free Consultation
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                        
                        <Button 
                          asChild
                          variant="outline" 
                          size="lg"
                          className="px-8 py-6 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300"
                        >
                          <Link href="/services">
                            View Services
                          </Link>
                        </Button>
                      </div>

                      {/* Trust Indicators */}
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span>20+ Years Experience</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                          <span>99.9% Precision Rate</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                          <span>24/7 Support</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column - Contact Methods */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 border-l border-gray-100">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="space-y-8"
                    >
                      <div>
                        <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                          Get in Touch Today
                        </h3>
                        <p className="text-gray-600">
                          Choose your preferred way to connect with our team
                        </p>
                      </div>

                      <div className="space-y-4">
                        {contactMethods.map((method, index) => (
                          <motion.div
                            key={method.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          >
                            <Link
                              href={method.action}
                              className="group block p-4 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                            >
                              <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                  <method.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                                    {method.title}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {method.description}
                                  </p>
                                  <p className="text-sm font-medium text-primary-700 mt-1">
                                    {method.label}
                                  </p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-700 group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* Contact Info */}
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-100">
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-600 mb-2">
                            Direct Contact
                          </p>
                          <p className="font-semibold font-display text-gray-900">
                            Durgesh Yagnik
                          </p>
                          <p className="text-sm text-primary-700 font-medium">
                            +91 79777 53638
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA 