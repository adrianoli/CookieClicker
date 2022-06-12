import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./CookieClicker.module.css";
import { cookieMovement } from "./cookieMovement";

const CookieClicker = (props) => {
  const cookieSize = 150;
  const [clicked, setClicked] = useState(0);
  const [movement, setMovement] = useState({});

  useEffect(() => {
    setMovement(cookieMovement(props.cookieDivSize, cookieSize, 5));

    const movementInterval = setInterval(() => {
      const newMovement = cookieMovement(props.cookieDivSize, cookieSize, 5);
      setMovement(newMovement);
    }, 10000);

    return () => clearInterval(movementInterval);
  }, [props.cookieDivSize]);

  const handleOnClick = () => {
    setClicked(clicked + 1);
  };

  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.item}
        animate={{
          x: movement.x,
          y: movement.y
        }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 5 }}
        onClick={handleOnClick}
      />
    </motion.div>
  );
};

export default CookieClicker;
