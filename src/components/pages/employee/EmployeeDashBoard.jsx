import React, { useState } from 'react';
import './css/emp-dash.css';

function EmployeeDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeView, setActiveView] = useState('dashboard');

  // Function to navigate months in calendar
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Add days of the month
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = today.getDate() === i && 
                      today.getMonth() === month && 
                      today.getFullYear() === year;
      days.push(
        <div key={i} className={`calendar-day ${isToday ? 'current-day' : ''}`}>
          {i}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Employee Dashboard</h1>
          <p>Human Resources Management</p>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Main</div>
            <a href="#" className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`}
               onClick={(e) => { e.preventDefault(); setActiveView('dashboard'); }}>
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
              Dashboard
            </a>
            <a href="#" className={`nav-item ${activeView === 'attendance' ? 'active' : ''}`}
               onClick={(e) => { e.preventDefault(); setActiveView('attendance'); }}>
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 8H17c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v5h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10.5s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4z" />
              </svg>
              Attendance
            </a>
            <a href="#" className={`nav-item ${activeView === 'salary' ? 'active' : ''}`}
               onClick={(e) => { e.preventDefault(); setActiveView('salary'); }}>
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              Salary Slip
            </a>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Management</div>
            <a href="#" className={`nav-item ${activeView === 'leave' ? 'active' : ''}`}
               onClick={(e) => { e.preventDefault(); setActiveView('leave'); }}>
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Leave Management
            </a>
            <a href="#" className={`nav-item ${activeView === 'payroll' ? 'active' : ''}`}
               onClick={(e) => { e.preventDefault(); setActiveView('payroll'); }}>
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
              </svg>
              Payroll
            </a>
            <a href="#" className={`nav-item ${activeView === 'performance' ? 'active' : ''}`}
               onClick={(e) => { e.preventDefault(); setActiveView('performance'); }}>
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
              <div className="notification-badge"></div>
            </button>
            <div className="user-profile">
              <div className="user-avatar">SK</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Shubham Kale</div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>Software Engineer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="emp-dashboard-content">
          {/* Stats Cards Row */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="stat-info">
                <h3>98.5%</h3>
                <p>Attendance Rate</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
              </div>
              <div className="stat-info">
                <h3>12</h3>
                <p>Remaining Leaves</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
              </div>
              <div className="stat-info">
                <h3>7h 30m</h3>
                <p>Avg. Working Hours</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <div className="stat-info">
                <h3>4.8/5</h3>
                <p>Performance Score</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="dashboard-main-grid">
            {/* Calendar Section */}
            <div className="dashboard-card calendar-card">
              <h3>Calendar</h3>
              <div className="calendar-header">
                <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                <div className="calendar-nav">
                  <button onClick={() => navigateMonth('prev')}>&lt;</button>
                  <button onClick={() => navigateMonth('next')}>&gt;</button>
                </div>
              </div>
              <div className="calendar-grid">
                <div className="calendar-weekdays">
                  <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                </div>
                <div className="calendar-days">
                  {generateCalendarDays()}
                </div>
              </div>
            </div>

            {/* Performance Section */}
            <div className="dashboard-card performance-card">
              <h3>Performance Overview</h3>
              <div className="performance-metrics">
                <div className="metric">
                  <span className="metric-label">Productivity</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '85%'}}></div>
                  </div>
                  <span className="metric-value">85%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Quality</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '92%'}}></div>
                  </div>
                  <span className="metric-value">92%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Teamwork</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '78%'}}></div>
                  </div>
                  <span className="metric-value">78%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Initiative</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '88%'}}></div>
                  </div>
                  <span className="metric-value">88%</span>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="dashboard-card team-card">
              <h3>Team Members</h3>
              <div className="team-list">
                <div className="team-member">
                  <div className="member-avatar">AG</div>
                  <div className="member-info">
                    <h4>Alena Gouse</h4>
                    <p>UI Designer</p>
                  </div>
                  <div className="member-status online"></div>
                </div>
                <div className="team-member">
                  <div className="member-avatar">MV</div>
                  <div className="member-info">
                    <h4>Miracle Vetrovs</h4>
                    <p>UX Designer</p>
                  </div>
                  <div className="member-status away"></div>
                </div>
                <div className="team-member">
                  <div className="member-avatar">AA</div>
                  <div className="member-info">
                    <h4>Avery Arwood</h4>
                    <p>UI Designer</p>
                  </div>
                  <div className="member-status offline"></div>
                </div>
                <div className="team-member">
                  <div className="member-avatar">RS</div>
                  <div className="member-info">
                    <h4>Ryan Smith</h4>
                    <p>Frontend Developer</p>
                  </div>
                  <div className="member-status online"></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="dashboard-card activity-card">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="activity-details">
                    <p>Checked in at 9:15 AM</p>
                    <span>Today</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <div className="activity-details">
                    <p>Submitted monthly report</p>
                    <span>Yesterday</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="activity-details">
                    <p>Completed project milestone</p>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;