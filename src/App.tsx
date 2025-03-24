import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Commissions from './pages/Commissions'
import PrintsAndCards from './pages/PrintsAndCards'
import './App.css'

function App() {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/prints-and-cards" element={<PrintsAndCards />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
