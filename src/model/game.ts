import { sourceData } from '../constant/sourceData';
import scoreStep from '../constant/gameConfig';

interface GameRoundInfo {
  name: string,
  isCompleted: boolean,
  answerStorage: Array<RoundAnswerInfo>,
  expectedAnswer: RoundAnswerInfo,
  userAnswers: Set<string>,
}

class Game {
  private score: number;

  private currentRoundId: number;

  private roundsInfo: Array<GameRoundInfo>;

  private isFinish: boolean;

  constructor() {
    this.currentRoundId = 5;
    this.score = 0;
    this.isFinish = false;

    this.roundsInfo = Object.entries(sourceData).map((round) => {
      const [roundName, roundAnswersInfo] = round;

      return {
        name: roundName,
        isCompleted: false,
        answerStorage: roundAnswersInfo,
        expectedAnswer: roundAnswersInfo[Math.floor(Math.random() * roundAnswersInfo.length)],
        userAnswers: new Set(),
      };
    });
  }

  getCurrentScore() {
    return this.score;
  }

  getRoundsNames() {
    return this.roundsInfo.map((roundInfo) => roundInfo.name);
  }

  getRoundAnswerNames() {
    const { answerStorage: roundAnswersInfo } = this.roundsInfo[this.currentRoundId];

    return roundAnswersInfo.map((answer) => answer.name);
  }

  getRoundInfo() {
    return this.roundsInfo[this.currentRoundId];
  }

  checkUserAnswer(userAnswer: string) {
    const { expectedAnswer, isCompleted: roundIsCompleted, userAnswers } = this.roundsInfo[this.currentRoundId];
    const isRightAnswer: boolean = expectedAnswer.name === userAnswer;

    if (isRightAnswer && !roundIsCompleted) {
      this.roundsInfo[this.currentRoundId].isCompleted = true;
      this.score += scoreStep - userAnswers.size;
    } else if (!roundIsCompleted) {
      this.roundsInfo[this.currentRoundId].userAnswers.add(userAnswer);
    }

    return this.roundsInfo[this.currentRoundId].isCompleted;
  }

  getNextRound() {
    this.currentRoundId += 1;

    this.isFinish = this.currentRoundId === this.getRoundsNames().length;

    if (this.isFinish) {
      this.currentRoundId = 5;

      return {
        isFinish: this.isFinish,
      };
    }

    return {
      answersInfo: this.getRoundInfo(),
      roundAnswerNames: this.getRoundAnswerNames(),
    };
  }

  getScore() {
    const roundsCount = this.getRoundsNames().length;

    return {
      userScore: this.score,
      maxScore: scoreStep * roundsCount,
    };
  }
}

export {
  Game, GameRoundInfo,
};
