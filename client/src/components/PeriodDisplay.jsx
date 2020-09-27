import React, { useEffect, useState } from "react";
import styles from "./PeriodDisplay.module.css";

const PeriodDisplay = ({ period }) => {
  const [periodRef, setPeriodRef] = useState();

  useEffect(() => {
    if (periodRef) {
      // eslint-disable-next-line
      const shine = new Shine(periodRef);
      const handleMouseMove = (event) => {
        shine.light.position.x = event.clientX;
        shine.light.position.y = event.clientY;
        shine.config.opacity = 0.12;
        shine.config.opacityPow = 2;
        shine.draw();
      };
      window.addEventListener("mousemove", handleMouseMove, false);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        shine.destroy();
      };
    }
  }, [periodRef, period]);

  return (
    <div className={styles.periodContainer}>
      <h1 ref={setPeriodRef} className={styles.period}>
        {period}
      </h1>
    </div>
  );
};

export default PeriodDisplay;
