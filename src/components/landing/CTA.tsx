import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div className="cta-copy">
          <h2>Ready to make finance magical?</h2>
          <p>Start with a free trial and scale with confidence — secure, compliant, and fast.</p>
        </div>
        <div className="cta-actions">
          <Button size="lg" asChild>
            <Link to="/trial">Start free trial</Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link to="/contact">Contact sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
