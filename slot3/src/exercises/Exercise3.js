import React from "react";

const Exercise3 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR" },
    { id: 2, name: "Brian", department: "IT" },
    { name: "Ann", department: "Finance" },
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e, index) => (
          <tr key={e.id || index}>
            <td>{e.id || index}</td>
            <td>{e.name}</td>
            <td>{e.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Exercise3;
