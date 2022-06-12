import React from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../hooks/useRootStore";

const UserScore = observer(() => {
  const gameScoreStore = useRootStore().gameScoreStore;

  return <p>{gameScoreStore.gameScore.points}</p>;
});

export default UserScore;
