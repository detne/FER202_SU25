import React from 'react';

const Exercise4 = () => {
  const averageAge = (...ages) => {
    const total = ages.reduce((sum, a) => sum + a, 0);
    return (total / ages.length).toFixed(2);
  };

  return (
    <p>Average Age: {averageAge(18, 22, 45, 30, 50)}</p>
  );
};

export default Exercise4;
