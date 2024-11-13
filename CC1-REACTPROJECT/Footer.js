import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Blood Donation Organization. All rights reserved.</p>
        <p>
          Follow us on 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
        <p>
          <a href="/about">About Us</a> | 
          <a href="/donate">Donate Blood</a> | 
          <a href="/find-donors">Find Donors</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
