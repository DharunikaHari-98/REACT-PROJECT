// src/SignIn.js
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';  
import { BloodDonationContext } from './BloodDonationContext';
import axios from 'axios';
import './styles.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(BloodDonationContext); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
        if (response.data.length > 0) {
          setUser({ email }); 
          navigate('/home');
        } else {
          alert('Invalid credentials. Please sign up.');
        }
      } catch (error) {
        alert('Error logging in. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="auth-container">
      <center><h2>Sign In</h2></center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit" className="auth-button">Sign In</button>
      </form>
      <center><p>Don't have an account? <Link to="/signup">Sign Up</Link></p></center>
    </div>
  );
}

export default SignIn;
