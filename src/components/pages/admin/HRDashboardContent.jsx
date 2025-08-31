import React from "react";
import "./css/HRDashboardContent.css";
import HRDashboard from "./HRDashboard ";

const employeeStats = {
  total: 1895,
  newJoined: 895,
  resigned: 55,
  trainee: 100,
  interns: 15
};

const attendeesStats = {
  total: 1870,
  lateArrival: 10,
  casualLeave: 50,
  sickLeave: 60,
  others: 30
};

const recruitmentStats = {
  total: 100,
  jobs: 10,
  applied: 50,
  shortlisted: 60,
  rejected: 30
};

const engagementChart = {
  finance: 35,
  development: 45,
  design: 20
};

const schedule = [
  {
    time: "08 AM",
    title: "Set a meeting with UK team",
    timeRange: "08:00 - 11:00",
    highlight: true
  },
  {
    time: "09 AM",
    title: "Conduct a factory audit",
    timeRange: "11:00 - 12:00"
  },
  {
    time: "12 PM",
    title: "Meeting with managing director",
    timeRange: "12:00 - 01:30"
  },
  {
    time: "01 PM",
    title: "Arrange a seminar",
    timeRange: "01:30 - 03:30"
  }
];

// Helper to generate calendar days for July 2024
const getCalendarDays = () => {
  const days = [];
  const firstDay = new Date(2024, 6, 1).getDay(); // July 1, 2024 (0=Sun)
  let day = 1 - firstDay;
  for (let week = 0; week < 6; week++) {
    const weekDays = [];
    for (let d = 0; d < 7; d++, day++) {
      weekDays.push(day > 0 && day <= 31 ? day : null);
    }
    days.push(weekDays);
  }
  return days;
};

const calendarDays = getCalendarDays();

