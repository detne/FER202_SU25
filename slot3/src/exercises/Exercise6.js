import React from 'react';

const Exercise6 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "IT" }
  ];

  return (
    <ul>
      {employees.filter(e => e.department === "IT").map((e, index) => (
        <li key={index}>{e.name}</li>
      ))}
    </ul>
  );
};

export default Exercise6;
