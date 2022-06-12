import React, { createContext, useContext } from "react";
import { gameScoreStore } from "../Stores/GameScoreStore";
import { gameSettingsStore } from "../Stores/GameSettingsStore";

class RootStore {
  constructor() {
    this.gameScoreStore = gameScoreStore;
    this.gameSettingsStore = gameSettingsStore;
  }
}

const rootStoreContext = createContext(null);

export const RootStoreProvider = ({ children }) => {
  const rootStore = new RootStore();
  return (
    <rootStoreContext.Provider value={rootStore}>
      {children}
    </rootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const store = useContext(rootStoreContext);
  if (!store) {
    throw new Error("useRootStore must be used within a StoreProvider");
  }

  return store;
};
