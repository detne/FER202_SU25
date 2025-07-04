// src/components/Quiz.js
import React, { useState } from 'react';
import { questions } from '../data/questions';
import Question from './Question';
import { Container, Button, Alert } from 'react-bootstrap';

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    let result = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) result += 1;
    });
    setScore(result);
    setShowResult(true);
  };

  return (
    <Container className="mt-4">
      <h2>Quiz</h2>
      {questions.map((q) => (
        <Question
          key={q.id}
          question={q}
          selectedOption={answers[q.id]}
          handleSelect={handleSelect}
        />
      ))}
      <Button onClick={handleSubmit}>Submit</Button>
      {showResult && (
        <Alert variant="success" className="mt-3">
          You scored {score} out of {questions.length}
        </Alert>
      )}
    </Container>
  );
};

export default Quiz;
