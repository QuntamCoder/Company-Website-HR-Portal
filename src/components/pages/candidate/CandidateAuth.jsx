import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import './css/CandidateAuth.css';

const CandidateAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', formData);
      // call login API
    } else {
      console.log('Signing up with:', formData);
      // call signup API
    }
  };

  return (
    <div className="auth-container">
      {/* Left Side - Branding Section */}
      <div className="branding-section">
        <div className="branding-content">
          <h1 className="company-name">CareerConnect</h1>
          <p className="company-tagline">
            Your dream job is waiting. Connect with top employers today.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Access to 10,000+ job listings</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Personalized job recommendations</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>One-click application process</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form Section */}
      <div className="form-section">
        <div className="form-container">
          <h2 className="form-title">
            {isLogin ? 'Welcome Back!' : 'Start Your Journey'}
          </h2>
          <p className="form-subtitle">
            {isLogin ? 'Login to access your dashboard' : 'Create an account to get started'}
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group floating">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="underline"></div>
              </div>
            )}

            <div className="input-group floating">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
            </div>

            <div className="input-group floating">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="8"
              />
              <div className="underline"></div>
              <span 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            {isLogin && (
              <div className="forgot-password">
                <a href="#forgot">Forgot password?</a>
              </div>
            )}

            <button 
              type="submit" 
              className="auth-btn"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isLogin ? 'Login' : 'Sign Up'} 
              <FiArrowRight className={`btn-arrow ${isHovered ? 'animate' : ''}`} />
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

<div className="social-login">
  <button className="social-btn google" type="button">
    <svg className="social-icon" viewBox="0 0 24 24">
      <path fill="#DB4437" d="M12.5 10.5v4h6.5c-0.4 2-2.3 6-6.5 6-4 0-7-3-7-7s3-7 7-7c2 0 3.4 1 4.5 2l3-3c-2-2-4.5-3-7.5-3-5.5 0-10 4.5-10 10s4.5 10 10 10c8 0 10-7 10-10 0-1-0.1-1.5-0.3-2h-9.7z"/>
    </svg>
    Google
  </button>
  <button className="social-btn linkedin" type="button">
    <svg className="social-icon" viewBox="0 0 24 24">
      <path fill="#0077B5" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.3 3.3 0 0 0-3.3-3.3 3.2 3.2 0 0 0-2.8 1.6v-1.4h-3.2v9.4h3.2v-4.8a1.9 1.9 0 0 1 0-3.6 1.9 1.9 0 0 1 2 0 1.9 1.9 0 0 1 0 3.6v4.8h3.1M6.9 8.4a1.9 1.9 0 0 0 1.9-1.9 2 2 0 0 0-3.8 0 1.9 1.9 0 0 0 1.9 1.9m1.4 10.1v-9.4H5.5v9.4h2.8z"/>
    </svg>
    LinkedIn
  </button>
</div>

          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button className="toggle-link" onClick={toggleForm}>
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateAuth;