import React from 'react';
import './css/CandidateFooter.css';

const CandidateFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>CareerPortal</h3>
          <p>Your trusted platform to find your dream job.</p>
        </div>

        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CareerPortal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default CandidateFooter;
