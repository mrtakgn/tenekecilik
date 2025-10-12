
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>⚡ Tenekecilik Ustası</h1>
      </div>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Menü">
        <span className={isMenuOpen ? "active" : ""}></span>
        <span className={isMenuOpen ? "active" : ""}></span>
        <span className={isMenuOpen ? "active" : ""}></span>
      </button>

      <ul className={`navbar-list ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Anasayfa</Link></li>
        <li><Link to="/hakkimizda" onClick={closeMenu}>Hakkımızda</Link></li>
        <li><Link to="/galeri" onClick={closeMenu}>Galeri</Link></li>
        <li><Link to="/hizmetlerimiz" onClick={closeMenu}>Hizmetlerimiz</Link></li>
        <li><Link to="/iletisim" onClick={closeMenu}>İletişim</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
