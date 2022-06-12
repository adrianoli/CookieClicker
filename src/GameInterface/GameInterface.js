import React from "react";
import ToolsShop from "./ToolsShop/ToolsShop";
import UserScore from "./UserScore/UserScore";

const GameInterface = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "70vh" }}>
        <ToolsShop />
      </div>
      <div style={{ height: "30vh" }}>
        <UserScore />
      </div>
    </div>
  );
};

export default GameInterface;
