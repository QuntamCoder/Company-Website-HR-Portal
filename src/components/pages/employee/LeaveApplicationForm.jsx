import React, { useState } from 'react';
import './css/LeaveApplicationForm.css';
import EmployeeDashboard from './EmployeeDashBoard';

const LeaveApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Leave Application Submitted:', formData);
    alert('Leave application submitted successfully!');
    setFormData({
      name: '',
      employeeId: '',
      leaveType: '',
      startDate: '',
      endDate: '',
      reason: '',
    });
  };

  return (
    <div>
      <EmployeeDashboard/>
    <div className="leave-form-container">
      <h2>Leave Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Employee ID</label>
          <input 
            type="text" 
            name="employeeId" 
            value={formData.employeeId} 
            onChange={handleChange} 
            required 
            placeholder="Enter your employee ID"
          />
        </div>

        <div className="form-group">
          <label>Leave Type</label>
          <select 
            name="leaveType" 
            value={formData.leaveType} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Paid Leave">Paid Leave</option>
            <option value="Maternity Leave">Maternity Leave</option>
            <option value="Paternity Leave">Paternity Leave</option>
            <option value="Bereavement Leave">Bereavement Leave</option>
          </select>
        </div>

        <div className="date-inputs">
          <div className="form-group">
            <label>Start Date</label>
            <input 
              type="date" 
              name="startDate" 
              value={formData.startDate} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input 
              type="date" 
              name="endDate" 
              value={formData.endDate} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label>Reason for Leave</label>
          <textarea 
            name="reason" 
            value={formData.reason} 
            onChange={handleChange} 
            required 
            placeholder="Please provide details about your leave request"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
    </div>
  );
};

export default LeaveApplicationForm;