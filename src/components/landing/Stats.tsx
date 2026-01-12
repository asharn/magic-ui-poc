import React from 'react'

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="stat-item">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
)

const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <StatItem value="$1B+" label="Processed" />
          <StatItem value="99.99%" label="Uptime" />
          <StatItem value="500+" label="Customers" />
          <StatItem value="80ms" label="Median latency" />
        </div>
      </div>
    </section>
  )
}

export default Stats
