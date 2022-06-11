import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CookieClicker.module.css";

const CookieClicker = (props) => {
  console.log(props.cookieDivSize);
  const cookieSize = 150;
  const [clicked, setClicked] = useState(0);

  const handleOnClick = () => {
    setClicked(clicked + 1);
  };
  console.log(clicked);

  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.item}
        animate={{
          x: [0, props.cookieDivSize.width - cookieSize],
          y: [0, 200]
        }}
        transition={{ yoyo: Infinity, duration: 2 }}
        onClick={handleOnClick}
      />
    </motion.div>
  );
};

export default CookieClicker;
