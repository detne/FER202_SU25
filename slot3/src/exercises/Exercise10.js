import React, { useState } from "react";

const Exercise10 = () => {
  const employees = [{ name: "Anna" }, { name: "Brian" }, { name: "Clara" }];
  const [search, setSearch] = useState("");

  const filtered = employees.filter((e) =>
    e.name.toUpperCase().startsWith(search.toUpperCase()),
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search name"
      />
      <ul>
        {filtered.map((e, i) => (
          <li key={i}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;
