
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>tenekecilik</h1>
      </div>
      <ul className="navbar-list">
        <li><Link to="/">Anasayfa</Link></li>
        <li><Link to="/hakkimizda">Hakkımızda</Link></li>
        <li><Link to="/galeri">Galeri</Link></li>
        <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
        <li><Link to="/iletisim">İletişim</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
