
import "./css/employee-dash-content.css";
import { useState } from "react";
import EmployeeDashboard from "./EmployeeDashBoard";
export default function EmployeeDashboardContent() {
          const [currentDate, setCurrentDate] = useState(new Date());

  // Function to navigate months in calendar
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
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
      const isToday =
        today.getDate() === i &&
        today.getMonth() === month &&
        today.getFullYear() === year;
      days.push(
        <div key={i} className={`calendar-day ${isToday ? "current-day" : ""}`}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <>
      <EmployeeDashboard />
      {/* Dashboard Content */}
      <div className="emp-dashboard-content">
        {/* Stats Cards Row */}
              <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
                <span>
                  {currentDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <div className="calendar-nav">
                  <button onClick={() => navigateMonth("prev")}>&lt;</button>
                  <button onClick={() => navigateMonth("next")}>&gt;</button>
                </div>
              </div>
              <div className="calendar-grid">
                <div className="calendar-weekdays">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>
                <div className="calendar-days">{generateCalendarDays()}</div>
              </div>
            </div>

            {/* Performance Section */}
            {/* <div className="dashboard-card performance-card">
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
            </div> */}

            {/* Recent Activity */}
            <div className="dashboard-card activity-card">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
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
    
  </>
);
}          