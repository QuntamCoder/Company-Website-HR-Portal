import React from 'react';
import './css/MainFooter.css';

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer-content">
        <div className="main-footer-section">
          <h4 className="main-footer-heading">CompanyName</h4>
          <p className="main-footer-description">We provide high-quality software services for businesses worldwide.</p>
        </div>

        <div className="main-footer-section">
          <h5 className="main-footer-subheading">Quick Links</h5>
          <ul className="main-footer-list">
            <li className="main-footer-item"><a href="/about" className="main-footer-link">About</a></li>
            <li className="main-footer-item"><a href="/services" className="main-footer-link">Services</a></li>
            <li className="main-footer-item"><a href="/careers" className="main-footer-link">Careers</a></li>
            <li className="main-footer-item"><a href="/contact" className="main-footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="main-footer-section">
          <h5 className="main-footer-subheading">Follow Us</h5>
          <ul className="main-footer-list">
            <li className="main-footer-item"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="main-footer-link">LinkedIn</a></li>
            <li className="main-footer-item"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="main-footer-link">Facebook</a></li>
            <li className="main-footer-item"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="main-footer-link">Twitter</a></li>
            <li className="main-footer-item"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="main-footer-link">Instagram</a></li>
          </ul>
        </div>

        <div className="main-footer-section">
          <h5 className="main-footer-subheading">Contact</h5>
          <p className="main-footer-contact"><span className="main-footer-contact-icon email"></span>Email: info@company.com</p>
          <p className="main-footer-contact"><span className="main-footer-contact-icon phone"></span>Phone: +91 8007081675</p>
          <p className="main-footer-contact"><span className="main-footer-contact-icon address"></span>Address: 1234 Bhosari, Pune City, India</p>
        </div>
      </div>

      <div className="main-footer-copyright">
        <p className="main-footer-copyright-text">© {new Date().getFullYear()} CompanyName. All rights reserved.</p>
      </div>
    </footer>
  );
}