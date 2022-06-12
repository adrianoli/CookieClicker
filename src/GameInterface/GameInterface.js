import React from "react";
import { observer } from "mobx-react-lite";
import UserScore from "./UserScore/UserScore";

const GameInterface = observer(({ gameScoreStore, gameSettingsStore }) => {
  return (
    <>
      <div></div>
      <div>
        <UserScore gameScoreStore={gameScoreStore} />
      </div>
    </>
  );
});

export default GameInterface;
