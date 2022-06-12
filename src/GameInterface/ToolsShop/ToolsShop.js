import React from "react";
import styles from "./ToolsShop.module.css";
import { Button, Tooltip } from "antd";
import machinesData from "../../../public/configs/machines.json";

const ToolsShop = () => {
  console.log(machinesData[0]);

  return (
    <div className={styles.shopDiv}>
      <h1 className={styles.shopH1}>Sklep</h1>
      <div className={styles.machineDiv}>
        {machinesData.map((machine) => {
          return (
            <Button
              key={machine.machineId}
              icon={
                <img
                  className={styles.machineItemImg}
                  src={machine.imagePath}
                  alt={machine.machineName}
                />
              }
              className={styles.machineItem}
              type="primary"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToolsShop;
