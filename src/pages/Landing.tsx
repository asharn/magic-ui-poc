import React from 'react'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import Stats from '../components/landing/Stats'
import Testimonial from '../components/landing/Testimonial'
import Pricing from '../components/landing/Pricing'
import CTA from '../components/landing/CTA'
import '../components/landing/landing.css'
import { Marquee } from '@/components/ui/marquee'
import AnimatedList from '@/components/ui/animated-list'

const Landing: React.FC = () => {
  return (
    <div className="magic-landing">
      
      <Hero />
      <Marquee>
        Trusted by teams across 100+ countries — secure, compliant, and fast
      </Marquee>
      <section className="container mx-auto px-4 py-8">
        <AnimatedList delay={900}>
          <div>Instant onboarding and API keys</div>
          <div>Enterprise-grade security and SSO</div>
          <div>99.99% uptime and global coverage</div>
          <div>Developer-friendly SDKs and docs</div>
        </AnimatedList>
      </section>
      <Features />
      <Stats />
      <Testimonial />
      <Pricing />
      <CTA />
    </div>
  )
}

export default Landing
