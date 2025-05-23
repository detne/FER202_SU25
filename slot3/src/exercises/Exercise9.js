import React from 'react';

const Exercise9 = () => {
  const employees = [
    { name: "Anna", age: 50 },
    { name: "Brian", age: 16 },
    { name: "Clara", age: 25 }
  ];

  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return <p>Any teenager? {isTeenager.toString()}</p>;
};

export default Exercise9;
