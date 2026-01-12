import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Privacy: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="container page-content">
      <div className="page-top">
        <Button className="back-button" variant="ghost" size="sm" onClick={() => navigate(-1)}>Back</Button>
      </div>
      <h1>Privacy Policy</h1>
      <p>Placeholder privacy policy. Replace with your company's policy.</p>
    </main>
  )
}

export default Privacy
