import React from 'react'
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">Finance made magical</h1>
            <p className="hero-sub">Powerful, secure, and compliant financial tooling for modern businesses.</p>
            <div className="hero-cta">
              <Button asChild>
                <Link to="/trial">Get started</Link>
              </Button>
              <a className="hero-secondary" href="#pricing">See pricing</a>
            </div>
          </div>
          <div className="hero-visual">
            <Globe inline />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
