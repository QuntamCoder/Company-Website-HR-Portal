import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/MainNavbar.css";

const MainNavbar = ({ onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    onScrollTo[section]();
    setIsMenuOpen(false);
  };

  // const handleCareerClick = () => {
  //   navigate("/candidate-auth");
  // };

  return (
    <nav className="main-navbar">
      <div className="main-navbar-container">
        <a
          href="#"
          className="main-navbar-logo"
          onClick={() => handleNavClick("hero")}
        >
          BrandName
        </a>

        <button className="main-navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`main-navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="main-navbar-item">
            <a href="#" onClick={() => handleNavClick("hero")}>
              Home
            </a>
          </li>
          <li className="main-navbar-item">
            <a href="#" onClick={() => handleNavClick("about")}>
              About
            </a>
          </li>
          <li className="main-navbar-item">
            <a href="#" onClick={() => handleNavClick("services")}>
              Services
            </a>
          </li>
          <li className="main-navbar-item">
            <a href="#" onClick={() => handleNavClick("blog")}>
              Blog
            </a>
          </li>
          <li className="main-navbar-item">
            <Link to="/candidate-dashboard" className="nav-link">
              Careers
            </Link>
          </li>{" "}
        </ul>

        <div className={`main-navbar-right ${isMenuOpen ? "active" : ""}`}>
          <div className="main-navbar-search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="main-navbar-auth">
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
