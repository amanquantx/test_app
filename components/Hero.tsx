"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Zap, Shield, Target, Award, Diamond, Atom, Heart, Sparkles } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Target, value: '99.9%', label: 'Precision Rate' },
    { icon: Shield, value: '5,000+', label: 'Treatments' },
    { icon: Zap, value: '24/7', label: 'Monitoring' },
  ]

  const applications = [
    {
      id: 1,
      title: 'Gemstone Enhancement',
      description: 'Precision color transformation of gemstones and precious stones',
      icon: Diamond,
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      accentColor: 'text-white', // ✅ changed
      bgPattern: 'radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
      features: ['Color Enhancement', 'Clarity Improvement', 'Professional Results'],
      backgroundImage: '/gemstone-enhancement.jpg'
    },
    {
      id: 2,
      title: 'Polymer Crosslinking',
      description: 'Advanced material modification for enhanced strength and durability',
      icon: Atom,
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      accentColor: 'text-white',
      bgPattern: 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
      features: ['Medical Tubing', 'Wire Insulation', 'Industrial Components'],
      backgroundImage: '/polymer-crosslinking.jpg'
    },
    {
      id: 3,
      title: 'Medical Sterilization',
      description: 'Complete Pathogen Elimination for Medical Devices',
      icon: Heart,
      gradient: 'from-red-400 via-pink-500 to-rose-600',
      accentColor: 'text-white',
      bgPattern: 'radial-gradient(circle at 50% 60%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
      features: ['99.99% Sterility', 'Medical Devices', 'Reliable Process'],
      backgroundImage: '/medical-sterilization.jpg'
    },
    {
      id: 4,
      title: 'Material Enhancement',
      description: 'Custom electron beam treatments for specialized applications',
      icon: Sparkles,
      gradient: 'from-amber-400 via-orange-500 to-yellow-600',
      accentColor: 'text-white',
      bgPattern: 'radial-gradient(circle at 40% 70%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
      features: ['Custom Solutions', 'Research & Development', 'Premium Quality'],
      backgroundImage: '/material-enhancement.jpg'
    }
  ]

  const [currentApplication, setCurrentApplication] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApplication((prev) => (prev + 1) % applications.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const currentApp = applications[currentApplication]

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#065F4608_1px,transparent_1px),linear-gradient(to_bottom,#065F4608_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] py-20">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary-50 text-primary-800 border-primary-200 hover:bg-primary-100 transition-colors">
                <Zap className="w-4 h-4 mr-2" />
                Advanced E-Beam Technology
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight text-gray-900 leading-tight">
                Precision
                <br />
                <span className="text-primary-700">
                  E-Beam Services
                </span>
                <br />
                for Modern Industry
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              Transform materials with precision electron beam technology. From gemstone enhancement to medical sterilization, 
              we deliver consistent, documented results with industry-leading accuracy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="px-8 py-6 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300"
              >
                <Link href="/services" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  View Services
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="group text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="text-2xl font-bold font-display text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - E-Beam Applications Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentApp.id}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* Main Application Card */}
                  <div className="relative h-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={currentApp.backgroundImage}
                        alt={currentApp.title}
                        fill
                        className="object-cover opacity-100"  // make a bit more visible
                        priority={currentApplication === 0}
                      />
                    </div>
                    
                    {/* Background Gradient Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3), transparent), ${currentApp.bgPattern}`
                      }}
                    ></div>
                    
                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col justify-between bg-white/1 backdrop-blur-sm">
                      {/* Header */}
                      <div className="text-center">
                        <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${currentApp.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <currentApp.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3
                          className={`text-2xl font-display font-bold mb-3 ${currentApp.accentColor}`}
                          style={{ textShadow: '0px 2px 6px rgba(0,0,0,0.6)' }}
                        >
                          {currentApp.title}
                        </h3>

                        <p
                          className={`leading-relaxed font-medium ${currentApp.accentColor}`}
                          style={{ textShadow: '0px 1px 4px rgba(0,0,0,0.5)' }}
                        >
                          {currentApp.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {currentApp.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${currentApp.gradient} rounded-full shadow-sm`}></div>
                            <span className={`text-sm font-semibold ${currentApp.accentColor}`}>
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${currentApp.gradient} rounded-full opacity-25 animate-pulse shadow-lg`}></div>
                    <div className={`absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br ${currentApp.gradient} rounded-full opacity-35 animate-pulse shadow-lg`} style={{ animationDelay: '1s' }}></div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Application Indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {applications.map((app, index) => (
                  <button
                    key={app.id}
                    onClick={() => setCurrentApplication(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentApplication 
                        ? 'bg-primary-600 scale-125 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-xl shadow-lg flex items-center justify-center"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 