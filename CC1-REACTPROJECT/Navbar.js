

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BloodDonationContext } from './BloodDonationContext'; 

function Navbar() {
  const { user, logoutUser } = useContext(BloodDonationContext); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logoutUser(); 
    navigate('/'); 
  };

  return (
    <nav>
      <div className="navbar-container">
        <h1 className="logo">Blood Donation</h1>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/donate">Donate Blood</Link></li>
          <li><Link to="/find-donors">Find Donors</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
        <div className="user-info">
          {user ? (
            <>
              <p>Welcome, {user.name}!</p>
              <button onClick={handleLogout}>Logout</button> 
            </>
          ) : (
            <Link to="/">Sign In</Link> 
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
