import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Terms: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="container page-content">
      <div className="page-top">
        <Button className="back-button" variant="ghost" size="sm" onClick={() => navigate(-1)}>Back</Button>
      </div>
      <h1>Terms of Service</h1>
      <p>These are placeholder terms. Replace with your legal text.</p>
    </main>
  )
}

export default Terms
