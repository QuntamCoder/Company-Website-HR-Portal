import React from 'react';
import './css/CandidateFooter.css';

const CandidateFooter = () => {
  return (
    <footer className="candidate-portal-footer">
      <div className="candidate-portal-footer-container">
        <div className="candidate-portal-footer-content">
          <div className="candidate-portal-footer-brand">
            <h3 className="candidate-portal-footer-logo">CareerPortal</h3>
            <p className="candidate-portal-footer-slogan">Your trusted platform to find your dream job.</p>
          </div>

          <div className="candidate-portal-footer-nav">
            <div className="candidate-portal-footer-links-group">
              <a href="/privacy" className="candidate-portal-footer-link">Privacy Policy</a>
              <a href="/terms" className="candidate-portal-footer-link">Terms of Use</a>
              <a href="/contact" className="candidate-portal-footer-link">Contact</a>
            </div>
          </div>
        </div>

        <div className="candidate-portal-footer-legal">
          <p className="candidate-portal-footer-copyright">
            &copy; {new Date().getFullYear()} CareerPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CandidateFooter;