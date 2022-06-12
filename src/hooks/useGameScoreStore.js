import React, { createContext, useContext } from "react";
import { gameScoreStore } from "../Stores/GameScoreStore";
import { useLocalStore } from "mobx-react-lite";

const gameScoreStoreContext = createContext(null);

export const GameScoreStoreProvider = ({ children }) => {
  return (
    <gameScoreStoreContext.Provider value={gameScoreStore}>
      {children}
    </gameScoreStoreContext.Provider>
  );
};

export const useGameScoreStore = () => {
  const store = useContext(gameScoreStoreContext);
  if (!store) {
    throw new Error("useGameScoreStore must be used within a StoreProvider");
  }

  return store;
};
