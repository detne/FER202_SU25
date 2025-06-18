// Bài 3: ToggleVisibility.tsx
import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && <p>This is the hidden text!</p>}
    </div>
  );
};

export default ToggleVisibility;
