import React, { useState } from "react";
import "./css/EmployeeAuth.css";

function EmployeeAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    employeeId: "",
    password: "",
    name: "",
    department: ""
  });
  const [error, setError] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (isLogin) {
      if (!formData.employeeId || !formData.password) {
        setError("Please fill in all fields");
        return;
      }
      console.log("Logging in with:", formData);
    } else {
      if (!formData.employeeId || !formData.password || !formData.name) {
        setError("Please fill in all fields");
        return;
      }
      console.log("Registering with:", formData);
    }
  };

  const toggleAuthMode = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="auth-container">
      {/* Left Section - Company Info */}
      <div className="company-section">
        <div className="company-logo">C</div>
        <h1 className="company-name">CompanyName</h1>
        <p className="company-tagline">Building the future together</p>
        <p className="company-vision">
          Our vision is to create innovative solutions that empower our employees
          and delight our customers through technology and collaboration.
        </p>
      </div>

      {/* Right Section - Auth Form */}
      <div className="form-section">
        <div className={`auth-card ${isTransitioning ? 'transitioning' : ''}`}>
          <h1 className="auth-title">
            {isLogin ? "Employee Login" : "New Employee Registration"}
          </h1>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="department">Department</label>
                  <input
                    id="department"
                    name="department"
                    type="text"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Engineering"
                  />
                </div>
              </>
            )}

            <div className="input-group">
              <label htmlFor="employeeId">Employee ID</label>
              <input
                id="employeeId"
                name="employeeId"
                type="text"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="EMP12345"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="auth-button">
              {isLogin ? "Sign In" : "Register"}
            </button>
          </form>

          <div className="auth-switch">
            {isLogin ? (
              <>
                <span>New employee? </span>
                <button type="button" onClick={toggleAuthMode}>
                  Create account
                </button>
              </>
            ) : (
              <>
                <span>Already have an account? </span>
                <button type="button" onClick={toggleAuthMode}>
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeAuth;