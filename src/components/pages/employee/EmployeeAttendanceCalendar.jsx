import React, { useState, useEffect } from "react";
import "./css/EmployeeAttendanceCalendar.css";
import EmployeeDashboard from "./EmployeeDashBoard";

// Utility functions
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getMonthMatrix = (year, month) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const matrix = [];
  let week = new Array(7).fill(null);
  let day = 1;

  for (let i = firstDay; i < 7 && day <= daysInMonth; i++) {
    week[i] = day++;
  }
  matrix.push(week);

  while (day <= daysInMonth) {
    let week = new Array(7).fill(null);
    for (let i = 0; i < 7 && day <= daysInMonth; i++) {
      week[i] = day++;
    }
    matrix.push(week);
  }
  return matrix;
};

// Sample attendance data
const sampleAttendance = {
  "2025-08-01": "present",
  "2025-08-02": "absent",
  "2025-08-03": "present",
  "2025-08-04": "present",
  "2025-08-05": "present",
  "2025-08-06": "absent",
  "2025-08-07": "present",
  "2025-08-08": "present",
  "2025-08-09": "absent",
  "2025-08-10": "present",
  "2025-08-15": "present",
  "2025-08-16": "absent",
  "2025-08-17": "present",
  "2025-08-20": "present",
  "2025-08-21": "present",
  "2025-08-22": "absent",
  "2025-08-25": "present",
  "2025-08-28": "present",
  "2025-08-29": "absent",
  "2025-08-30": "present",
  "2025-08-31": "present",
};

function getAttendanceStats(year, month, attendance) {
  const daysInMonth = getDaysInMonth(year, month);
  let present = 0, absent = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const dt = `${year}-${(month + 1).toString().padStart(2, "0")}-${d
      .toString()
      .padStart(2, "0")}`;
    if (attendance[dt] === "present") present++;
    else if (attendance[dt] === "absent") absent++;
  }
  return {
    total: daysInMonth,
    present,
    absent,
    ratio: daysInMonth > 0 ? `${present}/${daysInMonth}` : "0/0",
    percentage: daysInMonth > 0 ? Math.round((present / daysInMonth) * 100) : 0,
  };
}

export default function EmployeeAttendanceCalendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth()
  });
  const [attendance] = useState(sampleAttendance);
  const [selectedDate, setSelectedDate] = useState(null);

  const { year, month } = currentDate;
  const matrix = getMonthMatrix(year, month);
  const stats = getAttendanceStats(year, month, attendance);
  const monthName = new Date(year, month).toLocaleString("default", { month: "long" });

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      let newMonth = prev.month + direction;
      let newYear = prev.year;
      
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      
      return { year: newYear, month: newMonth };
    });
  };

  const goToToday = () => {
    setCurrentDate({
      year: today.getFullYear(),
      month: today.getMonth()
    });
  };

  const handleDateClick = (day) => {
    if (!day) return;
    
    const dateStr = `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    setSelectedDate(dateStr === selectedDate ? null : dateStr);
  };

  return (
    <>
      <EmployeeDashboard />
      <div className="attendance-container">
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-icon present">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="stat-details">
              <span className="stat-value">{stats.present}</span>
              <span className="stat-label">Days Present</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon absent">
              <i className="fas fa-times-circle"></i>
            </div>
            <div className="stat-details">
              <span className="stat-value">{stats.absent}</span>
              <span className="stat-label">Days Absent</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon ratio">
              <i className="fas fa-chart-pie"></i>
            </div>
            <div className="stat-details">
              <span className="stat-value">{stats.percentage}%</span>
              <span className="stat-label">Attendance Rate</span>
            </div>
          </div>
        </div>

        <div className="attendance-calendar">
          <div className="calendar-row calendar-header">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          
          {matrix.map((week, i) => (
            <div className="calendar-row" key={i}>
              {week.map((day, j) => {
                if (!day) return <div key={j} className="calendar-cell empty"></div>;
                
                const dateStr = `${year}-${(month + 1)
                  .toString()
                  .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
                const status = attendance[dateStr];
                const isToday = today.getDate() === day && 
                               today.getMonth() === month && 
                               today.getFullYear() === year;
                const isSelected = selectedDate === dateStr;
                
                return (
                  <div
                    key={j}
                    className={`calendar-cell ${status || "unknown"} ${isToday ? "today" : ""} ${isSelected ? "selected" : ""}`}
                    onClick={() => handleDateClick(day)}
                  >
                    <span className="day-number">{day}</span>
                    {status && <div className="status-indicator"></div>}
                    {isSelected && (
                      <div className="date-details">
                        <span>{new Date(dateStr).toDateString()}</span>
                        <span className={`status-text ${status}`}>
                          {status === "present" ? "Present" : status === "absent" ? "Absent" : "Not Recorded"}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="calendar-footer">
          <div className="attendance-legend">
            <div className="legend-item">
              <span className="legend-box present"></span>
              <span>Present</span>
            </div>
            <div className="legend-item">
              <span className="legend-box absent"></span>
              <span>Absent</span>
            </div>
            <div className="legend-item">
              <span className="legend-box today"></span>
              <span>Today</span>
            </div>
            <div className="legend-item">
              <span className="legend-box unknown"></span>
              <span>Not Recorded</span>
            </div>
          </div>
          
          {selectedDate && (
            <div className="selected-date-info">
              <h4>Date Details</h4>
              <p><strong>Date:</strong> {new Date(selectedDate).toDateString()}</p>
              <p><strong>Status:</strong> 
                <span className={`status-detail ${attendance[selectedDate] || "unknown"}`}>
                  {attendance[selectedDate] === "present" ? "Present" : 
                   attendance[selectedDate] === "absent" ? "Absent" : "Not Recorded"}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}