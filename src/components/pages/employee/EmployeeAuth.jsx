import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/EmployeeAuth.css";

function EmployeeAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    employeeId: "",
    password: "",
    name: "",
    department: "",
    role: ""
  });
  const [error, setError] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [roles, setRoles] = useState([]);

  const navigate = useNavigate();

  // Fetch available roles from the backend
  useEffect(() => {
    fetch("http://localhost:8080/api/auth/roles")
      .then(res => res.json())
      .then(data => setRoles(data))
      .catch(() => setRoles([
        { id: 1, name: "Employee" },
        { id: 2, name: "Admin" }
      ])); // fallback if backend fails
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission for login/sign up
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      if (!formData.employeeId || !formData.password || !formData.role) {
        setError("Please fill in all fields");
        return;
      }
      try {
        const res = await fetch("http://localhost:8080/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.employeeId,
            password: formData.password,
            role: formData.role
          }),
        });
        const data = await res.json();
        if (data.success) {
          if (data.role && data.role.toLowerCase().includes("admin")) {
            navigate("/hr-dashboard-content");
          } else {
            navigate("/dashboard-content");
          }
        } else {
          setError(data.message || "Invalid credentials");
        }
      } catch {
        setError("Server error");
      }
    } else {
      if (!formData.employeeId || !formData.password || !formData.name || !formData.role) {
        setError("Please fill in all fields");
        return;
      }
      try {
        const res = await fetch("http://localhost:8080/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.employeeId,
            password: formData.password,
            email: `${formData.employeeId}@company.com`,
            role: formData.role
          }),
        });
        const data = await res.json();
        if (data.success) {
          setError("Registration successful! Please sign in.");
          setIsTransitioning(true);
          setTimeout(() => {
            setIsLogin(true);
            setIsTransitioning(false);
          }, 1000);
        } else {
          setError(data.message || "Registration failed");
        }
      } catch {
        setError("Server error");
      }
    }
  };

  // Toggle login/signup form
  const toggleAuthMode = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsTransitioning(false);
      setError("");
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
              <label htmlFor="employeeId">{formData.role === "Admin" ? "Admin Username" : "Employee ID"}</label>
              <input
                id="employeeId"
                name="employeeId"
                type="text"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder={formData.role === "Admin" ? "admin" : "EMP12345"}
                autoComplete="username"
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
                autoComplete="current-password"
              />
            </div>

            <div className="input-group">
              <label htmlFor="role">ROLE</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                {roles.map(role =>
                  <option key={role.id} value={role.name}>{role.name}</option>
                )}
              </select>
            </div>

            {error && <div className={`error-message${error.startsWith("Registration successful") ? " success-message" : ""}`}>{error}</div>}

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