// FormData.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../app/userSlice';

export default function FormData() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', age: '', company: '', feedback: '' });

  const handleSubmit = () => {
    dispatch(addUser(formData));
    setFormData({ name: '', age: '', company: '', feedback: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <h2>Enter user data</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="feedback">Feedback:</label>
        <input
          type="text"
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleInputChange}
          required
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
