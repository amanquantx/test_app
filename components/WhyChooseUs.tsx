"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote, Users, Award, TrendingUp, Shield } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Materials Scientist',
      company: 'Advanced Gemstone Labs',
      content: 'Gems Pride\'s e-beam technology has revolutionized our gemstone enhancement process. The precision and consistency are unmatched in the industry.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Manufacturing',
      company: 'MedTech Solutions',
      content: 'Their medical sterilization services have been crucial for our device production. The documentation and technical support are exceptional.',
      rating: 5,
    },
    {
      name: 'Jennifer Park',
      role: 'R&D Director',
      company: 'Polymer Innovations Inc.',
      content: 'The crosslinking results we achieve with Gems Pride are consistently superior. Their technical expertise and support are world-class.',
      rating: 5,
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'text-primary-600' },
    { icon: Award, value: '99.9%', label: 'Success Rate', color: 'text-secondary-600' },
    { icon: TrendingUp, value: '10M+', label: 'Treatments', color: 'text-accent-700' },
    { icon: Shield, value: '100%', label: 'Reliability', color: 'text-primary-700' },
  ]

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Diagonal Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                fill="#FFFFFF"></path>
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
            <Users className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900">
            Trusted by Industry
            <br />
            <span className="text-primary-700">Leaders Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See what our clients say about our precision e-beam services and exceptional support.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold font-display text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] bg-white relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-primary-600" />
                </div>

                <CardContent className="p-0 relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg leading-relaxed text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm font-medium text-primary-700">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-display font-semibold mb-6 text-gray-900">
              Trusted by Leading Companies Worldwide
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {['Quality Systems', 'Advanced Technology', 'Global Standards', 'Industry Experience'].map((cert, index) => (
                <div key={cert} className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium text-gray-600">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 