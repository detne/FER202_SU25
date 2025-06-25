import React, { useContext, useState } from 'react';
import { QuizContext } from './QuizContext';

const QuizList = () => {
  const { questions } = useContext(QuizContext);
  const [userAnswers, setUserAnswers] = useState({});

  const handleSelect = (qIndex, answer) => {
    setUserAnswers({ ...userAnswers, [qIndex]: answer });
  };

  return (
    <div>
      {questions.map((q, index) => (
        <div key={index} className="card my-3">
          <div className="card-body">
            <h5>{q.question}</h5>
            {q.answers.map((ans, aIndex) => (
              <div key={aIndex} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${index}`}
                  value={ans}
                  onChange={() => handleSelect(index, ans)}
                  checked={userAnswers[index] === ans}
                />
                <label className="form-check-label">{ans}</label>
              </div>
            ))}
            {userAnswers[index] && (
              <div className="mt-2">
                {userAnswers[index] === q.correctAnswer ? (
                  <span className="text-success">✅ Correct!</span>
                ) : (
                  <span className="text-danger">❌ Incorrect. Correct is: {q.correctAnswer}</span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
