import React, { useEffect, useState } from 'react';

const EmptySlot = () => {
  const [displayMole, setDisplayMole] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayMole(true);
    }, Math.random() * 5000 + 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {displayMole ? null : <img style={{ width: '30vw' }} src="/molehill.png" alt="molehill" />}
    </div>
  );
};

export default EmptySlot;
