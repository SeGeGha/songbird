import React from 'react';

import './ResultWindow.scss';

interface ResultWindowProps {
  scoreInfo: {
    maxScore: number,
    userScore: number,
  },
  startNewGame(): void,
}

const ResultWindow: React.FC<ResultWindowProps> = ({ scoreInfo, startNewGame }) => {
  const { maxScore, userScore } = scoreInfo;
  const message = (userScore === maxScore)
    ? `Поздравляем! Вы набрали максимум баллов - ${userScore}!`
    : `Вы набрали ${userScore} баллов из ${maxScore}`;

  return (
    <div className="app-body result-window">
      <div className="result-window__message container">
        <h1 className="result-window__title">{message}</h1>
      </div>
      <button type="button" onClick={() => startNewGame()}>Повторим?</button>
    </div>
  );
};

export default ResultWindow;
