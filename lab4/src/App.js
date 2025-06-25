import React from 'react';
import { QuizProvider } from './components/QuizContext';
import QuizForm from './components/QuizForm';
import QuizList from './components/QuizList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <QuizProvider>
      <div className="container mt-4">
        <h2 className="text-center mb-4">React Quiz App</h2>
        <QuizForm />
        <QuizList />
      </div>
    </QuizProvider>
  );
}

export default App;
