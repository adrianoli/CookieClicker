import { makeObservable, observable } from "mobx";

class GameSettingsStore {
  gameSettings = {
    numberOfFrammes: 5,
    duration: 10,
    millisecondsAfterFindNewPath: 10000
  };

  constructor() {
    makeObservable(this, {
      gameSettings: observable
    });
  }
}

export const gameSettingsStore = new GameSettingsStore();
