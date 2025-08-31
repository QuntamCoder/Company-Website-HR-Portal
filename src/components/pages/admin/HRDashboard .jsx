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
<Link to="/hr-dashboard-content" className="nav-item active">
  <svg className="nav-icon" viewBox="0 0 24 24">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
  Dashboard
</Link>


            <Link to="/add-employee" className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 8H17c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v5h2z" />
              </svg>
              Add Employee
            </Link>

            <Link to="/employee-attendance" className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1zm-7 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-2.33 0-7 1.17-7 3.5V20h14v-1.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              Attendance
            </Link>
            <Link to="/report" className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 8H17c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v5h2z" />
              </svg>
              Reports
            </Link>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Management</div>

            <Link to="/post-opening" className="nav-item">
              Recruitment
            </Link>
            <Link to="/hr-announcements" className="nav-item">
              Announcements
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
                  Shubham Kale
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
