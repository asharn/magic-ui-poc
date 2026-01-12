import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <div className="tiers">
          <div className="tier">
            <h3>Starter</h3>
            <p>Free up to $5k/month</p>
            <Button variant="outline" asChild>
              <Link to="/trial">Choose</Link>
            </Button>
          </div>
          <div className="tier popular">
            <h3>Pro</h3>
            <p>For growing teams</p>
            <Button variant="default" asChild>
              <Link to="/trial">Choose</Link>
            </Button>
          </div>
          <div className="tier">
            <h3>Enterprise</h3>
            <p>Custom plans & SLAs</p>
            <Button variant="ghost" asChild>
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
