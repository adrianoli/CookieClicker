import React from "react";
import { observer } from "mobx-react-lite";

const GameInterface = observer(({ gameScoreStore, gameSettingsStore }) => {
  return (
    <div>
      <div></div>
      <div>
        <p>{gameScoreStore.gameScore.points}</p>
      </div>
    </div>
  );
});

export default GameInterface;
