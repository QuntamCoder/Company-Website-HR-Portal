import React, { useState } from "react";
import "./css/employee-attendance.css";

const initialData = [
  {
    id: 1,
    name: "Alice Johnson",
    date: "2025-08-31",
    timeIn: "",
    timeOut: "",
    present: false,
    absent: false,
    arriveLate: false,
    leaveEarly: false,
    onLeave: false,
    totalHours: "",
  },
  {
    id: 2,
    name: "Bob Smith",
    date: "2025-08-31",
    timeIn: "",
    timeOut: "",
    present: false,
    absent: false,
    arriveLate: false,
    leaveEarly: false,
    onLeave: false,
    totalHours: "",
  },
  {
    id: 3,
    name: "Charlie Davis",
    date: "2025-08-31",
    timeIn: "",
    timeOut: "",
    present: false,
    absent: false,
    arriveLate: false,
    leaveEarly: false,
    onLeave: false,
    totalHours: "",
  },
  {
    id: 4,
    name: "Diana Lee",
    date: "2025-08-31",
    timeIn: "",
    timeOut: "",
    present: false,
    absent: false,
    arriveLate: false,
    leaveEarly: false,
    onLeave: false,
    totalHours: "",
  },
];

function calculateTotalHours(timeIn, timeOut) {
  if (!timeIn || !timeOut) return "";
  const [inH, inM] = timeIn.split(":").map(Number);
  const [outH, outM] = timeOut.split(":").map(Number);

  let start = inH * 60 + inM;
  let end = outH * 60 + outM;
  let diff = end - start;
  if (diff < 0) diff += 24 * 60;

  const hours = Math.floor(diff / 60);
  const mins = diff % 60;
  return `${hours}h ${mins}m`;
}

const EmployeeAttendance = () => {
  const [attendanceData, setAttendanceData] = useState(initialData);

  // Handler for checkbox or time changes
  const handleChange = (id, field, value) => {
    setAttendanceData((prev) =>
      prev.map((row) => {
        if (row.id !== id) return row;
        let updatedRow = { ...row, [field]: value };
        if (
          (field === "timeIn" || field === "timeOut") &&
          updatedRow.timeIn &&
          updatedRow.timeOut
        ) {
          updatedRow.totalHours = calculateTotalHours(
            updatedRow.timeIn,
            updatedRow.timeOut
          );
        }
        // If onLeave is checked, make others false
        if (field === "onLeave" && value) {
          updatedRow = {
            ...updatedRow,
            present: false,
            absent: false,
            arriveLate: false,
            leaveEarly: false,
            timeIn: "",
            timeOut: "",
            totalHours: "",
          };
        }
        // If present, absent, arriveLate, leaveEarly is checked, uncheck onLeave
        if (
          ["present", "absent", "arriveLate", "leaveEarly"].includes(field) &&
          value
        ) {
          updatedRow = { ...updatedRow, onLeave: false };
        }
        return updatedRow;
      })
    );
  };

  // Mark all for a given field
  const handleMarkAll = (field, value) => {
    setAttendanceData((prev) =>
      prev.map((row) => {
        let newRow = { ...row, [field]: value };
        if (field === "onLeave" && value) {
          newRow = {
            ...newRow,
            present: false,
            absent: false,
            arriveLate: false,
            leaveEarly: false,
            timeIn: "",
            timeOut: "",
            totalHours: "",
          };
        }
        if (
          ["present", "absent", "arriveLate", "leaveEarly"].includes(field) &&
          value
        ) {
          newRow = { ...newRow, onLeave: false };
        }
        return newRow;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send attendanceData to your backend
    alert("Attendance submitted!\n" + JSON.stringify(attendanceData, null, 2));
  };

  return (
    <><EmployeeAttendance />
    <div className="employee-attendance-container">
      <h2>Employee Attendance</h2>
      <div className="bulk-actions">
        <button type="button" onClick={() => handleMarkAll("present", true)}>
          Mark All Present
        </button>
        <button type="button" onClick={() => handleMarkAll("absent", true)}>
          Mark All Absent
        </button>
        <button type="button" onClick={() => handleMarkAll("arriveLate", true)}>
          Mark All Arrive Late
        </button>
        <button type="button" onClick={() => handleMarkAll("leaveEarly", true)}>
          Mark All Leave Early
        </button>
        <button type="button" onClick={() => handleMarkAll("onLeave", true)}>
          Mark All On Leave
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Employee Name</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Arrive Late</th>
              <th>Leave Early</th>
              <th>On Leave</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((row) => (
              <tr key={row.id}>
                <td>{row.date}</td>
                <td>{row.name}</td>
                <td>
                  <input
                    type="time"
                    value={row.timeIn}
                    disabled={
                      row.onLeave ||
                      row.absent ||
                      (!row.present && !row.arriveLate && !row.leaveEarly)
                    }
                    onChange={(e) =>
                      handleChange(row.id, "timeIn", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={row.timeOut}
                    disabled={
                      row.onLeave ||
                      row.absent ||
                      (!row.present && !row.arriveLate && !row.leaveEarly)
                    }
                    onChange={(e) =>
                      handleChange(row.id, "timeOut", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.present}
                    disabled={row.onLeave}
                    onChange={(e) =>
                      handleChange(row.id, "present", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.absent}
                    disabled={row.onLeave}
                    onChange={(e) =>
                      handleChange(row.id, "absent", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.arriveLate}
                    disabled={row.onLeave}
                    onChange={(e) =>
                      handleChange(row.id, "arriveLate", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.leaveEarly}
                    disabled={row.onLeave}
                    onChange={(e) =>
                      handleChange(row.id, "leaveEarly", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.onLeave}
                    onChange={(e) =>
                      handleChange(row.id, "onLeave", e.target.checked)
                    }
                  />
                </td>
                <td>{row.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="submit-row">
          <button type="submit" className="submit-btn">
            Submit Attendance
          </button>
        </div>
      </form>
    </div></>
  );
};

export default EmployeeAttendance;