function PeopleList() {
    const people = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 },
    ];
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          {person.name} - {person.age}
        </li>
      ))}
    </ul>
  );
}
export default PeopleList;