import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './css/TeamSection.css';

const TeamSection = ({ teamRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  // Team members data
  const teamMembers = [
    {
      name: "Shubham Kale",
      position: "CEO & Co-Founder",
      bio: "With over 15 years of leadership experience in the tech industry, Sarah oversees strategy, partnerships, and innovation at our company.",
      social: ["linkedin", "twitter"],
      img: "/team/hulk.jpg",
    },
    {
      name: "Dhanashri Bhamare",
      position: "Chief Technology Officer",
      bio: "David leads our engineering team with a focus on architecture, performance, and cutting-edge technology solutions.",
      social: ["linkedin", "github"],
      img: "/team/dr-strange.jpg",
    },
    {
      name: "Amol Jadhav",
      position: "Head of Design",
      bio: "Alicia combines aesthetics with usability to create intuitive and beautiful digital experiences for our clients.",
      social: ["linkedin", "twitter"],
      img: "/team/iron-man.jpg",
    },
    {
      name: "Ketan Naik",
      position: "Lead DevOps Engineer",
      bio: "Michael ensures our infrastructure is robust, scalable, and secure with his expertise in cloud technologies.",
      social: ["linkedin", "github"],
      img: "/team/iron-man-2.jpg",
    },
  ];

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Handle touch start for swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move for swipe
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end and determine swipe direction
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Navigate to next team member
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous team member
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentIndex]);

  return (
    <section ref={teamRef} className="teamx-section">
      <h2>Meet Our Team</h2>
      <p className="teamx-description">
        Our success is driven by a passionate team of professionals who bring
        deep expertise, creativity, and commitment to every project. Get to know
        the people behind our company.
      </p>

      {/* Desktop Grid View */}
      <div className="teamx-grid teamx-desktop-view">
        {teamMembers.map((member, index) => (
          <div key={`${member.name}-${index}`} className="teamx-member">
            <div className="teamx-photo-container">
              <img
                src={member.img}
                alt={member.name}
                className="teamx-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150?text=Team+Member";
                }}
              />
            </div>
            <h3>
              {member.name} <span>{member.position}</span>
            </h3>
            <p>{member.bio}</p>
            <div className="teamx-social-links">
              {member.social.includes("linkedin") && (
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              )}
              {member.social.includes("twitter") && (
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
              )}
              {member.social.includes("github") && (
                <a href="#" aria-label="GitHub">
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="teamx-mobile-view">
        <div className="teamx-carousel-container">
          <div
            className="teamx-carousel-wrapper"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div key={`mobile-${member.name}-${index}`} className="teamx-carousel-slide">
                <div className="teamx-member">
                  <div className="teamx-photo-container">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="teamx-photo"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150?text=Team+Member";
                      }}
                    />
                  </div>
                  <h3>
                    {member.name} <span>{member.position}</span>
                  </h3>
                  <p>{member.bio}</p>
                  <div className="teamx-social-links">
                    {member.social.includes("linkedin") && (
                      <a href="#" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.includes("twitter") && (
                      <a href="#" aria-label="Twitter">
                        <FaTwitter />
                      </a>
                    )}
                    {member.social.includes("github") && (
                      <a href="#" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="teamx-carousel-btn teamx-prev" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className="teamx-carousel-btn teamx-next" onClick={handleNext}>
            <FaChevronRight />
          </button>

          {/* Indicators */}
          <div className="teamx-carousel-indicators">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`teamx-indicator${index === currentIndex ? ' active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="teamx-closing">
        Together, our team blends innovation, technical excellence, and a deep
        commitment to client success. We're more than a service provider—we're
        your technology partner.
      </p>
    </section>
  );
};

export default TeamSection;