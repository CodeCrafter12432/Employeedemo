import React, { useState } from "react";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";
import "./App.css";
 
function App() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(true);
 
  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
    setShowForm(false);
  };
 
  return (
    <div className="app-container">
      <h1>Employee App</h1>
      {showForm ? (
        <EmployeeForm onSave={addEmployee} />
      ) : (
        <EmployeeList employees={employees} onAddNew={() => setShowForm(true)} />
      )}
    </div>
  );
}
 
export default App;