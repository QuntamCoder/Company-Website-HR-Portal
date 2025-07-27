import React from 'react';
import './css/AboutSection.css'; // Ensure you have the correct path to your CSS file
const AboutSection = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="section about-section">
      <h2>About Us</h2>
      <p>
        We are a service-based IT company specializing in end-to-end digital
        solutions. Our mission is to empower businesses with scalable technology
        that drives innovation and efficiency.
      </p>
      <p>
        With over 10 years of industry experience, we've helped startups,
        enterprises, and public institutions build reliable, secure, and
        user-friendly software systems. Our team of certified developers,
        designers, and IT consultants work closely with clients to ensure
        solutions are aligned with their business goals.
      </p>
      <p>
        We believe in transparency, long-term partnerships, and continuous
        innovation. Whether you're launching a new product or modernizing legacy
        systems, we are here to help you succeed in a fast-changing digital
        landscape.
      </p>

      {/* Optional Stats Section */}
      <div className="about-stats">
        <div className="stat-item">
          <div className="stat-number">10+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">200+</div>
          <div className="stat-label">Clients Worldwide</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Team Members</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">99%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;