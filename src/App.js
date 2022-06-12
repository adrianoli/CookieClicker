import React, { createRef, useState, useEffect } from "react";
import styles from "./styles.css";
import "antd/dist/antd.css";
import CookieClicker from "./CookieClicker/CookieClicker";
// import { gameScoreStore } from "./Stores/GameScoreStore";
import { gameSettingsStore } from "./Stores/GameSettingsStore";
import GameInterface from "./GameInterface/GameInterface";
import { GameScoreStoreProvider } from "./hooks/useGameScoreStore";

export default function App() {
  const [cookieDivSize, setCookieDivSize] = useState({ width: 0, height: 0 });
  const divRef = createRef();

  const setDivSize = () => {
    setCookieDivSize({
      width: divRef.current?.clientWidth,
      height: divRef.current?.clientHeight
    });
  };

  useEffect(() => {
    setDivSize();
  }, []);

  window.onresize = () => {
    setDivSize();
  };

  return (
    <GameScoreStoreProvider>
      <div className={styles.bodyContainer}>
        <div ref={divRef} id="cookieClickerDiv">
          <CookieClicker
            cookieDivSize={cookieDivSize}
            gameSettingsStore={gameSettingsStore}
          />
        </div>
        <div id="gameInterfaceDiv">
          <GameInterface gameSettingsStore={gameSettingsStore} />
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    </GameScoreStoreProvider>
  );
}
