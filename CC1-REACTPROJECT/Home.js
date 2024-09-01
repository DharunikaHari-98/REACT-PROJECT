import React from 'react';
import DonorCounter from './DonorCounter';
import './styles.css';

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Donate Blood, Save Lives</h1>
          <p>Join our mission to help those in need. Your blood can save lives.</p>
          <a href="/donate" className="cta-button">Donate Now</a>
          <DonorCounter />
        </div>
      </div>
      <center>
      <section className="testimonials">
        <h2>What Our Donors Say</h2>
        <div className="testimonial">
          <p>"Donating blood was a rewarding experience. It's easy and makes a huge difference!"</p>
          <p>- Jane Doe</p>
        </div>
        <div className="testimonial">
          <p>"I donate blood regularly and am happy to support such a worthy cause."</p>
          <p>- John Smith</p>
        </div>
      </section>
      </center>
      
    </div>
  );
}

export default Home;