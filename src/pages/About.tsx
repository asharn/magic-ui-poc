import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const About: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="container page-content">
      <div className="page-top">
        <Button className="back-button" variant="ghost" size="sm" onClick={() => navigate(-1)}>Back</Button>
      </div>
      <h1>About MagicFinance</h1>
      <p>We build financial infrastructure for modern products.</p>
    </main>
  )
}

export default About
