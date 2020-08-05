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
    ? `Вы набрали максимум баллов - ${userScore}!`
    : `Вы набрали ${userScore} из ${maxScore}`;

  return (
    <div className="app-body result-window">
      <h1 className="result-window__title">{message}</h1>
      <button type="button" onClick={() => startNewGame()}>Повторим?</button>
    </div>
  );
};

export default ResultWindow;
