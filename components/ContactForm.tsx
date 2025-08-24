"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight, Zap, CheckCircle, Star, Loader2, X } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const contactInfo = [
    {
      icon: Phone,
      title: 'Expert Consultation',
      detail: '+91 7977753638',
      description: 'Speak with Durgesh for personalized e-beam solutions',
      action: 'tel:+917977753638',
      color: 'text-primary-600 bg-primary-50 border-primary-200'
    },
    {
      icon: Mail,
      title: 'Technical Inquiries',
      detail: 'yagnikdurgesh@gmail.com',
      description: 'Send detailed specifications for custom quotes',
      action: 'mailto:yagnikdurgesh@gmail.com',
      color: 'text-secondary-600 bg-secondary-50 border-secondary-200'
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        const errorData = await response.json()
        setSubmitStatus('error')
        setErrorMessage(errorData.error || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Get Professional E-Beam Quote
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Contact Our
              <br />
              <span className="text-primary-700">
                E-Beam Experts
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your materials with precision electron beam technology? 
              Get expert consultation and custom quotes for your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <Link
                  href={info.action}
                  className="block h-full p-8 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {info.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-primary-600 mb-4">
                    {info.detail}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {info.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Instructions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
                  Request Custom Quote
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get a detailed quote for your specific e-beam processing requirements. 
                  Our experts will review your needs and provide customized solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-gray-900 mb-2">Free Technical Consultation</h3>
                    <p className="text-gray-600">Expert guidance on treatment parameters and expected outcomes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-gray-900 mb-2">Custom Solution Development</h3>
                    <p className="text-gray-600">Tailored processing protocols for your specific materials</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-gray-900 mb-2">Fast Response Time</h3>
                    <p className="text-gray-600">Detailed quotes typically provided within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                <h3 className="font-display font-bold text-gray-900 mb-4 flex items-center">
                  <Star className="w-5 h-5 text-primary-600 mr-2" />
                  Information to Include
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Material type and composition details</li>
                  <li>• Desired treatment goals and specifications</li>
                  <li>• Quantity and batch size requirements</li>
                  <li>• Timeline and delivery expectations</li>
                  <li>• Quality standards or specifications needed</li>
                  <li>• Budget considerations (if applicable)</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">Message sent successfully! We'll respond within 24-48 hours.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <X className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-red-800 font-medium">{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                    Service Interest*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="gemstone">Gemstone Enhancement</option>
                    <option value="polymer">Polymer Crosslinking</option>
                    <option value="medical">Medical Sterilization</option>
                    <option value="custom">Custom Application</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Project Details*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Please provide detailed information about your materials, treatment goals, quantities, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-700 hover:bg-primary-800 disabled:bg-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy. We'll respond within 24-48 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-primary-700 rounded-3xl p-8 lg:p-12 text-white text-center">
            <Clock className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Business Hours & Support
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-primary-100">
                  Operating Hours
                </h3>
                <div className="space-y-2 text-primary-200">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-primary-100">
                  Emergency Support
                </h3>
                <div className="space-y-2 text-primary-200">
                  <p>24/7 processing monitoring</p>
                  <p>Emergency contact available</p>
                  <p>Critical project support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 