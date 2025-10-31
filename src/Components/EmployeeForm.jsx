import React, { useState } from "react";
 
function EmployeeForm({ onSave }) {
  const [form, setForm] = useState({ name: "", address: "", email: "", dob: "", role: "" });
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };
 
  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>Full Name:</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} required />
 
      <label>Address:</label>
      <input type="text" name="address" value={form.address} onChange={handleChange} required />
 
      <label>Email:</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required />
 
      <label>DOB:</label>
      <input type="date" name="dob" value={form.dob} onChange={handleChange} />
 
      <label>Role:</label>
      <input type="text" name="role" value={form.role} onChange={handleChange} />
 
      <div className="form-buttons">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
 
export default EmployeeForm;