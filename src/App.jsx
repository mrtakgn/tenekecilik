import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Gallery from './component/Gallery'
import Services from './component/Services'
import Contact from './component/Contact'
import ScrollToTop from './component/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
