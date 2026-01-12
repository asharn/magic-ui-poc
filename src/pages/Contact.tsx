import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Contact: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="container page-content">
      <div className="page-top">
        <Button className="back-button" variant="ghost" size="sm" onClick={() => navigate(-1)}>Back</Button>
      </div>
      <h1>Contact Sales</h1>
      <p>Fill out the form or email sales@magicfinance.example to get in touch.</p>
    </main>
  )
}

export default Contact
