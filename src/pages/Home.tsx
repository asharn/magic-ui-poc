import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Home: React.FC = () => {
  return (
    <main className="container page-content">
      <div className="page-top">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">Landing</Link>
        </Button>
      </div>
      <h1>Welcome to MagicFinance</h1>
      <p>This is the Home page — quick links to get started.</p>
    </main>
  )
}

export default Home
