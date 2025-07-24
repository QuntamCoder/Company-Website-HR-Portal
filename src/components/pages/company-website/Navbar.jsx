import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    onScrollTo[section]();
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={() => handleNavClick('hero')}>
          BrandName
        </a>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#" onClick={() => handleNavClick('hero')}>Home</a></li>
          <li className="nav-item"><a href="#" onClick={() => handleNavClick('about')}>About</a></li>
          <li className="nav-item"><a href="#" onClick={() => handleNavClick('services')}>Services</a></li>
          <li className="nav-item"><a href="#" onClick={() => handleNavClick('blog')}>Blog</a></li>
           <li className="nav-item"><a href="#" onClick={() => handleNavClick('careers')}>Careers</a></li>
        </ul>

        <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="auth">
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;