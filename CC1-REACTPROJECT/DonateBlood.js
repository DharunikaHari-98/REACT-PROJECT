import React, { useState } from 'react';

function DonateBlood() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodType: '',
    age: '',
    isAlcoholic: '', // New field for alcoholic status
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]); 
    setFormData({ name: '', email: '', bloodType: '', age: '', isAlcoholic: '' }); 
  };

  return (
    <div className="content">
      <center><h2>Donate Blood</h2></center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="blood-type">Blood Type:</label>
        <input
          type="text"
          id="blood-type"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label> {/* New field for age */}
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="isAlcoholic">Are you alcoholic?</label> {/* New field for alcoholic status */}
        <select
          id="isAlcoholic"
          name="isAlcoholic"
          value={formData.isAlcoholic}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {submissions.length > 0 && (
        <div className="submitted-info">
          <h3>Submitted Information</h3>
          <ul>
            {submissions.map((submission, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Blood Type:</strong> {submission.bloodType}</p>
                <p><strong>Age:</strong> {submission.age}</p> {/* Display age */}
                <p><strong>Alcoholic Status:</strong> {submission.isAlcoholic}</p> {/* Display alcoholic status */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DonateBlood;
