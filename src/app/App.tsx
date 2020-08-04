import React, { useState } from 'react';

import Header from '../components/header/Header';
import GameWindow from '../components/gameWindow/GameWindow';

import { Game, GameRoundInfo } from '../model/game';

import './App.scss';

interface GameStructure {
  getCurrentScore(): number,
  getRoundsNames(): Array<string>,
  getRoundAnswerNames(): Array<string>,
  getRoundInfo(): GameRoundInfo,
}

const App = () => {
  const newGame: GameStructure = new Game();

  const [gameScore, setGameScore] = useState(newGame.getCurrentScore());

  const [roundAnswerNames, setRoundAnswerNames] = useState(newGame.getRoundAnswerNames());

  const [roundInfo, setRoundInfo] = useState(newGame.getRoundInfo());

  return (
    <div className="app-wrapper">
      <Header
        currentGameScore={gameScore}
        tabsNames={newGame.getRoundsNames()}
      />
      <GameWindow
        roundInfo={roundInfo}
        roundAnswerNames={roundAnswerNames}
      />
    </div>
  );
};

export default App;
