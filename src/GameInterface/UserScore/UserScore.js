import React from "react";
import { observer } from "mobx-react-lite";
import { useGameScoreStore } from "../../hooks/useGameScoreStore";

const UserScore = observer(() => {
  const gameScoreStore = useGameScoreStore();

  return <p>{gameScoreStore.gameScore.points}</p>;
});

export default UserScore;
