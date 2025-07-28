import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HRDashboard from './components/pages/admin/HRDashboard .jsx';
import AddEmployee from './components/pages/admin/AddEmployee.jsx';
import NewJobForm from './components/pages/admin/NewJobForm.jsx';
import LeaveApplicationForm from './components/pages/employee/LeaveApplicationForm.jsx';
// import EmployeeDashboard from './components/pages/employee/EmployeeDashBoard.jsx';
import EmployeePerformance from './components/pages/employee/EmployeePerformance.jsx';
import CandidateAuth from './components/pages/candidate/CandidateAuth.jsx';
import CandidateNavbar from './components/pages/candidate/CandidateNavbar.jsx';
import CompanyWebsite from './components/pages/company-website/CompanyWebsite.jsx';
import EmployeePerformanceReport from './components/pages/admin/EmployeePerformanceReport.jsx';
import EmployeeDashboard from './components/pages/employee/EmployeeDashBoard.jsx';
import EmployeeAuth from './components/pages/employee/EmployeeAuth.jsx';

function App() {
  return (
    // <div>
    //   <HRDashboard/>
    // </div>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       {/* <Route path="/" element={<HRDashboard />} /> */}
    //       <Route path="/add-employee" element={<AddEmployee />} />
    //       <Route path="/post-opening" element={<NewJobForm />} />
    //       {/* Candidate routes */}
    //       <Route path="/candidate-auth" element={<CandidateAuth />} />
    //       <Route path="/candidate-dashboard" element={<CandidateNavbar />} />
    //       <Route path="/report" element={<EmployeePerformanceReport />} />
    //      <Route path="/" element={<EmployeeDashboard />} />

    //       {/* Employee routes */}
    //       <Route path="/apply-leave" element={<LeaveApplicationForm />} />
    //       <Route path="/emp-performance" element={<EmployeePerformance />} />
    //     </Routes>
    //   </div>
    // </Router>
    <EmployeeAuth/>
  );
}

export default App;
