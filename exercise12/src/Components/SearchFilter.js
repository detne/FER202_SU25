// Bài 6: SearchFilter.tsx
import React, { useState } from 'react';

const SearchFilter = () => {
  const items = ['apple', 'banana', 'cherry', 'grape', 'orange'];
  const [query, setQuery] = useState('');

  const filtered = items.filter(item => item.includes(query.toLowerCase()));

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <ul>
        {filtered.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
};

export default SearchFilter;
