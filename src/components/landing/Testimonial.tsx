import React from 'react'
import { Globe } from '@/components/ui/globe'

const Testimonial: React.FC = () => (
  <section className="testimonial">
    <div className="container testimonial-inner">
      <div className="testimonial-content">
        <p className="testimonial-quote">“MagicFinance gave us a single API to handle global payments and compliance — rolling out internationally was painless.”</p>
        <div className="testimonial-meta">— ABC XYZ, CFO at Magic Capital</div>
      </div>
      <div className="testimonial-visual">
        <div className="globe-wrap"><Globe inline /></div>
      </div>
    </div>
  </section>
)

export default Testimonial
