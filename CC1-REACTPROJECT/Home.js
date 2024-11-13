import React, { useState } from 'react';
import DonorCounter from './DonorCounter';
import './styles.css';

function Home() {
  const [theme, setTheme] = useState('light'); 

 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`home ${theme}`}> 
      <div className="hero">
        <div className="hero-content">
          <h1>Donate Blood, Save Lives</h1>
          <p>Join our mission to help those in need. Your blood can save lives.</p>
          <a href="/donate" className="cta-button">Donate Now</a>
          <DonorCounter />
         
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
