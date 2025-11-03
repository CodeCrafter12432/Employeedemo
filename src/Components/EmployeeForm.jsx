
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    address: '',
    skillSet: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.dob) newErrors.dob = 'DOB is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(formData);
    localStorage.setItem('employees', JSON.stringify(employees));
    navigate('/list');
  };

  return (
    <div className="container mt-5">
      <h2>Add Employee Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email *</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth *</label>
          <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} />
          {errors.dob && <div className="text-danger">{errors.dob}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Skill Set</label>
          <input type="text" className="form-control" name="skillSet" value={formData.skillSet} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
