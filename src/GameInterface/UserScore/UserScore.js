import React from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../hooks/useRootStore";
import styles from "./UserScore.module.css";

const UserScore = observer(() => {
  const gameScoreStore = useRootStore().gameScoreStore;

  return (
    <div className={styles.scoreDiv}>
      <h1 className={styles.scoreH1}>Wyniki gracza</h1>
      <p>Poziom: {gameScoreStore.gameScore.level}</p>
      <p>Ilość punktów: {gameScoreStore.gameScore.points}</p>
      <p>
        Ilość punktów na sek. z maszyn:{" "}
        {gameScoreStore.gameScore.pointsForMachinePerSecond}
      </p>
    </div>
  );
});

export default UserScore;
