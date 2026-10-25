import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Gallery from './component/Gallery'
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
            <Route path="/galeri" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
