import React from 'react';

const Exercise5 = () => {
  const employees = [
    { name: "Anna" },
    { name: "Brian" },
    { name: "Clara" }
  ];

  return (
    <select>
      {employees.map((e, index) => (
        <option key={index}>{e.name}</option>
      ))}
    </select>
  );
};

export default Exercise5;
