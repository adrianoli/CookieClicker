import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./CookieClicker.module.css";
import { cookieMovement } from "./cookieMovement";
import { observer } from "mobx-react-lite";
import { useGameScoreStore } from "../hooks/useGameScoreStore";

const CookieClicker = observer(({ cookieDivSize, gameSettingsStore }) => {
  const cookieSize = 150;
  const [movement, setMovement] = useState({});
  const gameScoreStore = useGameScoreStore();

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
  };

  const duration = gameSettingsStore.gameSettings.duration;

  return (
    <motion.div className={styles.container}>
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
      />
    </motion.div>
  );
});

export default CookieClicker;
