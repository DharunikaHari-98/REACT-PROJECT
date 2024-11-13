// src/SignUp.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BloodDonationContext } from './BloodDonationContext';
import axios from 'axios';

function SignUp() {
  const { setDonors } = useContext(BloodDonationContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && email && password) {
      try {
        const response = await axios.post('http://localhost:5000/users', {
          name,
          email,
          password
        });
        setDonors(prevDonors => [...prevDonors, response.data]);
        alert('Sign up successful! Please sign in.');
        navigate('/'); 
      } catch (error) {
        alert('Error signing up. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="auth-container">
      <center><h2>Sign Up</h2></center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
