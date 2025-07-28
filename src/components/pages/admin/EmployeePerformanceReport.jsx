import React, { useState } from 'react';
import './css/EmployeePerformanceReport.css';
import HRDashboard from './HRDashboard ';

const EmployeePerformanceReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Q4-2024');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Mock data for the report
  const performanceData = [
    {
      id: 1,
      name: 'Sarah Chen',
      department: 'Engineering',
      position: 'Senior Developer',
      overallScore: 4.8,
      goalCompletion: 95,
      punctuality: 4.9,
      teamwork: 4.7,
      innovation: 4.6,
      projects: ['Mobile App V3', 'API Optimization'],
      feedback: 'Exceptional performance with consistent delivery of high-quality work.'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      department: 'Marketing',
      position: 'Marketing Manager',
      overallScore: 4.5,
      goalCompletion: 88,
      punctuality: 4.3,
      teamwork: 4.8,
      innovation: 4.2,
      projects: ['Brand Campaign 2024', 'Social Media Strategy'],
      feedback: 'Strong leadership skills and creative marketing strategies.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      department: 'Sales',
      position: 'Sales Representative',
      overallScore: 4.2,
      goalCompletion: 92,
      punctuality: 4.1,
      teamwork: 4.4,
      innovation: 3.9,
      projects: ['Q4 Sales Drive', 'Client Retention Program'],
      feedback: 'Consistently exceeds sales targets with excellent client relationships.'
    },
    {
      id: 4,
      name: 'David Park',
      department: 'HR',
      position: 'HR Specialist',
      overallScore: 4.6,
      goalCompletion: 90,
      punctuality: 4.8,
      teamwork: 4.7,
      innovation: 4.3,
      projects: ['Employee Wellness Program', 'Onboarding Process Improvement'],
      feedback: 'Outstanding contribution to employee satisfaction and retention.'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      department: 'Finance',
      position: 'Financial Analyst',
      overallScore: 4.4,
      goalCompletion: 87,
      punctuality: 4.6,
      teamwork: 4.2,
      innovation: 4.1,
      projects: ['Budget Analysis 2024', 'Cost Optimization Initiative'],
      feedback: 'Excellent analytical skills with accurate financial reporting.'
    }
  ];

  const departments = ['All', 'Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];
  const periods = ['Q4-2024', 'Q3-2024', 'Q2-2024', 'Q1-2024'];

  const filteredData = selectedDepartment === 'All' 
    ? performanceData 
    : performanceData.filter(emp => emp.department === selectedDepartment);

  const getScoreColor = (score) => {
    if (score >= 4.5) return 'excellent-performance';
    if (score >= 4.0) return 'good-performance';
    if (score >= 3.5) return 'average-performance';
    return 'needs-improvement';
  };

  const getScoreLabel = (score) => {
    if (score >= 4.5) return 'Excellent';
    if (score >= 4.0) return 'Good';
    if (score >= 3.5) return 'Average';
    return 'Needs Improvement';
  };

  return (
    <div>
        <HRDashboard/>
    <div className="performance-analytics-dashboard">
      {/* Report Header */}
      <div className="report-title-section">
        <h1 className="main-report-heading">Employee Performance Report</h1>
        <p className="report-subtitle-text">Quarterly Performance Analysis & Insights</p>
      </div>

      {/* Filter Controls */}
      <div className="filter-controls-panel">
        <div className="filter-option-group">
          <label className="filter-label-text">Reporting Period:</label>
          <select 
            className="filter-dropdown-element"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            {periods.map(period => (
              <option key={period} value={period}>{period}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-option-group">
          <label className="filter-label-text">Department:</label>
          <select 
            className="filter-dropdown-element"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <button className="export-report-button">
          📊 Export Report
        </button>
      </div>

      {/* Summary Statistics */}
      <div className="summary-metrics-container">
        <div className="metric-card-wrapper">
          <div className="metric-icon-display">👥</div>
          <div className="metric-content-area">
            <h3 className="metric-value-number">{filteredData.length}</h3>
            <p className="metric-description-text">Employees Evaluated</p>
          </div>
        </div>

        <div className="metric-card-wrapper">
          <div className="metric-icon-display">⭐</div>
          <div className="metric-content-area">
            <h3 className="metric-value-number">
              {(filteredData.reduce((acc, emp) => acc + emp.overallScore, 0) / filteredData.length).toFixed(1)}
            </h3>
            <p className="metric-description-text">Average Performance Score</p>
          </div>
        </div>

        <div className="metric-card-wrapper">
          <div className="metric-icon-display">🎯</div>
          <div className="metric-content-area">
            <h3 className="metric-value-number">
              {Math.round(filteredData.reduce((acc, emp) => acc + emp.goalCompletion, 0) / filteredData.length)}%
            </h3>
            <p className="metric-description-text">Goal Completion Rate</p>
          </div>
        </div>

        <div className="metric-card-wrapper">
          <div className="metric-icon-display">🚀</div>
          <div className="metric-content-area">
            <h3 className="metric-value-number">
              {filteredData.filter(emp => emp.overallScore >= 4.5).length}
            </h3>
            <p className="metric-description-text">Top Performers</p>
          </div>
        </div>
      </div>

      {/* Performance Table */}
      <div className="employee-data-table-section">
        <h2 className="table-section-title">Individual Performance Breakdown</h2>
        
        <div className="data-table-wrapper">
          <table className="performance-data-grid">
            <thead className="table-header-row">
              <tr>
                <th className="table-header-cell">Employee</th>
                <th className="table-header-cell">Department</th>
                <th className="table-header-cell">Overall Score</th>
                <th className="table-header-cell">Goal Completion</th>
                <th className="table-header-cell">Punctuality</th>
                <th className="table-header-cell">Teamwork</th>
                <th className="table-header-cell">Innovation</th>
                <th className="table-header-cell">Status</th>
              </tr>
            </thead>
            <tbody className="table-content-body">
              {filteredData.map(employee => (
                <tr key={employee.id} className="employee-data-row">
                  <td className="employee-info-cell">
                    <div className="employee-profile-section">
                      <div className="employee-avatar-circle">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="employee-details-text">
                        <div className="employee-name-display">{employee.name}</div>
                        <div className="employee-position-text">{employee.position}</div>
                      </div>
                    </div>
                  </td>
                  <td className="department-info-cell">{employee.department}</td>
                  <td className="score-display-cell">
                    <span className={`score-badge ${getScoreColor(employee.overallScore)}`}>
                      {employee.overallScore.toFixed(1)}
                    </span>
                  </td>
                  <td className="progress-indicator-cell">
                    <div className="progress-bar-container">
                      <div 
                        className="progress-fill-element"
                        style={{ width: `${employee.goalCompletion}%` }}
                      ></div>
                    </div>
                    <span className="progress-percentage-text">{employee.goalCompletion}%</span>
                  </td>
                  <td className="rating-score-cell">{employee.punctuality.toFixed(1)}</td>
                  <td className="rating-score-cell">{employee.teamwork.toFixed(1)}</td>
                  <td className="rating-score-cell">{employee.innovation.toFixed(1)}</td>
                  <td className="status-indicator-cell">
                    <span className={`status-label ${getScoreColor(employee.overallScore)}`}>
                      {getScoreLabel(employee.overallScore)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Insights */}
      <div className="insights-breakdown-section">
        <h2 className="insights-section-heading">Performance Insights & Feedback</h2>
        
        <div className="insights-cards-grid">
          {filteredData.map(employee => (
            <div key={employee.id} className="individual-insight-card">
              <div className="insight-card-header">
                <div className="insight-employee-info">
                  <h3 className="insight-employee-name">{employee.name}</h3>
                  <p className="insight-employee-role">{employee.department} - {employee.position}</p>
                </div>
                <div className={`insight-score-indicator ${getScoreColor(employee.overallScore)}`}>
                  {employee.overallScore.toFixed(1)}
                </div>
              </div>
              
              <div className="insight-card-content">
                <div className="projects-list-section">
                  <h4 className="projects-section-title">Key Projects:</h4>
                  <ul className="projects-item-list">
                    {employee.projects.map((project, index) => (
                      <li key={index} className="project-item-text">{project}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="feedback-text-section">
                  <h4 className="feedback-section-title">Manager Feedback:</h4>
                  <p className="feedback-content-text">{employee.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Footer */}
      <div className="report-footer-section">
        <div className="report-generation-info">
          <p className="generation-timestamp">Report Generated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
          <p className="report-period-info">Reporting Period: {selectedPeriod}</p>
        </div>
        
        <div className="report-actions-panel">
          <button className="secondary-action-btn">📧 Email Report</button>
          <button className="secondary-action-btn">💾 Save as PDF</button>
          <button className="primary-action-btn">📈 View Analytics</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmployeePerformanceReport;