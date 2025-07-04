// src/components/Question.js
import React from 'react';
import { Card, Form } from 'react-bootstrap';

const Question = ({ question, selectedOption, handleSelect }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{question.question}</Card.Title>
        <Form>
          {question.options.map((opt, idx) => (
            <Form.Check
              key={idx}
              type="radio"
              label={opt}
              name={`question-${question.id}`}
              value={opt}
              checked={selectedOption === opt}
              onChange={() => handleSelect(question.id, opt)}
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Question;
