import React, { useEffect } from "react";
import styles from "./ToolsShop.module.css";
import { Button, Tooltip } from "antd";
import machinesData from "../../../public/configs/machines.json";
import { useRootStore } from "../../hooks/useRootStore";
import { observer } from "mobx-react-lite";

const ToolsShop = observer(() => {
  const gameScoreStore = useRootStore().gameScoreStore;

  useEffect(() => {
    const pointInterval = setInterval(() => {
      gameScoreStore.addMorePoints(
        gameScoreStore.gameScore.pointsForMachinePerSecond
      );
    }, 1000);

    return () => clearInterval(pointInterval);
  }, [gameScoreStore.gameScore.pointsForMachinePerSecond]);

  const handleClickMachine = (machineId) => {
    const machine = machinesData.find(
      (machine) => machine.machineId === machineId
    );

    gameScoreStore.payForMachine(machine.cost, machine.addPoints);
  };

  return (
    <div className={styles.shopDiv}>
      <h1 className={styles.shopH1}>Sklep</h1>
      <div className={styles.machineDiv}>
        {machinesData.map((machine) => {
          return (
            <Tooltip
              key={machine.machineName}
              title={`${machine.machineName} Koszt: ${machine.cost} punktów\nLiczba dostarczanych punktów: ${machine.addPoints} na sekundę`}
            >
              <Button
                key={machine.machineId}
                type="primary"
                disabled={gameScoreStore.gameScore.points < machine.cost}
                icon={
                  <img
                    className={styles.machineItemImg}
                    src={machine.imagePath}
                    alt={machine.machineName}
                  />
                }
                className={styles.machineItem}
                onClick={(e) => handleClickMachine(machine.machineId, e)}
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
});

export default ToolsShop;
