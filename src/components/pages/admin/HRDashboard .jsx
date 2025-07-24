import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/hr-dashboard.css";

function HRDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>HR Dashboard</h1>
          <p>Human Resources Management</p>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Main</div>
            <a href="#" className="nav-item active">
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
              Dashboard
            </a>

            <Link to="/add-employee" className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 8H17c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v5h2z" />
              </svg>
              Add Employee
            </Link>

            <a href="#" className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
              Reports
            </a>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Management</div>

            <Link to="/post-opening" className="nav-item">
              Recruitment
            </Link>
            <a href="#" className="nav-item">
              Payroll
            </a>
            <a href="#" className="nav-item">
              Performance
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1 className="header-title">Dashboard Overview</h1>
          <div className="header-actions">
            <button className="notification-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z" />
              </svg>
              <div className="notification-badge"></div>
            </button>
            <div className="user-profile">
              <div className="user-avatar">JD</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px" }}>
                  John Doe
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>
                  HR Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
