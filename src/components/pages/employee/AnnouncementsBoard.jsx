import React from "react";
import "./css/AnnouncementsBoard.css";
import EmployeeDashboard from "./EmployeeDashBoard";

const data = {
  "Under Review": [
    {
      votes: 3,
      title: "Team users – show on invite list",
      description: "After a user has been invited display them on the invite",
    },
    {
      votes: 1,
      title: "Add Dark Mode",
      description: "Add a dark mode option to the dashboard",
    },
    {
      votes: 1,
      title: "Featured Image For Roadmap",
      description: "Show a featured image for each roadmap idea.",
    }
  ],
  Planned: [
    
    {
      votes: 3,
      title: "Transition Ideas Between Boards",
      description: "After a user has been invited display them on the invite",
    },
    {
      votes: 3,
      title: "Team users – show on invite list",
      description: "After a user has been invited display them on the invite",
    },
    {
      votes: 3,
      title: "Branding removal",
      description: "After a user has been invited display them on the invite",
    }
  ],
  "In Progress": [
    {
      votes: 3,
      title: "Branding removal",
      description: "After a user has been invited display them on the invite",
    },
    {
      votes: 3,
      title: "Team users – show on invite list",
      description: "After a user has been invited display them on the invite",
    },
    {
      votes: 3,
      title: "Add Dark Mode",
      description: "After a user has been invited display them on the invite",
    }
  ],
};

const statusColors = {
  "Under Review": "#2563eb",
  Planned: "#3b82f6",
  "In Progress": "#f59e42",
};

const statusBtnClass = {
  "Under Review": "review-btn",
  Planned: "planned-btn",
  "In Progress": "progress-btn",
};

export default function AnnouncementsBoard() {
  return (
    <><EmployeeDashboard />
    <div className="announcements-board-container">
      <header className="abc-header">
        <span className="abc-title">Announcemonts</span>
      </header>
      <div className="abc-board-content">
        <div className="abc-columns">
          {["Under Review", "Planned", "In Progress"].map((status) => (
            <div className="abc-column" key={status}>
              <div className="abc-column-header">
                <button
                  className={`abc-status-btn ${statusBtnClass[status]}`}
                  style={
                    status === "In Progress"
                      ? { background: statusColors[status], color: "#fff" }
                      : { borderColor: statusColors[status], color: statusColors[status] }
                  }
                >
                  {status}
                </button>
              </div>
              <div className="abc-cards">
                {data[status].map((item, idx) => (
                  <div className="abc-card" key={idx}>
                    <div className="abc-votes">{item.votes}</div>
                    <div className="abc-card-content">
                      <div className="abc-card-title">{item.title}</div>
                      <div className="abc-card-desc">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
}