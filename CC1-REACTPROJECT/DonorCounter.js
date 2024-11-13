import React, { useContext } from 'react';
import { BloodDonationContext } from './BloodDonationContext';

const DonorCounter = () => {
  const { donors } = useContext(BloodDonationContext); 

  const donorCount = donors ? donors.length : 0; 

  return (
    <div className="donor-counter">
      <h3>Donors Today</h3>
      <p>{donorCount}</p> 
    </div>
  );
};

export default DonorCounter;
