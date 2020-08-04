import { sourceData, RoundsInfo } from '../constant/sourceData';

interface GameRoundInfo {
  name: string,
  isCompleted: boolean,
  answerStorage: Array<RoundAnswerInfo>,
  expectedAnswer: RoundAnswerInfo,
  userAnswers: Array<RoundAnswerInfo>
}

class Game {
  private mainStorage: RoundsInfo;

  private score: number;

  private roundInfo: GameRoundInfo;

  constructor() {
    this.mainStorage = sourceData;
    this.score = 0;

    const [firstRoundName, firstRoundAnswersInfo] = Object.entries(this.mainStorage)[0];

    this.roundInfo = {
      name: firstRoundName,
      isCompleted: false,
      answerStorage: firstRoundAnswersInfo,
      expectedAnswer: firstRoundAnswersInfo[Math.floor(Math.random() * firstRoundAnswersInfo.length)],
      userAnswers: [],
    };
  }

  getCurrentScore() {
    return this.score;
  }

  getRoundsNames() {
    return Object.keys(this.mainStorage);
  }

  getRoundAnswerNames() {
    return this.roundInfo.answerStorage.map((answer) => answer.name);
  }

  getRoundInfo() {
    return this.roundInfo;
  }
}

export {
  Game, RoundsInfo, GameRoundInfo,
};
