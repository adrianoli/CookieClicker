import { makeObservable, observable, action, autorun } from "mobx";

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
      addMorePoints: action,
      changeAmountAddPoints: action,
      payForMachine: action
    });
  }

  addPoints() {
    this.gameScore.points += this.gameScore.amountAddPoints;
    this.afterAddPoints();
  }

  addMorePoints(amountPoints) {
    if (amountPoints) {
      this.gameScore.points += amountPoints;
      this.afterAddPoints();
    }
  }

  afterAddPoints() {
    if (this.gameScore.points >= this.gameScore.nextLevelUpPoints) {
      this.gameScore.level += 1;
      this.gameScore.nextLevelUpPoints *= 2;
    }
  }

  changeAmountAddPoints(amountAddPoints) {
    this.gameScore.amountAddPoints = amountAddPoints;
  }

  payForMachine(points, addMachinePoints) {
    this.gameScore.points -= points;
    this.gameScore.pointsForMachinePerSecond += addMachinePoints;
  }
}

const gameScoreStoreInstance = new GameScoreStore();

autorun(() => {});

export const gameScoreStore = gameScoreStoreInstance;
