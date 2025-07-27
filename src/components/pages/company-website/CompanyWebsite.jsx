import React, { useRef } from "react";
import MainNavbar from "../../pages/company-website/Navbar.jsx";
import MainFooter from "../../pages/company-website/Footer.jsx";

import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import ServicesSection from "./ServicesSection.jsx";
import BlogSection from "./BlogSection.jsx";
import TeamSection from "./TeamSection.jsx";
import CareerSection from "./CareerSection.jsx";
import ContactForm from "./ContactForm.jsx";

const CompanyWebsite = () => {
  // Section Refs
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const teamRef = useRef(null);
  // const careerRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Global Navbar with navigation scrolls */}
      <MainNavbar
        onScrollTo={{
          hero: scrollToSection(heroRef),
          about: scrollToSection(aboutRef),
          services: scrollToSection(servicesRef),
          blog: scrollToSection(blogRef),
          team: scrollToSection(teamRef),
          // careers: scrollToSection(careerRef),
          contact: scrollToSection(contactRef),
        }}
      />

      {/* Section Components with attached refs */}
      <section ref={heroRef}>
        <HeroSection />
      </section>

      <section ref={aboutRef}>
        <AboutSection />
      </section>

      <section ref={servicesRef}>
        <ServicesSection />
      </section>

      <section ref={blogRef}>
        <BlogSection />
      </section>

      <section ref={teamRef}>
        <TeamSection />
      </section>

      {/* <section ref={careerRef}>
        <CareerSection />
      </section> */}

      <section ref={contactRef}>
        <ContactForm />
      </section>

      {/* Global Footer */}
      <MainFooter />
    </div>
  );
};

export default CompanyWebsite;
