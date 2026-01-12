import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Trial: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="container page-content">
      <div className="page-top">
        <Button className="back-button" variant="ghost" size="sm" onClick={() => navigate(-1)}>Back</Button>
      </div>
      <h1>Start Free Trial</h1>
      <p>Enter your company details to start a free trial.</p>
    </main>
  )
}

export default Trial
