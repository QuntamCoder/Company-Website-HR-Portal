import React, { useState } from 'react';
import './css/AddEmployee.css';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    nationality: '',
    contactNumber: '',
    email: '',
    address: '',
    emergencyContact: '',

    jobTitle: '',
    department: '',
    employmentType: '',
    salary: '',
    joiningDate: '',
    reportingManager: '',
    workLocation: '',

    qualification: '',
    institution: '',
    certification: '',
    training: '',

    previousEmployer: '',
    jobDuration: '',
    responsibilities: '',
    reasonForLeaving: '',
    references: '',

    bankAccount: '',
    bankName: '',
    bankCode: '',
    taxId: '',

    hasNDA: false,
    hasAgreement: false,

    systemAccess: '',
    deviceIssued: false,
    accessLevel: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Submit formData to backend API
  };

  return (
    <div className="employee-form-container">
      <h2 className="employee-form-title">Add New Employee</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="form-section">
          <h4 className="section-title">Personal Information</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input 
                className="form-control"
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Date of Birth</label>
              <input 
                className="form-control"
                type="date" 
                name="dob" 
                value={formData.dob}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Gender</label>
              <select 
                className="form-control"
                name="gender" 
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Nationality</label>
              <input 
                className="form-control"
                name="nationality" 
                value={formData.nationality}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Contact Number</label>
              <input 
                className="form-control"
                name="contactNumber" 
                value={formData.contactNumber}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input 
                className="form-control"
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Current Address</label>
              <input 
                className="form-control"
                name="address" 
                value={formData.address}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Emergency Contact</label>
              <input 
                className="form-control"
                name="emergencyContact" 
                value={formData.emergencyContact}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Professional Details Section */}
        <div className="form-section">
          <h4 className="section-title">Professional Details</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Job Title</label>
              <input 
                className="form-control"
                name="jobTitle" 
                value={formData.jobTitle}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Department</label>
              <input 
                className="form-control"
                name="department" 
                value={formData.department}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Employment Type</label>
              <select 
                className="form-control"
                name="employmentType" 
                value={formData.employmentType}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Agreed Salary</label>
              <input 
                className="form-control"
                type="number" 
                name="salary" 
                value={formData.salary}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Joining Date</label>
              <input 
                className="form-control"
                type="date" 
                name="joiningDate" 
                value={formData.joiningDate}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Reporting Manager</label>
              <input 
                className="form-control"
                name="reportingManager" 
                value={formData.reportingManager}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Work Location</label>
              <input 
                className="form-control"
                name="workLocation" 
                value={formData.workLocation}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Education & Qualifications Section */}
        <div className="form-section">
          <h4 className="section-title">Education & Qualifications</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Highest Qualification</label>
              <input 
                className="form-control"
                name="qualification" 
                value={formData.qualification}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Educational Institution</label>
              <input 
                className="form-control"
                name="institution" 
                value={formData.institution}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Certifications</label>
              <input 
                className="form-control"
                name="certification" 
                value={formData.certification}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Additional Training</label>
              <input 
                className="form-control"
                name="training" 
                value={formData.training}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Employment History Section */}
        <div className="form-section">
          <h4 className="section-title">Employment History</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Previous Employer</label>
              <input 
                className="form-control"
                name="previousEmployer" 
                value={formData.previousEmployer}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Job Duration</label>
              <input 
                className="form-control"
                name="jobDuration" 
                value={formData.jobDuration}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Key Responsibilities</label>
              <input 
                className="form-control"
                name="responsibilities" 
                value={formData.responsibilities}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Reason for Leaving</label>
              <input 
                className="form-control"
                name="reasonForLeaving" 
                value={formData.reasonForLeaving}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Reference Contacts</label>
              <input 
                className="form-control"
                name="references" 
                value={formData.references}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Bank & Payroll Section */}
        <div className="form-section">
          <h4 className="section-title">Bank & Payroll</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Bank Account Number</label>
              <input 
                className="form-control"
                name="bankAccount" 
                value={formData.bankAccount}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Bank Name</label>
              <input 
                className="form-control"
                name="bankName" 
                value={formData.bankName}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>IFSC/SWIFT Code</label>
              <input 
                className="form-control"
                name="bankCode" 
                value={formData.bankCode}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Tax ID / PAN</label>
              <input 
                className="form-control"
                name="taxId" 
                value={formData.taxId}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Legal & Compliance Section */}
        <div className="form-section">
          <h4 className="section-title">Legal & Compliance</h4>
          <div className="form-grid">
            <div className="checkbox-group">
              <input 
                type="checkbox" 
                name="hasNDA" 
                checked={formData.hasNDA}
                onChange={handleChange} 
              />
              <label>NDA Signed</label>
            </div>
            
            <div className="checkbox-group">
              <input 
                type="checkbox" 
                name="hasAgreement" 
                checked={formData.hasAgreement}
                onChange={handleChange} 
              />
              <label>Employment Agreement Signed</label>
            </div>
          </div>
        </div>

        {/* System Access Section */}
        <div className="form-section">
          <h4 className="section-title">System Access</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Required Software Access</label>
              <input 
                className="form-control"
                name="systemAccess" 
                value={formData.systemAccess}
                onChange={handleChange} 
              />
            </div>
            
            <div className="checkbox-group">
              <input 
                type="checkbox" 
                name="deviceIssued" 
                checked={formData.deviceIssued}
                onChange={handleChange} 
              />
              <label>Laptop/Device Issued</label>
            </div>
            
            <div className="form-group">
              <label>Access Level</label>
              <input 
                className="form-control"
                name="accessLevel" 
                value={formData.accessLevel}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Employee Details</button>
      </form>
    </div>
  );
};

export default AddEmployee;