// import './CompanyWebsite.css'; // You can define styles here or inline
import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../pages/company-website/Navbar.jsx'; // Assuming Navbar is separate
import Footer from '../../pages/company-website/Footer.jsx';
import './ContactForm.css';
import './AboutSection.css'; 
import './HeroSection.css';
import './ServicesSection.css';
import './BlogSection.css';
import './TeamSection.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import CareerSection from './CareerSection.jsx';


 // Assuming you have styles for the Services section
// Assuming you have styles for the About section  

const ContactForm = ({ contactRef }) => {
  return (
    <section ref={contactRef} className="section contact-section">
      <h2>Contact Us</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
          alert('Form submitted!');
        }}
      >
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button type="submit">
          Submit Message
        </button>
      </form>
    </section>
  );
};

const AboutSection = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="section about-section">
      <h2>About Us</h2>
      <p>
        We are a service-based IT company specializing in end-to-end digital solutions. Our mission is to empower businesses
        with scalable technology that drives innovation and efficiency.
      </p>
      <p>
        With over 10 years of industry experience, we've helped startups, enterprises, and public institutions build
        reliable, secure, and user-friendly software systems. Our team of certified developers, designers, and IT consultants
        work closely with clients to ensure solutions are aligned with their business goals.
      </p>
      <p>
        We believe in transparency, long-term partnerships, and continuous innovation. Whether you're launching a new product
        or modernizing legacy systems, we are here to help you succeed in a fast-changing digital landscape.
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

const HeroSection = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="section hero-section">
      <div className="hero-content">
        <h1>Welcome to BrandName</h1>
        <p>
          Empowering businesses with innovative technology solutions tailored for growth, efficiency, and impact.
        </p>
        <p>
          Whether you're a startup looking to build your first product or an enterprise aiming to modernize your tech stack,
          BrandName delivers the expertise and support you need to thrive in today's digital landscape.
        </p>
        <p>
          <strong>Let's build the future together.</strong> Get in touch with us to start your digital transformation journey.
        </p>
        
        <div className="hero-cta">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};
const ServicesSection = ({ servicesRef }) => {
  return (
    <section ref={servicesRef} className="section services-section">
      <h2>Our Services</h2>
      <p>
        At BrandName, we offer a comprehensive range of technology solutions tailored to meet the unique needs of startups, enterprises, and everything in between. Our services are designed to help you build, scale, and maintain your digital presence with confidence and clarity.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            From responsive websites to complex web applications, our development team crafts user-friendly, high-performance solutions that align with your brand and business objectives. We use modern frameworks like React, Next.js, and Node.js to deliver fast, scalable results.
          </p>
        </div>

        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>
            We build custom mobile applications for iOS and Android using native technologies and cross-platform frameworks like Flutter and React Native. Our apps are optimized for performance, user engagement, and long-term maintainability.
          </p>
        </div>

        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>
            Leverage the power of the cloud to enhance scalability, reduce infrastructure costs, and increase data security. We provide end-to-end cloud consulting, migration, and management services across platforms such as AWS, Azure, and Google Cloud.
          </p>
        </div>

        <div className="service-card">
          <h3>Technical Support</h3>
          <p>
            Our 24/7 technical support ensures your systems are running smoothly at all times. Whether it's system monitoring, bug fixing, or on-demand IT assistance, we act as an extension of your in-house team to keep your operations uninterrupted.
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
        No matter the challenge, our cross-functional team brings deep technical expertise and a user-first mindset to every project. Let us help you turn your digital vision into a powerful reality.
      </p>
    </section>
  );
};


