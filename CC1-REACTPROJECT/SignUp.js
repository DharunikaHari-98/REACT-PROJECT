import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './styles.css';

function SignUp() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Here you can handle the form data and send it to your server or perform any other logic

    // After successful signup, navigate to the home page
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <center><h2>Sign Up</h2></center>
      <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/">Sign In</Link></p>
    </div>
  );
}

export default SignUp;
