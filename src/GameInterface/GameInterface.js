import React from "react";
import ToolsShop from "./ToolsShop/ToolsShop";
import UserScore from "./UserScore/UserScore";
import styles from "./GameInterface.module.css";

const GameInterface = () => {
  return (
    <div className={styles.mainInterface}>
      <div className={styles.shopDiv}>
        <ToolsShop />
      </div>
      <div className={styles.userScoreDiv}>
        <UserScore />
      </div>
    </div>
  );
};

export default GameInterface;
