"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Zap, Mail, Phone, MapPin, ArrowRight} from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Gemstone Enhancement', href: '/services#gemstone' },
      { name: 'Custom Solutions', href: '/services#custom' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/about#process' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Get Quote', href: '/contact#quote' },
    ],
  }

  const socialLinks = [
    { name: 'Whatsapp', href: 'https://wa.me/917977753638', icon: FaWhatsapp },
  ];

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-950/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl blur opacity-20"></div>
                  </div>
                  <span className="text-2xl font-bold font-display text-gray-900">
                    Gems Pride
                  </span>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Leading provider of precision electron beam services for gemstone enhancement, 
                  polymer crosslinking, and medical sterilization with over 10 years of expertise.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span>+91 79777 53638</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span>yagnikdurgesh@gmail.comde.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span>India</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-6 h-6 text-green-500" />
                  </a>
                ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-3 gap-12 lg:gap-16">
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-display font-semibold text-gray-900">Services</h3>
                  <ul className="space-y-4">
                    {footerLinks.services.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-primary-700 transition-colors group flex items-center"
                        >
                          {link.name}
                          <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-display font-semibold text-gray-900">Company</h3>
                  <ul className="space-y-4">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-primary-700 transition-colors group flex items-center"
                        >
                          {link.name}
                          <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Support */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-display font-semibold text-gray-900">Support</h3>
                  <ul className="space-y-4 mb-8">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-primary-700 transition-colors group flex items-center"
                        >
                          {link.name}
                          <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className="bg-primary-700 hover:bg-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500"
            >
              <p>&copy; {currentYear} Gems Pride. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-primary-700 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary-700 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </motion.div>

            {/* Quality Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2 text-sm text-gray-500"
            >
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span> Electron Beam Services</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 