import React, { useState } from "react";
import "./css/Profile.css";
import verifiedIcon from "../../../assets/verified.svg";
import EmployeeDashboard from "./EmployeeDashBoard";

const initialProfile = {
  fullName: "Shubham Kale",
  dob: "January 1, 1987",
  gender: "Male",
  nationality: "Indian",
  address: "California - United States",
  phone: "(213) 555-1234",
  email: "wilson@example.com",
  displayName: "s_wilson_168920",
  language: "English",
  timeZone: "GMT-5 (Eastern Time)",
};

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [form, setForm] = useState(profile);

  const handleEdit = () => {
    setForm(profile);
    setEditMode(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(form);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <>
      <EmployeeDashboard />
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="profile-avatar"
          />
          <div className="profile-info">
            <div className="profile-name-row">
              {editMode ? (
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="profile-input"
                />
              ) : (
                <span className="profile-name">{profile.fullName}</span>
              )}
              <img src={verifiedIcon} alt="Verified" className="verified-badge" />
            </div>
            {editMode ? (
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              <span className="profile-email">{profile.email}</span>
            )}
          </div>
          {editMode ? (
            <>
              <button className="profile-edit-btn" onClick={handleSave}>Save</button>
              <button className="profile-edit-btn" onClick={handleCancel} style={{marginLeft: "8px"}}>Cancel</button>
            </>
          ) : (
            <button className="profile-edit-btn" onClick={handleEdit}>Edit</button>
          )}
        </div>
        <div className="profile-details-grid">
          <div className="profile-section">
            <h3>Personal details</h3>
            <div className="profile-detail-row">
              <span>Full name:</span>
              {editMode ? (
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.fullName}</span>
              )}
            </div>
            <div className="profile-detail-row">
              <span>Date of Birth:</span>
              {editMode ? (
                <input type="text" name="dob" value={form.dob} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.dob}</span>
              )}
            </div>
            <div className="profile-detail-row">
              <span>Gender:</span>
              {editMode ? (
                <input type="text" name="gender" value={form.gender} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.gender}</span>
              )}
            </div>
            <div className="profile-detail-row">
              <span>Nationality:</span>
              {editMode ? (
                <input type="text" name="nationality" value={form.nationality} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.nationality}</span>
              )}
            </div>
            <div className="profile-detail-row">
              <span>Address:</span>
              {editMode ? (
                <input type="text" name="address" value={form.address} onChange={handleChange} className="profile-input" />
              ) : (
                <span>
                  <span role="img" aria-label="US Flag">🇺🇸</span> {profile.address}
                </span>
              )}
            </div>
            <div className="profile-detail-row">
              <span>Phone Number:</span>
              {editMode ? (
                <input type="text" name="phone" value={form.phone} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.phone}</span>
              )}
            </div>
            <div className="profile-detail-row">
              <span>Email:</span>
              {editMode ? (
                <input type="text" name="email" value={form.email} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.email}</span>
              )}
            </div>
          </div>
          <div className="profile-section">
            <h3>Account Details</h3>
            <div className="profile-detail-row">
              <span>Display Name:</span>
              {editMode ? (
                <input type="text" name="displayName" value={form.displayName} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.displayName}</span>
              )}
            </div>
            <div className="profile-detail-row">
              <span>Account Created:</span>
              <span>March 20, 2020</span>
            </div>
            <div className="profile-detail-row">
              <span>Last Login:</span>
              <span>August 22, 2024</span>
            </div>
            <div className="profile-detail-row">
              <span>Membership Status:</span>
              <span>Premium Member</span>
            </div>
            <div className="profile-detail-row">
              <span>Account Verification:</span>
              <span className="verified-status">Verified</span>
            </div>
            <div className="profile-detail-row">
              <span>Language Preference:</span>
              {editMode ? (
                <input type="text" name="language" value={form.language} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.language}</span>
              )}
            </div>
            <div className="profile-detail-row">
              <span>Time Zone:</span>
              {editMode ? (
                <input type="text" name="timeZone" value={form.timeZone} onChange={handleChange} className="profile-input" />
              ) : (
                <span>{profile.timeZone}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;