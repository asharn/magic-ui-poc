import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer fixed-footer">
      <div className="container footer-inner">
        <div className="left">© {new Date().getFullYear()} MagicFinance</div>
        <div className="right">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/terms">Terms</Link>
          </Button>
          <span> · </span>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/privacy">Privacy</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
