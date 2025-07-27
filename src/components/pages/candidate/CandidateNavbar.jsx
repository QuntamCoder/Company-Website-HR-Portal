import React, { useState } from 'react';
import './css/CandidateNavbar.css';
import CareerSection from '../company-website/CareerSection';
import CandidateFooter from './CandidateFooter';

const CandidateNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">CareerPortal</h2>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          
          <li><a href="/jobs" className="nav-link">Jobs</a></li>
          <li><a href="/applications" className="nav-link">My Applications</a></li>
          <li><a href="/profile" className="nav-link">Profile</a></li>
          <li><a href="/settings" className="nav-link">Settings</a></li>
          <li><button className="cta-button">Logout</button></li>
        </ul>
      </div>
      
    </nav>
    <CareerSection/>
    <CandidateFooter/>
    </div>
  );
};

export default CandidateNavbar;
