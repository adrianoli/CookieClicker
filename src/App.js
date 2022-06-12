import React, { createRef, useState, useEffect } from "react";
import styles from "./styles.css";
import "antd/dist/antd.css";
import CookieClicker from "./CookieClicker/CookieClicker";
import GameInterface from "./GameInterface/GameInterface";
import { RootStoreProvider } from "./hooks/useRootStore";

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
    <RootStoreProvider>
      <div className={styles.bodyContainer}>
        <div ref={divRef} id="cookieClickerDiv">
          <CookieClicker cookieDivSize={cookieDivSize} />
        </div>
        <div id="gameInterfaceDiv">
          <GameInterface />
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    </RootStoreProvider>
  );
}
