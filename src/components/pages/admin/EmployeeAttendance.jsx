import React, { useState } from "react";
import './css/employee-attendance.css';
import HRDashboard from "./HRDashboard ";

const statusOptions = [
  { value: "present", label: "Present", color: "#4caf50" },
  { value: "absent", label: "Absent", color: "#f44336" },
  { value: "late", label: "Late", color: "#ff9800" },
  { value: "leave", label: "On Leave", color: "#2196f3" },
  { value: "halfday", label: "Half-day", color: "#ffc107" },
];

const initialRows = [
  {
    id: "EMP001",
    name: "John Doe",
    position: "Frontend Developer",
    status: "present",
    signIn: "",
    signOut: "",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    position: "UX Designer",
    status: "absent",
    signIn: "",
    signOut: "",
  },
  {
    id: "EMP003",
    name: "Robert Johnson",
    position: "Backend Developer",
    status: "late",
    signIn: "",
    signOut: "",
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    position: "Project Manager",
    status: "leave",
    signIn: "",
    signOut: "",
  },
  {
    id: "EMP005",
    name: "Michael Wilson",
    position: "QA Engineer",
    status: "halfday",
    signIn: "",
    signOut: "",
  },
];

const EmployeeAttendance = () => {
  const [rows, setRows] = useState(initialRows);
  const [date, setDate] = useState(new Date());

  const handleStatusChange = (idx, value) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === idx ? { ...row, status: value } : row
      )
    );
  };

  const handleSignIn = (idx) => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    
    setRows((prev) =>
      prev.map((row, i) => {
        if (i === idx) {
          // If status was "late", change to "present" after signing in
          const newStatus = row.status === "late" ? "present" : row.status;
          return { 
            ...row, 
            signIn: `${hh}:${mm}`, 
            status: newStatus 
          };
        }
        return row;
      })
    );
  };

  const handleSignOut = (idx) => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    setRows((prev) =>
      prev.map((row, i) =>
        i === idx ? { ...row, signOut: `${hh}:${mm}` } : row
      )
    );
  };

  const getStatusStyle = (statusValue) => {
    const status = statusOptions.find(opt => opt.value === statusValue);
    return {
      backgroundColor: status ? `${status.color}15` : "#f5f5f5",
      color: status ? status.color : "#333",
      border: `1px solid ${status ? status.color : "#e0e0e0"}`
    };
  };

  return (
    <>
      <HRDashboard />
      <div className="att-tracker-container">
        <div className="att-tracker-header">
          <h2 className="att-tracker-title">Employee Attendance</h2>
          <div className="att-date-selector">
            <label htmlFor="attendance-date" className="att-date-label">Select Date: </label>
            <input 
              type="date" 
              id="attendance-date"
              className="att-date-input"
              value={date.toISOString().split('T')[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </div>
        </div>
        
        <div className="att-table-wrapper">
          <table className="att-data-table">
            <thead>
              <tr>
                <th className="att-th">Employee ID</th>
                <th className="att-th">Employee Name</th>
                <th className="att-th">Position</th>
                <th className="att-th">Status</th>
                <th className="att-th">Sign In Time</th>
                <th className="att-th">Sign Out Time</th>
                <th className="att-th">Total Hours</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => {
                const totalHours = row.signIn && row.signOut ? 
                  `${Math.abs(new Date(`2000-01-01T${row.signOut}:00`) - new Date(`2000-01-01T${row.signIn}:00`)) / 36e5}`.substring(0, 4) : 
                  "-";
                
                // Check if the employee is on leave
                const isOnLeave = row.status === "leave";
                
                return (
                  <tr key={row.id} className="att-data-row">
                    <td className="att-td emp-id-cell">{row.id}</td>
                    <td className="att-td emp-name-cell">
                      <div className="att-avatar"></div>
                      <div>
                        <div className="att-emp-name">{row.name}</div>
                        <div className="att-emp-position">{row.position}</div>
                      </div>
                    </td>
                    <td className="att-td emp-role-cell">{row.position}</td>
                    <td className="att-td status-cell">
                      <select
                        value={row.status}
                        onChange={e => handleStatusChange(idx, e.target.value)}
                        className="att-status-select"
                        style={getStatusStyle(row.status)}
                      >
                        {statusOptions.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="att-td time-cell">
                      {row.signIn ? (
                        <span className="att-time-badge">{row.signIn}</span>
                      ) : (
                        <button
                          onClick={() => handleSignIn(idx)}
                          className={isOnLeave ? "att-signin-btn att-btn-disabled" : "att-signin-btn"}
                          disabled={isOnLeave}
                        >
                          Sign In
                        </button>
                      )}
                    </td>
                    <td className="att-td time-cell">
                      {row.signOut ? (
                        <span className="att-time-badge">{row.signOut}</span>
                      ) : (
                        <button
                          onClick={() => handleSignOut(idx)}
                          disabled={!row.signIn || isOnLeave}
                          className={!row.signIn || isOnLeave ? "att-signout-btn att-btn-disabled" : "att-signout-btn"}
                        >
                          Sign Out
                        </button>
                      )}
                    </td>
                    <td className="att-td hours-cell">
                      <span className="att-total-hours">{totalHours}h</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="att-summary-cards">
          <div className="att-summary-card att-summary-present">
            <h3 className="att-summary-title">Present</h3>
            <span className="att-summary-count">{rows.filter(row => row.status === 'present').length}</span>
          </div>
          <div className="att-summary-card att-summary-absent">
            <h3 className="att-summary-title">Absent</h3>
            <span className="att-summary-count">{rows.filter(row => row.status === 'absent').length}</span>
          </div>
          <div className="att-summary-card att-summary-late">
            <h3 className="att-summary-title">Late</h3>
            <span className="att-summary-count">{rows.filter(row => row.status === 'late').length}</span>
          </div>
          <div className="att-summary-card att-summary-leave">
            <h3 className="att-summary-title">On Leave</h3>
            <span className="att-summary-count">{rows.filter(row => row.status === 'leave').length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeAttendance;