import React, { useState } from 'react';

import InfoWindow from '../infoWindow/InfoWindow';
import { CurrentAnswers, CheckAnswer } from './currentAnswers/CurrentAnswers';

import { GameRoundInfo } from '../../model/game';

import './GameWindow.scss';

interface GameWindowProps {
  roundAnswerNames: Array<string>,
  roundInfo: GameRoundInfo,
}

const GameWindow: React.FC<GameWindowProps> = ({ roundInfo, roundAnswerNames }) => {
  const { expectedAnswer, answerStorage, isCompleted } = roundInfo;

  const [currentAnswerInfo, setCurrentAnswerInfo] = useState<RoundAnswerInfo>(null);

  function checkAnswer(userAnswer: string): CheckAnswer {
    setCurrentAnswerInfo(answerStorage.find((answer) => answer.name === userAnswer));

    return {
      isCompleted,
      isRightAnswer: userAnswer === expectedAnswer.name,
    };
  }

  const { imageSrc, soundSrc, name } = expectedAnswer;
  return (
    <main className="app-body game-window">
      <InfoWindow
        name={name}
        imageSrc={imageSrc}
        soundSrc={soundSrc}
      />
      <CurrentAnswers
        parentClassName="game-window"
        roundAnswerNames={roundAnswerNames}
        checkAnswer={(answer) => checkAnswer(answer)}
      />
      <InfoWindow
        name={currentAnswerInfo ? currentAnswerInfo.name : ''}
        imageSrc={currentAnswerInfo ? currentAnswerInfo.imageSrc : ''}
        soundSrc={currentAnswerInfo ? currentAnswerInfo.soundSrc : ''}
        description={currentAnswerInfo ? currentAnswerInfo.description : 'Мы ждем Вашего ответа!'}
      />
    </main>
  );
};

export default GameWindow;
