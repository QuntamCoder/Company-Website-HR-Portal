import React, { useState } from 'react';
import './css/AddEmployee.css';
import HRDashboard from './HRDashboard ';

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
    <div>
      <HRDashboard/>
    <div className="staff-registration-wrapper">
      <h2 className="recruitment-header-text">Add New Employee</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="data-collection-block">
          <h4 className="category-heading-style">Personal Information</h4>
          <div className="input-fields-matrix">
            <div className="single-field-container">
              <label>Full Name</label>
              <input 
                className="text-input-element"
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="single-field-container">
              <label>Date of Birth</label>
              <input 
                className="text-input-element"
                type="date" 
                name="dob" 
                value={formData.dob}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Gender</label>
              <select 
                className="text-input-element"
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
            
            <div className="single-field-container">
              <label>Nationality</label>
              <input 
                className="text-input-element"
                name="nationality" 
                value={formData.nationality}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Contact Number</label>
              <input 
                className="text-input-element"
                name="contactNumber" 
                value={formData.contactNumber}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Email Address</label>
              <input 
                className="text-input-element"
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Current Address</label>
              <input 
                className="text-input-element"
                name="address" 
                value={formData.address}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Emergency Contact</label>
              <input 
                className="text-input-element"
                name="emergencyContact" 
                value={formData.emergencyContact}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Professional Details Section */}
        <div className="data-collection-block">
          <h4 className="category-heading-style">Professional Details</h4>
          <div className="input-fields-matrix">
            <div className="single-field-container">
              <label>Job Title</label>
              <input 
                className="text-input-element"
                name="jobTitle" 
                value={formData.jobTitle}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Department</label>
              <input 
                className="text-input-element"
                name="department" 
                value={formData.department}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Employment Type</label>
              <select 
                className="text-input-element"
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
            
            <div className="single-field-container">
              <label>Agreed Salary</label>
              <input 
                className="text-input-element"
                type="number" 
                name="salary" 
                value={formData.salary}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Joining Date</label>
              <input 
                className="text-input-element"
                type="date" 
                name="joiningDate" 
                value={formData.joiningDate}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Reporting Manager</label>
              <input 
                className="text-input-element"
                name="reportingManager" 
                value={formData.reportingManager}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Work Location</label>
              <input 
                className="text-input-element"
                name="workLocation" 
                value={formData.workLocation}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Education & Qualifications Section */}
        <div className="data-collection-block">
          <h4 className="category-heading-style">Education & Qualifications</h4>
          <div className="input-fields-matrix">
            <div className="single-field-container">
              <label>Highest Qualification</label>
              <input 
                className="text-input-element"
                name="qualification" 
                value={formData.qualification}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Educational Institution</label>
              <input 
                className="text-input-element"
                name="institution" 
                value={formData.institution}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Certifications</label>
              <input 
                className="text-input-element"
                name="certification" 
                value={formData.certification}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Additional Training</label>
              <input 
                className="text-input-element"
                name="training" 
                value={formData.training}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Employment History Section */}
        <div className="data-collection-block">
          <h4 className="category-heading-style">Employment History</h4>
          <div className="input-fields-matrix">
            <div className="single-field-container">
              <label>Previous Employer</label>
              <input 
                className="text-input-element"
                name="previousEmployer" 
                value={formData.previousEmployer}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Job Duration</label>
              <input 
                className="text-input-element"
                name="jobDuration" 
                value={formData.jobDuration}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Key Responsibilities</label>
              <input 
                className="text-input-element"
                name="responsibilities" 
                value={formData.responsibilities}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Reason for Leaving</label>
              <input 
                className="text-input-element"
                name="reasonForLeaving" 
                value={formData.reasonForLeaving}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Reference Contacts</label>
              <input 
                className="text-input-element"
                name="references" 
                value={formData.references}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Bank & Payroll Section */}
        <div className="data-collection-block">
          <h4 className="category-heading-style">Bank & Payroll</h4>
          <div className="input-fields-matrix">
            <div className="single-field-container">
              <label>Bank Account Number</label>
              <input 
                className="text-input-element"
                name="bankAccount" 
                value={formData.bankAccount}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Bank Name</label>
              <input 
                className="text-input-element"
                name="bankName" 
                value={formData.bankName}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>IFSC/SWIFT Code</label>
              <input 
                className="text-input-element"
                name="bankCode" 
                value={formData.bankCode}
                onChange={handleChange} 
              />
            </div>
            
            <div className="single-field-container">
              <label>Tax ID / PAN</label>
              <input 
                className="text-input-element"
                name="taxId" 
                value={formData.taxId}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        {/* Legal & Compliance Section */}
        <div className="data-collection-block">
          <h4 className="category-heading-style">Legal & Compliance</h4>
          <div className="input-fields-matrix">
            <div className="boolean-selection-wrapper">
              <input 
                type="checkbox" 
                name="hasNDA" 
                checked={formData.hasNDA}
                onChange={handleChange} 
              />
              <label>NDA Signed</label>
            </div>
            
            <div className="boolean-selection-wrapper">
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
        <div className="data-collection-block">
          <h4 className="category-heading-style">System Access</h4>
          <div className="input-fields-matrix">
            <div className="single-field-container">
              <label>Required Software Access</label>
              <input 
                className="text-input-element"
                name="systemAccess" 
                value={formData.systemAccess}
                onChange={handleChange} 
              />
            </div>
            
            <div className="boolean-selection-wrapper">
              <input 
                type="checkbox" 
                name="deviceIssued" 
                checked={formData.deviceIssued}
                onChange={handleChange} 
              />
              <label>Laptop/Device Issued</label>
            </div>
            
            <div className="single-field-container">
              <label>Access Level</label>
              <input 
                className="text-input-element"
                name="accessLevel" 
                value={formData.accessLevel}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        <button type="submit" className="primary-action-button">Submit Employee Details</button>
      </form>
    </div>
    </div>
  );
};

export default AddEmployee;