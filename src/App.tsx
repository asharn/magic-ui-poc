import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import About from './pages/About'
import Contact from './pages/Contact'
import Trial from './pages/Trial'
import Header from './components/landing/Header'
import Footer from './components/landing/Footer'

function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* /home removed: Home is Landing */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trial" element={<Trial />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
