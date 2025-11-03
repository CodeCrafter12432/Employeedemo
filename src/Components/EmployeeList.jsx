
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>Employee List</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="row justify-content-center">
  <div className="col-md-10">
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Address</th>
          <th>Skill Set</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((emp, index) => (
          <tr key={index}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.dob}</td>
            <td>{emp.address}</td>
            <td>{emp.skillSet}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      <button className="btn btn-success" onClick={() => navigate('/')}>Add Employee</button>
    </div>
  );
}

export default EmployeeList;
