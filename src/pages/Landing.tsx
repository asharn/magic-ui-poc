import React from 'react'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import Stats from '../components/landing/Stats'
import Testimonial from '../components/landing/Testimonial'
import Pricing from '../components/landing/Pricing'
import CTA from '../components/landing/CTA'
import '../components/landing/landing.css'

const Landing: React.FC = () => {
  return (
    <div className="magic-landing">
      <Hero />
      <Features />
      <Stats />
      <Testimonial />
      <Pricing />
      <CTA />
    </div>
  )
}

export default Landing
