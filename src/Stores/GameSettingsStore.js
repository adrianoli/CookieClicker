import { makeObservable, observable, action } from "mobx";

class GameSettingsStore {
  gameSettings = {
    numberOfFrammes: 5,
    duration: 5,
    millisecondsAfterFindNewPath: 10000,
    nextLevelChangeDifficulty: 2
  };

  constructor() {
    makeObservable(this, {
      gameSettings: observable,
      changeDifficulty: action
    });
  }

  changeDifficulty(actualLevel) {
    if (actualLevel < this.gameSettings.nextLevelChangeDifficulty) {
      return;
    }

    if (this.gameSettings.duration > 1) {
      this.gameSettings.duration -= 1;
      this.gameSettings.nextLevelChangeDifficulty = actualLevel + 1;
      return;
    }

    this.gameSettings.nextLevelChangeDifficulty = actualLevel + 1;
    this.gameSettings.numberOfFrammes += 1;
  }
}

export const gameSettingsStore = new GameSettingsStore();
