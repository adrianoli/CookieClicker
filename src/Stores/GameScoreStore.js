import { makeObservable, observable, action } from "mobx";

class GameScoreStore {
  gameScore = {
    points: 0,
    amountAddPoints: 1,
    level: 1
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
  }

  changeAmountAddPoints(amountAddPoints) {
    this.gameScore.amountAddPoints = amountAddPoints;
  }
}

export const gameScoreStore = new GameScoreStore();
