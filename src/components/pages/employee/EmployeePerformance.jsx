import React from 'react';
import './css/EmployeePerformance.css';

const dummyPerformanceData = [
  {
    id: 1,
    name: 'Amit Sharma',
    department: 'Engineering',
    rating: 4.8,
    feedback: 'Consistently exceeds expectations. Amit has demonstrated exceptional problem-solving skills and has been instrumental in delivering complex features ahead of schedule. His collaboration with team members is outstanding.',
    status: 'Excellent',
    projectsCompleted: 12,
    lastReview: '2023-05-15'
  },

];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`}>★</span>);
  }
  
  if (hasHalfStar) {
    stars.push(<span key="half">☆</span>);
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`}>☆</span>);
  }
  
  return stars;
};

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const EmployeePerformance = () => {
  return (
    <div className="performance-dashboard">
      
      <div className="performance-grid">
        {dummyPerformanceData.map((emp) => (
          <div key={emp.id} className="performance-card">
            <div className="employee-header">
              <div className="employee-avatar">{getInitials(emp.name)}</div>
              <div>
                <h3 className="employee-name">{emp.name}</h3>
                <p className="employee-department">{emp.department}</p>
              </div>
            </div>
            
            <div className="rating-container">
              <div className="rating-stars">
                {renderStars(emp.rating)}
              </div>
              <div className="rating-value">{emp.rating.toFixed(1)}/5.0</div>
            </div>
            
            <div className="performance-details">
              <div className="detail-row">
                <span className="detail-label">Status:</span>
                <span className={`status-badge status-${emp.status.toLowerCase().replace(' ', '-')}`}>
                  {emp.status}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Projects:</span>
                <span>{emp.projectsCompleted}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Last Review:</span>
                <span>{new Date(emp.lastReview).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="feedback-text">
              <p>{emp.feedback}</p>
            </div>
            
            <div className="action-buttons">
              <button className="action-btn btn-primary">View Details</button>
              <button className="action-btn btn-secondary">Schedule Review</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeePerformance;