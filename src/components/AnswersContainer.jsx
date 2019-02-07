import React from 'react';

import RestartButtonContainer from './RestartButtonContainer';

export default function AnswersContainer(props) {

  const allQuestions = props.questions.allQuestions;
  const answers = props.answers;

  const questions = allQuestions.map((question, i) => (
    <div key={i} className={"answers-item " + (i < (allQuestions.length - 1) ? 'border-bottom' : '')}>
      <h5>{ (i + 1) }. { question.question }</h5>
      {(question.inputType === 3)
        ? <p>{ answers[i] }</p> 
        : <p>{ question.options[answers[i]] }</p>
      }
    </div>
  ));

  return (
    <div className="answers-container">
      <p className="text-secondary">Thank you for you participation! Bellow you may read once again the questions from the survey and your answers.</p>
      <RestartButtonContainer onClick={ props.onRestart } />

      <div className="answers-list">
        { questions }
      </div>
    </div>
  );
}
