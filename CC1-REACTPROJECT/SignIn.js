import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Import Link here
import './styles.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace this with actual authentication logic
    if (email && password) {
      // Navigate to home page after successful login
      navigate('/home');
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

export default SignIn;