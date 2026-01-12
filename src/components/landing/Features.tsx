import React from 'react'

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Core features</h2>
        <div className="cards">
          <div className="card">
            <h3>Secure payments</h3>
            <p>End-to-end encryption and fraud protection.</p>
          </div>
          <div className="card">
            <h3>Real-time analytics</h3>
            <p>Up-to-date dashboards and alerts for your business.</p>
          </div>
          <div className="card">
            <h3>Compliance-ready</h3>
            <p>Built for standards like PCI, SOC and local regulations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
