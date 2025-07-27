import React from 'react';
import './css/ServicesSection.css'; // Ensure you have the correct path to your CSS file
// This component displays the services offered by the company
const ServicesSection = ({ servicesRef }) => {
  return (
    <section ref={servicesRef} className="section services-section">
      <h2>Our Services</h2>
      <p>
        At BrandName, we offer a comprehensive range of technology solutions
        tailored to meet the unique needs of startups, enterprises, and
        everything in between. Our services are designed to help you build,
        scale, and maintain your digital presence with confidence and clarity.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            From responsive websites to complex web applications, our
            development team crafts user-friendly, high-performance solutions
            that align with your brand and business objectives. We use modern
            frameworks like React, Next.js, and Node.js to deliver fast,
            scalable results.
          </p>
        </div>

        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>
            We build custom mobile applications for iOS and Android using native
            technologies and cross-platform frameworks like Flutter and React
            Native. Our apps are optimized for performance, user engagement, and
            long-term maintainability.
          </p>
        </div>

        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>
            Leverage the power of the cloud to enhance scalability, reduce
            infrastructure costs, and increase data security. We provide
            end-to-end cloud consulting, migration, and management services
            across platforms such as AWS, Azure, and Google Cloud.
          </p>
        </div>

        <div className="service-card">
          <h3>Technical Support</h3>
          <p>
            Our 24/7 technical support ensures your systems are running smoothly
            at all times. Whether it's system monitoring, bug fixing, or
            on-demand IT assistance, we act as an extension of your in-house
            team to keep your operations uninterrupted.
          </p>
        </div>
      </div>

      <div className="additional-services">
        <h3>Additional Offerings</h3>
        <ul className="services-list">
          <li>UI/UX Design & Prototyping</li>
          <li>API Development & Integration</li>
          <li>DevOps & CI/CD Implementation</li>
          <li>eCommerce Solutions</li>
          <li>Custom CRM/ERP Development</li>
          <li>Cybersecurity Audits & Penetration Testing</li>
          <li>Legacy System Modernization</li>
        </ul>
      </div>

      <p>
        No matter the challenge, our cross-functional team brings deep technical
        expertise and a user-first mindset to every project. Let us help you
        turn your digital vision into a powerful reality.
      </p>
    </section>
  );
};
export default ServicesSection;