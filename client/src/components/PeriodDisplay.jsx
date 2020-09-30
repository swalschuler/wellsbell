import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import styles from "./PeriodDisplay.module.css";
import bellSfx from "../sounds/bell.mp3";

const PeriodDisplay = ({ period, periodInfo }) => {
  const [periodRef, setPeriodRef] = useState();
  const [play] = useSound(bellSfx);

  useEffect(() => {
    play();
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
      <h2 className={styles.periodInfo}>{periodInfo}</h2>
    </div>
  );
};

export default PeriodDisplay;
