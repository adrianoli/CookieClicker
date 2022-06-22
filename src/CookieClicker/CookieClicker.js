import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./CookieClicker.module.css";
import { cookieMovement } from "./cookieMovement";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";

const CookieClicker = observer(({ cookieDivSize }) => {
  const cookieSize = 150;
  const [movement, setMovement] = useState({});
  const rootStore = useRootStore();
  const gameScoreStore = rootStore.gameScoreStore;
  const gameSettingsStore = rootStore.gameSettingsStore;

  useEffect(() => {
    const numberOfFrammes = gameSettingsStore.gameSettings.numberOfFrammes;
    const millisecondsNewPathGenerate =
      gameSettingsStore.gameSettings.millisecondsAfterFindNewPath;
    setMovement(cookieMovement(cookieDivSize, cookieSize, numberOfFrammes));

    const movementInterval = setInterval(() => {
      const numberOfFrammes = gameSettingsStore.gameSettings.numberOfFrammes;
      const newMovement = cookieMovement(
        cookieDivSize,
        cookieSize,
        numberOfFrammes
      );
      setMovement(newMovement);
    }, millisecondsNewPathGenerate);

    return () => clearInterval(movementInterval);
  }, [cookieDivSize]);

  const handleOnClick = () => {
    gameScoreStore.addPoints();
    gameSettingsStore.changeDifficulty(gameScoreStore.gameScore.level);
  };

  const duration = gameSettingsStore.gameSettings.duration;
  const handlePreventMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className={styles.container}
      onMouseDown={handlePreventMouseDown}
    >
      <motion.div
        className={styles.item}
        animate={{
          x: movement.x,
          y: movement.y
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: duration
        }}
        onClick={handleOnClick}
      >
        <img
          className={styles.cookieImg}
          src="https://rawcdn.githack.com/adrianoli/CookieClicker/6ef45597a1c706df9214aab1a02c57502ad63cb4/public/img/cookie.png"
          alt="ciastko"
        />
      </motion.div>
    </motion.div>
  );
});

export default CookieClicker;
