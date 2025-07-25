import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HRDashboard from './components/pages/admin/HRDashboard .jsx';
import AddEmployee from './components/pages/admin/AddEmployee.jsx';
import NewJobForm from './components/pages/admin/NewJobForm.jsx';
import LeaveApplicationForm from './components/pages/employee/LeaveApplicationForm.jsx';
import EmployeeDashboard from './components/pages/employee/EmployeeDashBoard.jsx';
import EmployeePerformance from './components/pages/employee/EmployeePerformance.jsx';
import CandidateAuth from './components/pages/candidate/CandidateAuth.jsx';


function App() {
  return (
    // <Router>
    //   <div className="App">
    //     {/* <HRDashboard /> */}
    //     <EmployeeDashboard/>
    //     <Routes>
    //       <Route path="/add-employee" element={<AddEmployee />} />
    //       <Route path="/post-opening" element={<NewJobForm/>} />
    //     <Route path="/apply-leave" element={<LeaveApplicationForm />} />
    //     <Route path="/emp-performance" element={<EmployeePerformance />} />

    //     </Routes>
    //   </div>
    // </Router>
    <CandidateAuth />
  );

}

export default App;