const BlogSection = ({ blogRef }) => {
  return (
    <section ref={blogRef} className="section blog-section">
      <h2>Our Blog</h2>
      <p>
        Stay informed with the latest industry trends, expert insights, and practical tips from our team. Our blog is where we share thought leadership, tech tutorials, product updates, and more.
      </p>

      <div className="blog-articles">
        <article className="blog-article">
          <h3>5 Emerging Tech Trends Every Business Should Watch in 2025</h3>
          <p>
            From AI-powered automation to decentralized platforms, we explore the key technologies set to reshape the business landscape in the coming year.
          </p>
          <em>Posted on July 12, 2025</em>
        </article>

        <article className="blog-article">
          <h3>Why Your Business Needs a Scalable Cloud Infrastructure</h3>
          <p>
            Discover how migrating to the cloud can improve flexibility, reduce costs, and enable faster innovation—plus tips to make your transition smooth.
          </p>
          <em>Posted on June 28, 2025</em>
        </article>

        <article className="blog-article">
          <h3>Understanding the Basics of DevOps: A Beginner's Guide</h3>
          <p>
            DevOps isn't just a buzzword—it's a cultural shift. Learn how development and operations teams can work together to build better, faster, and more reliably.
          </p>
          <em>Posted on June 10, 2025</em>
        </article>
      </div>

      <p>
        <strong>Explore more articles on digital transformation, software engineering best practices, and IT management strategies in our full blog archive.</strong>
        <br />
        <a href="/blog" className="view-all-btn">View All Articles</a>
      </p>
    </section>
  );
};




const TeamSection = ({ teamRef }) => {
  // Only 4 team members
  const teamMembers = [
    {
      name: "Sarah Thompson",
      position: "CEO & Co-Founder",
      bio: "With over 15 years of leadership experience in the tech industry, Sarah oversees strategy, partnerships, and innovation at our company.",
      social: ["linkedin", "twitter"],
      img: "/team/sarah.jpg"
    },
    {
      name: "David Patel",
      position: "Chief Technology Officer",
      bio: "David leads our engineering team with a focus on architecture, performance, and cutting-edge technology solutions.",
      social: ["linkedin", "github"],
      img: "/team/david.jpg"
    },
    {
      name: "Alicia Kim",
      position: "Head of Design",
      bio: "Alicia combines aesthetics with usability to create intuitive and beautiful digital experiences for our clients.",
      social: ["linkedin", "twitter"],
      img: "/team/alicia.jpg"
    },
    {
      name: "Michael Rivera",
      position: "Lead DevOps Engineer",
      bio: "Michael ensures our infrastructure is robust, scalable, and secure with his expertise in cloud technologies.",
      social: ["linkedin", "github"],
      img: "/team/michael.jpg"
    }
  ];

  return (
    <section ref={teamRef} className="section team-section">
      <h2>Meet Our Team</h2>
      <p className="team-description">
        Our success is driven by a passionate team of professionals who bring deep expertise, 
        creativity, and commitment to every project. Get to know the people behind our company.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={`${member.name}-${index}`} className="team-member">
            <img 
              src={member.img} 
              alt={member.name} 
              className="team-photo" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/150?text=Team+Member";
              }}
            />
            <h3>{member.name} <span>{member.position}</span></h3>
            <p>{member.bio}</p>
            <div className="social-links">
              {member.social.includes("linkedin") && (
                <a href="#"><FaLinkedin /></a>
              )}
              {member.social.includes("twitter") && (
                <a href="#"><FaTwitter /></a>
              )}
              {member.social.includes("github") && (
                <a href="#"><FaGithub /></a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="team-closing">
        Together, our team blends innovation, technical excellence, and a deep commitment 
        to client success. We're more than a service provider—we're your technology partner.
      </p>
    </section>
  );
};


const CompanyWebsite = () => {
  // Refs for different sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const teamRef = useRef(null);
  const careerRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Navbar with scroll handlers */}
      <Navbar
        onScrollTo={{
          hero: scrollToSection(heroRef),
          about: scrollToSection(aboutRef),
          services: scrollToSection(servicesRef),
          blog: scrollToSection(blogRef),
          contact: scrollToSection(contactRef),
          team: scrollToSection(teamRef),
          careers: scrollToSection(careerRef)
        }}
      />

      {/* Sections */}


      <HeroSection heroRef={heroRef} />
      <AboutSection aboutRef={aboutRef} />
      <ServicesSection servicesRef={servicesRef} />

      <BlogSection blogRef={blogRef} />
      <TeamSection teamRef={teamRef} />
      <CareerSection careerRef={careerRef} />
      
      {/* Contact Form */}
      <ContactForm contactRef={contactRef} />

      {/* Footer */}
<Footer />
    </div>
  );
};

export default CompanyWebsite;
