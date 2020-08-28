import React, { useState, useEffect } from 'react';

import soundSender from '../../../model/soundSender';

import './CurrentAnswers.scss';

interface CurrentAnswersProps {
  parentClassName: string,
  roundAnswerNames: Array<string>,
  checkAnswer(answer: string): boolean,
}

const CurrentAnswers: React.FC<CurrentAnswersProps> = ({ parentClassName, roundAnswerNames, checkAnswer }) => {
  const [roundIsCompleted, setRoundIsCompleted] = useState(false);

  useEffect(() => {
    setRoundIsCompleted(false);
  }, [roundAnswerNames]);

  return (
    <div className={`${parentClassName}__current-answers`}>
      {roundAnswerNames.map((answer) => (
        <button
          type="button"
          key={answer}
          onClick={({ currentTarget }: React.SyntheticEvent<HTMLButtonElement>) => {
            const isRightAnswer = checkAnswer(currentTarget.textContent);

            if (!roundIsCompleted) {
              const btnClass: string = isRightAnswer ? 'right-answer' : 'false-answer';

              soundSender.getDefaultSound(btnClass);

              currentTarget.classList.add(btnClass);

              if (isRightAnswer) {
                setRoundIsCompleted(true);
              }
            }
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default CurrentAnswers;
