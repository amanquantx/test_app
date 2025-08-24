import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="jewelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="12.5%" stopColor="#EA580C" />
            <stop offset="25%" stopColor="#C2185B" />
            <stop offset="37.5%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="62.5%" stopColor="#0891B2" />
            <stop offset="75%" stopColor="#059669" />
            <stop offset="87.5%" stopColor="#CA8A04" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Jewel Polygon Shape */}
        <polygon
          points="50,10 70,25 80,50 70,75 50,90 30,75 20,50 30,25"
          fill="url(#jewelGradient)"
          filter="url(#glow)"
          className="drop-shadow-lg"
        />
        
        {/* Inner facets for jewel effect */}
        <polygon
          points="50,10 60,30 50,45 40,30"
          fill="rgba(255,255,255,0.2)"
        />
        <polygon
          points="50,55 60,70 50,90 40,70"
          fill="rgba(255,255,255,0.1)"
        />
        <polygon
          points="35,35 50,45 35,55"
          fill="rgba(255,255,255,0.15)"
        />
        <polygon
          points="65,35 50,45 65,55"
          fill="rgba(255,255,255,0.15)"
        />
      </svg>
    </div>
  )
}

export default Logo 