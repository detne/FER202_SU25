import React, { useState, useContext } from 'react';
import { QuizContext } from './QuizContext';

const QuizForm = () => {
  const { addQuestion } = useContext(QuizContext);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !correctAnswer || answers.includes('')) {
      alert('Please fill all fields!');
      return;
    }
    addQuestion({ question, answers, correctAnswer });
    setQuestion('');
    setAnswers(['', '', '']);
    setCorrectAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>Add a new question</h4>
      <div className="form-group mb-2">
        <label>Question</label>
        <input type="text" className="form-control" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      {answers.map((ans, index) => (
        <div className="form-group mb-2" key={index}>
          <label>Answer {index + 1}</label>
          <input type="text" className="form-control" value={ans} onChange={(e) => handleAnswerChange(index, e.target.value)} />
        </div>
      ))}
      <div className="form-group mb-2">
        <label>Correct Answer</label>
        <input type="text" className="form-control" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Add Question</button>
    </form>
  );
};

export default QuizForm;
