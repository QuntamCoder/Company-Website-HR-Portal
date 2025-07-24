import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HRDashboard from './components/pages/admin/HRDashboard .jsx';
import AddEmployee from './components/pages/admin/AddEmployee.jsx';
import NewJobForm from './components/pages/admin/NewJobForm.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <HRDashboard />

        <Routes>
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/post-opening" element={<NewJobForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
