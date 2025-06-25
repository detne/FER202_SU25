import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

const initialQuestions = [
  {
    question: 'What is ReactJS?',
    answers: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system'
    ],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript'
    ],
    correctAnswer: 'A syntax extension for JavaScript'
  }
];

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(initialQuestions);

  const addQuestion = (questionObj) => {
    setQuestions(prev => [...prev, questionObj]);
  };

  return (
    <QuizContext.Provider value={{ questions, addQuestion }}>
      {children}
    </QuizContext.Provider>
  );
};
