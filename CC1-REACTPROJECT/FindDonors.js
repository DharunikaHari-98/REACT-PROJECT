import React from 'react';
import './styles.css';

const FindDonors = () => {
  return (
    <div>
      <center><h1>Find Donors</h1></center>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.239558639617!2d-122.0842492846875!3d37.42199977982556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb16d1f6b75b%3A0x2d134bf53b6fc7b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1638288683847!5m2!1sen!2sus"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default FindDonors;