export default function HRDashboardContent() {
  return (
    <><HRDashboard/>
    <div className="hrdashboard-content-root">
      <div className="hrdashboard-content-top-cards">
        {/* Employee */}
        <div className="hrdash-card hrdash-card-emp">
          <div className="hrdash-card-header">
            <span className="hrdash-card-icon hrdash-emp-icon">&#128100;</span>
            <span className="hrdash-card-title">Employee</span>
            <span className="hrdash-card-total hrdash-emp-bg">{employeeStats.total}</span>
          </div>
          <div className="hrdash-card-grid">
            <div>
              <span className="hrdash-card-main hrdash-text-orange">{employeeStats.newJoined}</span>
              <div className="hrdash-card-label">New Joined</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-red">{employeeStats.resigned}</span>
              <div className="hrdash-card-label">Resigned</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-blue">{employeeStats.trainee}</span>
              <div className="hrdash-card-label">Trainee</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-purple">{employeeStats.interns}</span>
              <div className="hrdash-card-label">Interns</div>
            </div>
          </div>
        </div>
        {/* Attendees */}
        <div className="hrdash-card hrdash-card-att">
          <div className="hrdash-card-header">
            <span className="hrdash-card-icon hrdash-att-icon">&#128101;</span>
            <span className="hrdash-card-title">Attendees</span>
            <span className="hrdash-card-total hrdash-att-bg">{attendeesStats.total}</span>
          </div>
          <div className="hrdash-card-grid">
            <div>
              <span className="hrdash-card-main hrdash-text-red">{attendeesStats.lateArrival}</span>
              <div className="hrdash-card-label">Late arrival</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-orange">{attendeesStats.casualLeave}</span>
              <div className="hrdash-card-label">Casual Leave</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-blue">{attendeesStats.sickLeave}</span>
              <div className="hrdash-card-label">Sick Leave</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-gray">{attendeesStats.others}</span>
              <div className="hrdash-card-label">Others</div>
            </div>
          </div>
        </div>
        {/* Recruitment */}
        <div className="hrdash-card hrdash-card-rec">
          <div className="hrdash-card-header">
            <span className="hrdash-card-icon hrdash-rec-icon">&#128188;</span>
            <span className="hrdash-card-title">Recruitment</span>
            <span className="hrdash-card-total hrdash-rec-bg">{recruitmentStats.total}</span>
          </div>
          <div className="hrdash-card-grid">
            <div>
              <span className="hrdash-card-main hrdash-text-green">{recruitmentStats.jobs}</span>
              <div className="hrdash-card-label">Jobs</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-orange">{recruitmentStats.applied}</span>
              <div className="hrdash-card-label">Applied</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-blue">{recruitmentStats.shortlisted}</span>
              <div className="hrdash-card-label">Shortlisted</div>
            </div>
            <div>
              <span className="hrdash-card-main hrdash-text-red">{recruitmentStats.rejected}</span>
              <div className="hrdash-card-label">Rejected</div>
            </div>
          </div>
        </div>
        {/* Engagement Chart */}
        <div className="hrdash-card hrdash-card-engage">
          <div className="hrdash-card-header">
            <span className="hrdash-card-icon hrdash-engage-icon">&#128200;</span>
            <span className="hrdash-card-title">Employee Engagement Chart</span>
          </div>
          <div className="hrdash-engage-chart-wrapper">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle
                cx="60" cy="60" r="48"
                stroke="#2ebfa5" strokeWidth="16"
                fill="none"
                strokeDasharray="302"
                strokeDashoffset="0"
                style={{transform: "rotate(-90deg)", transformOrigin: "50% 50%"}}
              />
              <circle
                cx="60" cy="60" r="48"
                stroke="#ffe178" strokeWidth="16"
                fill="none"
                strokeDasharray={`${(engagementChart.development/100)*302} 302`}
                strokeDashoffset="-106"
                style={{transform: "rotate(-90deg)", transformOrigin: "50% 50%"}}
              />
              <circle
                cx="60" cy="60" r="48"
                stroke="#4072ee" strokeWidth="16"
                fill="none"
                strokeDasharray={`${(engagementChart.design/100)*302} 302`}
                strokeDashoffset="-221"
                style={{transform: "rotate(-90deg)", transformOrigin: "50% 50%"}}
              />
            </svg>
            <div className="hrdash-engage-center">
              <span className="hrdash-engage-center-title">Engagement by</span>
              <span className="hrdash-engage-center-label">Departments</span>
            </div>
            <div className="hrdash-engage-legend">
              <span>
                <span className="hrdash-engage-dot hrdash-engage-dot-fin"></span>Finance
              </span>
              <span>
                <span className="hrdash-engage-dot hrdash-engage-dot-dev"></span>Development
              </span>
              <span>
                <span className="hrdash-engage-dot hrdash-engage-dot-des"></span>Design
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hrdashboard-content-bottom">
        {/* Calendar */}
        <div className="hrdash-calendar-wrapper">
          <div className="hrdash-calendar-header">
            <button className="hrdash-calendar-arrow">&#8592;</button>
            <span className="hrdash-calendar-title">July 2024</span>
            <button className="hrdash-calendar-arrow">&#8594;</button>
          </div>
          <table className="hrdash-calendar-table">
            <thead>
              <tr>
                <th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th>
              </tr>
            </thead>
            <tbody>
              {calendarDays.map((week, i) => (
                <tr key={i}>
                  {week.map((d, j) => (
                    <td key={j} className={d === 14 ? "hrdash-calendar-active" : d ? "" : "hrdash-calendar-empty"}>
                      {d || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Schedule */}
        <div className="hrdash-schedule-wrapper">
          <div>
            {schedule.map((s, i) => (
              <div className={`hrdash-schedule-row${s.highlight ? " hrdash-schedule-row-highlight" : ""}`} key={i}>
                <div className="hrdash-schedule-time">{s.time}</div>
                <div className="hrdash-schedule-main">
                  <div className="hrdash-schedule-title">{s.title}</div>
                  <div className="hrdash-schedule-range">{s.timeRange}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attention Card */}
        <div className="hrdash-attention-card">
          <div className="hrdash-attention-left">
            <span className="hrdash-attention-count">10 Action needed</span>
            <span className="hrdash-attention-desc">Action need your attention</span>
          </div>
          <a href="#" className="hrdash-attention-link">View all actions</a>
        </div>
      </div>
    </div></>
  );
}