import React, { useState } from 'react';
import './css/NewJobForm.css';

const NewJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    description: '',
    responsibilities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Job posted successfully!');
        setFormData({
          title: '',
          department: '',
          location: '',
          type: '',
          description: '',
          responsibilities: '',
        });
      } else {
        alert('Failed to post job.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="new-job-form-container">
      <h2>Post a New Job Opening</h2>
      <form onSubmit={handleSubmit} className="new-job-form">
        <div className="form-group">
          <label>Job Title*</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., Senior Frontend Developer"
          />
        </div>

        <div className="form-group">
          <label>Department*</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            placeholder="e.g., Engineering"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Remote, New York Office"
          />
        </div>

        <div className="form-group">
          <label>Job Type*</label>
          <select 
            name="type" 
            value={formData.type} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>

        <div className="form-group">
          <label>Job Description*</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Provide a detailed overview of the position..."
          ></textarea>
        </div>

        <div className="form-group">
          <label>Key Responsibilities</label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            placeholder="List the main duties and responsibilities..."
          ></textarea>
        </div>

        <button type="submit">Post Job Opening</button>
      </form>
    </div>
  );
};

export default NewJobForm;