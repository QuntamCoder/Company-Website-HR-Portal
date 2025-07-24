import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h4>CompanyName</h4>
          <p>We provide high-quality software services for businesses worldwide.</p>
        </div>

        <div>
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5>Follow Us</h5>
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <p>Email: info@company.com</p>
          <p>Phone: +91 8007081675</p>
          <p>Address: 1234 Bhosari, Pune City, India</p>
        </div>
      </div>

      <div>
        <p>© {new Date().getFullYear()} CompanyName. All rights reserved.</p>
      </div>
    </footer>
  );
}