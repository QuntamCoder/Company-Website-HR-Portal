import React, { useState } from "react";
import "./css/LeaveRequestPage.css";
import EmployeeDashboard from "./EmployeeDashBoard";

// Dummy data for dropdowns
const managers = ["Jack Jensen", "Jane Doe", "Lisa Wong"];
const leaveTypes = ["Sick Leave", "Paid Time Off (PTO)", "Casual Leave"];

// Simple calendar logic for this mockup
const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

function getMonthMatrix(month, year) {
  const firstDay = new Date(year, month, 1).getDay();
  const days = daysInMonth(month, year);
  const matrix = [];
  let week = new Array(7).fill(null);
  let day = 1;
  for (let i = 0; i < 6 && day <= days; i++) {
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || day > days) continue;
      week[j] = day++;
    }
    matrix.push(week);
    week = new Array(7).fill(null);
  }
  return matrix;
}

export default function LeaveRequestPage() {
  const [approvalManager, setApprovalManager] = useState(managers[0]);
  const [leaveType, setLeaveType] = useState(leaveTypes[0]);
  const [reason, setReason] = useState("");
  const [selectedDates, setSelectedDates] = useState([19, 20, 22, 23, 24]);
  const [month, setMonth] = useState(4); // May (0-based)
  const [year, setYear] = useState(2023);

  const matrix = getMonthMatrix(month, year);

  const handleDayClick = (day) => {
    if (!day) return;
    setSelectedDates((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  return (
    <>
    <EmployeeDashboard />   
    <div className="leave-page-container">
      

      <div className="leave-request-section">
        <div className="leave-request-title">Leave request</div>
        <div className="request-period">
          19/05/2023 <span className="arrow">&#8594;</span> 24/05/2023
        </div>
        <div className="leave-request-form">
          <div className="leave-form-fields">
            <label>
              Approval Manager
              <select
                value={approvalManager}
                onChange={(e) => setApprovalManager(e.target.value)}
              >
                {managers.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </label>
            <label>
              Leave type
              <select
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              >
                {leaveTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label>
              Reason for leave
              <textarea
                value={reason}
                placeholder="Type your reason"
                onChange={(e) => setReason(e.target.value)}
              />
            </label>
          </div>
          <div className="leave-calendar-wrapper">
            <div className="calendar-header">
              <button onClick={handlePrevMonth} className="calendar-arrow">
                &#8592;
              </button>
              <span>
                {new Date(year, month).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button onClick={handleNextMonth} className="calendar-arrow">
                &#8594;
              </button>
            </div>
            <table className="leave-calendar">
              <thead>
                <tr>
                  <th>MON</th>
                  <th>TUE</th>
                  <th>WED</th>
                  <th>THU</th>
                  <th>FRI</th>
                  <th>SAT</th>
                  <th>SUN</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((week, i) => (
                  <tr key={i}>
                    {week.map((day, j) => (
                      <td
                        key={j}
                        className={
                          day && selectedDates.includes(day)
                            ? "selected-day"
                            : ""
                        }
                        onClick={() => handleDayClick(day)}
                      >
                        {day ? (
                          <span>{day}</span>
                        ) : (
                          <span>&nbsp;</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leave-request-actions">
          <button className="draft-btn">Save as draft</button>
          <button className="send-btn">Send request</button>
        </div>
      </div>
    </div>
    </>
  );
}