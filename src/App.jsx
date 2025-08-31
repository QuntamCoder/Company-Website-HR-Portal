import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HRDashboard from './components/pages/admin/HRDashboard .jsx';
import AddEmployee from './components/pages/admin/AddEmployee.jsx';
import NewJobForm from './components/pages/admin/NewJobForm.jsx';
import LeaveApplicationForm from './components/pages/employee/LeaveApplicationForm.jsx';
import EmployeePerformance from './components/pages/employee/EmployeePerformance.jsx';
import CandidateAuth from './components/pages/candidate/CandidateAuth.jsx';
import CandidateNavbar from './components/pages/candidate/CandidateNavbar.jsx';
import CompanyWebsite from './components/pages/company-website/CompanyWebsite.jsx';
import EmployeePerformanceReport from './components/pages/admin/EmployeePerformanceReport.jsx';
import EmployeeDashboard from './components/pages/employee/EmployeeDashBoard.jsx';
import EmployeeAuth from './components/pages/employee/EmployeeAuth.jsx';
import EmployeeAttendance from './components/pages/employee/EmployeeAttendance.jsx';
import EmployeeDashboardContent from './components/pages/employee/EmployeDashBoardContent.jsx';
import LeaveRequestPage from './components/pages/employee/LeaveRequestPage.jsx';
import AnnouncementsBoard from './components/pages/employee/AnnouncementsBoard.jsx';
import HRAnnouncementForm from './components/pages/admin/HRAnnouncementForm.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeAuth />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/post-opening" element={<NewJobForm />} />
        <Route path="/candidate-auth" element={<CandidateAuth />} />
        <Route path="/candidate-dashboard" element={<CandidateNavbar />} />
        <Route path="/report" element={<EmployeePerformanceReport />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />

        <Route path="/apply-leave" element={<LeaveApplicationForm />} />
        <Route path="/emp-performance" element={<EmployeePerformance />} />
        <Route path="/employee-attendance" element={<EmployeeAttendance />} />
        <Route path="/dashboard-content" element={<EmployeeDashboardContent />} />
        <Route path="/leave" element={<LeaveRequestPage />} />
        <Route path="/announcements" element={<AnnouncementsBoard />} />
        <Route path="/hr-announcements" element={<HRAnnouncementForm />} />

      </Routes>
    </Router>   
  );
}

export default App;
