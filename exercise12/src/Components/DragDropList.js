import React, { useState } from 'react';

const DragDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (index) => {
    if (draggingItem === null || draggingItem === index) return;

    const newItems = [...items];
    const draggedItem = newItems[draggingItem];

    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItem);

    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <ul>
      {items.map((item, idx) => (
        <li
          key={idx}
          draggable
          onDragStart={() => handleDragStart(idx)}
          onDragOver={(e) => {
            e.preventDefault();
            handleDragOver(idx);
          }}
          onDragEnd={handleDragEnd}
          style={{
            padding: '8px',
            margin: '4px',
            backgroundColor: draggingItem === idx ? '#ddd' : '#f2f2f2',
            border: '1px solid #ccc',
            cursor: 'grab',
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DragDropList;
