import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/">MagicFinance</Link>
        </div>
        <nav className="nav">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/about">About</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/terms">Terms</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/privacy">Privacy</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/trial">Start trial</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
