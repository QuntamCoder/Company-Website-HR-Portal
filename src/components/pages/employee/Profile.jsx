import React from "react";
import "./css/Profile.css";
import verifiedIcon from "../../../assets/verified.svg"; // You can use an SVG icon for the verified badge
import EmployeeDashboard from "./EmployeeDashBoard";

const Profile = () => {
  return (
    <><EmployeeDashboard/>
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg" // Placeholder, replace with actual image source
          alt="Profile"
          className="profile-avatar"
        />
        <div className="profile-info">
          <div className="profile-name-row">
            <span className="profile-name">Shubham Kale</span>
            <img src={verifiedIcon} alt="Verified" className="verified-badge" />
          </div>
          <span className="profile-email">shubham.kale@example.com</span>
        </div>
      </div>
      <div className="profile-details-grid">
        <div className="profile-section">
          <h3>Personal details</h3>
          <div className="profile-detail-row">
            <span>Full name:</span>
            <span>Shubham Kale</span>
          </div>
          <div className="profile-detail-row">
            <span>Date of Birth:</span>
            <span>January 1, 1987</span>
          </div>
          <div className="profile-detail-row">
            <span>Gender:</span>
            <span>Male</span>
          </div>
          <div className="profile-detail-row">
            <span>Nationality:</span>
            <span>Indian</span>
          </div>
          <div className="profile-detail-row">
            <span>Address:</span>
            <span>
              <span role="img" aria-label="US Flag">
                🇺🇸
              </span>{" "}
              California - United States
            </span>
          </div>
          <div className="profile-detail-row">
            <span>Phone Number:</span>
            <span>(213) 555-1234</span>
          </div>
          <div className="profile-detail-row">
            <span>Email:</span>
            <span>wilson@example.com</span>
          </div>
        </div>
        <div className="profile-section">
          <h3>Account Details</h3>
          <div className="profile-detail-row">
            <span>Display Name:</span>
            <span>s_wilson_168920</span>
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
            <span>English</span>
          </div>
          <div className="profile-detail-row">
            <span>Time Zone:</span>
            <span>GMT-5 (Eastern Time)</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;