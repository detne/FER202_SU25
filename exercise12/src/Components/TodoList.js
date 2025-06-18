import React, { useState } from 'react';

const TodoList = () => {
  // State lưu danh sách công việc (todo)
  const [todos, setTodos] = useState([]);

  // State lưu giá trị đang nhập ở ô input
  const [newTodo, setNewTodo] = useState('');

  // Hàm thêm công việc mới vào danh sách
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      // Thêm công việc mới vào mảng todos
      setTodos([...todos, newTodo]);
      // Xoá nội dung ô input sau khi thêm
      setNewTodo('');
    }
  };

  // Hàm xoá một công việc theo vị trí (index)
  const deleteTodo = (index) => {
    const updatedTodos = [...todos]; // Sao chép danh sách hiện tại
    updatedTodos.splice(index, 1);   // Xoá phần tử tại vị trí index
    setTodos(updatedTodos);         // Cập nhật danh sách
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Todo List</h2>

      {/* Ô input để nhập công việc mới */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nhập việc cần làm"
      />

      {/* Nút thêm công việc */}
      <button onClick={addTodo}>Thêm</button>

      {/* Danh sách công việc */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* Nút xoá công việc */}
            <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
