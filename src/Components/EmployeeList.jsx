import React from "react";
 
function EmployeeList({ employees, onAddNew }) {
  return (
    <div className="employee-list">
      <button onClick={onAddNew}>Add New</button>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.address}</td>
              <td>{emp.email}</td>
              <td>{emp.dob}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default EmployeeList;