import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductSelector from './components/ProductSelector';
import Counter from './components/Counter';

function App() {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(30);

  return (
    <div style={{ padding: '20px' }}>
      <Counter />
      {/* Ví dụ 2: Name & Age */}
      <div style={{ marginBottom: '30px' }}>
        <h3>2. Nhập tên và tuổi</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(`Name changed to: ${e.target.value}`);
          }}
        />
        <p>Hello, {name}, {age} years old</p>
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(Number(e.target.value));
            console.log(`Age changed to: ${e.target.value}`);
          }}
        />
        <p>You are {age} years old</p>
      </div>

      {/* Ví dụ 3: Checkbox */}
      <div style={{ marginBottom: '30px' }}>
        <h3>3. Chọn nhiều sản phẩm (Checkbox)</h3>
        <ProductList />
      </div>

      {/* Ví dụ 4: Radio */}
      <div style={{ marginBottom: '30px' }}>
        <h3>4. Chọn một sản phẩm (Radio)</h3>
        <ProductSelector />
      </div>
    </div>
  );
}

export default App;
