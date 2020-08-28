import React, { useState, useEffect } from 'react';

import Header from '../components/header/Header';
import GameWindow from '../components/gameWindow/GameWindow';
import ResultWindow from '../components/resultWindow/ResultWindow';

import { Game } from '../model/game';

import './App.scss';

const App = () => {
  const [gameScore, setGameScore] = useState(0);
  const [newGame, setNewGame] = useState(new Game());
  const [activeTabId, setActiveTabId] = useState(0);
  const [roundInfo, setRoundInfo] = useState({
    answersInfo: newGame.getRoundInfo(),
    roundAnswerNames: newGame.getRoundAnswerNames(),
  });
  const [isFinishGame, setFinishGame] = useState(false);

  useEffect(() => {
    if (gameScore !== 0) {
      setGameScore(0);
      setActiveTabId(0);
      setRoundInfo({
        answersInfo: newGame.getRoundInfo(),
        roundAnswerNames: newGame.getRoundAnswerNames(),
      });
      setFinishGame(false);
    }
  }, [newGame]);

  const windowContent = isFinishGame
    ? (
      <ResultWindow
        scoreInfo={newGame.getScore()}
        startNewGame={() => {
          setNewGame(new Game());
        }}
      />
    )
    : (
      <GameWindow
        roundInfo={roundInfo.answersInfo}
        roundAnswerNames={roundInfo.roundAnswerNames}
        checkAnswer={(userAnswer) => {
          const roundIsCompleted = newGame.checkUserAnswer(userAnswer);

          if (roundIsCompleted) {
            setGameScore(newGame.getCurrentScore());
          }

          return roundIsCompleted;
        }}
        getNextRound={() => {
          const { isFinish = false, answersInfo, roundAnswerNames } = newGame.getNextRound();

          if (!isFinish) {
            setRoundInfo({ answersInfo, roundAnswerNames });
            setActiveTabId(activeTabId + 1);
          } else {
            setFinishGame(isFinish);
          }
        }}
      />
    );

  return (
    <div className="app-wrapper">
      <Header
        currentGameScore={gameScore}
        tabsNames={newGame.getRoundsNames()}
        activeTabId={activeTabId}
      />
      {windowContent}
    </div>
  );
};

export default App;
