import React, { useRef, useState } from "react";
import "./css/AddEmployee.css";
import HRDashboard from "./HRDashboard ";

const AddEmployee = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <HRDashboard/>
      <div className="add-employee-container">
        <form className="add-employee-form">
        <div className="add-employee-header">
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
        <div className="add-employee-content">
          <div className="left-section">
            <div className="profile-pic-section">
              <div className="profile-pic-circle" style={{ position: "relative" }}>
                {image ? (
                  <img
                    src={image}
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="10" r="4" stroke="#9E9E9E" strokeWidth="2"/>
                    <path d="M4 20c0-2.209 3.582-4 8-4s8 1.791 8 4" stroke="#9E9E9E" strokeWidth="2"/>
                  </svg>
                )}
                <span
                  className="profile-pic-add"
                  style={{ cursor: "pointer", position: "absolute", bottom: 0, right: 0 }}
                  onClick={handleIconClick}
                >
                  <svg width="24" height="24" fill="#2196f3" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#fff"/>
                    <path d="M12 7v10M7 12h10" stroke="#2196f3" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="employee-form-grid">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter first name" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter last name" />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter phone number" />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email address" />
              </div>
              <div className="input-group">
                <label>Designation</label>
                <input type="text" placeholder="Enter designation" />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input type="text" placeholder="Enter address" />
              </div>
              <div className="input-group">
                <label>City</label>
                <select>
                  <option>Select City</option>
                </select>
              </div>
              <div className="input-group">
                <label>State</label>
                <select>
                  <option>Select state</option>
                </select>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="section-box">
              <label className="section-title">Education</label>
              <div className="education-row">
                <div className="input-group">
                  <label>Degree Program</label>
                  <select>
                    <option>Select degree program</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Institute</label>
                  <select>
                    <option>Select institute</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="section-box">
              <label className="section-title">Experience</label>
              <div className="experience-row">
                <div className="input-group">
                  <label>Position/Designation</label>
                  <input type="text" placeholder="Enter designation" />
                </div>
                <div className="input-group">
                  <label>Company</label>
                  <input type="text" placeholder="Enter company name" />
                </div>
              </div>
              <div className="experience-row">
                <div className="input-group">
                  <label>Job Type</label>
                  <select>
                    <option>Select job type</option>
                  </select>
                </div>
              </div>
              <div className="experience-row">
                <div className="input-group">
                  <label>Start Date</label>
                  <input type="date" />
                </div>
                <div className="input-group">
                  <label>End Date</label>
                  <input type="date" />
                  <div className="checkbox-inline">
                    <input type="checkbox" id="currentlyWork" />
                    <label htmlFor="currentlyWork">I'm currently work here</label>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label>Description</label>
                <textarea placeholder="Description" rows={2}/>
              </div>
              <div className="add-experience">
                <button type="button" className="add-experience-btn">+ Add Experience</button>
              </div>
            </div>
            <div className="section-box">
              <label className="section-title">Skills</label>
              <div className="skills-row">
                <input type="text" placeholder="Add skill" />
                <button type="button" className="add-skill-btn">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <rect x="10" y="4" width="4" height="16" rx="2" fill="#9e9e9e"/>
                    <rect x="4" y="10" width="16" height="4" rx="2" fill="#9e9e9e"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
    </div>
    </>
  );
};

export default AddEmployee;