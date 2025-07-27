import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate
import './css/CandidateNavbar.css';
import CareerSection from '../company-website/CareerSection';
import CandidateFooter from './CandidateFooter';

const CandidateNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Optional: clear session or localStorage if used
    // localStorage.removeItem('user');
    
    alert("Logged out successfully!");
    navigate("/"); // ✅ redirect to main page (CompanyWebsite)
  };

  return (
    <div className="candidate-portal-wrapper">
      <nav className="candidate-portal-nav">
        <div className="candidate-portal-nav-container">
          <h2 className="candidate-portal-nav-logo">CareerPortal</h2>

          <div 
            className={`candidate-portal-hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span className="candidate-portal-hamburger-line"></span>
            <span className="candidate-portal-hamburger-line"></span>
            <span className="candidate-portal-hamburger-line"></span>
          </div>

          <ul className={`candidate-portal-nav-menu ${menuOpen ? 'active' : ''}`}>
            <li className="candidate-portal-nav-item"><a href="/jobs" className="candidate-portal-nav-link">Jobs</a></li>
            <li className="candidate-portal-nav-item"><a href="/applications" className="candidate-portal-nav-link">My Applications</a></li>
            <li className="candidate-portal-nav-item"><a href="/profile" className="candidate-portal-nav-link">Profile</a></li>
            <li className="candidate-portal-nav-item"><a href="/settings" className="candidate-portal-nav-link">Settings</a></li>
            <li className="candidate-portal-nav-item">
              <button className="candidate-portal-nav-cta" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
      <CareerSection />
      <CandidateFooter />
    </div>
  );
};

export default CandidateNavbar;
