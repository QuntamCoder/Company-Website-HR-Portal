import React, { useState } from "react";
import "./css/HRAnnouncementForm.css";
import HRDashboard from "./HRDashboard ";

export default function HRAnnouncementForm() {
  const [form, setForm] = useState({
    type: "Announcement",
    title: "",
    description: "",
    date: "",
    event: "Birthday",
    name: "",
    years: "",
    location: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("Announcement");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeChange = (type) => {
    setActiveTab(type);
    setForm((prev) => ({
      ...prev,
      type: type,
      // Reset fields when switching
      title: "",
      description: "",
      date: "",
      event: "Birthday",
      name: "",
      years: "",
      location: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can POST form data to an API
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <>
      <HRDashboard />
      <div className="hr-af-container">

        
        <div className="hr-af-tabs">
          <button 
            className={`hr-af-tab ${activeTab === "Announcement" ? "active" : ""}`}
            onClick={() => handleTypeChange("Announcement")}
          >
            <i className="fas fa-bullhorn"></i>
            Announcement
          </button>
          <button 
            className={`hr-af-tab ${activeTab === "Reminder" ? "active" : ""}`}
            onClick={() => handleTypeChange("Reminder")}
          >
            <i className="fas fa-bell"></i>
            Reminder
          </button>
          <button 
            className={`hr-af-tab ${activeTab === "Event" ? "active" : ""}`}
            onClick={() => handleTypeChange("Event")}
          >
            <i className="fas fa-calendar"></i>
            Event
          </button>
        </div>

        <form className="hr-announ-form" onSubmit={handleSubmit}>
          {form.type === "Announcement" && (
            <div className="hr-af-form-section">
              <h3>Company Announcement</h3>
              <div className="hr-af-form-grid">
                <div className="hr-af-input-group">
                  <label>
                    Title<span className="hr-af-req">*</span>
                  </label>
                  <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Policy Update"
                    className="hr-af-input"
                  />
                </div>
                
                <div className="hr-af-input-group">
                  <label>
                    Date<span className="hr-af-req">*</span>
                  </label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="hr-af-input"
                  />
                </div>
                
                <div className="hr-af-input-group full-width">
                  <label>
                    Description<span className="hr-af-req">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    placeholder="Enter the announcement details"
                    className="hr-af-textarea"
                    rows="4"
                  />
                </div>
              </div>
            </div>
          )}
          
          {form.type === "Reminder" && (
            <div className="hr-af-form-section">
              <h3>Create Reminder</h3>
              <div className="hr-af-form-grid">
                <div className="hr-af-input-group">
                  <label>
                    Name<span className="hr-af-req">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="hr-af-input"
                  />
                </div>
                
                <div className="hr-af-input-group">
                  <label>
                    Event<span className="hr-af-req">*</span>
                  </label>
                  <select
                    name="event"
                    value={form.event}
                    onChange={handleChange}
                    className="hr-af-select"
                  >
                    <option value="Birthday">Birthday</option>
                    <option value="Work Anniversary">Work Anniversary</option>
                  </select>
                </div>
                
                <div className="hr-af-input-group">
                  <label>
                    Date<span className="hr-af-req">*</span>
                  </label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="hr-af-input"
                  />
                </div>
                
                {form.event === "Work Anniversary" && (
                  <div className="hr-af-input-group">
                    <label>
                      Years
                    </label>
                    <input
                      name="years"
                      type="number"
                      min="1"
                      value={form.years}
                      onChange={handleChange}
                      placeholder="e.g. 3"
                      className="hr-af-input"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          
          {form.type === "Event" && (
            <div className="hr-af-form-section">
              <h3>Plan Event</h3>
              <div className="hr-af-form-grid">
                <div className="hr-af-input-group">
                  <label>
                    Title<span className="hr-af-req">*</span>
                  </label>
                  <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Team Building Retreat"
                    className="hr-af-input"
                  />
                </div>
                
                <div className="hr-af-input-group">
                  <label>
                    Date<span className="hr-af-req">*</span>
                  </label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="hr-af-input"
                  />
                </div>
                
                <div className="hr-af-input-group">
                  <label>
                    Location<span className="hr-af-req">*</span>
                  </label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Greenfields Resort"
                    className="hr-af-input"
                  />
                </div>
                
                <div className="hr-af-input-group full-width">
                  <label>
                    Description<span className="hr-af-req">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    placeholder="Describe the event"
                    className="hr-af-textarea"
                    rows="4"
                  />
                </div>
              </div>
            </div>
          )}
          
          <div className="hr-af-actions">
            <button type="submit" className="hr-af-btn">
              <i className="fas fa-paper-plane"></i>
              Post Announcement
            </button>
            {submitted && (
              <div className="hr-af-success">
                <i className="fas fa-check-circle"></i>
                Submitted Successfully!
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}