import React, { useState } from "react";
import "./css/LoginSignup.css";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  function switchMode() {
    setIsLogin(!isLogin);
    setInput({ name: "", email: "", password: "" });
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      (isLogin ? "Logging in:" : "Signing up:") +
        `\nEmail: ${input.email}\n${!isLogin ? `Name: ${input.name}\n` : ""}Password: ${input.password}`
    );
  }

  return (
    <div className="auth-bg">
      <div className={`glass-card ${!isLogin ? "signup-mode" : ""}`}>
        <div className="tab-toggle">
          <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={!isLogin ? "active" : ""} onClick={switchMode}>
            Sign Up
          </button>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <input
                id="name"
                name="name"
                type="text"
                value={input.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="name">Name</label>
            </div>
          )}
          <div className="input-group">
            <input
              id="email"
              name="email"
              type="email"
              value={input.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input
              id="password"
              name="password"
              type="password"
              value={input.password}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;