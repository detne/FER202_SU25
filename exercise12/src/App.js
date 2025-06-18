import React from 'react';

import Counter from './Components/Counter';
import ControlledInput from './Components/ControlledInput';
import ToggleVisibility from './Components/ToggleVisibility';
import TodoList from './Components/TodoList';
import ColorSwitcher from './Components/ColorSwitcher';
import SearchFilter from './Components/SearchFilter';
import DragDropList from './Components/DragDropList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bài tập React useState</h1>

      <section>
        <h2>1. Counter</h2>
        <Counter />
      </section>

      <hr />

      <section>
        <h2>2. Controlled Input</h2>
        <ControlledInput />
      </section>

      <hr />

      <section>
        <h2>3. Toggle Visibility</h2>
        <ToggleVisibility />
      </section>

      <hr />

      <section>
        <h2>4. Todo List</h2>
        <TodoList />
      </section>

      <hr />

      <section>
        <h2>5. Color Switcher</h2>
        <ColorSwitcher />
      </section>

      <hr />

      <section>
        <h2>6. Search Filter</h2>
        <SearchFilter />
      </section>

      <hr />

      <section>
        <h2>7. Drag and Drop List</h2>
        <DragDropList />
      </section>
    </div>
  );
}

export default App;
