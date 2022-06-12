import { makeObservable, observable, action } from "mobx";

class GameScoreStore {
  gameScore = {
    points: 0,
    amountAddPoints: 1,
    level: 1,
    pointsForMachinePerSecond: 0,
    nextLevelUpPoints: 10
  };

  constructor() {
    makeObservable(this, {
      gameScore: observable,
      addPoints: action,
      changeAmountAddPoints: action
    });
  }

  addPoints() {
    this.gameScore.points += this.gameScore.amountAddPoints;

    if (this.gameScore.points === this.gameScore.nextLevelUpPoints) {
      this.gameScore.level += 1;
      this.gameScore.nextLevelUpPoints *= 2;
    }
  }

  changeAmountAddPoints(amountAddPoints) {
    this.gameScore.amountAddPoints = amountAddPoints;
  }
}

export const gameScoreStore = new GameScoreStore();
