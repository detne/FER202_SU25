function PersonDetail() {
  const person = {
    name: "Alice",
    age: 25,
    job: "IT",
  };
  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Job: {person.job}</p>
    </div>
  );
}
export default PersonDetail;
