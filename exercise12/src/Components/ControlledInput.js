// Bài 2: ControlledInput.tsx
import React, { useState } from 'react';

const ControlledInput = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
    </div>
  );
};

export default ControlledInput;
