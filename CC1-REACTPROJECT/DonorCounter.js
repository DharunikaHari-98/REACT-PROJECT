import React, { useState, useEffect } from 'react';

function DonorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="donor-counter">
      <h3>Donors Today</h3>
      <p>{count}</p>
    </div>
  );
}

export default DonorCounter;