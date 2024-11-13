import React, { useContext } from 'react';
import { BloodDonationContext } from './BloodDonationContext';
import './styles.css';

const FindDonors = () => {
  
  const { donors } = useContext(BloodDonationContext) || { donors: [] }; 

  return (
    <div>
      <center><h1>Find Donors</h1></center>

      {donors.length === 0 ? (
        <p>No donors available.</p>
      ) : (
        <ul>
          {donors.map((donor) => (
            <li key={donor.id}> 
              <p><strong>Name:</strong> {donor.name}</p>
              <p><strong>Blood Type:</strong> {donor.bloodType}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.239558639617!2d-122.0842492846875!3d37.42199977982556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb16d1f6b75b%3A0x2d134bf53b6fc7b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1638288683847!5m2!1sen!2sus"
          title="Google Map"
          style={{ width: '100%', height: '400px', border: '0' }}
          allowFullScreen
          aria-label="Google Map showing the location of Googleplex"
        ></iframe>
      </div>
    </div>
  );
};

export default FindDonors;
