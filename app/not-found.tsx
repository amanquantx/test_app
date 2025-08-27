import Link from 'next/link'
import { ArrowRight, Home, Search, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-display font-bold text-primary-700 mb-4">
          404
        </h1>
        
        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/services"
            className="inline-flex items-center justify-center border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <Search className="w-5 h-5 mr-2" />
            View Services
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
            Popular Pages
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/services"
              className="text-left p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <h4 className="font-semibold text-gray-900 group-hover:text-primary-700">
                E-Beam Services
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Gemstone enhancement, polymer crosslinking, medical sterilization
              </p>
            </Link>
            
            <Link
              href="/about"
              className="text-left p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <h4 className="font-semibold text-gray-900 group-hover:text-primary-700">
                About Gems Pride
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Learn about our expertise in electron beam technology
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 