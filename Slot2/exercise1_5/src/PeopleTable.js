import React from "react";

function PeopleTable() {
  const people = [
    { name: "John Doe", age: 30, country: "USA" },
    { name: "Jane Smith", age: 25, country: "UK" },
    { name: "Alice Johnson", age: 28, country: "Canada" },
  ];

  return (
    <div>
      <h1>People Table</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
