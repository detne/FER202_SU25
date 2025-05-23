import React from 'react';

const Exercise8 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "HR" },
    { name: "David", department: "IT" }
  ];

  const grouped = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) acc[emp.department] = [];
    acc[emp.department].push(emp);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(grouped).map(([dept, emps]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((e, i) => <li key={i}>{e.name}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;
