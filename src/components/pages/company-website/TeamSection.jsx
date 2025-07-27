import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import './css/TeamSection.css'; // Ensure you have the correct path to your CSS file
const TeamSection = ({ teamRef }) => {
  // Only 4 team members
  const teamMembers = [
    {
      name: "Shubham kale",
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

  return (
    <section ref={teamRef} className="section team-section">
      <h2>Meet Our Team</h2>
      <p className="team-description">
        Our success is driven by a passionate team of professionals who bring
        deep expertise, creativity, and commitment to every project. Get to know
        the people behind our company.
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
                e.target.src =
                  "https://via.placeholder.com/150?text=Team+Member";
              }}
            />
            <h3>
              {member.name} <span>{member.position}</span>
            </h3>
            <p>{member.bio}</p>
            <div className="social-links">
              {member.social.includes("linkedin") && (
                <a href="#">
                  <FaLinkedin />
                </a>
              )}
              {member.social.includes("twitter") && (
                <a href="#">
                  <FaTwitter />
                </a>
              )}
              {member.social.includes("github") && (
                <a href="#">
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="team-closing">
        Together, our team blends innovation, technical excellence, and a deep
        commitment to client success. We're more than a service provider—we're
        your technology partner.
      </p>
    </section>
  );
};

export default TeamSection;