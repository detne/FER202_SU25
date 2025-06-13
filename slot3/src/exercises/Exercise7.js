import React from "react";

const Exercise7 = () => {
  const employees = [
    { name: "Brian", department: "IT" },
    { name: "Anna", department: "HR" },
    { name: "Clara", department: "HR" },
  ];

  const sorted = [...employees].sort((a, b) => {
    if (a.department !== b.department)
      return a.department.localeCompare(b.department);
    return a.name.localeCompare(b.name);
  });

  return (
    <ul>
      {sorted.map((e, index) => (
        <li key={index}>
          {e.name} - {e.department}
        </li>
      ))}
    </ul>
  );
};

export default Exercise7;
