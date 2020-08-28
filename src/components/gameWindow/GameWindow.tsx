import React, { useState, useEffect } from 'react';

import InfoWindow from '../infoWindow/InfoWindow';
import CurrentAnswers from './currentAnswers/CurrentAnswers';

import { GameRoundInfo } from '../../model/game';

import imageStub from '../../assets/img/stub.png';

import './GameWindow.scss';

interface GameWindowProps {
  roundAnswerNames: Array<string>,
  roundInfo: GameRoundInfo,
  checkAnswer(userAnswer: string, roundIsCompleted?: boolean): boolean,
  getNextRound(): void,
}

const GameWindow: React.FC<GameWindowProps> = ({
  roundInfo, roundAnswerNames, checkAnswer, getNextRound,
}) => {
  const { expectedAnswer, answerStorage, isCompleted } = roundInfo;
  const { imageSrc, soundSrc, name } = expectedAnswer;
  const [currentAnswerInfo, setCurrentAnswerInfo] = useState<RoundAnswerInfo>(null);
  const [roundIsEnd, setRoundEnd] = useState(false);

  useEffect(() => {
    setCurrentAnswerInfo(null);
    setRoundEnd(false);
  }, [roundInfo, roundAnswerNames]);

  useEffect(() => {
    if (roundIsEnd) {
      const mainAudioPlayes: HTMLAudioElement = document.querySelector('.game-window .info-window audio ');

      mainAudioPlayes.pause();
    }
  }, [roundIsEnd]);

  return (
    <main className="app-body game-window">
      <InfoWindow
        name={isCompleted ? name : '[******]'}
        imageSrc={isCompleted ? imageSrc : imageStub}
        soundSrc={soundSrc}
      />
      <CurrentAnswers
        parentClassName="game-window"
        roundAnswerNames={roundAnswerNames}
        checkAnswer={(userAnswer) => {
          setCurrentAnswerInfo(answerStorage.find((answer) => answer.name === userAnswer));

          if (!roundIsEnd) {
            const isRightAnswer = checkAnswer(userAnswer);

            if (isRightAnswer) {
              setRoundEnd(isRightAnswer);
            }

            return isRightAnswer;
          }

          return true;
        }}
      />
      <InfoWindow
        name={currentAnswerInfo ? currentAnswerInfo.name : ''}
        species={currentAnswerInfo ? currentAnswerInfo.species : ''}
        imageSrc={currentAnswerInfo ? currentAnswerInfo.imageSrc : ''}
        soundSrc={currentAnswerInfo ? currentAnswerInfo.soundSrc : ''}
        description={currentAnswerInfo ? currentAnswerInfo.description : 'Послушайте плеер. Выберите птицу из списка'}
      />
      <button
        type="button"
        className="game-window__btn-next-round"
        disabled={!roundIsEnd}
        onClick={() => getNextRound()}
      >
        Далее
      </button>
    </main>
  );
};

export default GameWindow;
