import React from 'react';

import './CurrentAnswers.scss';

interface CheckAnswer {
  isCompleted: boolean,
  isRightAnswer: boolean,
}

interface CurrentAnswersProps {
  parentClassName: string,
  roundAnswerNames: Array<string>,
  checkAnswer(answer: string): CheckAnswer,
}

const CurrentAnswers: React.FC<CurrentAnswersProps> = ({ parentClassName, roundAnswerNames, checkAnswer }) => (
  <div className={`${parentClassName}__current-answers`}>
    {roundAnswerNames.map((answer) => (
      <button
        type="button"
        key={answer}
        onClick={({ currentTarget }: React.SyntheticEvent<HTMLButtonElement>) => {
          const { isCompleted, isRightAnswer } = checkAnswer(currentTarget.textContent);

          if (!isCompleted) {
            const btnClass = isRightAnswer ? 'right-answer' : 'false-answer';
            currentTarget.classList.add(btnClass);
          }
        }}
      >
        {answer}
      </button>
    ))}
  </div>
);

export { CurrentAnswers, CheckAnswer };
